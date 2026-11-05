# Shortest path: why reverse deletion is essential

§7.3 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-dual-path)

## 1. Shortest path: why reverse deletion is essential

**Doctoral proof · proof · 30 minutes suggested**

ID: core-dual-path--source-proof

Write the path cut relaxation and its dual. Give an example where the whole collection of tight edges is unnecessarily expensive. Prove that the pruned path crosses every raised cut once and consequently has cost equal to the dual objective.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** A primal–dual cut-growing procedure yields an exact shortest s–t path after redundant tight edges are removed.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. Tightness alone gives cost as a sum of dual variables weighted by cut-crossing multiplicities. Exactness requires those multiplicities to be one on the final path.

2. Reachable regions form nested s-side cuts. Reverse deletion removes branches that are not needed to connect s to t.

3. For the surviving path P, ∑e∈P cₑ=∑S yS|P∩δ(S)|=∑S yS≤OPT. Feasibility gives the reverse inequality and proves optimality.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-path--source-proof)

---

## 2. Why does an arbitrary tight connected subgraph not suffice?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-dual-path--oral-check-1

Why does an arbitrary tight connected subgraph not suffice?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A primal–dual cut-growing procedure yields an exact shortest s–t path after redundant tight edges are removed.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. It may pay for extra branches and cross a positive dual cut more than once.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-path--oral-check-1)

---

## 3. Where is the final equality stronger than an approximation proof?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-dual-path--oral-check-2

Where is the final equality stronger than an approximation proof?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A primal–dual cut-growing procedure yields an exact shortest s–t path after redundant tight edges are removed.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Each dual charge is counted exactly once, rather than at most a constant number of times.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-path--oral-check-2)

---

## 4. Extract an exact path from the cut relaxation

**Doctoral proof · proof · 45 minutes suggested**

ID: core-dual-path--cut-lp-flow-integrality

For a directed graph with nonnegative edge costs, suppose x≥0 satisfies x(δ⁺(S))≥1 for every s∈S,t∉S. Prove there is an s–t path of cost at most sum c_ex_e using max-flow/min-cut and flow decomposition. Deduce equality of the path-cut LP optimum and shortest-path length.

**Required output:** A constructive LP-to-path proof with the correct integrality conclusion.

**Prerequisites:** max-flow/min-cut; flow decomposition

**Examiner follow-up:** Where exactly does the proof use nonnegative costs?

<details>
<summary>Solution route / investigation plan</summary>

1. Use x as arc capacities. Every s–t cut has capacity at least one, so there exists a unit s–t flow f≤x. Remove flow cycles, which cannot increase cost because c≥0, and decompose the remaining flow into paths with coefficients summing to one.

2. The weighted average path cost is sum c_ef_e≤sum c_ex_e, so at least one path costs no more than the LP solution. Conversely a path incidence vector is cut-feasible, proving equality of optima. This proves integrality of the objective without claiming every feasible x, or every optimal face point, is integral.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-path--cut-lp-flow-integrality)

---

## 5. A directed potential certificate with negative arcs

**Doctoral proof · proof · 40 minutes suggested**

ID: core-dual-path--directed-potentials

In a directed graph with no reachable negative cycle and a reachable target, let d(v) be shortest-walk distance from s. Prove d(v)−d(u)≤c_uv on each reachable arc and show telescoping certifies every s–t path cost at least d(t). Explain why the undirected absolute-value inequality is inappropriate.

**Required output:** An oriented feasibility certificate and a telescoping optimality proof.

**Prerequisites:** shortest-path potentials; negative-cycle conditions

**Examiner follow-up:** How do reweighted costs c_uv+d(u)−d(v) relate to shortest paths?

<details>
<summary>Solution route / investigation plan</summary>

1. Appending arc uv to an optimal s–u walk gives d(v)≤d(u)+c_uv. Summing d(v)−d(u) along a path telescopes to d(t)−d(s)=d(t), while the cost sum bounds it above. A shortest walk can be made simple by deleting nonnegative cycles.

2. A directed arc constrains only one potential difference. It does not imply d(u)−d(v)≤c_uv because a reverse arc may not exist. Restrict attention to vertices reachable from s, or specify finite potentials on the relevant subgraph, so no subtraction of infinite distances is hidden.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-path--directed-potentials)

---

## 6. Handle zero-cost edges without infinitesimal growth

**Examiner challenge · construction · 45 minutes suggested**

ID: core-dual-path--zero-slack-closure

Specify a one-sided cut-growing shortest-path algorithm when edge costs may be zero. Before each positive dual increase, close the reachable region under all tight edges. Prove progress, dual feasibility, and correct detection when t is unreachable.

**Required output:** A finite-event algorithm including zero edges and disconnected inputs.

**Prerequisites:** reduced slack; reachable closures

**Examiner follow-up:** How should simultaneous minimum-slack ties be processed?

<details>
<summary>Solution route / investigation plan</summary>

1. Given the current tight-edge graph, add every vertex reachable from s before choosing a new growth cut S. If t is absent, every edge leaving S has positive slack; otherwise closure would have traversed it. Increase y_S to the minimum boundary slack and then close again.

2. Every finite growth event makes at least one new boundary edge tight and adds a vertex, so at most n−1 positive-growth events occur. If no boundary edge exists while t is outside, the original graph separates s from t and no feasible path exists. Zero-growth closure prevents cycling on already tight edges while preserving the standard nested-cut certificate.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-path--zero-slack-closure)

---

## 7. Negative undirected costs change the optimization model

**Examiner challenge · counterexample · 40 minutes suggested**

ID: core-dual-path--negative-cost-models

Contrast minimum-cost simple s–t paths, arbitrary s–t walks, and the unbounded-variable cut LP when undirected edges may have negative cost. Give examples showing that the walk objective and cut LP can be unbounded, and explain the relation of all-negative simple paths to LONGEST PATH.

**Required output:** Three distinct model diagnoses with explicit witnesses.

**Prerequisites:** path versus walk; LP unboundedness; NP-hardness reductions

**Examiner follow-up:** Would adding x_e≤1 make the cut LP describe simple paths exactly?

<details>
<summary>Solution route / investigation plan</summary>

1. If a reachable negative edge can be traversed forward and backward on a route to t, each round trip decreases walk cost without limit. In the cut LP with x_e≥0 and no upper bound, increasing any negative-cost edge variable preserves all lower-bound cut constraints while sending the objective to negative infinity.

2. A simple path cannot repeat that edge, so its cost is bounded on a finite graph. Giving every edge cost −1 makes minimum simple-path cost the negative of the longest simple-path length; this is NP-hard. Thus nonnegativity in the primal–dual shortest-path formulation cannot be removed by an informal sign change.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-path--negative-cost-models)

---

## 8. Decompose the entire path–dual gap

**Examiner challenge · proof · 40 minutes suggested**

ID: core-dual-path--optimality-gap-decomposition

For an undirected s–t path P and feasible nonnegative cut dual y, define edge slack r_e=c_e−sum_{S:e∈δ(S)}y_S. Prove c(P)−sum_S y_S=sum_{e∈P}r_e+sum_S y_S(|P∩δ(S)|−1). Characterize equality term by term.

**Required output:** An exact gap identity and a necessary-and-sufficient equality criterion.

**Prerequisites:** cut dual; complementary slackness

**Examiner follow-up:** Why is each undirected separating cut crossed an odd number of times by a simple path?

<details>
<summary>Solution route / investigation plan</summary>

1. Substitute c_e=r_e+sum_{S:e crosses S}y_S into the path cost and interchange finite sums. Each separating cut is crossed at least once by P, and every r_e is nonnegative by dual feasibility, so both right-hand sums are nonnegative.

2. Equality requires every path edge to be tight and every positive-dual separating cut to be crossed exactly once. Conversely these conditions make both sums vanish and certify path optimality by weak duality. The identity quantifies two independent causes of a loose certificate: unused edge slack and repeated charging across a cut.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-path--optimality-gap-decomposition)

---

## 9. Research exercise: audit parametric shortest-path concavity

**Research seminar · research-extension · 90 minutes suggested**

ID: core-dual-path--parametric-distance-envelope

For nonnegative base costs c_e and a_e∈{0,1}, set c_e(λ)=c_e+λa_e for λ≥0. Prove shortest-path distance is a concave piecewise-linear function with at most n distinct active slopes. Enumerate simple paths on graphs n≤9 and compare the exact envelope with Dijkstra at rational λ values.

**Required output:** An exact envelope theorem and a reproducible finite audit.

**Prerequisites:** lower envelopes; shortest paths; parametric optimization

**Examiner follow-up:** How does the piece bound change when a_e are integers in {0,…,A}?

<details>
<summary>Solution route / investigation plan</summary>

1. Each simple path contributes an affine function c(P)+λa(P), where integer a(P) lies between zero and n−1. Nonnegative costs allow shortest walks to be simplified, so distance is the lower envelope of these path lines. For each slope retain only the smallest intercept, leaving at most n candidate lines.

2. A minimum of affine functions is concave, and its active slopes decrease as λ grows. Compute all pairwise line intersections, discard inactive breakpoints, and verify values with ordinary shortest-path computations. Increasing slopes, more than n genuine affine pieces, or a Dijkstra value above the enumerated minimum is failure. Multiple optimal paths at one breakpoint are not extra pieces.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-path--parametric-distance-envelope)

---

## 10. Research exercise: remove zero-cost degeneracy lexicographically

**Research seminar · research-extension · 80 minutes suggested**

ID: core-dual-path--lexicographic-cost-perturbation

For nonnegative integer edge costs on n vertices, replace c_e by nc_e+1. Prove every perturbed shortest path first minimizes original cost and then edge count. Compare paths and dual certificates before and after perturbation on zero-heavy graphs n≤12 using exhaustive simple paths as baseline.

**Required output:** A perturbation theorem and a before/after certificate study.

**Prerequisites:** integer objective gaps; lexicographic perturbation

**Examiner follow-up:** What multiplier works when original costs are rationals with a known minimum positive path-cost gap?

<details>
<summary>Solution route / investigation plan</summary>

1. A simple path has at most n−1 edges. If two original path costs differ by at least one, their multiplied costs differ by at least n, which cannot be reversed by the edge-count term. Among equal original costs, minimizing the perturbed value is exactly minimizing the number of edges.

2. All perturbed edges are positive, so minimum walks are simple and zero-cycle degeneracy disappears. The integer multiplier uses O(log n) extra bits. Enumerate original optimum paths and their hop counts to verify the lexicographic result; a perturbed output with higher original cost or nonminimum hops among original optima is failure. Scaling the perturbed dual back gives a lower bound, but its extra hop component must be removed before claiming equality to original cost.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-path--lexicographic-cost-perturbation)

---

## 11. Represent and count all shortest paths with positive costs

**Doctoral proof · construction · 45 minutes suggested**

ID: core-dual-path--tight-arc-dag

In a directed graph with strictly positive arc costs, compute distances d from s and retain arcs satisfying d(v)=d(u)+c_uv. Prove every s–t path in this subgraph is shortest and every shortest path is retained. Give a dynamic program counting shortest paths, and explain the zero-cost obstruction.

**Required output:** An optimal-path characterization and a counting algorithm with its cost hypothesis.

**Prerequisites:** distance potentials; DAG dynamic programming

**Examiner follow-up:** How should unreachable vertices be handled before forming the tight subgraph?

<details>
<summary>Solution route / investigation plan</summary>

1. Each retained arc has zero reduced cost, so telescoping makes every retained s–t path cost d(t). On any shortest path every prefix is shortest; otherwise replacing a prefix would improve the total. Hence every path arc satisfies the equality.

2. Strict positivity makes distance strictly increase along retained arcs, giving a DAG ordered by d. Set count(s)=1 and count(v)=sum_{uv retained}count(u), with polynomial-bit counts bounded by the number of simple paths. Zero-cost arcs can create strongly connected components and infinitely many shortest walks; simple-path counting cannot be obtained by this DAG recurrence without further work.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-path--tight-arc-dag)

---

## 12. Cheapest boundary edge is not reduced-slack growth

**Examiner challenge · counterexample · 35 minutes suggested**

ID: core-dual-path--prim-versus-slack-growth

Take an s–t chain of L unit edges and a direct s–t edge of cost two, L≥3. Starting at s, repeatedly add a cheapest original-cost boundary edge until t is reached. Compute the resulting path and compare with shortest path. Explain how accumulated reduced slack changes the decision.

**Required output:** An unbounded greedy failure and a reduced-cost diagnosis.

**Prerequisites:** Prim growth; primal–dual shortest paths

**Examiner follow-up:** How does reverse deletion behave on the path produced by the incorrect rule?

<details>
<summary>Solution route / investigation plan</summary>

1. At every stage the next chain edge costs one, less than the direct edge’s original cost two. The rule therefore follows the entire chain and reaches t with path cost L, while the direct edge gives optimum two. Its approximation ratio is L/2.

2. Cut-dual growth repeatedly charges the direct edge whenever it crosses the growing reachable cut. Its remaining slack decreases across earlier stages, so it can become tight after total growth two even while its original cost stays two. Selecting by unchanged original boundary cost is a spanning-tree rule, not the shortest-path slack rule.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §7.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-dual-path--prim-versus-slack-growth)
