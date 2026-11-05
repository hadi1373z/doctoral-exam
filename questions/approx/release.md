# Release-date scheduling: randomized α-points

§5.9 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-release)

## 1. Release-date scheduling: randomized α-points

**Doctoral proof · proof · 30 minutes suggested**

ID: core-release--source-proof

Specify the time-indexed LP and its completion-time expression. Prove that the rounded schedule respects release dates. Explain which random variable is integrated in the factor-2 analysis and how pseudo-polynomial time is addressed.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** A time-indexed LP and randomized ordering give a factor-2 approximation for the assigned single-machine weighted-completion-time problem with release dates.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. A job contributes exactly pⱼ units of processing after rⱼ; machine capacity is at most one per slot. The average fractional processing time plus pⱼ/2 lower-bounds the integral completion time.

2. An α-point is the time by which α of the job’s fractional processing has accumulated. It is not a random independent machine choice.

3. The analysis bounds earlier ordered workload through the fractional prefix volumes, integrates over α, and sums with weights. A polynomial implementation needs time compression or a polynomially bounded horizon reduction, not merely a DP indexed by a binary-encoded horizon.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.9](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-release--source-proof)

---

## 2. Why cannot Smith’s rule simply ignore release dates?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-release--oral-check-1

Why cannot Smith’s rule simply ignore release dates?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A time-indexed LP and randomized ordering give a factor-2 approximation for the assigned single-machine weighted-completion-time problem with release dates.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. An efficient job may be unavailable; idle time and the arrival constraints alter the feasible ordering problem.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.9](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-release--oral-check-1)

---

## 3. What must a weighted proof preserve?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-release--oral-check-2

What must a weighted proof preserve?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A time-indexed LP and randomized ordering give a factor-2 approximation for the assigned single-machine weighted-completion-time problem with release dates.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. A bound on E[Cⱼ] for every job before summing wⱼE[Cⱼ]. An unweighted total bound does not imply it.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.9](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-release--oral-check-2)

---

## 4. Integral processing slots do not enforce nonpreemption

**Doctoral proof · proof · 45 minutes suggested**

ID: core-release--transportation-integrality

For integer processing times and release dates on a finite integer horizon H, prove the slot relaxation sum_j y_jt≤1, sum_t y_jt=p_j, y_jt=0 before release has an integral optimum for every linear objective. Explain why this does not solve nonpreemptive weighted completion time exactly.

**Required output:** A flow reduction and an explicit integral-but-preempted witness.

**Prerequisites:** network-flow integrality; time-indexed scheduling

**Examiner follow-up:** Write constraints that would enforce a single start time, and explain how they change the polytope.

<details>
<summary>Solution route / investigation plan</summary>

1. Build a bipartite flow network with source-to-job capacity p_j, job-to-eligible-slot capacity one, and slot-to-sink capacity one. Sending total flow sum p_j corresponds to a feasible processing table. Integer capacities and a linear min-cost-flow objective give an integral optimum, so each slot can be assigned wholly to one job.

2. Integral slots for a job need not be consecutive. Its LP completion surrogate is mean occupied slot midpoint plus p_j/2, rather than its last occupied slot endpoint. A job occupying slots one and four has p=2, surrogate (0.5+3.5)/2+1=3, but actual preemptive completion four. Integrality of this transportation polytope does not impose the missing contiguity constraint.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.9](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-release--transportation-integrality)

---

## 5. Exactly measure the completion surrogate’s slack

**Doctoral proof · proof · 40 minutes suggested**

ID: core-release--surrogate-idle-gap

A job of integer size p occupies distinct unit slots with endpoints t_1<…<t_p=D. Define Cbar=(1/p)sum(t_i−1/2)+p/2. Prove D−Cbar equals the mean backward displacement from the final p consecutive slots, and characterize when equality Cbar=D holds.

**Required output:** An exact slack identity and equality characterization.

**Prerequisites:** completion-time LP; ordered slot indices

**Examiner follow-up:** Give a p=2 family where D−Cbar is arbitrarily large in the binary encoding length.

<details>
<summary>Solution route / investigation plan</summary>

1. The final p consecutive endpoints are D−p+1,…,D. Their mean midpoint is D−p/2. Therefore D−Cbar=(1/p)sum_{i=1}^p[(D−p+i)−t_i]. Each summand is nonnegative because p−i occupied slots must occur after t_i before or at D.

2. Equality holds exactly when t_i=D−p+i for every i, meaning the job runs without an internal gap over its final p slots. The identity quantifies precisely how preemption can lower the relaxation objective. Release dates restrict eligible slots but do not alter the displacement argument.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.9](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-release--surrogate-idle-gap)

---

## 6. Handle ties in independently sampled processing times

**Examiner challenge · proof · 45 minutes suggested**

ID: core-release--tie-aware-prefix-bound

Let job j independently sample X_j=t−1/2 with probability y_jt/p_j. Use any fixed deterministic tie order. Prove E[sum_{k before j}p_k | X_j=x]≤sum_{t≤x+1/2}sum_{k≠j}y_kt, stating where independence and the tie convention enter.

**Required output:** A conditional-workload calculation with a rigorous tie treatment.

**Prerequisites:** conditional probability; LP machine capacity

**Examiner follow-up:** Why are ties impossible between distinct jobs when the processing table is integral?

<details>
<summary>Solution route / investigation plan</summary>

1. If k precedes j, then X_k≤x; equality may or may not put k first according to the fixed tie order. Thus its conditional precedence probability is at most Pr[X_k≤x | X_j=x]. Independence removes conditioning, and multiplying by p_k cancels the sampling normalization. Summing yields the claimed inequality.

2. The upper bound deliberately includes all equal-time samples and is safe under any fixed tie rule. Machine capacity then bounds the prefix sum by x+1/2 in unit slots. It is an inequality, not the equality obtained by assuming no ties; rational discrete sampling can produce ties unless the LP processing table is integral.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.9](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-release--tie-aware-prefix-bound)

---

## 7. A common quantile destroys the prefix calculation

**Examiner challenge · counterexample · 40 minutes suggested**

ID: core-release--shared-quantile-failure

Take p_A=p_B=2 with A processed fractionally in slots 1 and 3 and B in slots 2 and 4. Draw a common uniform quantile α and use each job’s α-point. Conditional on B’s first α-point, compare A’s preceding full processing time with A’s fractional processing volume before that point.

**Required output:** An exact conditional-probability counterexample and a limited conclusion.

**Prerequisites:** α-points; conditional independence

**Examiner follow-up:** What changes when α_A and α_B are independent?

<details>
<summary>Solution route / investigation plan</summary>

1. For α≤1/2 the sample midpoints are X_A=0.5 and X_B=1.5; for α>1/2 they are 2.5 and 3.5. Conditioning on X_B=1.5 forces the first case, so A precedes B with probability one and contributes its full length two.

2. Before time endpoint two the fractional processing volume of A is only one. Thus the independent-sampling identity would give one while the common-quantile conditional workload is two. This disproves that intermediate calculation for common quantiles; it does not by itself prove that every common-quantile scheduling algorithm has approximation ratio worse than two.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.9](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-release--shared-quantile-failure)

---

## 8. Analyze intentional idle time in a priority schedule

**Examiner challenge · construction · 40 minutes suggested**

ID: core-release--priority-recurrence-idle

For a fixed priority order j_1,…,j_n, define S_l=max(C_{l−1},r_{j_l}) and C_l=S_l+p_{j_l}. Prove C_l=max_{h≤l}[r_{j_h}+sum_{q=h}^l p_{j_q}]. Give a two-job instance showing that this ordered schedule may idle while a later-priority job is available.

**Required output:** An exact completion formula and a schedule trace.

**Prerequisites:** release-date feasibility; max-plus recurrences

**Examiner follow-up:** Derive C_l≤max_{h≤l}r_{j_h}+sum_{q≤l}p_{j_q} from the exact formula.

<details>
<summary>Solution route / investigation plan</summary>

1. Expand the recurrence inductively. Multiplying no quantities is required: C_l=max(r_{j_l}+p_{j_l},C_{l−1}+p_{j_l}), and substituting the previous expansion produces the maximum over all suffixes of the priority prefix. This formula is exact even when there are several idle intervals.

2. Let the first-priority job have release ten and processing one, and the second have release zero and processing one. The schedule idles to ten even though the second job is available. Such idling is consistent with preserving a sampled priority order. Replacing it with a work-conserving dispatch rule defines another algorithm whose weighted-cost proof must be checked separately.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.9](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-release--priority-recurrence-idle)

---

## 9. Research exercise: implement the relaxation without its horizon

**Research seminar · research-extension · 100 minutes suggested**

ID: core-release--compressed-preemptive-solver

For binary integer p_j,r_j and rational w_j, prove that always processing an available unfinished job of maximum w_j/p_j minimizes sum_j(w_j/p_j)∫t y_j(t)dt. Implement an event-driven representation with at most 2n processing intervals and compare with an explicit slot min-cost-flow baseline for small horizons.

**Required output:** An exchange proof, compressed solver, and exact baseline comparison.

**Prerequisites:** exchange arguments; preemptive scheduling; LP objective

**Examiner follow-up:** How can a heap implement releases and completions in O(n log n) arithmetic operations?

<details>
<summary>Solution route / investigation plan</summary>

1. If a lower-density job runs while a higher-density job is available, exchange equal small amounts of their processing between the current time and a later time where the higher-density job runs. Feasibility is preserved because both jobs are released by the earlier time. The objective change is nonpositive, yielding the density-priority rule by repeated exchange or a limiting argument.

2. The chosen job changes only at a release or completion event, so there are at most 2n nonidle intervals, with polynomial-bit endpoints. Integrate t over each interval exactly and sample a job’s processing position from its interval lengths. The explicit finite-horizon flow optimum is the baseline; objective disagreement or more than O(n) genuine event intervals is failure. This verifies the book’s compression argument rather than approximating an exponential slot array.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.9](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-release--compressed-preemptive-solver)

---

## 10. Research exercise: audit completion distributions exactly

**Research seminar · research-extension · 90 minutes suggested**

ID: core-release--exact-sampling-comparison

For n≤7 and H≤12, use an integral optimal slot table and enumerate all independent sample combinations. Compute each job’s exact expected nonpreemptive completion under the sampled order and compare with 2Cbar_j. Also compare with deterministic scheduling by Cbar_j; no approximation claim for the latter is assumed.

**Required output:** Exact expectation tables and reproducible per-job certificates.

**Prerequisites:** finite product distributions; priority schedules

**Examiner follow-up:** Why does a bound on the unweighted average completion not suffice for the same audit?

<details>
<summary>Solution route / investigation plan</summary>

1. Job j has p_j equiprobable occupied slots in an integral table, so the product sample space has size product p_j. For each sample vector sort by midpoint, run the release-respecting recurrence, and accumulate rational per-job expectations. Check the stronger per-job inequality before summing with weights.

2. Use exhaustive order enumeration for the exact nonpreemptive optimum and the slot relaxation as two distinct baselines. Report cases with different deterministic and randomized behavior. A violation of E[C_j]≤2Cbar_j is failure; a poor mean-order schedule is simply evidence that replacing random samples by their means requires another proof. Specify ties, seeds for generated instances, and all input ranges.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.9](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-release--exact-sampling-comparison)

---

## 11. The relaxation and rounding are exact when releases vanish

**Doctoral proof · proof · 40 minutes suggested**

ID: core-release--zero-release-exactness

Assume all release dates are zero. Prove decreasing w_j/p_j minimizes weighted completion time by an adjacent-pair exchange. Show the density-priority relaxation schedule is contiguous in this order and that independent processing-time sampling always returns the same optimal order.

**Required output:** An exact special-case theorem connecting exchange, LP, and rounding.

**Prerequisites:** Smith ordering; slot relaxation; exchange arguments

**Examiner follow-up:** Which single step breaks when a higher-density job is released later?

<details>
<summary>Solution route / investigation plan</summary>

1. For adjacent jobs i then j after a fixed prefix, exchanging them changes their weighted completion contribution by w_jp_i−w_ip_j. Hence placing i first is no worse exactly when w_i/p_i≥w_j/p_j. Repeated exchanges establish the density order, with ties interchangeable.

2. With all jobs available, the preemptive density rule never needs to interrupt the current highest-density job, so its processing intervals are contiguous and its completion surrogate is exact. Any sampled processing point of an earlier job precedes every sampled point of a later one. Thus the rounding produces the same density order in every outcome.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.9](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-release--zero-release-exactness)

---

## 12. Unit jobs make the slot relaxation exact even with releases

**Examiner challenge · construction · 35 minutes suggested**

ID: core-release--unit-job-exactness

Let every processing time be one and releases be nonnegative integers. Prove the completion surrogate equals the assigned slot endpoint, so an integral optimal slot solution directly yields an optimal nonpreemptive schedule. Explain why the independent-sampling rounding has no remaining randomness.

**Required output:** An exact algorithm and an integrality-to-schedule proof.

**Prerequisites:** transportation integrality; unit-job scheduling

**Examiner follow-up:** Does the same exactness hold for arbitrary rational release dates on a fixed unit grid?

<details>
<summary>Solution route / investigation plan</summary>

1. For p_j=1 occupying slot t, the surrogate is (t−1/2)+1/2=t, exactly its completion time. The bipartite job-slot flow LP has an integral optimum; each job occupies one eligible slot and every slot has at most one job, giving a feasible nonpreemptive schedule of the LP value.

2. Each job’s sample distribution has one point, so ordering samples is deterministic. Scheduling that order as early as releases allow can only improve completion times; because the LP is a lower bound it must preserve optimal objective. A polynomial implementation may use the event-driven relaxation solver instead of explicitly constructing a huge horizon.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §5.9](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-release--unit-job-exactness)
