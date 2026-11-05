# Shearer and Loomis–Whitney: control every coordinate multiplicity

§15.7 · projection inequalities · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-shearer)

## 1. Shearer and Loomis–Whitney: control every coordinate multiplicity

**Doctoral proof · proof · 45 minutes suggested**

ID: core-shearer--source-proof

Prove Shearer’s lemma by chain-rule bookkeeping, derive |F|^k≤∏|πS(F)|, and specialize to the three-dimensional Loomis–Whitney inequality. Explain why equality of the projection distributions with uniform distributions is not required.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** If every coordinate is contained in at least k projection sets, then kH(X)≤∑H(XS); uniform-family entropy converts this to a cardinality projection inequality.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. For i∈S, H(Xᵢ|Xj:j<i,j∈S)≥H(Xᵢ|X₁,…,Xᵢ₋₁). Sum over S and use the coordinate-cover multiplicity.

2. A projection need not be uniform. Only H(XS)≤log₂|πS(F)| is used, while X is uniform on the original family.

3. For three pairwise coordinate projections, each coordinate appears twice: |F|²≤|πxyF||πxzF||πyzF|. The volume version follows through discretization and a limiting argument.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · projection inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shearer--source-proof)

---

## 2. Why does pairwise independence not prove Shearer by itself?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-shearer--oral-check-1

Why does pairwise independence not prove Shearer by itself?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** If every coordinate is contained in at least k projection sets, then kH(X)≤∑H(XS); uniform-family entropy converts this to a cardinality projection inequality.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Higher-order conditional dependencies remain. The chain-rule proof handles arbitrary joint distributions.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · projection inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shearer--oral-check-1)

---

## 3. What is needed for the triangle-intersecting graph-family corollary?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-shearer--oral-check-2

What is needed for the triangle-intersecting graph-family corollary?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** If every coordinate is contained in at least k projection sets, then kH(X)≤∑H(XS); uniform-family entropy converts this to a cardinality projection inequality.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Choose projections whose complements are triangle-free, bound each projected family, and apply the exact multiplicities.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · projection inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shearer--oral-check-2)

---

## 4. A fractional form of Shearer's lemma

**Doctoral proof · proof · 40 minutes suggested**

ID: core-shearer--fractional-coordinate-covers

Let nonnegative weights α_S satisfy Σ_{S∋i}α_S≥1 for every coordinate i. Prove H(X)≤Σ_Sα_SH(X_S), and deduce |F|≤∏_S|π_SF|^{α_S} for finite nonempty F. Explain why real weights cause no rational-approximation problem.

**Required output:** A fractional inequality and its finite cardinality corollary.

**Prerequisites:** Shearer inequality; projection families; fractional covers; chain-rule bookkeeping

**Examiner follow-up:** What fails for differential entropy if the overcoverage step uses terms that may be negative?

<details>
<summary>Solution route / investigation plan</summary>

1. Expand every H(X_S) using the same global coordinate order. Each term H(X_i|earlier coordinates in S) is at least H(X_i|all earlier coordinates). Multiplying by nonnegative α_S preserves the direction.

2. After summing, each full-chain term is counted with total weight at least one. Entropies of discrete finite variables are nonnegative, so overcoverage is harmless. The proof directly permits real coefficients; for the family bound use a uniform member only on F, not on every projection.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · projection inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shearer--fractional-coordinate-covers)

---

## 5. A local-star bound for all independent sets

**Doctoral proof · proof · 45 minutes suggested**

ID: core-shearer--regular-graph-independent-set-count

Let G be d-regular on N vertices, d≥1, and let I(G) be its number of independent sets. Apply Shearer to closed-neighborhood projections and prove I(G)≤(2^d+1)^{N/(d+1)}. Explain why edges among a vertex's neighbors only improve the local bound.

**Required output:** A neighborhood-cover proof and a deterministic local pattern count.

**Prerequisites:** Shearer inequality; projection families; fractional covers; chain-rule bookkeeping

**Examiner follow-up:** Check the inequality on a disjoint union of K_{d+1} and compare its slack.

<details>
<summary>Solution route / investigation plan</summary>

1. Choose a uniform independent-set indicator vector. Every coordinate lies in exactly d+1 closed neighborhoods, so (d+1)H(X)≤Σ_vH(X_{N[v]}).

2. In a closed neighborhood, either its center is absent, allowing at most 2^d neighbor subsets, or it is present, forcing all d neighbors absent. Thus each projection has at most 2^d+1 patterns. Additional neighbor-neighbor edges can remove patterns but cannot create any.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · projection inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shearer--regular-graph-independent-set-count)

---

## 6. A projection inequality for a three-way relational join

**Examiner challenge · synthesis · 50 minutes suggested**

ID: core-shearer--triangle-join-bound

Let R_AB⊆A×B, R_AC⊆A×C and R_BC⊆B×C be finite relations. Bound the size of J={(a,b,c):(a,b)∈R_AB,(a,c)∈R_AC,(b,c)∈R_BC} by √(|R_AB||R_AC||R_BC|). Give box relations attaining equality and explain why nonuniform projection distributions are harmless.

**Required output:** A join-size proof and an explicit equality construction.

**Prerequisites:** Shearer inequality; projection families; fractional covers; chain-rule bookkeeping

**Examiner follow-up:** What simpler bound follows from either two relations that together determine a triple?

<details>
<summary>Solution route / investigation plan</summary>

1. The three pair projections of J are contained in the supplied relations. Apply the two-fold coordinate-cover form of Shearer to a uniform triple in J, then bound each projected entropy by the logarithm of its support size.

2. For A_0×B_0×C_0 take all pair relations to be complete boxes. Then |J|=|A_0||B_0||C_0| and the square-root product is identical. The actual projections of a general uniform J need not be uniform; only their support bounds were used.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · projection inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shearer--triangle-join-bound)

---

## 7. Characterize equality in the three-coordinate entropy inequality

**Examiner challenge · proof · 55 minutes suggested**

ID: core-shearer--three-projection-equality

For finite X,Y,Z prove H(X,Y)+H(X,Z)+H(Y,Z)−2H(X,Y,Z)=I(X;Y|Z)+I(Z;(X,Y)). Deduce that equality in the three-coordinate Shearer inequality forces mutual independence. Explain the additional uniformity conditions needed for equality in the cardinality Loomis–Whitney inequality.

**Required output:** An exact gap identity and equality characterization at entropy and support levels.

**Prerequisites:** Shearer inequality; projection families; fractional covers; chain-rule bookkeeping

**Examiner follow-up:** Compute the entropy gap for a uniform parity triple and a fully diagonal triple.

<details>
<summary>Solution route / investigation plan</summary>

1. Expand both information terms by chain rules to obtain the displayed identity. Their nonnegativity makes the gap nonnegative.

2. If the gap vanishes, Z is independent of (X,Y) and X,Y are conditionally independent given Z; together these force the full product law. For a uniform member of a finite family, equality of the cardinality bounds also requires projection entropies to reach their support logarithms. The resulting family is a Cartesian box, including degenerate coordinate sets.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · projection inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shearer--three-projection-equality)

---

## 8. An odd-cycle fractional cover beats integral bookkeeping

**Examiner challenge · construction · 60 minutes suggested**

ID: core-shearer--five-cycle-fractional-cover

For coordinates 1,…,5 let each adjacent-pair projection around a five-cycle have size at most R. Use weights 1/2 on the five pairs to prove |F|≤R^{5/2}. Show the exponent is sharp for square R and compare it with a bound obtained from an integral edge cover.

**Required output:** A fractional certificate, a sharp example and a cover comparison.

**Prerequisites:** Shearer inequality; projection families; fractional covers; chain-rule bookkeeping

**Examiner follow-up:** Why does a four-cycle not exhibit the same fractional-versus-integral gap for equal projection bounds?

<details>
<summary>Solution route / investigation plan</summary>

1. Every coordinate occurs in two cycle edges, so weights one half cover it exactly once. The fractional Shearer corollary gives the displayed product bound.

2. For F=[m]^5 each pair projection has size m²=R and |F|=m^5=R^{5/2}, proving sharpness. An integral edge cover needs three of the pair sets and would only give R³ by the same support-size bookkeeping.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · projection inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shearer--five-cycle-fractional-cover)

---

## 9. Derive an asymptotically sharp triangle bound from projections

**Research seminar · research-extension · 85 minutes suggested**

ID: core-shearer--triangle-count-from-edges

Let a finite simple graph have m edges and T triangles. Apply Loomis–Whitney to the set of ordered vertex triples forming triangles to prove T≤(√2/3)m^{3/2}. Show the leading constant is asymptotically sharp on complete graphs; keep all ordered/unordered factors explicit.

**Required output:** A factor-checked proof and an asymptotic sharpness calculation.

**Prerequisites:** Shearer inequality; projection families; fractional covers; chain-rule bookkeeping

**Examiner follow-up:** How would retaining the actual pair-projection sizes improve the bound when some edges lie in no triangle?

<details>
<summary>Solution route / investigation plan</summary>

1. The triple set has size 6T. Each of its three ordered pair projections is contained in the 2m oriented edges, so (6T)²≤(2m)³.

2. Rearrange to T≤√2 m^{3/2}/3. For K_n, m=n(n−1)/2 and T=n(n−1)(n−2)/6; their ratio tends to √2/3. The argument proves the asymptotic constant but does not supply the exact extremal formula at every integer m.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · projection inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shearer--triangle-count-from-edges)

---

## 10. A weighted functional extension beyond support counting

**Research seminar · research-extension · 100 minutes suggested**

ID: core-shearer--functional-triangle-inequality

For nonnegative finite arrays a_xy,b_xz,c_yz, prove Σ_{x,y,z}a_xy b_xz c_yz≤||a||_2||b||_2||c||_2. Recover the relational join bound for indicator arrays and exhibit a nontrivial family attaining equality. Use Cauchy–Schwarz rather than importing an unproved general hypergraph inequality.

**Required output:** A self-contained weighted theorem, its indicator specialization and equality examples.

**Prerequisites:** Shearer inequality; projection families; fractional covers; chain-rule bookkeeping

**Examiner follow-up:** Which equality conditions are lost when one array has zero rows or columns?

<details>
<summary>Solution route / investigation plan</summary>

1. First apply Cauchy–Schwarz over x,y to a_xy and Σ_z b_xz c_yz. The second factor is the Frobenius norm of BC^T, bounded by ||B||_F||C||_F, which itself follows by expanding and applying Cauchy–Schwarz to the row inner products.

2. For equality take a_xy=u_xv_y, b_xz=u_xw_z and c_yz=v_yw_z with nonnegative vectors. Both sides equal (Σu_x²)(Σv_y²)(Σw_z²). Indicator arrays give the support-counting inequality as a special case.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · projection inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shearer--functional-triangle-inequality)

---

## 11. A tree organizes a different entropy bound

**Doctoral proof · proof · 45 minutes suggested**

ID: core-shearer--tree-entropy-upper-bound

For any finite vector X_V and a tree T on its coordinates, prove H(X_V)≤Σ_{uv∈E(T)}H(X_u,X_v)−Σ_v(deg_T(v)−1)H(X_v). Root the tree and state an exact conditional-independence criterion for equality.

**Required output:** A rooted chain-rule proof and an explicit equality condition.

**Prerequisites:** Shearer inequality; projection families; fractional covers; chain-rule bookkeeping

**Examiner follow-up:** Why can negative coefficients of singleton entropies make a naive support-cardinality replacement invalid?

<details>
<summary>Solution route / investigation plan</summary>

1. Order vertices so each parent appears before its children. Chain rule and conditioning reduction give H(X_V)≤H(X_root)+Σ_{v≠root}H(X_v|X_parent(v)).

2. Expand each conditional term to obtain the tree expression. Equality requires each X_v to be conditionally independent of all earlier nonparent coordinates given its parent, in the chosen order; equivalently the law has the corresponding tree factorization on its positive-probability conditioning states.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · projection inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shearer--tree-entropy-upper-bound)

---

## 12. Dividing by an overlap support can undercount badly

**Examiner challenge · counterexample · 60 minutes suggested**

ID: core-shearer--invalid-projection-division

Disprove |F|≤|π_XYF||π_YZF|/|π_YF|. For m≥3 take F=([m]×{0}×[m])∪{(1,1,1)}. Compute all four cardinalities and give the correct fiberwise upper bound in terms of the two pair relations.

**Required output:** A numerical counterexample and the exact fiberwise repair.

**Prerequisites:** Shearer inequality; projection families; fractional covers; chain-rule bookkeeping

**Examiner follow-up:** What uniform-fiber assumptions would make a division-by-overlap formula valid?

<details>
<summary>Solution route / investigation plan</summary>

1. Here |F|=m²+1, each pair projection has size m+1, and the Y projection has size two. At m=3 the proposed right side is eight while |F|=ten.

2. The correct join bound is Σ_y |{x:(x,y)∈π_XYF}|·|{z:(y,z)∈π_YZF}|. A single average denominator discards correlations between large fibers. The entropy tree bound subtracts H(Y), whose sign prevents replacing it by an upper support bound in that direction.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · projection inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shearer--invalid-projection-division)
