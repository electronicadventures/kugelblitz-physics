/* Kugelblitz self-check questions.
   Numeric:  <div class="sc-num" data-answer="1.06" data-tol="0.02" data-unit="m" data-alt="2.32"> ... </div>
     data-tol  relative tolerance (0.02 = ±2%)
     data-alt  optional common wrong answer(s), "value:message|value:message"
   Choice:   <div class="sc-mc" data-correct="c"> <button data-opt="a" data-fb="...">…</button> … </div>
   Nothing is stored or sent anywhere: checking happens in the browser. */
(function () {
  function near(x, target, tol) {
    if (target === 0) return Math.abs(x) <= tol;
    return Math.abs(x - target) <= Math.abs(target) * tol;
  }
  function parseNum(s) {
    s = (s || "").trim().replace(/\s+/g, "").replace(/×10\^?/i, "e").replace(/x10\^?/i, "e").replace(/,/g, "");
    if (s === "" || isNaN(Number(s))) return null;
    return Number(s);
  }
  function setFb(el, ok, msg) {
    el.className = "sc-fb " + (ok ? "sc-ok" : "sc-no");
    el.textContent = msg;
  }
  function initNum(box) {
    if (box.dataset.ready) return;
    box.dataset.ready = "1";
    var ans = Number(box.dataset.answer), tol = Number(box.dataset.tol || 0.02), unit = box.dataset.unit || "";
    var row = document.createElement("div");
    row.className = "sc-row";
    row.innerHTML = '<input type="text" inputmode="decimal" aria-label="Your answer" placeholder="Your answer">' +
      (unit ? '<span class="sc-unit">' + unit + "</span>" : "") +
      '<button type="button" class="md-button sc-check">Check</button>';
    var fb = document.createElement("div");
    fb.className = "sc-fb";
    fb.setAttribute("aria-live", "polite");
    box.appendChild(row);
    box.appendChild(fb);
    var input = row.querySelector("input");
    function check() {
      var x = parseNum(input.value);
      if (x === null) return setFb(fb, false, "Enter a number (e.g. 1.06 or 3.2e-4).");
      if (near(x, ans, tol)) return setFb(fb, true, "Correct. Open the worked solution to check your method.");
      var alts = (box.dataset.alt || "").split("|").filter(Boolean);
      for (var i = 0; i < alts.length; i++) {
        var p = alts[i].split(":");
        if (near(x, Number(p[0]), 0.02)) return setFb(fb, false, p.slice(1).join(":"));
      }
      if (near(-x, ans, tol)) return setFb(fb, false, "Right size, wrong sign. Check your sign convention or which quantity is asked for.");
      for (var k = -6; k <= 6; k++) {
        if (k !== 0 && near(x, ans * Math.pow(10, k), tol)) return setFb(fb, false, "Out by a power of ten. Check unit conversions and powers of ten.");
      }
      if (near(x, ans, 0.1)) return setFb(fb, false, "Close. Check your rounding and the values you substituted.");
      setFb(fb, false, "Not yet. Try the hint, then have another go.");
    }
    row.querySelector("button").addEventListener("click", check);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") check(); });
  }
  function initMc(box) {
    if (box.dataset.ready) return;
    box.dataset.ready = "1";
    var fb = document.createElement("div");
    fb.className = "sc-fb";
    fb.setAttribute("aria-live", "polite");
    box.appendChild(fb);
    box.querySelectorAll("button[data-opt]").forEach(function (b) {
      b.type = "button";
      b.classList.add("sc-opt");
      b.addEventListener("click", function () {
        box.querySelectorAll("button[data-opt]").forEach(function (o) { o.classList.remove("sc-picked"); });
        b.classList.add("sc-picked");
        var ok = b.dataset.opt === box.dataset.correct;
        setFb(fb, ok, (ok ? "Correct. " : "Not quite. ") + (b.dataset.fb || ""));
      });
    });
  }
  function init() {
    document.querySelectorAll(".sc-num").forEach(initNum);
    document.querySelectorAll(".sc-mc").forEach(initMc);
  }
  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
