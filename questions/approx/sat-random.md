# Random and biased assignments; derandomization

§§5.1–5.3 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-sat-random)

## 1. Random and biased assignments; derandomization

**Doctoral proof · proof · 30 minutes suggested**

ID: core-sat-random--source-proof

Give a weighted MAX-SAT instance with both unit and long clauses. Compute the conditional-expectation update exactly, derive the length-dependent ratio, and explain the limitation of one common biased coin when negative literals are present.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** An independent fair assignment satisfies a k-literal non-tautological clause on distinct variables with probability 1−2^−k. Conditional expectation converts a computable expectation guarantee into a deterministic one.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. For independent marginals yᵢ, a clause fails with probability ∏positive(1−yᵢ)∏negative yᵢ. The conditional expression drops assigned false literals and becomes zero failure once a literal is true.

2. At a fair next bit, E[X|prefix] is the average of its two child expectations; choose a child at least as large. Recompute clause contributions in polynomial time.

3. A common bias improves positive unit clauses while harming negative ones. A guarantee must analyze the actual literal pattern; it cannot simply substitute p into 1−(1−p)^k for every clause.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.1–5.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-random--source-proof)

---

## 2. Where is independence used?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-sat-random--oral-check-1

Where is independence used?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** An independent fair assignment satisfies a k-literal non-tautological clause on distinct variables with probability 1−2^−k. Conditional expectation converts a computable expectation guarantee into a deterministic one.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Only to multiply the within-clause failure probabilities. Linearity of expectation needs no independence between clauses.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.1–5.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-random--oral-check-1)

---

## 3. What is a certificate for the final deterministic guarantee?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-sat-random--oral-check-2

What is a certificate for the final deterministic guarantee?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** An independent fair assignment satisfies a k-literal non-tautological clause on distinct variables with probability 1−2^−k. Conditional expectation converts a computable expectation guarantee into a deterministic one.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. A monotone sequence of conditional expectations ending at the actual integral objective.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.1–5.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-random--oral-check-2)

---

## 4. How much independence does clause evaluation require?

**Doctoral proof · proof · 40 minutes suggested**

ID: core-sat-random--k-wise-independence

For a weighted CNF whose normalized clauses have width at most k, prove that k-wise independent fair bits give the same expected satisfied weight as fully independent bits. Show that pairwise independence is insufficient for width three by using a uniform even-parity triple.

**Required output:** A locality lemma and a pairwise-independent counterexample.

**Prerequisites:** k-wise independence; indicator expectations

**Examiner follow-up:** Can a k-wise independent distribution be enumerated efficiently if its support is explicitly supplied?

<details>
<summary>Solution route / investigation plan</summary>

1. Each clause’s truth indicator depends on at most k distinct coordinates. A k-wise independent fair distribution has exactly the uniform distribution on that coordinate set, so its failure probability is 2^−width. Sum the expectations with nonnegative weights; independence among different clauses is not required.

2. For a uniform distribution on {000,011,101,110}, every pair is uniform, but Pr[x∨y∨z is false]=1/4 rather than 1/8. Thus this particular clause has expected satisfaction 3/4. The example isolates the missing third-order independence without changing any one-bit or two-bit marginal.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.1–5.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-random--k-wise-independence)

---

## 5. Optimize a common bias on a signed formula

**Doctoral proof · construction · 35 minutes suggested**

ID: core-sat-random--bias-objective-polynomial

Consider weights A,B,C≥0 on clauses x, ¬y, and x∨y respectively, with x,y independently true with common probability p. Derive the expected value as a polynomial in p, maximize it on [0,1], and compare with choosing a deterministic assignment separately for each instance.

**Required output:** The optimizer formula and a correctly evaluated four-assignment table.

**Prerequisites:** independent biased bits; quadratic optimization

**Examiner follow-up:** For A=B and C>0, quantify the common-bias loss exactly.

<details>
<summary>Solution route / investigation plan</summary>

1. The expectation is Ap+B(1−p)+C(2p−p²)=B+(A−B+2C)p−Cp². If C>0, the maximizing bias is the projection of (A−B+2C)/(2C) onto [0,1]. If C=0, choose an endpoint according to the sign of A−B. Include boundary cases rather than dividing by C silently.

2. The four deterministic assignments have values B, A+B+C, C, and A+C respectively for (0,0),(1,0),(0,1),(1,1). Therefore the optimum is A+B+C, attained by x=1,y=0. A common bias constrains both marginals equally and can lose value even though independent variable-specific marginals can attain the optimum.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.1–5.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-random--bias-objective-polynomial)

---

## 6. A concentration bound from variable influence

**Examiner challenge · proof · 45 minutes suggested**

ID: core-sat-random--bounded-incidence-concentration

Let F be satisfied clause weight under independent fair variables, and let D_i be total weight of clauses containing variable i. Prove Pr[F≤E F−t]≤exp(−2t²/sum D_i²) using bounded differences. Explain why unbounded clause overlap can make expectation alone a weak high-probability certificate.

**Required output:** An influence calculation and an overlap counterexample.

**Prerequisites:** bounded differences; weighted MAX-SAT

**Examiner follow-up:** What exponent follows if every clause has weight one and every variable occurs at most d times?

<details>
<summary>Solution route / investigation plan</summary>

1. Changing bit i changes only clauses incident to i, and their total possible objective change is at most D_i. Apply the bounded-differences inequality to the independent bit coordinates; no clause-indicator independence is assumed. If all D_i vanish, F is constant and the nontrivial tail probability is zero.

2. For M identical unit clauses x of weight one, F is either 0 or M with equal probability. Its expectation is M/2, but it does not concentrate around that value on a sublinear scale. Here D_x=M, so the denominator correctly records the large dependency. Normalization may merge duplicates into one weight-M clause without changing the phenomenon.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.1–5.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-random--bounded-incidence-concentration)

---

## 7. Derandomize a correlated finite distribution

**Examiner challenge · construction · 40 minutes suggested**

ID: core-sat-random--conditional-estimator-limited-support

You are given M Boolean assignments with rational probabilities summing to one. Their distribution need not be independent. Design a conditional-expectation procedure that fixes variables one at a time and returns satisfied weight at least the distributional mean. Give runtime and specify how zero-probability branches are handled.

**Required output:** A distribution-independent derandomization invariant and a finite-support implementation.

**Prerequisites:** conditional expectation; finite probability spaces

**Examiner follow-up:** When is simply taking the best support assignment faster than this prefix procedure?

<details>
<summary>Solution route / investigation plan</summary>

1. Maintain the surviving assignments and their original probability masses. For each next bit value with positive surviving mass, compute the weighted average objective among that child’s assignments. The parent conditional mean is the mass-weighted average of the positive children, so one child has value at least the parent. Discard a zero-mass child rather than defining a conditional expectation there.

2. After all coordinates are fixed, every surviving assignment is the same word and the conditional mean equals its actual objective. Evaluating all M objectives once and aggregating by prefixes gives a polynomial implementation, for example O(Mn+M·formula size) arithmetic operations. This construction preserves the supplied expectation but does not justify a full-independence clause formula for the starting distribution.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.1–5.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-random--conditional-estimator-limited-support)

---

## 8. Encode a cut objective as two-literal satisfaction

**Examiner challenge · synthesis · 40 minutes suggested**

ID: core-sat-random--random-cut-cnf-reduction

For each nonnegative weighted graph edge uv create the two clauses (x_u∨x_v) and (¬x_u∨¬x_v), each of weight w_uv. Prove satisfied clause weight equals total edge weight plus cut weight. Derive what a 3/4 clause-weight guarantee implies for cut weight, and explain the effect of the additive baseline.

**Required output:** An exact objective identity and a ratio-transfer calculation.

**Prerequisites:** MAX-CUT; weighted MAX-2SAT

**Examiner follow-up:** Using OPT_CUT≥W/2, what is the weakest multiplicative ratio certified by the displayed inequality?

<details>
<summary>Solution route / investigation plan</summary>

1. If the endpoints receive different bits, both clauses are true; if equal, exactly one is true. Summing yields SAT(x)=W+CUT(x), and OPT_SAT=W+OPT_CUT. A guarantee SAT(x)≥(3/4)(W+OPT_CUT) gives CUT(x)≥(3/4)OPT_CUT−W/4.

2. Since OPT_CUT≤W, this expression does not imply a 3/4 cut approximation; at OPT_CUT=W it gives only W/2. Fair assignments have expected cut W/2 and expected satisfaction 3W/2, consistent with the identity. An affine objective shift must be tracked in a reduction rather than cancelling ratios as though objectives were proportional.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.1–5.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-random--random-cut-cnf-reduction)

---

## 9. Research exercise: finite support versus clause locality

**Research seminar · research-extension · 90 minutes suggested**

ID: core-sat-random--small-bias-exhaustive-study

For n≤8, enumerate uniform linear subspaces of F₂^n given by generator matrices of rank at most four. For clause widths k≤4, compare their worst clause-failure probability with 2^−k. The baseline is full-cube enumeration. Prove a rank criterion characterizing when every width-k marginal is uniform.

**Required output:** A proved rank criterion and exact probability tables.

**Prerequisites:** linear algebra over F₂; k-wise independence

**Examiner follow-up:** Why is pairwise independence equivalent to nonzero, distinct generator columns?

<details>
<summary>Solution route / investigation plan</summary>

1. Sampling a uniform generator seed gives a uniform image under any chosen set of output coordinates. That marginal is uniform on all k bits exactly when the corresponding k columns of the generator matrix have rank k. Consequently every width-at-most-k marginal is fair and independent exactly when every such column subset is linearly independent.

2. Enumerate both positive and negative literal patterns; checking only all-positive clauses can miss a nonuniform marginal whose missing or heavy atom lies elsewhere. Report the smallest dependent column sets and their exact violating probabilities. A rank-certified k-wise independent family with a wrong clause probability is a failure. The target is a finite characterization and experiment, not a new pseudorandom construction.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.1–5.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-random--small-bias-exhaustive-study)

---

## 10. Research exercise: certify a grid search for biases

**Research seminar · research-extension · 90 minutes suggested**

ID: core-sat-random--bias-grid-certification

For a weighted CNF of total weight W and normalized width at most k, let f(p_1,…,p_n) be expected satisfaction under independent marginals. Prove |f(p)−f(q)|≤sum D_i|p_i−q_i|, where D_i is incident weight. Use this to certify an additive εW grid approximation for n≤8, comparing with all Boolean assignments.

**Required output:** A coupling proof and a certified finite-dimensional experiment.

**Prerequisites:** multilinear expectations; coupling; bounded influence

**Examiner follow-up:** Can the mesh depend on D_i to reduce the total number of grid points?

<details>
<summary>Solution route / investigation plan</summary>

1. Couple assignments by independent uniform U_i and declare bit i true when U_i≤p_i or q_i. Coordinate i differs with probability |p_i−q_i|. The deterministic change in objective is at most the sum of D_i over differing coordinates, so expectation gives the Lipschitz bound. Since sum D_i≤kW, mesh ε/k in every coordinate suffices when rounding to a grid point.

2. The maximum of a multilinear expectation on [0,1]^n occurs at a Boolean vertex: fix one coordinate at a maximizing endpoint repeatedly. Thus exact Boolean optimization is the baseline and the grid should never beat it beyond numerical tolerance. Record the cost of the grid and its certified error; exceeding OPT or missing the additive bound is failure. The exercise studies certification, not a polynomial-time solution for arbitrary n.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.1–5.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-random--bias-grid-certification)

---

## 11. Compute covariance from signed clause overlap

**Doctoral proof · proof · 45 minutes suggested**

ID: core-sat-random--clause-overlap-variance

For normalized clauses C,D of widths k,l under fair independent bits, derive covariance of their satisfaction indicators. Separate the case of an oppositely signed shared variable from r shared variables with consistent signs. Use the formula to express variance of weighted satisfied clause value.

**Required output:** An exact signed-overlap formula and weighted variance expansion.

**Prerequisites:** joint indicators; signed literal overlap

**Examiner follow-up:** Evaluate the variance for the pair x∨y and ¬x∨y.

<details>
<summary>Solution route / investigation plan</summary>

1. Satisfaction covariance equals failure-indicator covariance. If a shared variable has opposite signs, simultaneous failure is impossible, giving covariance −2^(−k−l). Otherwise failure fixes all k+l−r distinct variables and has probability 2^(−k−l+r), giving covariance 2^(−k−l)(2^r−1).

2. The total variance is sum_C w_C² Var(I_C)+2 sum_{C<D}w_Cw_D Cov(I_C,I_D), with Var(I_C)=(1−2^−k)2^−k. Disjoint clauses have zero covariance, but consistent and inconsistent overlaps can contribute opposite signs. Clause dependency cannot be summarized solely by the number of shared variables.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.1–5.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-random--clause-overlap-variance)

---

## 12. Quantify numerical error during derandomization

**Examiner challenge · proof · 35 minutes suggested**

ID: core-sat-random--approximate-conditional-decisions

A conditional-expectation algorithm fixes n bits. At each step it chooses a positive-probability branch whose true conditional expectation is within δ of the better branch. Prove final value at least initial expectation minus nδ, and derive a sufficient precision when each displayed child expectation has absolute error at most ξ.

**Required output:** A robust derandomization theorem and an explicit precision budget.

**Prerequisites:** conditional expectation; additive error accumulation

**Examiner follow-up:** How do unequal next-bit probabilities affect this argument?

<details>
<summary>Solution route / investigation plan</summary>

1. The better child is at least the parent expectation because the parent is their probability-weighted mean. Therefore a δ-suboptimal choice decreases the maintained true expectation by at most δ. Induction over all n choices gives the bound, ending at the deterministic objective.

2. If each child estimate has error at most ξ, choosing the larger displayed value is at most 2ξ below the true better child. Thus final loss is at most 2nξ. To keep additive loss at most εW for total clause weight W, choose ξ≤εW/(2n), handling W=0 directly.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.1–5.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-random--approximate-conditional-decisions)
