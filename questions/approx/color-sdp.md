# Vector coloring, semicoloring, and the 0.387 exponent

§6.5 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-color-sdp)

## 1. Vector coloring, semicoloring, and the 0.387 exponent

**Doctoral proof · proof · 30 minutes suggested**

ID: core-color-sdp--source-proof

Derive the semicoloring probability and color count from first principles. Solve n/σ=σ^(log₃2), explain the approximately 0.387 exponent, and account for the logarithmic factor needed to color every vertex.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** A 3-coloring embeds in three unit vectors with edge inner product −1/2. Multiple hyperplanes yield semicolorings; balancing high-degree removal against low-degree rounding gives the section’s exponent.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. An edge has angle at least 2π/3, so a hyperplane fails to separate it with probability at most 1/3. After t=⌈2+log₃Δ⌉ planes, sum collision indicators over at most nΔ/2 edges.

2. Markov bounds the chance of too many monochromatic edges. Removing their endpoints leaves at least a constant fraction properly colored, which is enough for recursive semicoloring.

3. Writing a=log₃2, choose σ=n^(1/(1+a)); the exponent a/(1+a)=log₆2≈0.38685. Repeating on the remaining vertices adds a logarithmic color factor.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §6.5](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-color-sdp--source-proof)

---

## 2. Why is a vector 3-coloring not an actual 3-coloring?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-color-sdp--oral-check-1

Why is a vector 3-coloring not an actual 3-coloring?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A 3-coloring embeds in three unit vectors with edge inner product −1/2. Multiple hyperplanes yield semicolorings; balancing high-degree removal against low-degree rounding gives the section’s exponent.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. The relaxation imposes pairwise angular inequalities, not a partition into three discrete classes.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §6.5](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-color-sdp--oral-check-1)

---

## 3. Can one use the same palette at every recursive round?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-color-sdp--oral-check-2

Can one use the same palette at every recursive round?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A 3-coloring embeds in three unit vectors with edge inner product −1/2. Multiple hyperplanes yield semicolorings; balancing high-degree removal against low-degree rounding gives the section’s exponent.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No guarantee prevents edges between rounds from becoming monochromatic. Use disjoint palettes in this construction.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §6.5](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-color-sdp--oral-check-2)

---

## 4. Exploit a high-degree neighborhood without knowing a coloring

**Doctoral proof · construction · 40 minutes suggested**

ID: core-color-sdp--neighborhood-two-coloring

In a promised 3-colorable graph, prove every open neighborhood is bipartite. Give an algorithm that repeatedly two-colors and removes a neighborhood of size at least σ, using at most 2n/σ fresh colors before the residual maximum degree drops below σ.

**Required output:** A promise-based subroutine with exact removal and palette accounting.

**Prerequisites:** 3-colorability promise; bipartite recognition

**Examiner follow-up:** Why does this structural shortcut fail for the neighborhood of a 4-colorable graph?

<details>
<summary>Solution route / investigation plan</summary>

1. In any proper 3-coloring, neighbors of v cannot use v’s color, so their induced graph uses at most two colors. A BFS bipartite test finds such a coloring without knowing the promised global coloring. If degree(v)≥σ in the current induced graph, remove and two-color N(v).

2. Every iteration removes at least σ vertices, so there are at most floor(n/σ) iterations. Assign a new two-color palette each time; edges across removed groups then cannot be monochromatic. The surviving graph is still 3-colorable and has maximum degree below σ, making it suitable for a low-degree semicoloring routine.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §6.5](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-color-sdp--neighborhood-two-coloring)

---

## 5. Triangles force rigidity in a vector 3-coloring

**Doctoral proof · proof · 40 minutes suggested**

ID: core-color-sdp--triangle-vector-rigidity

Suppose unit vectors satisfy v_u·v_v≤−1/2 on edges. Prove that on a triangle all three edge products equal −1/2 and the vector sum is zero. Deduce that the two nonadjacent tips of a diamond formed by two triangles sharing an edge must receive the same vector.

**Required output:** A rigidity lemma and a diamond propagation consequence.

**Prerequisites:** Gram positivity; vector coloring

**Examiner follow-up:** Use the same norm argument to show a four-clique has no vector 3-coloring.

<details>
<summary>Solution route / investigation plan</summary>

1. For a triangle, ||a+b+c||²=3+2(a·b+a·c+b·c)≤0. Nonnegativity forces equality throughout: all products are −1/2 and a+b+c=0. This is stronger than three separate angular lower bounds.

2. If triangles abc and abd share edge ab, the identities give c=−a−b=d. Thus local triangle structure propagates exact vector equalities across a graph. It does not force those tips to be adjacent or distinctly colored, and a vector solution still need not encode a discrete global three-color partition.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §6.5](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-color-sdp--triangle-vector-rigidity)

---

## 6. Track numerical angular slack through the color exponent

**Examiner challenge · proof · 50 minutes suggested**

ID: core-color-sdp--angular-slack-exponent

Assume every edge product is at most −1/2+η with 0≤η<1/2. Define p(η)=1−arccos(−1/2+η)/π. Derive a hyperplane semicoloring using O(Δ^{ln 2/ln(1/p(η))}) colors, and quantify how η=O(1/ln n) affects the color count when Δ≤n.

**Required output:** A slack-sensitive rounding bound and a precision requirement.

**Prerequisites:** hyperplane collision probability; asymptotic sensitivity

**Examiner follow-up:** Why must the constants be uniform on a closed interval away from p=1?

<details>
<summary>Solution route / investigation plan</summary>

1. For t independent planes an edge survives with the same signature with probability at most p(η)^t. Take t=ceil(ln(2Δ)/ln(1/p(η))) so expected monochromatic edges are at most n/4. Removing endpoints gives a constant-fraction semicoloring with at most 2^t=O(Δ^{a(η)}) signatures.

2. On a fixed interval η∈[0,η0] below 1/2, arccos and the exponent a(η) are differentiable with bounded derivatives. Hence a(η)=a(0)+O(η), and Δ^{a(η)−a(0)}≤exp(O(η ln n)). An inverse-logarithmic edge error changes the bound by a constant factor; a fixed positive error changes its polynomial exponent.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §6.5](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-color-sdp--angular-slack-exponent)

---

## 7. When recursion avoids an extra logarithmic factor

**Examiner challenge · synthesis · 40 minutes suggested**

ID: core-color-sdp--geometric-semicoloring-sum

Assume every s-vertex induced subgraph admits a semicoloring of at least (1−ρ)s vertices using at most A s^b colors, with fixed 0<ρ<1 and b>0. Prove full coloring uses at most A n^b/(1−ρ^b) colors. Contrast with a semicoloring bound depending only on a fixed global Δ.

**Required output:** A recursion theorem with clearly separated hypotheses.

**Prerequisites:** semicoloring recursion; geometric series

**Examiner follow-up:** What changes when b=0, or when ρ tends to one with n?

<details>
<summary>Solution route / investigation plan</summary>

1. After r successful rounds at most ρ^r n vertices remain. With disjoint palettes, the total color count is bounded by sum_r A(ρ^r n)^b=A n^b/(1−ρ^b), extending the finite sum to an infinite one. Integer rounding contributes at most O(log n) additional colors if the assumed bound is rounded up.

2. If the only available guarantee is AΔ^a per round with Δ fixed from the original graph, that quantity need not shrink, and O(log n) rounds can cost O(Δ^a log n). The improved geometric conclusion is conditional on an s-dependent guarantee for every residual graph; it must not be silently applied to a routine that provides only the global-degree bound.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §6.5](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-color-sdp--geometric-semicoloring-sum)

---

## 8. Repeated planes do not create independent signatures

**Examiner challenge · counterexample · 35 minutes suggested**

ID: core-color-sdp--hyperplane-signature-entropy

Suppose t nominal hyperplanes consist of r independent planes, each duplicated any positive number of times, with t≥r. For an edge of angle θ, compute its signature-collision probability and the maximum number of distinct signatures. Explain why counting 2^t colors and using (1−θ/π)^t are both misleading.

**Required output:** Exact collision and signature counts under duplicated randomness.

**Prerequisites:** independence; binary hyperplane signatures

**Examiner follow-up:** What part of the proof remains valid for pairwise-independent planes?

<details>
<summary>Solution route / investigation plan</summary>

1. Duplicating a plane repeats an existing sign bit and adds no new constraint to signature equality. The edge collides exactly when all r independent original planes fail to separate it, giving probability (1−θ/π)^r. There are at most 2^r realized signatures regardless of t.

2. In the extreme r=1, arbitrarily many duplicate bits still yield only two labels and edge collision probability 1−θ/π. The independence parameter is the number of independent geometric tests, not the length of a stored bit string. A shared pseudorandom generator needs a proved replacement property before a product bound can be asserted.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §6.5](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-color-sdp--hyperplane-signature-entropy)

---

## 9. Research exercise: generalize semicoloring to k-vector colorings

**Research seminar · research-extension · 90 minutes suggested**

ID: core-color-sdp--simplex-k-semicoloring

For fixed k≥3 assume unit vectors obey edge product≤−1/(k−1). Derive the t-plane semicoloring bound with collision p_k=1−arccos(−1/(k−1))/π and color exponent ln 2/ln(1/p_k). Construct the regular-simplex feasibility witness for every k-colorable graph and compare exponents for k=3,…,8.

**Required output:** A parameterized semicoloring theorem and a bounded comparison.

**Prerequisites:** regular simplices; hyperplane rounding; alteration

**Examiner follow-up:** What is the limit of p_k and the color exponent as k grows?

<details>
<summary>Solution route / investigation plan</summary>

1. Use vectors sqrt(k/(k−1))(e_i−1/k·1) for the k colors; they have norm one and distinct products −1/(k−1). After t planes an edge collision has probability at most p_k^t. Taking p_k^t≤1/(2Δ) controls expected monochromatic edges and yields a constant-fraction semicoloring with O(Δ^{ln2/ln(1/p_k)}) labels.

2. Compute exponents from the stated formula and verify collision probabilities by exact angular integration or reproducible simulation on simplex edges. The baseline is p_k^t, and systematic deviations beyond sampling error are failure. This does not automatically yield the same full-coloring exponent balance as k=3, because high-degree neighborhoods now require coloring a (k−1)-colorable graph.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §6.5](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-color-sdp--simplex-k-semicoloring)

---

## 10. Research exercise: a vector 3-coloring with chromatic number four

**Research seminar · research-extension · 100 minutes suggested**

ID: core-color-sdp--kneser-vector-gap

Let vertices be the 15 two-element subsets of {1,…,6}, adjacent when disjoint. Set v_A=(1_A−(1/3)1)/sqrt(4/3). Prove these form a vector 3-coloring but the graph has chromatic number four. You may first prove that every pairwise-intersecting family of two-subsets is a star or a triangle.

**Required output:** An explicit Gram witness and an elementary chromatic-number proof.

**Prerequisites:** centered incidence vectors; intersecting edge families

**Examiner follow-up:** Which step demonstrates that vector feasibility is weaker than actual three-colorability?

<details>
<summary>Solution route / investigation plan</summary>

1. The squared centered norm is 2−4/6=4/3. For disjoint A,B the centered dot product is −4/6, so normalized product is −1/2. A color class is a pairwise-intersecting edge family in K6: if it has no common vertex, choosing two intersecting edges forces all others into their triangle.

2. A triangle class has at most three members and a star at most five, so three classes covering 15 pairs would all have to be disjoint full stars; distinct full stars intersect, which is impossible. Four colors suffice by assigning pairs first containing 1, then 2, then 3, and the remaining pairs inside {4,5,6}. Exhaustive coloring on 15 vertices is an optional baseline; any Gram or coloring-certificate mismatch is failure.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §6.5](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-color-sdp--kneser-vector-gap)

---

## 11. Compute the vector chromatic parameter of an odd cycle

**Doctoral proof · proof · 55 minutes suggested**

ID: core-color-sdp--odd-cycle-vector-number

Define vector k-colorability for real k≥2 by edge products≤−1/(k−1). For odd cycle C_n prove its smallest feasible k is 1+sec(π/n). Give a planar construction and a matching spectral lower bound.

**Required output:** Matching geometric and spectral certificates for a fractional coloring parameter.

**Prerequisites:** vector coloring; cycle eigenvalues; Gram trace bounds

**Examiner follow-up:** Why does the triangle give exactly three?

<details>
<summary>Solution route / investigation plan</summary>

1. Consecutive unit vectors at angle π−π/n close after n steps and have edge product −cos(π/n). They satisfy the constraint when k=1+1/cos(π/n), giving feasibility.

2. The cycle Laplacian bound tr(LX)≤nλ_max(L)=n[2+2cos(π/n)] implies sum_edges v_u·v_v≥−n cos(π/n). If every edge product is at most −1/(k−1), then −n/(k−1) must be at least that lower bound, forcing k≥1+sec(π/n). This parameter tends to two although every odd cycle needs three discrete colors.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §6.5](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-color-sdp--odd-cycle-vector-number)

---

## 12. Combine vector colorings across a graph join

**Examiner challenge · construction · 55 minutes suggested**

ID: core-color-sdp--join-vector-construction

Let G,H have vector k- and l-colorings with k,l>1. Their join adds every cross-edge. Construct a vector (k+l)-coloring using orthogonal copies of the two representations and one shared axis. Verify all three types of edge constraints.

**Required output:** Explicit coefficients and complete norm and edge calculations.

**Prerequisites:** orthogonal direct sums; vector coloring

**Examiner follow-up:** Apply the construction when G and H are cliques.

<details>
<summary>Solution route / investigation plan</summary>

1. Write K=k+l. For G use u=av+be with b²=l/[k(K−1)] and a²=1−b². For H use z=cw−de with d²=k/[l(K−1)] and c²=1−d². Put the original v and w spaces mutually orthogonal and orthogonal to e. All new vectors have norm one.

2. A cross-edge product is −bd=−1/(K−1). Within G, a²(−1/(k−1))+b²=−1/(K−1); within H the symmetric computation holds. Thus the join is feasible at K. This proves an upper bound by construction; claiming exact additivity for every graph would require a separate lower-bound theorem.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §6.5](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-color-sdp--join-vector-construction)
