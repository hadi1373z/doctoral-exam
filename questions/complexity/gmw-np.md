# GMW: commit, challenge, open; simulate a cheating verifier

Commitments and NP construction · Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-gmw-np)

## 1. GMW: commit, challenge, open; simulate a cheating verifier

**Doctoral proof · proof · 45 minutes suggested**

ID: core-gmw-np--source-proof

For a graph with m edges, derive the one-round soundness bound and the sequential repetition count. Build the simulator that guesses an edge, and explain exactly why a cheating verifier’s edge choice cannot simply be assumed uniform.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Under the paper’s cryptographic hiding assumptions, NP statements have computational zero-knowledge proof systems through a graph-3-coloring reduction and commitment protocol.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. Binding fixes one color per vertex in a cheating commitment. A non-3-colorable graph has a violated edge, so an honest uniformly chosen edge catches it with probability at least 1/m. Sequential k rounds have error at most (1−1/m)^k.

2. The simulator guesses the edge to be opened, commits to consistent random distinct colors there and dummy colors elsewhere, and rewinds if a different edge is requested. The analysis uses computational hiding to justify the challenge behavior.

3. Hiding supports zero knowledge, binding supports soundness. State the commitment model: statistically binding and computationally hiding commitments give information-theoretic binding with computational simulation indistinguishability.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Commitments and NP construction](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-np--source-proof)

---

## 2. Is parallel repetition automatically zero knowledge?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-gmw-np--oral-check-1

Is parallel repetition automatically zero knowledge?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Under the paper’s cryptographic hiding assumptions, NP statements have computational zero-knowledge proof systems through a graph-3-coloring reduction and commitment protocol.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. The sequential rewinding proof does not immediately extend to simultaneous many-edge challenges.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Commitments and NP construction](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-np--oral-check-1)

---

## 3. Does a random permutation of one fixed coloring hide everything?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-gmw-np--oral-check-2

Does a random permutation of one fixed coloring hide everything?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Under the paper’s cryptographic hiding assumptions, NP statements have computational zero-knowledge proof systems through a graph-3-coloring reduction and commitment protocol.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. It hides labels, but opening many correlated edges of the same commitment can reveal structure. Fresh commitments and the protocol schedule matter.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Commitments and NP construction](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-np--oral-check-2)

---

## 4. State the binding assumption needed for an unbounded-prover proof

**Doctoral proof · proof · 40 minutes suggested**

ID: core-gmw-np--commit-binding-proof-versus-argument

In the graph-3-coloring protocol with N vertices and m≥1 edges, assume each commitment has statistical binding error at most ε_b conditionally on prior history, against unbounded committers. Derive one-round and k-round soundness. Contrast this with computational binding, and state the separate hiding assumption needed for computational zero knowledge.

**Required output:** A soundness proof with explicit error terms and a proof-versus-argument assumption table.

**Prerequisites:** Commitment binding and hiding; Graph-3-coloring protocol; Sequential soundness

**Examiner follow-up:** Why does the proof still work when some commitments admit no valid opening at all?

<details>
<summary>Solution route / investigation plan</summary>

1. Except on a union-bound event of probability at most Nε_b, every committed vertex has at most one valid color opening. Assign arbitrary colors to commitments with no valid opening; any violated edge of this assignment either has equal uniquely openable endpoint colors or an unopenable endpoint. Thus a uniform edge rejects with probability at least 1/m on the binding-good event.

2. One-round acceptance is at most 1−1/m+Nε_b. A convenient k-round bound is (1−1/m)^k+kNε_b, by separating all binding failures and then multiplying conditional good-round bounds. Computational binding supports only an efficient-cheating-prover argument without an additional assumption; it does not establish soundness against the unbounded provers of an interactive proof. Computational hiding concerns efficient verifiers and is used in the simulation proof instead.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Commitments and NP construction](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf) · [Goldreich–Micali–Wigderson, Proofs that Yield Nothing But Their Validity](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-np--commit-binding-proof-versus-argument)

---

## 5. Transport zero knowledge through a witness-preserving reduction

**Doctoral proof · proof · 45 minutes suggested**

ID: core-gmw-np--commit-witness-transport-reduction

Let R(x,w) be an NP relation and let f(x) be a 3-coloring instance with a polynomial-time witness map g(x,w). Prove the resulting protocol’s completeness, efficient-prover property and auxiliary-input zero knowledge. Use a separate security parameter and polynomial padding to control lengths. Distinguish what a decision-only many-one reduction supplies.

**Required output:** A relational reduction theorem and explicit verifier/simulator translations.

**Prerequisites:** NP relations; Witness-preserving reductions; Auxiliary-input simulation

**Examiner follow-up:** Why must the derived coloring verifier retain x rather than assume it can invert f?

<details>
<summary>Solution route / investigation plan</summary>

1. The honest prover computes the coloring g(x,w) of f(x) and runs the coloring protocol, so its work is polynomial in the relation-input and security parameters. Soundness follows from x∉L implying f(x) is not 3-colorable. Pad the reduced graph if needed and state all size bounds so negligible errors and polynomial time are measured consistently.

2. Translate an arbitrary verifier for x into a coloring verifier that carries x and its auxiliary input as private auxiliary state, relays all protocol messages and applies the original final output rule. Invoke auxiliary-input zero knowledge for the coloring protocol and postprocess its simulated view. A decision-only reduction ensures that YES instances map to colorable graphs, sufficient for an unbounded honest prover, but does not by itself give the stated efficient witness-to-coloring algorithm.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Commitments and NP construction](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-np--commit-witness-transport-reduction)

---

## 6. Randomize the colors before committing

**Doctoral proof · proof · 35 minutes suggested**

ID: core-gmw-np--commit-color-permutation-necessity

For a fixed proper coloring c and an honest independently selected edge (u,v), compute the opened color-pair distribution after a uniform permutation of {1,2,3}. Show a witness-distinguishing attack if this permutation is omitted. Explain which parts of the honest-verifier calculation remain exact and which require hiding when the verifier selects an edge from the commitments.

**Required output:** A six-case distribution proof, a label-leakage attack and a precise malicious-verifier caveat.

**Prerequisites:** Color permutations; Witness indistinguishability; Commitment hiding

**Examiner follow-up:** Why is it unsafe to call the malicious verifier’s opened colors exactly uniform merely because the initial permutation was uniform?

<details>
<summary>Solution route / investigation plan</summary>

1. Since c(u)≠c(v), the six color permutations map this ordered pair bijectively to the six ordered distinct-color pairs. The opened color labels are therefore uniform and independent of the original witness for a fixed edge chosen independently of commitments. Fresh commitment randomness also has its prescribed unconditional distribution in this honest scheduling.

2. Without color permutation, two proper witnesses differing by a global color relabeling reveal different absolute endpoint labels, and an edge-opening verifier distinguishes them directly. For a malicious commitment-dependent edge choice, conditioning on that choice can correlate colors and opening randomness with the commitment vector. The exact fixed-edge counting argument alone does not prove simulation; computational hiding and the full guessed-edge hybrid are needed.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Commitments and NP construction](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-np--commit-color-permutation-necessity)

---

## 7. Account for conditioning in guessed-edge simulation

**Examiner challenge · proof · 50 minutes suggested**

ID: core-gmw-np--commit-conditional-hybrid-loss

Fix the malicious verifier’s tape and pre-commitment snapshot. Assume every invocation on a valid commitment vector terminates in polynomial time with a legal edge challenge. Compare guessed-edge simulation with an ideal true-coloring experiment using an independent uniform guessed edge. Given one-attempt computational hybrid loss δ for every efficient test, derive success probability, expected attempts and retained-view loss. State why this is not a statistical-distance claim.

**Required output:** A conditional success/runtime calculation and a reduction-level retained-view comparison.

**Prerequisites:** Computational hiding hybrids; Rejection simulation; Conditioning on success

**Examiner follow-up:** Which adversary runtime increase must be included when turning a retained-view distinguisher into a primitive hiding distinguisher?

<details>
<summary>Solution route / investigation plan</summary>

1. The mandatory legal-edge hypothesis makes the ideal guessed edge match the verifier’s chosen edge with probability exactly 1/m, regardless of commitment-dependent edge choice. Equality of these edge identifiers is an efficient test, so the fake experiment succeeds with probability at least 1/m−δ. With δ≤1/(2m), restoring the fixed snapshot for independent attempts gives expected attempts at most 2m.

2. Conditioning the ideal experiment on a match gives the real view because every legal chosen edge has the same matching probability. Comparing retained fake and ideal outputs incurs an O(m) loss through efficient bounded rejection sampling and hybrids; unopened-commitment hybrids typically give δ≤N times a primitive hiding advantage. This statement assumes a legal challenge on every attempt: extending it to aborting verifiers must retain abort views with their correct weights rather than discard them. The comparison is computational, not a total-variation bound.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Commitments and NP construction](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-np--commit-conditional-hybrid-loss)

---

## 8. Two openings can reveal a color equality relation

**Examiner challenge · counterexample · 30 minutes suggested**

ID: core-gmw-np--commit-two-edge-witness-relation

On the three-vertex path u−v−w, compare proper witnesses (1,2,1) and (1,2,3). A modified verifier opens both edges from the same freshly permuted committed coloring. Give an efficient distinguisher between the two views and explain why independently repeating single-edge rounds does not reveal this particular relation.

**Required output:** A perfect distinguishing predicate and a same-round versus fresh-round comparison.

**Prerequisites:** Witness indistinguishability; Color-permutation orbits; Commitment openings

**Examiner follow-up:** What information would opening all three vertices of a triangle reveal about a proper 3-coloring?

<details>
<summary>Solution route / investigation plan</summary>

1. The two openings expose colors at all three path vertices under the same permutation. Test whether the labels at u and w are equal. The test returns true with probability one for the first witness and false with probability one for the second; a global color permutation preserves equality relations.

2. Thus properness of each queried edge does not make their joint view witness-independent. In separate single-edge rounds with fresh permutations and commitments, the two endpoint-label pairs use independent color names, so cross-round equality of labels does not encode equality in one fixed witness. A simulator that fabricates each edge locally cannot be reused for two openings from one commitment vector without addressing their joint partition of colors.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Commitments and NP construction](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-np--commit-two-edge-witness-relation)

---

## 9. Optimize the honest edge challenge distribution

**Examiner challenge · synthesis · 50 minutes suggested**

ID: core-gmw-np--commit-optimize-edge-distribution

For a non-3-colorable graph, define γ(p)=min_c ∑_e p_e·1[c is monochromatic on e], minimizing over all vertex 3-labelings. Formulate the LP maximizing γ and its dual. Solve the example K₄ with one pendant edge, comparing uniform sampling on all seven edges with an optimal distribution.

**Required output:** Primal and dual LPs, optimal example weights and a matching dual certificate.

**Prerequisites:** Linear programming duality; Graph coloring; Commitment-based soundness

**Examiner follow-up:** Why can an optimal distribution have minimum edge probability zero while retaining positive soundness gap?

<details>
<summary>Solution route / investigation plan</summary>

1. Use variables p_e≥0, ∑p_e=1 and γ≤∑p_e bad_e(c) for every labeling c. The dual chooses a distribution over labelings to minimize the maximum edge’s expected monochromatic indicator. With binding commitments, γ is exactly the worst-case rejection probability of the resulting honest edge test.

2. For K₄ plus a pendant edge, uniform sampling gives γ=1/7: every labeling has a bad K₄ edge, and one can make exactly one edge bad while coloring the pendant properly. Put weight 1/6 on each K₄ edge and zero on the pendant to get γ=1/6. For the matching upper bound, distribute uniformly over six labelings whose unique bad K₄ edge ranges over those six choices, always extending properly to the pendant.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Commitments and NP construction](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-np--commit-optimize-edge-distribution)

---

## 10. Reset access is an additional verifier power

**Examiner challenge · counterexample · 40 minutes suggested**

ID: core-gmw-np--commit-resettable-prover-audit

Add an interface allowing a verifier to reset the honest prover to the state just after one commitment vector was sent, preserving the prover’s random tape. Show how polynomially many resets recover a coloring on every nonisolated vertex. Explain precisely why this attack changes the standard interaction model and does not follow merely from a simulator’s ability to rewind a verifier.

**Required output:** A reset attack transcript and an explicit statement of the additional interface assumption.

**Prerequisites:** Commitment challenge schedule; Resetting versus ordinary interaction; Witness extraction

**Examiner follow-up:** Which reused random values must a reset-resistant modification address?

<details>
<summary>Solution route / investigation plan</summary>

1. Ask a different edge after each reset to the same post-commitment snapshot. All openings use the same color permutation and per-vertex commitment randomness, so their labels can be combined. Querying every edge reveals the committed proper coloring on all nonisolated vertices; isolated vertices may receive arbitrary colors afterward.

2. In the ordinary protocol the real verifier cannot force the prover to reuse that state after a completed round; fresh rounds use fresh commitments and permutations. An offline simulator can rewind the verifier because it runs the verifier’s code and state, a power not granted symmetrically to the real verifier over the honest prover. This is an audit of an explicitly stronger reset interface, not a refutation of the standard sequential GMW proof.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Commitments and NP construction](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-np--commit-resettable-prover-audit)

---

## 11. Open a whole triangle while preserving local witness independence

**Research seminar · construction · 55 minutes suggested**

ID: core-gmw-np--commit-designated-triangle-extension

For every edge e=(u,v) of G, add a new vertex w_e adjacent to u,v, retaining the original edge. Commit to a proper coloring of the resulting graph, and challenge a uniform designated triangle (u,v,w_e). Prove equivalence to 3-colorability of G, soundness, local view independence and a malicious-verifier simulation using a guessed triangle. Quantify graph and communication overhead.

**Required output:** A complete gadget protocol, assumption-sensitive soundness/simulation proof and overhead table.

**Prerequisites:** Graph gadgets; Color-permutation distributions; Guessed-challenge simulation

**Examiner follow-up:** Why does this triangle construction avoid the two-edge path’s leaked equality relation?

<details>
<summary>Solution route / investigation plan</summary>

1. A proper coloring of G extends uniquely at each w_e to the missing third color, and every proper coloring of the enlarged graph restricts to one of G. There are N+m vertices and 3m edges, with m designated challenge triangles. Any fixed labeling of a non-3-colorable instance violates at least one designated triangle, so binding-good soundness is at most 1−1/m.

2. Every properly colored triangle has all three colors, and a uniform global permutation gives the same uniform distribution on its six ordered distinct triples for every witness. Guess the challenged triangle, commit to one such triple and dummy colors elsewhere, then apply the hiding-based rejection simulation with m possible challenges. Commitments grow from N to N+m and openings from two to three vertices; the same one-challenge conditioning issue still needs its proof.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Commitments and NP construction](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-np--commit-designated-triangle-extension)

---

## 12. Separate graph size, repetition count and primitive security

**Research seminar · research-extension · 55 minutes suggested**

ID: core-gmw-np--commit-end-to-end-security-parameters

For N vertices and m edges, target proof soundness and simulation distinguishing advantage at most 2^(−λ). Assume primitive binding and hiding errors are at most 2^(−λ′) against the required enlarged reduction budget, and that the established simulation reduction loses at most CkmN for k rounds. Choose k,λ′ and give total communication in terms of commitment and opening lengths. State what is assumed rather than derived from one-wayness.

**Required output:** Explicit repetition/security parameters, a communication formula and a clear assumption ledger.

**Prerequisites:** Concrete cryptographic security; Sequential soundness; Hybrid losses; Bit communication

**Examiner follow-up:** How should λ′ be recomputed for the designated-triangle variant with N+m commitments?

<details>
<summary>Solution route / investigation plan</summary>

1. Take k=ceil(m(λ+1)ln 2), making (1−1/m)^k≤2^(−λ−1). Require kN·2^(−λ′)≤2^(−λ−1) for accumulated binding failures and CkmN·2^(−λ′)≤2^(−λ) for simulation loss. For example λ′≥λ+ceil(log₂(2CkmN)) suffices when C≥1, with harmless small-parameter rounding.

2. If a commitment uses L_c(λ′) total bits and an opening uses L_o(λ′), communication is O(k[N L_c(λ′)+log m+2L_o(λ′)]), plus any explicitly charged setup. The hiding guarantee must cover the reduction’s increased circuit/time budget and any rejection-sampling cutoff. Negligible security from a qualitative one-wayness assumption does not automatically provide the concrete exponential bound 2^(−λ′); that is an additional primitive-security hypothesis of this calculation.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Commitments and NP construction](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-np--commit-end-to-end-security-parameters)
