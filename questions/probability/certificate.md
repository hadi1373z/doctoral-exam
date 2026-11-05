# Certifiable variables: turn witnesses into sharper concentration

§7.7 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-certificate)

## 1. Certifiable variables: turn witnesses into sharper concentration

**Doctoral proof · proof · 45 minutes suggested**

ID: core-certificate--source-proof

For maximum matching in a graph with independent edge variables, prove 1-Lipschitzness and give a b-edge certificate for X≥b. Derive the form Pr(X≤b−t√f(b))Pr(X≥b)≤e^−t²/4 and explain its median-centered interpretation.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** A Lipschitz random variable with small certificates for large values obtains stronger lower-tail control through Talagrand’s convex distance.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. Flipping one edge changes maximum matching size by at most one: remove that edge from an optimal matching if needed. A matching of b present edges certifies X≥b using b coordinates.

2. A deficit of t√f(b) forces enough mismatches against every high-value certificate. The certificate size, rather than the total number of random coordinates, controls the scale.

3. Set b to an appropriate median or quantile to turn the product of event probabilities into a one-sided tail. Passing from median to expectation requires an additional estimate.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.7](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-certificate--source-proof)

---

## 2. Does triangle count have a b-edge certificate for count≥b?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-certificate--oral-check-1

Does triangle count have a b-edge certificate for count≥b?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A Lipschitz random variable with small certificates for large values obtains stronger lower-tail control through Talagrand’s convex distance.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Not automatically. Overlapping triangles complicate both the certificate size and the Lipschitz constant.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.7](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-certificate--oral-check-1)

---

## 3. Why can this improve on Azuma?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-certificate--oral-check-2

Why can this improve on Azuma?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A Lipschitz random variable with small certificates for large values obtains stronger lower-tail control through Talagrand’s convex distance.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. The relevant witness can use far fewer coordinates than the full product space.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.7](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-certificate--oral-check-2)

---

## 4. Certify a long increasing subsequence

**Doctoral proof · proof · 40 minutes suggested**

ID: core-certificate--longest-increasing-subsequence

Let Z_1,…,Z_n be independent real random variables, with ties allowed, and let L be the longest strictly increasing subsequence length. Prove one-coordinate replacement effect one and b-coordinate certifiability of L≥b. Deduce P(L≤b−s)P(L≥b)≤exp(−s²/(4b)) for integer b≥1.

**Required output:** A complete effect and certificate verification and a two-event lower-tail inequality.

**Prerequisites:** Talagrand certificate inequality; Lipschitz effects; witnesses; median conversion

**Examiner follow-up:** Would the same proof work for the longest nondecreasing subsequence?

<details>
<summary>Solution route / investigation plan</summary>

1. Deleting the changed coordinate from an optimal increasing subsequence loses at most one element. Comparing in both directions proves the replacement effect, regardless of ties or whether the optimizer changes completely.

2. A specified increasing subsequence of b indices and their actual values remains increasing when all other coordinates change. It is a b-coordinate certificate. Substitute f(b)=b and t=s/√b in the certificate theorem; do not assume a formula for E L.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.7](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-certificate--longest-increasing-subsequence)

---

## 5. Certify a maximum disjoint-pattern packing

**Doctoral proof · proof · 45 minutes suggested**

ID: core-certificate--fixed-pattern-edge-packings

Let H be a fixed graph with h≥1 edges and no isolated vertices. In a graph with independent edge indicators, let Y be the largest number of edge-disjoint H-copies. Prove replacement effect one and a certificate of at most hb coordinates for Y≥b, then derive its median-centered lower tail.

**Required output:** An exchange argument, a witness count and an explicit median tail.

**Prerequisites:** Talagrand certificate inequality; Lipschitz effects; witnesses; median conversion

**Examiner follow-up:** How would vertex-disjoint packing change the natural coordinate model and certificate size?

<details>
<summary>Solution route / investigation plan</summary>

1. Removing one edge destroys at most one copy in an optimal edge-disjoint packing, even though it may destroy many nonpacked copies. This proves effect one for the optimum packing statistic.

2. A packing of b copies uses exactly hb present edges and certifies Y≥b. For an integer median m≥1, P(Y≥m)≥1/2 and the theorem gives P(Y≤m−s)≤2exp(−s²/(4hm)). The theorem applies to this packing, not to the raw number of H-copies.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.7](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-certificate--fixed-pattern-edge-packings)

---

## 6. A weighted matching needs both an effect and a witness bound

**Examiner challenge · synthesis · 50 minutes suggested**

ID: core-certificate--weighted-matching-certificates

In a fixed graph, each edge is independently available and has deterministic weight in [a,W], where 0<a≤W. Let X be the maximum available matching weight. Prove replacement effect W and for every b>0 a certificate for X≥b using at most min(⌊|V|/2⌋,⌈b/a⌉) present edges. Write the resulting two-event tail with its W factor.

**Required output:** Effect and certificate proofs and a dimensionally correct weighted tail.

**Prerequisites:** Talagrand certificate inequality; Lipschitz effects; witnesses; median conversion

**Examiner follow-up:** What survives if no positive lower bound a on weights is available?

<details>
<summary>Solution route / investigation plan</summary>

1. Delete a changed edge from an optimal matching to lose at most W. To certify a value at least b, take edges from a witness matching until their total first reaches b; the number selected is at most ⌈b/a⌉ and never exceeds the matching size bound.

2. For sensitivity W, scale X by W or use the scaled certificate inequality directly. With f(b)=min(⌊|V|/2⌋,⌈b/a⌉), the bound is P(X≤b−s)P(X≥b)≤exp(−s²/[4W²f(b)]), for a nonzero certificate bound.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.7](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-certificate--weighted-matching-certificates)

---

## 7. Convert a median tail without silently changing centers

**Examiner challenge · proof · 55 minutes suggested**

ID: core-certificate--median-to-expectation-certificates

Let X be a nonnegative integer statistic with effect one and certificate bound f(b)≤rb for integers b≥1, r≥1. Starting from the two-event certificate inequality, derive upper and lower tails about an integer median m≥1 and prove |E X−m|≤C(√(rm)+r) for an absolute constant C.

**Required output:** Both one-sided tails and a justified mean–median estimate with a stated constant.

**Prerequisites:** Talagrand certificate inequality; Lipschitz effects; witnesses; median conversion

**Examiner follow-up:** How would an additive certificate term f(b)≤r(b+c) alter the conversion?

<details>
<summary>Solution route / investigation plan</summary>

1. For the lower tail use high threshold m: P(X≤m−s)≤2e^{−s²/(4rm)}. For the upper tail put b=m+s and low threshold m, giving P(X≥m+s)≤2e^{−s²/[4r(m+s)]}, with integer rounding handled explicitly.

2. Integrate or sum the tails. For s≤m bound m+s≤2m to get a Gaussian integral of order √(rm); for s>m use m+s≤2s to get an exponential tail of scale r. Enlarging constants handles lattice endpoints. This extra argument is what permits replacing a median by the mean.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.7](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-certificate--median-to-expectation-certificates)

---

## 8. An independent set certifies absent edges

**Examiner challenge · proof · 60 minutes suggested**

ID: core-certificate--independence-number-nonedges

For G(n,p), let α be the largest independent-set size. Prove edge replacement effect one, determine a valid certificate size for α≥b, and derive the certificate tail scale. Explain why listing only the b selected vertices is not a b-coordinate certificate in the independent-edge product space.

**Required output:** A certificate audit and the resulting scale, including the trivial b≤1 cases.

**Prerequisites:** Talagrand certificate inequality; Lipschitz effects; witnesses; median conversion

**Examiner follow-up:** Make the analogous calculation for clique number and compare the witness type.

<details>
<summary>Solution route / investigation plan</summary>

1. Changing one edge can destroy at most one vertex from an independent set, so the optimum changes by at most one. An independent set on b vertices is certified by the absence of all C(b,2) internal edge coordinates.

2. Thus f(b)=C(b,2) is valid, yielding P(α≤b−s)P(α≥b)≤exp(−s²/[4C(b,2)]) for b≥2. The typical deviation scale supplied by this certificate is order b, not √b. Coordinates are random edges; vertex labels alone reveal none of their required nonedges.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.7](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-certificate--independence-number-nonedges)

---

## 9. A budgeted coverage optimum is certifiable

**Research seminar · research-extension · 85 minutes suggested**

ID: core-certificate--random-coverage-budget

Fix integers k,L,b≥1 and subsets S_1,…,S_m of a universe, each of size at most L, and independently activate them. Let X be the maximum number of elements covered by at most k active sets. Prove effect L and a certificate using at most min(k,b) coordinates for X≥b, then compare the bound with disjoint equal-size sets as a benchmark.

**Required output:** A certifiability theorem and a quantitative disjoint-set comparison.

**Prerequisites:** Talagrand certificate inequality; Lipschitz effects; witnesses; median conversion

**Examiner follow-up:** How do arbitrary overlaps alter the certificate argument, and which part of the benchmark no longer applies?

<details>
<summary>Solution route / investigation plan</summary>

1. Deactivating one chosen set removes at most L covered elements. From any cover witnessing at least b elements, discard redundant sets or add useful sets until b elements are reached; at most b sets are needed because each useful addition contributes at least one new element, and never more than k are used.

2. The two-event bound is exp(−s²/[4L²min(k,b)]) for a deficit s below b. For m disjoint L-element sets, X=L min(B,k), where B is the number active. This benchmark permits exact binomial tails and exposes when the generic certificate bound loses constants or saturation information.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.7](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-certificate--random-coverage-budget)

---

## 10. Independent thinning yields a stronger conditional benchmark

**Research seminar · research-extension · 100 minutes suggested**

ID: core-certificate--thinning-disjoint-witnesses

A deterministic host graph contains an edge-disjoint packing of b copies of a fixed h-edge graph H. Retain each host edge independently with probability p. Prove that the surviving optimum packing stochastically dominates Bin(b,p^h), derive a Chernoff lower tail, and compare it with the generic hb-coordinate certificate scale.

**Required output:** A stochastic-domination proof and a clear comparison of centers and exponents.

**Prerequisites:** Talagrand certificate inequality; Lipschitz effects; witnesses; median conversion

**Examiner follow-up:** Construct a host where many overlapping copies give a misleading independent-binomial prediction.

<details>
<summary>Solution route / investigation plan</summary>

1. Each of the b fixed copies survives exactly when its h edges survive. Their edge sets are disjoint, so these survival indicators are independent Bernoulli(p^h). All surviving fixed copies form an available packing.

2. Hence P(Y≤(1−δ)bp^h)≤exp(−δ²bp^h/2) for 0<δ<1. This bound is centered at a certified lower benchmark bp^h, rather than the unknown median of the optimum. It cannot be transferred to overlapping witness copies by claiming their survival indicators are independent.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.7](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-certificate--thinning-disjoint-witnesses)

---

## 11. Short witnesses do not imply small replacement effects

**Doctoral proof · counterexample · 45 minutes suggested**

ID: core-certificate--short-certificates-large-effects

For n=2r+1 independent bits, let R be the longest consecutive run of ones. Show that R≥b has a b-coordinate certificate but that R does not have replacement effect one. Give two strings differing in a single bit with a change of r+1, and state a valid global effect bound.

**Required output:** A sharp one-bit sensitivity example and a valid certificate/effect pair.

**Prerequisites:** Talagrand certificate inequality; Lipschitz effects; witnesses; median conversion

**Examiner follow-up:** Does the longest increasing subsequence have the same merging problem? Identify the exchange argument that prevents it.

<details>
<summary>Solution route / investigation plan</summary>

1. Fixing b consecutive one coordinates certifies a run of length at least b. But the string 1^r 0 1^r has longest run r, while changing its middle bit gives a run of length 2r+1, a change r+1.

2. A changed zero can merge the runs on its two sides. The improvement is at most min(left,right)+1≤⌈n/2⌉; the same bound follows for deletion by symmetry. Certifiability alone therefore does not justify the effect-one form of the theorem.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.7](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-certificate--short-certificates-large-effects)

---

## 12. Use occupied-bin witnesses when balls greatly outnumber bins

**Examiner challenge · synthesis · 60 minutes suggested**

ID: core-certificate--distinct-bin-certification

Throw m independent balls into n bins with arbitrary destination probabilities and let D count occupied bins. Prove effect one and b-coordinate certifiability of D≥b. Derive a median lower-tail bound at scale √n, and compare it with the √m scale from exposing every ball by Azuma.

**Required output:** An occupancy certificate proof and a comparison of concentration scales.

**Prerequisites:** Talagrand certificate inequality; Lipschitz effects; witnesses; median conversion

**Examiner follow-up:** How does a highly nonuniform destination law change the median while leaving the certificate argument intact?

<details>
<summary>Solution route / investigation plan</summary>

1. One moved ball can empty its old bin and fill a new bin, with opposite contributions, so the number of occupied bins changes by at most one. One representative ball from each of b distinct bins certifies D≥b.

2. An integer median q satisfies q≤n, and the certificate theorem gives P(D≤q−s)≤2e^{−s²/(4q)}≤2e^{−s²/(4n)}. When m≫n this can improve the full ball-exposure scale √m. It remains a median-centered statement until a conversion argument is supplied.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.7](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-certificate--distinct-bin-certification)
