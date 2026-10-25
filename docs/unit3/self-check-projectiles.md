# Self-check: Projectile motion

!!! info "How this works"
    Type your answer and press **Check**. Nothing is saved or sent anywhere; this is just for you.
    Stuck? Open the **hint** first, then the **worked solution**.
    Use \(g = 9.8\) m s⁻², ignore air resistance, and give answers to 3 significant figures.
    Checklist codes: <span class="checklist-codes">G1.1</span> <span class="checklist-codes">G1.3</span> <span class="checklist-codes">G1.4</span> <span class="checklist-codes">G1.5</span>

Notes for this topic: [Projectile motion](gravity-motion.md#projectile-motion)

---

## 1. Components of a launch velocity

<span class="checklist-codes">G1.1</span>

A ball is launched at **18.0 m s⁻¹** at **35°** above the horizontal.

**(a)** Horizontal component of the launch velocity, \(u_x\):

<div class="sc-num" data-answer="14.74" data-tol="0.01" data-unit="m s⁻¹" data-alt="10.32:That's the vertical component. Horizontal uses cos θ when θ is measured from the horizontal."></div>

**(b)** Vertical component of the launch velocity, \(u_y\):

<div class="sc-num" data-answer="10.32" data-tol="0.01" data-unit="m s⁻¹" data-alt="14.74:That's the horizontal component. Vertical uses sin θ when θ is measured from the horizontal."></div>

??? tip "Hint"
    Sketch the velocity as the hypotenuse of a right triangle. The side *next to* the 35° angle is horizontal.

??? success "Worked solution"
    **Given:** \(u = 18.0\) m s⁻¹, \(\theta = 35^\circ\)  
    **Formula:** \(u_x = u\cos\theta\), \(u_y = u\sin\theta\)  
    **Substitute:** \(u_x = 18.0\cos 35^\circ = 14.7\) m s⁻¹; \(u_y = 18.0\sin 35^\circ = 10.3\) m s⁻¹  
    **Check:** \(\sqrt{14.7^2 + 10.3^2} = 18.0\) ✓

---

## 2. Dropped vs launched

<span class="checklist-codes">G1.3</span>

From the same height, ball A is **dropped** and ball B is **launched horizontally** at 5 m s⁻¹ at the same instant. Which lands first?

<div class="sc-mc" data-correct="c" markdown>
<button data-opt="a" data-fb="Ball A has no horizontal motion, but that doesn't change how fast it falls.">A — the dropped ball</button>
<button data-opt="b" data-fb="B's horizontal speed doesn't change its vertical motion. Horizontal and vertical motion are independent.">B — the launched ball</button>
<button data-opt="c" data-fb="Both start with zero vertical velocity, have the same vertical acceleration (g) and fall the same height, so they take the same time.">C — they land at the same time</button>
<button data-opt="d" data-fb="Without air resistance, all objects have the same acceleration g regardless of mass.">D — it depends on their masses</button>
</div>

---

## 3. Horizontal launch

<span class="checklist-codes">G1.4</span>

A marble rolls off a bench **0.95 m** high at **2.4 m s⁻¹**. How far from the foot of the bench does it land?

<div class="sc-num" data-answer="1.057" data-tol="0.02" data-unit="m" data-alt="0.747:Check the vertical equation: s = ½gt², so t = √(2s/g). It looks like the 2 was dropped."></div>

??? tip "Hint"
    Find the time to fall 0.95 m using the vertical motion only (\(u_y = 0\)). Then use \(s_x = u_x t\).

??? success "Worked solution"
    **Vertical:** \(s_y = \tfrac{1}{2} g t^2 \Rightarrow t = \sqrt{\dfrac{2(0.95)}{9.8}} = 0.440\) s  
    **Horizontal:** \(s_x = u_x t = 2.4 \times 0.440 = 1.06\) m  
    **Check:** a slow marble off a bench landing about 1 m away is reasonable.

---

## 4–6. Kicked from the ground

<span class="checklist-codes">G1.4</span>

A ball is kicked at **22 m s⁻¹** at **40°** above the horizontal from level ground, and lands back on level ground.

**4.** Time of flight:

<div class="sc-num" data-answer="2.886" data-tol="0.02" data-unit="s" data-alt="1.443:That's the time to reach maximum height. On level ground the full flight takes twice as long."></div>

**5.** Horizontal range:

<div class="sc-num" data-answer="48.64" data-tol="0.02" data-unit="m" data-alt="24.32:That's half the range. Use the full time of flight.|40.81:Check that you used the horizontal component u cos θ, not u sin θ."></div>

**6.** Maximum height:

<div class="sc-num" data-answer="10.20" data-tol="0.02" data-unit="m" data-alt="20.41:Check the 2 in v² = u² + 2as: h = u_y²/(2g).|24.69:Use only the vertical component u_y, not the full launch speed."></div>

??? tip "Hint"
    Resolve first: \(u_x = 22\cos 40^\circ\), \(u_y = 22\sin 40^\circ\). At maximum height \(v_y = 0\).

??? success "Worked solution"
    **Components:** \(u_x = 22\cos 40^\circ = 16.85\) m s⁻¹, \(u_y = 22\sin 40^\circ = 14.14\) m s⁻¹  
    **4. Time to top:** \(0 = u_y - g t \Rightarrow t_{top} = 14.14/9.8 = 1.443\) s, so the flight time is \(2 \times 1.443 = 2.89\) s  
    **5. Range:** \(s_x = u_x t = 16.85 \times 2.886 = 48.6\) m  
    **6. Max height:** \(0 = u_y^2 - 2gh \Rightarrow h = \dfrac{14.14^2}{2(9.8)} = 10.2\) m

---

## 7. Using range data

<span class="checklist-codes">G1.5</span>

A launcher fires a ball at the same speed each time, from level ground. At **25°** the range is **6.4 m**. Predict the range at **65°**.

<div class="sc-num" data-answer="6.4" data-tol="0.02" data-unit="m"></div>

??? tip "Hint"
    On level ground, range depends on \(\sin 2\theta\). Compare \(\sin 50^\circ\) and \(\sin 130^\circ\).

??? success "Worked solution"
    Range \(\propto \sin 2\theta\). \(\sin(2 \times 25^\circ) = \sin 50^\circ\) and \(\sin(2 \times 65^\circ) = \sin 130^\circ = \sin 50^\circ\), so the ranges are equal: **6.4 m**.
    Complementary angles (adding to 90°) give the same range; 45° gives the maximum.

---

## 8. Explain it

<span class="checklist-codes">G1.3</span>

Explain why the horizontal velocity of a projectile stays constant during its flight. Write your answer, then compare it with the marking points.

??? success "Marking points (self-mark)"
    - Ignoring air resistance, the only force on the projectile is gravity (its weight). ✔
    - Gravity acts vertically, so there is no horizontal force. ✔
    - With no horizontal net force there is no horizontal acceleration (Newton's first or second law), so \(v_x\) stays constant. ✔

---

!!! question "Want more practice? (optional)"
    - Past QCAA external exams: 2021 MC12, 2023 Paper 2 Q6, 2025 Paper 1 Q25 ([QCAA Physics assessment page](https://www.qcaa.qld.edu.au/senior/senior-subjects/sciences/physics/assessment))
    - [Isaac Science](https://isaacscience.org/): search "projectile"
    - [PhET Projectile Motion](https://phet.colorado.edu/en/simulations/projectile-motion): predict a range, then test it
