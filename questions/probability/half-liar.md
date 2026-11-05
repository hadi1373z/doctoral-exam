# Half-Liar Game: one-sided lies and the k=1 proof

§15.6 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-half-liar)

## 1. Half-Liar Game: one-sided lies and the k=1 proof

**Doctoral proof · proof · 45 minutes suggested**

ID: core-half-liar--source-proof

Derive the k=1 response-set counting bound and explain why the answer-string geometry is asymmetric. Outline the two-stage lower-bound strategy and state clearly which general-k proof is not supplied by the assigned text.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** When a truthful Yes cannot be changed but a truthful No may be reported as Yes, the assigned result is Aₖ(q)∼2^(q+k)/C(q,k) for fixed k; the book works out k=1.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. If only No→Yes lies are legal, a truthful response string with z No positions has z+1 possible outcomes when at most one lie is used.

2. Different hidden items must have disjoint possible response sets in a winning decision tree. Adaptive paths must be handled as tree paths, not silently replaced by a fixed code.

3. The lower bound first obtains approximately balanced answers and then finishes through the chip-game strategy. State the fixed-k asymptotic, but do not label the k=1 argument a complete proof for arbitrary k.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-half-liar--source-proof)

---

## 2. Would ordinary Hamming balls give the exact bound?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-half-liar--oral-check-1

Would ordinary Hamming balls give the exact bound?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** When a truthful Yes cannot be changed but a truthful No may be reported as Yes, the assigned result is Aₖ(q)∼2^(q+k)/C(q,k) for fixed k; the book works out k=1.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. One-sided errors produce asymmetric response sets whose sizes depend on the truthful string.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-half-liar--oral-check-1)

---

## 3. May a truthful Yes be reported No in this model?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-half-liar--oral-check-2

May a truthful Yes be reported No in this model?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** When a truthful Yes cannot be changed but a truthful No may be reported as Yes, the assigned result is Aₖ(q)∼2^(q+k)/C(q,k) for fixed k; the book works out k=1.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. That would be a different game.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-half-liar--oral-check-2)

---

## 4. The exact intersection criterion for one-sided error balls

**Doctoral proof · proof · 40 minutes suggested**

ID: core-half-liar--directed-ball-intersections

For a fixed binary answer string x, let D_k(x)={z:z≥x coordinatewise, |z|−|x|≤k}. Prove D_k(x) and D_k(y) intersect exactly when both |supp(x)\supp(y)|≤k and |supp(y)\supp(x)|≤k. Give a two-bit example distinguishable with one one-sided lie but not one arbitrary lie.

**Required output:** A necessary-and-sufficient intersection proof and an explicit coding separation.

**Prerequisites:** one-sided lies; adaptive answer trees; directed neighborhoods; fixed-k asymptotics

**Examiner follow-up:** On a constant-weight layer, simplify the criterion to a Johnson-distance condition.

<details>
<summary>Solution route / investigation plan</summary>

1. Any common received string must contain supp(x)∪supp(y). Thus it needs at least |supp(y)\supp(x)| additions from x and the reverse number from y. These necessary conditions are sufficient by taking their union as the received support.

2. For x=00,y=11,k=1, the directed balls are {00,01,10} and {11}, disjoint. Their ordinary Hamming distance is only two, so radius-one undirected balls overlap. This criterion is for nonadaptive fixed answer strings.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-half-liar--directed-ball-intersections)

---

## 5. Counting one-sided errors on a fixed weight layer

**Doctoral proof · synthesis · 45 minutes suggested**

ID: core-half-liar--constant-weight-directed-codes

Let every nonadaptive truthful answer string have weight w and allow at most k No→Yes changes, with 0≤k≤q−w. Prove that disjoint error sets require M C(q−w,k)≤C(q,w+k). Explain why this counts only the outer layer and is a necessary bound rather than a construction.

**Required output:** A finite layer-count bound and an explicit comparison of its asymptotic strength.

**Prerequisites:** one-sided lies; adaptive answer trees; directed neighborhoods; fixed-k asymptotics

**Examiner follow-up:** Compare this bound for w≈q/2,k=1 with the adaptive order 2^{q+1}/q.

<details>
<summary>Solution route / investigation plan</summary>

1. Each weight-w codeword has exactly C(q−w,k) received strings in the weight-(w+k) layer obtained by adding k ones. Unique decoding requires these top-layer shadows to be disjoint across codewords.

2. There are C(q,w+k) strings in that layer, proving the count. Lower layers must also be disjoint, but this argument alone does not coordinate them or produce a family attaining the top-layer bound.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-half-liar--constant-weight-directed-codes)

---

## 6. Count adaptive response strings by their first deviation

**Examiner challenge · proof · 50 minutes suggested**

ID: core-half-liar--adaptive-one-lie-count

Fix a deterministic adaptive question tree and one hidden item. Let its completely truthful path contain z No answers. Prove that with at most one No→Yes lie there are exactly z+1 possible reported answer strings, even though the questions after a lie may differ from those on the truthful path.

**Required output:** A bijection between possible first-lie positions and corrupted response strings.

**Prerequisites:** one-sided lies; adaptive answer trees; directed neighborhoods; fixed-k asymptotics

**Examiner follow-up:** Construct a two-question adaptive example where using the truthful path's No count fails for k=2.

<details>
<summary>Solution route / investigation plan</summary>

1. There is one completely truthful response string. If a lie is used, the path agrees with the truthful path until its first deviation, which must occur at one of the z truthful No positions.

2. After that deviation the remaining answers are forced truthful along the new branch because no lie budget remains. Different first-deviation positions give distinct strings. This argument explains why the k=1 count survives adaptivity without replacing the entire tree by fixed codewords.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-half-liar--adaptive-one-lie-count)

---

## 7. Improve the explicit error term in the k=1 upper bound

**Examiner challenge · proof · 55 minutes suggested**

ID: core-half-liar--sharpen-one-lie-upper-error

Assume the standard k=1 counting inequality n≤2^q exp(−u²/(2q))+2^{q+1}/(q−u), for 0<u<q. Choose u=√(6q ln q) for sufficiently large q and derive A_1(q)≤(2^{q+1}/q)[1+O(√(ln q/q))]. Track both terms instead of only asserting an asymptotic equivalent.

**Required output:** An explicit parameter choice and a controlled relative-error calculation.

**Prerequisites:** one-sided lies; adaptive answer trees; directed neighborhoods; fixed-k asymptotics

**Examiner follow-up:** How would a different constant in u affect the balance of the exponentially small and denominator terms?

<details>
<summary>Solution route / investigation plan</summary>

1. The first term becomes 2^q q^−3, which is smaller than 2^{q+1}/q by a relative factor 1/(2q²). The second term equals (2^{q+1}/q)/(1−u/q).

2. Since u/q=√(6ln q/q)→0, expand or bound 1/(1−x)≤1+2x for x≤1/2. This yields the displayed quantitative upper error. The premise is an established k=1 counting bound, not a uniform-in-k estimate.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-half-liar--sharpen-one-lie-upper-error)

---

## 8. An exact recursion respecting the direction of lies

**Examiner challenge · construction · 60 minutes suggested**

ID: core-half-liar--one-sided-chip-recursion

Let x_0 candidates have no lie remaining and x_1 have one No→Yes lie remaining. A membership question includes a_0 and a_1 of those candidates. Derive both observed-answer successor states and an exact minimax recursion. Explain why a No answer eliminates every candidate inside the question.

**Required output:** A directional chip-state recurrence and its terminal condition.

**Prerequisites:** one-sided lies; adaptive answer trees; directed neighborhoods; fixed-k asymptotics

**Examiner follow-up:** Extend the successor formulas to k remaining-budget classes.

<details>
<summary>Solution route / investigation plan</summary>

1. For an observed No, truthful Yes cannot be changed, so only outside candidates survive: (x_0−a_0,x_1−a_1). For an observed Yes, inside candidates retain their budgets, while outside one-budget candidates consume their lie: (a_0+x_1−a_1,a_1).

2. Paul wins with q questions iff some allowed integer pair (a_0,a_1) has both successor states winning with q−1 questions. At q=0 the total candidate count must be at most one. Unlike the ordinary liar game, complementing a question does not simply swap these two successors without also reversing lie direction.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-half-liar--one-sided-chip-recursion)

---

## 9. Expose the first point where a fixed-string argument fails

**Research seminar · research-extension · 85 minutes suggested**

ID: core-half-liar--adaptive-two-lie-geometry

Construct a depth-two adaptive question tree and one hidden item whose truthful answers are No,Yes, but whose possible reports with at most two No→Yes lies number three rather than Σ_{j≤2}C(1,j)=2. Enumerate the paths and formulate a correct state-based counting method for general k.

**Required output:** A fully enumerated adaptive counterexample and a corrected general-k dynamic-programming formulation.

**Prerequisites:** one-sided lies; adaptive answer trees; directed neighborhoods; fixed-k asymptotics

**Examiner follow-up:** Why does the z+1 argument remain exact for one lie despite this counterexample?

<details>
<summary>Solution route / investigation plan</summary>

1. Ask a first question excluding the item. After a reported No, ask a question containing it; after a reported Yes, ask a question excluding it. The truthful path is NY.

2. The possible reported strings are NY with no lie, YN with one lie, and YY with two lies. The second lie opportunity exists only after the first lie changes the branch. For general k count reachable tree states with a remaining budget and actual item membership, rather than directed Hamming balls around one fixed truthful string.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-half-liar--adaptive-two-lie-geometry)

---

## 10. Compare exact adaptive and nonadaptive half-liar capacities

**Research seminar · research-extension · 100 minutes suggested**

ID: core-half-liar--adaptive-vs-fixed-code-audit

For q≤5 and one one-sided lie, design exact computations of adaptive capacity using the chip recursion and nonadaptive capacity using disjoint directed balls. Specify baseline cases, a maximum-independent-set formulation, and a checkable certificate for any claimed gap between capacities.

**Required output:** A reproducible finite comparison with both construction and upper-bound certificates.

**Prerequisites:** one-sided lies; adaptive answer trees; directed neighborhoods; fixed-k asymptotics

**Examiner follow-up:** Which symmetry of the full cube preserves one-sided directed balls, and which familiar bit-complement symmetry does not?

<details>
<summary>Solution route / investigation plan</summary>

1. Make a graph on all 2^q truthful strings, joining pairs whose directed radius-one balls intersect. A maximum independent set gives a nonadaptive code, with incompatibility decided by the two directed support differences.

2. Compute adaptive states by memoized minimax over (x_0,x_1,q). A nonadaptive lower certificate is a listed code; an adaptive lower certificate is a question tree. Upper certificates require a proved search exhaustion or branch-and-bound proof. Compare finite values with, but do not infer them from, the fixed-k asymptotic formula.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-half-liar--adaptive-vs-fixed-code-audit)

---

## 11. A simple explicit code for any fixed lie budget

**Doctoral proof · construction · 45 minutes suggested**

ID: core-half-liar--one-sided-repetition-baseline

For m independent binary identification bits, repeat each truthful membership answer k+1 times and allow at most k total No→Yes lies. Give a decoder identifying 2^m items in q=m(k+1) questions. Explain why the same block decoder can fail for two-direction lies.

**Required output:** An explicit question set, decoder and finite guarantee.

**Prerequisites:** one-sided lies; adaptive answer trees; directed neighborhoods; fixed-k asymptotics

**Examiner follow-up:** What minimum block length is required by this decoder when the total lie budget is k?

<details>
<summary>Solution route / investigation plan</summary>

1. A truthful Yes block is all ones, since Yes cannot be changed. A truthful No block contains at least one zero because converting all k+1 positions would exceed the entire lie budget. Decode a block as Yes exactly when all its reports are Yes.

2. Thus all m original bits are recovered and the rate is 1/(k+1). This is a constructive baseline, much less efficient than the fixed-k asymptotic capacity but valid at every blocklength of this form. An arbitrary Yes→No flip would corrupt the all-ones test.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-half-liar--one-sided-repetition-baseline)

---

## 12. Reversing the permitted lie direction preserves capacity

**Examiner challenge · proof · 60 minutes suggested**

ID: core-half-liar--reverse-direction-isomorphism

Prove that a game permitting only No→Yes lies has the same adaptive capacity as a game permitting only Yes→No lies, by transforming queries and answers. Show with q=2,k=1 that either one-sided game can distinguish two items while the ordinary two-direction liar game cannot.

**Required output:** A direction-reversal bijection and exact two-question examples.

**Prerequisites:** one-sided lies; adaptive answer trees; directed neighborhoods; fixed-k asymptotics

**Examiner follow-up:** Give the explicit two-step adaptive impossibility argument rather than relying only on a fixed-code distance claim.

<details>
<summary>Solution route / investigation plan</summary>

1. Complement every queried subset and invert every reported bit. A truthful membership bit and a permitted upward corruption then become a truthful complement bit and a permitted downward corruption, preserving the number of lies and the question-tree structure.

2. For two items ask the same separating question twice; in the upward model only 00 can change and never to 11 with one lie, so the two items remain distinguishable. In the ordinary game a nonseparating first question gives no advantage. A separating answer leaves one candidate with one lie remaining and one with none, a one-question state of weight 3/2>1, which Carole wins.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.6](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-half-liar--reverse-direction-isomorphism)
