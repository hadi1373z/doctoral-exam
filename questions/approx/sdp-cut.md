# Gram matrices and the exact MAX-CUT ratio

§§6.1–6.2 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-sdp-cut)

## 1. Gram matrices and the exact MAX-CUT ratio

**Doctoral proof · proof · 30 minutes suggested**

ID: core-sdp-cut--source-proof

Derive the SDP and the angle probability without invoking the algorithm’s name. Characterize an interior minimizer of the ratio. Explain why negative edge weights invalidate this edgewise summation proof.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** A PSD matrix with unit diagonal is a Gram matrix of unit vectors. Hyperplane rounding gives separation probability θ/π and the Goemans–Williamson factor minθ 2θ/[π(1−cos θ)]≈0.87856.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. For integral signs, Xᵢⱼ=sᵢsⱼ; dropping rank one leaves X≽0 and Xᵢᵢ=1. The relaxed objective is an upper bound for maximization.

2. Rotational symmetry reduces an edge to a plane; the separating normal directions occupy angular measure 2θ out of 2π, giving θ/π.

3. The stationary equation is 1−cos θ=θ sin θ. Compare both sides edgewise; multiplication by a negative weight reverses an inequality, so the standard nonnegative-weight hypothesis matters.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§6.1–6.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sdp-cut--source-proof)

---

## 2. Can a numerically tiny negative eigenvalue be ignored in a rigorous proof?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-sdp-cut--oral-check-1

Can a numerically tiny negative eigenvalue be ignored in a rigorous proof?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A PSD matrix with unit diagonal is a Gram matrix of unit vectors. Hyperplane rounding gives separation probability θ/π and the Goemans–Williamson factor minθ 2θ/[π(1−cos θ)]≈0.87856.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. A certified or appropriately repaired PSD solution and optimization tolerance are needed; exact feasibility and floating-point output are different claims.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§6.1–6.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sdp-cut--oral-check-1)

---

## 3. Does the SDP optimum equal OPT?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-sdp-cut--oral-check-2

Does the SDP optimum equal OPT?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A PSD matrix with unit diagonal is a Gram matrix of unit vectors. Hyperplane rounding gives separation probability θ/π and the Goemans–Williamson factor minθ 2θ/[π(1−cos θ)]≈0.87856.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Not generally. It is an upper bound and can have a nontrivial integrality gap.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§6.1–6.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sdp-cut--oral-check-2)

---

## 4. Solve the triangle relaxation exactly

**Doctoral proof · proof · 40 minutes suggested**

ID: core-sdp-cut--triangle-gap-certificate

For the unit-weight triangle compute MAX-CUT, its Gram SDP optimum, and the expected cut of hyperplane rounding at an optimal vector solution. Prove the SDP upper bound directly from the squared norm of the vector sum.

**Required output:** Exact primal, integral, and rounding certificates.

**Prerequisites:** Gram SDP; hyperplane separation

**Examiner follow-up:** Why does the triangle gap not equal the universal worst hyperplane ratio?

<details>
<summary>Solution route / investigation plan</summary>

1. For unit vectors v_1,v_2,v_3, nonnegativity of ||v_1+v_2+v_3||² gives sum_{i<j}v_i·v_j≥−3/2. Therefore the SDP objective sum(1−v_i·v_j)/2 is at most 9/4, attained by three coplanar vectors at angles 120 degrees.

2. An integral cut has at most two triangle edges, and two are attainable. Each vector pair is separated with probability 2/3, so the expected rounded cut is two, giving integral-to-SDP ratio 8/9. Since the vector sum is zero, a nondegenerate hyperplane cannot put all three on the same side; every rounded cut actually has value two.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§6.1–6.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sdp-cut--triangle-gap-certificate)

---

## 5. Build a spectral dual certificate for MAX-CUT

**Doctoral proof · construction · 45 minutes suggested**

ID: core-sdp-cut--spectral-dual

Let L be the weighted Laplacian of a nonnegative weighted graph. Write the Gram SDP as max tr(LX)/4 with X PSD and diagonal one. Prove that any λ with Diag(λ)−L/4 PSD certifies upper bound sum λ_i, and construct the uniform certificate λ_i=λ_max(L)/4.

**Required output:** A dual-feasibility proof and a computable spectral upper bound.

**Prerequisites:** PSD matrices; trace inner products; graph Laplacian

**Examiner follow-up:** When is the bound larger than the trivial total-edge-weight bound?

<details>
<summary>Solution route / investigation plan</summary>

1. For PSD A,X, tr(AX)≥0, since tr(AX)=tr(A^(1/2)XA^(1/2)) and the latter matrix is PSD. Apply this to A=Diag(λ)−L/4. Because X_ii=1, the inequality rearranges to tr(LX)/4≤sum λ_i.

2. Taking every λ_i=λ_max(L)/4 makes A=(λ_max(L)I−L)/4 PSD by the spectral theorem. This bounds the SDP by nλ_max(L)/4 and hence bounds every integral cut. For a triangle λ_max=3, recovering 9/4. Equality requires the range of X to lie in the top-eigenspace for this uniform certificate.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§6.1–6.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sdp-cut--spectral-dual)

---

## 6. Characterize when the SDP reaches total edge weight

**Examiner challenge · proof · 40 minutes suggested**

ID: core-sdp-cut--bipartite-exactness

Assume every graph edge has positive weight. Prove the MAX-CUT SDP value equals total edge weight W if and only if the graph is bipartite. Show that hyperplane rounding is exact on every SDP optimum attaining W.

**Required output:** An iff theorem and an outcome-level rounding proof.

**Prerequisites:** bipartite graphs; unit-vector equality

**Examiner follow-up:** Does a connected bipartite graph force an attaining solution to have rank one?

<details>
<summary>Solution route / investigation plan</summary>

1. Every edge contribution is at most its weight. A bipartition assigns antipodal unit vectors to its sides, attaining W. Conversely attaining W forces v_u·v_v=−1 on every edge because all weights are positive; equality for unit vectors implies v_v=−v_u.

2. Along an odd cycle successive sign reversals would give v=−v, impossible for a unit vector. Thus the graph is bipartite. A random hyperplane separates every antipodal edge except on a probability-zero orthogonality event, so it returns value W. Zero-weight edges must be omitted from the converse graph characterization.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§6.1–6.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sdp-cut--bipartite-exactness)

---

## 7. Repair a slightly indefinite numerical Gram matrix

**Examiner challenge · construction · 45 minutes suggested**

ID: core-sdp-cut--near-psd-repair

Suppose a symmetric matrix X has diagonal one and minimum eigenvalue at least −δ, δ≥0. Prove Xhat=(X+δI)/(1+δ) is a feasible Gram matrix. Express its MAX-CUT objective in terms of the original value S and total edge weight W, and derive a rounding guarantee if S≥SDP*−τ.

**Required output:** An explicit feasible repair and quantitative objective-error propagation.

**Prerequisites:** eigenvalue shifts; SDP rounding tolerance

**Examiner follow-up:** How can a rational diagonal-dominance bound produce a conservative certified δ?

<details>
<summary>Solution route / investigation plan</summary>

1. Adding δI makes every eigenvalue nonnegative, and division by 1+δ restores the diagonal to one. For off-diagonal edges Xhat_uv=X_uv/(1+δ). Therefore Shat=(S+δW/2)/(1+δ), an exact identity.

2. For nonnegative weights Shat≥S/(1+δ), so hyperplane rounding gives expectation at least α_GW(SDP*−τ)/(1+δ). A certified lower bound on the minimum eigenvalue is needed to justify the repair; an unverified floating-point eigenvalue estimate is not itself such a certificate. Factorization accuracy introduces a separate geometric error if vectors are computed approximately.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§6.1–6.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sdp-cut--near-psd-repair)

---

## 8. Derandomize a rank-two vector solution by sweeping angles

**Examiner challenge · construction · 45 minutes suggested**

ID: core-sdp-cut--rank-two-angle-sweep

Given unit vectors in the plane and a nonnegative weighted graph, design a deterministic algorithm finding a hyperplane cut whose value is at least the average random-hyperplane value. Count candidate cuts and explain how to sweep all sign changes efficiently.

**Required output:** A candidate enumeration proof and a sweep algorithm.

**Prerequisites:** planar angular order; hyperplane rounding

**Examiner follow-up:** What exact predicates would replace floating-point angle comparisons for rational planar vectors?

<details>
<summary>Solution route / investigation plan</summary>

1. A vertex changes side only when the normal direction becomes perpendicular to its vector. These are at most 2n event angles over a full turn; between events the cut is constant. Evaluate one angle in each open interval, excluding zero-probability boundary degeneracies. The largest interval value is at least their length-weighted average.

2. Sort the events and update the cut when the affected vertices flip. Process simultaneous events together so no artificial boundary cut is counted as a full-measure interval. Updating incident edges over all events costs O(m) after sorting, yielding O(n log n+m) arithmetic operations once vector angles can be compared reliably.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§6.1–6.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sdp-cut--rank-two-angle-sweep)

---

## 9. Research exercise: solve every odd-cycle SDP

**Research seminar · research-extension · 95 minutes suggested**

ID: core-sdp-cut--odd-cycle-sdp-family

For odd n≥3 prove the unit-cycle SDP optimum is n(1+cos(π/n))/2, while MAX-CUT is n−1. Construct an attaining rank-two solution and a spectral dual certificate. Verify the formulas for n≤21 against numerical SDP output and exact angular integration.

**Required output:** Matching primal-dual formulas and a reproducible verification table.

**Prerequisites:** cycle eigenvalues; spectral SDP dual; planar embeddings

**Examiner follow-up:** Determine the limiting integral-to-SDP ratio as n grows.

<details>
<summary>Solution route / investigation plan</summary>

1. Place consecutive cycle vectors at angle π−π/n. Because n is odd, the total turn is (n−1)π, an integer multiple of 2π, so the embedding closes. Every edge contributes (1+cos(π/n))/2. The cycle Laplacian has eigenvalues 2−2cos(2πj/n), whose maximum is 2+2cos(π/n).

2. The uniform spectral dual therefore matches the constructed objective. Hyperplane rounding has expectation n·(π−π/n)/π=n−1, so every positive-measure rounded cut is optimal because no cut exceeds n−1. Record numerical residuals against these exact formulas; an SDP value above the certified optimum beyond tolerance or a mismatched angular average is failure. This is a known-target family study.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§6.1–6.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sdp-cut--odd-cycle-sdp-family)

---

## 10. Research exercise: transfer rounding to signed edge rewards

**Research seminar · research-extension · 90 minutes suggested**

ID: core-sdp-cut--signed-reward-shift

For each edge give a nonnegative reward for either equality or inequality of endpoint signs. Formulate a Gram SDP and prove the same α_GW edgewise guarantee for total reward. Then translate it to a signed MAX-CUT objective with negative weights, retaining the additive shift. Compare with exact enumeration for n≤12.

**Required output:** A correct signed-reward formulation and a shift-aware comparison.

**Prerequisites:** hyperplane probabilities; affine objective shifts

**Examiner follow-up:** Why can the resulting signed objective be negative even though reward is always nonnegative?

<details>
<summary>Solution route / investigation plan</summary>

1. An inequality edge has reward probability θ/π and SDP contribution (1−cos θ)/2. An equality edge has probability 1−θ/π and contribution (1+cos θ)/2; apply the same angular inequality at angle π−θ. All reward weights are nonnegative, so the inequalities sum safely.

2. For signed cut weights w, replace each negative edge by an equality reward |w|. The reward objective is signed-cut value plus W_−=sum_{w<0}|w|. Hence the guarantee becomes ALG_signed≥α OPT_signed−(1−α)W_−, rather than a pure α ratio. Exact sign enumeration is the baseline; dropping this additive term or obtaining an incompatible reward expectation is failure.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§6.1–6.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sdp-cut--signed-reward-shift)

---

## 11. The arcsine transform of a correlation matrix is PSD

**Doctoral proof · proof · 45 minutes suggested**

ID: core-sdp-cut--arcsine-correlation-psd

Let X be PSD with unit diagonal. Prove the entrywise matrix Y_ij=(2/π)arcsin(X_ij) is also PSD with unit diagonal by interpreting it as a rounded sign-correlation matrix. Derive the formula from hyperplane separation rather than invoking a general entrywise matrix theorem.

**Required output:** An exact correlation identity and a direct positivity proof.

**Prerequisites:** Gram representation; hyperplane rounding; PSD expectations

**Examiner follow-up:** What matrix is obtained when X already has rank one with sign entries?

<details>
<summary>Solution route / investigation plan</summary>

1. Represent X_ij=v_i·v_j and let s_i=sign(g·v_i) for a standard Gaussian g. If θ=arccos X_ij, then E[s_is_j]=1−2θ/π=(2/π)arcsin X_ij. Each coordinate is almost surely nonzero because v_i is unit.

2. For every real a, aᵀYa=E[(sum_i a_i s_i)²]≥0. Thus Y is PSD, and Y_ii=1 follows from s_i²=1. The proof establishes one specific nonlinear entrywise transformation through a probability representation; arbitrary entrywise transformations do not automatically preserve PSD.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§6.1–6.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sdp-cut--arcsine-correlation-psd)

---

## 12. Contract an equality constraint in the Gram SDP

**Examiner challenge · construction · 40 minutes suggested**

ID: core-sdp-cut--forced-equality-contraction

Assume X PSD, X_ii=X_jj=1, and X_ij=1. Prove rows i and j coincide. Show that a MAX-CUT SDP constrained by X_ij=1 is equivalent to merging vertices i,j, adding parallel edge weights and deleting loops. State why this is an imposed constraint rather than an arbitrary preprocessing rule.

**Required output:** A PSD equality lemma and a bidirectional quotient construction.

**Prerequisites:** Gram equality; graph contraction; SDP feasible sets

**Examiner follow-up:** How would forced opposite vectors lead to equality and inequality rewards after contraction?

<details>
<summary>Solution route / investigation plan</summary>

1. In a Gram representation, ||v_i−v_j||²=1+1−2X_ij=0, so v_i=v_j and every inner product with another vector agrees. Equivalently, e_i−e_j lies in the nullspace of X.

2. After merging the equal vectors, each pair of incident objective terms combines by adding its nonnegative weights, and an edge between i,j contributes zero. Every quotient solution lifts by duplicating the merged vector, proving equivalence. Without the equality requirement, optimal cuts may separate those vertices, so contraction could alter the problem.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§6.1–6.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sdp-cut--forced-equality-contraction)
