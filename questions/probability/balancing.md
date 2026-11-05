# Balancing vectors: randomized play against an adaptive adversary

§§15.4–15.5 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-balancing)

## 1. Balancing vectors: randomized play against an adaptive adversary

**Doctoral proof · proof · 45 minutes suggested**

ID: core-balancing--source-proof

Prove the O(√(n ln n)) upper bound against an adaptive Pusher. Explain the quantifier step from a random strategy with positive success probability against every fixed opponent strategy to a deterministic winning strategy. State what extra work yields the matching lower bound.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** In the n-round n-dimensional sign-vector game, the assigned bounds give value Θ(√(n ln n)); the online/nonadaptive discussion concerns irrevocable coloring choices.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. Even if Pusher adapts to the past, multiplying its current ±1 coordinate by a fresh fair Chooser sign gives a fresh fair conditional increment. Each coordinate has the n-step symmetric-walk law.

2. Pr(maxj |Sj|>α)≤nPr(|Sn|>α). A threshold with the right-hand side below one gives positive success probability against every fixed Pusher strategy.

3. Determinacy rules out a winning Pusher strategy, so Chooser has a winning strategy. The Ω bound uses a carefully balanced potential; it does not follow by reversing the union bound.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§15.4–15.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-balancing--source-proof)

---

## 2. Does nonadaptive here mean a fixed list of yes/no identification queries?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-balancing--oral-check-1

Does nonadaptive here mean a fixed list of yes/no identification queries?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** In the n-round n-dimensional sign-vector game, the assigned bounds give value Θ(√(n ln n)); the online/nonadaptive discussion concerns irrevocable coloring choices.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. In §15.5 it is the online irrevocable discrepancy model: columns arrive and a sign must be chosen immediately.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§15.4–15.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-balancing--oral-check-1)

---

## 3. Can one replace Θ(√(n ln n)) by the offline O(√n) discrepancy theorem?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-balancing--oral-check-2

Can one replace Θ(√(n ln n)) by the offline O(√n) discrepancy theorem?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** In the n-round n-dimensional sign-vector game, the assigned bounds give value Θ(√(n ln n)); the online/nonadaptive discussion concerns irrevocable coloring choices.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. No. The information pattern and irrevocability constraints differ.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§15.4–15.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-balancing--oral-check-2)

---

## 4. Construct a deterministic chooser directly

**Doctoral proof · construction · 40 minutes suggested**

ID: core-balancing--deterministic-cosh-potential

In T rounds in dimension d, Pusher gives v_t∈{−1,1}^d before Chooser selects ε_t. Use Φ_t=Σ_j cosh(λS_{t,j}) to construct a deterministic chooser with ||S_T||_∞≤√(2T ln(2d)). Prove the potential update against an adaptive Pusher.

**Required output:** An explicit online sign rule and its optimized discrepancy guarantee.

**Prerequisites:** online vector balancing; adaptive strategies; exponential potentials; finite games

**Examiner follow-up:** How does the same potential handle entries in [−1,1]?

<details>
<summary>Solution route / investigation plan</summary>

1. For a fixed current vector, the average potential of the two sign choices is cosh(λ)Φ_{t−1}, because each coordinate increment has magnitude one. Choose the sign with no larger than this average.

2. Then Φ_T≤d(coshλ)^T≤d e^{Tλ²/2}. Since cosh(λs)≥e^{λ|s|}/2, the norm is at most ln(2d)/λ+Tλ/2. Optimize λ=√(2ln(2d)/T). The rule is deterministic and uses only the current state and offered vector.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§15.4–15.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-balancing--deterministic-cosh-potential)

---

## 5. A geometric greedy rule gives a different bound

**Doctoral proof · proof · 45 minutes suggested**

ID: core-balancing--euclidean-greedy-comparison

Let Pusher offer arbitrary vectors v_t∈R^d with ||v_t||_2≤L_t. Choose ε_t to make ⟨S_{t−1},ε_tv_t⟩≤0. Prove ||S_T||_2²≤Σ_tL_t² and compare the induced infinity bound with exponential-potential balancing for sign vectors.

**Required output:** A deterministic geometric proof and a parameter-based comparison.

**Prerequisites:** online vector balancing; adaptive strategies; exponential potentials; finite games

**Examiner follow-up:** Can the chooser use this argument in an arbitrary norm without an inner product?

<details>
<summary>Solution route / investigation plan</summary>

1. Expand ||S_{t−1}+ε_tv_t||_2². The cross term is nonpositive by the choice of sign, so the squared norm increases by at most ||v_t||². Sum this inequality over all rounds.

2. For sign vectors L_t²=d, the guarantee is √(Td), whereas a coordinate exponential potential gives √(2Tln(2d)). The Euclidean rule remains useful for small vector norms or when Euclidean rather than coordinate error is the objective.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§15.4–15.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-balancing--euclidean-greedy-comparison)

---

## 6. Control every prefix without a union bound over times

**Examiner challenge · proof · 50 minutes suggested**

ID: core-balancing--anytime-coordinate-control

Suppose fresh fair Chooser signs multiply adaptive predictable vectors with |v_{t,j}|≤a_t, where Σ_t a_t²≤V deterministically. Prove P(max_{t≤T,j≤d}|S_{t,j}|≥u)≤2d exp(−u²/(2V)) using the maximal martingale inequality. Contrast it with a union over all dT coordinate-time pairs.

**Required output:** An anytime tail with a specified information order and an explicit threshold.

**Prerequisites:** online vector balancing; adaptive strategies; exponential potentials; finite games

**Examiner follow-up:** How does the result change if Pusher sees ε_t before offering v_t?

<details>
<summary>Solution route / investigation plan</summary>

1. For each coordinate, S_{t,j} is a martingale with conditional sign-MGF at most exp(λ²a_t²/2). Apply the maximal exponential-supermartingale argument separately to its positive and negative excursions.

2. Union-bound only over coordinates and signs, giving 2d rather than 2dT. Setting u=√(2Vln(2d/η)) controls every prefix with failure at most η. Predictability of v_t is essential: it must be selected before the current fresh sign is seen.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§15.4–15.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-balancing--anytime-coordinate-control)

---

## 7. A nonadaptive construction saturating the linear scale

**Examiner challenge · construction · 55 minutes suggested**

ID: core-balancing--all-sign-patterns-lower-bound

Take d=2^T coordinates indexed by σ∈{−1,1}^T. At round t let the offered vector have coordinate v_{t,σ}=σ_t. Prove that every Chooser sign sequence produces final infinity norm T. Compare this with the logarithmic-dimension upper bound and state what the example does not prove for d=T.

**Required output:** An explicit matrix construction and a careful parameter comparison.

**Prerequisites:** online vector balancing; adaptive strategies; exponential potentials; finite games

**Examiner follow-up:** How many coordinates suffice if only a specified subset of sign sequences needs to be defeated?

<details>
<summary>Solution route / investigation plan</summary>

1. For a realized Chooser sequence ε, use the coordinate indexed by σ=ε. Its final sum is Σ_t ε_tσ_t=T, while no coordinate can have absolute sum larger than T.

2. The offered vectors were fixed before play, so this lower bound needs no adaptivity. Since ln d=Tln2, the generic √(Tln d) scale is already order T here. The construction does not establish the √(Tln T) lower bound in the d=T regime.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§15.4–15.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-balancing--all-sign-patterns-lower-bound)

---

## 8. A fixed bias creates linear drift

**Examiner challenge · counterexample · 60 minutes suggested**

ID: core-balancing--biased-random-chooser-drift

Let Chooser independently choose ε_t=1 with probability q≠1/2, and let Pusher always offer the scalar vector one. Show that |S_T| has linear order T with high probability. Give an explicit deviation inequality and explain why a fair-sign martingale proof cannot be reused.

**Required output:** A quantitative drift counterexample and the failed martingale hypothesis.

**Prerequisites:** online vector balancing; adaptive strategies; exponential potentials; finite games

**Examiner follow-up:** What if the bias q_t tends to one half but Σ_t(2q_t−1) remains large?

<details>
<summary>Solution route / investigation plan</summary>

1. E S_T=(2q−1)T. Hoeffding for the sum of signs gives P(|S_T−(2q−1)T|≥u)≤2exp(−u²/(2T)). This is concentration around the nonzero drift, obtained from independent increments with range length two.

2. Take u=|2q−1|T/2 to obtain |S_T|≥|2q−1|T/2 except with probability at most 2exp(−(2q−1)²T/8). The increments have nonzero conditional mean, so centering or a different choosing strategy is necessary.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§15.4–15.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-balancing--biased-random-chooser-drift)

---

## 9. Round predictable fractional choices online

**Research seminar · research-extension · 85 minutes suggested**

ID: core-balancing--online-fractional-rounding

At each round an adaptive adversary offers x_t∈[0,1] and v_t∈[−1,1]^d before a bit B_t is chosen. For E_T=Σ_t(B_t−x_t)v_t, prove a randomized infinity bound √((T/2)ln(2d/η)) with failure η. Then construct a deterministic sign-choice potential achieving the corresponding positive-success threshold.

**Required output:** A predictable-rounding theorem and an explicit deterministic potential rule.

**Prerequisites:** online vector balancing; adaptive strategies; exponential potentials; finite games

**Examiner follow-up:** Why does independent rounding with probability one half fail to preserve the same error center for arbitrary x_t?

<details>
<summary>Solution route / investigation plan</summary>

1. Choose B_t conditionally Bernoulli(x_t). Each coordinate increment has mean zero and range length at most one, so its conditional MGF is at most e^{λ²/8}. Summing and union-bounding gives 2d e^{−2u²/T}.

2. Use a sum of positive and negative exponentials of coordinate errors. The x_t-weighted average of its two child potentials grows by at most e^{λ²/8}, so choose a child no larger than that average. Optimizing yields a deterministic final bound √((T/2)ln(2d)), valid against adaptive offered pairs.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§15.4–15.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-balancing--online-fractional-rounding)

---

## 10. Compute exact small vector-game values

**Research seminar · research-extension · 100 minutes suggested**

ID: core-balancing--small-game-minimax-audit

For sign-vector games with d≤4 and T≤6, design an exact minimax solver and compare optimal Chooser play with the cosh-potential rule. State the recurrence, symmetry reductions and a reproducible tie-breaking convention. Require an explicit adversarial sequence whenever the greedy rule is suboptimal.

**Required output:** A minimax specification, baseline results and certified greedy counterexamples if any.

**Prerequisites:** online vector balancing; adaptive strategies; exponential potentials; finite games

**Examiner follow-up:** How does the state space change for vectors with entries in {−1,0,1}?

<details>
<summary>Solution route / investigation plan</summary>

1. With t rounds left and sum s, the value satisfies V_t(s)=max_{v∈{−1,1}^d}min_{ε∈{−1,1}}V_{t−1}(s+εv), with V_0(s)=||s||_∞. Memoize integer states.

2. Coordinate permutations and sign flips preserve the game, while v and −v give the same two choices. Verify d=1 and the all-sign-pattern lower bound as baselines. A greedy-versus-optimal gap must be witnessed by a complete branch strategy or checked recurrence values, not only a simulated random opponent.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§15.4–15.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-balancing--small-game-minimax-audit)

---

## 11. A square sign matrix forces square-root discrepancy

**Doctoral proof · construction · 45 minutes suggested**

ID: core-balancing--hadamard-offline-lower-bound

For T=d=2^r construct the Sylvester sign matrix H recursively and prove H^TH=T I. Show that every sign vector ε has ||Hε||_∞≥√T. Explain why this is an offline lower bound and why it is weaker than the assigned online game's matching logarithmic lower bound.

**Required output:** A recursive matrix construction and a norm-based universal sign lower bound.

**Prerequisites:** online vector balancing; adaptive strategies; exponential potentials; finite games

**Examiner follow-up:** What property of an adaptive lower-bound strategy must go beyond this orthogonality argument?

<details>
<summary>Solution route / investigation plan</summary>

1. Start with H_1=(1) and form H_{2m}=[[H_m,H_m],[H_m,−H_m]]. Block multiplication proves orthogonal columns by induction.

2. For every ε∈{−1,1}^T, ||Hε||_2²=ε^T(TI)ε=T². With T coordinates, the maximum absolute coordinate is at least √T. Presenting H's columns in any order gives the same obstruction even to a chooser who sees the full matrix.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§15.4–15.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-balancing--hadamard-offline-lower-bound)

---

## 12. Solve the sign-vector game in dimensions one and two

**Examiner challenge · proof · 60 minutes suggested**

ID: core-balancing--exact-two-dimensional-game

For T-round games with vectors in {−1,1}^d, determine the exact value for d=1 and d=2. Prove that in dimension two the value is one for odd T and two for positive even T, with value zero at T=0. Supply both chooser invariants and a final-round adversary argument.

**Required output:** Exact values, deterministic invariants and matching adversary lower bounds.

**Prerequisites:** online vector balancing; adaptive strategies; exponential potentials; finite games

**Examiner follow-up:** Why does this exact small-dimensional behavior differ greatly from a random-sign walk bound?

<details>
<summary>Solution route / investigation plan</summary>

1. In one dimension, choose signs to keep the running sum zero at even times and of magnitude one at odd times. In dimension two use U=(S_1+S_2)/2 and V=(S_1−S_2)/2: each offered direction changes exactly one of U,V by ±1, so keep each at zero or magnitude one.

2. At odd times exactly one of U,V is odd, giving infinity norm one; at even times the bound is two. For the even-time lower bound, immediately before the last move both original coordinates are odd. If their magnitudes are both one, Pusher offers the other diagonal direction so neither sign reaches zero; if a magnitude is larger, any final move leaves a magnitude at least two.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §§15.4–15.5](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-balancing--exact-two-dimensional-game)
