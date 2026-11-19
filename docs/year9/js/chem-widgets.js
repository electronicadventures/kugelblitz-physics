/* Year 9 chemistry revision widgets (kugelblitz.me/year9). Runs in the browser; nothing is stored or sent.
   1. Shell builder:      <div class="shell-builder" data-z="12"></div>
      Pick an element (1–20), add electrons one at a time; shows the configuration, valence electrons, group and period.
   2. Half-life reader:   <div class="hl-reader"></div>
      Real radioisotopes (real half-lives, 100 g start). Drag the time slider to read the mass left; show the half-life
      guide lines; the "mystery isotope" asks the student to read the half-life from the graph.
   3. Alpha decay stepper: <div class="alpha-stepper"></div>
      Pick a real alpha emitter, work out the daughter's mass number and atomic number, then name it.
   Each widget works on its own; a page can use any of them. */
(function () {
  var NS = "http://www.w3.org/2000/svg";
  function el(tag, attrs, parent) {
    var e = tag.indexOf("svg:") === 0 ? document.createElementNS(NS, tag.slice(4)) : document.createElement(tag);
    for (var k in attrs || {}) {
      if (k === "text") e.textContent = attrs[k];
      else if (k === "html") e.innerHTML = attrs[k];
      else e.setAttribute(k, attrs[k]);
    }
    if (parent) parent.appendChild(e);
    return e;
  }
  function btn(label, parent) { return el("button", { type: "button", class: "md-button", text: label }, parent); }

  // ---------- data: the first 20 elements (mass number of the most common isotope) ----------
  var EL = [null,
    ["H", "Hydrogen", 1, 1, 1], ["He", "Helium", 4, 18, 1],
    ["Li", "Lithium", 7, 1, 2], ["Be", "Beryllium", 9, 2, 2], ["B", "Boron", 11, 13, 2], ["C", "Carbon", 12, 14, 2],
    ["N", "Nitrogen", 14, 15, 2], ["O", "Oxygen", 16, 16, 2], ["F", "Fluorine", 19, 17, 2], ["Ne", "Neon", 20, 18, 2],
    ["Na", "Sodium", 23, 1, 3], ["Mg", "Magnesium", 24, 2, 3], ["Al", "Aluminium", 27, 13, 3], ["Si", "Silicon", 28, 14, 3],
    ["P", "Phosphorus", 31, 15, 3], ["S", "Sulfur", 32, 16, 3], ["Cl", "Chlorine", 35, 17, 3], ["Ar", "Argon", 40, 18, 3],
    ["K", "Potassium", 39, 1, 4], ["Ca", "Calcium", 40, 2, 4]];
  var CAP = [2, 8, 8, 2];   // shell capacities used in Year 9 for the first 20 elements

  function config(n) {
    var out = [], left = n;
    for (var i = 0; i < CAP.length && left > 0; i++) { var t = Math.min(CAP[i], left); out.push(t); left -= t; }
    return out;
  }

  // ---------- 1. shell builder ----------
  function initShell(box) {
    if (box.dataset.ready) return; box.dataset.ready = "1";
    var z = Math.min(20, Math.max(1, Number(box.dataset.z || 12))), e = 0;
    var top = el("div", { class: "cw-row" }, box);
    el("label", { text: "Element: ", for: "" }, top);
    var sel = el("select", { "aria-label": "Choose an element" }, top);
    for (var i = 1; i <= 20; i++) el("option", { value: i, text: i + " " + EL[i][1] + " (" + EL[i][0] + ")" }, sel);
    sel.value = z;
    var wrap = el("div", { class: "cw-wrap" }, box);
    var svg = el("svg:svg", { viewBox: "0 0 260 260", class: "sb-svg", role: "img" }, wrap);
    var side = el("div", { class: "cw-side" }, wrap);
    var out = el("div", { class: "cw-out", "aria-live": "polite" }, side);
    var row = el("div", { class: "cw-row" }, side);
    var bAdd = btn("+ Add electron", row), bRem = btn("− Remove", row), bFill = btn("Fill", row), bReset = btn("Reset", row);

    function draw() {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      var c = config(e), radii = [42, 68, 94, 120];
      var shells = config(z).length;
      for (var s = 0; s < shells; s++) el("svg:circle", { cx: 130, cy: 130, r: radii[s], class: "sb-ring" }, svg);
      el("svg:circle", { cx: 130, cy: 130, r: 26, class: "sb-nuc" }, svg);
      el("svg:text", { x: 130, y: 128, class: "sb-sym", "text-anchor": "middle", text: EL[z][0] }, svg);
      el("svg:text", { x: 130, y: 143, class: "sb-p", "text-anchor": "middle", text: z + "p " + (EL[z][2] - z) + "n" }, svg);
      for (s = 0; s < c.length; s++) {
        for (var k = 0; k < c[s]; k++) {
          // evenly spaced: 2 places on shell 1, 8 places on the outer shells
          var slots = s === 0 ? 2 : 8, a = (k / slots) * 2 * Math.PI - Math.PI / 2 + (s === 0 ? 0 : Math.PI / 8);
          el("svg:circle", { cx: 130 + radii[s] * Math.cos(a), cy: 130 + radii[s] * Math.sin(a), r: 6.5, class: "sb-e" }, svg);
        }
      }
      svg.setAttribute("aria-label", EL[z][1] + " atom: " + z + " protons in the nucleus and " + e + " electrons in shells " + (c.join(", ") || "none"));
      var full = config(z), valence = full[full.length - 1], g = EL[z][3], p = EL[z][4];
      var msg = "<p><strong>" + EL[z][1] + "</strong>: atomic number " + z + ", so <strong>" + z + " protons</strong>.</p>" +
        "<p>Electrons placed: <strong>" + e + " of " + z + "</strong><br>Configuration so far: <strong>" + (c.join(", ") || "–") + "</strong></p>";
      if (e === z) {
        msg += "<p class='cw-ok'>Neutral atom complete: <strong>" + full.join(", ") + "</strong>.</p><ul>" +
          "<li><strong>" + full.length + " shells</strong> → Period " + p + "</li>" +
          "<li><strong>" + valence + " valence (outer-shell) electron" + (valence === 1 ? "" : "s") + "</strong> → Group " + g + "</li>" +
          "<li>" + reactivity(z, g, valence) + "</li></ul>";
      } else if (e < z) {
        var next = config(e + 1).length;
        msg += "<p>The next electron goes into shell " + next + (next > 1 && config(e).length < next ? " (shell " + (next - 1) + " is full)" : "") + ".</p>";
      }
      out.innerHTML = msg;
      bAdd.disabled = e >= z; bRem.disabled = e <= 0; bFill.disabled = e >= z;
    }
    function reactivity(z, g, v) {
      if (z === 1) return "Hydrogen is a special case: 1 electron, a reactive non-metal.";
      if (g === 18) return "Full outer shell, so it does not need to gain or lose electrons: <strong>unreactive</strong> (a noble gas).";
      if (g === 1) return "Only 1 outer electron, which it loses easily: a <strong>very reactive</strong> metal.";
      if (g === 17) return "Needs only 1 more electron to fill its outer shell, which it gains easily: a <strong>very reactive</strong> non-metal.";
      if (g === 2) return "2 outer electrons to lose: a reactive metal, but less reactive than Group 1 in the same period.";
      return "Further from a full outer shell, so it is less reactive than Groups 1 and 17.";
    }
    sel.addEventListener("change", function () { z = Number(sel.value); e = 0; draw(); });
    bAdd.addEventListener("click", function () { if (e < z) { e++; draw(); } });
    bRem.addEventListener("click", function () { if (e > 0) { e--; draw(); } });
    bFill.addEventListener("click", function () { e = z; draw(); });
    bReset.addEventListener("click", function () { e = 0; draw(); });
    draw();
  }

  // ---------- 2. half-life graph reader ----------
  var ISO = [
    { name: "Technetium-99m", hl: 6.0, unit: "hours", use: "used in medical scans" },
    { name: "Radon-222", hl: 3.8, unit: "days", use: "a radioactive gas from rocks and soil" },
    { name: "Phosphorus-32", hl: 14.3, unit: "days", use: "used in medicine and plant research" },
    { name: "Polonium-210", hl: 138, unit: "days", use: "an alpha emitter" },
    { name: "Strontium-90", hl: 28.8, unit: "years", use: "found in nuclear waste" },
    { name: "Mystery isotope", hl: null, unit: "days", use: "read its half-life from the graph" }];
  function fmt(x) { return Math.abs(x) >= 100 ? String(Math.round(x)) : String(Math.round(x * 10) / 10); }

  function initHl(box) {
    if (box.dataset.ready) return; box.dataset.ready = "1";
    var top = el("div", { class: "cw-row" }, box);
    el("label", { text: "Radioisotope: " }, top);
    var sel = el("select", { "aria-label": "Choose a radioisotope" }, top);
    ISO.forEach(function (o, i) { el("option", { value: i, text: o.name }, sel); });
    var note = el("p", { class: "cw-note" }, box);
    var svg = el("svg:svg", { viewBox: "0 0 420 260", class: "hr-svg", role: "img" }, box);
    var row = el("div", { class: "cw-row" }, box);
    el("label", { text: "Time: " }, row);
    var slider = el("input", { type: "range", min: 0, max: 1000, value: 0, "aria-label": "Time" }, row);
    var bGuide = btn("Show half-lives", row);
    var out = el("div", { class: "cw-out", "aria-live": "polite" }, box);
    var quiz = el("div", { class: "cw-row" }, box);
    var guides = false, iso, hl, tmax;
    var X0 = 50, X1 = 405, Y0 = 220, Y1 = 15, M0 = 100;
    function xs(t) { return X0 + (X1 - X0) * t / tmax; }
    function ys(m) { return Y0 - (Y0 - Y1) * m / M0; }

    function setup() {
      iso = ISO[Number(sel.value)];
      hl = iso.hl || [4, 5, 6, 8, 10, 12][Math.floor(Math.random() * 6)];
      tmax = hl * 5; slider.value = 0; guides = false; bGuide.textContent = "Show half-lives";
      note.innerHTML = iso.hl ? "<strong>" + iso.name + "</strong> (" + iso.use + "). Half-life: <strong>" + fmt(iso.hl) + " " + iso.unit + "</strong>. Start: 100 g."
        : "<strong>Mystery isotope.</strong> Start: 100 g. Use the slider to find when 50 g is left, then enter its half-life below.";
      quiz.innerHTML = "";
      if (!iso.hl) {
        el("label", { text: "Half-life (days): " }, quiz);
        var inp = el("input", { type: "text", inputmode: "decimal", size: 5, "aria-label": "Half-life in days" }, quiz);
        var chk = btn("Check", quiz), fb = el("span", { class: "cw-fb", "aria-live": "polite" }, quiz);
        chk.addEventListener("click", function () {
          var v = Number((inp.value || "").replace(",", "."));
          if (!v) { fb.textContent = "Enter a number of days."; fb.className = "cw-fb cw-no"; return; }
          if (Math.abs(v - hl) <= hl * 0.06) { fb.textContent = "Correct: " + hl + " days. After " + hl + " days, 50 g is left; after " + 2 * hl + " days, 25 g."; fb.className = "cw-fb cw-ok"; }
          else if (Math.abs(v - 2 * hl) <= hl * 0.12) { fb.textContent = "That is when 25 g is left (two half-lives). Find when HALF the start (50 g) is left."; fb.className = "cw-fb cw-no"; }
          else { fb.textContent = "Not yet. Move the slider until the mass is 50 g (half of 100 g), then read the time."; fb.className = "cw-fb cw-no"; }
        });
      }
      draw();
    }
    function draw() {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      var t = tmax * Number(slider.value) / 1000, m = M0 * Math.pow(0.5, t / hl), i, v;
      for (i = 0; i <= 5; i++) {   // time gridlines at whole half-lives (unlabelled for the mystery isotope)
        v = i * hl;
        el("svg:line", { x1: xs(v), y1: Y0, x2: xs(v), y2: Y1, class: "cw-grid" }, svg);
        el("svg:text", { x: xs(v), y: Y0 + 14, class: "cw-tick", "text-anchor": "middle", text: fmt(v) }, svg);
      }
      for (v = 0; v <= 100; v += 25) {
        el("svg:line", { x1: X0, y1: ys(v), x2: X1, y2: ys(v), class: "cw-grid" }, svg);
        el("svg:text", { x: X0 - 6, y: ys(v) + 4, class: "cw-tick", "text-anchor": "end", text: v }, svg);
      }
      el("svg:line", { x1: X0, y1: Y0, x2: X1, y2: Y0, class: "cw-axis" }, svg);
      el("svg:line", { x1: X0, y1: Y0, x2: X0, y2: Y1, class: "cw-axis" }, svg);
      el("svg:text", { x: (X0 + X1) / 2, y: 252, class: "cw-label", "text-anchor": "middle", text: "Time (" + iso.unit + ")" }, svg);
      el("svg:text", { x: 14, y: (Y0 + Y1) / 2, class: "cw-label", "text-anchor": "middle", transform: "rotate(-90 14 " + (Y0 + Y1) / 2 + ")", text: "Mass left (g)" }, svg);
      var d = "";
      for (i = 0; i <= 120; i++) { v = tmax * i / 120; d += (i ? "L" : "M") + xs(v).toFixed(1) + " " + ys(M0 * Math.pow(0.5, v / hl)).toFixed(1); }
      el("svg:path", { d: d, class: "cw-curve" }, svg);
      if (guides) {
        for (i = 1; i <= 3; i++) {
          v = M0 / Math.pow(2, i);
          el("svg:path", { d: "M" + X0 + " " + ys(v) + "H" + xs(i * hl) + "V" + Y0, class: "cw-guide" }, svg);
          el("svg:text", { x: xs(i * hl) + 4, y: ys(v) - 4, class: "cw-tick", text: fmt(v) + " g" }, svg);
        }
      }
      el("svg:path", { d: "M" + xs(t) + " " + Y0 + "V" + ys(m) + "H" + X0, class: "cw-read" }, svg);
      el("svg:circle", { cx: xs(t), cy: ys(m), r: 5, class: "cw-dot" }, svg);
      svg.setAttribute("aria-label", "Graph of mass left against time for " + iso.name + ": a curve that falls quickly at first, then more and more slowly, halving every half-life.");
      var n = t / hl, whole = Math.abs(n - Math.round(n)) < 0.02 ? Math.round(n) : null;
      out.innerHTML = "After <strong>" + fmt(t) + " " + iso.unit + "</strong>: <strong>" + fmt(m) + " g</strong> left" +
        (iso.hl ? " (" + (whole === 1 ? "1 half-life" : fmt(n) + " half-lives") + ")." : ".") +
        (whole && iso.hl ? " 100 g has halved " + (whole === 1 ? "once" : whole + " times") + "." : "");
    }
    sel.addEventListener("change", setup);
    slider.addEventListener("input", draw);
    bGuide.addEventListener("click", function () { guides = !guides; bGuide.textContent = guides ? "Hide half-lives" : "Show half-lives"; draw(); });
    setup();
  }

  // ---------- 3. alpha decay stepper ----------
  var HEAVY = { 80: ["Hg", "Mercury"], 81: ["Tl", "Thallium"], 82: ["Pb", "Lead"], 83: ["Bi", "Bismuth"], 84: ["Po", "Polonium"],
    85: ["At", "Astatine"], 86: ["Rn", "Radon"], 87: ["Fr", "Francium"], 88: ["Ra", "Radium"], 89: ["Ac", "Actinium"],
    90: ["Th", "Thorium"], 91: ["Pa", "Protactinium"], 92: ["U", "Uranium"], 93: ["Np", "Neptunium"], 94: ["Pu", "Plutonium"],
    95: ["Am", "Americium"], 96: ["Cm", "Curium"] };
  var EMIT = [[84, 210], [88, 226], [95, 241], [86, 222], [90, 230], [92, 234], [94, 239]];   // real alpha emitters
  function nuc(a, z, sym) { return '<span class="nuc"><span class="nuc-n"><span>' + a + "</span><span>" + z + "</span></span>" + sym + "</span>"; }

  function initAlpha(box) {
    if (box.dataset.ready) return; box.dataset.ready = "1";
    var top = el("div", { class: "cw-row" }, box);
    el("label", { text: "Parent isotope: " }, top);
    var sel = el("select", { "aria-label": "Choose a parent isotope" }, top);
    EMIT.forEach(function (p, i) { el("option", { value: i, text: HEAVY[p[0]][1] + "-" + p[1] }, sel); });
    var eq = el("div", { class: "ad-eq", "aria-live": "polite" }, box);
    var step = el("div", { class: "cw-out" }, box);
    var Z, A;
    function setup() {
      Z = EMIT[Number(sel.value)][0]; A = EMIT[Number(sel.value)][1];
      eq.innerHTML = nuc(A, Z, HEAVY[Z][0]) + " → " + nuc("?", "?", "?") + " + " + nuc(4, 2, "He");
      step.innerHTML = "<p><strong>Step 1.</strong> " + HEAVY[Z][1] + "-" + A + " has mass number <strong>" + A + "</strong> (top) and atomic number <strong>" + Z +
        "</strong> (bottom). It gives off an alpha particle: <strong>2 protons and 2 neutrons</strong>, written " + nuc(4, 2, "He") + ".</p>" +
        "<p><strong>Step 2.</strong> Work out the daughter's numbers.</p>";
      var r = el("div", { class: "cw-row" }, step);
      el("label", { text: "Mass number: " }, r);
      var ia = el("input", { type: "text", inputmode: "numeric", size: 4, "aria-label": "Daughter mass number" }, r);
      el("label", { text: " Atomic number: " }, r);
      var iz = el("input", { type: "text", inputmode: "numeric", size: 4, "aria-label": "Daughter atomic number" }, r);
      var chk = btn("Check", r);
      var fb = el("p", { class: "cw-fb", "aria-live": "polite" }, step);
      var s3 = el("div", {}, step);
      chk.addEventListener("click", function () {
        var a = Number(ia.value), z = Number(iz.value);
        fb.className = "cw-fb cw-no";
        if (!a || !z) { fb.textContent = "Fill in both numbers."; return; }
        if (a === A - 4 && z === Z - 2) { fb.className = "cw-fb cw-ok"; fb.textContent = "Correct: " + A + " − 4 = " + (A - 4) + " and " + Z + " − 2 = " + (Z - 2) + "."; name(s3); return; }
        if (a === A - 2 && z === Z - 4) { fb.textContent = "Swapped: the mass number (top) goes down by 4, the atomic number (bottom) by 2."; return; }
        if (a === A + 4 || z === Z + 2) { fb.textContent = "The parent LOSES the alpha particle, so both numbers go down."; return; }
        if (a === A - 4) { fb.textContent = "Mass number right. The atomic number drops by the 2 protons in the alpha particle: " + Z + " − 2."; return; }
        if (z === Z - 2) { fb.textContent = "Atomic number right. The mass number drops by 4 (2 protons + 2 neutrons): " + A + " − 4."; return; }
        fb.textContent = "Not yet. An alpha particle takes 4 from the mass number and 2 from the atomic number.";
      });
    }
    function name(box3) {
      box3.innerHTML = "<p><strong>Step 3.</strong> Atomic number " + (Z - 2) + " decides the element. Which element is it? (Use a periodic table.)</p>";
      var r = el("div", { class: "cw-row" }, box3), fb = el("p", { class: "cw-fb", "aria-live": "polite" }, box3);
      [Z - 2, Z, Z - 1].sort(function () { return 0.5 - Math.random(); }).forEach(function (n) {
        var b = btn(HEAVY[n][1] + " (" + HEAVY[n][0] + ")", r);
        b.addEventListener("click", function () {
          if (n === Z - 2) {
            fb.className = "cw-fb cw-ok"; fb.textContent = "Yes.";
            eq.innerHTML = nuc(A, Z, HEAVY[Z][0]) + " → " + nuc(A - 4, Z - 2, HEAVY[Z - 2][0]) + " + " + nuc(4, 2, "He");
            box3.insertAdjacentHTML("beforeend", "<p><strong>A full answer says:</strong></p><ul>" +
              "<li>" + HEAVY[Z][1] + "-" + A + " gives off an alpha particle (2 protons and 2 neutrons, a helium nucleus).</li>" +
              "<li>The atomic number decreases by 2 (" + Z + " → " + (Z - 2) + ").</li>" +
              "<li>The mass number decreases by 4 (" + A + " → " + (A - 4) + ").</li>" +
              "<li>A new element forms: " + HEAVY[Z][1].toLowerCase() + "-" + A + " becomes " + HEAVY[Z - 2][1].toLowerCase() + "-" + (A - 4) + ".</li></ul>");
          } else if (n === Z) { fb.className = "cw-fb cw-no"; fb.textContent = "That is the parent. Losing 2 protons changes the element."; }
          else { fb.className = "cw-fb cw-no"; fb.textContent = "That is atomic number " + n + ". An alpha particle removes 2 protons, not 1."; }
        });
      });
    }
    sel.addEventListener("change", setup);
    setup();
  }

  function init() {
    document.querySelectorAll(".shell-builder").forEach(initShell);
    document.querySelectorAll(".hl-reader").forEach(initHl);
    document.querySelectorAll(".alpha-stepper").forEach(initAlpha);
  }
  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
