# Doctoral Exam Studio

[Open the study website](https://hadi1373z.github.io/doctoral-exam/)

## Confirmed approximation syllabus · 21 November 2026

Required reading is **only** the following Williamson–Shmoys sections:

- **3.1–3.3:** knapsack, approximation schemes for scheduling and bin packing.
- **5.1–5.5:** MAX-SAT algorithms, conditional expectation, biased assignments, LP rounding and the better-of-two algorithm.
- **6.1, 6.2, 6.5, 13.2:** SDP, MAX-CUT and its use for coloring.
- **7.1, 7.3, 7.4:** primal–dual algorithms and generalized Steiner tree.
- **8.5, 8.6:** approximating metrics by tree metrics and the buy-at-bulk application.
- **10.1:** Euclidean TSP.
- **16.1, 16.3:** hardness of approximation and the PCP theorem.

These are 20 sections grouped into 14 required learning units. Sections 5.6–5.12 and planar MIS (§10.2) are **Additional**, shown in amber in the algorithm catalog. They do not enter the required study plan, assessment pool or progress denominator. Source dependencies are explained where needed without expanding the assigned section list.

The other subjects retain their confirmed scope: Alon–Spencer Chapters 6, 7, 15 and 17, and the complete LFKN, Shamir, BFL and GMW papers. The website has 45 required units in total.

## Learning resources

- [Continuous lectures](https://hadi1373z.github.io/doctoral-exam/#lecture): examples, board derivations, proof pictures and source links.
- [Problem stories and section audit](https://hadi1373z.github.io/doctoral-exam/#algorithms/coverage): 14 assigned algorithmic tasks and 8 additional problem stories; 57 method guides in the full catalog. Individual additional methods within assigned problems have their own amber labels.
- [Question repository](questions/README.md): 540 required-topic questions, 12 per unit: four doctoral proofs, four examiner challenges, two research investigations and two short oral checks. The 90 cold transfer forms are separate.
- [Foundation practice](https://hadi1373z.github.io/doctoral-exam/#foundation): 135 assigned checks with explanations plus 68 original background checks.
- [15-day map](https://hadi1373z.github.io/doctoral-exam/#plan/15): all 45 units once in Days 1–12, followed by source audits and mock exams. Planning checklists do not award examination credit.
- [Videos](videos/algorithms.md): attributed recommendations for the full method catalog, with focused/supporting labels and explicit gaps.
- [Textbook and LaTeX summaries](textbook/): approximation volume corrected to the exact section list; other volumes retained.

Euclidean TSP includes the two-sided snapping budget, nested portals, the distinction between portal-only and patched crossing bounds, connectivity-aware square DP, probability amplification and nontrivial examiner questions. Geometric structure lemmas are identified as source proof inputs, not claimed to follow from a toy picture.

## Assessment

Reading, quizzes, pictures and videos are formative. Required progress uses a written unaided proof, a changed-case defense, an objection, a numerical check and criterion review. Retention requires another form after at least seven days. Proof judgments are self-reviewed; the website does not predict an official examination result. Progress is stored on the device and can be exported.

## Rebuild and verify

Run from the repository root:

```sh
node src/build-exam.cjs ..
node src/verify-scope.cjs ..
node src/verify-calibration.cjs ..
node src/verify-guided.cjs ..
node src/verify-foundations.cjs ..
node src/verify-proof-tutor.cjs ..
node src/verify-bank.cjs ..
node src/verify-lectures.cjs ..
node src/verify-study-plan.cjs ..
node src/verify-algorithm-catalog.cjs ..
node src/verify-algorithm-videos.cjs ..
node src/verify-math.cjs ..
```

The standalone site uses offline KaTeX MathML. Public source data contains authored teaching material and source links; full extracted books and private uploads are not included.
