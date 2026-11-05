# Baker’s PTAS: layers, treewidth, independent-set DP

§10.2 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-planar-mis)

## 1. Baker’s PTAS: layers, treewidth, independent-set DP

**Doctoral proof · proof · 30 minutes suggested**

ID: core-planar-mis--source-proof

Prove the averaging argument on the unknown optimum, formulate introduce/forget/join recurrences with no double counting, and derive a running time polynomial for fixed ε. Explain why arbitrary BFS layers require their own structural theorem.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Removing one residue class of planar outer-face layers loses at most a 1/k fraction of an optimum independent set; the remaining bounded-outerplanarity pieces can be solved by bounded-treewidth DP.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. Every optimum vertex belongs to exactly one residue, so one deletion removes at most OPT/k vertices. The best candidate has size at least (1−1/k)OPT.

2. A state is an independent subset S of a bag. Introduce checks adjacency; forget maximizes over membership; join adds child values and subtracts the weight of S counted twice.

3. The assigned argument uses bounded outerplanarity to obtain treewidth O(k). Bag states are exponential in k but polynomial in n for fixed k≈1/ε.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-planar-mis--source-proof)

---

## 2. Why does this not yield a PTAS on all graphs?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-planar-mis--oral-check-1

Why does this not yield a PTAS on all graphs?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Removing one residue class of planar outer-face layers loses at most a 1/k fraction of an optimum independent set; the remaining bounded-outerplanarity pieces can be solved by bounded-treewidth DP.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. The bounded-treewidth conclusion after deleting a residue class uses planarity.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-planar-mis--oral-check-1)

---

## 3. What does the latest assigned §10.2 cover?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-planar-mis--oral-check-2

What does the latest assigned §10.2 cover?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Removing one residue class of planar outer-face layers loses at most a 1/k fraction of an optimum independent set; the remaining bounded-outerplanarity pieces can be solved by bounded-treewidth DP.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Planar maximum independent set. Euclidean TSP is §10.1 and remains available as earlier background.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-planar-mis--oral-check-2)

---

## 4. Carry Baker’s argument through binary vertex weights

**Doctoral proof · proof · 40 minutes suggested**

ID: core-planar-mis--weighted-layer-shift

For nonnegative rational vertex weights, prove that deleting each layer residue modulo k and solving every residual instance exactly gives weight at least (1−1/k)OPT. State the weighted bag objective and bound the arithmetic bit complexity.

**Required output:** A weighted PTAS transfer and a bit-complexity argument.

**Prerequisites:** Baker shifting; weighted treewidth DP

**Examiner follow-up:** Can negative-weight vertices be removed before running the algorithm?

<details>
<summary>Solution route / investigation plan</summary>

1. Partition the weight of a fixed optimum independent set among the k residue classes. Their sum is OPT, so some class contains at most OPT/k optimum weight. Williamson–Shmoys Lemmas 10.13–10.15 supply a polynomially constructible width-O(k) decomposition after deleting that layer class. Removing that class leaves a feasible independent set of weight at least (1−1/k)OPT, and the exact residual solver does at least as well.

2. In a bag state S count sum_{v∈S}w_v and subtract that weight once at a join when both child values include the bag. Rational sums of at most n input weights have polynomial bit length; use exact comparisons rather than a DP indexed by numerical total weight. Nonnegative weights make the empty solution and lower-bound interpretation uncomplicated.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-planar-mis--weighted-layer-shift)

---

## 5. Planar grids require growing bag width

**Doctoral proof · proof · 60 minutes suggested**

ID: core-planar-mis--grid-width-lower-bound

Prove that every tree decomposition of the r×r grid has a bag of size at least r. For each row i and column j use the connected cross C_ij=row_i∪column_j. Prove the needed subtree-Helly property and a lower bound on the size of a set hitting every cross.

**Required output:** An elementary decomposition-width lower bound with both supporting lemmas.

**Prerequisites:** tree-decomposition connectedness; Helly property for subtrees

**Examiner follow-up:** Relate grid side length to outer-face peeling depth.

<details>
<summary>Solution route / investigation plan</summary>

1. The decomposition nodes whose bags meet a connected graph set form a subtree: unite the connected occurrence subtrees of its vertices along its edges. Any two crosses intersect, so their bag-occurrence subtrees pairwise intersect. Finite pairwise-intersecting subtrees of a tree have a common node; root the tree and choose the subtree whose closest-to-root vertex is deepest to prove this Helly fact.

2. The common bag meets every cross. A set of fewer than r grid vertices misses some row and some column, hence misses their union cross, a contradiction. Therefore the bag has at least r vertices and treewidth is at least r−1. Planarity alone does not bound the width required by an exact independent-set DP.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-planar-mis--grid-width-lower-bound)

---

## 6. Complementing an approximate independent set can lose the ratio

**Examiner challenge · counterexample · 40 minutes suggested**

ID: core-planar-mis--complement-ratio-failure

On a star with n vertices, take an independent set consisting of all but t leaves. Compute its independent-set ratio and the size of its complementary vertex cover. Show that a (1−ε) independent-set approximation can yield an unbounded vertex-cover approximation as n grows.

**Required output:** An explicit ratio-separation family and the correct additive transfer.

**Prerequisites:** independent-set/vertex-cover complement; multiplicative guarantees

**Examiner follow-up:** What additive cover-error bound does the independent-set guarantee always imply?

<details>
<summary>Solution route / investigation plan</summary>

1. The optimum independent set consists of all n−1 leaves and optimum vertex cover is the center alone. Omitting t leaves gives independent-set value n−1−t, with ratio 1−t/(n−1). Its complement is the center plus the t omitted leaves, a valid cover of size t+1.

2. Choose t=floor(ε(n−1)). The independent-set ratio is at least 1−ε, but the cover ratio t+1 grows linearly with n for fixed ε. The affine relation τ=n−α preserves exact optima but not multiplicative approximation ratios without additional bounds on the optimum cover size.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-planar-mis--complement-ratio-failure)

---

## 7. Extend planar MIS to mandatory selected vertices

**Examiner challenge · construction · 40 minutes suggested**

ID: core-planar-mis--mandatory-vertices

Given a planar graph, nonnegative vertex weights, and a required independent set A, design a PTAS for maximum-weight independent sets containing A. Handle infeasible A and prove the guarantee for the full objective rather than only the residual objective.

**Required output:** A reduction, feasibility check, and full-objective ratio proof.

**Prerequisites:** induced subgraphs; weighted Baker scheme

**Examiner follow-up:** What changes if some mandatory vertices have negative weights?

<details>
<summary>Solution route / investigation plan</summary>

1. If A contains an edge, no feasible independent set contains it. Otherwise remove A and all its neighbors, solve weighted MIS approximately on the induced residual graph H, and add A. Feasible extensions correspond exactly to independent sets of H, and H remains planar.

2. Writing W_A for the forced weight and OPT_H for the residual optimum, total optimum is W_A+OPT_H. A residual (1−ε) solution gives W_A+(1−ε)OPT_H≥(1−ε)(W_A+OPT_H), using W_A≥0. Forced vertices must be handled before shifting; deleting their layer without replacement would violate the feasibility requirement.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-planar-mis--mandatory-vertices)

---

## 8. Prove the structural separation behind a join recurrence

**Examiner challenge · proof · 45 minutes suggested**

ID: core-planar-mis--bag-separator-proof

In a rooted tree decomposition, let a join node and both children have the same bag B. Prove the vertex sets appearing strictly below the two children intersect only in B and have no edge between their interiors. Use this to justify combining two independent sets agreeing on B.

**Required output:** Two separator lemmas and a formally justified join operation.

**Prerequisites:** tree-decomposition axioms; join states

**Examiner follow-up:** Why does merely covering every graph edge, without connected bag occurrences, fail to justify this separation?

<details>
<summary>Solution route / investigation plan</summary>

1. If a vertex appeared in both child subtrees, connectedness of its bag occurrences would force it into the join bag B. If an edge joined vertices exclusive to the two interiors, some bag would have to contain both endpoints; connectedness would again force an endpoint through B, contradicting exclusivity.

2. Thus the two interior solutions interact only through their common chosen subset of B. Agreement on that subset and independence within each child imply independence of their union. The objective subtracts the common selected bag weight once. This derives the recurrence from the decomposition axioms rather than treating the subtraction as an isolated accounting rule.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-planar-mis--bag-separator-proof)

---

## 9. Research exercise: make the shifting loss exact

**Research seminar · research-extension · 90 minutes suggested**

ID: core-planar-mis--shifting-tight-family

For k≥2 build k nested four-cycles in a fixed planar embedding, connect consecutive cycles by bridges joining zero-weight vertices, and assign weight one to two opposite vertices of each cycle and zero elsewhere. Prove each cycle is one peeling layer, OPT=2k, and every single-residue deletion modulo k leaves optimum exactly 2(k−1). Verify with exact subset enumeration for small k.

**Required output:** A tight weighted shifting family with embedding and exact small-instance checks.

**Prerequisites:** outer-face layers; weighted independent sets

**Examiner follow-up:** How does the example change if the planar embedding is allowed to be chosen anew?

<details>
<summary>Solution route / investigation plan</summary>

1. Draw the cycles concentrically with bridges in the annuli. The outer cycle shields all inner cycles from the unbounded face; after its vertices are removed the next cycle is exposed, giving one cycle per layer. Choose the two bridge-attachment vertices to be the zero-weight opposite pair on each cycle.

2. All 2k positive vertices are independent because they are opposite within each cycle and all bridges use zero-weight vertices. Each residue contains one cycle, and deleting it removes exactly two attainable weight units; no retained vertex can replace that positive weight. The exact ratio is 1−1/k for this fixed shifting strategy. A different embedding or algorithm may do better, so the example is a framework bound rather than general planar-MIS hardness.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-planar-mis--shifting-tight-family)

---

## 10. Research exercise: shift for maximum induced bipartite subgraph

**Research seminar · research-extension · 100 minutes suggested**

ID: core-planar-mis--induced-bipartite-extension

Extend Baker shifting to maximize the nonnegative weight of vertices inducing a bipartite planar subgraph. Given a width-t decomposition, use bag labels deleted, color-one, color-two to design an exact residual DP and prove a (1−1/k) approximation. Compare with exhaustive three-label assignments on n≤14.

**Required output:** A state-based extension proof and an exact finite validation.

**Prerequisites:** Baker decomposition; finite-state treewidth DP; bipartite coloring

**Examiner follow-up:** Why are actual two-color labels useful even though the objective depends only on retained vertices?

<details>
<summary>Solution route / investigation plan</summary>

1. A bag labeling is legal when adjacent retained vertices have opposite colors. Use introduce, forget, and join transitions preserving the same labels on common vertices; add a retained vertex’s weight once and subtract shared retained-bag weight at joins. There are at most 3^(t+1) states per bag.

2. Fix an optimal induced bipartite vertex set and delete the residue carrying at most 1/k of its weight. Its restriction remains bipartite, so exact residual solutions achieve at least (1−1/k)OPT. Different residual components have no connecting edges, allowing their two-colorings to coexist. Use Williamson–Shmoys Lemmas 10.13–10.15 to construct the bounded-width decomposition; prove the new DP and shifting transfer. An invalid bipartite output or violated ratio is failure.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-planar-mis--induced-bipartite-extension)

---

## 11. Convert a decomposition into the form the DP requires

**Doctoral proof · construction · 45 minutes suggested**

ID: core-planar-mis--nice-decomposition-conversion

Given a width-t tree decomposition with m bags, construct a rooted nice decomposition with introduce, forget, and binary join nodes, width at most t, and O((t+1)m) bags. Prove edge coverage and connected vertex occurrences are preserved.

**Required output:** A constructive normalization proof with size and width bounds.

**Prerequisites:** tree decompositions; nice-DP conventions

**Examiner follow-up:** Why must the remove-before-add order be chosen to avoid a temporary bag exceeding width t?

<details>
<summary>Solution route / investigation plan</summary>

1. Root the decomposition and replace a parent-child edge by a sequence that first removes vertices in the child-only difference and then introduces vertices in the parent-only difference, viewed in the chosen traversal orientation. Intermediate bags stay subsets of one endpoint bag or pass through their intersection, so width does not increase.

2. Replace nodes of high child degree by a binary tree of copies of their bag, and add empty root and leaf chains if required. Every original bag remains, preserving edge coverage. For each vertex, subdivisions and copied bags connect its old occurrence subtree without introducing disconnected appearances. Each original edge adds at most 2(t+1) bags and binary branching adds O(m).

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-planar-mis--nice-decomposition-conversion)

---

## 12. Degree reduction for treewidth need not preserve independent-set value

**Examiner challenge · counterexample · 45 minutes suggested**

ID: core-planar-mis--degree-splitting-objective-trap

Take a five-cycle plus a center adjacent to all five rim vertices. Split the center into adjacent vertices v_1,v_2, assigning two consecutive rim neighbors to v_1 and the other three to v_2. Prove the original independent-set optimum is two but the split graph admits three. Explain the legitimate use of splitting in the book’s treewidth proof.

**Required output:** A planar value-changing example and the correct structural role of splitting.

**Prerequisites:** planar vertex splitting; independent sets; treewidth under contraction

**Examiner follow-up:** What additional state constraints would be needed if an optimization reduction really used split copies?

<details>
<summary>Solution route / investigation plan</summary>

1. The original wheel has rim independence number two, and selecting the center excludes every rim vertex, so OPT=2. In the split graph, choose v_1 and the first and third vertices of the three-neighbor rim segment belonging to v_2; these are mutually nonadjacent, giving size three. Consecutive neighbor blocks preserve a planar drawing.

2. The splitting lemma is used to build a decomposition of a degree-reduced graph and transfer it back by contracting split vertices. Contracting an edge in a tree decomposition does not increase bag size: replace both labels by the original label, whose occurrence sets meet in a bag containing that edge. It is not a claim that MIS objective values survive splitting.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §10.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-planar-mis--degree-splitting-objective-trap)
