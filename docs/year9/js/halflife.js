/* Year 9 half-life animation.
   Usage: <div class="hl-sim" data-n="100" data-halflife="5730" data-unit="years"
               data-parent="carbon-14" data-daughter="nitrogen-14"></div>
   Each click of "Wait one half-life" gives every undecayed atom a 50% chance of decaying,
   so students see that decay is random for one atom but predictable for many.
   Nothing is stored or sent anywhere. */
(function () {
  var MAX_STEPS = 8;
  var NS = "http://www.w3.org/2000/svg";

  function el(tag, attrs, parent) {
    var e = tag.indexOf("svg:") === 0 ? document.createElementNS(NS, tag.slice(4)) : document.createElement(tag);
    for (var k in attrs || {}) {
      if (k === "text") e.textContent = attrs[k];
      else e.setAttribute(k, attrs[k]);
    }
    if (parent) parent.appendChild(e);
    return e;
  }

  function fmt(n) {
    var r = Math.round(n);
    // Australian style: no space in 4-digit numbers (5730), a thin space from 10 000 up.
    return r < 10000 ? String(r) : String(r).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function init(box) {
    if (box.dataset.ready) return;
    box.dataset.ready = "1";
    var N = Number(box.dataset.n || 100);
    var hl = Number(box.dataset.halflife || 5730);
    var unit = box.dataset.unit || "years";
    var parentName = box.dataset.parent || "carbon-14";
    var daughterName = box.dataset.daughter || "nitrogen-14";

    var state = { step: 0, left: N, history: [N], alive: [], timer: null, busy: false };

    // Legend
    var legend = el("div", { class: "hl-legend" }, box);
    legend.innerHTML =
      '<span><i class="hl-dot"></i> ' + parentName + " (radioactive)</span>" +
      '<span><i class="hl-dot hl-gone"></i> ' + daughterName + " (stable, after decay)</span>";

    var wrap = el("div", { class: "hl-wrap" }, box);

    // Atom grid
    var grid = el("div", { class: "hl-grid", role: "img", "aria-label": N + " atoms" }, wrap);
    var dots = [];
    for (var i = 0; i < N; i++) dots.push(el("i", { class: "hl-dot" }, grid));

    // Graph
    var W = 320, H = 220, L = 44, R = 12, T = 12, B = 40;
    var svg = el("svg:svg", { viewBox: "0 0 " + W + " " + H, class: "hl-graph", role: "img",
      "aria-label": "Graph of " + parentName + " atoms left against number of half-lives" }, wrap);
    function x(t) { return L + (t / MAX_STEPS) * (W - L - R); }
    function y(v) { return T + (1 - v / N) * (H - T - B); }
    // axes
    el("svg:line", { x1: L, y1: T, x2: L, y2: H - B, class: "hl-axis" }, svg);
    el("svg:line", { x1: L, y1: H - B, x2: W - R, y2: H - B, class: "hl-axis" }, svg);
    for (var t = 0; t <= MAX_STEPS; t++) {
      el("svg:text", { x: x(t), y: H - B + 14, class: "hl-tick", "text-anchor": "middle", text: t }, svg);
    }
    [0, 0.25, 0.5, 0.75, 1].forEach(function (f) {
      el("svg:line", { x1: L, y1: y(f * N), x2: W - R, y2: y(f * N), class: "hl-gridline" }, svg);
      el("svg:text", { x: L - 6, y: y(f * N) + 4, class: "hl-tick", "text-anchor": "end", text: fmt(f * N) }, svg);
    });
    el("svg:text", { x: (L + W - R) / 2, y: H - 6, class: "hl-label", "text-anchor": "middle",
      text: "Half-lives passed (1 half-life = " + fmt(hl) + " " + unit + ")" }, svg);
    el("svg:text", { x: 12, y: (T + H - B) / 2, class: "hl-label", "text-anchor": "middle",
      transform: "rotate(-90 12 " + (T + H - B) / 2 + ")", text: "Atoms left" }, svg);
    // ideal curve (dashed)
    var d = "";
    for (var s = 0; s <= MAX_STEPS * 10; s++) {
      var tt = s / 10;
      d += (s ? "L" : "M") + x(tt).toFixed(1) + " " + y(N / Math.pow(2, tt)).toFixed(1);
    }
    el("svg:path", { d: d, class: "hl-ideal" }, svg);
    var path = el("svg:path", { d: "", class: "hl-actual" }, svg);
    var pts = el("svg:g", {}, svg);

    // Readout and buttons
    var out = el("div", { class: "hl-out", "aria-live": "polite" }, box);
    var row = el("div", { class: "hl-row" }, box);
    var bStep = el("button", { type: "button", class: "md-button md-button--primary", text: "Wait one half-life" }, row);
    var bPlay = el("button", { type: "button", class: "md-button", text: "Play" }, row);
    var bReset = el("button", { type: "button", class: "md-button", text: "Reset" }, row);

    function draw() {
      var dd = "";
      pts.innerHTML = "";
      state.history.forEach(function (v, i2) {
        dd += (i2 ? "L" : "M") + x(i2) + " " + y(v);
        el("svg:circle", { cx: x(i2), cy: y(v), r: 3.5, class: "hl-pt" }, pts);
      });
      path.setAttribute("d", dd);
      var pct = (100 * state.left / N).toFixed(1).replace(/\.0$/, "");
      out.innerHTML = "<strong>Time passed:</strong> " + fmt(state.step * hl) + " " + unit +
        " (" + state.step + " half-li" + (state.step === 1 ? "fe" : "ves") + ")" +
        " &nbsp;·&nbsp; <strong>" + parentName + " left:</strong> " + state.left + " of " + N + " (" + pct + "%)" +
        " &nbsp;·&nbsp; <strong>Expected:</strong> " + fmt(N / Math.pow(2, state.step)) ;
      bStep.disabled = state.busy || state.step >= MAX_STEPS;
    }

    function reset() {
      stop();
      state.step = 0; state.left = N; state.history = [N]; state.busy = false;
      state.alive = dots.map(function () { return true; });
      dots.forEach(function (dt) { dt.className = "hl-dot"; });
      draw();
    }

    function stepOnce(done) {
      if (state.step >= MAX_STEPS || state.busy) { if (done) done(); return; }
      state.busy = true;
      var decaying = [];
      state.alive.forEach(function (a, i3) { if (a && Math.random() < 0.5) decaying.push(i3); });
      decaying.sort(function () { return Math.random() - 0.5; });
      var gap = decaying.length ? Math.min(25, 700 / decaying.length) : 0;
      decaying.forEach(function (i4, k) {
        state.alive[i4] = false;
        setTimeout(function () { dots[i4].className = "hl-dot hl-gone hl-pop"; }, k * gap);
      });
      setTimeout(function () {
        state.step++;
        state.left -= decaying.length;
        state.history.push(state.left);
        state.busy = false;
        draw();
        if (done) done();
      }, decaying.length * gap + 150);
      draw();
    }

    function stop() {
      if (state.timer) { clearTimeout(state.timer); state.timer = null; }
      bPlay.textContent = "Play";
    }

    function play() {
      if (state.timer || state.step >= MAX_STEPS) { stop(); return; }
      bPlay.textContent = "Pause";
      (function loop() {
        stepOnce(function () {
          if (state.step >= MAX_STEPS || !bPlay.textContent.match(/Pause/)) { stop(); return; }
          state.timer = setTimeout(loop, 700);
        });
      })();
      state.timer = state.timer || 1;
    }

    bStep.addEventListener("click", function () { stop(); stepOnce(); });
    bPlay.addEventListener("click", play);
    bReset.addEventListener("click", reset);
    reset();
  }

  function initAll() { document.querySelectorAll(".hl-sim").forEach(init); }
  if (typeof document$ !== "undefined") document$.subscribe(initAll);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initAll);
  else initAll();
})();
