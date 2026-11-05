# Linear extensions and the XYZ correlation theorem

§6.4 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-xyz)

## 1. Linear extensions and the XYZ correlation theorem

**Doctoral proof · proof · 45 minutes suggested**

ID: core-xyz--source-proof

State the XYZ theorem and reconstruct its reduction to a counting inequality. Explain why independently assigning random ranks and conditioning on the poset is not a sufficient FKG proof.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** For a uniform random linear extension of a finite poset, the events that a fixed element precedes two other designated elements satisfy the assigned positive-correlation inequality.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. For designated a,b,c, the target is Pr(a<b and a<c)≥Pr(a<b)Pr(a<c), where comparisons are in the sampled extension.

2. Uniformity is over valid extensions, whose coordinates are not independent. One must use the structural counting argument from the section.

3. A conditional distribution can lose product-measure association; simply saying “random rankings are independent” ignores the conditioning that defines a linear extension.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-xyz--source-proof)

---

## 2. What if the poset already forces a before b?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-xyz--oral-check-1

What if the poset already forces a before b?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** For a uniform random linear extension of a finite poset, the events that a fixed element precedes two other designated elements satisfy the assigned positive-correlation inequality.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. That event has probability 1 and the inequality reduces to equality for its contribution.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-xyz--oral-check-1)

---

## 3. How can a small instance be checked exactly?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-xyz--oral-check-2

How can a small instance be checked exactly?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** For a uniform random linear extension of a finite poset, the events that a fixed element precedes two other designated elements satisfy the assigned positive-correlation inequality.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Enumerate topological orderings, count the two events and their intersection, and compare the normalized counts.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-xyz--oral-check-2)

---

## 4. An exact XYZ calculation with a nontrivial order constraint

**Doctoral proof · construction · 40 minutes suggested**

ID: core-xyz--four-element-exact-correlation

Let P have elements a,b,c,d, with only b<d and c<d forced. List all linear extensions and compute P(a<b), P(a<c), their intersection, and their covariance. Explain how the symmetry between b and c reduces the enumeration without making a's position independent of their ranks.

**Required output:** The eight extensions, exact rational probabilities and a comparison with the XYZ bound.

**Prerequisites:** linear extensions; XYZ theorem; finite-poset counting

**Examiner follow-up:** How do the probabilities change if d<a is added?

<details>
<summary>Solution route / investigation plan</summary>

1. First order b,c,d: there are two possibilities, bcd and cbd. Insert the isolated a into one of four slots of either order, giving eight equiprobable extensions.

2. In bcd, a precedes b in one slot and c in two; in cbd these counts reverse. Both marginals are 3/8, while a precedes both in two of the eight extensions, giving joint probability 1/4 and covariance 7/64.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-xyz--four-element-exact-correlation)

---

## 5. A one-parameter family with an exact XYZ gap

**Doctoral proof · proof · 45 minutes suggested**

ID: core-xyz--chain-and-two-isolates

Take a chain a=a_1<a_2<…<a_r and two isolated elements b,c, with r≥1. In a uniform linear extension prove P(a<b)=r/(r+1), P(a<b,a<c)=r/(r+2), and derive the exact covariance. Interpret its behavior as r→∞.

**Required output:** A shuffle-counting derivation and the exact positive gap.

**Prerequisites:** linear extensions; XYZ theorem; finite-poset counting

**Examiner follow-up:** Replace b,c by s isolated elements and calculate the probability that a precedes all of them.

<details>
<summary>Solution route / investigation plan</summary>

1. A uniform extension is a uniform shuffle of the ordered chain and the two singleton elements. Restricting to the chain and b gives each insertion position of b the same probability, so only one of r+1 positions precedes a.

2. The event that a precedes both singletons means the first position is occupied by a chain element, which occurs with probability r/(r+2). The gap is r/[(r+2)(r+1)²], positive but tending to zero quadratically.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-xyz--chain-and-two-isolates)

---

## 6. Quantify the tie-removal step in the XYZ proof

**Examiner challenge · proof · 50 minutes suggested**

ID: core-xyz--finite-grid-tie-error

Fix a poset P on n labeled elements and m≥n. Sample uniformly from order-preserving maps P→[m]. Prove that conditioning on distinct labels induces the uniform linear-extension law, and bound the total-variation error by C(n,2)m^(n−1)/(e(P)C(m,n)), where e(P) is the number of extensions.

**Required output:** A finite counting estimate and a rigorous passage from grid maps to extensions.

**Prerequisites:** linear extensions; XYZ theorem; finite-poset counting

**Examiner follow-up:** For fixed n, extract an explicit O(1/m) constant and state why it is not uniform in growing n.

<details>
<summary>Solution route / investigation plan</summary>

1. There are exactly e(P)C(m,n) injective order-preserving maps: choose the n labels and then the extension assigning their increasing order. Every extension receives the same number of maps.

2. At most C(n,2)m^(n−1) maps have some equal coordinate, even before imposing the poset constraints. The tied fraction is at most this quantity divided by the injective count. Coupling by conditioning proves the total-variation bound; cap it at one when it is coarse.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-xyz--finite-grid-tie-error)

---

## 7. Check the unusual lattice used by XYZ

**Examiner challenge · proof · 55 minutes suggested**

ID: core-xyz--shepp-lattice-sublemma

For x,y∈[m]^n define x≼y by x_1≥y_1 and x_i−x_1≤y_i−y_1 for i≥2. Prove that the proposed meet has coordinates min(x_i−x_1,y_i−y_1)+max(x_1,y_1), and the join uses max plus min. Verify both remain in [m]^n and preserve order-map constraints.

**Required output:** A meet/join proof including box closure and support closure; the full XYZ theorem may be assumed.

**Prerequisites:** linear extensions; XYZ theorem; finite-poset counting

**Examiner follow-up:** Why is this order different from ordinary coordinatewise order on the original labels?

<details>
<summary>Solution route / investigation plan</summary>

1. Assume, for example, x_1≥y_1. The proposed meet coordinates are min(x_i,y_i+x_1−y_1), lying between 1 and m because one candidate is x_i. The proposed join coordinates are max(x_i−x_1+y_1,y_i), also within the box.

2. In the transformed coordinates (−x_1,x_2−x_1,…,x_n−x_1), the order is coordinatewise and the formulas are the coordinatewise extrema. If x_i≤x_j and y_i≤y_j, taking either corresponding min or max preserves that inequality. These checks justify the lattice lemma used in the full XYZ proof.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-xyz--shepp-lattice-sublemma)

---

## 8. A comparison orientation matters

**Examiner challenge · counterexample · 60 minutes suggested**

ID: core-xyz--mixed-comparisons-negative

In a uniform extension of a four-element antichain {a,b,c,d}, compare A={a<b} and B={c<a}. Compute their covariance and explain why XYZ does not assert a positive sign for this pair. Then reverse the whole poset to state the common-successor analogue of XYZ.

**Required output:** An exact negative example and a correctly oriented dual theorem.

**Prerequisites:** linear extensions; XYZ theorem; finite-poset counting

**Examiner follow-up:** Can comparisons on disjoint pairs be assigned a universal covariance sign in arbitrary posets?

<details>
<summary>Solution route / investigation plan</summary>

1. The irrelevant element d does not change the relative order distribution of a,b,c. Each event has probability 1/2, but their intersection requires c<a<b, one of six relative orders. The covariance is 1/6−1/4=−1/12.

2. XYZ compares two events with a shared element on the same side of both comparisons. Reversing every extension is a bijection to extensions of the dual poset, giving positive association for {b<a} and {c<a} as well.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-xyz--mixed-comparisons-negative)

---

## 9. Extend XYZ to many comparisons sharing one element

**Research seminar · research-extension · 85 minutes suggested**

ID: core-xyz--many-arm-xyz-extension

Assume the XYZ proof's finite distributive lattice of order-preserving grid maps, with its FKG measure, is available. Prove P(a precedes every b∈B)≥∏_{b∈B}P(a<b) for any finite B disjoint from a. Identify why pairwise XYZ inequalities alone would not justify this conclusion.

**Required output:** A rigorous many-arm extension with the lattice lemma explicitly assumed and an antichain check.

**Prerequisites:** linear extensions; XYZ theorem; finite-poset counting

**Examiner follow-up:** Derive the same inequality with blocks of comparisons sharing a and explain the closure of the event class.

<details>
<summary>Solution route / investigation plan</summary>

1. On the transformed grid lattice, every indicator {x_a≤x_b} is increasing. Products of these indicators remain increasing, so iterated FKG gives the many-event product lower bound before taking the no-ties limit.

2. The finite-grid tie estimate transfers the inequality to uniform extensions. On an n-element antichain with B containing every other element, the joint probability is 1/n, whereas the product is 2^{−(n−1)}. Pairwise association by itself need not imply arbitrary many-event bounds; the stronger lattice representation supplies that step.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-xyz--many-arm-xyz-extension)

---

## 10. Uniform extensions versus uniform choices of minima

**Research seminar · research-extension · 100 minutes suggested**

ID: core-xyz--exact-extension-sampling-audit

Build an exact dynamic program over ideals that counts extensions and samples them uniformly. Use it to audit the rule 'choose a currently minimal element uniformly'. Supply a three-element counterexample to that rule and a reproducible comparison of XYZ probabilities under both distributions on a specified six-element poset.

**Required output:** A counting recurrence, exact biased-sampling witness and a documented six-element audit.

**Prerequisites:** linear extensions; XYZ theorem; finite-poset counting

**Examiner follow-up:** Can an observed XYZ violation under a biased sampler disprove the theorem for uniform extensions?

<details>
<summary>Solution route / investigation plan</summary>

1. Let F(I) count completions after ideal I. Then F(I)=Σ_{v minimal outside I}F(I∪{v}), with F(P)=1. A correct sampler chooses v with probability F(I∪{v})/F(I), using integer counts.

2. For a<b with c isolated, uniform-minimum sampling gives probability 1/2 to cab and 1/4 each to abc and acb, whereas the uniform extension law gives 1/3 each. The audit must verify that exact sample probabilities equal 1/e(P); empirical agreement alone is insufficient.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-xyz--exact-extension-sampling-audit)

---

## 11. Insert one isolated element and express correlations by ranks

**Doctoral proof · proof · 45 minutes suggested**

ID: core-xyz--isolated-element-rank-reduction

Let Q be an (n−1)-element poset containing distinct b,c, and add an isolated a. Prove that a uniform extension is obtained by choosing a uniform extension of Q and an independent uniform insertion slot. Express P(a<b), P(a<c) and their intersection through the ranks R_b,R_c in Q, and translate XYZ into a rank-moment inequality.

**Required output:** A bijection, three rank formulas and the resulting moment comparison.

**Prerequisites:** linear extensions; XYZ theorem; finite-poset counting

**Examiner follow-up:** Check the formulas when Q is a chain and when Q is an antichain.

<details>
<summary>Solution route / investigation plan</summary>

1. Every extension of Q has exactly n insertions of a, so the pair 'extension, slot' is uniform. Given ranks R_b,R_c, the number of insertion slots before b is R_b, and before both is min(R_b,R_c).

2. Therefore the marginals are E R_b/n and E R_c/n, while the joint probability is E min(R_b,R_c)/n. Assuming XYZ yields n E min(R_b,R_c)≥E R_b E R_c. This is a derived rank inequality, not independence of the two ranks.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-xyz--isolated-element-rank-reduction)

---

## 12. A correct uniform stationary law without a mixing claim

**Examiner challenge · synthesis · 60 minutes suggested**

ID: core-xyz--adjacent-swap-stationarity

On linear extensions of a finite poset, consider the lazy chain that with probability 1/2 stays put and otherwise selects a uniform adjacent position and swaps its elements only if they are incomparable. Prove uniform stationarity and irreducibility. Explain why these properties alone give no quantitative sampling-time guarantee.

**Required output:** A detailed-balance proof, a connectivity argument and a precise limit on the conclusion.

**Prerequisites:** linear extensions; XYZ theorem; finite-poset counting

**Examiner follow-up:** How would biased choices among available minima differ from this reversible construction?

<details>
<summary>Solution route / investigation plan</summary>

1. Every allowed adjacent swap has the same transition probability in both directions, so the uniform distribution satisfies detailed balance. The added holding probability ensures aperiodicity.

2. To connect any extension to a target extension, move the target's first element leftward. Every element it crosses must be incomparable with it, since a forced predecessor would also precede it in the target. Fix that first element and repeat on the remaining poset. This proves connectivity but does not bound mixing time.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §6.4](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-xyz--adjacent-swap-stationarity)
