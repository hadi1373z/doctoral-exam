# Prize-collecting Steiner tree: threshold rounding

§5.7 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-pcst)

## 1. Prize-collecting Steiner tree: threshold rounding

**Doctoral proof · proof · 30 minutes suggested**

ID: core-pcst--source-proof

Rebuild the randomized-threshold analysis, including the integral that bounds E[1/α]. Show why selecting one arbitrary threshold need not satisfy both the connection-cost and penalty bounds.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Random threshold selection trades connection cost against penalties. The two expected terms must be integrated using the actual threshold distribution.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. For a retained terminal, scaling the fractional connection vector by 1/α yields a feasible connection relaxation. Applying the available tree rounding bound gives a cost proportional to 1/α.

2. A terminal’s penalty contribution is its penalty multiplied by its exclusion probability. Compute this probability from its LP variable and the support of α.

3. The book’s optimized balance yields the factor (1−e^−1/2)^−1. The logarithm comes from integrating 1/α; replacing the distribution with its mean is invalid because E[1/α]≠1/E[α].

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.7](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-pcst--source-proof)

---

## 2. Why include penalties in the objective benchmark?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-pcst--oral-check-1

Why include penalties in the objective benchmark?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Random threshold selection trades connection cost against penalties. The two expected terms must be integrated using the actual threshold distribution.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. A cheap tree can exclude valuable terminals; the approximation compares tree cost plus all omitted-terminal penalties.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.7](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-pcst--oral-check-1)

---

## 3. How can this random algorithm be derandomized?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-pcst--oral-check-2

How can this random algorithm be derandomized?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Random threshold selection trades connection cost against penalties. The two expected terms must be integrated using the actual threshold distribution.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Only polynomially many threshold intervals change the retained set; evaluate the resulting candidate solutions or use a pessimistic estimator.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.7](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-pcst--oral-check-2)

---

## 4. Separate exponentially many prize-collecting cuts

**Doctoral proof · construction · 40 minutes suggested**

ID: core-pcst--separation-by-mincuts

For the rooted relaxation x(δ(S))≥y_v for all v∈S⊆V{r}, with 0≤y≤1, construct a polynomial-time separation oracle for a rational candidate (x,y). Show how n−1 minimum-cut computations suffice and specify the violated constraint returned.

**Required output:** A complete oracle specification and correctness proof.

**Prerequisites:** minimum cuts; separation oracles

**Examiner follow-up:** Why does checking only cuts associated with positive edge variables miss possible violations?

<details>
<summary>Solution route / investigation plan</summary>

1. Treat x_e as nonnegative edge capacities. For each v≠r compute a minimum r–v cut, represented by its v-side S_v. The smallest left side among all cuts containing v and excluding r is exactly this cut value. If it is below y_v, return x(δ(S_v))≥y_v as a violated inequality.

2. If every minimum cut is at least its corresponding y_v, then every admissible cut containing v has capacity at least y_v. Check variable bounds separately. Polynomial rational min-cut algorithms and exact comparisons give polynomial separation complexity even though the relaxation has exponentially many written constraints. No tree-rounding theorem is needed for this oracle.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.7](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-pcst--separation-by-mincuts)

---

## 5. A gap witness without infinite penalties

**Doctoral proof · construction · 40 minutes suggested**

ID: core-pcst--finite-penalty-cycle-gap

Take an n-cycle with unit edge costs, a fixed root, and penalty M=n for every nonroot vertex. Prove every optimal integral tree spans all vertices. Exhibit a feasible fractional solution of cost n/2 and derive the asymptotic factor-two integrality-gap lower bound.

**Required output:** A finite integral optimum proof and an LP-feasible gap witness.

**Prerequisites:** rooted prize-collecting LP; cycle cuts

**Examiner follow-up:** What is the smallest uniform M for which the spanning optimum is guaranteed by this comparison?

<details>
<summary>Solution route / investigation plan</summary>

1. A spanning path has cost n−1. Any solution omitting at least one nonroot vertex pays penalty n before paying any edge cost, so it cannot be optimal. Therefore the integral optimum is n−1. This makes the gap argument fully finite and binary encodable.

2. Set every y_v=1 and every x_e=1/2. Every nonempty proper vertex subset of a cycle has at least two boundary edges, so every required cut has fractional capacity at least one. The fractional objective is n/2 and no penalty is paid. Hence OPT_int/OPT_LP≥2−2/n; an upper bound or exact LP optimum is unnecessary for this lower-bound certificate.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.7](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-pcst--finite-penalty-cycle-gap)

---

## 6. Optimize the threshold for a particular LP objective

**Examiner challenge · proof · 45 minutes suggested**

ID: core-pcst--objective-sensitive-threshold

Let A>0 be fractional edge cost and B>0 fractional penalty. A threshold uniform on [γ,1] has analysis bound F(γ)=[2A ln(1/γ)+B]/(1−γ). Derive its unique minimizer in (0,1), prove uniqueness, and analyze the limiting cases B→0 and A→0.

**Required output:** A stationary equation, uniqueness proof, and limiting calculation.

**Prerequisites:** threshold analysis; one-variable optimization

**Examiner follow-up:** How would you find the minimizer to guaranteed rational precision?

<details>
<summary>Solution route / investigation plan</summary>

1. Differentiation gives the stationary equation B/(2A)=1/γ−1−ln(1/γ). Put u=1/γ>1. The function u−1−ln u increases strictly from zero to infinity, since its derivative is 1−1/u. Thus exactly one stationary point exists, and the derivative changes from negative to positive there.

2. As B→0 with A fixed, u→1 and γ→1, approaching bound 2A. As A→0 with B fixed, u grows and γ→0, approaching B. A fixed worst-case threshold balances coefficients, whereas this objective-sensitive choice optimizes the actual certified combination; it need not improve the universal worst-case ratio.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.7](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-pcst--objective-sensitive-threshold)

---

## 7. Transfer an arbitrary connection-rounding factor

**Examiner challenge · synthesis · 45 minutes suggested**

ID: core-pcst--generic-steiner-factor

Assume the retained-terminal connection problem can be rounded with cost at most βA/α for some β≥1. Using the same rooted prize-collecting relaxation, derive the best coefficient-balanced uniform-threshold guarantee in terms of β, and prove it tends to β+1/2 as β tends to infinity up to lower-order terms.

**Required output:** A parameterized approximation theorem and expansion.

**Prerequisites:** threshold integration; asymptotic expansions

**Examiner follow-up:** What value does this formula predict if an exact retained-terminal solver has β=1?

<details>
<summary>Solution route / investigation plan</summary>

1. Uniform α∈[γ,1] gives edge coefficient β ln(1/γ)/(1−γ) and penalty coefficient 1/(1−γ). Equating them gives γ=e^(−1/β), hence ratio R(β)=1/(1−e^(−1/β)). Monotonicity of the two coefficients justifies minimization of their maximum within this family.

2. Writing t=1/β and expanding e^−t=1−t+t²/2−t³/6+O(t⁴) yields R(β)=β+1/2+O(1/β). State that β is an available algorithmic guarantee for the appropriate cut relaxation, not automatically the integral Steiner approximation ratio under an unrelated LP.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.7](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-pcst--generic-steiner-factor)

---

## 8. Why the prize-collecting LP is exact on a rooted star

**Examiner challenge · proof · 40 minutes suggested**

ID: core-pcst--star-lp-exactness

On a star rooted at its center, leaf i has incident edge cost c_i≥0 and penalty π_i≥0. Solve the integral problem and the cut relaxation exactly, characterize all optimal fractional solutions, and explain how arbitrary thresholds behave when ties c_i=π_i occur.

**Required output:** A full optimum characterization and a threshold-level argument.

**Prerequisites:** rooted cuts; separable optimization

**Examiner follow-up:** Does the same separability survive on a depth-two rooted tree?

<details>
<summary>Solution route / investigation plan</summary>

1. For each leaf the singleton cut requires x_i≥y_i. Setting x_i=y_i is cheapest, so its LP contribution is c_i y_i+π_i(1−y_i), minimized by y_i=1 if c_i<π_i, by zero if c_i>π_i, and by every y_i∈[0,1] in a tie. The optimum is sum min(c_i,π_i).

2. The integral solution makes the same independent leaf decisions, proving LP exactness. Thresholding any optimal y changes only tied leaves, each of which costs the same whether included or omitted. Connecting the retained leaves by their actual star edges is therefore optimal at every positive threshold. A generic factor-β rounding bound can be much looser than this instance geometry.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.7](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-pcst--star-lp-exactness)

---

## 9. Research exercise: optimize over all threshold laws

**Research seminar · research-extension · 100 minutes suggested**

ID: core-pcst--threshold-law-minimax

For β≥1, analyze every distribution of α∈(0,1]. Suppose the proof uses only edge coefficient βE[1/α] and uniform penalty coefficient sup_{0≤y<1} Pr[α>y]/(1−y). Prove their maximum is at least 1/(1−e^(−1/β)), attained by a uniform law on [e^(−1/β),1].

**Required output:** A minimax lower bound and a finite-grid audit with error qualifications.

**Prerequisites:** stochastic domination; threshold rounding

**Examiner follow-up:** Why does an atom at α=0 make the edge coefficient unusable?

<details>
<summary>Solution route / investigation plan</summary>

1. If the penalty coefficient is at most R>1, then Pr[α>y]≤min(1,R(1−y)). Therefore α is stochastically no larger than a uniform variable on [1−1/R,1]. Since 1/α is decreasing, E[1/α]≥R ln(R/(R−1)). This step can also be proved by integrating the distribution function against 1/y².

2. If both coefficients are at most R, then β ln(R/(R−1))≤1, giving R≥1/(1−e^(−1/β)). The stated uniform law attains equality. As a reproducible check, optimize discrete laws on successively finer grids against all grid y constraints; the continuous optimum is the baseline, and a lower claimed value signals a discretization or omitted-constraint failure.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.7](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-pcst--threshold-law-minimax)

---

## 10. Research exercise: the Lagrangian penalty envelope

**Research seminar · research-extension · 90 minutes suggested**

ID: core-pcst--penalty-multiplier-envelope

For a finite rooted graph define V(λ)=min_T[c(T)+λπ(VT)] for λ≥0. Prove V is piecewise linear and concave and its active penalty slopes decrease with λ. Enumerate rooted trees for n≤9 to verify the envelope. Give a two-tree example showing that interpolating costs and penalties is a randomized solution, not necessarily one tree meeting an intermediate penalty budget.

**Required output:** An envelope theorem, explicit interpolation obstruction, and small exact enumeration.

**Prerequisites:** lower envelopes; Lagrangian relaxation

**Examiner follow-up:** How do ties at breakpoints affect the slope monotonicity statement?

<details>
<summary>Solution route / investigation plan</summary>

1. There are finitely many candidate rooted connected subgraphs, and nonnegative edge costs let one restrict to trees. Each contributes an affine function with slope equal to omitted penalty. A minimum of affine functions is concave; comparing optimality at λ_1<λ_2 proves that selected slopes can be chosen nonincreasing.

2. A root and one leaf with edge cost one and leaf penalty one give V(λ)=min(λ,1). Mixing the empty tree and the edge can have expected cost and penalty both 1/2, but no deterministic tree has omitted penalty at most 1/2 and cost below one. Compare exact envelope breakpoints with LP envelopes; an increasing active slope or missing lower candidate is failure.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.7](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-pcst--penalty-multiplier-envelope)

---

## 11. Optimize a deterministic threshold against actual costs

**Doctoral proof · proof · 40 minutes suggested**

ID: core-pcst--deterministic-objective-threshold

Let A,B>0 be fractional edge and penalty cost, and suppose a fixed threshold α has cost bound βA/α+B/(1−α). Find its minimizer and minimum, then prove this objective-sensitive bound is at most (β+1)(A+B).

**Required output:** An exact threshold optimizer and its universal ratio.

**Prerequisites:** threshold cost charging; Cauchy–Schwarz

**Examiner follow-up:** Compare its value with the optimized uniform-random-threshold bound for several A/B ratios.

<details>
<summary>Solution route / investigation plan</summary>

1. Differentiation gives sqrt(βA)/α=sqrt(B)/(1−α), so α=sqrt(βA)/(sqrt(βA)+sqrt(B)). Substitution yields minimum (sqrt(βA)+sqrt(B))². Boundary cases A=0 or B=0 are interpreted by limits.

2. Cauchy–Schwarz bounds (sqrt(β)·sqrt(A)+sqrt(B))² by (β+1)(A+B). Equality in the worst-case comparison requires A/B=β. This derives the deterministic β+1 guarantee and makes clear why optimizing actual objective proportions differs from coefficient balancing alone.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.7](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-pcst--deterministic-objective-threshold)

---

## 12. Connection variables need their upper bounds

**Examiner challenge · counterexample · 35 minutes suggested**

ID: core-pcst--box-constraints-essential

On a root–leaf edge with cost c and leaf penalty π>c, show the relaxation x≥y≥0 with objective cx+π(1−y) is unbounded if y≤1 is omitted. Prove that with 0≤y≤1, truncating every edge variable at one preserves all rooted cut constraints and cannot increase cost.

**Required output:** An unboundedness witness and a valid edge-variable truncation lemma.

**Prerequisites:** prize-collecting LP; variable bounds

**Examiner follow-up:** Why does truncation at one depend on the right-hand side being at most one?

<details>
<summary>Solution route / investigation plan</summary>

1. Taking x=y=t sends the objective to π+(c−π)t, which tends to negative infinity. The missing upper bound allows a negative exclusion penalty, an impossible interpretation for a connection indicator. Adding y≤1 repairs this one-edge model.

2. For a cut, sum_e min(1,x_e)≥min(1,sum_e x_e). If its original sum is at least y_v and y_v≤1, the truncated sum remains at least y_v. Nonnegative edge costs ensure truncation cannot increase objective. Thus an optimal solution may be sought with both x and y in their meaningful bounded ranges.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.7](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-pcst--box-constraints-essential)
