# Tenure Game: the exact dyadic threshold

§15.3 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-tenure)

## 1. Tenure Game: the exact dyadic threshold

**Doctoral proof · proof · 30 minutes suggested**

ID: core-tenure--source-proof

Prove both directions of the threshold and the dyadic splitting lemma. Explain the induction that glues two equal-level chips into one higher chip, including the equality case W=1.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** For chips at positive levels i, total dyadic weight W=∑xᵢ2^−i has an exact threshold: W<1 lets Carole win; W≥1 lets Paul force a chip to level zero.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. Promotion from i to i−1 doubles the promoted chip’s weight; deletion removes the other side, so Wy+Wn=2W. Carole can maintain W<1, which excludes a level-zero chip.

2. If W≥1, there are two chips at some level unless the total is below one. Glue two level-i chips into one level-(i−1) chip and induct to obtain a split with both parts of weight at least 1/2.

3. Paul chooses that split, so either successor has weight at least one. The game ends in finitely many promotions, and it cannot end with no chips.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tenure--source-proof)

---

## 2. How does this differ from the Liar Game?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-tenure--oral-check-1

How does this differ from the Liar Game?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** For chips at positive levels i, total dyadic weight W=∑xᵢ2^−i has an exact threshold: W<1 lets Carole win; W≥1 lets Paul force a chip to level zero.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Here nonpromoted chips are deleted; the exact dyadic splitting lemma supplies a converse that the Liar Game weight bound lacks.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tenure--oral-check-1)

---

## 3. Can Paul lose when W=1 by choosing the wrong partition?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-tenure--oral-check-2

Can Paul lose when W=1 by choosing the wrong partition?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** For chips at positive levels i, total dyadic weight W=∑xᵢ2^−i has an exact threshold: W<1 lets Carole win; W≥1 lets Paul force a chip to level zero.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Yes. The theorem guarantees a strategy, not that every partition is safe.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tenure--oral-check-2)

---

## 4. Build the dyadic split by carrying bundles

**Doctoral proof · construction · 40 minutes suggested**

ID: core-tenure--constructive-half-weight-subset

Given finitely many chips at positive integer levels with total weight W=Σ_i x_i2^−i≥1, construct an original-chip subset of weight exactly 1/2. Give a binary-carry algorithm that records bundles and use the subset to specify a safe first Tenure move.

**Required output:** An implementable split algorithm and a proof that it yields a legal safe move.

**Prerequisites:** Tenure Game; dyadic weights; finite game strategies; binary trees

**Examiner follow-up:** Can the subset be found greedily from largest to smallest weights without explicitly storing the carry tree?

<details>
<summary>Solution route / investigation plan</summary>

1. Repeatedly merge two level-i bundles into one bundle of weight 2^{−(i−1)}, retaining the list of original chips in each bundle. If no level-one bundle could be formed, at most one bundle at every positive level would remain, with total weight strictly below one.

2. A level-one bundle supplies weight exactly 1/2; its complement has weight at least 1/2. Promoting either chosen part doubles its weight, so both successors have weight at least one. Bundles are only a bookkeeping device; the actual move splits original chips, not artificial merged pieces.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tenure--constructive-half-weight-subset)

---

## 5. Only chips that can arrive by the deadline count

**Doctoral proof · proof · 45 minutes suggested**

ID: core-tenure--fixed-horizon-threshold

Suppose the Tenure Game must be won within h moves. Show that its exact winning criterion is Σ_{1≤i≤h}x_i2^−i≥1, regardless of chips at deeper levels. Prove both directions and treat h=0 and an initially tenured chip separately.

**Required output:** A deadline-sensitive threshold theorem and boundary cases.

**Prerequisites:** Tenure Game; dyadic weights; finite game strategies; binary trees

**Examiner follow-up:** Can deeper chips ever force a useful split unavailable to the shallower subsystem?

<details>
<summary>Solution route / investigation plan</summary>

1. Chips initially deeper than h cannot reach level zero by the deadline. The smaller-successor weight defense applied only to levels at most h keeps their weight below one if the truncated initial weight is below one.

2. If the truncated weight is at least one, ignore deeper chips and use the ordinary dyadic winning strategy on levels at most h. Every surviving useful chip moves up at each round, so the strategy ends within h moves. An initial level-zero chip is an immediate win; otherwise h=0 cannot suffice.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tenure--fixed-horizon-threshold)

---

## 6. Promotions by a fixed number of levels

**Examiner challenge · synthesis · 50 minutes suggested**

ID: core-tenure--multi-step-promotion

Modify the binary Tenure Game so every retained chip moves from level i to max(0,i−d), with fixed integer d≥1, while the other side is deleted. Prove the exact threshold Σ_i x_i2^{−⌈i/d⌉}≥1. Translate an optimal strategy from the ordinary game.

**Required output:** An effective-level reduction and a concrete example with d=2.

**Prerequisites:** Tenure Game; dyadic weights; finite game strategies; binary trees

**Examiner follow-up:** What if d depends on the round in a known schedule?

<details>
<summary>Solution route / investigation plan</summary>

1. Assign effective level j=⌈i/d⌉. A promotion lowers j by exactly one until the chip reaches zero, because ⌈(i−d)/d⌉=⌈i/d⌉−1 for i>d.

2. The modified game is therefore identical, at the effective-level level, to the ordinary binary Tenure Game. Aggregate counts with equal effective level and apply the dyadic threshold and splitting construction. The original level i itself is not the correct exponent when d>1.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tenure--multi-step-promotion)

---

## 7. An ℓ-way Tenure Game and an ℓ-adic split

**Examiner challenge · proof · 55 minutes suggested**

ID: core-tenure--multiway-tenure

Let Paul partition chips into ℓ≥2 groups, after which Carole retains one group, promotes it by one level and deletes all others. Prove the exact criterion Σ_i x_iℓ^−i≥1. Establish the ℓ-adic partition lemma needed for the winning direction, rather than using only an averaging argument.

**Required output:** A full threshold proof including a constructive ℓ-adic lemma.

**Prerequisites:** Tenure Game; dyadic weights; finite game strategies; binary trees

**Examiner follow-up:** How do you recover a partition of the original chips from merged bundles?

<details>
<summary>Solution route / investigation plan</summary>

1. The average of the ℓ successor weights is the current weight, so below one Carole can preserve a weight below one. For the converse, merge ℓ same-level chips into one bundle at the next level.

2. If fewer than ℓ bundles remain at every positive level, their total weight is less than Σ_{i≥1}(ℓ−1)ℓ^−i=1. Thus weight at least one supplies enough level-one bundles to extract ℓ disjoint parts of weight 1/ℓ; assign leftover chips arbitrarily. Every successor has weight at least one.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tenure--multiway-tenure)

---

## 8. A weight-one state need not split without dyadic structure

**Examiner challenge · counterexample · 60 minutes suggested**

ID: core-tenure--nondyadic-weight-failure

Consider a variant with indivisible chips of arbitrary positive weights: retain one of two parts, double its chip weights and delete the other part; reaching individual weight at least one wins. Show that three chips of weight 1/3 have total one but lose against a minimizing Carole. Identify the failed subset-sum step.

**Required output:** A complete losing strategy and a pinpointed failure of the dyadic argument.

**Prerequisites:** Tenure Game; dyadic weights; finite game strategies; binary trees

**Examiner follow-up:** Does total weight strictly above one repair the statement for arbitrary indivisible weights?

<details>
<summary>Solution route / investigation plan</summary>

1. Every partition splits the three chips as 0 versus 3 or 1 versus 2. Carole chooses the smaller-weight side. In the nontrivial split only one chip survives, with new weight 2/3; in the trivial split no chip survives.

2. From total weight below one, choosing the smaller successor preserves total weight below one and prevents an individual chip of weight one. The missing property is a subset of total weight exactly 1/2, which dyadic chips guarantee and these thirds do not.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tenure--nondyadic-weight-failure)

---

## 9. The dyadic weight is an exact random-answer success probability

**Research seminar · research-extension · 85 minutes suggested**

ID: core-tenure--kraft-randomized-success

Let Carole independently choose either retained side with probability 1/2 each round. Prove that Paul's maximum probability of eventually obtaining tenure is min(1,W), where W=Σ_i x_i2^−i. For W≤1 construct a prefix-free binary tree whose leaves have the given chip depths, proving the required coding lemma by dyadic interval packing.

**Required output:** A sharp probabilistic theorem, an elementary coding construction and the matching upper bound.

**Prerequisites:** Tenure Game; dyadic weights; finite game strategies; binary trees

**Examiner follow-up:** Why is an arbitrary collection of binary strings of the right lengths insufficient without prefix-freeness?

<details>
<summary>Solution route / investigation plan</summary>

1. Each chip at level i survives its first i choices with probability 2^−i under any Paul strategy, so the probability of any success is at most W. For W≤1, pack disjoint dyadic intervals of lengths 2^−i in [0,1); their binary addresses form a prefix-free collection.

2. At each node assign chips to its two descendant subtrees. A fair answer path reaches each chip leaf with exactly its dyadic probability, and the leaf events are disjoint, giving success probability W. If W≥1, the deterministic threshold strategy succeeds for every answer path and hence with probability one.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tenure--kraft-randomized-success)

---

## 10. Expected duration at exact weight one

**Research seminar · research-extension · 100 minutes suggested**

ID: core-tenure--critical-weight-duration

Assume W=1 and fair independent Carole choices. Prove that any strategy which wins on every branch has expected stopping time Σ_i i x_i2^−i, and construct one using a prefix tree. Work out the state x_1=1,x_2=1,x_3=2. Justify extending play after a first win when computing individual chip probabilities.

**Required output:** A duration identity, a legal strategy tree and a worked heterogeneous example.

**Prerequisites:** Tenure Game; dyadic weights; finite game strategies; binary trees

**Examiner follow-up:** Which step breaks when W>1 and success events may overlap?

<details>
<summary>Solution route / investigation plan</summary>

1. In a full fictitious continuation, each chip's eventual tenure indicator has expectation 2^−i, so the expected number tenured is one. A surely winning strategy has at least one tenured chip on every answer path; consequently there is exactly one almost surely, ruling out overlapping success events.

2. The unique successful chip's tenure time is its starting level i, and its success probability is 2^−i. Therefore E T=Σ_i i x_i2^−i. The example has value 1/2+1/2+3/4=7/4, attained by leaf words 0,10,110,111. The continuation is only analytical and does not delay the actual stopping time.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tenure--critical-weight-duration)

---

## 11. A sharp robustness threshold before play

**Doctoral proof · proof · 45 minutes suggested**

ID: core-tenure--robustness-to-chip-deletion

Before the ordinary Tenure Game begins, Carole may delete up to r chips, where r is a fixed nonnegative integer. Determine a necessary and sufficient winning condition for Paul in terms of W and the r largest individual dyadic weights. Specialize to n chips all at level k.

**Required output:** A sharp criterion and its homogeneous specialization.

**Prerequisites:** Tenure Game; dyadic weights; finite game strategies; binary trees

**Examiner follow-up:** How would a level-dependent deletion cost turn the preliminary adversary step into a knapsack problem?

<details>
<summary>Solution route / investigation plan</summary>

1. After the deletion phase the ordinary threshold applies. Carole minimizes remaining total weight by deleting the r heaviest chips, or all chips if fewer than r are present.

2. Paul can win against every allowed deletion exactly when W minus the sum of those largest weights is at least one. For one level k this becomes n−r≥2^k, with the convention that a negative remaining count means no chips. This is a worst-case robustness statement, not an average deletion estimate.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tenure--robustness-to-chip-deletion)

---

## 12. Restricting legal splits destroys the threshold converse

**Examiner challenge · counterexample · 60 minutes suggested**

ID: core-tenure--whole-level-query-restriction

Modify the game so Paul must select all or none of the chips at each occupied level. Show that for n≥2 chips all at one positive level, Carole can win immediately even when their total dyadic weight is arbitrarily large. Explain why the usual carry lemma does not produce a legal move in this variant.

**Required output:** A legal-move counterexample and a precise statement of the lost splitting freedom.

**Prerequisites:** Tenure Game; dyadic weights; finite game strategies; binary trees

**Examiner follow-up:** What minimal relaxation of the move restriction makes the homogeneous level-k threshold attainable again?

<details>
<summary>Solution route / investigation plan</summary>

1. With only one occupied level, every legal selected set is either the entire chip set or empty. Carole retains the empty side and deletes all chips, so Paul loses in one move.

2. By choosing n as large as desired the initial total n2^−k can exceed one by any factor. The ordinary theorem requires the ability to separate individual equal-level chips; carrying bundles proves existence of an arbitrary chip subset, not a union of whole levels.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.3](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-tenure--whole-level-query-restriction)
