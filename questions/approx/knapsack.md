# Knapsack: an FPTAS with a full bit-complexity argument

§3.1 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-knapsack)

## 1. Knapsack: an FPTAS with a full bit-complexity argument

**Doctoral proof · proof · 30 minutes suggested**

ID: core-knapsack--source-proof

Construct the profit-scaling algorithm from scratch. Prove feasibility, the multiplicative guarantee and polynomial bit complexity. Explain why a DP polynomial in the numerical capacity is insufficient.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Profit-indexed dynamic programming is pseudo-polynomial; scaling profits with K=εPmax/n yields a feasible solution worth at least (1−ε)OPT in polynomial time in n and 1/ε.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. For every feasible item, pᵢ≤Pmax≤OPT. Hence total scaled profit is at most n²/ε, so the basic DP has O(n³/ε) transitions.

2. For the optimum set O, K∑O p′ᵢ≥∑O pᵢ−|O|K≥OPT−εPmax. Optimality in the scaled DP and pᵢ≥Kp′ᵢ transfer this bound to the output.

3. Weights and profits are represented in binary; arithmetic on their sums uses polynomially many bits. If no feasible positive-profit item remains, return the empty solution.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-knapsack--source-proof)

---

## 2. Why not scale using an unknown OPT?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-knapsack--oral-check-1

Why not scale using an unknown OPT?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Profit-indexed dynamic programming is pseudo-polynomial; scaling profits with K=εPmax/n yields a feasible solution worth at least (1−ε)OPT in polynomial time in n and 1/ε.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Use the computable Pmax, which lies between OPT/n and OPT after infeasible items are removed.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-knapsack--oral-check-1)

---

## 3. Can an FPTAS have running time n^(1/ε)?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-knapsack--oral-check-2

Can an FPTAS have running time n^(1/ε)?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Profit-indexed dynamic programming is pseudo-polynomial; scaling profits with K=εPmax/n yields a feasible solution worth at least (1−ε)OPT in polynomial time in n and 1/ε.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. That is polynomial for fixed ε, but not polynomial jointly in input size and 1/ε.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-knapsack--oral-check-2)

---

## 4. Dominance pruning without losing a continuation

**Doctoral proof · proof · 40 minutes suggested**

ID: core-knapsack--pareto-dominance

For 0–1 knapsack with positive integer weights and profits, maintain attainable pairs (weight,profit) after each prefix. Prove that deleting a pair dominated by another pair preserves an optimum after every possible suffix. Give an instance with exponentially many undominated pairs.

**Required output:** A continuation lemma, an induction, and an exponential frontier family.

**Prerequisites:** 0–1 knapsack; dynamic programming invariants

**Examiner follow-up:** How does the argument change if there is also a cardinality bound? State which states may safely dominate one another.

<details>
<summary>Solution route / investigation plan</summary>

1. If (w,p) is dominated by (w′,p′), where w′≤w and p′≥p, every suffix subset feasible after the first pair is feasible after the second and obtains at least the same profit. The two prefix witnesses use only already processed items, so appending the identical suffix causes no item reuse. This proves the invariant by induction.

2. Take w_i=p_i=2^i for i=0,…,n−1 and capacity 2^n−1. Every subset gives a different pair (s,s); lower weight always means lower profit. All 2^n pairs survive. Dominance alone gives an exact algorithm, but it does not establish polynomial running time in the binary input length.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-knapsack--pareto-dominance)

---

## 5. Scale using a computable half-optimum certificate

**Doctoral proof · construction · 45 minutes suggested**

ID: core-knapsack--fractional-lower-bound-scale

For positive-profit knapsack, first discard overweight items. Solve its fractional relaxation by density order, and let G be the better of the whole-item greedy prefix and the highest-profit feasible item. Prove G≤OPT≤2G, then design profit scaling with K=εG/n and bound the DP range.

**Required output:** A complete scaling algorithm with its certificate and state count.

**Prerequisites:** fractional knapsack; profit scaling

**Examiner follow-up:** Can the certificate improve the approximation loss if the optimum uses at most k items?

<details>
<summary>Solution route / investigation plan</summary>

1. The fractional optimum consists of a feasible whole prefix plus at most one fractional item. Its value is at most the prefix profit plus the full profit of that boundary item, both at most G. If all items fit, the prefix is optimal. Thus G is a feasible lower bound and the fractional solution certifies OPT≤2G.

2. Every surviving item has profit at most G, so each floor-scaled profit is at most n/ε and the usual state range is O(n²/ε). For an optimum O, rounding loses at most |O|K≤εG≤εOPT. Retain the minimum original weight per scaled total to obtain feasibility. The certificate uses a fractional upper bound and a feasible lower bound in different directions.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-knapsack--fractional-lower-bound-scale)

---

## 6. An FPTAS with an exact cardinality budget

**Examiner challenge · construction · 45 minutes suggested**

ID: core-knapsack--cardinality-budget

Given integer k≤n, maximize nonnegative profit subject to total weight≤B and at most k selected items. Construct an FPTAS with loss at most εOPT using a count dimension. State its running time and handle the case k=0.

**Required output:** A recurrence, reconstruction method, loss proof, and polynomial bit bound.

**Prerequisites:** profit-indexed DP; feasible lower bounds

**Examiner follow-up:** Why would ignoring the count coordinate allow a dominated state to destroy the only feasible continuation?

<details>
<summary>Solution route / investigation plan</summary>

1. For k≥1 remove overweight items and let P be the largest remaining positive profit. A singleton is feasible, so P≤OPT. Set K=εP/k. A DP indexed by processed prefix, selected count c≤k, and scaled profit q stores the minimum original weight. Use only previous-prefix states for a 0–1 transition.

2. Each scaled item profit is at most k/ε; a feasible state has q≤k²/ε. A direct implementation therefore uses O(nk³/ε) transitions and O(k³/ε) memory. The optimum loses at most kK, and the DP maximizes the rounded objective within both exact constraints. For k=0 or no positive feasible item, return the empty set.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-knapsack--cardinality-budget)

---

## 7. Rounding weights buys capacity rather than profit

**Examiner challenge · synthesis · 35 minutes suggested**

ID: core-knapsack--weight-resource-augmentation

Let B>0 and δ∈(0,1). Set h=δB/n, w′_i=floor(w_i/h), and B′=floor(B/h). Maximize exact profit among subsets of scaled weight at most B′. Prove profit at least OPT and original weight at most (1+δ)B. Contrast this bicriteria guarantee with a feasible FPTAS.

**Required output:** A bicriteria theorem with a precise feasibility limitation.

**Prerequisites:** weight-indexed DP; rounding inequalities

**Examiner follow-up:** What guarantee follows if ceilings replace floors and the capacity remains B′?

<details>
<summary>Solution route / investigation plan</summary>

1. Every originally feasible subset has sum floor(w_i/h)≤floor(sum w_i/h)≤B′, so the rounded optimum contains an originally optimal candidate. For the returned set S, sum w_i<h sum w′_i+|S|h≤B+n h=(1+δ)B. This is an upper capacity bound, while profit is compared in the favorable direction.

2. After filtering w_i>B when benchmarking the original problem, B′=O(n/δ), so an exact-profit DP over rounded weight is polynomial in n and 1/δ with binary profit arithmetic. The output may exceed B, and no multiplicative profit statement repairs that violation. A one-item example with weight just above B demonstrates why original feasibility must be reported separately.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-knapsack--weight-resource-augmentation)

---

## 8. Rational data and exact scaling comparisons

**Examiner challenge · proof · 40 minutes suggested**

ID: core-knapsack--rational-input-arithmetic

Assume all weights, profits, B and ε are positive binary-encoded rationals of total encoding length L. Show that profit scaling can be implemented in time polynomial in L,n,1/ε without expanding a DP indexed by a common denominator. Bound the bit lengths of sums and floor computations.

**Required output:** A bit-complexity audit of the scaling algorithm.

**Prerequisites:** rational arithmetic; FPTAS bit complexity

**Examiner follow-up:** Which step fails if ε is supplied only as a real-number oracle with no finite precision guarantee?

<details>
<summary>Solution route / investigation plan</summary>

1. A sum of at most n input rationals can be represented over the product of their denominators. The product has bit length at most the sum of input denominator lengths, hence O(L); numerator growth adds only polynomially many bits. Reduced fractions can be used, but reduction is not needed to obtain this upper bound.

2. Compute floor(p_i/K) by integer multiplication and division of rational numerators and denominators. This operation has polynomial bit complexity, and the scaled-profit range remains O(n²/ε) after infeasible items are discarded. Store exact rational weights in the DP and compare them by cross multiplication. Clearing denominators is safe arithmetic, but a weight DP of numerical capacity equal to that denominator product may be exponentially long.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-knapsack--rational-input-arithmetic)

---

## 9. Research exercise: an approximate Pareto frontier

**Research seminar · research-extension · 90 minutes suggested**

ID: core-knapsack--multiplicative-frontier

Construct a prefix algorithm that trims positive-profit states into intervals [(1+δ)^j,(1+δ)^(j+1)), retaining minimum weight in each interval and keeping the empty state. With δ=ε/(2n), prove a (1−ε) guarantee. Compare frontier sizes with exact dominance pruning on instances n≤24; exact enumeration is the baseline.

**Required output:** A proved trimming invariant, reproducible comparison, and failure report.

**Prerequisites:** Pareto dominance; multiplicative error accumulation

**Examiner follow-up:** Can one use one final trimming step instead of n stages without losing polynomial space?

<details>
<summary>Solution route / investigation plan</summary>

1. After adding an item from the previous prefix, trimming replaces a state by one with no greater weight and profit greater than its profit divided by 1+δ. Inductively each exact prefix witness has a retained witness of no larger weight and at least its profit divided by (1+δ)^i. At i=n, (1+δ)^n≤e^(ε/2)≤1/(1−ε) for 0<ε<1.

2. The number of occupied profit intervals is O((n/ε) log(nPmax/Pmin)), polynomial in the rational encoding length and 1/ε. Generate interval boundaries with exact rational arithmetic and preserve a separate zero-profit state. Report frontier counts and returned value against enumeration; any weight violation or ratio below 1−ε is a failure. This is a study of a specified approximation technique, not a claim of novelty.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-knapsack--multiplicative-frontier)

---

## 10. Research exercise: quantify worst-case rounding loss

**Research seminar · research-extension · 75 minutes suggested**

ID: core-knapsack--adversarial-rounding-loss

Fix n≤20 and rational ε. Investigate floor-profit scaling with K=εPmax/n under adversarial tie breaking. Enumerate all feasible subsets for integer instances with weights≤12 and profits≤30, then compare its actual loss with nK and |O|K. Prove a universal bound using the smaller cardinality of an optimal witness.

**Required output:** A cardinality-sensitive lemma and a small exhaustive search with recorded parameters.

**Prerequisites:** exact subset enumeration; scaling proof

**Examiner follow-up:** How does a minimum-weight tie rule change the adversarial search space?

<details>
<summary>Solution route / investigation plan</summary>

1. For any optimal O, scaled optimality gives p(S)≥Kp′(S)≥Kp′(O)>OPT−|O|K, with a non-strict bound covering integral rounding boundaries. If several original optima exist, choose one with minimum cardinality to sharpen the certificate. The bound concerns the witness O and does not require the returned solution to have the same count.

2. Group subsets by scaled profit and keep the least original profit among feasible scaled maximizers to model worst tie breaking. Record the ratio loss/(|O|K), rather than expecting a random solver to find bad ties. The baseline is exhaustive optimization in both objectives. A counterexample to the proved inequality is a failed implementation or proof; absence of a near-tight example is reported as inconclusive rather than a new theorem.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-knapsack--adversarial-rounding-loss)

---

## 11. Recover exact optimization from a sufficiently fine scheme

**Doctoral proof · proof · 35 minutes suggested**

ID: core-knapsack--discrete-profit-gap

Suppose integer profits have greatest common divisor g and let U be their sum. Prove that a feasible (1−ε) algorithm with ε=g/(2U) returns an exact optimum. Explain why an FPTAS invoked this way is only pseudo-polynomial in U/g.

**Required output:** An exactness lemma and a binary-runtime explanation.

**Prerequisites:** integer objective gaps; FPTAS runtime

**Examiner follow-up:** How does a known smaller upper bound on OPT improve the required accuracy?

<details>
<summary>Solution route / investigation plan</summary>

1. Every feasible total profit is a multiple of g. The approximation loses at most εOPT≤εU=g/2, less than the gap g between distinct attainable values. Feasibility prevents a value above OPT, so the returned value must equal OPT.

2. The reciprocal accuracy is 2U/g, which can be exponentially large in the binary profit encoding. A runtime polynomial in that numerical quantity is therefore pseudo-polynomial. If all profits are zero, bypass the gcd and return the empty optimum.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-knapsack--discrete-profit-gap)

---

## 12. Item dominance is not state dominance in 0–1 knapsack

**Examiner challenge · counterexample · 30 minutes suggested**

ID: core-knapsack--itemwise-dominance-trap

One item has weight one and profit M; k other items have weight one and profit M−1, with capacity k+1 and M>1. Show that deleting every item individually dominated by the first can make the approximation ratio tend to zero. Contrast with safe prefix-state dominance.

**Required output:** An arbitrarily bad preprocessing family and the missing invariant.

**Prerequisites:** 0–1 item multiplicity; Pareto states

**Examiner follow-up:** When is such an item-deletion rule safe in an unbounded knapsack model?

<details>
<summary>Solution route / investigation plan</summary>

1. All items fit, so OPT=M+k(M−1). The first item dominates every other item in weight-profit coordinates, yet deleting those items leaves value M. For fixed M>1 the ratio M/[M+k(M−1)] tends to zero.

2. A 0–1 item cannot replace several discarded items because it may be selected only once and may already be used. Prefix-state dominance compares complete selected prefixes with the same remaining item universe, allowing the identical suffix to be appended. The apparently similar item rule lacks that continuation invariant.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.1](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-knapsack--itemwise-dominance-trap)
