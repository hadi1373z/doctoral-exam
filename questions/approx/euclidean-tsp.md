# Euclidean TSP: dissection, portals, patching and a PTAS

§10.1 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-euclidean-tsp)

## 1. Euclidean TSP: dissection, portals, patching and a PTAS

**Doctoral proof · proof · 45 minutes suggested**

ID: core-euclidean-tsp--source-proof

Reconstruct the Euclidean TSP PTAS. Prove the snapping loss bound, describe a sufficient boundary state and its four-child transition, and distinguish the weaker portal-only running time from the polynomial bound after patching. State the exact structural lemma you invoke and how its expected extra cost yields success probability 1/2.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** For fixed ε>0, Euclidean TSP in the plane admits a randomized (1+ε) approximation in n·(log n)^{O(1/ε)} time, with success probability at least 1/2 per random dissection; all polynomially many integer shifts may be enumerated.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. If each point moves by at most δ, each edge changes by at most 2δ and any n-edge tour by at most 2nδ. Applying this once to the old optimum and once to the returned tour gives C≤(1+η)OPT+(2+η)2nδ.

2. A boundary state must record portal occurrences with multiplicity and which entry is paired with which exit. Four boundary points can have identical used portals but different connections, so a portal subset alone is insufficient.

3. The structural theorem is the hard geometric input. Random shift makes scale-specific patching and portal detours cheap in expectation. With expected overhead ≤ηOPT/2, Markov gives overhead ≤ηOPT with probability ≥1/2.

4. With m=O(log n/η) and r=O(1/η), the DP costs m^{O(r)}n log n, absorbed into n(log n)^{O(1/η)} for fixed η. The weaker r=O(m) bound only yields n^{O(log log n)}.

5. For each state enumerate compatible internal crossings and pairings of four child squares, reject inconsistent connections and closed subtours that leave points outside, then minimize the sum of child costs. At the root require one closed tour.

6. Independent repetition t times reduces structural failure to at most 2^(−t); taking the best feasible output never worsens cost. Enumerating all O(n²) shifts of a nice instance also finds a good shift.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-euclidean-tsp--source-proof)

---

## 2. Why is a subset of boundary portals an insufficient DP state?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-euclidean-tsp--oral-check-1

Why is a subset of boundary portals an insufficient DP state?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** For fixed ε>0, Euclidean TSP in the plane admits a randomized (1+ε) approximation in n·(log n)^{O(1/ε)} time, with success probability at least 1/2 per random dissection; all polynomially many integer shifts may be enumerated.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Two partial solutions can use the same four portals but pair them as (a,b),(c,d) or (a,c),(b,d). Only one may connect to the outside without a premature cycle. Record multiplicity and connectivity.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-euclidean-tsp--oral-check-1)

---

## 3. Does portal-respecting alone establish a PTAS?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-euclidean-tsp--oral-check-2

Does portal-respecting alone establish a PTAS?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** For fixed ε>0, Euclidean TSP in the plane admits a randomized (1+ε) approximation in n·(log n)^{O(1/ε)} time, with success probability at least 1/2 per random dissection; all polynomially many integer shifts may be enumerated.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. Without a constant-in-n crossing bound, the boundary state can be quasi-polynomial. Patching improves r from O(log n/ε) to O(1/ε), while m remains O(log n/ε).

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-euclidean-tsp--oral-check-2)

---

## 4. Prove the two-way snapping bound

**Doctoral proof · proof · 30 minutes suggested**

ID: core-euclidean-tsp--snap

Prove the two-way snapping bound. Give an explicit derivation, a failed simplification and its repair. Reconstruct the Euclidean TSP PTAS. Prove the snapping loss bound, describe a sufficient boundary state and its four-child transition, and distinguish the weaker portal-only running time from the polynomial bound after patching. State the exact structural lemma you invoke and how its expected extra cost yields success probability 1/2.

**Required output:** A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound.

**Prerequisites:** For fixed ε>0, Euclidean TSP in the plane admits a randomized (1+ε) approximation in n·(log n)^{O(1/ε)} time, with success probability at least 1/2 per random dissection; all polynomially many integer shifts may be enumerated.

**Examiner follow-up:** Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.

<details>
<summary>Solution route / investigation plan</summary>

1. If each point moves by at most δ, each edge changes by at most 2δ and any n-edge tour by at most 2nδ. Applying this once to the old optimum and once to the returned tour gives C≤(1+η)OPT+(2+η)2nδ.

2. State every invoked geometric lemma and distinguish its proof from its algorithmic consequences.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-euclidean-tsp--snap)

---

## 5. Show why a portal subset is insufficient

**Doctoral proof · proof · 30 minutes suggested**

ID: core-euclidean-tsp--state

Show why a portal subset is insufficient. Give an explicit derivation, a failed simplification and its repair. Why is a subset of boundary portals an insufficient DP state?

**Required output:** A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound.

**Prerequisites:** For fixed ε>0, Euclidean TSP in the plane admits a randomized (1+ε) approximation in n·(log n)^{O(1/ε)} time, with success probability at least 1/2 per random dissection; all polynomially many integer shifts may be enumerated.

**Examiner follow-up:** Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.

<details>
<summary>Solution route / investigation plan</summary>

1. A boundary state must record portal occurrences with multiplicity and which entry is paired with which exit. Four boundary points can have identical used portals but different connections, so a portal subset alone is insufficient.

2. State every invoked geometric lemma and distinguish its proof from its algorithmic consequences.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-euclidean-tsp--state)

---

## 6. Derive success from expected added length

**Doctoral proof · proof · 30 minutes suggested**

ID: core-euclidean-tsp--probability

Derive success from expected added length. Give an explicit derivation, a failed simplification and its repair. Reconstruct the Euclidean TSP PTAS. Prove the snapping loss bound, describe a sufficient boundary state and its four-child transition, and distinguish the weaker portal-only running time from the polynomial bound after patching. State the exact structural lemma you invoke and how its expected extra cost yields success probability 1/2.

**Required output:** A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound.

**Prerequisites:** For fixed ε>0, Euclidean TSP in the plane admits a randomized (1+ε) approximation in n·(log n)^{O(1/ε)} time, with success probability at least 1/2 per random dissection; all polynomially many integer shifts may be enumerated.

**Examiner follow-up:** Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.

<details>
<summary>Solution route / investigation plan</summary>

1. The structural theorem is the hard geometric input. Random shift makes scale-specific patching and portal detours cheap in expectation. With expected overhead ≤ηOPT/2, Markov gives overhead ≤ηOPT with probability ≥1/2.

2. State every invoked geometric lemma and distinguish its proof from its algorithmic consequences.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-euclidean-tsp--probability)

---

## 7. Separate portal-only and patched running times

**Examiner challenge · proof · 30 minutes suggested**

ID: core-euclidean-tsp--time

Separate portal-only and patched running times. Give an explicit derivation, a failed simplification and its repair. Does portal-respecting alone establish a PTAS?

**Required output:** A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound.

**Prerequisites:** For fixed ε>0, Euclidean TSP in the plane admits a randomized (1+ε) approximation in n·(log n)^{O(1/ε)} time, with success probability at least 1/2 per random dissection; all polynomially many integer shifts may be enumerated.

**Examiner follow-up:** Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.

<details>
<summary>Solution route / investigation plan</summary>

1. With m=O(log n/η) and r=O(1/η), the DP costs m^{O(r)}n log n, absorbed into n(log n)^{O(1/η)} for fixed η. The weaker r=O(m) bound only yields n^{O(log log n)}.

2. State every invoked geometric lemma and distinguish its proof from its algorithmic consequences.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-euclidean-tsp--time)

---

## 8. Specify a four-child DP transition

**Examiner challenge · proof · 30 minutes suggested**

ID: core-euclidean-tsp--transition

Specify a four-child DP transition. Give an explicit derivation, a failed simplification and its repair. Reconstruct the Euclidean TSP PTAS. Prove the snapping loss bound, describe a sufficient boundary state and its four-child transition, and distinguish the weaker portal-only running time from the polynomial bound after patching. State the exact structural lemma you invoke and how its expected extra cost yields success probability 1/2.

**Required output:** A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound.

**Prerequisites:** For fixed ε>0, Euclidean TSP in the plane admits a randomized (1+ε) approximation in n·(log n)^{O(1/ε)} time, with success probability at least 1/2 per random dissection; all polynomially many integer shifts may be enumerated.

**Examiner follow-up:** Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.

<details>
<summary>Solution route / investigation plan</summary>

1. For each state enumerate compatible internal crossings and pairings of four child squares, reject inconsistent connections and closed subtours that leave points outside, then minimize the sum of child costs. At the root require one closed tour.

2. State every invoked geometric lemma and distinguish its proof from its algorithmic consequences.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-euclidean-tsp--transition)

---

## 9. Amplify and derandomize the shift choice

**Examiner challenge · proof · 30 minutes suggested**

ID: core-euclidean-tsp--amplification

Amplify and derandomize the shift choice. Give an explicit derivation, a failed simplification and its repair. Reconstruct the Euclidean TSP PTAS. Prove the snapping loss bound, describe a sufficient boundary state and its four-child transition, and distinguish the weaker portal-only running time from the polynomial bound after patching. State the exact structural lemma you invoke and how its expected extra cost yields success probability 1/2.

**Required output:** A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound.

**Prerequisites:** For fixed ε>0, Euclidean TSP in the plane admits a randomized (1+ε) approximation in n·(log n)^{O(1/ε)} time, with success probability at least 1/2 per random dissection; all polynomially many integer shifts may be enumerated.

**Examiner follow-up:** Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.

<details>
<summary>Solution route / investigation plan</summary>

1. Independent repetition t times reduces structural failure to at most 2^(−t); taking the best feasible output never worsens cost. Enumerating all O(n²) shifts of a nice instance also finds a good shift.

2. State every invoked geometric lemma and distinguish its proof from its algorithmic consequences.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-euclidean-tsp--amplification)

---

## 10. Audit the use of the triangle inequality

**Examiner challenge · proof · 30 minutes suggested**

ID: core-euclidean-tsp--geometry

Audit the use of the triangle inequality. Give an explicit derivation, a failed simplification and its repair. Reconstruct the Euclidean TSP PTAS. Prove the snapping loss bound, describe a sufficient boundary state and its four-child transition, and distinguish the weaker portal-only running time from the polynomial bound after patching. State the exact structural lemma you invoke and how its expected extra cost yields success probability 1/2.

**Required output:** A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound.

**Prerequisites:** For fixed ε>0, Euclidean TSP in the plane admits a randomized (1+ε) approximation in n·(log n)^{O(1/ε)} time, with success probability at least 1/2 per random dissection; all polynomially many integer shifts may be enumerated.

**Examiner follow-up:** Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.

<details>
<summary>Solution route / investigation plan</summary>

1. The method uses Euclidean square geometry for the structural theorem. Triangle inequality justifies shortcutting portals, but arbitrary metrics need not admit the same planar dissection structure.

2. State every invoked geometric lemma and distinguish its proof from its algorithmic consequences.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-euclidean-tsp--geometry)

---

## 11. Investigate a compressed boundary interface

**Research seminar · research-extension · 60 minutes suggested**

ID: core-euclidean-tsp--research-interface

Investigate a compressed boundary interface. Give an explicit derivation, a failed simplification and its repair. Reconstruct the Euclidean TSP PTAS. Prove the snapping loss bound, describe a sufficient boundary state and its four-child transition, and distinguish the weaker portal-only running time from the polynomial bound after patching. State the exact structural lemma you invoke and how its expected extra cost yields success probability 1/2.

**Required output:** A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound.

**Prerequisites:** For fixed ε>0, Euclidean TSP in the plane admits a randomized (1+ε) approximation in n·(log n)^{O(1/ε)} time, with success probability at least 1/2 per random dissection; all polynomially many integer shifts may be enumerated.

**Examiner follow-up:** Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.

<details>
<summary>Solution route / investigation plan</summary>

1. Define an interface with portal multiplicities and connectivity. Prove when two partial solutions with the same interface are interchangeable, and build a counterexample to the portal-subset-only interface. This is a bounded research exercise, not a novelty claim.

2. State every invoked geometric lemma and distinguish its proof from its algorithmic consequences.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-euclidean-tsp--research-interface)

---

## 12. Investigate the dimensional dependence

**Research seminar · research-extension · 60 minutes suggested**

ID: core-euclidean-tsp--research-dimension

Investigate the dimensional dependence. Give an explicit derivation, a failed simplification and its repair. Reconstruct the Euclidean TSP PTAS. Prove the snapping loss bound, describe a sufficient boundary state and its four-child transition, and distinguish the weaker portal-only running time from the polynomial bound after patching. State the exact structural lemma you invoke and how its expected extra cost yields success probability 1/2.

**Required output:** A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound.

**Prerequisites:** For fixed ε>0, Euclidean TSP in the plane admits a randomized (1+ε) approximation in n·(log n)^{O(1/ε)} time, with success probability at least 1/2 per random dissection; all polynomially many integer shifts may be enumerated.

**Examiner follow-up:** Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.

<details>
<summary>Solution route / investigation plan</summary>

1. For a fixed dimension d, count the faces and portal choices per face for a hypercube dissection. Identify which planar patching argument needs a higher-dimensional replacement; do not assert a PTAS solely from a state count.

2. State every invoked geometric lemma and distinguish its proof from its algorithmic consequences.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-euclidean-tsp--research-dimension)
