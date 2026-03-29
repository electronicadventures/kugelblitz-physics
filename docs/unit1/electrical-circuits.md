# Electrical Circuits

!!! info "Syllabus reference"
    Unit 1, Topic 3 — 15 hours (including practicals)

## Electric current

**Electric charge** is a fundamental property of matter. The SI unit is the coulomb (C). The charge on a single electron is \(e = -1.6 \times 10^{-19}\) C.

**Conventional current** flows from positive to negative (the direction a positive charge would move). **Electron flow** is in the opposite direction.

!!! note "Key formula"
    \[
    I = \frac{q}{t}
    \]
    
    where \(I\) = current (A), \(q\) = charge (C), \(t\) = time (s)

## Potential difference

**Electrical potential difference** (voltage) is the work done per unit charge as charge moves between two points in a circuit. **EMF** (electromotive force) is the potential difference across the terminals of a source when no current flows.

!!! note "Key formula"
    \[
    V = \frac{W}{q}
    \]
    
    where \(V\) = potential difference (V), \(W\) = work done (J), \(q\) = charge (C)

## Resistance

**Resistance** is a measure of how much a component opposes the flow of current. An **ohmic** resistor has a constant resistance (linear V–I graph). A **non-ohmic** resistor has a resistance that changes with current or voltage.

!!! note "Ohm's law"
    \[
    V = IR
    \]
    
    where \(V\) = potential difference (V), \(I\) = current (A), \(R\) = resistance (Ω)

### Mandatory practical: Ohmic and non-ohmic resistors

Compare the characteristics of ohmic and non-ohmic resistors experimentally. Interpret graphical representations of V vs I data to find resistance using the gradient and its uncertainty.

## Power

!!! note "Key formulas"
    \[
    P = VI = I^2R = \frac{V^2}{R}
    \]
    
    where \(P\) = power (W)

---

## Series and parallel

### Series circuits

Components connected end-to-end. Current is the same through each component; voltage is shared.

\[
R_t = R_1 + R_2 + \cdots + R_n
\]
\[
V_t = V_1 + V_2 + \cdots + V_n
\]
\[
I_t = I_1 = I_2 = \cdots = I_n
\]

### Parallel circuits

Components connected across the same two points. Voltage is the same across each branch; current is shared.

\[
\frac{1}{R_t} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots + \frac{1}{R_n}
\]
\[
V_t = V_1 = V_2 = \cdots = V_n
\]
\[
I_t = I_1 + I_2 + \cdots + I_n
\]

## Circuit analysis

??? example "Worked example: Series–parallel circuit"
    **Question:** A circuit has a 12 V battery connected to a 4 Ω resistor in series with two parallel resistors of 6 Ω and 3 Ω. Find the total current.
    
    **Solution:**
    
    Parallel combination: \(\frac{1}{R_p} = \frac{1}{6} + \frac{1}{3} = \frac{1}{2}\), so \(R_p = 2 \text{ Ω}\)
    
    Total resistance: \(R_t = 4 + 2 = 6 \text{ Ω}\)
    
    Total current: \(I = \frac{V}{R_t} = \frac{12}{6} = 2.0 \text{ A}\)

Power dissipation over resistors in a circuit is calculated using \(P = I^2R\) or \(P = \frac{V^2}{R}\) for each component.

### Standard circuit symbols

Construct electrical circuit diagrams using standard symbols for: resistor, voltmeter, ammeter, cell, battery, switch, lamp.

---

## Simulations and videos

**PhET Simulations:**

- [Circuit Construction Kit: DC](https://phet.colorado.edu/en/simulation/legacy/circuit-construction-kit-dc) — build and analyse circuits

**Crash Course Physics:**

- [Electric Current (Physics #28)](https://www.youtube.com/watch?v=HXOok3mfMLM&list=PL8dPuuaLjXtN0ge7yDk_UA0ldZJdhwkoV&index=28)
- [Voltage, Electric Energy, and Capacitors (Physics #27)](https://www.youtube.com/watch?v=ZrMltpK6iAw&index=27&list=PL8dPuuaLjXtN0ge7yDk_UA0ldZJdhwkoV)
- [DC Resistors and Batteries (Physics #29)](https://www.youtube.com/watch?v=g-wjP1otQWI&index=29&list=PL8dPuuaLjXtN0ge7yDk_UA0ldZJdhwkoV)
- [Circuit Analysis (Physics #30)](https://www.youtube.com/watch?v=-w-VTw0tQlE&list=PL8dPuuaLjXtN0ge7yDk_UA0ldZJdhwkoV&index=30)

**External resources:**

- [The Physics Classroom](https://www.physicsclassroom.com/)
- [Senior Physics](https://seniorphysics.com/)
- [A+ Physics](https://aplusphysics.com/)
