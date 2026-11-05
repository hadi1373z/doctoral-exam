# Zero knowledge: malicious views, simulators and quantifiers

Definitions and graph isomorphism · Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-gmw-def)

## 1. Zero knowledge: malicious views, simulators and quantifiers

**Doctoral proof · proof · 45 minutes suggested**

ID: core-gmw-def--source-proof

Give a full quantifier-level definition and simulate the graph-isomorphism protocol against an arbitrary efficient verifier. Explain why a uniform random relabeling hides the guessed source graph and why expected two trials follows.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Zero knowledge compares the entire verifier view with a simulator’s output for every permitted efficient verifier, including auxiliary information in the chosen definition.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. For isomorphic G₀,G₁, a random relabeling of either graph has the same distribution. Choose a guessed challenge b, send a random relabeling of G_b and rewind unless the verifier asks b.

2. Because the first-message distribution is independent of b, success probability is 1/2 for a fixed verifier random tape and auxiliary input. Conditioned on success, the view matches the real protocol.

3. Expected-polynomial-time simulation and strict polynomial-time simulation are distinct conventions; truncation trades an exact distribution for a small statistical error.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Definitions and graph isomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-def--source-proof)

---

## 2. Why is an honest-verifier simulator insufficient?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-gmw-def--oral-check-1

Why is an honest-verifier simulator insufficient?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Zero knowledge compares the entire verifier view with a simulator’s output for every permitted efficient verifier, including auxiliary information in the chosen definition.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. A malicious verifier can choose challenges as a function of the first message and its auxiliary input. The simulation must handle that strategy.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Definitions and graph isomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-def--oral-check-1)

---

## 3. Does simulation imply soundness?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-gmw-def--oral-check-2

Does simulation imply soundness?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Zero knowledge compares the entire verifier view with a simulator’s output for every permitted efficient verifier, including auxiliary information in the chosen definition.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. A protocol can be simulatable yet accept false statements; these are separate properties.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Definitions and graph isomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-def--oral-check-2)

---

## 4. Show the GI view is independent of the chosen isomorphism

**Doctoral proof · proof · 40 minutes suggested**

ID: core-gmw-def--zk-gi-witness-distribution

For isomorphic graphs G₀,G₁, analyze one graph-isomorphism proof round against a verifier whose challenge is any efficient function of its random tape, auxiliary input and the first graph H. Prove that two different witness isomorphisms induce the same entire verifier-view distribution. Count the isomorphisms giving each fixed H and response.

**Required output:** A coset-counting proof for the entire view, including malicious challenge dependence.

**Prerequisites:** Graph automorphisms; Uniform relabelings; Verifier views

**Examiner follow-up:** Which part of the argument uses the fact that all isomorphism sets between fixed graphs have equal size?

<details>
<summary>Solution route / investigation plan</summary>

1. Condition on the verifier’s random tape and on H. The initial relabeling of G₀ is uniform among Iso(G₀,H), a coset of Aut(G₀). For either legal challenge b, composing with any fixed witness maps this set bijectively to Iso(G_b,H). Therefore the response is uniform over the same set regardless of which witness isomorphism was used.

2. The distribution of H is uniform over the common labeled orbit, and the verifier’s challenge is fixed once its tape, auxiliary input and H are fixed. These conditional response laws imply equality of the full view, including the tape and any deterministic final output. This proves witness independence for this protocol; general witness indistinguishability and zero knowledge remain distinct notions.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Definitions and graph isomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf) · [Goldreich–Micali–Wigderson, Proofs that Yield Nothing But Their Validity](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-def--zk-gi-witness-distribution)

---

## 5. Separate geometric simulator tails from a mere mean bound

**Doctoral proof · proof · 45 minutes suggested**

ID: core-gmw-def--zk-geometric-versus-expected-truncation

For k sequential GI rounds, cap each exact rewind simulator at T attempts and derive total statistical error and strict runtime. Contrast this with an arbitrary simulator known only to have expected time p(n): state Markov’s cutoff bound and give a finite-mean runtime distribution for which no fixed polynomial cutoff makes its tail negligible.

**Required output:** A strict-simulation parameter choice and a rigorous limitation of mean-only truncation.

**Prerequisites:** Geometric distributions; Total variation; Expected versus strict polynomial time

**Examiner follow-up:** Why does outputting a failure symbol on timeout give a valid statistical-distance upper bound?

<details>
<summary>Solution route / investigation plan</summary>

1. A GI trial succeeds with probability exactly one half even after fixing the verifier’s tape and prior state. Failure of all T attempts has probability 2^(−T), so coupling all k rounds gives statistical error at most k2^(−T). Taking T≥λ+ceil(log₂ k) makes the error at most 2^(−λ), with O(kT) verifier invocations.

2. For only E[time]≤p(n), cutoff p(n)/ε gives tail at most ε; negligible ε need not permit polynomial cutoff. A distribution placing mass proportional to 1/(j²2^j) at time 2^j has finite mean, but its tail at n^c is still at least an inverse polynomial divided by a logarithmic factor for every fixed c. The GI conversion relies on its stronger geometric tail, not just expected polynomial time.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Definitions and graph isomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-def--zk-geometric-versus-expected-truncation)

---

## 6. Witness indistinguishability can be vacuous

**Doctoral proof · counterexample · 40 minutes suggested**

ID: core-gmw-def--zk-unique-witness-wi-separation

Assume a polynomial-time one-way permutation family f_n. On common input x=f_n(w), consider the protocol where the prover sends w and the verifier checks f_n(w)=x. Prove witness indistinguishability and show that computational zero knowledge would contradict one-wayness. State the role of an efficient validity distinguisher and expected simulator runtime.

**Required output:** A WI proof and an explicit zero-knowledge-to-inversion reduction.

**Prerequisites:** One-way permutations; Witness indistinguishability; Computational zero knowledge

**Examiner follow-up:** Why is merely observing different supports insufficient here without the efficient predicate f_n(w′)=x?

<details>
<summary>Solution route / investigation plan</summary>

1. Each x has exactly one witness, so comparing two witnesses for the same statement is vacuous: the protocol is witness indistinguishable. It nevertheless reveals that unique preimage in full. Membership in the permutation’s range is trivial, so language complexity alone does not prevent a particular proof protocol from leaking a hard-to-compute witness.

2. Given x, test a purported simulated view by checking whether its response w′ satisfies f_n(w′)=x. The real view always passes, so computational indistinguishability forces the simulator to produce valid preimages with overwhelming probability on random permutation outputs. This gives an inverter; if simulation is only expected polynomial time, truncate at a suitable polynomial multiple of its mean to retain a nonnegligible success probability.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Definitions and graph isomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-def--zk-unique-witness-wi-separation)

---

## 7. Handle aborting GI verifiers without rejection-sampling bias

**Examiner challenge · counterexample · 40 minutes suggested**

ID: core-gmw-def--zk-malformed-challenge-abort-bias

A malicious GI verifier may abort after seeing H instead of sending a legal challenge. A simulator immediately outputs every aborting attempt but outputs a non-aborting attempt only when its guessed bit matches. Show that this can bias the view. Design an exact simulator whose probability of retaining an attempt is one half for every H, including aborts.

**Required output:** An explicit bias calculation and a corrected exact simulation algorithm.

**Prerequisites:** GI rewind simulation; Conditioning; Verifier aborts

**Examiner follow-up:** How would you generalize the dummy retention probability for a b-bit challenge block?

<details>
<summary>Solution route / investigation plan</summary>

1. If the real abort probability is p, the proposed retain rule keeps aborts with probability one and valid challenges with probability one half. Its output abort probability becomes p/[p+(1−p)/2], which differs from p except at the extremes. Being able to fabricate an abort transcript does not justify retaining it at a different rate.

2. For a valid challenge retain only on a matching guessed bit, as usual. For an abort, retain only on an independent fair dummy coin and otherwise retry from the same verifier snapshot. Since the first-message distribution is independent of the guessed source on YES inputs, every H has retention probability one half. Conditional output therefore has exactly the real H and abort distribution, and expected trials remain two.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Definitions and graph isomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-def--zk-malformed-challenge-abort-bias)

---

## 8. Put the simulator outside the instance quantifier

**Examiner challenge · proof · 40 minutes suggested**

ID: core-gmw-def--zk-uniform-simulator-quantifiers

Write an auxiliary-input computational zero-knowledge definition for an efficient prover given a witness, including verifier, simulator, distinguisher, YES-instance, witness and auxiliary-input quantifiers. Explain why a formulation allowing a separate simulator S_(x,w) for each statement and witness becomes vacuous for such protocols.

**Required output:** A fully quantified ensemble definition and a hardcoded-witness vacuity argument.

**Prerequisites:** Indistinguishable ensembles; Uniform algorithms; Auxiliary inputs

**Examiner follow-up:** How does polynomial-length auxiliary information expose problems in composing a definition that handles only one fixed verifier state?

<details>
<summary>Solution route / investigation plan</summary>

1. For each permitted efficient verifier V* there must be one permitted simulator S_V* whose output on x and auxiliary input z is indistinguishable from the entire real view for all polynomially bounded YES-instance/witness/auxiliary-input sequences in the chosen definition. Distinguishers receive the public data required by that definition, and the indistinguishability error is negligible in the security/input parameter.

2. If S can instead be selected separately after x,w are fixed, its code may hardcode w and run the real efficient prover with V*. Every such protocol then has a pointwise simulator, including one that transmits the witness verbatim. Uniformity and quantifier order prevent this loophole. State separately whether nonuniform distinguishers or simulators are allowed rather than changing conventions mid-proof.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Definitions and graph isomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-def--zk-uniform-simulator-quantifiers)

---

## 9. Compare simulation notions under postprocessing

**Examiner challenge · synthesis · 40 minutes suggested**

ID: core-gmw-def--zk-distance-and-postprocessing

Prove closure of perfect, statistical and computational simulation under the appropriate final-view postprocessing. Then, assuming a secure stretch-doubling pseudorandom generator G, compare U_n with G(U_(n/2)) in statistical distance and efficient distinguishability. Use the example to explain why computational simulation should not be described as near equality of probability masses.

**Required output:** Three closure proofs and a quantitative statistical/computational separation example.

**Prerequisites:** Total variation; Efficient distinguishers; Pseudorandom generators

**Examiner follow-up:** Why is efficient postprocessing essential only in the computational clause?

<details>
<summary>Solution route / investigation plan</summary>

1. Identical distributions remain identical under every deterministic map. Total variation cannot increase under a randomized channel, by coupling or by pulling events back to the original space. Computational indistinguishability survives efficient postprocessing because a distinguisher for the processed views can be composed with that postprocessing.

2. The generator’s image has size at most 2^(n/2), so uniform U_n lands there with probability at most 2^(−n/2), whereas G(U_(n/2)) always does. Statistical distance is therefore at least 1−2^(−n/2), despite computational indistinguishability under the explicit generator assumption. An inefficient image-membership test separates the distributions; this does not supply an efficient verifier with such a test.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Definitions and graph isomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-def--zk-distance-and-postprocessing)

---

## 10. Resampling the verifier tape can bias a simulated view

**Examiner challenge · counterexample · 30 minutes suggested**

ID: core-gmw-def--zk-random-tape-restart-bias

A generic rejection simulator has a uniform verifier tape bit r, but its per-attempt success probabilities are p(0)=1 and p(1)=1/2. Compare selecting r once and rewinding with that fixed tape against resampling r after every failure. Compute the output tape distribution and expected attempt counts in both procedures.

**Required output:** Two exact waiting-time computations and a general retained-tape formula.

**Prerequisites:** Geometric waiting time; Verifier views; Rewinding snapshots

**Examiner follow-up:** What is the retained tape law for an arbitrary tape distribution μ and success function p(r)?

<details>
<summary>Solution route / investigation plan</summary>

1. Fixing r first preserves its intended uniform marginal: the expected attempts are (1/2)·1+(1/2)·2=3/2. Repeatedly resampling r gives overall success probability 3/4 per trial and expected attempts 4/3, but the retained tape is zero with probability (1/2)/(3/4)=2/3.

2. The faster procedure therefore changes the full view even when its accepted transcripts are locally valid. Standard rewinding fixes the sampled verifier tape and its pre-round state. For the GI simulator the exact one-half success probability is tape-independent, so this particular bias disappears; a generic simulation argument must establish that property rather than borrowing it without proof.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Definitions and graph isomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-def--zk-random-tape-restart-bias)

---

## 11. Compose simulators across adversarial verifier states

**Research seminar · research-extension · 55 minutes suggested**

ID: core-gmw-def--zk-sequential-state-composition

Consider k(n) sequential protocol invocations with a verifier retaining arbitrary polynomial-length state. Assume each invocation has an auxiliary-input black-box simulator with a uniform expected-time bound and error ε_i against every efficient continuation. Construct a sequential composition proof, bound total distinguishing advantage and expected time, and identify why honest-verifier simulation is an insufficient premise.

**Required output:** A state-aware composition construction, a hybrid proof and a runtime bound.

**Prerequisites:** Auxiliary-input zero knowledge; Hybrid arguments; Sequential composition

**Examiner follow-up:** Which extra issue arises if the per-invocation expected-time bound holds only on states generated by an honest prefix?

<details>
<summary>Solution route / investigation plan</summary>

1. Treat the complete current verifier snapshot, prior public transcript and retained auxiliary data as the auxiliary state for each invocation. Replace invocations one at a time in a hybrid argument, allowing the later efficient continuation to inspect everything produced so far. Under the stated uniform guarantee, the distinguishing losses add to at most ∑ε_i.

2. A uniform expected-time bound p(n) over all admissible snapshots gives total expected work O(kp(n)) by conditional expectation. The black-box simulator may rewind only within the current invocation while preserving the snapshot before it. Honest-verifier simulation gives neither arbitrary-state coverage nor protection against message-dependent future challenges. This is a bounded composition theorem under explicit simulator hypotheses, not an automatic concurrent-composition claim.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Definitions and graph isomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-def--zk-sequential-state-composition)

---

## 12. Trade GI rounds for logarithmic challenge blocks

**Research seminar · construction · 50 minutes suggested**

ID: core-gmw-def--zk-logarithmic-gi-blocks

To obtain soundness 2^(−k), group GI repetitions into sequential blocks of b≤c log₂ n parallel instances, where n≥2 is the graph size. Prove completeness, soundness, exact guessing-simulator success per block and expected runtime against valid message-dependent challenge vectors. Compare b=1, b=Θ(log n) and b=k.

**Required output:** A block protocol and a rounds/soundness/simulation-cost comparison.

**Prerequisites:** GI simulation; Parallel challenge vectors; Sequential soundness

**Examiner follow-up:** How do malformed-vector aborts require the same retention-balancing principle as malformed one-bit challenges?

<details>
<summary>Solution route / investigation plan</summary>

1. On a YES input, the vector of independently relabeled first graphs has a distribution independent of the simulator’s guessed b-bit source vector. Any verifier challenge vector therefore matches with probability exactly 2^(−b), even after fixing its tape and pre-block state. A retained block has the correct view, with expected 2^b attempts.

2. For a NO GI instance, each first graph can have a valid isomorphism to at most one source graph, so a uniform b-bit honest challenge succeeds in at most 2^(−b). Sequential blocks containing k total bits give soundness 2^(−k). With b=Θ(log n), expected simulation is polynomial and the block count is O(k/log n); b=k can make this particular simulator exponential. Failure of that simulator is not a proof that every parallel simulator is impossible.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Definitions and graph isomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-def--zk-logarithmic-gi-blocks)
