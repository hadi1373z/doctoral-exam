# Bin packing: linear grouping and the additive term

§3.3 · Williamson–Shmoys · The Design of Approximation Algorithms

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-bin-scheme)

## 1. Bin packing: linear grouping and the additive term

**Doctoral proof · proof · 30 minutes suggested**

ID: core-bin-scheme--source-proof

Reconstruct the linear-grouping injection that compares the rounded instance with OPT. Derive an asymptotic (1+O(ε))OPT+O(1) bound. Then prove why an absolute ratio below 3/2 would solve a two-bin partition decision problem.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Grouping and rounding large items gives an asymptotic approximation scheme; the guarantee must retain its additive-bin term.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. Rounding one block upward can be charged to the preceding block’s larger items; explicitly match items between adjacent blocks. The largest block is treated separately.

2. If a new bin is opened while placing an item smaller than ε, the earlier bins have load above 1−ε. Their count is controlled by total size/(1−ε).

3. For a partition instance of total size 2 with each item at most 1, OPT=2 exactly when a two-bin packing exists. An absolute ratio strictly below 3/2 must output an integer number of bins below 3 on YES instances.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bin-scheme--source-proof)

---

## 2. Why can an APTAS coexist with this hardness?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-bin-scheme--oral-check-1

Why can an APTAS coexist with this hardness?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Grouping and rounding large items gives an asymptotic approximation scheme; the guarantee must retain its additive-bin term.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Its additive constant can matter when OPT=2; asymptotic and absolute guarantees have different quantifiers.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bin-scheme--oral-check-1)

---

## 3. Is a total-volume lower bound sufficient to pack items?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-bin-scheme--oral-check-2

Is a total-volume lower bound sufficient to pack items?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Grouping and rounding large items gives an asymptotic approximation scheme; the guarantee must retain its additive-bin term.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. Three items of size 0.6 have total 1.8 but need three unit bins.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bin-scheme--oral-check-2)

---

## 4. An additive d bound from the configuration LP

**Doctoral proof · proof · 45 minutes suggested**

ID: core-bin-scheme--large-only-basic-lp

Suppose bin-packing items take d distinct rational sizes in (0,1]. Enumerate all feasible configurations and prove that rounding an optimal basic configuration-LP solution upward yields at most OPT+d bins. State the assumptions needed to compute the configuration set in polynomial time.

**Required output:** A rounding proof plus a precise configuration-enumeration condition.

**Prerequisites:** configuration LP; basic feasible solutions

**Examiner follow-up:** Can one replace strict <LP+d by an integral bound involving floor(LP)?

<details>
<summary>Solution route / investigation plan</summary>

1. The LP minimizes the sum of configuration multiplicities subject to d coverage constraints. A basic optimum has at most d positive variables. Ceiling those variables covers all demands and uses less than LP+d≤OPT+d bins. Remove surplus copies of types and assign the actual items to obtain a valid packing.

2. For fixed d alone, tiny binary-encoded item sizes can permit exponentially large configuration coordinates. In the large-item setting where every size is at least η, each bin contains at most 1/η items and enumeration is bounded by (1+1/η)^d. Distinguish a proof with an explicitly supplied configuration set from an algorithm that must construct that set.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bin-scheme--large-only-basic-lp)

---

## 5. Volume and threshold-count bounds are complementary

**Doctoral proof · construction · 35 minutes suggested**

ID: core-bin-scheme--item-count-lower-bounds

For every integer q≥1, prove that items larger than 1/(q+1) give the lower bound ceil(N_q/q) on bin count. Construct instances where this beats volume by a factor approaching (q+1)/q, and explain why finitely many such threshold tests still do not fully characterize feasible bins.

**Required output:** The family of inequalities and an asymptotically sharp comparison.

**Prerequisites:** bin-packing lower bounds; strict inequalities

**Examiner follow-up:** Derive a valid dual type-price vector for sizes 0.51 and 0.26 that improves a selected single threshold bound.

<details>
<summary>Solution route / investigation plan</summary>

1. A bin cannot contain q+1 items each strictly larger than 1/(q+1), so q·OPT≥N_q. Take N items of size 1/(q+1)+δ with δ sufficiently small that q items fit. The count bound is approximately N/q, while total volume is approximately N/(q+1), giving the claimed factor as N grows and δ decreases.

2. These bounds price items only through threshold counts. Three items of size 0.6 and three of size 0.4 pack in three bins. Replace the small sizes by 0.39,0.39,0.42. Volume remains three and every count N_q is unchanged, but three bins are impossible: each must hold one 0.6 item and none can hold 0.42. Four bins suffice. Even volume together with all these reciprocal-threshold counts misses this mixed-size obstruction.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bin-scheme--item-count-lower-bounds)

---

## 6. A complete Next-Fit analysis and sharp family

**Examiner challenge · proof · 40 minutes suggested**

ID: core-bin-scheme--next-fit-charging

Next Fit keeps only the current open bin. Prove that it uses at most 2OPT−1 bins for nonempty instances. Give an input family whose ratio tends to 2, and identify why allowing access to earlier bins changes the example.

**Required output:** A finite-instance inequality and a parameterized lower-bound family.

**Prerequisites:** online packing; adjacent-bin charging

**Examiner follow-up:** Compute the exact bin count on this family under First Fit.

<details>
<summary>Solution route / investigation plan</summary>

1. Whenever a new bin opens, its first item did not fit in the preceding bin. Hence every consecutive pair of bins has combined final load greater than one. Pair bins (1,2),(3,4),… to obtain total volume>floor(A/2), so OPT≥floor(A/2)+1. This implies A≤2OPT−1.

2. Use alternating items ε and 1−ε+ε², with ε chosen so each pair exceeds one but many ε items fit together. Next Fit separates nearly every item, while an optimum puts each large item in its own bin and packs all small items in o(N) additional bins when ε tends to zero sufficiently quickly. Choose ε=1/N² for N pairs to make the calculation explicit.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bin-scheme--next-fit-charging)

---

## 7. Size rounding as resource augmentation

**Examiner challenge · synthesis · 35 minutes suggested**

ID: core-bin-scheme--augmentation-size-rounding

Let δ∈(0,1). Suppose each item is rounded upward to a size at most (1+δ) times its original size. Prove that an optimum original packing fits in OPT bins of capacity 1+δ after rounding. Construct a family showing that the same statement with unit capacity can fail by a constant factor.

**Required output:** A bicriteria proof and a discontinuity example.

**Prerequisites:** upward rounding; resource augmentation

**Examiner follow-up:** What additional promise on bin slack would make unit-capacity rounding safe?

<details>
<summary>Solution route / investigation plan</summary>

1. Within an original bin, the rounded total is at most (1+δ) times its original total, hence at most 1+δ. This proves a capacity-augmentation result with unchanged bin count. It does not say the rounded items fit in unit bins, and scaling the rounded solution down changes the physical sizes of the original input.

2. Take pairs of items of original size exactly 1/2 and round them to 1/2+γ with 0<γ≤δ/2. Original OPT is n/2 for even n, while rounded OPT at unit capacity is n. Thus even arbitrarily small multiplicative size increases may double bin count. Grouping arguments avoid this discontinuity through an injection into different item identities.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bin-scheme--augmentation-size-rounding)

---

## 8. Convert an additive guarantee into a threshold guarantee

**Examiner challenge · proof · 35 minutes suggested**

ID: core-bin-scheme--asymptotic-ratio-quantifiers

Suppose an algorithm satisfies A(I)≤(1+η)OPT(I)+C(η), with explicit positive C. For a requested ε∈(0,1), choose η and a threshold N_ε so that OPT≥N_ε implies A≤(1+ε)OPT. Explain why solving all smaller-optimum instances exactly is not an automatic polynomial repair.

**Required output:** An explicit threshold formula and a complexity obstruction.

**Prerequisites:** asymptotic approximation ratios; quantifier order

**Examiner follow-up:** Under a fixed lower bound η0 on every item size, how many items can a small-optimum instance contain?

<details>
<summary>Solution route / investigation plan</summary>

1. Set η=ε/2 and choose N_ε≥2C(ε/2)/ε. For OPT above this threshold, the additive term is at most εOPT/2. This derives the asymptotic ratio with the dependence of the large-instance threshold on ε made explicit. Rounding an integer N_ε upward causes no difficulty.

2. The remaining inputs can have arbitrarily many items with tiny sizes, even when OPT=2. Moreover deciding whether such a binary-encoded instance fits in two bins contains PARTITION. A threshold on optimum value is not a threshold on input length, so brute force on all small-optimum cases is not justified.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bin-scheme--asymptotic-ratio-quantifiers)

---

## 9. Research exercise: optimize a grouping budget

**Research seminar · research-extension · 85 minutes suggested**

ID: core-bin-scheme--grouping-error-budget

For items of size at least η, sort decreasingly and form groups of g=ceil(η²n) items. Set aside the first group and round later groups to their maxima. Prove an OPT+ceil(η²n) bound for the large-item stage using the inter-group injection, then convert it to (1+η)OPT+1. Compare group sizes with an exact packing baseline for n≤22.

**Required output:** A complete grouping calculation and an exact small-instance comparison.

**Prerequisites:** linear grouping; item-volume lower bound

**Examiner follow-up:** How must n be interpreted when small items are present in the full instance?

<details>
<summary>Solution route / investigation plan</summary>

1. Match the rounded items of group j≥2 positionwise to original items in group j−1, padding the last group only by deleting unused witnesses. Every matched original item is at least as large as the rounded replacement, so the later rounded groups can be packed into the bins of an optimum original packing. The first group needs at most g extra bins.

2. Since all n items have size at least η, nη≤OPT. Thus g≤η²n+1≤ηOPT+1. The experiment should vary g around the theoretical value and report the distinct-type count, extra bins, and exact optimum. Failure means an invalid injection, a rounded item exceeding its matched witness, or a claimed bound violated by a certified packing instance.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bin-scheme--grouping-error-budget)

---

## 10. Research exercise: search for valid bin prices

**Research seminar · research-extension · 85 minutes suggested**

ID: core-bin-scheme--dual-function-search

For sizes {1/5,2/5,3/5,4/5}, enumerate all configurations. Find nonnegative type prices λ maximizing a given count vector’s lower bound subject to every configuration having price at most one. Compare this dual bound, volume, and exact packing for count vectors of total size at most 24 items.

**Required output:** Configuration and price certificates plus a finite comparison table.

**Prerequisites:** LP duality; configuration enumeration

**Examiner follow-up:** Which types can share a tight configuration at an optimal dual solution?

<details>
<summary>Solution route / investigation plan</summary>

1. The constraints are finite: for each count vector a with sum a_i s_i≤1, impose sum a_i λ_i≤1. Summing the price constraint over every bin proves OPT≥sum n_i λ_i. Volume is the special feasible choice λ_i=s_i, so an optimized dual must be at least as strong when computed exactly.

2. Use exact rational certificates and an integer count-vector DP as the baseline. Record any integrality gap as OPT/dual, retaining ceiling effects separately. A purported lower bound greater than the certified optimum, or an unenumerated feasible configuration with price above one, is a failure. This is a reproducible investigation of a known LP, with no claim that finite grid behavior settles general bin packing.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bin-scheme--dual-function-search)

---

## 11. Solve packing exactly when at most two items fit

**Doctoral proof · construction · 35 minutes suggested**

ID: core-bin-scheme--two-items-matching

Assume every item size lies in (1/3,1]. Build a graph joining two items when they fit together. Prove the minimum number of bins is n−ν, where ν is maximum matching size, and give a polynomial exact algorithm.

**Required output:** An exact matching reduction with the boundary case identified.

**Prerequisites:** graph matching; bin configurations

**Examiner follow-up:** What computational obstacle appears when triples become feasible?

<details>
<summary>Solution route / investigation plan</summary>

1. No bin contains three items because their sizes sum above one. Every packing therefore consists of disjoint compatible pairs and singletons; its pairs form a matching. If there are p pairs it uses p+(n−2p)=n−p bins.

2. A maximum matching maximizes p and reconstructs a packing with n−ν bins, matching the lower bound from every packing. Sizes equal to 1/3 would permit triples and invalidate the reduction, so the strict lower bound is essential. Exact rational comparisons decide compatibility in polynomial bit complexity.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bin-scheme--two-items-matching)

---

## 12. Distinguish volume, configuration LP, and divisible packing

**Examiner challenge · synthesis · 35 minutes suggested**

ID: core-bin-scheme--divisible-volume-gap

Take n items of size 1/2+δ with δ>0 small. Compute indivisible OPT and the configuration-LP optimum. Then allow arbitrary item splitting and compute the minimum integral bin count. Explain why a volume lower bound is not the same relaxation as the configuration LP.

**Required output:** Three exact benchmark values and a relaxation comparison.

**Prerequisites:** configuration LP; divisible packing

**Examiner follow-up:** How does the example change if bins of capacity 1+2δ are allowed?

<details>
<summary>Solution route / investigation plan</summary>

1. No two original items fit, so indivisible OPT=n. Every feasible configuration contains at most one item, making the configuration covering LP also equal to n. Thus this family has no configuration-LP integrality gap.

2. With splitting, total volume can fill bins without waste, so the optimum is ceil(n(1/2+δ)). For δ tending to zero and n large, indivisible-to-divisible ratio approaches two. The volume bound discards configuration incompatibilities; an algorithm or hardness statement must specify which fractional benchmark it uses.

</details>

[Williamson–Shmoys · The Design of Approximation Algorithms · §3.3](https://designofapproxalgs.com/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-bin-scheme--divisible-volume-gap)
