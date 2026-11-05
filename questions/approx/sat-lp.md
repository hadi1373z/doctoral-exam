# MAX-SAT rounding: recover 1−1/e and 3/4

§§5.4–5.6 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-sat-lp)

## 1. MAX-SAT rounding: recover 1−1/e and 3/4

**Doctoral proof · proof · 30 minutes suggested**

ID: core-sat-lp--source-proof

Derive the 1−1/e factor from the clause LP. Prove a 3/4 factor by comparing the better of fair and LP assignments, including the exceptional unit-clause case. Identify why averaging two global ratios loses the sharper bound.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** LP-marginal rounding gives a (1−1/e) guarantee; combining it with a fair assignment gives 3/4. Nonlinear marginal transformations offer another 3/4 analysis.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. For k literals, AM–GM bounds failure by (1−z/k)^k, so success is at least [1−(1−1/k)^k]z for z∈[0,1]. This is at least (1−1/e)z.

2. The fair assignment gives at least (1−2^−k)z. Averaging with LP rounding gives 3/4 for k=1, at least 3/4 for k=2, and at least 3/4 for k≥3 using (1−2^−k)+(1−1/e)≥3/2.

3. The maximum of the two final objective values is at least their average for each joint outcome. For nonlinear rounding, verify the section’s condition on f separately instead of assuming f(y)=y.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.4–5.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-lp--source-proof)

---

## 2. Why is the LP a correct benchmark for maximization?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-sat-lp--oral-check-1

Why is the LP a correct benchmark for maximization?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** LP-marginal rounding gives a (1−1/e) guarantee; combining it with a fair assignment gives 3/4. Nonlinear marginal transformations offer another 3/4 analysis.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Every Boolean assignment is LP-feasible, so LP optimum upper-bounds integral OPT.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.4–5.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-lp--oral-check-1)

---

## 3. Can correlations between repeated literals invalidate AM–GM?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-sat-lp--oral-check-2

Can correlations between repeated literals invalidate AM–GM?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** LP-marginal rounding gives a (1−1/e) guarantee; combining it with a fair assignment gives 3/4. Nonlinear marginal transformations offer another 3/4 analysis.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Yes. Normalize clauses to remove repeated variables and tautologies before using the independent-literal product.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.4–5.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-lp--oral-check-2)

---

## 4. An exact integrality gap on all sign patterns

**Doctoral proof · construction · 40 minutes suggested**

ID: core-sat-lp--all-signs-gap

For k≥2 take all 2^k clauses containing each of x_1,…,x_k exactly once, with every sign pattern and unit weight. Compute the Boolean optimum, the clause-LP optimum, and the value of independent rounding at y_i=1/2. Explain which k gives the strongest gap.

**Required output:** Exact primal and integral certificates for the parameterized family.

**Prerequisites:** clause LP; Boolean sign patterns

**Examiner follow-up:** If clause weights differ, express the integral optimum in terms of the lightest clause.

<details>
<summary>Solution route / investigation plan</summary>

1. Every assignment falsifies precisely the clause whose literals all oppose that assignment, so its value is exactly 2^k−1. The LP setting y_i=1/2,z_C=1 is feasible because each clause has literal-marginal sum k/2≥1, and it reaches the trivial upper bound 2^k.

2. Independent fair rounding has the same value 2^k−1 in every outcome. Thus the integral-to-LP ratio is 1−2^−k, minimized at k=2, where it is 3/4. This certifies that a 3/4 comparison with this LP cannot be improved for unrestricted MAX-SAT without strengthening the relaxation.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.4–5.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-lp--all-signs-gap)

---

## 5. The extremal marginal distribution for one clause

**Doctoral proof · proof · 45 minutes suggested**

ID: core-sat-lp--clause-extremal-chord

Fix a normalized clause with k≥2 literals and literal-truth marginals q_i∈[0,1] summing to z∈[0,1]. Minimize its independent-rounding success probability over these marginals. Prove the resulting function lies above its chord from z=0 to z=1, and characterize equality.

**Required output:** An extremal calculation and complete equality conditions.

**Prerequisites:** AM–GM; concavity

**Examiner follow-up:** What changes if the marginal sum exceeds one but z_C is capped at one?

<details>
<summary>Solution route / investigation plan</summary>

1. Failure is product(1−q_i). At fixed sum z, AM–GM makes this product largest when all q_i=z/k; hence the minimum success is g_k(z)=1−(1−z/k)^k. For k≥2, g_k is strictly concave on (0,1), as its second derivative is negative.

2. Since g_k(0)=0, concavity yields g_k(z)≥z g_k(1), with strict inequality for 0<z<1. Equality in the marginal step requires equal q_i, except at the trivial zero endpoint. The two inequalities have different equality conditions, which matter when diagnosing whether an LP-rounding analysis can be tight.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.4–5.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-lp--clause-extremal-chord)

---

## 6. Prove a concrete transformed-marginal rounding rule

**Examiner challenge · proof · 55 minutes suggested**

ID: core-sat-lp--affine-nonlinear-rule

Set each variable true independently with probability f(y)=1/4+y/2. Prove this produces expected clause weight at least 3/4 of the standard MAX-SAT LP value. Treat unit clauses separately and give an elementary verification for all clause widths.

**Required output:** A complete 3/4 proof for the specified rounding function.

**Prerequisites:** clause LP; AM–GM; concavity

**Examiner follow-up:** Why is the identity f(1−y)=1−f(y) necessary to use the same literal calculation for both signs?

<details>
<summary>Solution route / investigation plan</summary>

1. A literal with LP truth marginal q has rounded truth probability 1/4+q/2, for either sign. For width k and LP value z, failure is at most (3/4−z/(2k))^k. The corresponding success function is concave in z, so it suffices to check z=0 and z=1 for a lower bound 3z/4.

2. For k=1, success is 1/4+z/2≥3z/4. At z=1, width two gives failure 1/4; widths three and four give respectively (7/12)^3 and (5/8)^4, both below 1/4; for k≥5 use failure≤(3/4)^5<1/4. Sum the resulting inequalities with nonnegative weights.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.4–5.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-lp--affine-nonlinear-rule)

---

## 7. LP-optimal marginals can have different rounding values

**Examiner challenge · synthesis · 40 minutes suggested**

ID: core-sat-lp--optimal-face-rounding

For a single positive k-literal clause of weight one, restrict to LP optima satisfying sum y_i=1. Determine the minimum and maximum independent-rounding success on this optimal face, including all equality conditions. Discuss what an LP solver’s optimal objective alone certifies.

**Required output:** A face-wise extremal analysis and its algorithmic implication.

**Prerequisites:** LP optimal faces; product optimization

**Examiner follow-up:** How large is the difference between the two extremes as k tends to infinity?

<details>
<summary>Solution route / investigation plan</summary>

1. Every point on the simplex y_i≥0,sum y_i=1 with z=1 is LP-optimal. AM–GM gives maximum failure (1−1/k)^k at the uniform point, so minimum success is 1−(1−1/k)^k. The maximum success is one, attained exactly when some y_i=1, forcing the other coordinates to zero.

2. The LP objective is identically one across this face, yet rounding values vary. An arbitrary optimal solver output therefore supports the worst-face guarantee, while a favorable integral optimum gives exact satisfaction. A secondary objective or perturbation can select a face point, but its effect on global rounding must be analyzed rather than inferred from unchanged LP value.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.4–5.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-lp--optimal-face-rounding)

---

## 8. Perturb a tight two-variable gap

**Examiner challenge · construction · 35 minutes suggested**

ID: core-sat-lp--weighted-gap-sensitivity

Give the four possible signed two-literal clauses on x,y positive weights a,b,c,d. Compute the LP optimum and Boolean optimum exactly. Characterize when the integral-to-LP ratio is exactly 3/4 and quantify how imbalance in one weight changes the ratio.

**Required output:** Two exact optimum formulas and an equality characterization.

**Prerequisites:** MAX-2SAT LP; weighted objective

**Examiner follow-up:** Can merging repeated copies of a clause change either optimum?

<details>
<summary>Solution route / investigation plan</summary>

1. Each assignment falsifies one distinct clause, so OPT=W−min(a,b,c,d), where W=a+b+c+d. The half-integral setting x=y=1/2 makes every clause sum one and z=1, proving LP=W. Thus the gap is 1−min weight/W.

2. Because min weight≤W/4, the ratio is at least 3/4, with equality exactly when all weights coincide. If one weight decreases while the others are fixed, the cheapest clause becomes easier to sacrifice and the ratio increases. This demonstrates that exact LP tightness depends on balanced clause prices, not only on the incidence pattern.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.4–5.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-lp--weighted-gap-sensitivity)

---

## 9. Research exercise: certify rounding from an approximate LP

**Research seminar · research-extension · 85 minutes suggested**

ID: core-sat-lp--approximate-solver-robustness

Suppose y∈[0,1]^n,z∈[0,1]^m violate each clause constraint by at most δ_C≥0. A feasible LP dual gives upper bound U≥OPT, and sum w_C z_C≥U−τ. Prove that the better of fair and LP-marginal rounding has expectation at least (3/4)(OPT−τ−sum w_Cδ_C). Test the certificate on rationally perturbed small instances.

**Required output:** A perturbation theorem and a small exact certificate audit.

**Prerequisites:** LP certificates; clause-wise 3/4 analysis

**Examiner follow-up:** How should errors in y outside [0,1] be charged after clipping?

<details>
<summary>Solution route / investigation plan</summary>

1. Replace each z_C by z′_C=max(0,z_C−δ_C). Then z′ is feasible with the same y and its objective is at least sum w_Cz_C−sum w_Cδ_C≥OPT−τ−sum w_Cδ_C. The usual clause-wise mixed-rounding proof applies to z′, without claiming the original infeasible z is a valid relaxation solution.

2. Use exhaustive Boolean optimization and exact rational perturbations as the baseline. Report the dual certificate, total weighted violation, and the derived bound; compare exact rounding expectations by enumerating assignments. Failure means a certified expectation below the displayed lower bound. This gives a robustness exercise with a known target rather than an assertion that floating-point solver status proves feasibility.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.4–5.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-lp--approximate-solver-robustness)

---

## 10. Research exercise: numerically audit the clause inequality

**Research seminar · research-extension · 75 minutes suggested**

ID: core-sat-lp--marginal-extremal-grid

For widths 2≤k≤6 and z on {0,1/10,…,1}, enumerate rational marginal vectors q_i on the same grid with sum z. Compare minimum independent success with 1−(1−z/k)^k and its linear chord. Use AM–GM as the proved baseline, and explain grid effects when z/k is not a grid point.

**Required output:** A balancing proof and reproducible extremal tables.

**Prerequisites:** AM–GM equality; finite enumeration

**Examiner follow-up:** Derive an O(kh²) bound for the grid penalty at mesh h away from singular endpoints.

<details>
<summary>Solution route / investigation plan</summary>

1. The continuous minimum is attained by equal marginals. On a fixed grid, a product-maximizing vector has coordinates differing by at most one grid step: shifting mass from a larger q to a smaller q increases (1−q_i)(1−q_j) until they balance. Thus the exact discrete optimum can be predicted from the quotient and remainder of 10z divided by k.

2. Report continuous, discrete, and chord values separately. A discrete value below the continuous bound is failure, while a strict discrete excess can arise from divisibility rather than a stronger continuous theorem. Include endpoint equality checks and all literal sign patterns by mapping variable marginals to literal marginals. The finite study audits a specified inequality; it does not substitute sampling for proof.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.4–5.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-lp--marginal-extremal-grid)

---

## 11. An integral LP coordinate need not persist in an integer optimum

**Doctoral proof · counterexample · 40 minutes suggested**

ID: core-sat-lp--integral-coordinate-nonpersistency

For 0<a<1, take the four clauses x∨L_y∨L_z for every sign choice of y,z, each weight one, plus clause ¬x of weight a. Compute LP and Boolean optima, and prove every LP optimum fixes x=0 although every Boolean optimum has x=1.

**Required output:** Exact LP and integer values proving nonpersistency.

**Prerequisites:** MAX-SAT LP; optimal faces

**Examiner follow-up:** What happens at a=1 and a>1?

<details>
<summary>Solution route / investigation plan</summary>

1. Setting x=0,y=z=1/2 and all z_C=1 satisfies the LP and achieves total weight 4+a. Since this is the sum of all weights, every LP optimum must satisfy the positive-weight unit-clause constraint z_{¬x}≤1−x at equality one, forcing x=0.

2. If x=0, exactly one of the four signed y,z clauses is false, giving Boolean value 3+a. If x=1, all four long clauses are true and the unit clause is false, giving value four. Because a<1, only x=1 can be optimal. Fixing integral coordinates from this relaxation is therefore not a valid persistency rule.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.4–5.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-lp--integral-coordinate-nonpersistency)

---

## 12. Preserve a truth budget for positive clauses

**Examiner challenge · construction · 55 minutes suggested**

ID: core-sat-lp--positive-budget-pipage

For positive clauses only, impose sum_i y_i=k with integer k. Prove that the independent-rounding expectation f(y) can be rounded to a Boolean vector of exactly k ones without decreasing f by moving pairs of fractional coordinates oppositely to an endpoint. Derive the usual 1−1/e guarantee from the budgeted clause LP.

**Required output:** A budget-preserving rounding invariant and a complete approximation transfer.

**Prerequisites:** multilinear extension; pairwise rounding; clause LP

**Examiner follow-up:** Why can this dependent rounding outperform independent sampling without invalidating the initial expectation bound?

<details>
<summary>Solution route / investigation plan</summary>

1. For positive clauses f=sum_C w_C[1−product_{i∈C}(1−y_i)]. Every mixed partial derivative is nonpositive. Along y_i+t,y_j−t the second derivative is −2∂_ij f≥0, so the restriction is convex and one feasible endpoint has value at least the current point. Choose it, fixing at least one fractional coordinate while preserving the sum.

2. After at most n moves, integrality of k prevents one remaining fractional coordinate, so the result has exactly k ones. The starting independent expectation is at least (1−1/e) times the clause-LP objective by the usual per-clause bound. Negative literals can reverse the mixed-derivative sign and are excluded from this proof.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §§5.4–5.6](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-lp--positive-budget-pipage)
