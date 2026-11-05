# Entropy: chain rule, conditioning and extremal families

§15.7 · basic inequalities · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-entropy)

## 1. Entropy: chain rule, conditioning and extremal families

**Doctoral proof · proof · 30 minutes suggested**

ID: core-entropy--source-proof

Prove |F|≤2^(∑H₂(pᵢ)) when pᵢ is the fraction of members containing coordinate i. Characterize equality, including the distinction between independent Bernoulli coordinates and a uniform distribution on an arbitrary family.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Entropy obeys the chain rule, conditioning reduces conditional entropy, and H(X)≤log₂|supp X|. These facts bound the size of a set family by its coordinate biases.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. For a uniform member X of F, H(X)=log₂|F|. Chain rule and conditioning give H(X)≤∑H(Xᵢ)=∑H₂(pᵢ).

2. Equality in subadditivity requires mutual independence of coordinates with nontrivial entropy. Uniformity on F then restricts F to a Cartesian product of its allowed coordinate values.

3. A small family may have unbiased individual coordinates and strong dependence; marginal entropies alone can substantially overcount its true logarithmic size.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · basic inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-entropy--source-proof)

---

## 2. Give such a dependent family.

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-entropy--oral-check-1

Give such a dependent family.

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Entropy obeys the chain rule, conditioning reduces conditional entropy, and H(X)≤log₂|supp X|. These facts bound the size of a set family by its coordinate biases.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Even-parity binary triples have three unbiased coordinates and total entropy two bits, not three.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · basic inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-entropy--oral-check-1)

---

## 3. Is H(X|Y=y)≤H(X) true for every y?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-entropy--oral-check-2

Is H(X|Y=y)≤H(X) true for every y?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Entropy obeys the chain rule, conditioning reduces conditional entropy, and H(X)≤log₂|supp X|. These facts bound the size of a set family by its coordinate biases.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. The inequality holds after averaging over Y; conditioning on a rare outcome can increase uncertainty.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · basic inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-entropy--oral-check-2)

---

## 4. The entropy deficit is a relative entropy

**Doctoral proof · proof · 40 minutes suggested**

ID: core-entropy--total-correlation-identity

For a joint law P of finite X_1,…,X_n, prove Σ_iH(X_i)−H(X_1,…,X_n)=D_2(P||∏_iP_i). Derive nonnegativity from the log-sum inequality and characterize equality, including zero-probability states.

**Required output:** An exact deficit identity and an equality proof that treats zero masses carefully.

**Prerequisites:** Shannon entropy; chain rule; relative entropy; binary entropy

**Examiner follow-up:** Compute the deficit for a uniform parity class and explain why all pairwise projections can miss it.

<details>
<summary>Solution route / investigation plan</summary>

1. Expand the base-two log likelihood ratio under P. The joint term contributes −H(P); each marginal log term contributes +H(P_i). Whenever P(x)>0, each corresponding marginal mass is positive, so the product denominator is nonzero.

2. The log-sum inequality gives nonnegative relative entropy with equality exactly when P equals the product law on its whole support. Normalization then extends the equality to all states, giving mutual independence rather than merely pairwise independence.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · basic inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-entropy--total-correlation-identity)

---

## 5. Bound a binomial coefficient within a polynomial factor

**Doctoral proof · proof · 45 minutes suggested**

ID: core-entropy--binomial-entropy-sandwich

For 0<r<n and p=r/n, prove (n+1)^−1 2^{nH_2(p)}≤C(n,r)≤2^{nH_2(p)}. Derive the upper bound by entropy of a uniform r-subset, and the lower bound by locating a mode of Bin(n,p).

**Required output:** Two elementary proofs and an explicit entropy approximation error.

**Prerequisites:** Shannon entropy; chain rule; relative entropy; binary entropy

**Examiner follow-up:** How does Stirling improve the polynomial factor when p stays away from zero and one?

<details>
<summary>Solution route / investigation plan</summary>

1. A uniform r-subset has entropy log_2 C(n,r) and each coordinate has Bernoulli(p) entropy. Subadditivity gives the upper bound.

2. For Bin(n,p) with p=r/n, the probability at r is a maximum term, as checked by adjacent probability ratios. Among n+1 terms it is at least 1/(n+1). Since p^r(1−p)^{n−r}=2^{−nH_2(p)}, rearrange to get the lower bound.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · basic inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-entropy--binomial-entropy-sandwich)

---

## 6. A two-channel calculation of data processing

**Examiner challenge · proof · 50 minutes suggested**

ID: core-entropy--data-processing-noisy-bits

Let X be a fair bit, Y=X⊕N_ε and Z=Y⊕N_δ for independent noise bits with ε,δ∈[0,1/2]. Compute I(X;Y) and I(X;Z), prove the data-processing inequality from chain rules for this Markov chain, and deduce H_2(ε+δ−2εδ)≥H_2(ε).

**Required output:** An explicit crossover calculation and a chain-rule proof of information loss.

**Prerequisites:** Shannon entropy; chain rule; relative entropy; binary entropy

**Examiner follow-up:** When is equality possible in the noisy-bit example?

<details>
<summary>Solution route / investigation plan</summary>

1. The effective flip probability from X to Z is ε(1−δ)+(1−ε)δ. Both outputs remain fair, so their informations are one minus the binary entropy of their respective noise probabilities.

2. For a Markov chain X→Y→Z, I(X;Y,Z)=I(X;Y)+I(X;Z|Y)=I(X;Y). Expanding in the other order gives I(X;Z)+I(X;Y|Z)≥I(X;Z). Nonnegative conditional mutual information supplies the inequality.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · basic inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-entropy--data-processing-noisy-bits)

---

## 7. Uniform coordinates can hide a linear entropy deficit

**Examiner challenge · synthesis · 55 minutes suggested**

ID: core-entropy--permutation-entropy-deficit

Let π be a uniform permutation of [n]. Compute H(π), each coordinate entropy and the conditional chain-rule terms H(π(i)|π(1),…,π(i−1)). Use Stirling's estimate as an explicit input to estimate Σ_iH(π(i))−H(π).

**Required output:** An exact chain-rule calculation and a first-order asymptotic deficit.

**Prerequisites:** Shannon entropy; chain rule; relative entropy; binary entropy

**Examiner follow-up:** Which conditioning event explains the drop in each successive coordinate's available values?

<details>
<summary>Solution route / investigation plan</summary>

1. There are n! equiprobable permutations, giving joint entropy log_2 n!. Each coordinate is uniform on [n], so the sum of coordinate entropies is nlog_2 n.

2. After i−1 positions are revealed, the next value is uniform among n−i+1 unused labels. Summing log_2(n−i+1) recovers log_2 n!. Stirling gives deficit nlog_2 e−(1/2)log_2(2πn)+o(1), despite identical uniform one-coordinate marginals.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · basic inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-entropy--permutation-entropy-deficit)

---

## 8. Count a family using its degree constraints

**Examiner challenge · proof · 60 minutes suggested**

ID: core-entropy--bounded-degree-graph-families

Let F be any family of labeled simple graphs on n vertices, each with maximum degree at most d≤(n−1)/2. Use the entropy of a uniform member to prove |F|≤2^{C(n,2)H_2(d/(n−1))}. State all averaging and concavity steps and discuss what changes when d>(n−1)/2.

**Required output:** An entropy counting proof with the monotonicity range explicitly checked.

**Prerequisites:** Shannon entropy; chain rule; relative entropy; binary entropy

**Examiner follow-up:** Can prescribed individual expected degrees yield a sharper bound than one global edge average?

<details>
<summary>Solution route / investigation plan</summary>

1. Write one bit per potential edge. Subadditivity bounds log_2|F| by Σ_eH_2(p_e). Every graph has at most nd/2 edges, so the average edge marginal is at most d/(n−1).

2. Concavity gives Σ_eH_2(p_e)≤C(n,2)H_2(average p_e). Binary entropy is increasing only up to one half, which justifies replacing that average by d/(n−1) under the stated hypothesis. Beyond half, the safe general bound is 2^{C(n,2)} unless a different constraint is used.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · basic inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-entropy--bounded-degree-graph-families)

---

## 9. Small entropy deficit forces closeness to a product

**Research seminar · research-extension · 85 minutes suggested**

ID: core-entropy--quantitative-near-independence

For a finite joint law with entropy deficit Δ bits, prove ||P−∏P_i||_TV≤√(Δ ln2/2). Establish the finite Pinsker inequality using log-sum reduction to a two-point partition and a scalar convexity estimate. Explain why pairwise-small covariances cannot replace Δ in this statement.

**Required output:** A finite quantitative stability theorem with a self-contained divergence proof.

**Prerequisites:** Shannon entropy; chain rule; relative entropy; binary entropy

**Examiner follow-up:** What bound follows for the probability difference of any specified event under P and its product approximation?

<details>
<summary>Solution route / investigation plan</summary>

1. Let Q=∏P_i and A={x:P(x)≥Q(x)}; then P(A)−Q(A)=TV(P,Q). The log-sum inequality coarsens natural-log divergence to the binary divergence between probabilities P(A),Q(A).

2. For fixed q, binary natural-log divergence d(p||q) has second derivative 1/[p(1−p)]≥4, vanishes with zero first derivative at p=q, and is at least 2(p−q)². Combine this with D_natural=Δln2. Pairwise-independent parity laws show why low-order covariance information misses total dependence.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · basic inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-entropy--quantitative-near-independence)

---

## 10. Solve a finite maximum-entropy problem by a partition function

**Research seminar · research-extension · 100 minutes suggested**

ID: core-entropy--maximum-entropy-truncated-geometric

For an integer m≥1, among distributions on {0,…,m} with mean m/3, find the maximum entropy law and prove uniqueness. Use P_t(j)=e^{tj}/Z(t), natural parameter t, and determine t implicitly. Derive the maximum entropy value in bits and explain why the uniform law is not optimal under this mean constraint.

**Required output:** A uniquely specified maximizing distribution and an exact variational proof.

**Prerequisites:** Shannon entropy; chain rule; relative entropy; binary entropy

**Examiner follow-up:** How do several linear expectation constraints change the exponential-family calculation?

<details>
<summary>Solution route / investigation plan</summary>

1. For any candidate P, nonnegativity of D(P||P_t) gives H_2(P)≤[ln Z(t)−tE_P J]/ln2, with equality exactly at P_t. Thus choose t to make E_tJ=m/3.

2. The mean is (ln Z)'(t), whose derivative is Var_t(J)>0 for finite t when m≥1. It ranges from zero to m, so the required t exists uniquely and is negative because t=0 gives mean m/2. This proves both attainment and uniqueness without a heuristic Lagrange-multiplier argument.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · basic inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-entropy--maximum-entropy-truncated-geometric)

---

## 11. Pairwise information can appear after conditioning

**Doctoral proof · synthesis · 45 minutes suggested**

ID: core-entropy--conditional-information-parity

Let U,V be independent fair bits and set W=U⊕V. Compute H(U,V,W), every pair entropy, I(U;V), I(U;V|W), and the total correlation. Explain why conditioning-reduces-entropy does not imply conditioning always reduces mutual information.

**Required output:** A complete entropy table and a precise conditional-information explanation.

**Prerequisites:** Shannon entropy; chain rule; relative entropy; binary entropy

**Examiner follow-up:** How does the chain-rule identity I(U;V,W)=I(U;W)+I(U;V|W) resolve the apparent paradox?

<details>
<summary>Solution route / investigation plan</summary>

1. The triple has four equiprobable states and entropy two bits. Every pair is uniform on four states, so all pair entropies are two and each unconditional pair mutual information is zero.

2. Given W, either bit determines the other, giving I(U;V|W)=1. The total correlation is 3−2=1 bit. Conditional entropy decreases on average, but mutual information is a difference of conditional entropies, so its monotonicity under additional conditioning does not follow.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · basic inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-entropy--conditional-information-parity)

---

## 12. The entropy cost of a prescribed heavy atom

**Examiner challenge · proof · 60 minutes suggested**

ID: core-entropy--one-heavy-atom-entropy

Let X have support size at most M≥2 and suppose a designated state has probability a∈[0,1]. Prove H(X)≤H_2(a)+(1−a)log_2(M−1), characterize equality, and use the bound to quantify how far entropy falls below log_2 M when a is much larger than 1/M.

**Required output:** A sharp entropy bound, equality cases and an exact divergence expression for the gap.

**Prerequisites:** Shannon entropy; chain rule; relative entropy; binary entropy

**Examiner follow-up:** What changes if one knows only that some atom has mass at least a≥1/M?

<details>
<summary>Solution route / investigation plan</summary>

1. Introduce B indicating the designated atom. Since B is determined by X, the chain rule gives H(X)=H_2(a)+(1−a)H(X|B=0). Bound the latter conditional entropy by log_2(M−1).

2. Equality requires the remaining M−1 states to have equal mass, except for degenerate endpoint cases. The gap between log_2 M and the displayed entropy upper bound equals the binary divergence D_2(Bern(a)||Bern(1/M)), making the loss positive whenever a≠1/M.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.7 · basic inequalities](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-entropy--one-heavy-atom-entropy)
