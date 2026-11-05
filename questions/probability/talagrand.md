# Talagrand’s convex distance: geometric rather than Hamming distance

§7.6 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-talagrand)

## 1. Talagrand’s convex distance: geometric rather than Hamming distance

**Doctoral proof · proof · 45 minutes suggested**

ID: core-talagrand--source-proof

Define the mismatch-vector convex hull and prove the dual weighted-distance interpretation. Derive μ{dT(x,A)≥t}≤exp(−t²/4)/μ(A). Compute the convex distance for A={00,11}, x=01 and compare it with Hamming distance.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Talagrand’s product-space inequality controls a convexified weighted mismatch distance, not ordinary Hamming distance.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. For x=01, the mismatch vectors to A are (0,1) and (1,0). Their convex hull has minimum norm 1/√2 at (1/2,1/2), while Hamming distance to A is 1.

2. The source inequality E exp(dT(X,A)²/4)≤1/μ(A) implies the displayed tail by Markov.

3. The weighting/convexification can average several possible witnesses. Replacing it by the raw count of changed coordinates is a different inequality.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-talagrand--source-proof)

---

## 2. Why must the underlying measure be a product?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-talagrand--oral-check-1

Why must the underlying measure be a product?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Talagrand’s product-space inequality controls a convexified weighted mismatch distance, not ordinary Hamming distance.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. The theorem exploits independence of the coordinate spaces; arbitrary dependent measures need not satisfy it.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-talagrand--oral-check-1)

---

## 3. What happens if μ(A)=0?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-talagrand--oral-check-2

What happens if μ(A)=0?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Talagrand’s product-space inequality controls a convexified weighted mismatch distance, not ordinary Hamming distance.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. The bound is vacuous or undefined in this form. Apply it only for positive-mass A.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-talagrand--oral-check-2)

---

## 4. Compute convex distance to a threshold family

**Doctoral proof · proof · 40 minutes suggested**

ID: core-talagrand--threshold-family-distance

Let A={y∈{0,1}^n:Σ_i y_i≥k} and let x have r<k ones. Prove d_T(x,A)²=(k−r)²/(n−r). Give an explicit convex combination attaining the minimum and a matching lower bound; handle r≥k separately.

**Required output:** A primal convex witness and a matching norm lower bound.

**Prerequisites:** Talagrand convex distance; convex hulls; product measures

**Examiner follow-up:** Compare this formula with ordinary Hamming distance k−r.

<details>
<summary>Solution route / investigation plan</summary>

1. Any y∈A must turn at least k−r of x's zero coordinates into ones, regardless of any additional flips. Every convex mismatch vector therefore has total mass at least k−r on the n−r zero coordinates, so Cauchy–Schwarz gives squared norm at least (k−r)²/(n−r).

2. Average uniformly over y obtained by adding exactly k−r of those zero coordinates and changing no existing ones. The resulting mismatch vector is (k−r)/(n−r) on the zeros and zero elsewhere, attaining the lower bound. For r≥k, x∈A and distance is zero.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-talagrand--threshold-family-distance)

---

## 5. Convex distance tensorizes on product target sets

**Doctoral proof · proof · 45 minutes suggested**

ID: core-talagrand--product-distance-additivity

For nonempty A⊆Ω_1×…×Ω_r and B⊆Ω_{r+1}×…×Ω_n, prove d_T((x,z),A×B)²=d_T(x,A)²+d_T(z,B)². Justify the convex-hull identity involved; do not assume independent random coordinates are needed for this geometric identity.

**Required output:** A convex-hull identity and the resulting distance formula.

**Prerequisites:** Talagrand convex distance; convex hulls; product measures

**Examiner follow-up:** Does an analogous exact formula hold for a union of target sets?

<details>
<summary>Solution route / investigation plan</summary>

1. The mismatch set for A×B is U_A(x)×U_B(z). Its convex hull equals conv U_A(x)×conv U_B(z): one inclusion is immediate, and the other follows by multiplying convex-combination coefficients.

2. The squared Euclidean norm of a concatenated vector is the sum of squared norms, and the two factors can be minimized independently. Independence enters Talagrand's probability theorem, not this deterministic product-distance calculation.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-talagrand--product-distance-additivity)

---

## 6. Find the sharp elementary comparisons with Hamming distance

**Examiner challenge · proof · 50 minutes suggested**

ID: core-talagrand--hamming-comparison-sharp

For nonempty A⊆{0,1}^n and h=d_H(x,A), prove h/√n≤d_T(x,A)≤√h. Give examples attaining each bound and explain why neither d_T=d_H nor d_T=√d_H is generally correct.

**Required output:** The two inequalities and explicit sharpness families.

**Prerequisites:** Talagrand convex distance; convex hulls; product measures

**Examiner follow-up:** Can the lower bound improve when every mismatch is supported on a known coordinate set of size s<n?

<details>
<summary>Solution route / investigation plan</summary>

1. Every mismatch vector has ℓ_1 norm at least h, so every convex combination does too. Cauchy–Schwarz gives its ℓ_2 norm at least h/√n. A nearest actual mismatch vector has exactly h ones and norm √h, proving the upper bound.

2. For the lower bound take x=0 and A consisting of all h-element subsets; their symmetric average has all coordinates h/n. For the upper bound take A a singleton at Hamming distance h, so no convexification reduces the norm.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-talagrand--hamming-comparison-sharp)

---

## 7. A dependent law violates the exponential-integral inequality

**Examiner challenge · counterexample · 55 minutes suggested**

ID: core-talagrand--dependent-two-atom-failure

Let X equal 0^n or 1^n with probability 1/2 each, and take A={0^n}. Compute μ(A)E exp(d_T(X,A)²/4) and determine the smallest integer n for which it exceeds one. Explain what remains true geometrically despite this failure.

**Required output:** An exact numerical threshold and a clean geometric/probabilistic distinction.

**Prerequisites:** Talagrand convex distance; convex hulls; product measures

**Examiner follow-up:** What does this example say about replacing independent coordinates by merely identical coordinate marginals?

<details>
<summary>Solution route / investigation plan</summary>

1. There is only one target, so d_T(0^n,A)=0 and d_T(1^n,A)=√n. The product in question is [1+e^{n/4}]/4.

2. It exceeds one when n>4ln3, first at n=5. The mismatch convex hull and all deterministic distance comparisons remain valid, but the measure is not a product measure and the stated probabilistic inequality fails.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-talagrand--dependent-two-atom-failure)

---

## 8. Separate two weighted-sum events by convex distance

**Examiner challenge · synthesis · 60 minutes suggested**

ID: core-talagrand--weighted-halfspace-separation

For independent bits and weights w_i≥0, let S=Σ_iw_iX_i and A={S≤a}. Prove d_T(x,A)≥(S(x)−a)/||w||_2 when S(x)>a. Deduce P(S≤a)P(S≥a+t||w||_2)≤e^{−t²/4}, assuming Talagrand's inequality.

**Required output:** A deterministic separation proof and the resulting two-event probability inequality.

**Prerequisites:** Talagrand convex distance; convex hulls; product measures

**Examiner follow-up:** How can signed weights be handled by changing coordinate order or using absolute values?

<details>
<summary>Solution route / investigation plan</summary>

1. For every y∈A, S(x)−a≤S(x)−S(y)≤Σ_i w_i1_{x_i≠y_i}. The same lower bound holds after convexifying mismatch vectors. Cauchy–Schwarz then gives the distance estimate.

2. The high-sum event lies outside the convex-distance t-neighborhood of A. The Talagrand tail bound is at most e^{−t²/4}/P(A), giving the product inequality when P(A)>0; the zero-probability case is trivial.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-talagrand--weighted-halfspace-separation)

---

## 9. Compute convex distance with primal and dual certificates

**Research seminar · research-extension · 85 minutes suggested**

ID: core-talagrand--certified-convex-distance-computation

For explicitly listed A⊆{0,1}^n, design a reproducible algorithm returning upper and lower certificates for d_T(x,A), with gap at most 10^−6 on test instances. Use a threshold family as an analytic baseline. State how rational convex coefficients and a normalized dual vector certify the two bounds.

**Required output:** An algorithm, certified numerical bounds and a reproducible baseline report.

**Prerequisites:** Talagrand convex distance; convex hulls; product measures

**Examiner follow-up:** How would an optimization oracle for A replace explicitly storing all mismatch columns?

<details>
<summary>Solution route / investigation plan</summary>

1. Minimize ||Uθ||² over θ≥0, Σθ=1, where columns of U are mismatch vectors. Any feasible θ gives an upper bound. Any vector α with ||α||_2≤1 gives a lower bound min_{y∈A}α·u(x,y), by convex separation or the dual distance formula.

2. Numerical solver output alone is not a certificate: round θ, renormalize it and evaluate its norm with error control; scale a rational α conservatively to ensure norm at most one. Failure means the certified gap exceeds tolerance or the threshold-family baseline is missed, not merely that two floating outputs disagree.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-talagrand--certified-convex-distance-computation)

---

## 10. Find the sharp exponent for product subcube targets

**Research seminar · research-extension · 100 minutes suggested**

ID: core-talagrand--optimal-subcube-exponent

Let A fix an arbitrary set of binary coordinates to zero, under an independent product law with arbitrary biases. Determine the largest universal c for which μ(A)E exp(c d_T(X,A)²)≤1 holds for every such subcube and every dimension. Compare it with Talagrand's general exponent 1/4.

**Required output:** A sharp restricted-class theorem with matching upper and lower parameter arguments.

**Prerequisites:** Talagrand convex distance; convex hulls; product measures

**Examiner follow-up:** Show that fixing coordinates to one leads to the same sharp universal constant.

<details>
<summary>Solution route / investigation plan</summary>

1. For a fixed-to-zero coordinate with success probability p, squared convex distance contributes X_i and target mass contributes 1−p. Independence factors the expression into ∏_i(1−p_i)(1−p_i+p_i e^c).

2. At c=ln2 each factor is 1−p_i²≤1. Conversely the one-coordinate factor is 1+p(e^c−2)+O(p²) as p↓0, so any c>ln2 fails. Thus ln2 is sharp for this target class; this does not establish that exponent for arbitrary target sets.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-talagrand--optimal-subcube-exponent)

---

## 11. A union can be closer than every individual target

**Doctoral proof · construction · 45 minutes suggested**

ID: core-talagrand--union-convexification

Let x=000 and A_1={100}, A_2={010}, A_3={001}. Compute d_T(x,A_i) and d_T(x,A_1∪A_2∪A_3). Generalize to n singleton targets e_i and explain the difference from ordinary distance to a union.

**Required output:** Exact distances and a proof for arbitrary dimension.

**Prerequisites:** Talagrand convex distance; convex hulls; product measures

**Examiner follow-up:** Which inequality between d_T(x,A∪B) and the two separate distances always holds?

<details>
<summary>Solution route / investigation plan</summary>

1. Each singleton target has its one mismatch vector e_i, of norm one. The union target has the simplex conv{e_1,e_2,e_3}; its minimum norm is attained at (1/3,1/3,1/3), giving 1/√3.

2. In n dimensions every point of this simplex has coordinate sum one, so Cauchy–Schwarz gives minimum norm 1/√n, attained at the uniform vector. Ordinary Hamming distance to the union is still one: convexification mixes different nearest witnesses.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-talagrand--union-convexification)

---

## 12. Convex distance to a parity class

**Examiner challenge · proof · 60 minutes suggested**

ID: core-talagrand--parity-target-distance

Let A be the even-parity class of {0,1}^n under the uniform product measure. Compute d_T(x,A) for x in and outside A. Evaluate E exp(d_T(X,A)²/4), and explain why a parity obstruction can have tiny convex distance even though it cannot be repaired without a coordinate change.

**Required output:** A distance formula, an exact exponential moment and a geometric interpretation.

**Prerequisites:** Talagrand convex distance; convex hulls; product measures

**Examiner follow-up:** Compare this example with a fixed-coordinate subcube of measure one half.

<details>
<summary>Solution route / investigation plan</summary>

1. For odd x, flipping any one bit reaches A, so all standard unit mismatch vectors belong to the mismatch set. Their average gives distance at most 1/√n.

2. Every mismatch to an even-parity point has an odd positive number of ones, hence ℓ_1 norm at least one; convexification and Cauchy–Schwarz give the reverse bound. Half the cube has distance zero and half has squared distance 1/n, so the exponential moment is [1+e^{1/(4n)}]/2.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-talagrand--parity-target-distance)
