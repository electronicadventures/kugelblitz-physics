/* Year 10 self-check: dropdown questions (e.g. Punnett squares).
   <div class="sc-dd"> ... <select data-blank="t1" data-answer="Xᴬ">…</select> ... </div>
   Checking happens in the browser. Nothing is stored or sent anywhere. */
(function () {
  function initDd(box) {
    if (box.dataset.ready) return;
    box.dataset.ready = "1";
    var row = document.createElement("div");
    row.className = "sc-row";
    row.innerHTML = '<button type="button" class="md-button sc-check">Check</button>';
    var fb = document.createElement("div");
    fb.className = "sc-fb";
    fb.setAttribute("aria-live", "polite");
    box.appendChild(row);
    box.appendChild(fb);
    var sels = box.querySelectorAll("select[data-blank]");
    row.querySelector("button").addEventListener("click", function () {
      var right = 0, empty = 0;
      sels.forEach(function (s) {
        s.style.outline = "";
        if (!s.value) { empty++; return; }
        var ok = s.value === s.dataset.answer;
        if (ok) right++;
        s.style.outline = ok ? "2px solid #2e7d32" : "2px solid #c62828";
      });
      if (empty) { fb.className = "sc-fb sc-no"; fb.textContent = "Fill in every box first (" + empty + " left)."; return; }
      var all = right === sels.length;
      fb.className = "sc-fb " + (all ? "sc-ok" : "sc-no");
      fb.textContent = all ? "All correct. Open the worked solution to check your thinking."
        : right + " of " + sels.length + " correct. Boxes outlined in red need another look.";
    });
  }
  function init() { document.querySelectorAll(".sc-dd").forEach(initDd); }
  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
