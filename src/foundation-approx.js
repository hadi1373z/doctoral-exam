'use strict';
const FOUNDATION_APPROX = {
  "questions": [
    {
      "id": "foundation-knapsack-1",
      "topic": "core-knapsack",
      "question": "After infeasible items are removed, n=4, ε=0.2, and the largest profit is P=40. With K=εP/n, what are the scaled profits of items with profits 15 and 24?",
      "options": [
        "7 and 12",
        "8 and 12",
        "15 and 24",
        "3 and 4"
      ],
      "answer": 0,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 2,
      "readingLabel": "Worked example and its approximation accounting",
      "teaching": {
        "summary": "The scale is K=2, and the FPTAS rounds each profit down separately. The DP still stores original weights, so this change affects the objective comparison without weakening feasibility. The represented profit of this pair is 2(7+12)=38, one below its original profit 39.",
        "steps": [
          "Compute K=0.2·40/4=2 before performing any rounding.",
          "Take floor(15/2)=7 and floor(24/2)=12.",
          "Transfer back with K times the scaled sum; each selected item loses less than K."
        ],
        "distractors": [
          "Correct: both values use the stated downward floor with scale two.",
          "Eight rounds 7.5 upward and breaks this floor-based comparison.",
          "These are original profits, so the DP state range has not been compressed.",
          "Those values use an unrelated scale and do not follow from K=2."
        ],
        "takeaway": "A rounding rule and its scale must stay attached to the loss calculation.",
        "followup": "For three items, how would you bound their total rounding loss without knowing which set the DP selects?",
        "tex": "K=2,\\qquad p'_i=\\lfloor p_i/2\\rfloor."
      }
    },
    {
      "id": "foundation-knapsack-2",
      "topic": "core-knapsack",
      "question": "The basic scaled knapsack DP has total scaled-profit range at most n²/ε. For n=4 and ε=0.2, what numerical value does this profit-index range bound give?",
      "options": [
        "40",
        "80",
        "320",
        "20"
      ],
      "answer": 1,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 3,
      "readingLabel": "Proof at the board",
      "teaching": {
        "summary": "The bound concerns the range of the profit index, not the total number of transitions. Each feasible item has profit at most P, so its scaled profit is at most n/ε. Summing over at most n items gives n²/ε=80; processing all four items adds another factor n to the elementary transition count.",
        "steps": [
          "Bound each scaled item profit by n/ε=20.",
          "There are four items, hence the total index range is at most 4·20=80.",
          "Distinguish this range from the O(n³/ε) transition count."
        ],
        "distractors": [
          "Forty omits part of the factor n in the total range.",
          "Correct: 4²/0.2=80 is the requested profit-index bound.",
          "Three hundred twenty is the corresponding n-times-range transition scale, not the index range.",
          "Twenty bounds one item’s scaled profit, not their total."
        ],
        "takeaway": "Counting states and counting transitions are separate complexity steps.",
        "followup": "Why is a DP polynomial in the numerical capacity not automatically an FPTAS?",
        "tex": "\\sum_i p'_i\\le n^2/\\varepsilon."
      }
    },
    {
      "id": "foundation-knapsack-3",
      "topic": "core-knapsack",
      "question": "A proposed FPTAS rounds item weights downward, chooses a set feasible for those rounded weights, and returns it without repair. Which gap remains?",
      "options": [
        "Its running time is necessarily exponential",
        "Its output is always optimal",
        "Its output may violate the original capacity",
        "Its objective is necessarily zero"
      ],
      "answer": 2,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 5,
      "readingLabel": "Limits and changed assumptions",
      "teaching": {
        "summary": "A feasible rounded-weight set may exceed the real capacity because every selected item can be heavier than its rounded representation. The profit-scaling proof avoids this gap by keeping exact original weights in the feasibility DP and rounding only profits. An approximation guarantee is meaningful only for a feasible output.",
        "steps": [
          "Compare rounded feasibility with the original capacity constraint.",
          "Observe that downward weight rounding enlarges the set of apparently feasible subsets.",
          "Keep original weights, or supply a separate repair argument with a proved objective loss."
        ],
        "distractors": [
          "The central flaw is feasibility; the question provides no exponential-time argument.",
          "Solving a changed problem does not establish optimality for the original one.",
          "Correct: rounding down can hide real load and cause infeasibility.",
          "Nothing in the proposal forces all selected profits to vanish."
        ],
        "takeaway": "Audit feasibility before interpreting an approximation ratio.",
        "followup": "Give two weights just above one half of a unit-capacity bin that become feasible after coarse downward rounding.",
        "tex": ""
      }
    },
    {
      "id": "foundation-scheduling-scheme-1",
      "topic": "core-scheduling-scheme",
      "question": "Use the assigned downward grid T/k² with T=100 and k=10. Long jobs have lengths 20.7, 30.2, 40.1. What rounded load is stored?",
      "options": [
        "93",
        "100",
        "91",
        "90"
      ],
      "answer": 3,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 2,
      "readingLabel": "Worked example and its approximation accounting",
      "teaching": {
        "summary": "The grid width is one, so these jobs round to 20,30,40 and their stored sum is 90. Restoring their original lengths gives 91, a separate quantity. Downward rounding ensures a schedule feasible at target T remains feasible for rounded long jobs; the restoration loss must then be explicitly charged.",
        "steps": [
          "Calculate the grid width 100/10²=1.",
          "Round the three jobs down to 20,30,40.",
          "Add rounded lengths to obtain 90; original lengths total 91."
        ],
        "distractors": [
          "Ninety-three comes from upward rounding each original length instead.",
          "The guessed target bounds a configuration but is not its actual stored load.",
          "Ninety-one is the restored original load, not its rounded representation.",
          "Correct: floor rounding gives 20+30+40=90."
        ],
        "takeaway": "Separate rounded configuration load from restoration error.",
        "followup": "Why can a target-T machine hold at most k rounded long jobs, and how does that bound restoration loss?",
        "tex": "p'_j=\\left\\lfloor p_j/(T/k^2)\\right\\rfloor T/k^2."
      }
    },
    {
      "id": "foundation-scheduling-scheme-2",
      "topic": "core-scheduling-scheme",
      "question": "A small job p≤T/k is placed on a least-loaded machine. Assume k≥1 and ORIGINAL total processing volume at most mT. Which is the sharp guarantee obtained by adding its size bound to the average-load bound?",
      "options": [
        "T+T/k",
        "T+k",
        "T only",
        "2T"
      ],
      "answer": 0,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 3,
      "readingLabel": "Proof at the board",
      "teaching": {
        "summary": "At insertion time, the least machine load is no more than the average load already assigned. That assigned original volume is at most the entire original volume, so the job starts by T and finishes by T+T/k. Using the original-volume bound avoids charging a rounding allowance again inside the average-load estimate.",
        "steps": [
          "The minimum current load is at most current original assigned volume divided by m.",
          "The latter is no more than total original volume/m≤T.",
          "Add the last job’s size, at most T/k."
        ],
        "distractors": [
          "Correct: start at most T, then add at most T/k.",
          "The quantity k is dimensionless, so adding it to a processing time is unjustified.",
          "Starting by T does not mean finishing by T when the job has positive length.",
          "Two T is a much weaker generic bound and misses the small-job hypothesis."
        ],
        "takeaway": "Use the original volume when the proof’s lower bound is on original processing work.",
        "followup": "Which line fails if jobs are placed on an arbitrary machine instead of a least-loaded one?",
        "tex": "C_j\\le \\frac{\\sum_i p_i}{m}+p_j\\le T+T/k."
      }
    },
    {
      "id": "foundation-scheduling-scheme-3",
      "topic": "core-scheduling-scheme",
      "question": "For fixed k, a configuration records counts of rounded long-job types. Why can this lead to polynomial time in n even when assigning individual jobs to machines directly is huge?",
      "options": [
        "The target T is known exactly",
        "The number of types and per-machine counts is bounded as a function of k",
        "All rounded jobs become identical",
        "There are only constantly many machines"
      ],
      "answer": 1,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 3,
      "readingLabel": "Proof at the board",
      "teaching": {
        "summary": "A configuration forgets job identities and records only how many jobs of each rounded size a machine holds. A long rounded job has size at least T/k and there are only O(k²) grid positions up to T, so per-machine counts and the type set are bounded for fixed k. The input still determines how many copies of each type must be assigned.",
        "steps": [
          "Use the size threshold to bound jobs per machine.",
          "Use the grid to bound distinct rounded lengths independently of n.",
          "Enumerate count vectors, then account for their multiplicities across the input."
        ],
        "distractors": [
          "The scheme can search candidate targets; knowing OPT exactly is not the compression mechanism.",
          "Correct: bounded type counts replace enumerating identities.",
          "Different grid positions remain different types; equality is not required.",
          "The number of machines may grow with the input."
        ],
        "takeaway": "A PTAS can hide expensive dependence on a fixed accuracy parameter, but must expose that dependence.",
        "followup": "Would the same argument prove an FPTAS if configuration enumeration were exponential in k?",
        "tex": ""
      }
    },
    {
      "id": "foundation-bin-scheme-1",
      "topic": "core-bin-scheme",
      "question": "A bin-packing algorithm guarantees ALG≤1.1OPT+2. On an instance with OPT=10, which bound is actually justified?",
      "options": [
        "ALG≥13",
        "ALG≤11",
        "ALG≤13",
        "ALG=13"
      ],
      "answer": 2,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 2,
      "readingLabel": "Worked example and its approximation accounting",
      "teaching": {
        "summary": "The additive two bins remain in the finite-instance guarantee. Substitution gives at most 13 bins, or a ratio bound 1.3 on this instance; it does not prove a 1.1 absolute ratio. As OPT grows, the additive term divided by OPT vanishes, which is why this is an asymptotic statement.",
        "steps": [
          "Substitute OPT=10 into the full displayed guarantee.",
          "Compute 1.1·10+2=13.",
          "Divide by OPT only after retaining the additive term."
        ],
        "distractors": [
          "The displayed inequality gives an upper bound, not a lower bound.",
          "Eleven incorrectly discards the additive two bins.",
          "Correct: thirteen is the guaranteed upper bound for this instance.",
          "An upper bound need not be attained by the algorithm."
        ],
        "takeaway": "An additive constant can dominate approximation behavior on small optima.",
        "followup": "How large must OPT be before this guarantee implies ALG/OPT≤1.2?",
        "tex": "\\frac{\\mathrm{ALG}}{\\mathrm{OPT}}\\le1.1+\\frac2{\\mathrm{OPT}}."
      }
    },
    {
      "id": "foundation-bin-scheme-2",
      "topic": "core-bin-scheme",
      "question": "After large items are packed, insert items of size at most ε greedily. If all bins except possibly the last have load greater than 1−ε, which general volume bound is valid for B bins and total volume V?",
      "options": [
        "B≤(1−ε)V",
        "B=ceil(V)",
        "B≤V",
        "B≤V/(1−ε)+1"
      ],
      "answer": 3,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 3,
      "readingLabel": "Proof at the board",
      "teaching": {
        "summary": "A new small item fails to fit in an earlier bin only when that bin leaves less than the item’s size free; its load is therefore above 1−ε. At most one final bin lacks this fullness property. Summing loads of the other B−1 bins gives the bound, while their exact number can depend on the item arrangement.",
        "steps": [
          "Use the small-item upper bound to establish fullness of each closed bin.",
          "Sum to obtain (B−1)(1−ε)<V whenever B>1.",
          "Rearrange and allow the harmless weak upper bound shown."
        ],
        "distractors": [
          "Multiplying by 1−ε makes an invalid smaller upper estimate.",
          "Volume alone does not characterize a packing because items cannot be split arbitrarily.",
          "Unit capacity gives B≥V as a lower bound, not this upper bound.",
          "Correct: charge B−1 sufficiently full bins to total volume."
        ],
        "takeaway": "State which exceptional bin creates the additive term.",
        "followup": "What changes if small items are allowed size greater than ε?",
        "tex": "(B-1)(1-\\varepsilon)<V\\quad\\Rightarrow\\quad B\\le V/(1-\\varepsilon)+1."
      }
    },
    {
      "id": "foundation-bin-scheme-3",
      "topic": "core-bin-scheme",
      "question": "Linear grouping rounds some large item sizes upward. Why is feasibility of a packing of rounded items easy to transfer back to the represented original items?",
      "options": [
        "Original items are no larger than their rounded representatives",
        "Upward rounding never changes the optimum",
        "All bins become completely full",
        "The number of items falls to one"
      ],
      "answer": 0,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 3,
      "readingLabel": "Proof at the board",
      "teaching": {
        "summary": "Replacing a rounded item by a no-larger original cannot increase any bin load, so the same grouping of items remains feasible. This proves only the transfer of a rounded solution back to the original input. Bounding how many bins the rounded instance needs is a different argument, using grouping shifts and separate treatment of the exceptional group.",
        "steps": [
          "Check the size comparison for each original and its rounded representative.",
          "Apply that comparison separately inside each bin’s capacity inequality.",
          "Keep the cost comparison to the original optimum as an additional proof obligation."
        ],
        "distractors": [
          "Correct: a coordinatewise decrease preserves each bin’s capacity constraint.",
          "Upward rounding can increase the optimum, so grouping analysis is still needed.",
          "Feasibility does not require every bin to be full.",
          "Grouping reduces the number of types, not the item count to one."
        ],
        "takeaway": "Feasibility transfer and optimum comparison are distinct directions of a rounding proof.",
        "followup": "Which implication reverses if sizes are rounded downward?",
        "tex": ""
      }
    },
    {
      "id": "foundation-sat-random-1",
      "topic": "core-sat-random",
      "question": "A clause of weight 16 has four distinct literals on different variables and contains no complementary pair. Under independent fair truth assignments, what is its expected contribution?",
      "options": [
        "14",
        "15",
        "8",
        "12"
      ],
      "answer": 1,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 2,
      "readingLabel": "Worked example and its approximation accounting",
      "teaching": {
        "summary": "Only the one truth pattern falsifying all four literals makes the clause fail. Its failure probability is 1/16, so the weight-16 clause contributes 16·15/16=15 in expectation. Clause indicators may be dependent across clauses; their weighted expectations can still be summed by linearity.",
        "steps": [
          "Each of the four literals is false independently with probability one half.",
          "Multiply to get clause failure probability (1/2)^4=1/16.",
          "Multiply satisfaction probability 15/16 by weight 16."
        ],
        "distractors": [
          "Fourteen uses the three-literal satisfaction probability.",
          "Correct: a four-literal clause has expected weighted contribution fifteen.",
          "Eight uses the one-literal satisfaction probability.",
          "Twelve uses the two-literal satisfaction probability."
        ],
        "takeaway": "Literal independence is used inside a clause; linearity sums clauses without inter-clause independence.",
        "followup": "What changes if the clause contains both x and its negation?",
        "tex": "\\mathbb E[w_C\\mathbf1_{C\\text{ satisfied}}]=w_C(1-2^{-|C|})."
      }
    },
    {
      "id": "foundation-sat-random-2",
      "topic": "core-sat-random",
      "question": "After fixing some variables, the two conditional expected objective values for the next fair bit are 12 and 18. Which deterministic choice preserves the current conditional expectation?",
      "options": [
        "Neither; randomization is essential",
        "Either, because they are equal",
        "The branch with value 18",
        "The branch with value 12"
      ],
      "answer": 2,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 3,
      "readingLabel": "Proof at the board",
      "teaching": {
        "summary": "Before fixing this bit the conditional expectation is the average (12+18)/2=15. The branch of value 18 is at least that average and therefore preserves the lower-bound invariant. Repeating this choice eventually produces a deterministic assignment whose actual objective is at least the starting expectation, provided the conditional expectations are computable.",
        "steps": [
          "Partition the current conditional distribution by the next bit.",
          "Apply the tower property to identify the current value as 15.",
          "Choose the branch valued 18 and continue with the same invariant."
        ],
        "distractors": [
          "The averaging identity itself supplies a deterministic nondecreasing choice.",
          "The stated values are unequal, and twelve is below their mean.",
          "Correct: eighteen is at least the current conditional expectation fifteen.",
          "Twelve decreases the maintained lower bound from fifteen."
        ],
        "takeaway": "Conditional expectation derandomizes an efficiently computable lower-bound invariant.",
        "followup": "For a biased next bit with probabilities 1/4 and 3/4, what averaging equation replaces the simple mean?",
        "tex": "\\mathbb E[W\\mid h]=\\tfrac12\\mathbb E[W\\mid h,0]+\\tfrac12\\mathbb E[W\\mid h,1]."
      }
    },
    {
      "id": "foundation-sat-random-3",
      "topic": "core-sat-random",
      "question": "A fair assignment is applied to the written clause (x∨x). What is its satisfaction probability?",
      "options": [
        "1/4, because both copies must be true",
        "3/4, because two literals appear",
        "1, because repetition removes failure",
        "1/2, because the two literal events coincide"
      ],
      "answer": 3,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 5,
      "readingLabel": "Limits and changed assumptions",
      "teaching": {
        "summary": "The clause is equivalent to the single literal x. Repeating the same variable does not create independent literal events, so the distinct-variable formula 1−2^−k cannot use the written length two here. Simplifying repetitions before applying the standard clause calculation makes the hypothesis explicit.",
        "steps": [
          "Rewrite x∨x as x by Boolean idempotence.",
          "Observe that both copies are false on exactly the same half of assignments.",
          "Apply the one-distinct-literal probability one half."
        ],
        "distractors": [
          "OR needs at least one true copy, and both copies already coincide.",
          "Three quarters treats repeated copies as independent events.",
          "Repetition is not a complementary literal pair and does not make a tautology.",
          "Correct: the clause is true exactly when x is true."
        ],
        "takeaway": "Count independent distinct variables, not repeated syntax.",
        "followup": "Compare this clause with (x∨¬x) and identify why that case is always satisfied.",
        "tex": ""
      }
    },
    {
      "id": "foundation-sat-lp-1",
      "topic": "core-sat-lp",
      "question": "For the positive clause x∨y, independently round x true with probability 0.2 and y true with probability 0.3. If its LP clause value is z=0.5, what is satisfaction probability divided by z?",
      "options": [
        "0.88",
        "1.12",
        "0.44",
        "0.5"
      ],
      "answer": 0,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 2,
      "readingLabel": "Worked example and its approximation accounting",
      "teaching": {
        "summary": "Both literals fail with probability 0.8·0.7=0.56, so the actual success probability is 0.44. Dividing by the fractional clause value 0.5 gives 0.88. The LP clause value is a benchmark, not itself a probability produced by independent rounding.",
        "steps": [
          "Compute failure using independence across the two variables.",
          "Subtract from one to obtain success probability 0.44.",
          "Normalize by the LP contribution z=0.5 to get 0.88."
        ],
        "distractors": [
          "Correct: 0.44/0.5=0.88.",
          "This reverses or miscomputes the normalization.",
          "This is the unnormalized satisfaction probability rather than the requested ratio.",
          "The LP value is a benchmark and is not the requested normalized success."
        ],
        "takeaway": "Compare rounded expectation with the fractional objective term by term.",
        "followup": "How does the failure product change if the clause is x∨¬y?",
        "tex": "\\frac{1-(1-0.2)(1-0.3)}{0.5}=0.88."
      }
    },
    {
      "id": "foundation-sat-lp-2",
      "topic": "core-sat-lp",
      "question": "For a unit clause with LP value z=1, fair assignment satisfies it with probability 1/2 and LP-marginal rounding with probability 1. What exact satisfaction probability does their equal mixture give for this clause?",
      "options": [
        "1",
        "3/4",
        "1/2",
        "2/3"
      ],
      "answer": 1,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 3,
      "readingLabel": "Proof at the board",
      "teaching": {
        "summary": "An equal mixture chooses one of the two assignment procedures with probability one half. Its clause contribution is therefore the average of their expectations, namely 3/4. This clause calculation is part of an analysis that must hold for every clause length; checking only unit clauses does not by itself prove the complete MAX-SAT ratio.",
        "steps": [
          "Write the mixture expectation as half of each procedure’s expectation.",
          "Calculate (1/2)(1/2)+(1/2)(1)=3/4.",
          "Verify other clause lengths separately before summing weighted contributions."
        ],
        "distractors": [
          "One would require always using the LP branch in this example.",
          "Correct: the mixture expectation is three quarters.",
          "One half ignores the better LP-rounding branch.",
          "Two thirds is not the expectation of this specified equal mixture."
        ],
        "takeaway": "A mixture averages guarantees; taking the better realized solution can only improve that average.",
        "followup": "Why can the better of two produced assignments be used instead of explicitly sampling which output to keep?",
        "tex": "\\mathbb E[W_{\\mathrm{mix}}]=\\tfrac12\\mathbb E[W_{\\mathrm{fair}}]+\\tfrac12\\mathbb E[W_{\\mathrm{LP}}]."
      }
    },
    {
      "id": "foundation-sat-lp-3",
      "topic": "core-sat-lp",
      "question": "A clause contains ¬x and y. LP truth marginals are x=0.8, y=0.1. Under independent marginal rounding, which clause-failure probability is correct?",
      "options": [
        "0.8·0.1=0.08",
        "0.2·0.1=0.02",
        "0.8·0.9=0.72",
        "0.2·0.9=0.18"
      ],
      "answer": 2,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 5,
      "readingLabel": "Limits and changed assumptions",
      "teaching": {
        "summary": "The literal ¬x is false exactly when x is true, with probability 0.8; y is false with probability 0.9. Different variables are rounded independently, giving failure 0.72 and success 0.28. Literal polarity must be translated before using the generic product of failure probabilities.",
        "steps": [
          "Translate the negated literal’s failure event into x=true.",
          "Translate the positive literal’s failure event into y=false.",
          "Multiply 0.8 and 0.9, using independence across x and y."
        ],
        "distractors": [
          "This uses the probability that y is true rather than false.",
          "Both factors describe the wrong literal events for simultaneous failure.",
          "Correct: both factors describe literal falsity, not variable truth uniformly.",
          "This uses the probability that ¬x is true in a failure product."
        ],
        "takeaway": "Write truth and falsity marginals for each literal before applying AM–GM or a product bound.",
        "followup": "What happens to this computation if both written literals use the same variable?",
        "tex": ""
      }
    },
    {
      "id": "foundation-sdp-cut-1",
      "topic": "core-sdp-cut",
      "question": "Two unit vectors have angle π/3. Under random-hyperplane rounding, what are their separation probability and SDP edge contribution (1−cos θ)/2?",
      "options": [
        "1/3 and 1/2",
        "1/2 and 1/3",
        "1/3 and 1/4",
        "1/4 and 1/3"
      ],
      "answer": 2,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 2,
      "readingLabel": "Worked example and its approximation accounting",
      "teaching": {
        "summary": "Angular separation gives probability θ/π=1/3. Since cos(π/3)=1/2, the relaxed edge contribution is (1−1/2)/2=1/4. They are different quantities; the approximation proof compares their ratio uniformly over all possible angles rather than identifying them.",
        "steps": [
          "Use rotational symmetry to evaluate the cut probability as one third.",
          "Evaluate the cosine-based relaxation term as one quarter.",
          "Remember that a favorable ratio on this angle is not the worst-case algorithm factor."
        ],
        "distractors": [
          "The second entry uses the orthogonal-vector contribution, not this angle.",
          "Neither stated quantity matches the two formulas at angle π/3.",
          "Correct: hyperplane probability one third and SDP contribution one quarter.",
          "This exchanges the probability and relaxation contribution."
        ],
        "takeaway": "Compute the rounded event probability and relaxation value separately.",
        "followup": "Why can the edgewise ratio exceed one at this angle without proving a greater-than-one approximation factor?",
        "tex": "\\Pr[\\text{separate}]=\\theta/\\pi,\\qquad\\mathrm{SDP}_e=(1-\\cos\\theta)/2."
      }
    },
    {
      "id": "foundation-sdp-cut-2",
      "topic": "core-sdp-cut",
      "question": "A matrix proposed as the Gram matrix of two unit vectors is [[1,2],[2,1]]. Why is it infeasible for the SDP?",
      "options": [
        "Every feasible Gram matrix must have rank one",
        "Its diagonal is not one",
        "Its off-diagonal is nonzero",
        "It has eigenvalue −1, so it is not positive semidefinite"
      ],
      "answer": 3,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 2,
      "readingLabel": "Worked example and its approximation accounting",
      "teaching": {
        "summary": "Unit diagonal is necessary but not sufficient. The vector (1,−1) has quadratic form −2 under this matrix, equivalently an eigenvalue −1, so the matrix is not PSD. Also, two unit vectors cannot have inner product two by Cauchy–Schwarz. The SDP relaxes the rank-one sign constraint but retains PSD feasibility.",
        "steps": [
          "Check the diagonal; it passes the unit-norm test.",
          "Evaluate X on the direction (1,−1), obtaining a negative quadratic form.",
          "Reject PSD feasibility independently of any rounding procedure."
        ],
        "distractors": [
          "Removing the rank-one restriction is precisely part of the relaxation.",
          "Both diagonal entries equal one, so this test actually passes.",
          "Unit vectors can have nonzero inner product in feasible Gram matrices.",
          "Correct: a negative eigenvalue violates the defining PSD constraint."
        ],
        "takeaway": "A numerical or symbolic candidate must satisfy every relaxation constraint before its objective is meaningful.",
        "followup": "Repair the off-diagonal value to the largest feasible value and describe the corresponding two vectors.",
        "tex": "(1,-1)X(1,-1)^\\top=-2<0."
      }
    },
    {
      "id": "foundation-sdp-cut-3",
      "topic": "core-sdp-cut",
      "question": "An edgewise proof has pₑ≥αsₑ, then multiplies by edge weights and sums. What goes wrong if an edge weight is negative?",
      "options": [
        "The negative weight reverses that edgewise inequality",
        "The hyperplane is no longer random",
        "The Gram representation disappears",
        "Nothing; multiplication always preserves ≥"
      ],
      "answer": 0,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 5,
      "readingLabel": "Limits and changed assumptions",
      "teaching": {
        "summary": "The angular probability calculation and Gram representation still make sense. The failure is in turning a lower probability comparison into a lower weighted-objective comparison: multiplying by a negative coefficient reverses the inequality. Therefore the standard summation proof requires nonnegative edge weights or a separate treatment of negative ones.",
        "steps": [
          "Identify exactly which line multiplies the probability comparison by wₑ.",
          "Use elementary order rules when wₑ<0.",
          "Keep the nonnegative-weight hypothesis attached to the approximation theorem."
        ],
        "distractors": [
          "Correct: the edgewise lower bound no longer gives the needed weighted lower bound.",
          "Changing an objective weight does not stop the chosen hyperplane from being random.",
          "The same unit-vector Gram representation can remain well defined.",
          "Order reverses when multiplying an inequality by a negative number."
        ],
        "takeaway": "Check sign hypotheses before summing local approximation inequalities.",
        "followup": "Give numerical p,s,α,w with p≥αs but wp≤wαs when w<0.",
        "tex": ""
      }
    },
    {
      "id": "foundation-color-sdp-1",
      "topic": "core-color-sdp",
      "question": "An edge’s vector angle is at least 2π/3. With three independent random hyperplanes, what is the maximum probability its endpoints get the same three-bit sign label?",
      "options": [
        "1/9",
        "1/27",
        "1/8",
        "1/3"
      ],
      "answer": 1,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 2,
      "readingLabel": "Worked example and its approximation accounting",
      "teaching": {
        "summary": "One hyperplane fails to separate the endpoints with probability at most 1/3. Matching all three sign bits requires three such failures, and the hyperplanes are independent, so the probability is at most (1/3)^3. The labels use at most 2³=8 colors, but the count of labels is not the edge-collision probability.",
        "steps": [
          "Use the angle lower bound to obtain separation probability at least two thirds.",
          "Complement to get same-sign probability at most one third per plane.",
          "Multiply the independent per-plane collision bounds for the three-bit labels."
        ],
        "distractors": [
          "One ninth uses only two independent planes.",
          "Correct: three independent collisions cost at most one twenty-seventh.",
          "One eighth is the reciprocal number of labels, not this geometry-based collision bound.",
          "One third is the bound for only one hyperplane."
        ],
        "takeaway": "The rounding distribution is not a uniform independent color choice per vertex.",
        "followup": "How many hyperplanes make the expected number of monochromatic edges at most n/8 in a graph with maximum degree Δ?",
        "tex": "\\Pr[\\text{same label on an edge}]\\le3^{-t}."
      }
    },
    {
      "id": "foundation-color-sdp-2",
      "topic": "core-color-sdp",
      "question": "Let a=log₃2. Balancing the color bounds n/σ and σᵃ requires which choice of σ?",
      "options": [
        "n^(1−a)",
        "n/2",
        "n^(1/(1+a))",
        "n^a"
      ],
      "answer": 2,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 3,
      "readingLabel": "Proof at the board",
      "teaching": {
        "summary": "Set n/σ=σᵃ and multiply by σ to obtain n=σ^(1+a). Thus σ=n^(1/(1+a)), and the balanced color exponent is a/(1+a)=log₆2≈0.38685. The exponent comes from balancing two algorithmic regimes, not from simply quoting the one-plane separation probability.",
        "steps": [
          "Equate the two competing upper bounds.",
          "Solve σ^(1+a)=n for the threshold.",
          "Substitute back to identify the shared cost n^(a/(1+a))."
        ],
        "distractors": [
          "Subtracting exponents does not solve this product equation.",
          "A fixed fraction of n does not balance n/σ with a positive power of σ.",
          "Correct: this choice equalizes the high-degree and low-degree costs.",
          "Choosing n^a generally leaves the two terms with different exponents."
        ],
        "takeaway": "Derive balancing exponents from an equation and verify by substitution.",
        "followup": "What extra factor appears when a constant-fraction semicoloring is repeated to color all vertices?",
        "tex": "\\sigma=n^{1/(1+a)},\\qquad n/\\sigma=n^{a/(1+a)}."
      }
    },
    {
      "id": "foundation-color-sdp-3",
      "topic": "core-color-sdp",
      "question": "A semicoloring step properly colors a constant fraction of remaining vertices. Why use fresh color palettes on different recursive rounds?",
      "options": [
        "Every round has no edges",
        "The SDP requires all color names to be different",
        "The previously colored subgraph stops being proper",
        "Edges between rounds might connect vertices given the same reused color"
      ],
      "answer": 3,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 5,
      "readingLabel": "Limits and changed assumptions",
      "teaching": {
        "summary": "Properness within each selected subset does not control edges joining subsets colored in different rounds. Reusing a palette can make such an edge monochromatic. Fresh palettes prevent cross-round conflicts, while the geometric decrease in remaining vertices requires O(log n) rounds and accounts for the logarithmic overhead.",
        "steps": [
          "Distinguish edges internal to one round from edges between rounds.",
          "Note that the semicoloring guarantee addresses the former only.",
          "Assign disjoint palettes to make cross-round endpoint colors automatically different."
        ],
        "distractors": [
          "The rounding step does not make all graph edges disappear.",
          "The palette rule is an integral coloring repair, not a PSD matrix constraint.",
          "An already proper induced coloring remains proper internally.",
          "Correct: the missing constraint concerns edges between separately colored subsets."
        ],
        "takeaway": "A partial-solution guarantee must be composed with a proof controlling interactions between pieces.",
        "followup": "How would you bound the total color count if each round uses at most K colors and removes at least half the remaining vertices?",
        "tex": ""
      }
    },
    {
      "id": "foundation-gaussian-color-1",
      "topic": "core-gaussian-color",
      "question": "Adjacent unit vectors have Gaussian projections Z₁,Z₂ with correlation −1/2. What is Var(Z₁+Z₂)?",
      "options": [
        "1",
        "2",
        "3",
        "0"
      ],
      "answer": 0,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 2,
      "readingLabel": "Worked example and its approximation accounting",
      "teaching": {
        "summary": "Each projection has variance one. The sum variance is 1+1+2(−1/2)=1. Consequently, simultaneous exceedance of a positive threshold t implies a sum exceeding 2t with this small variance, giving a useful joint-tail estimate; treating the projections as independent would lose the negative correlation.",
        "steps": [
          "Write variance of a sum with the covariance term included.",
          "Use covariance equal to correlation because both variances are one.",
          "Compute 2−1=1 and apply the sum-tail comparison if needed."
        ],
        "distractors": [
          "Correct: the negative covariance lowers sum variance to one.",
          "Two drops the covariance and treats the projections as uncorrelated.",
          "Three has the wrong sign for the covariance contribution.",
          "Perfect cancellation would require correlation minus one, not minus one half."
        ],
        "takeaway": "The edge constraint helps through a joint Gaussian tail, not merely marginal survival probabilities.",
        "followup": "Why does Z₁≥t and Z₂≥t imply an event for Z₁+Z₂ that is easier to bound?",
        "tex": "\\operatorname{Var}(Z_1+Z_2)=2+2\\rho=1."
      }
    },
    {
      "id": "foundation-gaussian-color-2",
      "topic": "core-gaussian-color",
      "question": "A Gaussian selection has expected retained vertices 20 and expected retained edges 6. Deleting at most one endpoint per surviving edge guarantees what expected independent-set size?",
      "options": [
        "At most 6",
        "At least 14",
        "Exactly 14",
        "At least 20"
      ],
      "answer": 1,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 2,
      "readingLabel": "Worked example and its approximation accounting",
      "teaching": {
        "summary": "For every selected graph S, processing surviving edges and deleting one endpoint when needed leaves an independent set of size at least |S|−e(S). Taking expectations gives at least twenty minus six, fourteen, without requiring independence between the vertex and edge counts. The bound can be loose if one deletion removes many edges.",
        "steps": [
          "Prove the pointwise repair inequality before averaging.",
          "Use linearity of expectation on |S|−e(S).",
          "Substitute the two expectations to obtain a lower bound of fourteen."
        ],
        "distractors": [
          "Six counts expected retained edges, not a maximum independent-set size.",
          "Correct: alteration yields an expected lower bound of fourteen.",
          "A lower bound need not be exact because repair can remove fewer than six vertices.",
          "The retained set can contain edges, so not all twenty expected vertices are guaranteed to survive."
        ],
        "takeaway": "Alteration arguments combine dependent quantities through a pointwise inequality and linearity.",
        "followup": "Explain why the same lower bound remains valid when all selections use one shared Gaussian direction.",
        "tex": "\\mathbb E|I|\\ge\\mathbb E|S|-\\mathbb E e(S)=14."
      }
    },
    {
      "id": "foundation-gaussian-color-3",
      "topic": "core-gaussian-color",
      "question": "Why is it generally wrong to replace the adjacent-pair selection probability in Gaussian-vector rounding by q², where q is one vertex’s selection probability?",
      "options": [
        "Marginal survival is undefined",
        "All vertices have different marginal laws",
        "The common Gaussian direction correlates the two projection events",
        "Every adjacent pair is selected with probability one"
      ],
      "answer": 2,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 5,
      "readingLabel": "Limits and changed assumptions",
      "teaching": {
        "summary": "All unit-vector projections can have the same standard normal marginal while their joint laws depend on vector inner products. A common Gaussian direction makes neighboring selection events correlated, and the negative edge correlation is precisely what suppresses joint survival. The product q² would require independence, not equal marginals.",
        "steps": [
          "Identify the common random Gaussian vector used for both endpoints.",
          "Compute their projection covariance from the two unit vectors’ inner product.",
          "Use the joint Gaussian law or a sum-tail argument, rather than multiplying marginals."
        ],
        "distractors": [
          "The marginal is well defined; the difficulty is the joint event.",
          "Unit-vector projections have the same standard normal marginal in this construction.",
          "Correct: shared randomness and nonzero inner product create dependence.",
          "A positive threshold does not force every adjacent pair to survive."
        ],
        "takeaway": "Equal marginal distributions do not imply independent events.",
        "followup": "What inner-product condition makes two Gaussian projections independent, and why is it different from the promised negative edge correlation?",
        "tex": ""
      }
    },
    {
      "id": "foundation-dual-cover-1",
      "topic": "core-dual-cover",
      "question": "A primal–dual set-cover solution costs 36 and a feasible dual has value 12. If each element is charged at most f=3 times through selected tight sets, what is the strongest ratio certified by this frequency accounting?",
      "options": [
        "12",
        "1",
        "2",
        "3"
      ],
      "answer": 3,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 3,
      "readingLabel": "Proof at the board",
      "teaching": {
        "summary": "Selected tight sets have costs equal to sums of the element duals they contain. Summing their costs charges any element at most f times, so cost≤3·12=36. Weak duality gives dual value≤OPT, completing the 3-approximation comparison; equality with this dual does not show the primal is optimal.",
        "steps": [
          "Replace each selected tight set’s cost by its sum of contained dual variables.",
          "Bound each element’s multiplicity by three.",
          "Use weak duality to compare twelve with the integral optimum."
        ],
        "distractors": [
          "Twelve is the dual objective value, not a dimensionless approximation factor.",
          "The solution cost can be three times the exhibited lower bound, so optimality is not certified.",
          "The stated frequency bound is three, not two.",
          "Correct: tightness, bounded frequency, and weak duality certify factor three."
        ],
        "takeaway": "An approximation factor is the maximum charging multiplicity, not the dual value itself.",
        "followup": "Which assumption would you need to improve the same argument from factor three to factor two?",
        "tex": "\\operatorname{cost}(\\mathcal C)=\\sum_e y_e\\,m_e\\le f\\sum_e y_e\\le f\\mathrm{OPT}."
      }
    },
    {
      "id": "foundation-dual-cover-2",
      "topic": "core-dual-cover",
      "question": "For the standard frequency bound in primal–dual set cover, f is which quantity?",
      "options": [
        "The largest number of sets containing one element",
        "The largest cardinality of one set",
        "The total number of elements",
        "The minimum set cost"
      ],
      "answer": 0,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 3,
      "readingLabel": "Proof at the board",
      "teaching": {
        "summary": "The proof groups selected tight-set costs by element dual variables. An element’s dual can be charged once for each selected set containing that element, so the relevant worst-case parameter is its incidence frequency. Maximum set cardinality instead bounds a different direction of the incidence relation and is not the parameter in this charging step.",
        "steps": [
          "Write the cost sum over selected tight sets.",
          "Exchange summations so each element dual carries a multiplicity.",
          "Bound that multiplicity by the number of available sets containing the element."
        ],
        "distractors": [
          "Correct: element incidence frequency limits how often the same dual mass is counted.",
          "Set cardinality counts elements per set, the opposite direction of incidence.",
          "Total universe size gives only a crude different parameter, not the stated frequency.",
          "Minimum cost does not bound how many selected sets charge an element."
        ],
        "takeaway": "Read a charging factor from the index that survives after exchanging sums.",
        "followup": "Build a system with one huge set but every element in only two sets, and identify its f bound.",
        "tex": ""
      }
    },
    {
      "id": "foundation-dual-cover-3",
      "topic": "core-dual-cover",
      "question": "A set is selected before it is tight, and the proof writes its cost as the sum of its element dual values. What is missing?",
      "options": [
        "Only a running-time estimate",
        "An equality justified by tightness or a replacement cost bound",
        "A choice of random seed",
        "A proof that all dual variables are one"
      ],
      "answer": 1,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 5,
      "readingLabel": "Limits and changed assumptions",
      "teaching": {
        "summary": "Dual feasibility provides sum of contained duals≤set cost, a lower bound on that cost. The approximation analysis needs an upper bound on selected cost in terms of dual mass. Tightness supplies equality; selecting a slack set removes that justification unless a separate bounded-slack argument is established.",
        "steps": [
          "State the dual constraint in its correct direction.",
          "Notice that feasibility alone cannot upper-bound a selected set’s cost by contained dual mass.",
          "Require tightness or prove the exact replacement inequality the charging step needs."
        ],
        "distractors": [
          "The broken step is an objective comparison even if the algorithm is fast.",
          "Correct: a slack constraint supplies the wrong inequality direction for that substitution.",
          "Randomness does not repair the missing cost equality.",
          "Dual variables need not equal one or be integral."
        ],
        "takeaway": "A lower-bound certificate does not automatically pay for arbitrary primal choices.",
        "followup": "Can approximate tightness with cost≤c times contained dual mass yield a modified approximation factor?",
        "tex": ""
      }
    },
    {
      "id": "foundation-dual-path-1",
      "topic": "core-dual-path",
      "question": "A selected s–t subgraph is the triangle with edge costs 1,1,2, where the two unit edges form an s–t path. Removing the cost-2 edge preserves connectivity. What does this illustrate about a growth-based algorithm’s cost proof?",
      "options": [
        "All selected edges must remain forever",
        "Feasibility alone certifies optimum",
        "Cleanup can remove redundant paid edges before charging the final path",
        "Reverse deletion always makes every graph bipartite"
      ],
      "answer": 2,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 3,
      "readingLabel": "Proof at the board",
      "teaching": {
        "summary": "The selected subgraph is feasible both before and after removing the direct edge, but its cost drops from four to two. A shortest-path primal–dual analysis must therefore charge the cleaned final path rather than indiscriminately count every edge that became selected. This example illustrates redundancy, not a claim about which edges a particular growth schedule selects.",
        "steps": [
          "Check that the two unit edges already connect s to t.",
          "Compare selected-subgraph costs before and after deleting the redundant direct edge.",
          "Distinguish the algorithm’s growth history from the object used in its final charging proof."
        ],
        "distractors": [
          "Redundant edges can be removed while keeping the required path.",
          "Feasible subgraphs can have widely different costs.",
          "Correct: pruning changes what cost must be justified by the dual.",
          "The point is preserving one path, not a general bipartiteness algorithm."
        ],
        "takeaway": "Prove the guarantee for the final cleaned solution, not just the collection of growth events.",
        "followup": "Why can an inclusion-minimal connected s–t subgraph with nonnegative edge costs be taken to be a simple path?",
        "tex": ""
      }
    },
    {
      "id": "foundation-dual-path-2",
      "topic": "core-dual-path",
      "question": "A shortest-path dual certificate has value 7, and a feasible final path of cost 7 is constructed. What follows by weak duality?",
      "options": [
        "OPT≤0",
        "Only a factor-2 guarantee",
        "The graph has exactly seven edges",
        "OPT=7 and the path is optimal"
      ],
      "answer": 3,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 2,
      "readingLabel": "Worked example and its approximation accounting",
      "teaching": {
        "summary": "A feasible path gives OPT≤7 for this minimization problem. A feasible dual of value seven gives 7≤OPT. The matching upper and lower bounds force equality. Unlike many approximation proofs, this case closes without a multiplicative loss, but only because both feasibility statements and the equality of objectives are established.",
        "steps": [
          "Use primal feasibility to upper-bound the optimum by the path cost.",
          "Use dual feasibility to lower-bound the optimum by the certificate value.",
          "Combine 7≤OPT≤7."
        ],
        "distractors": [
          "All stated costs support a positive optimum, not a nonpositive one.",
          "A factor-two statement is weaker than the exact equality proved here.",
          "Cost seven does not determine the number of graph edges.",
          "Correct: matching feasible primal and dual values certify exact optimality."
        ],
        "takeaway": "Matching primal and dual certificates prove equality only when both certificates are valid.",
        "followup": "If the path cost were ten and dual value seven, which approximation ratio would this pair certify?",
        "tex": "7\\le\\mathrm{OPT}\\le\\operatorname{cost}(P)=7."
      }
    },
    {
      "id": "foundation-dual-path-3",
      "topic": "core-dual-path",
      "question": "A proof counts all edges selected during dual growth, although reverse deletion later removes some. Why is that potentially the wrong object to analyze?",
      "options": [
        "The charging identity may rely on how the FINAL path crosses positive dual cuts",
        "Dual feasibility stops mattering",
        "Every connected graph is already a path",
        "Deleted edges still contribute to the returned path’s cost"
      ],
      "answer": 0,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 5,
      "readingLabel": "Limits and changed assumptions",
      "teaching": {
        "summary": "The final charging identity counts, for each dual cut, how many returned path edges cross it. Earlier selected edges can create redundancy or extra crossings that do not belong to the final path. Reverse deletion is therefore part of the mathematical structure supporting the cost comparison, not merely an optional implementation optimization.",
        "steps": [
          "Express the final path cost using its edge set.",
          "Exchange the edge and cut sums after using the appropriate tightness identities.",
          "Verify the crossing property for the pruned path rather than assuming it for all selected edges."
        ],
        "distractors": [
          "Correct: cleanup can be essential to the cut-crossing multiplicity needed in the proof.",
          "Dual feasibility still supplies the lower bound throughout the argument.",
          "A connected subgraph may contain branches and cycles.",
          "Returned cost counts retained edges; removed ones do not contribute."
        ],
        "takeaway": "When pruning appears in an algorithm, locate the exact proof property it establishes.",
        "followup": "How would a positive dual cut crossed repeatedly by the retained solution alter its cost accounting?",
        "tex": ""
      }
    },
    {
      "id": "foundation-steiner-1",
      "topic": "core-steiner",
      "question": "In a Steiner-forest moat-growth proof, an active contracted component has degree five in the pruned forest. Does that alone contradict the factor-two charging argument?",
      "options": [
        "Yes; forests have maximum degree two",
        "No; the proof bounds an aggregate degree sum, not each component separately",
        "No; degrees are never used",
        "Yes; every active component has degree at most two"
      ],
      "answer": 1,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 5,
      "readingLabel": "Limits and changed assumptions",
      "teaching": {
        "summary": "A forest can have a high-degree center, so degree five is not itself a contradiction. The moat-growth analysis controls the sum of crossings over active components using a global forest argument and properties of inactive components after pruning. Replacing that aggregate statement by an individual degree bound would make the proof false.",
        "steps": [
          "Recall that a star is a forest with arbitrarily large center degree.",
          "Identify the proof’s sum over active components during one growth interval.",
          "Use the pruning and inactivity conditions in the aggregate bound."
        ],
        "distractors": [
          "Forests are acyclic but need not have maximum degree two.",
          "Correct: aggregate forest charging permits some components to have larger degree.",
          "Degrees are central to the aggregate crossing calculation.",
          "An individual degree-two claim is false for branching demand structures."
        ],
        "takeaway": "Do not strengthen a summed combinatorial inequality into an unsupported pointwise one.",
        "followup": "Draw a star with five leaves and explain which degree statement survives for the whole tree.",
        "tex": ""
      }
    },
    {
      "id": "foundation-steiner-2",
      "topic": "core-steiner",
      "question": "Three active components each grow their dual at unit rate for time Δ=2. If the pruned-forest crossing lemma charges at most twice total dual growth, what is the smallest cost-charge upper bound supplied by the factor-two lemma for this interval?",
      "options": [
        "3",
        "6",
        "12",
        "18"
      ],
      "answer": 2,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 3,
      "readingLabel": "Proof at the board",
      "teaching": {
        "summary": "The dual objective grows by three active components times two time units, namely six. The aggregate forest lemma allows cost charge at most twice that increase, hence twelve. This local interval accounting is integrated over the entire growth process and then compared with OPT using dual feasibility.",
        "steps": [
          "Count active dual variables growing in the interval.",
          "Multiply count three by duration two to obtain dual increase six.",
          "Apply the factor-two aggregate crossing bound to obtain twelve."
        ],
        "distractors": [
          "Three omits the interval duration.",
          "Six is the dual increase before the crossing factor two.",
          "Correct: at most twice the dual increase six is twelve.",
          "Eighteen introduces an additional factor of three without justification."
        ],
        "takeaway": "A growth-interval proof must account for rate, duration, and crossing multiplicity separately.",
        "followup": "How do you combine consecutive intervals when the number of active components changes?",
        "tex": "\\Delta D=3\\cdot2=6,\\qquad\\Delta\\text{charge}\\le2\\Delta D=12."
      }
    },
    {
      "id": "foundation-steiner-3",
      "topic": "core-steiner",
      "question": "Which condition makes a component active in the generalized Steiner-forest growth algorithm?",
      "options": [
        "It has the largest number of vertices",
        "It contains any terminal at all",
        "It has odd degree",
        "It separates at least one required pair that is still disconnected"
      ],
      "answer": 3,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 3,
      "readingLabel": "Proof at the board",
      "teaching": {
        "summary": "Activity is defined by unmet connectivity requirements. A component can contain terminals yet be inactive if every required mate is already connected within it. Conversely, it becomes relevant to growth when a required pair is separated by its boundary. This definition is needed to justify both dual constraints and pruning behavior.",
        "steps": [
          "Inspect the specified list of demand pairs, rather than just a set of terminal vertices.",
          "Ask whether a component boundary separates a pair whose endpoints must be joined.",
          "Grow the dual only for components active under that separation requirement."
        ],
        "distractors": [
          "Component size does not determine which demands remain unsatisfied.",
          "Containing a terminal does not imply any unsatisfied demand crosses the boundary.",
          "Degree parity does not define activity in this algorithm.",
          "Correct: an unfulfilled separated demand pair makes its component active."
        ],
        "takeaway": "A primal–dual active set is determined by the problem’s actual demand constraints.",
        "followup": "Give a component containing two terminals that is nevertheless inactive.",
        "tex": ""
      }
    },
    {
      "id": "foundation-tree-metrics-1",
      "topic": "core-tree-metrics",
      "question": "Take a six-cycle with unit edge lengths. Delete one edge to form an MST path. For the endpoints of the deleted edge, what is tree distance divided by original graph distance?",
      "options": [
        "5",
        "6",
        "1",
        "2"
      ],
      "answer": 0,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 2,
      "readingLabel": "Worked example and its approximation accounting",
      "teaching": {
        "summary": "The original endpoints are adjacent, so their graph distance is one. In the MST path the only connecting route traverses the other five edges, giving stretch five. Extending the example to an n-cycle yields stretch n−1 for that pair and shows why simply choosing an MST is not the required expected logarithmic-distortion construction.",
        "steps": [
          "Identify the pair whose direct edge was deleted.",
          "Compute the unique tree route length as five.",
          "Divide by its original shortest-path distance one."
        ],
        "distractors": [
          "Correct: the pair’s distance increases from one to five.",
          "Six counts the whole original cycle rather than its five-edge tree path.",
          "The deleted pair no longer has its direct unit route in the tree.",
          "Two does not account for the full remaining path around the cycle."
        ],
        "takeaway": "A good spanning-tree cost does not imply small distortion for every pair.",
        "followup": "How does this example scale with n, and which expected-stretch claim does random embedding replace it with?",
        "tex": "d_T(u,v)/d_G(u,v)=(n-1)/1."
      }
    },
    {
      "id": "foundation-tree-metrics-2",
      "topic": "core-tree-metrics",
      "question": "A fixed benchmark uses two graph edges with distances 1 and 2 and cost coefficients 3 and 4. Each pair’s expected tree distance is at most three times its original distance. What is the strongest numerical upper bound on expected benchmark tree cost supplied by the stated factor-three expectation estimate?",
      "options": [
        "22",
        "33",
        "44",
        "11"
      ],
      "answer": 1,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 3,
      "readingLabel": "Proof at the board",
      "teaching": {
        "summary": "The original weighted cost is 3·1+4·2=11. Linearity lets the pairwise expected-stretch bound act on each fixed coefficient, giving expected tree cost at most 3·11=33. Distances of different pairs need not be independent, but the benchmark being charged must be fixed before the tree is sampled.",
        "steps": [
          "Compute the original benchmark’s weighted length eleven.",
          "Apply the factor-three expectation bound to each edge’s pair distance.",
          "Sum the two terms by linearity to obtain thirty-three."
        ],
        "distractors": [
          "Twenty-two applies stretch two instead of the stated three.",
          "Correct: expected cost is at most three times eleven.",
          "Forty-four has no support in the stated stretch factor.",
          "Eleven is the original benchmark value before applying stretch."
        ],
        "takeaway": "Pairwise expectation bounds sum for a fixed nonnegative weighted benchmark without independence.",
        "followup": "Why cannot the same line automatically replace a fixed benchmark by a maximum chosen after seeing the sampled tree?",
        "tex": "\\mathbb E\\sum_e a_ed_T(e)\\le3\\sum_e a_ed_G(e)=33."
      }
    },
    {
      "id": "foundation-tree-metrics-3",
      "topic": "core-tree-metrics",
      "question": "For concave nondecreasing capacity cost f(x)=√x with f(0)=0, two routed capacities 9 and 16 merge on one graph edge. Which comparison supports the buy-at-bulk transfer?",
      "options": [
        "f(25)=7",
        "f(25)≥f(9)+f(16)",
        "f(25)=5≤f(9)+f(16)=7",
        "f(25)=25≤7"
      ],
      "answer": 2,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 5,
      "readingLabel": "Limits and changed assumptions",
      "teaching": {
        "summary": "Merging the capacities costs √25=5, no more than the separate charges √9+√16=7. The transfer proof uses this subadditivity to ensure that overlap of tree-edge routes does not make a graph edge cost exceed the sum already charged to those routes. Concavity with f(0)=0 supplies the needed general inequality.",
        "steps": [
          "Add capacities before evaluating the shared-edge cost.",
          "Compute √25=5 and the separate total 3+4=7.",
          "Use the subadditive direction to compare merged cost with previously charged costs."
        ],
        "distractors": [
          "Seven is the separate-cost total, not the merged cost.",
          "The inequality direction would obstruct rather than support this transfer.",
          "Correct: merged capacity benefits from the concave cost.",
          "The cost is the square root, not the identity function."
        ],
        "takeaway": "State the capacity-cost assumption that makes shared routing affordable.",
        "followup": "Show why a convex cost f(x)=x² would reverse the useful behavior on this example.",
        "tex": "f(a+b)\\le f(a)+f(b)."
      }
    },
    {
      "id": "foundation-hardness-1",
      "topic": "core-hardness",
      "question": "A MAX gap reduction yields YES OPT≥0.9M and NO OPT≤0.63M. Under the convention ALG≥ρOPT, what strict condition guarantees separation by the output value?",
      "options": [
        "Every positive ρ",
        "ρ<0.7",
        "ρ>0.7",
        "ρ=0.63"
      ],
      "answer": 2,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 2,
      "readingLabel": "Worked example and its approximation accounting",
      "teaching": {
        "summary": "A YES output is at least 0.9ρM, whereas every feasible NO output is at most 0.63M. Strictly separating these ranges requires 0.9ρ>0.63, or ρ>0.7. Equality does not ensure a distinguishable threshold, so preserving strict inequalities matters in an inapproximability proof.",
        "steps": [
          "Write the guaranteed YES output lower bound in the stated ratio convention.",
          "Use feasibility to retain the NO optimum as an upper bound on every output.",
          "Solve 0.9ρ>0.63."
        ],
        "distractors": [
          "Small positive guarantees can fall entirely inside the NO range.",
          "The inequality is reversed; a weaker lower guarantee cannot force separation.",
          "Correct: the ratio must beat the NO-to-YES threshold 0.7.",
          "Choosing the NO fraction itself does not compare it with the YES completeness value."
        ],
        "takeaway": "Always derive the gap threshold in the ratio convention actually being used.",
        "followup": "How would you rewrite the condition under the convention ALG≥OPT/α with α≥1?",
        "tex": "\\rho\\cdot0.9>0.63\\quad\\Longleftrightarrow\\quad\\rho>0.7."
      }
    },
    {
      "id": "foundation-hardness-2",
      "topic": "core-hardness",
      "question": "A PCP verifier uses r=3 log₂n random bits and five queries. How many local tests are created when a gap-CSP reduction enumerates its random tapes?",
      "options": [
        "2^(3n)",
        "3n",
        "5n",
        "n³"
      ],
      "answer": 3,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 3,
      "readingLabel": "Proof at the board",
      "teaching": {
        "summary": "There is one test for each random tape, hence 2ʳ=n³ tests. Five queries keep each constraint’s arity constant, but do not reduce the number of random tapes to five. The reduction must impose all these tests on a single global assignment to proof positions to preserve soundness.",
        "steps": [
          "Count binary random tapes as two raised to the random-bit count.",
          "Substitute r=3 log₂n and simplify to n³.",
          "Keep constant query arity separate from the polynomial number of tests."
        ],
        "distractors": [
          "This would correspond to a linear rather than logarithmic number of random bits.",
          "Three n treats a logarithmic random-bit count as a multiplier.",
          "Five controls queries per test, not the number of tests.",
          "Correct: enumerating random tapes creates polynomially many, namely n cubed, tests."
        ],
        "takeaway": "Randomness controls test count; query complexity controls local constraint arity.",
        "followup": "Why would giving every test its own independent proof assignment destroy the gap reduction?",
        "tex": "2^r=2^{3\\log_2 n}=n^3."
      }
    },
    {
      "id": "foundation-hardness-3",
      "topic": "core-hardness",
      "question": "A parity-to-3SAT gadget gives four satisfied clauses for a satisfied parity constraint and three for an unsatisfied one. If at most half the parity constraints can be satisfied, what is the strongest clause-satisfaction fraction upper bound supplied by this gadget calculation?",
      "options": [
        "7/8",
        "1",
        "1/2",
        "3/4"
      ],
      "answer": 0,
      "depth": "application",
      "skill": "Identify and justify the decisive approximation step",
      "lectureSection": 3,
      "readingLabel": "Proof at the board",
      "teaching": {
        "summary": "The average gadget contributes at most half of four plus half of three, or 3.5 satisfied clauses out of four. The resulting fraction is 3.5/4=7/8. A complete hardness statement retains small completeness and soundness errors and proves that one global truth assignment induces these gadget values consistently.",
        "steps": [
          "Group parity constraints into satisfied and unsatisfied classes under a fixed assignment.",
          "Use the at-most-half hypothesis and the gadget’s two payoff values.",
          "Normalize the maximum average 3.5 by four clauses per gadget."
        ],
        "distractors": [
          "Correct: averaging gadget payoffs gives seven eighths.",
          "A positive fraction of parity violations prevents all gadget clauses being satisfied.",
          "One half is the parity satisfaction fraction, before the gadget baseline is added.",
          "Three quarters counts only the unsatisfied gadget value and ignores satisfied constraints."
        ],
        "takeaway": "A gadget’s baseline payoff shifts a gap; compute the new ratio rather than copying the source fraction.",
        "followup": "How does the calculation change if the parity soundness fraction is 1/2+η?",
        "tex": "\\frac{(1/2)4+(1/2)3}{4}=\\frac78."
      }
    },
    {
      "id": "foundation-euclidean-tsp-1",
      "topic": "core-euclidean-tsp",
      "question": "Each of n=10 points moves by at most δ=0.1. What uniform bound follows for the absolute change of any tour length?",
      "options": [
        "1",
        "2",
        "10",
        "0.1"
      ],
      "answer": 1,
      "depth": "application",
      "skill": "Audit a geometric PTAS invariant",
      "lectureSection": 2,
      "readingLabel": "Euclidean TSP: perturbation, interface and probability",
      "teaching": {
        "summary": "Each of ten edges changes by at most 2δ=0.2, giving 2nδ=2.",
        "steps": [
          "Bound each edge using the two endpoint movements.",
          "Sum over all n tour edges.",
          "Each of ten edges changes by at most 2δ=0.2, giving 2nδ=2."
        ],
        "distractors": [
          "This does not follow from the stated invariant. Each of ten edges changes by at most 2δ=0.2, giving 2nδ=2.",
          "Correct: Each of ten edges changes by at most 2δ=0.2, giving 2nδ=2.",
          "This does not follow from the stated invariant. Each of ten edges changes by at most 2δ=0.2, giving 2nδ=2.",
          "This does not follow from the stated invariant. Each of ten edges changes by at most 2δ=0.2, giving 2nδ=2."
        ],
        "takeaway": "A theorem name is not a substitute for its cost, connectivity or probability invariant.",
        "followup": "Does portal-respecting alone establish a PTAS?",
        "tex": "|\\ell(T)-\\ell(T')|\\le2n\\delta."
      }
    },
    {
      "id": "foundation-euclidean-tsp-2",
      "topic": "core-euclidean-tsp",
      "question": "Why does a Euclidean TSP square-DP state need an entry/exit pairing?",
      "options": [
        "The same used portals can have different internal connections",
        "Pairings remove the need for patching",
        "Pairings make the optimum known",
        "All tours cross every side once"
      ],
      "answer": 0,
      "depth": "application",
      "skill": "Audit a geometric PTAS invariant",
      "lectureSection": 3,
      "readingLabel": "Euclidean TSP: perturbation, interface and probability",
      "teaching": {
        "summary": "A boundary state must record portal occurrences with multiplicity and which entry is paired with which exit. Four boundary points can have identical used portals but different connections, so a portal subset alone is insufficient.",
        "steps": [
          "Fix the square and its used portal occurrences.",
          "Compare different pairings of the same four occurrences.",
          "A boundary state must record portal occurrences with multiplicity and which entry is paired with which exit. Four boundary points can have identical used portals but different connections, so a portal subset alone is insufficient."
        ],
        "distractors": [
          "Correct: A boundary state must record portal occurrences with multiplicity and which entry is paired with which exit. Four boundary points can have identical used portals but different connections, so a portal subset alone is insufficient.",
          "This does not follow from the stated invariant. A boundary state must record portal occurrences with multiplicity and which entry is paired with which exit. Four boundary points can have identical used portals but different connections, so a portal subset alone is insufficient.",
          "This does not follow from the stated invariant. A boundary state must record portal occurrences with multiplicity and which entry is paired with which exit. Four boundary points can have identical used portals but different connections, so a portal subset alone is insufficient.",
          "This does not follow from the stated invariant. A boundary state must record portal occurrences with multiplicity and which entry is paired with which exit. Four boundary points can have identical used portals but different connections, so a portal subset alone is insufficient."
        ],
        "takeaway": "A theorem name is not a substitute for its cost, connectivity or probability invariant.",
        "followup": "Why is a subset of boundary portals an insufficient DP state?",
        "tex": ""
      }
    },
    {
      "id": "foundation-euclidean-tsp-3",
      "topic": "core-euclidean-tsp",
      "question": "A dissection has expected extra cost ≤εOPT/2. What success probability follows for extra cost ≤εOPT?",
      "options": [
        "At least 1/2",
        "Exactly 1",
        "At most 1/n",
        "No bound at all"
      ],
      "answer": 0,
      "depth": "application",
      "skill": "Audit a geometric PTAS invariant",
      "lectureSection": 2,
      "readingLabel": "Euclidean TSP: perturbation, interface and probability",
      "teaching": {
        "summary": "The structural theorem is the hard geometric input. Random shift makes scale-specific patching and portal detours cheap in expectation. With expected overhead ≤ηOPT/2, Markov gives overhead ≤ηOPT with probability ≥1/2.",
        "steps": [
          "Let Δ be the nonnegative added length.",
          "Apply Markov at threshold εOPT.",
          "The structural theorem is the hard geometric input. Random shift makes scale-specific patching and portal detours cheap in expectation. With expected overhead ≤ηOPT/2, Markov gives overhead ≤ηOPT with probability ≥1/2."
        ],
        "distractors": [
          "Correct: The structural theorem is the hard geometric input. Random shift makes scale-specific patching and portal detours cheap in expectation. With expected overhead ≤ηOPT/2, Markov gives overhead ≤ηOPT with probability ≥1/2.",
          "This does not follow from the stated invariant. The structural theorem is the hard geometric input. Random shift makes scale-specific patching and portal detours cheap in expectation. With expected overhead ≤ηOPT/2, Markov gives overhead ≤ηOPT with probability ≥1/2.",
          "This does not follow from the stated invariant. The structural theorem is the hard geometric input. Random shift makes scale-specific patching and portal detours cheap in expectation. With expected overhead ≤ηOPT/2, Markov gives overhead ≤ηOPT with probability ≥1/2.",
          "This does not follow from the stated invariant. The structural theorem is the hard geometric input. Random shift makes scale-specific patching and portal detours cheap in expectation. With expected overhead ≤ηOPT/2, Markov gives overhead ≤ηOPT with probability ≥1/2."
        ],
        "takeaway": "A theorem name is not a substitute for its cost, connectivity or probability invariant.",
        "followup": "Does portal-respecting alone establish a PTAS?",
        "tex": ""
      }
    }
  ],
  "legacy": {
    "q1": {
      "unit": "core-knapsack",
      "lectureSection": 3,
      "readingLabel": "Related W–S §3.1 lecture: the FPTAS running-time requirement",
      "teaching": {
        "summary": "Both schemes preserve feasibility and approach the optimum as ε decreases. A PTAS permits an input-size exponent depending on 1/ε; an FPTAS requires a polynomial jointly in the input bit length and 1/ε. For example, n^(1/ε) is polynomial for every fixed ε but fails the joint requirement.",
        "steps": [
          "Separate the quality guarantee from the running-time guarantee.",
          "Compare n^(1/ε) with n³/ε as functions of both parameters.",
          "Check arithmetic bit lengths as well as the number of DP states."
        ],
        "distractors": [
          "An FPTAS approximates within the specified error and need not return OPT.",
          "Correct: joint polynomial dependence distinguishes fully polynomial schemes.",
          "Both PTAS and FPTAS guarantees require a feasible output.",
          "Dynamic programming is allowed; its state range and bit complexity determine whether the scheme is fully polynomial."
        ],
        "takeaway": "A fixed-accuracy polynomial algorithm need not remain polynomial when accuracy is part of the input.",
        "followup": "Explain why the exact capacity-indexed knapsack DP is pseudo-polynomial.",
        "tex": "T(n,\\varepsilon)=\\operatorname{poly}(n,1/\\varepsilon)\\quad\\text{for an FPTAS}."
      }
    },
    "q2": {
      "unit": "core-knapsack",
      "lectureSection": 1,
      "readingLabel": "Related lecture: minimization and maximization relaxation conventions",
      "teaching": {
        "summary": "Relaxation enlarges the feasible region. For minimization, the old feasible solutions remain available and new ones may improve the objective downward, so the LP optimum is a lower bound on integral OPT. This bound is useful only when paired with a feasible rounded solution and a proved upper comparison to its LP value.",
        "steps": [
          "Embed every integral feasible solution in the relaxed feasible set.",
          "Use that minimization over a superset cannot give a larger minimum.",
          "Keep the reverse upper-bound convention for maximization separate."
        ],
        "distractors": [
          "This is the wrong direction for a minimization relaxation.",
          "Correct: LP≤OPT because the relaxed feasible set contains the integral one.",
          "Equality requires integrality or an instance-specific argument and is not automatic.",
          "The feasible-set inclusion provides a definite objective comparison."
        ],
        "takeaway": "The direction of an LP bound is determined by the objective direction and feasible-set inclusion.",
        "followup": "For MAX-CUT, is the SDP optimum a lower or an upper bound on integral OPT?",
        "tex": "\\mathrm{LP}\\le\\mathrm{OPT}\\le\\operatorname{cost}(\\text{feasible rounded solution})."
      }
    },
    "q3": {
      "unit": "core-scheduling-scheme",
      "lectureSection": 3,
      "readingLabel": "Related W–S §3.2: load lower bounds; list scheduling is additional background",
      "teaching": {
        "summary": "If job j starts on a least-loaded machine at load S, every machine’s current load is at least S. The work already assigned is thus at least mS. Bounding that work by all jobs except j gives the displayed inequality; it is the step that actually uses the algorithm’s machine choice.",
        "steps": [
          "Fix the job whose completion is being analyzed and its start load S.",
          "Use the least-loaded choice to lower-bound every current machine load by S.",
          "Sum those m loads and compare with total work excluding j."
        ],
        "distractors": [
          "The job-size lower bound on OPT is true independently of the machine-selection rule.",
          "Correct: least-loaded choice makes mS no larger than previously assigned work.",
          "Every feasible schedule has cost at least OPT; this does not use least-loaded placement.",
          "This loose expression is not the crucial load inequality used in the proof."
        ],
        "takeaway": "Identify the precise line where an algorithmic choice enters the analysis.",
        "followup": "Derive S≤(total work−pⱼ)/m from the chosen answer.",
        "tex": "mS\\le\\sum_{i\\ne j}p_i."
      }
    },
    "q4": {
      "unit": "core-scheduling-scheme",
      "lectureSection": 3,
      "readingLabel": "Related W–S §3.2: averaging and the final-job overshoot",
      "teaching": {
        "summary": "The standard list-scheduling ratio is 2−1/m, giving 5/3 for three machines. It comes from C=S+pⱼ≤total/m+(1−1/m)pⱼ, followed by two distinct lower bounds on OPT: total work divided by m and the largest job. This is a list-scheduling guarantee, not the accuracy-parameter guarantee of the assigned PTAS.",
        "steps": [
          "Use least-loaded placement to bound the last job’s start.",
          "Separate the average-load term from the coefficient of its processing time.",
          "Substitute m=3 into 2−1/m."
        ],
        "distractors": [
          "Three halves is the m=2 standard bound, not the m=3 expression.",
          "Correct: 2−1/3=5/3.",
          "Four thirds is stronger than this general list-scheduling theorem provides.",
          "Two is a valid weaker bound, but it discards the refinement 1/m requested by the standard formula."
        ],
        "takeaway": "Two different OPT lower bounds can combine into one approximation factor.",
        "followup": "Why does the coefficient of pⱼ become 1−1/m rather than one?",
        "tex": "C_{\\max}\\le\\frac{\\sum_i p_i}{m}+(1-1/m)p_j\\le(2-1/m)\\mathrm{OPT}."
      }
    },
    "q5": {
      "unit": "core-scheduling-scheme",
      "lectureSection": 1,
      "readingLabel": "Related W–S §3.2: the original-volume lower bound",
      "teaching": {
        "summary": "The five processing times sum to 30. Any schedule on three machines has a maximum load at least its average load, 30/3=10. The bound is independent of how an algorithm orders jobs; it need not be attainable because indivisible jobs may prevent a perfectly balanced partition.",
        "steps": [
          "Add all processing requirements before considering assignments.",
          "Divide by the number of machines.",
          "Use maximum load≥average load for every feasible schedule."
        ],
        "distractors": [
          "Eight is the maximum-job lower bound, a different quantity.",
          "Nine is below the actual average load ten.",
          "Correct: total work thirty divided by three is ten.",
          "Twelve may arise in particular assignments but is not the volume average."
        ],
        "takeaway": "A lower bound can be valid without describing a realizable schedule.",
        "followup": "Can you partition these five jobs into three machine loads all at most ten?",
        "tex": "\\mathrm{OPT}\\ge\\max\\{\\max_jp_j,\\sum_jp_j/m\\}."
      }
    },
    "q6": {
      "unit": "core-bin-scheme",
      "lectureSection": 1,
      "readingLabel": "W–S §3.3: volume and additive-bin accounting",
      "teaching": {
        "summary": "Each unit-capacity bin holds total size at most one. Packing volume 11.2 therefore needs at least 11.2 bins in the fractional counting inequality, and integrality strengthens this to twelve. This lower bound is not an exact optimum formula: the arrangement of indivisible item sizes may require more bins.",
        "steps": [
          "Write B≥11.2 from total capacity B.",
          "Use B integer to round the lower bound upward.",
          "Avoid turning a necessary condition into a constructive upper bound."
        ],
        "distractors": [
          "OPT≥11 is true but weaker; the strongest immediate integer volume bound is twelve.",
          "Correct: ceiling the total volume gives twelve.",
          "Capacity volume provides a lower bound, not an upper bound.",
          "Equality would need a feasible twelve-bin packing and is not implied by volume alone."
        ],
        "takeaway": "Ceilings strengthen integral lower bounds, but do not prove attainability.",
        "followup": "Construct item sizes with integer total volume whose optimum needs strictly more bins than that total.",
        "tex": "\\mathrm{OPT}\\ge\\lceil\\sum_i a_i\\rceil=12."
      }
    },
    "q7": {
      "unit": "core-bin-scheme",
      "lectureSection": 5,
      "readingLabel": "W–S §3.3: absolute versus asymptotic guarantees",
      "teaching": {
        "summary": "The additive five bins prevent claiming an absolute ratio of 1.1 on every input. Dividing by OPT gives ALG/OPT≤1.1+5/OPT, whose excess term tends to zero as the optimum grows. This says nothing by itself about fully polynomial running time or a family of arbitrary accuracies.",
        "steps": [
          "Retain the additive term when writing the finite-instance guarantee.",
          "Divide the entire inequality by OPT.",
          "Interpret the limit for large OPT, rather than suppressing the term on small instances."
        ],
        "distractors": [
          "An absolute ratio would require ALG≤1.1OPT with no additive loss.",
          "Correct: the additive constant belongs to an asymptotic guarantee.",
          "An FPTAS includes an accuracy family and a joint polynomial-time condition not stated here.",
          "The inequality bounds an algorithmic solution; it is not an infeasibility witness."
        ],
        "takeaway": "The exact form of the guarantee matters more than its leading constant alone.",
        "followup": "For OPT=10, what ratio bound does this inequality actually give?",
        "tex": "\\mathrm{ALG}/\\mathrm{OPT}\\le1.1+5/\\mathrm{OPT}."
      }
    },
    "q8": {
      "unit": null,
      "lectureSection": 3,
      "readingLabel": "Additional background: metric-TSP shortcutting; planar MIS §10.2 is also additional.",
      "teaching": {
        "summary": "The general metric-TSP proof replaces a multi-edge walk segment by the direct edge between its endpoints. Repeated triangle inequality makes the direct distance no greater than the segment length. Unit edge lengths are a special sufficient case because they also satisfy triangle inequality; the general defining metric property is the intended answer.",
        "steps": [
          "Name the two endpoints and the path segment being replaced.",
          "Apply triangle inequality repeatedly along that segment.",
          "Use nonincrease of each replacement to shortcut the whole walk."
        ],
        "distractors": [
          "Bipartiteness does not bound a direct edge by the length of an alternative path.",
          "Correct: triangle inequality supplies the needed endpoint-distance comparison.",
          "Unit lengths also satisfy triangle inequality, but are a special case rather than the general defining metric property.",
          "Planarity alone does not control edge lengths along alternative paths."
        ],
        "takeaway": "State the structural hypothesis at the exact transformation it supports.",
        "followup": "Give three edge lengths violating triangle inequality for which a direct shortcut increases cost.",
        "tex": "d(v_0,v_t)\\le\\sum_{i=0}^{t-1}d(v_i,v_{i+1})."
      }
    },
    "q9": {
      "unit": null,
      "lectureSection": 3,
      "readingLabel": "Additional background: Christofides and metric matching; outside the current assigned sections",
      "teaching": {
        "summary": "The odd-degree MST vertex set has even cardinality. Visit those vertices in their optimal-tour order and shortcut between consecutive ones using the metric inequality. Alternating edges of this even cycle form two perfect matchings whose combined cost is at most OPT, so one costs at most OPT/2; the minimum matching is no more expensive.",
        "steps": [
          "Restrict the optimal tour to the even odd-degree vertex set, using metric shortcutting.",
          "Split the resulting even cycle into its two alternating matchings.",
          "Choose the cheaper matching and compare with the minimum matching."
        ],
        "distractors": [
          "Odd degree identifies vertices requiring parity repair; it does not make edges free.",
          "Correct: the alternating O-join or matching comparison splits a total cost at most OPT into two pieces.",
          "The MST need not cost half of OPT; only MST≤OPT follows generally.",
          "Some matchings can be expensive; the bound comes from constructing two comparison matchings."
        ],
        "takeaway": "An existence comparison to a cheaply chosen witness bounds the optimum of a subproblem.",
        "followup": "Where does the even cardinality of the odd-degree set enter this argument?",
        "tex": "\\operatorname{cost}(M_{\\min})\\le\\min\\{c(M_1),c(M_2)\\}\\le\\mathrm{OPT}/2."
      }
    },
    "q10": {
      "unit": "core-sat-random",
      "lectureSection": 2,
      "readingLabel": "W–S §§5.1–5.3: random-clause calculation",
      "teaching": {
        "summary": "A three-literal clause on distinct variables fails only when all three literals are false, an event of probability 1/8. Its satisfaction indicator therefore has expectation 7/8. The assumption about distinct noncomplementary literals prevents confusing repeated variables or tautologies with three independent failure events.",
        "steps": [
          "Translate clause failure into simultaneous literal falsity.",
          "Multiply three independent probabilities one half.",
          "Subtract failure from one to obtain the expected indicator value."
        ],
        "distractors": [
          "One half is the one-literal success probability.",
          "Three quarters is the distinct two-literal success probability.",
          "Correct: one minus one eighth is seven eighths.",
          "Certainty would require a tautology or another stronger property not assumed here."
        ],
        "takeaway": "Check clause simplification before using 1−2^−k.",
        "followup": "How can you compute the expected weighted number of satisfied clauses even when their indicators are dependent?",
        "tex": "\\Pr[C\\text{ satisfied}]=1-2^{-3}=7/8."
      }
    },
    "q11": {
      "unit": "core-sat-random",
      "lectureSection": 3,
      "readingLabel": "W–S §§5.1–5.3: conditional-expectation invariant",
      "teaching": {
        "summary": "The current expected objective is a weighted average of its two conditional values after exposing the next bit. For an unbiased bit the weights are one half each, so at least one conditional value is no smaller than the current expectation. Choosing it deterministically preserves the invariant; computing the conditional values efficiently remains an algorithmic requirement.",
        "steps": [
          "Condition on the partial assignment already fixed.",
          "Partition by the next bit and apply the tower property.",
          "Select a branch at least as large as the average, then iterate."
        ],
        "distractors": [
          "Correct: an average cannot exceed both of its constituent values.",
          "Only one branch is guaranteed to preserve the expectation, not every branch to be optimal.",
          "A union bound compares event probabilities and is not this conditional averaging identity.",
          "A limit theorem is unnecessary for this exact finite identity."
        ],
        "takeaway": "Derandomization follows a computable invariant rather than an appeal to typical outcomes.",
        "followup": "How would the argument change for a next bit with unequal probabilities?",
        "tex": "\\max\\{\\mathbb E[W\\mid h,0],\\mathbb E[W\\mid h,1]\\}\\ge\\mathbb E[W\\mid h]."
      }
    },
    "q12": {
      "unit": null,
      "lectureSection": 3,
      "readingLabel": "Additional background: LP vertex-cover rounding",
      "teaching": {
        "summary": "The threshold must include equality. For any edge, the LP requires xᵤ+xᵥ≥1, so at least one endpoint has value at least one half. If equality were excluded, an edge with both endpoint values exactly one half would be left uncovered. This is a feasibility argument before the cost argument.",
        "steps": [
          "Write the LP constraint for one arbitrary edge.",
          "Use it to find an endpoint satisfying x≥1/2.",
          "Include all such endpoints, including boundary values."
        ],
        "distractors": [
          "Strict inequality omits both endpoints when each equals one half.",
          "Correct: the closed threshold guarantees every edge an included endpoint.",
          "Restricting selection to value one can omit edges with two half-valued endpoints.",
          "Selecting every positive coordinate is feasible but lacks the stated factor-two cost bound."
        ],
        "takeaway": "Threshold boundaries are part of a feasibility proof.",
        "followup": "Why does selecting all positive LP variables fail the same simple factor-two cost comparison?",
        "tex": "x_u+x_v\\ge1\\quad\\Rightarrow\\quad\\max\\{x_u,x_v\\}\\ge1/2."
      }
    },
    "q13": {
      "unit": null,
      "lectureSection": 3,
      "readingLabel": "Additional background: LP vertex-cover cost comparison",
      "teaching": {
        "summary": "For every selected vertex, xᵥ≥1/2, so its selection indicator one is at most 2xᵥ. For an unselected vertex the indicator is zero and the same inequality holds because xᵥ≥0. Summing these pointwise inequalities bounds the integral cover cost by twice the fractional value; nonnegative vertex weights can be included identically.",
        "steps": [
          "Prove the indicator inequality separately for selected and unselected vertices.",
          "Multiply by a nonnegative vertex cost if using the weighted model.",
          "Sum, then compare the LP optimum with integral OPT by relaxation."
        ],
        "distractors": [
          "Counting edges does not establish the objective comparison on selected vertices.",
          "Correct: summing a pointwise indicator bound gives the cost guarantee.",
          "The relaxation can have fractional optima, which is why rounding is needed.",
          "Regularity is not part of this proof."
        ],
        "takeaway": "A local domination inequality can turn a feasibility threshold into a global approximation bound.",
        "followup": "Generalize the indicator inequality for a threshold τ>0.",
        "tex": "\\mathbf1_{\\{x_v\\ge1/2\\}}\\le2x_v."
      }
    },
    "q14": {
      "unit": null,
      "lectureSection": 3,
      "readingLabel": "Additional background: greedy weighted set cover; distinct from assigned primal–dual §7.1",
      "teaching": {
        "summary": "Greedy weighted set cover compares what a set costs with how many currently uncovered elements it newly covers. Previously covered elements must not appear in the denominator because they add no new progress. This ratio gives the equal per-element charge used in the harmonic analysis; it is a different algorithm from the assigned primal–dual set-cover method.",
        "steps": [
          "Remove already covered elements from each candidate’s benefit count.",
          "Compute cost divided by that remaining count.",
          "Choose a minimum ratio and charge its newly covered elements equally."
        ],
        "distractors": [
          "Maximum uncovered count ignores potentially very large set costs.",
          "Minimum set cost ignores how few new elements it covers.",
          "Correct: cost per newly covered element measures the actual marginal price.",
          "Choosing an uncovered element alone does not specify the greedy cost-benefit decision."
        ],
        "takeaway": "A greedy rule needs a marginal benefit as well as a cost.",
        "followup": "Compare a cost-4 set covering eight new elements with a cost-1 set covering one new element.",
        "tex": "\\text{choose }S\\text{ minimizing }c(S)/|S\\setminus C|."
      }
    },
    "q15": {
      "unit": null,
      "lectureSection": 3,
      "readingLabel": "Additional background: harmonic charging in greedy set cover",
      "teaching": {
        "summary": "During greedy covering, a remaining optimum set gives a benchmark for the cheapest available cost-per-new-element ratio. Summing the resulting per-element charges over successive remaining element counts creates the harmonic series Hₙ. The integral comparison Hₙ≤1+ln n turns this into the familiar logarithmic approximation bound.",
        "steps": [
          "Charge each newly covered element the chosen set’s cost divided by its new coverage.",
          "Compare each charge with an available optimum-set benchmark at that stage.",
          "Sum reciprocal remaining counts to obtain a harmonic factor."
        ],
        "distractors": [
          "A square-root factor does not follow from the harmonic charging argument.",
          "Correct: the bound is Hₙ, no more than one plus the natural logarithm of n.",
          "Two is not the general greedy guarantee on unrestricted set systems.",
          "Factorial growth is far larger than the harmonic charge sum."
        ],
        "takeaway": "Recognize the sum generated by the charging proof instead of memorizing a theorem label.",
        "followup": "Why can the same proof be refined using a maximum relevant set size rather than the full universe in some formulations?",
        "tex": "H_n=\\sum_{i=1}^n1/i\\le1+\\ln n."
      }
    },
    "q16": {
      "unit": "core-dual-cover",
      "lectureSection": 3,
      "readingLabel": "W–S §7.1: dual lower bounds and cost charging",
      "teaching": {
        "summary": "For a minimization primal, any feasible dual objective is at most every feasible primal objective, hence at most OPT. An approximation proof uses this lower bound to pay for a constructed primal solution with a controlled multiplicative loss. Feasibility alone does not force complementary slackness or optimality.",
        "steps": [
          "Check the direction of the primal optimization problem.",
          "Apply weak duality to the exhibited feasible dual.",
          "Supply a separate upper cost comparison for the algorithm’s feasible primal output."
        ],
        "distractors": [
          "Correct: a feasible dual certifies a lower bound on minimization OPT.",
          "An arbitrary primal solution need not match the dual bound.",
          "Dual feasibility is an objective certificate rather than a bit-length bound.",
          "Randomness is not needed for weak duality."
        ],
        "takeaway": "A lower bound is useful only with a proved link to the algorithm’s cost.",
        "followup": "What extra equalities would turn matching primal and dual certificates into an exact optimum?",
        "tex": "D(y)\\le\\mathrm{OPT}\\le\\operatorname{cost}(A)."
      }
    },
    "q17": {
      "unit": "core-dual-cover",
      "lectureSection": 3,
      "readingLabel": "W–S §7.1 and §7.4: multiplicity controls the factor",
      "teaching": {
        "summary": "Increasing duals can establish a valid lower bound, but the returned primal solution can charge the same dual mass multiple times. The approximation ratio comes from bounding this charging multiplicity or an analogous problem-specific inequality. Different problems have different bounds, and even selected tight objects need cleanup or structure to control the total cost.",
        "steps": [
          "Establish dual feasibility throughout growth.",
          "Express selected cost through tightness or another explicit comparison.",
          "Bound aggregate duplication before concluding a numerical approximation factor."
        ],
        "distractors": [
          "Dual variables need not be integers for weak duality or approximation.",
          "Correct: the factor requires a separate structural cost-charge bound.",
          "Graph optimization problems also satisfy LP weak duality.",
          "A generic growth process does not force equality of primal and dual costs."
        ],
        "takeaway": "Dual growth is a lower-bound mechanism, not an automatic universal factor-two theorem.",
        "followup": "Compare element frequency in set cover with aggregate active-component degree in Steiner forest.",
        "tex": ""
      }
    },
    "q18": {
      "unit": "core-sdp-cut",
      "lectureSection": 2,
      "readingLabel": "W–S §§6.1–6.2: the angular separation calculation",
      "teaching": {
        "summary": "Project the random normal direction to the plane spanned by the two unit vectors. Rotational symmetry makes its direction uniform. The separating directions occupy total angular measure 2θ out of 2π, so the probability is θ/π. This differs from the SDP contribution (1−cos θ)/2, which must be compared rather than substituted.",
        "steps": [
          "Reduce the separation event to the two-dimensional span of the endpoints.",
          "Count the two separating angular sectors.",
          "Normalize their combined angle 2θ by the full circle 2π."
        ],
        "distractors": [
          "Sine does not give the angular measure fraction; for θ=π it would incorrectly give zero.",
          "Correct: θ/π equals the fraction of separating normal directions.",
          "This is the relaxed edge objective, not the hyperplane separation probability.",
          "Orthogonal vectors have probability one half, but other angles change it."
        ],
        "takeaway": "Derive the random geometric event before comparing it to an optimization relaxation.",
        "followup": "Check the formula at equal, orthogonal, and opposite endpoint vectors.",
        "tex": "\\Pr[\\text{separate}]=2\\theta/(2\\pi)=\\theta/\\pi."
      }
    },
    "q19": {
      "unit": "core-sdp-cut",
      "lectureSection": 3,
      "readingLabel": "W–S §§6.1–6.2: the uniform edgewise ratio",
      "teaching": {
        "summary": "The constant is the minimum over angles of rounded cut probability divided by relaxed edge value. For interior minimizers, differentiation gives 1−cos θ=θ sin θ; evaluating the minimum yields about 0.87856. Taking the minimum makes the edgewise inequality hold uniformly, allowing a nonnegative weighted sum and an approximation relative to integral OPT.",
        "steps": [
          "Write the two per-edge expressions θ/π and (1−cos θ)/2.",
          "Form their ratio and minimize over the admissible angular interval, with endpoint limits checked.",
          "Sum the uniform comparison using nonnegative edge weights."
        ],
        "distractors": [
          "One half is the simple random-cut baseline rather than this SDP-rounding factor.",
          "Approximately 0.632 is associated with a different exponential bound, not this angular minimum.",
          "Correct: the worst angular ratio is approximately 0.87856.",
          "A factor above one uses an incompatible maximization-guarantee convention here."
        ],
        "takeaway": "An algorithm’s global factor comes from its worst admissible local ratio, not one favorable angle.",
        "followup": "Why does a negative edge weight break this edgewise summation proof?",
        "tex": "\\alpha_{GW}=\\min_{0<\\theta\\le\\pi}\\frac{2\\theta}{\\pi(1-\\cos\\theta)}\\approx0.87856."
      }
    },
    "q20": {
      "unit": "core-tree-metrics",
      "lectureSection": 1,
      "readingLabel": "W–S §§8.5–8.6: domination versus expected stretch",
      "teaching": {
        "summary": "A dominating embedding does not shorten original pairwise distances: every sampled tree has d_T(u,v)≥d(u,v). A separate theorem controls each pair’s expected expansion by O(log n). Domination alone permits very large distortion; expected expansion alone does not identify the largest realized stretch in one sampled tree.",
        "steps": [
          "State the per-sample noncontraction condition.",
          "Keep its inequality direction separate from the expected upper stretch bound.",
          "Use the two conditions at their appropriate transfer steps."
        ],
        "distractors": [
          "This is contraction rather than domination.",
          "Correct: sampled tree distances do not underestimate original distances.",
          "Equality is a special isometric case, not a necessary property of dominating embeddings.",
          "Zero distances cannot dominate positive original distances."
        ],
        "takeaway": "A randomized embedding theorem has distinct deterministic and expected guarantees.",
        "followup": "Why does an MST of a cycle satisfy domination yet have a badly stretched pair?",
        "tex": "d_T(u,v)\\ge d(u,v),\\qquad\\mathbb E[d_T(u,v)]\\le O(\\log n)d(u,v)."
      }
    },
    "q21": {
      "unit": null,
      "lectureSection": 3,
      "readingLabel": "Euclidean TSP §10.1: required geometric scheme",
      "teaching": {
        "summary": "The Euclidean TSP scheme exploits fixed-dimensional geometric dissections, portals on cell boundaries, and patching estimates controlling crossings. Arbitrary metrics need not have these geometric structures, so the proof cannot be transferred simply because both problems use distances. The required geometric scheme is §10.1. Planar maximum independent set (§10.2) is additional.",
        "steps": [
          "Identify the dissection and portal structure used to restrict candidate tours.",
          "Check where geometry bounds the cost of moving crossings and patching.",
          "Keep this background scheme distinct from both general metric TSP and planar MIS."
        ],
        "distractors": [
          "The exact optimization problem remains computationally hard; the scheme approximates it.",
          "Correct: portal and crossing estimates exploit Euclidean geometric structure.",
          "Coordinates and distances need not all be integers.",
          "Complete bipartiteness is not the structural hypothesis of this scheme."
        ],
        "takeaway": "A PTAS often depends on a specific geometric or graph-structure theorem.",
        "followup": "Explain why portals alone, without a crossing bound, do not establish the polynomial-time guarantee.",
        "tex": ""
      }
    },
    "q22": {
      "unit": "core-hardness",
      "lectureSection": 2,
      "readingLabel": "W–S §§16.1,16.3: derive the NO-to-YES threshold",
      "teaching": {
        "summary": "Under the stated maximization convention, a YES input produces value at least 0.9ρm. A NO input has no feasible value above 0.6m. These ranges are strictly separated if 0.9ρ>0.6, so the threshold is ρ>2/3. Equality leaves a possible common boundary and does not guarantee a decision procedure.",
        "steps": [
          "Translate the approximation guarantee into a YES output lower bound.",
          "Use feasibility to bound every NO output from above.",
          "Solve the strict comparison in the same ratio convention."
        ],
        "distractors": [
          "Correct: a factor above two thirds forces the YES lower output bound above the NO range.",
          "The reversed inequality gives no such separation.",
          "A guarantee of one tenth is too weak to exceed the NO threshold.",
          "Arbitrarily small positive factors cannot distinguish these intervals."
        ],
        "takeaway": "Hardness thresholds must retain completeness, soundness, and strictness explicitly.",
        "followup": "What does the distinguishing condition become if the algorithm’s guarantee is written ALG≥OPT/α?",
        "tex": "0.9\\rho>0.6\\quad\\Longleftrightarrow\\quad\\rho>2/3."
      }
    },
    "q23": {
      "unit": "core-hardness",
      "lectureSection": 3,
      "readingLabel": "W–S §16.3: local tests become a gap instance",
      "teaching": {
        "summary": "A PCP verifier uses a random local test whose acceptance has a completeness–soundness gap. Enumerating polynomially many random tapes turns those tests into bounded-arity constraints on one common assignment to proof bits. The soundness gap survives only because the same proof is used for all tests; an exact decision reduction alone does not supply this quantitative gap.",
        "steps": [
          "Track the verifier’s randomness and constant query count.",
          "Create a local constraint for each random tape on the shared proof positions.",
          "Translate completeness and soundness into separated optimum fractions."
        ],
        "distractors": [
          "The PCP construction does not prove P=NP.",
          "Correct: a quantitative local-verification gap creates separated objective values.",
          "PCP soundness does not make every LP relaxation integral.",
          "The proof is specially encoded; it is not replaced by random assignments."
        ],
        "takeaway": "A local test must enforce one global object to preserve a reduction’s soundness gap.",
        "followup": "Why would a separate satisfying assignment chosen independently for every test make the reduction useless?",
        "tex": ""
      }
    }
  }
};
