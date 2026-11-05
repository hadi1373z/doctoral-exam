# Gaussian threshold rounding for independent sets

§13.2 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-gaussian-color)

## 1. Gaussian threshold rounding for independent sets

**Doctoral proof · proof · 45 minutes suggested**

ID: core-gaussian-color--source-proof

Derive the one-vertex and two-adjacent-vertex tail estimates used by the algorithm. Optimize the threshold so the expected repair cost is smaller than the retained mass, retaining logarithmic factors rather than hiding them prematurely.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** The section’s Gaussian-vector algorithm extracts an independent set of expected size Ω(nΔ^−1/3(ln Δ)^−1/2) from a promised 3-colorable graph.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. A unit vector dotted with a standard Gaussian is N(0,1). An edge’s two projections are jointly Gaussian with correlation at most −1/2.

2. If both projections exceed t, their sum exceeds 2t, while the sum variance is at most 1. This makes adjacent co-selection much rarer than single-vertex selection.

3. The expected independent-set size is at least the expected selected vertices minus the expected selected edges. Optimizing the Gaussian threshold yields the stated Δ^−1/3 factor with the tail prefactor involving √ln Δ.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §13.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gaussian-color--source-proof)

---

## 2. Why is this not independent vertex sampling?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-gaussian-color--oral-check-1

Why is this not independent vertex sampling?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The section’s Gaussian-vector algorithm extracts an independent set of expected size Ω(nΔ^−1/3(ln Δ)^−1/2) from a promised 3-colorable graph.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. All vertex choices use one Gaussian direction and are correlated; the useful negative correlation comes from the SDP geometry.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §13.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gaussian-color--oral-check-1)

---

## 3. What changes when Δ is bounded by a small constant?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-gaussian-color--oral-check-2

What changes when Δ is bounded by a small constant?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The section’s Gaussian-vector algorithm extracts an independent set of expected size Ω(nΔ^−1/3(ln Δ)^−1/2) from a promised 3-colorable graph.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Use a separate constant-size-degree argument rather than treating ln Δ at Δ=1 as a valid asymptotic formula.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §13.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gaussian-color--oral-check-2)

---

## 4. Prove the Gaussian tail bounds with their prefactors

**Doctoral proof · proof · 45 minutes suggested**

ID: core-gaussian-color--mills-ratio-proof

For standard normal density φ and upper tail Q(t), prove tφ(t)/(1+t²)≤Q(t)≤φ(t)/t for t>0. Use the proof to state a uniform two-sided asymptotic bound Q(t)=Θ(e^(−t²/2)/t) for t≥1, with explicit constants.

**Required output:** A full tail proof with explicit usable constants.

**Prerequisites:** integration by parts; Gaussian density

**Examiner follow-up:** Derive the next asymptotic term by applying integration by parts once more.

<details>
<summary>Solution route / investigation plan</summary>

1. Since s≥t, Q(t)=∫_t^∞φ(s)ds≤(1/t)∫_t^∞sφ(s)ds=φ(t)/t. Integration by parts gives Q(t)=φ(t)/t−∫_t^∞φ(s)/s² ds≥φ(t)/t−Q(t)/t², which rearranges to the lower bound.

2. For t≥1, t/(1+t²)≥1/(2t), so φ(t)/(2t)≤Q(t)≤φ(t)/t. The constants are therefore 1/(2sqrt(2π)) and 1/sqrt(2π) in front of e^(−t²/2)/t. The prefactor cannot be discarded when optimizing logarithmic corrections in a rounding threshold.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §13.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gaussian-color--mills-ratio-proof)

---

## 5. A conditional tail estimate for negatively correlated projections

**Doctoral proof · proof · 45 minutes suggested**

ID: core-gaussian-color--conditional-negative-correlation

Let U,V be standard normals with correlation ρ≤−a for fixed 0<a<1. Prove Pr[V≥t | U≥t]≤Q(t sqrt((1+a)/(1−a))) for t≥0. Treat the degenerate case ρ=−1 separately.

**Required output:** A parameterized conditional-tail lemma with endpoint handling.

**Prerequisites:** Gaussian orthogonal decomposition; monotone tails

**Examiner follow-up:** For a=1/2, recover the sqrt(3)t conditional threshold used in the book.

<details>
<summary>Solution route / investigation plan</summary>

1. For −1<ρ<0 write V=ρU+sqrt(1−ρ²)Z with Z independent standard normal. On U≥t and V≥t one must have Z≥(t−ρU)/sqrt(1−ρ²)≥t(1−ρ)/sqrt(1−ρ²). This last threshold is t sqrt((1−ρ)/(1+ρ)).

2. Independence lets one bound the conditional Z-tail by its unconditional Q value. Since (1−ρ)/(1+ρ) increases as ρ decreases, replacing ρ by −a weakens the bound safely. For ρ=−1, V=−U and simultaneous positive-threshold selection has probability zero; at t=0 the joint event also has probability zero.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §13.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gaussian-color--conditional-negative-correlation)

---

## 6. Compare two deterministic repairs of the selected graph

**Examiner challenge · synthesis · 40 minutes suggested**

ID: core-gaussian-color--isolate-versus-edge-repair

For a selected vertex set S, compare keeping only isolated vertices of G[S] with deleting at most one endpoint per edge. Prove bounds |isolates|≥|S|−2e(S) and α(G[S])≥|S|−e(S). Give families where their actual outputs differ by an unbounded factor.

**Required output:** Two proved inequalities and an explicit output-separation family.

**Prerequisites:** induced subgraphs; alteration

**Examiner follow-up:** Can maximal matching endpoints give an efficiently computable alternative repair certificate?

<details>
<summary>Solution route / investigation plan</summary>

1. At most 2e(S) vertices are incident to any edge, giving the isolate bound. To obtain an independent set, repeatedly choose an existing edge and delete one endpoint; at most e(S) deletions are necessary because each deletion destroys at least the chosen edge and creates none.

2. If G[S] is a matching on 2m vertices, the isolate-only repair keeps zero vertices, while one-endpoint repair keeps m. Add one isolated vertex to make the ratio m+1 versus one, which is unbounded. Expected-size analyses must use the repair actually implemented: the book’s conditional survival proof applies naturally to isolated selected vertices, while the edge-count inequality supports another valid repair.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §13.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gaussian-color--isolate-versus-edge-repair)

---

## 7. Convert expected independent-set size into success probability

**Examiner challenge · proof · 40 minutes suggested**

ID: core-gaussian-color--expectation-amplification-cost

Let a randomized independent-set algorithm output X∈[0,n] with E X≥γn, 0<γ≤1. Prove Pr[X≥γn/2]≥γ/(2−γ), give a distribution attaining the limiting bound, and bound independent repetitions needed for failure probability at most η.

**Required output:** A sharp bounded-variable estimate and an amplification runtime.

**Prerequisites:** bounded random variables; probability amplification

**Examiner follow-up:** What bound follows if X has a known second moment and Paley–Zygmund is available?

<details>
<summary>Solution route / investigation plan</summary>

1. Writing p=Pr[X≥γn/2], bound E X≤p n+(1−p)γn/2, with a limiting interpretation for strict failure. Rearranging gives p≥γ/(2−γ). A distribution concentrated at n and just below γn/2 approaches equality, so constant success probability independent of γ cannot follow from expectation alone.

2. Independent repetitions miss with probability at most (1−p)^R≤e^(−pR). Thus R≥((2−γ)/γ)ln(1/η) suffices. Keeping the largest valid output never lowers success. The repetition factor depends on the extraction fraction γ, which is polynomially small in Δ for Gaussian rounding.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §13.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gaussian-color--expectation-amplification-cost)

---

## 8. Account for both successful rounds and failed Gaussian trials

**Examiner challenge · construction · 45 minutes suggested**

ID: core-gaussian-color--full-coloring-runtime

Assume every induced s-vertex residual graph has a randomized independent-set routine with expected output at least γs, for a fixed γ valid throughout. Design a full coloring algorithm and prove O(γ^−1 log n) colors and O(γ^−2 log n) expected routine calls.

**Required output:** A Las Vegas coloring procedure with explicit color and call counts.

**Prerequisites:** independent-set extraction; amplification; geometric decay

**Examiner follow-up:** How does a dynamically improving degree bound alter the sum of runtimes?

<details>
<summary>Solution route / investigation plan</summary>

1. On a residual graph repeatedly run the routine until it returns at least γs/2 vertices. The bounded-variable argument gives success probability at least γ/2, so the expected calls for that successful round are at most 2/γ. Color the returned independent set with a new color and remove it.

2. The residual count shrinks by factor at most 1−γ/2, so O(γ^−1 log n) successful rounds suffice. Multiplying by the expected calls per round gives O(γ^−2 log n) total calls. Feasibility is checked on every output, and induced subgraphs inherit the original vector assignment and maximum-degree bound.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §13.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gaussian-color--full-coloring-runtime)

---

## 9. Research exercise: weighted Gaussian independent-set extraction

**Research seminar · research-extension · 85 minutes suggested**

ID: core-gaussian-color--weighted-extraction

Assign nonnegative weights w_v and suppose adjacent vectors have product at most −1/2. Select above t and keep selected vertices with no selected neighbor. If ΔQ(sqrt(3)t)≤1/2, prove expected retained weight≥(Q(t)/2)sum w_v. Compare with exact maximum-weight independent sets for small planted 3-colorable graphs.

**Required output:** A weighted extension theorem and a reproducible exact-optimum comparison.

**Prerequisites:** conditional Gaussian tails; weighted indicators

**Examiner follow-up:** Can degree-specific survival bounds improve the weighted sum without changing one global threshold?

<details>
<summary>Solution route / investigation plan</summary>

1. For each vertex v, conditional on its selection, a union bound over neighbors bounds deletion probability by ΔQ(sqrt(3)t). Hence its survival probability is at least Q(t)/2. Multiply by its nonnegative weight and sum; no independence among vertex survival events is needed.

2. The resulting objective is compared with total weight, which upper-bounds weighted OPT, so it also gives the same approximation fraction against OPT. Use exhaustive subset enumeration as the baseline and exact or certified Gaussian tail values for the bound. Failure means a nonindependent output or an expectation below the proved weighted bound; variance can be dominated by one heavy vertex and should be reported separately.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §13.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gaussian-color--weighted-extraction)

---

## 10. Research exercise: optimize the logarithmic correction

**Research seminar · research-extension · 100 minutes suggested**

ID: core-gaussian-color--logarithmic-threshold-refinement

For sufficiently large Δ choose t²=(2/3)ln Δ−(1/3)ln ln Δ+C. Using the conditional Gaussian bound, prove a fixed sufficiently large C makes ΔQ(sqrt(3)t)≤1/2 and yields expected independent-set size Ω(nΔ^−1/3(ln Δ)^−1/3). Compare with the book’s simpler threshold and treat small Δ separately.

**Required output:** A rigorous refined asymptotic bound and finite-cutoff verification.

**Prerequisites:** Mills ratio; conditional survival; asymptotic error control

**Examiner follow-up:** How does the logarithmic exponent change for general correlation bound −a?

<details>
<summary>Solution route / investigation plan</summary>

1. The upper tail gives ΔQ(sqrt(3)t)≤Δ exp(−3t²/2)/(sqrt(6π)t)=e^(−3C/2)(ln Δ)^(1/2)/(sqrt(6π)t). Since t² is asymptotic to (2/3)ln Δ, this is below one half for a fixed sufficiently large C and all large Δ.

2. The lower tail gives Q(t)=Ω(e^(−t²/2)/t)=Ω(Δ^−1/3(ln Δ)^(1/6)/(ln Δ)^(1/2)). Conditional survival preserves at least half this mass. Choose an explicit finite cutoff and use a greedy bounded-degree independent set below it. Numerically compare exact Q-based certificates across Δ; a negative t² or an unmet survival inequality is failure. This is a specified analytical refinement, with no novelty claim.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §13.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gaussian-color--logarithmic-threshold-refinement)

---

## 11. Orthogonality needs Gaussianity to imply projection independence

**Doctoral proof · counterexample · 40 minutes suggested**

ID: core-gaussian-color--isotropic-is-not-gaussian

Let R=(ε_1,ε_2) with independent fair signs and u=(1,1)/sqrt(2), v=(1,−1)/sqrt(2). Show R has identity covariance and u,v are orthogonal, yet U=u·R and V=v·R are dependent. Contrast with a standard Gaussian direction.

**Required output:** A precise isotropic counterexample and a Gaussian MGF proof.

**Prerequisites:** covariance; joint Gaussian distributions

**Examiner follow-up:** How does a rotationally invariant uniform unit direction behave in dimension two?

<details>
<summary>Solution route / investigation plan</summary>

1. Both projections have mean zero and variance one, and their covariance is u·v=0. However UV=(ε_1²−ε_2²)/2=0 always. Each projection equals zero with probability one half, while they are never simultaneously zero, contradicting independence.

2. For a Gaussian direction g, E exp(su·g+tv·g)=exp[(s²+t²)/2] when u,v are orthogonal. The joint MGF factors into the marginal MGFs, proving independence. Identity covariance alone therefore cannot justify the conditional tail factorization in Gaussian independent-set rounding.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §13.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gaussian-color--isotropic-is-not-gaussian)

---

## 12. Normalizing the Gaussian changes threshold selection

**Examiner challenge · counterexample · 35 minutes suggested**

ID: core-gaussian-color--normalizing-direction-error

Compare S={v:g·v≥t} for standard Gaussian g with S′={v:(g/||g||)·v≥t}. For t>1 show the second always selects nothing while the first has positive marginal selection probability. Derive the correct conditional sphere threshold given radius R=||g||.

**Required output:** A normalization counterexample and the exact radius-conditioned rule.

**Prerequisites:** Gaussian radial decomposition; unit-vector bounds

**Examiner follow-up:** Why is hyperplane rounding at threshold zero unaffected by this normalization?

<details>
<summary>Solution route / investigation plan</summary>

1. A unit direction r and unit vector v satisfy r·v≤1, so threshold t>1 makes S′ empty. For Gaussian g, g·v is standard normal and exceeds every finite t with positive probability. Keeping the same numeric threshold after normalization therefore changes the algorithm radically.

2. Write g=Rr, where Gaussian rotational invariance makes r uniform on the sphere and independent of R. Conditional on R, the equivalent selection rule is r·v≥t/R. Replacing R by sqrt(d) is an approximation requiring a separate error analysis, not an exact identity in finite dimension.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §13.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gaussian-color--normalizing-direction-error)
