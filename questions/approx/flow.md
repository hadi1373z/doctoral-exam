# Chernoff bounds and randomized unsplittable routing

§§5.10–5.11 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-flow)

## 1. Chernoff bounds and randomized unsplittable routing

**Doctoral proof · proof · 30 minutes suggested**

ID: core-flow--source-proof

Derive the multiplicative Chernoff bound from the MGF, then use it to prove an O(log n/log log n) congestion bound when fractional congestion is constant. Explain the different regime W*=Ω(log n).

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Independent path rounding preserves each demand but creates random edge congestion. Chernoff bounds and a union bound control the maximum over all edges.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. For X=∑Xᵢ with independent Bernoulli variables, E[e^(tX)]≤exp(μ(e^t−1)); minimizing at e^t=a/μ gives Pr[X≥a]≤(eμ/a)^a for a≥μ.

2. With μ=O(1), choose a=C log n/log log n. The logarithm of the failure probability is −a log(a/(eμ)); a sufficiently large C absorbs a polynomial number of edges.

3. If μ≥c log n, a constant multiplicative increase already gives inverse-polynomial failure. Independence is across commodities; edge loads are not independent of one another and do not need to be.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.10–5.11](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-flow--source-proof)

---

## 2. Why does path sampling produce feasible demands?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-flow--oral-check-1

Why does path sampling produce feasible demands?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Independent path rounding preserves each demand but creates random edge congestion. Chernoff bounds and a union bound control the maximum over all edges.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Each commodity chooses a complete source-to-sink path, so no flow-conservation constraint is broken.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.10–5.11](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-flow--oral-check-1)

---

## 3. Does the same proof handle arbitrary large demands unchanged?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-flow--oral-check-2

Does the same proof handle arbitrary large demands unchanged?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Independent path rounding preserves each demand but creates random edge congestion. Chernoff bounds and a union bound control the maximum over all edges.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. The bounded-increment MGF must reflect demand sizes; a unit-indicator Chernoff bound cannot be reused without normalization and hypotheses.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.10–5.11](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-flow--oral-check-2)

---

## 4. Why logarithmic-over-loglog congestion can be necessary

**Doctoral proof · proof · 60 minutes suggested**

ID: core-flow--occupancy-lower-barrier

Send n unit commodities independently and uniformly onto n parallel routes, each with its own bottleneck edge. For fixed δ∈(0,1), let k=floor((1−δ)ln n/ln ln n). Prove that with probability tending to one some edge has load at least k, despite fractional load one.

**Required output:** A complete second-moment lower bound with its algorithmic scope.

**Prerequisites:** balls into bins; second moment method

**Examiner follow-up:** Exhibit a deterministic congestion-one assignment for the same instance.

<details>
<summary>Solution route / investigation plan</summary>

1. Let Z count bins with load exactly k. Then E Z=n·C(n,k)n^(−k)(1−1/n)^(n−k)=(1+o(1))n e^(−1)/k! for k=o(sqrt(n)). Stirling’s formula gives ln E Z=δ ln n+o(ln n), so the mean diverges.

2. For distinct bins the exact joint probability is n!/[k!²(n−2k)!]·n^(−2k)(1−2/n)^(n−2k). Its ratio to the squared one-bin probability is 1+O(k²/n), tending to one. Hence Var Z/(E Z)²→0 and Chebyshev implies Pr[Z=0]→0. This lower bound concerns independent rounding, not the existence of a congestion-one integral assignment.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.10–5.11](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-flow--occupancy-lower-barrier)

---

## 5. A concentration bound for bounded commodity sizes

**Doctoral proof · proof · 45 minutes suggested**

ID: core-flow--bounded-demand-mgf

Let independent loads be L=sum_i d_i X_i, where 0≤d_i≤b and X_i are Bernoulli. With μ=E L, prove E exp(tL/b)≤exp[(μ/b)(e^t−1)] and derive Pr[L≥a]≤(eμ/a)^(a/b) for a≥μ. State the μ=0 case.

**Required output:** A weighted MGF derivation and a normalized tail theorem.

**Prerequisites:** MGF method; convexity

**Examiner follow-up:** Apply the statement to congestion L/c_e and identify the edge-specific maximum normalized demand.

<details>
<summary>Solution route / investigation plan</summary>

1. Convexity gives e^(t d_i/b)≤1+(d_i/b)(e^t−1). Thus each MGF factor is at most 1+p_i(d_i/b)(e^t−1), and 1+u≤e^u bounds their product by the stated exponential. Independence is used only to factor the MGF across commodities.

2. Markov’s inequality followed by t=ln(a/μ) gives exp[−(a/b)ln(a/μ)+a/b−μ/b], which is at most (eμ/a)^(a/b). For μ=0 and nonnegative loads, L=0 almost surely. The effective concentration parameter is μ/b, so a large maximum demand weakens the guarantee even at fixed expected load.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.10–5.11](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-flow--bounded-demand-mgf)

---

## 6. Extract and sample rational path flows exactly

**Examiner challenge · construction · 45 minutes suggested**

ID: core-flow--path-decomposition-bits

Given a nonnegative rational single-commodity s–t flow of value one, remove cycles and decompose it into at most |E| simple paths. Design exact sampling according to path weights, and distinguish expected polynomial sampling time from a fixed worst-case bound on fair random bits.

**Required output:** A decomposition algorithm and an honest randomness-complexity bound.

**Prerequisites:** flow decomposition; rational sampling

**Examiner follow-up:** How does approximate sampling error across k commodities affect the final failure probability?

<details>
<summary>Solution route / investigation plan</summary>

1. Repeatedly find a positive-flow s–t path, subtract its minimum edge flow, and output that amount. Each subtraction eliminates an edge from the positive support, so at most |E| paths arise after cycles are removed. Removing cycles cannot increase congestion and preserves net flow value.

2. Express the rational path probabilities with a common integer denominator D whose bit length is polynomial in the input arithmetic length. Draw a uniform integer in [0,D−1] by rejection from ceil(log₂D) fair bits; acceptance probability exceeds one half. This gives expected polynomial time, but exact sampling of a probability such as 1/3 cannot use a uniformly bounded number of fair bits because bounded-bit outcome probabilities are dyadic.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.10–5.11](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-flow--path-decomposition-bits)

---

## 7. One bound covering large and small expected edge loads

**Examiner challenge · synthesis · 40 minutes suggested**

ID: core-flow--additive-congestion-regime

Assume unit demands and independent path choices, with every edge mean at most μ. Using Bernstein’s bound Pr[L_e−E L_e≥t]≤exp(−t²/[2(μ+t/3)]), derive simultaneous load at most μ+sqrt(2μ ln(m/η))+(2/3)ln(m/η) on m edges with probability at least 1−η.

**Required output:** An explicit all-edge load bound with a regime comparison.

**Prerequisites:** Bernstein inequality; union bounds

**Examiner follow-up:** For a desired relative excess δμ, what lower bound on μ follows?

<details>
<summary>Solution route / investigation plan</summary>

1. Set H=ln(m/η) and t=sqrt(2μH)+2H/3. Expanding shows t²≥2H(μ+t/3), so each edge failure probability is at most e^−H=η/m. If an edge has smaller mean, crossing the common threshold μ+t is contained in its own corresponding Bernstein tail event.

2. A union bound gives the simultaneous statement without independence across edges. When μ≫H the excess is o(μ), giving near-relative preservation; when μ=O(1), this additive estimate is O(log m), weaker than the sharper log m/log log m Chernoff optimization. Different bounds are useful in different load regimes.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.10–5.11](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-flow--additive-congestion-regime)

---

## 8. Derandomize routing with an exponential potential

**Examiner challenge · construction · 50 minutes suggested**

ID: core-flow--pessimistic-estimator-routing

For explicit polynomial path supports, choose t>0 and a threshold a such that E Ψ<1 for Ψ=sum_e exp[t(L_e−a)]. Show how to fix one commodity path at a time without increasing its conditional expectation, obtaining every edge load strictly below a.

**Required output:** A constructive potential argument and a precision requirement.

**Prerequisites:** conditional expectation; path-rounding MGF

**Examiner follow-up:** How large a precision margin suffices when there are K fixing steps?

<details>
<summary>Solution route / investigation plan</summary>

1. For a prefix of fixed choices, the conditional expectation for edge e is exp[t(fixed_load_e−a)] times the product over unfixed commodities of (1−p_ie+p_ie e^t). Evaluate the sum for each supported path of the next commodity. Their probability-weighted average equals the current conditional expectation, so one candidate does not increase it.

2. At the end Ψ is deterministic and below one. If any edge had L_e≥a its single summand would be at least one, a contradiction. Account for numerical precision or use a rational base q=e^t>1 and potential sum q^(L_e−a) with a strict initial margin. A symbolic expression is not automatically a polynomial-bit exact implementation.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.10–5.11](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-flow--pessimistic-estimator-routing)

---

## 9. Research exercise: trade congestion for accepted commodities

**Research seminar · research-extension · 90 minutes suggested**

ID: core-flow--routing-alteration

Assume K unit commodities, each supported path has at most ℓ edges, and every fractional edge load is at most b. Independently round and discard every commodity touching an edge with rounded load greater than integer c. Prove expected retained count at least K[1−ℓ(eb/c)^c] when c≥b. Compare with exact maximum-throughput routing on tiny graphs.

**Required output:** A feasible alteration theorem and a small throughput comparison.

**Prerequisites:** conditional Chernoff bounds; alteration

**Examiner follow-up:** Can a less aggressive alteration retain some commodities on an overloaded edge?

<details>
<summary>Solution route / investigation plan</summary>

1. Condition on commodity i selecting a particular path. On any edge of that path, overload beyond c occurs only if the other commodities contribute at least c units. Those choices remain independent and have total mean at most b, so the Chernoff bound is at most (eb/c)^c. Union-bound over at most ℓ path edges, then average over i’s path.

2. Every retained commodity avoids all originally overloaded edges, while all other originally nonoverloaded edges had load at most c; deleting commodities cannot increase loads. Sum retention probabilities to get the expected throughput. For the experiment enumerate path choices and retained subsets for an exact baseline; a capacity violation or expectation below the formula is failure. Negative lower bounds are reported as vacuous.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.10–5.11](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-flow--routing-alteration)

---

## 10. Research exercise: replace independence with moment inequalities

**Research seminar · research-extension · 90 minutes suggested**

ID: core-flow--negative-cylinder-sufficiency

For each edge suppose its commodity-use indicators obey E product_{i∈S}X_i≤product_{i∈S}p_i for every subset S. Prove the standard upper-tail MGF bound still holds even if path choices are dependent. Audit this condition for uniform fixed-cardinality selections on one edge and compare with perfectly correlated choices.

**Required output:** A sufficient-dependence theorem and exact coupling audits.

**Prerequisites:** negative dependence; MGF expansion

**Examiner follow-up:** Why are pairwise moment inequalities alone insufficient for this expansion?

<details>
<summary>Solution route / investigation plan</summary>

1. Expand E product_i[1+(e^t−1)X_i] as a sum over subsets. For t≥0 every coefficient is nonnegative, so the assumed product-moment inequalities bound it by product_i[1+(e^t−1)p_i]. The remaining Chernoff optimization is unchanged. The hypothesis is edgewise; it need not imply independence between different edges.

2. For a uniform r-subset of K commodities, a size-s specified subset is included with probability (r)_s/(K)_s≤(r/K)^s. By contrast, taking all indicators equal with mean p gives joint moments p>p² when 0<p<1. Use exact enumeration for K≤12 as the baseline. Failure means asserting the tail theorem for a coupling with an unchecked or violated moment inequality.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.10–5.11](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-flow--negative-cylinder-sufficiency)

---

## 11. A union bound can be asymptotically sharp

**Doctoral proof · construction · 35 minutes suggested**

ID: core-flow--independent-edge-failures

Create m disjoint routing gadgets, each with K independent unit commodities using its bottleneck with probability 1/K and otherwise private bypasses. If p is the bottleneck overload probability in one gadget, compute the exact probability some gadget overloads and its behavior when mp tends to zero.

**Required output:** A routing realization and a sharpness calculation.

**Prerequisites:** independent path rounding; union bounds

**Examiner follow-up:** What does the exact expression approach when mp tends to a positive constant?

<details>
<summary>Solution route / investigation plan</summary>

1. Choices in disjoint gadgets use independent commodity sets, so overload events are independent even though edge loads inside a gadget may be dependent. Each has probability p, giving overall failure 1−(1−p)^m.

2. When mp→0, the binomial expansion or logarithm gives 1−(1−p)^m=(1+o(1))mp. Thus the union bound mp cannot be improved uniformly merely by observing that it combines many edge events. A better congestion threshold requires stronger tail estimates or structural dependence information.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.10–5.11](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-flow--independent-edge-failures)

---

## 12. Preserve a cost bound alongside congestion

**Examiner challenge · construction · 35 minutes suggested**

ID: core-flow--routing-cost-bicriteria

Suppose independent rounding has expected path cost C>0 and violates a certified congestion threshold with probability at most 1/4. Design a repeat-until-success algorithm returning congestion within threshold and cost at most 2C, with at most four expected trials. Explain how the stopping test is implementable.

**Required output:** A feasible two-criterion rounding rule with explicit expected runtime.

**Prerequisites:** Markov inequality; bicriteria approximation; rejection sampling

**Examiner follow-up:** Derive the trial count for congestion failure η and cost multiplier a>1 with η+1/a<1.

<details>
<summary>Solution route / investigation plan</summary>

1. Markov bounds probability of cost above 2C by at most one half. The union bound makes probability of either unacceptable event at most three quarters, so a complete trial meets both conditions with probability at least one quarter. Independent repetition gives expected trials at most four.

2. C is the computable fractional path-cost expectation, and actual congestion and path cost can be evaluated directly on each rounded outcome. The algorithm need not know integral OPT. If C=0 with nonnegative costs, cost is zero almost surely and only congestion needs testing.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.10–5.11](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-flow--routing-cost-bicriteria)
