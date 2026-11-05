# Induced removal, hereditary properties and oblivious testing

§17.4 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-hereditary)

## 1. Induced removal, hereditary properties and oblivious testing

**Doctoral proof · proof · 45 minutes suggested**

ID: core-hereditary--source-proof

Prove that a hereditary property is induced-F-free for its forbidden family. Explain how an infinite forbidden family can still yield bounded witnesses for ε-far inputs. State why the induced-removal theorem is a deep input rather than a consequence of the ordinary triangle lemma.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Hereditary graph properties admit one-sided testers through induced forbidden-pattern removal. The chapter’s final characterization concerns semi-hereditary properties and oblivious testers.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. If a graph has the hereditary property, all its induced subgraphs do; if it fails, the graph itself belongs to the forbidden family. This proves the characterization.

2. The induced-removal theorem supplies a witness-size bound and abundance estimates depending on ε and the property, even when the forbidden family is infinite.

3. Induced copies constrain both edges and nonedges. Ordinary non-induced removal does not automatically control them. The source omits some proofs of the deepest structural characterizations; the study task is to state the input accurately and derive the tester.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hereditary--source-proof)

---

## 2. Why is triangle-free hereditary but connected not hereditary?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-hereditary--oral-check-1

Why is triangle-free hereditary but connected not hereditary?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Hereditary graph properties admit one-sided testers through induced forbidden-pattern removal. The chapter’s final characterization concerns semi-hereditary properties and oblivious testers.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Taking an induced subgraph cannot create a triangle, but can disconnect a connected graph.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hereditary--oral-check-1)

---

## 3. What must an oblivious tester’s sampling size avoid depending on?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-hereditary--oral-check-2

What must an oblivious tester’s sampling size avoid depending on?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Hereditary graph properties admit one-sided testers through induced forbidden-pattern removal. The chapter’s final characterization concerns semi-hereditary properties and oblivious testers.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. It is governed by the accuracy parameter rather than tailoring a separate strategy to each large n, with the small-size cases treated appropriately.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hereditary--oral-check-2)

---

## 4. A hereditary property that is not edge-monotone

**Doctoral proof · proof · 40 minutes suggested**

ID: core-hereditary--cluster-graphs-induced-paths

Prove that a graph has no induced three-vertex path P3 exactly when each connected component is a clique. Show this property is hereditary but not closed under edge deletion, using a three-vertex example. Describe the full edge/nonedge certificate for an induced P3.

**Required output:** A structural characterization and a minimal edge-deletion counterexample.

**Prerequisites:** induced forbidden subgraphs; hereditary properties; induced removal input; oblivious testing

**Examiner follow-up:** What forbidden induced graph describes complements of these graphs?

<details>
<summary>Solution route / investigation plan</summary>

1. If a component is not complete, choose two nonadjacent vertices with a shortest connecting path. Its first three vertices form an induced P3, since a shortcut would contradict shortestness. Conversely a disjoint union of cliques has no such induced path.

2. Vertex deletion preserves the clique-component description. Deleting one edge from K3 produces P3 and violates the property, proving failure of edge monotonicity. The witness requires two present edges and the absent endpoint edge, not merely a two-edge subgraph.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hereditary--cluster-graphs-induced-paths)

---

## 5. Derive a tester from a quantitative induced-removal input

**Doctoral proof · proof · 45 minutes suggested**

ID: core-hereditary--bounded-obstruction-sampling

Assume that every ε-far graph contains at least δn^h unordered induced copies of some forbidden H with h≤h_0, where h_0,δ depend only on ε. Design a one-sided tester with failure η by sampling independent blocks of h_0 distinct vertices. Explain how to handle the unknown H and h within each block.

**Required output:** A tester, query budget O(rh_0²), and a factor-checked rejection bound.

**Prerequisites:** induced forbidden subgraphs; hereditary properties; induced removal input; oblivious testing

**Examiner follow-up:** How would labeled-copy normalization change the displayed per-block success estimate?

<details>
<summary>Solution route / investigation plan</summary>

1. Query every pair in a block and reject if it contains any forbidden induced graph of size at most h_0. Its first h sampled vertices form a uniform h-subset, which is an H-copy with probability at least δn^h/C(n,h)≥δ, under the assumed normalization.

2. Use r=⌈ln(1/η)/δ⌉ independent blocks, giving miss probability at most e^{−rδ}. All valid graphs have no forbidden induced witness and are always accepted. If n<h_0, inspect the full graph. The abundance assertion is the assumed deep input, not something proved by the sampling calculation.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hereditary--bounded-obstruction-sampling)

---

## 6. Unbounded minimal obstructions need not be far

**Examiner challenge · construction · 50 minutes suggested**

ID: core-hereditary--infinite-obstructions-can-be-close

For the hereditary property of chordality, prove that each cycle C_ℓ, ℓ≥4, is a minimal forbidden induced graph: it is not chordal but every proper induced subgraph is chordal. Compute its exact edit distance to chordality and explain compatibility with an ε-dependent bounded-witness theorem.

**Required output:** A minimal-obstruction proof and an exact normalized-distance calculation.

**Prerequisites:** induced forbidden subgraphs; hereditary properties; induced removal input; oblivious testing

**Examiner follow-up:** Why would a theorem bounding all minimal forbidden sizes be much stronger than testability?

<details>
<summary>Solution route / investigation plan</summary>

1. A chordless cycle of length at least four is nonchordal by definition. Every proper induced subgraph of a cycle is a disjoint union of paths, hence a forest and chordal.

2. Deleting one cycle edge makes a path, so the edit distance is exactly one, normalized as 1/ℓ². Thus arbitrarily large minimal obstructions exist, but their normalized distances tend to zero. A witness bound for fixed ε-far inputs does not bound all minimal forbidden graphs.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hereditary--infinite-obstructions-can-be-close)

---

## 7. A concrete semi-hereditary property beyond hereditary ones

**Examiner challenge · proof · 55 minutes suggested**

ID: core-hereditary--semihereditary-nonempty-example

For n≥2 let P mean 'triangle-free and containing at least one edge'; define its one-vertex case to be accepted. Show P is not hereditary, but is semi-hereditary with hereditary envelope H=triangle-free. Give an explicit M(ε) and derive a tester from triangle-freeness testing with a suitable accuracy adjustment.

**Required output:** A nonhereditary example, an explicit envelope threshold and a valid testing reduction.

**Prerequisites:** induced forbidden subgraphs; hereditary properties; induced removal input; oblivious testing

**Examiner follow-up:** Why must a naive tester that checks P on every induced sample fail one-sided correctness?

<details>
<summary>Solution route / investigation plan</summary>

1. A graph with one edge and at least two isolated vertices belongs to P, but its induced two-isolate subgraph does not. P is contained in H. The only n≥2 graphs in H but outside P are edgeless, and adding one edge repairs them.

2. Therefore for n>1/√ε no H-graph is ε-far from P, establishing the semi-hereditary condition. More quantitatively d_P(G)≤d_H(G)+1, so for n²≥2/ε, ε-farness from P implies ε/2-farness from H. Treat smaller n exactly and invoke the triangle-free tester at ε/2 for larger n.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hereditary--semihereditary-nonempty-example)

---

## 8. Complementation preserves induced testing structure

**Examiner challenge · synthesis · 60 minutes suggested**

ID: core-hereditary--complement-testing-transfer

For any hereditary property P, define its complement property by G∈P^c iff the complement graph lies in P. Prove heredity, equality of dense edit distances under complement, and a query-preserving transfer of one-sided testers. Identify the forbidden induced family for complements of disjoint unions of cliques.

**Required output:** A structural, metric and algorithmic transfer proof with an explicit forbidden graph.

**Prerequisites:** induced forbidden subgraphs; hereditary properties; induced removal input; oblivious testing

**Examiner follow-up:** Why does the corresponding statement for non-induced forbidden copies require additional care?

<details>
<summary>Solution route / investigation plan</summary>

1. Complementation commutes with taking induced vertex sets and converts each edge addition into a deletion and each deletion into an addition. It is a bijection preserving the number of edited unordered pairs.

2. Simulate each query to the complement by inverting the original adjacency bit, so query complexity and one-sided correctness are preserved. Complements of cluster graphs are complete multipartite graphs; the forbidden induced P3 becomes its complement, an edge together with an isolated vertex.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hereditary--complement-testing-transfer)

---

## 9. A uniform subquadratic envelope gives an oblivious tester

**Research seminar · research-extension · 85 minutes suggested**

ID: core-hereditary--small-edit-envelope-theorem

Let P⊆H, where H is hereditary and has an oblivious one-sided tester. Assume every n-vertex H-graph is within g(n)=o(n²) edits of P, and P is decidable on every finite graph. Prove P is semi-hereditary and construct an oblivious one-sided tester, explicitly handling the sample-size cutoff without rejecting valid P-graphs for nonhereditary sample failures.

**Required output:** A general envelope theorem and a fully specified oblivious testing construction.

**Prerequisites:** induced forbidden subgraphs; hereditary properties; induced removal input; oblivious testing

**Examiner follow-up:** Which step uses uniform subquadratic closeness over all H-graphs rather than closeness on average?

<details>
<summary>Solution route / investigation plan</summary>

1. Triangle inequality gives d_P(G)≤d_H(G)+g(n). Choose M so g(n)≤εn²/2 for n≥M. Then ε-farness from P implies ε/2-farness from H, and an H-graph cannot be ε-far from P for sufficiently large n.

2. Choose a fixed sample size Q larger than M and the H-tester's required size. If fewer than Q vertices are returned, the whole graph is known and P can be decided exactly. If Q are returned, use only the H-test on a uniform required subsample. At n=Q this is still sound by Q>M; do not apply P directly to large induced samples.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hereditary--small-edit-envelope-theorem)

---

## 10. Recover abundance from a bounded-witness corollary plus a finite removal theorem

**Research seminar · research-extension · 100 minutes suggested**

ID: core-hereditary--bounded-witness-plus-finite-removal

Assume P is hereditary and every γ-far graph has a forbidden induced witness of size at most W_P(γ). Also assume the induced-removal theorem only for finite forbidden families. Prove these two inputs imply a quantitative abundance statement sufficient to test P. Distinguish the roles of the two deep inputs.

**Required output:** A reduction from bounded witnesses to abundance with all dependencies on ε explicit.

**Prerequisites:** induced forbidden subgraphs; hereditary properties; induced removal input; oblivious testing

**Examiner follow-up:** How are strict versus weak edit-distance thresholds handled by replacing ε/2 with ε/3?

<details>
<summary>Solution route / investigation plan</summary>

1. Fix ε and let F consist of every non-P graph with at most W_P(ε/2) vertices; this is a finite isomorphism family. If G could be edited within fewer than εn²/2 steps to an induced-F-free G', the witness contrapositive would make G' less than ε/2-far from P.

2. The two edit paths would then make G less than ε-far from P, a contradiction. Therefore an ε-far G is ε/2-far from induced-F-freeness. Apply finite-family induced removal to obtain many copies of one member of F, then the elementary sampling lemma. The existence of one witness alone was insufficient; finite removal supplies abundance.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hereditary--bounded-witness-plus-finite-removal)

---

## 11. Present-edge observations cannot certify a cluster-graph obstruction

**Doctoral proof · proof · 45 minutes suggested**

ID: core-hereditary--nonedges-are-essential-certificates

A deterministic query transcript records only the edges observed present and ignores all nonedge answers. Prove that such a transcript can never certify failure of the cluster-graph property. Contrast it with a fully observed induced P3 and explain the consequence for one-sided tester design.

**Required output:** A completion argument and an explicit minimal mixed edge/nonedge certificate.

**Prerequisites:** induced forbidden subgraphs; hereditary properties; induced removal input; oblivious testing

**Examiner follow-up:** What analogous distinction arises between ordinary C4 copies and induced C4 copies inside K4?

<details>
<summary>Solution route / investigation plan</summary>

1. Every collection of observed present edges can be completed to the complete graph on the same vertices, which is a single clique and satisfies the property. Therefore positive-edge observations alone never force a violation in all compatible completions.

2. An induced P3 fixes two edges present and the endpoint pair absent, and every graph with that induced triple fails the property. A one-sided tester needs a transcript incompatible with every valid input; for a nonmonotone hereditary property this can require nonedge information.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hereditary--nonedges-are-essential-certificates)

---

## 12. A semi-hereditary property cannot simply be checked on every sample

**Examiner challenge · counterexample · 60 minutes suggested**

ID: core-hereditary--sample-membership-not-always-safe

For P='triangle-free with at least one edge' on n≥2, take a valid graph consisting of one edge and n−2 isolates. For fixed sample size s≥2 compute the chance that the induced sample fails P. Explain why rejecting whenever the sample fails P violates one-sided correctness, despite P being one-sided testable.

**Required output:** An exact rejection probability and a corrected sample decision rule.

**Prerequisites:** induced forbidden subgraphs; hereditary properties; induced removal input; oblivious testing

**Examiner follow-up:** Why is the analogous rule safe for a genuinely hereditary property?

<details>
<summary>Solution route / investigation plan</summary>

1. The sample has an edge only if it contains both endpoints of the unique edge, with probability s(s−1)/[n(n−1)]. Every other sample is edgeless and hence fails P.

2. Thus naive rejection occurs with probability 1−s(s−1)/[n(n−1)], tending to one on valid inputs. A correct envelope-based tester checks the hereditary condition on large samples and reserves exact P-membership for input sizes known to be fully observed below its fixed cutoff.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §17.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hereditary--sample-membership-not-always-safe)
