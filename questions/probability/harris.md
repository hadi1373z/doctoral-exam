# Product-measure correlation: an inductive proof

§6.3 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-harris)

## 1. Product-measure correlation: an inductive proof

**Doctoral proof · proof · 30 minutes suggested**

ID: core-harris--source-proof

Prove Harris–Kleitman by induction for unequal coordinate biases pᵢ. Write the last-coordinate covariance term explicitly. Apply it to two increasing random-graph properties and explain what fails for a fixed-edge-count model.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** Increasing events are positively correlated under independent-coordinate product measures; an increasing and a decreasing event are negatively correlated.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. Let a_b=Pr(A|Xn=b), b_b=Pr(B|Xn=b). The leftover covariance is p(1−p)(a₁−a₀)(b₁−b₀)≥0.

2. Independence leaves each conditioned slice a smaller product space. For an increasing and decreasing pair, one conditional difference changes sign.

3. G(n,p) is a product measure over edges. Uniform G(n,m) has dependent coordinates; the product-measure proof is unavailable and correlation may have a different sign.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-harris--source-proof)

---

## 2. Why is monotonicity essential?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-harris--oral-check-1

Why is monotonicity essential?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Increasing events are positively correlated under independent-coordinate product measures; an increasing and a decreasing event are negatively correlated.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. For X Bernoulli, A={X=1} and B={X=0} have negative covariance.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-harris--oral-check-1)

---

## 3. Does the argument require all pᵢ to coincide?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-harris--oral-check-2

Does the argument require all pᵢ to coincide?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** Increasing events are positively correlated under independent-coordinate product measures; an increasing and a decreasing event are negatively correlated.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. Conditioning only uses independence, and the last-coordinate calculation allows any p∈[0,1].

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-harris--oral-check-2)

---

## 4. When is Harris an equality?

**Doctoral proof · proof · 40 minutes suggested**

ID: core-harris--strictness-essential-coordinates

For increasing events A,B under a product law with all 0<p_i<1, call i essential to A if changing only bit i changes membership somewhere. Prove Cov(1_A,1_B)=0 exactly when A and B have disjoint essential-coordinate sets. Include constant events.

**Required output:** An equality theorem with both directions and boundary-bias counterexamples.

**Prerequisites:** product measures; Harris inequality; conditional expectation

**Examiner follow-up:** Why does strict positivity of all coordinate biases matter for the characterization?

<details>
<summary>Solution route / investigation plan</summary>

1. If a coordinate i is essential to an increasing event, the averaged discrete derivative I_i(A)=P(A|X_i=1)−P(A|X_i=0) is strictly positive because every remaining configuration has positive mass.

2. Condition on X_i. Harris on each slice gives Cov(1_A,1_B)≥p_i(1−p_i)I_i(A)I_i(B), positive when i is shared. Conversely a Boolean function depends only on its essential coordinates, so disjoint essential sets give independence.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-harris--strictness-essential-coordinates)

---

## 5. A quantitative lower bound for a random hitting set

**Doctoral proof · synthesis · 45 minutes suggested**

ID: core-harris--random-hitting-lower-bound

Choose each element of [n] independently with probability p_i. For prescribed nonempty sets S_1,…,S_m, prove a product lower bound for hitting all of them. For S_1={1,2}, S_2={2,3} and common p, calculate the exact probability and its gap from the product bound.

**Required output:** The general bound, an exact overlap calculation and its equality analysis.

**Prerequisites:** product measures; Harris inequality; conditional expectation

**Examiner follow-up:** Show that disjoint S_j give equality and identify other degenerate equality cases.

<details>
<summary>Solution route / investigation plan</summary>

1. Each event H_j={R∩S_j≠∅} is increasing, so Harris iterates to P(∩H_j)≥∏_j[1−∏_{i∈S_j}(1−p_i)]. The product is over prescribed sets, while each inner product is the independent probability of missing that one set.

2. For the overlapping pair, condition on bit 2: the exact probability is p+(1−p)p². Subtract [1−(1−p)²]² to obtain p(1−p)³. The shared essential coordinate explains the strict positive gap for 0<p<1.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-harris--random-hitting-lower-bound)

---

## 6. Differentiate a monotone event probability

**Examiner challenge · proof · 50 minutes suggested**

ID: core-harris--russo-pivotal-identity

For an increasing event A on n independent Bernoulli(p) bits, prove dP_p(A)/dp=Σ_i P_p(i is pivotal). Derive Cov_p(1_A,X_i)=p(1−p)P_p(i is pivotal), and calculate both sides for A={at least two of three bits are one}.

**Required output:** A derivative proof and a complete majority-event calculation.

**Prerequisites:** product measures; Harris inequality; conditional expectation

**Examiner follow-up:** Which identity remains true for a nonmonotone event, and how must pivotality be signed?

<details>
<summary>Solution route / investigation plan</summary>

1. Differentiate the multilinear probability first with separate biases p_i. The partial derivative is P(A|X_i=1)−P(A|X_i=0), which equals the pivotal probability for a monotone Boolean event.

2. For the three-bit majority event P(A)=3p²−2p³, so the derivative is 6p(1−p). Each pivotal event means the other two bits differ, with probability 2p(1−p). Multiply this by p(1−p) for the coordinate covariance.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-harris--russo-pivotal-identity)

---

## 7. Harris beyond binary coordinates

**Examiner challenge · proof · 55 minutes suggested**

ID: core-harris--ordered-alphabet-harris

Let independent Z_i take values in finite totally ordered sets, with arbitrary marginal laws. Prove positive association for increasing real functions on their product, using induction and the identity Cov(f(Z),g(Z))=E[(f(Z)−f(Z'))(g(Z)−g(Z'))]/2 for one coordinate.

**Required output:** A finite-alphabet proof with the ordering assumption used explicitly.

**Prerequisites:** product measures; Harris inequality; conditional expectation

**Examiner follow-up:** Why does this proof not directly work when one coordinate has an arbitrary partial order with incomparable values?

<details>
<summary>Solution route / investigation plan</summary>

1. For a single ordered coordinate and an independent copy Z', the two differences always have the same sign. Expanding the expectation gives the covariance identity and proves its nonnegativity.

2. Condition on the last coordinate. The conditional covariance is nonnegative by induction, while the conditional means are increasing functions of the last ordered value. Apply the one-coordinate inequality to the remaining covariance term.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-harris--ordered-alphabet-harris)

---

## 8. Reliability bounds without independent path events

**Examiner challenge · synthesis · 60 minutes suggested**

ID: core-harris--two-terminal-reliability-bounds

In a graph whose edges occur independently with probabilities p_e, let P_1,…,P_m be specified s–t paths. Give an upper bound on P(at least one P_j survives) using Harris on failure events, and compare it with the union bound. Compute both bounds for two length-two paths sharing one edge, with common p.

**Required output:** A general reliability inequality and an exact shared-edge comparison.

**Prerequisites:** product measures; Harris inequality; conditional expectation

**Examiner follow-up:** Which direction gives a lower bound on simultaneous survival of all selected paths?

<details>
<summary>Solution route / investigation plan</summary>

1. Path survival is increasing and path failure is decreasing. Thus P(no selected path survives)≥∏_j(1−∏_{e∈P_j}p_e), so the desired union probability is at most one minus this product.

2. For paths {a,b} and {a,c}, the exact union probability is 2p²−p³. The Harris upper bound is 2p²−p⁴ and the union bound is min(1,2p²). The shared edge prevents replacing the exact union probability by the independent-path formula.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-harris--two-terminal-reliability-bounds)

---

## 9. A martingale decomposition of monotone covariance

**Research seminar · research-extension · 85 minutes suggested**

ID: core-harris--covariance-decomposition

For increasing real f,g of independent biased bits, expose coordinates in one fixed order. Derive an exact covariance formula as a sum of products of conditional discrete derivatives. Compare it with the single-coordinate lower bound, and disprove the tempting bound obtained by summing all unconditional influence products.

**Required output:** The decomposition, the invalid-sum counterexample and two exposure-order calculations.

**Prerequisites:** product measures; Harris inequality; conditional expectation

**Examiner follow-up:** How does changing exposure order redistribute the exact nonnegative summands?

<details>
<summary>Solution route / investigation plan</summary>

1. Let D_i f(prefix)=E[f|prefix,X_i=1]−E[f|prefix,X_i=0]. Doob increments equal (X_i−p_i)D_i f. Orthogonality between different martingale times gives Cov(f,g)=Σ_i p_i(1−p_i)E[D_i f D_i g].

2. The conditional derivatives are nonnegative, but they are not the unconditional influences. On two fair bits take f=OR and g=AND: Cov(f,g)=1/16, whereas summing p_i(1−p_i)I_i(f)I_i(g) gives 1/8. Each individual-coordinate lower bound remains valid.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-harris--covariance-decomposition)

---

## 10. Association in an independent-edge infection model

**Research seminar · research-extension · 100 minutes suggested**

ID: core-harris--network-infection-association

Fix a finite directed graph and independently declare each arc open with probability p_e. A source infects vertices reachable by open directed paths. Prove a lower product bound for infecting all terminals, derive the derivative of a terminal's infection probability in one arc parameter, and formulate a reproducible exact-enumeration check on a five-vertex network.

**Required output:** A theorem, an explicit small network, and exact rational audit results.

**Prerequisites:** product measures; Harris inequality; conditional expectation

**Examiner follow-up:** How does allowing correlated arc failures affect each step of the argument?

<details>
<summary>Solution route / investigation plan</summary>

1. Reachability to each terminal is increasing in the arc indicators. Harris therefore gives the all-terminal lower bound, even though many routes share arcs. The derivative in p_e is the probability that e changes reachability when the other arcs are fixed.

2. Enumerate all 2^m arc states for a chosen network with at most ten arcs, using exact rational p_e. Compare the exact joint probability to the product and check the finite-difference derivative against the pivotal formula. A negative gap or derivative is an implementation failure criterion.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-harris--network-infection-association)

---

## 11. Two complementary edge colors have opposite monotonicity

**Doctoral proof · proof · 45 minutes suggested**

ID: core-harris--complementary-color-correlation

Independently color each edge of a fixed graph red with probability p_e and blue otherwise. Let A be a red increasing edge property and B a blue increasing edge property. Prove P(A∩B)≤P(A)P(B). For a three-edge path calculate the probability that all red edges include its first two edges while all blue edges include its last two.

**Required output:** A monotonicity proof and an exact incompatible-overlap example.

**Prerequisites:** product measures; Harris inequality; conditional expectation

**Examiner follow-up:** What changes if the red and blue graphs are sampled independently instead of being complementary?

<details>
<summary>Solution route / investigation plan</summary>

1. Use the red indicators as the product coordinates. A is increasing, whereas a blue increasing property is decreasing in those red coordinates. Harris with opposite monotonicity gives the upper bound.

2. In the path example, the middle edge would have to be simultaneously red and blue, so the intersection has probability zero. With 0<p_e<1 both marginal event probabilities are positive, giving a strict inequality caused by the shared edge.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-harris--complementary-color-correlation)

---

## 12. Compare two product measures by one uniform coupling

**Examiner challenge · construction · 60 minutes suggested**

ID: core-harris--monotone-coupling-in-bias

Let p_i≤q_i and let A be increasing. Construct a coupling proving P_p(A)≤P_q(A). Derive an upper bound on P_q(A)−P_p(A) in terms of Σ_i(q_i−p_i), and a sharper telescoping formula involving pivotal probabilities at intermediate bias vectors.

**Required output:** A coupling, the coarse bound and an exact parameter-by-parameter identity.

**Prerequisites:** product measures; Harris inequality; conditional expectation

**Examiner follow-up:** Can the total influence at p alone replace all intermediate pivotal probabilities without an additional argument?

<details>
<summary>Solution route / investigation plan</summary>

1. Take independent U_i uniform on [0,1] and set X_i=1_{U_i≤p_i}, Y_i=1_{U_i≤q_i}. Then X≤Y pointwise. A change in event membership requires at least one coordinate disagreement, giving the sum bound by a union bound.

2. Change the biases one at a time. Multilinearity gives an exact contribution (q_i−p_i) times the pivotal probability with earlier coordinates at q and later coordinates at p. This formula improves the coarse bound whenever many coordinates are rarely pivotal.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-harris--monotone-coupling-in-bias)
