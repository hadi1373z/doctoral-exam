# Chromatic concentration: packing and sparse windows

§7.3 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-chromatic)

## 1. Chromatic concentration: packing and sparse windows

**Doctoral proof · proof · 45 minutes suggested**

ID: core-chromatic--source-proof

Explain the advantage of exposing a maximum edge-disjoint clique packing instead of counting all cliques. State the p=n^−α, α>5/6 window theorem precisely, and identify where the three-colorability of small induced subgraphs is used.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** The chapter strengthens coarse Azuma estimates using edge-disjoint clique packings and sparse-graph structural bounds; its narrow chromatic window has explicit hypotheses on p.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. A single edge belongs to many cliques, so raw clique count can have a large influence. In an edge-disjoint packing, changing one edge changes the optimum packing size by at most one.

2. The dense G(n,1/2) clique lower tail and the sparse chromatic window are different results with different parameters; do not merge their hypotheses.

3. For fixed α>5/6, the section proves concentration of χ(G(n,p)) within four consecutive integers, using that every sufficiently small vertex set is three-colorable with high probability.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-chromatic--source-proof)

---

## 2. Does the four-integer statement hold for every p?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-chromatic--oral-check-1

Does the four-integer statement hold for every p?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The chapter strengthens coarse Azuma estimates using edge-disjoint clique packings and sparse-graph structural bounds; its narrow chromatic window has explicit hypotheses on p.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. The stated sparse regime is part of the theorem.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-chromatic--oral-check-1)

---

## 3. Why is a packing maximum still Lipschitz although the optimizer can change completely?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-chromatic--oral-check-2

Why is a packing maximum still Lipschitz although the optimizer can change completely?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The chapter strengthens coarse Azuma estimates using edge-disjoint clique packings and sparse-graph structural bounds; its narrow chromatic window has explicit hypotheses on p.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Removing an edge destroys at most one packed clique; add that clique back to compare the two optimum values.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-chromatic--oral-check-2)

---

## 4. Extract an edge-disjoint clique packing quantitatively

**Doctoral proof · proof · 40 minutes suggested**

ID: core-chromatic--greedy-packing-from-incidences

In a deterministic graph let X be its number of k-cliques, k≥3, and suppose each edge belongs to at most D of them. Prove that a maximal greedy edge-disjoint packing has size at least X/[C(k,2)D]. Explain why replacing X and D by their expectations in a random graph is not a justified step.

**Required output:** A greedy covering proof and a precise expectation-ratio warning.

**Prerequisites:** random-graph exposure; clique packings; critical graphs; Azuma inequality

**Examiner follow-up:** Calculate X,D and the actual packing size for K_{k+1}.

<details>
<summary>Solution route / investigation plan</summary>

1. Every selected clique conflicts with at most C(k,2)D candidate cliques, by assigning a shared edge and then a clique containing it. A maximal packing's conflict neighborhoods cover all k-cliques, proving the bound.

2. For random graphs the displayed inequality is pointwise in the realized D. It yields E Y≥E[X/(C(k,2)D)] when D>0, not the ratio E X/[C(k,2)E D]. Any use of average incidence needs an additional deterministic truncation or probability argument.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-chromatic--greedy-packing-from-incidences)

---

## 5. Use a chromatic quantile to anchor a deletion variable

**Doctoral proof · proof · 45 minutes suggested**

ID: core-chromatic--quantile-anchored-deletion

Let u be the least integer with P(χ(G(n,p))≤u)>η, where 0<η<1/2. Define Y as the minimum vertices whose deletion leaves a u-colorable graph. Prove E Y≤√(2n ln(1/η)) and P(Y>2√(2n ln(1/η)))≤η. Include the vertex-exposure coupling.

**Required output:** A finite-η deletion lemma with both concentration steps justified.

**Prerequisites:** random-graph exposure; clique packings; critical graphs; Azuma inequality

**Examiner follow-up:** What extra coloring statement about the deleted vertices converts this into a short interval for χ?

<details>
<summary>Solution route / investigation plan</summary>

1. Two graphs differing only in one vertex's incident edges have deletion numbers differing by at most one: add that vertex to a deletion set on either side. Coupling all other edge variables identically yields n bounded Doob increments.

2. Since P(Y=0)>η, the lower Azuma tail forces the mean to be at most λ√n with λ=√(2ln(1/η)). The upper tail then bounds Y by 2λ√n except with probability η. The minimality of u also gives P(χ<u)≤η.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-chromatic--quantile-anchored-deletion)

---

## 6. Recover the correct dense no-triangle exponential scale

**Examiner challenge · construction · 50 minutes suggested**

ID: core-chromatic--dense-triangle-packing-exponent

Assume n=3r and 0<p<1 is fixed. Construct r² edge-disjoint triangles in K_n using three equal parts and modular addition. Use their surviving copies to lower-bound the expected maximum triangle packing in G(n,p), then prove P(G is triangle-free)≤exp(−c_p n²). Compare with the empty-graph lower bound.

**Required output:** An explicit modular packing and upper/lower exponential-scale bounds.

**Prerequisites:** random-graph exposure; clique packings; critical graphs; Azuma inequality

**Examiner follow-up:** How do rounding n/3 and allowing p=p(n) affect the claimed constants?

<details>
<summary>Solution route / investigation plan</summary>

1. Index each part by Z_r and use triangles (a_i,b_j,c_{i+j}). Every cross-part edge appears in exactly one of these triangles. Each triangle survives with probability p³, so the expected optimum packing is at least r²p³.

2. Maximum packing is one-edge Lipschitz. Azuma over C(n,2) edges gives P(Y=0)≤exp(−(r²p³)²/[2C(n,2)]), which is exp(−Ω_p(n²)). The event of no edges has probability (1−p)^{C(n,2)}, proving a matching exponential order for fixed p.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-chromatic--dense-triangle-packing-exponent)

---

## 7. Generalize the sparse critical-subgraph calculation

**Examiner challenge · proof · 55 minutes suggested**

ID: core-chromatic--general-small-subgraph-coloring

Let r≥3, β∈(0,1), p=n^−α and c>0 fixed. Prove that every set of at most cn^β vertices is r-colorable with high probability whenever α>β+2(1−β)/r. Use a minimal non-r-colorable subgraph and display the exponent that controls the union bound.

**Required output:** A general sparse-colorability lemma with a controlled finite sum.

**Prerequisites:** random-graph exposure; clique packings; critical graphs; Azuma inequality

**Examiner follow-up:** Specialize to β=1/2,r=3 and recover the threshold 5/6.

<details>
<summary>Solution route / investigation plan</summary>

1. A vertex-minimal non-r-colorable graph has minimum degree at least r: otherwise remove a low-degree vertex and extend an r-coloring. A t-vertex witness therefore has at least rt/2 edges.

2. The probability of some witness is bounded by Σ_t C(n,t)C(C(t,2),⌈rt/2⌉)p^{⌈rt/2⌉}. Up to fixed constants its tth term is at most [C n^{1−αr/2}t^{r/2−1}]^t. At t≤cn^β the base tends to zero under the stated inequality; fixed small t and rounding are harmless.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-chromatic--general-small-subgraph-coloring)

---

## 8. A family of constant-width chromatic windows

**Examiner challenge · synthesis · 60 minutes suggested**

ID: core-chromatic--coarse-sparse-window-extension

Assume the small-subgraph coloring lemma with β=1/2 and the finite-η deletion estimate. For fixed r≥3 and α>1/2+1/r, prove that for every fixed η>0 there exists an integer u(n,η) with P(u≤χ(G(n,n^−α))≤u+r)≥1−3η for all sufficiently large n.

**Required output:** A finite-error window theorem and all quantifier dependencies.

**Prerequisites:** random-graph exposure; clique packings; critical graphs; Azuma inequality

**Examiner follow-up:** For a given α>1/2, what integer r makes the argument apply?

<details>
<summary>Solution route / investigation plan</summary>

1. The deletion estimate leaves at most c_η√n vertices outside a u-colorable graph except with probability η. The generalized sparse lemma says every such leftover vertex set is r-colorable except with another probability tending to zero.

2. Use disjoint palettes for the retained and deleted subgraphs, giving χ≤u+r. The quantile definition gives P(χ<u)≤η. Keep n's threshold dependent on η and r; this fixed-error statement alone is not yet a single center sequence with error o(1).

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-chromatic--coarse-sparse-window-extension)

---

## 9. Repair the quantifiers in an asymptotically certain window

**Research seminar · research-extension · 85 minutes suggested**

ID: core-chromatic--diagonalize-moving-quantiles

Suppose that for every fixed η>0 and all large enough n there is u(n,η) such that P(u≤χ_n≤u+r)≥1−3η. Construct one deterministic sequence v_n for which P(v_n≤χ_n≤v_n+r)→1. Show how the construction accommodates structural lemmas valid only for each fixed c_η.

**Required output:** A complete deterministic diagonal selection and a quantifier audit.

**Prerequisites:** random-graph exposure; clique packings; critical graphs; Azuma inequality

**Examiner follow-up:** Why does simply saying 'η was arbitrary' leave a gap when the chosen center depends on η?

<details>
<summary>Solution route / investigation plan</summary>

1. Choose η_j↓0 and increasing thresholds N_j so that the fixed-η_j probability bound and the needed structural lemma both hold for all n≥N_j. Choose the thresholds strictly increasing even when earlier estimates already hold.

2. Set j(n)=max{j:N_j≤n} and v_n=u(n,η_{j(n)}). Then j(n)→∞ and the error is at most 3η_{j(n)}. This diagonal construction allows c_η to grow slowly with n without asserting a uniform structural estimate that has not been proved.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-chromatic--diagonalize-moving-quantiles)

---

## 10. Compare two concentration mechanisms for the same packing

**Research seminar · research-extension · 100 minutes suggested**

ID: core-chromatic--packing-certificate-comparison

For maximum edge-disjoint k-clique packing Y in G(n,1/2), assume E Y≥a n²/k^4 and a median m≥b n²/k^4, with positive fixed a,b. Compare the no-clique exponent from edge-exposure Azuma with the certifiable-variable bound using a certificate of C(k,2)Y present edges. State which mean–median comparison is still required if only the expectation hypothesis is known.

**Required output:** Two exponents, certificate calculations and an explicit mean–median dependency.

**Prerequisites:** random-graph exposure; clique packings; critical graphs; Azuma inequality

**Examiner follow-up:** Use the Azuma bound to obtain a median lower bound when E Y≫n and state the resulting k-range.

<details>
<summary>Solution route / investigation plan</summary>

1. Azuma gives a lower-tail exponent of order (E Y)²/n², namely n²/k^8. A b-clique witness uses C(k,2)b edge coordinates, and packing has edge replacement effect one.

2. The Talagrand certificate inequality with high threshold m and lower value zero gives P(Y=0)≤2exp(−m/[4C(k,2)]), hence exponent Ω(n²/k^6). The median lower bound is an additional input unless it is derived from concentration; substituting a mean without conversion is invalid.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-chromatic--packing-certificate-comparison)

---

## 11. Concentrating an independence number does not determine χ

**Doctoral proof · counterexample · 45 minutes suggested**

ID: core-chromatic--independence-number-is-not-coloring

For even n=2m, construct two graphs on n vertices with the same independence number m but chromatic numbers 2 and m+1. Use them to explain exactly what a concentration interval for α(G) implies through χ(G)≥n/α(G), and why it supplies no comparable upper bound.

**Required output:** Two exact constructions and a one-direction concentration transfer.

**Prerequisites:** random-graph exposure; clique packings; critical graphs; Azuma inequality

**Examiner follow-up:** What extra hereditary independent-set guarantee would make an iterative coloring argument possible?

<details>
<summary>Solution route / investigation plan</summary>

1. K_{m,m} has independence number m and chromatic number two. The disjoint union of K_{m+1} with m−1 isolated vertices also has independence number 1+(m−1)=m, but chromatic number m+1.

2. If α lies between a−t and a+t, the deterministic inequality yields only χ≥n/(a+t). A coloring partitions vertices into independent sets, but the existence of one large independent set does not guarantee a sequence of equally large sets in the remaining graph.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-chromatic--independence-number-is-not-coloring)

---

## 12. Sharpen the window in the very sparse range

**Examiner challenge · synthesis · 60 minutes suggested**

ID: core-chromatic--very-sparse-exact-colors

For p=n^−α with fixed α>1, determine χ(G(n,p)) with high probability when 1<α<2 and when α>2. At α=2 compute the limiting probabilities of χ=1 and χ=2. Prove the absence of cycles by a first-moment calculation.

**Required output:** A complete regime calculation including the critical edge-count boundary.

**Prerequisites:** random-graph exposure; clique packings; critical graphs; Azuma inequality

**Examiner follow-up:** Why is the case α=1 outside this cycle-sum argument?

<details>
<summary>Solution route / investigation plan</summary>

1. The expected number of cycles is at most Σ_{k≥3}(np)^k/(2k)=o(1) because np→0. Thus the graph is a forest with high probability and needs at most two colors.

2. For 1<α<2 the expected edge count tends to infinity and P(no edges)=(1−p)^{C(n,2)}→0, so χ=2 with high probability. For α>2 no edge occurs with high probability, so χ=1. At α=2 the empty probability tends to e^{−1/2}, with all remaining mass on χ=2.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-chromatic--very-sparse-exact-colors)
