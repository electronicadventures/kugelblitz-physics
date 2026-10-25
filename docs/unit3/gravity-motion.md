# Gravity & Motion

!!! info "Syllabus reference"
    Unit 3, Topic 1 — 22 hours (including practicals)

    Checklist codes (e.g. `G1.4`) under each heading match the Know-and-Do checklists on QLearn.

## Vector analysis (2D)

<span class="checklist-codes">Checklist: G1.1 · G1.2</span>

In Unit 3, vector analysis extends to two dimensions. Any vector can be resolved into two perpendicular components:

\[
F_x = F\cos\theta \qquad F_y = F\sin\theta
\]

To find the resultant of multiple vectors: resolve each into components, add the components, then recombine:

\[
F_R = \sqrt{F_x^2 + F_y^2} \qquad \theta = \tan^{-1}\left(\frac{F_y}{F_x}\right)
\]

---

## Projectile motion

<span class="checklist-codes">Checklist: G1.3 · G1.4 · G1.5 · G5.2</span>

A projectile is any object moving freely under the influence of gravity alone (ignoring air resistance). The key principle is the **independence of horizontal and vertical motion**:

- **Horizontal:** constant velocity (\(a_x = 0\))
- **Vertical:** constant acceleration (\(a_y = g = 9.8\) m s⁻²)

!!! note "Key formulas"
    **Horizontal:** \(s_x = u_x t\), where \(u_x = u\cos\theta\)
    
    **Vertical:** \(s_y = u_y t + \tfrac{1}{2}g t^2\), where \(u_y = u\sin\theta\)
    
    At any time, the resultant velocity: \(v = \sqrt{v_x^2 + v_y^2}\)

!!! tip "Self-check"
    Test yourself: [Self-check: Projectile motion](self-check-projectiles.md)

??? example "Worked example: Horizontal projection"
    **Question:** A ball is launched horizontally at 15 m s⁻¹ from a cliff 45 m high. How far does it land from the base?
    
    **Solution:** Find time of flight from vertical motion (\(u_y = 0\)):
    
    \(45 = \tfrac{1}{2}(9.8)t^2 \implies t = 3.03\) s
    
    Horizontal distance: \(s_x = 15 \times 3.03 = 45.5\) m

---

## Inclined planes

<span class="checklist-codes">Checklist: G2.1 · G2.2 · G2.3 · G2.4 · G5.3</span>

On an inclined plane at angle \(\theta\) to the horizontal, the weight force is resolved into:

- **Parallel to slope** (causes acceleration down the slope): \(F_\parallel = mg\sin\theta\)
- **Perpendicular to slope** (balanced by the normal force): \(F_\perp = mg\cos\theta\)

With friction (\(f\)), the net force along the slope: \(F_{net} = mg\sin\theta - f\)

---

## Circular motion

<span class="checklist-codes">Checklist: G2.5 · G2.6 · G2.7 · G2.8 · G2.9 · G5.1 · G5.4</span>

An object moving in a circle at constant speed is **accelerating** because the direction of its velocity is continuously changing. This acceleration is directed toward the centre of the circle (**centripetal**).

!!! note "Key formulas"
    \[
    a_c = \frac{v^2}{r} \qquad F_c = \frac{mv^2}{r}
    \]
    \[
    v = \frac{2\pi r}{T}
    \]

The centripetal force is not a new force — it is provided by an existing force (gravity, tension, friction, etc.) acting toward the centre.

---

## Gravitation

### Newton's law of universal gravitation

<span class="checklist-codes">Checklist: G3.1 · G3.2 · G3.3 · G3.4</span>

!!! note "Key formula"
    \[
    F = \frac{Gm_1 m_2}{r^2}
    \]
    
    where \(G = 6.67 \times 10^{-11}\) N m² kg⁻²

**Gravitational field strength** at distance \(r\) from a mass \(M\):

\[
g = \frac{GM}{r^2}
\]

### Orbital motion

<span class="checklist-codes">Checklist: G3.5 · G3.6 · G3.7 · G5.6</span>

For a satellite in circular orbit, gravity provides the centripetal force:

\[
\frac{GMm}{r^2} = \frac{mv^2}{r} \implies v = \sqrt{\frac{GM}{r}}
\]

**Orbital period:**

\[
T = \frac{2\pi r}{v} = 2\pi\sqrt{\frac{r^3}{GM}}
\]

**Kepler's third law:** \(T^2 \propto r^3\) — the square of the orbital period is proportional to the cube of the orbital radius.

### Gravitational potential energy (in a field)

\[
E_p = -\frac{Gm_1 m_2}{r}
\]

The negative sign indicates that energy must be added (work done) to move the object further from the mass. At infinite separation, \(E_p = 0\).

---

## Simulations and videos

**Verified simulations:**

- [PhET Projectile Motion](https://phet.colorado.edu/en/simulations/projectile-motion)
- [PhET Vector Addition](https://phet.colorado.edu/sims/html/vector-addition/latest/vector-addition_en.html)
- [oPhysics Inclined Plane](https://ophysics.com/f2.html)
- [Physics Classroom Circular Motion](https://www.physicsclassroom.com/interactive/circular-and-satellite-motion/circular-motion)
- [PhET My Solar System](https://phet.colorado.edu/en/simulations/my-solar-system)
- [PhET Gravity Force Lab: Basics](https://phet.colorado.edu/en/simulations/gravity-force-lab-basics)
- [PhET Kepler's Laws](https://phet.colorado.edu/en/simulations/keplers-laws)

**Practicals for this topic:**

- Projectile range vs angle <span class="checklist-codes">G5.2</span>
- Weight component down an incline <span class="checklist-codes">G5.3</span>
- Circular motion on a string <span class="checklist-codes">G5.4</span>

**More simulations and tools:**

- [JavaLab — Gravity simulations](https://javalab.org/en/tag/gravity/)
- [NASA Eyes — Mars](https://eyes.nasa.gov/apps/mrn/#/mars)
- [Quarkology — Orbits](http://www.quarkology.com/12-physics/92-space/92C-orbits.html)

**Crash Course Physics:**

- [Uniform Circular Motion (Physics #12)](https://www.youtube.com/watch?v=bpFK2VCRHUs)
- [Newtonian Gravity (Physics #8)](https://www.youtube.com/watch?v=7gf6YpdvtE0)

**External resources:**

- [The Physics Classroom](https://www.physicsclassroom.com/)
- [GNSS Planning Tool](https://www.gnssplanning.com/) — visualise satellite orbits
- [OzGrav Resources](https://www.ozgrav.org/resources/) — gravitational wave research
- [Landgreen Physics](https://landgreen.github.io/physics/)
