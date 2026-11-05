# BFL: the oracle model and two-prover consistency

Oracle characterization · Babai–Fortnow–Lund · Two-Prover Interactive Protocols

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-bfl-oracle)

## 1. BFL: the oracle model and two-prover consistency

**Doctoral proof · proof · 45 minutes suggested**

ID: core-bfl-oracle--source-proof

Explain how a two-prover strategy differs from an adaptive single-prover strategy. Give a contextual-answer cheating strategy when the whole query bundle is sent to one prover. Identify the theorem needed to turn local consistency into a global algebraic proof.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** The proof-oracle viewpoint requires a single fixed answer function. Two noncommunicating provers allow consistency checks, but naive agreement at one point does not establish global correctness.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. A deterministic strategy for a separated prover is a function of its own question and the input. Shared initial randomness can be fixed when maximizing acceptance.

2. A single prover that sees a line and a point can tailor the line polynomial to that point. Separation prevents that coordination after the questions arrive.

3. Consistency is necessary but not sufficient: a low-degree/multilinearity proximity theorem and a decoding argument are needed. “The provers cross-check each other” is not a soundness proof.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Oracle characterization](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-oracle--source-proof)

---

## 2. Can a prover see the other prover’s question?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-bfl-oracle--oral-check-1

Can a prover see the other prover’s question?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The proof-oracle viewpoint requires a single fixed answer function. Two noncommunicating provers allow consistency checks, but naive agreement at one point does not establish global correctness.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Not in the classical model being analyzed. Allowing that information changes the legal strategies.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Oracle characterization](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-oracle--oral-check-1)

---

## 3. Why not call the strategy table a polynomial NP certificate?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-bfl-oracle--oral-check-2

Why not call the strategy table a polynomial NP certificate?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The proof-oracle viewpoint requires a single fixed answer function. Two noncommunicating provers allow consistency checks, but naive agreement at one point does not establish global correctness.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Polynomial-length questions have exponentially many possible values; the full table can be exponentially large.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Oracle characterization](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-oracle--oral-check-2)

---

## 4. Replace a context-dependent bundle by one point table

**Doctoral proof · proof · 35 minutes suggested**

ID: core-bfl-oracle--oracle-bundle-to-fixed-table

A verifier samples a bundle C of t point addresses. Prover A sees C and returns t symbols; prover B sees only a uniformly selected address C_J and returns f(C_J), with J uniform in [t]. For fixed deterministic provers, a consistency check fails with probability ε. Bound the change in any predicate on the whole bundle when A’s vector is replaced by (f(C₁),…,f(C_t)).

**Required output:** A coupling proof and a statement separating consistency from algebraic correctness.

**Prerequisites:** Separated prover strategies; Coupling; Union bounds

**Examiner follow-up:** What bound follows if J is nonuniform with every coordinate selected with probability at least λ/t?

<details>
<summary>Solution route / investigation plan</summary>

1. Let N(C) be the number of coordinates at which A’s bundle answer differs from f. The check distribution gives E[N(C)]/t=ε, so Pr[N(C)>0]≤tε. Couple the original and replaced predicates using exactly the same sampled bundle; their outputs can differ only on this event.

2. No independence between coordinate errors is needed, and repeated addresses are allowed with the same fixed f value. The resulting acceptance change is at most min(1,tε). This is a quantitative consistency lemma for the stated bundle distribution. It neither proves f is multilinear nor transfers a bound to a different bundle distribution without another argument.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Oracle characterization](https://lance.fortnow.com/papers/files/mip2.pdf) · [Babai–Fortnow–Lund, Two-Prover Interactive Protocols](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-oracle--oracle-bundle-to-fixed-table)

---

## 5. Prove a local-to-global agreement lemma on an expander

**Doctoral proof · proof · 45 minutes suggested**

ID: core-bfl-oracle--oracle-expander-agreement

On an N-vertex d-regular connected graph of conductance Φ, two provers have binary answer functions f,g. With probability 1/2 test f(v)=g(v) at uniform v; otherwise test f(u)=g(v) on a uniform directed edge. If rejection is δ, bound both functions’ distance from one common constant. Identify why the same-vertex test matters.

**Required output:** A quantitative agreement lemma and a bipartite counterexample.

**Prerequisites:** Graph conductance; Binary cuts; Agreement testing

**Examiner follow-up:** How do you alter the proof for an irregular graph sampled from its stationary vertex distribution?

<details>
<summary>Solution route / investigation plan</summary>

1. The same-vertex branch gives Pr[f≠g]≤2δ. The edge branch gives Pr[f(u)≠g(v)]≤2δ. By inserting f(v), and using the uniform endpoint marginal of a regular graph, obtain Pr_edge[f(u)≠f(v)]≤4δ.

2. Let S be the smaller label class of f. Conductance makes its directed edge-boundary probability at least 2Φ|S|/N, so f differs from its majority constant on at most 2δ/Φ of vertices. The distance of g from the same constant is at most 2δ/Φ+2δ. Without the same-vertex test, a bipartite graph admits opposite side-dependent f,g that agree across every tested edge but are not common constants.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Oracle characterization](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-oracle--oracle-expander-agreement)

---

## 6. Decode the perfect-consistency case completely

**Doctoral proof · proof · 40 minutes suggested**

ID: core-bfl-oracle--oracle-perfect-axis-consistency

Over F_q^m, q≥2, prover A receives an axis-parallel line and supplies two coefficients of an affine restriction; prover B receives one point and supplies one field value. Specify a test with full support on line–point incidences. Prove that perfect acceptance implies B is one globally multilinear function, and count question and answer bits.

**Required output:** A complete exact-case decoder proof and an incidence-test resource count.

**Prerequisites:** Axis-parallel restrictions; Multilinear interpolation; Two-prover consistency

**Examiner follow-up:** Why is it insufficient for the test distribution to omit some line–point incidences?

<details>
<summary>Solution route / investigation plan</summary>

1. Choose direction i, the m−1 fixed coordinates and a uniformly random value for the free coordinate. Compare A’s affine evaluation with B’s point value. Perfect acceptance and full support imply equality at every incidence, so every coordinate restriction of B is affine. Induct on m, using the two endpoint restrictions in the last coordinate, to obtain a polynomial of individual degree at most one.

2. A line question uses O(m log q+log m) bits, its answer two field elements, and B’s point question m log q bits with one field-element answer. This proves the exact case directly. For q=2 every function already has a multilinear representation, and for imperfect acceptance a robust proximity theorem is still needed; perfect-case interpolation does not supply its quantitative constants.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Oracle characterization](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-oracle--oracle-perfect-axis-consistency)

---

## 7. Agreement distance depends on the question distribution

**Examiner challenge · counterexample · 30 minutes suggested**

ID: core-bfl-oracle--oracle-query-distribution-distance

Let the address domain have size N and consistency questions follow μ. Show that μ-weighted disagreement at most ε need not imply small uniform Hamming distance. Prove a transfer bound under μ(x)≥λ/N for every address, and exhibit a distribution and two tables that nearly saturate it.

**Required output:** A rare-address example and a sharp measure-transfer inequality.

**Prerequisites:** Weighted Hamming distance; Probability measures; Consistency tests

**Examiner follow-up:** What guarantee is possible when μ gives zero mass to a positive fraction of addresses?

<details>
<summary>Solution route / investigation plan</summary>

1. Choose a set S occupying half the addresses but carrying μ-mass ε; let two tables disagree exactly on S. The consistency error is ε while uniform distance is one half. A high-success statement without its query measure cannot justify decoding under uniform distance.

2. If μ(x)≥λ/N, then μ(S)≥λ|S|/N, so uniform disagreement is at most ε/λ. Assign the minimum allowed mass λ/N to a disagreement set and distribute remaining mass elsewhere to attain equality whenever the parameters permit it. Apply such a comparison before importing a proximity theorem whose distance measure differs from the protocol’s sampled incidence measure.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Oracle characterization](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-oracle--oracle-query-distribution-distance)

---

## 8. Four contexts that no pair of local tables can satisfy

**Examiner challenge · proof · 30 minutes suggested**

ID: core-bfl-oracle--oracle-chsh-local-table-obstruction

The verifier draws independent uniform bits x,y, sends x to prover A and y to prover B, and accepts bits a,b iff a⊕b=xy. Compute the classical value by analyzing deterministic local tables, show why shared initial randomness cannot improve it, and compare with an optimizer permitted to see both questions.

**Required output:** An exact value proof and explicit legal and illegal strategies.

**Prerequisites:** Local deterministic strategies; XOR equations; Shared randomness

**Examiner follow-up:** How many bits of one-way post-question communication suffice to make the value one?

<details>
<summary>Solution route / investigation plan</summary>

1. The four required equations are a₀⊕b₀=0, a₀⊕b₁=0, a₁⊕b₀=0 and a₁⊕b₁=1. XORing them gives 0=1, so at least one fails. Constant-zero answers satisfy three, yielding the exact classical value 3/4.

2. Shared initial randomness is a distribution over deterministic table pairs, whose average cannot exceed their maximum. By contrast, an illegal joint-question optimizer may set a=0 and b=xy and win every context. The discrepancy is enforced by repeated use of the same local table entries across incompatible global contexts, not by any computational limitation on the provers.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Oracle characterization](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-oracle--oracle-chsh-local-table-obstruction)

---

## 9. A succinct circuit is a substantive prover restriction

**Examiner challenge · proof · 40 minutes suggested**

ID: core-bfl-oracle--oracle-circuit-commitment-restriction

A proposed replacement for an exponential proof oracle asks the prover to send a size-s Boolean circuit C:{0,1}^q→{0,1}^a before any queries. Count circuits and all possible answer tables, and prove that polynomial-size circuit messages cannot represent every table. Explain the consequence for an oracle characterization and for conditional small-prover-circuit consequences.

**Required output:** Circuit/table counts and a precise audit of the proposed model change.

**Prerequisites:** Circuit encodings; Counting arguments; Proof-oracle tables

**Examiner follow-up:** Does the counting argument establish that the particular honest oracle of every NEXP protocol is hard for circuits?

<details>
<summary>Solution route / investigation plan</summary>

1. With a fixed finite gate basis, size-s circuits and output wiring have descriptions of O((s+a)log(s+q+a)) bits, up to an explicit gate-order encoding. There are 2^(a·2^q) arbitrary answer tables. For s,a polynomial in q, the number of circuit descriptions is vastly smaller, so some tables have no such circuit.

2. Sending and evaluating a circuit can enforce one globally consistent function efficiently, but only within the represented family. It cannot silently replace unrestricted exponentially long oracle proofs in a completeness theorem. Conversely, if a language’s complete prover strategies do admit polynomial circuits, those circuits can become a short Merlin witness; that is a conditional consequence requiring a separate premise about the honest strategy.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Oracle characterization](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-oracle--oracle-circuit-commitment-restriction)

---

## 10. Uniform marginals do not imply a classical local strategy

**Examiner challenge · counterexample · 35 minutes suggested**

ID: core-bfl-oracle--oracle-nonsignaling-is-not-shared-coins

For the XOR game a⊕b=xy, define a conditional answer distribution by choosing a uniformly and setting b=a⊕xy. Verify that neither prover’s answer marginal depends on the other question. Prove that this distribution is not a mixture of classical local answer tables, and explain which assumption a marginal-only soundness audit overlooks.

**Required output:** A probability table and a separating success-value inequality.

**Prerequisites:** Conditional distributions; Local-table strategies; XOR-game value

**Examiner follow-up:** Write the linear constraints for the classical local-strategy polytope and compare them with marginal nonsignaling constraints.

<details>
<summary>Solution route / investigation plan</summary>

1. For each x,y, both a and b are uniform, so A’s marginal is independent of y and B’s marginal independent of x. Nevertheless the required XOR relation holds with probability one. These are nonsignaling conditional distributions, defined here only as a mathematical relaxation of the classical strategy set.

2. Every deterministic local-table pair satisfies at most three of the four XOR constraints. Convex combinations therefore have success at most 3/4 and cannot realize this distribution. A soundness proof must use one common joint distribution over entire local response functions, rather than checking the separate answer marginals alone. This example makes no claim about what entangled strategies can realize.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Oracle characterization](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-oracle--oracle-nonsignaling-is-not-shared-coins)

---

## 11. Compose decoding with an adaptive oracle computation

**Research seminar · research-extension · 45 minutes suggested**

ID: core-bfl-oracle--oracle-adaptive-replacement-coupling

An algebraic verifier makes at most t adaptive queries to a purported decoded oracle f. Suppose an implementation returns the correct f(x) with conditional failure at most ε for every target x and every prior history, using fresh internal coins. Prove a replacement bound for the final decision. Then construct a fixed low-density error set showing why an unconditional uniform-query error bound alone is insufficient.

**Required output:** An adaptive coupling theorem and a quantitative counterexample to the weaker premise.

**Prerequisites:** Adaptive queries; First-disagreement coupling; Self-correction

**Examiner follow-up:** How do an initial decoding-failure probability β and a structural-test error γ enter the final bound?

<details>
<summary>Solution route / investigation plan</summary>

1. Run the implemented and ideal verifiers on the same external randomness until their first answer disagreement. At each reached target, the assumed conditional error is at most ε, hence the probability of any disagreement is at most tε. On the complementary event their entire adaptive query paths and final outputs coincide.

2. For the limitation, corrupt one address x★ in an otherwise correct table. Uniform-query error is 1/N, but a verifier that deterministically asks x★ fails with probability one. A valid self-corrector must randomize around every target and prove an error bound uniform in that target, or the proof must establish the actual adaptive query distribution. A global Hamming-distance bound alone is not a target-wise evaluation guarantee.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Oracle characterization](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-oracle--oracle-adaptive-replacement-coupling)

---

## 12. Measure how question leakage weakens separation

**Research seminar · research-extension · 55 minutes suggested**

ID: core-bfl-oracle--oracle-one-way-leakage-indexing

In an explicit communication variant, A receives uniform X∈{0,1}^N and may send ℓ bits to B, which receives an independent uniform index I∈[N] and must output X_I. Prove that average error ε≤1/2 requires ℓ≥N(1−H₂(ε)), even with shared initial randomness. Contrast zero leakage with sending the entire question.

**Required output:** A complete entropy lower bound and a leakage-versus-error parameter plot or table.

**Prerequisites:** Entropy subadditivity; Binary entropy; One-way communication

**Examiner follow-up:** What changes if worst-case error is required for every index rather than average error over I?

<details>
<summary>Solution route / investigation plan</summary>

1. Let R be shared randomness and M the ℓ-bit message. For each coordinate i let ε_i be B’s decoding error. Binary prediction gives H(X_i|M,R)≤H₂(ε_i); summing and applying concavity gives H(X|M,R)≤N H₂(ε). Since X is independent of R and uniform, I(X;M|R)≥N(1−H₂(ε)), while I(X;M|R)≤H(M|R)≤ℓ.

2. With no message, B has no information about any independent fair coordinate and succeeds with probability one half. Sending all N bits permits perfect success. This is a bounded, falsifiable modification of the noncommunication premise: answer-table counting alone does not quantify what a leaked question allows, whereas the information inequality supplies an explicit tradeoff.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Oracle characterization](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-oracle--oracle-one-way-leakage-indexing)
