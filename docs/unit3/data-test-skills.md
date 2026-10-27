# Data test skills

<span class="checklist-codes">G5.2</span> <span class="checklist-codes">G5.3</span> <span class="checklist-codes">G5.4</span>

A data test gives you an unseen data set (usually from a practical you have done) and asks short questions about it. The physics is the theory you already know; the marks come from **handling data carefully and quoting it as evidence**. Your teacher will tell you when the data test is (see QLearn).

!!! tip "Theory first, then data"
    Every data set in this course comes from a practical you do after the theory lesson. Before a data test, revise the formula behind each practical: it tells you what to plot and what the gradient means.

## The cognitive verbs

| Verb | What it asks you to do | Show working? |
|---|---|---|
| **Identify** | Name or state it (a value, an anomaly, a relationship). | Usually no |
| **Calculate** | Work out a number using a formula or the data. | Yes |
| **Determine** | Find a value from the data, a graph or a calculation. | Usually yes |
| **Deduce** | Reach a value or statement from the data plus a known relationship (e.g. use the gradient to find g). | Yes |
| **Predict / interpolate / extrapolate** | Give a value inside (interpolate) or outside (extrapolate) the measured range, from the pattern or your line. | Yes |
| **Draw a conclusion** | Answer the research question, using data as evidence. | Evidence, yes |
| **Evaluate** | Judge the quality of the data or method, with reasons. | Reasons |

The full definitions are in the glossary of the [QCAA Physics syllabus](https://www.qcaa.qld.edu.au/senior/senior-subjects/sciences/physics).

## Eight moves that earn most of the marks

1. **Mean of trials.** Add the trials and divide by how many. Leave out an anomaly (and say so).
2. **Uncertainty of a mean.** Absolute uncertainty = half the range of the trials: \(\Delta x = \tfrac{1}{2}(x_{max} - x_{min})\). If all trials agree, use the instrument uncertainty instead.
3. **Percentage uncertainty.** \(\%\,\text{uncertainty} = \dfrac{\Delta x}{\bar{x}} \times 100\).
4. **Spot the anomaly.** Compare each trial with the *other trials at the same value*. An anomaly is clearly out of line with them, not just the biggest number in the table.
5. **Identify the relationship with evidence.** Name it (linear, directly proportional, inverse, inverse square, maximum at …) **and** quote numbers: *"When F increases by a factor of 4 (0.39 N → 1.57 N), T halves (0.74 s → 0.37 s), so F ∝ 1/T²."*
6. **Linearise.** Choose axes that give a straight line (table below). The gradient then means something physical.
7. **Use the gradient.** Gradient = rise ÷ run from two points *on your line*, far apart (not data points). Then match it to the formula to deduce a quantity.
8. **Conclude.** Answer the research question in one or two sentences, with the relationship, the key value (with uncertainty) and any limitation.

## What to plot (Unit 3)

| Practical / situation | Plot y | against x | Gradient means |
|---|---|---|---|
| Range at different launch angles (level ground) | \(R\) | \(\sin 2\theta\) | \(u^2/g\) |
| Falling from rest | \(s\) | \(t^2\) | \(\tfrac{1}{2}g\) |
| Force to hold a trolley on a ramp | \(F_\parallel\) | \(\sin\theta\) | \(mg\) (intercept: friction) |
| Acceleration down a ramp | \(a\) | \(\sin\theta\) | \(g\) |
| Whirling bung: tension vs period | \(F\) | \(1/T^2\) | \(4\pi^2 m r\) |
| Whirling bung: radius vs period | \(T^2\) | \(r\) | \(4\pi^2 m / F\) |
| Gravitational force vs distance | \(F\) | \(1/r^2\) | \(GMm\) |
| Kepler's third law | \(r^3\) | \(T^2\) | \(GM/4\pi^2\) |
| Force on a current-carrying wire | \(F\) | \(I\) | \(BL\) |

## Practice: tension and period in circular motion

A rubber bung (mass 12 g) is whirled in a horizontal circle on a string through a tube, with a hanging mass providing the tension (\(F = Mg\)). A marker keeps the radius constant. The time for 10 revolutions is measured three times for each hanging mass (stopwatch ±0.1 s). The experiment uses \(F = \dfrac{4\pi^2 m r}{T^2}\).

| Hanging mass M (g) | Tension F (N) | 10 rev, trial 1 (s) | Trial 2 (s) | Trial 3 (s) | Mean period T (s) | 1/T² (s⁻²) |
|---|---|---|---|---|---|---|
| 40 | 0.392 | 7.3 | 7.4 | 7.3 | 0.733 | 1.86 |
| 80 | 0.784 | 5.2 | 5.2 | 4.3 | 0.490 | 4.16 |
| 120 | 1.176 | 4.2 | 4.2 | 4.3 | ? | 5.58 |
| 160 | 1.568 | 3.6 | 3.7 | 3.6 | 0.363 | ? |
| 200 | 1.960 | 3.3 | 3.3 | 3.2 | 0.327 | 9.37 |

**(a)** Determine the mean period \(T\) for the 120 g mass (3 decimal places).

<div class="sc-num" data-answer="0.4233" data-tol="0.004" data-unit="s" data-alt="4.233:That's the time for 10 revolutions. Divide by 10 for the period."></div>

**(b)** Calculate the missing value of \(1/T^2\) for the 160 g mass.

<div class="sc-num" data-answer="7.575" data-tol="0.015" data-unit="s⁻²"></div>

**(c)** Identify the anomaly.

<div class="sc-mc" data-correct="b" markdown>
<button data-opt="a" data-fb="It agrees with the other trials at 40 g.">40 g, trial 1 (7.3 s)</button>
<button data-opt="b" data-fb="Correct: it is about 0.9 s shorter than the other two 80 g trials. Leave it out of the mean.">80 g, trial 3 (4.3 s)</button>
<button data-opt="c" data-fb="It agrees with the other trials at 200 g.">200 g, trial 2 (3.3 s)</button>
<button data-opt="d" data-fb="Compare each trial with the other two for the same mass.">There is no anomaly</button>
</div>

**(d)** Plot \(F\) (y) against \(1/T^2\) (x), leaving out the anomaly. Determine the gradient of your line of best fit.

<div class="sc-num" data-answer="0.2074" data-tol="0.05" data-unit="N s²"></div>

**(e)** Deduce the radius of the circle.

<div class="sc-num" data-answer="0.438" data-tol="0.05" data-unit="m"></div>

**(f)** Predict the period for a 250 g hanging mass. Is this interpolation or extrapolation?

<div class="sc-num" data-answer="0.2909" data-tol="0.03" data-unit="s"></div>

??? success "Worked solutions"
    **(a)** Mean of the three 120 g times ÷ 10 = 0.423 s.
    **(b)** \(1/T^2 = 1/0.363^2 = 7.58\) s⁻².
    **(c)** 80 g, trial 3: about 0.9 s shorter than 5.2 s and 5.2 s (probably a miscounted revolution).
    **(d)** The points lie on a straight line close to the origin. Gradient ≈ 0.207 N s² (intercept ≈ 0.011 N).
    **(e)** Gradient = \(4\pi^2 m r\), so \(r = 0.207 / (4\pi^2 \times 0.012) = 0.44\) m.
    **(f)** \(F = 0.250 \times 9.8 = 2.45\) N; \(T = \sqrt{\text{gradient}/F} = 0.291\) s. This is **extrapolation** (250 g is beyond the data), so it is less certain.

??? note "Relationship with evidence: a model answer"
    \(F\) is inversely proportional to \(T^2\). When the hanging mass increases by a factor of 4 (40 g → 160 g), the period halves (0.733 s → 0.363 s), and the graph of \(F\) against \(1/T^2\) is a straight line through (close to) the origin.

---

More practice with feedback is in your QLearn course (data test practice sets after each practical).

[← Back to the Unit 3 lesson planner](index.md)
