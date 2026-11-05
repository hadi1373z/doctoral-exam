# Random tree metrics and buy-at-bulk transfer

§§8.5–8.6 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-tree-metrics)

## 1. Random tree metrics and buy-at-bulk transfer

**Doctoral proof · proof · 45 minutes suggested**

ID: core-tree-metrics--source-proof

Explain why the MST is not an O(log n)-distortion substitute. Prove how a fixed optimal solution is charged under a random dominating embedding, and identify the assumptions needed to map tree capacities back to graph edges.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Random dominating hierarchical tree metrics have expected O(log n) stretch. With careful routing and concave capacity costs, this yields an O(log n) buy-at-bulk approximation.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. A cycle metric’s MST is a path: the deleted adjacent pair can have tree distance n−1 while original distance is 1. Randomization over suitable trees controls expected stretch pair by pair.

2. For a fixed optimal edge-capacity vector c*, linearity gives E[∑e f(c*ₑ)dT(e)]≤O(log n)∑e f(c*ₑ)d(e). No independence between tree distances is needed.

3. When several tree routes share a graph edge, concavity with f(0)=0 and nondecreasing f gives f(a+b)≤f(a)+f(b), controlling merged capacity cost.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§8.5–8.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tree-metrics--source-proof)

---

## 2. Is E[maxpair stretch]≤O(log n) implied?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-tree-metrics--oral-check-1

Is E[maxpair stretch]≤O(log n) implied?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Random dominating hierarchical tree metrics have expected O(log n) stretch. With careful routing and concave capacity costs, this yields an O(log n) buy-at-bulk approximation.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. A bound on each pair’s expected stretch does not commute with the maximum.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§8.5–8.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tree-metrics--oral-check-1)

---

## 3. Why is domination useful?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-tree-metrics--oral-check-2

Why is domination useful?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Random dominating hierarchical tree metrics have expected O(log n) stretch. With careful routing and concave capacity costs, this yields an O(log n) buy-at-bulk approximation.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. It prevents the tree objective from underestimating distances when transferring a feasible solution.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§8.5–8.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tree-metrics--oral-check-2)

---

## 4. Economies of scale are weaker than concavity

**Doctoral proof · proof · 45 minutes suggested**

ID: core-tree-metrics--economies-versus-concavity

Let f(0)=0, f be nonnegative and nondecreasing, and f(x)/x be nonincreasing for x>0. Prove f is subadditive. Give a continuous example satisfying these conditions that is not concave, and identify the weaker assumptions actually used when merging tree routes.

**Required output:** A sharp implication chain and a nonconcave capacity-cost example.

**Prerequisites:** economies of scale; subadditivity; concavity

**Examiner follow-up:** Can a subadditive nondecreasing function have an increasing cost-per-unit ratio somewhere?

<details>
<summary>Solution route / investigation plan</summary>

1. For a,b>0, the ratio assumption gives f(a)≥a f(a+b)/(a+b) and f(b)≥b f(a+b)/(a+b). Adding proves f(a+b)≤f(a)+f(b); zero arguments follow from f(0)=0. Concavity with f(0)=0 is one sufficient route to these inequalities but is not necessary.

2. Take f(x)=x on [0,1], f(x)=1 on [1,2], and f(x)=x/2 on [2,∞). It is continuous, nondecreasing, and its cost-per-unit ratio is nonincreasing. Its slope rises from zero to 1/2 at two, violating concavity. Route merging needs subadditivity, while comparison of capacity vectors needs monotonicity.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§8.5–8.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tree-metrics--economies-versus-concavity)

---

## 5. An elementary obstruction to exact tree representation

**Doctoral proof · proof · 45 minutes suggested**

ID: core-tree-metrics--four-point-tree-test

For four vertices in a weighted tree, prove the largest two of d(a,b)+d(c,d), d(a,c)+d(b,d), and d(a,d)+d(b,c) are equal. Use the unit four-cycle metric to show not every graph metric is an exact tree metric.

**Required output:** A structural four-point proof and a concrete non-tree metric.

**Prerequisites:** unique tree paths; tree metrics

**Examiner follow-up:** What happens when some of the four named vertices are internal points or coincide?

<details>
<summary>Solution route / investigation plan</summary>

1. Prune to the minimal subtree spanning the four points and suppress degree-two vertices. Pendant lengths contribute the same total to all three sums. If the reduced subtree has a middle segment of length h, one pairing stays on its two sides while the other two cross it twice, producing two equal sums larger by 2h; the star case has h=0.

2. For the four-cycle in cyclic order, opposite-pair distances sum to four, while each adjacent-pair matching sums to two. The unique largest sum violates the tree condition. Thus a random embedding approximates a metric that may not admit any exact tree representation, even allowing auxiliary branching vertices.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§8.5–8.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tree-metrics--four-point-tree-test)

---

## 6. Solve buy-at-bulk exactly on a tree by cut loads

**Examiner challenge · proof · 40 minutes suggested**

ID: core-tree-metrics--tree-cut-capacity-optimum

For nonnegative demands d_i between terminal pairs in a tree and nondecreasing capacity cost f, prove the unique-path capacity u_e=sum_{i:e separates pair i}d_i is componentwise minimum among feasible solutions. Explain why opposite-direction commodities do not cancel under shared undirected capacity.

**Required output:** A componentwise optimality proof and a model-specific capacity example.

**Prerequisites:** tree cuts; multicommodity capacity

**Examiner follow-up:** Which parts remain true if f is nonmonotone?

<details>
<summary>Solution route / investigation plan</summary>

1. Removing tree edge e leaves a cut. Every commodity with endpoints on opposite sides must send its full demand across e, because no alternative tree route exists. Thus every feasible capacity vector has capacity at least u_e. Routing each commodity along its unique path attains these lower bounds simultaneously.

2. Monotonicity of f then proves cost optimality without needing concavity or subadditivity. Under the model where undirected capacity bounds total path usage, two opposite demands D on the same edge require 2D, not net flow zero. Cancellation applies to a different signed aggregate-flow model and would erase commodity feasibility.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§8.5–8.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tree-metrics--tree-cut-capacity-optimum)

---

## 7. The auxiliary-node contraction proof needs a hierarchy

**Examiner challenge · counterexample · 35 minutes suggested**

ID: core-tree-metrics--arbitrary-contraction-failure

Consider a tree on terminals u,v and one auxiliary vertex w with lengths uw=M and wv=ε. Contract uw, then multiply remaining lengths by four. Show that domination of the original tree distances can fail. Explain why the book’s hierarchical-tree removal theorem cannot be applied to an arbitrary weighted tree.

**Required output:** A quantified failure family and an exact theorem-hypothesis audit.

**Prerequisites:** dominating metrics; auxiliary vertex contraction

**Examiner follow-up:** How does choosing the other contraction change this particular example?

<details>
<summary>Solution route / investigation plan</summary>

1. The original terminal distance is M+ε. After contraction the only edge between u and v has length ε, and scaling produces distance 4ε. For M>3ε this is strictly smaller than the original distance, so domination fails by an arbitrarily large factor as M/ε grows.

2. Contraction always decreases distances, giving an easy upper direction after scaling. The lower direction needs the geometric level lengths in the hierarchical cut decomposition, as specified in Williamson–Shmoys Theorem 8.19. The exercise’s counterexample violates that hypothesis and therefore identifies a missing assumption rather than contradicting the theorem.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§8.5–8.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tree-metrics--arbitrary-contraction-failure)

---

## 8. Amplify an expected-cost tree-transfer guarantee

**Examiner challenge · construction · 35 minutes suggested**

ID: core-tree-metrics--cost-amplification

Assume a randomized embedding-and-routing procedure always returns a feasible solution and has E cost≤κOPT. Design an algorithm using O(log(1/η)) independent runs that returns cost≤2κOPT with probability at least 1−η, without knowing OPT or identifying good trees.

**Required output:** A fully implementable amplification rule and its success proof.

**Prerequisites:** Markov inequality; independent repetition

**Examiner follow-up:** Derive the tradeoff for target factor (1+δ)κ instead of 2κ.

<details>
<summary>Solution route / investigation plan</summary>

1. Markov gives Pr[cost>2κOPT]≤1/2. Run the complete feasible procedure R=ceil(log₂(1/η)) times and retain the least-cost output, evaluating original-graph cost rather than tree cost alone. All runs fail with probability at most 2^−R≤η.

2. No comparison with an unknown optimum is required by the algorithm: taking the minimum of observed costs suffices. Each outcome must already be feasible after mapping routes and capacities to the original graph. Independence is needed only between complete runs, while dependencies among pair distances inside one embedding are irrelevant.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§8.5–8.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tree-metrics--cost-amplification)

---

## 9. Research exercise: a constant-stretch distribution for weighted cycles

**Research seminar · research-extension · 85 minutes suggested**

ID: core-tree-metrics--weighted-cycle-distribution

For a weighted cycle of positive total length L, delete edge e with probability ℓ_e/L and keep all other edge lengths. Prove every resulting tree dominates the cycle metric and that a pair at cycle distance d≤L/2 has expected tree distance 2d(1−d/L)≤2d. Verify all pairs by exact deletion enumeration.

**Required output:** An exact weighted-cycle embedding theorem and a reproducible pairwise audit.

**Prerequisites:** cycle metrics; expected stretch

**Examiner follow-up:** For which pairs is the upper bound closest to two?

<details>
<summary>Solution route / investigation plan</summary>

1. Choose a shorter u–v arc of length d. If deletion is outside that arc, the tree path has length d; if inside, it has length L−d. Deletion probabilities are d/L and 1−d/L because probabilities sum edge lengths. Every possible path is one of the two arcs, both at least d, proving domination.

2. The expectation is d(1−d/L)+(L−d)d/L=2d(1−d/L). Enumerate the finitely many deleted edges and all terminal pairs using rational lengths as an exact baseline. A stretch expectation above two or any contracted distance is failure. This specialized distribution does not establish constant expected distortion for arbitrary graph metrics.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§8.5–8.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tree-metrics--weighted-cycle-distribution)

---

## 10. Research exercise: characterize the route-merging assumption

**Research seminar · research-extension · 90 minutes suggested**

ID: core-tree-metrics--merging-iff-subadditive

Prove that the inequality f(sum_i u_i)≤sum_i f(u_i) for every finite collection of mapped tree routes is equivalent to subadditivity with f(0)=0. Give a convex-cost bridge example where mapping k unit-capacity tree routes increases cost by factor approaching k. Audit the merging inequality for several piecewise-linear costs.

**Required output:** An iff lemma, an explicit convex-cost obstruction, and a finite cost-function audit.

**Prerequisites:** subadditivity; capacity aggregation

**Examiner follow-up:** Why is monotonicity needed in addition when comparing tree optimum with a transported capacity vector?

<details>
<summary>Solution route / investigation plan</summary>

1. Binary subadditivity extends to finitely many arguments by induction, and the two-route case gives necessity. For a bridge of length one from s to a hub, attach k distinct leaves by edges of length ε. Use a dominating star tree connecting s directly to each leaf with length 1+ε and also to the hub with length one; the hub edge has zero load. Give one unit demand per leaf.

2. For f(u)=u² the tree cost is k(1+ε), while shortest-path mapping gives bridge load k and original cost k²+kε. The ratio tends to k as ε→0. This invalidates the universal nonincreasing-cost mapping step, although it does not by itself refute every embedding algorithm for convex costs. Exact route-load aggregation is the baseline; any claimed subadditive certificate violated by two arguments is failure.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§8.5–8.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tree-metrics--merging-iff-subadditive)

---

## 11. Determine optimal worst-case tree distortion for a four-cycle

**Doctoral proof · proof · 45 minutes suggested**

ID: core-tree-metrics--four-cycle-deterministic-distortion

For the unit four-cycle metric, prove every dominating tree metric, allowing auxiliary vertices, has maximum pair stretch at least two. Construct a tree attaining two. Compare with the maximum pairwise expected stretch of a uniformly random deleted-edge spanning tree.

**Required output:** A sharp deterministic bound and an exact randomized comparison.

**Prerequisites:** four-point tree condition; domination; expected stretch

**Examiner follow-up:** What is the expected maximum stretch of the random spanning tree?

<details>
<summary>Solution route / investigation plan</summary>

1. The opposite-pair sum in any dominating tree metric is at least four. If all adjacent distances were strictly below two, both adjacent-pair sums would be below four, leaving a unique largest sum and violating the four-point condition. Thus some adjacent pair has stretch at least two.

2. A four-leaf star with unit leaf edges gives every distinct distance two, attaining worst stretch two. Uniformly deleting a cycle edge gives adjacent expected distance (3+1+1+1)/4=3/2 and opposite distance always two, so maximum pairwise expected stretch is 3/2. The comparison separates deterministic worst-pair distortion from pairwise expected distortion.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§8.5–8.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tree-metrics--four-cycle-deterministic-distortion)

---

## 12. Compute all tree capacities without tracing every demand path

**Examiner challenge · construction · 40 minutes suggested**

ID: core-tree-metrics--cut-load-lca-algorithm

Root a tree and assume LCA queries are available. For each demand d between s,t add d to s,t and subtract 2d at LCA(s,t). Prove a postorder sum gives the required capacity on every parent edge, and derive O((n+k)log n) runtime with standard LCA preprocessing.

**Required output:** A fast capacity algorithm and a per-demand cut contribution proof.

**Prerequisites:** tree cut loads; lowest common ancestors

**Examiner follow-up:** How would directional rather than shared-undirected capacities alter the difference updates?

<details>
<summary>Solution route / investigation plan</summary>

1. For a subtree below edge e, one demand contributes d times the number of its endpoints in the subtree minus 2d if their LCA is there. This is d exactly when one endpoint lies inside and one outside, and zero when both are inside or both outside.

2. Therefore the subtree aggregate equals the sum of demands whose unique paths use e. Individual difference entries may be negative, but every final edge capacity is nonnegative. Binary-lifting LCA preprocessing and k queries cost O((n+k)log n), followed by a linear postorder pass with polynomial-bit demand arithmetic.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§8.5–8.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tree-metrics--cut-load-lca-algorithm)
