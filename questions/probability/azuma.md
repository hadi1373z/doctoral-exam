# Azuma: conditional MGFs and exposure couplings

§§7.1–7.2 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-azuma)

## 1. Azuma: conditional MGFs and exposure couplings

**Doctoral proof · proof · 30 minutes suggested**

ID: core-azuma--source-proof

Derive Pr(|Mₘ−M₀|≥t)≤2exp(−t²/(2∑cᵢ²)) under |Mᵢ−Mᵢ₋₁|≤cᵢ. For a graph statistic, show the coupling that proves the bound; explain why “the statistic is Lipschitz” needs a specified exposure.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** A martingale with bounded increments has sub-Gaussian tails; Lipschitz graph functions obtain such increments through an explicit coupling of conditional completions.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. Conditional mean zero and the bounded-increment MGF yield E exp(λ(Mₘ−M₀))≤exp(λ²∑cᵢ²/2). Markov and λ=t/∑cᵢ² give a one-sided tail.

2. Apply the same proof to −M for the lower tail. A variance estimate alone does not justify this exponential inequality.

3. When exposing one independent coordinate, couple all remaining coordinates identically in the two possible completions. Their function values differ by the coordinate Lipschitz constant, so the two conditional expectations do too.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§7.1–7.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma--source-proof)

---

## 2. Do bounded increments imply independent increments?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-azuma--oral-check-1

Do bounded increments imply independent increments?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A martingale with bounded increments has sub-Gaussian tails; Lipschitz graph functions obtain such increments through an explicit coupling of conditional completions.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. The proof uses conditional expectations and the martingale property.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§7.1–7.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma--oral-check-1)

---

## 3. Why can vertex exposure beat edge exposure for chromatic number?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-azuma--oral-check-2

Why can vertex exposure beat edge exposure for chromatic number?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A martingale with bounded increments has sub-Gaussian tails; Lipschitz graph functions obtain such increments through an explicit coupling of conditional completions.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Changing the edges of one vertex changes χ by at most one, leaving only n exposure steps rather than Θ(n²).

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§7.1–7.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma--oral-check-2)

---

## 4. Expose a permutation with a transposition coupling

**Doctoral proof · proof · 40 minutes suggested**

ID: core-azuma--permutation-fixed-points

For a uniform permutation π of [n], let F count fixed points. Expose π(1),…,π(n) and prove that each Doob increment has absolute value at most two by coupling completions with different next images. Deduce a tail bound, compute E F and Var F for n≥2, and assess the bound's scale.

**Required output:** A completion bijection, a valid Azuma bound and exact first two moments.

**Prerequisites:** Doob martingales; conditional MGFs; exposure couplings

**Examiner follow-up:** Can a sharper completion calculation improve the increment bounds without changing the product-free coupling idea?

<details>
<summary>Solution route / investigation plan</summary>

1. To compare next images a and b, swap the occurrences of a and b in a completed permutation. This is a bijection of the two conditional completion spaces and changes at most two fixed-point indicators, so the conditional expectations differ by at most two.

2. Thus P(|F−1|≥t)≤2exp(−t²/(8n)). Direct indicator calculations give E F=1 and Var F=1: two specified positions are simultaneously fixed with probability 1/[n(n−1)]. The martingale bound is valid but far from the true constant fluctuation scale.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§7.1–7.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma--permutation-fixed-points)

---

## 5. The right exposure for connected-component count

**Doctoral proof · synthesis · 45 minutes suggested**

ID: core-azuma--components-exposure-choice

In G(n,p), let C be the number of connected components. Prove that changing one edge changes C by at most one, whereas changing all edges incident to one vertex can change C by n−1. Compare the resulting Azuma variance proxies for edge and vertex exposures, and give an extremal graph pair.

**Required output:** A sensitivity proof, an extremal pair and both exposure bounds.

**Prerequisites:** Doob martingales; conditional MGFs; exposure couplings

**Examiner follow-up:** Why does chromatic number behave differently under the same vertex-block exposure?

<details>
<summary>Solution route / investigation plan</summary>

1. Adding one edge either merges exactly two components or changes none; deleting one edge either splits one component into two or changes none. Independent edge exposure therefore has squared-increment sum at most C(n,2).

2. An empty graph and a spanning star differ only in one vertex's incident edges and have component counts n and one. Thus the vertex-block replacement effect may be n−1, giving a crude proxy of order n³ rather than n². Fewer exposure steps do not automatically improve concentration.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§7.1–7.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma--components-exposure-choice)

---

## 6. Control the largest martingale excursion

**Examiner challenge · proof · 50 minutes suggested**

ID: core-azuma--maximal-azuma

Let M_0=0 and |M_i−M_{i−1}|≤c_i, with deterministic V=Σ_{i≤N}c_i². Prove P(max_{i≤N}M_i≥t)≤exp(−t²/(2V)) using an exponential supermartingale and a bounded stopping time, rather than a union bound over N times.

**Required output:** A maximal inequality with a complete finite stopping argument.

**Prerequisites:** Doob martingales; conditional MGFs; exposure couplings

**Examiner follow-up:** What changes when c_i² is predictable and its total is bounded on every path?

<details>
<summary>Solution route / investigation plan</summary>

1. The conditional MGF estimate makes Z_i=exp(λM_i−λ²Σ_{j≤i}c_j²/2) a nonnegative supermartingale with E Z_0=1. Stop at the first threshold crossing, or at N if no crossing occurs.

2. At a crossing, Z is at least exp(λt−λ²V/2). The finite optional-stopping calculation follows directly by conditioning one step at a time. Markov's bound and λ=t/V give the result; apply it also to −M for a two-sided maximum.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§7.1–7.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma--maximal-azuma)

---

## 7. Stop a square-walk martingale to reduce its effects

**Examiner challenge · proof · 55 minutes suggested**

ID: core-azuma--stopped-square-walk

Let S_i=Σ_{j≤i}ε_j for fresh fair signs and M_i=S_i²−i. Verify the martingale property and compute its increments. Compare Azuma using the deterministic bounds 2(i−1) with the stopped process at τ=min{i:|S_i|≥b}, for an integer b≥1.

**Required output:** A martingale calculation and a comparison that keeps the stopping event explicit.

**Prerequisites:** Doob martingales; conditional MGFs; exposure couplings

**Examiner follow-up:** Why is b=1 a useful check on the stopped formula?

<details>
<summary>Solution route / investigation plan</summary>

1. Expanding S_i² gives M_i−M_{i−1}=2ε_i S_{i−1}, whose conditional mean is zero. The unconditional deterministic effect bound yields Σ 4(i−1)²=Θ(N³).

2. Before the first crossing of b, |S_{i−1}|≤b−1. The stopped martingale M_{i∧τ} consequently has increments bounded by 2(b−1), and squared-effect sum at most 4N(b−1)². State concentration only for the stopped statistic; transferring to M_N requires separately controlling τ≤N.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§7.1–7.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma--stopped-square-walk)

---

## 8. A concentration bound for the maximum of many observables

**Examiner challenge · synthesis · 60 minutes suggested**

ID: core-azuma--maximum-of-many-statistics

Let f_1,…,f_K depend on independent coordinates, each with replacement effects c_i. Prove P(max_j[f_j−E f_j]≥t)≤K exp(−2t²/Σc_i²) using the range form of Hoeffding's lemma. Derive an expectation bound of order √(Σc_i² log K), including K=1 separately.

**Required output:** A union tail and an optimized MGF expectation estimate.

**Prerequisites:** Doob martingales; conditional MGFs; exposure couplings

**Examiner follow-up:** Does the maximum itself retain coordinate effects c_i, and where does log K enter if so?

<details>
<summary>Solution route / investigation plan</summary>

1. For one exposed coordinate, the conditional martingale increment has a range interval of length at most c_i. The conditional Hoeffding bound is exp(λ²c_i²/8), yielding the sharper range-form tail rather than the coarser absolute-increment constant.

2. The log-sum-exp bound gives E max_j(f_j−E f_j)≤log K/λ+λΣc_i²/8. Optimize λ=√(8log K/Σc_i²) to obtain √(Σc_i² log K/2) when K>1; for K=1 the centered expectation is zero.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§7.1–7.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma--maximum-of-many-statistics)

---

## 9. A finite-population martingale calculation

**Research seminar · research-extension · 85 minutes suggested**

ID: core-azuma--sampling-without-replacement

A population of N bits contains K ones. Draw m<N bits without replacement and let X be their sum. Derive the Doob increment Δ_i=(N−m)(Z_i−p_i)/(N−i), where p_i is the remaining success fraction before draw i, and use it to obtain an explicit squared-effect Azuma bound. Compare m near N with m≪N.

**Required output:** The exact increment identity, an explicit finite sum and a regime comparison.

**Prerequisites:** Doob martingales; conditional MGFs; exposure couplings

**Examiner follow-up:** Can you improve constants by keeping the conditional range rather than only the absolute increment?

<details>
<summary>Solution route / investigation plan</summary>

1. After i observations with sum s_i, the conditional expectation is s_i+(m−i)(K−s_i)/(N−i). Subtract the corresponding expression at i−1 to obtain the displayed increment exactly.

2. Since |Z_i−p_i|≤1, use c_i=(N−m)/(N−i) and V=Σ_{i=1}^m[(N−m)/(N−i)]². This captures reduced uncertainty near a census; the case m=N is deterministic and must be handled separately because the formula's last denominator vanishes.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§7.1–7.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma--sampling-without-replacement)

---

## 10. Derive a Bernstein-type martingale extension

**Research seminar · research-extension · 100 minutes suggested**

ID: core-azuma--variance-and-jump-bernstein

Suppose martingale differences D_i satisfy |D_i|≤c and Σ_i E[D_i²|F_{i−1}]≤v on every path. Prove P(M_N−M_0≥t)≤exp(−t²/[2(v+ct/3)]) by a conditional MGF argument. Apply it to Σ_i(B_i−p_i), with predictable p_i and fresh conditional Bernoulli B_i.

**Required output:** A full MGF proof and a verified adaptive-trial application.

**Prerequisites:** Doob martingales; conditional MGFs; exposure couplings

**Examiner follow-up:** Show how to stop when the conditional variance budget would exceed v.

<details>
<summary>Solution route / investigation plan</summary>

1. Expand the conditional exponential. Since E[D_i|F_{i−1}]=0 and |D_i|^k≤c^{k−2}D_i², use k!≥2·3^{k−2} to bound the MGF by exp(λ²E[D_i²|F_{i−1}]/[2(1−λc/3)]) for 0<λc<3.

2. Iterate with the predictable variance compensator and choose λ=t/(v+ct/3). For adaptive Bernoulli trials use c=1 and conditional variance p_i(1−p_i). The linear ct term explicitly records why a variance-only Gaussian bound cannot cover arbitrarily large deviations.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§7.1–7.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma--variance-and-jump-bernstein)

---

## 11. A concentrated graph optimum from edge exposure

**Doctoral proof · proof · 45 minutes suggested**

ID: core-azuma--random-max-cut-concentration

For G(n,p), let X be its maximum cut size. Prove edge replacement effect one, obtain a two-sided Azuma bound, and show E X≥pC(n,2)/2 without analyzing the random optimum directly. State a high-probability lower bound with failure at most n^−3.

**Required output:** A sensitivity proof and a numerical high-probability lower bound in n,p.

**Prerequisites:** Doob martingales; conditional MGFs; exposure couplings

**Examiner follow-up:** Would a lower bound for E X alone certify that most graphs have a large cut without concentration?

<details>
<summary>Solution route / investigation plan</summary>

1. Changing an edge changes the value of every fixed cut by at most one, hence the maximum by at most one. Edge exposure gives V=C(n,2).

2. For each realized graph a uniformly random vertex bipartition cuts half its edges in expectation, so its maximum cut is at least e(G)/2. Taking expectations gives the desired center lower bound. Use t=√(6V log n) in the one-sided Azuma inequality.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§7.1–7.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma--random-max-cut-concentration)

---

## 12. Translate bounded-increment tails between centers

**Examiner challenge · proof · 60 minutes suggested**

ID: core-azuma--median-mean-conversion

Let X=M_N with deterministic squared-increment sum V and mean μ. Show that every median m satisfies |m−μ|≤√(2V ln2) under the two one-sided Azuma bounds. Deduce a median-centered tail and bound E|X−μ| by integrating the two-sided bound.

**Required output:** A center-conversion lemma and an integrated moment bound.

**Prerequisites:** Doob martingales; conditional MGFs; exposure couplings

**Examiner follow-up:** Explain why a median need not equal a mode or an integer nearest the expectation.

<details>
<summary>Solution route / investigation plan</summary>

1. If m>μ, the median property P(X≥m)≥1/2 and the upper Azuma tail force (m−μ)²≤2V ln2; use the lower tail for the opposite case. Care with strict versus nonstrict events can be handled by approaching the threshold.

2. Triangle inequality gives P(|X−m|≥s+√(2V ln2))≤2e^{−s²/(2V)}. Integrating min(1,2e^{−t²/(2V)}) yields an O(√V) absolute-deviation bound; using the untruncated Gaussian integral gives the valid explicit bound √(2πV).

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§7.1–7.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma--median-mean-conversion)
