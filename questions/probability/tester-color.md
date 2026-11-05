# Dense-graph testing and the 3-coloring restriction tree

§§17.1–17.2 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-tester-color)

## 1. Dense-graph testing and the 3-coloring restriction tree

**Doctoral proof · proof · 45 minutes suggested**

ID: core-tester-color--source-proof

Reconstruct the restriction-tree proof for testing 3-colorability. Explain why following only one guessed partial coloring is unsound. Derive how farness creates many restricting vertices and how depth bounds lead to a constant-size sample.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Distance is normalized by n² edge edits. A one-sided tester rejects only upon finding a genuine obstruction; the assigned 3-coloring tester analyzes all branches of a restriction tree.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. A sampled graph is non-3-colorable only when every branch of possible partial colorings fails. A failed greedy coloring on one branch is not a certificate.

2. The potential is total remaining feasible-list size, initially at most 3n. A restricting vertex removes Ω(εn) list entries, giving depth O(1/ε).

3. Farness prevents all vertices from having harmless extensions: otherwise a global coloring with few monochromatic edges could be repaired cheaply. Chernoff bounds and a union bound over a bounded ternary tree finish the sample analysis.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§17.1–17.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tester-color--source-proof)

---

## 2. Does accepting imply the whole graph is 3-colorable?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-tester-color--oral-check-1

Does accepting imply the whole graph is 3-colorable?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Distance is normalized by n² edge edits. A one-sided tester rejects only upon finding a genuine obstruction; the assigned 3-coloring tester analyzes all branches of a restriction tree.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. One-sided error guarantees rejection probability for ε-far graphs, not a global certificate on every accepted input.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§17.1–17.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tester-color--oral-check-1)

---

## 3. Why is a sparse-graph normalization different?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-tester-color--oral-check-2

Why is a sparse-graph normalization different?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Distance is normalized by n² edge edits. A one-sided tester rejects only upon finding a genuine obstruction; the assigned 3-coloring tester analyzes all branches of a restriction tree.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Changing εn² edges is natural in the dense model. Replacing it by εn without changing the theorem changes the promise.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§17.1–17.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tester-color--oral-check-2)

---

## 4. Colorability distance is a minimum monochromatic-edge objective

**Doctoral proof · proof · 40 minutes suggested**

ID: core-tester-color--edit-distance-monochromatic-objective

For a graph G prove that the minimum number of edge edits making it k-colorable equals min_φ |{uv∈E:φ(u)=φ(v)}| over all k-colorings φ of the vertices. For the balanced blow-up of K4 with four classes of size m, prove the exact 3-colorability distance is m².

**Required output:** An exact distance identity and a rigorous blow-up optimization.

**Prerequisites:** dense-graph edit distance; proper colorings; restriction trees; one-sided testing

**Examiner follow-up:** What changes for weighted deletion costs or a promise that only edge additions are allowed?

<details>
<summary>Solution route / investigation plan</summary>

1. Deleting all monochromatic edges of any assignment makes it proper. Conversely any edited graph with a proper assignment must delete every original edge monochromatic under that assignment; edge additions cannot remove that obligation.

2. For the K4 blow-up, fix all but one original part's color counts. The monochromatic-edge objective is linear in the remaining part's distribution, so concentrating that part in one best color cannot increase cost. Round all four parts this way. Four monochromatic parts in three colors force a merged pair costing m², and merging exactly one pair attains it.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§17.1–17.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tester-color--edit-distance-monochromatic-objective)

---

## 5. Calculate a colorability tester on a blow-up exactly

**Doctoral proof · proof · 45 minutes suggested**

ID: core-tester-color--four-part-sample-detection

For the balanced K4 blow-up on n=4m vertices, show that an induced sample is non-3-colorable exactly when it meets all four parts. Give an exact inclusion–exclusion formula for a uniform s-subset and the with-replacement limit for fixed s as m→∞. Relate its fixed farness 1/16 to sample complexity.

**Required output:** A structural equivalence and two fully normalized probability formulas.

**Prerequisites:** dense-graph edit distance; proper colorings; restriction trees; one-sided testing

**Examiner follow-up:** How does the formula change when the four parts have unequal sizes?

<details>
<summary>Solution route / investigation plan</summary>

1. Any sample meeting at most three parts is complete multipartite with at most three nonempty classes and is 3-colorable. Meeting all four yields a K4 by taking one representative from each part.

2. The rejection probability is Σ_{j=0}^4(−1)^j C(4,j) C((4−j)m,s)/C(4m,s), with binomial coefficients zero when appropriate. The limit is 1−4(3/4)^s+6(1/2)^s−4(1/4)^s. The exact edit distance m² divided by n² is 1/16.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§17.1–17.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tester-color--four-part-sample-detection)

---

## 6. Derive the restricting-vertex abundance lemma

**Examiner challenge · proof · 50 minutes suggested**

ID: core-tester-color--restriction-repair-inequality

For a partial proper 3-coloring on S, let U be vertices with empty feasible lists. For v outside S∪U let δ(v) be the minimum, over its feasible colors, of the number of neighbors outside S∪U whose lists contain that color. Prove the repair bound d_3(G)≤n|S∪U|+(1/2)Σ_vδ(v), and deduce |S∪U∪{δ≥εn}|≥εn/2 when d_3(G)≥εn².

**Required output:** A repair coloring construction and a quantitative abundance deduction.

**Prerequisites:** dense-graph edit distance; proper colorings; restriction trees; one-sided testing

**Examiner follow-up:** Where does the minimum over every feasible color prevent the tree from following only a favorable branch?

<details>
<summary>Solution route / investigation plan</summary>

1. Assign each remaining vertex a feasible color minimizing the relevant neighbor count, and assign arbitrary colors to U. At most n|S∪U| monochromatic edges touch the exceptional vertices; elsewhere each monochromatic edge is counted at both endpoints among their δ-bounds.

2. If W={δ≥εn}, bound δ(v) by n on W and by εn outside W. The repair cost is at most n(|S∪U|+|W|)+(ε/2)n². Farness forces the displayed lower bound on the exceptional-plus-restricting set, with harmless weak/strict endpoint choices.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§17.1–17.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tester-color--restriction-repair-inequality)

---

## 7. A conditional sampling calculation for every tree branch

**Examiner challenge · proof · 55 minutes suggested**

ID: core-tester-color--adaptive-success-rounds

Suppose each unfinished branch of a ternary restriction tree needs at most D successful sampled vertices, with conditional success probability at least ρ at every draw until completion, and there are at most L possible color-choice paths. Prove a bound L P(Bin(s,ρ)<D) on failure and give an s sufficient for total failure η. Explain how sampling without replacement preserves ρ under an explicit exposed-vertex allowance.

**Required output:** A conditional domination proof and an explicit sample-size inequality.

**Prerequisites:** dense-graph edit distance; proper colorings; restriction trees; one-sided testing

**Examiner follow-up:** Why must one condition on the past rather than call the graph-dependent success sets independent?

<details>
<summary>Solution route / investigation plan</summary>

1. Couple each branch's success indicator to a fresh uniform random variable using its conditional success probability; until completion it dominates Bernoulli(ρ). Extend successes after completion if needed. Union-bound over at most L fixed color-choice paths.

2. If sρ≥2D and sρ≥8ln(L/η), Chernoff gives the desired failure bound. In the graph application, if each useful set has size at least εn/2 and at most εn/4 vertices have been exposed, the remaining useful fraction is at least ε/4, so take ρ=ε/4. With D=O(1/ε) and ln L=O(D), this yields s=O((1+ln(1/η))/ε²).

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§17.1–17.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tester-color--adaptive-success-rounds)

---

## 8. Count the actual resources of the sample tester

**Examiner challenge · synthesis · 60 minutes suggested**

ID: core-tester-color--queries-versus-exponential-runtime

Assume the source's 3-coloring sampling theorem uses s=⌈40/ε²⌉ vertices when n>400/ε³. Give a complete tester including the complementary small-n branch, its adjacency-query bound and a brute-force running-time bound. Explain why constant query complexity in n is consistent with NP-hard exact 3-colorability.

**Required output:** A fully specified algorithm and separate query, runtime and promise statements.

**Prerequisites:** dense-graph edit distance; proper colorings; restriction trees; one-sided testing

**Examiner follow-up:** How can a better exact coloring subroutine improve time without changing the query argument?

<details>
<summary>Solution route / investigation plan</summary>

1. In the large-n branch query every sampled pair, using at most C(s,2)=O(ε^−4) queries, and test the induced graph by up to 3^s color assignments. This is independent of n but exponential in ε^−2.

2. For n≤400/ε³ query the whole graph and decide exactly, costing O(ε^−6) queries and at most 3^{O(ε^−3)} time. Combining the branches gives a function of ε only. The tester distinguishes valid from ε-far inputs and need not decide inputs in the intervening gap.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§17.1–17.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tester-color--queries-versus-exponential-runtime)

---

## 9. A one-sided sample tester need not be tolerant

**Research seminar · research-extension · 85 minutes suggested**

ID: core-tester-color--non-tolerant-blowup-counterexample

Take a complete four-partite graph on a δ fraction of n vertices with four equal parts, and leave all other vertices isolated. Prove its 3-colorability distance is δ²n²/16. Set δ=(2/5)√ε and show that sampling s=⌈40/ε²⌉ vertices rejects with probability tending to one as ε↓0, although the graph is only ε/100-far.

**Required output:** A quantitative close-input rejection example and a precise distinction between the two testing promises.

**Prerequisites:** dense-graph edit distance; proper colorings; restriction trees; one-sided testing

**Examiner follow-up:** What additional promise and algorithm would a genuinely tolerant tester need?

<details>
<summary>Solution route / investigation plan</summary>

1. The isolated vertices contribute no monochromatic edges. The same part-rounding argument as for the balanced full blow-up gives edit distance (δn/4)²=δ²n²/16, equal to εn²/100 for the chosen δ, up to integer rounding.

2. Rejection occurs when all four small parts are hit. The probability of missing a fixed part in sampling without replacement is at most exp(−sδ/4), so rejection is at least 1−4e^{−sδ/4}. This tends to one. Thus testing exact colorability versus ε-farness does not supply acceptance of ε/100-close graphs.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§17.1–17.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tester-color--non-tolerant-blowup-counterexample)

---

## 10. Investigate detection at fixed multipartite edit distance

**Research seminar · research-extension · 100 minutes suggested**

ID: core-tester-color--unequal-blowup-investigation

For complete four-partite blow-ups with class fractions a_i>0 and possible isolated vertices, prove 3-colorability distance is n²min_{i<j}a_i a_j up to rounding. Derive the exact with-replacement rejection probability for s samples. Design a reproducible rational-grid search for the worst rejection probability under min pair-product≥ε, with balanced blow-ups as a baseline.

**Required output:** A distance proof, probability formula and a reproducible finite optimization protocol.

**Prerequisites:** dense-graph edit distance; proper colorings; restriction trees; one-sided testing

**Examiner follow-up:** Can an extremizer put positive mass in isolated vertices, and what would certify that conclusion?

<details>
<summary>Solution route / investigation plan</summary>

1. Rounding each part's fractional color assignment to a single best color never increases the monochromatic objective. The optimal assignment merges exactly a minimum-product pair and places the other two parts in the remaining colors.

2. Inclusion–exclusion gives P(hit all four)=Σ_{J⊆[4]}(−1)^{|J|}(1−Σ_{j∈J}a_j)^s. Enumerate rational a_i on a stated grid with Σa_i≤1, use exact arithmetic where feasible, and report finite-grid minima only. A claim about the continuous optimum additionally requires a certified optimization or approximation error bound.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§17.1–17.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tester-color--unequal-blowup-investigation)

---

## 11. Many tiny obstructions can still be dense-model close

**Doctoral proof · synthesis · 45 minutes suggested**

ID: core-tester-color--many-small-obstructions-distance

Let n be divisible by four and let G be a disjoint union of n/4 copies of K4. Compute its exact 3-colorability distance and bound the probability that a uniform s-subset contains a non-3-colorable induced subgraph. Explain why this does not contradict a constant-query tester for fixed ε.

**Required output:** An exact edit distance and a normalized sampling estimate.

**Prerequisites:** dense-graph edit distance; proper colorings; restriction trees; one-sided testing

**Examiner follow-up:** What changes if each K4 vertex is replaced by a growing equal-size independent class?

<details>
<summary>Solution route / investigation plan</summary>

1. One edge deletion is necessary and sufficient per K4 component, so the distance is n/4 edits, normalized as 1/(4n). A sampled induced subgraph is non-3-colorable exactly when it contains all four vertices of at least one component.

2. A union bound gives rejection at most (n/4) C(s,4)/C(n,4)=O(s^4/n³) for fixed s. The obstruction count is linear, while fixed dense-model farness requires quadratic edit distance; ε here shrinks with n.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§17.1–17.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tester-color--many-small-obstructions-distance)

---

## 12. Triangle samples alone cannot test 3-colorability

**Examiner challenge · construction · 60 minutes suggested**

ID: core-tester-color--triangle-free-four-chromatic-witness

Construct the 11-vertex Mycielski graph of C5: retain cycle vertices v_i, add u_i adjacent to the two cycle neighbors of v_i, and add w adjacent to all u_i. Prove it is triangle-free and has chromatic number four. Explain why a tester checking only triangles targets the wrong obstruction family.

**Required output:** An explicit adjacency description, two graph proofs and the testing implication.

**Prerequisites:** dense-graph edit distance; proper colorings; restriction trees; one-sided testing

**Examiner follow-up:** Why does a single non-3-colorable finite example not by itself establish dense-model farness for large inputs?

<details>
<summary>Solution route / investigation plan</summary>

1. The original C5 has no triangle, the u_i are mutually nonadjacent, w has no original-vertex neighbors, and a triangle involving one u_i would require its two cycle neighbors to be adjacent, which they are not. A 3-coloring of C5 extends to a 4-coloring by copying colors to u_i and using a new color at w.

2. If a 3-coloring of the full graph existed, let w have color three, so no u_i does. Replace each original vertex of color three by the color of its copy u_i. Adjacency of copies to neighbors preserves properness and yields a 2-coloring of C5, impossible.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§17.1–17.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tester-color--triangle-free-four-chromatic-witness)
