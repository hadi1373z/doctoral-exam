# Graph nonisomorphism: hidden choices and verifier certification

Graph nonisomorphism · Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-gmw-gni)

## 1. Graph nonisomorphism: hidden choices and verifier certification

**Doctoral proof · proof · 45 minutes suggested**

ID: core-gmw-gni--source-proof

Prove completeness and soundness of the basic GNI protocol. Exhibit the malicious-verifier simulation obstacle when an arbitrary graph is supplied as the challenge. Describe the role of the paper’s additional verifier-certification machinery without claiming the basic three-line protocol already solves it.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** The basic graph-nonisomorphism verifier sends a random relabeling of a secretly chosen input graph; on isomorphic inputs the hidden bit is information-theoretically concealed.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. If G₀ and G₁ are nonisomorphic, the challenge graph is isomorphic to exactly one of them, so the unbounded prover can identify b.

2. If they are isomorphic, random relabelings have identical distributions and no prover can guess the uniformly hidden b with probability above 1/2.

3. A malicious verifier may send a challenge not honestly derived from either input. Simulating the response by running a graph-isomorphism decision procedure is not a polynomial-time simulation proof; the stronger construction handles this issue.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Graph nonisomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-gni--source-proof)

---

## 2. What is the difference from the GI protocol?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-gmw-gni--oral-check-1

What is the difference from the GI protocol?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The basic graph-nonisomorphism verifier sends a random relabeling of a secretly chosen input graph; on isomorphic inputs the hidden bit is information-theoretically concealed.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. The GNI prover distinguishes a hidden source; the GI prover demonstrates an isomorphism to a selected source.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Graph nonisomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-gni--oral-check-1)

---

## 3. Why does soundness amplify sequentially?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-gmw-gni--oral-check-2

Why does soundness amplify sequentially?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The basic graph-nonisomorphism verifier sends a random relabeling of a secretly chosen input graph; on isomorphic inputs the hidden bit is information-theoretically concealed.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Condition on every preceding history. On a false statement the next hidden bit is fresh and remains unbiased to the prover.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Graph nonisomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-gni--oral-check-2)

---

## 4. Extract an isomorphism from two accepted subset responses

**Doctoral proof · proof · 45 minutes suggested**

ID: core-gmw-gni--gni-pairing-two-response-extraction

In the GMW pairing certification, fix H and k graph pairs T_(i,0),T_(i,1). A subset challenge I asks for input-to-pair isomorphisms at i∈I and an H-to-one-member isomorphism at i∉I. Given valid responses to distinct I,K with the same first message, extract an isomorphism H→G_b. Type every map and bound verification, extraction and communication costs for n-vertex graphs.

**Required output:** A typed extractor, correctness proof and full local resource count.

**Prerequisites:** Permutation composition; GMW pairing certification; Special-soundness reasoning

**Examiner follow-up:** Why is distinctness of I and K essential even if both responses contain many valid permutations?

<details>
<summary>Solution route / investigation plan</summary>

1. Choose i in the symmetric difference. One response contains maps θ:G_b→T_(i,j), together with the pair’s source labeling; the other contains η:H→T_(i,j) for some member j. Compose θ^(−1)∘η to obtain H→G_b. Both answers refer to the same fixed labeled graph T_(i,j), which is the critical compatibility condition.

2. With adjacency matrices, check each claimed isomorphism in O(n²) time and represent a permutation in O(n log n) bits. The first message has O(kn²) graph bits; the subset has k bits; openings have O(kn log n) bits. Finding a differing index costs O(k), and composition costs O(n) with permutation arrays. These bounds concern the certificate subprotocol, before repeated outer GNI rounds.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Graph nonisomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf) · [Goldreich–Micali–Wigderson, Proofs that Yield Nothing But Their Validity](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-gni--gni-pairing-two-response-extraction)

---

## 5. An unrelated challenge can answer at most one subset

**Doctoral proof · proof · 35 minutes suggested**

ID: core-gmw-gni--gni-invalid-question-one-subset

Fix the verifier’s tape and first certification message, and assume H is isomorphic to neither G₀ nor G₁. Prove that at most one of the 2^k subset challenges can receive a valid response. Construct a first message for which exactly one prescribed subset is answerable, and derive the uniform challenge acceptance probability.

**Required output:** A two-response contradiction proof and a tight first-message construction.

**Prerequisites:** Pairing extractor; Fixed-tape response functions; Cut-and-choose

**Examiner follow-up:** What parameter replaces 2^(−k) if the subset distribution is not uniform?

<details>
<summary>Solution route / investigation plan</summary>

1. If two different subsets were answerable, the symmetric-difference extraction would produce an isomorphism from H to one input graph, contradicting the premise. Thus a fixed malicious verifier can pass at most one uniformly selected subset, with probability at most 2^(−k), even if its response code depends on the entire subset.

2. To attain the bound, fix a target subset I★. At indices in I★ supply genuine input-graph pairs, which can be opened to the inputs but not linked to unrelated H. At other indices supply a pair of copies of H, which can be linked to H but cannot be correctly opened as an input pair. Only I★ passes. Choose graphs with the required distinct isomorphism types so no accidental extra mode is possible.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Graph nonisomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-gni--gni-invalid-question-one-subset)

---

## 6. Compute soundness for a biased hidden source

**Doctoral proof · proof · 35 minutes suggested**

ID: core-gmw-gni--gni-biased-source-robustness

Modify the basic GNI verifier so that its hidden source bit equals one with known probability p instead of 1/2, and use an exactly uniform relabeling. Derive optimal soundness on isomorphic graphs, an honest-verifier simulator on nonisomorphic graphs and k-round sequential soundness. Extend the bound to adaptive biases p(h)∈[α,1−α].

**Required output:** Exact biased-source values and a conditionally valid repetition theorem.

**Prerequisites:** Bayes prediction; Uniform relabelings; Sequential conditioning

**Examiner follow-up:** What happens to the soundness guarantee as α approaches zero?

<details>
<summary>Solution route / investigation plan</summary>

1. When the inputs are isomorphic, both source choices induce the same challenge-graph distribution. The graph supplies no information about the source, but its prior is biased, so the optimal response is the more likely bit and succeeds with probability max(p,1−p). On nonisomorphic inputs the honest unbounded prover identifies the source perfectly.

2. An honest-verifier simulator draws the source bit and relabeling itself and writes the corresponding prover answer, so it needs no graph-isomorphism decision algorithm. With fresh choices in k rounds, soundness is max(p,1−p)^k. If every history-dependent bias stays inside [α,1−α], conditional success is at most 1−α and total soundness is at most (1−α)^k. This is an honest-verifier simulation statement for the basic protocol.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Graph nonisomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-gni--gni-biased-source-robustness)

---

## 7. Prove expected time for the pairing simulator’s fallback

**Examiner challenge · proof · 50 minutes suggested**

ID: core-gmw-gni--gni-rare-event-fallback-runtime

On nonisomorphic input graphs, freeze the verifier’s random tape and complete pre-challenge state, including prior-round state, after H and the test pairs are fixed. Assume every restored invocation and certificate check costs at most a polynomial P(n,k). Let M count answerable subsets among 2^k and D(n) bound exhaustive classification of H including its interleaved invocation overhead. Analyze the simulator, returning bit 0 if H matches neither input. Separate M=0,1 and M≥2.

**Required output:** A three-case expectation proof and an explicit certification-length choice.

**Prerequisites:** Geometric waiting time; GMW pairing extraction; Rare-event expectation

**Examiner follow-up:** Why would simply deleting the M=1 case change perfect simulation into an approximate claim?

<details>
<summary>Solution route / investigation plan</summary>

1. Every retry restores the same complete snapshot and tape, so M refers to one deterministic subset-response function and each attempt costs at most P(n,k). For M=0 emit the same partial abort view as the real prover. For M≥2, extraction is entered with probability p=M/2^k, and a fresh distinct answerable subset appears with probability (M−1)/2^k≥p/2. Conditional expected retries are at most 2/p, giving unconditional work O(P(n,k)).

2. For M=1 the entry probability is 2^(−k), and exhaustive classification contributes at most 2^(−k)D(n). Output the unique source bit if H matches one input; if it matches neither, output bit 0, exactly as prescribed in GMW’s prover and fallback. Permutation enumeration gives D(n)=2^O(n log n), so k≥ceil(log₂ D)+λ bounds this contribution by 2^(−λ). Interleaving search with retries preserves exact output behavior, including the rare unrelated-H case.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Graph nonisomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-gni--gni-rare-event-fallback-runtime)

---

## 8. Extraction requires the same first message

**Examiner challenge · counterexample · 35 minutes suggested**

ID: core-gmw-gni--gni-fixed-snapshot-extraction

A proposed GNI simulator resamples the malicious verifier’s random tape before requesting a second subset response. Audit the extraction argument by tracking H, the test pairs and every permutation’s domain and codomain. Give a verifier behavior for which two individually valid responses cannot be combined, and specify the exact snapshot that must be restored.

**Required output:** A typed failure example and a complete rewind-snapshot specification.

**Prerequisites:** Rewinding; Typed isomorphism composition; Verifier local state

**Examiner follow-up:** Could an explicitly provided isomorphism between the two middle graphs repair a mismatched composition?

<details>
<summary>Solution route / investigation plan</summary>

1. The extractor needs θ:G_b→T_(i,j) and η:H→T_(i,j) for the same H and the same labeled test graph. A verifier that generates new independently relabeled pairs and a new H on each tape produces valid certificates, but their permutations generally refer to different middle graphs. Composing their array encodings is not an isomorphism proof for the retained challenge.

2. Sample the verifier tape once, keep the complete prior-round public history, and restore its state immediately before the subset challenge while retaining the initial H and pairs. Only the subset is resampled. In later outer rounds the snapshot includes all earlier simulated responses; fixing merely the original input and random tape is not a sufficient description of the state being rewound.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Graph nonisomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-gni--gni-fixed-snapshot-extraction)

---

## 9. The pairing openings must preserve the hidden source

**Examiner challenge · proof · 50 minutes suggested**

ID: core-gmw-gni--gni-certification-source-hiding

On isomorphic inputs, prove that the honest verifier’s full GMW pairing-certification transcript reveals no information about its hidden GNI source bit, even when the prover chooses its subset after seeing H and all test pairs. Analyze separately indices opened to both inputs and indices linked to H, including their permutation distributions.

**Required output:** A conditional transcript-distribution proof for the full certification stage.

**Prerequisites:** Graph-isomorphism cosets; Pairing certification; Conditional distributions

**Examiner follow-up:** Which information becomes available if both opening modes for one index are disclosed in the same real execution?

<details>
<summary>Solution route / investigation plan</summary>

1. Condition on the initial labeled graphs. Since G₀ and G₁ share one isomorphism orbit, each hidden pair-order bit remains independent of those graphs. At an input-opening index the disclosed order bit and input-to-pair permutations do not depend on the hidden source. At an H-link index, the disclosed member index is the hidden source XOR an unrevealed independent order bit, hence is itself independent of the source.

2. Given the graph endpoints, the linking permutation is uniform among isomorphisms between them: compose independent uniform isomorphism cosets and use their equal sizes. This law remains independent of the source jointly across indices. A subset chosen from the initial message cannot expose an order bit and its H-link at the same index. Thus the final source guess still succeeds with probability at most one half on isomorphic inputs.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Graph nonisomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-gni--gni-certification-source-hiding)

---

## 10. Track imperfect permutation sampling through GNI

**Examiner challenge · proof · 40 minutes suggested**

ID: core-gmw-gni--gni-approximate-permutation-sampling

Suppose each relabeling permutation is sampled from a distribution within total variation ε of uniform. For the basic GNI test with a fair source bit, bound optimal one-round soundness on isomorphic graphs and k-round sequential soundness under fresh sampling. Give a strict-time Fisher–Yates implementation with an explicit cutoff error budget.

**Required output:** A robust soundness theorem and a strict-runtime sampling specification.

**Prerequisites:** Total variation; Bayes classification; Permutation generation

**Examiner follow-up:** Why does an arbitrary deterministic seed expansion not automatically satisfy the assumed total-variation premise?

<details>
<summary>Solution route / investigation plan</summary>

1. Pushing a distribution through relabeling cannot increase total variation. Each source’s challenge law is within ε of the common ideal orbit law, so their mutual distance is at most 2ε. With equal priors, optimal source prediction is (1+TV)/2, giving success at most 1/2+ε. Fresh conditional sampling yields at most (1/2+ε)^k for all-round acceptance.

2. Fisher–Yates needs at most n bounded-integer choices. Draw each by fair-bit rejection sampling; every trial succeeds with probability at least one half. Capping each choice at L trials and using a specified fallback permutation changes the permutation law by at most n2^(−L) under coupling. Choose L≥ceil(log₂(nk/η)) to make the probability of any sampling deviation across k rounds at most η.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Graph nonisomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-gni--gni-approximate-permutation-sampling)

---

## 11. Audit the direct-certificate shortcut

**Research seminar · counterexample · 45 minutes suggested**

ID: core-gmw-gni--gni-certificate-reveals-source

Replace GMW’s pairing certification by an honest verifier sending H=πG_b together with its actual source b and permutation π, so the prover can verify that H is legitimate. Analyze completeness, soundness and the need for source-hiding certification. Then compare revealing a certificate in the real protocol with extracting it only inside a simulator.

**Required output:** A complete cheating strategy and a real-execution versus simulator-extraction comparison.

**Prerequisites:** GNI hidden-source soundness; Certificate verification; Simulation versus real execution

**Examiner follow-up:** What property beyond ordinary certificate validity would a replacement certification protocol need?

<details>
<summary>Solution route / investigation plan</summary>

1. On nonisomorphic inputs the protocol is complete, but on isomorphic inputs the prover can simply echo the disclosed source b and be accepted with probability one. Legitimacy of H is therefore not the only requirement: the honest verifier’s certification must avoid disclosing its source on the false-statement inputs used in the soundness proof.

2. The pairing construction provides one opening mode per index in a real execution. A simulator can rewind a fixed verifier snapshot to obtain incompatible modes and extract a source witness, while the real prover receives only its single chosen subset’s answer. Giving the real prover the extractor’s second transcript changes the information available to the strategy and can destroy soundness. This is a protocol-modification audit, not a claim that every NP certificate is inherently unsuitable.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Graph nonisomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-gni--gni-certificate-reveals-source)

---

## 12. Generalize pairing certification to nonuniform subsets

**Research seminar · research-extension · 55 minutes suggested**

ID: core-gmw-gni--gni-biased-subset-certification

Let subset challenges follow an efficiently samplable distribution μ with largest atom a. Prove an invalid-H acceptance bound and an expected simulator-work bound in terms of a and exhaustive-search cost D. Specialize to independently including each test index with probability θ and derive a sufficient k for a target rare-case contribution 2^(−λ).

**Required output:** A nonuniform certification theorem and an explicit θ-versus-k tradeoff.

**Prerequisites:** Pairing extraction; Min-entropy; Rare-event simulation

**Examiner follow-up:** How does certification length deteriorate as θ tends to zero or one?

<details>
<summary>Solution route / investigation plan</summary>

1. An unrelated H admits at most one answerable subset, so its passing probability is at most a. For a fixed message with total answerable mass p, after an initial accepted subset I, a fresh different answerable challenge has probability at least p−μ(I)≥p−a. If p≥2a, extraction costs O(1/p) conditionally and O(1) after multiplying by entry probability.

2. When p<2a, exhaustive fallback contributes at most 2aD to unconditional expected work. For independent inclusion probability θ, a=max(θ,1−θ)^k. It suffices that k·log₂(1/max(θ,1−θ))≥log₂ D+λ+1. Sampling the same μ in the simulator preserves the real challenge law; source-hiding soundness must still be checked for the full certification transcript, not inferred from this runtime calculation alone.

</details>

[Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity · Graph nonisomorphism](https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gmw-gni--gni-biased-subset-certification)
