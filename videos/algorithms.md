# Algorithm video companions

[Browse the video guide](https://hadi1373z.github.io/doctoral-exam/#algorithm-videos)

57 method recommendations, 39 distinct recordings: 24 focused matches and 33 supporting lectures. Sources and scope were checked 16 November 2026 using official catalogues, instructor descriptions and available notes/transcripts. A focused match does not promise every implementation detail; the cards state their limits. Providers control playback.

## Exact Pareto-frontier dynamic programming

0–1 Knapsack · Focused on this method

[CS264 Lecture 14: Smoothed Pareto Curves](https://www.youtube.com/watch?v=KoegpdEw29E) — Tim Roughgarden, Stanford University.

The opening knapsack section develops the Pareto-frontier algorithm by merging the previous frontier with its shifted copy. The later smoothed-analysis material is additional background.

**Selection:** The official paired notes explicitly describe the same merge-and-prune construction; this is a closer match than a generic capacity-indexed knapsack DP lecture.

[Official source](https://theory.stanford.edu/~tim/f14/f14.html) · [Lecture material](https://theory.stanford.edu/~tim/f14/l/l14.pdf) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/knapsack)

## Profit scaling and profit-indexed dynamic programming

0–1 Knapsack · Focused on this method

[Advanced Algorithms (COMPSCI 224), Lecture 12](https://www.youtube.com/watch?v=2Gl-yNso0_0) — Jelani Nelson, Harvard University.

The knapsack portion derives profit scaling, the profit-indexed dynamic program, its approximation loss, and polynomial dependence on inverse accuracy. Other portions of the lecture cover counting and SDP.

**Selection:** The official university recording has matching written derivation and analysis. Compared with a general DP tutorial, it directly addresses the FPTAS proof.

[Official source](https://people.seas.harvard.edu/~cs224/fall14/lec.html) · [Lecture material](https://people.seas.harvard.edu/~cs224/fall14/lec/lec12.pdf) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/knapsack)

## Enumerate all long-job assignments, then list-schedule

Identical-machine makespan scheduling · Focused on this method

[Lecture 19: PTAS for Minimizing Makespan for Scheduling Jobs on Constant Number of Machines](https://www.youtube.com/watch?v=Dpu7OQohMuU) — Palash Dey, IIT Kharagpur / NPTEL.

Dedicated lecture on the fixed-number-of-machines PTAS. Keep the fixed-m assumption visible when comparing its enumeration cost with the variable-m scheme.

**Selection:** The official lecture distinguishes the fixed-m case explicitly; the adjacent lectures separately address arbitrary numbers of identical machines.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/makespan)

## Large-job configurations and size rounding

Identical-machine makespan scheduling · Focused on this method

[Lecture 20: PTAS for Minimizing Makespan for Scheduling Jobs on Parallel Identical Machines](https://www.youtube.com/watch?v=fXtty_E7TG8) — Palash Dey, IIT Kharagpur / NPTEL.

Dedicated identical-machine PTAS lecture, followed by Lecture 21 on the official course page. Use both parts when studying the complete construction and analysis.

**Read alongside:** The complete treatment is split across Lectures 20 and 21; this selected video is the first part.

**Selection:** This is a focused textbook-based treatment of the same scheme, rather than a different scheduling objective or an unrelated-machine LP approximation.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/makespan)

## Rounded-type feasibility dynamic programming

Identical-machine makespan scheduling · Supporting lecture

[Lecture 21: PTAS for Minimizing Makespan for Scheduling Jobs on Parallel Identical Machines, continued](https://www.youtube.com/watch?v=q2IZQi8InJY) — Palash Dey, IIT Kharagpur / NPTEL.

Continuation of the identical-machine PTAS. Study it with Lecture 20 and the story’s explicit count-vector recurrence.

**Read alongside:** A complete explanation of this exact DP recurrence was not independently verified in the recording; use Williamson–Shmoys §3.2 alongside it.

**Selection:** The official course verifies the matching PTAS topic. A publicly indexed transcript isolating the configuration recurrence was not available, so this is labeled supporting coverage.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/makespan)

## Bisection with an approximate-feasibility oracle

Identical-machine makespan scheduling · Supporting lecture

[MIT 6.854: Approximation Schemes, part 2 (2020)](https://www.youtube.com/watch?v=BG17J83G7X8) — David Karger, Massachusetts Institute of Technology.

The course’s approximation-schemes materials explain optimizing a guessed makespan using an approximate decision procedure. Its rounding conventions differ from the assigned book.

**Read alongside:** The exact endpoint updates and retained-schedule invariant used in the story are not separately indexed in the video. Read the source proof for those details.

**Selection:** The official notes explicitly connect binary search and approximate feasibility. It complements the NPTEL PTAS, but the course cautions that historical recordings and pooled notes can differ.

[Official source](https://courses.csail.mit.edu/6.854/21/course_materials.html) · [Lecture material](https://courses.csail.mit.edu/6.854/21/Notes/n20-approx.html) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/makespan)

## List scheduling and LPT

Identical-machine makespan scheduling · Focused on this method

[Lecture 12: Greedy Algorithm for Scheduling Jobs on Multiple Identical Machines](https://www.youtube.com/watch?v=dqoO_iK83AE) — Palash Dey, IIT Kharagpur / NPTEL.

The official captions explicitly discuss sorting by nonincreasing processing time and the longest-processing-time rule. Compare this ordered rule with ordinary list scheduling.

**Selection:** The NPTEL captions confirm the LPT variant, so this is a closer match than unrelated job-shop or release-date tutorials.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/vtt/noc25_cs153/106105471/Lec12.vtt) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/makespan)

## First-Fit insertion

Bin packing · Focused on this method

[Greedy Algorithms — Part 1: First Fit and basic properties](https://www.youtube.com/watch?v=dovJUGbsZNA) — Arindam Khan, Indian Institute of Science.

First-Fit construction and basic properties. The official course places this video in its bin-packing greedy-algorithms module.

**Selection:** A specialist instructor’s dedicated First-Fit lecture gives a closer match than general approximation or programming tutorials.

[Official source](https://www.csa.iisc.ac.in/~arindamkhan/courses/TopicsCombOpt26/TopicsCombinatorialOptimization_Fall2026.html) · [Lecture material](https://www.csa.iisc.ac.in/~arindamkhan/courses/TopicsCombOpt26/TopicsCombinatorialOptimization_Fall2026.html) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/bin-packing)

## First-Fit-Decreasing

Bin packing · Supporting lecture

[Greedy Algorithms — Part 2: Weight-function analysis for bin packing](https://www.youtube.com/watch?v=5HQkIajpidU) — Arindam Khan, Indian Institute of Science.

Proof-oriented background on greedy bin packing and weight functions. The official module covers First Fit and First Fit Decreasing, but this recording’s complete FFD theorem was not verified.

**Read alongside:** Do not treat this as a verified full proof of the precise FFD additive guarantee; retain the story’s cited source result.

**Selection:** The advanced analysis is useful for understanding why simple insertion rules need substantial proofs. It is more relevant than a code-only FFD demonstration.

[Official source](https://www.csa.iisc.ac.in/~arindamkhan/courses/TopicsCombOpt26/TopicsCombinatorialOptimization_Fall2026.html) · [Lecture material](https://www.csa.iisc.ac.in/~arindamkhan/courses/TopicsCombOpt26/TopicsCombinatorialOptimization_Fall2026.html) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/bin-packing)

## Exact configuration DP for a bounded set of large types

Bin packing · Supporting lecture

[Lecture 22: An APTAS for Bin Packing](https://www.youtube.com/watch?v=xDRYw6G3dGY) — Palash Dey, IIT Kharagpur / NPTEL.

Beginning of the bin-packing approximation-scheme treatment. Use the story’s recurrence for the exact bounded-type solver and Lecture 23 for continuation.

**Read alongside:** Public metadata does not isolate the exact count-vector DP, so its recurrence and reconstruction proof remain a reading task.

**Selection:** The dedicated APTAS sequence is a better prerequisite match than configuration-LP videos about a different relaxation.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/bin-packing)

## Extend a large-item packing with small items

Bin packing · Supporting lecture

[Lecture 23: An APTAS for Bin Packing, continued](https://www.youtube.com/watch?v=LJqILLzeZsk) — Palash Dey, IIT Kharagpur / NPTEL.

Continuation of the large/small-item bin-packing scheme. Use it with the story’s separate small-item insertion lemma and the preceding lecture.

**Read alongside:** A complete recording of the exact Williamson–Shmoys Lemma 3.10 proof was not separately verified from public metadata.

**Selection:** The freely playable official APTAS sequence is more accessible than the alternative Claire Mathieu small-items lecture, whose Coursera player may require sign-in.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/bin-packing)

## Linear grouping of large items, then small-item insertion

Bin packing · Focused on this method

[E0 249: Bin Packing — dynamic programming and rounding](https://www.csa.iisc.ac.in/~arindamkhan/courses/ApproxAlgo22/video/approx22w2p3binpacking) — Arindam Khan, Indian Institute of Science.

The paired notes develop bounded large types, grouping and rounding, then handle the small items. Accuracy constants differ in presentation; compare after rescaling the internal accuracy.

**Read alongside:** The source supplies an extensionless media URL; use the official course page if a browser cannot play it directly.

**Selection:** Official paired teaching notes verify the grouping construction, making this more specific than an APTAS-only title. The official course supplies the video link directly.

[Official source](https://www.csa.iisc.ac.in/~arindamkhan/courses/ApproxAlgo22/ApproxAlgo.html) · [Lecture material](https://www.csa.iisc.ac.in/~arindamkhan/courses/ApproxAlgo22/handwritten/hand_w2.pdf) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/bin-packing)

## Independent fair truth assignment

Weighted MAX-SAT · Focused on this method

[Lecture 32 :  Randomized 1/2 Factor Approximation Algorithm for MAX-SAT and MAX-CUT](https://www.youtube.com/watch?v=-sWJTi5JirE) — Palash Dey, IIT Kharagpur · NPTEL.

Fair independent assignments for MAX-SAT and MAX-CUT, with the half-approximation analysis. Use the on-page clause-length formula to specialize the guarantee.

**Selection:** A dedicated university lecture matching the two baseline algorithms, rather than a brief MAX-3SAT example inside a broad probability lecture.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/max-sat)

## Conditional-expectation derandomization

Weighted MAX-SAT · Focused on this method

[Lecture 33 :  Derandomization using Method of Conditional Expectation](https://www.youtube.com/watch?v=BPVj_5layJs) — Palash Dey, IIT Kharagpur · NPTEL.

The method of conditional expectations and deterministic choices preserving a randomized guarantee. Pair it with the preceding fair-assignment lecture.

**Selection:** The course gives derandomization its own lecture immediately after the MAX-SAT baseline.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/max-sat)

## Biased coins with unit-clause normalization

Weighted MAX-SAT · Focused on this method

[Lecture 34 : Flipping Biased Coin for Better Than .5 Approximation Algorithm for Max-SAT](https://www.youtube.com/watch?v=n3X_mcTp9c0) — Palash Dey, IIT Kharagpur · NPTEL.

The biased-coin improvement for MAX-SAT. Check unit-clause polarity normalization and the improved upper bound on OPT while following the on-page guide.

**Selection:** This lecture is devoted to the assigned biased-coin method, which general randomized-algorithms introductions often omit.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/max-sat)

## Independent LP-marginal rounding

Weighted MAX-SAT · Focused on this method

[Lecture 35 :  Randomized Rounding Based (1-1/e) Factor Approximation Algorithm for Max-SAT](https://www.youtube.com/watch?v=WtB9S-ixwVw) — Palash Dey, IIT Kharagpur · NPTEL.

Independent randomized rounding of the MAX-SAT LP and its 1−1/e guarantee.

**Selection:** The lecturer separates this LP method from the fair assignment and the later best-of-two improvement, matching the study sequence.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/max-sat)

## Choose the better of fair and LP rounding

Weighted MAX-SAT · Focused on this method

[Lecture 36 : Best of Two Solutions for Max-SAT](https://www.youtube.com/watch?v=lslKiyFhK7Q) — Palash Dey, IIT Kharagpur · NPTEL.

Combining the fair and LP-based assignments by choosing the better result. Use the clause-wise comparison rather than averaging only the two global ratios.

**Selection:** A standalone lecture on exactly the better-of-two construction, following the two prerequisite algorithms.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/max-sat)

## Nonlinear transformed-marginal rounding

Weighted MAX-SAT · Focused on this method

[Lecture 37 : Nonlinear Rounding for Max-SAT](https://www.youtube.com/watch?v=GHgqQQ42Cos) — Palash Dey, IIT Kharagpur · NPTEL.

Transformed-marginal rounding for MAX-SAT. Compare the permitted transformation envelopes with the on-page statement.

**Selection:** One of the few verified public lectures devoted specifically to nonlinear MAX-SAT rounding, from a full approximation-algorithms course.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/max-sat)

## Convert a positive semidefinite Gram matrix to vectors

Weighted MAX-CUT · Supporting lecture

[A Second Course in Algorithms · Lecture 20: Semidefinite Programming and the Maximum Cut Problem](https://www.youtube.com/watch?v=8IwoS1io5BM) — Tim Roughgarden, Stanford University.

The vector and positive-semidefinite formulations underlying MAX-CUT provide the concrete Gram-matrix setting for this supporting routine.

**Read alongside:** Use the on-page routine for the matrix factorization and the numerical-precision boundary; this is not a standalone numerical SDP implementation lecture.

**Selection:** Shows why the representation matters inside an actual rounding algorithm, with official notes to connect the algebra to geometry.

[Official source](https://timroughgarden.org/w16/w16.html) · [Lecture material](https://theory.stanford.edu/~tim/w16/l/l20.pdf) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/max-cut)

## Independent random partition

Weighted MAX-CUT · Focused on this method

[Lecture 32 :  Randomized 1/2 Factor Approximation Algorithm for MAX-SAT and MAX-CUT](https://www.youtube.com/watch?v=-sWJTi5JirE) — Palash Dey, IIT Kharagpur · NPTEL.

Independent random sides for MAX-CUT and its expected half-of-total-weight analysis.

**Selection:** A dedicated treatment of the exact baseline alongside MAX-SAT; nonnegative weighted-edge accounting is supplied by the story.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/max-cut)

## Greedy conditional-expectation cut

Weighted MAX-CUT · Supporting lecture

[Lecture 33 :  Derandomization using Method of Conditional Expectation](https://www.youtube.com/watch?v=BPVj_5layJs) — Palash Dey, IIT Kharagpur · NPTEL.

Conditional-expectation derandomization. Apply its conditional-choice rule to the cut’s already placed vertices using the on-page weighted calculation.

**Read alongside:** The lecture’s catalog establishes the general conditional-expectation method; the exact weighted MAX-CUT greedy specialization is not separately verified in this recording.

**Selection:** The cleanest companion found for the derandomization mechanism; the explicit cut specialization is short enough to reconstruct from the guide.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/max-cut)

## Goemans–Williamson SDP and hyperplane rounding

Weighted MAX-CUT · Focused on this method

[A Second Course in Algorithms · Lecture 20: Semidefinite Programming and the Maximum Cut Problem](https://www.youtube.com/watch?v=8IwoS1io5BM) — Tim Roughgarden, Stanford University.

Vector/Gram MAX-CUT relaxation, random-hyperplane rounding, angular separation probability and the approximately 0.878 ratio.

**Selection:** A focused graduate lecture with an official worked derivation, geometric explanation and matching written notes.

[Official source](https://timroughgarden.org/w16/w16.html) · [Lecture material](https://theory.stanford.edu/~tim/w16/l/l20.pdf) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/max-cut)

## Random threshold rounding

Rooted prize-collecting Steiner tree · Supporting lecture

[Lecture 38: Randomized Rounding for Prize Collecting Steiner Tree](https://www.youtube.com/watch?v=hfGwc4KCQmE) — Palash Dey, IIT Kharagpur · NPTEL.

The official course has a dedicated randomized prize-collecting Steiner-tree unit in Lectures 38–39. This link starts that unit; Lecture 39 continues at https://www.youtube.com/watch?v=9Tt5g3TuhR4. The course listing establishes the topic, but does not verify every detail of the assigned threshold analysis.

**Read alongside:** Exact coverage of uniform α in [exp(−1/2),1], the y≥α convention, and the LP-relative (1−exp(−1/2))^−1 bound has not been verified from a primary transcript or companion lecture notes. Use the assigned §5.7 proof for those details.

**Selection:** A focused university lecture is a closer teaching match than a general Steiner-tree video or a modern research talk. The player ID and instructor come from the official course. The syllabus explicitly includes randomized rounding for Steiner problems.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/prize-collecting-steiner)

## Cluster clients before randomized facility selection

Metric uncapacitated facility location · Supporting lecture

[Lecture 40: Randomized Rounding for Uncapacitated Facility Location](https://www.youtube.com/watch?v=IfGNAaiqZKU) — Palash Dey, IIT Kharagpur · NPTEL.

Official lecture devoted to randomized rounding for uncapacitated facility location. This is more specific than the course's earlier deterministic 4-approximation lectures. The live official player was checked and identifies NPTEL IIT Kharagpur as uploader.

**Read alongside:** The metadata does not prove that this recording teaches the exact §5.8 representative rule minimizing v_j+C_j, x_ij sampling on N(j), and expected factor 3. Treat it as related instruction until the particular construction is checked.

**Selection:** The university course distinguishes deterministic and randomized facility-location algorithms, making this a strong specialist candidate. A separate Johns Hopkins recording was considered, but its public companion notes use a different 2+√3 filtering algorithm and its video redirects to a university login.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/facility-location)

## Event-based preemptive density-priority relaxation

Single-machine weighted completion time with release dates · Supporting lecture

[Lecture 25: 3 Factor Approximation Algorithm for Scheduling Weighted Jobs on a Single Machine](https://www.youtube.com/watch?v=TmM4I4PCMHM) — Palash Dey, IIT Kharagpur · NPTEL.

Background on approximating weighted single-machine scheduling. The official title explicitly identifies a 3-factor algorithm; this is a related scheduling lecture, rather than verified coverage of the assigned mean-busy-time relaxation.

**Read alongside:** No public video was verified for Lemma 5.22's exact event-based density-priority optimizer of the midpoint objective. In particular, this video is not evidence that fixed original w_j/p_j priority minimizes actual preemptive weighted completion time; that claim would be false.

**Selection:** A dedicated approximation-algorithms lecturer gives the relevant optimization context. Generic operating-systems priority-scheduling videos were excluded because they do not teach the approximation benchmark or its proof.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/release-date-scheduling)

## Randomized α-point ordering

Single-machine weighted completion time with release dates · Supporting lecture

[Lecture 25: 3 Factor Approximation Algorithm for Scheduling Weighted Jobs on a Single Machine](https://www.youtube.com/watch?v=TmM4I4PCMHM) — Palash Dey, IIT Kharagpur · NPTEL.

Related weighted single-machine scheduling instruction using a different 3-approximation. The exact α-point algorithm and factor-two proof are supplied in the written story.

**Read alongside:** This recording is not verified to teach independent uniform αⱼ, the mean-busy-time lower bound, or the expected 2-approximation of §5.9. It teaches a different 3-factor method.

**Selection:** A focused scheduling lesson is more useful here than an application-oriented talk. No verified freely accessible recording of the assigned α-point procedure was found in the search.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/release-date-scheduling)

## One common α and deterministic enumeration

Single-machine weighted completion time with release dates · Supporting lecture

[Lecture 25: 3 Factor Approximation Algorithm for Scheduling Weighted Jobs on a Single Machine](https://www.youtube.com/watch?v=TmM4I4PCMHM) — Palash Dey, IIT Kharagpur · NPTEL.

Related weighted single-machine scheduling instruction using a different 3-approximation. The exact α-point algorithm and factor-two proof are supplied in the written story.

**Read alongside:** This recording does not establish the shared-α theorem or enumeration of the at most n schedules. That source variant has a different analysis from independent αⱼ.

**Selection:** A focused scheduling lesson is more useful here than an application-oriented talk. No verified freely accessible recording of the assigned α-point procedure was found in the search.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/release-date-scheduling)

## Independent path rounding and Chernoff analysis

Minimum-congestion integer multicommodity routing · Supporting lecture

[Lecture 43: Integer Multicommodity Flow](https://www.youtube.com/watch?v=lDpShqiG6YU) — Palash Dey, IIT Kharagpur · NPTEL.

Official integer-multicommodity-flow lecture immediately following two lectures on Chernoff bounds. This is the course's specialist rounding-and-concentration unit. The exact theorem assumptions are not established by its title alone.

**Read alongside:** Confirm the independent per-commodity path sampling and Theorem 5.29's W*≥c ln n hypothesis in §5.11. Do not assert W*+√(cW*ln n) for arbitrarily small W*; the general bound uses O(log n)·max{W*,1}.

**Selection:** The precise problem and concentration prerequisites are present in a university approximation-algorithms course. It is a closer candidate than a generic max-flow lesson; existing Roughgarden material remains useful related background with different stated bounds.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/integer-routing)

## Compact edge-flow LP and path decomposition

Minimum-congestion integer multicommodity routing · Supporting lecture

[Lecture 5: Flow Decomposition](https://www.youtube.com/watch?v=cA2wHoXOu6Y) — Palash Dey, IIT Kharagpur · NPTEL.

A dedicated flow-decomposition lecture in Selected Topics in Algorithms. The official course's lecture map supplies its title and player ID. It supports the conversion from edge flows into paths, a separate implementation ingredient from randomized path selection.

**Read alongside:** The recording has not been verified to formulate the particular multicommodity congestion LP, prove its equivalence to the path LP, or discuss the polynomial support bound of Exercise 5.14. Those remain assigned implementation details.

**Selection:** Decomposition is the central constructive subroutine needed to make the path-distribution formulation usable. A focused flow lecture is more useful for this method than repeating the concentration analysis.

[Official source](https://nptel.ac.in/courses/106105242) · [Lecture material](https://nptel.ac.in/courses/106105242) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/integer-routing)

## Sample, enumerate, and solve a 2-SAT extension

Proper 3-coloring of dense 3-colorable graphs · Supporting lecture

[Lecture 41: Chernoff Bound](https://www.youtube.com/watch?v=i5tXmci-GJw) — Palash Dey, Indian Institute of Technology Kharagpur — NPTEL.

Probability-analysis preparation for random sampling. The official course identifies this lecture as Chernoff bounds; it does not identify the dense-graph coloring construction.

**Read alongside:** No exact public recording of the minimum-degree δn sampling, sample-color enumeration, and 2-SAT extension proof was verified. Read the on-page construction and Williamson–Shmoys §5.12 for that algorithm.

**Selection:** A focused mathematical prerequisite from a full approximation course. Prefer it to unrelated videos about coloring dense random graphs, which use different promises.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/dense-three-coloring)

## Extend two-color lists using the implication graph

Proper 3-coloring of dense 3-colorable graphs · Supporting lecture

[Lecture 4: SAT I](https://www.youtube.com/watch?v=x-Ik9YAFAPo) — Erik Demaine, Massachusetts Institute of Technology — OpenCourseWare.

The official transcript explains converting two-literal clauses to an implication graph and following implications to solve 2-SAT. Its presentation uses propagation rather than the SCC implementation in this guide.

**Read alongside:** Does not teach the dense-coloring reduction itself, and the transcript does not derive the guide's SCC criterion and reverse-condensation assignment procedure.

**Selection:** Verified instructor explanation with an official transcript. It teaches the exact feasibility problem needed by the extension, while distinguishing the chosen implementation.

[Official source](https://ocw.mit.edu/courses/6-890-algorithmic-lower-bounds-fun-with-hardness-proofs-fall-2014/resources/lecture-4-sat-i/) · [Lecture material](https://ocw.mit.edu/courses/6-890-algorithmic-lower-bounds-fun-with-hardness-proofs-fall-2014/d912936386d6510e901850815a3c81f2_x-Ik9YAFAPo.vtt) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/dense-three-coloring)

## High-degree neighborhoods, then greedy coloring

Coloring general 3-colorable graphs with few colors · Supporting lecture

[Lecture 19: SDP (#2) — Coloring 3-Colorable Graphs](https://www.youtube.com/watch?v=5F3oxsDBoW4) — Rakesh Venkat, Indian Institute of Technology Hyderabad.

The instructor's public lecture concerns approximate coloring of 3-colorable graphs. The IITH course schedule recommends this recording alongside Wigderson's neighborhood method and KMS SDP coloring.

**Read alongside:** The public title and description do not independently establish the complete high-degree-neighborhood 4√n proof. Keep the guide and Theorem 6.20 as the exact reference.

**Selection:** The closest focused public course lecture found; more relevant than a MAX-CUT-only SDP lecture. Public availability and instructor identity were checked with YouTube metadata.

[Official source](https://www.youtube.com/watch?v=5F3oxsDBoW4) · [Lecture material](https://hackmd.io/VoLtmTQ0S_m5deqmnGDntg) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/three-colorable-coloring)

## Two-color a bipartite neighborhood

Coloring general 3-colorable graphs with few colors · Supporting lecture

[Lecture 6: Graph Theory and Coloring](https://www.youtube.com/watch?v=h9wxtqoa1jY) — Tom Leighton, Massachusetts Institute of Technology — OpenCourseWare.

The official transcript develops graph coloring, identifies bipartite graphs with two-colorability, and contrasts this with greedy coloring. It leaves finding a bipartition as an exercise.

**Read alongside:** The BFS/DFS alternating-color algorithm and its linear-time proof are not taught in this lecture. Use the guide's traversal steps for the actual subroutine.

**Selection:** Clear prerequisite explanation and concrete graph examples, with a verified transcript. It also exposes why arbitrary-order greedy coloring cannot replace bipartite traversal.

[Official source](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/resources/lecture-6-graph-theory-and-coloring/) · [Lecture material](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/ebd05945c1b35a019089c5a683a66005_h9wxtqoa1jY.vtt) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/three-colorable-coloring)

## Greedy coloring of a bounded-degree remainder

Coloring general 3-colorable graphs with few colors · Focused on this method

[Lecture 6: Graph Theory and Coloring](https://www.youtube.com/watch?v=h9wxtqoa1jY) — Tom Leighton, Massachusetts Institute of Technology — OpenCourseWare.

The official transcript gives sequential greedy vertex coloring, proves the maximum-degree-plus-one bound, and discusses vertex ordering and examples where the output exceeds the chromatic number.

**Selection:** Direct match to this subroutine, including its guarantee and limitation, with a full official transcript rather than an unexplained code demonstration.

[Official source](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/resources/lecture-6-graph-theory-and-coloring/) · [Lecture material](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/ebd05945c1b35a019089c5a683a66005_h9wxtqoa1jY.vtt) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/three-colorable-coloring)

## Random-hyperplane semicoloring

Coloring general 3-colorable graphs with few colors · Supporting lecture

[Lecture 20: Semidefinite Programming and the Maximum Cut Problem](https://www.youtube.com/watch?v=8IwoS1io5BM) — Tim Roughgarden, Stanford University.

Teaches Gram/vector relaxations and random-hyperplane angular separation for MAX-CUT. These supply the geometric probability input used by the semicoloring analysis.

**Read alongside:** Does not construct sign-string semicolorings, choose logarithmically many planes, or prove the n/4 monochromatic-edge acceptance bound of Theorem 6.23.

**Selection:** A developed derivation of the shared rounding primitive, supported by the instructor's notes. It is more defensible than claiming that a general KMS video proves this distinct hyperplane method.

[Official source](https://timroughgarden.org/w16/w16.html) · [Lecture material](https://timroughgarden.org/w16/l/l20.pdf) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/three-colorable-coloring)

## Convert a semicoloring into a full coloring

Coloring general 3-colorable graphs with few colors · Supporting lecture

[Lecture 19: SDP (#2) — Coloring 3-Colorable Graphs](https://www.youtube.com/watch?v=5F3oxsDBoW4) — Rakesh Venkat, Indian Institute of Technology Hyderabad.

A focused lecture on approximate 3-colorable-graph coloring. Use it to understand the surrounding coloring strategy; detailed semicoloring conversion is supplied on this page.

**Read alongside:** The inspected public metadata does not verify the specific delete-bad-edge-endpoints and fresh-palette semicoloring wrapper. Do not conflate it with Gaussian independent-set extraction.

**Selection:** Keeps the support within the same approximation problem rather than linking to introductory color definitions.

[Official source](https://www.youtube.com/watch?v=5F3oxsDBoW4) · [Lecture material](https://hackmd.io/VoLtmTQ0S_m5deqmnGDntg) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/three-colorable-coloring)

## Vector coloring, hyperplane semicoloring, and degree balancing

Coloring general 3-colorable graphs with few colors · Supporting lecture

[Lecture 19: SDP (#2) — Coloring 3-Colorable Graphs](https://www.youtube.com/watch?v=5F3oxsDBoW4) — Rakesh Venkat, Indian Institute of Technology Hyderabad.

The IITH course lists this recording among resources for Wigderson and KMS coloring, including high/low-degree reasoning. The course's stated final refinement is the Gaussian-based Õ(n^(1/4)) result.

**Read alongside:** This is not verified as a proof of the hyperplane-specific balancing σ=n^(log₆3) and Õ(n^(log₆2)) bound. Study Theorem 6.24 and the on-page derivation.

**Selection:** Useful comparison between combinatorial degree reduction and SDP rounding; its relationship to the guide's older hyperplane construction is explicit.

[Official source](https://www.youtube.com/watch?v=5F3oxsDBoW4) · [Lecture material](https://hackmd.io/VoLtmTQ0S_m5deqmnGDntg) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/three-colorable-coloring)

## Amplified Gaussian extraction and repeated coloring

Coloring general 3-colorable graphs with few colors · Supporting lecture

[Lecture 19: SDP (#2) — Coloring 3-Colorable Graphs](https://www.youtube.com/watch?v=5F3oxsDBoW4) — Rakesh Venkat, Indian Institute of Technology Hyderabad.

Focused SDP coloring support recommended by the IITH course with Williamson–Shmoys §13.2 and KMS notes. It provides context for extracting independent sets and then coloring.

**Read alongside:** The γ-dependent amplification argument and its trial count were not independently verified in accessible video text. Retain the guide's explicit probability calculation.

**Selection:** Best public topic-specific candidate found; the alternative Jaikumar recording linked by the course currently returns unauthorized metadata and was excluded.

[Official source](https://www.youtube.com/watch?v=5F3oxsDBoW4) · [Lecture material](https://hackmd.io/VoLtmTQ0S_m5deqmnGDntg) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/three-colorable-coloring)

## Degree balancing for Gaussian coloring

Coloring general 3-colorable graphs with few colors · Supporting lecture

[Lecture 19: SDP (#2) — Coloring 3-Colorable Graphs](https://www.youtube.com/watch?v=5F3oxsDBoW4) — Rakesh Venkat, Indian Institute of Technology Hyderabad.

The IITH course schedule lists this video with KMS resources and explicitly teaches the Õ(n^(1/4)) coloring refinement in its corresponding course unit.

**Read alongside:** The recording's exact degree threshold and proof were not verified in accessible subtitles or notes belonging to that recording. Keep Exercise 13.1 attribution and the complete derivation on the page.

**Selection:** Closest focused public resource for the Gaussian/degree-balancing extension; stronger topic alignment than MAX-CUT-only lectures.

[Official source](https://www.youtube.com/watch?v=5F3oxsDBoW4) · [Lecture material](https://hackmd.io/VoLtmTQ0S_m5deqmnGDntg) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/three-colorable-coloring)

## Gaussian thresholding and deletion of conflicts

Large independent set in a 3-colorable graph · Supporting lecture

[Lecture 19: SDP (#2) — Coloring 3-Colorable Graphs](https://www.youtube.com/watch?v=5F3oxsDBoW4) — Rakesh Venkat, Indian Institute of Technology Hyderabad.

The public title and description identify SDP coloring of 3-colorable graphs. The recommending IITH course points to KMS and Williamson–Shmoys §13.2 for its coloring unit.

**Read alongside:** The exact positive Gaussian threshold, removal of all selected vertices with selected neighbors, and Ω(nΔ^(−1/3)/√lnΔ) proof were not independently verified from available recording text. This video is supporting explanation, not a claimed full proof.

**Selection:** Focused researcher-led course material. It is a better topical candidate than generic Gaussian probability or MAX-CUT videos, while the exact extractor remains explicitly sourced.

[Official source](https://www.youtube.com/watch?v=5F3oxsDBoW4) · [Lecture material](https://hackmd.io/VoLtmTQ0S_m5deqmnGDntg) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/three-colorable-independent-set)

## Primal–dual tight-set selection

Weighted Set Cover · Focused on this method

[Advanced Algorithms 11-7: Primal-Dual Schema](https://www.youtube.com/watch?v=CqydA6RFFXw) — Sebastian Wild, University of Marburg.

The instructor-hosted transcript explicitly chooses one uncovered element, increases its dual variable until a containing set becomes tight, selects that set, and proves the frequency-f guarantee using relaxed complementary slackness. This matches the construction in §7.1.

**Selection:** A focused postgraduate lecture with a searchable primary transcript makes the algorithm and its certificate easy to revisit. It carefully distinguishes the f-frequency bound from greedy set cover's harmonic bound. The direct YouTube link was read from the instructor's live page.

[Official source](https://www2.wild-inter.net/videos/advalg-summer25/) · [Lecture material](https://www2.wild-inter.net/videos/advalg-summer25/11-7/) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/set-cover)

## Greedy cost per newly covered element

Weighted Set Cover · Focused on this method

[Advanced Algorithms 10-3: Greedy Set Cover](https://www.youtube.com/watch?v=EgjYrSCrX20) — Sebastian Wild, University of Marburg.

The instructor's transcript specifies weighted cost per newly covered element, defines element prices, derives H_n, and presents a weighted-star example approaching the bound. This matches the catalogue's explicitly Additional §1.6 method.

**Selection:** The short, focused lesson combines the actual selection rule, proof, and a revealing failure example. The primary page links directly to this verified YouTube ID and provides a searchable transcript.

[Official source](https://www2.wild-inter.net/videos/advalg-summer25/10-3/) · [Lecture material](https://www2.wild-inter.net/videos/advalg-summer25/10-3/) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/set-cover)

## Primal–dual cut growth and path extraction

Shortest s–t path · Supporting lecture

[Mod-01 Lec-18: Shortest Path Problem, Primal-dual method, example](https://www.youtube.com/watch?v=ZPrW3QCMpNE) — Prabha Sharma, IIT Kanpur · NPTEL.

The verified NPTEL uploader identifies a dedicated shortest-path primal-dual lecture with an example, taught in Linear Programming and Extensions. This supplies relevant duality instruction, but its exact formulation was not verified against the assigned cut-based presentation.

**Read alongside:** The recording is not verified to grow the dual of the current s-component cut, maintain an edge tree, and extract its unique s–t path exactly as Algorithm 7.4. Do not label every primal-dual shortest-path presentation as the identical cut formulation.

**Selection:** A specialist university LP lecture is a stronger match than a standard Dijkstra tutorial. The primary video metadata verifies its title, speaker, and institution.

[Official source](https://www.youtube.com/watch?v=ZPrW3QCMpNE) · [Lecture material](https://www.youtube.com/watch?v=ZPrW3QCMpNE) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/shortest-path)

## Grow one active component at a time: diagnostic first attempt

Generalized Steiner tree / Steiner forest · Focused on this method

[Steiner Forest via Primal-Dual](https://www.youtube.com/watch?v=oYGiDDqG_4s) — Algorithms Lab · presenter not named in the public metadata, Algorithms Lab · university affiliation not stated.

The uploader's chapter list explicitly includes the first primal-dual attempt, its analysis, the problem with that approach, and the transition to synchronized increases. This directly serves the diagnostic role of Algorithm 7.5.

**Selection:** This recording teaches why the first proof attempt fails, rather than presenting only the final 2-approximation. Its public description is unusually precise about the two constructions and their analyses; no unverified speaker or university attribution is added.

[Official source](https://www.youtube.com/watch?v=oYGiDDqG_4s) · [Lecture material](https://www.youtube.com/watch?v=oYGiDDqG_4s) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/steiner-forest)

## Simultaneous moat growth followed by pruning

Generalized Steiner tree / Steiner forest · Focused on this method

[Steiner Forest via Primal-Dual](https://www.youtube.com/watch?v=oYGiDDqG_4s) — Algorithms Lab · presenter not named in the public metadata, Algorithms Lab · university affiliation not stated.

The public description identifies the 2-approximation with synchronized dual increases. The chapter list includes an example, the structural lemma, its proof, and the algorithm analysis. These are the distinctive construction and proof ingredients of §7.4's final method.

**Selection:** The same lesson explains the repair to the failed first attempt and develops the aggregate structural argument. That makes it especially useful when studying why growing multiple active components changes the proof.

[Official source](https://www.youtube.com/watch?v=oYGiDDqG_4s) · [Lecture material](https://www.youtube.com/watch?v=oYGiDDqG_4s) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/steiner-forest)

## Random hierarchical metric decomposition

Probabilistic approximation by tree metrics · Focused on this method

[Randomized tree metrics](https://www.youtube.com/watch?v=o31Q8U4EeFQ) — Kent Quanrud, Purdue University.

The lecturer's Spring 2024 video points to Chapter 12 of his notes. That chapter explicitly presents FRT with one shared random order and one shared random radius multiplier across levels, hierarchical tree distances, domination, and expected logarithmic stretch. It uses base-4 levels, an equivalent constant-base variant of the assigned base-2 construction.

**Selection:** The instructor's own detailed notes establish the mechanism and its analysis, making this substantially closer than a generic metric-embedding introduction. The shared-randomness subtlety is stated explicitly.

[Official source](https://www.youtube.com/watch?v=o31Q8U4EeFQ) · [Lecture material](https://ras24.s3.amazonaws.com/ras24.pdf) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/tree-metric-embedding)

## Exact buy-at-bulk routing on a tree

Buy-at-bulk network design · Supporting lecture

[Randomized tree metrics](https://www.youtube.com/watch?v=o31Q8U4EeFQ) — Kent Quanrud, Purdue University.

The Spring 2024 tree-metric lecture supplies the setting for solving network-design problems on trees. The lecturer's later Fall 2025 notes include a buy-at-bulk exercise asking for an exact tree algorithm; that exercise is related reading, rather than proof that the earlier video solves it.

**Read alongside:** No exact video proof was verified for Algorithm 8.5: route each demand on its unique tree path and purchase on each edge the sum of all demands using it. Learn the exactness argument from §8.6.

**Selection:** The later notes use the same monotone, subadditive capacity-cost model, making this closer preparation than an unrelated network-design research talk.

[Official source](https://www.youtube.com/watch?v=o31Q8U4EeFQ) · [Lecture material](https://kentq.s3.us-east-1.amazonaws.com/raf25.pdf) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/buy-at-bulk)

## Remove auxiliary vertices from the sampled hierarchical tree

Buy-at-bulk network design · Supporting lecture

[Randomized tree metrics](https://www.youtube.com/watch?v=o31Q8U4EeFQ) — Kent Quanrud, Purdue University.

Provides the hierarchical tree structure that the auxiliary-vertex removal step acts on. It supports understanding the geometry of the input tree, rather than verified coverage of the book's particular contraction routine.

**Read alongside:** The source-specific labeled-child contractions, factor-4 rescaling, and d_T≤d_T′≤4d_T comparison of Theorem 8.19/Corollary 8.20 were not verified in this recording. This transformation is not arbitrary contraction of an arbitrary tree.

**Selection:** A construction-level FRT lecture gives useful prerequisites for this easily overlooked implementation step. Keeping a separate support label prevents the FRT theorem from being mistaken for the terminal-only transformation theorem.

[Official source](https://www.youtube.com/watch?v=o31Q8U4EeFQ) · [Lecture material](https://kentq.s3.us-east-1.amazonaws.com/raf25.pdf) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/buy-at-bulk)

## Route on a random tree and transfer to the graph

Buy-at-bulk network design · Supporting lecture

[Randomized tree metrics](https://www.youtube.com/watch?v=o31Q8U4EeFQ) — Kent Quanrud, Purdue University.

Teaches the random-tree embedding used by the general-graph reduction. Buy-at-bulk appears as an exercise in the lecturer's later Fall 2025 notes. The Spring 2024 video is offered as preparation for the reduction, without claiming that it proves the complete application.

**Read alongside:** No public exact video was verified for Algorithm 8.6's complete chain: remove auxiliary vertices, solve the sampled tree exactly, transfer tree edges to graph shortest paths, and use subadditivity plus expected stretch to bound cost.

**Selection:** The later notes' model matches the assigned common subadditive function. An ETH course also lists a lecture explicitly on tree embeddings and buy-at-bulk with §§8.5–8.6, but routes recordings through Moodle, so this public instructor recording is the more usable support resource.

[Official source](https://www.youtube.com/watch?v=o31Q8U4EeFQ) · [Lecture material](https://kentq.s3.us-east-1.amazonaws.com/raf25.pdf) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/buy-at-bulk)

## Weighted independent-set DP on a rooted tree

Maximum-weight independent set in planar graphs · Supporting lecture

[Trees and Series-Parallel Graphs — Lecture 22a of CS Theory Toolkit](https://www.youtube.com/watch?v=YnZDAnImkdo) — Ryan O'Donnell, Carnegie Mellon University.

The instructor's description identifies tree-structured constraint problems and series-parallel graphs as the lead-in to treewidth. This is preparation for dynamic programming over tree structure.

**Read alongside:** The public description does not certify every weighted include/exclude recurrence and reconstruction step in this guide. Use the on-page tree DP as the exact algorithm.

**Selection:** A concise graduate explanation from the instructor's own channel, more focused on tree structure than a long general approximation survey.

[Official source](https://www.youtube.com/watch?v=YnZDAnImkdo) · [Lecture material](https://www.cs.cmu.edu/~odonnell/) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/planar-independent-set)

## Weighted independent set on a supplied tree decomposition

Maximum-weight independent set in planar graphs · Focused on this method

[Lecture 25: Nice Tree Decomposition and Algorithm for Max Weight Independent Set](https://www.youtube.com/watch?v=i_69_-D8BlQ) — Saket Saurabh and Neeldhara Misra (course instructors), NPTEL — Institute of Mathematical Sciences Chennai / IIT Gandhinagar.

The official NPTEL video description explicitly states construction of nice tree decompositions and a dynamic program for maximum-weight independent set on bounded-treewidth graphs. It uses a nice-decomposition presentation.

**Selection:** Direct weighted-objective and decomposition-DP match, unlike the existing Baker lecture's minimum-vertex-cover example. The official VTU mirror links this exact video, and NPTEL identifies the course instructors.

[Official source](https://nptel.ac.in/courses/106106230) · [Lecture material](https://www.youtube.com/watch?v=i_69_-D8BlQ) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/planar-independent-set)

## Construct the bounded-width outerplanar decomposition

Maximum-weight independent set in planar graphs · Supporting lecture

[Approximation schemes in planar graphs: Branchwidth and Baker's technique](https://courses.csail.mit.edu/6.889/fall11/lectures/video/L08_720p.mp4) — Shay Mozes, Massachusetts Institute of Technology.

The official lecture page specifies carving and branch decompositions and a planar radius-to-width theorem. It develops the structural reason a layered planar instance can be reduced to bounded width.

**Read alongside:** Its decomposition presentation is based on branchwidth and radius, rather than the guide's particular outer-face-layer construction and treewidth lemmas 10.13–10.16.

**Selection:** A graduate structural lecture with synchronized notes and direct university-hosted video. More useful for decomposition reasoning than an implementation-only treewidth tutorial.

[Official source](https://courses.csail.mit.edu/6.889/fall11/lectures/L08.html) · [Lecture material](https://courses.csail.mit.edu/6.889/fall11/lectures/L08.html) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/planar-independent-set)

## Baker’s layer deletion and bounded-treewidth DP

Maximum-weight independent set in planar graphs · Supporting lecture

[Approximation schemes in planar graphs: Branchwidth and Baker's technique](https://courses.csail.mit.edu/6.889/fall11/lectures/video/L08_720p.mp4) — Shay Mozes, Massachusetts Institute of Technology.

The official lecture page explicitly develops Baker's technique and proves a PTAS using minimum vertex cover as the worked application. It teaches the layer-deletion and bounded-width pattern.

**Read alongside:** Its worked optimization objective is minimum vertex cover, not maximum-weight independent set. The independent-set averaging loss and weighted bag DP must be read in this guide; approximation ratios do not transfer merely by complementing a vertex cover.

**Selection:** High-quality full lecture with synchronized notes and a direct university video; the strongest verified public Baker recording found in this search.

[Official source](https://courses.csail.mit.edu/6.889/fall11/lectures/L08.html) · [Lecture material](https://courses.csail.mit.edu/6.889/fall11/lectures/L08.html) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/planar-independent-set)

## Choose the better of the two constant assignments

Three-variable odd/even constraint satisfaction · Supporting lecture

[Lecture 32 :  Randomized 1/2 Factor Approximation Algorithm for MAX-SAT and MAX-CUT](https://www.youtube.com/watch?v=-sWJTi5JirE) — Palash Dey, IIT Kharagpur · NPTEL.

Background on half-approximation guarantees and comparing an assignment value with total constraint weight. The parity-specific two-constant-assignment proof is given on this page.

**Read alongside:** This video teaches fair MAX-SAT/MAX-CUT baselines, not the all-zero/all-one parity algorithm. Read the story’s three steps for the exact odd-arity argument.

**Selection:** A verified introductory baseline lecture is useful preparation; no dedicated strong recording of this elementary odd/even construction was verified.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://nptel.ac.in/courses/106105471) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/odd-even-csp)

## Christofides’ algorithm

Metric traveling salesman problem · Focused on this method

[Lecture 15: 1.5-Approximation Algorithm for Metric TSP](https://www.youtube.com/watch?v=WB0P6WXyVus) — Palash Dey, IIT Kharagpur / NPTEL.

Dedicated metric-TSP 3/2-approximation lecture. Study the spanning-tree, matching, Euler-tour and shortcutting roles separately.

**Selection:** The exact approximation factor and problem variant are explicit in the official course. MIT 6.046 Recitation 9 is another strong teaching alternative.

[Official source](https://nptel.ac.in/courses/106105471) · [Lecture material](https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/vtt/noc25_cs153/106105471/Lec15.vtt) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/metric-tsp)

## Geometric dissection, portals, and dynamic programming

Euclidean traveling salesman problem · Supporting lecture

[Tight results on Euclidean TSP — Frontiers of Geometric Algorithms](https://www.csa.iisc.ac.in/~arindamkhan/courses/TopicsGeom24/TSPtobius.mp4) — Tobias Mömke, Frontiers of Geometric Algorithms workshop / Indian Institute of Science.

Research-level context for Euclidean TSP, linked from the course’s Euclidean-TSP week. It is not a verified complete teaching proof of the classical portal-respecting dissection PTAS.

**Read alongside:** No openly accessible video with a verified complete classical portal/patching/DP proof was found. Use the assigned background section and its primary reading for that argument.

**Selection:** A specialist talk on the correct geometric problem is preferable to substituting a metric-TSP lecture, which does not explain the geometric PTAS.

[Official source](https://www.csa.iisc.ac.in/~arindamkhan/courses/TopicsGeom24/TopicsGeom24.html) · [Lecture material](https://www.csa.iisc.ac.in/~arindamkhan/courses/TopicsGeom24/TopicsGeom24.html) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/euclidean-tsp)

## Threshold rounding of the covering LP

Weighted Vertex Cover · Focused on this method

[Rounding LP Solutions: Min-Vertex-Cover · Lecture 18c of CS Theory Toolkit](https://www.youtube.com/watch?v=WT2MtXI35vc) — Ryan O’Donnell, Carnegie Mellon University.

Formulate the vertex-cover ILP, relax it, round at one half, prove feasibility and compare cost with twice the LP optimum.

**Selection:** A concise graduate-course explanation devoted to LP threshold rounding, with the construction and both proof obligations clearly identified in the instructor’s description.

[Official source](https://www.youtube.com/watch?v=WT2MtXI35vc) · [Lecture material](https://www.youtube.com/watch?v=WT2MtXI35vc) · [Algorithm story](https://hadi1373z.github.io/doctoral-exam/#algorithm/vertex-cover)

