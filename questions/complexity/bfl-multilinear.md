# BFL: tests, proximity, self-correction and global consistency

Multilinearity and decoding · Babai–Fortnow–Lund · Two-Prover Interactive Protocols

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-bfl-multilinear)

## 1. BFL: tests, proximity, self-correction and global consistency

**Doctoral proof · proof · 45 minutes suggested**

ID: core-bfl-multilinear--source-proof

Present the dependency graph of the BFL soundness proof: local tests → proximity → a decoded multilinear function → correctness of the encoded computation. Explain why perfect success on sampled lines alone is not a complete proof, and give an example of a quadratic function detected by a degree-one line test.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** The algebraic encoding is checked by local restrictions; passing with high probability must imply proximity to one multilinear function before its values can be trusted.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. On a coordinate line, a multilinear function restricts to an affine univariate polynomial. A quadratic such as x₁² fails an exact affine-line test on a sufficiently large field.

2. For imperfect tests one needs a quantitative statement: high success implies small relative Hamming distance to a global multilinear function. State the test distribution and all error dependencies.

3. A decoded function must satisfy both encoding consistency and the algebraic computation constraints. Proximity without computation checks can certify a consistent encoding of a false witness.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Multilinearity and decoding](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-multilinear--source-proof)

---

## 2. Is this a request to reproduce the entire multilinearity theorem in five minutes?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-bfl-multilinear--oral-check-1

Is this a request to reproduce the entire multilinearity theorem in five minutes?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The algebraic encoding is checked by local restrictions; passing with high probability must imply proximity to one multilinear function before its values can be trusted.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. This is a proof-architecture task: state the exact intermediate claim you use and defend how it connects to the next step.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Multilinearity and decoding](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-multilinear--oral-check-1)

---

## 3. Why does self-correction require a proximity bound?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-bfl-multilinear--oral-check-2

Why does self-correction require a proximity bound?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The algebraic encoding is checked by local restrictions; passing with high probability must imply proximity to one multilinear function before its values can be trusted.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Without closeness to one codeword, local random reconstructions can be mutually inconsistent.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Multilinearity and decoding](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-multilinear--oral-check-2)

---

## 4. Compute the exact distance of the multilinear code

**Doctoral proof · proof · 45 minutes suggested**

ID: core-bfl-multilinear--multilinear-code-distance

Let C contain evaluations on F_q^m of all polynomials with individual degree at most one, q≥2. Prove its dimension and exact minimum Hamming distance. Derive a unique-decoding radius and compare q=2 with q≥2m. State all lengths in field symbols and bits.

**Required output:** Dimension and distance proofs with a parameter table.

**Prerequisites:** Multilinear interpolation; Polynomial roots; Error-correcting codes

**Examiner follow-up:** Why does a constant relative distance still not provide a polynomial-time decoder by itself?

<details>
<summary>Solution route / investigation plan</summary>

1. There are 2^m monomials and their evaluations are independent, so the dimension is 2^m and block length q^m. Induct on m: on every point where a nonzero leading coefficient is nonzero, the last-coordinate restriction has at most one root. This yields at least (q−1)^m nonzero evaluations. The product ∏(x_i−a_i) attains the bound.

2. Relative distance is (1−1/q)^m, and fewer than half that fraction of errors has at most one nearest codeword. At q=2 the code is every function on the Boolean cube, with relative distance 2^(−m) and no redundancy. For q≥2m, Bernoulli’s inequality gives relative distance at least 1/2. Multiply symbol counts by ceil(log₂ q) when reporting storage.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Multilinearity and decoding](https://lance.fortnow.com/papers/files/mip2.pdf) · [Babai–Fortnow–Lund, Two-Prover Interactive Protocols](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-multilinear--multilinear-code-distance)

---

## 5. Analyze a line subtest without assuming the global theorem

**Doctoral proof · proof · 40 minutes suggested**

ID: core-bfl-multilinear--multilinear-three-point-subtest

For q≥3, test f:F_q^m→F_q by choosing a uniform axis direction and line, then three distinct points on that line. Reject if their values are not affine. If β_i is the fraction of direction-i lines at distance at least ε from every affine function, lower-bound rejection in terms of the β_i. State exactly which global conclusion remains unproved.

**Required output:** A subtest soundness proof and a precise missing-global-lemma statement.

**Prerequisites:** Affine interpolation; Relative Hamming distance; Conditional sampling

**Examiner follow-up:** How does sampling the third point with replacement change the clean lower bound?

<details>
<summary>Solution route / investigation plan</summary>

1. The first two distinct points determine one affine h. On an ε-far line, h disagrees with f at at least εq points, none of which are those first two. A uniformly selected third distinct point therefore detects disagreement with probability at least εq/(q−2). Averaging over directions and lines gives rejection at least [εq/(q−2)]·(∑_i β_i/m).

2. A rejection bound δ thus controls the average fraction of far lines, and each β_i is at most mδ(q−2)/(εq). This is a valid quantitative subtest lemma. It does not yet construct one global multilinear function close to f; that step needs a compatible local-to-global theorem with its dimension and error dependence, rather than simply reusing the one-line interpolation argument.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Multilinearity and decoding](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-multilinear--multilinear-three-point-subtest)

---

## 6. Off-cube evaluation can require every Boolean corner

**Doctoral proof · proof · 35 minutes suggested**

ID: core-bfl-multilinear--multilinear-corner-query-lower-bound

Let q>2 and choose x∈(F_q minus {0,1})^m. An algorithm is given only query access to an arbitrary Boolean-corner table v:{0,1}^m→F_q and must exactly evaluate its multilinear extension at x. Prove a worst-case deterministic lower bound of 2^m corner queries, including adaptive algorithms, and compare with the length of a point query to a proof oracle.

**Required output:** An adaptive adversary proof and a query-length versus evaluation-cost comparison.

**Prerequisites:** Boolean Lagrange basis; Adversary query arguments; Oracle encodings

**Examiner follow-up:** What extra algebraic circuit representation of v could invalidate the black-box lower-bound premise?

<details>
<summary>Solution route / investigation plan</summary>

1. The extension value is ∑_b v(b)∏_i x_i^(b_i)(1−x_i)^(1−b_i). Every coefficient is nonzero by the choice of x. Run a deterministic algorithm against the all-zero corner table. If any corner remains unqueried, change only that corner’s value; all answers seen by the adaptive algorithm remain unchanged, but the required evaluation changes by a nonzero amount.

2. Hence the worst-case exact computation needs every corner, even though the polynomial has individual degree one. A proof oracle storing the extension can answer the same evaluation with an m·ceil(log₂ q)-bit address and one field symbol. This exposes the computational role of an exponentially large encoded object; low degree and short addresses do not make direct corner expansion efficient.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Multilinearity and decoding](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-multilinear--multilinear-corner-query-lower-bound)

---

## 7. Self-correct along a quadratic curve

**Examiner challenge · construction · 50 minutes suggested**

ID: core-bfl-multilinear--multilinear-quadratic-curve-correction

Suppose f differs from an unknown multilinear g:F_q^m→F_q on at most an α fraction of points. At target x choose independent uniform R,S∈F_q^m and query f(x+tR+t²S) at L distinct nonzero t, with q>L>2m. Derive the restriction degree, pairwise independence, a decoding radius and a Chebyshev failure bound.

**Required output:** A curve-based corrector and all parameter inequalities needed for a nontrivial success guarantee.

**Prerequisites:** Multilinear total degree; Pairwise independence; Univariate decoding; Chebyshev inequality

**Examiner follow-up:** Compare this with the affine-curve method, whose restriction degree is m but whose query errors need not be pairwise independent.

<details>
<summary>Solution route / investigation plan</summary>

1. The truthful curve restriction has degree at most 2m. For distinct nonzero t,u, the coefficient matrix with rows (t,t²),(u,u²) has determinant tu(u−t)≠0. Thus the two queried points are independent uniform vectors. Error indicators are pairwise independent, even though the entire L-tuple need not be independent.

2. Let Z count corrupted evaluations, and t₀=floor((L−2m−1)/2). Unique univariate decoding succeeds when Z≤t₀. Since E[Z]≤Lα and Var(Z)≤Lα, failure is at most Lα/(t₀+1−Lα)² when the denominator is positive. Interpolate the recovered polynomial at zero to obtain g(x), without querying the possibly corrupted target itself.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Multilinearity and decoding](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-multilinear--multilinear-quadratic-curve-correction)

---

## 8. A nearby word can defeat axis-only correction at one target

**Examiner challenge · counterexample · 35 minutes suggested**

ID: core-bfl-multilinear--multilinear-hyperplane-corruption

Let q≥3, m≥2, and define f(x)=g(x)+1 on the hyperplane x₁=0 and f=g elsewhere, where g is multilinear. At a target x★ on that hyperplane, a proposed corrector chooses a uniform coordinate direction, samples two distinct non-target points on that axis line and extrapolates affinely. Compute its exact success probability despite the global error rate 1/q.

**Required output:** A geometric error analysis and a justified replacement sampling rule.

**Prerequisites:** Axis-parallel geometry; Multilinear restrictions; Target-wise self-correction

**Examiner follow-up:** Does repeating this axis-only corrector and taking a majority fix the example when m>2?

<details>
<summary>Solution route / investigation plan</summary>

1. For every direction other than coordinate one, the whole line through x★ remains inside the corrupted hyperplane. On that line f equals the affine restriction of g plus one, so two sampled points reconstruct f(x★), which is wrong. In direction one, all non-target points have first coordinate nonzero and are correct, so extrapolation gives g(x★).

2. The success probability is exactly 1/m, while relative Hamming error is only 1/q. This is not a contradiction to proximity: errors may be highly concentrated around a chosen target. A corrector using random full-dimensional affine or quadratic curves obtains uniform marginals at each nonzero curve parameter and can prove a bound that holds for every fixed target.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Multilinearity and decoding](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-multilinear--multilinear-hyperplane-corruption)

---

## 9. Keep integer-grid encodings within a bit budget

**Examiner challenge · proof · 35 minutes suggested**

ID: core-bfl-multilinear--multilinear-integer-grid-bit-bounds

Let g be the multilinear polynomial interpolating integer Boolean-corner values of magnitude at most K. On I^m with I={0,…,N−1}, N≥2, bound the magnitude and bit length of every evaluation, and bound the bit size of coefficients. Explain why polynomial answer length does not imply that the full encoded table is polynomial size.

**Required output:** Magnitude, coefficient and table-size bounds in one explicit parameter table.

**Prerequisites:** Boolean interpolation over integers; Bit complexity; Exponential tables

**Examiner follow-up:** What breaks if corner values are unrestricted rationals with unbounded denominator length?

<details>
<summary>Solution route / investigation plan</summary>

1. Use g(x)=∑_b v_b∏_{i:b_i=1}x_i∏_{i:b_i=0}(1−x_i). Every summand is integral and has magnitude at most KN^m, so |g(x)|≤2^mKN^m. Signed evaluations therefore use O(log(K+1)+m log N+m) bits. Expanding the factors shows each coefficient is a signed sum of at most 2^m corner values, bounded by 2^mK.

2. A single point address has O(m log N) bits and its answer has the stated polynomial bit length when the parameters do. The full grid still contains N^m points, and the Boolean-corner representation already has 2^m values. Do not confuse a local answer bound with an efficient direct evaluator or a polynomial-size global certificate. This integer-grid accounting is separate from finite-field cardinality arguments.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Multilinearity and decoding](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-multilinear--multilinear-integer-grid-bit-bounds)

---

## 10. Prevent cancellation when checking many residuals

**Examiner challenge · synthesis · 45 minutes suggested**

ID: core-bfl-multilinear--multilinear-weighted-residual-check

A fixed multilinear residual A:F_q^m→F_q should vanish on the Boolean cube. Show why checking only ∑_b A(b)=0 is unsound. Construct a random-weight polynomial H(r)=∑_b A(b)∏_i r_i^(b_i), prove its identity-test bound, and express H(r) as a Boolean sum suitable for degree-two-per-coordinate sum-check.

**Required output:** A cancellation example and a complete weighted-residual verification reduction.

**Prerequisites:** Multilinear polynomials; Schwartz–Zippel; Sum-check

**Examiner follow-up:** How do self-correction failures for the final A evaluation enter the budget?

<details>
<summary>Solution route / investigation plan</summary>

1. For m=1, residual values 1 and −1 cancel in odd characteristic despite both being nonzero. In H, each Boolean residual is the coefficient of a distinct monomial in r, so H is nonzero iff at least one residual is nonzero. Its total degree is at most m, giving Pr_r[H(r)=0]≤m/q for uniform independent field coordinates.

2. Write H(r)=∑_{b∈{0,1}^m} A(b)∏_i[(1−b_i)+r_i b_i]. The summand polynomial has individual degree at most two, so an ordinary sum-check adds at most 2m/q error when its final A evaluation is trusted. The combined algebraic error is at most 3m/q. The residual must be one fixed decoded function before r is chosen; adapting the whole residual after seeing r invalidates this coefficient argument.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Multilinearity and decoding](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-multilinear--multilinear-weighted-residual-check)

---

## 11. Compose structural testing, correction and computation checks

**Research seminar · research-extension · 50 minutes suggested**

ID: core-bfl-multilinear--multilinear-end-to-end-decoding-budget

Assume a structural test establishes, except with probability β, one fixed multilinear g at distance at most α from f. An algebraic verifier makes t adaptive evaluations and has ideal soundness γ. Use affine-line correction with m+1 distinct nonzero samples per target to derive an end-to-end error budget. Choose explicit α,β,γ for target η and state the field-size requirements.

**Required output:** A dependency diagram, conditional composition proof and concrete η-budget.

**Prerequisites:** Proximity theorems; Affine-line interpolation; Adaptive coupling

**Examiner follow-up:** How could robust decoding improve the required α compared with insisting that all m+1 samples are correct?

<details>
<summary>Solution route / investigation plan</summary>

1. For any fixed target x and uniform direction R, each nonzero x+sR is uniform. The truthful restriction has degree at most m, and a union bound over m+1 queried points makes one correction fail with probability at most (m+1)α. This target-wise guarantee survives adaptive target selection when fresh directions are used.

2. Condition on the structural guarantee and couple all corrected answers with g. Total false acceptance is at most β+t(m+1)α+γ. One sufficient allocation is β≤η/3, γ≤η/3 and α≤η/[3t(m+1)], with q≥m+2 to provide distinct nonzero interpolation parameters and whatever larger q the algebraic checks require. State the assumed structural theorem explicitly; this composition does not prove its proximity conclusion.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Multilinearity and decoding](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-multilinear--multilinear-end-to-end-decoding-budget)

---

## 12. Extend every resource bound to individual degree d

**Research seminar · research-extension · 55 minutes suggested**

ID: core-bfl-multilinear--multilinear-individual-degree-d

Replace multilinearity by individual degree at most d<q on F_q^m. Prove the evaluation code’s dimension and exact distance, derive affine-line degree and a basic target-wise correction bound, and choose q as a function of m,d for constant relative distance. Compare all table and local-message sizes with d=1.

**Required output:** Generalized distance and correction proofs plus a d=1 versus d>1 resource comparison.

**Prerequisites:** Tensor-product polynomial codes; Univariate roots; Self-correction

**Examiner follow-up:** For the quadratic-curve corrector, replace every occurrence of m by which degree parameter?

<details>
<summary>Solution route / investigation plan</summary>

1. The monomial basis has (d+1)^m terms, the block length is q^m and the minimum distance is (q−d)^m, by the same tensor induction and a product of d distinct linear factors in each coordinate. Relative distance is (1−d/q)^m; q≥2md makes it at least one half by Bernoulli’s inequality.

2. An arbitrary affine-line restriction has total degree at most md, not d. If q≥md+2, interpolating from md+1 distinct nonzero points gives a failure bound (md+1)α against a fixed α-corrupted word, using uniform marginals. For both constant distance and this corrector take q≥max(2md,md+2). Local axis polynomials require d+1 coefficients, while point addresses remain m log q bits. Report the exponential dependence of the global coefficient count on m and the polynomial dependence of local messages on d.

</details>

[Babai–Fortnow–Lund · Two-Prover Interactive Protocols · Multilinearity and decoding](https://lance.fortnow.com/papers/files/mip2.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bfl-multilinear--multilinear-individual-degree-d)
