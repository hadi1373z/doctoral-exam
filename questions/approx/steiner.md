# Generalized Steiner tree: moat growth and the forest lemma

§7.4 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-steiner)

## 1. Generalized Steiner tree: moat growth and the forest lemma

**Doctoral proof · proof · 45 minutes suggested**

ID: core-steiner--source-proof

Reconstruct the dual-fitting calculation during one growth interval. State precisely which components are active, prove the needed degree bound after pruning, and explain why bounding each component’s degree by two is false.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Simultaneous growth of active components, followed by pruning, gives a factor-2 approximation for generalized Steiner tree/Steiner forest.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. A component is active when it separates at least one still-disconnected demand pair. Growing its dual preserves all edge constraints until the next edge becomes tight.

2. In the pruned forest, sum degrees of active contracted components and account for inactive components. The argument is an aggregate forest bound; an individual active component can have degree far above two.

3. Integrate the aggregate crossing bound over growth time to obtain cost(F)≤2∑S yS≤2OPT. Pruning is part of the proof, not an optional optimization.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.4](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-steiner--source-proof)

---

## 2. Why cannot one directly reuse the shortest-path equality?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-steiner--oral-check-1

Why cannot one directly reuse the shortest-path equality?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Simultaneous growth of active components, followed by pruning, gives a factor-2 approximation for generalized Steiner tree/Steiner forest.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Many demand pairs create branching. A positive cut may be crossed several times, so only aggregate charging survives.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.4](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-steiner--oral-check-1)

---

## 3. Why is the set of demand pairs important?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-steiner--oral-check-2

Why is the set of demand pairs important?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Simultaneous growth of active components, followed by pruning, gives a factor-2 approximation for generalized Steiner tree/Steiner forest.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Activity is determined by separation of required pairs, not merely by whether a component contains any terminal.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.4](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-steiner--oral-check-2)

---

## 4. Compress the required-pair relation

**Doctoral proof · proof · 40 minutes suggested**

ID: core-steiner--demand-equivalence-closure

Build the graph whose vertices are terminals and whose edges are required demand pairs. Prove a forest satisfies all demands exactly when it connects each connected component of this demand graph. Replace all demands inside each component by any spanning tree and prove that the separating-cut LP is unchanged.

**Required output:** A demand compression algorithm with integral and LP equivalence proofs.

**Prerequisites:** equivalence closure; Steiner-forest cut constraints

**Examiner follow-up:** Why is connecting all demand components to each other an unjustified strengthening?

<details>
<summary>Solution route / investigation plan</summary>

1. Connectivity in the chosen network is transitive. Satisfying every edge of a connected demand component therefore connects all its terminals. Conversely connecting that component satisfies every listed pair. A spanning tree of its demand graph generates the same equivalence relation with only k−1 pairs for k terminals.

2. A cut separates some original demand exactly when it splits a demand component. Every spanning tree of that component has an edge crossing each nontrivial split, so the family of required cuts is identical after compression. This preserves both integral feasibility and the LP, not merely one particular optimum.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.4](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-steiner--demand-equivalence-closure)

---

## 5. Prove the contracted-forest degree inequality precisely

**Doctoral proof · proof · 45 minutes suggested**

ID: core-steiner--aggregate-forest-degree-lemma

Let H be the contracted forest used in one growth interval, deleting isolated inactive nodes. Partition its nodes into active A and inactive I, with every inactive node having degree at least two. Prove sum_{v∈A}deg(v)≤2|A|−2c, where c is the number of nonempty components. Explain how pruning supplies the inactive-leaf hypothesis.

**Required output:** A complete degree calculation and the exact pruning invariant it needs.

**Prerequisites:** forest degree sum; minimal feasible forests

**Examiner follow-up:** Give a star where one active node has arbitrarily large degree but the aggregate bound holds.

<details>
<summary>Solution route / investigation plan</summary>

1. Because H is a forest, its total degree is 2(|A|+|I|−c). Subtracting inactive degree at least 2|I| yields the claimed bound. Isolated inactive nodes must be removed before applying that lower bound; isolated active nodes are harmless and give a zero contribution.

2. An inactive leaf would attach through one crossing edge although no required demand leaves that current component. In the pruned feasible forest that edge can be deleted: any demand path using it would require a terminal demand to cross the component boundary, contradicting inactivity after accounting for already isolated feasible pieces. The needed structural input is acyclicity of the purchased forest and feasibility-preserving pruning, not a pointwise bound on active degrees.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.4](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-steiner--aggregate-forest-degree-lemma)

---

## 6. Connecting every terminal can be arbitrarily too expensive

**Examiner challenge · counterexample · 35 minutes suggested**

ID: core-steiner--all-terminals-overconnection

On a path with terminal positions 0,1,M,M+1 and edge lengths equal to coordinate differences, require only pairs (0,1) and (M,M+1). Compute the Steiner-forest optimum and the cheapest tree connecting all terminals. Show why replacing pair demands by one terminal set loses any constant guarantee.

**Required output:** Two exact optima and an unbounded strengthening gap.

**Prerequisites:** Steiner forest versus Steiner tree; metric path costs

**Examiner follow-up:** How does adding the single demand (1,M) change the instance?

<details>
<summary>Solution route / investigation plan</summary>

1. The two unit end edges form a feasible forest of cost two. Every demanded pair has distance one and their unique path edges are disjoint, proving optimality. A tree connecting all four terminals must also include the middle edge of length M−1, giving total M+1.

2. The ratio (M+1)/2 tends to infinity. A demand component is an equivalence class to connect internally; separate classes are permitted to remain disconnected. Merging them changes the optimization problem, even when all vertices are terminals and all edge costs form a simple metric path.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.4](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-steiner--all-terminals-overconnection)

---

## 7. An inactive region can later join an active component

**Examiner challenge · construction · 40 minutes suggested**

ID: core-steiner--inactive-component-reactivation

Give a moat-growth trace where terminals s,t are already connected and their component is inactive, but merging it with a terminal a whose partner b is elsewhere creates a new active component. Explain why stopping the old dual variable does not mean permanently forbidding its vertices from future growth.

**Required output:** A weighted event trace and a correct interpretation of frozen dual variables.

**Prerequisites:** active components; demand separation

**Examiner follow-up:** Can a union of two inactive components become active without absorbing an active component?

<details>
<summary>Solution route / investigation plan</summary>

1. Use demands (s,t) and (a,b). Give st cost zero so its component is formed initially, give as a small positive cost, and put b beyond a much more expensive connection. The s,t component has no crossing demand, while a and b are active. Growth from a can make as tight and merge the inactive region into a’s component.

2. The merged set {s,t,a} still separates a from b, so its cut variable is eligible to grow. This is a new dual variable associated with a larger set; the old y_{s,t} remains frozen. Active status is a property of the current component and current demand separation, not an immutable label attached to vertices.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.4](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-steiner--inactive-component-reactivation)

---

## 8. Pruning a purchased forest is order independent

**Examiner challenge · proof · 40 minutes suggested**

ID: core-steiner--unique-path-pruning

Suppose the purchased edge set F is a forest satisfying all demand pairs. Prove the unique inclusion-minimal feasible subforest is the union of the unique F-paths of all demands. Deduce that every feasibility-preserving edge-deletion order gives the same result.

**Required output:** A uniqueness theorem and its exact acyclicity hypothesis.

**Prerequisites:** unique tree paths; forest feasibility

**Examiner follow-up:** Give a cyclic graph where legal deletion orders return different feasible paths.

<details>
<summary>Solution route / investigation plan</summary>

1. Every feasible subforest must contain the entire unique F-path of each required pair; deleting any edge of such a path disconnects that pair because F has no alternative route. Therefore the union U of all those paths is contained in every feasible subforest.

2. U itself satisfies every demand and is thus feasible. It is the unique minimum-by-inclusion subforest, so reverse deletion or arbitrary legal deletion must finish at U. This uniqueness depends on F being a forest; a cyclic purchased graph can have several different minimal feasible subgraphs.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.4](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-steiner--unique-path-pruning)

---

## 9. Research exercise: adapt moat growth to even terminal components

**Research seminar · research-extension · 100 minutes suggested**

ID: core-steiner--parity-forest-extension

Let T be an even-cardinality vertex set. Seek a minimum-cost forest every connected component of which contains an even number of T vertices. Grow duals of current odd-T components and prune redundant edges. Prove the same factor-two charging using inactive even-component leaves, and compare with an exact T-join baseline on n≤10.

**Required output:** A parity extension proof and an exact small-instance comparison.

**Prerequisites:** parity cuts; forest degree charging; path decomposition

**Examiner follow-up:** Why does even |T| matter for complement symmetry of the odd-cut requirements?

<details>
<summary>Solution route / investigation plan</summary>

1. Feasibility is equivalent to crossing every cut S with |S∩T| odd. Current odd components are eligible dual cuts. After pruning, an inactive contracted leaf would have even terminal parity on its attached part, so deleting its unique crossing edge preserves even parity on both sides; this contradicts minimality. The aggregate forest degree lemma then gives cost≤2 sum y.

2. Every even-T forest contains a T-join by retaining exactly edges whose removal leaves an odd number of T vertices on either side. For an exact baseline, minimize a perfect matching on T using shortest-path distances, then take the symmetric difference of matched paths. Its odd-degree set is T and cost cannot increase. Conversely a minimum T-join decomposes into paths pairing T plus removable cycles, proving the matching baseline exact. Verify parity and cost against exhaustive edge subsets; either a parity failure or a broken factor-two certificate is failure.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.4](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-steiner--parity-forest-extension)

---

## 10. Research exercise: test nonuniform moat growth rates

**Research seminar · research-extension · 90 minutes suggested**

ID: core-steiner--nonuniform-growth-obstruction

Consider a unit-edge star with k≥3 leaves and demands joining its center to every leaf. Give the center moat growth rate M and every leaf rate one. Compute first tight time and the ratio of purchased cost to total dual. Show that uniform-rate charging can fail arbitrarily badly as k grows, without asserting a bad approximation ratio.

**Required output:** An exact certificate obstruction and a bounded rate audit.

**Prerequisites:** rate-weighted dual growth; forest charging

**Examiner follow-up:** Derive the necessary center-rate condition for the degree inequality on every fixed star.

<details>
<summary>Solution route / investigation plan</summary>

1. Each star edge is crossed by the center and its leaf cut, so all become tight at time 1/(M+1). Buying them costs k. Total dual is (M+k)/(M+1), making cost/dual=k(M+1)/(M+k), which approaches k for fixed k and M→∞.

2. The local rate-weighted crossing sum is kM+k, while twice the dual growth rate is 2(M+k); the standard bound fails when (k−2)M>k. Nevertheless the star itself is forced by the demands, so the algorithm is integral-optimal. Enumerate small active forests and rate vectors to audit the local inequality, using uniform rates as baseline; confusing certificate failure with approximation failure is a stated failure criterion.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.4](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-steiner--nonuniform-growth-obstruction)

---

## 11. Classify bridges before moat growth

**Doctoral proof · construction · 45 minutes suggested**

ID: core-steiner--bridge-preprocessing

In a graph with nonnegative edge costs, for a bridge e prove it is mandatory if its cut separates a required pair, and unnecessary otherwise. Give a reduction that deletes unnecessary bridges and contracts mandatory bridges, adding their costs to the objective. Prove exact preservation of the residual optimum.

**Required output:** An exact preprocessing reduction with a feasibility-and-cost correspondence.

**Prerequisites:** bridges; required-pair connectivity

**Examiner follow-up:** How can demand crossings be tested efficiently on the bridge-component tree?

<details>
<summary>Solution route / investigation plan</summary>

1. Every path between opposite sides of a bridge must use it, so a crossing demand forces selection. If no demand crosses, all required connections lie within one side or the other; with nonnegative costs the bridge can be omitted and the sides solved separately.

2. Every feasible solution includes each mandatory bridge. Contracting those edges maps feasible solutions to residual solutions, and lifting a residual solution by adding the contracted bridges restores every demand. Costs differ by the fixed sum of mandatory bridge costs. Update terminal identities under contraction and discard now-trivial demands.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.4](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-steiner--bridge-preprocessing)

---

## 12. A terminal-metric MST gives a separate factor-two proof

**Examiner challenge · proof · 45 minutes suggested**

ID: core-steiner--terminal-mst-single-class

For one connected demand class R, use shortest-path distances on R to compute a terminal MST, then expand its edges back to graph paths. Prove cost at most twice the optimal Steiner tree. Explain why summing this proof separately over several demand classes can overcount a shared forest optimum.

**Required output:** A complete single-class approximation and a limitation of independent class charging.

**Prerequisites:** metric closure; Euler traversal; Steiner tree

**Examiner follow-up:** Construct a common-backbone example where separate class optimum costs count the same backbone repeatedly.

<details>
<summary>Solution route / investigation plan</summary>

1. Double an optimal Steiner tree to obtain an Euler tour of cost 2OPT. Shortcut its visit sequence to the terminals using shortest-path triangle inequalities, giving a terminal tour of no greater cost. Removing an edge yields a terminal spanning tree, so the terminal MST is at most 2OPT. Expanding MST edges and taking their union cannot increase the summed path cost.

2. For several classes, an optimal forest may merge classes and share edges. The sum of separate class Steiner optima need not be bounded by the one shared optimum, so applying the single-class inequality independently does not immediately prove a global factor two. The moat-growth analysis handles such sharing through a common dual.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.4](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-steiner--terminal-mst-single-class)
