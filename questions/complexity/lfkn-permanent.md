# LFKN: verify the permanent, not just a Boolean sum

Permanent protocol · Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-lfkn-permanent)

## 1. LFKN: verify the permanent, not just a Boolean sum

**Doctoral proof · proof · 45 minutes suggested**

ID: core-lfkn-permanent--source-proof

Describe the LFKN permanent-verification protocol with message order, degree bounds and random-point compression. Account for the total error over all matrix sizes and explain how an exact integer claim is recovered from finite-field checks.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** The permanent polynomial permits recursive expansion and interpolation-based compression of many subclaims into one randomly chosen smaller claim.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. If a matrix curve has entry degree at most n−1, its (n−1)-dimensional permanent has degree at most (n−1)². This is polynomial and can be represented by coefficients.

2. The prover commits to the entire univariate polynomial before the fresh point is sampled. A false restricted polynomial collides with the truth at at most its degree many field points.

3. Recursing shrinks matrix size; sum the per-level degree/field-size errors. For a 0–1 permanent, 0≤perm(A)≤n!, so use enough field size or enough modular information to distinguish possible integer values.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Permanent protocol](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-permanent--source-proof)

---

## 2. Why is “the verifier computes the final permanent” circular?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-lfkn-permanent--oral-check-1

Why is “the verifier computes the final permanent” circular?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The permanent polynomial permits recursive expansion and interpolation-based compression of many subclaims into one randomly chosen smaller claim.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. The verifier only computes the constant-size base case. Each compression must reduce matrix dimension.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Permanent protocol](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-permanent--oral-check-1)

---

## 3. Can the prover see the random point before sending coefficients?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-lfkn-permanent--oral-check-2

Can the prover see the random point before sending coefficients?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The permanent polynomial permits recursive expansion and interpolation-based compression of many subclaims into one randomly chosen smaller claim.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. That would let it interpolate a lie through the test point and destroy the root-bound argument.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Permanent protocol](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-permanent--oral-check-2)

---

## 4. Balance the minor-compression tree

**Doctoral proof · construction · 40 minutes suggested**

ID: core-lfkn-permanent--lfkn-balanced-compression

At matrix dimension k, expansion produces k claimed permanents of (k−1)×(k−1) matrices over F_q. Replace sequential pairwise compression by a balanced binary tree, sending every polynomial at a tree level before sampling that level’s fresh points. Compare sequential, balanced and one-curve compression in rounds, coefficients, field operations and total soundness degree budget through dimension n.

**Required output:** Three-column resource table and a conditional soundness proof for the balanced protocol.

**Prerequisites:** Permanent expansion; Polynomial root bound; Binary trees

**Examiner follow-up:** Can independent challenges at one tree level be replaced by one shared challenge without changing the union-bound proof?

<details>
<summary>Solution route / investigation plan</summary>

1. A pairwise merge at this stage uses a degree-at-most k−1 polynomial. There are k−1 merges regardless of the tree shape, so the sum of discrepancy degrees is (k−1)². Independent subtrees can be processed together; a balanced tree has ceil(log₂ k) layers. Conditioning on all messages already fixed at a layer permits a union bound without assuming that cheating events are independent.

2. Summing over k gives O(n²), O(n log n) and O(n) communication rounds for sequential merges, balanced merges and the degree-(k−1)² interpolation curve respectively. All three send O(n³) field elements in this direct implementation and have O(n³/q) soundness error. Count evaluation/interpolation work separately from message length and multiply field-element counts by ceil(log₂ q) for bit communication.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Permanent protocol](https://lance.fortnow.com/papers/files/ip.pdf) · [Lund–Fortnow–Karloff–Nisan, Algebraic Methods for Interactive Proof Systems](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-permanent--lfkn-balanced-compression)

---

## 5. Make the one-step root bound tight

**Doctoral proof · construction · 30 minutes suggested**

ID: core-lfkn-permanent--lfkn-sharp-root-loss

Fix d≥1 and a prime power q>d+2. In a merge of d×d matrices take C=0 and D=I_d. Construct false endpoint claims and a legal degree-d prover polynomial for which the fresh random compression point erases the false claim with probability exactly d/q. Explain why endpoint checks do not improve this worst-case bound.

**Required output:** Explicit C,D,g, endpoint claims and an exact collision probability.

**Prerequisites:** Permanent of a diagonal matrix; Polynomial interpolation; Finite fields

**Examiner follow-up:** What changes if the verifier samples uniformly from F_q minus {0,1}?

<details>
<summary>Solution route / investigation plan</summary>

1. The truthful restriction is f(t)=per(tI_d)=t^d. Choose d distinct roots S contained in F_q minus {0,1}, and a nonzero scalar c. Set g(t)=t^d+c∏_{a∈S}(t−a), and announce g(0),g(1) as the endpoint values. Both endpoint values are false because neither endpoint belongs to S, but the verifier’s endpoint consistency checks succeed.

2. The discrepancy has exactly the d prescribed roots, so the reduced claim becomes truthful on exactly d of the q possible challenges. The degree may drop after cancellation for a particular c, but remains at most d and the discrepancy still has degree d. This is a worst-case example for one merge, not a claim that every level of a full permanent protocol simultaneously attains its union bound.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Permanent protocol](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-permanent--lfkn-sharp-root-loss)

---

## 6. Replace coefficient messages by evaluation messages

**Doctoral proof · proof · 35 minutes suggested**

ID: core-lfkn-permanent--lfkn-value-message-basis

A merge requires a polynomial of degree at most d over F_q, with q>d+2. Specify a protocol in which the prover sends d+1 values at fixed distinct public nodes instead of coefficients. Give the verifier’s interpolation formula, endpoint and random-point checks, and a direct polynomial bound on arithmetic and bit costs.

**Required output:** Complete message specification and a resource bound in d and log q.

**Prerequisites:** Lagrange interpolation; Finite-field arithmetic; Protocol message order

**Examiner follow-up:** Why must a verifier reject duplicate interpolation nodes rather than treating the resulting system as another representation?

<details>
<summary>Solution route / investigation plan</summary>

1. Fix distinct nodes α₀,…,α_d before interaction. Every received value vector determines one polynomial g(t)=∑v_i∏_{j≠i}(t−α_j)/(α_i−α_j). Thus a bounded-length value message enforces the degree cap just as a bounded coefficient message does. Check g(0) and g(1) against the two current claims, then choose a fresh uniform r and continue with g(r).

2. Using direct Lagrange evaluation costs O(d²) field operations per evaluated point, with denominator inverses precomputed once for fixed nodes. Each message contains (d+1)ceil(log₂ q) bits, apart from framing; field operations are polynomial in log q under an explicit field representation. Soundness is basis-independent because a false endpoint forces this uniquely determined g to differ from the truthful degree-d restriction.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Permanent protocol](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-permanent--lfkn-value-message-basis)

---

## 7. Soundness with imperfect random challenges

**Examiner challenge · proof · 35 minutes suggested**

ID: core-lfkn-permanent--lfkn-entropy-challenges

At each compression, suppose the challenge distribution D_h, conditioned on the entire prior public history h and the current prover polynomial, satisfies max_a D_h(a)≤2^(−H). Prove a soundness bound for discrepancy degrees d₁,…,d_L. Give a matching one-step example when the challenge support has at most d points, and audit reduction modulo q of a uniformly sampled b-bit integer.

**Required output:** Conditional theorem, support attack and an explicit biased-sampling bound.

**Prerequisites:** Conditional probability; Min-entropy; Root counting

**Examiner follow-up:** Is a large Shannon entropy sufficient to substitute H in the bound?

<details>
<summary>Solution route / investigation plan</summary>

1. A fixed nonzero discrepancy of degree d has at most d roots, so its collision probability is at most min(1,d·2^(−H)). Sum these conditional bounds at the first loss of a false-claim invariant. The entropy requirement must hold after the polynomial message; a marginally uniform challenge correlated with that message supplies no such guarantee.

2. If the support S has size at most d, a discrepancy containing ∏_{a∈S}(X−a) can vanish at every possible challenge. For U mod q with U uniform on b bits, each atom is at most ceil(2^b/q)/2^b, giving the corresponding d-times-largest-atom bound. Rejection sampling restores uniformity; a truncation event needs its own error budget.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Permanent protocol](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-permanent--lfkn-entropy-challenges)

---

## 8. Interpolation nodes in small characteristic

**Examiner challenge · counterexample · 35 minutes suggested**

ID: core-lfkn-permanent--lfkn-extension-field-nodes

A proposed batched compression uses the integer labels 0,1,…,k−1 as interpolation nodes over F_(2^ℓ), claiming that 2^ℓ>k makes them distinct. Exhibit the error and repair the protocol using an explicit representation F_2[T]/(f). State the matrix-curve degree, permanent degree and communication cost for k claims about d×d matrices.

**Required output:** A characteristic-two counterexample and a fully specified repaired interpolation scheme.

**Prerequisites:** Extension fields; Lagrange interpolation; Individual and total degree

**Examiner follow-up:** Does increasing ℓ also increase the characteristic relevant to reconstructing an integer permanent?

<details>
<summary>Solution route / investigation plan</summary>

1. Integer embedding into a characteristic-two field sends every even integer to 0 and every odd integer to 1. Cardinality does not make those particular field elements distinct. Instead fix an irreducible degree-ℓ polynomial f and enumerate k distinct ℓ-bit coefficient vectors representing residue classes, with 2^ℓ≥k.

2. Lagrange interpolation through matrices B₁,…,B_k produces a matrix curve C(t) with entry degree at most k−1. Its d-dimensional permanent has degree at most d(k−1), so send d(k−1)+1 coefficients and test all prescribed nodes before the fresh challenge. Communication is O(dkℓ) bits for this polynomial message, plus the initial scalar claims. Field construction and arithmetic must use the agreed representation.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Permanent protocol](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-permanent--lfkn-extension-field-nodes)

---

## 9. Batch independent permanent assertions safely

**Examiner challenge · synthesis · 40 minutes suggested**

ID: core-lfkn-permanent--lfkn-batch-independent-matrices

You are given k unrelated d×d matrices A_i over F_q and claimed permanents s_i, with q≥k. Audit the proposal to verify only ∏s_i using a block-diagonal permanent. Then design one random-point interpolation reduction that retains an incorrect-claim invariant whenever at least one s_i is false. Quantify degree, messages and error.

**Required output:** A masking example and a protocol for batching k same-dimension assertions.

**Prerequisites:** Block-diagonal permanents; Interpolation curves; Soundness invariants

**Examiner follow-up:** For k=1, what reduction is necessary, and how should the degree-zero edge case be handled?

<details>
<summary>Solution route / investigation plan</summary>

1. A product equality does not certify every factor. For example A₁=[0], A₂=[1] and claims (0,2) over a field of characteristic greater than two pass the product check. Zero factors can mask arbitrary false assertions, and even nonzero factors can compensate multiplicatively.

2. Choose distinct α_i and interpolate a degree-(k−1) matrix curve through the A_i. Ask for a polynomial g of degree at most d(k−1), check g(α_i)=s_i for every i, and sample uniform r. Any incorrect s_i implies g differs from per(C(t)); the reduced assertion at C(r) remains false except with probability at most d(k−1)/q. Follow it by the ordinary dimension-reducing protocol and add the two error budgets.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Permanent protocol](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-permanent--lfkn-batch-independent-matrices)

---

## 10. Separate field size from integer information

**Examiner challenge · counterexample · 35 minutes suggested**

ID: core-lfkn-permanent--lfkn-characteristic-versus-size

A verifier uses F_(p^ℓ) with enormous p^ℓ to obtain a tiny root-bound error, then claims that one verified field value uniquely determines the integer permanent of a 0–1 matrix. Refute the inference even when the field contains more than n! elements. Explain the special role of characteristic two and give separate conditions for algebraic soundness and integer reconstruction.

**Required output:** A numerical counterexample and two explicitly different parameter requirements.

**Prerequisites:** Characteristic of a field; Integer-to-field homomorphisms; Permanent and determinant

**Examiner follow-up:** Can several fields of characteristics p,p,p supply three independent CRT moduli?

<details>
<summary>Solution route / investigation plan</summary>

1. The homomorphism from integers into F_(p^ℓ) has kernel pZ regardless of ℓ. An extension field enlarges the challenge space but does not reveal more than the residue modulo p of an integer permanent. For the 2×2 all-ones matrix the permanent is 2, which maps to zero in every characteristic-two extension, however large that extension is.

2. In characteristic two, determinant and permanent coincide because the signs in the determinant disappear. Computing that residue is therefore much weaker than recovering the integer count. Root-bound soundness depends on q=p^ℓ relative to discrepancy degrees; unique integer reconstruction depends on a bound for the integer range and on the characteristic modulus, or on the product of distinct characteristic primes.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Permanent protocol](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-permanent--lfkn-characteristic-versus-size)

---

## 11. Audit selective restart policies

**Research seminar · research-extension · 45 minutes suggested**

ID: core-lfkn-permanent--lfkn-restart-audit

Modify a degree-d compression so that the prover may abort after seeing r and request another fresh challenge, with at most T attempts. Analyze both unconditional false acceptance and false acceptance conditioned on eventual completion. Give a policy attaining the qualitative gap, and design a verifier rule that preserves a stated error budget η.

**Required output:** A stopping-policy attack, a repaired verifier specification and a theorem distinguishing conditional from unconditional error.

**Prerequisites:** Root-bound soundness; Stopping events; Conditional distributions

**Examiner follow-up:** What changes if the application retries an aborted proof outside the verifier’s recorded attempt counter?

<details>
<summary>Solution route / investigation plan</summary>

1. If each polynomial is fixed before its attempt’s fresh challenge, a false assertion can escape in at most d/q probability per attempt. A union bound gives unconditional false acceptance at most Td/q, even if later polynomials depend on earlier failed challenges. Choosing q≥Td/η preserves an η budget for this step.

2. The prover can abort precisely when the challenge is not a root of a chosen discrepancy. Then every completed execution can be a false acceptance, although completion is rare; conditional soundness is not the original soundness definition. Count an abort as rejection, cap retries globally and report acceptance probability over all verifier randomness. An unbounded restart policy can eventually hit a root with probability one.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Permanent protocol](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-permanent--lfkn-restart-audit)

---

## 12. Recover a permanent from a corrupted evaluation oracle

**Research seminar · research-extension · 50 minutes suggested**

ID: core-lfkn-permanent--lfkn-corrupted-oracle-correction

Let O agree with permanent on at least 1−ρ of all d×d matrices over F_q. For a target A choose a uniform matrix R and query O(A+tR) at L distinct nonzero t, where q>L and L>d. Use univariate error correction to recover per(A), stating a sufficient success bound without independence assumptions on the queried errors. Compare this fixed-oracle model with an interactive cheating prover.

**Required output:** A decoder algorithm, a parameter inequality for success, and a precise comparison of oracle and interactive models.

**Prerequisites:** Permanent polynomial degree; Reed–Solomon unique decoding; Markov inequality

**Examiner follow-up:** Can a quadratic matrix curve give pairwise-independent query locations while retaining a polynomial restriction degree?

<details>
<summary>Solution route / investigation plan</summary>

1. For every nonzero t, A+tR is uniform, so the expected number Z of corrupted answers is at most Lρ. The restriction t↦per(A+tR) has degree at most d. A unique decoder corrects t₀=floor((L−d−1)/2) errors, and Markov gives failure probability at most Lρ/(t₀+1). Choose L and ρ so this is below one, then amplify with independent choices of R.

2. Queries on one affine line are correlated; the expectation and Markov argument deliberately avoid a binomial-tail claim. The oracle must be one fixed function with the stated global agreement. An adaptive prover allowed to see the entire line can corrupt every queried point while having no meaningful pre-existing distance from permanent, so the same premise does not follow from interactive access alone.

</details>

[Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems · Permanent protocol](https://lance.fortnow.com/papers/files/ip.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-lfkn-permanent--lfkn-corrupted-oracle-correction)
