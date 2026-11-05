# Four concentration applications: find the right Lipschitz constant

§7.5 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-azuma-app)

## 1. Four concentration applications: find the right Lipschitz constant

**Doctoral proof · proof · 30 minutes suggested**

ID: core-azuma-app--source-proof

For a random map [n]→[n], prove that changing one image changes the number of missing values by at most one. For a signed vector sum, determine the effect of flipping a sign. Derive a Hamming-neighborhood consequence by concentrating distance to a set.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Missing values of a random map, signed vector norms and Hamming neighborhoods illustrate how concentration depends on the model and the sensitivity of the exposed coordinates.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. Changing one image can fill one previously empty bin and empty its old bin; these effects have opposite signs, so the missing-bin count changes by at most one.

2. For ||∑εᵢvᵢ|| with ||vᵢ||≤1, flipping one sign changes the vector by 2vᵢ. State whether your martingale bound uses full replacement effect or the centered half-range before choosing constants.

3. Distance to a subset of the cube is 1-Lipschitz in each bit. Concentrating it and using the set’s mass relates lower and upper quantiles, producing the neighborhood expansion conclusion.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma-app--source-proof)

---

## 2. Why is centering at n/e not exactly centering at the expectation?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-azuma-app--oral-check-1

Why is centering at n/e not exactly centering at the expectation?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Missing values of a random map, signed vector norms and Hamming neighborhoods illustrate how concentration depends on the model and the sensitivity of the exposed coordinates.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. E[missing]=n(1−1/n)^n, so a deterministic error term is needed when replacing the exact center by n/e.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma-app--oral-check-1)

---

## 3. Can a norm be replaced by one chosen coordinate?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-azuma-app--oral-check-2

Can a norm be replaced by one chosen coordinate?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Missing values of a random map, signed vector norms and Hamming neighborhoods illustrate how concentration depends on the model and the sensitivity of the exposed coordinates.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Not if the target theorem concerns the norm. Use the reverse triangle inequality to control the norm directly.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma-app--oral-check-2)

---

## 4. Weighted occupancy with nonuniform probabilities

**Doctoral proof · proof · 40 minutes suggested**

ID: core-azuma-app--nonuniform-weighted-empty-bins

Throw m independent balls into n bins with probabilities q_j. Let Z=Σ_j w_j1_{bin j empty}, with 0≤w_j≤W. Derive E Z, prove a replacement effect at most W rather than 2W, and establish nonpositive covariance between distinct empty-bin indicators.

**Required output:** A weighted sensitivity proof, exact mean and covariance-based variance bound.

**Prerequisites:** bounded differences; occupancy models; norm inequalities; Hamming distance

**Examiner follow-up:** Which conclusion fails if ball destinations are perfectly correlated?

<details>
<summary>Solution route / investigation plan</summary>

1. The mean is Σ_j w_j(1−q_j)^m. Moving one ball can empty its old bin and fill its new bin; these contributions have opposite signs, so their net absolute change is at most max(w_old,w_new)≤W.

2. For distinct bins i,j, joint emptiness has probability (1−q_i−q_j)^m≤[(1−q_i)(1−q_j)]^m. Hence Var Z≤Σ_j w_j²a_j(1−a_j), where a_j=(1−q_j)^m. This variance calculation and the bounded-difference tail are separate statements.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma-app--nonuniform-weighted-empty-bins)

---

## 5. A Hilbert-space center obtained from a second moment

**Doctoral proof · proof · 45 minutes suggested**

ID: core-azuma-app--hilbert-signed-sum-center

Let v_i lie in a real Hilbert space and ε_i be independent fair signs. Prove E||Σ_i ε_i v_i||²=Σ_i||v_i||² and derive an upper tail above √(Σ_i||v_i||²). Explain when Jensen's bound for the mean is attained, using orthogonal and collinear examples.

**Required output:** A moment identity, a concentration statement and two contrasting geometries.

**Prerequisites:** bounded differences; occupancy models; norm inequalities; Hamming distance

**Examiner follow-up:** Is orthogonality necessary for equality, or is almost-sure constancy of the norm the actual condition?

<details>
<summary>Solution route / investigation plan</summary>

1. All cross inner products vanish after expectation because E ε_i ε_j=0 for i≠j. Jensen gives E||Σ ε_i v_i||≤√Σ||v_i||².

2. Replacing one sign changes the norm by at most 2||v_i||, and fair-sign centering halves the martingale effect to ||v_i||. Azuma gives an upper tail exp(−t²/[2Σ||v_i||²]) above the stated deterministic center. Orthogonal vectors make the norm constant and Jensen an equality; repeated collinear vectors generally do not.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma-app--hilbert-signed-sum-center)

---

## 6. Weighted neighborhood expansion under a biased cube law

**Examiner challenge · proof · 50 minutes suggested**

ID: core-azuma-app--weighted-biased-neighborhood

Let independent biased bits carry product law μ, let a=μ(A)>0, and use weighted Hamming distance d_c with weights c_i>0 and V=Σc_i². Prove μ{d_c(X,A)>√(V ln(1/a)/2)+√(V ln(1/b)/2)}≤b for 0<b<1, using the range form of bounded differences.

**Required output:** A weighted expansion theorem with both quantile-to-mean and mean-to-tail steps.

**Prerequisites:** bounded differences; occupancy models; norm inequalities; Hamming distance

**Examiner follow-up:** How should zero coordinate weights be treated when the distance becomes a pseudometric?

<details>
<summary>Solution route / investigation plan</summary>

1. The distance D to A changes by at most c_i when bit i changes. Thus P(D−E D≤−t) and P(D−E D≥t) are each at most exp(−2t²/V), regardless of the coordinate biases.

2. Since P(D=0)=a, the lower-tail inequality implies E D≤√(V ln(1/a)/2). Apply the upper tail at √(V ln(1/b)/2). No uniform-counting interpretation is needed for the biased measure.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma-app--weighted-biased-neighborhood)

---

## 7. Collisions are much less Lipschitz than empty bins

**Examiner challenge · synthesis · 55 minutes suggested**

ID: core-azuma-app--collision-count-sensitivity

For m independent uniform throws into n bins, let C=Σ_j C(N_j,2) count colliding pairs. Compute E C and the exact worst replacement effect m−1. Derive the resulting bounded-difference tail and explain why its fluctuation scale is poor when m=n.

**Required output:** A mean and sensitivity calculation plus a variance-based diagnosis of looseness.

**Prerequisites:** bounded differences; occupancy models; norm inequalities; Hamming distance

**Examiner follow-up:** Verify that two distinct pair-collision indicators are pairwise independent even when the pairs share one ball.

<details>
<summary>Solution route / investigation plan</summary>

1. Each pair of balls collides with probability 1/n, so E C=C(m,2)/n. Moving a ball from a bin of size a to another of size b changes C by b−(a−1), whose absolute value is at most m−1.

2. The range-form denominator is m(m−1)², producing a scale m^{3/2}. When m=n, the mean is only Θ(n), and pair-indicator covariance calculations give variance Θ(n), so this worst-effect concentration is very coarse.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma-app--collision-count-sensitivity)

---

## 8. Separate a variance-dependent center from a range-dependent tail

**Examiner challenge · proof · 60 minutes suggested**

ID: core-azuma-app--biased-sign-norms

Let independent ε_i∈{−1,1} satisfy P(ε_i=1)=p_i and let v_i be Hilbert-space vectors. For Z=||Σ_i(ε_i−E ε_i)v_i||, derive a second-moment center and a valid bounded-difference tail. Explain why the tail denominator does not automatically become the second-moment denominator.

**Required output:** A centered-vector second moment and a correctly parameterized concentration bound.

**Prerequisites:** bounded differences; occupancy models; norm inequalities; Hamming distance

**Examiner follow-up:** Give a very rare, very large one-coordinate example demonstrating why the center calculation alone does not prove the sharper tail.

<details>
<summary>Solution route / investigation plan</summary>

1. Independence and centering give E Z²=Σ_i4p_i(1−p_i)||v_i||². Jensen bounds E Z by the square root of this quantity.

2. A sign replacement changes Z by at most 2||v_i||. The range-form inequality gives P(Z≥E Z+t)≤exp(−t²/[2Σ||v_i||²]). Replacing that denominator by Σ4p_i(1−p_i)||v_i||² needs a variance-sensitive theorem and its jump/deviation hypotheses.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma-app--biased-sign-norms)

---

## 9. Poissonize empty bins and pay for conditioning back

**Research seminar · research-extension · 85 minutes suggested**

ID: core-azuma-app--occupancy-poissonization

Replace m uniform balls in n bins by independent Poisson(m/n) bin counts and let Z be the number empty. Derive a Chernoff bound using independent empty-bin indicators. Transfer it to exactly m balls by conditioning on the total count, explicitly paying the factor 1/P(Poisson(m)=m). Compare the two natural centers.

**Required output:** A Poissonization identity, a conditioned tail and an explicit center-shift estimate.

**Prerequisites:** bounded differences; occupancy models; norm inequalities; Hamming distance

**Examiner follow-up:** For m=n and deviations √(n log n), when does the exponential tail absorb the √m conditioning cost?

<details>
<summary>Solution route / investigation plan</summary>

1. In the Poissonized model Z∼Bin(n,e^{−m/n}); standard MGF optimization gives its binomial tail. Conditional on the total m, the bin counts have the multinomial occupancy law, as follows by cancelling the factorial terms in their joint probability.

2. For any event E, P(E|total=m)≤P(E)/P(total=m). Stirling's estimate, assumed or proved, makes the conditioning factor Θ(√m). The Poissonized center ne^{−m/n} differs from n(1−1/n)^m; bound this deterministic shift before asserting a tail about the exact fixed-m mean.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma-app--occupancy-poissonization)

---

## 10. A bounded-effect surrogate for collision count

**Research seminar · research-extension · 100 minutes suggested**

ID: core-azuma-app--truncated-collision-extension

For m=n uniform throws, define φ_L(0)=0 and φ_L(k)−φ_L(k−1)=min(k−1,L), and C_L=Σ_jφ_L(N_j). Prove replacement effect at most L, identify when C_L=C, and derive a tail for C around E C with an explicit occupancy-failure and expectation-shift term.

**Required output:** A rigorous surrogate argument with all approximation errors displayed.

**Prerequisites:** bounded differences; occupancy models; norm inequalities; Hamming distance

**Examiner follow-up:** What L of order log n/log log n makes the expectation shift negligible compared with √n L?

<details>
<summary>Solution route / investigation plan</summary>

1. Moving a ball changes C_L by the difference of two increments in [0,L], so the effect is at most L. Since φ_L(k)=C(k,2) for k≤L+1, equality holds whenever every bin has load at most L+1.

2. A union bound gives P(max N_j≥L+2)≤n[e/(L+2)]^{L+2}. Also 0≤E(C−C_L)≤C(n,2)P(max N_j≥L+2). Apply bounded differences to C_L with denominator nL² and add the bad-load probability and this deterministic center shift. Choose L to make both errors explicit.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma-app--truncated-collision-extension)

---

## 11. Isolated vertices: exact covariance and an edge effect

**Doctoral proof · proof · 45 minutes suggested**

ID: core-azuma-app--isolated-vertex-concentration

In G(n,p) let I count isolated vertices. Compute E I and Cov(1_{u isolated},1_{v isolated}) for u≠v. Prove edge replacement effect at most two and give a bounded-difference tail. Explain the covariance sign by comparing this model with empty bins from independent throws.

**Required output:** Exact first two moments and a correctly scaled edge-exposure bound.

**Prerequisites:** bounded differences; occupancy models; norm inequalities; Hamming distance

**Examiner follow-up:** Use the covariance formula to write Var I exactly and compare sparse p=c/n with the tail proxy.

<details>
<summary>Solution route / investigation plan</summary>

1. A vertex is isolated with probability a=(1−p)^{n−1}. Two vertices are both isolated when all 2n−3 incident edges are absent, so their covariance is (1−p)^{2n−3}−(1−p)^{2n−2}=p(1−p)^{2n−3}≥0.

2. Changing one edge affects isolation only at its two endpoints, so the full replacement effect is at most two. Range-form bounded differences gives P(|I−E I|≥t)≤2exp(−t²/[2C(n,2)]). The positive covariance comes from the shared required-absent edge; occupancy emptiness had a different dependence mechanism.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma-app--isolated-vertex-concentration)

---

## 12. A Hilbert-space center cannot be used in every norm

**Examiner challenge · counterexample · 60 minutes suggested**

ID: core-azuma-app--norm-geometry-counterexample

Take v_i=e_i in R^n and independent fair signs. Compute ||Σ_i ε_i e_i|| in ℓ_1, ℓ_2 and ℓ_∞. Use the examples to refute a universal bound E||Σ ε_i v_i||≤√Σ||v_i||² in arbitrary normed spaces, while retaining valid sign-Lipschitz concentration.

**Required output:** Three exact norm calculations and a separation of geometry from concentration.

**Prerequisites:** bounded differences; occupancy models; norm inequalities; Hamming distance

**Examiner follow-up:** Why is a concentration inequality about a mean compatible with a very large deterministic mean?

<details>
<summary>Solution route / investigation plan</summary>

1. Each e_i has norm one in all three spaces. The random sum has norms n, √n and one respectively, and these values are deterministic.

2. Thus the proposed square-root center fails in ℓ_1 by a factor √n. The reverse triangle inequality still bounds sign replacement by 2||v_i|| in every normed space, so concentration about the actual mean remains valid even when a Hilbert second-moment identity is unavailable.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §7.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-azuma-app--norm-geometry-counterexample)
