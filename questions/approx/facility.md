# Facility location: clustering before randomized opening

§5.8 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-facility)

## 1. Facility location: clustering before randomized opening

**Doctoral proof · proof · 30 minutes suggested**

ID: core-facility--source-proof

Prove why independent facility opening can leave a client unserved. Explain how clustering repairs that defect, derive the rerouting path bound, and separate expected opening cost from expected assignment cost.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** The assigned randomized LP-rounding algorithm is a 3-approximation for metric uncapacitated facility location.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. With independent opening, a client’s entire support can remain closed with positive probability. A feasible fractional assignment is not itself a feasible random integral solution.

2. Disjoint representative neighborhoods permit correlated choices that guarantee an opening in each required cluster while preserving controlled marginals.

3. A rerouted client travels through its cluster representative and an opened facility. Every use of the metric inequality must be stated; nonmetric connection costs do not support this argument.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.8](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-facility--source-proof)

---

## 2. What does uncapacitated mean in this proof?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-facility--oral-check-1

What does uncapacitated mean in this proof?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The assigned randomized LP-rounding algorithm is a 3-approximation for metric uncapacitated facility location.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Once a facility is opened, rerouting any number of clients to it violates no capacity constraint.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.8](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-facility--oral-check-1)

---

## 3. Is expected feasibility enough?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-facility--oral-check-2

Is expected feasibility enough?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The assigned randomized LP-rounding algorithm is a 3-approximation for metric uncapacitated facility location.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. The constructed integral solution must serve every client in each outcome; only the objective guarantee is in expectation.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.8](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-facility--oral-check-2)

---

## 4. Complete a fractional assignment by splitting facilities

**Doctoral proof · construction · 45 minutes suggested**

ID: core-facility--facility-splitting

Given a feasible UFL LP solution with x_ij≤y_i≤1, split each facility into coincident clones so that every positive clone-client assignment equals the clone opening variable. Preserve all client mass and both fractional costs, using only polynomially many clones.

**Required output:** A polynomial splitting algorithm and exact cost identities.

**Prerequisites:** facility-location LP; interval partitions

**Examiner follow-up:** Why does this operation not prescribe independent integral opening of the clones?

<details>
<summary>Solution route / investigation plan</summary>

1. Represent facility i by an interval [0,y_i]. Sort the values 0,x_i1,…,x_in,y_i and split at their distinct endpoints. A clone has opening mass equal to its interval length. Client j uses precisely the clone intervals lying within [0,x_ij], giving each such clone assignment equal to its opening mass.

2. The assigned mass sums to x_ij for every original pair. Give every clone the original facility cost and location, so summing f_i times clone mass and c_ij times clone assignments preserves both objectives. There are at most n+1 clones per facility. Coincident points form a pseudometric; all triangle inequalities used by the rounding still hold.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.8](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-facility--facility-splitting)

---

## 5. Eliminate the dual contribution variables

**Doctoral proof · proof · 45 minutes suggested**

ID: core-facility--dual-elimination

Starting with dual constraints sum_j w_ij≤f_i, v_j−w_ij≤c_ij, w_ij≥0, eliminate w to characterize feasible v by sum_j max(0,v_j−c_ij)≤f_i. Derive c_ij≤v_j on positive assignments of an optimal primal-dual pair.

**Required output:** An exact projected dual and a justified support-distance lemma.

**Prerequisites:** LP duality; complementary slackness

**Examiner follow-up:** Interpret the terms max(0,v_j−c_ij) as client contributions toward opening facility i.

<details>
<summary>Solution route / investigation plan</summary>

1. For fixed v, the least permitted w_ij is max(0,v_j−c_ij). If the sums of these minima fit the facility costs, they give feasible w; if not, no larger choice can repair feasibility. Thus the nonlinear-looking inequalities are an exact projection of the dual polyhedron.

2. Complementary slackness on x_ij≥0 gives v_j−w_ij=c_ij whenever x_ij>0. Nonnegativity of w then gives c_ij≤v_j. This conclusion requires optimality or an explicitly bounded slack; merely feasible primal and dual solutions do not impose equality on positive assignment variables.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.8](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-facility--dual-elimination)

---

## 6. Why the same cluster opening violates hard capacities

**Examiner challenge · counterexample · 35 minutes suggested**

ID: core-facility--capacity-obstruction

Take n clients and n facilities of capacity one, with y_i=1 and x_ij=1/n. Show feasibility for the capacitated LP sum_j x_ij≤y_i. Apply the uncapacitated representative-clustering rule to these supports and show that every outcome can overload its opened facility by factor n.

**Required output:** A feasible LP witness and an explicit overload calculation.

**Prerequisites:** UFL clustering; capacitated assignment constraints

**Examiner follow-up:** Would opening a facility multiple times repair hard capacities under the original model?

<details>
<summary>Solution route / investigation plan</summary>

1. Each client has assignment sum one, each x_ij≤y_i, and each facility receives total fractional assignment one, matching its capacity times opening variable. All facilities lie in every client support, so choosing the first representative removes every client from further clustering.

2. The rule opens one supported facility and assigns all n clients there, producing load n although its capacity is one. Costs can come from coincident or arbitrarily close metric points and do not affect this infeasibility. A capacitated relaxation may be perfectly feasible while an uncapacitated rounding rule fails outcome by outcome.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.8](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-facility--capacity-obstruction)

---

## 7. Change representative priority and track the lost constant

**Examiner challenge · synthesis · 45 minutes suggested**

ID: core-facility--priority-certificate-four

Modify the book algorithm to choose an unassigned representative minimizing v_j alone, while opening according to x_ij. Using optimal primal-dual solutions, derive the available 4-approximation charge. Identify the exact comparison missing from the sharper 3-approximation proof.

**Required output:** A complete modified analysis and an accurately limited conclusion.

**Prerequisites:** facility-location dual; metric rerouting

**Examiner follow-up:** Why is a numerical pair v_j=v_l with C_j>C_l enough to invalidate the missing algebraic comparison?

<details>
<summary>Solution route / investigation plan</summary>

1. For a client l removed by representative j, a shared support facility h gives expected connection at most v_l+v_j+C_j. Support complementary slackness implies C_j≤v_j, and the new priority gives v_j≤v_l. Hence the connection is at most 3v_l. Disjoint representative supports still bound expected opening by F, the fractional opening cost.

2. Summing gives F+3D≤4LP, where D=sum v=LP and F≤LP. The refined proof requires v_j+C_j≤v_l+C_l, which ordering only by v does not supply. This is a bound for the modified algorithm; it is not a constructed lower-bound instance proving its actual worst ratio equals four.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.8](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-facility--priority-certificate-four)

---

## 8. Derandomize after the client groups are fixed

**Examiner challenge · construction · 40 minutes suggested**

ID: core-facility--local-choice-derandomization

In the book algorithm, fix the representative sequence and the group assigned to each representative before drawing facilities. Show that choosing, within each representative support, a facility minimizing its opening cost plus all assigned clients’ connection costs gives a deterministic solution no more expensive than the randomized expectation.

**Required output:** A deterministic algorithm with a local-to-global cost proof.

**Prerequisites:** linearity of expectation; facility clustering

**Examiner follow-up:** What breaks in this argument for a randomized algorithm whose later groups depend on earlier facility draws?

<details>
<summary>Solution route / investigation plan</summary>

1. For representative j with assigned group A_j, define g_j(i)=f_i+sum_{l∈A_j}c_il for i in N(j). The randomized local expected cost is sum_i x_ij g_j(i), so its minimum support value is no larger than that average. Compute and choose a minimizing facility separately in every group.

2. Representative supports are disjoint and groups partition the clients, so summing these local costs counts every selected facility once and every client assignment once. The representative selection depends on LP values and support intersections, not on earlier random opening outcomes. Therefore the groups really can be fixed in advance, and the existing expectation bound becomes a deterministic cost bound.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.8](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-facility--local-choice-derandomization)

---

## 9. Research exercise: rounding with approximate complementary slackness

**Research seminar · research-extension · 90 minutes suggested**

ID: core-facility--approximate-slack-robustness

Assume a feasible primal has cost at most LP*+τ, a feasible dual has objective D, and every positive assignment obeys c_ij≤v_j+σ for uniform σ≥0. Choose representatives by v_j+C_j. Prove expected cost≤3OPT+τ+2nσ and audit it on rationally perturbed line-metric instances against exact facility-subset enumeration.

**Required output:** A robust rounding theorem and exact small-instance error certificates.

**Prerequisites:** dual feasibility; metric clustering; approximation errors

**Examiner follow-up:** Replace uniform σ by client-specific residuals and derive the representative-group weighted error.

<details>
<summary>Solution route / investigation plan</summary>

1. A client l assigned via representative j has expected connection at most v_l+σ+v_j+σ+C_j≤2v_l+C_l+2σ. Summing this and the opening bound gives F+C+2D+2nσ. Weak duality gives D≤OPT and primal near-optimality gives F+C≤LP*+τ≤OPT+τ.

2. The proof does not assume exact complementary slackness, but the support-distance residual must actually be checked. For small line instances enumerate facility subsets and optimal nearest assignments as the exact baseline; report τ, maximum support residual, and the certified total. An output above the stated bound after exact local derandomization, or an unchecked residual, is failure.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.8](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-facility--approximate-slack-robustness)

---

## 10. Research exercise: compute the cost distribution by clusters

**Research seminar · research-extension · 85 minutes suggested**

ID: core-facility--cluster-cost-variance

For a fixed optimal LP and deterministic representative groups, let Z_j be the total opening-plus-assignment cost of group j under its support draw. Prove independence yields Var(sum Z_j)=sum Var(Z_j). Compute the exact distribution for metric instances with at most eight groups and compare Monte Carlo estimates with exact enumeration and the 3LP expectation baseline.

**Required output:** Exact moment formulas and a reproducible distribution audit.

**Prerequisites:** independent cluster draws; variance; finite convolution

**Examiner follow-up:** How can a bound on each local cost range improve Markov’s inequality for the total?

<details>
<summary>Solution route / investigation plan</summary>

1. Each Z_j is a function only of the facility sampled for its own representative. Independent draws therefore make the local costs independent even though all assignments inside a group are correlated. Its mean and second moment are sum_i x_ij g_j(i) and sum_i x_ij g_j(i)^2; subtract the square of the mean for its variance.

2. Convolve the finite local distributions or enumerate their Cartesian product to get an exact baseline. Record random seed, repetitions, and confidence intervals rather than treating empirical agreement as proof. Failure criteria include an exact expectation above 3LP, a variance inconsistent with the sum formula, or a claimed independence factorization when representative groups were allowed to depend on draws.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.8](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-facility--cluster-cost-variance)

---

## 11. Solve the one-client facility LP and dual exactly

**Doctoral proof · proof · 35 minutes suggested**

ID: core-facility--single-client-exactness

For one client j with nonnegative facility opening costs f_i and connection costs c_i, prove the LP optimum is min_i(f_i+c_i). Construct a matching dual solution and characterize when fractional mixtures are also optimal.

**Required output:** Exact primal-dual solutions and an optimal-face description.

**Prerequisites:** UFL primal and dual; convex combinations

**Examiner follow-up:** How can zero opening costs create additional freedom in y without changing x?

<details>
<summary>Solution route / investigation plan</summary>

1. Feasibility gives sum_i x_i=1 and y_i≥x_i. With nonnegative f_i choose y_i=x_i, so cost is the convex combination sum_i(f_i+c_i)x_i. Its minimum is the smallest coefficient, attained by opening one minimizing facility.

2. Set v=min_i(f_i+c_i) and w_i=max(0,v−c_i). Then w_i≤f_i and v−w_i≤c_i, so this dual has objective v and matches the primal. Fractional mixtures over minimizing facilities are optimal; mass on a strictly more expensive coefficient cannot occur in an optimal positive-cost assignment.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.8](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-facility--single-client-exactness)

---

## 12. Why the priority coefficient one is special

**Examiner challenge · proof · 50 minutes suggested**

ID: core-facility--priority-parameter-analysis

Choose representatives by v_j+λC_j for λ≥0. Using C_j≤v_j, derive factor 2+2/(1+λ) for 0≤λ≤1 and factor λ+2 for λ≥1. Show these certified factors are minimized at λ=1.

**Required output:** A parameterized charge and a correctly qualified minimization.

**Prerequisites:** facility rerouting charge; parameter optimization

**Examiner follow-up:** Which assumptions would be needed to claim the actual algorithmic ratio is minimized at the same λ?

<details>
<summary>Solution route / investigation plan</summary>

1. For 0≤λ≤1 and C≤v, (1+λ)(v+C)≤2(v+λC). Priority ordering therefore bounds a client l connection by [(3+λ)/(1+λ)]v_l+[2λ/(1+λ)]C_l. The latter C coefficient is at most one, so adding opening cost gives factor 1+(3+λ)/(1+λ).

2. For λ≥1, v_j+C_j≤v_j+λC_j≤v_l+λC_l, giving total bound F+λC+2D≤(λ+2)LP. The first expression decreases from four to three and the second increases from three. This proves optimality of λ=1 within these charging bounds, without proving other λ have matching lower-bound instances.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.8](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-facility--priority-parameter-analysis)
