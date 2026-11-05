# Dense 3-colorable graphs: sample, enumerate, extend

§5.12 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-dense-color)

## 1. Dense 3-colorable graphs: sample, enumerate, extend

**Doctoral proof · proof · 30 minutes suggested**

ID: core-dense-color--source-proof

Prove the simultaneous domination and sample-size bounds with explicit union bounds. Show how a correct sample coloring produces two-element lists, construct the 2SAT clauses, and account for enumeration time.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** In a δ-dense promised 3-colorable graph, a logarithmic-size random dominating sample allows polynomial-time enumeration and extension of its colorings.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. With sample probability 3c log n/(δn), a degree-at-least-δn vertex has no sampled neighbor with probability at most n^−3c; union-bound over vertices. Cap the probability at 1 for small inputs.

2. Chernoff bounds keep the sample at O(log n/δ). For fixed δ, 3^|S| is polynomial in n.

3. A sampled neighbor rules out its color. Encode the remaining at-most-two choices by one Boolean variable per vertex; forbid each monochromatic edge assignment with a 2-clause.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.12](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dense-color--source-proof)

---

## 2. Where is the 3-colorability promise used?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-dense-color--oral-check-1

Where is the 3-colorability promise used?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** In a δ-dense promised 3-colorable graph, a logarithmic-size random dominating sample allows polynomial-time enumeration and extension of its colorings.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. It ensures that at least one enumerated sample coloring is the restriction of a global proper coloring.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.12](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dense-color--oral-check-1)

---

## 3. Why is this not a constant-query tester?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-dense-color--oral-check-2

Why is this not a constant-query tester?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** In a δ-dense promised 3-colorable graph, a logarithmic-size random dominating sample allows polynomial-time enumeration and extension of its colorings.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. The objective is to construct a coloring of the whole graph, and the algorithm reads more than a constant-size induced sample.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.12](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dense-color--oral-check-2)

---

## 4. Domination by sampling without replacement

**Doctoral proof · proof · 40 minutes suggested**

ID: core-dense-color--fixed-size-domination

Let G have minimum degree at least δn and choose a uniform s-subset S, with s≤n. Prove that a fixed vertex has no neighbor in S with probability at most exp(−δs), and give an explicit s ensuring all vertices have a sampled neighbor with probability at least 1−η.

**Required output:** An exact miss formula and a finite-n sampling prescription.

**Prerequisites:** hypergeometric sampling; union bound

**Examiner follow-up:** What changes if domination is defined by closed rather than open neighborhoods?

<details>
<summary>Solution route / investigation plan</summary>

1. For degree d the exact miss probability is C(n−d,s)/C(n,s), interpreted as zero if s>n−d. When nonzero, its product representation is product_{i=0}^{s−1}(1−d/(n−i))≤(1−d/n)^s≤e^−δs.

2. Choose s=ceil(ln(n/η)/δ) when this does not exceed n; otherwise take S=V, which dominates because positive minimum degree excludes isolated vertices. Union-bound the vertex miss events. The sample size is deterministic, removing the separate sample-cardinality tail needed by independent inclusion.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.12](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dense-color--fixed-size-domination)

---

## 5. Global edge density is not minimum-degree density

**Doctoral proof · counterexample · 35 minutes suggested**

ID: core-dense-color--edge-density-isolation

For n divisible by four, take K_{n/4,n/4} plus n/2 isolated vertices. Compute its edge density and chromatic number, and prove no sample can be an open-neighborhood dominating set. State precisely which vertices are controlled by the usual exp(−δ|S|) argument in a general graph.

**Required output:** A quantified counterexample and a corrected scope statement.

**Prerequisites:** density promises; dominating sets

**Examiner follow-up:** Can deleting all low-degree vertices leave a high-minimum-degree core, and what coloring cost must be paid when reinserting them?

<details>
<summary>Solution route / investigation plan</summary>

1. The graph has n²/16 edges and is bipartite, so it is 3-colorable with substantial global edge density. Every isolated vertex has empty open neighborhood, making open domination impossible even for S=V. An average-edge-density hypothesis therefore does not imply the minimum-degree assumption used by the algorithm.

2. For a vertex of degree d, the miss bound is exp(−sd/n), so only vertices with d≥δn receive the uniform exp(−δs) guarantee. Isolated vertices can be colored separately, but arbitrary low-degree residual subgraphs need an additional argument. Merely replacing minimum degree by average degree leaves that structural gap unresolved.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.12](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dense-color--edge-density-isolation)

---

## 6. Build the logarithmic dominating set deterministically

**Examiner challenge · construction · 50 minutes suggested**

ID: core-dense-color--greedy-dominating-set

In an n-vertex graph of minimum degree at least δn, repeatedly choose a vertex adjacent to the largest number of currently undominated vertices. Prove it constructs an open-neighborhood dominating set of size O(log n/δ), then derive a deterministic coloring algorithm under the 3-colorability promise.

**Required output:** A deterministic construction with its coloring runtime.

**Prerequisites:** averaging; list coloring; 2SAT

**Examiner follow-up:** Why may members of S themselves require a sampled neighbor in open domination, although the extension step only needs domination outside S?

<details>
<summary>Solution route / investigation plan</summary>

1. For undominated set U, sum_v |N(v)∩U|=sum_{u∈U}deg(u)≥δn|U|. Some vertex therefore dominates at least δ|U| vertices. The uncovered count shrinks by factor at most 1−δ until it is below one, using at most ceil(ln n/δ)+1 steps. Repeatedly chosen vertices cannot improve coverage and may be skipped.

2. Enumerate all 3^|S| proper assignments of the dominating set. Each remaining vertex loses at least one color to a sampled neighbor, leaving lists of size at most two; test the resulting list constraints by 2SAT. The restriction of a genuine global coloring appears among the candidates. Runtime is n^O(1/δ), polynomial for fixed δ.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.12](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dense-color--greedy-dominating-set)

---

## 7. A proper sample coloring that cannot extend

**Examiner challenge · construction · 40 minutes suggested**

ID: core-dense-color--wrong-restriction-witness

Let a,b,c form a triangle and attach independent leaves s_a,s_b,s_c to the respective triangle vertices. Use S={s_a,s_b,s_c}. Show that coloring every sample vertex color three is proper but has no extension, although the full graph is 3-colorable. Give the resulting 2SAT contradiction.

**Required output:** Two explicit colorings and a fixed-restriction unsatisfiability certificate.

**Prerequisites:** list-coloring reductions; 2SAT implication graphs

**Examiner follow-up:** List an extendable sample coloring and count how many restrictions extend.

<details>
<summary>Solution route / investigation plan</summary>

1. The leaves are mutually nonadjacent, so the all-three restriction is proper. It forbids color three at each triangle vertex, leaving a triangle with only colors one and two. This has no proper coloring. The full graph is easily 3-colored by coloring the triangle distinctly and giving each leaf any color different from its neighbor.

2. With a Boolean variable for each triangle vertex’s two-color choice, every triangle edge requires unequal bits. Along the three-edge cycle, implications force a bit to its negation and conversely, producing an unsatisfiable 2SAT component. The certificate disproves extension of this restriction; it does not certify global non-3-colorability.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.12](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dense-color--wrong-restriction-witness)

---

## 8. Why domination is special for three colors

**Examiner challenge · synthesis · 40 minutes suggested**

ID: core-dense-color--four-color-extension-barrier

Given arbitrary G, add a universal vertex s and fix its color to four. Prove that extending this one-vertex coloring to a four-coloring is equivalent to 3-coloring G. Explain why a dominating sample does not by itself provide a polynomial extension routine for four colors.

**Required output:** A polynomial reduction and a precise extension-complexity distinction.

**Prerequisites:** 3-COLOR NP-completeness; list-coloring complexity

**Examiner follow-up:** How does the reduction generalize to lists of size k−1 for k colors?

<details>
<summary>Solution route / investigation plan</summary>

1. Every original vertex is adjacent to s, so it may use only colors one, two, and three. A valid extension restricts to a 3-coloring of G, and every 3-coloring of G extends by giving s color four. The reduction adds only one vertex and n edges.

2. The sample {s} dominates every vertex outside it, but residual lists have size three, which already encode NP-hard 3-coloring. The three-color algorithm succeeds because one forbidden color leaves at most two choices, allowing a 2SAT representation. The four-color case requires additional structure or a different algorithmic idea.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.12](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dense-color--four-color-extension-barrier)

---

## 9. Research exercise: replace minimum degree by fractional domination

**Research seminar · research-extension · 90 minutes suggested**

ID: core-dense-color--fractional-domination-parameter

Suppose z_v∈[0,1] satisfies sum_{v∈N(u)}z_v≥1 for every u, with τ=sum_v z_v. Independently include v with probability min(1,3z_v ln n). Prove simultaneous open domination and size O(τ ln n) with positive constant probability, then derive a coloring time n^O(τ). Compare τ with 1/δ on dense examples.

**Required output:** A parameterized rounding theorem and an exact small-graph comparison.

**Prerequisites:** fractional set cover; randomized rounding; list coloring

**Examiner follow-up:** Can conditional expectation make this parameterized construction deterministic?

<details>
<summary>Solution route / investigation plan</summary>

1. If any neighbor has inclusion probability one, u is covered. Otherwise the miss probability is at most exp(−3 ln n sum_{N(u)}z_v)≤n^−3. A union bound gives failure at most n^−2. Expected size is at most 3τ ln n; Markov bounds exceeding a sufficiently large constant multiple with probability below one half. Handle n≤2 separately.

2. Enumerating sample colorings and solving two-list extensions gives exp(O(τ ln n)) time under the 3-colorability promise. Minimum degree δn permits z_v=1/(δn), truncated appropriately in small cases, so τ≤1/δ. For a finite audit use exact fractional domination LPs and exact dominating-set enumeration on n≤14. Failure means uncovered vertices or a runtime claim that suppresses a growing τ.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.12](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dense-color--fractional-domination-parameter)

---

## 10. Research exercise: a logarithmic sample can be necessary

**Research seminar · research-extension · 100 minutes suggested**

ID: core-dense-color--logarithmic-domination-lower

In a random balanced bipartite graph on n vertices, include each cross-edge independently with probability 1/2. Prove that with high probability minimum degree is at least n/8 and no dominating set has size at most c log₂ n for any fixed c<1. This gives 3-colorable constant-density examples needing logarithmic domination.

**Required output:** A probabilistic existence proof and a bounded reproducibility plan.

**Prerequisites:** Chernoff bounds; first moment method; bipartite graphs

**Examiner follow-up:** Can the exponent be sharpened by retaining a and b separately instead of replacing both by |S|?

<details>
<summary>Solution route / investigation plan</summary>

1. Each degree is Bin(n/2,1/2), so a Chernoff bound and union bound give minimum degree at least n/8 with probability tending to one. Fix S with a vertices in the left part and b in the right. Outside vertices in the left miss S with probability 2^−b and those on the right with probability 2^−a; all involved cut-edge sets are disjoint.

2. Thus Pr[S dominates]≤exp[−(n/2−a)2^−b−(n/2−b)2^−a]≤exp[−Ω(n·2^−|S|)]. For |S|≤c log₂n this is exp[−Ω(n^(1−c))], which dominates the exp(O((log n)²)) number of candidate sets. As a finite check enumerate minimum dominating sets for small samples; use the asymptotic proof as baseline and do not infer its constants from finite data.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.12](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dense-color--logarithmic-domination-lower)

---

## 11. The maximum possible minimum degree under a 3-coloring promise

**Doctoral proof · proof · 40 minutes suggested**

ID: core-dense-color--density-promise-extremality

Prove every 3-colorable n-vertex graph has minimum degree at most 2n/3. If n is divisible by three and minimum degree is exactly 2n/3, characterize the graph. Derive the restriction this places on the density parameter in the promised algorithm.

**Required output:** A sharp degree bound and an equality characterization.

**Prerequisites:** color classes; degree counting

**Examiner follow-up:** How do rounding effects change the statement when n is not divisible by three?

<details>
<summary>Solution route / investigation plan</summary>

1. In any three-color partition, a vertex in class A has degree at most n−|A|. A largest class has size at least n/3, so some vertex has degree at most 2n/3. More uniformly, minimum degree δn forces every nonempty color class to have size at most (1−δ)n.

2. At minimum degree 2n/3, all three class sizes must equal n/3. Every vertex must then be adjacent to every vertex outside its own class, yielding the balanced complete tripartite graph. Thus δ>2/3 makes the nonempty promised input family impossible, and the equality endpoint is highly structured.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.12](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dense-color--density-promise-extremality)

---

## 12. A structured dense family needs only a constant sample

**Examiner challenge · proof · 40 minutes suggested**

ID: core-dense-color--tripartite-constant-sample

Assume G is complete tripartite and minimum degree is at least δn with δ>1/2. Prove every part has size at least (2δ−1)n. Bound the number of uniform vertex samples needed to hit all three parts with probability at least 1−η, independently of n, and explain why this does not contradict general logarithmic domination lower bounds.

**Required output:** An explicit constant sample bound and a structural extension proof.

**Prerequisites:** complete multipartite graphs; sampling bounds

**Examiner follow-up:** What happens as δ decreases to 1/2?

<details>
<summary>Solution route / investigation plan</summary>

1. Each part has size at most (1−δ)n by the degree condition. The other two parts together have size at most 2(1−δ)n, so any fixed part has size at least (2δ−1)n. Sampling s vertices with replacement misses that part with probability at most exp[−s(2δ−1)].

2. Taking s≥ln(3/η)/(2δ−1) hits every part by a union bound. A sample hitting three parts contains a triangle and determines the three parts’ color identities up to permutation; outside vertices are forced by their neighbors in two other parts. General dense graphs lack this complete multipartite structure, so their logarithmic domination lower bounds remain compatible.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.12](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dense-color--tripartite-constant-sample)
