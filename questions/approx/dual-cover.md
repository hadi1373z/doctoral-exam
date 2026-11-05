# Primal–dual set cover: tight sets and frequency

§7.1 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-dual-cover)

## 1. Primal–dual set cover: tight sets and frequency

**Doctoral proof · proof · 30 minutes suggested**

ID: core-dual-cover--source-proof

Prove primal feasibility, dual feasibility and the f factor. Construct the charging expression explicitly and explain why replacing f by the maximum set cardinality is unjustified.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Raising uncovered-element dual variables until sets become tight gives an f-approximation when each element belongs to at most f sets.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. Every purchased set is tight, so ∑bought cS=∑ᵤ yᵤ·|{bought S:u∈S}|≤f∑ᵤyᵤ.

2. Weak duality gives ∑ᵤyᵤ≤OPT. Termination covers all elements provided the instance is coverable.

3. The bound is incidence frequency per element, not size per set. A set’s cardinality can be small while an element occurs in very many sets.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-cover--source-proof)

---

## 2. Why stop increasing a dual variable when a set gets tight?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-dual-cover--oral-check-1

Why stop increasing a dual variable when a set gets tight?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Raising uncovered-element dual variables until sets become tight gives an f-approximation when each element belongs to at most f sets.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Further growth could violate its dual constraint, destroying the lower-bound certificate.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-cover--oral-check-1)

---

## 3. Does greedy’s Hn analysis automatically prove this algorithm’s ratio?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-dual-cover--oral-check-2

Does greedy’s Hn analysis automatically prove this algorithm’s ratio?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Raising uncovered-element dual variables until sets become tight gives an f-approximation when each element belongs to at most f sets.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. Greedy charging and dual tight-set charging are distinct analyses.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-cover--oral-check-2)

---

## 4. Recover the frequency bound from a primal LP solution

**Doctoral proof · proof · 35 minutes suggested**

ID: core-dual-cover--lp-threshold-rounding

Given a feasible fractional set cover x with each element in at most f sets, select every set with x_S≥1/f. Prove coverage and cost at most f times the fractional cost. Compare the certificate this gives with the tight-set primal–dual certificate.

**Required output:** A threshold algorithm and a precise comparison of two LP certificates.

**Prerequisites:** set-cover LP; element frequency

**Examiner follow-up:** How should variables above one be treated when costs are nonnegative?

<details>
<summary>Solution route / investigation plan</summary>

1. For any element e, its incident variables sum to at least one. If fewer than or equal to f variables were all below 1/f, their sum would be below one, so some selected set covers e. For each selected set, c_S≤f c_Sx_S, giving the cost bound after summation.

2. This argument uses a feasible primal fractional solution and LP≤OPT. Tight-set charging instead uses a feasible dual and bounds the number of purchased sets charged to each dual variable. Both yield factor f, but their certificates and required computational inputs differ: one need not assume that the threshold-selected sets are dual-tight.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-cover--lp-threshold-rounding)

---

## 5. An explicit frequency-two integrality gap

**Doctoral proof · construction · 40 minutes suggested**

ID: core-dual-cover--complete-graph-gap

Let universe elements be edges of K_m and let each vertex define the set of its incident edges, with cost one. Prove the integral cover optimum is m−1 and the LP optimum is m/2. Give matching primal and dual fractional certificates.

**Required output:** An integral optimum and matching fractional primal-dual witnesses.

**Prerequisites:** vertex cover as set cover; LP duality

**Examiner follow-up:** Why does inclusion-wise minimality of an integral cover not close this LP gap?

<details>
<summary>Solution route / investigation plan</summary>

1. A cover omitting two vertices misses their connecting edge, so it must choose at least m−1 vertex sets, and that many suffice. Every element belongs to exactly two sets. Assign x_v=1/2 to obtain fractional cost m/2.

2. Set every edge dual variable to 1/(m−1). Each vertex set contains m−1 edges and is therefore tight, while the total dual is C(m,2)/(m−1)=m/2. Weak duality proves LP optimality. The ratio is 2−2/m, showing an asymptotically sharp LP barrier for frequency two even with unit costs.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-cover--complete-graph-gap)

---

## 6. Compare sequential and simultaneous dual growth

**Examiner challenge · construction · 45 minutes suggested**

ID: core-dual-cover--growth-policy-cost

For a two-edge path u–v–w, view vertex cover as set cover, with costs c_u=c_w=1 and c_v=1+η, 0<η<1. Trace sequential uncovered-edge growth and simultaneous equal growth. Compute both costs and their dual certificates.

**Required output:** Two complete growth traces and a policy-sensitive ratio calculation.

**Prerequisites:** primal–dual vertex cover; tight constraints

**Examiner follow-up:** Would reverse deletion remove the purchased leaf after the center is bought?

<details>
<summary>Solution route / investigation plan</summary>

1. Raise the dual of edge uv first. At value one, u becomes tight and is bought. Raising vw next makes v tight after η more growth, so buying v covers the remainder. The cost is 2+η and total dual 1+η; the true optimum is the center alone, cost 1+η.

2. Under simultaneous growth of both uncovered edge duals, the center reaches tightness at time (1+η)/2 before either leaf reaches one. Buying v gives the optimum. This example shows that legal growth policies can produce different solutions, while both retain the frequency-two certificate. The sequential ratio tends to two as η tends to zero.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-cover--growth-policy-cost)

---

## 7. Extend frequency rounding to bounded multicover

**Examiner challenge · proof · 45 minutes suggested**

ID: core-dual-cover--multicover-threshold

Each element e needs r_e distinct selected sets, appears in f_e sets, and a fractional solution satisfies sum_{S∋e}x_S≥r_e with 0≤x_S≤1. Let k=max_e(f_e−r_e+1). Prove selecting x_S≥1/k gives a feasible multicover of cost at most k times the fractional objective.

**Required output:** A multicover rounding theorem with its necessary upper-bound hypothesis.

**Prerequisites:** multicover LP; bounded variables

**Examiner follow-up:** How does the bound specialize to ordinary cover and to r_e=f_e?

<details>
<summary>Solution route / investigation plan</summary>

1. Suppose fewer than r_e incident variables meet the threshold. At most r_e−1 variables contribute at most one each, and the other f_e−r_e+1 contribute strictly less than 1/k. Their total is strictly below r_e−1+(f_e−r_e+1)/k≤r_e, contradicting feasibility.

2. Every selected set satisfies c_S≤k c_Sx_S, so summing gives the factor. The upper bounds x_S≤1 are essential to the counting contradiction; they encode distinct selection rather than buying arbitrarily many copies of one set. Assume r_e≤f_e and coverability, and handle a vacuous empty universe separately.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-cover--multicover-threshold)

---

## 8. Prune a tight cover and distinguish its two guarantees

**Examiner challenge · synthesis · 35 minutes suggested**

ID: core-dual-cover--reverse-delete-certificate

Start with all m vertex sets in the complete-graph instance above and the uniform tight dual. Apply arbitrary reverse deletion while maintaining coverage. Prove the resulting cover has exactly m−1 sets, is integral-optimal, but its cost-to-dual ratio still tends to two.

**Required output:** A deletion-order-independent analysis separating certificate gap from approximation gap.

**Prerequisites:** minimal covers; dual lower bounds

**Examiner follow-up:** Can a nonoptimal feasible cover have a dual certificate equal to its cost?

<details>
<summary>Solution route / investigation plan</summary>

1. Deleting one vertex set leaves every edge covered by at least one endpoint. After a deletion, removing any second vertex set uncovers the edge between those two vertices. Thus every deletion order stops at exactly m−1 selected sets.

2. The resulting cover is optimal by the two-omitted-vertices argument, yet the fixed dual remains m/2. Consequently cost/dual=2−2/m even though cost/OPT=1. A loose LP-based certificate does not imply a bad actual approximation on that instance; reverse deletion may improve the solution without improving the relaxation lower bound.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-cover--reverse-delete-certificate)

---

## 9. Research exercise: audit growth certificates on bounded incidence systems

**Research seminar · research-extension · 90 minutes suggested**

ID: core-dual-cover--exhaustive-dual-audit

Enumerate coverable systems with at most six elements, eight sets, frequency at most three, and costs in {1,2,3}. Compare sequential dual growth, simultaneous growth, and cost-effectiveness greedy with exact subset enumeration. For the two primal–dual rules verify cost≤f sum y and all dual constraints.

**Required output:** A bounded enumerator and complete primal-dual audit records.

**Prerequisites:** finite set-system generation; dual charging

**Examiner follow-up:** How much does reverse deletion change actual cost and purchase multiplicities?

<details>
<summary>Solution route / investigation plan</summary>

1. Record the purchased tight sets, the final element dual values, and each element’s purchase multiplicity. Recompute purchased cost as sum_e y_e·multiplicity_e; equality requires every purchased set to remain tight. Then check multiplicity≤f and weak duality independently against the enumerated optimum.

2. Use fixed tie orders and explicitly stated growth rules so comparisons are reproducible. Greedy is a separate baseline and need not satisfy the same f-dual certificate unless one constructs an appropriate dual. Failure criteria are uncovered elements, violated dual constraints, a broken tightness identity, or a primal–dual cost above f times its own dual objective. Finite observations do not establish a new worst-case ratio.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-cover--exhaustive-dual-audit)

---

## 10. Research exercise: prove the general frequency-f gap

**Research seminar · research-extension · 85 minutes suggested**

ID: core-dual-cover--uniform-hypergraph-gap

Let the universe be all f-subsets of [m], m≥f≥2, and set i contain precisely those subsets containing i, with unit cost. Prove integer optimum m−f+1 and LP optimum m/f. Verify the certificates for m≤10 and compare the gap with the frequency-f guarantee.

**Required output:** A parameterized gap proof and a finite certificate verification.

**Prerequisites:** uniform hypergraphs; symmetric LP witnesses

**Examiner follow-up:** Why is an LP integrality gap alone not an NP-hardness-of-approximation theorem?

<details>
<summary>Solution route / investigation plan</summary>

1. Selecting vertices covers every f-subset exactly when the unselected vertices number at most f−1. Thus the integral optimum is m−f+1. The uniform primal x_i=1/f has objective m/f. For the dual assign every f-subset weight 1/C(m−1,f−1), making each vertex-set constraint tight.

2. The dual objective is C(m,f)/C(m−1,f−1)=m/f, matching the primal. Hence the gap is f(1−(f−1)/m), approaching f for fixed f and growing m. Exact subset enumeration is the finite baseline; failure means a mismatched incidence count or a cover smaller than the proved optimum. This extends a specified gap family rather than claiming new hardness.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-cover--uniform-hypergraph-gap)

---

## 11. Prove the harmonic guarantee for a different covering algorithm

**Doctoral proof · proof · 50 minutes suggested**

ID: core-dual-cover--greedy-harmonic-dual

For weighted greedy set cover, charge each newly covered element c_S divided by the number newly covered when S is chosen. If maximum set size is d, prove each set’s total element charges are at most H_d times its cost. Derive a feasible scaled dual and the H_d approximation.

**Required output:** A full dual-fitting proof and a distinction between two covering parameters.

**Prerequisites:** weighted greedy cover; dual fitting; harmonic numbers

**Examiner follow-up:** How do zero-cost sets affect the initial greedy steps?

<details>
<summary>Solution route / investigation plan</summary>

1. Fix a set Q. When r of its elements remain uncovered, greedy’s chosen cost-per-new-element is at most c_Q/r because Q itself is available. Order Q’s elements by their covering times, treating simultaneous groups with an inequality. Their total charges are at most c_Q(1+1/2+…+1/|Q|)≤H_d c_Q.

2. The sum of all charges equals greedy cost. Dividing each element charge by H_d gives a feasible set-cover dual, so greedy cost≤H_dOPT. This uses maximum set cardinality through a harmonic sum, whereas the tight-set primal–dual f bound uses element frequency through purchase multiplicities.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-cover--greedy-harmonic-dual)

---

## 12. Shift negative covering costs before stating a ratio

**Examiner challenge · synthesis · 40 minutes suggested**

ID: core-dual-cover--negative-cost-shift

If some set costs are negative, include all such sets first and solve the uncovered residual with a nonnegative-cost f-approximation. Let C_− be their total cost. Prove ALG≤C_−+f(OPT−C_−), and show why ALG≤fOPT is generally false even for an exact algorithm.

**Required output:** A correct preprocessing theorem and a negative-optimum counterexample.

**Prerequisites:** cover monotonicity; objective shifts; ratio conventions

**Examiner follow-up:** When can the shifted inequality still be converted to a useful ratio?

<details>
<summary>Solution route / investigation plan</summary>

1. Every optimum may include all negative-cost sets, because adding one preserves coverage and lowers cost. After fixing them, the residual optimum equals OPT−C_− and is nonnegative. Applying the residual guarantee and adding back C_− proves the shifted bound.

2. For an instance already covered by a single cost−1 set, an exact output has ALG=OPT=−1. With f>1 the statement −1≤−f is false. Multiplicative minimization ratios require a suitable nonnegative objective benchmark; algebraically adding a negative baseline changes the guarantee.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-cover--negative-cost-shift)
