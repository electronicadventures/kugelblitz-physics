# Linear Motion & Force

!!! info "Syllabus reference"
    Unit 2, Topic 1 — 25 hours (including practicals)

## Vectors and scalars

**Scalars** have magnitude only (e.g. speed, distance, mass, energy). **Vectors** have both magnitude and direction (e.g. velocity, displacement, force, momentum).

Vectors can be symbolised as **F**, **F̃** or **F⃗**.

To find the **resultant vector** in one dimension, assign a positive direction and add algebraically.

---

## Linear motion concepts

**Displacement** (\(s\))
:   The change in position of an object — a vector quantity (m).

**Velocity** (\(v\))
:   The rate of change of displacement — a vector quantity (m s⁻¹).

**Acceleration** (\(a\))
:   The rate of change of velocity — a vector quantity (m s⁻²).

**Average velocity** is calculated over an entire journey. **Instantaneous velocity** is the velocity at a specific moment in time (the gradient of a displacement–time graph at that point).

### Interpreting motion graphs

| Graph | Gradient gives | Area under gives |
|-------|---------------|-----------------|
| Displacement–time | Velocity | — |
| Velocity–time | Acceleration | Displacement |
| Acceleration–time | — | Change in velocity |

Use minimum and maximum lines of best fit to determine the uncertainty of the gradient.

## Equations of motion

For **uniformly accelerated motion** in one dimension (constant acceleration):

!!! note "SUVAT equations"
    \[
    v = u + at
    \]
    \[
    s = ut + \tfrac{1}{2}at^2
    \]
    \[
    v^2 = u^2 + 2as
    \]
    
    where: \(s\) = displacement, \(u\) = initial velocity, \(v\) = final velocity, \(a\) = acceleration, \(t\) = time

??? example "Worked example: Free fall"
    **Question:** A ball is dropped from rest from a height of 20.0 m. How long does it take to hit the ground? (\(g = 9.8\) m s⁻²)
    
    **Solution:** \(u = 0\), \(s = 20.0\) m, \(a = 9.8\) m s⁻²
    
    \[
    s = ut + \tfrac{1}{2}at^2 \implies 20.0 = 0 + \tfrac{1}{2}(9.8)t^2
    \]
    \[
    t^2 = \frac{2 \times 20.0}{9.8} = 4.08 \implies t = 2.02 \text{ s}
    \]

### Mandatory practical: Acceleration due to gravity

Conduct an experiment to verify the value of \(g = 9.8\) m s⁻² on Earth's surface. Linearise a non-linear dataset (e.g. plot \(t^2\) vs \(s\)) and calculate the equation of the linear trend line.

---

## Newton's laws

**First law (inertia):** An object remains at rest or in uniform motion unless acted upon by an unbalanced force.

**Second law:** \(F_{net} = ma\), or equivalently \(a = \frac{F_{net}}{m}\).

**Third law:** For every action there is an equal and opposite reaction.

### Free-body diagrams

Construct diagrams showing all forces acting on an object: weight (\(F_g = mg\)), normal force (\(F_N\)), tension (\(T\)), friction (\(f\)), drag, and applied forces.

---

## Momentum and impulse

**Momentum** is the product of mass and velocity:

!!! note "Key formulas"
    \[
    p = mv
    \]
    
    **Impulse** = change in momentum = area under a force–time graph:
    
    \[
    \text{Impulse} = F\Delta t = \Delta p = mv - mu
    \]
    
    **Conservation of momentum** (in the absence of external forces):
    
    \[
    \sum mv_{before} = \sum mv_{after}
    \]

??? example "Worked example: Collision"
    **Question:** A 2.0 kg trolley moving at 3.0 m s⁻¹ collides with a stationary 1.0 kg trolley. They stick together. Find the final velocity.
    
    **Solution:**
    
    \[
    m_1 v_1 + m_2 v_2 = (m_1 + m_2)v_f
    \]
    \[
    (2.0)(3.0) + (1.0)(0) = (3.0)v_f \implies v_f = 2.0 \text{ m s}^{-1}
    \]

---

## Energy

!!! note "Key formulas"
    **Work done:** \(W = Fs\) (force × displacement in direction of force)
    
    **Kinetic energy:** \(E_k = \tfrac{1}{2}mv^2\)
    
    **Gravitational potential energy:** \(E_p = mgh\)

The **work–energy theorem**: the net work done on an object equals its change in kinetic energy.

**Elastic collision** — both momentum and kinetic energy are conserved.

**Inelastic collision** — momentum is conserved, but kinetic energy is not (some is converted to heat, sound, deformation).

---

## Simulations and videos

**PhET Simulations:**

- [Forces and Motion: Basics](https://phet.colorado.edu/en/simulation/forces-and-motion-basics)
- [Forces in 1 Dimension](https://phet.colorado.edu/en/simulation/legacy/forces-1d)

**Crash Course Physics:**

- [Motion in a Straight Line (Physics #1)](https://www.youtube.com/watch?v=ZM8ECpBuQYE)
- [Newton's Laws (Physics #5)](https://www.youtube.com/watch?v=kKKM8Y-u7ds)
- [Work, Energy, and Power (Physics #9)](https://www.youtube.com/watch?v=w4QFo2AN5IA)

**External resources:**

- [Mr Wayne's Class — Force Table](https://www.mrwaynesclass.com/vectors/force_table/)
- [GeoGebra — Vector Addition](https://www.geogebra.org/m/ygq9m5rd)
- [Landgreen Physics](https://landgreen.github.io/physics/)
- [The Physics Classroom](https://www.physicsclassroom.com/)
