const BANK_APPROX = [
  {
    "unit": "core-knapsack",
    "slug": "pareto-dominance",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Dominance pruning without losing a continuation",
    "prompt": "For 0–1 knapsack with positive integer weights and profits, maintain attainable pairs (weight,profit) after each prefix. Prove that deleting a pair dominated by another pair preserves an optimum after every possible suffix. Give an instance with exponentially many undominated pairs.",
    "prerequisites": [
      "0–1 knapsack",
      "dynamic programming invariants"
    ],
    "minutes": 40,
    "guide": [
      "If (w,p) is dominated by (w′,p′), where w′≤w and p′≥p, every suffix subset feasible after the first pair is feasible after the second and obtains at least the same profit. The two prefix witnesses use only already processed items, so appending the identical suffix causes no item reuse. This proves the invariant by induction.",
      "Take w_i=p_i=2^i for i=0,…,n−1 and capacity 2^n−1. Every subset gives a different pair (s,s); lower weight always means lower profit. All 2^n pairs survive. Dominance alone gives an exact algorithm, but it does not establish polynomial running time in the binary input length."
    ],
    "followup": "How does the argument change if there is also a cardinality bound? State which states may safely dominate one another.",
    "deliverable": "A continuation lemma, an induction, and an exponential frontier family."
  },
  {
    "unit": "core-knapsack",
    "slug": "fractional-lower-bound-scale",
    "tier": "doctoral",
    "kind": "construction",
    "title": "Scale using a computable half-optimum certificate",
    "prompt": "For positive-profit knapsack, first discard overweight items. Solve its fractional relaxation by density order, and let G be the better of the whole-item greedy prefix and the highest-profit feasible item. Prove G≤OPT≤2G, then design profit scaling with K=εG/n and bound the DP range.",
    "prerequisites": [
      "fractional knapsack",
      "profit scaling"
    ],
    "minutes": 45,
    "guide": [
      "The fractional optimum consists of a feasible whole prefix plus at most one fractional item. Its value is at most the prefix profit plus the full profit of that boundary item, both at most G. If all items fit, the prefix is optimal. Thus G is a feasible lower bound and the fractional solution certifies OPT≤2G.",
      "Every surviving item has profit at most G, so each floor-scaled profit is at most n/ε and the usual state range is O(n²/ε). For an optimum O, rounding loses at most |O|K≤εG≤εOPT. Retain the minimum original weight per scaled total to obtain feasibility. The certificate uses a fractional upper bound and a feasible lower bound in different directions."
    ],
    "followup": "Can the certificate improve the approximation loss if the optimum uses at most k items?",
    "deliverable": "A complete scaling algorithm with its certificate and state count."
  },
  {
    "unit": "core-knapsack",
    "slug": "cardinality-budget",
    "tier": "examiner",
    "kind": "construction",
    "title": "An FPTAS with an exact cardinality budget",
    "prompt": "Given integer k≤n, maximize nonnegative profit subject to total weight≤B and at most k selected items. Construct an FPTAS with loss at most εOPT using a count dimension. State its running time and handle the case k=0.",
    "prerequisites": [
      "profit-indexed DP",
      "feasible lower bounds"
    ],
    "minutes": 45,
    "guide": [
      "For k≥1 remove overweight items and let P be the largest remaining positive profit. A singleton is feasible, so P≤OPT. Set K=εP/k. A DP indexed by processed prefix, selected count c≤k, and scaled profit q stores the minimum original weight. Use only previous-prefix states for a 0–1 transition.",
      "Each scaled item profit is at most k/ε; a feasible state has q≤k²/ε. A direct implementation therefore uses O(nk³/ε) transitions and O(k³/ε) memory. The optimum loses at most kK, and the DP maximizes the rounded objective within both exact constraints. For k=0 or no positive feasible item, return the empty set."
    ],
    "followup": "Why would ignoring the count coordinate allow a dominated state to destroy the only feasible continuation?",
    "deliverable": "A recurrence, reconstruction method, loss proof, and polynomial bit bound."
  },
  {
    "unit": "core-knapsack",
    "slug": "weight-resource-augmentation",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Rounding weights buys capacity rather than profit",
    "prompt": "Let B>0 and δ∈(0,1). Set h=δB/n, w′_i=floor(w_i/h), and B′=floor(B/h). Maximize exact profit among subsets of scaled weight at most B′. Prove profit at least OPT and original weight at most (1+δ)B. Contrast this bicriteria guarantee with a feasible FPTAS.",
    "prerequisites": [
      "weight-indexed DP",
      "rounding inequalities"
    ],
    "minutes": 35,
    "guide": [
      "Every originally feasible subset has sum floor(w_i/h)≤floor(sum w_i/h)≤B′, so the rounded optimum contains an originally optimal candidate. For the returned set S, sum w_i<h sum w′_i+|S|h≤B+n h=(1+δ)B. This is an upper capacity bound, while profit is compared in the favorable direction.",
      "After filtering w_i>B when benchmarking the original problem, B′=O(n/δ), so an exact-profit DP over rounded weight is polynomial in n and 1/δ with binary profit arithmetic. The output may exceed B, and no multiplicative profit statement repairs that violation. A one-item example with weight just above B demonstrates why original feasibility must be reported separately."
    ],
    "followup": "What guarantee follows if ceilings replace floors and the capacity remains B′?",
    "deliverable": "A bicriteria theorem with a precise feasibility limitation."
  },
  {
    "unit": "core-knapsack",
    "slug": "rational-input-arithmetic",
    "tier": "examiner",
    "kind": "proof",
    "title": "Rational data and exact scaling comparisons",
    "prompt": "Assume all weights, profits, B and ε are positive binary-encoded rationals of total encoding length L. Show that profit scaling can be implemented in time polynomial in L,n,1/ε without expanding a DP indexed by a common denominator. Bound the bit lengths of sums and floor computations.",
    "prerequisites": [
      "rational arithmetic",
      "FPTAS bit complexity"
    ],
    "minutes": 40,
    "guide": [
      "A sum of at most n input rationals can be represented over the product of their denominators. The product has bit length at most the sum of input denominator lengths, hence O(L); numerator growth adds only polynomially many bits. Reduced fractions can be used, but reduction is not needed to obtain this upper bound.",
      "Compute floor(p_i/K) by integer multiplication and division of rational numerators and denominators. This operation has polynomial bit complexity, and the scaled-profit range remains O(n²/ε) after infeasible items are discarded. Store exact rational weights in the DP and compare them by cross multiplication. Clearing denominators is safe arithmetic, but a weight DP of numerical capacity equal to that denominator product may be exponentially long."
    ],
    "followup": "Which step fails if ε is supplied only as a real-number oracle with no finite precision guarantee?",
    "deliverable": "A bit-complexity audit of the scaling algorithm."
  },
  {
    "unit": "core-knapsack",
    "slug": "multiplicative-frontier",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: an approximate Pareto frontier",
    "prompt": "Construct a prefix algorithm that trims positive-profit states into intervals [(1+δ)^j,(1+δ)^(j+1)), retaining minimum weight in each interval and keeping the empty state. With δ=ε/(2n), prove a (1−ε) guarantee. Compare frontier sizes with exact dominance pruning on instances n≤24; exact enumeration is the baseline.",
    "prerequisites": [
      "Pareto dominance",
      "multiplicative error accumulation"
    ],
    "minutes": 90,
    "guide": [
      "After adding an item from the previous prefix, trimming replaces a state by one with no greater weight and profit greater than its profit divided by 1+δ. Inductively each exact prefix witness has a retained witness of no larger weight and at least its profit divided by (1+δ)^i. At i=n, (1+δ)^n≤e^(ε/2)≤1/(1−ε) for 0<ε<1.",
      "The number of occupied profit intervals is O((n/ε) log(nPmax/Pmin)), polynomial in the rational encoding length and 1/ε. Generate interval boundaries with exact rational arithmetic and preserve a separate zero-profit state. Report frontier counts and returned value against enumeration; any weight violation or ratio below 1−ε is a failure. This is a study of a specified approximation technique, not a claim of novelty."
    ],
    "followup": "Can one use one final trimming step instead of n stages without losing polynomial space?",
    "deliverable": "A proved trimming invariant, reproducible comparison, and failure report."
  },
  {
    "unit": "core-knapsack",
    "slug": "adversarial-rounding-loss",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: quantify worst-case rounding loss",
    "prompt": "Fix n≤20 and rational ε. Investigate floor-profit scaling with K=εPmax/n under adversarial tie breaking. Enumerate all feasible subsets for integer instances with weights≤12 and profits≤30, then compare its actual loss with nK and |O|K. Prove a universal bound using the smaller cardinality of an optimal witness.",
    "prerequisites": [
      "exact subset enumeration",
      "scaling proof"
    ],
    "minutes": 75,
    "guide": [
      "For any optimal O, scaled optimality gives p(S)≥Kp′(S)≥Kp′(O)>OPT−|O|K, with a non-strict bound covering integral rounding boundaries. If several original optima exist, choose one with minimum cardinality to sharpen the certificate. The bound concerns the witness O and does not require the returned solution to have the same count.",
      "Group subsets by scaled profit and keep the least original profit among feasible scaled maximizers to model worst tie breaking. Record the ratio loss/(|O|K), rather than expecting a random solver to find bad ties. The baseline is exhaustive optimization in both objectives. A counterexample to the proved inequality is a failed implementation or proof; absence of a near-tight example is reported as inconclusive rather than a new theorem."
    ],
    "followup": "How does a minimum-weight tie rule change the adversarial search space?",
    "deliverable": "A cardinality-sensitive lemma and a small exhaustive search with recorded parameters."
  },
  {
    "unit": "core-scheduling-scheme",
    "slug": "list-scheduling-barrier",
    "tier": "doctoral",
    "kind": "counterexample",
    "title": "The list-scheduling barrier before rounding",
    "prompt": "For m≥2 identical machines, prove list scheduling has ratio at most 2−1/m. Then give a job order attaining that ratio using m(m−1) unit jobs followed by one job of length m. Explain why a PTAS must exploit more information than the next least-loaded machine.",
    "prerequisites": [
      "identical-machine makespan",
      "average-load lower bound"
    ],
    "minutes": 35,
    "guide": [
      "Let j be the last completing job and s its start time. At its assignment every machine has load at least s, so ms≤sum p_i−p_j. Consequently Cmax≤sum p_i/m+(1−1/m)p_j≤(2−1/m)OPT, using both total-load and largest-job lower bounds.",
      "The unit jobs leave every machine at load m−1. The final job creates makespan 2m−1. An optimum places the long job alone and distributes the m(m−1) unit jobs as m units on each of the remaining m−1 machines, so OPT=m. The family is exact for every m, rather than an asymptotic assertion hiding an ordering condition."
    ],
    "followup": "Why does ordering jobs by nonincreasing size invalidate this particular bad example?",
    "deliverable": "A sharp proof and a matching parameterized instance."
  },
  {
    "unit": "core-scheduling-scheme",
    "slug": "fixed-machine-load-dp",
    "tier": "doctoral",
    "kind": "construction",
    "title": "A fixed-machine approximation scheme by load states",
    "prompt": "For fixed m and positive integer processing times, let L=max(max p_j,sum p_j/m), h=εL/n, and round each job down to multiples of h. Build an exact DP over m−1 rounded machine loads and prove the reconstructed schedule has makespan at most (1+ε)OPT.",
    "prerequisites": [
      "multidimensional DP",
      "load lower bounds"
    ],
    "minutes": 45,
    "guide": [
      "Use states recording the first m−1 loads after a job prefix; the final machine load is determined by the rounded prefix total. A transition assigns the next rounded job to any machine. All rounded loads are at most sum p_j/h≤mn/ε, so the number of states is polynomial for fixed m.",
      "An optimum original schedule remains a rounded schedule of makespan at most OPT. The DP finds a rounded optimum no worse than this. Restoring original times increases any one machine by less than nh=εL≤εOPT. The exponent depends on m, so this construction alone does not give a uniform PTAS when m belongs to the input."
    ],
    "followup": "How does symmetry reduction by sorting machine loads affect reconstruction?",
    "deliverable": "An explicit recurrence and the dependence of its exponent on m."
  },
  {
    "unit": "core-scheduling-scheme",
    "slug": "configuration-obstruction",
    "tier": "examiner",
    "kind": "proof",
    "title": "A separating certificate for rounded configurations",
    "prompt": "At target T=1, suppose jobs have sizes 2/5 and 3/5, with counts a and b and m machines. Enumerate maximal feasible configurations and derive necessary and sufficient inequalities on a,b,m for a packing. Include an explicit reconstruction and compare with the total-load bound.",
    "prerequisites": [
      "configuration representation",
      "integer feasibility"
    ],
    "minutes": 45,
    "guide": [
      "A machine can hold either two 2/5 jobs or one of each type or one 3/5 job; no machine holds two 3/5 jobs. Thus b≤m is necessary. Use b bins for the larger jobs, put min(a,b) smaller jobs beside them, then pair any remaining smaller jobs in unused bins. Feasibility is equivalent to b+ceil(max(0,a−b)/2)≤m.",
      "Equivalently b≤m and a+b≤2m, for integer a,b. These conditions are also sufficient by the construction. Total load alone is weaker: m=2,a=0,b=3 has load 9/5≤2 but needs three bins. The count inequalities are certificates tied to the feasible configuration set, rather than an unexplained LP feasibility claim."
    ],
    "followup": "Add jobs of size 1/5 and derive the new residual-capacity conditions.",
    "deliverable": "All maximal configurations, an exact characterization, and a counterexample to volume sufficiency."
  },
  {
    "unit": "core-scheduling-scheme",
    "slug": "strong-hardness-fptas",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Why the makespan PTAS need not be fully polynomial",
    "prompt": "Assume the standard strong NP-completeness of 3-PARTITION with 3m integer values in (B/4,B/2) summing to mB, where B is polynomially bounded. Prove that an FPTAS for makespan on an input number m of identical machines would imply P=NP. Choose ε explicitly.",
    "prerequisites": [
      "strong NP-completeness",
      "integer objective gaps"
    ],
    "minutes": 40,
    "guide": [
      "Map each value to a job and use m machines. The total-load lower bound is B. A makespan-B schedule exists exactly when each machine receives a triple summing to B, because the strict size bounds force three jobs per machine. In a NO instance every schedule has integral makespan at least B+1.",
      "Run an assumed FPTAS with ε=1/(2B). In a YES instance it returns makespan at most B+1/2, hence at most B by integrality; in a NO instance no such schedule exists. Since B is polynomially bounded on the strongly hard family, 1/ε is polynomial. The argument uses strong hardness essentially and does not contradict the fixed-m construction."
    ],
    "followup": "Why does the same ε choice fail to contradict an FPTAS for ordinary binary-encoded knapsack?",
    "deliverable": "A gap-preserving reduction and a runtime calculation."
  },
  {
    "unit": "core-scheduling-scheme",
    "slug": "geometric-large-types",
    "tier": "examiner",
    "kind": "construction",
    "title": "Geometric rounding and a bounded configuration universe",
    "prompt": "Fix η∈(0,1/4), target T, and jobs in (ηT,T]. Round each job upward to the next value ηT(1+η)^q. Bound the number of types and configurations of load at most (1+η)T. Prove a T-schedule of the original large jobs induces a feasible rounded configuration multiset.",
    "prerequisites": [
      "geometric sequences",
      "configuration enumeration"
    ],
    "minutes": 45,
    "guide": [
      "Each rounded processing time is at most (1+η) times its original value, so a machine of original load at most T has rounded load at most (1+η)T. There are O(log(1/η)/η) types, with one additional endpoint type if necessary. Each configuration contains fewer than (1+η)/η jobs.",
      "A coarse bound on the number of count vectors is (1+floor((1+η)/η))^d, where d is the type count. This is finite as a function of η alone. A DP over remaining counts of all d types and machine count can test integral configuration feasibility in n^O(d) time. State this exponent instead of inferring an FPTAS from the bounded universe."
    ],
    "followup": "Compare this type bound with additive rounding at spacing η²T.",
    "deliverable": "An upward-rounding lemma and explicit enumeration bounds."
  },
  {
    "unit": "core-scheduling-scheme",
    "slug": "configuration-lp-audit",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: audit a configuration relaxation",
    "prompt": "For T=1, enumerate rational job sizes on the grid {1/6,…,1} and count vectors with at most 18 jobs. Compare the minimum integral number of configurations with the configuration LP optimum. Use exact subset assignment as a baseline; exhibit and verify a gap or report the searched domain without claiming equality.",
    "prerequisites": [
      "configuration LP",
      "integer programming certificates"
    ],
    "minutes": 95,
    "guide": [
      "Create a variable for each feasible type-count vector and constraints that cover every job multiplicity. Fractional solutions provide lower bounds, but rounded variable counts do not automatically use at most m machines. Verify an integral packing by writing every configuration and its multiplicity, then reconstructing the original job identities.",
      "For each reported fractional optimum, produce a dual feasible type-price vector with the same value: every configuration must have total price at most one. This supplies a check independent of solver status. Reject any claimed gap whose certificates disagree. The investigation targets the difference between fractional and integral configurations; a finite search cannot establish that the gap is universally absent."
    ],
    "followup": "What does ceiling every positive LP variable prove when the number of types is fixed?",
    "deliverable": "An enumerator specification, exact certificates, and a bounded-domain results table."
  },
  {
    "unit": "core-scheduling-scheme",
    "slug": "configuration-support-rounding",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: round a sparse configuration solution",
    "prompt": "For d rounded large-job types and a feasible configuration covering LP of value M, prove there is an optimal basic solution with at most d positive variables. Show that opening ceilings of these configurations uses at most M+d machines. Test this additive bound against exact integer optima for d≤4; explain why it is insufficient for a makespan PTAS with exactly m machines.",
    "prerequisites": [
      "basic LP solutions",
      "configuration covering"
    ],
    "minutes": 90,
    "guide": [
      "The covering LP has d demand inequalities and nonnegative variables. At an extreme optimum at most d configuration variables are positive, by the standard linearly independent active-column argument. An extreme optimum exists because the positive all-one objective gives a bounded optimal face. Rounding each positive count up preserves coverage and adds less than d to the fractional objective.",
      "Extra covered jobs can be discarded from configurations, yielding a valid assignment of every input job once. The resulting bound is on the number of machines, not the makespan on a prescribed m. For the experiment compare with an exact count-vector DP and check both coverage and machine count. Treat exceeding M+d, or silently using extra machines in an m-machine schedule, as failure."
    ],
    "followup": "Under what lower bound on M does M+d become a multiplicative (1+η) bound?",
    "deliverable": "A sparse-support lemma, additive rounding theorem, and a controlled comparison."
  },
  {
    "unit": "core-bin-scheme",
    "slug": "large-only-basic-lp",
    "tier": "doctoral",
    "kind": "proof",
    "title": "An additive d bound from the configuration LP",
    "prompt": "Suppose bin-packing items take d distinct rational sizes in (0,1]. Enumerate all feasible configurations and prove that rounding an optimal basic configuration-LP solution upward yields at most OPT+d bins. State the assumptions needed to compute the configuration set in polynomial time.",
    "prerequisites": [
      "configuration LP",
      "basic feasible solutions"
    ],
    "minutes": 45,
    "guide": [
      "The LP minimizes the sum of configuration multiplicities subject to d coverage constraints. A basic optimum has at most d positive variables. Ceiling those variables covers all demands and uses less than LP+d≤OPT+d bins. Remove surplus copies of types and assign the actual items to obtain a valid packing.",
      "For fixed d alone, tiny binary-encoded item sizes can permit exponentially large configuration coordinates. In the large-item setting where every size is at least η, each bin contains at most 1/η items and enumeration is bounded by (1+1/η)^d. Distinguish a proof with an explicitly supplied configuration set from an algorithm that must construct that set."
    ],
    "followup": "Can one replace strict <LP+d by an integral bound involving floor(LP)?",
    "deliverable": "A rounding proof plus a precise configuration-enumeration condition."
  },
  {
    "unit": "core-bin-scheme",
    "slug": "item-count-lower-bounds",
    "tier": "doctoral",
    "kind": "construction",
    "title": "Volume and threshold-count bounds are complementary",
    "prompt": "For every integer q≥1, prove that items larger than 1/(q+1) give the lower bound ceil(N_q/q) on bin count. Construct instances where this beats volume by a factor approaching (q+1)/q, and explain why finitely many such threshold tests still do not fully characterize feasible bins.",
    "prerequisites": [
      "bin-packing lower bounds",
      "strict inequalities"
    ],
    "minutes": 35,
    "guide": [
      "A bin cannot contain q+1 items each strictly larger than 1/(q+1), so q·OPT≥N_q. Take N items of size 1/(q+1)+δ with δ sufficiently small that q items fit. The count bound is approximately N/q, while total volume is approximately N/(q+1), giving the claimed factor as N grows and δ decreases.",
      "These bounds price items only through threshold counts. Three items of size 0.6 and three of size 0.4 pack in three bins. Replace the small sizes by 0.39,0.39,0.42. Volume remains three and every count N_q is unchanged, but three bins are impossible: each must hold one 0.6 item and none can hold 0.42. Four bins suffice. Even volume together with all these reciprocal-threshold counts misses this mixed-size obstruction."
    ],
    "followup": "Derive a valid dual type-price vector for sizes 0.51 and 0.26 that improves a selected single threshold bound.",
    "deliverable": "The family of inequalities and an asymptotically sharp comparison."
  },
  {
    "unit": "core-bin-scheme",
    "slug": "next-fit-charging",
    "tier": "examiner",
    "kind": "proof",
    "title": "A complete Next-Fit analysis and sharp family",
    "prompt": "Next Fit keeps only the current open bin. Prove that it uses at most 2OPT−1 bins for nonempty instances. Give an input family whose ratio tends to 2, and identify why allowing access to earlier bins changes the example.",
    "prerequisites": [
      "online packing",
      "adjacent-bin charging"
    ],
    "minutes": 40,
    "guide": [
      "Whenever a new bin opens, its first item did not fit in the preceding bin. Hence every consecutive pair of bins has combined final load greater than one. Pair bins (1,2),(3,4),… to obtain total volume>floor(A/2), so OPT≥floor(A/2)+1. This implies A≤2OPT−1.",
      "Use alternating items ε and 1−ε+ε², with ε chosen so each pair exceeds one but many ε items fit together. Next Fit separates nearly every item, while an optimum puts each large item in its own bin and packs all small items in o(N) additional bins when ε tends to zero sufficiently quickly. Choose ε=1/N² for N pairs to make the calculation explicit."
    ],
    "followup": "Compute the exact bin count on this family under First Fit.",
    "deliverable": "A finite-instance inequality and a parameterized lower-bound family."
  },
  {
    "unit": "core-bin-scheme",
    "slug": "augmentation-size-rounding",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Size rounding as resource augmentation",
    "prompt": "Let δ∈(0,1). Suppose each item is rounded upward to a size at most (1+δ) times its original size. Prove that an optimum original packing fits in OPT bins of capacity 1+δ after rounding. Construct a family showing that the same statement with unit capacity can fail by a constant factor.",
    "prerequisites": [
      "upward rounding",
      "resource augmentation"
    ],
    "minutes": 35,
    "guide": [
      "Within an original bin, the rounded total is at most (1+δ) times its original total, hence at most 1+δ. This proves a capacity-augmentation result with unchanged bin count. It does not say the rounded items fit in unit bins, and scaling the rounded solution down changes the physical sizes of the original input.",
      "Take pairs of items of original size exactly 1/2 and round them to 1/2+γ with 0<γ≤δ/2. Original OPT is n/2 for even n, while rounded OPT at unit capacity is n. Thus even arbitrarily small multiplicative size increases may double bin count. Grouping arguments avoid this discontinuity through an injection into different item identities."
    ],
    "followup": "What additional promise on bin slack would make unit-capacity rounding safe?",
    "deliverable": "A bicriteria proof and a discontinuity example."
  },
  {
    "unit": "core-bin-scheme",
    "slug": "asymptotic-ratio-quantifiers",
    "tier": "examiner",
    "kind": "proof",
    "title": "Convert an additive guarantee into a threshold guarantee",
    "prompt": "Suppose an algorithm satisfies A(I)≤(1+η)OPT(I)+C(η), with explicit positive C. For a requested ε∈(0,1), choose η and a threshold N_ε so that OPT≥N_ε implies A≤(1+ε)OPT. Explain why solving all smaller-optimum instances exactly is not an automatic polynomial repair.",
    "prerequisites": [
      "asymptotic approximation ratios",
      "quantifier order"
    ],
    "minutes": 35,
    "guide": [
      "Set η=ε/2 and choose N_ε≥2C(ε/2)/ε. For OPT above this threshold, the additive term is at most εOPT/2. This derives the asymptotic ratio with the dependence of the large-instance threshold on ε made explicit. Rounding an integer N_ε upward causes no difficulty.",
      "The remaining inputs can have arbitrarily many items with tiny sizes, even when OPT=2. Moreover deciding whether such a binary-encoded instance fits in two bins contains PARTITION. A threshold on optimum value is not a threshold on input length, so brute force on all small-optimum cases is not justified."
    ],
    "followup": "Under a fixed lower bound η0 on every item size, how many items can a small-optimum instance contain?",
    "deliverable": "An explicit threshold formula and a complexity obstruction."
  },
  {
    "unit": "core-bin-scheme",
    "slug": "grouping-error-budget",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: optimize a grouping budget",
    "prompt": "For items of size at least η, sort decreasingly and form groups of g=ceil(η²n) items. Set aside the first group and round later groups to their maxima. Prove an OPT+ceil(η²n) bound for the large-item stage using the inter-group injection, then convert it to (1+η)OPT+1. Compare group sizes with an exact packing baseline for n≤22.",
    "prerequisites": [
      "linear grouping",
      "item-volume lower bound"
    ],
    "minutes": 85,
    "guide": [
      "Match the rounded items of group j≥2 positionwise to original items in group j−1, padding the last group only by deleting unused witnesses. Every matched original item is at least as large as the rounded replacement, so the later rounded groups can be packed into the bins of an optimum original packing. The first group needs at most g extra bins.",
      "Since all n items have size at least η, nη≤OPT. Thus g≤η²n+1≤ηOPT+1. The experiment should vary g around the theoretical value and report the distinct-type count, extra bins, and exact optimum. Failure means an invalid injection, a rounded item exceeding its matched witness, or a claimed bound violated by a certified packing instance."
    ],
    "followup": "How must n be interpreted when small items are present in the full instance?",
    "deliverable": "A complete grouping calculation and an exact small-instance comparison."
  },
  {
    "unit": "core-bin-scheme",
    "slug": "dual-function-search",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: search for valid bin prices",
    "prompt": "For sizes {1/5,2/5,3/5,4/5}, enumerate all configurations. Find nonnegative type prices λ maximizing a given count vector’s lower bound subject to every configuration having price at most one. Compare this dual bound, volume, and exact packing for count vectors of total size at most 24 items.",
    "prerequisites": [
      "LP duality",
      "configuration enumeration"
    ],
    "minutes": 85,
    "guide": [
      "The constraints are finite: for each count vector a with sum a_i s_i≤1, impose sum a_i λ_i≤1. Summing the price constraint over every bin proves OPT≥sum n_i λ_i. Volume is the special feasible choice λ_i=s_i, so an optimized dual must be at least as strong when computed exactly.",
      "Use exact rational certificates and an integer count-vector DP as the baseline. Record any integrality gap as OPT/dual, retaining ceiling effects separately. A purported lower bound greater than the certified optimum, or an unenumerated feasible configuration with price above one, is a failure. This is a reproducible investigation of a known LP, with no claim that finite grid behavior settles general bin packing."
    ],
    "followup": "Which types can share a tight configuration at an optimal dual solution?",
    "deliverable": "Configuration and price certificates plus a finite comparison table."
  },
  {
    "unit": "core-sat-random",
    "slug": "k-wise-independence",
    "tier": "doctoral",
    "kind": "proof",
    "title": "How much independence does clause evaluation require?",
    "prompt": "For a weighted CNF whose normalized clauses have width at most k, prove that k-wise independent fair bits give the same expected satisfied weight as fully independent bits. Show that pairwise independence is insufficient for width three by using a uniform even-parity triple.",
    "prerequisites": [
      "k-wise independence",
      "indicator expectations"
    ],
    "minutes": 40,
    "guide": [
      "Each clause’s truth indicator depends on at most k distinct coordinates. A k-wise independent fair distribution has exactly the uniform distribution on that coordinate set, so its failure probability is 2^−width. Sum the expectations with nonnegative weights; independence among different clauses is not required.",
      "For a uniform distribution on {000,011,101,110}, every pair is uniform, but Pr[x∨y∨z is false]=1/4 rather than 1/8. Thus this particular clause has expected satisfaction 3/4. The example isolates the missing third-order independence without changing any one-bit or two-bit marginal."
    ],
    "followup": "Can a k-wise independent distribution be enumerated efficiently if its support is explicitly supplied?",
    "deliverable": "A locality lemma and a pairwise-independent counterexample."
  },
  {
    "unit": "core-sat-random",
    "slug": "bias-objective-polynomial",
    "tier": "doctoral",
    "kind": "construction",
    "title": "Optimize a common bias on a signed formula",
    "prompt": "Consider weights A,B,C≥0 on clauses x, ¬y, and x∨y respectively, with x,y independently true with common probability p. Derive the expected value as a polynomial in p, maximize it on [0,1], and compare with choosing a deterministic assignment separately for each instance.",
    "prerequisites": [
      "independent biased bits",
      "quadratic optimization"
    ],
    "minutes": 35,
    "guide": [
      "The expectation is Ap+B(1−p)+C(2p−p²)=B+(A−B+2C)p−Cp². If C>0, the maximizing bias is the projection of (A−B+2C)/(2C) onto [0,1]. If C=0, choose an endpoint according to the sign of A−B. Include boundary cases rather than dividing by C silently.",
      "The four deterministic assignments have values B, A+B+C, C, and A+C respectively for (0,0),(1,0),(0,1),(1,1). Therefore the optimum is A+B+C, attained by x=1,y=0. A common bias constrains both marginals equally and can lose value even though independent variable-specific marginals can attain the optimum."
    ],
    "followup": "For A=B and C>0, quantify the common-bias loss exactly.",
    "deliverable": "The optimizer formula and a correctly evaluated four-assignment table."
  },
  {
    "unit": "core-sat-random",
    "slug": "bounded-incidence-concentration",
    "tier": "examiner",
    "kind": "proof",
    "title": "A concentration bound from variable influence",
    "prompt": "Let F be satisfied clause weight under independent fair variables, and let D_i be total weight of clauses containing variable i. Prove Pr[F≤E F−t]≤exp(−2t²/sum D_i²) using bounded differences. Explain why unbounded clause overlap can make expectation alone a weak high-probability certificate.",
    "prerequisites": [
      "bounded differences",
      "weighted MAX-SAT"
    ],
    "minutes": 45,
    "guide": [
      "Changing bit i changes only clauses incident to i, and their total possible objective change is at most D_i. Apply the bounded-differences inequality to the independent bit coordinates; no clause-indicator independence is assumed. If all D_i vanish, F is constant and the nontrivial tail probability is zero.",
      "For M identical unit clauses x of weight one, F is either 0 or M with equal probability. Its expectation is M/2, but it does not concentrate around that value on a sublinear scale. Here D_x=M, so the denominator correctly records the large dependency. Normalization may merge duplicates into one weight-M clause without changing the phenomenon."
    ],
    "followup": "What exponent follows if every clause has weight one and every variable occurs at most d times?",
    "deliverable": "An influence calculation and an overlap counterexample."
  },
  {
    "unit": "core-sat-random",
    "slug": "conditional-estimator-limited-support",
    "tier": "examiner",
    "kind": "construction",
    "title": "Derandomize a correlated finite distribution",
    "prompt": "You are given M Boolean assignments with rational probabilities summing to one. Their distribution need not be independent. Design a conditional-expectation procedure that fixes variables one at a time and returns satisfied weight at least the distributional mean. Give runtime and specify how zero-probability branches are handled.",
    "prerequisites": [
      "conditional expectation",
      "finite probability spaces"
    ],
    "minutes": 40,
    "guide": [
      "Maintain the surviving assignments and their original probability masses. For each next bit value with positive surviving mass, compute the weighted average objective among that child’s assignments. The parent conditional mean is the mass-weighted average of the positive children, so one child has value at least the parent. Discard a zero-mass child rather than defining a conditional expectation there.",
      "After all coordinates are fixed, every surviving assignment is the same word and the conditional mean equals its actual objective. Evaluating all M objectives once and aggregating by prefixes gives a polynomial implementation, for example O(Mn+M·formula size) arithmetic operations. This construction preserves the supplied expectation but does not justify a full-independence clause formula for the starting distribution."
    ],
    "followup": "When is simply taking the best support assignment faster than this prefix procedure?",
    "deliverable": "A distribution-independent derandomization invariant and a finite-support implementation."
  },
  {
    "unit": "core-sat-random",
    "slug": "random-cut-cnf-reduction",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Encode a cut objective as two-literal satisfaction",
    "prompt": "For each nonnegative weighted graph edge uv create the two clauses (x_u∨x_v) and (¬x_u∨¬x_v), each of weight w_uv. Prove satisfied clause weight equals total edge weight plus cut weight. Derive what a 3/4 clause-weight guarantee implies for cut weight, and explain the effect of the additive baseline.",
    "prerequisites": [
      "MAX-CUT",
      "weighted MAX-2SAT"
    ],
    "minutes": 40,
    "guide": [
      "If the endpoints receive different bits, both clauses are true; if equal, exactly one is true. Summing yields SAT(x)=W+CUT(x), and OPT_SAT=W+OPT_CUT. A guarantee SAT(x)≥(3/4)(W+OPT_CUT) gives CUT(x)≥(3/4)OPT_CUT−W/4.",
      "Since OPT_CUT≤W, this expression does not imply a 3/4 cut approximation; at OPT_CUT=W it gives only W/2. Fair assignments have expected cut W/2 and expected satisfaction 3W/2, consistent with the identity. An affine objective shift must be tracked in a reduction rather than cancelling ratios as though objectives were proportional."
    ],
    "followup": "Using OPT_CUT≥W/2, what is the weakest multiplicative ratio certified by the displayed inequality?",
    "deliverable": "An exact objective identity and a ratio-transfer calculation."
  },
  {
    "unit": "core-sat-random",
    "slug": "small-bias-exhaustive-study",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: finite support versus clause locality",
    "prompt": "For n≤8, enumerate uniform linear subspaces of F₂^n given by generator matrices of rank at most four. For clause widths k≤4, compare their worst clause-failure probability with 2^−k. The baseline is full-cube enumeration. Prove a rank criterion characterizing when every width-k marginal is uniform.",
    "prerequisites": [
      "linear algebra over F₂",
      "k-wise independence"
    ],
    "minutes": 90,
    "guide": [
      "Sampling a uniform generator seed gives a uniform image under any chosen set of output coordinates. That marginal is uniform on all k bits exactly when the corresponding k columns of the generator matrix have rank k. Consequently every width-at-most-k marginal is fair and independent exactly when every such column subset is linearly independent.",
      "Enumerate both positive and negative literal patterns; checking only all-positive clauses can miss a nonuniform marginal whose missing or heavy atom lies elsewhere. Report the smallest dependent column sets and their exact violating probabilities. A rank-certified k-wise independent family with a wrong clause probability is a failure. The target is a finite characterization and experiment, not a new pseudorandom construction."
    ],
    "followup": "Why is pairwise independence equivalent to nonzero, distinct generator columns?",
    "deliverable": "A proved rank criterion and exact probability tables."
  },
  {
    "unit": "core-sat-random",
    "slug": "bias-grid-certification",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: certify a grid search for biases",
    "prompt": "For a weighted CNF of total weight W and normalized width at most k, let f(p_1,…,p_n) be expected satisfaction under independent marginals. Prove |f(p)−f(q)|≤sum D_i|p_i−q_i|, where D_i is incident weight. Use this to certify an additive εW grid approximation for n≤8, comparing with all Boolean assignments.",
    "prerequisites": [
      "multilinear expectations",
      "coupling",
      "bounded influence"
    ],
    "minutes": 90,
    "guide": [
      "Couple assignments by independent uniform U_i and declare bit i true when U_i≤p_i or q_i. Coordinate i differs with probability |p_i−q_i|. The deterministic change in objective is at most the sum of D_i over differing coordinates, so expectation gives the Lipschitz bound. Since sum D_i≤kW, mesh ε/k in every coordinate suffices when rounding to a grid point.",
      "The maximum of a multilinear expectation on [0,1]^n occurs at a Boolean vertex: fix one coordinate at a maximizing endpoint repeatedly. Thus exact Boolean optimization is the baseline and the grid should never beat it beyond numerical tolerance. Record the cost of the grid and its certified error; exceeding OPT or missing the additive bound is failure. The exercise studies certification, not a polynomial-time solution for arbitrary n."
    ],
    "followup": "Can the mesh depend on D_i to reduce the total number of grid points?",
    "deliverable": "A coupling proof and a certified finite-dimensional experiment."
  },
  {
    "unit": "core-sat-lp",
    "slug": "all-signs-gap",
    "tier": "doctoral",
    "kind": "construction",
    "title": "An exact integrality gap on all sign patterns",
    "prompt": "For k≥2 take all 2^k clauses containing each of x_1,…,x_k exactly once, with every sign pattern and unit weight. Compute the Boolean optimum, the clause-LP optimum, and the value of independent rounding at y_i=1/2. Explain which k gives the strongest gap.",
    "prerequisites": [
      "clause LP",
      "Boolean sign patterns"
    ],
    "minutes": 40,
    "guide": [
      "Every assignment falsifies precisely the clause whose literals all oppose that assignment, so its value is exactly 2^k−1. The LP setting y_i=1/2,z_C=1 is feasible because each clause has literal-marginal sum k/2≥1, and it reaches the trivial upper bound 2^k.",
      "Independent fair rounding has the same value 2^k−1 in every outcome. Thus the integral-to-LP ratio is 1−2^−k, minimized at k=2, where it is 3/4. This certifies that a 3/4 comparison with this LP cannot be improved for unrestricted MAX-SAT without strengthening the relaxation."
    ],
    "followup": "If clause weights differ, express the integral optimum in terms of the lightest clause.",
    "deliverable": "Exact primal and integral certificates for the parameterized family."
  },
  {
    "unit": "core-sat-lp",
    "slug": "clause-extremal-chord",
    "tier": "doctoral",
    "kind": "proof",
    "title": "The extremal marginal distribution for one clause",
    "prompt": "Fix a normalized clause with k≥2 literals and literal-truth marginals q_i∈[0,1] summing to z∈[0,1]. Minimize its independent-rounding success probability over these marginals. Prove the resulting function lies above its chord from z=0 to z=1, and characterize equality.",
    "prerequisites": [
      "AM–GM",
      "concavity"
    ],
    "minutes": 45,
    "guide": [
      "Failure is product(1−q_i). At fixed sum z, AM–GM makes this product largest when all q_i=z/k; hence the minimum success is g_k(z)=1−(1−z/k)^k. For k≥2, g_k is strictly concave on (0,1), as its second derivative is negative.",
      "Since g_k(0)=0, concavity yields g_k(z)≥z g_k(1), with strict inequality for 0<z<1. Equality in the marginal step requires equal q_i, except at the trivial zero endpoint. The two inequalities have different equality conditions, which matter when diagnosing whether an LP-rounding analysis can be tight."
    ],
    "followup": "What changes if the marginal sum exceeds one but z_C is capped at one?",
    "deliverable": "An extremal calculation and complete equality conditions."
  },
  {
    "unit": "core-sat-lp",
    "slug": "optimal-face-rounding",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "LP-optimal marginals can have different rounding values",
    "prompt": "For a single positive k-literal clause of weight one, restrict to LP optima satisfying sum y_i=1. Determine the minimum and maximum independent-rounding success on this optimal face, including all equality conditions. Discuss what an LP solver’s optimal objective alone certifies.",
    "prerequisites": [
      "LP optimal faces",
      "product optimization"
    ],
    "minutes": 40,
    "guide": [
      "Every point on the simplex y_i≥0,sum y_i=1 with z=1 is LP-optimal. AM–GM gives maximum failure (1−1/k)^k at the uniform point, so minimum success is 1−(1−1/k)^k. The maximum success is one, attained exactly when some y_i=1, forcing the other coordinates to zero.",
      "The LP objective is identically one across this face, yet rounding values vary. An arbitrary optimal solver output therefore supports the worst-face guarantee, while a favorable integral optimum gives exact satisfaction. A secondary objective or perturbation can select a face point, but its effect on global rounding must be analyzed rather than inferred from unchanged LP value."
    ],
    "followup": "How large is the difference between the two extremes as k tends to infinity?",
    "deliverable": "A face-wise extremal analysis and its algorithmic implication."
  },
  {
    "unit": "core-sat-lp",
    "slug": "weighted-gap-sensitivity",
    "tier": "examiner",
    "kind": "construction",
    "title": "Perturb a tight two-variable gap",
    "prompt": "Give the four possible signed two-literal clauses on x,y positive weights a,b,c,d. Compute the LP optimum and Boolean optimum exactly. Characterize when the integral-to-LP ratio is exactly 3/4 and quantify how imbalance in one weight changes the ratio.",
    "prerequisites": [
      "MAX-2SAT LP",
      "weighted objective"
    ],
    "minutes": 35,
    "guide": [
      "Each assignment falsifies one distinct clause, so OPT=W−min(a,b,c,d), where W=a+b+c+d. The half-integral setting x=y=1/2 makes every clause sum one and z=1, proving LP=W. Thus the gap is 1−min weight/W.",
      "Because min weight≤W/4, the ratio is at least 3/4, with equality exactly when all weights coincide. If one weight decreases while the others are fixed, the cheapest clause becomes easier to sacrifice and the ratio increases. This demonstrates that exact LP tightness depends on balanced clause prices, not only on the incidence pattern."
    ],
    "followup": "Can merging repeated copies of a clause change either optimum?",
    "deliverable": "Two exact optimum formulas and an equality characterization."
  },
  {
    "unit": "core-sat-lp",
    "slug": "approximate-solver-robustness",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: certify rounding from an approximate LP",
    "prompt": "Suppose y∈[0,1]^n,z∈[0,1]^m violate each clause constraint by at most δ_C≥0. A feasible LP dual gives upper bound U≥OPT, and sum w_C z_C≥U−τ. Prove that the better of fair and LP-marginal rounding has expectation at least (3/4)(OPT−τ−sum w_Cδ_C). Test the certificate on rationally perturbed small instances.",
    "prerequisites": [
      "LP certificates",
      "clause-wise 3/4 analysis"
    ],
    "minutes": 85,
    "guide": [
      "Replace each z_C by z′_C=max(0,z_C−δ_C). Then z′ is feasible with the same y and its objective is at least sum w_Cz_C−sum w_Cδ_C≥OPT−τ−sum w_Cδ_C. The usual clause-wise mixed-rounding proof applies to z′, without claiming the original infeasible z is a valid relaxation solution.",
      "Use exhaustive Boolean optimization and exact rational perturbations as the baseline. Report the dual certificate, total weighted violation, and the derived bound; compare exact rounding expectations by enumerating assignments. Failure means a certified expectation below the displayed lower bound. This gives a robustness exercise with a known target rather than an assertion that floating-point solver status proves feasibility."
    ],
    "followup": "How should errors in y outside [0,1] be charged after clipping?",
    "deliverable": "A perturbation theorem and a small exact certificate audit."
  },
  {
    "unit": "core-sat-lp",
    "slug": "marginal-extremal-grid",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: numerically audit the clause inequality",
    "prompt": "For widths 2≤k≤6 and z on {0,1/10,…,1}, enumerate rational marginal vectors q_i on the same grid with sum z. Compare minimum independent success with 1−(1−z/k)^k and its linear chord. Use AM–GM as the proved baseline, and explain grid effects when z/k is not a grid point.",
    "prerequisites": [
      "AM–GM equality",
      "finite enumeration"
    ],
    "minutes": 75,
    "guide": [
      "The continuous minimum is attained by equal marginals. On a fixed grid, a product-maximizing vector has coordinates differing by at most one grid step: shifting mass from a larger q to a smaller q increases (1−q_i)(1−q_j) until they balance. Thus the exact discrete optimum can be predicted from the quotient and remainder of 10z divided by k.",
      "Report continuous, discrete, and chord values separately. A discrete value below the continuous bound is failure, while a strict discrete excess can arise from divisibility rather than a stronger continuous theorem. Include endpoint equality checks and all literal sign patterns by mapping variable marginals to literal marginals. The finite study audits a specified inequality; it does not substitute sampling for proof."
    ],
    "followup": "Derive an O(kh²) bound for the grid penalty at mesh h away from singular endpoints.",
    "deliverable": "A balancing proof and reproducible extremal tables."
  },
  {
    "unit": "core-sdp-cut",
    "slug": "triangle-gap-certificate",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Solve the triangle relaxation exactly",
    "prompt": "For the unit-weight triangle compute MAX-CUT, its Gram SDP optimum, and the expected cut of hyperplane rounding at an optimal vector solution. Prove the SDP upper bound directly from the squared norm of the vector sum.",
    "prerequisites": [
      "Gram SDP",
      "hyperplane separation"
    ],
    "minutes": 40,
    "guide": [
      "For unit vectors v_1,v_2,v_3, nonnegativity of ||v_1+v_2+v_3||² gives sum_{i<j}v_i·v_j≥−3/2. Therefore the SDP objective sum(1−v_i·v_j)/2 is at most 9/4, attained by three coplanar vectors at angles 120 degrees.",
      "An integral cut has at most two triangle edges, and two are attainable. Each vector pair is separated with probability 2/3, so the expected rounded cut is two, giving integral-to-SDP ratio 8/9. Since the vector sum is zero, a nondegenerate hyperplane cannot put all three on the same side; every rounded cut actually has value two."
    ],
    "followup": "Why does the triangle gap not equal the universal worst hyperplane ratio?",
    "deliverable": "Exact primal, integral, and rounding certificates."
  },
  {
    "unit": "core-sdp-cut",
    "slug": "spectral-dual",
    "tier": "doctoral",
    "kind": "construction",
    "title": "Build a spectral dual certificate for MAX-CUT",
    "prompt": "Let L be the weighted Laplacian of a nonnegative weighted graph. Write the Gram SDP as max tr(LX)/4 with X PSD and diagonal one. Prove that any λ with Diag(λ)−L/4 PSD certifies upper bound sum λ_i, and construct the uniform certificate λ_i=λ_max(L)/4.",
    "prerequisites": [
      "PSD matrices",
      "trace inner products",
      "graph Laplacian"
    ],
    "minutes": 45,
    "guide": [
      "For PSD A,X, tr(AX)≥0, since tr(AX)=tr(A^(1/2)XA^(1/2)) and the latter matrix is PSD. Apply this to A=Diag(λ)−L/4. Because X_ii=1, the inequality rearranges to tr(LX)/4≤sum λ_i.",
      "Taking every λ_i=λ_max(L)/4 makes A=(λ_max(L)I−L)/4 PSD by the spectral theorem. This bounds the SDP by nλ_max(L)/4 and hence bounds every integral cut. For a triangle λ_max=3, recovering 9/4. Equality requires the range of X to lie in the top-eigenspace for this uniform certificate."
    ],
    "followup": "When is the bound larger than the trivial total-edge-weight bound?",
    "deliverable": "A dual-feasibility proof and a computable spectral upper bound."
  },
  {
    "unit": "core-sdp-cut",
    "slug": "bipartite-exactness",
    "tier": "examiner",
    "kind": "proof",
    "title": "Characterize when the SDP reaches total edge weight",
    "prompt": "Assume every graph edge has positive weight. Prove the MAX-CUT SDP value equals total edge weight W if and only if the graph is bipartite. Show that hyperplane rounding is exact on every SDP optimum attaining W.",
    "prerequisites": [
      "bipartite graphs",
      "unit-vector equality"
    ],
    "minutes": 40,
    "guide": [
      "Every edge contribution is at most its weight. A bipartition assigns antipodal unit vectors to its sides, attaining W. Conversely attaining W forces v_u·v_v=−1 on every edge because all weights are positive; equality for unit vectors implies v_v=−v_u.",
      "Along an odd cycle successive sign reversals would give v=−v, impossible for a unit vector. Thus the graph is bipartite. A random hyperplane separates every antipodal edge except on a probability-zero orthogonality event, so it returns value W. Zero-weight edges must be omitted from the converse graph characterization."
    ],
    "followup": "Does a connected bipartite graph force an attaining solution to have rank one?",
    "deliverable": "An iff theorem and an outcome-level rounding proof."
  },
  {
    "unit": "core-sdp-cut",
    "slug": "near-psd-repair",
    "tier": "examiner",
    "kind": "construction",
    "title": "Repair a slightly indefinite numerical Gram matrix",
    "prompt": "Suppose a symmetric matrix X has diagonal one and minimum eigenvalue at least −δ, δ≥0. Prove Xhat=(X+δI)/(1+δ) is a feasible Gram matrix. Express its MAX-CUT objective in terms of the original value S and total edge weight W, and derive a rounding guarantee if S≥SDP*−τ.",
    "prerequisites": [
      "eigenvalue shifts",
      "SDP rounding tolerance"
    ],
    "minutes": 45,
    "guide": [
      "Adding δI makes every eigenvalue nonnegative, and division by 1+δ restores the diagonal to one. For off-diagonal edges Xhat_uv=X_uv/(1+δ). Therefore Shat=(S+δW/2)/(1+δ), an exact identity.",
      "For nonnegative weights Shat≥S/(1+δ), so hyperplane rounding gives expectation at least α_GW(SDP*−τ)/(1+δ). A certified lower bound on the minimum eigenvalue is needed to justify the repair; an unverified floating-point eigenvalue estimate is not itself such a certificate. Factorization accuracy introduces a separate geometric error if vectors are computed approximately."
    ],
    "followup": "How can a rational diagonal-dominance bound produce a conservative certified δ?",
    "deliverable": "An explicit feasible repair and quantitative objective-error propagation."
  },
  {
    "unit": "core-sdp-cut",
    "slug": "rank-two-angle-sweep",
    "tier": "examiner",
    "kind": "construction",
    "title": "Derandomize a rank-two vector solution by sweeping angles",
    "prompt": "Given unit vectors in the plane and a nonnegative weighted graph, design a deterministic algorithm finding a hyperplane cut whose value is at least the average random-hyperplane value. Count candidate cuts and explain how to sweep all sign changes efficiently.",
    "prerequisites": [
      "planar angular order",
      "hyperplane rounding"
    ],
    "minutes": 45,
    "guide": [
      "A vertex changes side only when the normal direction becomes perpendicular to its vector. These are at most 2n event angles over a full turn; between events the cut is constant. Evaluate one angle in each open interval, excluding zero-probability boundary degeneracies. The largest interval value is at least their length-weighted average.",
      "Sort the events and update the cut when the affected vertices flip. Process simultaneous events together so no artificial boundary cut is counted as a full-measure interval. Updating incident edges over all events costs O(m) after sorting, yielding O(n log n+m) arithmetic operations once vector angles can be compared reliably."
    ],
    "followup": "What exact predicates would replace floating-point angle comparisons for rational planar vectors?",
    "deliverable": "A candidate enumeration proof and a sweep algorithm."
  },
  {
    "unit": "core-sdp-cut",
    "slug": "odd-cycle-sdp-family",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: solve every odd-cycle SDP",
    "prompt": "For odd n≥3 prove the unit-cycle SDP optimum is n(1+cos(π/n))/2, while MAX-CUT is n−1. Construct an attaining rank-two solution and a spectral dual certificate. Verify the formulas for n≤21 against numerical SDP output and exact angular integration.",
    "prerequisites": [
      "cycle eigenvalues",
      "spectral SDP dual",
      "planar embeddings"
    ],
    "minutes": 95,
    "guide": [
      "Place consecutive cycle vectors at angle π−π/n. Because n is odd, the total turn is (n−1)π, an integer multiple of 2π, so the embedding closes. Every edge contributes (1+cos(π/n))/2. The cycle Laplacian has eigenvalues 2−2cos(2πj/n), whose maximum is 2+2cos(π/n).",
      "The uniform spectral dual therefore matches the constructed objective. Hyperplane rounding has expectation n·(π−π/n)/π=n−1, so every positive-measure rounded cut is optimal because no cut exceeds n−1. Record numerical residuals against these exact formulas; an SDP value above the certified optimum beyond tolerance or a mismatched angular average is failure. This is a known-target family study."
    ],
    "followup": "Determine the limiting integral-to-SDP ratio as n grows.",
    "deliverable": "Matching primal-dual formulas and a reproducible verification table."
  },
  {
    "unit": "core-sdp-cut",
    "slug": "signed-reward-shift",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: transfer rounding to signed edge rewards",
    "prompt": "For each edge give a nonnegative reward for either equality or inequality of endpoint signs. Formulate a Gram SDP and prove the same α_GW edgewise guarantee for total reward. Then translate it to a signed MAX-CUT objective with negative weights, retaining the additive shift. Compare with exact enumeration for n≤12.",
    "prerequisites": [
      "hyperplane probabilities",
      "affine objective shifts"
    ],
    "minutes": 90,
    "guide": [
      "An inequality edge has reward probability θ/π and SDP contribution (1−cos θ)/2. An equality edge has probability 1−θ/π and contribution (1+cos θ)/2; apply the same angular inequality at angle π−θ. All reward weights are nonnegative, so the inequalities sum safely.",
      "For signed cut weights w, replace each negative edge by an equality reward |w|. The reward objective is signed-cut value plus W_−=sum_{w<0}|w|. Hence the guarantee becomes ALG_signed≥α OPT_signed−(1−α)W_−, rather than a pure α ratio. Exact sign enumeration is the baseline; dropping this additive term or obtaining an incompatible reward expectation is failure."
    ],
    "followup": "Why can the resulting signed objective be negative even though reward is always nonnegative?",
    "deliverable": "A correct signed-reward formulation and a shift-aware comparison."
  },
  {
    "unit": "core-color-sdp",
    "slug": "neighborhood-two-coloring",
    "tier": "doctoral",
    "kind": "construction",
    "title": "Exploit a high-degree neighborhood without knowing a coloring",
    "prompt": "In a promised 3-colorable graph, prove every open neighborhood is bipartite. Give an algorithm that repeatedly two-colors and removes a neighborhood of size at least σ, using at most 2n/σ fresh colors before the residual maximum degree drops below σ.",
    "prerequisites": [
      "3-colorability promise",
      "bipartite recognition"
    ],
    "minutes": 40,
    "guide": [
      "In any proper 3-coloring, neighbors of v cannot use v’s color, so their induced graph uses at most two colors. A BFS bipartite test finds such a coloring without knowing the promised global coloring. If degree(v)≥σ in the current induced graph, remove and two-color N(v).",
      "Every iteration removes at least σ vertices, so there are at most floor(n/σ) iterations. Assign a new two-color palette each time; edges across removed groups then cannot be monochromatic. The surviving graph is still 3-colorable and has maximum degree below σ, making it suitable for a low-degree semicoloring routine."
    ],
    "followup": "Why does this structural shortcut fail for the neighborhood of a 4-colorable graph?",
    "deliverable": "A promise-based subroutine with exact removal and palette accounting."
  },
  {
    "unit": "core-color-sdp",
    "slug": "triangle-vector-rigidity",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Triangles force rigidity in a vector 3-coloring",
    "prompt": "Suppose unit vectors satisfy v_u·v_v≤−1/2 on edges. Prove that on a triangle all three edge products equal −1/2 and the vector sum is zero. Deduce that the two nonadjacent tips of a diamond formed by two triangles sharing an edge must receive the same vector.",
    "prerequisites": [
      "Gram positivity",
      "vector coloring"
    ],
    "minutes": 40,
    "guide": [
      "For a triangle, ||a+b+c||²=3+2(a·b+a·c+b·c)≤0. Nonnegativity forces equality throughout: all products are −1/2 and a+b+c=0. This is stronger than three separate angular lower bounds.",
      "If triangles abc and abd share edge ab, the identities give c=−a−b=d. Thus local triangle structure propagates exact vector equalities across a graph. It does not force those tips to be adjacent or distinctly colored, and a vector solution still need not encode a discrete global three-color partition."
    ],
    "followup": "Use the same norm argument to show a four-clique has no vector 3-coloring.",
    "deliverable": "A rigidity lemma and a diamond propagation consequence."
  },
  {
    "unit": "core-color-sdp",
    "slug": "angular-slack-exponent",
    "tier": "examiner",
    "kind": "proof",
    "title": "Track numerical angular slack through the color exponent",
    "prompt": "Assume every edge product is at most −1/2+η with 0≤η<1/2. Define p(η)=1−arccos(−1/2+η)/π. Derive a hyperplane semicoloring using O(Δ^{ln 2/ln(1/p(η))}) colors, and quantify how η=O(1/ln n) affects the color count when Δ≤n.",
    "prerequisites": [
      "hyperplane collision probability",
      "asymptotic sensitivity"
    ],
    "minutes": 50,
    "guide": [
      "For t independent planes an edge survives with the same signature with probability at most p(η)^t. Take t=ceil(ln(2Δ)/ln(1/p(η))) so expected monochromatic edges are at most n/4. Removing endpoints gives a constant-fraction semicoloring with at most 2^t=O(Δ^{a(η)}) signatures.",
      "On a fixed interval η∈[0,η0] below 1/2, arccos and the exponent a(η) are differentiable with bounded derivatives. Hence a(η)=a(0)+O(η), and Δ^{a(η)−a(0)}≤exp(O(η ln n)). An inverse-logarithmic edge error changes the bound by a constant factor; a fixed positive error changes its polynomial exponent."
    ],
    "followup": "Why must the constants be uniform on a closed interval away from p=1?",
    "deliverable": "A slack-sensitive rounding bound and a precision requirement."
  },
  {
    "unit": "core-color-sdp",
    "slug": "geometric-semicoloring-sum",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "When recursion avoids an extra logarithmic factor",
    "prompt": "Assume every s-vertex induced subgraph admits a semicoloring of at least (1−ρ)s vertices using at most A s^b colors, with fixed 0<ρ<1 and b>0. Prove full coloring uses at most A n^b/(1−ρ^b) colors. Contrast with a semicoloring bound depending only on a fixed global Δ.",
    "prerequisites": [
      "semicoloring recursion",
      "geometric series"
    ],
    "minutes": 40,
    "guide": [
      "After r successful rounds at most ρ^r n vertices remain. With disjoint palettes, the total color count is bounded by sum_r A(ρ^r n)^b=A n^b/(1−ρ^b), extending the finite sum to an infinite one. Integer rounding contributes at most O(log n) additional colors if the assumed bound is rounded up.",
      "If the only available guarantee is AΔ^a per round with Δ fixed from the original graph, that quantity need not shrink, and O(log n) rounds can cost O(Δ^a log n). The improved geometric conclusion is conditional on an s-dependent guarantee for every residual graph; it must not be silently applied to a routine that provides only the global-degree bound."
    ],
    "followup": "What changes when b=0, or when ρ tends to one with n?",
    "deliverable": "A recursion theorem with clearly separated hypotheses."
  },
  {
    "unit": "core-color-sdp",
    "slug": "hyperplane-signature-entropy",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "Repeated planes do not create independent signatures",
    "prompt": "Suppose t nominal hyperplanes consist of r independent planes, each duplicated any positive number of times, with t≥r. For an edge of angle θ, compute its signature-collision probability and the maximum number of distinct signatures. Explain why counting 2^t colors and using (1−θ/π)^t are both misleading.",
    "prerequisites": [
      "independence",
      "binary hyperplane signatures"
    ],
    "minutes": 35,
    "guide": [
      "Duplicating a plane repeats an existing sign bit and adds no new constraint to signature equality. The edge collides exactly when all r independent original planes fail to separate it, giving probability (1−θ/π)^r. There are at most 2^r realized signatures regardless of t.",
      "In the extreme r=1, arbitrarily many duplicate bits still yield only two labels and edge collision probability 1−θ/π. The independence parameter is the number of independent geometric tests, not the length of a stored bit string. A shared pseudorandom generator needs a proved replacement property before a product bound can be asserted."
    ],
    "followup": "What part of the proof remains valid for pairwise-independent planes?",
    "deliverable": "Exact collision and signature counts under duplicated randomness."
  },
  {
    "unit": "core-color-sdp",
    "slug": "simplex-k-semicoloring",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: generalize semicoloring to k-vector colorings",
    "prompt": "For fixed k≥3 assume unit vectors obey edge product≤−1/(k−1). Derive the t-plane semicoloring bound with collision p_k=1−arccos(−1/(k−1))/π and color exponent ln 2/ln(1/p_k). Construct the regular-simplex feasibility witness for every k-colorable graph and compare exponents for k=3,…,8.",
    "prerequisites": [
      "regular simplices",
      "hyperplane rounding",
      "alteration"
    ],
    "minutes": 90,
    "guide": [
      "Use vectors sqrt(k/(k−1))(e_i−1/k·1) for the k colors; they have norm one and distinct products −1/(k−1). After t planes an edge collision has probability at most p_k^t. Taking p_k^t≤1/(2Δ) controls expected monochromatic edges and yields a constant-fraction semicoloring with O(Δ^{ln2/ln(1/p_k)}) labels.",
      "Compute exponents from the stated formula and verify collision probabilities by exact angular integration or reproducible simulation on simplex edges. The baseline is p_k^t, and systematic deviations beyond sampling error are failure. This does not automatically yield the same full-coloring exponent balance as k=3, because high-degree neighborhoods now require coloring a (k−1)-colorable graph."
    ],
    "followup": "What is the limit of p_k and the color exponent as k grows?",
    "deliverable": "A parameterized semicoloring theorem and a bounded comparison."
  },
  {
    "unit": "core-color-sdp",
    "slug": "kneser-vector-gap",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: a vector 3-coloring with chromatic number four",
    "prompt": "Let vertices be the 15 two-element subsets of {1,…,6}, adjacent when disjoint. Set v_A=(1_A−(1/3)1)/sqrt(4/3). Prove these form a vector 3-coloring but the graph has chromatic number four. You may first prove that every pairwise-intersecting family of two-subsets is a star or a triangle.",
    "prerequisites": [
      "centered incidence vectors",
      "intersecting edge families"
    ],
    "minutes": 100,
    "guide": [
      "The squared centered norm is 2−4/6=4/3. For disjoint A,B the centered dot product is −4/6, so normalized product is −1/2. A color class is a pairwise-intersecting edge family in K6: if it has no common vertex, choosing two intersecting edges forces all others into their triangle.",
      "A triangle class has at most three members and a star at most five, so three classes covering 15 pairs would all have to be disjoint full stars; distinct full stars intersect, which is impossible. Four colors suffice by assigning pairs first containing 1, then 2, then 3, and the remaining pairs inside {4,5,6}. Exhaustive coloring on 15 vertices is an optional baseline; any Gram or coloring-certificate mismatch is failure."
    ],
    "followup": "Which step demonstrates that vector feasibility is weaker than actual three-colorability?",
    "deliverable": "An explicit Gram witness and an elementary chromatic-number proof."
  },
  {
    "unit": "core-gaussian-color",
    "slug": "mills-ratio-proof",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Prove the Gaussian tail bounds with their prefactors",
    "prompt": "For standard normal density φ and upper tail Q(t), prove tφ(t)/(1+t²)≤Q(t)≤φ(t)/t for t>0. Use the proof to state a uniform two-sided asymptotic bound Q(t)=Θ(e^(−t²/2)/t) for t≥1, with explicit constants.",
    "prerequisites": [
      "integration by parts",
      "Gaussian density"
    ],
    "minutes": 45,
    "guide": [
      "Since s≥t, Q(t)=∫_t^∞φ(s)ds≤(1/t)∫_t^∞sφ(s)ds=φ(t)/t. Integration by parts gives Q(t)=φ(t)/t−∫_t^∞φ(s)/s² ds≥φ(t)/t−Q(t)/t², which rearranges to the lower bound.",
      "For t≥1, t/(1+t²)≥1/(2t), so φ(t)/(2t)≤Q(t)≤φ(t)/t. The constants are therefore 1/(2sqrt(2π)) and 1/sqrt(2π) in front of e^(−t²/2)/t. The prefactor cannot be discarded when optimizing logarithmic corrections in a rounding threshold."
    ],
    "followup": "Derive the next asymptotic term by applying integration by parts once more.",
    "deliverable": "A full tail proof with explicit usable constants."
  },
  {
    "unit": "core-gaussian-color",
    "slug": "conditional-negative-correlation",
    "tier": "doctoral",
    "kind": "proof",
    "title": "A conditional tail estimate for negatively correlated projections",
    "prompt": "Let U,V be standard normals with correlation ρ≤−a for fixed 0<a<1. Prove Pr[V≥t | U≥t]≤Q(t sqrt((1+a)/(1−a))) for t≥0. Treat the degenerate case ρ=−1 separately.",
    "prerequisites": [
      "Gaussian orthogonal decomposition",
      "monotone tails"
    ],
    "minutes": 45,
    "guide": [
      "For −1<ρ<0 write V=ρU+sqrt(1−ρ²)Z with Z independent standard normal. On U≥t and V≥t one must have Z≥(t−ρU)/sqrt(1−ρ²)≥t(1−ρ)/sqrt(1−ρ²). This last threshold is t sqrt((1−ρ)/(1+ρ)).",
      "Independence lets one bound the conditional Z-tail by its unconditional Q value. Since (1−ρ)/(1+ρ) increases as ρ decreases, replacing ρ by −a weakens the bound safely. For ρ=−1, V=−U and simultaneous positive-threshold selection has probability zero; at t=0 the joint event also has probability zero."
    ],
    "followup": "For a=1/2, recover the sqrt(3)t conditional threshold used in the book.",
    "deliverable": "A parameterized conditional-tail lemma with endpoint handling."
  },
  {
    "unit": "core-gaussian-color",
    "slug": "isolate-versus-edge-repair",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Compare two deterministic repairs of the selected graph",
    "prompt": "For a selected vertex set S, compare keeping only isolated vertices of G[S] with deleting at most one endpoint per edge. Prove bounds |isolates|≥|S|−2e(S) and α(G[S])≥|S|−e(S). Give families where their actual outputs differ by an unbounded factor.",
    "prerequisites": [
      "induced subgraphs",
      "alteration"
    ],
    "minutes": 40,
    "guide": [
      "At most 2e(S) vertices are incident to any edge, giving the isolate bound. To obtain an independent set, repeatedly choose an existing edge and delete one endpoint; at most e(S) deletions are necessary because each deletion destroys at least the chosen edge and creates none.",
      "If G[S] is a matching on 2m vertices, the isolate-only repair keeps zero vertices, while one-endpoint repair keeps m. Add one isolated vertex to make the ratio m+1 versus one, which is unbounded. Expected-size analyses must use the repair actually implemented: the book’s conditional survival proof applies naturally to isolated selected vertices, while the edge-count inequality supports another valid repair."
    ],
    "followup": "Can maximal matching endpoints give an efficiently computable alternative repair certificate?",
    "deliverable": "Two proved inequalities and an explicit output-separation family."
  },
  {
    "unit": "core-gaussian-color",
    "slug": "expectation-amplification-cost",
    "tier": "examiner",
    "kind": "proof",
    "title": "Convert expected independent-set size into success probability",
    "prompt": "Let a randomized independent-set algorithm output X∈[0,n] with E X≥γn, 0<γ≤1. Prove Pr[X≥γn/2]≥γ/(2−γ), give a distribution attaining the limiting bound, and bound independent repetitions needed for failure probability at most η.",
    "prerequisites": [
      "bounded random variables",
      "probability amplification"
    ],
    "minutes": 40,
    "guide": [
      "Writing p=Pr[X≥γn/2], bound E X≤p n+(1−p)γn/2, with a limiting interpretation for strict failure. Rearranging gives p≥γ/(2−γ). A distribution concentrated at n and just below γn/2 approaches equality, so constant success probability independent of γ cannot follow from expectation alone.",
      "Independent repetitions miss with probability at most (1−p)^R≤e^(−pR). Thus R≥((2−γ)/γ)ln(1/η) suffices. Keeping the largest valid output never lowers success. The repetition factor depends on the extraction fraction γ, which is polynomially small in Δ for Gaussian rounding."
    ],
    "followup": "What bound follows if X has a known second moment and Paley–Zygmund is available?",
    "deliverable": "A sharp bounded-variable estimate and an amplification runtime."
  },
  {
    "unit": "core-gaussian-color",
    "slug": "full-coloring-runtime",
    "tier": "examiner",
    "kind": "construction",
    "title": "Account for both successful rounds and failed Gaussian trials",
    "prompt": "Assume every induced s-vertex residual graph has a randomized independent-set routine with expected output at least γs, for a fixed γ valid throughout. Design a full coloring algorithm and prove O(γ^−1 log n) colors and O(γ^−2 log n) expected routine calls.",
    "prerequisites": [
      "independent-set extraction",
      "amplification",
      "geometric decay"
    ],
    "minutes": 45,
    "guide": [
      "On a residual graph repeatedly run the routine until it returns at least γs/2 vertices. The bounded-variable argument gives success probability at least γ/2, so the expected calls for that successful round are at most 2/γ. Color the returned independent set with a new color and remove it.",
      "The residual count shrinks by factor at most 1−γ/2, so O(γ^−1 log n) successful rounds suffice. Multiplying by the expected calls per round gives O(γ^−2 log n) total calls. Feasibility is checked on every output, and induced subgraphs inherit the original vector assignment and maximum-degree bound."
    ],
    "followup": "How does a dynamically improving degree bound alter the sum of runtimes?",
    "deliverable": "A Las Vegas coloring procedure with explicit color and call counts."
  },
  {
    "unit": "core-gaussian-color",
    "slug": "weighted-extraction",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: weighted Gaussian independent-set extraction",
    "prompt": "Assign nonnegative weights w_v and suppose adjacent vectors have product at most −1/2. Select above t and keep selected vertices with no selected neighbor. If ΔQ(sqrt(3)t)≤1/2, prove expected retained weight≥(Q(t)/2)sum w_v. Compare with exact maximum-weight independent sets for small planted 3-colorable graphs.",
    "prerequisites": [
      "conditional Gaussian tails",
      "weighted indicators"
    ],
    "minutes": 85,
    "guide": [
      "For each vertex v, conditional on its selection, a union bound over neighbors bounds deletion probability by ΔQ(sqrt(3)t). Hence its survival probability is at least Q(t)/2. Multiply by its nonnegative weight and sum; no independence among vertex survival events is needed.",
      "The resulting objective is compared with total weight, which upper-bounds weighted OPT, so it also gives the same approximation fraction against OPT. Use exhaustive subset enumeration as the baseline and exact or certified Gaussian tail values for the bound. Failure means a nonindependent output or an expectation below the proved weighted bound; variance can be dominated by one heavy vertex and should be reported separately."
    ],
    "followup": "Can degree-specific survival bounds improve the weighted sum without changing one global threshold?",
    "deliverable": "A weighted extension theorem and a reproducible exact-optimum comparison."
  },
  {
    "unit": "core-gaussian-color",
    "slug": "logarithmic-threshold-refinement",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: optimize the logarithmic correction",
    "prompt": "For sufficiently large Δ choose t²=(2/3)ln Δ−(1/3)ln ln Δ+C. Using the conditional Gaussian bound, prove a fixed sufficiently large C makes ΔQ(sqrt(3)t)≤1/2 and yields expected independent-set size Ω(nΔ^−1/3(ln Δ)^−1/3). Compare with the book’s simpler threshold and treat small Δ separately.",
    "prerequisites": [
      "Mills ratio",
      "conditional survival",
      "asymptotic error control"
    ],
    "minutes": 100,
    "guide": [
      "The upper tail gives ΔQ(sqrt(3)t)≤Δ exp(−3t²/2)/(sqrt(6π)t)=e^(−3C/2)(ln Δ)^(1/2)/(sqrt(6π)t). Since t² is asymptotic to (2/3)ln Δ, this is below one half for a fixed sufficiently large C and all large Δ.",
      "The lower tail gives Q(t)=Ω(e^(−t²/2)/t)=Ω(Δ^−1/3(ln Δ)^(1/6)/(ln Δ)^(1/2)). Conditional survival preserves at least half this mass. Choose an explicit finite cutoff and use a greedy bounded-degree independent set below it. Numerically compare exact Q-based certificates across Δ; a negative t² or an unmet survival inequality is failure. This is a specified analytical refinement, with no novelty claim."
    ],
    "followup": "How does the logarithmic exponent change for general correlation bound −a?",
    "deliverable": "A rigorous refined asymptotic bound and finite-cutoff verification."
  },
  {
    "unit": "core-dual-cover",
    "slug": "lp-threshold-rounding",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Recover the frequency bound from a primal LP solution",
    "prompt": "Given a feasible fractional set cover x with each element in at most f sets, select every set with x_S≥1/f. Prove coverage and cost at most f times the fractional cost. Compare the certificate this gives with the tight-set primal–dual certificate.",
    "prerequisites": [
      "set-cover LP",
      "element frequency"
    ],
    "minutes": 35,
    "guide": [
      "For any element e, its incident variables sum to at least one. If fewer than or equal to f variables were all below 1/f, their sum would be below one, so some selected set covers e. For each selected set, c_S≤f c_Sx_S, giving the cost bound after summation.",
      "This argument uses a feasible primal fractional solution and LP≤OPT. Tight-set charging instead uses a feasible dual and bounds the number of purchased sets charged to each dual variable. Both yield factor f, but their certificates and required computational inputs differ: one need not assume that the threshold-selected sets are dual-tight."
    ],
    "followup": "How should variables above one be treated when costs are nonnegative?",
    "deliverable": "A threshold algorithm and a precise comparison of two LP certificates."
  },
  {
    "unit": "core-dual-cover",
    "slug": "complete-graph-gap",
    "tier": "doctoral",
    "kind": "construction",
    "title": "An explicit frequency-two integrality gap",
    "prompt": "Let universe elements be edges of K_m and let each vertex define the set of its incident edges, with cost one. Prove the integral cover optimum is m−1 and the LP optimum is m/2. Give matching primal and dual fractional certificates.",
    "prerequisites": [
      "vertex cover as set cover",
      "LP duality"
    ],
    "minutes": 40,
    "guide": [
      "A cover omitting two vertices misses their connecting edge, so it must choose at least m−1 vertex sets, and that many suffice. Every element belongs to exactly two sets. Assign x_v=1/2 to obtain fractional cost m/2.",
      "Set every edge dual variable to 1/(m−1). Each vertex set contains m−1 edges and is therefore tight, while the total dual is C(m,2)/(m−1)=m/2. Weak duality proves LP optimality. The ratio is 2−2/m, showing an asymptotically sharp LP barrier for frequency two even with unit costs."
    ],
    "followup": "Why does inclusion-wise minimality of an integral cover not close this LP gap?",
    "deliverable": "An integral optimum and matching fractional primal-dual witnesses."
  },
  {
    "unit": "core-dual-cover",
    "slug": "growth-policy-cost",
    "tier": "examiner",
    "kind": "construction",
    "title": "Compare sequential and simultaneous dual growth",
    "prompt": "For a two-edge path u–v–w, view vertex cover as set cover, with costs c_u=c_w=1 and c_v=1+η, 0<η<1. Trace sequential uncovered-edge growth and simultaneous equal growth. Compute both costs and their dual certificates.",
    "prerequisites": [
      "primal–dual vertex cover",
      "tight constraints"
    ],
    "minutes": 45,
    "guide": [
      "Raise the dual of edge uv first. At value one, u becomes tight and is bought. Raising vw next makes v tight after η more growth, so buying v covers the remainder. The cost is 2+η and total dual 1+η; the true optimum is the center alone, cost 1+η.",
      "Under simultaneous growth of both uncovered edge duals, the center reaches tightness at time (1+η)/2 before either leaf reaches one. Buying v gives the optimum. This example shows that legal growth policies can produce different solutions, while both retain the frequency-two certificate. The sequential ratio tends to two as η tends to zero."
    ],
    "followup": "Would reverse deletion remove the purchased leaf after the center is bought?",
    "deliverable": "Two complete growth traces and a policy-sensitive ratio calculation."
  },
  {
    "unit": "core-dual-cover",
    "slug": "multicover-threshold",
    "tier": "examiner",
    "kind": "proof",
    "title": "Extend frequency rounding to bounded multicover",
    "prompt": "Each element e needs r_e distinct selected sets, appears in f_e sets, and a fractional solution satisfies sum_{S∋e}x_S≥r_e with 0≤x_S≤1. Let k=max_e(f_e−r_e+1). Prove selecting x_S≥1/k gives a feasible multicover of cost at most k times the fractional objective.",
    "prerequisites": [
      "multicover LP",
      "bounded variables"
    ],
    "minutes": 45,
    "guide": [
      "Suppose fewer than r_e incident variables meet the threshold. At most r_e−1 variables contribute at most one each, and the other f_e−r_e+1 contribute strictly less than 1/k. Their total is strictly below r_e−1+(f_e−r_e+1)/k≤r_e, contradicting feasibility.",
      "Every selected set satisfies c_S≤k c_Sx_S, so summing gives the factor. The upper bounds x_S≤1 are essential to the counting contradiction; they encode distinct selection rather than buying arbitrarily many copies of one set. Assume r_e≤f_e and coverability, and handle a vacuous empty universe separately."
    ],
    "followup": "How does the bound specialize to ordinary cover and to r_e=f_e?",
    "deliverable": "A multicover rounding theorem with its necessary upper-bound hypothesis."
  },
  {
    "unit": "core-dual-cover",
    "slug": "reverse-delete-certificate",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Prune a tight cover and distinguish its two guarantees",
    "prompt": "Start with all m vertex sets in the complete-graph instance above and the uniform tight dual. Apply arbitrary reverse deletion while maintaining coverage. Prove the resulting cover has exactly m−1 sets, is integral-optimal, but its cost-to-dual ratio still tends to two.",
    "prerequisites": [
      "minimal covers",
      "dual lower bounds"
    ],
    "minutes": 35,
    "guide": [
      "Deleting one vertex set leaves every edge covered by at least one endpoint. After a deletion, removing any second vertex set uncovers the edge between those two vertices. Thus every deletion order stops at exactly m−1 selected sets.",
      "The resulting cover is optimal by the two-omitted-vertices argument, yet the fixed dual remains m/2. Consequently cost/dual=2−2/m even though cost/OPT=1. A loose LP-based certificate does not imply a bad actual approximation on that instance; reverse deletion may improve the solution without improving the relaxation lower bound."
    ],
    "followup": "Can a nonoptimal feasible cover have a dual certificate equal to its cost?",
    "deliverable": "A deletion-order-independent analysis separating certificate gap from approximation gap."
  },
  {
    "unit": "core-dual-cover",
    "slug": "exhaustive-dual-audit",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: audit growth certificates on bounded incidence systems",
    "prompt": "Enumerate coverable systems with at most six elements, eight sets, frequency at most three, and costs in {1,2,3}. Compare sequential dual growth, simultaneous growth, and cost-effectiveness greedy with exact subset enumeration. For the two primal–dual rules verify cost≤f sum y and all dual constraints.",
    "prerequisites": [
      "finite set-system generation",
      "dual charging"
    ],
    "minutes": 90,
    "guide": [
      "Record the purchased tight sets, the final element dual values, and each element’s purchase multiplicity. Recompute purchased cost as sum_e y_e·multiplicity_e; equality requires every purchased set to remain tight. Then check multiplicity≤f and weak duality independently against the enumerated optimum.",
      "Use fixed tie orders and explicitly stated growth rules so comparisons are reproducible. Greedy is a separate baseline and need not satisfy the same f-dual certificate unless one constructs an appropriate dual. Failure criteria are uncovered elements, violated dual constraints, a broken tightness identity, or a primal–dual cost above f times its own dual objective. Finite observations do not establish a new worst-case ratio."
    ],
    "followup": "How much does reverse deletion change actual cost and purchase multiplicities?",
    "deliverable": "A bounded enumerator and complete primal-dual audit records."
  },
  {
    "unit": "core-dual-cover",
    "slug": "uniform-hypergraph-gap",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: prove the general frequency-f gap",
    "prompt": "Let the universe be all f-subsets of [m], m≥f≥2, and set i contain precisely those subsets containing i, with unit cost. Prove integer optimum m−f+1 and LP optimum m/f. Verify the certificates for m≤10 and compare the gap with the frequency-f guarantee.",
    "prerequisites": [
      "uniform hypergraphs",
      "symmetric LP witnesses"
    ],
    "minutes": 85,
    "guide": [
      "Selecting vertices covers every f-subset exactly when the unselected vertices number at most f−1. Thus the integral optimum is m−f+1. The uniform primal x_i=1/f has objective m/f. For the dual assign every f-subset weight 1/C(m−1,f−1), making each vertex-set constraint tight.",
      "The dual objective is C(m,f)/C(m−1,f−1)=m/f, matching the primal. Hence the gap is f(1−(f−1)/m), approaching f for fixed f and growing m. Exact subset enumeration is the finite baseline; failure means a mismatched incidence count or a cover smaller than the proved optimum. This extends a specified gap family rather than claiming new hardness."
    ],
    "followup": "Why is an LP integrality gap alone not an NP-hardness-of-approximation theorem?",
    "deliverable": "A parameterized gap proof and a finite certificate verification."
  },
  {
    "unit": "core-dual-path",
    "slug": "cut-lp-flow-integrality",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Extract an exact path from the cut relaxation",
    "prompt": "For a directed graph with nonnegative edge costs, suppose x≥0 satisfies x(δ⁺(S))≥1 for every s∈S,t∉S. Prove there is an s–t path of cost at most sum c_ex_e using max-flow/min-cut and flow decomposition. Deduce equality of the path-cut LP optimum and shortest-path length.",
    "prerequisites": [
      "max-flow/min-cut",
      "flow decomposition"
    ],
    "minutes": 45,
    "guide": [
      "Use x as arc capacities. Every s–t cut has capacity at least one, so there exists a unit s–t flow f≤x. Remove flow cycles, which cannot increase cost because c≥0, and decompose the remaining flow into paths with coefficients summing to one.",
      "The weighted average path cost is sum c_ef_e≤sum c_ex_e, so at least one path costs no more than the LP solution. Conversely a path incidence vector is cut-feasible, proving equality of optima. This proves integrality of the objective without claiming every feasible x, or every optimal face point, is integral."
    ],
    "followup": "Where exactly does the proof use nonnegative costs?",
    "deliverable": "A constructive LP-to-path proof with the correct integrality conclusion."
  },
  {
    "unit": "core-dual-path",
    "slug": "directed-potentials",
    "tier": "doctoral",
    "kind": "proof",
    "title": "A directed potential certificate with negative arcs",
    "prompt": "In a directed graph with no reachable negative cycle and a reachable target, let d(v) be shortest-walk distance from s. Prove d(v)−d(u)≤c_uv on each reachable arc and show telescoping certifies every s–t path cost at least d(t). Explain why the undirected absolute-value inequality is inappropriate.",
    "prerequisites": [
      "shortest-path potentials",
      "negative-cycle conditions"
    ],
    "minutes": 40,
    "guide": [
      "Appending arc uv to an optimal s–u walk gives d(v)≤d(u)+c_uv. Summing d(v)−d(u) along a path telescopes to d(t)−d(s)=d(t), while the cost sum bounds it above. A shortest walk can be made simple by deleting nonnegative cycles.",
      "A directed arc constrains only one potential difference. It does not imply d(u)−d(v)≤c_uv because a reverse arc may not exist. Restrict attention to vertices reachable from s, or specify finite potentials on the relevant subgraph, so no subtraction of infinite distances is hidden."
    ],
    "followup": "How do reweighted costs c_uv+d(u)−d(v) relate to shortest paths?",
    "deliverable": "An oriented feasibility certificate and a telescoping optimality proof."
  },
  {
    "unit": "core-dual-path",
    "slug": "zero-slack-closure",
    "tier": "examiner",
    "kind": "construction",
    "title": "Handle zero-cost edges without infinitesimal growth",
    "prompt": "Specify a one-sided cut-growing shortest-path algorithm when edge costs may be zero. Before each positive dual increase, close the reachable region under all tight edges. Prove progress, dual feasibility, and correct detection when t is unreachable.",
    "prerequisites": [
      "reduced slack",
      "reachable closures"
    ],
    "minutes": 45,
    "guide": [
      "Given the current tight-edge graph, add every vertex reachable from s before choosing a new growth cut S. If t is absent, every edge leaving S has positive slack; otherwise closure would have traversed it. Increase y_S to the minimum boundary slack and then close again.",
      "Every finite growth event makes at least one new boundary edge tight and adds a vertex, so at most n−1 positive-growth events occur. If no boundary edge exists while t is outside, the original graph separates s from t and no feasible path exists. Zero-growth closure prevents cycling on already tight edges while preserving the standard nested-cut certificate."
    ],
    "followup": "How should simultaneous minimum-slack ties be processed?",
    "deliverable": "A finite-event algorithm including zero edges and disconnected inputs."
  },
  {
    "unit": "core-dual-path",
    "slug": "negative-cost-models",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "Negative undirected costs change the optimization model",
    "prompt": "Contrast minimum-cost simple s–t paths, arbitrary s–t walks, and the unbounded-variable cut LP when undirected edges may have negative cost. Give examples showing that the walk objective and cut LP can be unbounded, and explain the relation of all-negative simple paths to LONGEST PATH.",
    "prerequisites": [
      "path versus walk",
      "LP unboundedness",
      "NP-hardness reductions"
    ],
    "minutes": 40,
    "guide": [
      "If a reachable negative edge can be traversed forward and backward on a route to t, each round trip decreases walk cost without limit. In the cut LP with x_e≥0 and no upper bound, increasing any negative-cost edge variable preserves all lower-bound cut constraints while sending the objective to negative infinity.",
      "A simple path cannot repeat that edge, so its cost is bounded on a finite graph. Giving every edge cost −1 makes minimum simple-path cost the negative of the longest simple-path length; this is NP-hard. Thus nonnegativity in the primal–dual shortest-path formulation cannot be removed by an informal sign change."
    ],
    "followup": "Would adding x_e≤1 make the cut LP describe simple paths exactly?",
    "deliverable": "Three distinct model diagnoses with explicit witnesses."
  },
  {
    "unit": "core-dual-path",
    "slug": "optimality-gap-decomposition",
    "tier": "examiner",
    "kind": "proof",
    "title": "Decompose the entire path–dual gap",
    "prompt": "For an undirected s–t path P and feasible nonnegative cut dual y, define edge slack r_e=c_e−sum_{S:e∈δ(S)}y_S. Prove c(P)−sum_S y_S=sum_{e∈P}r_e+sum_S y_S(|P∩δ(S)|−1). Characterize equality term by term.",
    "prerequisites": [
      "cut dual",
      "complementary slackness"
    ],
    "minutes": 40,
    "guide": [
      "Substitute c_e=r_e+sum_{S:e crosses S}y_S into the path cost and interchange finite sums. Each separating cut is crossed at least once by P, and every r_e is nonnegative by dual feasibility, so both right-hand sums are nonnegative.",
      "Equality requires every path edge to be tight and every positive-dual separating cut to be crossed exactly once. Conversely these conditions make both sums vanish and certify path optimality by weak duality. The identity quantifies two independent causes of a loose certificate: unused edge slack and repeated charging across a cut."
    ],
    "followup": "Why is each undirected separating cut crossed an odd number of times by a simple path?",
    "deliverable": "An exact gap identity and a necessary-and-sufficient equality criterion."
  },
  {
    "unit": "core-dual-path",
    "slug": "parametric-distance-envelope",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: audit parametric shortest-path concavity",
    "prompt": "For nonnegative base costs c_e and a_e∈{0,1}, set c_e(λ)=c_e+λa_e for λ≥0. Prove shortest-path distance is a concave piecewise-linear function with at most n distinct active slopes. Enumerate simple paths on graphs n≤9 and compare the exact envelope with Dijkstra at rational λ values.",
    "prerequisites": [
      "lower envelopes",
      "shortest paths",
      "parametric optimization"
    ],
    "minutes": 90,
    "guide": [
      "Each simple path contributes an affine function c(P)+λa(P), where integer a(P) lies between zero and n−1. Nonnegative costs allow shortest walks to be simplified, so distance is the lower envelope of these path lines. For each slope retain only the smallest intercept, leaving at most n candidate lines.",
      "A minimum of affine functions is concave, and its active slopes decrease as λ grows. Compute all pairwise line intersections, discard inactive breakpoints, and verify values with ordinary shortest-path computations. Increasing slopes, more than n genuine affine pieces, or a Dijkstra value above the enumerated minimum is failure. Multiple optimal paths at one breakpoint are not extra pieces."
    ],
    "followup": "How does the piece bound change when a_e are integers in {0,…,A}?",
    "deliverable": "An exact envelope theorem and a reproducible finite audit."
  },
  {
    "unit": "core-dual-path",
    "slug": "lexicographic-cost-perturbation",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: remove zero-cost degeneracy lexicographically",
    "prompt": "For nonnegative integer edge costs on n vertices, replace c_e by nc_e+1. Prove every perturbed shortest path first minimizes original cost and then edge count. Compare paths and dual certificates before and after perturbation on zero-heavy graphs n≤12 using exhaustive simple paths as baseline.",
    "prerequisites": [
      "integer objective gaps",
      "lexicographic perturbation"
    ],
    "minutes": 80,
    "guide": [
      "A simple path has at most n−1 edges. If two original path costs differ by at least one, their multiplied costs differ by at least n, which cannot be reversed by the edge-count term. Among equal original costs, minimizing the perturbed value is exactly minimizing the number of edges.",
      "All perturbed edges are positive, so minimum walks are simple and zero-cycle degeneracy disappears. The integer multiplier uses O(log n) extra bits. Enumerate original optimum paths and their hop counts to verify the lexicographic result; a perturbed output with higher original cost or nonminimum hops among original optima is failure. Scaling the perturbed dual back gives a lower bound, but its extra hop component must be removed before claiming equality to original cost."
    ],
    "followup": "What multiplier works when original costs are rationals with a known minimum positive path-cost gap?",
    "deliverable": "A perturbation theorem and a before/after certificate study."
  },
  {
    "unit": "core-steiner",
    "slug": "demand-equivalence-closure",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Compress the required-pair relation",
    "prompt": "Build the graph whose vertices are terminals and whose edges are required demand pairs. Prove a forest satisfies all demands exactly when it connects each connected component of this demand graph. Replace all demands inside each component by any spanning tree and prove that the separating-cut LP is unchanged.",
    "prerequisites": [
      "equivalence closure",
      "Steiner-forest cut constraints"
    ],
    "minutes": 40,
    "guide": [
      "Connectivity in the chosen network is transitive. Satisfying every edge of a connected demand component therefore connects all its terminals. Conversely connecting that component satisfies every listed pair. A spanning tree of its demand graph generates the same equivalence relation with only k−1 pairs for k terminals.",
      "A cut separates some original demand exactly when it splits a demand component. Every spanning tree of that component has an edge crossing each nontrivial split, so the family of required cuts is identical after compression. This preserves both integral feasibility and the LP, not merely one particular optimum."
    ],
    "followup": "Why is connecting all demand components to each other an unjustified strengthening?",
    "deliverable": "A demand compression algorithm with integral and LP equivalence proofs."
  },
  {
    "unit": "core-steiner",
    "slug": "aggregate-forest-degree-lemma",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Prove the contracted-forest degree inequality precisely",
    "prompt": "Let H be the contracted forest used in one growth interval, deleting isolated inactive nodes. Partition its nodes into active A and inactive I, with every inactive node having degree at least two. Prove sum_{v∈A}deg(v)≤2|A|−2c, where c is the number of nonempty components. Explain how pruning supplies the inactive-leaf hypothesis.",
    "prerequisites": [
      "forest degree sum",
      "minimal feasible forests"
    ],
    "minutes": 45,
    "guide": [
      "Because H is a forest, its total degree is 2(|A|+|I|−c). Subtracting inactive degree at least 2|I| yields the claimed bound. Isolated inactive nodes must be removed before applying that lower bound; isolated active nodes are harmless and give a zero contribution.",
      "An inactive leaf would attach through one crossing edge although no required demand leaves that current component. In the pruned feasible forest that edge can be deleted: any demand path using it would require a terminal demand to cross the component boundary, contradicting inactivity after accounting for already isolated feasible pieces. The needed structural input is acyclicity of the purchased forest and feasibility-preserving pruning, not a pointwise bound on active degrees."
    ],
    "followup": "Give a star where one active node has arbitrarily large degree but the aggregate bound holds.",
    "deliverable": "A complete degree calculation and the exact pruning invariant it needs."
  },
  {
    "unit": "core-steiner",
    "slug": "all-terminals-overconnection",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "Connecting every terminal can be arbitrarily too expensive",
    "prompt": "On a path with terminal positions 0,1,M,M+1 and edge lengths equal to coordinate differences, require only pairs (0,1) and (M,M+1). Compute the Steiner-forest optimum and the cheapest tree connecting all terminals. Show why replacing pair demands by one terminal set loses any constant guarantee.",
    "prerequisites": [
      "Steiner forest versus Steiner tree",
      "metric path costs"
    ],
    "minutes": 35,
    "guide": [
      "The two unit end edges form a feasible forest of cost two. Every demanded pair has distance one and their unique path edges are disjoint, proving optimality. A tree connecting all four terminals must also include the middle edge of length M−1, giving total M+1.",
      "The ratio (M+1)/2 tends to infinity. A demand component is an equivalence class to connect internally; separate classes are permitted to remain disconnected. Merging them changes the optimization problem, even when all vertices are terminals and all edge costs form a simple metric path."
    ],
    "followup": "How does adding the single demand (1,M) change the instance?",
    "deliverable": "Two exact optima and an unbounded strengthening gap."
  },
  {
    "unit": "core-steiner",
    "slug": "inactive-component-reactivation",
    "tier": "examiner",
    "kind": "construction",
    "title": "An inactive region can later join an active component",
    "prompt": "Give a moat-growth trace where terminals s,t are already connected and their component is inactive, but merging it with a terminal a whose partner b is elsewhere creates a new active component. Explain why stopping the old dual variable does not mean permanently forbidding its vertices from future growth.",
    "prerequisites": [
      "active components",
      "demand separation"
    ],
    "minutes": 40,
    "guide": [
      "Use demands (s,t) and (a,b). Give st cost zero so its component is formed initially, give as a small positive cost, and put b beyond a much more expensive connection. The s,t component has no crossing demand, while a and b are active. Growth from a can make as tight and merge the inactive region into a’s component.",
      "The merged set {s,t,a} still separates a from b, so its cut variable is eligible to grow. This is a new dual variable associated with a larger set; the old y_{s,t} remains frozen. Active status is a property of the current component and current demand separation, not an immutable label attached to vertices."
    ],
    "followup": "Can a union of two inactive components become active without absorbing an active component?",
    "deliverable": "A weighted event trace and a correct interpretation of frozen dual variables."
  },
  {
    "unit": "core-steiner",
    "slug": "unique-path-pruning",
    "tier": "examiner",
    "kind": "proof",
    "title": "Pruning a purchased forest is order independent",
    "prompt": "Suppose the purchased edge set F is a forest satisfying all demand pairs. Prove the unique inclusion-minimal feasible subforest is the union of the unique F-paths of all demands. Deduce that every feasibility-preserving edge-deletion order gives the same result.",
    "prerequisites": [
      "unique tree paths",
      "forest feasibility"
    ],
    "minutes": 40,
    "guide": [
      "Every feasible subforest must contain the entire unique F-path of each required pair; deleting any edge of such a path disconnects that pair because F has no alternative route. Therefore the union U of all those paths is contained in every feasible subforest.",
      "U itself satisfies every demand and is thus feasible. It is the unique minimum-by-inclusion subforest, so reverse deletion or arbitrary legal deletion must finish at U. This uniqueness depends on F being a forest; a cyclic purchased graph can have several different minimal feasible subgraphs."
    ],
    "followup": "Give a cyclic graph where legal deletion orders return different feasible paths.",
    "deliverable": "A uniqueness theorem and its exact acyclicity hypothesis."
  },
  {
    "unit": "core-steiner",
    "slug": "parity-forest-extension",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: adapt moat growth to even terminal components",
    "prompt": "Let T be an even-cardinality vertex set. Seek a minimum-cost forest every connected component of which contains an even number of T vertices. Grow duals of current odd-T components and prune redundant edges. Prove the same factor-two charging using inactive even-component leaves, and compare with an exact T-join baseline on n≤10.",
    "prerequisites": [
      "parity cuts",
      "forest degree charging",
      "path decomposition"
    ],
    "minutes": 100,
    "guide": [
      "Feasibility is equivalent to crossing every cut S with |S∩T| odd. Current odd components are eligible dual cuts. After pruning, an inactive contracted leaf would have even terminal parity on its attached part, so deleting its unique crossing edge preserves even parity on both sides; this contradicts minimality. The aggregate forest degree lemma then gives cost≤2 sum y.",
      "Every even-T forest contains a T-join by retaining exactly edges whose removal leaves an odd number of T vertices on either side. For an exact baseline, minimize a perfect matching on T using shortest-path distances, then take the symmetric difference of matched paths. Its odd-degree set is T and cost cannot increase. Conversely a minimum T-join decomposes into paths pairing T plus removable cycles, proving the matching baseline exact. Verify parity and cost against exhaustive edge subsets; either a parity failure or a broken factor-two certificate is failure."
    ],
    "followup": "Why does even |T| matter for complement symmetry of the odd-cut requirements?",
    "deliverable": "A parity extension proof and an exact small-instance comparison."
  },
  {
    "unit": "core-steiner",
    "slug": "nonuniform-growth-obstruction",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: test nonuniform moat growth rates",
    "prompt": "Consider a unit-edge star with k≥3 leaves and demands joining its center to every leaf. Give the center moat growth rate M and every leaf rate one. Compute first tight time and the ratio of purchased cost to total dual. Show that uniform-rate charging can fail arbitrarily badly as k grows, without asserting a bad approximation ratio.",
    "prerequisites": [
      "rate-weighted dual growth",
      "forest charging"
    ],
    "minutes": 90,
    "guide": [
      "Each star edge is crossed by the center and its leaf cut, so all become tight at time 1/(M+1). Buying them costs k. Total dual is (M+k)/(M+1), making cost/dual=k(M+1)/(M+k), which approaches k for fixed k and M→∞.",
      "The local rate-weighted crossing sum is kM+k, while twice the dual growth rate is 2(M+k); the standard bound fails when (k−2)M>k. Nevertheless the star itself is forced by the demands, so the algorithm is integral-optimal. Enumerate small active forests and rate vectors to audit the local inequality, using uniform rates as baseline; confusing certificate failure with approximation failure is a stated failure criterion."
    ],
    "followup": "Derive the necessary center-rate condition for the degree inequality on every fixed star.",
    "deliverable": "An exact certificate obstruction and a bounded rate audit."
  },
  {
    "unit": "core-tree-metrics",
    "slug": "economies-versus-concavity",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Economies of scale are weaker than concavity",
    "prompt": "Let f(0)=0, f be nonnegative and nondecreasing, and f(x)/x be nonincreasing for x>0. Prove f is subadditive. Give a continuous example satisfying these conditions that is not concave, and identify the weaker assumptions actually used when merging tree routes.",
    "prerequisites": [
      "economies of scale",
      "subadditivity",
      "concavity"
    ],
    "minutes": 45,
    "guide": [
      "For a,b>0, the ratio assumption gives f(a)≥a f(a+b)/(a+b) and f(b)≥b f(a+b)/(a+b). Adding proves f(a+b)≤f(a)+f(b); zero arguments follow from f(0)=0. Concavity with f(0)=0 is one sufficient route to these inequalities but is not necessary.",
      "Take f(x)=x on [0,1], f(x)=1 on [1,2], and f(x)=x/2 on [2,∞). It is continuous, nondecreasing, and its cost-per-unit ratio is nonincreasing. Its slope rises from zero to 1/2 at two, violating concavity. Route merging needs subadditivity, while comparison of capacity vectors needs monotonicity."
    ],
    "followup": "Can a subadditive nondecreasing function have an increasing cost-per-unit ratio somewhere?",
    "deliverable": "A sharp implication chain and a nonconcave capacity-cost example."
  },
  {
    "unit": "core-tree-metrics",
    "slug": "four-point-tree-test",
    "tier": "doctoral",
    "kind": "proof",
    "title": "An elementary obstruction to exact tree representation",
    "prompt": "For four vertices in a weighted tree, prove the largest two of d(a,b)+d(c,d), d(a,c)+d(b,d), and d(a,d)+d(b,c) are equal. Use the unit four-cycle metric to show not every graph metric is an exact tree metric.",
    "prerequisites": [
      "unique tree paths",
      "tree metrics"
    ],
    "minutes": 45,
    "guide": [
      "Prune to the minimal subtree spanning the four points and suppress degree-two vertices. Pendant lengths contribute the same total to all three sums. If the reduced subtree has a middle segment of length h, one pairing stays on its two sides while the other two cross it twice, producing two equal sums larger by 2h; the star case has h=0.",
      "For the four-cycle in cyclic order, opposite-pair distances sum to four, while each adjacent-pair matching sums to two. The unique largest sum violates the tree condition. Thus a random embedding approximates a metric that may not admit any exact tree representation, even allowing auxiliary branching vertices."
    ],
    "followup": "What happens when some of the four named vertices are internal points or coincide?",
    "deliverable": "A structural four-point proof and a concrete non-tree metric."
  },
  {
    "unit": "core-tree-metrics",
    "slug": "tree-cut-capacity-optimum",
    "tier": "examiner",
    "kind": "proof",
    "title": "Solve buy-at-bulk exactly on a tree by cut loads",
    "prompt": "For nonnegative demands d_i between terminal pairs in a tree and nondecreasing capacity cost f, prove the unique-path capacity u_e=sum_{i:e separates pair i}d_i is componentwise minimum among feasible solutions. Explain why opposite-direction commodities do not cancel under shared undirected capacity.",
    "prerequisites": [
      "tree cuts",
      "multicommodity capacity"
    ],
    "minutes": 40,
    "guide": [
      "Removing tree edge e leaves a cut. Every commodity with endpoints on opposite sides must send its full demand across e, because no alternative tree route exists. Thus every feasible capacity vector has capacity at least u_e. Routing each commodity along its unique path attains these lower bounds simultaneously.",
      "Monotonicity of f then proves cost optimality without needing concavity or subadditivity. Under the model where undirected capacity bounds total path usage, two opposite demands D on the same edge require 2D, not net flow zero. Cancellation applies to a different signed aggregate-flow model and would erase commodity feasibility."
    ],
    "followup": "Which parts remain true if f is nonmonotone?",
    "deliverable": "A componentwise optimality proof and a model-specific capacity example."
  },
  {
    "unit": "core-tree-metrics",
    "slug": "arbitrary-contraction-failure",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "The auxiliary-node contraction proof needs a hierarchy",
    "prompt": "Consider a tree on terminals u,v and one auxiliary vertex w with lengths uw=M and wv=ε. Contract uw, then multiply remaining lengths by four. Show that domination of the original tree distances can fail. Explain why the book’s hierarchical-tree removal theorem cannot be applied to an arbitrary weighted tree.",
    "prerequisites": [
      "dominating metrics",
      "auxiliary vertex contraction"
    ],
    "minutes": 35,
    "guide": [
      "The original terminal distance is M+ε. After contraction the only edge between u and v has length ε, and scaling produces distance 4ε. For M>3ε this is strictly smaller than the original distance, so domination fails by an arbitrarily large factor as M/ε grows.",
      "Contraction always decreases distances, giving an easy upper direction after scaling. The lower direction needs the geometric level lengths in the hierarchical cut decomposition, as specified in Williamson–Shmoys Theorem 8.19. The exercise’s counterexample violates that hypothesis and therefore identifies a missing assumption rather than contradicting the theorem."
    ],
    "followup": "How does choosing the other contraction change this particular example?",
    "deliverable": "A quantified failure family and an exact theorem-hypothesis audit."
  },
  {
    "unit": "core-tree-metrics",
    "slug": "cost-amplification",
    "tier": "examiner",
    "kind": "construction",
    "title": "Amplify an expected-cost tree-transfer guarantee",
    "prompt": "Assume a randomized embedding-and-routing procedure always returns a feasible solution and has E cost≤κOPT. Design an algorithm using O(log(1/η)) independent runs that returns cost≤2κOPT with probability at least 1−η, without knowing OPT or identifying good trees.",
    "prerequisites": [
      "Markov inequality",
      "independent repetition"
    ],
    "minutes": 35,
    "guide": [
      "Markov gives Pr[cost>2κOPT]≤1/2. Run the complete feasible procedure R=ceil(log₂(1/η)) times and retain the least-cost output, evaluating original-graph cost rather than tree cost alone. All runs fail with probability at most 2^−R≤η.",
      "No comparison with an unknown optimum is required by the algorithm: taking the minimum of observed costs suffices. Each outcome must already be feasible after mapping routes and capacities to the original graph. Independence is needed only between complete runs, while dependencies among pair distances inside one embedding are irrelevant."
    ],
    "followup": "Derive the tradeoff for target factor (1+δ)κ instead of 2κ.",
    "deliverable": "A fully implementable amplification rule and its success proof."
  },
  {
    "unit": "core-tree-metrics",
    "slug": "weighted-cycle-distribution",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: a constant-stretch distribution for weighted cycles",
    "prompt": "For a weighted cycle of positive total length L, delete edge e with probability ℓ_e/L and keep all other edge lengths. Prove every resulting tree dominates the cycle metric and that a pair at cycle distance d≤L/2 has expected tree distance 2d(1−d/L)≤2d. Verify all pairs by exact deletion enumeration.",
    "prerequisites": [
      "cycle metrics",
      "expected stretch"
    ],
    "minutes": 85,
    "guide": [
      "Choose a shorter u–v arc of length d. If deletion is outside that arc, the tree path has length d; if inside, it has length L−d. Deletion probabilities are d/L and 1−d/L because probabilities sum edge lengths. Every possible path is one of the two arcs, both at least d, proving domination.",
      "The expectation is d(1−d/L)+(L−d)d/L=2d(1−d/L). Enumerate the finitely many deleted edges and all terminal pairs using rational lengths as an exact baseline. A stretch expectation above two or any contracted distance is failure. This specialized distribution does not establish constant expected distortion for arbitrary graph metrics."
    ],
    "followup": "For which pairs is the upper bound closest to two?",
    "deliverable": "An exact weighted-cycle embedding theorem and a reproducible pairwise audit."
  },
  {
    "unit": "core-tree-metrics",
    "slug": "merging-iff-subadditive",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: characterize the route-merging assumption",
    "prompt": "Prove that the inequality f(sum_i u_i)≤sum_i f(u_i) for every finite collection of mapped tree routes is equivalent to subadditivity with f(0)=0. Give a convex-cost bridge example where mapping k unit-capacity tree routes increases cost by factor approaching k. Audit the merging inequality for several piecewise-linear costs.",
    "prerequisites": [
      "subadditivity",
      "capacity aggregation"
    ],
    "minutes": 90,
    "guide": [
      "Binary subadditivity extends to finitely many arguments by induction, and the two-route case gives necessity. For a bridge of length one from s to a hub, attach k distinct leaves by edges of length ε. Use a dominating star tree connecting s directly to each leaf with length 1+ε and also to the hub with length one; the hub edge has zero load. Give one unit demand per leaf.",
      "For f(u)=u² the tree cost is k(1+ε), while shortest-path mapping gives bridge load k and original cost k²+kε. The ratio tends to k as ε→0. This invalidates the universal nonincreasing-cost mapping step, although it does not by itself refute every embedding algorithm for convex costs. Exact route-load aggregation is the baseline; any claimed subadditive certificate violated by two arguments is failure."
    ],
    "followup": "Why is monotonicity needed in addition when comparing tree optimum with a transported capacity vector?",
    "deliverable": "An iff lemma, an explicit convex-cost obstruction, and a finite cost-function audit."
  },
  {
    "unit": "core-hardness",
    "slug": "weighted-random-tapes",
    "tier": "doctoral",
    "kind": "synthesis",
    "title": "Reduce a nonuniform verifier without exponential duplication",
    "prompt": "A verifier has polynomially many random-tape outcomes with rational probabilities p_r given explicitly and constant query count. Construct a weighted CSP whose value equals acceptance probability for every fixed proof. Explain why converting probabilities to a common denominator and duplicating constraints can destroy polynomial output size.",
    "prerequisites": [
      "PCP-to-CSP reduction",
      "rational encodings"
    ],
    "minutes": 45,
    "guide": [
      "For each random outcome r create its acceptance predicate on the proof positions queried on that outcome, assigning weight p_r. A global proof assignment induces exactly the verifier’s answer behavior, so weighted satisfied fraction equals sum_r p_r·accept_r. Constant query count permits constant-arity predicates after unfolding adaptive branches.",
      "A common denominator has polynomial bit length but can have exponentially large numerical value. Duplicating a constraint its numerator number of times can therefore produce exponentially many constraints. Preserve rational weights or use a separately analyzed rounding-to-uniform reduction with controlled total error. Polynomial arithmetic size is not polynomial list length."
    ],
    "followup": "How does a total probability-rounding error δ affect completeness and soundness?",
    "deliverable": "An exact weighted reduction and an output-size audit."
  },
  {
    "unit": "core-hardness",
    "slug": "constant-repetition-gap",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Amplify a fixed-proof acceptance gap by repetition",
    "prompt": "Suppose a uniform verifier accepts a fixed proof π with probability a(π). Run k independent copies on the same proof and accept only if all accept. Prove the CSP optimum becomes OPT^k, count random bits and queried positions, and explain why k must remain fixed for the direct polynomial-size constant-arity reduction.",
    "prerequisites": [
      "independent repetition",
      "global proof consistency"
    ],
    "minutes": 45,
    "guide": [
      "For a fixed proof the copies use independent random tapes, so acceptance is a(π)^k. Maximizing over π gives (max a(π))^k because the power is monotone. Completeness c and soundness s become c^k and s^k, while a single globally consistent proof is still used in every test.",
      "The verifier uses kr random bits and at most kq nonadaptive queries, or a constant-size union of adaptive positions when k,q are fixed. Enumerating all tapes creates 2^(kr) constraints. With r=O(log n), fixed k gives polynomial output; k=Θ(log n) can produce n^Θ(log n) constraints and loses the stated constant-arity polynomial reduction."
    ],
    "followup": "Why is perfect completeness especially convenient under conjunction repetition?",
    "deliverable": "A rigorous amplification formula and a reduction-size calculation."
  },
  {
    "unit": "core-hardness",
    "slug": "private-gadget-affine-map",
    "tier": "examiner",
    "kind": "proof",
    "title": "Compute a gadget gap with private auxiliary variables",
    "prompt": "Each source constraint is replaced by a gadget whose optimum over private auxiliaries is A if that constraint is satisfied and B<A otherwise. Prove target OPT=Bm+(A−B)OPT_source. Derive the target NO/YES threshold for a source gap c versus s, and show why sharing auxiliaries can invalidate the identity.",
    "prerequisites": [
      "gap gadgets",
      "affine objective transformations"
    ],
    "minutes": 45,
    "guide": [
      "For any fixed source assignment, private auxiliary blocks can be optimized independently, giving Bm+(A−B) times its number of satisfied constraints. Maximizing the source assignment yields the exact optimum identity. The target threshold is [B+(A−B)s]/[B+(A−B)c].",
      "Private auxiliaries are essential: two gadgets each requiring one auxiliary bit to take opposite values can each attain value one in isolation, but if they share that bit their combined maximum is one rather than two. State both the local gadget truth table and its independence before applying an affine gap formula."
    ],
    "followup": "How does an additive gadget error εm perturb the threshold?",
    "deliverable": "An exact affine reduction lemma and an auxiliary-sharing counterexample."
  },
  {
    "unit": "core-hardness",
    "slug": "gap-dilution-padding",
    "tier": "examiner",
    "kind": "construction",
    "title": "Always-satisfied constraints dilute an approximation gap",
    "prompt": "A maximization CSP has YES optimum M and NO optimum at most sM, s<1. Add K constraints that are always satisfied. Derive the new gap ratio and prove it tends to one as K/M grows. Explain why this padding preserves exact decision reducibility while weakening the approximation threshold.",
    "prerequisites": [
      "gap ratios",
      "padding reductions"
    ],
    "minutes": 35,
    "guide": [
      "The padded YES optimum is M+K and padded NO optimum is at most sM+K. The NO/YES ratio is (sM+K)/(M+K)=1−(1−s)M/(M+K). Thus the gap shrinks toward one as the fixed additive baseline dominates.",
      "Subtracting K recovers exact source values if an exact optimizer is available, so exact optimization hardness can survive. A multiplicative approximate value includes K in its benchmark, however, and its source error can be large after subtraction. Exact reductions need not preserve a useful constant approximation gap."
    ],
    "followup": "How large may K be while preserving a desired target ratio threshold ρ<1?",
    "deliverable": "A quantitative padding formula and a reduction-convention explanation."
  },
  {
    "unit": "core-hardness",
    "slug": "independent-cover-gap-map",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Transfer a normalized independent-set gap to vertex cover",
    "prompt": "A graph reduction guarantees YES α(G)≥an and NO α(G)≤bn, where 0≤b<a<1. Derive the corresponding minimization gap for vertex cover and the approximation factor that would distinguish it. State the strict inequality and discuss what fails when a=1.",
    "prerequisites": [
      "vertex-cover complement",
      "minimization approximation conventions"
    ],
    "minutes": 40,
    "guide": [
      "Since τ(G)=n−α(G), YES instances have cover optimum at most (1−a)n and NO instances have optimum at least (1−b)n. A minimization R-approximation distinguishes them when R(1−a)<1−b, or R<(1−b)/(1−a), by comparing its feasible cost with the NO lower threshold.",
      "At equality the guaranteed YES output can coincide with the NO threshold, so strict separation is necessary. If a=1, YES cover optimum is zero and the displayed ratio is undefined; zero-optimum cases require direct treatment. This normalized gap transfer is valid even though arbitrary approximate independent sets do not yield a vertex-cover ratio."
    ],
    "followup": "How do completeness and soundness perturbations change the derived factor?",
    "deliverable": "A direction-correct minimization threshold with endpoint analysis."
  },
  {
    "unit": "core-hardness",
    "slug": "weighted-to-unweighted-gap",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: remove weights with a controlled gap loss",
    "prompt": "A weighted CSP has nonnegative rational weights summing to one and m constraints, with YES value≥c and NO value≤s<c. For δ∈(0,c−s), set h=δ/m and create floor(w_i/h) copies of constraint i. Prove the resulting optimum count lies between (OPT−δ)/h and OPT/h, and derive a distinguishing approximation threshold.",
    "prerequisites": [
      "weight quantization",
      "gap-preserving reductions"
    ],
    "minutes": 90,
    "guide": [
      "For any assignment, replacing w_i by h floor(w_i/h) decreases value by less than h per constraint, hence by at most δ in total. Taking maxima preserves OPT−δ≤h OPT_count≤OPT. The number of copies is at most 1/h=m/δ, polynomial when 1/δ is polynomially bounded.",
      "Thus YES count≥(c−δ)/h and NO count≤s/h; any maximization ratio strictly greater than s/(c−δ) separates the cases. Compare exact weighted and replicated optima by exhaustive assignments on small predicates. Failure means violating the additive quantization bound or claiming polynomial size for exponentially small δ without counting 1/δ. The target is a specified reduction audit."
    ],
    "followup": "Would nearest-integer rounding give a better error constant without introducing negative weights?",
    "deliverable": "A quantitative unweighting theorem and exact small-instance comparison."
  },
  {
    "unit": "core-hardness",
    "slug": "adaptive-query-arity-tightness",
    "tier": "research",
    "kind": "research-extension",
    "title": "Research exercise: show the adaptive query union can be exponentially large",
    "prompt": "For each q construct a depth-q adaptive Boolean query tree whose 2^q−1 internal nodes query distinct proof positions and whose computed predicate depends essentially on every one of them. Prove essentiality and verify q≤4 by exhaustive truth tables. Explain the consequence for compiling one random tape into a nonadaptive CSP predicate.",
    "prerequisites": [
      "decision trees",
      "essential variables",
      "adaptive PCP queries"
    ],
    "minutes": 95,
    "guide": [
      "Label each internal node by its own Boolean variable, follow its bit to the chosen child, and label the two leaves below every bottom internal node by zero and one. Every internal variable is essential: fix the ancestor path to reach it, and set the disjoint descendant subtrees so one child evaluates zero and the other one. Flipping that variable changes acceptance.",
      "The verifier reads only q bits on any run, but the acceptance function for that random tape can depend on 2^q−1 positions globally. A nonadaptive predicate on the union therefore may need that full arity. Exhaustive essential-variable checks are the finite baseline; failure means a claimed essential variable with identical restricted outputs. For fixed q this remains constant arity, while growing q changes the reduction size."
    ],
    "followup": "Can repeated addresses in the decision tree ever increase the number of essential variables?",
    "deliverable": "A tight adaptive-union construction and exact finite verification."
  },
  {
    "unit": "core-knapsack",
    "slug": "discrete-profit-gap",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Recover exact optimization from a sufficiently fine scheme",
    "prompt": "Suppose integer profits have greatest common divisor g and let U be their sum. Prove that a feasible (1−ε) algorithm with ε=g/(2U) returns an exact optimum. Explain why an FPTAS invoked this way is only pseudo-polynomial in U/g.",
    "prerequisites": [
      "integer objective gaps",
      "FPTAS runtime"
    ],
    "minutes": 35,
    "guide": [
      "Every feasible total profit is a multiple of g. The approximation loses at most εOPT≤εU=g/2, less than the gap g between distinct attainable values. Feasibility prevents a value above OPT, so the returned value must equal OPT.",
      "The reciprocal accuracy is 2U/g, which can be exponentially large in the binary profit encoding. A runtime polynomial in that numerical quantity is therefore pseudo-polynomial. If all profits are zero, bypass the gcd and return the empty optimum."
    ],
    "followup": "How does a known smaller upper bound on OPT improve the required accuracy?",
    "deliverable": "An exactness lemma and a binary-runtime explanation."
  },
  {
    "unit": "core-knapsack",
    "slug": "itemwise-dominance-trap",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "Item dominance is not state dominance in 0–1 knapsack",
    "prompt": "One item has weight one and profit M; k other items have weight one and profit M−1, with capacity k+1 and M>1. Show that deleting every item individually dominated by the first can make the approximation ratio tend to zero. Contrast with safe prefix-state dominance.",
    "prerequisites": [
      "0–1 item multiplicity",
      "Pareto states"
    ],
    "minutes": 30,
    "guide": [
      "All items fit, so OPT=M+k(M−1). The first item dominates every other item in weight-profit coordinates, yet deleting those items leaves value M. For fixed M>1 the ratio M/[M+k(M−1)] tends to zero.",
      "A 0–1 item cannot replace several discarded items because it may be selected only once and may already be used. Prefix-state dominance compares complete selected prefixes with the same remaining item universe, allowing the identical suffix to be appended. The apparently similar item rule lacks that continuation invariant."
    ],
    "followup": "When is such an item-deletion rule safe in an unbounded knapsack model?",
    "deliverable": "An arbitrarily bad preprocessing family and the missing invariant."
  },
  {
    "unit": "core-scheduling-scheme",
    "slug": "geometric-target-search",
    "tier": "doctoral",
    "kind": "construction",
    "title": "Budget the error of target search explicitly",
    "prompt": "Let L=max(max p_j,sum p_j/m) and U=sum p_j. A dual test never rejects T≥OPT and returns makespan≤(1+η)T on acceptance. Search targets L(1+η)^r and prove the first accepted target yields ratio at most (1+η)², with polynomially many tests for fixed η.",
    "prerequisites": [
      "dual approximation",
      "geometric search"
    ],
    "minutes": 40,
    "guide": [
      "Choose the first grid value T*≥OPT. Its predecessor is below OPT, so T*<(1+η)OPT unless T*=L=OPT. The test accepts T*, hence the first accepted target is no larger and its schedule has makespan at most (1+η)²OPT.",
      "Since U/L≤m, O(ln m/η) grid steps reach U. Rational targets can be generated multiplicatively with polynomial bit lengths. For desired ε∈(0,1), η=ε/3 makes (1+η)²≤1+ε. Test acceptance below OPT is harmless because it supplies a concrete bounded-makespan schedule."
    ],
    "followup": "Why is ordinary binary search unsafe if test acceptance is not monotone?",
    "deliverable": "A finite target grid, accuracy budget, and runtime bound."
  },
  {
    "unit": "core-scheduling-scheme",
    "slug": "speed-dependent-smallness",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "Small jobs must be defined relative to machine speed",
    "prompt": "On two uniformly related machines of speeds 1 and η², with target T=1, take a single job of work η. Show that declaring it small because p≤ηT and assigning it to an arbitrary least-normalized-load machine can produce makespan 1/η. State the machine-dependent quantity a valid extension must control.",
    "prerequisites": [
      "identical versus related machines",
      "processing-time normalization"
    ],
    "minutes": 30,
    "guide": [
      "Initially both normalized loads are zero, so an allowed tie choice sends the job to the speed-η² machine. Its processing time is η/η²=1/η, whereas assigning it to the speed-one machine gives optimum η. The job is small in raw work but enormous in completion time on the slow machine.",
      "The relevant increment is p_j/s_i, not p_j alone. A related-machine scheme needs admissible machine-dependent rounding, assignment constraints, or a dispatch rule with its own proof. The identical-machine small-job insertion lemma cannot be transferred just by replacing average loads with speed-normalized loads."
    ],
    "followup": "Would choosing the machine minimizing the new completion time avoid this particular example?",
    "deliverable": "An explicit speed-normalization failure and a corrected parameter."
  },
  {
    "unit": "core-bin-scheme",
    "slug": "two-items-matching",
    "tier": "doctoral",
    "kind": "construction",
    "title": "Solve packing exactly when at most two items fit",
    "prompt": "Assume every item size lies in (1/3,1]. Build a graph joining two items when they fit together. Prove the minimum number of bins is n−ν, where ν is maximum matching size, and give a polynomial exact algorithm.",
    "prerequisites": [
      "graph matching",
      "bin configurations"
    ],
    "minutes": 35,
    "guide": [
      "No bin contains three items because their sizes sum above one. Every packing therefore consists of disjoint compatible pairs and singletons; its pairs form a matching. If there are p pairs it uses p+(n−2p)=n−p bins.",
      "A maximum matching maximizes p and reconstructs a packing with n−ν bins, matching the lower bound from every packing. Sizes equal to 1/3 would permit triples and invalidate the reduction, so the strict lower bound is essential. Exact rational comparisons decide compatibility in polynomial bit complexity."
    ],
    "followup": "What computational obstacle appears when triples become feasible?",
    "deliverable": "An exact matching reduction with the boundary case identified."
  },
  {
    "unit": "core-bin-scheme",
    "slug": "divisible-volume-gap",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Distinguish volume, configuration LP, and divisible packing",
    "prompt": "Take n items of size 1/2+δ with δ>0 small. Compute indivisible OPT and the configuration-LP optimum. Then allow arbitrary item splitting and compute the minimum integral bin count. Explain why a volume lower bound is not the same relaxation as the configuration LP.",
    "prerequisites": [
      "configuration LP",
      "divisible packing"
    ],
    "minutes": 35,
    "guide": [
      "No two original items fit, so indivisible OPT=n. Every feasible configuration contains at most one item, making the configuration covering LP also equal to n. Thus this family has no configuration-LP integrality gap.",
      "With splitting, total volume can fill bins without waste, so the optimum is ceil(n(1/2+δ)). For δ tending to zero and n large, indivisible-to-divisible ratio approaches two. The volume bound discards configuration incompatibilities; an algorithm or hardness statement must specify which fractional benchmark it uses."
    ],
    "followup": "How does the example change if bins of capacity 1+2δ are allowed?",
    "deliverable": "Three exact benchmark values and a relaxation comparison."
  },
  {
    "unit": "core-sat-random",
    "slug": "clause-overlap-variance",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Compute covariance from signed clause overlap",
    "prompt": "For normalized clauses C,D of widths k,l under fair independent bits, derive covariance of their satisfaction indicators. Separate the case of an oppositely signed shared variable from r shared variables with consistent signs. Use the formula to express variance of weighted satisfied clause value.",
    "prerequisites": [
      "joint indicators",
      "signed literal overlap"
    ],
    "minutes": 45,
    "guide": [
      "Satisfaction covariance equals failure-indicator covariance. If a shared variable has opposite signs, simultaneous failure is impossible, giving covariance −2^(−k−l). Otherwise failure fixes all k+l−r distinct variables and has probability 2^(−k−l+r), giving covariance 2^(−k−l)(2^r−1).",
      "The total variance is sum_C w_C² Var(I_C)+2 sum_{C<D}w_Cw_D Cov(I_C,I_D), with Var(I_C)=(1−2^−k)2^−k. Disjoint clauses have zero covariance, but consistent and inconsistent overlaps can contribute opposite signs. Clause dependency cannot be summarized solely by the number of shared variables."
    ],
    "followup": "Evaluate the variance for the pair x∨y and ¬x∨y.",
    "deliverable": "An exact signed-overlap formula and weighted variance expansion."
  },
  {
    "unit": "core-sat-random",
    "slug": "approximate-conditional-decisions",
    "tier": "examiner",
    "kind": "proof",
    "title": "Quantify numerical error during derandomization",
    "prompt": "A conditional-expectation algorithm fixes n bits. At each step it chooses a positive-probability branch whose true conditional expectation is within δ of the better branch. Prove final value at least initial expectation minus nδ, and derive a sufficient precision when each displayed child expectation has absolute error at most ξ.",
    "prerequisites": [
      "conditional expectation",
      "additive error accumulation"
    ],
    "minutes": 35,
    "guide": [
      "The better child is at least the parent expectation because the parent is their probability-weighted mean. Therefore a δ-suboptimal choice decreases the maintained true expectation by at most δ. Induction over all n choices gives the bound, ending at the deterministic objective.",
      "If each child estimate has error at most ξ, choosing the larger displayed value is at most 2ξ below the true better child. Thus final loss is at most 2nξ. To keep additive loss at most εW for total clause weight W, choose ξ≤εW/(2n), handling W=0 directly."
    ],
    "followup": "How do unequal next-bit probabilities affect this argument?",
    "deliverable": "A robust derandomization theorem and an explicit precision budget."
  },
  {
    "unit": "core-sat-lp",
    "slug": "integral-coordinate-nonpersistency",
    "tier": "doctoral",
    "kind": "counterexample",
    "title": "An integral LP coordinate need not persist in an integer optimum",
    "prompt": "For 0<a<1, take the four clauses x∨L_y∨L_z for every sign choice of y,z, each weight one, plus clause ¬x of weight a. Compute LP and Boolean optima, and prove every LP optimum fixes x=0 although every Boolean optimum has x=1.",
    "prerequisites": [
      "MAX-SAT LP",
      "optimal faces"
    ],
    "minutes": 40,
    "guide": [
      "Setting x=0,y=z=1/2 and all z_C=1 satisfies the LP and achieves total weight 4+a. Since this is the sum of all weights, every LP optimum must satisfy the positive-weight unit-clause constraint z_{¬x}≤1−x at equality one, forcing x=0.",
      "If x=0, exactly one of the four signed y,z clauses is false, giving Boolean value 3+a. If x=1, all four long clauses are true and the unit clause is false, giving value four. Because a<1, only x=1 can be optimal. Fixing integral coordinates from this relaxation is therefore not a valid persistency rule."
    ],
    "followup": "What happens at a=1 and a>1?",
    "deliverable": "Exact LP and integer values proving nonpersistency."
  },
  {
    "unit": "core-sat-lp",
    "slug": "positive-budget-pipage",
    "tier": "examiner",
    "kind": "construction",
    "title": "Preserve a truth budget for positive clauses",
    "prompt": "For positive clauses only, impose sum_i y_i=k with integer k. Prove that the independent-rounding expectation f(y) can be rounded to a Boolean vector of exactly k ones without decreasing f by moving pairs of fractional coordinates oppositely to an endpoint. Derive the usual 1−1/e guarantee from the budgeted clause LP.",
    "prerequisites": [
      "multilinear extension",
      "pairwise rounding",
      "clause LP"
    ],
    "minutes": 55,
    "guide": [
      "For positive clauses f=sum_C w_C[1−product_{i∈C}(1−y_i)]. Every mixed partial derivative is nonpositive. Along y_i+t,y_j−t the second derivative is −2∂_ij f≥0, so the restriction is convex and one feasible endpoint has value at least the current point. Choose it, fixing at least one fractional coordinate while preserving the sum.",
      "After at most n moves, integrality of k prevents one remaining fractional coordinate, so the result has exactly k ones. The starting independent expectation is at least (1−1/e) times the clause-LP objective by the usual per-clause bound. Negative literals can reverse the mixed-derivative sign and are excluded from this proof."
    ],
    "followup": "Why can this dependent rounding outperform independent sampling without invalidating the initial expectation bound?",
    "deliverable": "A budget-preserving rounding invariant and a complete approximation transfer."
  },
  {
    "unit": "core-sdp-cut",
    "slug": "arcsine-correlation-psd",
    "tier": "doctoral",
    "kind": "proof",
    "title": "The arcsine transform of a correlation matrix is PSD",
    "prompt": "Let X be PSD with unit diagonal. Prove the entrywise matrix Y_ij=(2/π)arcsin(X_ij) is also PSD with unit diagonal by interpreting it as a rounded sign-correlation matrix. Derive the formula from hyperplane separation rather than invoking a general entrywise matrix theorem.",
    "prerequisites": [
      "Gram representation",
      "hyperplane rounding",
      "PSD expectations"
    ],
    "minutes": 45,
    "guide": [
      "Represent X_ij=v_i·v_j and let s_i=sign(g·v_i) for a standard Gaussian g. If θ=arccos X_ij, then E[s_is_j]=1−2θ/π=(2/π)arcsin X_ij. Each coordinate is almost surely nonzero because v_i is unit.",
      "For every real a, aᵀYa=E[(sum_i a_i s_i)²]≥0. Thus Y is PSD, and Y_ii=1 follows from s_i²=1. The proof establishes one specific nonlinear entrywise transformation through a probability representation; arbitrary entrywise transformations do not automatically preserve PSD."
    ],
    "followup": "What matrix is obtained when X already has rank one with sign entries?",
    "deliverable": "An exact correlation identity and a direct positivity proof."
  },
  {
    "unit": "core-sdp-cut",
    "slug": "forced-equality-contraction",
    "tier": "examiner",
    "kind": "construction",
    "title": "Contract an equality constraint in the Gram SDP",
    "prompt": "Assume X PSD, X_ii=X_jj=1, and X_ij=1. Prove rows i and j coincide. Show that a MAX-CUT SDP constrained by X_ij=1 is equivalent to merging vertices i,j, adding parallel edge weights and deleting loops. State why this is an imposed constraint rather than an arbitrary preprocessing rule.",
    "prerequisites": [
      "Gram equality",
      "graph contraction",
      "SDP feasible sets"
    ],
    "minutes": 40,
    "guide": [
      "In a Gram representation, ||v_i−v_j||²=1+1−2X_ij=0, so v_i=v_j and every inner product with another vector agrees. Equivalently, e_i−e_j lies in the nullspace of X.",
      "After merging the equal vectors, each pair of incident objective terms combines by adding its nonnegative weights, and an edge between i,j contributes zero. Every quotient solution lifts by duplicating the merged vector, proving equivalence. Without the equality requirement, optimal cuts may separate those vertices, so contraction could alter the problem."
    ],
    "followup": "How would forced opposite vectors lead to equality and inequality rewards after contraction?",
    "deliverable": "A PSD equality lemma and a bidirectional quotient construction."
  },
  {
    "unit": "core-color-sdp",
    "slug": "odd-cycle-vector-number",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Compute the vector chromatic parameter of an odd cycle",
    "prompt": "Define vector k-colorability for real k≥2 by edge products≤−1/(k−1). For odd cycle C_n prove its smallest feasible k is 1+sec(π/n). Give a planar construction and a matching spectral lower bound.",
    "prerequisites": [
      "vector coloring",
      "cycle eigenvalues",
      "Gram trace bounds"
    ],
    "minutes": 55,
    "guide": [
      "Consecutive unit vectors at angle π−π/n close after n steps and have edge product −cos(π/n). They satisfy the constraint when k=1+1/cos(π/n), giving feasibility.",
      "The cycle Laplacian bound tr(LX)≤nλ_max(L)=n[2+2cos(π/n)] implies sum_edges v_u·v_v≥−n cos(π/n). If every edge product is at most −1/(k−1), then −n/(k−1) must be at least that lower bound, forcing k≥1+sec(π/n). This parameter tends to two although every odd cycle needs three discrete colors."
    ],
    "followup": "Why does the triangle give exactly three?",
    "deliverable": "Matching geometric and spectral certificates for a fractional coloring parameter."
  },
  {
    "unit": "core-color-sdp",
    "slug": "join-vector-construction",
    "tier": "examiner",
    "kind": "construction",
    "title": "Combine vector colorings across a graph join",
    "prompt": "Let G,H have vector k- and l-colorings with k,l>1. Their join adds every cross-edge. Construct a vector (k+l)-coloring using orthogonal copies of the two representations and one shared axis. Verify all three types of edge constraints.",
    "prerequisites": [
      "orthogonal direct sums",
      "vector coloring"
    ],
    "minutes": 55,
    "guide": [
      "Write K=k+l. For G use u=av+be with b²=l/[k(K−1)] and a²=1−b². For H use z=cw−de with d²=k/[l(K−1)] and c²=1−d². Put the original v and w spaces mutually orthogonal and orthogonal to e. All new vectors have norm one.",
      "A cross-edge product is −bd=−1/(K−1). Within G, a²(−1/(k−1))+b²=−1/(K−1); within H the symmetric computation holds. Thus the join is feasible at K. This proves an upper bound by construction; claiming exact additivity for every graph would require a separate lower-bound theorem."
    ],
    "followup": "Apply the construction when G and H are cliques.",
    "deliverable": "Explicit coefficients and complete norm and edge calculations."
  },
  {
    "unit": "core-gaussian-color",
    "slug": "isotropic-is-not-gaussian",
    "tier": "doctoral",
    "kind": "counterexample",
    "title": "Orthogonality needs Gaussianity to imply projection independence",
    "prompt": "Let R=(ε_1,ε_2) with independent fair signs and u=(1,1)/sqrt(2), v=(1,−1)/sqrt(2). Show R has identity covariance and u,v are orthogonal, yet U=u·R and V=v·R are dependent. Contrast with a standard Gaussian direction.",
    "prerequisites": [
      "covariance",
      "joint Gaussian distributions"
    ],
    "minutes": 40,
    "guide": [
      "Both projections have mean zero and variance one, and their covariance is u·v=0. However UV=(ε_1²−ε_2²)/2=0 always. Each projection equals zero with probability one half, while they are never simultaneously zero, contradicting independence.",
      "For a Gaussian direction g, E exp(su·g+tv·g)=exp[(s²+t²)/2] when u,v are orthogonal. The joint MGF factors into the marginal MGFs, proving independence. Identity covariance alone therefore cannot justify the conditional tail factorization in Gaussian independent-set rounding."
    ],
    "followup": "How does a rotationally invariant uniform unit direction behave in dimension two?",
    "deliverable": "A precise isotropic counterexample and a Gaussian MGF proof."
  },
  {
    "unit": "core-gaussian-color",
    "slug": "normalizing-direction-error",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "Normalizing the Gaussian changes threshold selection",
    "prompt": "Compare S={v:g·v≥t} for standard Gaussian g with S′={v:(g/||g||)·v≥t}. For t>1 show the second always selects nothing while the first has positive marginal selection probability. Derive the correct conditional sphere threshold given radius R=||g||.",
    "prerequisites": [
      "Gaussian radial decomposition",
      "unit-vector bounds"
    ],
    "minutes": 35,
    "guide": [
      "A unit direction r and unit vector v satisfy r·v≤1, so threshold t>1 makes S′ empty. For Gaussian g, g·v is standard normal and exceeds every finite t with positive probability. Keeping the same numeric threshold after normalization therefore changes the algorithm radically.",
      "Write g=Rr, where Gaussian rotational invariance makes r uniform on the sphere and independent of R. Conditional on R, the equivalent selection rule is r·v≥t/R. Replacing R by sqrt(d) is an approximation requiring a separate error analysis, not an exact identity in finite dimension."
    ],
    "followup": "Why is hyperplane rounding at threshold zero unaffected by this normalization?",
    "deliverable": "A normalization counterexample and the exact radius-conditioned rule."
  },
  {
    "unit": "core-dual-cover",
    "slug": "greedy-harmonic-dual",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Prove the harmonic guarantee for a different covering algorithm",
    "prompt": "For weighted greedy set cover, charge each newly covered element c_S divided by the number newly covered when S is chosen. If maximum set size is d, prove each set’s total element charges are at most H_d times its cost. Derive a feasible scaled dual and the H_d approximation.",
    "prerequisites": [
      "weighted greedy cover",
      "dual fitting",
      "harmonic numbers"
    ],
    "minutes": 50,
    "guide": [
      "Fix a set Q. When r of its elements remain uncovered, greedy’s chosen cost-per-new-element is at most c_Q/r because Q itself is available. Order Q’s elements by their covering times, treating simultaneous groups with an inequality. Their total charges are at most c_Q(1+1/2+…+1/|Q|)≤H_d c_Q.",
      "The sum of all charges equals greedy cost. Dividing each element charge by H_d gives a feasible set-cover dual, so greedy cost≤H_dOPT. This uses maximum set cardinality through a harmonic sum, whereas the tight-set primal–dual f bound uses element frequency through purchase multiplicities."
    ],
    "followup": "How do zero-cost sets affect the initial greedy steps?",
    "deliverable": "A full dual-fitting proof and a distinction between two covering parameters."
  },
  {
    "unit": "core-dual-cover",
    "slug": "negative-cost-shift",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Shift negative covering costs before stating a ratio",
    "prompt": "If some set costs are negative, include all such sets first and solve the uncovered residual with a nonnegative-cost f-approximation. Let C_− be their total cost. Prove ALG≤C_−+f(OPT−C_−), and show why ALG≤fOPT is generally false even for an exact algorithm.",
    "prerequisites": [
      "cover monotonicity",
      "objective shifts",
      "ratio conventions"
    ],
    "minutes": 40,
    "guide": [
      "Every optimum may include all negative-cost sets, because adding one preserves coverage and lowers cost. After fixing them, the residual optimum equals OPT−C_− and is nonnegative. Applying the residual guarantee and adding back C_− proves the shifted bound.",
      "For an instance already covered by a single cost−1 set, an exact output has ALG=OPT=−1. With f>1 the statement −1≤−f is false. Multiplicative minimization ratios require a suitable nonnegative objective benchmark; algebraically adding a negative baseline changes the guarantee."
    ],
    "followup": "When can the shifted inequality still be converted to a useful ratio?",
    "deliverable": "A correct preprocessing theorem and a negative-optimum counterexample."
  },
  {
    "unit": "core-dual-path",
    "slug": "tight-arc-dag",
    "tier": "doctoral",
    "kind": "construction",
    "title": "Represent and count all shortest paths with positive costs",
    "prompt": "In a directed graph with strictly positive arc costs, compute distances d from s and retain arcs satisfying d(v)=d(u)+c_uv. Prove every s–t path in this subgraph is shortest and every shortest path is retained. Give a dynamic program counting shortest paths, and explain the zero-cost obstruction.",
    "prerequisites": [
      "distance potentials",
      "DAG dynamic programming"
    ],
    "minutes": 45,
    "guide": [
      "Each retained arc has zero reduced cost, so telescoping makes every retained s–t path cost d(t). On any shortest path every prefix is shortest; otherwise replacing a prefix would improve the total. Hence every path arc satisfies the equality.",
      "Strict positivity makes distance strictly increase along retained arcs, giving a DAG ordered by d. Set count(s)=1 and count(v)=sum_{uv retained}count(u), with polynomial-bit counts bounded by the number of simple paths. Zero-cost arcs can create strongly connected components and infinitely many shortest walks; simple-path counting cannot be obtained by this DAG recurrence without further work."
    ],
    "followup": "How should unreachable vertices be handled before forming the tight subgraph?",
    "deliverable": "An optimal-path characterization and a counting algorithm with its cost hypothesis."
  },
  {
    "unit": "core-dual-path",
    "slug": "prim-versus-slack-growth",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "Cheapest boundary edge is not reduced-slack growth",
    "prompt": "Take an s–t chain of L unit edges and a direct s–t edge of cost two, L≥3. Starting at s, repeatedly add a cheapest original-cost boundary edge until t is reached. Compute the resulting path and compare with shortest path. Explain how accumulated reduced slack changes the decision.",
    "prerequisites": [
      "Prim growth",
      "primal–dual shortest paths"
    ],
    "minutes": 35,
    "guide": [
      "At every stage the next chain edge costs one, less than the direct edge’s original cost two. The rule therefore follows the entire chain and reaches t with path cost L, while the direct edge gives optimum two. Its approximation ratio is L/2.",
      "Cut-dual growth repeatedly charges the direct edge whenever it crosses the growing reachable cut. Its remaining slack decreases across earlier stages, so it can become tight after total growth two even while its original cost stays two. Selecting by unchanged original boundary cost is a spanning-tree rule, not the shortest-path slack rule."
    ],
    "followup": "How does reverse deletion behave on the path produced by the incorrect rule?",
    "deliverable": "An unbounded greedy failure and a reduced-cost diagnosis."
  },
  {
    "unit": "core-steiner",
    "slug": "bridge-preprocessing",
    "tier": "doctoral",
    "kind": "construction",
    "title": "Classify bridges before moat growth",
    "prompt": "In a graph with nonnegative edge costs, for a bridge e prove it is mandatory if its cut separates a required pair, and unnecessary otherwise. Give a reduction that deletes unnecessary bridges and contracts mandatory bridges, adding their costs to the objective. Prove exact preservation of the residual optimum.",
    "prerequisites": [
      "bridges",
      "required-pair connectivity"
    ],
    "minutes": 45,
    "guide": [
      "Every path between opposite sides of a bridge must use it, so a crossing demand forces selection. If no demand crosses, all required connections lie within one side or the other; with nonnegative costs the bridge can be omitted and the sides solved separately.",
      "Every feasible solution includes each mandatory bridge. Contracting those edges maps feasible solutions to residual solutions, and lifting a residual solution by adding the contracted bridges restores every demand. Costs differ by the fixed sum of mandatory bridge costs. Update terminal identities under contraction and discard now-trivial demands."
    ],
    "followup": "How can demand crossings be tested efficiently on the bridge-component tree?",
    "deliverable": "An exact preprocessing reduction with a feasibility-and-cost correspondence."
  },
  {
    "unit": "core-steiner",
    "slug": "terminal-mst-single-class",
    "tier": "examiner",
    "kind": "proof",
    "title": "A terminal-metric MST gives a separate factor-two proof",
    "prompt": "For one connected demand class R, use shortest-path distances on R to compute a terminal MST, then expand its edges back to graph paths. Prove cost at most twice the optimal Steiner tree. Explain why summing this proof separately over several demand classes can overcount a shared forest optimum.",
    "prerequisites": [
      "metric closure",
      "Euler traversal",
      "Steiner tree"
    ],
    "minutes": 45,
    "guide": [
      "Double an optimal Steiner tree to obtain an Euler tour of cost 2OPT. Shortcut its visit sequence to the terminals using shortest-path triangle inequalities, giving a terminal tour of no greater cost. Removing an edge yields a terminal spanning tree, so the terminal MST is at most 2OPT. Expanding MST edges and taking their union cannot increase the summed path cost.",
      "For several classes, an optimal forest may merge classes and share edges. The sum of separate class Steiner optima need not be bounded by the one shared optimum, so applying the single-class inequality independently does not immediately prove a global factor two. The moat-growth analysis handles such sharing through a common dual."
    ],
    "followup": "Construct a common-backbone example where separate class optimum costs count the same backbone repeatedly.",
    "deliverable": "A complete single-class approximation and a limitation of independent class charging."
  },
  {
    "unit": "core-tree-metrics",
    "slug": "four-cycle-deterministic-distortion",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Determine optimal worst-case tree distortion for a four-cycle",
    "prompt": "For the unit four-cycle metric, prove every dominating tree metric, allowing auxiliary vertices, has maximum pair stretch at least two. Construct a tree attaining two. Compare with the maximum pairwise expected stretch of a uniformly random deleted-edge spanning tree.",
    "prerequisites": [
      "four-point tree condition",
      "domination",
      "expected stretch"
    ],
    "minutes": 45,
    "guide": [
      "The opposite-pair sum in any dominating tree metric is at least four. If all adjacent distances were strictly below two, both adjacent-pair sums would be below four, leaving a unique largest sum and violating the four-point condition. Thus some adjacent pair has stretch at least two.",
      "A four-leaf star with unit leaf edges gives every distinct distance two, attaining worst stretch two. Uniformly deleting a cycle edge gives adjacent expected distance (3+1+1+1)/4=3/2 and opposite distance always two, so maximum pairwise expected stretch is 3/2. The comparison separates deterministic worst-pair distortion from pairwise expected distortion."
    ],
    "followup": "What is the expected maximum stretch of the random spanning tree?",
    "deliverable": "A sharp deterministic bound and an exact randomized comparison."
  },
  {
    "unit": "core-tree-metrics",
    "slug": "cut-load-lca-algorithm",
    "tier": "examiner",
    "kind": "construction",
    "title": "Compute all tree capacities without tracing every demand path",
    "prompt": "Root a tree and assume LCA queries are available. For each demand d between s,t add d to s,t and subtract 2d at LCA(s,t). Prove a postorder sum gives the required capacity on every parent edge, and derive O((n+k)log n) runtime with standard LCA preprocessing.",
    "prerequisites": [
      "tree cut loads",
      "lowest common ancestors"
    ],
    "minutes": 40,
    "guide": [
      "For a subtree below edge e, one demand contributes d times the number of its endpoints in the subtree minus 2d if their LCA is there. This is d exactly when one endpoint lies inside and one outside, and zero when both are inside or both outside.",
      "Therefore the subtree aggregate equals the sum of demands whose unique paths use e. Individual difference entries may be negative, but every final edge capacity is nonnegative. Binary-lifting LCA preprocessing and k queries cost O((n+k)log n), followed by a linear postorder pass with polynomial-bit demand arithmetic."
    ],
    "followup": "How would directional rather than shared-undirected capacities alter the difference updates?",
    "deliverable": "A fast capacity algorithm and a per-demand cut contribution proof."
  },
  {
    "unit": "core-hardness",
    "slug": "cycle-consistency-weakness",
    "tier": "doctoral",
    "kind": "construction",
    "title": "A cycle of consistency checks may be too weak",
    "prompt": "Create M occurrence variables on a cycle, with even M≥4. Give the first half positive unit clauses and the second half negative unit clauses, each weight one, and equality checks on cycle edges, each weight λ>0. Compare globally consistent assignments with satisfying all units, and show fixed λ cannot enforce consistency as M grows.",
    "prerequisites": [
      "consistency gadgets",
      "gap accounting"
    ],
    "minutes": 45,
    "guide": [
      "A globally consistent assignment satisfies M/2 unit weight and all M equality checks, for value M/2+λM. Set the first half variables true and second half false. This satisfies all M unit clauses while violating only the two equality edges at the block boundaries, for value M+λ(M−2).",
      "The inconsistent assignment is better whenever M/2>2λ. Thus a bounded-degree cycle with constant check weight permits a large block of inconsistent answers at only constant boundary penalty. Compiling local proof occurrences into globally consistent variables needs an expansion or amplification argument, not only connectivity of the consistency graph."
    ],
    "followup": "How would an edge-expansion lower bound change the penalty for a block of disagreements?",
    "deliverable": "An exact consistency-cost calculation and a gap-preservation diagnosis."
  },
  {
    "unit": "core-hardness",
    "slug": "randomized-hardness-consequence",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "State the correct consequence of a randomized gap algorithm",
    "prompt": "A polynomial reduction has YES optimum≥cM and NO optimum≤sM. Suppose a randomized polynomial-time maximization algorithm always returns a feasible solution and achieves ratio ρ>s/c with probability at least 2/3. Prove this yields an RP decision algorithm for the source language, and state the resulting complexity assumption needed to rule it out.",
    "prerequisites": [
      "RP",
      "gap reductions",
      "feasible objective thresholds"
    ],
    "minutes": 45,
    "guide": [
      "Run the approximation algorithm and accept exactly when its feasible objective exceeds sM. In a NO instance this never happens because no feasible solution exceeds that bound. In a YES instance, successful approximation gives value at least ρcM>sM, so acceptance probability is at least two thirds.",
      "This is one-sided randomized error, hence an RP algorithm. For an NP-hard source it gives NP⊆RP, and the standard containment RP⊆NP yields NP=RP. One cannot conclude P=NP from this argument alone without a derandomization assumption. Always-feasible outputs are crucial for the zero false-positive property."
    ],
    "followup": "What changes if the algorithm can output infeasible solutions without a verification step?",
    "deliverable": "A direction-correct randomized decision reduction and its qualified hardness conclusion."
  },
  {
    "unit": "core-euclidean-tsp",
    "slug": "snap",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Prove the two-way snapping bound",
    "prompt": "Prove the two-way snapping bound. Give an explicit derivation, a failed simplification and its repair. Reconstruct the Euclidean TSP PTAS. Prove the snapping loss bound, describe a sufficient boundary state and its four-child transition, and distinguish the weaker portal-only running time from the polynomial bound after patching. State the exact structural lemma you invoke and how its expected extra cost yields success probability 1/2.",
    "minutes": 30,
    "guide": [
      "If each point moves by at most δ, each edge changes by at most 2δ and any n-edge tour by at most 2nδ. Applying this once to the old optimum and once to the returned tour gives C≤(1+η)OPT+(2+η)2nδ.",
      "State every invoked geometric lemma and distinguish its proof from its algorithmic consequences."
    ],
    "followup": "Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.",
    "deliverable": "A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound."
  },
  {
    "unit": "core-euclidean-tsp",
    "slug": "state",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Show why a portal subset is insufficient",
    "prompt": "Show why a portal subset is insufficient. Give an explicit derivation, a failed simplification and its repair. Why is a subset of boundary portals an insufficient DP state?",
    "minutes": 30,
    "guide": [
      "A boundary state must record portal occurrences with multiplicity and which entry is paired with which exit. Four boundary points can have identical used portals but different connections, so a portal subset alone is insufficient.",
      "State every invoked geometric lemma and distinguish its proof from its algorithmic consequences."
    ],
    "followup": "Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.",
    "deliverable": "A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound."
  },
  {
    "unit": "core-euclidean-tsp",
    "slug": "probability",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Derive success from expected added length",
    "prompt": "Derive success from expected added length. Give an explicit derivation, a failed simplification and its repair. Reconstruct the Euclidean TSP PTAS. Prove the snapping loss bound, describe a sufficient boundary state and its four-child transition, and distinguish the weaker portal-only running time from the polynomial bound after patching. State the exact structural lemma you invoke and how its expected extra cost yields success probability 1/2.",
    "minutes": 30,
    "guide": [
      "The structural theorem is the hard geometric input. Random shift makes scale-specific patching and portal detours cheap in expectation. With expected overhead ≤ηOPT/2, Markov gives overhead ≤ηOPT with probability ≥1/2.",
      "State every invoked geometric lemma and distinguish its proof from its algorithmic consequences."
    ],
    "followup": "Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.",
    "deliverable": "A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound."
  },
  {
    "unit": "core-euclidean-tsp",
    "slug": "time",
    "tier": "examiner",
    "kind": "proof",
    "title": "Separate portal-only and patched running times",
    "prompt": "Separate portal-only and patched running times. Give an explicit derivation, a failed simplification and its repair. Does portal-respecting alone establish a PTAS?",
    "minutes": 30,
    "guide": [
      "With m=O(log n/η) and r=O(1/η), the DP costs m^{O(r)}n log n, absorbed into n(log n)^{O(1/η)} for fixed η. The weaker r=O(m) bound only yields n^{O(log log n)}.",
      "State every invoked geometric lemma and distinguish its proof from its algorithmic consequences."
    ],
    "followup": "Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.",
    "deliverable": "A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound."
  },
  {
    "unit": "core-euclidean-tsp",
    "slug": "transition",
    "tier": "examiner",
    "kind": "proof",
    "title": "Specify a four-child DP transition",
    "prompt": "Specify a four-child DP transition. Give an explicit derivation, a failed simplification and its repair. Reconstruct the Euclidean TSP PTAS. Prove the snapping loss bound, describe a sufficient boundary state and its four-child transition, and distinguish the weaker portal-only running time from the polynomial bound after patching. State the exact structural lemma you invoke and how its expected extra cost yields success probability 1/2.",
    "minutes": 30,
    "guide": [
      "For each state enumerate compatible internal crossings and pairings of four child squares, reject inconsistent connections and closed subtours that leave points outside, then minimize the sum of child costs. At the root require one closed tour.",
      "State every invoked geometric lemma and distinguish its proof from its algorithmic consequences."
    ],
    "followup": "Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.",
    "deliverable": "A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound."
  },
  {
    "unit": "core-euclidean-tsp",
    "slug": "amplification",
    "tier": "examiner",
    "kind": "proof",
    "title": "Amplify and derandomize the shift choice",
    "prompt": "Amplify and derandomize the shift choice. Give an explicit derivation, a failed simplification and its repair. Reconstruct the Euclidean TSP PTAS. Prove the snapping loss bound, describe a sufficient boundary state and its four-child transition, and distinguish the weaker portal-only running time from the polynomial bound after patching. State the exact structural lemma you invoke and how its expected extra cost yields success probability 1/2.",
    "minutes": 30,
    "guide": [
      "Independent repetition t times reduces structural failure to at most 2^(−t); taking the best feasible output never worsens cost. Enumerating all O(n²) shifts of a nice instance also finds a good shift.",
      "State every invoked geometric lemma and distinguish its proof from its algorithmic consequences."
    ],
    "followup": "Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.",
    "deliverable": "A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound."
  },
  {
    "unit": "core-euclidean-tsp",
    "slug": "geometry",
    "tier": "examiner",
    "kind": "proof",
    "title": "Audit the use of the triangle inequality",
    "prompt": "Audit the use of the triangle inequality. Give an explicit derivation, a failed simplification and its repair. Reconstruct the Euclidean TSP PTAS. Prove the snapping loss bound, describe a sufficient boundary state and its four-child transition, and distinguish the weaker portal-only running time from the polynomial bound after patching. State the exact structural lemma you invoke and how its expected extra cost yields success probability 1/2.",
    "minutes": 30,
    "guide": [
      "The method uses Euclidean square geometry for the structural theorem. Triangle inequality justifies shortcutting portals, but arbitrary metrics need not admit the same planar dissection structure.",
      "State every invoked geometric lemma and distinguish its proof from its algorithmic consequences."
    ],
    "followup": "Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.",
    "deliverable": "A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound."
  },
  {
    "unit": "core-euclidean-tsp",
    "slug": "research-interface",
    "tier": "research",
    "kind": "research-extension",
    "title": "Investigate a compressed boundary interface",
    "prompt": "Investigate a compressed boundary interface. Give an explicit derivation, a failed simplification and its repair. Reconstruct the Euclidean TSP PTAS. Prove the snapping loss bound, describe a sufficient boundary state and its four-child transition, and distinguish the weaker portal-only running time from the polynomial bound after patching. State the exact structural lemma you invoke and how its expected extra cost yields success probability 1/2.",
    "minutes": 60,
    "guide": [
      "Define an interface with portal multiplicities and connectivity. Prove when two partial solutions with the same interface are interchangeable, and build a counterexample to the portal-subset-only interface. This is a bounded research exercise, not a novelty claim.",
      "State every invoked geometric lemma and distinguish its proof from its algorithmic consequences."
    ],
    "followup": "Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.",
    "deliverable": "A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound."
  },
  {
    "unit": "core-euclidean-tsp",
    "slug": "research-dimension",
    "tier": "research",
    "kind": "research-extension",
    "title": "Investigate the dimensional dependence",
    "prompt": "Investigate the dimensional dependence. Give an explicit derivation, a failed simplification and its repair. Reconstruct the Euclidean TSP PTAS. Prove the snapping loss bound, describe a sufficient boundary state and its four-child transition, and distinguish the weaker portal-only running time from the polynomial bound after patching. State the exact structural lemma you invoke and how its expected extra cost yields success probability 1/2.",
    "minutes": 60,
    "guide": [
      "For a fixed dimension d, count the faces and portal choices per face for a hypercube dissection. Identify which planar patching argument needs a higher-dimensional replacement; do not assert a PTAS solely from a state count.",
      "State every invoked geometric lemma and distinguish its proof from its algorithmic consequences."
    ],
    "followup": "Which part of your argument still holds if ε depends on n? Give a bound rather than saying polynomial.",
    "deliverable": "A justified blackboard argument with a concrete calculation or counterexample and a complete resource bound."
  },
  {
    "unit": "core-sat-lp",
    "slug": "common-lp-benchmark",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "Repair a combination of incompatible lower bounds",
    "prompt": "A proof averages the global 1/2 fair-assignment ratio with the global 1−1/e LP-rounding ratio, then claims 3/4. Compute what that argument actually proves. Repair it using the k=1, k=2 and k≥3 clause cases and one LP benchmark.",
    "minutes": 30,
    "guide": [
      "For k=1 the two coefficients are 1/2 and 1; for k=2 they are 3/4 and 3/4. For k≥3, 1−2^(−k)≥7/8 and 1−(1−1/k)^k≥1−1/e, whose sum exceeds 3/2. The maximum of two objective values is at least their mean.",
      "The global average is 3/4−1/(2e), about 0.566. It is weaker because the hard clauses for the two analyses differ. The clausewise sum is at least 3/2 times zC."
    ],
    "followup": "Can the maximum of expectations be substituted for the expectation of the maximum as an equality? Give a two-outcome counterexample.",
    "deliverable": "An explicit failed calculation, a complete clausewise repair and a justified expectation inequality."
  }
];
