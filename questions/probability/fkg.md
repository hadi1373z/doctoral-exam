# FKG: measure hypotheses and negative examples

§6.2 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-fkg)

## 1. FKG: measure hypotheses and negative examples

**Doctoral proof · proof · 30 minutes suggested**

ID: core-fkg--source-proof

Derive FKG from Four Functions for nonnegative increasing functions, then extend to real increasing functions on a finite lattice. Construct an increasing-event counterexample for a non-log-supermodular measure.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** An appropriate log-supermodular measure on a finite distributive lattice positively correlates increasing functions.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. For increasing f,g, f(A)g(B)≤f(A∪B)g(A∪B). Combine this with log-supermodularity using α=fμ, β=gμ, γ=fgμ, δ=μ.

2. Four Functions gives (∑fμ)(∑gμ)≤(∑fgμ)(∑μ). Normalize. Finite real functions can be shifted by constants without changing covariance.

3. Give mass 1/2 each to 10 and 01 in {0,1}². Events “first bit is 1” and “second bit is 1” are increasing, yet their joint probability is 0<1/4.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-fkg--source-proof)

---

## 2. Do increasing events need to be independent?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-fkg--oral-check-1

Do increasing events need to be independent?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** An appropriate log-supermodular measure on a finite distributive lattice positively correlates increasing functions.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. Positive association gives a one-sided comparison, not independence.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-fkg--oral-check-1)

---

## 3. Does pairwise independence imply the FKG conclusion for every increasing event?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-fkg--oral-check-2

Does pairwise independence imply the FKG conclusion for every increasing event?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** An appropriate log-supermodular measure on a finite distributive lattice positively correlates increasing functions.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. FKG is a global structural property of the measure.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-fkg--oral-check-2)

---

## 4. Verify association in a binary interaction model

**Doctoral proof · proof · 40 minutes suggested**

ID: core-fkg--ferromagnetic-binary-model

On {0,1}^V set μ(x) proportional to exp(Σ_i h_i x_i+Σ_{ij∈E}J_ij x_i x_j), with arbitrary real h_i and J_ij≥0. Prove log-supermodularity by checking each interaction term, and deduce Cov(x_i,x_j)≥0. Show a negative single-edge interaction violates the lattice condition.

**Required output:** A termwise lattice calculation and a two-site negative-interaction certificate.

**Prerequisites:** log-supermodular measures; FKG inequality; covariance

**Examiner follow-up:** Does the sign of a field h_i affect the association argument?

<details>
<summary>Solution route / investigation plan</summary>

1. Linear field terms have zero lattice defect. For a pair term x_i x_j the defect at x∨y and x∧y is nonnegative; it is one precisely in the crossed pattern (1,0),(0,1), and zero in the other cases.

2. Exponentiate and add the nonnegative interaction defects to verify FKG's hypothesis. With two vertices and J<0, the weights satisfy μ00 μ11/(μ10 μ01)=e^J<1, explicitly reversing the necessary two-coordinate lattice inequality.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-fkg--ferromagnetic-binary-model)

---

## 5. Conditioning on an increasing event can destroy association

**Doctoral proof · counterexample · 45 minutes suggested**

ID: core-fkg--conditioning-can-destroy

Let X_1,X_2 be independent fair bits and condition on X_1∨X_2=1. Compute the resulting covariance and exhibit the failed log-supermodularity inequality. Contrast this operation with conditioning on specified coordinate values.

**Required output:** Exact conditional probabilities and a structural explanation of the failed hypothesis.

**Prerequisites:** log-supermodular measures; FKG inequality; covariance

**Examiner follow-up:** Give a sufficient support condition under which multiplying an FKG weight by an event indicator preserves log-supermodularity.

<details>
<summary>Solution route / investigation plan</summary>

1. The conditional law is uniform on 01,10,11. Both conditional marginals are 2/3 and the joint-one probability is 1/3, so the covariance is −1/9.

2. The two positive states 01 and 10 have meet 00 of zero conditional mass. Their product is positive while the meet–join product vanishes. A coordinate slice, by contrast, is closed under meet and join and inherits the original lattice inequality.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-fkg--conditioning-can-destroy)

---

## 6. Differentiate expectations under an external field

**Examiner challenge · proof · 50 minutes suggested**

ID: core-fkg--external-field-response

Let μ be a nonzero log-supermodular weight on a finite Boolean lattice and μ_t(x) proportional to μ(x)e^(tH(x)), where H(x)=Σ_i a_i x_i and a_i≥0. For every increasing real f prove dE_t f/dt=Cov_t(f,H)≥0, and derive nonnegative field-response entries ∂E x_i/∂h_j.

**Required output:** A differentiable monotonicity theorem and the response-matrix identities.

**Prerequisites:** log-supermodular measures; FKG inequality; covariance

**Examiner follow-up:** Does entrywise nonnegativity of a covariance matrix by itself imply the FKG lattice condition?

<details>
<summary>Solution route / investigation plan</summary>

1. The exponential field is log-modular because H(x)+H(y)=H(x∨y)+H(x∧y). Therefore every tilted measure still satisfies FKG. Differentiate the finite numerator and normalization to obtain the covariance identity.

2. Both f and H are increasing, so FKG makes that derivative nonnegative. Taking f=x_i and varying only the jth field gives the response matrix entry Cov(x_i,x_j); its diagonal is Var(x_i), and the entire covariance matrix is positive semidefinite for a separate elementary reason.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-fkg--external-field-response)

---

## 7. Association need not imply log-supermodularity

**Examiner challenge · construction · 55 minutes suggested**

ID: core-fkg--association-weaker-than-lattice

Take independent fair U,V and define X=(U,V,U∨V). Prove that every pair of increasing functions of X is positively correlated, but the law of X is not log-supermodular on the three-cube. State which implication between association and the lattice condition this separates.

**Required output:** A proof of association and a four-state failure certificate.

**Prerequisites:** log-supermodular measures; FKG inequality; covariance

**Examiner follow-up:** Is log-supermodularity preserved by arbitrary increasing deterministic maps? Use the same example.

<details>
<summary>Solution route / investigation plan</summary>

1. The map (u,v)↦(u,v,u∨v) is coordinatewise increasing. Increasing functions of X therefore pull back to increasing functions of the independent pair (U,V), where Harris applies.

2. The support is {000,011,101,111}, each with mass 1/4. The meet of 011 and 101 is 001, absent from the support, while their join is 111. The lattice product inequality consequently fails although association holds.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-fkg--association-weaker-than-lattice)

---

## 8. The exact two-bit criterion

**Examiner challenge · proof · 60 minutes suggested**

ID: core-fkg--two-bit-characterization

Let a strictly positive law on {0,1}² have unnormalized masses a,b,c,d at 00,10,01,11. Prove that ad≥bc is equivalent to positive association for every pair of increasing real functions. Compute Cov(X_1,X_2) exactly and explain why checking just this covariance suffices only in dimension two.

**Required output:** An equivalence proof and the normalized determinant calculation.

**Prerequisites:** log-supermodular measures; FKG inequality; covariance

**Examiner follow-up:** Remove strict positivity and formulate the criterion with zero masses.

<details>
<summary>Solution route / investigation plan</summary>

1. The only incomparable pair in the two-cube is 10,01, so log-supermodularity is exactly ad≥bc. FKG proves sufficiency for all increasing functions.

2. With Z=a+b+c+d, Cov(X_1,X_2)=(ad−bc)/Z². Since the two coordinate indicators are increasing, association implies this determinant is nonnegative. In higher dimensions there are many conditional and incomparable-state inequalities that one unconditional pair covariance does not encode.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-fkg--two-bit-characterization)

---

## 9. A graph-component weight and its parameter boundary

**Research seminar · research-extension · 85 minutes suggested**

ID: core-fkg--random-cluster-lattice-check

For a finite multigraph G=(V,E), 0<p_e<1 and q>0, consider w(A)=q^{k(A)}∏_{e∈A}p_e∏_{e∉A}(1−p_e), where k(A) counts components. Prove FKG for q≥1 by establishing the needed component inequality. For q<1 give a two-parallel-edge counterexample.

**Required output:** A rank-based proof and an exact parameter-boundary counterexample.

**Prerequisites:** log-supermodular measures; FKG inequality; covariance

**Examiner follow-up:** Which steps survive with loops, and why do loops not alter the rank argument?

<details>
<summary>Solution route / investigation plan</summary>

1. Show k(A∪B)+k(A∩B)≥k(A)+k(B). One route uses r(A)=|V|−k(A), the rank of the span of oriented edge incidence vectors, and dimension submodularity. The product edge factors cancel exactly under meet and join.

2. For two parallel edges joining two vertices, k(∅)=2 and every nonempty subset has k=1. After cancelling edge factors, the crossed lattice comparison is q²≤q³, false for q<1. By the two-bit criterion, this example also has negatively correlated edge indicators.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-fkg--random-cluster-lattice-check)

---

## 10. Monotonicity under fixed boundary spins

**Research seminar · research-extension · 100 minutes suggested**

ID: core-fkg--boundary-condition-comparison

In the nonnegative-interaction binary model, fix boundary spins on B⊆V and let τ≤τ' be two boundary assignments. Prove that every increasing function of the remaining spins has larger expectation under τ'. Derive the comparison by interpolating external fields and handle arbitrary finite fields without a coupling theorem.

**Required output:** A finite interpolation proof and a two-vertex reverse-sign example.

**Prerequisites:** log-supermodular measures; FKG inequality; covariance

**Examiner follow-up:** How can a single negative boundary interaction reverse the comparison?

<details>
<summary>Solution route / investigation plan</summary>

1. Conditioning on τ replaces each internal field h_i by h_i+Σ_{j∈B}J_ij τ_j; interactions among free vertices remain nonnegative. Increasing the boundary raises these fields coordinatewise.

2. Interpolate one field at a time. The derivative of an increasing expectation in a nonnegative direction is an FKG covariance, hence nonnegative. Integrating these derivatives proves the comparison. This establishes stochastic expectation order without asserting that an explicit monotone sample coupling has been constructed.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-fkg--boundary-condition-comparison)

---

## 11. Many-event lower bounds under an FKG measure

**Doctoral proof · proof · 45 minutes suggested**

ID: core-fkg--multiple-increasing-events

Let μ be an FKG probability measure on a finite distributive lattice and A_1,…,A_m increasing events. Prove μ(∩_i A_i)≥∏_i μ(A_i), and prove the analogous statement for decreasing events. Give an example in which every inequality is strict.

**Required output:** An induction and a sharp dependence example.

**Prerequisites:** log-supermodular measures; FKG inequality; covariance

**Examiner follow-up:** Apply the decreasing-event version to bound the probability that none of several increasing bad events occurs.

<details>
<summary>Solution route / investigation plan</summary>

1. The intersection of increasing events is increasing, so apply the two-event inequality inductively. For decreasing events use the decreasing version, or reverse the lattice order; no independence between the indicators is needed.

2. For strictness on one fair bit take every A_i={X=1}, with m≥2. The joint probability is 1/2 and the product is 2^−m. Distinguish this useful association bound from the generally false claim that the events factor exactly.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-fkg--multiple-increasing-events)

---

## 12. Pairwise independent coordinates can fail increasing-event association

**Examiner challenge · counterexample · 60 minutes suggested**

ID: core-fkg--pairwise-independence-trap

Let X be uniform on {000,011,101,110}. Verify pairwise independence of its three coordinates and then find increasing events A,B with negative covariance. Explain why a correlation matrix cannot certify FKG or full association.

**Required output:** Projection tables, the negative covariance, and a continuity argument for positive perturbations.

**Prerequisites:** log-supermodular measures; FKG inequality; covariance

**Examiner follow-up:** What happens to this example after adding a small uniform-cube mixture to make every state positive?

<details>
<summary>Solution route / investigation plan</summary>

1. Each coordinate is fair and every two-coordinate projection is uniform on the four binary pairs. Thus all three pairwise coordinate covariances vanish.

2. Choose A={X_1=X_2=1} and B={X_3=1}. Their probabilities are 1/4 and 1/2, but their intersection is empty, yielding covariance −1/8. Increasing nonlinear events expose dependence invisible in the coordinate covariance matrix.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-fkg--pairwise-independence-trap)
