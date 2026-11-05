# Gradations and adaptive-query variance accounting

§7.4 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-gradation)

## 1. Gradations and adaptive-query variance accounting

**Doctoral proof · proof · 45 minutes suggested**

ID: core-gradation--source-proof

Formulate the gradation Lipschitz condition and show how it induces a martingale. Contrast a sum of worst-case squared effects with a variance budget along an adaptive decision-tree path. Explain why variance alone cannot control arbitrarily large jumps.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** A Lipschitz condition on a gradation controls martingale increments. A variance-sensitive adaptive-query bound requires its additional maximum-effect hypothesis.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. A gradation specifies what is revealed at each stage. The conditional expectation process is a martingale by the tower property.

2. Bounded maximum effect and bounded cumulative conditional variance are separate pieces of information. A rare enormous jump can have small variance yet spoil a claimed sub-Gaussian tail outside the admissible range.

3. To apply the adaptive theorem, verify its bound on every possible query path, not only on the average executed path.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gradation--source-proof)

---

## 2. Can the next queried coordinate depend on earlier answers?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-gradation--oral-check-1

Can the next queried coordinate depend on earlier answers?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A Lipschitz condition on a gradation controls martingale increments. A variance-sensitive adaptive-query bound requires its additional maximum-effect hypothesis.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Yes, but the filtration, conditional variances and maximum effects must follow that adaptive rule.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gradation--oral-check-1)

---

## 3. What invalidates a proof using only Var(X)?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-gradation--oral-check-2

What invalidates a proof using only Var(X)?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A Lipschitz condition on a gradation controls martingale increments. A variance-sensitive adaptive-query bound requires its additional maximum-effect hypothesis.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Second-moment information yields Chebyshev, not a universal exponential tail.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gradation--oral-check-2)

---

## 4. Grouping coordinates can make the denominator larger

**Doctoral proof · counterexample · 40 minutes suggested**

ID: core-gradation--batching-can-hurt

Let N=bk independent fair bits and L=Σ_i X_i. Compare singleton exposure with a gradation that reveals b blocks of k bits each. Compute replacement effects, squared-effect sums and actual variance. Explain why the number of exposure stages alone cannot rank two gradations.

**Required output:** Both gradation calculations and a precise account of the lost information.

**Prerequisites:** gradations; adaptive decision trees; conditional variance; bounded effects

**Examiner follow-up:** Give a statistic, such as chromatic number under vertex exposure, where a large block has an unusually small total effect.

<details>
<summary>Solution route / investigation plan</summary>

1. A singleton replacement changes L by at most one, so its worst-effect squared sum is N. Replacing an entire k-bit block changes L by at most k, giving b k²=Nk for the block bound.

2. The true variance is N/4 in both representations. If the block's independent internal structure is retained, its MGF still reflects k Bernoulli terms and recovers the sharper denominator. A theorem using only one worst block effect discards that information.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gradation--batching-can-hurt)

---

## 5. Expected query variance is not a pathwise budget

**Doctoral proof · proof · 45 minutes suggested**

ID: core-gradation--or-query-budget

Determine OR of N independent Bernoulli(p) bits by reading until the first one or until all bits are exhausted. Compute the expected number of queries and the maximum total query variance along a path. Compare the two as Np→∞ and explain which budget the adaptive theorem permits.

**Required output:** The two exact budgets and an explicit explanation of the admissible theorem input.

**Prerequisites:** gradations; adaptive decision trees; conditional variance; bounded effects

**Examiner follow-up:** Can one add a separate exceptional-path probability and then use a stopped argument?

<details>
<summary>Solution route / investigation plan</summary>

1. The probability that query j is reached is (1−p)^{j−1}, so E Q=[1−(1−p)^N]/p. Each queried bit has global effect one and variance p(1−p).

2. Thus expected accumulated query variance is (1−p)[1−(1−p)^N], while the all-zero path has variance Np(1−p). The source theorem requires a bound for every path; replacing that by the expectation would omit a possible long branch.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gradation--or-query-budget)

---

## 6. Prove the local MGF lemma quantitatively

**Examiner challenge · proof · 50 minutes suggested**

ID: core-gradation--biased-two-point-mgf

For 0≤p≤1 show that p e^{(1−p)a}+(1−p)e^{−pa}≤exp(p(1−p)a²) whenever |a|≤1. Use this to identify the ε=δ=1 specialization of the adaptive variance theorem and its allowable deviation range.

**Required output:** A Taylor proof with a numerical remainder bound and the translated theorem parameters.

**Prerequisites:** gradations; adaptive decision trees; conditional variance; bounded effects

**Examiner follow-up:** How does reducing the allowed |a| improve the coefficient toward one half?

<details>
<summary>Solution route / investigation plan</summary>

1. The constant and linear Taylor terms are one and zero, and the quadratic coefficient is p(1−p)/2. For k≥3 the absolute coefficient is at most p(1−p)/k!, since p^{k−1}+(1−p)^{k−1}≤1.

2. For |a|≤1, Σ_{k≥3}|a|^k/k!≤(e−5/2)a²<a²/2. Hence the expression is at most 1+p(1−p)a²≤exp(p(1−p)a²). With λ=α/(2σ), the condition λC<1 is αC<2σ and the resulting two-sided exponent is −α²/4.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gradation--biased-two-point-mgf)

---

## 7. A decision tree can be forced to inspect every bit

**Examiner challenge · proof · 55 minutes suggested**

ID: core-gradation--parity-query-lower-bound

For parity Y=X_1⊕…⊕X_N under independent fair bits, prove that every deterministic exact decision tree queries all N distinct coordinates on every path. Compute its path variance budget using effects one and compare it with Var(Y). Explain why the adaptive theorem need not be sharp.

**Required output:** A decision-tree lower bound and a sharp distinction between output variance and query budget.

**Prerequisites:** gradations; adaptive decision trees; conditional variance; bounded effects

**Examiner follow-up:** Which argument fails if the algorithm may output a parity guess with a small error probability?

<details>
<summary>Solution route / investigation plan</summary>

1. If a leaf leaves one bit unread, two full assignments consistent with its answers and differing only at that bit have opposite parity. Therefore no such leaf determines Y exactly.

2. Every path has N query contributions of 1/4, so σ²=N/4, whereas Y itself is a fair bit with variance 1/4. The query-variance proxy is an upper bound built from worst coordinate effects, not an identity for the output's variance.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gradation--parity-query-lower-bound)

---

## 8. An addressing function with a short exact query strategy

**Examiner challenge · construction · 60 minutes suggested**

ID: core-gradation--adaptive-addressing

Use ℓ fair selector bits to choose one of N=2^ℓ independent Bernoulli(p) data bits, and let Y be the selected bit. Show every coordinate has global effect at most one. Construct an exact query tree with maximum variance budget ℓ/4+p(1−p), and compare it with querying all coordinates.

**Required output:** An explicit decision tree and two parameterized variance budgets.

**Prerequisites:** gradations; adaptive decision trees; conditional variance; bounded effects

**Examiner follow-up:** Why must the data bits be independent of the selector for the stated final-query variance?

<details>
<summary>Solution route / investigation plan</summary>

1. Read the selector first, then read exactly the selected data bit. The selector choices remain fair independent bits and the final data query has success probability p regardless of the address.

2. The path budget is ℓ/4+p(1−p), compared with ℓ/4+Np(1−p) for reading all data. Repeating the construction on m independent blocks and summing outputs gives a nontrivial family with effect one and total budget m times the short-tree budget.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gradation--adaptive-addressing)

---

## 9. A path-budget MGF proof without a fixed query count

**Research seminar · research-extension · 85 minutes suggested**

ID: core-gradation--tree-mgf-induction

Assume the local two-point MGF inequality with coefficient (1+ε)/2 for |a|≤δ. For an exact finite adaptive query tree with maximum effect C and every root-to-leaf variance sum at most v, prove E exp(λ(Y−E Y))≤exp((1+ε)λ²v/2) for |λ|C≤δ. Allow different tree depths.

**Required output:** A complete induction with node means, residual budgets and leaf conditions.

**Prerequisites:** gradations; adaptive decision trees; conditional variance; bounded effects

**Examiner follow-up:** How should the budget be defined if a strategy redundantly queries an already known coordinate?

<details>
<summary>Solution route / investigation plan</summary>

1. At a node querying bit i, write the two child means as μ+(1−p_i)b and μ−p_i b. Coupling the remaining independent variables identically proves |b|≤c_i.

2. Both child subtrees have remaining path budget at most v−p_i(1−p_i)c_i². Apply induction to their centered MGFs and then the local two-point lemma to their mean shifts. Leaves have zero residual fluctuation, so unequal depths cause no difficulty.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gradation--tree-mgf-induction)

---

## 10. Convert an exceptional query budget into an exceptional probability

**Research seminar · research-extension · 100 minutes suggested**

ID: core-gradation--high-probability-budget-stopping

Suppose an adaptive reveal martingale has increments bounded by C, predictable conditional variances V_N, and P(V_N>v)≤η. Using the conditional Bernstein MGF lemma as an explicit assumed input, prove a tail bound of the form η+2exp(−t²/[2(v+C²+Ct/3)]). Define a stopping rule and account for its variance overshoot.

**Required output:** A stopped-martingale proof and a fully specified exceptional-event term.

**Prerequisites:** gradations; adaptive decision trees; conditional variance; bounded effects

**Examiner follow-up:** Can stopping immediately before an announced variance increment remove the C² overshoot?

<details>
<summary>Solution route / investigation plan</summary>

1. Stop just after the first step whose accumulated predictable variance exceeds v, or at termination. Each single conditional variance is at most C², so the stopped process has pathwise variance budget at most v+C².

2. On the event V_N≤v the stopped and original processes coincide. Apply the two-sided Bernstein martingale bound to the stopped process and add the probability η of disagreement. This is a valid replacement for an expected-budget shortcut because the exceptional event is charged explicitly.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gradation--high-probability-budget-stopping)

---

## 11. A small coordinate effect need not bound a dependent reveal

**Doctoral proof · counterexample · 45 minutes suggested**

ID: core-gradation--dependent-coordinate-coupling-failure

Let X_1=…=X_N=B for a fair bit B and define f(x)=N^−1Σ_i x_i on the full cube. Each single-coordinate replacement effect is 1/N. Compute the Doob martingale under the dependent law and show why the first increment violates the product-space coupling conclusion.

**Required output:** The explicit martingale and the precise failed coupling step.

**Prerequisites:** gradations; adaptive decision trees; conditional variance; bounded effects

**Examiner follow-up:** Would revealing the entire dependent block at once restore a correct block-effect estimate?

<details>
<summary>Solution route / investigation plan</summary>

1. The unconditional expectation is 1/2. Revealing X_1 reveals B and therefore f(X)=B completely, so the first martingale increment has absolute value 1/2 and all later increments vanish.

2. The deterministic coordinate sensitivity is indeed 1/N on the ambient cube. But completions conditional on X_1=0 and X_1=1 differ in every remaining coordinate, so an identical-completion coupling is unavailable. Independence is the missing hypothesis.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gradation--dependent-coordinate-coupling-failure)

---

## 12. Check the admissible variance-sensitive deviation scale

**Examiner challenge · synthesis · 60 minutes suggested**

ID: core-gradation--sparse-binomial-range

Let Y∼Bin(N,p_N), with p_N=N^−β and fixed 0<β<1. Apply the ε=δ=1 adaptive theorem with all bits queried to deviations t=√(Np_N)log N. Verify its side condition, compute the exponent scale, and compare with absolute-increment Azuma at the same t.

**Required output:** A parameter check and two explicitly compared tail exponents.

**Prerequisites:** gradations; adaptive decision trees; conditional variance; bounded effects

**Examiner follow-up:** What happens if Np_N stays bounded instead?

<details>
<summary>Solution route / investigation plan</summary>

1. Here C=1 and σ²=Np_N(1−p_N). The normalized deviation is α=t/σ≈log N. The side condition α<2σ holds because N^{(1−β)/2} dominates log N.

2. The adaptive bound is at most 2exp(−Θ(log²N)). Absolute-increment Azuma gives exponent t²/(2N)=Θ(p_N log²N), which tends to zero and is uninformative after capping the probability at one. The improvement comes with a verified deviation range.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-gradation--sparse-binomial-range)
