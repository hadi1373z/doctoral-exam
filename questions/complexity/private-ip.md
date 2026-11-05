# IP ⊆ PSPACE: private information changes the recurrence

Upper bound and precision · Shamir · IP = PSPACE

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-private-ip)

## 1. IP ⊆ PSPACE: private information changes the recurrence

**Doctoral proof · proof · 45 minutes suggested**

ID: core-private-ip--source-proof

Repair the naive max/average game-tree proof for a private-coin verifier. Give a one-bit example where E[max] differs from max[E]. Explain how conditional random-tape weights and exact acceptance numerators can be recomputed in polynomial space.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** A polynomial-space simulation must optimize prover moves using only the public transcript; revealing private verifier coins to the maximization is unsound.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. Let a hidden fair bit be b and accept when the prover guesses b. A legal prover succeeds with probability 1/2, whereas maximizing separately after revealing b gives E[max]=1.

2. The strategy depends on the observed transcript, not on an unobserved private verifier configuration. Enumerate consistent random tapes to compute transition probabilities; do not give their identities to the maximization.

3. A useful integer recurrence is F(h)=the maximum number of accepting tapes consistent with public history h. At a prover move take max_y F(hy); at a visible verifier message sum F(hz) over the messages z, whose consistent-tape sets partition the current set. At a terminal history, enumerate and count accepting consistent tapes.

4. With a polynomial bound R on all private random bits, each F is at most 2^R and uses O(R) bits. The transcript, loop counters and recursive stack all have polynomial size. The root value divided by 2^R is the optimal legal acceptance probability.

</details>

[Shamir · IP = PSPACE · Upper bound and precision](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-private-ip--source-proof)

---

## 2. Why does time blow-up not invalidate the proof?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-private-ip--oral-check-1

Why does time blow-up not invalidate the proof?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A polynomial-space simulation must optimize prover moves using only the public transcript; revealing private verifier coins to the maximization is unsound.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. PSPACE constrains workspace, not polynomial running time. Exponential branching can be re-enumerated.

</details>

[Shamir · IP = PSPACE · Upper bound and precision](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-private-ip--oral-check-1)

---

## 3. Would the public-coin recurrence be simpler?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-private-ip--oral-check-2

Would the public-coin recurrence be simpler?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A polynomial-space simulation must optimize prover moves using only the public transcript; revealing private verifier coins to the maximization is unsound.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Yes. Public randomness is part of the transcript, so averaging and subsequent prover choices can be ordered directly.

</details>

[Shamir · IP = PSPACE · Upper bound and precision](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-private-ip--oral-check-2)

---

## 4. Solve an unequal posterior information-set game

**Doctoral proof · proof · 30 minutes suggested**

ID: core-private-ip--private-and-posterior-game

A verifier chooses independent uniform bits u,v, sends z=u∧v, receives one bit y and accepts iff y=u⊕v. Enumerate the private tapes compatible with each public history and compute an optimal legal strategy and its exact acceptance probability. Compare conditioning on z with giving the prover the full tape, and express the calculation using integer accepting-tape counts.

**Required output:** A four-tape table, an optimal public-history strategy and an exact value.

**Prerequisites:** Conditional probability; Private-coin strategies; Information sets

**Examiner follow-up:** What is the optimum if the verifier instead sends u∨v?

<details>
<summary>Solution route / investigation plan</summary>

1. For z=0 the compatible tapes are 00,01,10; their target parities are 0,1,1, so y=1 wins on two of three. For z=1 only tape 11 is possible and y=0 wins. The unconditional optimum is 2/4+1/4=3/4. Maximizing separately for each hidden tape would incorrectly give value one.

2. The posterior is uniform within a compatible-tape set here, but the two public messages have probabilities 3/4 and 1/4. Count two accepting tapes in the first cell and one in the second, then normalize once by four. This concrete calculation separates local conditional probabilities, public-message weights and the requirement that one action serve every tape in the same information set.

</details>

[Shamir · IP = PSPACE · Upper bound and precision](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-private-ip--private-and-posterior-game)

---

## 5. Eliminate the prover’s private randomization

**Doctoral proof · proof · 35 minutes suggested**

ID: core-private-ip--private-pure-strategy-suffices

For a fixed input, normalize a polynomial-round private-coin verifier to a finite protocol tree with bounded messages. Prove that the maximum acceptance probability over randomized, computationally unbounded provers is attained by a deterministic function of the public transcript. Explain why this does not require storing the entire optimal strategy in polynomial space.

**Required output:** A finite-policy proof and an explanation of implicit versus explicit strategy storage.

**Prerequisites:** Finite extensive-form games; Convex combinations; Public transcripts

**Examiner follow-up:** Why is fixing independent actions separately at hidden verifier configurations a different, invalid derandomization?

<details>
<summary>Solution route / investigation plan</summary>

1. A randomized prover induces a distribution over deterministic contingent policies: fix all of its random choices, including choices at histories not reached in the current execution. Its acceptance probability is the average value of these policies. Since the finite set of deterministic policies has a maximum, randomization cannot exceed that maximum. Equivalently choose maximizing actions recursively at transcript information sets.

2. The deterministic policy is constrained by observable history, not by the verifier’s hidden configuration. It may have an exponentially large table, but a polynomial-space algorithm can recompute the value of a history and enumerate its possible next messages whenever needed. Polynomial space concerns the workspace of this repeated computation, not the size of a simultaneously stored policy certificate.

</details>

[Shamir · IP = PSPACE · Upper bound and precision](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-private-ip--private-pure-strategy-suffices)

---

## 6. Recognize compatible private tapes by replay

**Doctoral proof · construction · 35 minutes suggested**

ID: core-private-ip--private-replay-consistency-predicate

Fix a polynomial-time verifier V using at most R(n) fair bits, padded to a complete R-bit tape. For an encoded public history h, construct a polynomial-time predicate C(h,r) saying that tape r is compatible with h. Include malformed messages, early halting and unreachable histories. Show how this predicate supports counting compatible tapes without materializing their set.

**Required output:** Replay pseudocode and precise conventions for partial and terminal histories.

**Prerequisites:** Deterministic simulation with fixed randomness; Transcript encodings; Counting predicates

**Examiner follow-up:** Why should a replay not guess new prover messages to fill gaps in a fully specified history?

<details>
<summary>Solution route / investigation plan</summary>

1. Replay V on input x and tape r, supplying exactly the prover messages written in h at their tagged turns. Compare each emitted verifier message with the corresponding entry of h, and reject a replay that halts too early, expects a different message type or encounters an invalid encoding. Use explicit terminal symbols and a fixed stage convention so partial histories have an unambiguous meaning.

2. For fixed h,r the replay takes polynomial time because V does. Hence |S(h)|=∑_r C(h,r) is the count of witnesses of a polynomial-time predicate, and can be computed by an exponential enumeration using an R-bit counter. A zero count means the public history is unreachable. The recurrence can invoke this membership test repeatedly; it does not need an exponential array of compatible tapes.

</details>

[Shamir · IP = PSPACE · Upper bound and precision](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-private-ip--private-replay-consistency-predicate)

---

## 7. Count unused random suffixes correctly

**Examiner challenge · proof · 35 minutes suggested**

ID: core-private-ip--private-unused-coin-multiplicity

A verifier has a three-bit tape. If its first bit is zero it accepts immediately; otherwise it reads the remaining two bits and accepts iff both are one. Compute acceptance by complete-tape counting, then generalize to a private-coin interaction with adaptive coin consumption and early termination. State a normal form in which verifier-message branches partition compatible tapes.

**Required output:** An exact eight-tape count and a halting-safe recurrence specification.

**Prerequisites:** Padded random tapes; Terminal histories; Integer recurrences

**Examiner follow-up:** How does rejection sampling with a strict runtime cutoff fit the padded-tape convention?

<details>
<summary>Solution route / investigation plan</summary>

1. The immediate-accept branch corresponds to four complete tapes, not one. The later-accept branch contributes only 111, so acceptance is 5/8. Treating each terminal execution path as one equally likely outcome would incorrectly assign probabilities, because paths consume different numbers of random bits.

2. Pad every execution to R fair bits even when suffix bits are unused. Add tagged visible terminal messages and, if necessary, fixed-length stages, so a verifier step partitions S(h) into compatible child sets. At a terminal child count all accepting compatible complete tapes; sum at verifier branches and maximize over one transcript-dependent prover action. Counts stay below 2^R, with O(R) bits, while replay and recursive storage remain polynomial.

</details>

[Shamir · IP = PSPACE · Upper bound and precision](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-private-ip--private-unused-coin-multiplicity)

---

## 8. Equal-size posterior cells can have different values

**Examiner challenge · counterexample · 30 minutes suggested**

ID: core-private-ip--private-cardinality-is-not-state

A verifier chooses r uniformly from {00,01,10,11}, reveals its first bit z and accepts a prover bit y iff y=f(r), where f(00)=f(01)=f(10)=0 and f(11)=1. Show why retaining only the number of compatible tapes loses information even though both histories have two tapes and the same public control state. Propose a sufficient representation.

**Required output:** Two conditional values and a sufficient-state criterion for a simulator.

**Prerequisites:** Information sets; Conditional acceptance; State compression

**Examiner follow-up:** Formulate an observation-preserving bijection of tape sets that would justify merging two histories.

<details>
<summary>Solution route / investigation plan</summary>

1. For z=0, y=0 succeeds on both compatible tapes, giving conditional value one. For z=1, either response succeeds on only one of the two tapes, giving conditional value one half. The two cells have equal size but different distributions of future acceptance behavior, so cardinality alone is not a sufficient state.

2. A sound implicit representation retains h and a replay predicate for S(h), together with the verifier description and stage. This permits enumerating each tape’s future behavior without exposing tape identity to the prover’s maximization. More aggressive compression needs an equivalence that preserves future observations and acceptance under every legal action, rather than an empirical match of cell sizes.

</details>

[Shamir · IP = PSPACE · Upper bound and precision](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-private-ip--private-cardinality-is-not-state)

---

## 9. Bound the bits needed for exact acceptance comparison

**Examiner challenge · proof · 35 minutes suggested**

ID: core-private-ip--private-exact-threshold-precision

A padded verifier uses R fair bits, and its optimal legal acceptance probability is K/2^R. Show how to compare it with 2/3 using polynomial-size integers, derive a lower bound on a nonzero difference from 2/3, and give a family showing why retaining only O(log n) fractional bits can be unsafe when R is polynomial in n.

**Required output:** An exact comparison algorithm, a separation bound and a coarse-precision counterexample.

**Prerequisites:** Dyadic rationals; Exact integer arithmetic; Promise gaps

**Examiner follow-up:** How does a promise gap of at least 1/poly(n) simplify approximate evaluation?

<details>
<summary>Solution route / investigation plan</summary>

1. Compare 3K with 2^(R+1); no rational arithmetic is necessary. Since a power of two is not divisible by three, equality cannot occur and the probability gap is at least 1/(3·2^R). The recurrence’s counters and this final comparison use O(R) bits.

2. For a threshold such as one half, acceptance values (2^(R−1)±1)/2^R differ by only 2^(1−R), and a polynomial-time verifier can realize these values by comparing its random tape with an explicitly encoded threshold. A precision budget of O(log n) can round both to the same value when R grows faster than log n. Polynomially many precision bits are sufficient; a fixed coarse precision rule is not.

</details>

[Shamir · IP = PSPACE · Upper bound and precision](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-private-ip--private-exact-threshold-precision)

---

## 10. Extract an optimal next action without storing its policy

**Examiner challenge · construction · 40 minutes suggested**

ID: core-private-ip--private-recompute-optimal-policy

Assume the exact compatible-tape value recurrence is available in polynomial space. Construct a polynomial-space transducer that, given a reachable prover-turn history h, outputs the lexicographically first optimal next message. Prove that repeated calls along a run define one legal optimal strategy, and bound the explicit table size that the transducer avoids storing.

**Required output:** A next-action algorithm, a legality proof and an explicit space-versus-table comparison.

**Prerequisites:** Polynomial-space recomputation; Finite message alphabets; Tie breaking

**Examiner follow-up:** Why may unreachable histories be assigned arbitrary actions without changing the root value?

<details>
<summary>Solution route / investigation plan</summary>

1. Enumerate all padded next messages y of length at most a(n), recompute the integer continuation value F(hy), and retain the largest value and its lexicographically first maximizer. The enumeration counter, one candidate message, the best value and one recursive computation all need polynomial space. Exponential recomputation time is allowed.

2. The chosen action depends only on h and a fixed tie rule, so revisiting the same public history gives the same answer across all compatible hidden tapes. Induction on remaining stages shows the resulting policy attains F(h). With public-history length at most H(n), a full next-action table can require O(a(n)2^H(n)) bits; the transducer outputs only the currently needed entry.

</details>

[Shamir · IP = PSPACE · Upper bound and precision](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-private-ip--private-recompute-optimal-policy)

---

## 11. Generalize the recurrence to succinct integer tape weights

**Research seminar · research-extension · 45 minutes suggested**

ID: core-private-ip--private-weighted-tape-generalization

Replace a uniform R-bit tape by a distribution Pr[r]=w(r)/W, where w(r) is a nonnegative B-bit integer computable in polynomial time and W=∑_r w(r)>0. Prove a polynomial-space upper bound for the optimal public-history prover value in this model. State which encoding property prevents denominator growth.

**Required output:** A weighted recurrence, bit-complexity proof and an explicit scope statement.

**Prerequisites:** Weighted counting; Private information sets; Exact rational normalization

**Examiner follow-up:** Can zero-weight tapes be omitted from the information-set recurrence without changing any legal strategy constraint?

<details>
<summary>Solution route / investigation plan</summary>

1. Define F(h) as the maximum total weight of accepting tapes compatible with h. Use a weighted sum at terminal histories, a sum over disjoint visible verifier-message cells, and a maximum over legal prover messages. At the root the optimal acceptance probability is F(∅)/W. Both W and every continuation count are below 2^(R+B), so O(R+B) bits suffice.

2. Compute weights and compatibility on demand during tape enumeration; never store their entire list. This proof uses a single globally specified integer weight for each complete tape. It does not automatically cover an arbitrary collection of history-dependent rational transition probabilities by asserting that their common denominator is small: that separate representation requires its own bit bound or a justified approximation analysis.

</details>

[Shamir · IP = PSPACE · Upper bound and precision](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-private-ip--private-weighted-tape-generalization)

---

## 12. Quantify the power of leaking a few hidden bits

**Research seminar · research-extension · 50 minutes suggested**

ID: core-private-ip--private-bounded-leakage-factor

At publicly specified insertion opportunities, a modified verifier additionally leaks information about its private tape; original messages and acceptance are otherwise unchanged. Require the complete leakage transcript, including payloads, timing, lengths and absence of messages, to belong to a fixed set Z with |Z|≤2^ℓ. Prove that optimal acceptance grows by at most a factor 2^ℓ, capped at one, and give a tight family.

**Required output:** A strategy-partition proof, a tight example and a precise leakage-model specification.

**Prerequisites:** Public-history strategies; Partition arguments; Conditional leakage

**Examiner follow-up:** How should variable-length leakage strings be padded so the number of possible complete leakage transcripts is bounded correctly?

<details>
<summary>Solution route / investigation plan</summary>

1. For each complete leakage transcript z∈Z, construct an original-protocol strategy that acts as if it received z at its encoded insertion opportunities. On executions whose actual leakage transcript equals z, induction on the public interaction shows its actions match. Acceptance together with this particular z has probability at most the original optimal value. Summing over the fixed set Z gives the factor |Z|≤2^ℓ.

2. The assumption bounds all observable leakage transcripts, not only payload bits: timing and length must be included in an actual bounded encoding or otherwise counted in Z. A Shannon-entropy or mutual-information bound alone does not establish this cardinality bound. For tightness, hide a uniform R-bit string and accept only an exact guess; revealing ℓ fixed coordinates has 2^ℓ possible complete transcripts and raises value from 2^(−R) to 2^(ℓ−R).

</details>

[Shamir · IP = PSPACE · Upper bound and precision](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-private-ip--private-bounded-leakage-factor)
