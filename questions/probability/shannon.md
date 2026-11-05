# Shannon coding: random errors versus worst-case errors

§15.1 · Alon–Spencer · The Probabilistic Method, fourth edition

12 questions: 4 doctoral proofs, 4 examiner challenges, 2 research investigations, and 2 short oral checks.

[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/core-shannon)

## 1. Shannon coding: random errors versus worst-case errors

**Doctoral proof · proof · 45 minutes suggested**

ID: core-shannon--source-proof

Prove a random-coding achievability bound at rate R<1−H₂(p). Separate the typical-error event from confusion with another codeword. Contrast this with the minimum-distance requirement for correcting every pattern of t adversarial errors.

**Required output:** A complete blackboard argument with definitions, every central implication, and explicit bounds or resource accounting.

**Prerequisites:** For a binary symmetric channel with crossover p<1/2, rates approaching 1−H₂(p) from below are achievable with vanishing decoding error; the section also treats linear codes.

**Examiner follow-up:** Which implication would fail first if the main hypothesis were removed? Give an explicit obstruction.

<details>
<summary>Solution route / investigation plan</summary>

1. For any small δ>0, channel noise has at most (p+δ)n flips with high probability. The associated Hamming ball has at most 2^(nH₂(p+δ)) strings up to subexponential factors.

2. For a random codebook of 2^(nR) words, a competing word lands in a decoding ball with probability bounded by its volume/2^n. Union-bound over competitors and choose R+H₂(p+δ)<1.

3. Random-noise achievability allows a small decoding-error probability. Correcting every t-bit corruption requires minimum distance at least 2t+1 and is a stronger, different requirement.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shannon--source-proof)

---

## 2. Why does the entropy approximation require p≤1/2?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-shannon--oral-check-1

Why does the entropy approximation require p≤1/2?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** For a binary symmetric channel with crossover p<1/2, rates approaching 1−H₂(p) from below are achievable with vanishing decoding error; the section also treats linear codes.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. Binary Hamming-ball volume grows at exponent H₂(p) only in the lower-half regime; beyond half the ball includes most of the cube.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shannon--oral-check-1)

---

## 3. What additional issue does the linear-code theorem address?

**Short oral check · oral-defense · 8 minutes suggested**

ID: core-shannon--oral-check-2

What additional issue does the linear-code theorem address?

**Required output:** A concise but justified oral defense. This is a short prerequisite check, not a research problem.

**Prerequisites:** For a binary symmetric channel with crossover p<1/2, rates approaching 1−H₂(p) from below are achievable with vanishing decoding error; the section also treats linear codes.

**Examiner follow-up:** Justify the decisive claim with a calculation, construction or counterexample rather than its name.

<details>
<summary>Solution route / investigation plan</summary>

1. The code must be a subspace; random generator/parity-check arguments replace independent arbitrary codeword sampling.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shannon--oral-check-2)

---

## 4. Prove the BSC rate converse with an error indicator

**Doctoral proof · proof · 40 minutes suggested**

ID: core-shannon--entropy-converse-bsc

A uniform message M from a codebook of size 2^{nR} is sent through BSC(p), and a decoder has average error P_e. Prove nR≤n[1−H_2(p)]+1+P_e nR. Derive the asymptotic converse for P_e→0, proving the needed conditional-entropy estimate rather than invoking capacity as a black box.

**Required output:** A self-contained information-theoretic converse and the limiting quantifiers.

**Prerequisites:** binary entropy; random coding; channel noise; linear codes

**Examiner follow-up:** How does the estimate improve if, on error, only |C|−1 alternatives are possible?

<details>
<summary>Solution route / investigation plan</summary>

1. With output Y, H(Y)≤n and H(Y|M)=nH_2(p), so I(M;Y)≤n[1−H_2(p)]. Let E indicate decoding error; conditioning on E gives H(M|Y)≤H(E)+P_e log_2|C|≤1+P_e nR.

2. Use H(M)=I(M;Y)+H(M|Y). If P_e→0 and rates remain finite, the inequality forces limsup R≤1−H_2(p). This complements random-coding achievability and specifies the average-message error convention.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shannon--entropy-converse-bsc)

---

## 5. Achievability from a random parity-check matrix

**Doctoral proof · construction · 45 minutes suggested**

ID: core-shannon--random-parity-check-code

Choose an m×n binary matrix H with independent fair entries and use code ker H. For BSC(p), decode by selecting a noise vector of weight at most t with the observed syndrome, rejecting ambiguities. Prove an ensemble error bound P(weight noise>t)+Vol(n,t)2^−m and a rate lower bound 1−m/n.

**Required output:** A linear-code construction, a syndrome-collision bound and a complete rate calculation.

**Prerequisites:** binary entropy; random coding; channel noise; linear codes

**Examiner follow-up:** Why does a rank-deficient matrix not invalidate either the collision probability or the rate lower bound?

<details>
<summary>Solution route / investigation plan</summary>

1. For any distinct noise vectors z,z', their difference is nonzero, and a random row has dot product zero with it with probability 1/2. Thus P_H(Hz=Hz')=2^−m. Union-bound over competing low-weight noise vectors for each actual typical z.

2. The kernel dimension is n−rank H≥n−m even if H is rank deficient. Choose t=(p+δ)n and m/n>H_2(p+δ). The averaged noise-decoding error tends to zero, so some matrix works; linear translation symmetry makes this decoder's error the same for every transmitted codeword.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shannon--random-parity-check-code)

---

## 6. Turn average-message reliability into maximum-message reliability

**Examiner challenge · proof · 50 minutes suggested**

ID: core-shannon--expurgate-average-error

Suppose a length-n code has M messages and average decoding error at most ε_n. Show there is a subcode of at least M/2 messages with maximum error at most 2ε_n. Define the subcode decoder carefully and calculate the rate loss. Explain why this does not convert random-noise reliability into worst-case error correction.

**Required output:** A decoder construction and a rate/error tradeoff valid for every n.

**Prerequisites:** binary entropy; random coding; channel noise; linear codes

**Examiner follow-up:** How does retaining a 1−θ fraction trade rate loss against the maximum-error multiplier?

<details>
<summary>Solution route / investigation plan</summary>

1. At least half the messages have individual error at most 2ε_n by Markov's inequality. Retain those messages. Use the old decoder when it outputs a retained message, and otherwise output any fixed retained message or declare failure.

2. For a retained transmitted message, every formerly correct output remains correct; reassigning discarded outputs cannot increase error. The subcode rate decreases by at most 1/n. The bound still averages over channel noise for each message and imposes no minimum-distance guarantee.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shannon--expurgate-average-error)

---

## 7. A finite numerical random-coding guarantee

**Examiner challenge · synthesis · 55 minutes suggested**

ID: core-shannon--finite-blocklength-union-bound

For BSC(p) with 0<p<1/2 and rate R<1−H_2(p), derive the bound 2e^{−2δ²n}+2^{−n[1−R−H_2(p+δ)]} for an appropriate typical-ball decoder, with 0<δ<1/2−p. For p=0.1,R=0.4 choose δ explicitly and give an n sufficient for error at most 10^−3.

**Required output:** A finite error bound, a computed entropy gap and a reproducible blocklength calculation.

**Prerequisites:** binary entropy; random coding; channel noise; linear codes

**Examiner follow-up:** How would you optimize δ numerically, and which term dominates for the displayed conservative choice?

<details>
<summary>Solution route / investigation plan</summary>

1. Hoeffding bounds atypical noise weight by at most 2e^{−2δ²n}; a one-sided version can improve the factor. The Hamming-ball inequality Vol(n,(p+δ)n)≤2^{nH_2(p+δ)} controls confusion with other random codewords.

2. Choose, for example, δ=0.02 and evaluate g=1−0.4−H_2(0.12)>0. It is sufficient to take n at least max{ln(4000)/(2δ²),log_2(2000)/g}, with integer radius rounding absorbed by choosing t=⌊(p+δ)n⌋ and keeping the entropy upper bound.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shannon--finite-blocklength-union-bound)

---

## 8. Repeat the argument for an erasure channel

**Examiner challenge · construction · 60 minutes suggested**

ID: core-shannon--binary-erasure-variant

Each transmitted bit is independently erased with probability e∈(0,1), and the receiver knows the erased positions. Use a random k×n generator matrix to show reliable transmission at every rate k/n<1−e. Bound the probability that the unerased columns fail to determine the message without assuming full matrix rank.

**Required output:** A complete random-linear-code proof with separate noise and rank-failure events.

**Prerequisites:** binary entropy; random coding; channel noise; linear codes

**Examiner follow-up:** Why is the entropy penalty H_2(p) for bit flips replaced here by the erasure fraction e?

<details>
<summary>Solution route / investigation plan</summary>

1. Condition on m unerased coordinates. For any fixed nonzero message difference, its image in those m random columns is all zero with probability 2^−m. A union bound over fewer than 2^k differences bounds rank failure by 2^{k−m}.

2. With high probability m≥(1−e−δ)n. If k≤(1−e−2δ)n, the conditional failure probability is at most 2^{−δn}; add the binomial atypical-erasure probability. This argument itself also ensures injective encoding for a good matrix, because a message difference invisible everywhere is invisible on every unerased set.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shannon--binary-erasure-variant)

---

## 9. Investigate a decoder with the wrong noise radius

**Research seminar · research-extension · 85 minutes suggested**

ID: core-shannon--mismatched-radius-investigation

For BSC(p), consider random codebooks and a decoder accepting a unique codeword within radius qn, with fixed q∈(0,1/2). Derive a rigorous guarantee when q>p and R<1−H_2(q). Show why q<p makes the transmitted word absent from the candidate list with probability tending to one. Propose a small exact experiment with a stated baseline and failure criterion.

**Required output:** A two-regime theorem and a reproducible finite-channel audit plan.

**Prerequisites:** binary entropy; random coding; channel noise; linear codes

**Examiner follow-up:** What changes at q=p, where the typical-noise event no longer has probability tending to one?

<details>
<summary>Solution route / investigation plan</summary>

1. For q>p, use the same typical-noise plus confusion decomposition, now with q controlling both the noise tail and ball volume. A positive exponent requires the stated rate inequality; failure of this sufficient inequality is not itself a theorem that every such decoder fails.

2. For q<p, the law of large numbers makes P(weight noise≤qn) tend to zero, so the prescribed candidate-list decoder cannot output the transmitted word except on that rare event. For n≤16 enumerate all noise vectors with exact BSC weights and compare observed errors to the proven bound for seeded random codebooks.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shannon--mismatched-radius-investigation)

---

## 10. A covering version of the random-code calculation

**Research seminar · research-extension · 100 minutes suggested**

ID: core-shannon--random-covering-duality

For D∈(0,1/2), choose M uniform independent centers in {0,1}^n. Prove that the expected fraction of strings farther than Dn from every center is at most exp(−M Vol(n,⌊Dn⌋)/2^n). Using a standard Stirling estimate as an explicit input, show rates above 1−H_2(D) permit vanishing uncovered fraction. Compare the quantifiers with channel coding.

**Required output:** A random covering theorem, its entropy threshold and an all-strings extension.

**Prerequisites:** binary entropy; random coding; channel noise; linear codes

**Examiner follow-up:** What extra logarithmic factor in M would ensure every source string is covered by a union bound?

<details>
<summary>Solution route / investigation plan</summary>

1. For each fixed source string, a uniform center covers it with probability V/2^n. Independence of centers makes its uncovered probability (1−V/2^n)^M≤e^{−MV/2^n}; average over all source strings.

2. Stirling gives V≥2^{nH_2(D)−O(log n)}. With M=2^{nR} and R>1−H_2(D), the expected uncovered fraction tends to zero, hence some center set works. This is an average source-covering guarantee; it neither requires disjoint balls nor corrects adversarial channel errors.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shannon--random-covering-duality)

---

## 11. Two concrete code transformations have different guarantees

**Doctoral proof · proof · 45 minutes suggested**

ID: core-shannon--puncturing-and-shortening

Let C⊆{0,1}^n have size M and minimum distance d. Delete t fixed coordinates to puncture the code, assuming t<d; prove size is preserved and distance is at least d−t. Separately, fix a common value on t coordinates and shorten: prove a subcode of size at least M/2^t and distance at least d remains after deletion.

**Required output:** Both transformation proofs and their separate length, size and distance formulas.

**Prerequisites:** binary entropy; random coding; channel noise; linear codes

**Examiner follow-up:** Why do these minimum-distance facts alone not determine BSC decoding error at a given rate?

<details>
<summary>Solution route / investigation plan</summary>

1. If two codewords become identical after puncturing, they differed in at most t<d positions, impossible. Each pair loses at most t differing coordinates, proving the distance lower bound.

2. For shortening, partition by the 2^t possible patterns and keep a largest fiber. All retained words agree on the deleted coordinates, so deleting them loses no pairwise distance. Track the new length n−t and the distinct cardinality losses before forming rate bounds.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shannon--puncturing-and-shortening)

---

## 12. The fair input maximizes one-use BSC information

**Examiner challenge · proof · 60 minutes suggested**

ID: core-shannon--biased-input-information

Let X∼Bernoulli(q), N∼Bernoulli(p) independently and Y=X⊕N, with p∈(0,1/2). Compute I(X;Y), prove its maximum over q is 1−H_2(p), and identify the maximizing q. Explain how this calculation differs from constructing a long reliable code.

**Required output:** The exact information function, its optimizer and endpoint checks.

**Prerequisites:** binary entropy; random coding; channel noise; linear codes

**Examiner follow-up:** What happens to uniqueness at p=1/2 and to the information when p=0?

<details>
<summary>Solution route / investigation plan</summary>

1. The output-one probability is p+(1−2p)q. Therefore H(Y)=H_2(p+(1−2p)q), while H(Y|X)=H_2(p), giving the exact mutual-information expression.

2. Binary entropy is uniquely maximized at one half, and p+(1−2p)q=1/2 exactly when q=1/2. This proves the single-use optimizer; a coding theorem still requires a block construction, a decoder and a vanishing-error argument.

</details>

[Alon–Spencer · The Probabilistic Method, fourth edition · §15.1](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953)

[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/core-shannon--biased-input-information)
