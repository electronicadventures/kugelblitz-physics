# Heating Processes

!!! info "Syllabus reference"
    Unit 1, Topic 1 — 15 hours (including practicals)

## Kinetic particle model

The **kinetic particle model** describes matter as being made up of particles (atoms or molecules) that are in constant random motion. The behaviour of these particles explains the macroscopic properties of solids, liquids and gases.

Key concepts to distinguish:

**Thermal energy**
:   The total kinetic energy of all particles in a substance.

**Temperature**
:   A measure of the average kinetic energy of the particles in a substance.

**Heat**
:   The transfer of thermal energy from a region of higher temperature to a region of lower temperature.

**Internal energy**
:   The sum of the kinetic energy (due to random motion) and potential energy (due to intermolecular forces) of all particles in a system.

!!! tip "Cup of coffee vs swimming pool"
    A swimming pool at 20°C has far more thermal energy than a cup of coffee at 80°C, even though the coffee is at a higher temperature. The pool contains vastly more particles, so the total kinetic energy is greater.

### Temperature conversion

\[
T_K = T_C + 273
\]

### Heat transfer mechanisms

**Conduction** — energy transfer through particle collisions in solids (and to a lesser extent, liquids and gases).

**Convection** — energy transfer by the bulk movement of heated fluid (liquids and gases). Hotter, less dense fluid rises; cooler, denser fluid sinks.

**Radiation** — energy transfer via electromagnetic waves. Does not require a medium.

---

## Specific heat capacity

The **specific heat capacity** \(c\) of a substance is the amount of energy required to raise the temperature of 1 kg of the substance by 1 K (or 1°C).

!!! note "Key formula"
    \[
    Q = mc\Delta T
    \]
    
    where:
    
    - \(Q\) = energy transferred (J)
    - \(m\) = mass (kg)
    - \(c\) = specific heat capacity (J kg⁻¹ K⁻¹)
    - \(\Delta T\) = change in temperature (K or °C)

**Common values from the data book:**

| Substance | Specific heat capacity |
|-----------|----------------------|
| Water | \(c_w = 4.18 \times 10^3 \text{ J kg}^{-1}\text{K}^{-1}\) |
| Ice | \(c_i = 2.05 \times 10^3 \text{ J kg}^{-1}\text{K}^{-1}\) |
| Steam | \(c_s = 2.00 \times 10^3 \text{ J kg}^{-1}\text{K}^{-1}\) |

??? example "Worked example: Heating water"
    **Question:** How much energy is needed to heat 0.500 kg of water from 20.0°C to 80.0°C?
    
    **Solution:**
    
    \[
    Q = mc\Delta T = 0.500 \times 4.18 \times 10^3 \times (80.0 - 20.0)
    \]
    \[
    Q = 0.500 \times 4.18 \times 10^3 \times 60.0 = 1.25 \times 10^5 \text{ J} = 125 \text{ kJ}
    \]

### Mandatory practical: Specific heat capacity

Conduct an experiment that determines the specific heat capacity of a substance, ensuring that measurement uncertainties associated with mass and temperature are propagated.

---

## Specific latent heat

During a **phase change** (melting, freezing, vaporisation, condensation), the temperature of a system remains constant even though energy is being added or removed. The energy goes into breaking or forming intermolecular bonds rather than increasing kinetic energy.

**Specific latent heat** \(L\) is the energy required to change the state of 1 kg of a substance without changing its temperature.

!!! note "Key formula"
    \[
    Q = mL
    \]
    
    where:
    
    - \(Q\) = energy transferred (J)
    - \(m\) = mass (kg)
    - \(L\) = specific latent heat (J kg⁻¹)

**Values from the data book:**

| Quantity | Value |
|----------|-------|
| Latent heat of fusion for water | \(L_f = 3.34 \times 10^5 \text{ J kg}^{-1}\) |
| Latent heat of vaporisation for water | \(L_v = 2.26 \times 10^6 \text{ J kg}^{-1}\) |

!!! tip "Why do you feel colder in wet clothes?"
    As water evaporates from your clothes, it absorbs latent heat of vaporisation from your body. Since \(L_v\) is very large, a significant amount of energy is drawn away, making you feel cold.

---

## Thermal equilibrium

**Thermal equilibrium** is achieved when two systems in thermal contact reach the same temperature. At this point, the average kinetic energy of particles in both systems is equal and there is no net heat transfer.

This is the **zeroth law of thermodynamics**: if system A is in thermal equilibrium with system C, and system B is in thermal equilibrium with system C, then A and B are in thermal equilibrium with each other.

??? example "Worked example: Mixing hot and cold water"
    **Question:** 0.200 kg of water at 80.0°C is mixed with 0.300 kg of water at 20.0°C. Find the final equilibrium temperature.
    
    **Solution:** Energy lost by hot water = energy gained by cold water.
    
    \[
    m_h c \Delta T_h = m_c c \Delta T_c
    \]
    \[
    0.200 \times (80.0 - T_f) = 0.300 \times (T_f - 20.0)
    \]
    \[
    16.0 - 0.200T_f = 0.300T_f - 6.0
    \]
    \[
    22.0 = 0.500T_f
    \]
    \[
    T_f = 44.0\text{°C}
    \]

---

## First law of thermodynamics

The change in internal energy of a system equals the energy added or removed by heating plus the work done on or by the system:

!!! note "Key formula"
    \[
    \Delta U = Q + W
    \]
    
    where:
    
    - \(\Delta U\) = change in internal energy (J)
    - \(Q\) = heat added to the system (J)
    - \(W\) = work done on the system (J)

This is a consequence of the **law of conservation of energy**. Energy transfers and transformations in mechanical systems always result in some heat loss to the environment, so the amount of useable energy is reduced.

## Efficiency

!!! note "Key formula"
    \[
    \eta = \frac{\text{energy output}}{\text{energy input}} \times 100\%
    \]

!!! tip "Science as a Human Endeavour"
    The need to improve the efficiency of early steam engines led to the development of the internal combustion engine and, scientifically, to a mathematical understanding of the relationship between heating processes and mechanical work — the foundation of thermodynamics.

---

## Simulations and videos

**PhET Simulations:**

- [States of Matter: Basics](https://phet.colorado.edu/en/simulation/states-of-matter-basics) — explore the kinetic particle model
- [Energy Forms and Changes](https://phet.colorado.edu/en/simulation/legacy/energy-forms-and-changes) — investigate thermal equilibrium
- [Specific Heat Capacity](http://employees.oneonta.edu/viningwj/sims/specific_heat_s.html) — interactive specific heat simulation

**Crash Course Physics:**

- [Temperature (Physics #20)](https://www.youtube.com/watch?v=6BHbJ_gBOk0&list=PL8dPuuaLjXtN0ge7yDk_UA0ldZJdhwkoV&index=20)

**External resources:**

- [The Physics Classroom](https://www.physicsclassroom.com/) — comprehensive notes and tutorials
- [physics.info](https://physics.info/) — clear explanations with worked examples
- [A+ Physics](https://aplusphysics.com/) — notes and practice problems
