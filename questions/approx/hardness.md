# Hardness: gaps, PCP predicates, and approximation conventions

§§16.1, 16.3 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-hardness)

## 1. Hardness: gaps, PCP predicates, and approximation conventions

**Doctoral proof · proof · 45 minutes suggested**

ID: core-hardness--source-proof

Turn a PCP with r=O(log n) and q=O(1) into a polynomial gap instance. Derive the 7/8 MAX-E3SAT threshold and the 21/22 MAX-2SAT threshold from the corresponding predicate gadgets. Explain why an exact decision reduction alone does not establish a constant approximation gap.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Polynomially many constant-query PCP tests form a constant-arity gap CSP. An approximation beating the NO/YES gap would decide the source NP-hard language.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. There are 2^r polynomially many tests, each involving at most q proof bits. The proof assignment must be globally consistent across tests.

2. A maximization ρ-approximation distinguishes YES value at least cM from NO value at most sM only when ρc>s, with strict separation and the small error parameters retained.

3. The assigned parity-to-3SAT gadget gives values 4 per satisfied parity constraint and 3 otherwise, producing a limiting NO/YES ratio 7/8. The 2SAT gadget’s values 11 and 10 give (10+1/2)/11=21/22.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§16.1, 16.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hardness--source-proof)

---

## 2. Why does q=O(1) not mean the raw witness can be sampled?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-hardness--oral-check-1

Why does q=O(1) not mean the raw witness can be sampled?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Polynomially many constant-query PCP tests form a constant-arity gap CSP. An approximation beating the NO/YES gap would decide the source NP-hard language.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. The PCP theorem supplies an encoded proof with local consistency guarantees. Arbitrary NP certificates lack that property.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§16.1, 16.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hardness--oral-check-1)

---

## 3. Does P≠NP imply every optimization problem is hard to approximate?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-hardness--oral-check-2

Does P≠NP imply every optimization problem is hard to approximate?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Polynomially many constant-query PCP tests form a constant-arity gap CSP. An approximation beating the NO/YES gap would decide the source NP-hard language.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. A suitable gap-preserving reduction is needed for the particular objective and ratio.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§16.1, 16.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hardness--oral-check-2)

---

## 4. Reduce a nonuniform verifier without exponential duplication

**Doctoral proof · synthesis · 45 minutes suggested**

ID: core-hardness--weighted-random-tapes

A verifier has polynomially many random-tape outcomes with rational probabilities p_r given explicitly and constant query count. Construct a weighted CSP whose value equals acceptance probability for every fixed proof. Explain why converting probabilities to a common denominator and duplicating constraints can destroy polynomial output size.

**Required output:** An exact weighted reduction and an output-size audit.

**Prerequisites:** PCP-to-CSP reduction; rational encodings

**Examiner follow-up:** How does a total probability-rounding error δ affect completeness and soundness?

<details>
<summary>Solution route / investigation plan</summary>

1. For each random outcome r create its acceptance predicate on the proof positions queried on that outcome, assigning weight p_r. A global proof assignment induces exactly the verifier’s answer behavior, so weighted satisfied fraction equals sum_r p_r·accept_r. Constant query count permits constant-arity predicates after unfolding adaptive branches.

2. A common denominator has polynomial bit length but can have exponentially large numerical value. Duplicating a constraint its numerator number of times can therefore produce exponentially many constraints. Preserve rational weights or use a separately analyzed rounding-to-uniform reduction with controlled total error. Polynomial arithmetic size is not polynomial list length.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§16.1, 16.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hardness--weighted-random-tapes)

---

## 5. Amplify a fixed-proof acceptance gap by repetition

**Doctoral proof · proof · 45 minutes suggested**

ID: core-hardness--constant-repetition-gap

Suppose a uniform verifier accepts a fixed proof π with probability a(π). Run k independent copies on the same proof and accept only if all accept. Prove the CSP optimum becomes OPT^k, count random bits and queried positions, and explain why k must remain fixed for the direct polynomial-size constant-arity reduction.

**Required output:** A rigorous amplification formula and a reduction-size calculation.

**Prerequisites:** independent repetition; global proof consistency

**Examiner follow-up:** Why is perfect completeness especially convenient under conjunction repetition?

<details>
<summary>Solution route / investigation plan</summary>

1. For a fixed proof the copies use independent random tapes, so acceptance is a(π)^k. Maximizing over π gives (max a(π))^k because the power is monotone. Completeness c and soundness s become c^k and s^k, while a single globally consistent proof is still used in every test.

2. The verifier uses kr random bits and at most kq nonadaptive queries, or a constant-size union of adaptive positions when k,q are fixed. Enumerating all tapes creates 2^(kr) constraints. With r=O(log n), fixed k gives polynomial output; k=Θ(log n) can produce n^Θ(log n) constraints and loses the stated constant-arity polynomial reduction.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§16.1, 16.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hardness--constant-repetition-gap)

---

## 6. Compute a gadget gap with private auxiliary variables

**Examiner challenge · proof · 45 minutes suggested**

ID: core-hardness--private-gadget-affine-map

Each source constraint is replaced by a gadget whose optimum over private auxiliaries is A if that constraint is satisfied and B<A otherwise. Prove target OPT=Bm+(A−B)OPT_source. Derive the target NO/YES threshold for a source gap c versus s, and show why sharing auxiliaries can invalidate the identity.

**Required output:** An exact affine reduction lemma and an auxiliary-sharing counterexample.

**Prerequisites:** gap gadgets; affine objective transformations

**Examiner follow-up:** How does an additive gadget error εm perturb the threshold?

<details>
<summary>Solution route / investigation plan</summary>

1. For any fixed source assignment, private auxiliary blocks can be optimized independently, giving Bm+(A−B) times its number of satisfied constraints. Maximizing the source assignment yields the exact optimum identity. The target threshold is [B+(A−B)s]/[B+(A−B)c].

2. Private auxiliaries are essential: two gadgets each requiring one auxiliary bit to take opposite values can each attain value one in isolation, but if they share that bit their combined maximum is one rather than two. State both the local gadget truth table and its independence before applying an affine gap formula.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§16.1, 16.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hardness--private-gadget-affine-map)

---

## 7. Always-satisfied constraints dilute an approximation gap

**Examiner challenge · construction · 35 minutes suggested**

ID: core-hardness--gap-dilution-padding

A maximization CSP has YES optimum M and NO optimum at most sM, s<1. Add K constraints that are always satisfied. Derive the new gap ratio and prove it tends to one as K/M grows. Explain why this padding preserves exact decision reducibility while weakening the approximation threshold.

**Required output:** A quantitative padding formula and a reduction-convention explanation.

**Prerequisites:** gap ratios; padding reductions

**Examiner follow-up:** How large may K be while preserving a desired target ratio threshold ρ<1?

<details>
<summary>Solution route / investigation plan</summary>

1. The padded YES optimum is M+K and padded NO optimum is at most sM+K. The NO/YES ratio is (sM+K)/(M+K)=1−(1−s)M/(M+K). Thus the gap shrinks toward one as the fixed additive baseline dominates.

2. Subtracting K recovers exact source values if an exact optimizer is available, so exact optimization hardness can survive. A multiplicative approximate value includes K in its benchmark, however, and its source error can be large after subtraction. Exact reductions need not preserve a useful constant approximation gap.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§16.1, 16.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hardness--gap-dilution-padding)

---

## 8. Transfer a normalized independent-set gap to vertex cover

**Examiner challenge · synthesis · 40 minutes suggested**

ID: core-hardness--independent-cover-gap-map

A graph reduction guarantees YES α(G)≥an and NO α(G)≤bn, where 0≤b<a<1. Derive the corresponding minimization gap for vertex cover and the approximation factor that would distinguish it. State the strict inequality and discuss what fails when a=1.

**Required output:** A direction-correct minimization threshold with endpoint analysis.

**Prerequisites:** vertex-cover complement; minimization approximation conventions

**Examiner follow-up:** How do completeness and soundness perturbations change the derived factor?

<details>
<summary>Solution route / investigation plan</summary>

1. Since τ(G)=n−α(G), YES instances have cover optimum at most (1−a)n and NO instances have optimum at least (1−b)n. A minimization R-approximation distinguishes them when R(1−a)<1−b, or R<(1−b)/(1−a), by comparing its feasible cost with the NO lower threshold.

2. At equality the guaranteed YES output can coincide with the NO threshold, so strict separation is necessary. If a=1, YES cover optimum is zero and the displayed ratio is undefined; zero-optimum cases require direct treatment. This normalized gap transfer is valid even though arbitrary approximate independent sets do not yield a vertex-cover ratio.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§16.1, 16.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hardness--independent-cover-gap-map)

---

## 9. Research exercise: remove weights with a controlled gap loss

**Research seminar · research-extension · 90 minutes suggested**

ID: core-hardness--weighted-to-unweighted-gap

A weighted CSP has nonnegative rational weights summing to one and m constraints, with YES value≥c and NO value≤s<c. For δ∈(0,c−s), set h=δ/m and create floor(w_i/h) copies of constraint i. Prove the resulting optimum count lies between (OPT−δ)/h and OPT/h, and derive a distinguishing approximation threshold.

**Required output:** A quantitative unweighting theorem and exact small-instance comparison.

**Prerequisites:** weight quantization; gap-preserving reductions

**Examiner follow-up:** Would nearest-integer rounding give a better error constant without introducing negative weights?

<details>
<summary>Solution route / investigation plan</summary>

1. For any assignment, replacing w_i by h floor(w_i/h) decreases value by less than h per constraint, hence by at most δ in total. Taking maxima preserves OPT−δ≤h OPT_count≤OPT. The number of copies is at most 1/h=m/δ, polynomial when 1/δ is polynomially bounded.

2. Thus YES count≥(c−δ)/h and NO count≤s/h; any maximization ratio strictly greater than s/(c−δ) separates the cases. Compare exact weighted and replicated optima by exhaustive assignments on small predicates. Failure means violating the additive quantization bound or claiming polynomial size for exponentially small δ without counting 1/δ. The target is a specified reduction audit.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§16.1, 16.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hardness--weighted-to-unweighted-gap)

---

## 10. Research exercise: show the adaptive query union can be exponentially large

**Research seminar · research-extension · 95 minutes suggested**

ID: core-hardness--adaptive-query-arity-tightness

For each q construct a depth-q adaptive Boolean query tree whose 2^q−1 internal nodes query distinct proof positions and whose computed predicate depends essentially on every one of them. Prove essentiality and verify q≤4 by exhaustive truth tables. Explain the consequence for compiling one random tape into a nonadaptive CSP predicate.

**Required output:** A tight adaptive-union construction and exact finite verification.

**Prerequisites:** decision trees; essential variables; adaptive PCP queries

**Examiner follow-up:** Can repeated addresses in the decision tree ever increase the number of essential variables?

<details>
<summary>Solution route / investigation plan</summary>

1. Label each internal node by its own Boolean variable, follow its bit to the chosen child, and label the two leaves below every bottom internal node by zero and one. Every internal variable is essential: fix the ancestor path to reach it, and set the disjoint descendant subtrees so one child evaluates zero and the other one. Flipping that variable changes acceptance.

2. The verifier reads only q bits on any run, but the acceptance function for that random tape can depend on 2^q−1 positions globally. A nonadaptive predicate on the union therefore may need that full arity. Exhaustive essential-variable checks are the finite baseline; failure means a claimed essential variable with identical restricted outputs. For fixed q this remains constant arity, while growing q changes the reduction size.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§16.1, 16.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hardness--adaptive-query-arity-tightness)

---

## 11. A cycle of consistency checks may be too weak

**Doctoral proof · construction · 45 minutes suggested**

ID: core-hardness--cycle-consistency-weakness

Create M occurrence variables on a cycle, with even M≥4. Give the first half positive unit clauses and the second half negative unit clauses, each weight one, and equality checks on cycle edges, each weight λ>0. Compare globally consistent assignments with satisfying all units, and show fixed λ cannot enforce consistency as M grows.

**Required output:** An exact consistency-cost calculation and a gap-preservation diagnosis.

**Prerequisites:** consistency gadgets; gap accounting

**Examiner follow-up:** How would an edge-expansion lower bound change the penalty for a block of disagreements?

<details>
<summary>Solution route / investigation plan</summary>

1. A globally consistent assignment satisfies M/2 unit weight and all M equality checks, for value M/2+λM. Set the first half variables true and second half false. This satisfies all M unit clauses while violating only the two equality edges at the block boundaries, for value M+λ(M−2).

2. The inconsistent assignment is better whenever M/2>2λ. Thus a bounded-degree cycle with constant check weight permits a large block of inconsistent answers at only constant boundary penalty. Compiling local proof occurrences into globally consistent variables needs an expansion or amplification argument, not only connectivity of the consistency graph.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§16.1, 16.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hardness--cycle-consistency-weakness)

---

## 12. State the correct consequence of a randomized gap algorithm

**Examiner challenge · synthesis · 45 minutes suggested**

ID: core-hardness--randomized-hardness-consequence

A polynomial reduction has YES optimum≥cM and NO optimum≤sM. Suppose a randomized polynomial-time maximization algorithm always returns a feasible solution and achieves ratio ρ>s/c with probability at least 2/3. Prove this yields an RP decision algorithm for the source language, and state the resulting complexity assumption needed to rule it out.

**Required output:** A direction-correct randomized decision reduction and its qualified hardness conclusion.

**Prerequisites:** RP; gap reductions; feasible objective thresholds

**Examiner follow-up:** What changes if the algorithm can output infeasible solutions without a verification step?

<details>
<summary>Solution route / investigation plan</summary>

1. Run the approximation algorithm and accept exactly when its feasible objective exceeds sM. In a NO instance this never happens because no feasible solution exceeds that bound. In a YES instance, successful approximation gives value at least ρcM>sM, so acceptance probability is at least two thirds.

2. This is one-sided randomized error, hence an RP algorithm. For an NP-hard source it gives NP⊆RP, and the standard containment RP⊆NP yields NP=RP. One cannot conclude P=NP from this argument alone without a derandomization assumption. Always-feasible outputs are crucial for the zero false-positive property.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§16.1, 16.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hardness--randomized-hardness-consequence)
