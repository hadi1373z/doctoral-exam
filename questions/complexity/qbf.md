# Shamir: eliminate quantifiers without exponential degree

Degree reduction · Shamir · IP = PSPACE

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-qbf)

## 1. Shamir: eliminate quantifiers without exponential degree

**Doctoral proof · proof · 45 minutes suggested**

ID: core-qbf--source-proof

Write the operators for ∃, ∀ and Rᵢ. Prove that Rᵢ preserves all Boolean values but can change non-Boolean evaluations. Explain how its placement controls degree, count operator checks and derive a polynomial field-size requirement.

**Presentation note:** The Rᵢ questions use a modern multilinearization presentation of degree control. Compare its invariants with the original paper’s normalization argument; this is not a claim that the operator notation appears verbatim in Shamir.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** QBF arithmetization plus repeated multilinearization keeps individual degrees bounded while backward random checks verify a polynomial-length operator sequence.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. Rᵢ interpolates the endpoint restrictions and is linear in xᵢ. It agrees with P whenever xᵢ∈{0,1}; other field values can differ.

2. Quantifier elimination can multiply degrees in surviving variables. Reducing all surviving coordinates between elimination stages prevents repeated doubling from accumulating.

3. The verifier works backward from the final claimed scalar. At each operation, it checks a univariate polynomial of a known bounded degree, samples a fresh point, and reduces the claim. With polynomially many checks and polynomial degrees, a polynomial-size field gives constant total soundness error.

</details>

[Shamir · IP = PSPACE · Degree reduction](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-qbf--source-proof)

---

## 2. Give a polynomial changed by Rᵢ.

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-qbf--oral-check-1

Give a polynomial changed by Rᵢ.

**Presentation note:** The Rᵢ questions use a modern multilinearization presentation of degree control. Compare its invariants with the original paper’s normalization argument; this is not a claim that the operator notation appears verbatim in Shamir.

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** QBF arithmetization plus repeated multilinearization keeps individual degrees bounded while backward random checks verify a polynomial-length operator sequence.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. P(x)=x² becomes R(P)=x. They agree at 0 and 1 and disagree at, for example, 2 in a field where 2²≠2.

</details>

[Shamir · IP = PSPACE · Degree reduction](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-qbf--oral-check-1)

---

## 3. Why is bare sum-check not already a proof for QBF?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-qbf--oral-check-2

Why is bare sum-check not already a proof for QBF?

**Presentation note:** The Rᵢ questions use a modern multilinearization presentation of degree control. Compare its invariants with the original paper’s normalization argument; this is not a claim that the operator notation appears verbatim in Shamir.

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** QBF arithmetization plus repeated multilinearization keeps individual degrees bounded while backward random checks verify a polynomial-length operator sequence.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Alternating quantifiers are not one Boolean hypercube sum; naive elimination can also create exponentially large degrees.

</details>

[Shamir · IP = PSPACE · Degree reduction](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-qbf--oral-check-2)

---

## 4. Degree reduction as a quotient-ring normal form

**Doctoral proof · proof · 40 minutes suggested**

ID: core-qbf--qbf-quotient-operator-order

Work over a field F and the quotient F[x₁,…,x_m]/(x_i²−x_i : i∈[m]). Prove uniqueness of the multilinear representative of every Boolean-cube function. Using P(x,y)=x, show that coordinate reduction R_x and universal elimination of y need not commute as formal polynomials, while their Boolean values agree. Explain the operator-order obligation for a backward verifier.

**Presentation note:** The Rᵢ questions use a modern multilinearization presentation of degree control. Compare its invariants with the original paper’s normalization argument; this is not a claim that the operator notation appears verbatim in Shamir.

**Required output:** A normal-form proof, a noncommutation calculation and a verifier invariant.

**Prerequisites:** Polynomial quotient rings; Boolean interpolation; Quantifier elimination

**Examiner follow-up:** Which algebraic operations descend naturally to the quotient, and what changes when the verifier evaluates outside the Boolean cube?

<details>
<summary>Solution route / investigation plan</summary>

1. Repeated replacement of x_i^k by x_i for k≥1 produces a multilinear representative. Uniqueness follows by induction: a multilinear polynomial vanishing on the Boolean cube has both endpoint restrictions zero in the last coordinate, and hence all its coefficients vanish. Equivalently use the 2^m Boolean Lagrange basis polynomials.

2. Universal elimination sends P=x to x², whereas reducing x afterward sends x² to x. Reducing P first leaves x, so eliminating y afterward still yields x². These expressions agree on Boolean x but differ at general field points. A backward proof must verify the actual ordered operator identities, rather than replacing intermediate random-point evaluations by an unspecified Boolean-equivalent polynomial.

</details>

[Shamir · IP = PSPACE · Degree reduction](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-qbf--qbf-quotient-operator-order)

---

## 5. Count every operation in a normalized QBF protocol

**Doctoral proof · construction · 45 minutes suggested**

ID: core-qbf--qbf-explicit-reduction-schedule

An arithmetic formula of size s in n Boolean variables has individual degrees at most s. In the guide’s degree-reduction reformulation, first reduce all n coordinates, then eliminate quantifiers one at a time, reducing every surviving coordinate after each elimination. Bound operator count, individual degrees in every backward restriction, communication and a sufficient field size for total error η.

**Presentation note:** The Rᵢ questions use a modern multilinearization presentation of degree control. Compare its invariants with the original paper’s normalization argument; this is not a claim that the operator notation appears verbatim in Shamir.

**Required output:** An indexed operator schedule and a bit-level polynomial resource proof.

**Prerequisites:** Boolean gate arithmetization; Degree reduction R_i; Backward random checking

**Examiner follow-up:** Can the final reductions after eliminating the last variable be omitted from this count?

<details>
<summary>Solution route / investigation plan</summary>

1. Initial coordinate reductions need n operators. A stage with k surviving variables before elimination uses one quantifier operator and k−1 reductions. Thus n+n(n+1)/2 operators suffice. After initial normalization each surviving variable has degree at most one; a product or Boolean-OR elimination raises surviving individual degrees to at most two, and the following reductions restore degree one.

2. During the initial reductions the relevant univariate degrees are at most s; afterward they are at most two. A safe uniform discrepancy cap is D=max(s,2). With L operators, q≥LD/η gives the root-bound budget, and coefficient messages contain O(LD log q) bits. The verifier stores assignments and operator indices and finally evaluates the original size-s formula; it need not materialize an exponentially expanded polynomial. This is a reformulation, not the exact syntax of Shamir’s simple-QBF normalization.

</details>

[Shamir · IP = PSPACE · Degree reduction](https://doi.org/10.1145/146585.146609) · [Adi Shamir, IP = PSPACE](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-qbf--qbf-explicit-reduction-schedule)

---

## 6. Compare Boolean-valued and nonzero-valued arithmetization

**Doctoral proof · synthesis · 35 minutes suggested**

ID: core-qbf--qbf-two-existential-encodings

Compare existential elimination a+b−ab with elimination by a+b in a negation-normal QBF arithmetization using products for universals. Evaluate ∀x∃y True in both conventions. State the correct invariant for each, and explain why a modular zero test can fail for the nonzero-valued convention even on a true formula.

**Presentation note:** The Rᵢ questions use a modern multilinearization presentation of degree control. Compare its invariants with the original paper’s normalization argument; this is not a claim that the operator notation appears verbatim in Shamir.

**Required output:** Two explicit evaluations and an invariant-and-characteristic comparison table.

**Prerequisites:** Boolean truth tables; Integer sums and products; Modular arithmetic

**Examiner follow-up:** Why is pushing negations to literals useful for the nonnegative sum/product interpretation?

<details>
<summary>Solution route / investigation plan</summary>

1. The Boolean-valued convention returns exactly 0 or 1 on Boolean assignments and makes ∀x∃y True evaluate to 1. The nonnegative sum/product convention returns 2 for each existential branch and then 4 for the universal product. Its invariant is zero for false and positive for true, rather than equality to the Boolean truth value.

2. Reducing the value 4 modulo 2 turns this true example into zero. More generally a characteristic dividing a positive arithmetized value can destroy the nonzero invariant. A proof using this convention must address prime selection and magnitude/divisibility; a Boolean-valued normalized protocol has a different invariant. Neither convention justifies mixing the other’s gate identities or final acceptance predicate without a new proof.

</details>

[Shamir · IP = PSPACE · Degree reduction](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-qbf--qbf-two-existential-encodings)

---

## 7. Use characteristic two without reducing the challenge space to two points

**Examiner challenge · proof · 35 minutes suggested**

ID: core-qbf--qbf-characteristic-two-extensions

Audit a normalized Boolean-valued QBF protocol over F_(2^ℓ). Verify the AND, OR and R_i identities on Boolean values, and explain why a large extension field can support the root-bound argument. Use X²−X to distinguish polynomial identities from equality of functions on F₂.

**Presentation note:** The Rᵢ questions use a modern multilinearization presentation of degree control. Compare its invariants with the original paper’s normalization argument; this is not a claim that the operator notation appears verbatim in Shamir.

**Required output:** Truth-table checks and a field-size argument with a formal-polynomial counterexample.

**Prerequisites:** Extension fields; Boolean arithmetization; Formal versus functional equality

**Examiner follow-up:** Does this argument justify Shamir’s integer nonzero-valued convention in every characteristic?

<details>
<summary>Solution route / investigation plan</summary>

1. AND is ab and OR is a+b−ab, with subtraction equal to addition in characteristic two; the four Boolean truth-table entries remain correct. The operator (1−x)P(0)+xP(1) still agrees at x=0,1 and is affine in x. Thus Boolean-valued gate correctness does not require odd characteristic.

2. The nonzero formal polynomial X²−X vanishes on all of F₂, illustrating why two available challenge points give no useful degree-two root estimate. On a larger characteristic-two extension it has only the roots 0 and 1, so uniform sampling from q=2^ℓ points restores a 2/q estimate. Keep the original degree cap below the field-size scale used in the error calculation and represent field elements explicitly.

</details>

[Shamir · IP = PSPACE · Degree reduction](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-qbf--qbf-characteristic-two-extensions)

---

## 8. Small circuits can have exponentially large formal degree

**Examiner challenge · counterexample · 30 minutes suggested**

ID: core-qbf--qbf-squaring-circuit-trap

Let P₀(x)=x and P_(j+1)(x)=P_j(x)², represented as a size-O(j) arithmetic circuit with shared subcomputations. Compare formal degree, Boolean-cube behavior and coefficient-message length with and without inserting R_x after every squaring. Explain which resource assertion a circuit-size bound alone fails to establish.

**Presentation note:** The Rᵢ questions use a modern multilinearization presentation of degree control. Compare its invariants with the original paper’s normalization argument; this is not a claim that the operator notation appears verbatim in Shamir.

**Required output:** A degree/size table and a normalized verification schedule for this circuit family.

**Prerequisites:** Arithmetic circuits; Degree growth; Multilinearization

**Examiner follow-up:** What distinction remains if sparse monomial notation is allowed instead of dense coefficient messages?

<details>
<summary>Solution route / investigation plan</summary>

1. Without reduction P_j=x^(2^j), although all these polynomials equal x on Boolean inputs. Circuit size and repeated-squaring evaluation time are polynomial in j, but a dense univariate coefficient message may require 2^j+1 entries. A verifier that assumes small circuit size implies small restriction degree has lost its polynomial communication guarantee.

2. Applying R_x after each squaring replaces x² by x, so every normalized stage is degree one. The intermediate operation being checked has degree at most two, and a backward protocol can verify O(j) such operations with constant-size polynomial messages. State the field size relative to j and the desired total error; equality on Boolean points does not authorize skipping the operator checks at random non-Boolean assignments.

</details>

[Shamir · IP = PSPACE · Degree reduction](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-qbf--qbf-squaring-circuit-trap)

---

## 9. Why Boolean branch sampling can miss one false leaf

**Examiner challenge · counterexample · 35 minutes suggested**

ID: core-qbf--qbf-boolean-branch-catch-rate

A proposed protocol verifies a universally quantified Boolean predicate by asking for its two child values, checking their product, and following a uniformly random Boolean child. Apply it to ∀x₁…∀x_n (x₁∨⋯∨x_n), falsely claimed true. Construct a consistent prover strategy and compute its exact acceptance probability. Compare with low-degree random-point reduction over F_q.

**Presentation note:** The Rᵢ questions use a modern multilinearization presentation of degree control. Compare its invariants with the original paper’s normalization argument; this is not a claim that the operator notation appears verbatim in Shamir.

**Required output:** A full cheating strategy, exact acceptance calculation and a parameter comparison.

**Prerequisites:** Universal quantifiers; Decision trees; Polynomial root bounds

**Examiner follow-up:** How many independent Boolean branch walks are needed for constant rejection probability on this example?

<details>
<summary>Solution route / investigation plan</summary>

1. The predicate has one false leaf, the all-zero assignment. A prover can announce value 1 at every internal node and both children 1. Every product check succeeds. The verifier rejects only when its n random branch choices lead to the all-zero leaf, so false acceptance is exactly 1−2^(−n).

2. The failure is quantitative: a false value can be concentrated on an exponentially small Boolean branch, so following one actual child does not preserve falsity with high probability. A polynomial restriction checked at a fresh field point instead keeps a false assertion except at its bounded number of roots. Degree reduction is required to make the sum of those root budgets polynomial rather than exponentially large.

</details>

[Shamir · IP = PSPACE · Degree reduction](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-qbf--qbf-boolean-branch-catch-rate)

---

## 10. Remove the degree cap and build an almost-always escaping lie

**Examiner challenge · construction · 35 minutes suggested**

ID: core-qbf--qbf-uncapped-degree-attack

For odd q>2, the truthful restriction is f≡0 and a verifier checks a false universal value 1 using g(0)g(1)=1, then moves to g(r) at uniform r∈F_q. If no polynomial-degree cap is enforced, construct g that is 1 exactly at 0 and 1 and zero elsewhere. Compute the probability that the next claim becomes truthful and specify an enforceable repair.

**Presentation note:** The Rᵢ questions use a modern multilinearization presentation of degree control. Compare its invariants with the original paper’s normalization argument; this is not a claim that the operator notation appears verbatim in Shamir.

**Required output:** An explicit escaping polynomial and a degree-enforcing message format.

**Prerequisites:** Fermat identity over finite fields; Degree caps; Backward soundness

**Examiner follow-up:** Why does increasing q without changing the message-format rule make this particular attack stronger?

<details>
<summary>Solution route / investigation plan</summary>

1. Take g(X)=1−(X(X−1))^(q−1). At X=0,1 it equals 1, and at every other field element the nonzero quantity X(X−1) has (q−1)-st power 1. Hence both endpoint values support the false product claim, while a random challenge erases the false assertion with probability 1−2/q.

2. The polynomial has degree 2(q−1), so the usual small-degree root estimate is unavailable. Enforce the announced degree bound by requiring exactly D+1 coefficients or D+1 evaluations at fixed nodes, interpreted as the uniquely determined degree-at-most-D polynomial. Reject overlong or malformed messages; merely evaluating a prover-supplied high-degree circuit at a few points does not enforce a degree promise.

</details>

[Shamir · IP = PSPACE · Degree reduction](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-qbf--qbf-uncapped-degree-attack)

---

## 11. Reduce only coordinates whose degree budget needs repair

**Research seminar · research-extension · 50 minutes suggested**

ID: core-qbf--qbf-sparse-normalization-audit

Replace the all-surviving-coordinates normalization schedule by a syntactic degree tracker. For a specified QBF formula and threshold D≥2, insert R_i only when the tracked degree of surviving x_i would exceed D before a later verification step. Prove a safe tracker, give one family where it saves operations and one where it cannot omit reductions, and compare verifier communication.

**Presentation note:** The Rᵢ questions use a modern multilinearization presentation of degree control. Compare its invariants with the original paper’s normalization argument; this is not a claim that the operator notation appears verbatim in Shamir.

**Required output:** Tracker pseudocode, two explicit formula families and measured symbolic resource tables.

**Prerequisites:** Syntactic degree analysis; QBF operator schedules; Degree reduction

**Examiner follow-up:** Can deciding whether a reduction is truly unnecessary require reasoning about polynomial identity rather than syntax?

<details>
<summary>Solution route / investigation plan</summary>

1. Maintain an upper bound for each individual degree: addition takes a maximum, multiplication adds bounds, substitution never increases a surviving bound, and R_i sets its own bound to at most one without increasing other coordinates. These rules provide a checkable sufficient schedule even when polynomial cancellations make the actual degree lower. Verify each inserted operation in its actual order.

2. For subformulas using disjoint surviving-variable sets, products need not double every coordinate, so normalizing all variables can waste checks. Repeated use of a surviving factor in both Boolean branches gives a contrasting squaring family. Report total checked degrees, rather than only the number of inserted operators: fewer checks with larger degrees can increase coefficient communication or the required field size. No optimality claim is needed for the scheduling heuristic.

</details>

[Shamir · IP = PSPACE · Degree reduction](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-qbf--qbf-sparse-normalization-audit)

---

## 12. Which coordinate changes respect Boolean normalization?

**Research seminar · research-extension · 55 minutes suggested**

ID: core-qbf--qbf-affine-change-audit

Over a field of characteristic different from two, classify invertible affine maps taking {0,1}^m onto itself and prove the classification. Then exhibit a characteristic-two Boolean-cube automorphism whose substitution into a multilinear polynomial produces a non-multilinear formal polynomial. State the consequence for reusing a degree-reduction schedule after changing coordinates.

**Presentation note:** The Rᵢ questions use a modern multilinearization presentation of degree control. Compare its invariants with the original paper’s normalization argument; this is not a claim that the operator notation appears verbatim in Shamir.

**Required output:** A classification proof and a concrete transformed-polynomial protocol audit.

**Prerequisites:** Affine maps; Boolean cubes; Individual degree

**Examiner follow-up:** Why does the odd-characteristic argument fail specifically when 1+1=0?

<details>
<summary>Solution route / investigation plan</summary>

1. A scalar affine coordinate a₀+∑a_i x_i that is Boolean on every Boolean input can depend on at most one variable in odd characteristic. Comparing the values at 0, e_i and e_i+e_j proves this restriction; a nonconstant coordinate is x_i or 1−x_i. Invertibility then forces a permutation of coordinates followed by independent complements.

2. In characteristic two the invertible map (u,v)↦(u+v,v) preserves the Boolean cube. Substituting it into P(x,y)=xy gives uv+v², which has individual degree two in v even though its Boolean normal form is uv+v. Boolean-cube preservation alone therefore does not preserve the off-cube polynomial representation used by an interactive verifier. Recompute degree bounds and insert the relevant normalization identities after substitution.

</details>

[Shamir · IP = PSPACE · Degree reduction](https://doi.org/10.1145/146585.146609)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-qbf--qbf-affine-change-audit)
