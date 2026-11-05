# Supplementary open-problem agendas

Status references checked 5 November 2026. These agendas are separate from the 600 course questions. A proof of the unrestricted question is not expected; each agenda specifies a bounded seminar task.

## 1. P versus NP: distinguish a barrier from a proof

**Open problem · open · 120 minutes suggested**

ID: core-hardness--open-p-vs-np

Open question: does P equal NP? For a bounded seminar task, compare exact SAT, gap approximation and verification. Prove the conditional consequence of a polynomial-time SAT algorithm using NP-completeness. Then identify why a reduction or an integrality-gap example alone cannot establish P≠NP.

**Required output:** A two-page assumptions-and-implications map. Mark the unresolved question separately from every proved implication.

**Prerequisites:** Polynomial-time many-one reductions; Cook–Levin theorem; YES/NO gap quantifiers

**Examiner follow-up:** Which step of your argument would still be valid if P=NP? Separate the conditional implication from the conjecture.

<details>
<summary>Orientation; not a general solution</summary>

1. The unrestricted P versus NP problem remains unsolved in the cited Clay Mathematics Institute entry. No solution is expected here.

2. The bounded task uses Cook–Levin and transitivity: a polynomial SAT algorithm gives a polynomial algorithm for every language in NP. A reduction transfers a known difficulty claim; an integrality gap obstructs a particular relaxation. Neither alone rules out every polynomial algorithm.

</details>

[Clay Mathematics Institute · P vs NP · listed Unsolved](https://www.claymath.org/millennium/p-vs-np/)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-hardness--open-p-vs-np)

---

## 2. P versus BPP: local derandomization versus universal simulation

**Open problem · open · 120 minutes suggested**

ID: core-sat-random--open-p-vs-bpp

Open question: does BPP=P? As a bounded research exercise, prove that an efficiently computable generator with O(log m) seed length fooling every relevant polynomial-size circuit on m random bits, padded so m is at least the input length, to error below 1/6 derandomizes a bounded-error decision procedure. Contrast this with conditional expectation for one MAX-SAT objective.

**Required output:** A complete conditional simulation proof, a bit/time budget, and a comparison table identifying what the MAX-SAT derandomization actually establishes.

**Prerequisites:** BPP two-sided error; Circuit representation of a fixed-input algorithm; Conditional expectation

**Examiner follow-up:** If the seed length is Θ(log² m), what deterministic running time follows, and which part of the polynomial-time conclusion is lost?

<details>
<summary>Orientation; not a general solution</summary>

1. Enumerate every seed and take the majority of the algorithm’s outputs. The generator changes acceptance by less than 1/6, preserving separation around 1/2. Count seeds, generator time and simulation time.

2. This is conditional on the stated generator, not an unconditional proof of BPP=P. Removing randomness from one explicitly computable objective does not supply a generator for every efficient computation. The cited 2026 lecture treats this hardness-versus-randomness question.

</details>

[Cornell CS 6810 · March 17, 2026 · hardness versus randomness](https://www.cs.cornell.edu/courses/cs6810/2026sp/lec15.pdf)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-sat-random--open-p-vs-bpp)
