# Four Functions: the induction and lattice consequences

§6.1 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-four-functions)

## 1. Four Functions: the induction and lattice consequences

**Doctoral proof · proof · 45 minutes suggested**

ID: core-four-functions--source-proof

State the Four Functions theorem with nonnegativity and its exact union/intersection hypothesis. Reconstruct the coordinate-splitting induction rather than invoking FKG. Explain how the distributive-lattice and set-difference corollaries are obtained.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** A pointwise product comparison at union and intersection implies a product comparison between the sums of four nonnegative set functions.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. The hypothesis has the form α(A)β(B)≤γ(A∪B)δ(A∩B) for every A,B. The conclusion compares (∑α)(∑β) with (∑γ)(∑δ).

2. The induction is a four-function argument: splitting into contains/does-not-contain pieces introduces cross terms that must be bounded, not discarded.

3. Indicator functions turn the theorem into cardinality inequalities. A finite distributive lattice embeds into an appropriate set lattice with join and meet represented by union and intersection.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-four-functions--source-proof)

---

## 2. Why is nonnegativity required?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-four-functions--oral-check-1

Why is nonnegativity required?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A pointwise product comparison at union and intersection implies a product comparison between the sums of four nonnegative set functions.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. The summation and product comparison arguments can reverse or fail for signed functions.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-four-functions--oral-check-1)

---

## 3. Is this only a statement about uniform probability?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-four-functions--oral-check-2

Is this only a statement about uniform probability?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** A pointwise product comparison at union and intersection implies a product comparison between the sums of four nonnegative set functions.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. The four functions can encode weights; product and lattice-measure inequalities are applications.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-four-functions--oral-check-2)

---

## 4. Union–intersection inequalities with activities

**Doctoral proof · proof · 40 minutes suggested**

ID: core-four-functions--activity-weighted-families

Let F,G be nonempty families in 2^[n], let z_i>0, and set Z_F(z)=Σ_{A∈F}∏_{i∈A}z_i. Assuming Four Functions, prove Z_F Z_G≤Z_{F∨G}Z_{F∧G}. Compute all four polynomials for F={∅,{1}} and G={{1},{2}} and identify the nonnegative gap.

**Required output:** A weighted theorem, the explicit polynomial gap, and a continuity argument.

**Prerequisites:** Four Functions theorem; weighted set families; finite lattices

**Examiner follow-up:** What remains valid when some activities vanish, and how do you justify the boundary case?

<details>
<summary>Solution route / investigation plan</summary>

1. Use α(A)=1_F(A)z^A and β(B)=1_G(B)z^B. The identity z^A z^B=z^(A∪B)z^(A∩B) supplies the pointwise hypothesis with γ and δ supported on the join and meet families.

2. Here Z_F=1+z_1, Z_G=z_1+z_2, Z_join=z_1+z_2+z_1z_2 and Z_meet=1+z_1. The difference is z_1z_2(1+z_1). Keep the theorem as the assumed deep input; the task is its weighted application.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-four-functions--activity-weighted-families)

---

## 5. Locate the obstruction in the five-element diamond

**Doctoral proof · counterexample · 45 minutes suggested**

ID: core-four-functions--nondistributive-diamond

In the lattice M3 with bottom 0, top 1 and three incomparable atoms a,b,c, find nonempty X,Y violating |X||Y|≤|X∨Y||X∧Y|. Convert the example into four nonnegative indicator functions satisfying the pointwise hypothesis but violating the sum conclusion.

**Required output:** A complete lattice table sufficient for the example and a four-function certificate.

**Prerequisites:** Four Functions theorem; weighted set families; finite lattices

**Examiner follow-up:** Does the same construction work with only two atoms? Explain the distributivity change.

<details>
<summary>Solution route / investigation plan</summary>

1. Take X={a,b} and Y={c}. Both mixed joins equal 1 and both mixed meets equal 0. Thus the input product is 2 while both output families have cardinality one.

2. Set α=1_X, β=1_Y, γ=1_{ {1} }, δ=1_{ {0} }. Whenever α(x)β(y) is nonzero, the required output product is one; all other left sides vanish. This proves that the lattice assumption has real content.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-four-functions--nondistributive-diamond)

---

## 6. Marginalizing a log-supermodular weight

**Examiner challenge · proof · 50 minutes suggested**

ID: core-four-functions--marginal-log-supermodularity

Let w(x,z)≥0 on {0,1}^a×{0,1}^b satisfy w(u)w(v)≤w(u∨v)w(u∧v). Assuming Four Functions, prove that W(x)=Σ_z w(x,z) is log-supermodular. Include zero-valued slices; do not divide by their masses.

**Required output:** A marginal-closure proof with the four functions and their domains explicitly identified.

**Prerequisites:** Four Functions theorem; weighted set families; finite lattices

**Examiner follow-up:** Why is summing pointwise inequalities only with z=t insufficient?

<details>
<summary>Solution route / investigation plan</summary>

1. For fixed x,y, use α(z)=w(x,z), β(z)=w(y,z), γ(z)=w(x∨y,z), and δ(z)=w(x∧y,z). The full-space hypothesis compares α(z)β(t) with γ(z∨t)δ(z∧t).

2. Summing by Four Functions yields W(x)W(y)≤W(x∨y)W(x∧y). The argument works without strict positivity, so it covers hard constraints and support indicators directly.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-four-functions--marginal-log-supermodularity)

---

## 7. A lattice of bounded monotone paths

**Examiner challenge · synthesis · 55 minutes suggested**

ID: core-four-functions--grid-path-partition-functions

For integers m,r≥1 let L={x∈{0,…,m}^r:x_1≤…≤x_r}. For path families A,B⊆L and positive coordinate activities z_j, establish the weighted join–meet counting inequality on L. Prove closure under coordinatewise minimum and maximum and explain the distributive-lattice input.

**Required output:** A closure proof, a weighted inequality and a precise description of the allowed path family.

**Prerequisites:** Four Functions theorem; weighted set families; finite lattices

**Examiner follow-up:** Would arbitrary lattice paths with a fixed number of strict rises remain closed under meet and join?

<details>
<summary>Solution route / investigation plan</summary>

1. Minimum and maximum preserve nondecreasing coordinate sequences. Each coordinate lies in a chain, where min and max distribute; hence L is a finite distributive sublattice of the product of chains.

2. Assign weight exp(Σ_j t_j x_j). Coordinatewise min plus max equals x_j+y_j, so the two weights multiply exactly under meet and join. Apply the distributive-lattice Four Functions theorem, assumed here rather than reproved.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-four-functions--grid-path-partition-functions)

---

## 8. A controlled pointwise defect costs one factor

**Examiner challenge · proof · 60 minutes suggested**

ID: core-four-functions--dimension-free-defect

Suppose α,β,γ,δ≥0 on a Boolean lattice and α(A)β(B)≤Kγ(A∪B)δ(A∩B) for every A,B, where K≥1. Prove the sum-product inequality with factor K, rather than K^n, and show the constant cannot be reduced uniformly.

**Required output:** A dimension-free comparison and an explicit sharpness example.

**Prerequisites:** Four Functions theorem; weighted set families; finite lattices

**Examiner follow-up:** If the defect is exp(ε times Hamming distance(A,B)), which uniform factor follows immediately?

<details>
<summary>Solution route / investigation plan</summary>

1. Replace γ by Kγ and apply the exact Four Functions theorem once on the whole lattice. The constant belongs to the pointwise inequality globally; repeatedly paying it at coordinate splits introduces an unnecessary dimension dependence.

2. For sharpness put all four functions on one common lattice point, with α=K and β=γ=δ=1 there. Both the pointwise and summed inequalities are equalities with factor K.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-four-functions--dimension-free-defect)

---

## 9. From partition functions to extremal scores and multiplicities

**Research seminar · research-extension · 85 minutes suggested**

ID: core-four-functions--zero-temperature-counting

For finite families F,G⊆2^[n] and a real score s(A)=Σ_i c_i1_{i∈A}, apply the activity inequality at z_i=e^(t c_i). As t→∞ derive inequalities for maximum scores and, when the leading exponents agree, for the numbers of maximizing members. State exactly when the multiplicity conclusion is available.

**Required output:** A two-level asymptotic theorem with a worked strictness example.

**Prerequisites:** Four Functions theorem; weighted set families; finite lattices

**Examiner follow-up:** Construct a strict-exponent example showing why multiplicities cannot be compared without the equality hypothesis.

<details>
<summary>Solution route / investigation plan</summary>

1. For any finite nonempty H, log Z_H(e^(tc))=t max_H s+log m_H+o(1), where m_H counts maximizers. Compare the two sides first after dividing logarithms by t.

2. If the sums of maximum scores on the two sides are equal, cancel the common exponential and take limits to obtain m_F m_G≤m_join m_meet. If the exponent inequality is strict, the leading asymptotics impose no such multiplicity comparison.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-four-functions--zero-temperature-counting)

---

## 10. An exact audit of extremizers on a small cube

**Research seminar · research-extension · 100 minutes suggested**

ID: core-four-functions--finite-extremizer-audit

Design a reproducible exhaustive study of nonempty F,G⊆2^[3]. Compute D=|F∨G||F∧G|−|F||G|, classify zero-gap pairs by family sizes, and test the conjecture that equality forces both families to be sublattices. Supply a certified counterexample or a complete finite verification, not a general theorem inferred from a sample.

**Required output:** Executable pseudocode, exact counts by sizes, and machine-checkable extremal witnesses.

**Prerequisites:** Four Functions theorem; weighted set families; finite lattices

**Examiner follow-up:** After excluding singleton families, which modified characterization survives the finite search?

<details>
<summary>Solution route / investigation plan</summary>

1. Represent subsets by three-bit integers, joins by bitwise OR and meets by bitwise AND. There are 255^2 ordered nonempty family pairs, small enough for exact enumeration; store canonical witnesses for every reported claim.

2. The proposed equality characterization is already suspect: if G={∅}, then F∨G=F and F∧G={∅}, giving equality for every F, including nonsublattices. Use this as a baseline that the implementation must recover before exploring additional restrictions.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-four-functions--finite-extremizer-audit)

---

## 11. Construct the distributive-lattice embedding

**Doctoral proof · proof · 45 minutes suggested**

ID: core-four-functions--ideal-embedding-detail

For a finite distributive lattice L, let J be its join-irreducible elements and put φ(x)={j∈J:j≤x}. Prove that φ is injective and preserves meet and join, then transfer a four-function inequality by extending functions by zero outside φ(L). Identify where distributivity is essential.

**Required output:** A self-contained embedding proof and a justified zero-extension transfer.

**Prerequisites:** Four Functions theorem; weighted set families; finite lattices

**Examiner follow-up:** Show explicitly which join-prime implication fails for an atom of M3.

<details>
<summary>Solution route / investigation plan</summary>

1. Every nonzero element is a join of join-irreducibles, by induction down the finite order. This makes φ injective and gives φ(x∧y)=φ(x)∩φ(y).

2. In a distributive lattice a join-irreducible j is join-prime: j≤x∨y implies j=(j∧x)∨(j∧y), hence j≤x or j≤y. This proves union preservation. The zero extensions satisfy the Boolean pointwise condition because the embedded image is a sublattice.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-four-functions--ideal-embedding-detail)

---

## 12. Hard constraints, slices and eliminated variables

**Examiner challenge · synthesis · 60 minutes suggested**

ID: core-four-functions--conditional-slice-closure

Let C⊆{0,1}^{r+s} be closed under meet and join and let w≥0 be log-supermodular. For a fixed visible coordinate assignment x, define Z(x)=Σ_z 1_C(x,z)w(x,z). Prove that the support of Z is a sublattice and that every nonzero conditional slice remains log-supermodular. Distinguish conditioning from marginalization.

**Required output:** A closure diagram with separate proofs for support, conditional slices and marginal weights.

**Prerequisites:** Four Functions theorem; weighted set families; finite lattices

**Examiner follow-up:** Can a support be a sublattice while its positive weights fail log-supermodularity?

<details>
<summary>Solution route / investigation plan</summary>

1. The product 1_C w is log-supermodular: if both input weights are positive then both meet and join remain in C. Fixing coordinates preserves the defining inequality on the unfixed coordinates.

2. If Z(x),Z(y)>0, choose compatible completions z,t. Their meet and join are compatible completions of x∧y and x∨y, so both marginal masses are positive. Marginal log-supermodularity additionally uses the previously proved Four Functions summation argument.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-four-functions--conditional-slice-closure)
