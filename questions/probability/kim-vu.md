# Kim–Vu: derivative expectations matter

§7.8 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-kim-vu)

## 1. Kim–Vu: derivative expectations matter

**Doctoral proof · proof · 45 minutes suggested**

ID: core-kim-vu--source-proof

For triangle count in G(n,p), compute the mean and the first-, second-, and third-derivative expectation scales. Identify the dense and sparse regimes in the Kim–Vu parameters and explain why substituting only μ into a Chernoff formula is invalid.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Concentration of a bounded-degree nonnegative polynomial in independent Bernoulli variables is controlled by expectations of its partial derivatives, not only its mean.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. For X=∑triangles ∏edges xₑ, E[X]=C(n,3)p³. A derivative in one edge has expectation (n−2)p²; two adjacent edges give p; a full triangle gives 1. Other incompatible derivatives vanish.

2. Thus nonempty derivative expectations can dominate the mean in sparse regimes. Define the theorem’s E′ as the maximum over nonempty derivatives, including the third derivative.

3. The polynomial has nonnegative coefficients and fixed degree three. Apply the source theorem with its constants and λ-range; dependence among triangle indicators prevents treating them as independent Bernoulli summands.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.8](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-kim-vu--source-proof)

---

## 2. Why include the highest-order derivative?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-kim-vu--oral-check-1

Why include the highest-order derivative?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Concentration of a bounded-degree nonnegative polynomial in independent Bernoulli variables is controlled by expectations of its partial derivatives, not only its mean.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. For a monomial it equals its coefficient; dropping it can falsely predict concentration when the expected count is tiny.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.8](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-kim-vu--oral-check-1)

---

## 3. Is the triangle-count polynomial monotone?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-kim-vu--oral-check-2

Is the triangle-count polynomial monotone?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Concentration of a bounded-degree nonnegative polynomial in independent Bernoulli variables is controlled by expectations of its partial derivatives, not only its mean.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Yes, but monotonicity alone does not establish its concentration scale.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.8](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-kim-vu--oral-check-2)

---

## 4. Compute the full C4 derivative profile

**Doctoral proof · proof · 40 minutes suggested**

ID: core-kim-vu--four-cycle-derivative-profile

Let X count unordered four-cycles in G(n,p), n≥4. Compute E X and expected derivatives for one edge, two adjacent edges, two disjoint edges, a three-edge path, and a full four-cycle. Identify incompatible partial edge sets and obtain E' up to absolute constants.

**Required output:** A complete derivative table and a justified maximum.

**Prerequisites:** multilinear polynomials; derivative expectations; Kim–Vu theorem; random subgraph counts

**Examiner follow-up:** Which derivative controls E' when p=n^−α with α above or below 2/3?

<details>
<summary>Solution route / investigation plan</summary>

1. There are 3C(n,4) four-cycles. A fixed edge lies in (n−2)(n−3) cycles; two adjacent edges lie in n−3 cycles; two disjoint edges occur as opposite edges in two cycles. Multiply by p to the number of missing cycle edges.

2. Thus the listed expectations are 3C(n,4)p^4, (n−2)(n−3)p³, (n−3)p², 2p², p and one. Three edges must form a path, and four must form a cycle. For large n, E'=Θ(max(n²p³,1)), retaining the highest derivative even when p is tiny.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.8](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-kim-vu--four-cycle-derivative-profile)

---

## 5. A count dominated by degree fluctuations

**Doctoral proof · proof · 45 minutes suggested**

ID: core-kim-vu--three-star-profile

Let Y=Σ_v C(d(v),3), counting three-edge stars in G(n,p). Derive the mean and all nonzero derivative-expectation types through order three. Compare E' with the triangle-count profile, and explain the role of the common center.

**Required output:** An exact table, incompatible cases and a comparison of dependence mechanisms.

**Prerequisites:** multilinear polynomials; derivative expectations; Kim–Vu theorem; random subgraph counts

**Examiner follow-up:** How does the profile change for stars with a fixed designated center?

<details>
<summary>Solution route / investigation plan</summary>

1. The mean is nC(n−1,3)p³. For a fixed edge either endpoint can be the center, giving E_1=2C(n−2,2)p². Two adjacent fixed edges have a forced common center and n−3 choices for the remaining leaf, giving (n−3)p.

2. Two disjoint edges cannot lie in one three-star. A third derivative is one exactly when the fixed three edges form a star. Thus E'=Θ(max(n²p²,np,1)). This profile records the large influence of high-degree centers rather than treating star indicators as independent.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.8](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-kim-vu--three-star-profile)

---

## 6. A diverging mean can coexist with almost certain zero

**Examiner challenge · counterexample · 50 minutes suggested**

ID: core-kim-vu--rare-gate-large-mean

Let Z∼Bernoulli(ε), X_i∼Bernoulli(p) independently, and Y=ZΣ_{i=1}^N X_i. Compute its mean and derivative expectations. Choose ε→0 and N so that E Y→∞ but P(Y=0)→1, and explain how E' diagnoses the failure of relative concentration.

**Required output:** An explicit asymptotic counterexample and its derivative diagnosis.

**Prerequisites:** multilinear polynomials; derivative expectations; Kim–Vu theorem; random subgraph counts

**Examiner follow-up:** What changes if ε is fixed away from zero while N grows?

<details>
<summary>Solution route / investigation plan</summary>

1. Here μ=εNp, the Z derivative has expectation Np, each X_i derivative has expectation ε, and each mixed derivative ∂_Z∂_{X_i}Y equals one. Therefore E'=max(Np,ε,1).

2. Take fixed p=1/2, ε=N^−1/2. Then μ=√N/2 diverges but Y=0 with probability at least 1−N^−1/2. The derivative in the rare gate is much larger than the mean, so the Kim–Vu scale does not falsely promise concentration from μ alone.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.8](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-kim-vu--rare-gate-large-mean)

---

## 7. Keep graph vertices distinct from polynomial variables

**Examiner challenge · synthesis · 55 minutes suggested**

ID: core-kim-vu--polynomial-variable-count

Assume the Kim–Vu bound P(|Y−μ|>a_k√(EE')λ^k)≤d_ke^−λ N^{k−1}, where N is the number of independent variables. For triangle count in G(n,p), choose λ so the probability is at most n^−D for fixed D>0. State a sufficient derivative-ratio condition for relative error o(1).

**Required output:** A correct variable count, a failure-budget choice and an explicit relative-error criterion.

**Prerequisites:** multilinear polynomials; derivative expectations; Kim–Vu theorem; random subgraph counts

**Examiner follow-up:** What λ is needed for a simultaneous statement over n rooted triangle counts?

<details>
<summary>Solution route / investigation plan</summary>

1. The independent variables are potential edges, so N=C(n,2), not n. Since k=3, the polynomial prefactor is N²=O(n^4). Taking λ=(D+5)ln n plus a fixed constant absorbing d_3 makes the tail at most n^−D for large n.

2. When μ≥E', the relative threshold is a_3λ³√(E'/μ). Thus μ/E'≫log^6 n is sufficient for relative concentration at this failure level. All constants depend on fixed degree and D; the Kim–Vu inequality itself is assumed as the deep input.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.8](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-kim-vu--polynomial-variable-count)

---

## 8. The Boolean polynomial must be multilinearized

**Examiner challenge · proof · 60 minutes suggested**

ID: core-kim-vu--multilinearize-before-differentiating

For independent Bernoulli(p) variables X_i, consider Y=(Σ_i X_i)². Express the same Boolean function as a multilinear nonnegative polynomial, compute μ,E_1,E_2, and compare with formally differentiating the unmultilinearized square. Explain which derivative profile belongs in Kim–Vu.

**Required output:** A squarefree expansion and the correct derivative parameters.

**Prerequisites:** multilinear polynomials; derivative expectations; Kim–Vu theorem; random subgraph counts

**Examiner follow-up:** Prove uniqueness of a multilinear representation of a Boolean-cube function by induction on N.

<details>
<summary>Solution route / investigation plan</summary>

1. On the Boolean cube X_i²=X_i, so Y=Σ_i X_i+2Σ_{i<j}X_iX_j. Hence μ=Np+N(N−1)p², E_1=1+2(N−1)p and E_2=2.

2. Differentiating the original algebraic square yields 2Σ X_i and expectation 2Np, a different expression because ordinary differentiation does not preserve equality restricted to {0,1}^N. Kim–Vu's hyperedge/partial-derivative definition uses the squarefree representation of the random statistic.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.8](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-kim-vu--multilinearize-before-differentiating)

---

## 9. Make rooted triangle concentration simultaneous

**Research seminar · research-extension · 85 minutes suggested**

ID: core-kim-vu--uniform-rooted-counts

For each vertex x of G(n,n^−α), let Y_x count triangles containing x, with fixed 0<α<2/3. Compute μ and E' for Y_x and use the stated Kim–Vu theorem to prove max_x|Y_x/μ−1|→0 in probability. Choose λ explicitly and include the union bound over roots.

**Required output:** A rooted derivative audit and a simultaneous concentration proof with all factors counted.

**Prerequisites:** multilinear polynomials; derivative expectations; Kim–Vu theorem; random subgraph counts

**Examiner follow-up:** Why does the calculation stop giving relative concentration at α=2/3?

<details>
<summary>Solution route / investigation plan</summary>

1. The mean is C(n−1,2)p³. A derivative in an edge incident to x has expectation (n−2)p²; a derivative in an edge not incident to x has expectation p². Nonempty higher derivatives include the value one, giving E'=Θ(max(np²,1)).

2. The ratio μ/E' has polynomial order min(np,n²p³), which diverges polynomially throughout α<2/3. Set λ=C log n with C>6. The relative threshold O(log³n√(E'/μ)) tends to zero, while n·O(n^4e^−λ) tends to zero. No independence between different roots is required.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.8](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-kim-vu--uniform-rooted-counts)

---

## 10. A general derivative criterion for a fixed graph

**Research seminar · research-extension · 100 minutes suggested**

ID: core-kim-vu--fixed-graph-density-criterion

Let H be a fixed simple graph with v vertices, e≥1 edges and no isolated vertices. For its unlabeled-copy count in G(n,p), show up to H-dependent constants that μ/E' is the minimum of n^{v(F)}p^{e(F)} over nonempty edge-subgraphs F⊆H, where v(F) counts incident vertices. Deduce a sufficient Kim–Vu relative-concentration criterion and identify its density threshold for p=n^−α.

**Required output:** A general derivative comparison and three explicit density calculations.

**Prerequisites:** multilinear polynomials; derivative expectations; Kim–Vu theorem; random subgraph counts

**Examiner follow-up:** Evaluate the criterion for triangles, four-cycles and a graph with a dense core plus a pendant edge.

<details>
<summary>Solution route / investigation plan</summary>

1. Fixing a derivative edge set isomorphic to F leaves O_H(n^{v−v(F)}) completions and e−e(F) independent edges. Conversely every compatible fixed F has Θ_H of that many completions for n sufficiently large; multiple embeddings contribute only H-dependent constants.

2. Since μ=Θ_H(n^v p^e), divide by the largest nonempty derivative expectation to obtain the minimum ratio. Requiring every such n^{v(F)}p^{e(F)}≫log^{2e}n suffices with λ=C log n. For a fixed power p=n^−α this holds when α<min_F v(F)/e(F); this is a sufficient theorem-derived threshold, not a claim of necessity for every concentration notion.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.8](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-kim-vu--fixed-graph-density-criterion)

---

## 11. A simple polynomial whose highest derivative cannot be omitted

**Doctoral proof · proof · 45 minutes suggested**

ID: core-kim-vu--rooted-one-edge-completions

Let Y count length-two paths from a fixed root x with distinct remaining vertices in G(n,p), counting each unordered edge set once. Compute μ and the first- and second-derivative expectation types. Determine when μ/E' diverges for p=n^−α, and compare the result with rooted triangle counts.

**Required output:** An unambiguous path convention, derivative table and power-law regime.

**Prerequisites:** multilinear polynomials; derivative expectations; Kim–Vu theorem; random subgraph counts

**Examiner follow-up:** Repeat the calculation when x is required to be the center, and identify the constant-factor changes.

<details>
<summary>Solution route / investigation plan</summary>

1. A path may have x as an endpoint or as its center if 'from a root' is ambiguous; fix the endpoint convention explicitly. With endpoint x, choose its neighbor u and then v≠x,u, giving μ=(n−1)(n−2)p².

2. For an edge xu, there are n−2 completions and derivative expectation (n−2)p. For an edge uv not incident to x, either endpoint can be the middle vertex, giving 2p. A compatible two-edge path derivative is one. Thus E'=Θ(max(np,1)) and μ/E' diverges polynomially for α<1.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.8](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-kim-vu--rooted-one-edge-completions)

---

## 12. Nonnegative values are not the coefficient hypothesis

**Examiner challenge · counterexample · 60 minutes suggested**

ID: core-kim-vu--nonnegative-value-negative-coefficients

Consider Y=X_1+X_2−2X_1X_2 on two independent Bernoulli bits. Verify Y≥0 pointwise, compute its multilinear coefficients and derivative expectations, and explain why the stated nonnegative-coefficient Kim–Vu theorem does not apply. Show that adding a constant cannot repair the offending coefficient.

**Required output:** A four-state table and a precise hypothesis failure, without claiming the statistic is unconcentrated.

**Prerequisites:** multilinear polynomials; derivative expectations; Kim–Vu theorem; random subgraph counts

**Examiner follow-up:** Can a different representation using additional independent coordinates be asserted without constructing it?

<details>
<summary>Solution route / investigation plan</summary>

1. The values are zero at 00 and 11 and one at 01 and 10, so Y is a nonnegative indicator. Its unique multilinear coefficient of X_1X_2 is −2.

2. The expected first derivatives are 1−2p and the second derivative is −2. The theorem's E_i are built from nonnegative monomial weights, a structure absent here. A constant shift changes only the empty monomial and leaves the negative degree-two coefficient untouched.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.8](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-kim-vu--nonnegative-value-negative-coefficients)
