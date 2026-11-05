# Scheduling schemes: large jobs, rounded types, configurations

§3.2 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-scheduling-scheme)

## 1. Scheduling schemes: large jobs, rounded types, configurations

**Doctoral proof · proof · 30 minutes suggested**

ID: core-scheduling-scheme--source-proof

Design a dual-approximation feasibility test for a proposed T. Bound the number of large-job types and configurations, prove the rounding loss and small-job insertion bound, then state exactly which parameters are fixed for polynomial time.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Identical-machine makespan scheduling admits a PTAS by rounding large jobs and placing the small jobs after solving a bounded-type configuration problem.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. If pᵢ>εT, a T-load machine has fewer than 1/ε such jobs. Rounding to multiples of ε²T increases its large-job load by at most εT.

2. A machine configuration records counts of rounded types, not item identities. With ε fixed, the family of configurations is bounded independently of n.

3. If a small job of length at most εT is placed last, its start time is at most total load/m≤T whenever a T-schedule exists; its completion is at most (1+ε)T. Combine this with the rounding slack and rescale the internal ε.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-scheduling-scheme--source-proof)

---

## 2. What fails for unrelated machines?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-scheduling-scheme--oral-check-1

What fails for unrelated machines?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Identical-machine makespan scheduling admits a PTAS by rounding large jobs and placing the small jobs after solving a bounded-type configuration problem.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. A job has a different length on each machine; the identical-type compression and common average-load argument no longer give this proof.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-scheduling-scheme--oral-check-1)

---

## 3. Does a large exponent depending on ε give an FPTAS?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-scheduling-scheme--oral-check-2

Does a large exponent depending on ε give an FPTAS?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Identical-machine makespan scheduling admits a PTAS by rounding large jobs and placing the small jobs after solving a bounded-type configuration problem.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. It gives a PTAS only. Keep the distinction between n^(f(1/ε)) and poly(n,1/ε) explicit.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-scheduling-scheme--oral-check-2)

---

## 4. The list-scheduling barrier before rounding

**Doctoral proof · counterexample · 35 minutes suggested**

ID: core-scheduling-scheme--list-scheduling-barrier

For m≥2 identical machines, prove list scheduling has ratio at most 2−1/m. Then give a job order attaining that ratio using m(m−1) unit jobs followed by one job of length m. Explain why a PTAS must exploit more information than the next least-loaded machine.

**Required output:** A sharp proof and a matching parameterized instance.

**Prerequisites:** identical-machine makespan; average-load lower bound

**Examiner follow-up:** Why does ordering jobs by nonincreasing size invalidate this particular bad example?

<details>
<summary>Solution route / investigation plan</summary>

1. Let j be the last completing job and s its start time. At its assignment every machine has load at least s, so ms≤sum p_i−p_j. Consequently Cmax≤sum p_i/m+(1−1/m)p_j≤(2−1/m)OPT, using both total-load and largest-job lower bounds.

2. The unit jobs leave every machine at load m−1. The final job creates makespan 2m−1. An optimum places the long job alone and distributes the m(m−1) unit jobs as m units on each of the remaining m−1 machines, so OPT=m. The family is exact for every m, rather than an asymptotic assertion hiding an ordering condition.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-scheduling-scheme--list-scheduling-barrier)

---

## 5. A fixed-machine approximation scheme by load states

**Doctoral proof · construction · 45 minutes suggested**

ID: core-scheduling-scheme--fixed-machine-load-dp

For fixed m and positive integer processing times, let L=max(max p_j,sum p_j/m), h=εL/n, and round each job down to multiples of h. Build an exact DP over m−1 rounded machine loads and prove the reconstructed schedule has makespan at most (1+ε)OPT.

**Required output:** An explicit recurrence and the dependence of its exponent on m.

**Prerequisites:** multidimensional DP; load lower bounds

**Examiner follow-up:** How does symmetry reduction by sorting machine loads affect reconstruction?

<details>
<summary>Solution route / investigation plan</summary>

1. Use states recording the first m−1 loads after a job prefix; the final machine load is determined by the rounded prefix total. A transition assigns the next rounded job to any machine. All rounded loads are at most sum p_j/h≤mn/ε, so the number of states is polynomial for fixed m.

2. An optimum original schedule remains a rounded schedule of makespan at most OPT. The DP finds a rounded optimum no worse than this. Restoring original times increases any one machine by less than nh=εL≤εOPT. The exponent depends on m, so this construction alone does not give a uniform PTAS when m belongs to the input.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-scheduling-scheme--fixed-machine-load-dp)

---

## 6. A separating certificate for rounded configurations

**Examiner challenge · proof · 45 minutes suggested**

ID: core-scheduling-scheme--configuration-obstruction

At target T=1, suppose jobs have sizes 2/5 and 3/5, with counts a and b and m machines. Enumerate maximal feasible configurations and derive necessary and sufficient inequalities on a,b,m for a packing. Include an explicit reconstruction and compare with the total-load bound.

**Required output:** All maximal configurations, an exact characterization, and a counterexample to volume sufficiency.

**Prerequisites:** configuration representation; integer feasibility

**Examiner follow-up:** Add jobs of size 1/5 and derive the new residual-capacity conditions.

<details>
<summary>Solution route / investigation plan</summary>

1. A machine can hold either two 2/5 jobs or one of each type or one 3/5 job; no machine holds two 3/5 jobs. Thus b≤m is necessary. Use b bins for the larger jobs, put min(a,b) smaller jobs beside them, then pair any remaining smaller jobs in unused bins. Feasibility is equivalent to b+ceil(max(0,a−b)/2)≤m.

2. Equivalently b≤m and a+b≤2m, for integer a,b. These conditions are also sufficient by the construction. Total load alone is weaker: m=2,a=0,b=3 has load 9/5≤2 but needs three bins. The count inequalities are certificates tied to the feasible configuration set, rather than an unexplained LP feasibility claim.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-scheduling-scheme--configuration-obstruction)

---

## 7. Why the makespan PTAS need not be fully polynomial

**Examiner challenge · synthesis · 40 minutes suggested**

ID: core-scheduling-scheme--strong-hardness-fptas

Assume the standard strong NP-completeness of 3-PARTITION with 3m integer values in (B/4,B/2) summing to mB, where B is polynomially bounded. Prove that an FPTAS for makespan on an input number m of identical machines would imply P=NP. Choose ε explicitly.

**Required output:** A gap-preserving reduction and a runtime calculation.

**Prerequisites:** strong NP-completeness; integer objective gaps

**Examiner follow-up:** Why does the same ε choice fail to contradict an FPTAS for ordinary binary-encoded knapsack?

<details>
<summary>Solution route / investigation plan</summary>

1. Map each value to a job and use m machines. The total-load lower bound is B. A makespan-B schedule exists exactly when each machine receives a triple summing to B, because the strict size bounds force three jobs per machine. In a NO instance every schedule has integral makespan at least B+1.

2. Run an assumed FPTAS with ε=1/(2B). In a YES instance it returns makespan at most B+1/2, hence at most B by integrality; in a NO instance no such schedule exists. Since B is polynomially bounded on the strongly hard family, 1/ε is polynomial. The argument uses strong hardness essentially and does not contradict the fixed-m construction.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-scheduling-scheme--strong-hardness-fptas)

---

## 8. Geometric rounding and a bounded configuration universe

**Examiner challenge · construction · 45 minutes suggested**

ID: core-scheduling-scheme--geometric-large-types

Fix η∈(0,1/4), target T, and jobs in (ηT,T]. Round each job upward to the next value ηT(1+η)^q. Bound the number of types and configurations of load at most (1+η)T. Prove a T-schedule of the original large jobs induces a feasible rounded configuration multiset.

**Required output:** An upward-rounding lemma and explicit enumeration bounds.

**Prerequisites:** geometric sequences; configuration enumeration

**Examiner follow-up:** Compare this type bound with additive rounding at spacing η²T.

<details>
<summary>Solution route / investigation plan</summary>

1. Each rounded processing time is at most (1+η) times its original value, so a machine of original load at most T has rounded load at most (1+η)T. There are O(log(1/η)/η) types, with one additional endpoint type if necessary. Each configuration contains fewer than (1+η)/η jobs.

2. A coarse bound on the number of count vectors is (1+floor((1+η)/η))^d, where d is the type count. This is finite as a function of η alone. A DP over remaining counts of all d types and machine count can test integral configuration feasibility in n^O(d) time. State this exponent instead of inferring an FPTAS from the bounded universe.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-scheduling-scheme--geometric-large-types)

---

## 9. Research exercise: audit a configuration relaxation

**Research seminar · research-extension · 95 minutes suggested**

ID: core-scheduling-scheme--configuration-lp-audit

For T=1, enumerate rational job sizes on the grid {1/6,…,1} and count vectors with at most 18 jobs. Compare the minimum integral number of configurations with the configuration LP optimum. Use exact subset assignment as a baseline; exhibit and verify a gap or report the searched domain without claiming equality.

**Required output:** An enumerator specification, exact certificates, and a bounded-domain results table.

**Prerequisites:** configuration LP; integer programming certificates

**Examiner follow-up:** What does ceiling every positive LP variable prove when the number of types is fixed?

<details>
<summary>Solution route / investigation plan</summary>

1. Create a variable for each feasible type-count vector and constraints that cover every job multiplicity. Fractional solutions provide lower bounds, but rounded variable counts do not automatically use at most m machines. Verify an integral packing by writing every configuration and its multiplicity, then reconstructing the original job identities.

2. For each reported fractional optimum, produce a dual feasible type-price vector with the same value: every configuration must have total price at most one. This supplies a check independent of solver status. Reject any claimed gap whose certificates disagree. The investigation targets the difference between fractional and integral configurations; a finite search cannot establish that the gap is universally absent.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-scheduling-scheme--configuration-lp-audit)

---

## 10. Research exercise: round a sparse configuration solution

**Research seminar · research-extension · 90 minutes suggested**

ID: core-scheduling-scheme--configuration-support-rounding

For d rounded large-job types and a feasible configuration covering LP of value M, prove there is an optimal basic solution with at most d positive variables. Show that opening ceilings of these configurations uses at most M+d machines. Test this additive bound against exact integer optima for d≤4; explain why it is insufficient for a makespan PTAS with exactly m machines.

**Required output:** A sparse-support lemma, additive rounding theorem, and a controlled comparison.

**Prerequisites:** basic LP solutions; configuration covering

**Examiner follow-up:** Under what lower bound on M does M+d become a multiplicative (1+η) bound?

<details>
<summary>Solution route / investigation plan</summary>

1. The covering LP has d demand inequalities and nonnegative variables. At an extreme optimum at most d configuration variables are positive, by the standard linearly independent active-column argument. An extreme optimum exists because the positive all-one objective gives a bounded optimal face. Rounding each positive count up preserves coverage and adds less than d to the fractional objective.

2. Extra covered jobs can be discarded from configurations, yielding a valid assignment of every input job once. The resulting bound is on the number of machines, not the makespan on a prescribed m. For the experiment compare with an exact count-vector DP and check both coverage and machine count. Treat exceeding M+d, or silently using extra machines in an m-machine schedule, as failure.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-scheduling-scheme--configuration-support-rounding)

---

## 11. Budget the error of target search explicitly

**Doctoral proof · construction · 40 minutes suggested**

ID: core-scheduling-scheme--geometric-target-search

Let L=max(max p_j,sum p_j/m) and U=sum p_j. A dual test never rejects T≥OPT and returns makespan≤(1+η)T on acceptance. Search targets L(1+η)^r and prove the first accepted target yields ratio at most (1+η)², with polynomially many tests for fixed η.

**Required output:** A finite target grid, accuracy budget, and runtime bound.

**Prerequisites:** dual approximation; geometric search

**Examiner follow-up:** Why is ordinary binary search unsafe if test acceptance is not monotone?

<details>
<summary>Solution route / investigation plan</summary>

1. Choose the first grid value T*≥OPT. Its predecessor is below OPT, so T*<(1+η)OPT unless T*=L=OPT. The test accepts T*, hence the first accepted target is no larger and its schedule has makespan at most (1+η)²OPT.

2. Since U/L≤m, O(ln m/η) grid steps reach U. Rational targets can be generated multiplicatively with polynomial bit lengths. For desired ε∈(0,1), η=ε/3 makes (1+η)²≤1+ε. Test acceptance below OPT is harmless because it supplies a concrete bounded-makespan schedule.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-scheduling-scheme--geometric-target-search)

---

## 12. Small jobs must be defined relative to machine speed

**Examiner challenge · counterexample · 30 minutes suggested**

ID: core-scheduling-scheme--speed-dependent-smallness

On two uniformly related machines of speeds 1 and η², with target T=1, take a single job of work η. Show that declaring it small because p≤ηT and assigning it to an arbitrary least-normalized-load machine can produce makespan 1/η. State the machine-dependent quantity a valid extension must control.

**Required output:** An explicit speed-normalization failure and a corrected parameter.

**Prerequisites:** identical versus related machines; processing-time normalization

**Examiner follow-up:** Would choosing the machine minimizing the new completion time avoid this particular example?

<details>
<summary>Solution route / investigation plan</summary>

1. Initially both normalized loads are zero, so an allowed tie choice sends the job to the speed-η² machine. Its processing time is η/η²=1/η, whereas assigning it to the speed-one machine gives optimum η. The job is small in raw work but enormous in completion time on the slow machine.

2. The relevant increment is p_j/s_i, not p_j alone. A related-machine scheme needs admissible machine-dependent rounding, assignment constraints, or a dispatch rule with its own proof. The identical-machine small-job insertion lemma cannot be transferred just by replacing average loads with speed-normalized loads.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.2](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-scheduling-scheme--speed-dependent-smallness)
