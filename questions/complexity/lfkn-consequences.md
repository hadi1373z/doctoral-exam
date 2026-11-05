# LFKN: P^#P, PH, program checking and relativization

Closure and consequences · Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-lfkn-consequences)

## 1. LFKN: P^#P, PH, program checking and relativization

**Doctoral proof · proof · 45 minutes suggested**

ID: core-lfkn-consequences--source-proof

Fill in the reduction from a polynomial-time computation with counting-oracle access to an interactive proof. Handle adaptive queries and determine how small each subprotocol’s error must be. Identify which steps are algebraic rather than black-box relativizing.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** The LFKN algebraic protocol verifies counting computations; combined with counting completeness and Toda’s theorem it yields interactive proofs for PH.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. An honest transcript fixes the outer machine’s next query. If a cheating prover supplies an incorrect value, verify that claim with the counting protocol before trusting its consequences.

2. There are at most polynomially many such checks; set each error below the desired total error divided by a bound on their count. Conditional soundness against the current history is sufficient for the union bound.

3. Toda’s PH⊆P^#P containment is a separate ingredient. The conclusion PH⊆IP does not make IP=NP and does not automatically hold for an arbitrary common oracle.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Closure and consequences](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-consequences--source-proof)

---

## 2. Why can adaptive queries still be checked?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-lfkn-consequences--oral-check-1

Why can adaptive queries still be checked?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The LFKN algebraic protocol verifies counting computations; combined with counting completeness and Toda’s theorem it yields interactive proofs for PH.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Condition on the transcript before each claim; the local protocol’s soundness holds for every fixed false claim and cheating continuation.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Closure and consequences](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-consequences--oral-check-1)

---

## 3. Why does a relativized separating oracle not refute LFKN?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-lfkn-consequences--oral-check-2

Why does a relativized separating oracle not refute LFKN?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The LFKN algebraic protocol verifies counting computations; combined with counting completeness and Toda’s theorem it yields interactive proofs for PH.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. The unrelativized arithmetization exploits structure that arbitrary oracle gates need not provide.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Closure and consequences](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-consequences--oral-check-2)

---

## 4. Compose counting verification with an outer randomized computation

**Doctoral proof · proof · 40 minutes suggested**

ID: core-lfkn-consequences--count-randomized-outer-machine

An outer polynomial-time randomized oracle machine makes at most Q(n) adaptive counting queries and has error α(n). Each answer-verification subprotocol has honest rejection probability at most β and false-answer acceptance probability at most δ, conditionally on every prior history. Derive completeness and soundness of the composite verifier, including randomness, bit lengths and amplification costs.

**Required output:** Two explicit probability bounds and a polynomial-resource composition theorem.

**Prerequisites:** Adaptive oracle computations; Conditional soundness; Union bounds

**Examiner follow-up:** Which term vanishes when the counting protocol has perfect completeness?

<details>
<summary>Solution route / investigation plan</summary>

1. Couple the honest execution with the ideal outer oracle computation using the same outer random tape. With probability at least 1−α it takes an accepting ideal path; at most Qβ additional probability is lost to honest subprotocol failures. Thus completeness is at least 1−α−Qβ, assuming correctly encoded answers and a verifier that rejects malformed or out-of-range counts.

2. For a NO input, if no false oracle answer is accepted, every completed path agrees with an ideal outer path, whose acceptance probability is at most α. A first-incorrect-answer argument adds at most Qδ. Fresh verification randomness must remain valid conditional on the outer history. Count the polynomial output bits of each #P query and the polynomial overhead needed to achieve β,δ of order η/Q.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Closure and consequences](https://lance.fortnow.com/papers/files/ip.pdf) · [Lund–Fortnow–Karloff–Nisan, Algebraic Methods for Interactive Proof Systems](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-consequences--count-randomized-outer-machine)

---

## 5. Verify weighted counts and signed gaps

**Doctoral proof · construction · 35 minutes suggested**

ID: core-lfkn-consequences--count-weighted-gap-functions

For a polynomial-time predicate R(x,y), |y|=p(n), and a polynomial-time nonnegative integer weight W(x,y)<2^b(n), construct a #P representation of ∑_y R(x,y)W(x,y). Then design an interactive verifier for a claimed difference of two such sums. Give range bounds, witness lengths, number of counting checks and the total error.

**Required output:** An explicit counting machine and a signed-value verification protocol.

**Prerequisites:** Definition of #P; Binary integer encodings; Counting verification

**Examiner follow-up:** How do you encode a signed weight without permitting a negative number of accepting paths?

<details>
<summary>Solution route / investigation plan</summary>

1. Use accepting witnesses (y,z) with |z|=b(n), requiring R(x,y) and the integer z<W(x,y). Exactly W(x,y) choices of z accept for each eligible y. The resulting count is below 2^(p+b), and the construction runs in polynomial time in the original input length.

2. For a signed gap g=f₀−f₁, request and verify both nonnegative counts, range-check them, and subtract using p+b+O(1) bits. At least one false count must have passed whenever the verified difference is wrong, so two checks of error δ give error at most 2δ. A negative gap is not itself a #P count merely because its two summands are; name the signed-function model separately.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Closure and consequences](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-consequences--count-weighted-gap-functions)

---

## 6. Sample a witness using certified branch counts

**Doctoral proof · construction · 40 minutes suggested**

ID: core-lfkn-consequences--count-certified-witness-sampling

Assume R(x,y) has a positive total count C of witnesses y∈{0,1}^p, and exact prefix-count verification has perfect completeness for the honest prover. Design an honest-prover procedure that samples a uniformly random witness using at most 2p+1 count claims and fresh branch-sampling coins. Analyze exact rational sampling, zero-count branches and malicious selective aborts.

**Required output:** Sampling pseudocode, a telescoping uniformity proof and an abort-bias example.

**Prerequisites:** Self-reducibility; Conditional probabilities; Counting protocols

**Examiner follow-up:** What output convention permits a clean coupling statement without conditioning away malicious aborts?

<details>
<summary>Solution route / investigation plan</summary>

1. First certify the positive total count C. At a reached prefix u certify extension counts c₀,c₁, check their sum against the previous positive count, and use fresh independent coins to choose branch b with probability c_b/(c₀+c₁). The probabilities along every witness path telescope to 1/C. Perfect completeness ensures honest verification never rejects and thus introduces no prefix-dependent selection; zero-count branches are never taken.

2. Sample an integer uniformly below c₀+c₁ by rejection from enough fair bits; expected trials are below two and arithmetic uses O(p) count bits. This exact sampler has expected polynomial time. If a separate instance has C=0, it can report no witness after certification rather than sample. False accepted counts have a conditional union-bound budget, but a malicious prover can abort on selected prefixes even while claiming true counts. Uniformity conditioned on completion therefore does not follow from soundness.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Closure and consequences](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-consequences--count-certified-witness-sampling)

---

## 7. Why flipping the verifier’s output is insufficient

**Examiner challenge · counterexample · 30 minutes suggested**

ID: core-lfkn-consequences--count-complement-quantifiers

Write the prover and probability quantifiers for an interactive proof of L, and audit the proposed proof of its complement obtained by flipping acceptance and rejection. Give a one-message counterexample. Then explain how a verified exact count can support both the predicates f(x)=0 and f(x)>0 without using that invalid transformation.

**Required output:** Formal quantifiers, a minimal counterexample and two counting-based decision verifiers.

**Prerequisites:** Completeness and soundness quantifiers; Nonnegative counting functions

**Examiner follow-up:** What stronger condition on all prover strategies would make output flipping safe?

<details>
<summary>Solution route / investigation plan</summary>

1. Completeness asserts existence of an accepting prover on YES inputs; it does not say every prover accepts. A verifier that accepts when its single received bit is 1 and rejects when it is 0 has a perfectly successful prover, yet its flipped verifier also has one. Replacing existentially successful behavior by the opposite output does not produce a universal soundness guarantee.

2. For an exactly verifiable nonnegative f, request one bounded-range value a, verify it, and then evaluate either a=0 or a>0 deterministically. A wrong decision requires an incorrectly certified value. The special function-verification structure supplies both predicates; it does not justify a general syntactic complementation rule for arbitrary interactive protocols.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Closure and consequences](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-consequences--count-complement-quantifiers)

---

## 8. A low-degree oracle extension need not be cheaply evaluable

**Examiner challenge · proof · 35 minutes suggested**

ID: core-lfkn-consequences--count-oracle-extension-cost

Let O:{0,1}^m→{0,1} be an arbitrary black-box oracle and let Õ be its unique multilinear extension over an odd-characteristic field. Evaluate Õ at (1/2,…,1/2). Prove a deterministic black-box query lower bound for exact evaluation and explain what this obstruction does, and does not, establish about relativizing algebraic protocols.

**Required output:** Interpolation calculation, query lower bound and a carefully delimited relativization conclusion.

**Prerequisites:** Multilinear interpolation; Oracle query models; Adversary arguments

**Examiner follow-up:** How does the argument change in characteristic two, where 1/2 is unavailable?

<details>
<summary>Solution route / investigation plan</summary>

1. The interpolation weights at this point are all 2^(−m), so Õ(1/2,…,1/2)=2^(−m)∑_b O(b) in the field. Any deterministic evaluator that leaves an address unqueried has identical observations on two oracles differing only there, yet their extension values differ by the nonzero field element 2^(−m). Exact evaluation therefore requires all 2^m queries in the worst case.

2. The extension still has individual degree one and total degree at most m. Thus the problem is not absence of a low-degree formal extension but lack of an efficient black-box evaluation procedure at non-Boolean points. This explains a concrete obstacle to inserting arbitrary oracle gates into an algebraic verifier; it is not by itself a complete oracle separation between complexity classes.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Closure and consequences](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-consequences--count-oracle-extension-cost)

---

## 9. Turn a permanent program into a checker’s prover

**Examiner challenge · synthesis · 40 minutes suggested**

ID: core-lfkn-consequences--count-stateful-program-checker

A program P answers permanent queries over F_q and may retain state. Specify how a checker can use evaluation queries to P to generate every bounded-degree polynomial message in an LFKN execution for the initial answer P(A). Prove the checker’s two guarantees and state exactly what a rejection certifies about P.

**Required output:** Checker pseudocode and logically exact accept/reject guarantees.

**Prerequisites:** LFKN compression; Interpolation from values; Program checking

**Examiner follow-up:** Why does interpolation require a trusted degree bound on the true restriction rather than a promise that P is a low-degree program?

<details>
<summary>Solution route / investigation plan</summary>

1. For a degree-d matrix restriction, ask P for its permanent at d+1 distinct interpolation nodes and interpolate the polynomial message. Expansion claims are likewise obtained by querying the minors. If every answer P gives is correct, these messages are truthful and the checker accepts the initial answer with perfect completeness, apart from any explicitly introduced sampling cutoff.

2. If P(A) is wrong, all subsequent stateful answers constitute a legal adaptive cheating prover, so LFKN soundness still bounds acceptance. A rejection proves that at least one answer in the executed collection was incorrect; it need not identify which query was wrong or provide an efficiently checkable counterexample with a known correct permanent. Specify whether correctness refers to a fixed function or to every response in a stateful run.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Closure and consequences](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-consequences--count-stateful-program-checker)

---

## 10. Certify zero through several possible characteristics

**Examiner challenge · proof · 35 minutes suggested**

ID: core-lfkn-consequences--count-random-prime-zero-test

Let g be an integer gap with |g|<2^b. The verifier samples uniformly from a public list of K distinct primes and interactively verifies a claimed residue g mod p using a subprotocol of soundness δ. Design a test for g=0, bound its error when g≠0, and distinguish this test from reconstructing the integer g.

**Required output:** A zero-test protocol and an explicit error and resource budget.

**Prerequisites:** Prime divisors; Modular arithmetic; Counting-gap verification

**Examiner follow-up:** Give a sharper bound when every prime in the list is at least P_min.

<details>
<summary>Solution route / investigation plan</summary>

1. A nonzero integer of magnitude below 2^b has fewer than b distinct prime divisors, since the product of b distinct primes is at least 2^b. Thus at most b entries of any distinct-prime list divide g. Accept only after a residue-zero claim is verified; for g≠0, acceptance is at most b/K+δ.

2. Choosing K≥2b/η and δ≤η/2 gives error at most η, assuming the supplied list and modular-verification reductions have polynomial total size and cost. On g=0 every prime gives a true zero residue. No integer reconstruction occurs: the random choice limits the chance of choosing a characteristic that annihilates this particular nonzero gap. A prover-selected prime would not provide that guarantee.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Closure and consequences](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-consequences--count-random-prime-zero-test)

---

## 11. Allocate verification error under an adaptive query schedule

**Research seminar · research-extension · 45 minutes suggested**

ID: core-lfkn-consequences--count-anytime-error-budgets

A computation may make an initially unknown polynomial number of oracle queries. Give an error schedule δ_i that guarantees total false acceptance at most η for every stopping time. Then, for known query costs a_i>0 and verification work modeled by a_i log(1/δ_i), solve the continuous optimal budget allocation and explain its limitations for adaptive queries.

**Required output:** An anytime theorem, an optimized finite schedule and a concrete comparison instance.

**Prerequisites:** Summable series; Conditional union bounds; Constrained optimization

**Examiner follow-up:** How should the allocation change if a subprotocol requires δ_i≤1/3 before amplification?

<details>
<summary>Solution route / investigation plan</summary>

1. Use δ_i=η/[i(i+1)]. Its sum over all i≥1 is η, so every finite or adaptively stopped execution has the same first-error bound, without knowing its final query count. For polynomially many queries, log(1/δ_i)=O(log i+log(1/η)), preserving polynomial overhead under the stated cost model.

2. For a fixed finite cost list, Lagrange multipliers give δ_i=ηa_i/∑_j a_j, subject to any extra upper bounds on admissible error. The objective and constraint show why expensive checks receive larger budgets. This optimization is an offline model, not automatically an implementable rule when future costs are unknown or depend on unverified answers; compare it against the valid anytime schedule on a specified adversarial query family.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Closure and consequences](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-consequences--count-anytime-error-budgets)

---

## 12. Audit reuse of a public algebraic challenge

**Research seminar · research-extension · 40 minutes suggested**

ID: core-lfkn-consequences--count-reused-challenge-attack

Consider a toy verifier for claims a=f(0), where the fixed polynomial f≡0 is directly evaluable. It receives a degree-one g, checks g(0)=a, reveals uniform r∈F_q, and checks g(r)=f(r). Show why reusing r after one honest invocation breaks a later false-claim check. Generalize the audit to adaptive counting subprotocols and give a repair.

**Required output:** A complete cheating transcript and a reusable conditional-randomness audit criterion.

**Prerequisites:** Polynomial root soundness; Adaptive histories; Fresh randomness

**Examiner follow-up:** Can challenge reuse be safe for genuinely simultaneous, nonadaptive polynomial messages fixed before any challenge is revealed?

<details>
<summary>Solution route / investigation plan</summary>

1. An honest first invocation uses a=0,g=0 and reveals r. If r≠0, a later prover claiming a=1 can send g(X)=1−X/r, which passes both checks at the reused point. The second false assertion is accepted with probability at least 1−1/q, whereas an independently sampled challenge would collide with this fixed nonzero degree-one discrepancy at only one point.

2. The toy language is deliberately easy: it isolates a failure in the conditional soundness argument rather than establishing hardness. In a composed verifier, check whether each challenge retains its required distribution after all previous transcripts and the current polynomial are fixed. Allocate fresh independent samples, or prove a replacement randomness property strong enough for that conditional statement; marginal uniformity alone is insufficient.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Closure and consequences](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-consequences--count-reused-challenge-attack)
