# Triangle removal: a structural lemma becomes a tester

§17.3 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-triangle-removal)

## 1. Triangle removal: a structural lemma becomes a tester

**Doctoral proof · proof · 45 minutes suggested**

ID: core-triangle-removal--source-proof

Prove the sampling theorem assuming the triangle-removal lemma, with the correct ordered-versus-unordered normalization. Then outline the regularity/counting proof and explain why seeing no triangle is not evidence that only few edits are needed without the farness promise.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** For each ε>0, a graph requiring εn² edge deletions to become triangle-free has at least δ(ε)n³ triangles; independent triple samples then give a one-sided tester.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. If T≥δn³ unordered triangles, a uniform unordered triple is a triangle with probability T/C(n,3), asymptotically at least 6δ. The exact ratio is the quantity to use on finite n.

2. After q independent triple samples, miss probability is (1−T/C(n,3))^q≤exp(−qT/C(n,3)); q=O(1/δ) gives constant soundness.

3. Only rejection is a certificate. The lemma supplies δ(ε), whose dependence can be extremely poor; constant query complexity in n does not mean practical efficiency in ε.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-triangle-removal--source-proof)

---

## 2. Does the conclusion estimate ε from one sample?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-triangle-removal--oral-check-1

Does the conclusion estimate ε from one sample?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** For each ε>0, a graph requiring εn² edge deletions to become triangle-free has at least δ(ε)n³ triangles; independent triple samples then give a one-sided tester.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. A single sampled triangle certifies non-freeness, not a quantitative edit distance.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-triangle-removal--oral-check-1)

---

## 3. Can a graph contain a triangle but be very close to triangle-free?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-triangle-removal--oral-check-2

Can a graph contain a triangle but be very close to triangle-free?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** For each ε>0, a graph requiring εn² edge deletions to become triangle-free has at least δ(ε)n³ triangles; independent triple samples then give a one-sided tester.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Yes. One isolated triangle needs only one edge deletion.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-triangle-removal--oral-check-2)

---

## 4. A maximal packing gives only a quadratic witness count

**Doctoral proof · proof · 40 minutes suggested**

ID: core-triangle-removal--triangle-packing-cover-gap

Let τ(G) be the minimum edge deletions making G triangle-free and ν(G) the maximum number of edge-disjoint triangles. Prove ν≤τ≤3ν. Deduce ν≥εn²/3 for an ε-far graph and explain why this does not yet prove the removal lemma's δn³ triangle count.

**Required output:** Two deterministic inequalities and a clear accounting of the missing factor of n.

**Prerequisites:** triangle removal lemma; regular pairs; dense testing; packing and covering

**Examiner follow-up:** Give a graph where τ=ν and discuss how close τ can be to 3ν.

<details>
<summary>Solution route / investigation plan</summary>

1. Every deletion set must meet every triangle of an edge-disjoint packing, requiring at least one distinct edge per packed triangle. Conversely remove all three edges of a maximal packing: any remaining triangle would be edge-disjoint from it and contradict maximality.

2. Thus ε-farness forces Ω(εn²) edge-disjoint triangles, but the removal conclusion is cubic in n for fixed ε. The extra abundance is precisely the structural content supplied by regularity or another proof of triangle removal.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-triangle-removal--triangle-packing-cover-gap)

---

## 5. Prove a quantitative counting lemma for a regular triple

**Doctoral proof · proof · 45 minutes suggested**

ID: core-triangle-removal--regular-triple-counting

Let A,B,C each have m vertices and all three cross-pairs be η-regular with densities at least d, where 0<η<min(d/2,1/4). Prove there are at least (1−2η)(d−η)^3m³ triangles with one vertex in each part. State the regularity thresholds used on each neighborhood.

**Required output:** A full counting proof with every subset-size requirement checked.

**Prerequisites:** triangle removal lemma; regular pairs; dense testing; packing and covering

**Examiner follow-up:** Which parts fail if one dense pair is not regular?

<details>
<summary>Solution route / investigation plan</summary>

1. All but fewer than ηm vertices of A have at least (d−η)m neighbors in B, and the same holds for C; otherwise those exceptional vertices and the full opposite class violate regularity. At least (1−2η)m vertices are typical for both.

2. For each typical a, both neighborhoods have size at least (d−η)m≥ηm. Regularity of (B,C) therefore gives at least (d−η)|N_B(a)||N_C(a)| edges between them. Sum over typical a; each triangle is counted exactly once at its A vertex.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-triangle-removal--regular-triple-counting)

---

## 6. Check the deletion budget and the resulting δ

**Examiner challenge · synthesis · 50 minutes suggested**

ID: core-triangle-removal--regularity-cleanup-budget

For 0<ε<1, assume an ε/4-regular equitable partition with exceptional set V_0, k between ⌈4/ε⌉ and T, and common class size c. Delete exceptional, internal, irregular-pair and density-below-ε/2 edges. Bound the four costs by εn²/4, εn²/8, εn²/4 and εn²/4, then derive the valid removal parameter δ=ε³/(512T³).

**Required output:** A complete cost ledger and a factor-checked abundance constant.

**Prerequisites:** triangle removal lemma; regular pairs; dense testing; packing and covering

**Examiner follow-up:** How must n<T be handled when the displayed δn³ is below one?

<details>
<summary>Solution route / investigation plan</summary>

1. The sum of the displayed costs is 7εn²/8<εn², so an ε-far graph retains a triangle. It lies across three distinct nonexceptional classes, each pair regular and of density at least ε/2.

2. At least c/2 vertices in one class have at least εc/4 neighbors in each other class. Every such vertex lies in at least (ε/4)^3c² triangles, and c³≥n³/(4T³) for the standard partition bounds. Multiplying yields ε³n³/(512T³). The regularity partition theorem is the explicitly assumed deep input.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-triangle-removal--regularity-cleanup-budget)

---

## 7. A sampled triangle count can have constant mean and vanishing detection

**Examiner challenge · counterexample · 55 minutes suggested**

ID: core-triangle-removal--expectation-not-detection

Let G have a hub joined to every vertex of K_{m,m}, so n=2m+1. For a uniform s-subset with s=⌊n^{1/3}⌋, compute the expected sampled triangle count asymptotically and show its chance of containing any triangle tends to zero. Identify why an expectation-only argument fails.

**Required output:** An exact expectation formula and a rare-hub upper bound on rejection.

**Prerequisites:** triangle removal lemma; regular pairs; dense testing; packing and covering

**Examiner follow-up:** What second-moment or structural information would turn an expected count into a detection probability?

<details>
<summary>Solution route / investigation plan</summary>

1. Every triangle consists of the hub and one vertex from each side, so T=m². The expected sampled count is m² C(s,3)/C(n,3), tending to 1/4.

2. Every sampled triangle requires including the hub, an event of probability s/n=O(n^−2/3). Conditional on that rare event, many triangles can appear. The graph can be made triangle-free by deleting only m hub edges, so it is not a fixed-ε far input; removal-based detection is unaffected.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-triangle-removal--expectation-not-detection)

---

## 8. Full-support query noise destroys exact one-sided certification

**Examiner challenge · proof · 60 minutes suggested**

ID: core-triangle-removal--noisy-oracle-one-sided-impossibility

Suppose each adjacency answer is independently flipped with fixed probability θ∈(0,1/2), including repeated queries. Prove that no tester using an almost-sure finite bounded number of queries can both reject some far input with positive probability and accept every triangle-free graph with probability one. Contrast this with two-sided high-confidence testing.

**Required output:** A transcript-support impossibility proof and a precise distinction between zero and small error.

**Prerequisites:** triangle removal lemma; regular pairs; dense testing; packing and covering

**Examiner follow-up:** What changes with a one-sided oracle noise model that never reports a nonexistent edge?

<details>
<summary>Solution route / investigation plan</summary>

1. Fix internal random coins on a positive-measure set yielding some finite rejecting transcript on the far graph. Under the empty graph every finite response pattern has positive probability because both answers have nonzero noise probability, even with adaptive queries.

2. Therefore that rejecting behavior also has positive probability on a triangle-free input, contradicting exact one-sided acceptance. Repetition can make false rejection very small, but cannot make it exactly zero with a bounded finite number of full-support noisy observations.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-triangle-removal--noisy-oracle-one-sided-impossibility)

---

## 9. Use triangle removal to force a cyclic arithmetic progression

**Research seminar · research-extension · 85 minutes suggested**

ID: core-triangle-removal--removal-to-cyclic-progressions

Assume triangle removal. For fixed α>0 and sufficiently large odd N, prove every A⊆Z_N of size at least αN contains distinct a,b,c with a+b=2c. Build a tripartite graph on three copies of Z_N using differences a,b and doubled c, and count its edge-disjoint trivial triangles under the contrary assumption.

**Required output:** A complete graph reduction with all scale factors and the assumed removal input named.

**Prerequisites:** triangle removal lemma; regular pairs; dense testing; packing and covering

**Examiner follow-up:** Explain why a nontrivial solution in an odd cyclic group has three distinct elements.

<details>
<summary>Solution route / investigation plan</summary>

1. Put edges x–y when y−x∈A, y–z when z−y∈A, and x–z when (z−x)/2∈A; division by two is valid for odd N. Triangles correspond to a,b,c∈A with a+b=2c.

2. If only trivial progressions exist, triangles are (x,x+a,x+2a), totaling |A|N, and are edge-disjoint because each of their edge types identifies x,a uniquely. Thus at least |A|N≥αN² deletions are needed, making the 3N-vertex graph α/9-far. Removal forces Ω_α(N³) triangles, contradicting the O(N²) count for large N.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-triangle-removal--removal-to-cyclic-progressions)

---

## 10. Derive a superpolynomial barrier from a supplied progression-free set

**Research seminar · research-extension · 100 minutes suggested**

ID: core-triangle-removal--behrend-removal-parameter-barrier

Assume the deep construction that for arbitrarily large m there is A⊆[m] with no nontrivial three-term progression and |A|≥m e^{−C√ln m}. Thin A to a prescribed comparable size, embed it in Z_{4m+1}, and use the tripartite construction to show that no uniform triangle-removal lower bound δ(ε)≥cε^b can hold for fixed c,b>0.

**Required output:** A supplied-construction reduction and a quantified failure of every polynomial δ lower bound.

**Prerequisites:** triangle removal lemma; regular pairs; dense testing; packing and covering

**Examiner follow-up:** What query lower bound follows specifically for a tester that samples independent vertex triples?

<details>
<summary>Solution route / investigation plan</summary>

1. With N=4m+1 and s=|A|, only trivial cyclic progressions occur because a+b and 2c lie below N. The graph has n=3N vertices, exactly sN edge-disjoint triangles, and normalized deletion distance ε_m=s/(9N), attained by deleting all edges of one type.

2. Its triangle density is s/(27N²)=ε_m/(3N). Choose the thinning so ε_m→0 with ε_m bounded below by a constant times e^{−C√ln m}. For every fixed b, [ε_m/(3N)]/ε_m^b→0, since ln N dominates √ln m. The progression-free construction is assumed; the reduction and parameter comparison are the student's proof.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-triangle-removal--behrend-removal-parameter-barrier)

---

## 11. Balanced blow-ups preserve triangle edit distance exactly

**Doctoral proof · proof · 45 minutes suggested**

ID: core-triangle-removal--blowup-exact-deletion-distance

Let H be a fixed graph and replace every vertex by an independent class of m vertices, every base edge by a complete bipartite block. Prove T(H^{(m)})=m³T(H) and τ(H^{(m)})=m²τ(H). For the lower bound use uniformly chosen representatives from all classes.

**Required output:** Exact count and distance scaling with a randomized lower-bound certificate.

**Prerequisites:** triangle removal lemma; regular pairs; dense testing; packing and covering

**Examiner follow-up:** Does the same representative proof extend to induced forbidden-pattern edit distance, where additions may also be needed?

<details>
<summary>Solution route / investigation plan</summary>

1. Each triangle uses three distinct classes and corresponds to a unique base triangle, with m³ choices. Deleting every block corresponding to an optimal base deletion set proves the distance upper bound.

2. After any triangle-destroying deletion set D in the blow-up, choose one uniform representative per class. The surviving representative graph is triangle-free, so at least τ(H) base edges are missing. Its expected number of missing edges is |D|/m², forcing |D|≥m²τ(H).

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-triangle-removal--blowup-exact-deletion-distance)

---

## 12. What raw triangle count alone can certify

**Examiner challenge · synthesis · 60 minutes suggested**

ID: core-triangle-removal--triangle-incidence-distance-bounds

Let G have T triangles and maximum degree Δ≥2. Prove T/(Δ−1)≤τ(G)≤T, where τ is triangle-deletion distance, and compare these bounds with triangle removal. Give examples showing that Θ(n²) triangles can coexist with only O(n) required deletions.

**Required output:** Two incidence bounds and a quantitatively contrasting family.

**Prerequisites:** triangle removal lemma; regular pairs; dense testing; packing and covering

**Examiner follow-up:** Check both inequalities on disjoint triangles and on complete graphs.

<details>
<summary>Solution route / investigation plan</summary>

1. Each deleted edge destroys at most its number of common neighbors, at most Δ−1. Charging every original triangle to one deleted edge proves the lower bound. For the upper bound choose one edge from each original triangle and delete their union.

2. The hub over K_{m,m} has m² triangles but deletion of m hub edges suffices, illustrating the O(n) distance possibility. Removal runs in the opposite useful direction: fixed quadratic distance forces cubic abundance, whereas a raw count below that scale may permit concentrated, easily destroyed triangles.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-triangle-removal--triangle-incidence-distance-bounds)
