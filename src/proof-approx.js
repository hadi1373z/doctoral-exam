const PROOF_APPROX = {
  "core-knapsack": {
    "proof": {
      "goal": "Transfer exact optimality for scaled profits to a (1−ε) guarantee without relaxing capacity.",
      "scope": "Williamson–Shmoys §3.1. Assumes the minimum-weight-per-profit dynamic program is implemented with exact integer/rational arithmetic; the walk explains the loss and size bounds, not every DP implementation detail.",
      "frames": [
        {
          "title": "Keep the original optimum feasible",
          "question": "Which side of the instance may change without invalidating the capacity benchmark?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Object",
              "Original weight",
              "Scaled profit"
            ],
            "rows": [
              [
                "Item i",
                "wᵢ unchanged",
                "⌊pᵢ/K⌋"
              ],
              [
                "Original optimum O",
                "≤ B",
                "a legal DP candidate"
              ],
              [
                "DP output A",
                "≤ B",
                "maximal scaled sum"
              ]
            ],
            "focus": [
              1,
              2
            ],
            "note": "The same feasible subsets are compared under two objectives."
          },
          "claim": "Rounding profits leaves O feasible for the DP.",
          "explanation": "Delete overweight items first. The best remaining singleton has profit Pmax, so Pmax≤OPT; every remaining item has profit at most Pmax. Nothing in this argument rounds weights.",
          "carry": "Scaled optimality can legitimately compare A with O."
        },
        {
          "title": "Put the rounding loss on the benchmark",
          "question": "Why is the floor error charged to O rather than assumed zero on A?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "K⌊pᵢ/K⌋",
                "relation": "≤",
                "right": "pᵢ",
                "reason": "floor definition"
              },
              {
                "left": "K⌊pᵢ/K⌋",
                "relation": ">",
                "right": "pᵢ−K",
                "reason": "one loss smaller than K"
              },
              {
                "left": "K∑O p′ᵢ",
                "relation": ">",
                "right": "OPT−|O|K",
                "reason": "sum over the fixed optimum"
              }
            ],
            "focus": 2,
            "note": "The useful comparison points toward an upper estimate of the loss."
          },
          "claim": "K∑O p′ᵢ>OPT−|O|K.",
          "explanation": "Each item loses less than K when converted back from its scaled profit. Summing only over the original optimum controls a set the algorithm need not know.",
          "carry": "A feasible benchmark loses at most nK."
        },
        {
          "title": "Cross through the rounded optimum",
          "question": "Which link in this chain uses the dynamic program?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "p(A)",
                "relation": "≥",
                "right": "K∑A p′ᵢ",
                "reason": "recover original profits"
              },
              {
                "left": "K∑A p′ᵢ",
                "relation": "≥",
                "right": "K∑O p′ᵢ",
                "reason": "exact scaled optimization"
              },
              {
                "left": "K∑O p′ᵢ",
                "relation": ">",
                "right": "OPT−nK",
                "reason": "benchmark floor loss"
              }
            ],
            "focus": 1,
            "note": "The middle inequality is algorithmic; the outside inequalities are arithmetic."
          },
          "claim": "p(A)>OPT−nK≥(1−ε)OPT for K=εPmax/n.",
          "explanation": "The final substitution uses nK=εPmax≤εOPT. It does not require A and O to contain the same items, as the worked example already demonstrates.",
          "carry": "Feasibility plus the correct intermediate objective yields the approximation."
        },
        {
          "title": "Bound the encoded DP dimensions",
          "question": "Why does a huge binary profit not force a huge profit table?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Quantity",
              "Bound",
              "Role"
            ],
            "rows": [
              [
                "One scaled profit",
                "n/ε",
                "Pmax cancels"
              ],
              [
                "All scaled profits",
                "n²/ε",
                "largest DP profit index"
              ],
              [
                "Stored weights",
                "input-length integers",
                "exact feasibility"
              ]
            ],
            "focus": [
              0,
              1
            ],
            "note": "The table depends polynomially on n and 1/ε, rather than on Pmax."
          },
          "claim": "Each p′ᵢ≤n/ε and the total scaled-profit range is at most n²/ε.",
          "explanation": "The arithmetic must still operate on input-length weight and profit encodings. A bound on the number of states alone is not a bit-complexity proof; exact additions and comparisons have polynomial bit length.",
          "carry": "The scheme is fully polynomial in input length and 1/ε."
        }
      ]
    },
    "challenges": [
      {
        "id": "knapsack-cardinality-refinement",
        "title": "Spend the error budget on feasible cardinality",
        "minutes": 12,
        "skill": "Refine rounding and DP size using an independently proved structural bound.",
        "connection": "The example pays a coarse nK loss. Here many input items exist, but no feasible solution can contain many of them.",
        "prompt": "Capacity is 10, every item weighs at least 3, n=60, Pmax=80, and ε=1/10. Prove a feasible-cardinality bound L, choose K=εPmax/L, and reconstruct the complete approximation chain. Then bound the largest scaled profit of any feasible subset and explain why DP columns above that bound can be discarded. State which part of the proof would fail if even one zero-weight positive-profit item were allowed without revising L.",
        "hints": [
          "The cardinality bound concerns feasible subsets, not the number of input items.",
          "Use L=⌊10/3⌋, bound each scaled profit by Pmax/K, and keep the exact capacity test."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What upper bound on scaled profit holds for every feasible subset?",
          "expected": 90,
          "feedback": "At most three items fit; K=8/3 and each scaled profit is at most 80/(8/3)=30. Thus every feasible total is at most 90. Using all 60 items gives a valid but unnecessary table bound of 1800."
        },
        "solution": [
          "All feasible subsets have at most L=3 items because four would weigh at least 12.",
          "Choose K=(1/10)·80/3=8/3. The floor loss on O is smaller than 3K=8.",
          "Exact scaled optimization and unchanged weights give p(A)>OPT−8≥0.9OPT because OPT≥80.",
          "Every feasible subset has scaled profit at most 3·30=90, so states above 90 cannot hold a feasible weight and may be omitted.",
          "A zero-weight positive-profit item can increase feasible cardinality beyond three. Remove and include such items separately, or derive a new bound before using the refined error budget."
        ],
        "rubric": [
          "Derive L from original weights and preserve original feasibility.",
          "Show all three inequalities linking p(A), scaled optimality and p(O).",
          "Justify the profit-index cap 90 (columns zero through 90) and handle the zero-weight exception."
        ],
        "mistake": "Substituting L for n merely because the optimum seems small is circular. L must hold for every feasible benchmark, proved from the input.",
        "followup": "Derive the corresponding bound for capacity B and a known positive lower weight b, including the case B/b is an integer."
      },
      {
        "id": "knapsack-feasibility-repair",
        "title": "Can a tiny weight error be repaired cheaply?",
        "minutes": 12,
        "skill": "Construct a family separating small constraint perturbations from small objective loss.",
        "connection": "The worked example changes the winning subset while keeping feasibility exact. This proposal changes feasibility instead.",
        "prompt": "A proposed scheme rounds weights down to multiples of 0.5 and solves the rounded knapsack exactly. Capacity is 10. Item A has weight 10 and profit 1.99; B and C each have weight 5.1 and profit 1. The scheme chooses B+C, then repairs overweight solutions by deleting selected items. Identify the original optimum, prove what any deletion-only repair of this chosen subset can earn, and compare it with a 0.9 approximation claim. Extend the construction to arbitrarily small rounding units: explain why small weight error alone cannot budget the lost profit.",
        "hints": [
          "Enumerate feasible original subsets before discussing approximation.",
          "The repaired solution must remain a subset of {B,C}; it cannot insert A."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the largest repaired-profit / OPT ratio on this instance?",
          "expected": 0.5025125628140703,
          "feedback": "The rounded optimum has profit 2, but B+C weighs 10.2. Every feasible deletion-only repair keeps at most one item and earns 1, while the original optimum is A with value 1.99. The ratio is 1/1.99=100/199, far below 0.9."
        },
        "solution": [
          "Originally B+C is infeasible, while A is feasible and better than either singleton B or C. Hence OPT=1.99.",
          "Rounded B and C have weights 5 each; the exact rounded objective therefore prefers their profit 2 to A.",
          "Deleting items until feasibility leaves profit at most 1, so the best deletion-only repair has ratio 100/199.",
          "For any small unit δ dividing 5, use weights 5+δ/5 for B,C and the same profits. Both round to 5 but still cannot coexist originally.",
          "As δ tends to zero, objective loss remains near one half of OPT. A constraint error has no automatic conversion into a relative profit error."
        ],
        "rubric": [
          "Identify both original and rounded optima without mixing their feasible regions.",
          "Prove an upper bound on every deletion-only repair, not one arbitrary repair.",
          "Give an arbitrarily small-unit family and explain the failed error accounting."
        ],
        "mistake": "Charging removed profit to the small excess weight assumes a density bound that the input never supplied.",
        "followup": "Give an additional density condition under which deleting enough weight could be charged, and explain why it changes the theorem being proved."
      }
    ]
  },
  "core-scheduling-scheme": {
    "proof": {
      "goal": "Explain the source PTAS: round long jobs down, restore them, and insert short jobs with one—not two—slack charges.",
      "scope": "Williamson–Shmoys §3.2 uses integer k≈1/ε, long jobs p>T/k, and downward rounding to T/k². The rounded long jobs are still at least T/k. The walk follows the source construction and its original-volume insertion argument.",
      "frames": [
        {
          "title": "Turn a feasible target into a rounded candidate",
          "question": "Why does the source round long processing times downward?",
          "diagram": {
            "kind": "table",
            "columns": [
              "T=100, k=10",
              "Original",
              "Floor to unit 1"
            ],
            "rows": [
              [
                "A",
                "26.2",
                "26"
              ],
              [
                "B",
                "24.4",
                "24"
              ],
              [
                "C",
                "38.1",
                "38"
              ],
              [
                "Displayed total",
                "88.7",
                "88"
              ]
            ],
            "focus": [
              3
            ],
            "note": "A feasible original T-schedule stays feasible after decreasing every long job."
          },
          "claim": "If an original T-schedule exists, its rounded long jobs fit within T.",
          "explanation": "A target test must not reject a genuinely feasible target merely because rounding enlarged its jobs. Downward rounding keeps the original assignment as a witness for the rounded DP.",
          "carry": "The configuration problem has a valid benchmark at exactly T."
        },
        {
          "title": "Compress names into type multiplicities",
          "question": "What must the state retain so the same job is not used twice?",
          "diagram": {
            "kind": "table",
            "columns": [
              "State coordinate",
              "Meaning",
              "Bound"
            ],
            "rows": [
              [
                "type i",
                "count of size iT/k²",
                "0,…,n"
              ],
              [
                "one configuration",
                "counts used on one machine",
                "each 0,…,k"
              ],
              [
                "DP transition",
                "subtract one full vector",
                "no negative counts"
              ]
            ],
            "focus": [
              1,
              2
            ],
            "note": "The recurrence consumes every type count exactly once."
          },
          "claim": "There are at most k² rounded types and (k+1)^(k²) candidate configurations.",
          "explanation": "A rounded long job has size at least T/k, so no T-machine configuration contains more than k jobs. For fixed k, enumerate count vectors, reject those exceeding T, and use a count-state DP over the whole instance.",
          "carry": "A feasible compressed assignment can be expanded to named jobs."
        },
        {
          "title": "Restore original lengths once",
          "question": "How much can one machine gain when its rounded jobs are restored?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "pⱼ−p′ⱼ",
                "relation": "<",
                "right": "T/k²",
                "reason": "one downward round"
              },
              {
                "left": "|S|",
                "relation": "≤",
                "right": "k",
                "reason": "every rounded long job ≥T/k"
              },
              {
                "left": "∑S pⱼ",
                "relation": "≤",
                "right": "T+T/k",
                "reason": "restore at most k jobs"
              }
            ],
            "focus": 2,
            "note": "The restoration loss is a per-machine count bound, not a sum over all n jobs."
          },
          "claim": "Restored long-job loads are at most (1+1/k)T.",
          "explanation": "The rounded configuration uses load at most T. Each of its at most k jobs increases by less than T/k². This step does not yet insert any short job.",
          "carry": "The initial large-job schedule already meets the target enlarged by T/k."
        },
        {
          "title": "Use original volume for the last short job",
          "question": "Why need short-job insertion not add a second T/k to the restored-load bound?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "start of short job j",
                "relation": "≤",
                "right": "∑(i≠j)pᵢ/m",
                "reason": "least original load"
              },
              {
                "left": "∑(i≠j)pᵢ/m",
                "relation": "<",
                "right": "T",
                "reason": "original total volume ≤mT"
              },
              {
                "left": "completion of j",
                "relation": "<",
                "right": "T+T/k",
                "reason": "pⱼ≤T/k"
              }
            ],
            "focus": 2,
            "note": "Use the average of original processing assigned so far, rather than the maximum restored load."
          },
          "claim": "Final makespan≤max{restored long load, short-job completions}≤(1+1/k)T.",
          "explanation": "If the last finishing job is long, use the restoration bound. If it is short, its least-loaded machine starts it below T by the original-volume lower bound. These are alternative cases, so their slack terms are not added.",
          "carry": "Target search and fixed-k configuration DP yield the PTAS."
        }
      ]
    },
    "challenges": [
      {
        "id": "scheduling-one-slack",
        "title": "Find the double-counted scheduling slack",
        "minutes": 12,
        "skill": "Choose the correct benchmark when two approximation losses appear to accumulate.",
        "connection": "The worked example decreases long-job lengths to rounded types, then restores their true load. This challenge shows why restoration and short-job insertion do not require two separate slack additions.",
        "prompt": "Let T=100, k=10, and m=3. Assume the original instance admits a T-schedule. Run the source downward-rounding configuration DP, restore long jobs, and insert all jobs of length at most 10 on the least-loaded machine using their original lengths. An examiner proposes the bound 120 by first bounding restored loads by 110 and then adding a final short job. Prove the stronger bound 110. Explain exactly why the average-load argument applies even though some restored machine may already have load above 100.",
        "hints": [
          "Separate the last finishing long job from the last finishing short job.",
          "At a short-job insertion, assigned original work is at most total original work minus this positive job."
        ],
        "probe": {
          "kind": "choice",
          "prompt": "Which inequality correctly closes the short-job case?",
          "options": [
            "Cⱼ≤110+pⱼ, because the largest restored load bounds the chosen machine.",
            "Cⱼ≤(∑ᵢ≠ⱼpᵢ)/3+pⱼ<100+10, because the chosen original load is no greater than the average.",
            "Cⱼ≤100, because downward rounding permanently removes processing time.",
            "Cⱼ≤100+30, because all three machines contribute one slack term."
          ],
          "answer": 1,
          "feedback": [
            "This is a valid coarse estimate but does not prove the sharper source guarantee; it uses the maximum where the minimum is chosen.",
            "Correct. Original total work is at most 300 and the current load sum excludes j and all later jobs. The least-loaded machine is therefore below 100 before adding pⱼ<10.",
            "Original processing times must be restored; rounded lengths are not actual execution times.",
            "The job occupies one chosen machine, so summing slack across machines is the wrong quantity."
          ]
        },
        "solution": [
          "Each rounded long job is at least 10, so a rounded T-configuration uses at most ten long jobs.",
          "Restoring lengths increases a machine by less than ten units; hence every long-job completion is at most 110.",
          "At insertion of short j, total original load already assigned is at most ∑ᵢ≠ⱼpᵢ<300. The least-loaded machine has load below 100, even if another machine exceeds 100.",
          "Since pⱼ≤10, its completion is below 110. Take the maximum of the long and short cases.",
          "The 120 estimate adds bounds belonging to different cases. It does not express the start time of a job assigned to the least-loaded machine."
        ],
        "rubric": [
          "Use source downward rounding and the k-job bound correctly.",
          "Bound the minimum current original load by its average.",
          "Combine alternative last-job cases with a maximum, not an added error."
        ],
        "mistake": "A bound on every machine by 110 does not mean the least-loaded machine is close to 110; the original total-volume constraint is stronger.",
        "followup": "Show why this proof survives any order of short-job insertion but needs revision if the input target fails the volume lower bound."
      },
      {
        "id": "scheduling-multiplicity-certificate",
        "title": "A locally feasible configuration can be globally impossible",
        "minutes": 12,
        "skill": "Expose the integer count constraints hidden by machine descriptions.",
        "connection": "The example describes one machine by rounded types; the full algorithm must cover the instance’s entire multiplicity vector.",
        "prompt": "Two machines have target T=10. The rounded instance has three jobs of size 6 and two jobs of size 1. Its total volume is exactly 20, and configurations such as (one 6, two 1s) are individually feasible. Prove that no pair of feasible configurations covers the multiplicity vector. Give a valid linear inequality satisfied by all two-machine configuration combinations but violated by this input. Explain how a count-state DP detects the obstruction and why independent selection of a “good” local configuration cannot.",
        "hints": [
          "Use a coefficient on the size-6 type that expresses a packing obstruction stronger than total volume.",
          "A machine of capacity ten can contain at most one size-6 job."
        ],
        "probe": {
          "kind": "choice",
          "prompt": "Which separating inequality is valid for every feasible two-machine packing here?",
          "options": [
            "6n₆+n₁≤20, and this inequality alone excludes the input.",
            "n₁≤2, because every configuration has at most one short job.",
            "n₆+n₁≤2, because every machine processes only one job.",
            "n₆≤2, obtained by summing one large-job constraint for each machine."
          ],
          "answer": 3,
          "feedback": [
            "The volume inequality is valid but holds with equality on this infeasible input; it does not separate it.",
            "A machine can contain ten size-one jobs, so this is not a valid configuration inequality.",
            "Several jobs can fit on one machine; the asserted job-count limit is false.",
            "Correct. Each machine has 6a≤10, so its integer count a is at most one. Across two machines n₆≤2, whereas the input requires three."
          ]
        },
        "solution": [
          "Any feasible configuration satisfies integer large count a≤⌊10/6⌋=1.",
          "Adding this inequality over two machines gives total n₆≤2, contradicted by n₆=3.",
          "The volume bound 6·3+2=20 is necessary but misses this indivisibility obstruction.",
          "A count-state DP starting at (3,2) must subtract two feasible configuration vectors and reach (0,0). No such transition sequence exists because at most two size-6 jobs can be consumed.",
          "Selecting locally feasible descriptions independently either leaves a large job unscheduled or duplicates some short jobs; local feasibility does not certify global counts."
        ],
        "rubric": [
          "Construct and justify the separating count inequality.",
          "Explain why total volume fails to distinguish this case.",
          "Describe the DP’s global count condition and the failure of independent local choices."
        ],
        "mistake": "A type description compresses item identities, not item multiplicities. Forgetting the counts changes the feasible region.",
        "followup": "Generalize the certificate to jobs longer than T/r and show that each machine can contain at most r−1 such jobs."
      }
    ]
  },
  "core-bin-scheme": {
    "proof": {
      "goal": "Prove the APTAS bound by shifting sorted groups, paying for discarded items, and using a maximum in the small-item phase.",
      "scope": "Williamson–Shmoys §3.3. Exact optimization for a bounded number of rounded types is the configuration-DP input. The walk retains both the finite additive bin and the small-volume special case.",
      "frames": [
        {
          "title": "Shift rounded items into larger positions",
          "question": "Why can rounding upward still produce a rounded instance no harder than the original?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Original block",
              "Rounded next block",
              "Dominating positions"
            ],
            "rows": [
              [
                "0.62, 0.60",
                "0.48, 0.48",
                "both fit backward"
              ],
              [
                "0.48, 0.46",
                "0.34, 0.34",
                "both fit backward"
              ]
            ],
            "focus": [
              0,
              1
            ],
            "note": "Discarding the first group makes a size-dominating injection into the previous original group."
          },
          "claim": "OPT(I′)≤OPT(Ilarge).",
          "explanation": "Every rounded item in group j is no larger than every original item in group j−1. Substitute it into one distinct predecessor position of an original packing. Blocks are not asserted to be bins.",
          "carry": "The rounded optimum is benchmarked by an actual feasible packing."
        },
        {
          "title": "Pay to restore the discarded block",
          "question": "Which cost cannot vanish when the rounded instance is unpacked?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "OPT(Ilarge)",
                "relation": "≤",
                "right": "OPT(I′)+q",
                "reason": "q discarded items, one bin each"
              },
              {
                "left": "q=⌊εVlarge⌋",
                "relation": "≤",
                "right": "εOPT(I)",
                "reason": "volume lower bound"
              },
              {
                "left": "large bins ℓ",
                "relation": "≤",
                "right": "(1+ε)OPT(I)",
                "reason": "restore all original large items"
              }
            ],
            "focus": 2,
            "note": "The first group pays for the monotonic shift and must reappear in the final solution."
          },
          "claim": "Large pieces can be packed in ℓ≤(1+ε)OPT bins.",
          "explanation": "Replace each retained rounded item by its no-larger original item, and put each of the q discarded largest items in a separate bin. Choose q using large-item volume, with the small-volume case solved directly.",
          "carry": "A feasible large-piece packing includes every input large item."
        },
        {
          "title": "Recognize the two small-item cases",
          "question": "When is near-fullness available, and when is it unnecessary?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Small-item insertion",
              "Consequence",
              "Bin count"
            ],
            "rows": [
              [
                "No new bin opens",
                "keep initial packing",
                "B=ℓ"
              ],
              [
                "A new bin opens",
                "all but last ≥1−γ",
                "B≤V/(1−γ)+1"
              ]
            ],
            "focus": [
              0,
              1
            ],
            "note": "These cases are alternatives; their bounds are combined by max, not addition."
          },
          "claim": "B≤max{ℓ,V/(1−γ)+1}.",
          "explanation": "If first-fit opens a new bin for a piece of size at most γ, every previous bin has insufficient slack and therefore load at least 1−γ. The final opened bin is the sole exception.",
          "carry": "The original total volume bounds bins introduced by small items."
        },
        {
          "title": "Close the parameter and runtime bounds",
          "question": "Why does γ=ε/2 suffice for the final guarantee?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "1/(1−ε/2)",
                "relation": "≤",
                "right": "1+ε",
                "reason": "0<ε≤1"
              },
              {
                "left": "V/(1−γ)+1",
                "relation": "≤",
                "right": "(1+ε)OPT+1",
                "reason": "V≤OPT"
              },
              {
                "left": "B",
                "relation": "≤",
                "right": "(1+ε)OPT+1",
                "reason": "combine the two cases"
              }
            ],
            "focus": 2,
            "note": "The +1 is retained; it is not a purely multiplicative approximation."
          },
          "claim": "For fixed ε the number of rounded types is O(1/ε²), giving an APTAS.",
          "explanation": "When εVlarge≥1, q=⌊εVlarge⌋ controls the number of groups. If εVlarge<1, there are O(1/ε²) large pieces and the direct finite-type routine handles them.",
          "carry": "Grouping, exact configuration optimization, and insertion each have a separate obligation."
        }
      ]
    },
    "challenges": [
      {
        "id": "bin-max-versus-sum",
        "title": "Do not add two incompatible bin charges",
        "minutes": 12,
        "skill": "Derive the asymptotic bound from a case split rather than accumulating unrelated upper bounds.",
        "connection": "The example lists the first block and near-full small bins separately. The final proof must decide which bound applies to the actual final packing.",
        "prompt": "Set ε=1/5 and γ=1/10. Suppose the whole input has volume V=20, its large-piece rounded optimum is 21 bins, and q=4 first-block items were set aside. Restore a packing of the large items in at most 25 bins, then use first-fit for the small items. Prove the strongest integer upper bound obtained from these facts alone. An examiner adds 25 to V/(1−γ)+1; identify the exact logical error. Explain why a final packing with 26 bins would contradict the near-fullness case.",
        "hints": [
          "First distinguish whether any new bin opens during the small-item phase.",
          "If a 26th bin opens, at least 25 earlier bins must each have load above 0.9."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What final integer upper bound follows?",
          "expected": 25,
          "feedback": "The no-new-bin case gives at most 25. If new bins open, B≤20/0.9+1=209/9≈23.222, so integrality gives B≤23. The combined bound is max{25,23}=25, not their sum."
        },
        "solution": [
          "The restored large packing has ℓ≤21+4=25 bins.",
          "If no new bin opens, B=ℓ≤25.",
          "If some new bin opens, all but its final bin have load at least 0.9, so B≤20/0.9+1=209/9 and B≤23 integrally.",
          "Thus B≤25 under either case. Adding the two bounds double-counts the original bins, which also contribute to the near-fullness volume charge.",
          "A 26-bin result would require at least 25 bins of load at least 0.9, hence volume at least 22.5>20."
        ],
        "rubric": [
          "Separate the two insertion cases and account for the restored first block.",
          "Use the volume inequality and integrality in the correct direction.",
          "Explain the double count and explicitly rule out 26 bins."
        ],
        "mistake": "The small-item lemma bounds all final bins when it opens a new one; it does not bound an additional set of bins to add to ℓ.",
        "followup": "Derive max{ℓ,⌊V/(1−γ)+1⌋} for arbitrary rational V and γ, noting the strictness convention at the threshold."
      },
      {
        "id": "bin-rounding-without-shift",
        "title": "Why a tiny rounding error can double the bins",
        "minutes": 12,
        "skill": "Build an objective-gap counterexample to uniform size rounding.",
        "connection": "Linear grouping removes a first block so every rounded retained item has a larger predecessor. Uniform upward rounding has no such comparison.",
        "prompt": "Consider 2r items, each of size exactly 1/2. A proposed replacement rounds every size upward by an arbitrarily small positive δ<1/2, then optimally packs and maps back. Determine the original and rounded optima and their ratio. Explain why δ→0 does not make that ratio tend to one. Contrast this with the exact domination map used by linear grouping, and state where the discarded-block charge prevents the same invalid inference.",
        "hints": [
          "Count how many original and rounded items can occupy a unit bin.",
          "Bin count is discontinuous at the pair-sum threshold one."
        ],
        "probe": {
          "kind": "number",
          "prompt": "For r=37, what is OPT(rounded)/OPT(original)?",
          "expected": 2,
          "feedback": "The 74 half-items fit in 37 original bins. After any positive upward perturbation, two no longer fit, so 74 bins are needed and the ratio is 2, independently of how small δ is."
        },
        "solution": [
          "Pair the original half-items to obtain OPT=r; volume r proves optimality.",
          "Each rounded item has size 1/2+δ, so every bin can contain at most one and the rounded optimum is 2r.",
          "The ratio is exactly two for every δ>0; a small coordinate error is not a small relative bin-count error.",
          "Linear grouping does not compare each rounded item with itself. After dropping the first group, it injects each rounded item into a distinct larger predecessor position.",
          "That injection proves OPT(I′)≤OPT(I), while the separately charged discarded group controls the reverse reconstruction. Uniform rounding lacks the first inequality."
        ],
        "rubric": [
          "Prove both optima and the δ-independent factor.",
          "Identify the discontinuity at a bin-capacity threshold.",
          "Describe the shifted injection and the cost it pays, rather than merely naming linear grouping."
        ],
        "mistake": "Summing small size increases and dividing by bin capacity ignores that unused slack is distributed across indivisible bins.",
        "followup": "Construct a similar threshold example in which all original item sizes are strictly below one half and δ is specified before the input is chosen."
      }
    ]
  },
  "core-sat-random": {
    "proof": {
      "goal": "Derandomize a computable expected satisfied weight by preserving conditional expectation at every variable.",
      "scope": "Williamson–Shmoys §§5.1–5.3. Clauses are normalized first; variable choices follow the explicitly chosen product distribution. The walk does not assume clause indicators are independent.",
      "frames": [
        {
          "title": "Use local expectations without fake independence",
          "question": "Can two clauses share variables while their expected contributions still add?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Clause",
              "Probability",
              "Weighted contribution"
            ],
            "rows": [
              [
                "x, weight 3",
                "1/2",
                "3/2"
              ],
              [
                "¬x∨y, weight 2",
                "3/4",
                "3/2"
              ],
              [
                "¬y∨z, weight 4",
                "3/4",
                "3"
              ]
            ],
            "focus": [
              0,
              1,
              2
            ],
            "note": "The three indicators are dependent, but expectation is linear."
          },
          "claim": "E[X]=∑C wC Pr(C satisfied)=6.",
          "explanation": "Distinct variables inside a normalized clause allow its failure probability to be computed from a product. Adding clause contributions requires no independence between clauses.",
          "carry": "A local formula makes the global conditional potential efficiently computable."
        },
        {
          "title": "Apply the weighted-average identity",
          "question": "If the next bit has probability q of being one, which average relates the two branches?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "M",
                "relation": "=",
                "right": "qM₁+(1−q)M₀",
                "reason": "law of total expectation"
              },
              {
                "left": "max{M₀,M₁}",
                "relation": "≥",
                "right": "M",
                "reason": "maximum dominates weighted mean"
              }
            ],
            "focus": 1,
            "note": "The branch weights matter, but at least one positive-probability branch preserves M."
          },
          "claim": "Choose a supported branch with conditional expectation at least M.",
          "explanation": "For q=1/2 the children average equally; for biased rounding they do not. The identity, not a median or concentration claim, certifies that both supported children cannot lie below the parent.",
          "carry": "Fixing one bit need not decrease the potential."
        },
        {
          "title": "Update unfinished clauses correctly",
          "question": "Why does a clause already satisfied by a fixed literal contribute its full weight?",
          "diagram": {
            "kind": "table",
            "columns": [
              "After x=1",
              "Remaining condition",
              "Contribution"
            ],
            "rows": [
              [
                "x, weight 3",
                "already satisfied",
                "3"
              ],
              [
                "¬x∨y, weight 2",
                "y must be true",
                "1"
              ],
              [
                "¬y∨z, weight 4",
                "two free literals",
                "3"
              ]
            ],
            "focus": [
              0,
              1,
              2
            ],
            "note": "The x=1 branch has value seven; x=0 has value five."
          },
          "claim": "M after the first choice can increase from 6 to 7.",
          "explanation": "A satisfied clause has conditional success probability one. An unsatisfied clause with no free literals has probability zero. Only the other unfinished clauses need their remaining-literal product recomputed.",
          "carry": "Each update is a genuine conditional expectation of the same objective."
        },
        {
          "title": "End at a deterministic certificate",
          "question": "What becomes of the expectation when no random variable remains?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "X(a)",
                "relation": "=",
                "right": "E[X | all bits=a]",
                "reason": "constant after full conditioning"
              },
              {
                "left": "E[X | all bits=a]",
                "relation": "≥",
                "right": "E[X]",
                "reason": "every chosen step is monotone"
              }
            ],
            "focus": 1,
            "note": "The final assignment is one concrete outcome, not a claim that every outcome is good."
          },
          "claim": "The constructed assignment has satisfied weight at least the starting expectation.",
          "explanation": "The proof certifies existence and gives an algorithm because each branch expectation is computable in polynomial time. A distribution with a hard-to-compute conditional expectation would not yield the same efficient derandomization merely from this identity.",
          "carry": "The method preserves a lower bound until it becomes the actual objective."
        }
      ]
    },
    "challenges": [
      {
        "id": "sat-weighted-branching",
        "title": "Derandomize a biased, shared-variable instance",
        "minutes": 14,
        "skill": "Compute the same conditional potential under dependent clause indicators and biased variable marginals.",
        "connection": "The example used fair bits. Here branch probabilities are unequal, clauses share variables, and the better branch is not inferred from its probability.",
        "prompt": "Let x,y,z be independent with Pr(x=1)=3/4, Pr(y=1)=1/3, Pr(z=1)=1/2. Maximize the satisfied weight of (x∨y) of weight 6, (¬x∨z) of weight 5, and (¬y∨¬z) of weight 4. Compute the initial expectation, both x-branch expectations, and verify their weighted-average identity. Then condition on the better x branch, compute both y branches, and complete z without lowering the potential. Explain which independence assumption is used and which is not.",
        "hints": [
          "For x=1 the middle clause reduces to z; for x=0 the first clause reduces to y.",
          "After x=1, the y=0 branch satisfies the last clause surely."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the initial expected satisfied weight?",
          "expected": 11.458333333333334,
          "feedback": "The failure probabilities are 1/6, 3/8 and 1/6, so expected contributions are 5, 25/8 and 10/3. Their sum is 275/24. Shared variables across clauses do not prevent this addition."
        },
        "solution": [
          "The first failure probability is (1/4)(2/3)=1/6, the second is (3/4)(1/2)=3/8, and the third is (1/3)(1/2)=1/6.",
          "Thus E[X]=5+25/8+10/3=275/24.",
          "For x=1 the branch value is 6+5/2+10/3=71/6; for x=0 it is 2+5+10/3=31/3. Their average with weights 3/4 and 1/4 is 275/24.",
          "Choose x=1. Then y=0 gives 6+5/2+4=25/2, whereas y=1 gives 6+5/2+2=21/2. Their 2/3,1/3 weighted average is 71/6.",
          "Choose y=0 and then z=1, giving all clauses satisfied with total 15. The final result is at least every earlier potential.",
          "Variable independence computes within-clause failure products; linearity, not clause independence, adds contributions."
        ],
        "rubric": [
          "Compute all branch values and the unequal weighted averages correctly.",
          "Maintain one consistent objective and conditional distribution at every step.",
          "Distinguish within-clause variable independence from cross-clause dependence."
        ],
        "mistake": "Averaging the x branches equally computes a different probability distribution, even though choosing the larger branch remains valid.",
        "followup": "Change Pr(x=1) to q and derive the initial expectation as an affine function of q; identify any q where the preferred branch changes."
      },
      {
        "id": "sat-conditional-proxy",
        "title": "A computable lower bound is not automatically a valid potential",
        "minutes": 14,
        "skill": "Identify the supermartingale property required for a conditional-expectation proxy.",
        "connection": "The example recomputes true conditional expectations. A proposed speedup keeps only lower estimates for unfinished clauses.",
        "prompt": "A proposed derandomization uses a lower estimate L(h)≤E[X|h] at each partial assignment h, then always chooses the child with larger L. Construct numerical parent and child estimates, consistent with two possible final objective values, showing that the sole lower-bound property does not guarantee L(child)≥L(parent) or a final value at least L(empty). State and prove a sufficient one-step inequality for a valid pessimistic estimator for a maximization guarantee. Distinguish computability, terminal correctness, and the required averaging property.",
        "hints": [
          "Try final branch values 0 and 10; lower bounds need not be equally accurate on both branches.",
          "A useful estimator must satisfy L(h)≤qL(h1)+(1−q)L(h0), with terminal L bounded by the actual objective."
        ],
        "probe": {
          "kind": "choice",
          "prompt": "Which additional conditions suffice for the branch-maximization proof?",
          "options": [
            "Only L(h)≤E[X|h], because a lower bound must improve under further conditioning.",
            "Only polynomial-time computability and L(empty)>0, because the chosen branch has the larger estimate.",
            "L(h)≤qL(h1)+(1−q)L(h0), and L(a)≤X(a) at complete assignments.",
            "L(h)≥qL(h1)+(1−q)L(h0), and terminal estimates may exceed X(a)."
          ],
          "answer": 2,
          "feedback": [
            "Pointwise lower bounds can become arbitrarily looser on the good branch; no monotone relation follows.",
            "Efficiently computing an unsuitable score does not give an objective guarantee.",
            "Correct. At least one supported child has estimate at least its parent, and terminal domination transfers the preserved estimate into an actual objective bound.",
            "The reversed inequality allows both children to fall below the parent, and overestimating terminal values destroys the final transfer."
          ]
        },
        "solution": [
          "For a fair first bit let the final objectives be X(0)=0 and X(1)=10, so E[X]=5.",
          "Take L(empty)=4, L(0)=0 and L(1)=−1. All are lower bounds on their corresponding conditional expectations.",
          "The child maximizing L is 0, yielding objective zero, which is below the advertised initial lower bound four.",
          "A sufficient condition is L(h)≤qL(h1)+(1−q)L(h0) at every internal node. Then a supported child has L at least the parent.",
          "Induction preserves L(empty). If every complete assignment obeys L(a)≤X(a), the final objective is at least L(empty). Polynomial-time evaluability is a separate algorithmic requirement."
        ],
        "rubric": [
          "Give an explicit valid lower-bound counterexample with a failing selected branch.",
          "State the averaging inequality in the correct direction and prove branch existence.",
          "Include terminal correctness and efficient evaluability as distinct obligations."
        ],
        "mistake": "The phrase “lower bound” compares two functions at the same history; it says nothing about how the lower-bound function changes between histories.",
        "followup": "Require nonnegative estimates and construct a similar example where the algorithm loses a positive target, allowing a tie-breaking rule you specify."
      }
    ]
  },
  "core-sat-lp": {
    "proof": {
      "goal": "Use length-sensitive clause bounds to prove the better of fair and LP-marginal rounding is a 3/4 approximation.",
      "scope": "Williamson–Shmoys §§5.4–5.6. Normalize repeated literals and tautologies first; weights are nonnegative and variable rounding is independent. The LP solve and its bit-precision treatment are inputs.",
      "frames": [
        {
          "title": "Convert a clause into a product bound",
          "question": "What quantity is fixed when AM–GM maximizes the failure product?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "Pr(C fails)",
                "relation": "=",
                "right": "∏(1−qᵢ)",
                "reason": "independent distinct variables"
              },
              {
                "left": "∏(1−qᵢ)",
                "relation": "≤",
                "right": "(1−z/k)^k",
                "reason": "∑qᵢ≥z and AM–GM"
              }
            ],
            "focus": 1,
            "note": "The LP satisfaction value z is bounded by the sum of its literal marginals."
          },
          "claim": "Pr(C satisfied)≥1−(1−z/k)^k.",
          "explanation": "The individual truth marginals may differ. The product is largest when failure probabilities are equal at the smallest allowed total truth mass, giving a bound in terms of z alone.",
          "carry": "A nonlinear clause-success lower bound can now be compared with the LP."
        },
        {
          "title": "Linearize using the chord, not the tangent",
          "question": "Which direction of concavity gives a lower bound on z∈[0,1]?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "g(z)=1−(1−z/k)^k",
                "relation": "≥",
                "right": "z·g(1)",
                "reason": "concavity and g(0)=0"
              },
              {
                "left": "Pr(C satisfied)",
                "relation": "≥",
                "right": "[1−(1−1/k)^k]z",
                "reason": "linear LP comparison"
              }
            ],
            "focus": 0,
            "note": "A tangent is an upper bound for a concave function; the chord is the useful lower bound."
          },
          "claim": "LP rounding contributes at least bₖz with bₖ=1−(1−1/k)^k.",
          "explanation": "The LP objective is a weighted sum of z-values, so one needs coefficients multiplying z rather than a nonlinear expression that cannot simply be pulled outside the sum.",
          "carry": "Each clause gets a length-dependent linear benchmark."
        },
        {
          "title": "Compare two algorithms before forgetting clause length",
          "question": "Why is averaging their separate global worst factors too pessimistic?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Length",
              "Fair coefficient",
              "LP coefficient",
              "Average"
            ],
            "rows": [
              [
                "1",
                "1/2",
                "1",
                "3/4"
              ],
              [
                "2",
                "3/4",
                "3/4",
                "3/4"
              ],
              [
                "3",
                "7/8",
                "19/27",
                "341/432"
              ],
              [
                "k≥3",
                "≥7/8",
                "≥1−1/e",
                ">3/4"
              ]
            ],
            "focus": [
              0,
              1,
              3
            ],
            "note": "Short clauses are LP-friendly; long clauses are fair-rounding-friendly."
          },
          "claim": "(aₖ+bₖ)/2≥3/4 for every clause length k.",
          "explanation": "For k≥3 use aₖ≥7/8 and bₖ≥1−1/e; their sum is greater than 3/2. The two small lengths attain equality and must be checked explicitly.",
          "carry": "A single 3/4 coefficient survives summing all weighted LP contributions."
        },
        {
          "title": "Keep the better realized assignment",
          "question": "Do the two generated assignments need to be independent of each other?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "max{Xfair,XLP}",
                "relation": "≥",
                "right": "(Xfair+XLP)/2",
                "reason": "pointwise for every pair"
              },
              {
                "left": "E[max{Xfair,XLP}]",
                "relation": "≥",
                "right": "(3/4)∑wCzC",
                "reason": "linearity across clauses"
              },
              {
                "left": "∑wCzC",
                "relation": "≥",
                "right": "OPT",
                "reason": "LP relaxation"
              }
            ],
            "focus": 1,
            "note": "Only independence inside each assignment’s variable rounding was used in the local analysis."
          },
          "claim": "E[best assignment]≥(3/4)OPT.",
          "explanation": "The maximum inequality holds even for coupled outputs. Independence between clause events or between the two algorithms is unnecessary; confusing these assumptions makes both proof and implementation harder than needed.",
          "carry": "Local compensation, then summation, produces the stronger global ratio."
        }
      ]
    },
    "challenges": [
      {
        "id": "sat-lp-mixing-optimization",
        "title": "Can changing the mixing probability beat 3/4?",
        "minutes": 18,
        "skill": "Solve the minimax tradeoff between clause lengths before averaging guarantees.",
        "connection": "The example averages two assignments equally. Here choose the probability of using LP rounding and test whether a universal improvement follows.",
        "prompt": "Choose LP-marginal rounding with probability λ and fair rounding with probability 1−λ. Derive the guaranteed coefficient for lengths one and two, then for all lengths at least three. Determine all λ for which this elementary analysis certifies 3/4, and prove that no λ gives a strictly greater universal coefficient using these clausewise bounds. Do not confuse a limitation of the analysis with an impossibility theorem for every MAX-SAT algorithm.",
        "hints": [
          "For length two both methods have coefficient exactly 3/4.",
          "Length one forces λ≥1/2; taking k→∞ forces λ≤e/4. To show this upper endpoint works, control (1−1/k)^k below e^−1 by a finite-k margin."
        ],
        "probe": {
          "kind": "choice",
          "prompt": "What blocks a strictly better universal coefficient from this mixture analysis?",
          "options": [
            "The length-two coefficient remains 3/4 for every λ, even when the unit-clause coefficient improves.",
            "The unit-clause coefficient is 1/2 for every λ because unit clauses cannot be rounded.",
            "The long-clause coefficient always falls below 3/4 whenever λ is positive.",
            "The two algorithms must be independent of one another for any mixture coefficient to be valid."
          ],
          "answer": 0,
          "feedback": [
            "Correct. A clause of length two gives (1−λ)(3/4)+λ(3/4)=3/4, so the minimum over lengths cannot exceed it.",
            "LP rounding has coefficient one on a unit clause, so its mixture coefficient is (1+λ)/2.",
            "For λ=1/2 the established bound exceeds 3/4 for every length at least three.",
            "A random mixture selects one algorithm; the clause coefficients combine by total expectation, without an independence condition between hypothetical outputs."
          ]
        },
        "solution": [
          "The unit coefficient is c₁(λ)=(1+λ)/2, so λ≥1/2 is necessary to certify 3/4. The length-two coefficient is c₂(λ)=3/4 for every λ, excluding any strict universal improvement from these bounds.",
          "For general k, cₖ(λ)=1−(1−λ)2^−k−λ(1−1/k)^k. Taking k to infinity gives 1−λ/e, so λ≤e/4 is also necessary.",
          "The preceding proof establishes that λ=1/2 works. It remains to prove λ=e/4 works for every k≥3; linearity in λ will then cover the whole interval.",
          "At λ=e/4, the desired inequality is e(1−1/k)^k+(4−e)2^−k≤1. For k≥2, expand 1+k log(1−1/k)=−Σj≥1 1/[(j+1)k^j] and log(1−1/(2k))=−Σj≥1 1/[j·2^j·k^j]. Since j·2^j≥j+1, the first logarithm is at most the second. Hence e(1−1/k)^k≤1−1/(2k).",
          "For k≥3, use e>8/3 and 2^k≥8k/3 to obtain (4−e)2^−k≤1/(2k). Adding this to the previous estimate proves the endpoint inequality. At k=2 the endpoint expression equals e/4+(4−e)/4=1 exactly; the unit-clause condition was already checked.",
          "Therefore exactly λ∈[1/2,e/4] are certified by these length-sensitive bounds. No mixture has a guaranteed coefficient strictly above 3/4 because of length two.",
          "This is a limitation of these rounding guarantees, not a hardness theorem for every MAX-SAT algorithm or stronger relaxation."
        ],
        "rubric": [
          "Derive both small-length coefficients and the length-two obstruction.",
          "Give the quantified all-k condition or an explicitly labeled sufficient interval.",
          "Distinguish this proof’s ceiling from algorithmic hardness."
        ],
        "mistake": "Optimizing the unit-clause bound alone pushes λ toward one and can destroy the compensation on long clauses.",
        "followup": "Numerically investigate the all-k upper endpoints for k=3,…,10, then justify which additional argument would be needed to replace that investigation by a theorem."
      },
      {
        "id": "sat-lp-dependent-rounding",
        "title": "Same marginals, opposite clause behavior",
        "minutes": 14,
        "skill": "Locate precisely where independence enters the product-of-failures proof.",
        "connection": "The example lists coefficients based on independent variable rounding. Marginals alone preserve the LP but not those success probabilities.",
        "prompt": "Take the positive clause C=x∨y with LP marginals yx=yy=1/2 and zC=1. Compare two joint roundings: (x,y) is 00 or 11 with equal probability, and (x,y) is 01 or 10 with equal probability. Compute both clause-success probabilities. Explain why each respects the same marginals but only one beats the independent guarantee. Then give a joint-condition weaker than full independence that is sufficient to preserve the AM–GM proof for every clause, including clauses with negated literals.",
        "hints": [
          "Clause failure is the joint event that all its literals are false.",
          "A sufficient property must control failure events for the actual signed literals, not only positive variables."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the difference between the two clause-success probabilities?",
          "expected": 0.5,
          "feedback": "The positively coupled law succeeds only on 11, with probability 1/2. The exclusive law succeeds surely, so the difference is 1−1/2=1/2. Independent rounding would give 3/4, between the two."
        },
        "solution": [
          "Both distributions give each variable true probability one half and therefore respect the same LP marginal vector.",
          "Under {00,11}, the clause fails with probability one half and succeeds with probability one half.",
          "Under {01,10}, it never fails and succeeds with probability one. Thus marginals alone cannot justify a success lower bound of 3/4.",
          "It suffices that every normalized clause obey Pr(all its literals false)≤∏ᵢPr(its literal i false). The rest of AM–GM and chord analysis is unchanged.",
          "A condition controlling only positive-coordinate events is not enough for arbitrary signed clauses; complements can reverse the relevant dependence. State the required property for all literal patterns used by the instance."
        ],
        "rubric": [
          "Calculate both joint success probabilities and verify identical marginals.",
          "Identify the failed product equality in the original proof.",
          "State a sufficient signed failure-event inequality with the correct direction."
        ],
        "mistake": "Negative dependence is not a magic label: the theorem needs the inequality for each clause’s specific mixture of positive and negative literals.",
        "followup": "Construct a third two-bit law with the same marginals whose success probability is exactly 3/4, and relate its covariance to the independent case."
      }
    ]
  },
  "core-pcst": {
    "proof": {
      "goal": "Use one common random threshold to balance expected tree cost against expected exclusion penalties.",
      "scope": "Williamson–Shmoys §5.7. The factor-two tree-rounding theorem for the scaled terminal-cut relaxation is an explicit input; the walk proves the threshold integration and comparison with the LP.",
      "frames": [
        {
          "title": "Use the same threshold for every terminal",
          "question": "What makes one scaling x/α feasible for every retained terminal cut?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Threshold α",
              "Retained vertices",
              "Required cut mass"
            ],
            "rows": [
              [
                "fixed α",
                "all yᵢ≥α",
                "x(δS)≥α"
              ],
              [
                "scaled edges",
                "x/α",
                "every retained cut ≥1"
              ]
            ],
            "focus": [
              0,
              1
            ],
            "note": "The common cutoff links terminal selection to one feasible fractional edge solution."
          },
          "claim": "For retained terminals, tree cost is at most 2E/α.",
          "explanation": "Every relevant cut contains a retained terminal i with yᵢ≥α, so the LP cut constraint guarantees enough edge mass after division by α. The source tree-rounding theorem supplies the factor two.",
          "carry": "The only random variable in this edge-cost bound is α."
        },
        {
          "title": "Integrate the cost with its actual density",
          "question": "Why is the edge coefficient not just its value at the mean threshold?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "E[tree cost]",
                "relation": "≤",
                "right": "2E·E[1/α]",
                "reason": "conditional tree bound"
              },
              {
                "left": "E[1/α]",
                "relation": "=",
                "right": "ln(1/γ)/(1−γ)",
                "reason": "α uniform on [γ,1]"
              }
            ],
            "focus": 1,
            "note": "A reciprocal must be averaged as a reciprocal; replacing α by E[α] reverses the useful bound."
          },
          "claim": "E[tree cost]≤[2ln(1/γ)/(1−γ)]E.",
          "explanation": "Uniform density is 1/(1−γ). The integral of 1/α from γ to one is ln(1/γ); the positive lower cutoff keeps this finite.",
          "carry": "The edge multiplier is explicit and distribution-dependent."
        },
        {
          "title": "Charge every excluded vertex to its LP penalty",
          "question": "How is the probability bound interpreted when yᵢ lies below γ?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Connection yᵢ",
              "Exclusion probability",
              "LP charge ratio"
            ],
            "rows": [
              [
                "yᵢ≥γ",
                "(1−yᵢ)/(1−γ)",
                "1/(1−γ)"
              ],
              [
                "yᵢ<γ",
                "1",
                "≤1/(1−γ)"
              ]
            ],
            "focus": [
              0,
              1
            ],
            "note": "The ratio formula is an upper bound below γ, not a probability exceeding one."
          },
          "claim": "E[penalties]≤P/(1−γ), where P=∑πᵢ(1−yᵢ).",
          "explanation": "Exclusion is the upper interval α>yᵢ. For yᵢ<γ this event is certain, while (1−yᵢ)/(1−γ)>1 still gives a valid charge bound. Add penalties by linearity; their exclusion events are not independent.",
          "carry": "Both random costs are now compared with the same fixed LP solution."
        },
        {
          "title": "Equalize the two worst coefficients",
          "question": "Which equation makes one factor multiply E+P?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "2ln(1/γ)",
                "relation": "=",
                "right": "1",
                "reason": "balance the two multipliers"
              },
              {
                "left": "γ",
                "relation": "=",
                "right": "e^(−1/2)",
                "reason": "solve the balance equation"
              },
              {
                "left": "E[total]",
                "relation": "≤",
                "right": "(E+P)/(1−e^(−1/2))",
                "reason": "common coefficient"
              }
            ],
            "focus": 2,
            "note": "The LP objective E+P is a lower bound on the original optimum."
          },
          "claim": "The expected factor is (1−e^(−1/2))^−1.",
          "explanation": "Choosing γ after identifying both coefficients avoids optimizing edge cost alone at the expense of penalties. The balancing argument minimizes the larger of these two uniform coefficients. Increasing γ removes low thresholds, so the reciprocal edge coefficient decreases while the penalty coefficient increases; their crossing minimizes the larger coefficient.",
          "carry": "A single randomized construction is certified by one combined LP lower bound."
        }
      ]
    },
    "challenges": [
      {
        "id": "pcst-nonuniform-threshold",
        "title": "Re-derive the theorem for a different threshold density",
        "minutes": 16,
        "skill": "Analyze a changed rounding distribution rather than importing its old coefficients.",
        "connection": "The example computes exclusion intervals under a uniform threshold. Now the density gives more weight to large thresholds.",
        "prompt": "Sample α from [γ,1] with density f(α)=2α/(1−γ²). Retain yᵢ≥α and keep the conditional tree bound 2E/α. Derive the edge multiplier A(γ), the smallest uniform multiplier B(γ) charging every expected penalty to πᵢ(1−yᵢ), including yᵢ<γ, and the γ minimizing max{A,B}. Compare this guarantee with the uniform-threshold factor without claiming either analysis is tight for every graph.",
        "hints": [
          "Integrate (2/α)f(α), and integrate f only above y for the exclusion event.",
          "For y≥γ, divide (1−y²)/(1−γ²) by 1−y and take the supremum over y approaching one."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the optimized common multiplier for this density?",
          "expected": 2.6666666666666665,
          "feedback": "A=4/(1+γ) and B=2/(1−γ²). They meet at γ=1/2, giving 8/3. A decreases and B increases, so the maximum is minimized at the crossing; this is weaker than the uniform-density factor about 2.541."
        },
        "solution": [
          "The density integrates to one because ∫γ¹2α dα=1−γ².",
          "The edge coefficient is ∫γ¹(2/α)·2α/(1−γ²)dα=4/(1+γ).",
          "For y≥γ, exclusion probability is (1−y²)/(1−γ²), whose ratio to 1−y is (1+y)/(1−γ²), with supremum 2/(1−γ²).",
          "For y<γ, the ratio is 1/(1−y)≤1/(1−γ)≤2/(1−γ²), so the same multiplier works.",
          "A is decreasing and B increasing. Equality reduces to 4(1−γ)=2, so γ=1/2 and the factor is 8/3.",
          "These are uniform coefficient guarantees. Instance-specific edge/penalty proportions could support a different tuning."
        ],
        "rubric": [
          "Normalize the density and integrate its reciprocal edge charge.",
          "Handle both y-regimes and justify the supremum penalty coefficient.",
          "Prove the minimax parameter choice and compare the resulting guarantees."
        ],
        "mistake": "Using the old uniform exclusion length divides the wrong measure; a probability is an integral of the new density.",
        "followup": "For fixed known ratio E/P, minimize A(γ)E+B(γ)P instead of their maximum, and explain why the resulting bound is instance-dependent."
      },
      {
        "id": "pcst-common-threshold-dependence",
        "title": "Nested exclusions: expectation survives, variance changes",
        "minutes": 14,
        "skill": "Distinguish linearity of expectation from an unjustified independence claim.",
        "connection": "The example sums expected penalties. A single threshold makes terminal exclusions nested rather than independent.",
        "prompt": "Let α be uniform on [1/2,1]. Two terminals have connection values 0.6 and 0.9, with penalties ten each. Derive the complete distribution of the total excluded penalty Z, compute E[Z] and Var(Z), and compare the variance with a fictitious independent-exclusion model having the same marginals. Explain why the original expected-cost proof remains correct and why concentration claims need additional work.",
        "hints": [
          "Split [1/2,1] at 0.6 and 0.9.",
          "The larger-connection terminal can be excluded only when the smaller-connection terminal is also excluded."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is Var(Z) under the common threshold?",
          "expected": 40,
          "feedback": "Z is 0, 10 or 20 with probabilities 1/5, 3/5 and 1/5. Its mean is ten and second moment is 140, giving variance 40. Independent marginals would instead give 16+16=32."
        },
        "solution": [
          "Exclusion probabilities are (1−0.6)/0.5=0.8 and (1−0.9)/0.5=0.2.",
          "The interval probabilities give Z=0 with probability 0.2, Z=10 with probability 0.6, and Z=20 with probability 0.2.",
          "Thus E[Z]=10 and E[Z²]=60+80=140, so Var(Z)=40.",
          "The indicators have covariance 0.2−0.8·0.2=0.04. Their individual variances are 0.16 each, and multiplying by penalty squared gives 100(0.32+0.08)=40.",
          "Expectation still adds to 10 without independence. Only an attempted variance or exponential-tail factorization would require extra dependence control."
        ],
        "rubric": [
          "Derive the joint distribution from threshold intervals.",
          "Compute the covariance and both variances correctly.",
          "Identify exactly which proof step remains valid without independence."
        ],
        "mistake": "Independent vertex penalties would describe a different randomized construction, even if their marginal probabilities happened to match.",
        "followup": "For y₁≤y₂ derive Cov(1{α>y₁},1{α>y₂}) symbolically and identify when it vanishes."
      }
    ]
  },
  "core-facility": {
    "proof": {
      "goal": "Prove feasible metric facility rounding and its expected opening-plus-connection bound from LP and dual certificates.",
      "scope": "Williamson–Shmoys §5.8. Optimal primal/dual LP solutions and the support-distance complementary-slackness lemma are inputs. This is uncapacitated metric facility location.",
      "frames": [
        {
          "title": "Open once per disjoint representative neighborhood",
          "question": "Why does one probability distribution serve an entire cluster feasibly?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Chosen neighborhood",
              "Opening rule",
              "Guarantee"
            ],
            "rows": [
              [
                "N(j)",
                "choose i with chance xᵢⱼ",
                "one facility opens"
              ],
              [
                "all representatives",
                "N(j) disjoint",
                "no repeated opening charge"
              ],
              [
                "cluster clients",
                "assign to chosen i",
                "all have service"
              ]
            ],
            "focus": [
              0,
              1
            ],
            "note": "Within each representative neighborhood, ∑ᵢxᵢⱼ=1."
          },
          "claim": "Expected opening cost is at most F*=∑ᵢfᵢyᵢ*.",
          "explanation": "Use xᵢⱼ*≤yᵢ* inside each neighborhood. Disjointness allows the neighborhood sums of fᵢyᵢ* to add to at most the full LP opening cost.",
          "carry": "Feasibility and the opening budget do not depend on an expected number of open facilities."
        },
        {
          "title": "Route a nonrepresentative through a shared support neighbor",
          "question": "Which metric path relates a cluster client ℓ to the facility opened for j?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "c(i,ℓ)",
                "relation": "≤",
                "right": "c(ℓ,h)+c(h,j)+c(j,i)",
                "reason": "triangle inequality"
              },
              {
                "left": "E[c(i,ℓ)]",
                "relation": "≤",
                "right": "vℓ*+vj*+Cj*",
                "reason": "support lemma and averaging"
              }
            ],
            "focus": 1,
            "note": "The intermediate facility h belongs to the LP support shared by clients ℓ and j."
          },
          "claim": "A metric detour gives a connection bound in terms of dual prices and representative average distance.",
          "explanation": "For positive LP assignment support, the dual price bounds each relevant client-support distance. The random final leg averages to Cj*. Nonmetric prices would not support the first inequality.",
          "carry": "The remaining task is to control the chosen representative’s v*+C*."
        },
        {
          "title": "Use the actual representative priority",
          "question": "Why is minimizing connection average alone insufficient?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "vj*+Cj*",
                "relation": "≤",
                "right": "vℓ*+Cℓ*",
                "reason": "representative chosen by v*+C*"
              },
              {
                "left": "E[c(i,ℓ)]",
                "relation": "≤",
                "right": "2vℓ*+Cℓ*",
                "reason": "substitute into detour bound"
              }
            ],
            "focus": 0,
            "note": "The priority score contains both the dual price and connection average."
          },
          "claim": "Each cluster client costs at most 2vℓ*+Cℓ* in expectation.",
          "explanation": "Client ℓ was still unassigned when j was selected, so it was a candidate in that same minimum-score comparison. This logical timing is what licenses the substitution.",
          "carry": "The detour cost is now charged to the client’s own LP/dual quantities."
        },
        {
          "title": "Close with primal and dual objectives together",
          "question": "What prevents separately charged opening and dual prices from being counted as unrelated lower bounds?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Budget",
              "Value",
              "Certificate"
            ],
            "rows": [
              [
                "Opening plus C*",
                "F*+C*",
                "optimal primal LP"
              ],
              [
                "Dual client prices",
                "∑vⱼ*",
                "same optimal LP value"
              ],
              [
                "Rounded total bound",
                "F*+C*+2∑vⱼ*",
                "3 times LP"
              ]
            ],
            "focus": [
              2
            ],
            "note": "Primal–dual equality relates the two budgets; both compare with the same OPT."
          },
          "claim": "E[total]≤F*+C*+2∑vⱼ*=3LP≤3OPT.",
          "explanation": "The equality of optimal LP primal and dual objectives is essential to the numerical factor. Feasible arbitrary LP/dual values would require retaining their actual values in the bound.",
          "carry": "One feasible rounded solution is certified by a combined expectation bound."
        }
      ]
    },
    "challenges": [
      {
        "id": "facility-representative-saving",
        "title": "Recover the dual charge you need not spend",
        "minutes": 14,
        "skill": "Sharpen an aggregate approximation proof using the distinction between representatives and their clients.",
        "connection": "The example’s sole client is itself a representative, so its expected connection is C*, not the coarser 2v*+C* bound.",
        "prompt": "Assume an optimal LP and dual have three clients with (v*,C*) equal to (3,1), (4,2), and (5,3). Their total opening contribution is F*=6. The clustering chooses client 1 as the sole representative and assigns the other two clients to its cluster. Derive the refined expected total-cost bound by charging representative connections exactly, and express the general improvement over 3LP in terms of the sum of representative dual prices. Explain why this does not establish a universal 2.5 approximation.",
        "hints": [
          "The representative’s opened facility is sampled from its own x-distribution.",
          "Replace 2vⱼ*+Cⱼ* by Cⱼ* only for representatives."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What refined expected total-cost upper bound follows from these data?",
          "expected": 30,
          "feedback": "Connections cost at most C₁+(2v₂+C₂)+(2v₃+C₃)=1+10+13=24; add F*=6 for a total of 30. The generic bound is 3LP=36, and the saving is 2v₁=6."
        },
        "solution": [
          "The primal LP is F*+∑C*=6+6=12, matching the dual sum 3+4+5=12.",
          "The representative pays expected connection exactly C₁*=1 by its sampling distribution.",
          "Other clients pay at most 2v₂*+C₂*=10 and 2v₃*+C₃*=13, so the expected total is at most 6+1+10+13=30.",
          "For a representative set R, the same argument gives 3LP−2∑ⱼ∈R vⱼ*.",
          "A universal factor 2.5 would require ∑R vⱼ*≥LP/4 for every instance, which this calculation neither states nor proves. Representative selection is not known here to capture that fixed fraction."
        ],
        "rubric": [
          "Use exact representative connection expectations and coarse bounds only for other clients.",
          "Check primal–dual equality for the supplied numbers.",
          "Derive the general saving and identify the missing condition for a better universal ratio."
        ],
        "mistake": "An improved bound on one clustering is not a uniform theorem unless the saving is itself bounded below in every instance.",
        "followup": "Express the guarantee as 3−2β when representative dual mass is known to be at least βLP, and state how such a mass lemma would need to be proved."
      },
      {
        "id": "facility-wrong-priority",
        "title": "The missing term in a clustering priority",
        "minutes": 14,
        "skill": "Diagnose the exact failed inference without overclaiming an algorithmic counterexample.",
        "connection": "The worked example needs no detour. Multi-client clustering uses a minimum v*+C* score to close that detour bound.",
        "prompt": "For a cluster client ℓ let vℓ*=7 and Cℓ*=2. A proposed rule chooses representative j by the smallest C* only, with vj*=10 and Cj*=1. The local metric path ℓ–h–j–i has lengths 7,10,1, and i is the chosen service facility. Check both support-distance inequalities and the resulting detour bound. Does the comparison needed to conclude 2vℓ*+Cℓ* hold? Decide whether these local data alone disprove the whole algorithm’s factor-three guarantee, and specify what additional construction a genuine global counterexample would require.",
        "hints": [
          "Compare the scores vj*+Cj* and vℓ*+Cℓ*, not Cj* and Cℓ* alone.",
          "A broken proof inequality and a fully valid bad instance are different levels of evidence."
        ],
        "probe": {
          "kind": "choice",
          "prompt": "Which conclusion is justified by the stated local data?",
          "options": [
            "The detour is bounded by 16 because Cj*≤Cℓ* implies vj*+Cj*≤vℓ*+Cℓ*.",
            "The detour bound is 18 rather than 16, exposing a missing priority inequality; a global factor-three counterexample still needs compatible optimal LP/dual and clustering data.",
            "The metric assumption is violated because a path can have length 18 while Cℓ*=2.",
            "The data prove the original v*+C* rule also fails, since it must choose j."
          ],
          "answer": 1,
          "feedback": [
            "The missing dual-price term is ten versus seven; C-ordering alone does not compare the sums.",
            "Correct. The local substitution fails because 11>9, but these few quantities are not a complete feasible optimal primal–dual instance.",
            "Cℓ* is an average over its own fractional assignments, not a universal upper bound on every metric path or every facility distance.",
            "The original score rule would prefer ℓ’s score nine to j’s score eleven while both remain eligible."
          ]
        },
        "solution": [
          "The support bounds c(ℓ,h)≤vℓ*=7 and c(j,h)≤vj*=10 hold at equality.",
          "The metric detour gives c(ℓ,i)≤7+10+1=18, whereas 2vℓ*+Cℓ*=16.",
          "The intended substitution would require vj*+Cj*=11≤vℓ*+Cℓ*=9, which fails despite Cj*<Cℓ*.",
          "This refutes the asserted per-client proof step under the modified rule. It does not by itself establish an approximation ratio violation on a full input.",
          "A genuine global counterexample must supply a complete metric, feasible optimal primal and dual solutions with the advertised support, the full clustering sequence, and total rounded cost compared with actual OPT."
        ],
        "rubric": [
          "Check both local support bounds and compute the two competing detour charges.",
          "Identify the precise representative-order inequality that fails.",
          "Distinguish a failed local certificate from a fully verified global bad instance."
        ],
        "mistake": "Declaring every failed sufficient bound an algorithmic counterexample skips feasibility, LP optimality, and the global objective comparison.",
        "followup": "Investigate whether the local numbers can be embedded into a line metric with an optimal LP having the stated support; list the extra dual constraints that must be checked."
      }
    ]
  },
  "core-release": {
    "proof": {
      "goal": "Show randomized midpoint ordering gives expected weighted completion at most twice the relaxed optimum.",
      "scope": "Williamson–Shmoys §5.9. The lower-bounding time-indexed relaxation and its compressed polynomial implementation are source inputs. The displayed conditional calculation uses independent per-job midpoint samples.",
      "frames": [
        {
          "title": "Normalize processing into a sampled point",
          "question": "Why is a long job not given total sampling probability larger than one?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Job j",
              "Processing mass",
              "Midpoint law"
            ],
            "rows": [
              [
                "total relaxed work",
                "∑t yⱼt=pⱼ",
                "probability denominator pⱼ"
              ],
              [
                "midpoint t−1/2",
                "mass yⱼt",
                "Pr(Xⱼ=t−1/2)=yⱼt/pⱼ"
              ],
              [
                "relaxed completion",
                "average plus pⱼ/2",
                "Cⱼ*=E[Xⱼ]+pⱼ/2"
              ]
            ],
            "focus": [
              1,
              2
            ],
            "note": "Sampling chooses one processing location per job, rather than selecting each occupied interval independently."
          },
          "claim": "Xⱼ is a genuine probability distribution and Cⱼ*=E[Xⱼ]+pⱼ/2.",
          "explanation": "The relaxation allocates exactly pⱼ processing units to job j. Dividing those units by pⱼ makes its occupied midpoints equally weighted by their processing fractions.",
          "carry": "Every job supplies exactly one ordering key."
        },
        {
          "title": "Turn the sampled order into a feasible schedule",
          "question": "How are release dates respected when a selected job is not yet available?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "start(j)",
                "relation": "=",
                "right": "max{Cprevious,rⱼ}",
                "reason": "earliest feasible execution"
              },
              {
                "left": "Ĉⱼ",
                "relation": "≤",
                "right": "Rbefore+∑before pₖ+pⱼ",
                "reason": "idle time bounded by releases"
              }
            ],
            "focus": 1,
            "note": "The order is a priority list; the machine may wait for the next job."
          },
          "claim": "The nonpreemptive output respects all release dates in every outcome.",
          "explanation": "For all jobs before j whose selected midpoint is at most x, release times are at most x−1/2. Inducting along the list bounds completion by their total processing plus their latest release, not by processing alone.",
          "carry": "Conditioning on Xⱼ=x isolates a prefix whose release contribution is controlled."
        },
        {
          "title": "Cancel the job-length normalization",
          "question": "Why does the expected preceding processing become a machine-capacity prefix sum?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "E[∑before pₖ | Xⱼ=x]",
                "relation": "≤",
                "right": "∑ₖpₖPr(Xₖ≤x)",
                "reason": "independent job samples"
              },
              {
                "left": "∑ₖpₖPr(Xₖ≤x)",
                "relation": "=",
                "right": "∑ₖ∑t≤x+1/2 yₖt",
                "reason": "pₖ cancels"
              },
              {
                "left": "∑ₖ∑t≤x+1/2 yₖt",
                "relation": "≤",
                "right": "x+1/2",
                "reason": "one-machine prefix capacity"
              }
            ],
            "focus": 2,
            "note": "Ties can be overcounted safely; no independence of completion times is needed."
          },
          "claim": "Conditioned on Xⱼ=x, expected preceding work is at most x+1/2.",
          "explanation": "Each job’s sampling probability divides by its own processing time, which exactly cancels its contribution pₖ to the preceding-load sum. Prefix capacity then bounds all jobs together.",
          "carry": "The release and work terms sum to at most 2x."
        },
        {
          "title": "Average the conditional statement",
          "question": "Which normalization turns pⱼ+2E[Xⱼ] into the promised factor?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "E[Ĉⱼ | Xⱼ=x]",
                "relation": "≤",
                "right": "pⱼ+2x",
                "reason": "combine release and work"
              },
              {
                "left": "E[Ĉⱼ]",
                "relation": "≤",
                "right": "2Cⱼ*",
                "reason": "Cⱼ*=E[Xⱼ]+pⱼ/2"
              },
              {
                "left": "E[∑wⱼĈⱼ]",
                "relation": "≤",
                "right": "2OPT",
                "reason": "wⱼ≥0 and LP lower bound"
              }
            ],
            "focus": 1,
            "note": "The final step needs an optimal relaxation value, not an arbitrary feasible relaxed schedule."
          },
          "claim": "Expected weighted completion is at most twice the integral optimum.",
          "explanation": "Multiply by nonnegative weights and add by linearity. The argument does not factor any joint distribution of completion times; the sole independence used earlier concerned sampled ordering keys.",
          "carry": "A conditional per-job bound becomes a global expected approximation."
        }
      ]
    },
    "challenges": [
      {
        "id": "release-three-job-order",
        "title": "Trace sampling, idle time, and the relaxation separately",
        "minutes": 16,
        "skill": "Compute a rounded schedule distribution and distinguish it from the relaxed lower bound.",
        "connection": "The two-job example has two possible orders. A third released high-density job adds a second forced interruption before the long job resumes.",
        "prompt": "Jobs A,B,C have (p,r,w) equal to (2,0,1),(1,1,4),(1,2,3). The relaxed schedule runs A on [0,1), B on [1,2), C on [2,3), and A on [3,4). Derive each sampled midpoint law and relaxed completion value. Enumerate the rounded schedules, including necessary idle time, and compute their expected weighted completion. Verify the integral optimum by comparing possible first jobs; then compare the actual result with the theorem’s factor-two upper bound.",
        "hints": [
          "Only A has a random midpoint, at 0.5 or 3.5.",
          "When B is first, the machine must wait until time one."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the expected rounded weighted-completion objective?",
          "expected": 24,
          "feedback": "With A first, completions are 2,3,4 and cost 2+12+12=26. Otherwise the order is B,C,A, completions are 2,3,5 and cost 8+9+5=22. The two cases are equally likely, so the expectation is 24."
        },
        "solution": [
          "A samples 0.5 or 3.5 with probability one half each; B samples 1.5 and C samples 2.5 surely.",
          "Relaxed values are C_A*=2+1=3, C_B*=1.5+0.5=2, C_C*=2.5+0.5=3, giving objective 3+8+9=20.",
          "The early A sample yields A,B,C with cost 26. The late A sample yields B,C,A, waiting until time one, with cost 22.",
          "Thus expected output cost is 24. For this three-job instance, evaluating earliest-start schedules for all six orders gives 26,27,27,22,31,38, so OPT=22.",
          "The theorem gives E[cost]≤2·20=40. The valid bound is much looser than both the exact expectation 24 and integral optimum 22."
        ],
        "rubric": [
          "Normalize A’s processing samples and calculate all C* values.",
          "Include release-date idle time in each nonpreemptive outcome.",
          "Verify OPT independently and separate actual expectation from the theorem’s upper bound."
        ],
        "mistake": "Using the relaxed objective 20 as though it were an achievable nonpreemptive schedule confuses the benchmark with the output.",
        "followup": "Increase w_C while preserving the displayed relaxed order and derive how the two rounded costs and their expectation change; state when that relaxed order remains justified."
      },
      {
        "id": "release-common-quantile",
        "title": "Does the same proof survive a shared quantile?",
        "minutes": 16,
        "skill": "Find a failed conditional-independence identity without falsely refuting another valid algorithm.",
        "connection": "The example’s midpoint samples are independent across jobs. The source also discusses shared α-points, but that variant needs its own justification.",
        "prompt": "Two length-two jobs have relaxed processing intervals B:[0,1) and [2,3), A:[1,2) and [3,4). Let r_B=0 and r_A=1. Choose one common U uniformly in (0,1), using the first occupied midpoint of each job when U≤1/2 and the second otherwise. Calculate Pr(X_B≤1.5 | X_A=1.5), compare it with the marginal probability, and compute the conditional preceding-work term for A. Identify the exact equality from the independent-sampling proof that no longer applies. Explain why this observation alone does not prove shared-α scheduling violates the factor-two theorem.",
        "hints": [
          "Conditioning on the early midpoint of A reveals which half of the shared U interval occurred.",
          "The independent proof substitutes a marginal law for another job after conditioning on X_A."
        ],
        "probe": {
          "kind": "choice",
          "prompt": "What is the correct interpretation of the conditional calculation?",
          "options": [
            "The conditional preceding work is one, because B’s marginal chance of preceding A is one half.",
            "The conditional preceding work is zero, because both jobs choose their first midpoint together.",
            "The conditional preceding work is two rather than the marginal expression one; this breaks that independence substitution, not necessarily the algorithmic guarantee.",
            "The conditional preceding work is four, proving the factor-two approximation is impossible for shared quantiles."
          ],
          "answer": 2,
          "feedback": [
            "This incorrectly replaces the conditional law under a shared random U by B’s marginal law.",
            "B’s first midpoint is 0.5, before A’s first midpoint 1.5, so B does precede A.",
            "Correct. X_A=1.5 forces U≤1/2 and X_B=0.5, so B contributes its full processing two. A separate proof may still establish a guarantee for shared α.",
            "There is only one preceding job of length two; a failed proof substitution is not an impossibility theorem."
          ]
        },
        "solution": [
          "The early A event is exactly U≤1/2. Under it, B’s midpoint equals 0.5 surely, so the conditional probability is one.",
          "Marginally B’s midpoint is 0.5 or 2.5 with equal probabilities; Pr(X_B≤1.5)=1/2.",
          "Consequently E[p_B1{X_B≤X_A}|X_A=1.5]=2, while p_BPr(X_B≤1.5)=1.",
          "The independent proof’s step equating the conditional other-job law to its marginal law is unavailable.",
          "Both shared-quantile outcomes actually put B before A here. The feasible schedule runs B to time two and A to time four; nothing in this instance disproves the approximation theorem."
        ],
        "rubric": [
          "Compute conditional and marginal laws from the shared seed.",
          "Locate the failed equality and its independence hypothesis precisely.",
          "Separate a proof failure from a verified bad approximation instance."
        ],
        "mistake": "Correlated sampling can invalidate one analysis while another analysis still works; the inference “proof fails, therefore algorithm fails” is not valid.",
        "followup": "Recompute the same conditional event with independent U_A and U_B, and identify exactly where the value returns from two to one."
      }
    ]
  },
  "core-flow": {
    "proof": {
      "goal": "Round each commodity to a complete path and control all edge loads by a per-edge tail bound plus a union bound.",
      "scope": "Williamson–Shmoys §§5.10–5.11. Unit demands, independent choices across commodities, and a polynomial number of edges are assumed. Path decomposition and fractional optimization are source inputs.",
      "frames": [
        {
          "title": "Sample routes rather than individual edges",
          "question": "Why does every rounded commodity still satisfy flow conservation?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Commodity k",
              "Fractional decomposition",
              "Rounded object"
            ],
            "rows": [
              [
                "source to sink",
                "path weights sum to 1",
                "one complete path"
              ],
              [
                "edge e",
                "path mass pₖe",
                "indicator Bₖe∈{0,1}"
              ],
              [
                "load on e",
                "sum of contributions",
                "Lₑ=∑ₖBₖe"
              ]
            ],
            "focus": [
              0,
              2
            ],
            "note": "Dependence between edges on one path is intentional and preserves connectivity."
          },
          "claim": "Each rounded commodity is feasible in every outcome; E[Lₑ]=μₑ.",
          "explanation": "Independent rounding of edge variables could create broken routes. Sampling one path creates correlated edges within a commodity but independent commodity indicators for any fixed edge.",
          "carry": "The fixed-edge load is a sum of independent bounded indicators."
        },
        {
          "title": "Bound the exponential moment",
          "question": "Which independence permits multiplying the moment-generating factors?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "E[e^(λLₑ)]",
                "relation": "=",
                "right": "∏ₖE[e^(λBₖe)]",
                "reason": "independent commodities"
              },
              {
                "left": "∏ₖE[e^(λBₖe)]",
                "relation": "≤",
                "right": "exp(μₑ(e^λ−1))",
                "reason": "1+u≤e^u"
              },
              {
                "left": "Pr(Lₑ≥a)",
                "relation": "≤",
                "right": "exp(μₑ(e^λ−1)−λa)",
                "reason": "Markov, λ>0"
              }
            ],
            "focus": 2,
            "note": "The multiplication is over commodities, never over graph edges."
          },
          "claim": "For a≥μₑ, choosing λ=ln(a/μₑ) gives the optimized Chernoff bound.",
          "explanation": "The moment step is stronger than pairwise variance control. It is the source of the logarithmic-over-logarithmic congestion threshold at constant mean.",
          "carry": "One edge now has an explicit high-load failure probability."
        },
        {
          "title": "Choose a tail small enough for the whole graph",
          "question": "Why must a constant-probability edge bound be strengthened?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "Pr(Lₑ≥a)",
                "relation": "≤",
                "right": "(eμₑ/a)^a",
                "reason": "drop a helpful e^(−μₑ)"
              },
              {
                "left": "a",
                "relation": "=",
                "right": "C log n/log log n",
                "reason": "constant μₑ regime"
              },
              {
                "left": "log failure",
                "relation": "≤",
                "right": "−C log n+o(log n)",
                "reason": "a log a dominates"
              }
            ],
            "focus": 2,
            "note": "The constant C must absorb the polynomial number of tested edges."
          },
          "claim": "A sufficiently large C makes each edge failure inverse-polynomially small.",
          "explanation": "This asymptotic choice presumes bounded fractional mean. For large μₑ a multiplicative concentration regime is more natural; a one-size substitution should not silently discard that parameter.",
          "carry": "The local failure target is calibrated to the number of constraints."
        },
        {
          "title": "Sum failures without inventing edge independence",
          "question": "What does independence across graph edges contribute to the final step?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "Pr(∃ overloaded edge)",
                "relation": "≤",
                "right": "∑ₑPr(Lₑ≥a)",
                "reason": "union bound"
              },
              {
                "left": "∑ₑPr(Lₑ≥a)",
                "relation": "≤",
                "right": "|E|·pmax",
                "reason": "uniform local bound"
              }
            ],
            "focus": 0,
            "note": "No edge-load independence is used in this inequality."
          },
          "claim": "When |E|pmax<1, some complete path selection obeys all edge bounds.",
          "explanation": "A routing path can make many edges’ loads strongly dependent. The union bound remains valid, and a sufficiently small product supplies positive success probability and a repeatable randomized construction.",
          "carry": "Feasible routing and congestion control have distinct proof obligations."
        }
      ]
    },
    "challenges": [
      {
        "id": "flow-exact-tail-calibration",
        "title": "Calibrate a global failure budget from exact tails",
        "minutes": 16,
        "skill": "Choose an integer congestion threshold using a local distribution and a dependent global constraint family.",
        "connection": "The four-commodity example computes one edge’s load. The algorithm must make the probability of any bad edge small enough.",
        "prompt": "Suppose there are 100 edges, and each fixed edge load has distribution Binomial(8,1/4); loads on different edges may be arbitrarily dependent. Find the smallest integer threshold a for which the union bound certifies Pr(any edge has load at least a)≤0.05. Compute the relevant exact binomial tails and explain why no independence across edges is necessary. Compare this finite calibration with inserting μ=2 into a Chernoff expression.",
        "hints": [
          "Use a denominator 4⁸=65536 and include every term at or above the threshold.",
          "Check a=6 and a=7; the tail is decreasing in a."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the smallest threshold a certified by this union bound?",
          "expected": 7,
          "feedback": "For a=6 the local tail is (252+24+1)/65536=277/65536, yielding a global bound above 0.42. For a=7 it is 25/65536, yielding 2500/65536≈0.03815≤0.05. Thus seven is the first certified threshold."
        },
        "solution": [
          "For a=6, the binomial numerator is C(8,6)3²+C(8,7)3+1=252+24+1=277.",
          "The union bound is then 27700/65536≈0.42267, so a=6 is not certified. Any smaller a has an even larger tail.",
          "For a=7, the local numerator is 8·3+1=25 and the global bound is 2500/65536≈0.03815.",
          "Thus a=7 is the smallest threshold this information certifies. The actual global failure may be smaller because the union bound need not be tight.",
          "Chernoff bounds are valid under the within-edge commodity independence, but may be looser here. The final summation works under arbitrary cross-edge dependence."
        ],
        "rubric": [
          "Compute exact inclusive binomial tails and use the correct failure event.",
          "Prove minimality relative to the union-bound certificate, not the unknown true global probability.",
          "State the two distinct independence issues clearly."
        ],
        "mistake": "Using Pr(L=a) instead of Pr(L≥a) drops higher loads, while multiplying independent edge-success probabilities assumes dependence information not supplied.",
        "followup": "If the 100 load variables are identical in every outcome, compute the true global failure at a=6 and explain how much the union bound wastes."
      },
      {
        "id": "flow-pairwise-not-chernoff",
        "title": "Pairwise independent routing bits can have a heavy tail",
        "minutes": 18,
        "skill": "Construct a high-order dependence obstruction to an exponential-moment argument.",
        "connection": "The example’s binomial law comes from mutual independence across commodities. Pairwise independence preserves mean and variance but not the same tail.",
        "prompt": "Let R be uniform in F₂⁴. For every nonzero a∈F₂⁴ define B_a=1 when a·R=0, with dot product modulo two. There are fifteen load indicators. Prove that distinct indicators are independent fair bits, derive the exact distribution of L=∑B_a, and calculate Pr(L≥12). Explain why the Chernoff product-of-moments step is unjustified even though every pair is independent. Generalize the rare high-load probability to r seed bits.",
        "hints": [
          "Two distinct nonzero vectors over F₂ are linearly independent.",
          "When R≠0, its orthogonal hyperplane contains 2³ vectors including zero."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is Pr(L≥12) for the four-bit seed?",
          "expected": 0.0625,
          "feedback": "R=0 gives all fifteen indicators one, with probability 1/16. Every nonzero R has exactly seven nonzero orthogonal vectors, so L=7 otherwise. Pairwise independence does not remove the atom at load fifteen."
        },
        "solution": [
          "For nonzero a, the functional a·R is uniform, so B_a has mean one half.",
          "For distinct nonzero a,b, the map R↦(a·R,b·R) has rank two. Its four outputs are equally likely, proving pairwise independence.",
          "If R=0 then L=15. If R≠0 its kernel has eight vectors, seven nonzero, so L=7.",
          "Consequently Pr(L≥12)=1/16, although mean is 15/2 and variance still equals 15/4 as pairwise independence predicts.",
          "The exponential moment involves products of all fifteen indicators. Pairwise independence does not factor that product.",
          "For r bits, L=2ʳ−1 with probability 2^−r and L=2^(r−1)−1 otherwise; the extreme-load probability is 1/(n+1), not exponentially small in n."
        ],
        "rubric": [
          "Prove pairwise independence using rank, not just state it.",
          "Derive the complete two-point load distribution and its tail.",
          "Identify why high-order moment factorization requires more than pairwise independence."
        ],
        "mistake": "A correct variance computation is not a Chernoff proof. Exponential tails use a family of higher moments that pairwise independence does not determine.",
        "followup": "For r=4 compare the exact extreme-load probability with the fully independent Binomial(15,1/2) probability of load fifteen."
      }
    ]
  },
  "core-dense-color": {
    "proof": {
      "goal": "Use a logarithmic dominating sample, enumerate its proper colors, and reduce each extension to 2SAT.",
      "scope": "Williamson–Shmoys §5.12. Assumes a 3-colorable graph with minimum degree at least δn for fixed δ>0. The finite tripartite picture illustrates extension; probability and enumeration bounds concern the general dense input.",
      "frames": [
        {
          "title": "Make every unsampled vertex lose a color",
          "question": "Why does domination reduce the extension to lists of size at most two?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Vertex situation",
              "Observed sample neighbor",
              "Remaining list"
            ],
            "rows": [
              [
                "outside sample",
                "neighbor has color 1",
                "subset of {2,3}"
              ],
              [
                "two forbidden colors",
                "neighbors of colors 1,2",
                "at most {3}"
              ],
              [
                "three forbidden colors",
                "neighbors of all colors",
                "candidate fails"
              ]
            ],
            "focus": [
              0,
              2
            ],
            "note": "Every outside vertex must meet the sample; otherwise it retains three choices."
          },
          "claim": "A properly colored dominating sample leaves at most two allowed colors per outside vertex.",
          "explanation": "A color appearing on a sample neighbor is forbidden at the vertex. Domination guarantees at least one such forbidden color, independent of which correct candidate sample coloring is being tested.",
          "carry": "Each remaining vertex can be encoded by at most one Boolean choice."
        },
        {
          "title": "Bound a failed domination event",
          "question": "How does minimum degree make a logarithmic sample sufficient?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "Pr(v has no sampled neighbor)",
                "relation": "≤",
                "right": "(1−δ)^s",
                "reason": "s independent uniform draws"
              },
              {
                "left": "Pr(any such v)",
                "relation": "≤",
                "right": "n(1−δ)^s",
                "reason": "union bound"
              },
              {
                "left": "s",
                "relation": "=",
                "right": "O(log n/δ)",
                "reason": "fixed failure target"
              }
            ],
            "focus": 1,
            "note": "Repeated sample vertices cause no problem; the number of distinct sampled vertices is at most s."
          },
          "claim": "With high probability the sample dominates the whole graph.",
          "explanation": "Each draw misses a fixed vertex’s neighborhood with probability at most 1−δ. Independence concerns the sample draws; domination events for different vertices need not be independent.",
          "carry": "One sampled set supports all candidate-coloring tests."
        },
        {
          "title": "Enumerate the promised restriction",
          "question": "Why does trying exponentially many colors of a small sample remain polynomial?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "candidate restrictions",
                "relation": "≤",
                "right": "3^s",
                "reason": "three colors per sampled vertex"
              },
              {
                "left": "3^s",
                "relation": "=",
                "right": "n^O(1/δ)",
                "reason": "s=O(log n/δ)"
              },
              {
                "left": "correct restriction",
                "relation": "∈",
                "right": "enumerated candidates",
                "reason": "global 3-coloring promise"
              }
            ],
            "focus": 1,
            "note": "The polynomial exponent depends on fixed density; this is not a practical small constant assertion."
          },
          "claim": "At least one tested sample coloring is the restriction of a valid global coloring.",
          "explanation": "Reject improperly colored sample candidates. The promise ensures some remaining candidate agrees with one true coloring, even though most candidates may fail extension.",
          "carry": "For that candidate, the residual Boolean constraints are satisfiable."
        },
        {
          "title": "Encode forbidden edge-color pairs locally",
          "question": "Why does an edge constraint produce a 2-clause rather than a global coloring guess?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Residual edge uv",
              "Forbidden event",
              "Boolean clause"
            ],
            "rows": [
              [
                "common allowed color c",
                "u=c AND v=c",
                "(u≠c) OR (v≠c)"
              ],
              [
                "singleton list",
                "only one choice",
                "unit clause"
              ],
              [
                "correct sample restriction",
                "global coloring remains",
                "2SAT is satisfiable"
              ]
            ],
            "focus": [
              0,
              2
            ],
            "note": "Each forbidden simultaneous choice uses at most the two endpoint Boolean variables."
          },
          "claim": "Solving a satisfiable extension 2SAT formula yields a proper full 3-coloring.",
          "explanation": "Add a clause for every edge and every common permitted color. Satisfying all clauses excludes every monochromatic outside edge; lists already exclude sample-edge conflicts.",
          "carry": "Sampling, enumeration, and exact extension each have a precise role."
        }
      ]
    },
    "challenges": [
      {
        "id": "dense-color-probability-budget",
        "title": "Turn a domination failure target into an enumeration cost",
        "minutes": 14,
        "skill": "Calibrate the probability bound and interpret fixed-parameter polynomial time honestly.",
        "connection": "The small tripartite example chooses a helpful sample deliberately. This challenge derives how large a genuinely random sample must be.",
        "prompt": "Let n=1000 and minimum degree be at least 0.2n. Take s independent uniform vertex draws with replacement. Find the smallest integer s for which the displayed union-bound analysis guarantees domination failure at most 0.01. Derive a symbolic expression for general n,δ,η. Then express the corresponding 3^s color enumeration as a power of n when η=n^−c, and explain why fixed-density polynomial time does not imply a small practical search.",
        "hints": [
          "Require n(1−δ)^s≤η, and remember ln(1−δ) is negative.",
          "With η=n^−c, the numerator becomes (c+1)ln n."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the smallest s certified for the given numerical parameters?",
          "expected": 52,
          "feedback": "The inequality is 1000·0.8^s≤0.01, so s≥ln(10^−5)/ln(0.8)≈51.594. The smallest integer is 52; rounding down would not meet the requested certificate."
        },
        "solution": [
          "For a fixed vertex, all s draws miss its neighborhood with probability at most 0.8^s.",
          "The union bound gives failure at most 1000·0.8^s, so s≥ln(0.01/1000)/ln(0.8).",
          "Taking the ceiling gives s=52. This is the smallest sample size certified by this worst-case bound, not necessarily by the graph’s true failure probability.",
          "In general s=⌈ln(n/η)/(−ln(1−δ))⌉. For η=n^−c this is (c+1)ln n/(−ln(1−δ)) up to rounding.",
          "Therefore 3^s≤3n^((c+1)ln3/(−ln(1−δ))). For fixed δ,c this is polynomial, but its exponent and finite search can be enormous."
        ],
        "rubric": [
          "Derive the per-vertex and global probabilities with the correct logarithm direction.",
          "Use the ceiling and distinguish the certificate from the unknown exact probability.",
          "Translate the enumeration into a parameter-dependent polynomial exponent."
        ],
        "mistake": "Writing O(log n) without its δ-dependent constant hides the very term that controls the enumeration cost.",
        "followup": "Repeat the calculation with sampling without replacement and derive an equal or stronger per-vertex miss bound."
      },
      {
        "id": "dense-color-implication-obstruction",
        "title": "A proper sample coloring can leave an unsatisfiable extension",
        "minutes": 16,
        "skill": "Construct the Boolean implication obstruction corresponding to a residual odd cycle.",
        "connection": "The tripartite example extends cleanly. Here a locally proper partial coloring forces two-color lists that are globally inconsistent.",
        "prompt": "Consider a five-cycle v0,…,v4, and attach a distinct pendant sample vertex s_i to each v_i. Color every s_i with color 1. This partial coloring is proper, but each cycle vertex now has list {2,3}. Introduce b_i=1 for color 3. Write all edge clauses, exhibit an implication path from b0 to ¬b0 and the reverse, and conclude that this candidate cannot extend. Show that the original graph nevertheless is 3-colorable. This local gadget illustrates the extension step, not the dense-sampling probability theorem.",
        "hints": [
          "For an edge, forbid both endpoints choosing 2 and both choosing 3.",
          "Alternating around an odd cycle flips the starting Boolean value after five edges."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the length of a shortest implication path from b0 to ¬b0 in this formula?",
          "expected": 5,
          "feedback": "Each edge forces the opposite Boolean value. Going once around the five-cycle yields b0→¬b1→b2→¬b3→b4→¬b0, length five. A shorter path would correspond to a shorter odd closed walk in C5."
        },
        "solution": [
          "Each edge i,i+1 contributes (b_i∨b_(i+1)) and (¬b_i∨¬b_(i+1)), enforcing opposite endpoint bits. There are ten 2-clauses.",
          "The implication path b0→¬b1→b2→¬b3→b4→¬b0 follows five edges.",
          "Starting with ¬b0 gives the reverse-parity path ¬b0→b1→¬b2→b3→¬b4→b0. Thus b0 and ¬b0 lie in the same strongly connected component.",
          "The 2SAT formula is unsatisfiable: a five-cycle cannot be colored with only 2 and 3.",
          "The original graph is still 3-colorable: color the cycle with three colors and each pendant leaf with any color different from its neighbor. The failing condition is this particular sample restriction, not the original promise."
        ],
        "rubric": [
          "Encode both same-color prohibitions for every residual edge.",
          "Exhibit both implication paths and the strongly connected contradiction.",
          "Give a global 3-coloring argument and state the local gadget’s limited role."
        ],
        "mistake": "Properly coloring the sample checks only its induced edges; it does not establish that the partial coloring extends to the whole graph.",
        "followup": "Replace the five-cycle with an even cycle and describe both satisfying Boolean assignments and their interpretation as residual colorings."
      }
    ]
  },
  "core-sdp-cut": {
    "proof": {
      "goal": "Relax sign products to a Gram matrix and transfer an angle-by-angle separation inequality into an expected cut guarantee.",
      "scope": "Williamson–Shmoys §§6.1–6.2. Nonnegative edge weights are assumed. Polynomial-time SDP optimization and the numerical minimization defining αGW are inputs; the geometric probability and objective comparison are explained.",
      "frames": [
        {
          "title": "Embed every integral cut in the relaxation",
          "question": "Why is the SDP optimum an upper bound rather than a lower bound?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Representation",
              "Entry Xᵢⱼ",
              "Edge cut contribution"
            ],
            "rows": [
              [
                "sign vector s",
                "sᵢsⱼ",
                "wᵢⱼ(1−sᵢsⱼ)/2"
              ],
              [
                "unit Gram vectors",
                "vᵢ·vⱼ",
                "wᵢⱼ(1−vᵢ·vⱼ)/2"
              ],
              [
                "relaxation",
                "PSD, diagonal 1",
                "rank restriction removed"
              ]
            ],
            "focus": [
              0,
              2
            ],
            "note": "Every sign solution has a feasible rank-one Gram matrix."
          },
          "claim": "SDPopt≥OPTcut.",
          "explanation": "The relaxation enlarges the feasible set of a maximization problem. Its objective has the same value on every embedded integral cut, so the inequality direction is fixed.",
          "carry": "A good rounding ratio against SDPopt also implies one against OPTcut."
        },
        {
          "title": "Read cut probability from the angle",
          "question": "What fraction of hyperplane normal directions separate one pair?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Pair angle θ",
              "SDP contribution / w",
              "Separation probability"
            ],
            "rows": [
              [
                "0",
                "0",
                "0"
              ],
              [
                "π/2",
                "1/2",
                "1/2"
              ],
              [
                "2π/3",
                "3/4",
                "2/3"
              ],
              [
                "π",
                "1",
                "1"
              ]
            ],
            "focus": [
              2
            ],
            "note": "Only the projection of the random normal onto the pair’s plane affects separation."
          },
          "claim": "Pr(edge is cut)=θ/π.",
          "explanation": "In the two-dimensional span, the separating normals occupy total angular measure 2θ out of 2π. Rotational symmetry supplies the probability even when different edge events are dependent.",
          "carry": "The rounded and relaxed edge expressions can be compared pointwise in θ."
        },
        {
          "title": "Choose the worst angular ratio",
          "question": "Why must one prove the inequality for every possible edge angle?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "αGW",
                "relation": "=",
                "right": "minθ 2θ/[π(1−cosθ)]",
                "reason": "0<θ≤π; θ=0 separately"
              },
              {
                "left": "θ/π",
                "relation": "≥",
                "right": "αGW(1−cosθ)/2",
                "reason": "definition of minimum"
              }
            ],
            "focus": 1,
            "note": "A finite test at a few convenient angles cannot certify the universal constant."
          },
          "claim": "Every edge’s expected rounded contribution is at least αGW times its relaxed contribution.",
          "explanation": "Different instances and different optimal vector solutions can use different angles. The minimum ratio creates one coefficient valid across all of them; the source gives approximately 0.87856.",
          "carry": "The local inequality is uniform enough to sum over the graph."
        },
        {
          "title": "Sum before demanding a good outcome",
          "question": "Why is independence between cut edges unnecessary?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "E[cut weight]",
                "relation": "=",
                "right": "∑ₑwₑPr(e cut)",
                "reason": "linearity"
              },
              {
                "left": "E[cut weight]",
                "relation": "≥",
                "right": "αGW·SDPopt",
                "reason": "nonnegative weighted sum"
              },
              {
                "left": "αGW·SDPopt",
                "relation": "≥",
                "right": "αGW·OPTcut",
                "reason": "relaxation upper bound"
              }
            ],
            "focus": 1,
            "note": "A random hyperplane defines one valid cut in every outcome."
          },
          "claim": "Expected cut weight is at least αGWOPTcut.",
          "explanation": "All edge events share one random normal and are usually dependent. Feasibility is supplied by global vertex signs, while linearity combines their marginal guarantees.",
          "carry": "One coherent cut, not independently rounded edge decisions, realizes the theorem."
        }
      ]
    },
    "challenges": [
      {
        "id": "sdp-simplex-tight-relaxation",
        "title": "A tight SDP can still lose value during rounding",
        "minutes": 18,
        "skill": "Use symmetry and PSD eigenvalues to separate relaxation loss from rounding loss.",
        "connection": "The triangle example exhibits an SDP gap. On K4 the relaxation is exact, yet the same rounding still has a nontrivial loss.",
        "prompt": "For the unit-weight complete graph K4, symmetrize any feasible Gram matrix over all vertex permutations, giving diagonal one and common off-diagonal c. Derive its eigenvalues and the allowed interval for c. Compute the SDP optimum and the integral maximum cut. For the regular-simplex optimum c=−1/3, compute the expected hyperplane cut weight and its ratio to OPT. Explain why equality of relaxation and integral optima does not force the rounded solution to be optimal.",
        "hints": [
          "The all-ones direction has eigenvalue 1+3c; the orthogonal subspace has eigenvalue 1−c.",
          "K4 has six edges, each separated with probability arccos(−1/3)/π."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the expected rounded-cut / OPT ratio?",
          "expected": 0.9122601719540891,
          "feedback": "PSD forces c≥−1/3. The objective 3(1−c) is maximized at four, equal to the 2-by-2 integral cut. Hyperplane rounding yields 6·arccos(−1/3)/π in expectation, so dividing by four gives (3/2)arccos(−1/3)/π≈0.91226."
        },
        "solution": [
          "Averaging feasible matrices preserves PSD, unit diagonal and objective, so an optimum may be taken with common off-diagonal c.",
          "Its eigenvalues are 1+3c once and 1−c three times; hence −1/3≤c≤1.",
          "The SDP objective is six times (1−c)/2=3(1−c), with optimum four at c=−1/3.",
          "The largest integral cut partitions four vertices 2+2 and has four edges, so the relaxation is exact on this input.",
          "The regular-simplex vectors have pair angle arccos(−1/3). Linearity gives expected rounded cut 6 arccos(−1/3)/π, strictly below four.",
          "An exact relaxation certifies that an optimal integral solution exists at that objective; the rounding distribution need not concentrate on those optimal solutions."
        ],
        "rubric": [
          "Justify symmetrization and both PSD eigenvalues.",
          "Compute and compare integral and relaxed optima.",
          "Derive the rounding expectation and explain the distinct source of loss."
        ],
        "mistake": "A zero integrality gap does not make every optimal fractional representation an optimal integral output under an arbitrary rounding rule.",
        "followup": "Compare this expectation with rounding an optimal rank-one cut matrix; explain why different optimal SDP solutions can have different rounded performance."
      },
      {
        "id": "sdp-triangle-edge-dependence",
        "title": "Why independently correct edge probabilities do not define a cut",
        "minutes": 16,
        "skill": "Derive joint constraints imposed by a single global hyperplane.",
        "connection": "The triangle’s three edge probabilities are each two thirds. Their dependence is essential to cut feasibility.",
        "prompt": "Use the equiangular triangle vectors from the example. Determine the distribution of the three cut-edge indicators up to probability-zero boundary events. Compute the covariance of two distinct edge indicators and the variance of their sum. Compare with independently sampling three Bernoulli(2/3) edge decisions. Identify an impossible event produced by the independent scheme and explain why the original expected-value proof never needed that independence.",
        "hints": [
          "A nontrivial cut of a triangle always cuts exactly two edges.",
          "Rotational symmetry makes the three possible two-edge cut sets equally likely."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the covariance of two distinct cut-edge indicators?",
          "expected": -0.1111111111111111,
          "feedback": "Each edge is cut with probability 2/3, but any specified pair is jointly cut with probability 1/3. Thus covariance is 1/3−4/9=−1/9. The negative covariances cancel the individual variances so the cut-edge count is always two."
        },
        "solution": [
          "The vectors sum to zero, so a generic hyperplane cannot put all three on the same side. Thus exactly two triangle edges are cut in every nonboundary outcome.",
          "Symmetry gives probability one third to each of the three two-edge cut sets.",
          "For distinct indicators Xi,Xj, E[XiXj]=1/3 and E[Xi]E[Xj]=4/9, so Cov=−1/9.",
          "Each indicator has variance 2/9. Therefore Var(X1+X2+X3)=3·2/9+2·3·(−1/9)=0.",
          "Independent Bernoulli decisions would cut all three edges with probability 8/27, impossible for any vertex bipartition of an odd cycle.",
          "The actual theorem sums marginal expected edge weights. Global signs ensure feasibility; edge independence is neither assumed nor desired."
        ],
        "rubric": [
          "Derive the three supported joint patterns and their probabilities.",
          "Compute covariance and total variance consistently.",
          "Use odd-cycle parity to identify why independent edge decisions can be infeasible."
        ],
        "mistake": "Matching every edge marginal is not sufficient to preserve the combinatorial feasible set.",
        "followup": "For unequal triangle edge weights, derive the three possible cut weights and their variance under these same vectors."
      }
    ]
  },
  "core-color-sdp": {
    "proof": {
      "goal": "Combine independent hyperplane signatures, repair, high-degree neighborhood removal, and repeated semicolorings.",
      "scope": "Williamson–Shmoys §6.5. A feasible vector 3-coloring and its polynomial-time computation are inputs. Maximum degree bounds apply to the remaining graph; high-degree removal uses the promise that every neighborhood is bipartite.",
      "frames": [
        {
          "title": "Make collisions exponentially rarer",
          "question": "What changes when the hyperplanes are independent rather than repeated?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Hyperplanes t",
              "One-edge collision bound",
              "Signature colors"
            ],
            "rows": [
              [
                "1",
                "1/3",
                "2"
              ],
              [
                "2",
                "1/9",
                "4"
              ],
              [
                "4",
                "1/81",
                "16"
              ]
            ],
            "focus": [
              2
            ],
            "note": "An edge survives as a collision only if all independently sampled planes fail to separate it."
          },
          "claim": "Pr(edge endpoints share a signature)≤3^−t.",
          "explanation": "Adjacent vectors have angle at least 2π/3, so each hyperplane has collision probability at most one third. Multiplying these failures uses independence across hyperplanes, not across edges.",
          "carry": "The palette grows as 2^t while expected repair cost shrinks as 3^−t."
        },
        {
          "title": "Convert collisions into a large colored subset",
          "question": "Why must a failure-probability target be distinguished from an expectation bound?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "E[bad edges]",
                "relation": "≤",
                "right": "(nΔ/2)3^(−t)",
                "reason": "linearity"
              },
              {
                "left": "deleted vertices D",
                "relation": "≤",
                "right": "2·bad edges",
                "reason": "delete both endpoints"
              },
              {
                "left": "Pr(D>n/2)",
                "relation": "≤",
                "right": "2E[D]/n",
                "reason": "Markov"
              }
            ],
            "focus": 2,
            "note": "Every remaining edge has different endpoint signatures, so the remaining subgraph is properly colored."
          },
          "claim": "With t=Θ(log₃Δ), a useful constant fraction survives with constant probability.",
          "explanation": "Choose t with enough additive slack for the desired constant success probability. Expected few collisions alone does not mean every sample has few collisions; resampling can select a useful semicoloring.",
          "carry": "The bounded-degree subroutine uses O(Δ^(log₃2)) colors."
        },
        {
          "title": "Remove high degree using the promise",
          "question": "Why may the open neighborhood use two fresh colors?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Remaining degree",
              "Action",
              "Color charge"
            ],
            "rows": [
              [
                "at least σ",
                "remove N(v), 2-color it",
                "two fresh colors"
              ],
              [
                "below σ everywhere",
                "signature semicoloring",
                "O(σ^log₃2) colors"
              ],
              [
                "number of large batches",
                "each removes ≥σ",
                "at most n/σ"
              ]
            ],
            "focus": [
              0,
              2
            ],
            "note": "N(v) excludes v itself; under a global 3-coloring its vertices use only the other two colors."
          },
          "claim": "The high-degree phase costs O(n/σ) colors and leaves maximum degree below σ.",
          "explanation": "Bipartiteness can be checked and colored algorithmically. Different removed batches receive distinct palettes, so edges between batches cannot become monochromatic.",
          "carry": "The total semicoloring cost has two competing powers of σ."
        },
        {
          "title": "Balance the terms, then finish the graph",
          "question": "How does a semicoloring become a full coloring without cross-round conflicts?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "n/σ",
                "relation": "=",
                "right": "σ^a, a=log₃2",
                "reason": "balance both costs"
              },
              {
                "left": "σ",
                "relation": "=",
                "right": "n^(1/(1+a))",
                "reason": "solve for the cutoff"
              },
              {
                "left": "colors per phase",
                "relation": "=",
                "right": "O(n^log₆2)",
                "reason": "a/(1+a)=log₆2"
              }
            ],
            "focus": 2,
            "note": "Repeat on uncolored vertices and use fresh palettes; a constant surviving fraction gives O(log n) rounds."
          },
          "claim": "The full coloring uses O(n^(log₆2)log n) colors under this analysis.",
          "explanation": "The final logarithm records repeated semicolorings, not a change in the local collision exponent. Palettes must remain distinct across phases unless an additional conflict-handling argument is supplied.",
          "carry": "Probability amplification, degree splitting and palette accounting are all necessary."
        }
      ]
    },
    "challenges": [
      {
        "id": "color-signature-confidence",
        "title": "Choose signatures for a specified success probability",
        "minutes": 16,
        "skill": "Calibrate collision expectation, vertex repair and Markov failure rather than merely count colors.",
        "connection": "The example fixes four planes and computes an expectation. This question starts with a demanded success probability.",
        "prompt": "Let n=72 and maximum degree Δ=27. Delete both endpoints of every signature-collision edge. Using only the displayed worst-case edge count and Markov inequality, choose the smallest integer t that certifies at least probability 3/4 of retaining at least half the vertices. Compute the palette size and expected deletion bound. Explain why dependence between collisions does not invalidate this certificate, and why t−1 is not certified by the same estimates.",
        "hints": [
          "There are at most 72·27/2=972 edges.",
          "The bad event D>36 is bounded by E[D]/36≤2·972/(36·3^t)."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the smallest certified number t of independent planes?",
          "expected": 5,
          "feedback": "The Markov bound is 54/3^t and must be at most 1/4, requiring 3^t≥216. Thus t=5 works (243≥216), while t=4 gives 54/81=2/3. The palette has 32 colors and E[D]≤8."
        },
        "solution": [
          "The maximum number of edges is 972, hence E[bad edges]≤972·3^−t.",
          "Deleting both endpoints gives E[D]≤1944·3^−t, without needing collision independence.",
          "Markov gives Pr(D>36)≤54·3^−t. Requiring this at most 1/4 gives 3^t≥216.",
          "The smallest integer is t=5. Then E[bad edges]≤4, E[D]≤8, and the failure bound is 2/9<1/4.",
          "With t=4, this analysis gives failure at most 2/3, not the requested quarter. This is a limitation of the certificate, not proof that four planes always fail."
        ],
        "rubric": [
          "Carry the endpoint-deletion factor two correctly.",
          "Choose the smallest t meeting the stated Markov target and count 2^t colors.",
          "Distinguish dependence-free expectation/Markov reasoning from a true failure lower bound."
        ],
        "mistake": "Setting expected deleted vertices below half does not by itself give success probability three quarters.",
        "followup": "Derive the formula for arbitrary required failure η and retained fraction 1−β."
      },
      {
        "id": "color-balance-and-palettes",
        "title": "Reconstruct the degree split rather than quote its exponent",
        "minutes": 18,
        "skill": "Optimize a two-regime algorithm and preserve color feasibility across its phases.",
        "connection": "The bounded-degree example omits the high-degree batches and the repeated rounds that produce a full coloring.",
        "prompt": "Assume the bounded-degree semicoloring uses O(σ^a) colors, where a=log₃2, and high-degree neighborhood removal uses O(n/σ) colors. Derive the optimal cutoff and exponent. Specialize to n=6^12 and calculate the common scale of the two terms. Then explain why only the open neighborhood is bipartite under the promise, why each batch can be found without knowing the promised 3-coloring, and why reusing the same palette across arbitrary batches is unjustified.",
        "hints": [
          "Set n/σ=σ^a, then use 1+a=log₃6.",
          "A neighborhood’s bipartition is found by a standard graph search; the promise proves that search will succeed."
        ],
        "probe": {
          "kind": "number",
          "prompt": "For n=6^12, what is the common scale n/σ=σ^a at the balanced cutoff?",
          "expected": 4096,
          "feedback": "The cutoff is σ=n^(1/(1+log₃2))=3^12. Both n/σ and σ^log₃2 equal 2^12=4096. Constants such as the two colors per high-degree batch are separate from this common growth scale."
        },
        "solution": [
          "Balancing n/σ and σ^a gives σ^(1+a)=n, hence σ=n^(1/(1+a)).",
          "The color exponent is a/(1+a)=log₆2. At n=6^12, σ=3^12 and both growth terms are 2^12.",
          "In a promised 3-coloring, no neighbor of v uses v’s color, so G[N(v)] is bipartite. Adding v itself can create a triangle and need a third color.",
          "A breadth-first bipartiteness algorithm finds the two-coloring without being handed the original 3-coloring. At least σ vertices are removed in a high-degree batch.",
          "Distinct palettes prevent conflicts across arbitrary removed batches. Repeating semicoloring on the remainder adds O(log n) palettes because each successful round removes a constant fraction."
        ],
        "rubric": [
          "Derive the cutoff, exponent and numerical specialization.",
          "Justify the exact neighborhood object and its constructive two-coloring.",
          "Account for cross-batch and cross-round palette separation."
        ],
        "mistake": "A correct coloring inside every batch does not control edges joining different batches when color names are reused.",
        "followup": "Suppose a stronger low-degree routine used O(σ^b) colors. Derive the new exponent and identify what happens as b tends to zero."
      }
    ]
  },
  "core-gaussian-color": {
    "proof": {
      "goal": "Use negative edge covariance to make selected-edge repairs cheaper than the selected-vertex benefit.",
      "scope": "Williamson–Shmoys §13.2. A vector 3-coloring and standard Gaussian tail bounds are explicit inputs. The threshold calculation concerns its asymptotic large-degree regime; small degrees require separate treatment.",
      "frames": [
        {
          "title": "Read all covariances from one Gaussian direction",
          "question": "Why are adjacent projections not independent standard normals?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Quantity",
              "Value",
              "Reason"
            ],
            "rows": [
              [
                "Var(Zᵢ)",
                "1",
                "unit vector"
              ],
              [
                "Cov(Zᵢ,Zⱼ)",
                "vᵢ·vⱼ",
                "same Gaussian direction"
              ],
              [
                "adjacent covariance",
                "≤−1/2",
                "vector-coloring constraint"
              ]
            ],
            "focus": [
              1,
              2
            ],
            "note": "Each marginal is standard normal, but the pair geometry carries the useful dependence."
          },
          "claim": "For an edge, Var(Zᵢ+Zⱼ)≤1.",
          "explanation": "Expand the variance as 1+1+2Cov. The negative inner product makes a large common positive excursion unusually expensive.",
          "carry": "A two-coordinate event can be bounded by a stronger one-dimensional tail."
        },
        {
          "title": "Enlarge the bad event in the useful direction",
          "question": "Which sum event is guaranteed by two threshold exceedances?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "{Zᵢ≥t,Zⱼ≥t}",
                "relation": "⊆",
                "right": "{Zᵢ+Zⱼ≥2t}",
                "reason": "add both inequalities"
              },
              {
                "left": "Pr(edge selected)",
                "relation": "≤",
                "right": "Pr(N(0,1)≥2t)",
                "reason": "sum variance ≤1, t>0"
              }
            ],
            "focus": 1,
            "note": "Containment supplies an upper bound on harm, not an equality of events."
          },
          "claim": "An adjacent pair’s tail has exponential scale e^(−2t²), versus e^(−t²/2) for one vertex.",
          "explanation": "A centered normal with variance no larger than one has no larger positive upper tail than a standard normal. This comparison would fail in this form if the covariance constraint were weakened.",
          "carry": "Bad-edge benefit decays much faster with threshold than good-vertex benefit."
        },
        {
          "title": "Repair before claiming an independent set",
          "question": "Why may selected vertices be counted even though selection itself is not independent-set feasible?",
          "diagram": {
            "kind": "table",
            "columns": [
              "n=1000, Δ=20, t=2",
              "Expected count",
              "Role"
            ],
            "rows": [
              [
                "selected vertices",
                "≥22.75",
                "benefit"
              ],
              [
                "selected edges",
                "≤0.3168",
                "one deletion per edge"
              ],
              [
                "repaired set",
                "≥22.4332",
                "benefit minus harm"
              ]
            ],
            "focus": [
              2
            ],
            "note": "A deletion can repair several edges, so charging one deletion to every selected edge is safe but possibly loose."
          },
          "claim": "E[|I|]≥nQ(t)−mQ(2t).",
          "explanation": "Delete one endpoint from each still-present selected edge. At most the original selected-edge count is removed, producing an actual independent set in every outcome. Linearity then subtracts expected harm.",
          "carry": "The objective lower bound concerns a feasible repaired object."
        },
        {
          "title": "Choose a threshold that absorbs the degree factor",
          "question": "What balances one-vertex and two-vertex tail exponents?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "m",
                "relation": "≤",
                "right": "nΔ/2",
                "reason": "maximum degree"
              },
              {
                "left": "pair tail / vertex tail",
                "relation": "≈",
                "right": "constant·e^(−3t²/2)",
                "reason": "Gaussian tail exponents"
              },
              {
                "left": "t²",
                "relation": "=",
                "right": "(2/3)lnΔ+O(1)",
                "reason": "make Δ times ratio small"
              }
            ],
            "focus": 2,
            "note": "The 1/t marginal prefactor remains in the selected-vertex benefit."
          },
          "claim": "A suitable threshold gives expected size Ω(nΔ^−1/3/√lnΔ).",
          "explanation": "Use quantitative tail inequalities, not only exponent notation, to choose the additive constant so repair consumes at most a fixed fraction. The display describes growth and does not replace the source’s constants and regime checks.",
          "carry": "Negative covariance is converted into a degree-dependent independent-set guarantee."
        }
      ]
    },
    "challenges": [
      {
        "id": "gaussian-covariance-exponent",
        "title": "Derive the exponent for a weaker vector separation",
        "minutes": 18,
        "skill": "Recompute the degree exponent from covariance and Gaussian tail scales.",
        "connection": "The example uses covariance at most −1/2. This task changes the geometric constraint and follows its effect through the entire proof.",
        "prompt": "Suppose adjacent unit vectors instead satisfy vᵢ·vⱼ≤−β, where 0<β<1 is fixed. Using two-sided Gaussian tail estimates Q(x)=Θ(e^(−x²/2)/x) for x≥1, derive a valid pair-selection tail bound, the coefficient of lnΔ in the threshold t² needed to control repairs, and the resulting exponent of Δ in the independent-set size. Recover the original β=1/2 case and evaluate β=1/3. State which constants and degree regime the asymptotic notation suppresses.",
        "hints": [
          "The sum variance is at most 2(1−β), so standardize the sum threshold before using Q.",
          "Compare exp(−t²/(1−β)) with exp(−t²/2)."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the power a in nΔ^−a/√lnΔ for β=1/3?",
          "expected": 0.5,
          "feedback": "The exponent is a=(1−β)/(1+β). For β=1/3 it is (2/3)/(4/3)=1/2. The required threshold coefficient is 2(1−β)/(1+β)=1, so t² is lnΔ plus a suitable constant."
        },
        "solution": [
          "Var(Zᵢ+Zⱼ)≤2(1−β), hence pair selection is at most Q(2t/√(2(1−β))).",
          "Its exponential scale is exp(−t²/(1−β)); the single-vertex scale is exp(−t²/2).",
          "Their ratio is Θβ(exp(−t²(1+β)/(2(1−β)))); the 1/t factors cancel up to β-dependent constants.",
          "Choose t²=[2(1−β)/(1+β)]lnΔ+Cβ with a sufficiently large constant Cβ so the degree-weighted repair term is at most a fixed fraction of vertex benefit.",
          "The marginal benefit is then Ωβ(nΔ^−(1−β)/(1+β)/√lnΔ). For β=1/2 the exponent is one third; for β=1/3 it is one half.",
          "These estimates assume t≥1 and sufficiently large Δ; constants may depend on fixed β, and small-degree cases need another direct bound."
        ],
        "rubric": [
          "Standardize the Gaussian sum with its new variance.",
          "Derive both the threshold coefficient and independent-set exponent.",
          "Recover known cases and state the asymptotic restrictions honestly."
        ],
        "mistake": "Changing covariance changes the pair-tail exponent before threshold optimization; merely keeping t²=(2/3)lnΔ imports a bound no longer proved.",
        "followup": "Investigate what the formula predicts as β tends to zero and explain why fixed-β constants cannot be treated uniformly near every endpoint."
      },
      {
        "id": "gaussian-expectation-to-success",
        "title": "Turn an expected size into an honest repetition guarantee",
        "minutes": 16,
        "skill": "Use bounded integer output to obtain a success probability without assuming independent vertex choices.",
        "connection": "The example’s 22.4332 is an expectation, not a deterministic independent-set size.",
        "prompt": "Let the repaired independent-set size R be integer-valued in [0,1000], and suppose the previous calculation rigorously gives E[R]≥22.4332. Prove existence of an outcome with at least 23 vertices. Using only this expectation and the range, derive a lower bound on Pr(R≥12) and an upper bound on the expected number of independent runs until such a set is found. Explain why these facts do not justify saying a single run succeeds with probability one half.",
        "hints": [
          "On failure of R≥12 the integer R is at most eleven.",
          "Bound the mean above by 11(1−p)+1000p and solve for p."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What lower bound on Pr(R≥12) follows from this range-and-mean argument?",
          "expected": 0.011560364004044489,
          "feedback": "If p=Pr(R≥12), then E[R]≤11+989p. Thus p≥(22.4332−11)/989=28583/2472500≈0.01156. An expectation near 22 does not imply a median near 22."
        },
        "solution": [
          "If R≤22 in every outcome, its expectation would be at most 22, contradicting the assumed lower bound. Thus some outcome has R≥23.",
          "Let p=Pr(R≥12). On the complementary event R≤11; on success R≤1000. Hence E[R]≤11(1−p)+1000p.",
          "Combining with 22.4332≤E[R] yields p≥28583/2472500.",
          "Independent repetitions have expected waiting time 1/p, at most 2472500/28583, about 86.5 runs.",
          "The information permits highly skewed distributions: rare large outputs can supply the mean. A probability-one-half assertion requires a stronger distributional or second-moment argument."
        ],
        "rubric": [
          "Use integrality to prove the 23-vertex existence statement.",
          "Derive the success-probability lower bound with correct failure maximum eleven.",
          "Justify the repetition bound and identify the unsupported median claim."
        ],
        "mistake": "Markov bounds upper tails from above; it cannot be reversed to claim a large lower-tail success probability from the mean alone.",
        "followup": "Derive the optimal range-and-mean bound for Pr(R≥h) for an arbitrary integer h≤E[R], and construct an extremal two-point distribution."
      }
    ]
  },
  "core-dual-cover": {
    "proof": {
      "goal": "Grow feasible element prices, buy tight sets, and bound total cost by frequency-weighted dual charges.",
      "scope": "Williamson–Shmoys §7.1. Every element must be coverable, costs and dual prices are nonnegative, and f denotes maximum element frequency. This is the bounded-frequency primal–dual method, not greedy’s harmonic bound.",
      "frames": [
        {
          "title": "Spend the slack of a containing set",
          "question": "What limits the next price increase of an uncovered element?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Constraint for set S",
              "Current slack",
              "Growth stopping rule"
            ],
            "rows": [
              [
                "∑e∈S yₑ≤cS",
                "cS−∑e∈S yₑ",
                "first slack reaches zero"
              ],
              [
                "processed element e",
                "only yₑ increases",
                "buy a newly tight S∋e"
              ]
            ],
            "focus": [
              0,
              1
            ],
            "note": "Uncovered elements are the only growing coordinates."
          },
          "claim": "The price vector stays feasible for every set constraint.",
          "explanation": "Increasing yₑ affects all sets containing e. Stop at the minimum remaining slack among them; this maintains all inequalities and produces a tight set covering e.",
          "carry": "Each processed element becomes covered without losing the dual lower bound."
        },
        {
          "title": "Freeze the purchased set’s total price",
          "question": "Why does a purchased set stay tight after later iterations?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "cS at purchase",
                "relation": "=",
                "right": "∑e∈S yₑ",
                "reason": "tightness"
              },
              {
                "left": "later growth inside S",
                "relation": "=",
                "right": "0",
                "reason": "all its elements now covered"
              },
              {
                "left": "final cS",
                "relation": "=",
                "right": "∑e∈S yₑ(final)",
                "reason": "tightness persists"
              }
            ],
            "focus": 2,
            "note": "A set may remain selected even if a later purchased set covers its elements too."
          },
          "claim": "Every purchased set’s cost equals its final element-price sum.",
          "explanation": "The algorithm never raises prices of covered elements. Once S is bought, all its elements become covered, so no future update can alter its dual sum.",
          "carry": "The actual selected-set cost can be expanded exactly into price incidences."
        },
        {
          "title": "Count each price by its multiplicity",
          "question": "What does the frequency bound count, and what does it not count?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Element e",
              "Final price yₑ",
              "Number of selected containing sets"
            ],
            "rows": [
              [
                "one incidence",
                "yₑ",
                "one cost charge"
              ],
              [
                "all selected sets",
                "yₑ·fselected(e)",
                "≤f·yₑ"
              ],
              [
                "all elements",
                "sum these charges",
                "total selected cost"
              ]
            ],
            "focus": [
              1,
              2
            ],
            "note": "Set size does not bound how often one element can be charged."
          },
          "claim": "cost(selected)=∑ₑfselected(e)yₑ≤f∑ₑyₑ.",
          "explanation": "Swap the order of summation over purchased sets and their elements. Every selected set belongs to the input family, so each element appears in at most f such sets.",
          "carry": "The approximation loss is an overlap charge, not a slack violation."
        },
        {
          "title": "Use a genuinely feasible dual lower bound",
          "question": "Why does a large price sum mean anything about integral OPT?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "∑ₑyₑ",
                "relation": "≤",
                "right": "cost(any cover)",
                "reason": "sum feasible set budgets"
              },
              {
                "left": "cost(selected)",
                "relation": "≤",
                "right": "f∑ₑyₑ",
                "reason": "frequency charging"
              },
              {
                "left": "cost(selected)",
                "relation": "≤",
                "right": "fOPT",
                "reason": "weak duality"
              }
            ],
            "focus": 2,
            "note": "If any set budget were exceeded, the lower-bound certificate would disappear."
          },
          "claim": "The returned cover costs at most fOPT.",
          "explanation": "Feasibility makes every integral cover pay for all required element prices, even when it covers elements repeatedly. Nonnegative prices ensure repeated coverage cannot reduce this lower bound.",
          "carry": "Growth, persistent tightness and overlap accounting close the proof."
        }
      ]
    },
    "challenges": [
      {
        "id": "cover-near-tight-frequency",
        "title": "Build a frequency-two family approaching factor two",
        "minutes": 18,
        "skill": "Construct and analyze a near-tight charging example rather than quote f.",
        "connection": "The worked example’s sequential purchases may look better than the worst-case frequency factor. This family makes the overlap charge explicit.",
        "prompt": "There are m elements. For each element e_i there is a singleton of cost one, and one universal set U has cost m−δ, where 0<δ<1. Process e1,…,em in order, raising only its price while uncovered; retain every bought set. Derive the selected sets, final dual prices, actual OPT, and approximation ratio. Specialize to m=6 and δ=0.1. Explain what reverse deletion would do on this family and why that improvement is not part of the specified buy-and-retain algorithm.",
        "hints": [
          "The first m−1 elements each have slack one in their singleton.",
          "Before processing e_m the universal set has residual slack 1−δ."
        ],
        "probe": {
          "kind": "number",
          "prompt": "For m=6 and δ=0.1, what is selected cost divided by OPT?",
          "expected": 1.847457627118644,
          "feedback": "Five singleton purchases cost five, then U costs 5.9, so selected cost is 10.9. OPT is 5.9 and the final dual sum is also 5.9. The ratio is 109/59, tending to two for large m with fixed δ."
        },
        "solution": [
          "For the first m−1 elements, raising to one makes the singleton tight before U is tight, so those singleton sets are bought.",
          "The final element can rise only to 1−δ before U becomes tight; buying U covers everything.",
          "Final dual sum is (m−1)+(1−δ)=m−δ. U alone has that cost, so weak duality proves OPT=m−δ.",
          "The retained solution costs (m−1)+(m−δ)=2m−1−δ, with ratio (2m−1−δ)/(m−δ) approaching two.",
          "Each of the first m−1 prices is charged twice; the final price is charged once. This realizes the frequency-two accounting.",
          "Reverse deletion would discard all singleton purchases after U is present, returning OPT on this family; that is an extra algorithmic step, not a consequence of the original purchase analysis."
        ],
        "rubric": [
          "Trace the stopping events and all final prices.",
          "Prove OPT by a matching feasible primal and dual certificate.",
          "Derive the limiting ratio and distinguish retaining from pruning selected sets."
        ],
        "mistake": "Using the maximum set size m as the approximation factor misses that every element here belongs to only two input sets.",
        "followup": "Choose deterministic tie-breaking and δ depending on m to quantify the difference between the actual ratio and two."
      },
      {
        "id": "cover-approximate-certificates",
        "title": "Two numerical errors can multiply in a proof certificate",
        "minutes": 16,
        "skill": "Repair approximate tightness and approximate dual feasibility without silently dropping either error.",
        "connection": "The exact example uses tight equalities and feasible dual budgets. Numerical implementations may supply two distinct approximate statements.",
        "prompt": "Let η≥0. Suppose a returned cover and nonnegative prices satisfy ∑e∈S yₑ≤(1+η)cS for every input set, while every purchased set satisfies cS≤(1+η)∑e∈S yₑ. Maximum element frequency is f. Derive a rigorous approximation guarantee from exactly these statements by rescaling the dual. Evaluate f=3,η=0.1, and explain why claiming only f(1+η) ignores one error. State what stronger certificate would remove one factor.",
        "hints": [
          "First use approximate purchased-set tightness to charge the output to ∑y.",
          "The given y is not dual feasible; y/(1+η) is."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What factor follows for f=3 and η=0.1?",
          "expected": 3.63,
          "feedback": "Approximate tightness gives cost≤(1+η)f∑y. Rescaling y by 1+η makes a feasible dual, so ∑y≤(1+η)OPT. Together the factor is f(1+η)²=3.63."
        },
        "solution": [
          "Sum purchased-set inequalities to get cost≤(1+η)∑ₑfselected(e)yₑ≤(1+η)f∑ₑyₑ.",
          "Define zₑ=yₑ/(1+η). Every set satisfies ∑e∈S zₑ≤cS, so z is a feasible dual.",
          "Weak duality gives ∑y=(1+η)∑z≤(1+η)OPT.",
          "Combining yields cost≤f(1+η)²OPT, equal to 3.63 in the numerical case.",
          "Exact dual feasibility would remove the rescaling factor. Exact purchased-set tightness would instead remove the first factor. Neither follows from the two approximate assumptions as stated."
        ],
        "rubric": [
          "Use both approximate statements in their correct inequality directions.",
          "Construct a feasible rescaled dual and apply weak duality.",
          "Identify the independent source of each multiplicative error."
        ],
        "mistake": "Calling an almost-feasible price vector a lower bound without rescaling makes the final comparison with OPT invalid.",
        "followup": "If feasibility error and tightness error are different η and τ, derive the factor and specify which error should be controlled most tightly in a numerical certificate."
      }
    ]
  },
  "core-dual-path": {
    "proof": {
      "goal": "Grow feasible cut prices and prune a tight tree to a path whose cost equals the dual lower bound.",
      "scope": "Williamson–Shmoys §7.3. Nonnegative edge costs and reachable t are assumed. The exactness proof uses connectedness inside the constructed tree, not merely inside the input graph.",
      "frames": [
        {
          "title": "Grow the reached component to tightness",
          "question": "Which edges can become tight at the first two growth events?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "s",
                "x": 95,
                "y": 155,
                "label": [
                  "s"
                ],
                "tone": "active"
              },
              {
                "id": "a",
                "x": 290,
                "y": 55,
                "label": [
                  "a"
                ],
                "tone": "input"
              },
              {
                "id": "b",
                "x": 290,
                "y": 265,
                "label": [
                  "b"
                ],
                "tone": "input"
              },
              {
                "id": "t",
                "x": 625,
                "y": 155,
                "label": [
                  "t"
                ],
                "tone": "input"
              }
            ],
            "edges": [
              {
                "from": "s",
                "to": "a",
                "label": "cost 2",
                "tone": "muted",
                "directed": false
              },
              {
                "from": "s",
                "to": "b",
                "label": "cost 3",
                "tone": "muted",
                "directed": false
              },
              {
                "from": "a",
                "to": "b",
                "label": "cost 1",
                "tone": "muted",
                "directed": false
              },
              {
                "from": "a",
                "to": "t",
                "label": "cost 5",
                "tone": "muted",
                "directed": false
              },
              {
                "from": "b",
                "to": "t",
                "label": "cost 2",
                "tone": "muted",
                "directed": false
              }
            ],
            "note": "The first cut is {s}; after buying s–a the reached cut becomes {s,a}."
          },
          "claim": "Stop each price increase before any edge’s accumulated cut charge exceeds its cost.",
          "explanation": "The first event is y({s})=2. Then s–b has residual slack one and a–b has slack one, so the second growth interval ends in a tie. A consistent choice attaches b without creating a cycle.",
          "carry": "Dual feasibility survives events; bought edges connect the reached tree."
        },
        {
          "title": "Keep the prices attached to their actual cuts",
          "question": "If the tie chooses s–b, what is the final dual certificate?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Positive cut",
              "Price",
              "Pruned-path crossing"
            ],
            "rows": [
              [
                "{s}",
                "2",
                "s–b"
              ],
              [
                "{s,a}",
                "1",
                "s–b"
              ],
              [
                "{s,a,b}",
                "2",
                "b–t"
              ]
            ],
            "focus": [
              0,
              1,
              2
            ],
            "note": "The target enters when b–t becomes tight; the dual objective is five."
          },
          "claim": "All edges of the bought tree are tight for the final cut-price vector.",
          "explanation": "The path edges have charges 2+1=3 on s–b and 2 on b–t. The branch s–a has charge two. Other input edge budgets remain feasible; tightness alone does not yet say which edges are needed.",
          "carry": "The whole bought tree has cost seven, while the useful dual sum is five."
        },
        {
          "title": "Remove the branch that serves no s–t connection",
          "question": "Why can a tight branch be deleted without weakening feasibility?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "s",
                "x": 95,
                "y": 155,
                "label": [
                  "s",
                  "path"
                ],
                "tone": "active"
              },
              {
                "id": "a",
                "x": 290,
                "y": 55,
                "label": [
                  "a",
                  "deleted branch"
                ],
                "tone": "muted"
              },
              {
                "id": "b",
                "x": 290,
                "y": 265,
                "label": [
                  "b",
                  "path"
                ],
                "tone": "active"
              },
              {
                "id": "t",
                "x": 625,
                "y": 155,
                "label": [
                  "t",
                  "path"
                ],
                "tone": "output"
              }
            ],
            "edges": [
              {
                "from": "s",
                "to": "a",
                "label": "delete cost 2",
                "tone": "muted",
                "directed": false
              },
              {
                "from": "s",
                "to": "b",
                "label": "keep cost 3",
                "tone": "active",
                "directed": false
              },
              {
                "from": "b",
                "to": "t",
                "label": "keep cost 2",
                "tone": "active",
                "directed": false
              }
            ],
            "note": "The unique tree path is s–b–t. Tightness does not make the a-branch necessary."
          },
          "claim": "Pruning leaves a feasible path of cost five.",
          "explanation": "Every reached set used for a positive cut is connected inside the bought tree and contains s. Its intersection with the unique s–t path is therefore an initial segment: leaving and later reentering would create a second tree route.",
          "carry": "The pruned path crosses each positive-price cut exactly once."
        },
        {
          "title": "Match the two objective values",
          "question": "Which equality turns an approximation argument into exact optimality?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "cost(P)",
                "relation": "=",
                "right": "∑S yS·|P∩δS|",
                "reason": "tight edge charges"
              },
              {
                "left": "∑S yS·|P∩δS|",
                "relation": "=",
                "right": "∑S yS",
                "reason": "single crossing"
              },
              {
                "left": "∑S yS",
                "relation": "≤",
                "right": "OPT≤cost(P)",
                "reason": "weak duality and path feasibility"
              }
            ],
            "focus": 1,
            "note": "The same feasible dual and feasible path squeeze OPT to one value."
          },
          "claim": "cost(P)=∑SyS=OPT.",
          "explanation": "Without pruning, a positive cut can have extra branch crossings and its price may be charged more than once. Exactness comes from the structural path property, not from every purchased edge merely being tight.",
          "carry": "A path and equal-valued dual lower bound are an inspectable optimality certificate."
        }
      ]
    },
    "challenges": [
      {
        "id": "path-slack-trace",
        "title": "Resolve a tie and certify both the branches and the path",
        "minutes": 16,
        "skill": "Trace residual cut slack and compare feasible primal and dual objectives.",
        "connection": "The example uses unit-cost branches. Here unequal costs and simultaneous tight edges require checking all dual budgets.",
        "prompt": "Use edges s–a=2, s–b=3, a–b=1, a–t=5, b–t=2. Grow reached cuts from s and, when s–b and a–b tie, choose s–b to attach b. Record every positive cut and its price, verify every input edge budget, list all bought edges, and prune to an s–t path. Show that retaining every bought edge would fail the equality certificate even though the path found is optimal.",
        "hints": [
          "After y({s})=2, the next cut is {s,a}, and both candidate attachments have slack one.",
          "The edge a–t sees the second and third cuts but not the first."
        ],
        "probe": {
          "kind": "choice",
          "prompt": "Which final price vector, listed for {s}, {s,a}, {s,a,b}, matches the growth and certifies the optimal path?",
          "options": [
            "(2,3,2), with value seven matching the entire tight tree.",
            "(2,1,4), because a–t has cost five.",
            "(2,0,2), which is feasible and therefore makes every bought edge tight.",
            "(2,1,2), with value five matching s–b–t after deleting s–a."
          ],
          "answer": 3,
          "feedback": [
            "The edge s–b would receive charge five, exceeding its cost three, so this is not dual feasible.",
            "The edge b–t would receive charge four, exceeding its cost two.",
            "This is feasible but s–b has charge two rather than cost three; it neither records the actual second event nor matches the chosen path.",
            "Correct. The five edge charges are 2,3,1,3,2, respectively, all within costs; the pruned path costs 3+2=5."
          ]
        },
        "solution": [
          "Grow {s} by two and buy s–a. Both s–b and a–b then have one remaining unit of slack for the cut {s,a}.",
          "Grow {s,a} by one and choose s–b. The reached set is {s,a,b}.",
          "Grow this last cut by two until b–t is tight. Prices are (2,1,2).",
          "Edge charges for s–a,s–b,a–b,a–t,b–t are 2,3,1,3,2; all satisfy costs 2,3,1,5,2.",
          "The bought tree costs 2+3+2=7. Delete branch s–a to obtain s–b–t of cost five.",
          "The path equals the dual objective five, so weak duality proves OPT=5. Tightness of an unnecessary branch did not justify charging it once to that same dual total."
        ],
        "rubric": [
          "Trace all growth intervals and verify every edge constraint.",
          "Respect the stated tie choice and prune the actual resulting tree.",
          "Prove exactness by equal feasible objective values, not a visual shortest-path guess."
        ],
        "mistake": "A feasible dual price vector need not be the vector generated by a proposed growth trace; both the trace and its final certificate must be checked.",
        "followup": "Choose a–b instead at the tie and derive the different bought tree and equal-cost optimal path."
      },
      {
        "id": "path-connected-in-which-graph",
        "title": "Connected in the input is not connected in the bought tree",
        "minutes": 18,
        "skill": "Identify the exact structural invariant required for a single-crossing argument.",
        "connection": "The proof prunes a tree whose grown sets are connected in that tree. Replacing that invariant by input-graph connectedness sounds similar but is weaker.",
        "prompt": "Take the unit-cost path s–a–b–t and add an edge s–b of cost ten. Let S={s,b}, which is connected in the input by the expensive chord, and assign its cut price yS=1 with all other cut prices zero. Verify dual feasibility and tightness of the three unit path edges. Count the crossings of S by that path and compare path cost with dual value. Explain why this is not a counterexample to the source algorithm and formulate the correct connectedness invariant.",
        "hints": [
          "The chord lies inside S, so it receives no cut charge.",
          "The unique path in the bought unit-edge tree connects s to b through a, which is outside S."
        ],
        "probe": {
          "kind": "choice",
          "prompt": "What exactly fails in the proposed single-crossing argument?",
          "options": [
            "Dual feasibility fails because the expensive chord must receive cut price one.",
            "S is connected in the input but not in the bought tree; the path crosses it three times, so its one price is charged three times.",
            "The path is infeasible because s and b belong to the same cut side.",
            "Every connected input cut must be grown by the source algorithm, so the source theorem is false."
          ],
          "answer": 1,
          "feedback": [
            "The chord has both endpoints in S and receives zero charge; the dual is feasible.",
            "Correct. All three unit edges cross S and are tight. Input connectedness does not make the intersection with the bought tree a connected subtree.",
            "A path may enter and leave a set several times and remain a perfectly feasible s–t route.",
            "The source grows its actual reached component, a much stronger and algorithm-dependent condition."
          ]
        },
        "solution": [
          "The three unit path edges each cross S once and receive total charge one; the internal chord receives zero. Thus the dual is feasible and all path edges are tight.",
          "The path leaves S at s–a, reenters at a–b, and leaves again at b–t: three crossings. Its cost is three while the dual objective is one.",
          "The input-induced S is connected by the cost-ten chord, but S is disconnected inside the bought unit-edge path tree.",
          "Therefore “connected in the input” does not imply a path crosses once.",
          "The source invariant is that each grown reached set is connected in the constructed tree and contains s. The tree’s unique path cannot leave that connected subtree and return without creating a second tree route."
        ],
        "rubric": [
          "Check the complete dual certificate and all three crossings.",
          "Distinguish input connectedness from bought-tree connectedness.",
          "State the actual invariant and explain why the constructed example does not arise from that growth trace."
        ],
        "mistake": "Two statements using the word “connected” are not interchangeable when they refer to different edge sets.",
        "followup": "Add a second expensive chord making the complement connected too. Does that repair the single-crossing claim? Give a proof or a counterexample."
      }
    ]
  },
  "core-steiner": {
    "proof": {
      "goal": "Use uniform moat growth, safe pruning, and an aggregate contracted-forest degree bound to obtain factor two.",
      "scope": "Williamson–Shmoys §7.4. Demand-pair feasibility and the source reverse-deletion/forest invariant are assumed precisely. The degree bound is aggregate; no pointwise degree-at-most-two claim is made.",
      "frames": [
        {
          "title": "Grow all active cuts at the same rate",
          "question": "Why can one edge’s slack decrease twice as fast as one moat price?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Unit star edge",
              "Crossed active cuts",
              "Tightness time"
            ],
            "rows": [
              [
                "center to leaf i",
                "center and leaf i",
                "2τ=1, so τ=1/2"
              ],
              [
                "five singleton prices",
                "all equal 1/2",
                "dual total 5/2"
              ],
              [
                "four bought edges",
                "each cost one",
                "primal cost four"
              ]
            ],
            "focus": [
              0,
              1
            ],
            "note": "An edge is charged by every active component cut it crosses."
          },
          "claim": "Uniform growth stops at the first zero-slack edge event.",
          "explanation": "Activity means some required pair is still separated by the component. Uniform time does not mean every edge sees one growing cut; it may see two, which determines the next event.",
          "carry": "The final tight-edge cost can be decomposed into contributions of common growth intervals."
        },
        {
          "title": "Prune before using the degree lemma",
          "question": "Why is a large degree at an active component not a contradiction?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "c",
                "x": 360,
                "y": 155,
                "label": [
                  "active center",
                  "degree four"
                ],
                "tone": "active"
              },
              {
                "id": "a",
                "x": 100,
                "y": 50,
                "label": [
                  "active leaf",
                  "degree one"
                ],
                "tone": "input"
              },
              {
                "id": "b",
                "x": 620,
                "y": 50,
                "label": [
                  "active leaf",
                  "degree one"
                ],
                "tone": "input"
              },
              {
                "id": "d",
                "x": 100,
                "y": 265,
                "label": [
                  "active leaf",
                  "degree one"
                ],
                "tone": "input"
              },
              {
                "id": "e",
                "x": 620,
                "y": 265,
                "label": [
                  "active leaf",
                  "degree one"
                ],
                "tone": "input"
              }
            ],
            "edges": [
              {
                "from": "c",
                "to": "a",
                "label": "unit edge",
                "tone": "active",
                "directed": false
              },
              {
                "from": "c",
                "to": "b",
                "label": "unit edge",
                "tone": "active",
                "directed": false
              },
              {
                "from": "c",
                "to": "d",
                "label": "unit edge",
                "tone": "active",
                "directed": false
              },
              {
                "from": "c",
                "to": "e",
                "label": "unit edge",
                "tone": "active",
                "directed": false
              }
            ],
            "note": "The active-degree sum is eight across five active components, despite the center’s degree four."
          },
          "claim": "Only a sum of active degrees is bounded by twice the number of active components.",
          "explanation": "Pruning deletes edges unnecessary for required pair connections. After contracting the current components in the final pruned forest, a nonisolated inactive component cannot be a useless leaf.",
          "carry": "Inactive nonisolated vertices supply degree at least two in the contracted forest."
        },
        {
          "title": "Subtract the inactive degree budget",
          "question": "How does the full forest identity leave a bound on active vertices?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "total degree",
                "relation": "=",
                "right": "2(A+I−q)",
                "reason": "forest with q components"
              },
              {
                "left": "inactive degree",
                "relation": "≥",
                "right": "2I",
                "reason": "nonisolated inactive vertices"
              },
              {
                "left": "active degree",
                "relation": "≤",
                "right": "2A−2q≤2A",
                "reason": "subtract the inactive budget"
              }
            ],
            "focus": 2,
            "note": "Remove isolated inactive components before counting; active isolated vertices cause no harm."
          },
          "claim": "∑active deg≤2·number(active).",
          "explanation": "The full forest has no cycles, so each of its q components has one fewer edge than vertices. The pruning invariant makes inactive degrees large enough to subtract them rather than pay for them.",
          "carry": "Every common growth interval increases primal charge at most twice as fast as dual value."
        },
        {
          "title": "Integrate the interval-wise charge",
          "question": "Why does the sum bound suffice despite changing components over time?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "incremental edge charge",
                "relation": "=",
                "right": "dτ·∑active deg",
                "reason": "uniform price growth"
              },
              {
                "left": "dτ·∑active deg",
                "relation": "≤",
                "right": "2A dτ",
                "reason": "contracted-forest bound"
              },
              {
                "left": "cost(pruned forest)",
                "relation": "≤",
                "right": "2∑S yS≤2OPT",
                "reason": "integrate and apply weak duality"
              }
            ],
            "focus": 2,
            "note": "The set of active components changes only at events; the bound is valid within every interval."
          },
          "claim": "The feasible pruned forest is a two-approximation.",
          "explanation": "Uniform growth lets every active incidence receive the same dτ factor. Feasible dual prices supply the lower bound, and safe pruning supplies both connectivity and the needed degree invariant.",
          "carry": "The theorem combines algorithm timing, structural pruning, and charging."
        }
      ]
    },
    "challenges": [
      {
        "id": "steiner-active-degree-accounting",
        "title": "Compute the stronger forest charge with inactive components",
        "minutes": 18,
        "skill": "Reconstruct the aggregate degree lemma and expose its pruning hypothesis.",
        "connection": "The star example has no inactive vertices. Here inactive contracted components must be subtracted explicitly.",
        "prompt": "At a growth interval the pruned contracted forest consists of exactly eight vertices: five active and three inactive, with two connected components. Every inactive vertex is nonisolated and has degree at least two. Derive the strongest active-degree upper bound from these facts, and construct a forest realizing it. Then remove the inactive-degree condition and build a family showing why no bound by twice the number of active vertices follows from acyclicity alone.",
        "hints": [
          "The forest has 5+3−2 edges.",
          "For the sharp example, use two paths and place each inactive vertex internally."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the strongest active-degree upper bound supplied by these data?",
          "expected": 6,
          "feedback": "The total degree is 2(8−2)=12. The three inactive vertices consume at least six, leaving active degree at most six. The coarser 2A bound would be ten, but the component count saves four."
        },
        "solution": [
          "A forest on eight vertices with two components has six edges and total degree twelve.",
          "Inactive degree is at least 2·3=6, so active degree is at most six.",
          "Use one path A–I–A–I–A and another A–I–A. These have five active and three inactive vertices, two components, and active degree six, attaining the bound.",
          "Without the inactive-degree condition, a star with one active center and r inactive leaves is a forest with active degree r, which exceeds 2A=2 for r>2.",
          "Such inactive leaves would be useless in the required pruned invariant. This is exactly why acyclicity alone does not close the approximation proof."
        ],
        "rubric": [
          "Use both component count and inactive-degree subtraction.",
          "Construct a realizing forest with exactly the stated counts.",
          "Give an unbounded inactive-leaf family and relate it to pruning."
        ],
        "mistake": "The forest identity bounds total degree by total vertices, not active degree by active vertices unless inactive degrees are accounted for.",
        "followup": "Derive 2A−2q for arbitrary counts and determine how active isolated components affect the formula."
      },
      {
        "id": "steiner-nonuniform-growth",
        "title": "A feasible dual can become too weak under nonuniform growth",
        "minutes": 18,
        "skill": "Identify where a common growth rate is essential to aggregate charging.",
        "connection": "The star example grows all five active prices together. Changing rates preserves feasibility but can destroy that particular factor-two certificate.",
        "prompt": "Consider a unit-cost star with q leaves and demands connecting the center to every leaf. Instead of growing all active singleton prices uniformly, grow only the center price until all q edges become tight. Compute the dual value, bought cost, and true optimum. Compare with uniform singleton growth. Explain why the failed bound against this dual does not itself prove the nonuniform algorithm outputs a bad approximation, and locate the equality in the interval analysis that required uniform rates.",
        "hints": [
          "Center-only growth reaches price one.",
          "With uniform growth, every edge sees two growing singleton cuts and becomes tight at time one half."
        ],
        "probe": {
          "kind": "number",
          "prompt": "For q=7, what dual objective does uniform singleton growth obtain before buying the star?",
          "expected": 4,
          "feedback": "There are eight active singleton cuts, each reaching price one half, so the dual objective is four. Center-only growth yields value one. The same optimal seven-edge star therefore has very different primal–dual charge ratios."
        },
        "solution": [
          "Under center-only growth, y_center=1 makes every unit edge tight. The dual is feasible and has value one.",
          "All q edges are required to connect every leaf, so the bought cost and OPT both equal q. The assertion cost≤2·this dual fails for q>2, although the output is optimal.",
          "Uniform growth reaches time one half because every edge crosses the center and its leaf cut. The dual sum is (q+1)/2.",
          "Then cost q≤2·(q+1)/2, matching the aggregate degree analysis.",
          "With arbitrary rates r_C, incremental primal charge is ∑C r_C deg(C)dτ while dual increase is ∑C r_Cdτ. An unweighted degree-sum inequality does not control that weighted ratio when all rate is placed on a high-degree center.",
          "The example refutes a reused certificate proof, not the approximation quality of the particular returned star."
        ],
        "rubric": [
          "Check dual feasibility and compute the actual optimum in both growth schedules.",
          "Write the weighted-rate charging expression.",
          "Separate a weak dual certificate from a genuinely poor primal output."
        ],
        "mistake": "Weak duality gives a lower bound, but not every feasible lower bound is strong enough for a particular approximation proof.",
        "followup": "State a sufficient weighted degree inequality for nonuniform rates and explain why it is stronger than the source’s uniform forest lemma."
      }
    ]
  },
  "core-tree-metrics": {
    "proof": {
      "goal": "Transfer a fixed original capacity plan into a random dominating tree, charge merged loads by concavity, and include the map-back cost.",
      "scope": "Williamson–Shmoys §§8.5–8.6. The hierarchical expected-stretch theorem and controlled treatment of auxiliary tree vertices are explicit inputs. The cycle picture is illustrative, not a derivation of FRT.",
      "frames": [
        {
          "title": "Fix the benchmark before drawing the tree",
          "question": "Which object is allowed to depend on the sampled tree in the expectation comparison?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Object",
              "When fixed",
              "Use"
            ],
            "rows": [
              [
                "original optimum capacities",
                "before tree draw",
                "benchmark"
              ],
              [
                "its induced tree routes",
                "after tree draw",
                "comparison solution"
              ],
              [
                "optimal tree solution",
                "after tree draw",
                "no worse than benchmark"
              ]
            ],
            "focus": [
              0,
              1
            ],
            "note": "Linearity applies to fixed original edge charges; the tree optimum is bounded above by their induced feasible routing."
          },
          "claim": "For each sampled tree, OPTtree is at most the cost induced by the fixed original optimum.",
          "explanation": "Map each original edge’s capacity along its unique tree path. This preserves all demanded routes after concatenation. The benchmark’s original capacities are fixed before the tree is random.",
          "carry": "We can now charge tree cost to deterministic original-edge coefficients."
        },
        {
          "title": "Merge loads with the correct cost direction",
          "question": "Why is concavity useful when many original edges share one tree edge?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "f(a)+f(b)",
                "relation": "≥",
                "right": "f(a+b)+f(0)",
                "reason": "concavity with weights a/(a+b)"
              },
              {
                "left": "f(a+b)",
                "relation": "≤",
                "right": "f(a)+f(b)",
                "reason": "nonnegative f(0)=0"
              },
              {
                "left": "tree merged cost",
                "relation": "≤",
                "right": "sum of separate routed charges",
                "reason": "repeat subadditivity"
              }
            ],
            "focus": 2,
            "note": "The diagram compares one merged capacity with the charges assigned before routes overlap."
          },
          "claim": "Merged capacities cost no more than separately charging every original routed capacity.",
          "explanation": "For a+b>0, apply concavity to a and b as mixtures of zero and a+b, then add. The normalized nonnegative concave cost ensures the merge cannot reverse this upper bound.",
          "carry": "Separate charges expose original pairs, exactly the level of the expected-stretch theorem."
        },
        {
          "title": "Apply stretch pair by pair, then add",
          "question": "Why is the maximum stretch of a sampled tree the wrong random variable?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Six-cycle fixed edge",
              "Probability",
              "Tree distance"
            ],
            "rows": [
              [
                "its own edge deleted",
                "1/6",
                "5"
              ],
              [
                "another edge deleted",
                "5/6",
                "1"
              ],
              [
                "expected fixed-pair distance",
                "weighted sum",
                "5/3"
              ]
            ],
            "focus": [
              2
            ],
            "note": "Every sampled tree still has a worst adjacent pair of stretch five."
          },
          "claim": "E[induced tree cost]≤α·original benchmark cost.",
          "explanation": "Subadditivity bounds tree cost by ∑e f(c_e)dT(u_e,v_e). For each fixed original edge, expected distance is at most αdG(u_e,v_e). Sum these inequalities; no bound on a tree’s simultaneous maximum stretch is needed.",
          "carry": "E[OPTtree]≤αOPToriginal for the fixed benchmark transfer."
        },
        {
          "title": "Include the map-back theorem explicitly",
          "question": "What additional fact turns a cheap tree solution into an original-network solution?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "cost(returned original)",
                "relation": "≤",
                "right": "κ·cost(computed tree)",
                "reason": "controlled map-back input"
              },
              {
                "left": "cost(computed tree)",
                "relation": "≤",
                "right": "βOPTtree",
                "reason": "tree approximation input"
              },
              {
                "left": "E[original cost]",
                "relation": "≤",
                "right": "κβαOPToriginal",
                "reason": "combine all three comparisons"
              }
            ],
            "focus": 2,
            "note": "κ records any auxiliary-vertex elimination or edge-realization loss; it cannot be silently set to one."
          },
          "claim": "Expected stretch alone is only one part of the final approximation factor.",
          "explanation": "Original-point tree edges can often be realized by shortest paths. Auxiliary vertices need the source’s separate structural treatment, since domination of terminal-pair distances is not by itself a whole-network cost mapping theorem.",
          "carry": "Every transfer direction and constant must be justified."
        }
      ]
    },
    "challenges": [
      {
        "id": "tree-merge-charge",
        "title": "Compute the gap between merged and separate charges",
        "minutes": 18,
        "skill": "Trace a fixed capacity plan through a random tree and identify the exact role of concavity.",
        "connection": "The example averages one six-cycle pair and separately checks sqrt-capacity subadditivity. This task puts routing overlap and distortion in the same calculation.",
        "prompt": "Take a unit four-cycle with one unit of installed capacity on every original edge and cost f(c)=√c per unit length. Delete a uniformly chosen cycle edge to form a tree, and route every original edge’s capacity along its tree path. Compute the capacity on each retained tree edge, the actual merged tree cost, and the separate-charge upper bound. Compare with expected stretch times original cost. Then replace f by c² and show exactly which claimed transfer inequality fails.",
        "hints": [
          "The deleted edge’s unit capacity travels along all three retained edges, each of which already carries its own original unit.",
          "Compute merged and unmerged costs separately before averaging."
        ],
        "probe": {
          "kind": "number",
          "prompt": "For sqrt cost, what is actual merged tree cost divided by original capacity-plan cost?",
          "expected": 1.0606601717798214,
          "feedback": "Every retained edge carries two units, so merged tree cost is 3√2. Original cost is four. The ratio is 3√2/4≈1.06066, below the separate-charge stretch upper bound 6/4=1.5."
        },
        "solution": [
          "Whichever edge is removed, its routed unit traverses all three retained edges. Each also carries its own original unit, giving capacity two everywhere.",
          "Original cost is 4f(1)=4 and merged tree cost is 3f(2)=3√2.",
          "Separate routed charges cost three for the removed edge plus one for each retained original edge, totaling six.",
          "For a fixed adjacent pair, expected tree distance is (1/4)·3+(3/4)·1=3/2. Thus α times original cost is (3/2)·4=6, exactly the separate-charge expectation.",
          "With f(c)=c², original cost remains four but merged tree cost becomes 3·4=12, exceeding the separate charge six. The subadditivity step fails because f(2)=4>2f(1)."
        ],
        "rubric": [
          "Derive each tree-edge capacity from overlapping routed original edges.",
          "Separate actual merged cost from the distortion-based upper charge.",
          "Identify the failed inequality under convex cost, rather than blaming the embedding."
        ],
        "mistake": "Multiplying every original cost by a pairwise stretch does not directly price merged capacities; concavity is the bridge that makes that upper bound valid.",
        "followup": "Repeat with f(c)=c^p for p∈(0,1] and find the exact merged/original ratio as a function of p."
      },
      {
        "id": "tree-auxiliary-vertex",
        "title": "Exact terminal distances do not give a free network map-back",
        "minutes": 18,
        "skill": "Distinguish pair-distance domination from realizability of a shared auxiliary junction.",
        "connection": "The cycle trees use only original vertices. General tree embeddings can introduce a junction that has no original-network location.",
        "prompt": "The original graph is a unit triangle on terminals a,b,c. Two unsplittable unit commodities go from a to b and from a to c, with concave capacity cost f(x)=min{x,1} times edge length. A comparison tree adds auxiliary center o and three edges of length 1/2. Verify that all terminal distances equal the original metric, compute the optimum tree network cost and optimum original network cost, and prove that no cost-nonincreasing map-back can exist for this solution. Explain what separate lemma is needed in a general embedding proof.",
        "hints": [
          "The a–o edge carries two units; the other two star edges carry one each.",
          "In the original graph every used edge carries a positive integer number of unit paths, so its capacity cost is one."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What minimum multiplicative map-back loss is forced by this example?",
          "expected": 1.3333333333333333,
          "feedback": "The auxiliary star costs three halves, while any original path-based network connecting all three terminals uses at least two unit edges and costs at least two. Thus any map-back for this tree solution loses at least 2/(3/2)=4/3, despite exact terminal distances."
        },
        "solution": [
          "Each tree terminal distance is 1/2+1/2=1, exactly the unit-triangle metric, so domination and terminal distortion are perfect.",
          "The tree’s unique demand routes use all three star edges; their loads are two, one, one. Since f is one on every positive integer load, cost is 3/2.",
          "Any original unsplittable routing supports a connected subgraph containing all three terminals, hence at least two unit edges. Each used edge has positive integer load and cost one, so total cost is at least two.",
          "Two direct edges a–b and a–c attain cost two. Therefore the original optimum is two and a cost-nonincreasing map-back from the 1.5-cost tree solution is impossible.",
          "The obstacle is the new shared auxiliary junction, not pairwise metric distortion. The general proof needs a controlled auxiliary-vertex elimination or realization lemma and must include its factor."
        ],
        "rubric": [
          "Check all terminal-pair distances and all routed capacities.",
          "Prove both network optima under the stated path-routing convention.",
          "Explain why pairwise domination alone cannot justify whole-network cost preservation."
        ],
        "mistake": "A junction shared by several routes has a cost effect that cannot be inferred from checking one pair of terminals at a time.",
        "followup": "Replace three terminals by k equidistant terminals and derive the analogous star-versus-original spanning-network ratio."
      }
    ]
  },
  "core-planar-mis": {
    "proof": {
      "goal": "Lose only a small fraction of a fixed optimum by deleting one layer residue, then optimize the surviving bounded-width graph exactly.",
      "scope": "Williamson–Shmoys §10.2. The bounded-outerplanarity/treewidth theorem for the specified planar layers and a valid tree decomposition are explicit inputs. Arbitrary layer definitions are not assumed equivalent.",
      "frames": [
        {
          "title": "Partition the fixed optimum, not the algorithm’s output",
          "question": "Why do the deletion losses add to exactly OPT?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Residue",
              "Optimum vertices lost",
              "Surviving benchmark"
            ],
            "rows": [
              [
                "0",
                "7",
                "13"
              ],
              [
                "1",
                "3",
                "17"
              ],
              [
                "2",
                "6",
                "14"
              ],
              [
                "3",
                "4",
                "16"
              ]
            ],
            "focus": [
              1
            ],
            "note": "Every vertex of one fixed optimum has exactly one layer residue."
          },
          "claim": "Some residue loses at most OPT/k.",
          "explanation": "The algorithm does not know the optimum or these counts. Their sum is OPT, so averaging proves a good shift exists among the k shifts the algorithm explicitly tries.",
          "carry": "One reduced graph retains a large feasible subset of the original optimum."
        },
        {
          "title": "Keep the comparison direction when deleting",
          "question": "Can the reduced optimum contain replacement vertices?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "|O minus deleted residue|",
                "relation": "≥",
                "right": "(1−1/k)OPT",
                "reason": "choose a cheap residue"
              },
              {
                "left": "OPT(reduced graph)",
                "relation": "≥",
                "right": "|O minus deleted residue|",
                "reason": "survivor remains independent"
              }
            ],
            "focus": 1,
            "note": "Deleting vertices cannot add an edge, but reduced optimization may improve on this restricted witness."
          },
          "claim": "The reduced optimum is bounded below, not asserted equal to the surviving part of O.",
          "explanation": "The entire point of exact optimization is that it may choose different vertices. Equality with the restricted original optimum is unnecessary and can be false.",
          "carry": "The approximation proof needs no reconstruction of the unknown O."
        },
        {
          "title": "State the structural theorem before using DP",
          "question": "Which step uses planarity rather than elementary averaging?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Ingredient",
              "Consequence",
              "Role"
            ],
            "rows": [
              [
                "delete periodic outer layers",
                "treewidth O(k)",
                "planar structural theorem"
              ],
              [
                "bag state I",
                "I is independent in bag",
                "local feasibility"
              ],
              [
                "join children",
                "Fleft+Fright−|I|",
                "avoid double-counting bag"
              ]
            ],
            "focus": [
              0,
              2
            ],
            "note": "Averaging works in any graph; bounded width is what makes exact optimization efficient here."
          },
          "claim": "For fixed k, independent-set bag-state DP solves each reduced component exactly.",
          "explanation": "A valid decomposition covers every edge and keeps each vertex’s bags connected. These axioms enforce compatibility between child solutions and explain why a join counts the selected bag only once.",
          "carry": "The reduced optimum can actually be computed without another objective loss."
        },
        {
          "title": "Try all shifts and choose the best feasible output",
          "question": "Why need the algorithm not recognize the analytically good residue?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "best output over k shifts",
                "relation": "≥",
                "right": "output of good shift",
                "reason": "explicit enumeration"
              },
              {
                "left": "output of good shift",
                "relation": "=",
                "right": "OPT(reduced good graph)",
                "reason": "exact DP"
              },
              {
                "left": "best output",
                "relation": "≥",
                "right": "(1−1/k)OPT",
                "reason": "surviving benchmark"
              }
            ],
            "focus": 2,
            "note": "Pick k so 1/k≤ε; structural and DP costs may depend exponentially on k but polynomially on n for fixed ε."
          },
          "claim": "The algorithm is a PTAS for planar maximum independent set.",
          "explanation": "All outputs are independent sets in induced subgraphs and therefore in the original graph. Comparing their actual sizes selects a result at least as good as the unknown good shift.",
          "carry": "Averaging, width, exact DP and shift selection remain separate obligations."
        }
      ]
    },
    "challenges": [
      {
        "id": "planar-weighted-join",
        "title": "Extend the proof to weights and repair a join-node double count",
        "minutes": 18,
        "skill": "Transfer the layering benchmark to additive weights and justify a tree-decomposition recurrence.",
        "connection": "The example counts surviving optimum vertices. The same proof must be rebuilt carefully when vertices contribute different weights.",
        "prompt": "Extend the layer-deletion argument to nonnegative vertex weights. At a join bag containing adjacent vertices u,v with weights 7 and 11, consider state I={u}. The two child optima consistent with I have weights 31 and 29, each counting the selected bag. Derive the parent state value and prove the subtraction rule using the decomposition axioms, including why no edge joins two private child vertices. Explain why I={u,v} must be rejected before any arithmetic.",
        "hints": [
          "The overlap consists exactly of the selected bag vertices, whose contribution is weight seven here.",
          "If an edge joined private vertices from the two children, some bag would have to contain both despite their separated occurrence subtrees."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What value should the join assign to state I={u}?",
          "expected": 53,
          "feedback": "The child values both include u’s weight seven, so the parent value is 31+29−7=53. Subtracting one vertex or the entire bag’s weight gives the wrong weighted objective."
        },
        "solution": [
          "Partition the weight of a fixed optimal independent set by layer residue. The k losses sum to OPTweight, so one is at most OPTweight/k.",
          "The surviving weighted optimum remains a feasible benchmark, and exact weighted bag DP preserves that lower bound.",
          "At a join, the child vertex sets intersect in the bag; a vertex occurring in both child subtrees must occur along their connecting path of bags.",
          "No graph edge can join private vertices of the two children: edge coverage would require a bag containing both, contradicting their separated occurrence subtrees.",
          "Thus compatible independent child solutions combine, with the selected bag counted twice. Subtract w(I)=7, giving 31+29−7=53.",
          "The state selecting both u and v is infeasible because their bag edge is present. An arithmetic recurrence cannot rescue a nonindependent state."
        ],
        "rubric": [
          "Reprove the weighted averaging benchmark using nonnegative additive weights.",
          "Justify child overlap and absence of cross-private edges from decomposition axioms.",
          "Apply the weighted subtraction and reject illegal bag states."
        ],
        "mistake": "Replacing a vertex count by weights requires changing the overlap correction as well as the final comparison; subtracting |I| would overcount heavy bag vertices.",
        "followup": "Allow zero and negative weights. Which can be ignored safely in maximum independent set, and which parts of the averaging argument need explicit reformulation?"
      },
      {
        "id": "planar-two-relative-losses",
        "title": "How accurate must each reduced-instance solver be?",
        "minutes": 16,
        "skill": "Compose a structural loss and an optimization loss without pretending either is exact.",
        "connection": "The example uses exact DP. A proposed faster routine approximates each reduced graph too.",
        "prompt": "Suppose the layer theorem is unchanged, but the reduced-graph solver returns an independent set of size at least (1−η) times its reduced optimum. Derive the whole-graph factor and the smallest integer k certifying a 0.9 approximation when η=0.04. Compare with the naïve k=10 choice and explain why independently budgeting ten percent loss for both steps is invalid. State what feasibility guarantee the reduced solver must retain.",
        "hints": [
          "The second guarantee multiplies the surviving-optimum benchmark.",
          "Solve (1−η)(1−1/k)≥1−ε for k before rounding to an integer."
        ],
        "probe": {
          "kind": "number",
          "prompt": "For η=0.04 and desired factor 0.9, what is the smallest certified k?",
          "expected": 16,
          "feedback": "The combined factor is 0.96(1−1/k). Requiring it at least 0.9 gives 1/k≤0.06/0.96=1/16, so k=16 is minimal. At k=10 the factor is only 0.864."
        },
        "solution": [
          "The good shift retains a feasible benchmark of size at least (1−1/k)OPT.",
          "Its reduced optimum is at least that benchmark; the approximate solver therefore returns at least (1−η)(1−1/k)OPT.",
          "For target 1−ε, solve 1/k≤(ε−η)/(1−η), requiring η<ε for a finite meaningful k.",
          "At ε=0.1 and η=0.04, the bound is k≥16. With k=10, 0.96·0.9=0.864, which does not meet the target.",
          "The reduced solver must return an actual independent set, not just an approximate objective estimate. Otherwise the best-shift comparison need not produce a feasible original solution."
        ],
        "rubric": [
          "Derive the product factor through the surviving benchmark.",
          "Solve and round the k inequality correctly, including η<ε.",
          "Distinguish feasible approximate solutions from numerical objective estimates."
        ],
        "mistake": "Separate relative guarantees compose multiplicatively through their benchmarks; assigning the same full error budget to both steps overspends the target.",
        "followup": "Given a cost model for the reduced solver as a function of k and η, formulate the tradeoff needed to choose them for minimum runtime at a fixed final ε."
      }
    ]
  },
  "core-hardness": {
    "proof": {
      "goal": "Preserve global proof consistency and exact gadget values, then choose error parameters giving a strict target-objective gap.",
      "scope": "Williamson–Shmoys §§16.1 and 16.3. PCP existence and tunable completeness/soundness predicates are deep source inputs. The walk proves the reduction accounting conditional on those promises.",
      "frames": [
        {
          "title": "Enumerate tests while preserving one global proof",
          "question": "Why does logarithmic randomness matter to the reduction size?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Verifier feature",
              "Reduction object",
              "Required property"
            ],
            "rows": [
              [
                "r=O(log n) coins",
                "2ʳ local tests",
                "polynomial count"
              ],
              [
                "constant queries",
                "constant-arity constraints",
                "bounded gadget size"
              ],
              [
                "same proof position",
                "one shared variable",
                "global consistency"
              ]
            ],
            "focus": [
              0,
              2
            ],
            "note": "Local tests may overlap; every occurrence of one proof bit must refer to the same variable."
          },
          "claim": "A polynomial-size constraint instance represents the acceptance rate of one global proof.",
          "explanation": "Soundness maximizes over one proof string. Giving each test unrelated local variables would allow incompatible answers and change that maximization problem.",
          "carry": "The verifier gap is meaningful only for globally consistent assignments."
        },
        {
          "title": "Keep satisfied and unsatisfied gadget baselines",
          "question": "What does a failed source predicate still contribute to the target objective?",
          "diagram": {
            "kind": "table",
            "columns": [
              "Source satisfied fraction z",
              "E3SAT gadget value",
              "2SAT gadget value"
            ],
            "rows": [
              [
                "satisfied predicate",
                "4",
                "11"
              ],
              [
                "unsatisfied predicate",
                "3",
                "10"
              ],
              [
                "M predicates total",
                "M(3+z)",
                "M(10+z)"
              ]
            ],
            "focus": [
              2
            ],
            "note": "Auxiliary gadget choices must attain the stated values and not exceed them in either case."
          },
          "claim": "The target objective is an affine function of source satisfaction, not a simple multiple.",
          "explanation": "Dropping the unsatisfied baseline changes both completeness and soundness numerically. A gadget proof needs a lower-bound construction and an upper bound for every auxiliary assignment.",
          "carry": "Translate the source promises into the target’s own units."
        },
        {
          "title": "Compare the approximation’s YES lower bound with the NO ceiling",
          "question": "Which inequality makes the reduction decide a promise problem?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "YES target optimum",
                "relation": "≥",
                "right": "cM",
                "reason": "completeness and gadget analysis"
              },
              {
                "left": "NO target optimum",
                "relation": "≤",
                "right": "sM",
                "reason": "soundness and gadget analysis"
              },
              {
                "left": "ρcM",
                "relation": ">",
                "right": "sM",
                "reason": "strict separation for max ratio ρ"
              }
            ],
            "focus": 2,
            "note": "The approximation output is feasible, so a NO input can never exceed its true optimum."
          },
          "claim": "A ρ-approximation distinguishes the promises when ρc>s.",
          "explanation": "On YES inputs the approximation guarantees at least ρ times the optimum lower bound. On NO inputs every feasible output is at most the soundness ceiling. Equality does not supply a separating threshold.",
          "carry": "Approximation conventions and a strict numerical gap are both essential."
        },
        {
          "title": "Tune source errors before claiming the target threshold",
          "question": "Why can a ratio above a limiting threshold fail on a coarse finite gap?",
          "diagram": {
            "kind": "table",
            "columns": [
              "E3SAT promises",
              "YES coefficient",
              "NO coefficient"
            ],
            "rows": [
              [
                "source error ε",
                "4−ε",
                "7/2+ε"
              ],
              [
                "ρ=0.88",
                "0.88(4−ε)",
                "compare with 7/2+ε"
              ],
              [
                "needed error",
                "ε<1/94",
                "strict inequality"
              ]
            ],
            "focus": [
              2
            ],
            "note": "The limiting 7/8 threshold is approached only after choosing sufficiently small source error."
          },
          "claim": "Select the PCP error and gadget parameters to enforce the desired strict gap.",
          "explanation": "The deep PCP input allows a family with suitable constant errors. A single numerical illustration with larger errors does not prove every ratio above the limiting barrier is excluded.",
          "carry": "Size, consistency, gadget values and parameter choice jointly support hardness."
        }
      ]
    },
    "challenges": [
      {
        "id": "hardness-finite-error-threshold",
        "title": "How small must the source error actually be?",
        "minutes": 18,
        "skill": "Derive a strict finite hardness gap rather than appeal to its limiting ratio.",
        "connection": "The example’s 98-versus-51 promise fails to separate ratio 0.88. This task solves for the source accuracy needed to repair that argument.",
        "prompt": "Assume a source promise with M predicates, YES satisfiable fraction at least 1−ε and NO fraction at most 1/2+ε. A four-clause gadget yields value four for a satisfied predicate and three otherwise. For a maximization algorithm with ratio 22/25, derive the exact allowable ε range and explain why its endpoint is excluded. Then take M=10000 and ε=0.01 and compute the guaranteed YES output versus the NO ceiling, retaining all baseline terms.",
        "hints": [
          "The target coefficients are 4−ε and 7/2+ε.",
          "Require (22/25)(4−ε)>7/2+ε before substituting numerical errors."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the supremum of allowable positive ε values for this strict-gap argument?",
          "expected": 0.010638297872340425,
          "feedback": "The inequality becomes 88/25−(22/25)ε>7/2+ε, or 1/50>(47/25)ε. Thus ε<1/94. At the endpoint the lower and upper thresholds coincide, so the supremum is not itself allowed."
        },
        "solution": [
          "The YES target value is at least [4(1−ε)+3ε]M=(4−ε)M.",
          "The NO target value is at most [4(1/2+ε)+3(1/2−ε)]M=(7/2+ε)M.",
          "A ratio 22/25 distinguishes only if (22/25)(4−ε)>7/2+ε, which simplifies to ε<1/94.",
          "At ε=1/94 equality holds, so this worst-case promise accounting provides no separating threshold.",
          "For M=10000 and ε=0.01, YES optimum is at least 39900, algorithm output at least 35112, and NO optimum at most 35100. The strict gap is twelve clauses.",
          "These calculations assume the promised source family and correct gadget proof; they do not construct a PCP from scratch."
        ],
        "rubric": [
          "Include the unsatisfied-predicate baseline in both target coefficients.",
          "Solve the rational strict inequality and handle its endpoint correctly.",
          "Verify the finite integer thresholds and state the theorem inputs."
        ],
        "mistake": "A ratio above the limiting 7/8 barrier is insufficient unless the actual completeness and soundness errors are small enough.",
        "followup": "Derive the allowable source error symbolically for every ρ>7/8, and explain its behavior as ρ approaches 7/8 from above."
      },
      {
        "id": "hardness-complement-objective",
        "title": "Equivalent optima can have inequivalent approximation ratios",
        "minutes": 18,
        "skill": "Translate approximation conventions under an additive objective complement.",
        "connection": "The gadget example includes unavoidable baseline clauses. Such additive shifts are harmless for exact optimization but can dominate an approximation ratio.",
        "prompt": "A constraint instance has M clauses. Let S be the number satisfied and U=M−S the number unsatisfied. Show that a maximization guarantee S_alg≥ρS_opt yields only an additive-form bound for U_alg, and derive its relative minimization factor in terms of U_opt/M. Evaluate M=10000, U_opt=200 and ρ=0.88. Then give a family with U_opt=1 showing why no fixed minimization factor follows uniformly from the maximization guarantee alone. Distinguish this limitation of a guarantee from constructing an algorithm that always realizes the worst permitted value.",
        "hints": [
          "Substitute S_opt=M−U_opt before taking complements.",
          "The additive term (1−ρ)M does not shrink with U_opt."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What relative upper factor on U follows for the numerical case?",
          "expected": 6.88,
          "feedback": "The guarantee permits U_alg≤M−0.88(M−200)=1376. Dividing by U_opt=200 gives 6.88, rather than 1/0.88. Additive complements do not preserve multiplicative approximation ratios."
        },
        "solution": [
          "Substitution gives U_alg=M−S_alg≤M−ρ(M−U_opt)=(1−ρ)M+ρU_opt.",
          "For U_opt>0 this is U_alg/U_opt≤ρ+(1−ρ)M/U_opt. The factor depends on the optimum’s scale relative to M.",
          "At M=10000,U_opt=200,ρ=0.88, the permitted unsatisfied count is 1200+176=1376 and the factor is 6.88.",
          "When U_opt=1 and M grows, the resulting factor bound is ρ+(1−ρ)M, which is unbounded. Such instances exist: take one contradictory unit-clause pair x,¬x and M−2 positive unit clauses on distinct fresh variables. Every number of additional failures from zero to M−2 is realizable by choosing the fresh bits.",
          "For U_opt=0 a finite-factor minimization guarantee would require U_alg=0, whereas a fixed maximization ratio below one permits a positive unsatisfied count.",
          "The argument describes what follows from the stated guarantee, not the actual behavior of every algorithm meeting it. A stronger algorithm could perform much better on this family."
        ],
        "rubric": [
          "Translate the complemented objective before dividing by U_opt.",
          "Calculate the finite factor and exhibit an unbounded-scale family.",
          "Handle U_opt=0 and distinguish a weak guarantee from a proven bad output."
        ],
        "mistake": "Taking a reciprocal ratio is appropriate for neither an additive shift nor an objective complement; only positive multiplicative rescaling preserves the same approximation ratio directly.",
        "followup": "For a gadget objective aM+bS with a,b>0, derive the exact target ratio produced by a source ρ guarantee and analyze how a large baseline a dilutes the gap."
      }
    ]
  }
};
