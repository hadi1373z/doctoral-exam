# The adaptive Liar Game: a weight bound is not a strategy

§15.2 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-liar)

## 1. The adaptive Liar Game: a weight bound is not a strategy

**Doctoral proof · proof · 45 minutes suggested**

ID: core-liar--source-proof

Derive the ChipLiar recurrence for a chosen partition and prove the adversary’s weight argument. Deduce n∑j≤k C(q,j)>2^q as an impossibility bound. Explain why its converse is not an automatic adaptive search strategy.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** The ChipLiar weight ∑xᵢB(q,i), with B(q,i)=2^−q∑j≤i C(q,j), gives a sufficient winning condition for the adversary when it exceeds one.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. Pascal’s identity gives B(q,i)=[B(q−1,i)+B(q−1,i−1)]/2. Summing chip contributions yields the average-of-successor-weights identity.

2. The adversary selects a branch with weight at least the current value. At q=0 each surviving chip has weight one, so weight>1 means at least two candidates remain.

3. For n candidates each with budget k, the initial weight is n2^−q∑j≤k C(q,j). A small total weight does not ensure an available question balances both successor states.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-liar--source-proof)

---

## 2. Why is a code-distance argument alone incomplete for adaptive questions?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-liar--oral-check-1

Why is a code-distance argument alone incomplete for adaptive questions?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The ChipLiar weight ∑xᵢB(q,i), with B(q,i)=2^−q∑j≤i C(q,j), gives a sufficient winning condition for the adversary when it exceeds one.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Future questions depend on earlier reported answers; a fixed answer vector per item no longer captures the entire decision tree.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-liar--oral-check-1)

---

## 3. What is the subtle integer obstruction?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-liar--oral-check-2

What is the subtle integer obstruction?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** The ChipLiar weight ∑xᵢB(q,i), with B(q,i)=2^−q∑j≤i C(q,j), gives a sufficient winning condition for the adversary when it exceeds one.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Chip weights are discrete. A mathematically desired half split might not correspond to any permitted partition of the actual chips.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-liar--oral-check-2)

---

## 4. An explicit state below the sphere bound that still loses

**Doctoral proof · proof · 40 minutes suggested**

ID: core-liar--five-items-five-questions

In the adaptive Liar Game with five items, five yes/no questions and at most one lie, show that the initial normalized sphere weight is 30/32<1 but every first question allows Carole a successor state of weight greater than one. Examine all split sizes using complement symmetry.

**Required output:** A complete first-move enumeration and an explicit losing-state certificate.

**Prerequisites:** adaptive Liar Game; chip states; binomial weights; finite minimax

**Examiner follow-up:** Which additional spare capacity would be needed to balance both first successors below one?

<details>
<summary>Solution route / investigation plan</summary>

1. A first question containing s items produces successor lie-budget counts (5−s,s) or (s,5−s), ordered as zero-budget then one-budget. With four questions left, their unnormalized weights are 25−4s and 5+4s, divided by 16.

2. By complement symmetry take s≤2. Then the larger successor weight is (25−4s)/16≥17/16>1. The existing weight defense now wins for Carole. This is a concrete integrality obstruction, not a failure of the necessary sphere calculation.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-liar--five-items-five-questions)

---

## 5. Write an exact finite-state solver

**Doctoral proof · construction · 45 minutes suggested**

ID: core-liar--exact-chip-state-recursion

For a state x=(x_0,…,x_k) with q questions left, derive an exact recursive winning criterion for Paul by considering integers 0≤a_i≤x_i in a question. Give the two successor vectors and the terminal condition. Specify memoization and complement symmetry sufficient to compute all states with total at most eight and k≤2.

**Required output:** A full recurrence, terminal cases and a reproducible state-enumeration design.

**Prerequisites:** adaptive Liar Game; chip states; binomial weights; finite minimax

**Examiner follow-up:** How should the solver output a human-checkable adversary certificate for a losing state?

<details>
<summary>Solution route / investigation plan</summary>

1. Set x_{k+1}=a_{k+1}=0. One branch has y_i=a_i+(x_{i+1}−a_{i+1}); the other has z_i=(x_i−a_i)+a_{i+1}. Paul wins iff some a makes both successors winning with q−1 questions.

2. At q=0 the state wins iff Σ_i x_i≤1. Memoize by the count tuple and q; exchanging a with x−a swaps branches, so only one representative is needed. The recursion is exact because item labels within a common remaining-budget class are strategically interchangeable.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-liar--exact-chip-state-recursion)

---

## 6. A perfect sphere-bound example from a parity-check code

**Examiner challenge · construction · 50 minutes suggested**

ID: core-liar--perfect-one-lie-nonadaptive-code

Let q=2^r−1 and let H be the r×q binary matrix containing every nonzero column of F_2^r exactly once. Use ker H as fixed answer strings to identify 2^{q−r} items despite one arbitrary lie. Prove unique syndrome decoding and equality in the sphere count.

**Required output:** A parity-check proof, a decoder and the exact sphere equality.

**Prerequisites:** adaptive Liar Game; chip states; binomial weights; finite minimax

**Examiner follow-up:** Why does this special equality construction not prove the converse of the sphere bound for arbitrary q?

<details>
<summary>Solution route / investigation plan</summary>

1. No nonzero codeword has weight one or two, since no column is zero and no two columns coincide. A one-bit error has syndrome equal to its unique column, so the error position is recoverable; syndrome zero means no error.

2. The r rows have full rank because the standard basis columns occur. Thus the code has 2^{q−r} words, and each radius-one ball has q+1=2^r strings. Their disjoint balls exhaust all 2^q possible response strings, meeting the count exactly for this special nonadaptive construction.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-liar--perfect-one-lie-nonadaptive-code)

---

## 7. Question-size constraints change even the no-lie capacity

**Examiner challenge · proof · 55 minutes suggested**

ID: core-liar--bounded-size-truthful-questions

With no lies, allow q adaptive membership questions but require every queried subset of the original candidate set to have at most s elements, where s≥1. Let N_s(q) be the maximum identifiable number. Prove N_s(0)=1 and N_s(q)=N_s(q−1)+min(s,N_s(q−1)), and solve its exponential-then-linear behavior.

**Required output:** A capacity recurrence, an inductive construction and an explicit closed form.

**Prerequisites:** adaptive Liar Game; chip states; binomial weights; finite minimax

**Examiner follow-up:** State the closed form using h=⌈log_2 s⌉ and check the special case s=1.

<details>
<summary>Solution route / investigation plan</summary>

1. At the root, the Yes branch contains at most s candidates and both branches must contain at most N_s(q−1) identifiable candidates. Their sum is at most the displayed recurrence.

2. Conversely split candidates into a Yes group of size min(s,N_s(q−1)) and a No group of size N_s(q−1), then use optimal subtrees; questions can be restricted to the current branch without increasing their size. Capacity doubles until it first reaches or exceeds s, then grows by s per extra question.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-liar--bounded-size-truthful-questions)

---

## 8. Allow a final list of L candidates

**Examiner challenge · synthesis · 60 minutes suggested**

ID: core-liar--list-identification-weight

Modify the adaptive Liar Game so Paul succeeds when at most L candidates survive, with L≥1. Prove that normalized chip weight greater than L lets Carole win. Deduce a necessary sphere bound for n initially equal-budget items and discuss the equality case without asserting a converse.

**Required output:** A list-version adversary proof and its necessary counting inequality.

**Prerequisites:** adaptive Liar Game; chip states; binomial weights; finite minimax

**Examiner follow-up:** How does a fixed nonadaptive answer code express the condition that every received string lies in at most L error balls?

<details>
<summary>Solution route / investigation plan</summary>

1. The same average-of-successor-weights identity lets Carole retain a weight above L at every step. With zero questions remaining the weight is exactly the number of surviving chips, so at least L+1 survive.

2. For n items and k lies, the necessary condition is nΣ_{j≤k}C(q,j)≤L2^q. The proof changes the terminal threshold but not the integer feasibility of root partitions; equality or slack below the threshold still requires an actual questioning strategy.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-liar--list-identification-weight)

---

## 9. Generalize the adversary weight to an alphabet of answers

**Research seminar · research-extension · 85 minutes suggested**

ID: core-liar--qary-lie-weight

Suppose every question partitions candidates into ℓ≥2 answer classes and at most k answers may be changed to any of the other ℓ−1 symbols. Derive the normalized weight B_ℓ(q,k)=ℓ^−qΣ_{j≤k}C(q,j)(ℓ−1)^j, prove its average-successor identity, and obtain the adaptive impossibility bound.

**Required output:** A multi-answer weight proof with its exact recurrence and necessary bound.

**Prerequisites:** adaptive Liar Game; chip states; binomial weights; finite minimax

**Examiner follow-up:** Write the recurrence when remaining lie budgets differ across candidates.

<details>
<summary>Solution route / investigation plan</summary>

1. If Carole picks a uniformly random reported symbol, a given candidate receives a lie with conditional probability (ℓ−1)/ℓ at every round, even when future questions adapt. Its survival probability is exactly the displayed binomial-tail expression.

2. Averaging over the ℓ successors preserves total weight. Thus weight greater than one yields a deterministic weight-maximizing adversary and the necessary condition nΣ_{j≤k}C(q,j)(ℓ−1)^j≤ℓ^q. This extends the obstruction; it does not construct balancing questions below it.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-liar--qary-lie-weight)

---

## 10. Measure the gap between counting and exact play

**Research seminar · research-extension · 100 minutes suggested**

ID: core-liar--minimax-vs-weight-audit

Use the exact chip-state recursion to enumerate k=1 states of at most eight chips and q≤7. Compare minimax winning status with normalized weight≤1. Report the smallest losing states passing the weight test, with a complete first-move certificate and a fixed state-ordering convention for 'smallest'.

**Required output:** A reproducible exact experiment, a certificate format and a table of counterexamples.

**Prerequisites:** adaptive Liar Game; chip states; binomial weights; finite minimax

**Examiner follow-up:** Which symmetry reductions remain valid for heterogeneous remaining lie budgets?

<details>
<summary>Solution route / investigation plan</summary>

1. Enumerate integer split counts, memoize successors and use terminal sum≤1. Baseline checks are the zero-lie capacity 2^q, the perfect-code instances when available, and the explicit five-item, five-question obstruction.

2. A losing-state certificate lists, for each split up to complement symmetry, a losing successor; recursively store a directed acyclic proof graph. Failure criteria are a violated baseline, disagreement with the recurrence or a certificate with an unverified branch. Finite data should not be promoted to a universal sufficient weight criterion.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-liar--minimax-vs-weight-audit)

---

## 11. A chip has a binomial movement law even in an adaptive game

**Doctoral proof · proof · 45 minutes suggested**

ID: core-liar--single-chip-law-under-adaptivity

Fix any adaptive Paul strategy and let Carole answer each question with a fresh fair bit. For one specified chip, prove its movement indicators are independent fair bits up to q rounds, despite the adaptively chosen partitions. Explain why movements of different chips need not be independent, and give identical and complementary examples.

**Required output:** A conditional-law proof and two explicit cross-chip dependence constructions.

**Prerequisites:** adaptive Liar Game; chip states; binomial weights; finite minimax

**Examiner follow-up:** How does the one-chip argument change for uniform answers from an ℓ-symbol alphabet?

<details>
<summary>Solution route / investigation plan</summary>

1. Condition on the entire history before a round. Whether the chip is selected is already fixed, and one of the two fresh answers moves it; its conditional movement probability is exactly one half. Iterating these conditional probabilities gives the product law for that chip's movement sequence.

2. Two chips always placed on the same side have identical movement indicators; two always placed on opposite sides have complementary indicators. Linearity of expectation over survival indicators remains valid, but a binomial law for the total number of survivors generally does not follow.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-liar--single-chip-law-under-adaptivity)

---

## 12. Add marked erasures to fixed-answer identification

**Examiner challenge · synthesis · 60 minutes suggested**

ID: core-liar--errors-and-erasures-code

For a nonadaptive binary answer code, allow up to k≥0 adversarial bit flips and 0≤s≤q marked erasures. Prove that minimum distance at least 2k+s+1 guarantees unique identification. Derive the necessary sphere bound MΣ_{j≤k}C(q−s,j)≤2^{q−s} for any fixed erased coordinate set, and explain the roles of t<d puncturing.

**Required output:** A distance proof and a properly normalized erasure sphere bound.

**Prerequisites:** adaptive Liar Game; chip states; binomial weights; finite minimax

**Examiner follow-up:** State the exact converse when fewer than s disagreements are available to erase.

<details>
<summary>Solution route / investigation plan</summary>

1. If two codewords both fit a received word after s erased coordinates and k errors each, they differ in at most 2k+s coordinates, contradicting the distance bound. Conversely a distance at most 2k+s allows erasing up to s disagreements and splitting the remaining disagreements between two error patterns.

2. Fix an erased coordinate set. Any successful code has distinct punctured words and disjoint radius-k balls in the remaining q−s coordinates. Counting these balls gives the necessary inequality. This concerns fixed answer strings; adaptive question trees require their own state analysis.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.2](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-liar--errors-and-erasures-code)
