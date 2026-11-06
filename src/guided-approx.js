/* Original guided teaching notes for the assigned Williamson–Shmoys sections. */
const GUIDED_APPROX = {
  "core-knapsack": {
    "intro": {
      "title": "Compress the numbers, not the feasible sets",
      "paragraphs": [
        "A knapsack algorithm must distinguish two obstacles. Choosing the right subset is combinatorial; large binary-encoded profits also make a profit-indexed dynamic program enormous. A running time polynomial in the numerical profit can be exponential in the number of input bits. Scaling attacks this second obstacle without changing which subsets satisfy the weight capacity.",
        "Imagine allowing a small accounting error on every chosen item. If the error per item is at most K, a subset loses at most nK. The useful question is therefore not whether rounding is exact, but whether the total loss is small compared with the unknown optimum. A computable lower bound on OPT supplies the scale."
      ],
      "question": {
        "prompt": "Why does a dynamic program with running time polynomial in a binary-encoded capacity fail to establish an FPTAS?",
        "options": [
          "The numerical capacity may be exponential in its encoding length.",
          "A dynamic program cannot return a feasible subset.",
          "Every approximation must round weights.",
          "Binary inputs prevent exact arithmetic."
        ],
        "answer": 0,
        "feedback": [
          "Correct: input length counts bits, not the magnitude represented by those bits.",
          "Feasibility is compatible with dynamic programming; the issue is its number of states.",
          "Profit scaling keeps the original weights and original feasibility constraints.",
          "Integer sums still have polynomial bit length; enormous state spaces are the obstacle."
        ]
      }
    },
    "mechanism": {
      "title": "Pay a bounded loss for each item",
      "definitions": [
        {
          "term": "Pmax",
          "meaning": "Largest profit of an individually feasible item after overweight items are discarded."
        },
        {
          "term": "Scaling unit K",
          "meaning": "Set K=εPmax/n, using the requested relative error ε."
        },
        {
          "term": "Scaled profit",
          "meaning": "The integer p′ᵢ=⌊pᵢ/K⌋; the original item weight is unchanged."
        }
      ],
      "paragraphs": [
        "For each total scaled profit, store the minimum original weight achieving it. Processing an item either leaves a state unchanged or adds its weight and scaled profit. Returning the largest scaled-profit state whose weight fits the capacity produces an originally feasible subset.",
        "Every remaining profit is at most Pmax, so p′ᵢ≤n/ε. There are at most n²/ε total-profit states. Meanwhile Pmax≤OPT, which turns the additive rounding loss nK into a relative εOPT loss. Neither comparison requires knowing the optimal subset."
      ],
      "formula": "K∑ᵢ∈O p′ᵢ ≥ OPT−nK ≥ (1−ε)OPT",
      "question": {
        "prompt": "With n=4, ε=0.2 and Pmax=20, what scaling unit does the proof prescribe?",
        "options": [
          "K=4",
          "K=1",
          "K=20",
          "K=0.01"
        ],
        "answer": 1,
        "feedback": [
          "This omits division by the number of items and overstates the loss allowance.",
          "Correct: 0.2×20/4=1, so the total rounding allowance is nK=4.",
          "This discards the requested accuracy parameter and gives an uncontrolled relative error.",
          "This is not εPmax/n; much finer rounding would increase the state space unnecessarily."
        ]
      }
    },
    "example": {
      "title": "Trace a scaled-profit table",
      "setup": "Capacity is 5. Four items have (weight,profit) equal to A=(2,4.4), B=(3,5.7), C=(4,7.8), D=(5,10). Take ε=0.2, so Pmax=10 and K=0.5. Profits are displayed in tenths; multiplying them all by ten gives an equivalent integer-profit instance.",
      "table": {
        "headers": [
          "Item",
          "Original profit",
          "Scaled profit"
        ],
        "rows": [
          [
            "A",
            "4.4",
            "8"
          ],
          [
            "B",
            "5.7",
            "11"
          ],
          [
            "C",
            "7.8",
            "15"
          ],
          [
            "D",
            "10",
            "20"
          ]
        ]
      },
      "steps": [
        {
          "title": "List feasible competitors",
          "explanation": "The only feasible two-item subset is A+B, with weight 5 and profit 10.1. The best singleton is D, with profit 10."
        },
        {
          "title": "Optimize the rounded objective",
          "explanation": "A+B has scaled profit 19, whereas D has scaled profit 20. The rounded dynamic program therefore chooses D."
        },
        {
          "title": "Measure the actual loss",
          "explanation": "The output profit is 10 and OPT=10.1, a loss of 0.1. The example shows that rounded optimization can change the selected subset while retaining a strong guarantee."
        },
        {
          "title": "Compare with the theorem",
          "explanation": "The coarse proof permits loss at most nK=2, and εOPT=2.02. The observed loss is smaller; the theorem is a worst-case guarantee, not an exact prediction."
        }
      ],
      "conclusion": "The dynamic program optimizes the scaled objective exactly while approximating the original objective. This finite calculation illustrates the loss accounting rather than proving the general bound.",
      "question": {
        "prompt": "Which subset does the scaled objective select in this example?",
        "options": [
          "A+B, because its original profit is largest.",
          "C, because it has the greatest profit-to-weight ratio.",
          "D, because its scaled profit is 20 rather than 19.",
          "All four items, because scaling relaxes capacity."
        ],
        "answer": 2,
        "feedback": [
          "That is the original optimum, but rounding changes the objective being optimized.",
          "This is not a density-greedy algorithm; the DP uses total scaled profits.",
          "Correct: the DP compares scaled profit, and D remains feasible at original weight 5.",
          "Capacity is never relaxed, so selecting weight 14 would be infeasible."
        ]
      }
    },
    "proof": {
      "title": "Compare through the optimal rounded state",
      "paragraphs": [
        "The decisive comparison is between the algorithm and the original optimum measured in the rounded objective. Comparing their original objectives directly would assume the result we are trying to establish."
      ],
      "steps": [
        {
          "claim": "Each feasible item satisfies Pmax≤OPT and pᵢ≤Pmax.",
          "why": "A best feasible singleton is itself a valid candidate, while Pmax dominates every individual remaining profit."
        },
        {
          "claim": "The optimal subset O is a feasible candidate for the rounded DP.",
          "why": "Rounding changes profits only, so the original capacity test still accepts O."
        },
        {
          "claim": "The returned subset A has ∑A p′ᵢ≥∑O p′ᵢ.",
          "why": "The DP finds the best scaled objective over all original feasible subsets."
        },
        {
          "claim": "Original profit(A)≥K∑A p′ᵢ≥OPT−nK.",
          "why": "Flooring loses less than K per item, and no subset contains more than n items."
        }
      ],
      "question": {
        "prompt": "Which step transfers optimality of the DP into a statement about the original optimum?",
        "options": [
          "The rounded and original optimum must choose the same items.",
          "Every floor operation has zero error.",
          "The original optimum has exactly n items.",
          "O remains feasible, so its rounded objective is a valid DP benchmark."
        ],
        "answer": 3,
        "feedback": [
          "The worked example already shows that the optimal selected subsets can differ.",
          "Flooring can lose positive profit; the proof explicitly budgets that loss.",
          "The proof only uses the upper bound |O|≤n, not equality.",
          "Correct: feasibility lets us compare rounded objective values without identifying O."
        ]
      }
    },
    "boundary": {
      "title": "Check the edge cases before invoking the bound",
      "paragraphs": [
        "An approximation scheme includes preprocessing and a bit-complexity argument. It is not enough to quote a loss inequality for a convenient nonempty instance."
      ],
      "cases": [
        {
          "label": "Every item is overweight",
          "setting": "Every item has weight strictly greater than the capacity.",
          "question": {
            "prompt": "What should the algorithm return?",
            "options": [
              "The empty subset, which is optimal.",
              "An arbitrary item to define Pmax.",
              "The lightest overweight item.",
              "A negative scaling unit."
            ],
            "answer": 0,
            "feedback": [
              "Correct: no nonempty feasible subset exists, so scaling is unnecessary.",
              "An infeasible item cannot supply the lower-bound comparison Pmax≤OPT.",
              "The weight constraint remains binding even for an approximation algorithm.",
              "There is no positive feasible profit to scale; handle the case directly."
            ]
          }
        },
        {
          "label": "A slow dependence on accuracy",
          "setting": "A proposed scheme runs in time n^(1/ε).",
          "question": {
            "prompt": "What classification follows from that running time?",
            "options": [
              "It is automatically an FPTAS.",
              "It may be a PTAS, but that bound is not an FPTAS bound.",
              "It cannot be polynomial for fixed ε.",
              "It is pseudo-polynomial in the capacity."
            ],
            "answer": 1,
            "feedback": [
              "An FPTAS requires polynomial dependence on both input size and 1/ε.",
              "Correct: fixing ε makes the exponent constant, but joint polynomial dependence is absent.",
              "For every fixed positive ε, the displayed exponent is a constant.",
              "The expression involves n and ε, not the numerical magnitude of capacity."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Scale profits while preserving original weights.",
        "Use Pmax as a computable lower bound on OPT.",
        "Compare the algorithm with O in the rounded objective before translating back.",
        "Count states and arithmetic bits as well as bounding error."
      ],
      "retrieval": "Rebuild the scaling proof for arbitrary ε, and identify separately the feasible-set argument, the rounding-loss inequality and the polynomial-state bound."
    },
    "sourceNote": "Develops Williamson–Shmoys §3.1. The example is original; the assigned source supplies the complete algorithmic treatment and theorem."
  },
  "core-scheduling-scheme": {
    "intro": {
      "title": "Remember job types instead of job identities",
      "paragraphs": [
        "A makespan schedule on identical machines assigns each job to one machine and minimizes the largest machine load. Greedy placement gives a useful constant factor, but a PTAS must exploit the fact that only a few genuinely large jobs can fit on a machine near the optimum.",
        "The compression idea has two layers. Ignore small differences between large processing times by rounding them upward. Then describe a machine by the numbers of jobs of each rounded size that it receives. With fixed accuracy, the number of possible descriptions is bounded independently of the number of jobs."
      ],
      "question": {
        "prompt": "Why can large-job configurations be a bounded family when ε is fixed?",
        "options": [
          "All jobs become identical after sorting.",
          "Each machine can hold only O(1/ε) large jobs, drawn from boundedly many rounded types.",
          "The number of machines is always a fixed constant.",
          "Small jobs have zero processing time."
        ],
        "answer": 1,
        "feedback": [
          "Sorting gives an order, but does not erase the different processing requirements.",
          "Correct: bounded counts and bounded types replace arbitrary item identities.",
          "The number of machines may be part of the input; the compression does not fix it.",
          "Small jobs retain positive size and must be inserted and analyzed later."
        ]
      }
    },
    "mechanism": {
      "title": "Test a target makespan with controlled slack",
      "definitions": [
        {
          "term": "Target T",
          "meaning": "A candidate bound on the optimal makespan, to be searched or guessed."
        },
        {
          "term": "Large job",
          "meaning": "A job of processing time above εT in the current feasibility test."
        },
        {
          "term": "Configuration",
          "meaning": "A vector recording how many jobs of each rounded large type occupy one machine."
        }
      ],
      "paragraphs": [
        "Use rounding granularity ε²T for large processing times. A machine whose original large-job load was at most T contains at most 1/ε large jobs. Rounding every one up adds at most εT to its load. This explains why upward rounding can preserve a useful near-feasible comparison.",
        "After placing the large jobs, insert the small jobs on least-loaded machines. If an inserted job is the last one to finish, its own size is at most εT. Its start time is controlled by the average assigned load. Combine this with the rounded large-load bound, then choose the internal accuracy parameter to meet the requested final ε."
      ],
      "formula": "large-job rounding increase per machine ≤ (1/ε)·ε²T = εT",
      "question": {
        "prompt": "For T=100 and internal ε=0.1, what upper bound does this counting argument give on rounding increase per machine?",
        "options": [
          "1",
          "100",
          "10",
          "1000"
        ],
        "answer": 2,
        "feedback": [
          "One is the per-job granularity ε²T, not the sum over a machine.",
          "This ignores the small internal accuracy parameter in the additive increase.",
          "Correct: at most ten large jobs each gain at most one time unit.",
          "This multiplies by too many possible jobs; large-job capacity bounds their count."
        ]
      }
    },
    "example": {
      "title": "From actual lengths to a machine description",
      "setup": "Take target T=100 and internal ε=0.1. Use rounding unit ε²T=1. Consider one machine with large jobs of lengths 26.2, 24.4 and 38.1.",
      "table": {
        "headers": [
          "Job",
          "Original size",
          "Rounded size"
        ],
        "rows": [
          [
            "A",
            "26.2",
            "27"
          ],
          [
            "B",
            "24.4",
            "25"
          ],
          [
            "C",
            "38.1",
            "39"
          ]
        ]
      },
      "steps": [
        {
          "title": "Classify the jobs",
          "explanation": "Every displayed job exceeds εT=10, so all three enter the large-job configuration problem."
        },
        {
          "title": "Compare loads",
          "explanation": "The original load is 88.7 and the rounded load is 91. The actual increase is 2.3, below the uniform upper bound εT=10."
        },
        {
          "title": "Forget item identities",
          "explanation": "This machine is represented by one job of type 25, one of type 27 and one of type 39. Equivalent jobs elsewhere can use the same configuration description."
        },
        {
          "title": "Insert a small job",
          "explanation": "A small job of length 8 is inserted by the least-load rule. Its start time is analyzed using all machine loads, not merely the displayed machine. Its final-job overshoot is at most 10."
        }
      ],
      "conclusion": "This example demonstrates upward rounding and type compression. It is not a feasibility certificate for a whole input until all large-job counts and machine counts are satisfied.",
      "question": {
        "prompt": "What is the rounded load of the displayed machine?",
        "options": [
          "88.7",
          "90",
          "100",
          "91"
        ],
        "answer": 3,
        "feedback": [
          "That is the original load, before configuration compression.",
          "The three individual ceiling operations do not sum to 90.",
          "T is the target bound, not the rounded sum of these three jobs.",
          "Correct: 27+25+39=91 after each processing time is rounded upward."
        ]
      }
    },
    "proof": {
      "title": "Keep feasibility and approximation separate",
      "paragraphs": [
        "A target test must be justified in both directions needed by the search. If a T-schedule exists, the rounded large-job description must fit the permitted slack. The algorithm then constructs a schedule with a controlled enlarged makespan, rather than proving that every rounded input fits exactly into T."
      ],
      "steps": [
        {
          "claim": "There are at most O(1/ε²) rounded large sizes up to T plus rounding slack.",
          "why": "The relevant size interval is divided into steps of ε²T; for fixed ε its number of types does not depend on n."
        },
        {
          "claim": "An optimal T-schedule induces feasible counts of these types.",
          "why": "Round its jobs machine by machine and permit the proved additive large-load slack."
        },
        {
          "claim": "A configuration DP or enumeration assigns all rounded type counts to machines.",
          "why": "Its states track counts, not arbitrary partitions of the named jobs; fixed ε keeps the number of types bounded."
        },
        {
          "claim": "Small-job insertion adds only a controlled last-job term.",
          "why": "The least-loaded machine has load at most the current average, while each remaining job is at most εT."
        }
      ],
      "question": {
        "prompt": "Why is it legitimate to enumerate rounded machine configurations?",
        "options": [
          "For fixed ε, their descriptions use boundedly many types and bounded counts.",
          "Every assignment of named jobs is enumerated in constant time.",
          "The dynamic program can ignore how many jobs of each type exist.",
          "Upward rounding reduces the target makespan."
        ],
        "answer": 0,
        "feedback": [
          "Correct: the enumeration is over compressed descriptions, not all named-job partitions.",
          "Named-job partitions remain exponentially numerous; compression is the essential step.",
          "Type counts must be satisfied globally, or jobs could be omitted or duplicated.",
          "Upward rounding increases lengths and requires explicitly budgeted slack."
        ]
      }
    },
    "boundary": {
      "title": "The model matters as much as the rounding",
      "paragraphs": [
        "The identical-machine assumption supports a common processing-time type for each job and a common average-load bound. Changing the machine model requires a new argument."
      ],
      "cases": [
        {
          "label": "A job longer than T",
          "setting": "The target test receives a job of size 125 when T=100.",
          "question": {
            "prompt": "What does this imply about exact feasibility at makespan T?",
            "options": [
              "The job becomes small after rounding.",
              "No T-schedule exists.",
              "Two machines may process half each in this model.",
              "A configuration automatically shortens it to T."
            ],
            "answer": 1,
            "feedback": [
              "Its length exceeds both the large threshold and the target.",
              "Correct: a nonpreemptive job must fit entirely on one machine.",
              "The assigned problem does not permit splitting a job across machines.",
              "Upward rounding never shortens an infeasible long job."
            ]
          }
        },
        {
          "label": "Unrelated machines",
          "setting": "A job takes time 1 on one machine and time 100 on another.",
          "question": {
            "prompt": "Which part of the identical-machine proof can no longer be reused unchanged?",
            "options": [
              "The fact that a schedule has a largest completion time.",
              "The nonnegativity of processing times.",
              "A single common rounded size type for that job.",
              "The ability to write down the input in binary."
            ],
            "answer": 2,
            "feedback": [
              "Makespan is still defined for unrelated machines; the compression argument is what fails.",
              "Processing times can remain nonnegative in both models.",
              "Correct: placement changes the processing time, so common type counts no longer describe feasibility.",
              "Binary encoding is compatible with either model and is not the central obstruction."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Separate large and small jobs relative to a proposed T.",
        "Round large jobs upward and explicitly pay for the increase.",
        "Solve a bounded-type counting problem before inserting small jobs.",
        "Distinguish fixed-ε polynomial time from an FPTAS bound."
      ],
      "retrieval": "Starting from a hypothetical T-schedule, derive a feasible rounded configuration solution and then explain the last-small-job bound without assuming that greedy placement is optimal."
    },
    "sourceNote": "Develops Williamson–Shmoys §3.2. A complete PTAS also needs the source’s target-search and configuration implementation details."
  },
  "core-bin-scheme": {
    "intro": {
      "title": "Approximate the large-scale count of bins",
      "paragraphs": [
        "Bin packing has a deceptively weak volume lower bound: total size at most two does not mean two unit bins suffice. Three objects of size 0.6 already require three bins. A useful approximation must control how sizes interact, not just add them.",
        "An asymptotic scheme isolates the few difficult large size types through grouping. It then tolerates a small number of extra bins whose relative importance disappears as OPT grows. This additive allowance is essential: an asymptotic guarantee does not promise a nearly exact answer on two-bin instances."
      ],
      "question": {
        "prompt": "Why does a bound of (1+ε)OPT+C not imply an absolute approximation ratio 1+ε?",
        "options": [
          "Bin counts need not be integers.",
          "The output may violate capacity by C.",
          "The additive constant C can dominate when OPT is small.",
          "The optimum is allowed to discard large items."
        ],
        "answer": 2,
        "feedback": [
          "Bin counts are integers; this fact strengthens small-instance hardness arguments.",
          "The additive term counts additional feasible bins, not capacity violations.",
          "Correct: dividing by OPT leaves the extra term C/OPT.",
          "Every input item must be packed in the optimum and in the output."
        ]
      }
    },
    "mechanism": {
      "title": "Round a group using an earlier group as its certificate",
      "definitions": [
        {
          "term": "Large item",
          "meaning": "An item whose size is at least the chosen internal threshold ε."
        },
        {
          "term": "Linear grouping",
          "meaning": "Sort large items from largest to smallest and partition them into equal-cardinality blocks, with a possible shorter final block."
        },
        {
          "term": "Asymptotic guarantee",
          "meaning": "A bound with a multiplicative term close to one plus an additive number of bins."
        }
      ],
      "paragraphs": [
        "Rounding every item upward independently can destroy useful packing relationships. Linear grouping instead rounds an entire block to the size of its largest item, and compares the rounded block with the preceding block of larger original items. The largest block is set aside because it has no preceding block to pay for it.",
        "After this shift comparison, the remaining rounded instance has few distinct sizes and can be handled by configurations. Small items are inserted afterward. Opening a new bin for an item below ε means earlier eligible bins have load above 1−ε, so volume controls their number."
      ],
      "formula": "number of nearly full bins < total size/(1−ε)",
      "question": {
        "prompt": "What makes the adjacent-block comparison valid?",
        "options": [
          "Every block has total size exactly one.",
          "Rounding decreases all item sizes.",
          "The original optimum is known to the algorithm.",
          "Every item in the preceding sorted block is at least as large as the next block’s rounded size."
        ],
        "answer": 3,
        "feedback": [
          "Grouping controls cardinalities; it does not make each block a feasible bin.",
          "The scheme rounds sizes upward, making the comparison nontrivial.",
          "OPT is a proof benchmark, not a packing supplied to the algorithm.",
          "Correct: a one-to-one shift replaces rounded items by no-smaller original witnesses."
        ]
      }
    },
    "example": {
      "title": "See the shift between two blocks",
      "setup": "Sort six large sizes 0.62, 0.60, 0.48, 0.46, 0.34, 0.31 and make blocks of two. Set aside the first block. Round each later block to its maximum.",
      "table": {
        "headers": [
          "Block",
          "Original items",
          "Rounded items"
        ],
        "rows": [
          [
            "1: set aside",
            "0.62, 0.60",
            "handled separately"
          ],
          [
            "2",
            "0.48, 0.46",
            "0.48, 0.48"
          ],
          [
            "3",
            "0.34, 0.31",
            "0.34, 0.34"
          ]
        ]
      },
      "steps": [
        {
          "title": "Match block 2 backward",
          "explanation": "Its rounded 0.48 items can be matched to the original 0.62 and 0.60 items, both of which are at least 0.48."
        },
        {
          "title": "Match block 3 backward",
          "explanation": "Its rounded 0.34 items can be matched to original sizes 0.48 and 0.46. The comparison uses sizes, not a claim that blocks are bins."
        },
        {
          "title": "Bound a small-item phase",
          "explanation": "If the small threshold is 0.1 and a new bin is opened, the earlier bins used by first-fit insertion have load above 0.9. Ten such bins contain total size above 9."
        },
        {
          "title": "Keep the additive accounting",
          "explanation": "The set-aside block may require its own bins. Its cost must appear in the total bound; suppressing it would turn an asymptotic statement into an unsupported absolute one."
        }
      ],
      "conclusion": "The shift provides a benchmark for the rounded instance. The actual algorithm must choose the block size according to ε and the number of large items, rather than fixing blocks of two on every input.",
      "question": {
        "prompt": "To which original sizes can the two rounded 0.34 items be charged in the adjacent-block argument?",
        "options": [
          "0.48 and 0.46",
          "0.34 and 0.31",
          "0.62 and 0.31",
          "Two copies of 0.31"
        ],
        "answer": 0,
        "feedback": [
          "Correct: the entire preceding block dominates the rounded size of the next block.",
          "The 0.31 original item is smaller than the new rounded size and cannot certify that rounding.",
          "This mixes blocks and includes an item too small for the proposed comparison.",
          "A 0.31 item cannot dominate an item of size 0.34."
        ]
      }
    },
    "proof": {
      "title": "Prove a packing bound with every bin accounted for",
      "paragraphs": [
        "There are three charges: the first block, the compressed rounded instance, and bins opened while inserting small items. Treating these as separate terms makes the final additive constant visible."
      ],
      "steps": [
        {
          "claim": "The shifted rounded large instance fits wherever the corresponding earlier original items fit.",
          "why": "Replacing an item by a no-larger item cannot break a unit-capacity packing."
        },
        {
          "claim": "The rounded problem has a bounded number of size types for fixed ε.",
          "why": "There is one type per retained block, and the grouping parameter controls the number of blocks."
        },
        {
          "claim": "The separately packed first block is explicitly charged.",
          "why": "It was removed to make the shift possible, but its items still belong to the original input."
        },
        {
          "claim": "Small-item bins are controlled by near-fullness and total volume.",
          "why": "A new small item would have fit in a bin with sufficient slack; failure to fit certifies large existing load."
        }
      ],
      "question": {
        "prompt": "Which statement would leave a genuine hole in the proof?",
        "options": [
          "Using total volume as a lower bound on OPT.",
          "Ignoring the bins that contain the first, set-aside block.",
          "Packing smaller items in positions occupied by larger items.",
          "Treating the accuracy parameter as fixed in a PTAS runtime."
        ],
        "answer": 1,
        "feedback": [
          "Volume is a valid lower bound, though it is not a complete feasibility test.",
          "Correct: those items must still be packed, so their cost cannot disappear.",
          "This replacement preserves capacity and is the shift argument’s core monotonicity.",
          "Fixed-accuracy polynomial time is exactly the relevant scheme convention."
        ]
      }
    },
    "boundary": {
      "title": "Separate asymptotic success from exact two-bin decisions",
      "paragraphs": [
        "A numerical approximation bound and a decision reduction have different quantifiers. Always state which objective scale makes an additive term negligible."
      ],
      "cases": [
        {
          "label": "Three medium items",
          "setting": "The input consists of three items, each of size 0.6.",
          "question": {
            "prompt": "What is OPT?",
            "options": [
              "2",
              "1.8",
              "3",
              "1"
            ],
            "answer": 2,
            "feedback": [
              "The total size is below two, but pairwise incompatibility prevents two bins.",
              "Total size is a lower bound, not an integer feasible bin count.",
              "Correct: no bin can hold two items of total size 1.2.",
              "One bin cannot hold even two of the three items."
            ]
          }
        },
        {
          "label": "An absolute ratio below 3/2",
          "setting": "A partition-style instance has total size 2 and OPT=2 on YES cases.",
          "question": {
            "prompt": "What must an absolute ρ-approximation with ρ<3/2 return on a YES case?",
            "options": [
              "At most three bins, with equality allowed.",
              "One bin.",
              "A fractional packing using 2ρ bins.",
              "Exactly two bins."
            ],
            "answer": 3,
            "feedback": [
              "A count of three has ratio 3/2 and violates the strict guarantee.",
              "Total size two makes a single unit bin impossible.",
              "The required output is an integral packing, so integer thresholds matter.",
              "Correct: it must return an integer count below three and cannot beat the optimum of two."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Volume alone does not certify a packing.",
        "Sorted adjacent blocks justify upward rounding through domination.",
        "Keep the set-aside block and small-item bins in the accounting.",
        "An additive constant distinguishes asymptotic from absolute approximation."
      ],
      "retrieval": "Draw the adjacent-block injection and explain why its first block needs a separate charge. Then contrast the resulting scheme with an absolute ratio below 3/2 on two-bin instances."
    },
    "sourceNote": "Develops Williamson–Shmoys §3.3. The original numerical example illustrates linear grouping; the source supplies its full parameter choices and configuration analysis."
  },
  "core-sat-random": {
    "intro": {
      "title": "Turn random truth values into a deterministic guarantee",
      "paragraphs": [
        "A random assignment is useful even when the desired output is deterministic. First calculate the expected total weight of satisfied clauses. Then expose the variables one at a time while refusing to decrease that expectation. At the end there is no randomness left, and the conditional expectation is the actual objective value.",
        "The calculation has two distinct uses of probability. Independent variable choices let us multiply literal-failure probabilities inside a normalized clause. Linearity then lets us add contributions across clauses, even though different clauses share variables and their satisfaction events can be strongly dependent."
      ],
      "question": {
        "prompt": "Which property permits adding expected clause weights when clauses share variables?",
        "options": [
          "Mutual independence of all clause-satisfaction events.",
          "Equal weights for all clauses.",
          "A promise that every clause is satisfiable simultaneously.",
          "Linearity of expectation."
        ],
        "answer": 3,
        "feedback": [
          "Shared variables generally destroy that independence, and the argument does not need it.",
          "Weights simply multiply each indicator’s expectation; they need not be equal.",
          "The bound compares with total weight without requiring a satisfying assignment for every clause.",
          "Correct: expectation is additive regardless of dependence between summands."
        ]
      }
    },
    "mechanism": {
      "title": "Preserve the conditional objective",
      "definitions": [
        {
          "term": "Clause indicator",
          "meaning": "A random variable equal to one when the clause is satisfied and zero otherwise."
        },
        {
          "term": "Normalized clause",
          "meaning": "A clause with no repeated variable and no pair of complementary literals."
        },
        {
          "term": "Conditional expectation",
          "meaning": "Expected final objective given the variables already fixed."
        }
      ],
      "paragraphs": [
        "A fair independent assignment fails a normalized k-literal clause only when all k literals are false, with probability 2^−k. For nonuniform marginals, multiply 1−yᵢ for positive literals and yᵢ for negative literals. A literal already fixed true makes failure probability zero.",
        "Before fixing the next fair variable, the current conditional expectation is the mean of the expectations of its two branches. At least one branch is no smaller than that mean. Recompute the clause contributions efficiently and select such a branch. This is an algorithmic invariant, not a probabilistic assertion about most assignments."
      ],
      "formula": "E[X | prefix] = ½E[X | prefix,x=0]+½E[X | prefix,x=1]",
      "question": {
        "prompt": "What is the failure probability of a normalized clause with three distinct literals under fair independent variables?",
        "options": [
          "1/8",
          "3/8",
          "1/2",
          "0"
        ],
        "answer": 0,
        "feedback": [
          "Correct: all three distinct literals must simultaneously take their false values.",
          "Three literals do not produce three disjoint failure events; failure requires their intersection.",
          "That is the failure probability of one literal, not three independent literals.",
          "A clause can still fail; only a tautology has zero failure probability."
        ]
      }
    },
    "example": {
      "title": "Follow a weighted conditional-expectation decision",
      "setup": "Let X be the satisfied weight of clauses (x) with weight 3, (¬x∨y) with weight 2, and (¬y∨z) with weight 4. Start with fair independent x,y,z.",
      "table": {
        "headers": [
          "Clause",
          "Satisfaction probability",
          "Expected weight"
        ],
        "rows": [
          [
            "x",
            "1/2",
            "1.5"
          ],
          [
            "¬x∨y",
            "3/4",
            "1.5"
          ],
          [
            "¬y∨z",
            "3/4",
            "3"
          ]
        ]
      },
      "steps": [
        {
          "title": "Add the initial contributions",
          "explanation": "The initial expectation is 1.5+1.5+3=6, without assuming independent clause indicators."
        },
        {
          "title": "Compare the x branches",
          "explanation": "Fixing x=1 gives expectation 3+1+3=7. Fixing x=0 gives 0+2+3=5. Their average is 6, so choose x=1."
        },
        {
          "title": "Compare the y branches",
          "explanation": "With x=1, either y=0 or y=1 leaves expectation 7. A tie is allowed; choose y=1."
        },
        {
          "title": "Finish the assignment",
          "explanation": "Then choose z=1. All three clauses are satisfied, giving actual weight 9, which is at least the preserved expectation 6."
        }
      ],
      "conclusion": "The final value can exceed the initial expectation substantially. The method guarantees a lower bound, not an exact forecast of the final assignment’s quality.",
      "question": {
        "prompt": "What is E[X | x=1] before y and z are fixed?",
        "options": [
          "6",
          "7",
          "5",
          "9"
        ],
        "answer": 1,
        "feedback": [
          "Six is the unconditional value before selecting the better x branch.",
          "Correct: the three expected contributions are 3, 1 and 3.",
          "Five is the branch value when x=0, not x=1.",
          "Nine requires the later choices y=z=1 and is not yet the conditional average."
        ]
      }
    },
    "proof": {
      "title": "A monotone potential ending at a concrete assignment",
      "paragraphs": [
        "The proof becomes deterministic once the branch-selection rule is specified. The random experiment supplies the initial potential and the identities needed to update it."
      ],
      "steps": [
        {
          "claim": "Write X as a weighted sum of clause indicators.",
          "why": "This exposes a computable objective whose expectation is a sum of local probabilities."
        },
        {
          "claim": "Compute both possible next conditional expectations.",
          "why": "Each unfinished clause contribution can be calculated from its remaining unfixed literals."
        },
        {
          "claim": "Choose a branch no smaller than the current potential.",
          "why": "The parent value is a weighted average of the child values, so they cannot both be smaller."
        },
        {
          "claim": "After the final variable, the potential equals the realized satisfied weight.",
          "why": "Conditioning on the entire assignment leaves a constant random variable."
        }
      ],
      "question": {
        "prompt": "Why does preserving conditional expectation prove a deterministic final guarantee?",
        "options": [
          "Every intermediate conditional distribution is uniform on optimal assignments.",
          "Every chosen branch independently improves every clause.",
          "At the final leaf, the conditional expectation equals the assignment’s actual value.",
          "The algorithm eventually tries all assignments."
        ],
        "answer": 2,
        "feedback": [
          "There is no conditioning on optimality; many nonoptimal completions remain possible.",
          "A branch may help one clause and harm another; the total weighted potential is preserved.",
          "Correct: the invariant connects the original average directly to one realized output.",
          "Only one path through the assignment tree is followed, with polynomially computable updates."
        ]
      }
    },
    "boundary": {
      "title": "Audit the literal model before multiplying probabilities",
      "paragraphs": [
        "Probability products are only as sound as the event representation. Normalize clauses and keep positive and negative literals distinct when using biased coins."
      ],
      "cases": [
        {
          "label": "A repeated literal",
          "setting": "The written clause is x∨x and Pr(x=1)=1/2.",
          "question": {
            "prompt": "What is its satisfaction probability?",
            "options": [
              "3/4",
              "1",
              "1/4",
              "1/2"
            ],
            "answer": 3,
            "feedback": [
              "The 3/4 calculation incorrectly treats the repeated occurrence as an independent variable.",
              "The clause is not a tautology; it fails whenever x=0.",
              "One quarter is neither its satisfaction nor its failure probability.",
              "Correct: x∨x is just x, so there is only one random variable."
            ]
          }
        },
        {
          "label": "A common positive bias",
          "setting": "All variables are set true with probability 0.8; consider the negative unit clause ¬x.",
          "question": {
            "prompt": "What happens to this clause’s satisfaction probability?",
            "options": [
              "It falls to 0.2.",
              "It rises to 0.8.",
              "It remains 1/2.",
              "It becomes 1 because unit clauses are normalized."
            ],
            "answer": 0,
            "feedback": [
              "Correct: ¬x is true exactly when x is false, which has probability 0.2.",
              "That is the probability that the positive literal x is true.",
              "Changing the variable bias changes the literal marginal.",
              "Normalization removes duplicates and tautologies; it does not guarantee satisfaction."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Use independence within a clause and linearity across clauses.",
        "Compute the objective conditioned on the current prefix.",
        "Choose a branch with no decrease in total expectation.",
        "Normalize repeated or complementary literals before applying the product formula."
      ],
      "retrieval": "Derandomize the weighted three-clause example from a fresh prefix, explaining why a branch can worsen one clause while still preserving the guarantee."
    },
    "sourceNote": "Develops Williamson–Shmoys §§5.1–5.3. Biased assignments and conditional expectation are explained using an original weighted example."
  },
  "core-sat-lp": {
    "intro": {
      "title": "Let the relaxation choose the variable biases",
      "paragraphs": [
        "Fair coins treat every variable alike. A linear relaxation can encode useful information about which truth values matter most, but fractional truth values are not assignments. Randomized LP rounding interprets a fractional variable as its probability of being set true, producing a genuine Boolean assignment in every outcome.",
        "The main difficulty is a clause rather than a variable: several small literal probabilities may jointly provide its fractional satisfaction value. The analysis must turn this sum into a lower bound on the probability that at least one literal becomes true. A clause-by-clause comparison also reveals why combining two algorithms beats comparing their worst global ratios."
      ],
      "question": {
        "prompt": "For a maximization problem, why is the LP optimum a useful comparison?",
        "options": [
          "Every integral assignment is LP-feasible, so the LP optimum upper-bounds OPT.",
          "The LP optimum is always a lower bound on OPT.",
          "The LP and integral optimum must coincide.",
          "An LP solution is already a Boolean assignment."
        ],
        "answer": 0,
        "feedback": [
          "Correct: relaxing feasibility can only increase a maximization optimum.",
          "That direction is appropriate for minimization relaxations, not this maximization LP.",
          "A nontrivial integrality gap can separate fractional and integral solutions.",
          "Fractional marginals require rounding before they become truth assignments."
        ]
      }
    },
    "mechanism": {
      "title": "Bound failure by spreading the fractional mass",
      "definitions": [
        {
          "term": "Literal truth marginal",
          "meaning": "yᵢ for xᵢ and 1−yᵢ for ¬xᵢ."
        },
        {
          "term": "Clause variable zC",
          "meaning": "A fractional satisfaction value, bounded by one and by the sum of the clause’s literal marginals."
        },
        {
          "term": "Clause length k",
          "meaning": "The number of distinct noncomplementary literals after normalization."
        }
      ],
      "paragraphs": [
        "Independently round each variable according to its LP marginal. Arithmetic–geometric mean bounds the clause’s failure product by (1−z/k)^k. The resulting success expression is concave in z on [0,1], so it lies above the chord joining its endpoint values. This yields success at least [1−(1−1/k)^k]z.",
        "Fair rounding gives a different length-dependent bound, (1−2^−k)z. For a unit clause, LP rounding is excellent and fair rounding weak; for longer clauses the tradeoff changes. Generate both assignments and keep the better objective. Its value is at least their average, so add the two guarantees for each clause before summing weights."
      ],
      "formula": "Pr(C satisfied) ≥ [1−(1−1/k)^k]zC ≥ (1−1/e)zC",
      "question": {
        "prompt": "For k=2 and z=1, what is the LP-rounding lower bound?",
        "options": [
          "1/2",
          "3/4",
          "1−1/e exactly",
          "1"
        ],
        "answer": 1,
        "feedback": [
          "This omits the benefit from having two possible satisfying literals.",
          "Correct: 1−(1−1/2)²=3/4.",
          "The uniform bound is weaker here; the length-specific value is 3/4.",
          "A fractional clause value of one does not mean rounding satisfies it surely."
        ]
      }
    },
    "example": {
      "title": "Compare algorithms at each clause length",
      "setup": "Take a normalized clause whose LP satisfaction value is z=1. Compare its guaranteed satisfaction probabilities under fair and LP rounding.",
      "table": {
        "headers": [
          "Length k",
          "Fair guarantee",
          "LP guarantee"
        ],
        "rows": [
          [
            "1",
            "1/2",
            "1"
          ],
          [
            "2",
            "3/4",
            "3/4"
          ],
          [
            "3",
            "7/8",
            "19/27"
          ]
        ]
      },
      "steps": [
        {
          "title": "Understand the exceptional unit case",
          "explanation": "For k=1, the LP contribution is z=1 but a fair assignment gives only 1/2. Averaging those two contributions gives 3/4."
        },
        {
          "title": "Check length two",
          "explanation": "Both guarantees equal 3/4, so their average still equals 3/4."
        },
        {
          "title": "Check length three",
          "explanation": "The average is (7/8+19/27)/2=341/432, approximately 0.78935, which exceeds 3/4."
        },
        {
          "title": "Transfer to weighted instances",
          "explanation": "Apply the lower bound to each clause’s weighted LP contribution and sum. Keeping the better of the two actual assignments is at least their actual average."
        }
      ],
      "conclusion": "Averaging the algorithms’ global worst guarantees would discard the compensating dependence on clause length. The local comparison is what proves the sharper 3/4 ratio.",
      "question": {
        "prompt": "What is the average of the displayed length-three guarantees?",
        "options": [
          "19/27",
          "7/8",
          "341/432",
          "3/8"
        ],
        "answer": 2,
        "feedback": [
          "That is only the LP-rounding guarantee, before combining algorithms.",
          "That is only the fair-rounding guarantee for a length-three clause.",
          "Correct: put 7/8 and 19/27 over denominator 216, then divide their sum by two.",
          "This is half the length-two guarantee and does not perform the required addition."
        ]
      }
    },
    "proof": {
      "title": "Use a local inequality before taking a global maximum",
      "paragraphs": [
        "The two generated assignments need not satisfy the same clauses. The comparison is between their total values and their average, while the expectation calculation can still be performed one clause at a time."
      ],
      "steps": [
        {
          "claim": "A clause fails only when all its independently rounded literals fail.",
          "why": "Normalization ensures that the product involves different underlying variables."
        },
        {
          "claim": "The failure product is bounded using the sum of its literal marginals.",
          "why": "AM–GM maximizes a product of fixed-sum nonnegative failure terms when they are equal."
        },
        {
          "claim": "Concavity converts the expression into a coefficient times zC.",
          "why": "The chord bound lets fractional clause contributions share one linear benchmark."
        },
        {
          "claim": "The maximum of two output values dominates their average.",
          "why": "This holds for every pair of outcomes, and therefore also after taking expectations and summing weighted clauses."
        }
      ],
      "question": {
        "prompt": "Where should the fair and LP guarantees be combined to recover 3/4?",
        "options": [
          "Only after replacing both algorithms by their weakest global ratios.",
          "By assuming they satisfy exactly the same clauses.",
          "By averaging the LP variables before rounding.",
          "At each clause length before summing over clauses."
        ],
        "answer": 3,
        "feedback": [
          "That replacement loses information and gives a weaker bound.",
          "The argument requires no agreement between the sets of satisfied clauses.",
          "This is a different rounding rule and is not the comparison being analyzed.",
          "Correct: the length-specific strengths compensate locally, including the unit-clause case."
        ]
      }
    },
    "boundary": {
      "title": "Avoid turning a relaxation into a promise",
      "paragraphs": [
        "The proof does not say every clause is satisfied, and it does not apply its independent-literal formula to unnormalized expressions."
      ],
      "cases": [
        {
          "label": "A tautological clause",
          "setting": "The clause is x∨¬x.",
          "question": {
            "prompt": "How should its contribution be handled?",
            "options": [
              "Treat it as always satisfied, independently of the variable bias.",
              "Multiply the two literal failure probabilities as if independent.",
              "Assign it failure probability 1/4 under fair rounding.",
              "Remove its weight from the objective benchmark."
            ],
            "answer": 0,
            "feedback": [
              "Correct: exactly one of the complementary literals is true for every assignment.",
              "Both literals use the same variable, so their failure events are not independent.",
              "A tautology has zero failure probability, not one quarter.",
              "It contributes its full weight to every feasible assignment and to the objective."
            ]
          }
        },
        {
          "label": "A single algorithm’s guarantee",
          "setting": "Only LP-marginal rounding is run, without nonlinear transformation or comparison with a fair assignment.",
          "question": {
            "prompt": "Which uniform factor follows from the displayed LP-rounding proof?",
            "options": [
              "3/4 by the two-assignment argument",
              "1−1/e",
              "1",
              "1/2 exactly"
            ],
            "answer": 1,
            "feedback": [
              "The two-assignment argument requires generating and comparing the fair candidate too.",
              "Correct: the coefficient approaches 1−1/e as clause length grows.",
              "Fractional feasibility does not ensure all rounded clauses survive.",
              "One half is a weaker generic guarantee, not the proved LP-rounding factor."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Fractional truth values become independent variable marginals.",
        "Analyze each clause through its failure product and LP mass.",
        "Use concavity to obtain a linear comparison with zC.",
        "Combine length-dependent guarantees before discarding local information."
      ],
      "retrieval": "Derive the LP-rounding inequality for a length-k clause, then explain why keeping the better of fair and LP-rounded assignments gives a stronger result than averaging their global worst ratios."
    },
    "sourceNote": "Develops Williamson–Shmoys §§5.4–5.6. The source additionally analyzes permitted nonlinear marginal transformations; those conditions are not replaced by the two-candidate explanation here."
  },
  "core-pcst": {
    "intro": {
      "title": "Pay to connect a vertex or pay its penalty",
      "paragraphs": [
        "Prize-collecting Steiner tree allows the algorithm to omit vertices, but omission is not free. The objective is the cost of a rooted connecting tree plus penalties for every vertex left out. A cheap tree can therefore be a terrible solution if it abandons valuable vertices.",
        "A fractional solution gives each vertex a connection level yᵢ. Thresholding at α turns those levels into an integral set of required terminals. A low threshold protects penalties but makes the connecting-tree bound expensive. A high threshold has the opposite effect. Randomizing the threshold balances these two charges in expectation."
      ],
      "question": {
        "prompt": "Which objective is being approximated?",
        "options": [
          "Tree-edge cost alone.",
          "Tree-edge cost plus penalties of omitted vertices.",
          "Only the number of retained vertices.",
          "Penalty paid for vertices included in the tree."
        ],
        "answer": 1,
        "feedback": [
          "That objective could favor abandoning every costly but valuable terminal.",
          "Correct: both connection and exclusion are part of the original minimization objective.",
          "Vertices have specified penalties, not merely equal cardinality value.",
          "Penalties are charged to vertices outside the chosen rooted tree."
        ]
      }
    },
    "mechanism": {
      "title": "Integrate the reciprocal threshold",
      "definitions": [
        {
          "term": "Connection mass yᵢ",
          "meaning": "The LP’s fractional connection value for vertex i; the root has value one."
        },
        {
          "term": "Threshold set Uα",
          "meaning": "Vertices with yᵢ≥α, which the rounded tree is required to connect."
        },
        {
          "term": "Lower cutoff γ",
          "meaning": "A positive constant below one; sample α uniformly from [γ,1]."
        }
      ],
      "paragraphs": [
        "Scaling the fractional edge solution by 1/α makes the cut requirements for retained terminals feasible. Applying the available Steiner-tree rounding bound gives tree cost at most 2E/α, where E is the LP edge-cost contribution. The reciprocal is why thresholds near zero are dangerous.",
        "For a vertex with yᵢ≥γ, exclusion occurs when α>yᵢ, with probability (1−yᵢ)/(1−γ). If yᵢ<γ it is always excluded, and the same ratio remains an upper bound. Integrating 2/α gives the edge coefficient; equating it to the penalty coefficient chooses γ=e^−1/2."
      ],
      "formula": "expected total ≤ [2 ln(1/γ)/(1−γ)]E + [1/(1−γ)]P",
      "question": {
        "prompt": "For γ=1/2, what is the edge-cost coefficient in this bound?",
        "options": [
          "2",
          "4",
          "4 ln 2",
          "ln 2"
        ],
        "answer": 2,
        "feedback": [
          "Two would arise at the single threshold α=1, not from this uniform distribution.",
          "Four ignores that the reciprocal must be integrated rather than fixed at its worst value.",
          "Correct: integrate 2/α and divide by the interval length 1/2.",
          "This omits both the factor two and the density normalization."
        ]
      }
    },
    "example": {
      "title": "Compute actual exclusion probabilities",
      "setup": "Use γ=1/2. Vertex a has yₐ=0.75 and penalty 12; vertex b has yᵦ=0.25 and penalty 8. The root has y=1 and penalty zero.",
      "table": {
        "headers": [
          "Vertex",
          "LP penalty π(1−y)",
          "Exclusion probability"
        ],
        "rows": [
          [
            "a",
            "3",
            "1/2"
          ],
          [
            "b",
            "6",
            "1"
          ],
          [
            "root",
            "0",
            "0"
          ]
        ]
      },
      "steps": [
        {
          "title": "Calculate the upper interval for a",
          "explanation": "Thresholds exceeding 0.75 occupy length 0.25 inside an interval of length 0.5, so a is excluded with probability 1/2."
        },
        {
          "title": "Handle a value below the cutoff",
          "explanation": "Every possible threshold is above 0.25, so b is excluded with probability one. A probability formula must not be allowed to exceed one as an equality."
        },
        {
          "title": "Add expected penalties",
          "explanation": "The actual expected penalty contribution is 12×1/2+8×1=14."
        },
        {
          "title": "Compare with the LP charge",
          "explanation": "Here P=3+6=9 and the coefficient 1/(1−γ)=2 gives upper bound 18. Fourteen is below that bound; the low-connection vertex makes the bound slack."
        }
      ],
      "conclusion": "This calculation isolates penalty rounding. The full algorithm must still construct a rooted Steiner tree on the retained terminal set and charge its edge cost.",
      "question": {
        "prompt": "What is the actual expected penalty in the example?",
        "options": [
          "9",
          "18",
          "20",
          "14"
        ],
        "answer": 3,
        "feedback": [
          "Nine is the fractional LP penalty, not the rounded expected penalty.",
          "Eighteen is the theorem’s upper bound and need not be achieved.",
          "Twenty would mean both vertices are excluded with probability one.",
          "Correct: a contributes six and b contributes eight."
        ]
      }
    },
    "proof": {
      "title": "Combine the two objective components honestly",
      "paragraphs": [
        "The proof treats E and P separately and then chooses one distribution that controls both. Replacing α by its mean would miss the nonlinear edge-cost dependence."
      ],
      "steps": [
        {
          "claim": "The retained-terminal tree costs at most 2E/α.",
          "why": "Every relevant cut has fractional mass at least α, so scaling and the available tree rounding theorem apply."
        },
        {
          "claim": "Expected tree cost is bounded by integrating that inequality.",
          "why": "Uniform sampling contributes density 1/(1−γ); the integral of 1/α produces the logarithm."
        },
        {
          "claim": "Each expected penalty is at most πᵢ(1−yᵢ)/(1−γ).",
          "why": "Use the exact upper interval when yᵢ≥γ and an upper bound of at least one otherwise."
        },
        {
          "claim": "At γ=e^−1/2, both coefficients equal (1−e^−1/2)^−1.",
          "why": "The equality 2 ln(1/γ)=1 makes one common factor multiply E+P, an LP lower bound on OPT."
        }
      ],
      "question": {
        "prompt": "Why can we not replace E[1/α] by 1/E[α]?",
        "options": [
          "Taking a reciprocal does not commute with expectation.",
          "A uniform random variable has no expectation.",
          "The threshold distribution changes after each terminal is examined.",
          "The tree-cost term is linear in α."
        ],
        "answer": 0,
        "feedback": [
          "Correct: the reciprocal is nonlinear, and its integral is the decisive calculation.",
          "A bounded uniform variable has a perfectly well-defined mean.",
          "The displayed analysis uses one sampled threshold for all vertices.",
          "The bound is proportional to 1/α, not to α."
        ]
      }
    },
    "boundary": {
      "title": "Do not lose the cutoff or the rooted requirement",
      "paragraphs": [
        "The threshold is a tool for choosing terminals. It does not remove the root requirement, and it does not justify an integrable cost bound at α=0."
      ],
      "cases": [
        {
          "label": "A connection value below γ",
          "setting": "Let γ=0.6 and yᵢ=0.2.",
          "question": {
            "prompt": "What is the vertex’s exclusion probability?",
            "options": [
              "2",
              "1",
              "1/2",
              "0.2"
            ],
            "answer": 1,
            "feedback": [
              "The ratio (1−y)/(1−γ)=2 is only an upper bound, not a possible probability.",
              "Correct: every sampled threshold exceeds its connection value.",
              "The upper interval is the entire support, not half of it.",
              "y is a connection value, not this threshold experiment’s exclusion probability."
            ]
          }
        },
        {
          "label": "Removing the lower cutoff",
          "setting": "A proposed analysis samples α uniformly from [0,1] and retains the bound 2E/α.",
          "question": {
            "prompt": "What fails in that edge-cost analysis?",
            "options": [
              "The penalty coefficient becomes negative.",
              "Every vertex is excluded surely.",
              "The integral of 1/α diverges near zero.",
              "Uniform sampling cannot use real numbers."
            ],
            "answer": 2,
            "feedback": [
              "The difficulty is an unbounded reciprocal integral, not a sign change.",
              "Small thresholds retain more vertices, rather than excluding all of them.",
              "Correct: a positive lower cutoff is needed for this finite expectation bound.",
              "Continuous uniform variables are legitimate mathematical objects in randomized analyses."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Keep edge costs and omitted-vertex penalties in the same objective.",
        "Scale cuts by the actual sampled threshold.",
        "Integrate reciprocal cost and normalize the density.",
        "An exclusion-probability upper bound can exceed one without being an equality."
      ],
      "retrieval": "Starting from E and P, derive both expected-cost coefficients and solve for the cutoff that makes their worst-case maximum smallest."
    },
    "sourceNote": "Develops Williamson–Shmoys §5.7. The factor-two Steiner-tree rounding lemma is an input from the assigned text, not proved by the penalty calculation."
  },
  "core-facility": {
    "intro": {
      "title": "Coordinate the openings before assigning clients",
      "paragraphs": [
        "A facility-location solution pays once for every opened facility and then pays each client’s distance to its assigned open facility. Fractional opening and assignment variables give a lower bound, but an assignment split across facilities is not an integral service plan. Every rounded outcome must still serve every client.",
        "Independent opening looks attractive because its expected opening cost is easy to compute. Its defect is feasibility: with positive probability a client has no open facility in its entire fractional neighborhood. The assigned algorithm instead builds disjoint representative neighborhoods and opens exactly one facility in each selected neighborhood."
      ],
      "question": {
        "prompt": "Why is an expected opening-cost bound alone insufficient?",
        "options": [
          "Expected costs cannot be added.",
          "Opening costs must all be identical.",
          "A rounded outcome can leave all facilities serving a client closed.",
          "The LP cannot express any assignment constraints."
        ],
        "answer": 2,
        "feedback": [
          "Linearity permits adding expected costs; it does not repair missing service.",
          "The algorithm handles arbitrary nonnegative facility costs.",
          "Correct: objective analysis is useful only after the output is a feasible service plan.",
          "The relaxation contains both complete-assignment and assignment-to-opening constraints."
        ]
      }
    },
    "mechanism": {
      "title": "Use representative neighborhoods and a metric detour",
      "definitions": [
        {
          "term": "Neighborhood N(j)",
          "meaning": "Facilities i with positive fractional assignment xᵢⱼ for client j."
        },
        {
          "term": "Fractional connection cost C*j",
          "meaning": "The sum ∑ᵢ cᵢⱼxᵢⱼ for client j."
        },
        {
          "term": "Dual value v*j",
          "meaning": "The optimal client dual variable; complementary slackness bounds cᵢⱼ≤v*j when i belongs to N(j)."
        }
      ],
      "paragraphs": [
        "Choose a remaining representative minimizing v*j+C*j. Open facility i in its neighborhood with probability xᵢⱼ, and assign the representative and all clients whose neighborhoods intersect its neighborhood. Remove those clients and repeat. The selected facility neighborhoods are disjoint, so opening-cost charges are not duplicated.",
        "For a client ℓ sharing a neighbor h with representative j, travel conceptually through ℓ,h,j,i. The metric bounds this detour by cₕℓ+cₕⱼ+cᵢⱼ. Taking the expectation of the final leg preserves C*j; the representative ordering then bounds expected connection by 2v*ℓ+C*ℓ."
      ],
      "formula": "expected total ≤ fractional opening + fractional connection + 2·dual objective ≤ 3OPT",
      "question": {
        "prompt": "Why does the ordering use v*j+C*j rather than only v*j?",
        "options": [
          "The opening distribution is uniform on all facilities.",
          "The algorithm wants the farthest remaining client first.",
          "The sum is always exactly the facility opening cost.",
          "The randomized connection analysis retains C*j and must compare that sum between clients."
        ],
        "answer": 3,
        "feedback": [
          "Facilities are sampled according to fractional assignments, not uniformly.",
          "The representative minimizes the specified sum; distance alone is not its key.",
          "The expression combines a dual value and a client connection cost, not one facility price.",
          "Correct: the comparison v*j+C*j≤v*ℓ+C*ℓ closes the rerouting bound."
        ]
      }
    },
    "example": {
      "title": "Compare a coordinated lottery with independent opening",
      "setup": "One client lies at position 0. Facility A is at distance 2 with opening cost 6; facility B is at distance 6 with opening cost 2. Set yA=xA=1/4 and yB=xB=3/4. Each integral choice costs 8, so this fractional solution is optimal too.",
      "table": {
        "headers": [
          "Opened facility",
          "Probability",
          "Opening + connection"
        ],
        "rows": [
          [
            "A",
            "1/4",
            "6+2=8"
          ],
          [
            "B",
            "3/4",
            "2+6=8"
          ]
        ]
      },
      "steps": [
        {
          "title": "Check fractional feasibility",
          "explanation": "Assignments sum to one and equal their opening variables. The LP objective is (6/4+6/4)+(2/4+18/4)=3+5=8."
        },
        {
          "title": "Open one facility by the neighborhood lottery",
          "explanation": "The algorithm selects A or B using the displayed probabilities. It never selects neither, and the client is served in every outcome."
        },
        {
          "title": "Separate the expected charges",
          "explanation": "Expected opening cost is 6/4+3×2/4=3. Expected connection cost is 2/4+3×6/4=5. Their sum is 8."
        },
        {
          "title": "Contrast independent opening",
          "explanation": "Independent Bernoulli openings with the same marginals leave both closed with probability (3/4)(1/4)=3/16. They preserve opening expectation but fail feasibility."
        }
      ],
      "conclusion": "The example isolates the role of correlation. The factor-three theorem additionally needs the representative ordering, disjoint-neighborhood argument and metric detour for other clients.",
      "question": {
        "prompt": "What is the probability of opening no facility under the coordinated neighborhood lottery?",
        "options": [
          "0",
          "3/16",
          "1/4",
          "3/4"
        ],
        "answer": 0,
        "feedback": [
          "Correct: the lottery chooses exactly one of A and B.",
          "That is the failure probability for independent openings with these marginals.",
          "One quarter is the chance of selecting A, not of selecting no facility.",
          "Three quarters is the chance of selecting B, which still serves the client."
        ]
      }
    },
    "proof": {
      "title": "Charge the detour without discarding the connection budget",
      "paragraphs": [
        "The improvement comes from preserving a fractional connection term that a worst-case facility choice would lose. The dual variables are part of the source’s optimal LP analysis, not arbitrary guessed upper bounds."
      ],
      "steps": [
        {
          "claim": "Each chosen neighborhood opens one facility and serves its assigned cluster.",
          "why": "The neighborhood assignment probabilities sum to one, so every cluster has an open service location."
        },
        {
          "claim": "Expected opening cost is at most ∑ᵢ fᵢyᵢ.",
          "why": "Within a selected neighborhood use xᵢⱼ≤yᵢ, then exploit disjointness across selected neighborhoods."
        },
        {
          "claim": "Expected connection cost of ℓ is at most 2v*ℓ+C*ℓ.",
          "why": "Use the shared-neighbor detour, complementary slackness and the minimum v*+C* representative ordering."
        },
        {
          "claim": "Opening plus all connection terms cost at most 3OPT in expectation.",
          "why": "The fractional opening-plus-connection objective and the optimal dual objective both lower-bound the integral optimum."
        }
      ],
      "question": {
        "prompt": "Which geometric inequality supports rerouting a clustered client?",
        "options": [
          "Every client is at zero distance from every facility.",
          "cᵢℓ≤cₕℓ+cₕⱼ+cᵢⱼ along the shared-neighbor detour.",
          "cᵢℓ equals the opening cost fᵢ.",
          "The farthest facility is always the cheapest."
        ],
        "answer": 1,
        "feedback": [
          "Zero distances are unnecessary and usually false.",
          "Correct: the metric turns an available connecting walk into a distance upper bound.",
          "Connection costs and facility opening costs are different parts of the objective.",
          "No such relationship follows from a metric or from the LP."
        ]
      }
    },
    "boundary": {
      "title": "Change the service model and the proof changes",
      "paragraphs": [
        "The feasibility and rerouting arguments use both unlimited facility capacity and metric connection costs. Neither condition is decorative."
      ],
      "cases": [
        {
          "label": "A capacity limit",
          "setting": "The chosen facility may serve at most two clients, but a cluster contains five.",
          "question": {
            "prompt": "What fails if the algorithm assigns the whole cluster there unchanged?",
            "options": [
              "The opening lottery stops summing to one.",
              "Every metric inequality becomes false.",
              "The rounded solution can violate capacity.",
              "The total number of clients becomes fractional."
            ],
            "answer": 2,
            "feedback": [
              "The probability distribution may remain valid while the service assignment becomes infeasible.",
              "Distances can still form a metric; the new obstruction is a service constraint.",
              "Correct: unlimited rerouting was justified only for uncapacitated facilities.",
              "The clients remain discrete; their assignment exceeds the new capacity."
            ]
          }
        },
        {
          "label": "Nonmetric connection prices",
          "setting": "A direct client-facility price exceeds the sum of prices along the proposed detour.",
          "question": {
            "prompt": "Which part of the factor-three proof is unavailable?",
            "options": [
              "Linearity of expected opening cost.",
              "The definition of a client.",
              "The possibility of solving any linear program.",
              "The triangle-inequality bound on rerouted connection cost."
            ],
            "answer": 3,
            "feedback": [
              "Opening expectation still adds linearly; it is not enough for the total guarantee.",
              "The combinatorial objects remain defined even when their prices are nonmetric.",
              "A nonmetric LP can be solved, but this rounding analysis need not apply.",
              "Correct: the detour no longer certifies an upper bound on actual assignment price."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Guarantee service in every rounded outcome.",
        "Sample one facility in each representative neighborhood.",
        "Preserve fractional connection cost in the detour analysis.",
        "Use disjointness, dual information and metric structure at their precise steps."
      ],
      "retrieval": "Explain how the randomized representative algorithm avoids the 3/16 failure event in the example, then reconstruct the inequality bounding a nonrepresentative client’s expected connection cost."
    },
    "sourceNote": "Develops Williamson–Shmoys §5.8, Algorithm 5.1 and Theorem 5.19. The complementary-slackness connection bound is an input established in the preceding facility-location development."
  },
  "core-release": {
    "intro": {
      "title": "Sample where the relaxed schedule processes a job",
      "paragraphs": [
        "Release dates make order selection more subtle than sorting by weight divided by processing time. A high-priority job may arrive while another job is running. A preemptive relaxation can interrupt work at such arrivals, but the required output schedule must process every started job to completion.",
        "The assigned construction samples one processing-time midpoint for each job from an optimal relaxed schedule. These sampled points define an order, and the final schedule executes that order nonpreemptively while respecting release dates. The proof compares each job’s expected completion time individually, which permits multiplication by arbitrary nonnegative weights."
      ],
      "question": {
        "prompt": "What is the role of the relaxed preemptive schedule?",
        "options": [
          "It is the final nonpreemptive output by definition.",
          "It permits the final algorithm to ignore release dates.",
          "It makes all completion times identical.",
          "It provides a lower bound and a distribution of processing positions, not the required final schedule."
        ],
        "answer": 3,
        "feedback": [
          "Interruptions are allowed in the relaxation but prohibited in the required output.",
          "The final start time is constrained by each job’s release date.",
          "Jobs have distinct processing patterns and generally distinct completion values.",
          "Correct: the construction uses relaxed processing information to create a different feasible output."
        ]
      }
    },
    "mechanism": {
      "title": "Use midpoint distributions and prefix capacity",
      "definitions": [
        {
          "term": "Processing indicator yⱼt",
          "meaning": "Whether job j is processed during the unit interval [t−1,t) in the relaxation."
        },
        {
          "term": "Sampled point Xj",
          "meaning": "The midpoint t−1/2 chosen with probability yⱼt/pⱼ."
        },
        {
          "term": "Relaxed completion value C*j",
          "meaning": "The average processing midpoint of job j plus pⱼ/2."
        }
      ],
      "paragraphs": [
        "The probabilities sum to one because the relaxed schedule allocates pⱼ processing units to job j. Sort jobs by Xj, then schedule each as early as its predecessor’s completion and its own release date allow. This creates a feasible nonpreemptive schedule, regardless of the sampled order.",
        "Condition on Xj=x. All jobs appearing before j have release times at most x−1/2. Their expected total processing is at most x+1/2, by summing their midpoint-selection probabilities and using one-machine capacity over the prefix. Adding pⱼ gives E[Ĉⱼ|Xj=x]≤pⱼ+2x."
      ],
      "formula": "E[Ĉⱼ] ≤ pⱼ+2E[Xj] = 2C*j",
      "question": {
        "prompt": "If a job has p=4 and average processing midpoint E[X]=7, what is C*?",
        "options": [
          "9",
          "7",
          "11",
          "28"
        ],
        "answer": 0,
        "feedback": [
          "Correct: the relaxed completion value is the midpoint average plus p/2=2.",
          "Seven omits half the job’s processing duration in the completion expression.",
          "Eleven adds the full processing time instead of half.",
          "Multiplying midpoint by processing time does not give this normalized completion value."
        ]
      }
    },
    "example": {
      "title": "Follow both possible orders",
      "setup": "Job A has pA=2,rA=0,wA=1. Job B has pB=1,rB=1,wB=4. The optimal preemptive density schedule runs A in [0,1), B in [1,2), and A again in [2,3).",
      "table": {
        "headers": [
          "Job",
          "Sampled midpoints",
          "Relaxed completion value"
        ],
        "rows": [
          [
            "A",
            "0.5 or 2.5, each probability 1/2",
            "(0.5+2.5)/2+1=2.5"
          ],
          [
            "B",
            "1.5 surely",
            "1.5+0.5=2"
          ]
        ]
      },
      "steps": [
        {
          "title": "Obtain the relaxed objective",
          "explanation": "It equals 1×2.5+4×2=10.5. This is a lower bound on the required nonpreemptive optimum."
        },
        {
          "title": "Sample XA=0.5",
          "explanation": "A precedes B. Run A from 0 to 2 and B from 2 to 3, yielding weighted completion 1×2+4×3=14."
        },
        {
          "title": "Sample XA=2.5",
          "explanation": "B precedes A. Wait until B is released at 1, run B to 2, then A to 4. Weighted completion is 4×2+1×4=12."
        },
        {
          "title": "Average the outcomes",
          "explanation": "Both cases have probability 1/2, so expected output cost is 13. The nonpreemptive optimum is 12; the theorem’s bound 2×10.5=21 is valid but loose."
        }
      ],
      "conclusion": "Even a relaxed schedule described by a few intervals can induce different nonpreemptive orders. The proof bounds their expectation rather than declaring the sampled order always optimal.",
      "question": {
        "prompt": "What is the expected weighted completion cost in this two-job example?",
        "options": [
          "10.5",
          "13",
          "12",
          "21"
        ],
        "answer": 1,
        "feedback": [
          "That is the relaxed lower-bound objective, not the output expectation.",
          "Correct: the two equally likely rounded objectives are 14 and 12.",
          "Twelve is the best of the two outcomes, not their average.",
          "Twenty-one is an upper bound from the analysis, not an equality."
        ]
      }
    },
    "proof": {
      "title": "Condition first, then average and weight",
      "paragraphs": [
        "The prefix argument controls preceding work without treating the random job order as a deterministic sorting theorem. It is important that the per-job bound is established before summing weights."
      ],
      "steps": [
        {
          "claim": "Sampling Xj uses a genuine probability distribution.",
          "why": "Each job receives exactly pⱼ units in the relaxed schedule, so its normalized processing indicators sum to one."
        },
        {
          "claim": "Conditioned on Xj=x, the latest preceding release is at most x−1/2.",
          "why": "A selected midpoint for a preceding job occurs after that job’s own release date."
        },
        {
          "claim": "Expected preceding processing is at most x+1/2.",
          "why": "The factor pₖ cancels the normalization in its selection distribution, leaving a prefix sum bounded by machine capacity."
        },
        {
          "claim": "Average the conditional bound and multiply by wⱼ≥0.",
          "why": "This yields E[∑wⱼĈⱼ]≤2∑wⱼC*j≤2OPT without requiring independent completion times."
        }
      ],
      "question": {
        "prompt": "Why does the theorem prove a completion-time bound for every individual job?",
        "options": [
          "Every job has the same weight in the assigned problem.",
          "The largest completion time is the only objective term.",
          "It can then multiply by that job’s weight and add the inequalities.",
          "It requires all completion times to be independent."
        ],
        "answer": 2,
        "feedback": [
          "The allowed nonnegative weights can vary widely across jobs.",
          "This objective is weighted completion sum, not makespan.",
          "Correct: an unweighted total bound would not imply the weighted result.",
          "Linearity of expectation needs no independence among the rounded completion times."
        ]
      }
    },
    "boundary": {
      "title": "Feasibility and running time need their own proofs",
      "paragraphs": [
        "The time-indexed formulation is conceptually useful but may have an exponentially large numerical horizon. The source uses a compressed interval representation of the density-priority preemptive schedule to obtain polynomial time."
      ],
      "cases": [
        {
          "label": "A not-yet-released first job",
          "setting": "The sampled order begins with a job released at time 10, while the machine is initially idle.",
          "question": {
            "prompt": "How is the first start time chosen?",
            "options": [
              "At time zero because its sampled rank is first.",
              "At a negative time to preserve the expected bound.",
              "By splitting the job across machines.",
              "At time 10, respecting the job’s release."
            ],
            "answer": 3,
            "feedback": [
              "A rank is not permission to process a job before it exists.",
              "The scheduling model has nonnegative time and explicit release constraints.",
              "There is one machine, and the output is nonpreemptive.",
              "Correct: ordering does not override release-date feasibility."
            ]
          }
        },
        {
          "label": "A binary-encoded huge horizon",
          "setting": "A direct implementation creates one variable for every integer time up to T.",
          "question": {
            "prompt": "What remains to establish polynomial input-length running time?",
            "options": [
              "A compressed implementation avoiding enumeration of all T slots.",
              "Only the factor-two inequality.",
              "An assumption that integer arithmetic takes infinite time.",
              "A proof that all release dates are zero."
            ],
            "answer": 0,
            "feedback": [
              "Correct: the source represents processing using polynomially many event intervals.",
              "An approximation ratio does not bound the algorithm’s input-bit complexity.",
              "Arithmetic on binary numbers is manageable; the number of enumerated slots is the problem.",
              "The assigned algorithm specifically handles nonzero release dates."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Sample actual relaxed processing midpoints with probabilities yⱼt/pⱼ.",
        "Order by the sampled points but enforce release dates in the final schedule.",
        "Use prefix machine capacity to bound each job’s expected completion.",
        "Compress numerical time rather than assuming a time-indexed formulation is polynomial."
      ],
      "retrieval": "Reproduce both outcomes of the two-job example, then derive the conditional pⱼ+2x bound and explain exactly where the one-machine capacity constraint is used."
    },
    "sourceNote": "Develops Williamson–Shmoys §5.9 and its sampled-midpoint construction. It uses the source’s optimal preemptive relaxation and interval-based implementation; it is not a claim that arbitrary alpha-point rules have the same proof."
  },
  "core-flow": {
    "intro": {
      "title": "Keep each route whole and control the collisions",
      "paragraphs": [
        "A fractional multicommodity flow can split a demand across many paths. Unsplittable routing must choose one complete path for each commodity. Sampling from a path decomposition preserves the demand’s endpoints and flow conservation automatically, but several commodities may collide on an edge.",
        "The analysis therefore separates feasibility of each route from congestion of the collection. For a fixed edge, independently chosen commodity paths produce independent load indicators in the unit-demand setting. Edge loads themselves are not independent, because one selected path may cross many edges. The final union bound does not require that stronger independence."
      ],
      "question": {
        "prompt": "Why sample a whole path rather than independently rounding every edge of a commodity’s flow?",
        "options": [
          "A whole path preserves that commodity’s connectivity and flow conservation.",
          "All graph edges must then have independent loads.",
          "It guarantees no two commodities ever share an edge.",
          "A path sample has no random cost."
        ],
        "answer": 0,
        "feedback": [
          "Correct: local edge choices could leave disconnected pieces or imbalance at vertices.",
          "Loads on different edges can remain highly correlated.",
          "Congestion is still possible and is the object of the tail analysis.",
          "Sampling is random; its structural advantage is coherent routing."
        ]
      }
    },
    "mechanism": {
      "title": "Exponentiate the sum and use independence correctly",
      "definitions": [
        {
          "term": "Edge-load indicator Xk",
          "meaning": "One if commodity k’s selected unit-demand path uses the fixed edge, zero otherwise."
        },
        {
          "term": "Mean load μ",
          "meaning": "The sum of the indicators’ expectations, matching the fractional load."
        },
        {
          "term": "Congestion threshold a",
          "meaning": "A proposed upper bound on rounded edge load, chosen large enough to survive a union bound."
        }
      ],
      "paragraphs": [
        "For X=∑Xk, independence across commodities factors E[e^(tX)]. The elementary bound 1+u≤e^u gives E[e^(tX)]≤exp(μ(e^t−1)). Markov’s inequality then bounds the upper tail; optimizing the exponential parameter produces the standard Chernoff expression.",
        "When μ is constant, forcing all polynomially many edges below a threshold requires a growing a. Taking a proportional to log n/log log n makes the term a log(a/(eμ)) large enough to defeat that polynomial edge count. When μ is already a large multiple of log n, a constant relative increase gives sufficient tail decay."
      ],
      "formula": "Pr(X≥a) ≤ exp(a−μ)(μ/a)^a ≤ (eμ/a)^a for a≥μ",
      "question": {
        "prompt": "Which independence is used to factor the moment-generating function for one edge?",
        "options": [
          "Independence of loads on all graph edges.",
          "Independence of the path choices of distinct commodities.",
          "Independence of edges within each selected path.",
          "Independence of the graph from its capacities."
        ],
        "answer": 1,
        "feedback": [
          "That stronger statement is generally false and is unnecessary for the union bound.",
          "Correct: each summand is determined by one independently rounded commodity.",
          "The edges of a path are selected together rather than independently.",
          "Capacities are fixed input data in this analysis."
        ]
      }
    },
    "example": {
      "title": "Enumerate a small edge-load distribution",
      "setup": "Four unit commodities independently use a particular edge with probability 1/4 each. Then μ=1 and the edge load is binomial with parameters 4 and 1/4.",
      "table": {
        "headers": [
          "Load",
          "Probability numerator over 256",
          "Meaning"
        ],
        "rows": [
          [
            "0",
            "81",
            "All four avoid the edge"
          ],
          [
            "1",
            "108",
            "Exactly one uses it"
          ],
          [
            "2",
            "54",
            "Exactly two use it"
          ],
          [
            "3",
            "12",
            "Exactly three use it"
          ],
          [
            "4",
            "1",
            "All four use it"
          ]
        ]
      },
      "steps": [
        {
          "title": "Calculate the mean",
          "explanation": "Four indicators each have mean 1/4, so the fractional and expected rounded load both equal one."
        },
        {
          "title": "Count overload outcomes",
          "explanation": "Load at least three has probability 12/256+1/256=13/256, approximately 0.05078."
        },
        {
          "title": "Compare the Chernoff scale",
          "explanation": "The bound at a=3 is exp(3−1)/3³=e²/27, approximately 0.27367. It is valid but substantially larger than the exact probability."
        },
        {
          "title": "Move from one edge to the graph",
          "explanation": "For many edges, add their individual failure probabilities. Reusing the same path choices creates dependence between edges, but does not invalidate this addition bound."
        }
      ],
      "conclusion": "The finite distribution checks the probabilistic model. It does not by itself establish the asymptotic maximum-congestion theorem, which also chooses a threshold as a function of graph size.",
      "question": {
        "prompt": "What is Pr(X≥3) in the example?",
        "options": [
          "12/256",
          "1/4",
          "13/256",
          "1"
        ],
        "answer": 2,
        "feedback": [
          "This counts exactly three users and omits the all-four collision.",
          "One quarter is an individual commodity’s edge-use probability, not the overload tail.",
          "Correct: include both the load-three and load-four outcomes.",
          "The load can be zero, one or two, so overload is not certain."
        ]
      }
    },
    "proof": {
      "title": "Make the one-edge exponent absorb the graph size",
      "paragraphs": [
        "A small expected load alone does not bound the maximum load. The proof needs a quantitative upper tail, followed by a threshold choice that handles every edge simultaneously."
      ],
      "steps": [
        {
          "claim": "Path decomposition makes each rounded commodity a feasible complete route.",
          "why": "Sampling from its decomposition preserves its source and sink in every outcome."
        },
        {
          "claim": "Each edge load admits a Chernoff upper-tail estimate.",
          "why": "Its unit-demand indicators come from independent commodity path choices."
        },
        {
          "claim": "Choose a so the tail is inverse-polynomially small in n.",
          "why": "For constant μ, a=C log n/log log n yields exponent of order −C log n."
        },
        {
          "claim": "Sum failure probabilities over the graph’s edges.",
          "why": "A sufficiently large constant C absorbs their polynomial number without any edge-load independence assumption."
        }
      ],
      "question": {
        "prompt": "Why is a constant threshold generally inadequate when μ is constant but the number of edges grows?",
        "options": [
          "The mean of each edge must grow with n.",
          "The union bound requires independent edge events.",
          "Every path has length exactly log n.",
          "A fixed nonvanishing tail may accumulate across more and more edges."
        ],
        "answer": 3,
        "feedback": [
          "The constant-mean regime explicitly allows each mean to stay bounded.",
          "The union bound applies to arbitrary events, independent or dependent.",
          "Path lengths do not have this universal value.",
          "Correct: simultaneous control requires the individual failure probabilities to shrink with graph size."
        ]
      }
    },
    "boundary": {
      "title": "Track demand size and the loading regime",
      "paragraphs": [
        "A Bernoulli load proof is specific to bounded unit contributions. Large demands and large fractional congestion are distinct changes, with different consequences."
      ],
      "cases": [
        {
          "label": "One very large demand",
          "setting": "A single commodity contributes weight 100 whenever its sampled path uses the edge.",
          "question": {
            "prompt": "Can it be treated as an ordinary 0–1 load indicator without changing the proof?",
            "options": [
              "No; its exponential moment must include the size-100 contribution.",
              "Yes; a path is still only one object.",
              "Yes; expectation automatically bounds every outcome.",
              "No; whole-path routing becomes disconnected."
            ],
            "answer": 0,
            "feedback": [
              "Correct: the MGF contains e^(100t), not e^t, on that commodity’s event.",
              "A single selected object can contribute a large amount of load.",
              "A mean does not prevent rare large outcomes.",
              "Whole paths preserve connectivity; the obstruction is the concentration scale."
            ]
          }
        },
        {
          "label": "A large fractional mean",
          "setting": "The fractional load μ is at least a sufficiently large constant times log n.",
          "question": {
            "prompt": "What threshold regime can already give inverse-polynomial failure?",
            "options": [
              "A threshold below μ by a fixed factor.",
              "A constant multiplicative increase above μ.",
              "A threshold of zero.",
              "The same fixed absolute threshold for every μ."
            ],
            "answer": 1,
            "feedback": [
              "A threshold below the mean is not the relevant small upper-tail event.",
              "Correct: a multiplicative Chernoff exponent proportional to μ can absorb the graph size.",
              "Zero cannot bound a positive typical load.",
              "An absolute constant cannot control arbitrarily large expected loads."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Round each commodity into one whole route.",
        "Use independence across commodities for a fixed edge.",
        "Choose the congestion threshold before applying the union bound.",
        "Recheck bounded increments when demands are not unit-sized."
      ],
      "retrieval": "Derive the exponential-moment bound from the Bernoulli factors, then explain why the constant-mean and logarithmic-mean regimes lead to different threshold choices."
    },
    "sourceNote": "Develops Williamson–Shmoys §§5.10–5.11. The numerical example concerns unit-demand indicators; arbitrary demands need their own normalization and hypotheses."
  },
  "core-dense-color": {
    "intro": {
      "title": "Sample a small set that constrains every remaining vertex",
      "paragraphs": [
        "A graph can be promised 3-colorable while finding a 3-coloring remains difficult. Density supplies extra leverage: every vertex has many neighbors, so a modest random sample is likely to contain at least one of them. Once a sample has been colored correctly, each remaining vertex loses at least that neighbor’s color.",
        "Losing one of three colors leaves at most two possibilities, which can be encoded by a Boolean variable. The unknown correct coloring of the sample is handled by enumerating all its possibilities. The promise matters because it guarantees that one enumerated coloring really extends to the whole graph."
      ],
      "question": {
        "prompt": "Why is a sampled neighbor useful after the sample has been correctly colored?",
        "options": [
          "It identifies the remaining vertex’s color uniquely in every graph.",
          "It forbids at least one of the remaining vertex’s three colors.",
          "It removes every edge incident to the vertex.",
          "It makes the graph bipartite."
        ],
        "answer": 1,
        "feedback": [
          "One forbidden color usually leaves two choices, not a unique choice.",
          "Correct: adjacent vertices cannot receive the sampled neighbor’s color.",
          "The edges remain; their constraints must be satisfied in the extension.",
          "The remaining graph can contain odd cycles even when each list has size two."
        ]
      }
    },
    "mechanism": {
      "title": "Domination, enumeration, and two-choice constraints",
      "definitions": [
        {
          "term": "δ-dense promise",
          "meaning": "Every vertex has degree at least δn, for a fixed positive δ."
        },
        {
          "term": "Dominating sample",
          "meaning": "A sampled set containing a neighbor of each vertex."
        },
        {
          "term": "List-coloring extension",
          "meaning": "Choose a permitted color for each remaining vertex while respecting all edges."
        }
      ],
      "paragraphs": [
        "Include each vertex independently with probability p proportional to log n/(δn), capped at one. A degree-at-least-δn vertex has no sampled neighbor with probability at most (1−p)^(δn)≤e^(−pδn). A union bound handles all vertices, and a size estimate keeps the sample logarithmic for fixed δ.",
        "For each sample coloring, remove forbidden colors from the remaining vertices’ lists. With at most two colors per list, create a Boolean variable recording its selected option. For every edge and every pair of options assigning the same actual color, add a clause forbidding that simultaneous choice. Satisfying these 2SAT constraints gives a valid extension."
      ],
      "formula": "Pr(some vertex lacks a sampled neighbor) ≤ n·exp(−pδn)",
      "question": {
        "prompt": "If pδn=3 ln n, what upper bound follows for failure of domination?",
        "options": [
          "n^−3",
          "3/n",
          "n^−2",
          "1"
        ],
        "answer": 2,
        "feedback": [
          "That is the bound for one vertex before the union bound.",
          "The exponential e^(−3 ln n) is a power n^−3, not 3/n.",
          "Correct: the per-vertex bound n^−3 is multiplied by n vertices.",
          "The calculation gives a decreasing quantitative bound, not only a trivial bound of one."
        ]
      }
    },
    "example": {
      "title": "Extend a sample in a complete tripartite graph",
      "setup": "Take a complete tripartite graph with classes A,B,C, each containing four vertices. Select one vertex a from A and one vertex b from B. Give them colors 1 and 2. This deliberately chosen sample demonstrates the extension step, rather than a small-n sampling guarantee.",
      "table": {
        "headers": [
          "Remaining class",
          "Sampled neighbor colors",
          "Available list"
        ],
        "rows": [
          [
            "A",
            "2",
            "{1,3}"
          ],
          [
            "B",
            "1",
            "{2,3}"
          ],
          [
            "C",
            "1 and 2",
            "{3}"
          ]
        ]
      },
      "steps": [
        {
          "title": "Check domination",
          "explanation": "Every remaining A vertex sees b, every remaining B vertex sees a, and every C vertex sees both. The sampled vertices also see each other."
        },
        {
          "title": "Build the lists",
          "explanation": "Remove colors used by sampled neighbors. C vertices are forced to color 3, while the other two classes retain two choices each."
        },
        {
          "title": "Translate edges into constraints",
          "explanation": "An A–B edge forbids choosing color 3 at both endpoints. An A–C edge forbids color 3 at its A endpoint because its C endpoint is forced to 3."
        },
        {
          "title": "Read a satisfying extension",
          "explanation": "Choose color 1 for A, color 2 for B and color 3 for C. Every edge joins different classes, so all constraints are satisfied."
        }
      ],
      "conclusion": "The general extension algorithm need not recognize a tripartition. It only needs the at-most-two-choice lists and the 2SAT clauses induced by edges.",
      "question": {
        "prompt": "Which colors remain available for a C vertex in the displayed example?",
        "options": [
          "Colors 1 and 2.",
          "All three colors.",
          "No color.",
          "Only color 3."
        ],
        "answer": 3,
        "feedback": [
          "Those are exactly the colors excluded by its sampled neighbors.",
          "Both sample vertices are neighbors, so two colors have already been forbidden.",
          "The promised coloring leaves color 3 available.",
          "Correct: its sampled A and B neighbors rule out colors 1 and 2."
        ]
      }
    },
    "proof": {
      "title": "Why enumeration is polynomial and one branch works",
      "paragraphs": [
        "The sample is not assumed to reveal the hidden coloring. The algorithm explicitly tries its alternatives and uses the global promise to justify that at least one alternative succeeds."
      ],
      "steps": [
        {
          "claim": "A logarithmic-size sample dominates the graph with high probability.",
          "why": "Density gives many independent chances to sample a neighbor, and the failure exponent survives a union bound."
        },
        {
          "claim": "Enumerating its colorings is polynomial for fixed δ.",
          "why": "For sample size O(log n/δ), the count 3^|S| equals n raised to a constant depending on δ."
        },
        {
          "claim": "The correct restricted coloring is among the enumerated candidates.",
          "why": "The 3-colorability promise supplies a global coloring whose restriction has not been omitted."
        },
        {
          "claim": "Its extension reduces to a satisfiable 2SAT instance.",
          "why": "The global coloring respects every reduced list and every encoded edge constraint."
        }
      ],
      "question": {
        "prompt": "Where is the promise that the whole graph is 3-colorable used?",
        "options": [
          "To guarantee an enumerated sample coloring that has a valid extension.",
          "To make different sampled vertices independent random variables.",
          "To force every candidate sample coloring to extend.",
          "To eliminate the need to check monochromatic edges."
        ],
        "answer": 0,
        "feedback": [
          "Correct: the restriction of a genuine coloring is one successful branch.",
          "Sampling independence is an algorithmic choice unrelated to the coloring promise.",
          "Many enumerated assignments can be inconsistent or fail to extend.",
          "Edges still require explicit constraints and final feasibility checks."
        ]
      }
    },
    "boundary": {
      "title": "Distinguish a construction algorithm from a property tester",
      "paragraphs": [
        "This algorithm constructs a coloring of every vertex. Its sample is an aid to solving a promised dense input, not a constant-query certificate about an arbitrary large graph."
      ],
      "cases": [
        {
          "label": "A nonconstant density parameter",
          "setting": "The density lower bound δ is allowed to shrink with n.",
          "question": {
            "prompt": "Why does the fixed-δ polynomial-time conclusion need reconsideration?",
            "options": [
              "The union bound becomes invalid for every δ.",
              "The exponent in 3^O(log n/δ)=n^O(1/δ) may now grow with n.",
              "A graph cannot have a degree below n.",
              "The number of colors changes automatically from three to two."
            ],
            "answer": 1,
            "feedback": [
              "The probability inequality remains valid, though its needed sample size changes.",
              "Correct: a parameter-dependent exponent is constant only when that parameter is fixed.",
              "Degrees range from zero to n−1; density is a genuine quantitative assumption.",
              "The coloring promise remains three colors; shrinking density does not strengthen it."
            ]
          }
        },
        {
          "label": "One failed guessed coloring",
          "setting": "A particular enumerated coloring of the sample leads to an unsatisfiable extension formula.",
          "question": {
            "prompt": "What does that establish?",
            "options": [
              "The whole graph is not 3-colorable.",
              "Every other sample coloring fails too.",
              "Only that this candidate coloring fails to extend.",
              "The density promise is false."
            ],
            "answer": 2,
            "feedback": [
              "A failed branch does not rule out every possible global coloring.",
              "The enumeration exists precisely because the branches can behave differently.",
              "Correct: another assignment of colors to the sample may be the correct restriction.",
              "Failure of a color assignment gives no direct degree information."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Use density to obtain a small dominating sample.",
        "Enumerate sample colorings rather than guessing that one is correct.",
        "Reduce the remaining at-most-two-choice problem to 2SAT.",
        "Track the dependence on fixed δ and distinguish construction from testing."
      ],
      "retrieval": "Starting with a colored dominating sample, construct the Boolean variables and forbidden-pair clauses for an arbitrary remaining edge, then explain which enumerated branch is guaranteed to succeed."
    },
    "sourceNote": "Develops Williamson–Shmoys §5.12. The complete tripartite example teaches the extension mechanism; the source supplies the full high-probability sample-size analysis."
  },
  "core-sdp-cut": {
    "intro": {
      "title": "Replace signs by vectors, then recover a cut geometrically",
      "paragraphs": [
        "A cut can be represented by signs sᵢ∈{−1,1}: an edge crosses exactly when its endpoint signs differ. Its contribution is therefore wᵢⱼ(1−sᵢsⱼ)/2. Replacing each sign by a unit vector gives a relaxation, but those vectors are not themselves the two sides of a cut.",
        "A random hyperplane converts the vectors back to signs. The probability of separating two vectors is determined by their angle, while their relaxed edge value is determined by the cosine of that angle. Comparing these two functions edge by edge is the entire approximation argument’s central bridge."
      ],
      "question": {
        "prompt": "Why does the vector optimization upper-bound the maximum cut value?",
        "options": [
          "Every vector solution already is a two-sided cut.",
          "The relaxed problem deletes all graph edges.",
          "Every sign solution can be represented by unit vectors, but the relaxation allows more solutions.",
          "The vectors are required to have nonnegative pairwise inner products."
        ],
        "answer": 2,
        "feedback": [
          "The vector solution must still be rounded into two signs.",
          "The objective continues to include every weighted edge.",
          "Correct: the integral feasible set embeds inside the larger vector feasible set.",
          "The relaxation permits negative inner products, which represent useful cut separation."
        ]
      }
    },
    "mechanism": {
      "title": "Compare angular probability with fractional edge value",
      "definitions": [
        {
          "term": "Gram matrix X",
          "meaning": "The matrix Xᵢⱼ=vᵢ·vⱼ, which is positive semidefinite and has unit diagonal for unit vectors."
        },
        {
          "term": "Random hyperplane cut",
          "meaning": "Assign vertex i according to the sign of r·vᵢ for a rotationally symmetric random normal r."
        },
        {
          "term": "Angle θ",
          "meaning": "The angle between two endpoint vectors, so their inner product is cos θ."
        }
      ],
      "paragraphs": [
        "Rotational symmetry reduces a pair of vectors to its two-dimensional span. The hyperplane normal separates the pair on a fraction θ/π of its angular directions. Thus the expected contribution of a nonnegative-weight edge is wθ/π.",
        "The relaxed contribution is w(1−cos θ)/2. A uniform lower bound on their ratio gives the Goemans–Williamson factor, approximately 0.87856. The minimization is over all angles, not just orthogonal or opposite vectors. The interior stationary equation follows by differentiating the ratio."
      ],
      "formula": "αGW = min₀<θ≤π 2θ/[π(1−cos θ)] ≈ 0.87856",
      "question": {
        "prompt": "For orthogonal endpoint vectors, what is the separation probability?",
        "options": [
          "1",
          "0",
          "1/π",
          "1/2"
        ],
        "answer": 3,
        "feedback": [
          "Probability one requires opposite vectors with angle π.",
          "Identical vectors have zero separation probability, not orthogonal vectors.",
          "The angle must be measured in radians and substituted as π/2.",
          "Correct: orthogonality means θ=π/2, giving θ/π=1/2."
        ]
      }
    },
    "example": {
      "title": "Round an equilateral vector solution on a triangle",
      "setup": "A unit-weight triangle has three unit vectors separated pairwise by angle 120 degrees. Every pair has inner product −1/2.",
      "table": {
        "headers": [
          "Quantity",
          "One edge",
          "All three edges"
        ],
        "rows": [
          [
            "SDP contribution",
            "(1+1/2)/2=3/4",
            "9/4"
          ],
          [
            "Separation probability",
            "(2π/3)/π=2/3",
            "Expected cut size 2"
          ],
          [
            "Best integral cut",
            "Not a separate per-edge optimum",
            "2"
          ]
        ]
      },
      "steps": [
        {
          "title": "Check the vector relaxation",
          "explanation": "The vectors can be placed at the three vertices of a centered equilateral triangle on the unit circle, so their Gram matrix is genuinely PSD."
        },
        {
          "title": "Compute the relaxed objective",
          "explanation": "Each edge contributes 3/4, yielding total 9/4=2.25, above the integral optimum of two."
        },
        {
          "title": "Compute the rounded expectation",
          "explanation": "Each edge is cut with probability 2/3. By linearity, the expected total is three times 2/3, or two."
        },
        {
          "title": "Interpret the ratio",
          "explanation": "The ratio 2/(9/4)=8/9 exceeds the global guarantee. This one instance need not attain the worst angle defining αGW."
        }
      ],
      "conclusion": "The example displays a genuine integrality gap and the geometric probability calculation. It does not show that the relaxation always rounds optimally.",
      "question": {
        "prompt": "What is the SDP objective of this vector solution?",
        "options": [
          "9/4",
          "2",
          "3",
          "3/2"
        ],
        "answer": 0,
        "feedback": [
          "Correct: all three edges contribute 3/4.",
          "Two is the best integral cut and also the rounding expectation here.",
          "Three would require every edge to have opposite endpoint vectors, which a triangle cannot realize.",
          "This would be the contribution of three orthogonal-pair values, not the given angles."
        ]
      }
    },
    "proof": {
      "title": "Prove a local comparison and then sum it",
      "paragraphs": [
        "A geometric illustration becomes an approximation theorem only after the same inequality is shown for every possible endpoint angle."
      ],
      "steps": [
        {
          "claim": "Express the integral objective using sign products.",
          "why": "This identifies the rank-one Gram matrices that correspond to actual cuts."
        },
        {
          "claim": "Drop the rank-one requirement while retaining PSD and unit diagonal.",
          "why": "Every feasible integral matrix remains feasible, giving an upper-bound optimization problem."
        },
        {
          "claim": "Show θ/π≥αGW(1−cos θ)/2 for every angle.",
          "why": "The constant is defined as the minimum of the ratio of the two edge expressions."
        },
        {
          "claim": "Multiply by nonnegative weights and add.",
          "why": "The inequality direction is preserved, giving expected cut at least αGW times the SDP optimum and hence αGW times OPT."
        }
      ],
      "question": {
        "prompt": "Which equation characterizes an interior stationary angle of the ratio?",
        "options": [
          "sin θ=1",
          "1−cos θ=θ sin θ",
          "cos θ=0",
          "θ=cos θ"
        ],
        "answer": 1,
        "feedback": [
          "That condition describes a special trigonometric value, not the derivative of the ratio.",
          "Correct: setting the numerator of the quotient derivative to zero gives this equation.",
          "Orthogonality is one angle, not the general stationarity equation.",
          "This unrelated equation omits the denominator’s derivative."
        ]
      }
    },
    "boundary": {
      "title": "Rounding geometry is not a license to ignore hypotheses",
      "paragraphs": [
        "The edgewise comparison uses nonnegative weights, and an implementation must obtain a certified sufficiently accurate feasible SDP solution."
      ],
      "cases": [
        {
          "label": "A negative edge weight",
          "setting": "Multiply the angular lower-bound inequality by w<0.",
          "question": {
            "prompt": "What happens to the inequality direction?",
            "options": [
              "It remains unchanged because angles are nonnegative.",
              "The negative edge disappears from the objective.",
              "It reverses, so the standard nonnegative-weight summation proof no longer applies.",
              "The Gram matrix ceases to be PSD automatically."
            ],
            "answer": 2,
            "feedback": [
              "Multiplication by a negative number reverses inequalities regardless of the angle.",
              "Deleting an edge would change the original optimization problem.",
              "Correct: the usual lower bound depends on multiplying by nonnegative coefficients.",
              "Weights affect the objective; they do not by themselves change Gram feasibility."
            ]
          }
        },
        {
          "label": "A slightly indefinite computed matrix",
          "setting": "A numerical solver returns a matrix with a small negative eigenvalue.",
          "question": {
            "prompt": "What is needed before treating it as a rigorous Gram solution?",
            "options": [
              "Only rounding every matrix entry to an integer.",
              "An assertion that negative eigenvalues are always harmless.",
              "Discarding the unit-diagonal constraints.",
              "A certified feasibility or repair-and-error analysis."
            ],
            "answer": 3,
            "feedback": [
              "Entrywise integer rounding can destroy both PSD structure and unit lengths.",
              "PSD is a mathematical constraint, not a stylistic preference.",
              "The unit-diagonal conditions encode vector normalization and remain necessary.",
              "Correct: numerical error must be controlled while preserving the claimed approximation tolerance."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Use Gram matrices to express the vector relaxation.",
        "Derive separation probability from the angle.",
        "Compare the probability with the relaxed edge value for every angle.",
        "Retain nonnegative weights and a rigorous feasibility/tolerance argument."
      ],
      "retrieval": "Derive the triangle calculation without quoting the algorithm’s name, then explain which extra minimization turns that example into a uniform approximation factor."
    },
    "sourceNote": "Develops Williamson–Shmoys §§6.1–6.2. Polynomial-time semidefinite optimization is an input; this lesson develops the relaxation and rounding analysis."
  },
  "core-color-sdp": {
    "intro": {
      "title": "Color a constant fraction before coloring everything",
      "paragraphs": [
        "A vector 3-coloring assigns unit vectors so that adjacent vertices have inner product at most −1/2. Every actual 3-coloring provides such vectors using an equilateral triangle, but a feasible vector solution need not identify the original three discrete color classes.",
        "Instead of immediately demanding a full coloring, use several random hyperplanes to give each vertex a binary signature. Most edges are likely to receive different signatures. Delete endpoints of the remaining monochromatic edges; the retained vertices form a properly colored constant-size fraction. This semicoloring can be repeated on the remaining induced graph."
      ],
      "question": {
        "prompt": "What is a semicoloring in this construction?",
        "options": [
          "An assignment that allows every edge to be monochromatic.",
          "An actual three-coloring of the whole graph.",
          "A coloring with fractional color names only.",
          "A proper coloring of a constant fraction of the vertices."
        ],
        "answer": 3,
        "feedback": [
          "The retained subgraph must be properly colored, so its edges cannot be monochromatic.",
          "The rounding usually uses more than three colors and initially retains only part of the graph.",
          "The output signatures are discrete colors; the vectors are the fractional relaxation.",
          "Correct: the method first obtains substantial valid partial progress, then iterates."
        ]
      }
    },
    "mechanism": {
      "title": "Amplify edge separation through independent signatures",
      "definitions": [
        {
          "term": "Binary signature",
          "meaning": "The list of sides of t independently sampled hyperplanes containing a vertex vector."
        },
        {
          "term": "Collision edge",
          "meaning": "An edge whose endpoints receive identical signatures."
        },
        {
          "term": "Degree cutoff σ",
          "meaning": "The threshold separating high-degree neighborhood removal from bounded-degree SDP rounding."
        }
      ],
      "paragraphs": [
        "An edge’s angle is at least 2π/3, so one random hyperplane fails to separate it with probability at most 1/3. Independent hyperplanes make the full-signature collision probability at most 3^−t. There are at most nΔ/2 edges when maximum degree is Δ, so linearity bounds the expected number of collisions.",
        "For large degrees, a vertex’s neighborhood is 2-colorable under the 3-colorability promise. Removing large neighborhoods costs O(n/σ) colors. The remaining graph has degree below σ and can be semicolored with O(σ^(log₃2)) signature colors. Balancing these two terms yields the exponent log₆2, followed by a logarithmic factor for repeated semicolorings."
      ],
      "formula": "n/σ = σ^(log₃2) gives color exponent (log₃2)/(1+log₃2)=log₆2",
      "question": {
        "prompt": "After t independent hyperplanes, what upper bound holds for one edge’s signature collision probability?",
        "options": [
          "3^−t",
          "1/3 regardless of t",
          "2^−t",
          "t/3"
        ],
        "answer": 0,
        "feedback": [
          "Correct: all t independent separation failures must occur together.",
          "That would be appropriate if the same hyperplane were reused, not independently resampled.",
          "The edge-failure probability is at most one third, not one half.",
          "Adding probabilities bounds a union; collision is an intersection of failures."
        ]
      }
    },
    "example": {
      "title": "Count signatures and the expected repair cost",
      "setup": "Take n=36 and maximum degree Δ=9. Use t=⌈2+log₃9⌉=4 independent hyperplanes.",
      "table": {
        "headers": [
          "Quantity",
          "Calculation",
          "Value"
        ],
        "rows": [
          [
            "Signature palette",
            "2^4",
            "16 colors"
          ],
          [
            "Collision probability per edge",
            "3^−4",
            "1/81"
          ],
          [
            "Maximum edges",
            "36×9/2",
            "162"
          ],
          [
            "Expected collisions",
            "162/81",
            "at most 2"
          ]
        ]
      },
      "steps": [
        {
          "title": "Create the signature colors",
          "explanation": "Four binary outcomes produce at most sixteen possible signatures, not four colors."
        },
        {
          "title": "Bound the number of bad edges",
          "explanation": "Each of at most 162 edges collides with probability at most 1/81. Their expected total is at most two even if collision events are dependent."
        },
        {
          "title": "Repair the sampled signatures",
          "explanation": "Deleting both endpoints of every collision edge removes at most twice the number of bad edges. The remaining signatures are a proper coloring."
        },
        {
          "title": "Relate expectation to useful outcomes",
          "explanation": "The expected number deleted is at most four, so the expected number retained is at least 32. Markov’s inequality can instead certify positive probability of retaining a required constant fraction."
        }
      ],
      "conclusion": "This bounded-degree calculation is one piece of the full algorithm. The high-degree neighborhood procedure and repeated semicolorings establish the final whole-graph color bound.",
      "question": {
        "prompt": "What is the expected upper bound on the number of collision edges in this example?",
        "options": [
          "4",
          "2",
          "16",
          "162"
        ],
        "answer": 1,
        "feedback": [
          "Four bounds the expected number of deleted endpoints, not collision edges.",
          "Correct: multiply 162 possible edges by collision probability at most 1/81.",
          "Sixteen is the number of signature colors.",
          "One hundred sixty-two is only the maximum number of graph edges before rounding."
        ]
      }
    },
    "proof": {
      "title": "Balance the two ways of spending colors",
      "paragraphs": [
        "The characteristic exponent is an optimization of two algorithmic costs. It does not come from assuming the SDP returns an integral three-coloring."
      ],
      "steps": [
        {
          "claim": "High-degree neighborhoods can be removed using two colors per batch.",
          "why": "Neighbors of a vertex cannot use its color in a promised 3-coloring, so their induced graph is bipartite."
        },
        {
          "claim": "After high-degree removal, maximum degree is below σ.",
          "why": "The process stops only when no remaining vertex meets the degree threshold."
        },
        {
          "claim": "Independent hyperplane signatures semicolor the bounded-degree remainder with O(σ^(log₃2)) colors.",
          "why": "Choose t proportional to log₃σ so collision-edge deletion leaves a constant fraction."
        },
        {
          "claim": "Balance the high- and low-degree terms and repeat.",
          "why": "Choosing σ=n^(1/(1+log₃2)) equalizes their powers; fresh palettes across O(log n) rounds avoid cross-round conflicts."
        }
      ],
      "question": {
        "prompt": "Why are fresh palettes used when semicolorings are repeated?",
        "options": [
          "The graph loses all edges after one round.",
          "A palette must contain exactly three colors.",
          "Edges between different rounds could otherwise receive the same color at both endpoints.",
          "Independent hyperplanes require colors to be real numbers."
        ],
        "answer": 2,
        "feedback": [
          "Only some vertices are removed; many edges remain within or between stages.",
          "The signature palette is generally larger than three.",
          "Correct: separate rounds have not coordinated their color names across connecting edges.",
          "The hyperplanes are geometric tools, but the output colors are discrete labels."
        ]
      }
    },
    "boundary": {
      "title": "Check the promise and the repeated randomness",
      "paragraphs": [
        "Two ingredients support different parts of the construction: 3-colorability supplies vector feasibility and bipartite neighborhoods; independence between hyperplanes amplifies separation."
      ],
      "cases": [
        {
          "label": "Reusing one hyperplane",
          "setting": "The same sampled hyperplane is copied t times to make a signature.",
          "question": {
            "prompt": "What collision bound is justified for an edge of angle 2π/3?",
            "options": [
              "3^−t because the signature has t entries.",
              "Zero for every edge.",
              "2^−t because the entries are binary.",
              "1/3, not 3^−t."
            ],
            "answer": 3,
            "feedback": [
              "The number of repeated entries does not create new randomness.",
              "The hyperplane still fails on a positive fraction of normal directions.",
              "Binary output alone does not imply independent fair bits.",
              "Correct: repeated copies encode one random event, not independent trials."
            ]
          }
        },
        {
          "label": "Removing the 3-colorability promise",
          "setting": "The input graph is arbitrary and may need many colors.",
          "question": {
            "prompt": "Which claim is no longer guaranteed?",
            "options": [
              "Every vertex neighborhood is 2-colorable.",
              "Every graph has at most n(n−1)/2 edges.",
              "A signature can be used as a color label.",
              "Linearity of expectation holds for edge indicators."
            ],
            "answer": 0,
            "feedback": [
              "Correct: the bipartite-neighborhood argument used a global three-coloring.",
              "That edge-count bound remains true for every simple graph.",
              "A binary string remains a valid discrete label regardless of the promise.",
              "Linearity is a general probability identity independent of colorability."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "A vector coloring is a relaxation, not a recovered three-color partition.",
        "Independent hyperplanes exponentially reduce signature collisions.",
        "Delete bad-edge endpoints to obtain a proper partial coloring.",
        "Balance high-degree removal with low-degree rounding and use fresh palettes."
      ],
      "retrieval": "Derive the 1/81 collision bound for four planes, then obtain the exponent log₆2 by balancing n/σ against σ^(log₃2)."
    },
    "sourceNote": "Develops Williamson–Shmoys §6.5. The full source gives the degree-removal and iterative semicoloring details behind the final O(n^0.387 log n)-type bound."
  },
  "core-gaussian-color": {
    "intro": {
      "title": "Select many vertices but make adjacent co-selection rare",
      "paragraphs": [
        "An independent set can be obtained by selecting vertices and then repairing every selected edge. Independent vertex sampling treats adjacent and nonadjacent pairs alike. The vector coloring relaxation offers a better possibility: adjacent vectors point away from one another, so a common Gaussian direction can favor individual vertices while strongly discouraging adjacent pairs.",
        "Project each unit vector onto one standard Gaussian direction and retain vertices whose projection exceeds a threshold t. The retained set may still contain edges. Its useful size is controlled by selected vertices minus a charge for selected edges; the threshold must balance these two expectations."
      ],
      "question": {
        "prompt": "Why can a common Gaussian direction help more than independent vertex sampling?",
        "options": [
          "Adjacent vectors have negative projection correlation, making joint upper-tail selection rare.",
          "All vertices become independent random variables.",
          "Every selected set is automatically independent.",
          "The Gaussian direction reveals an optimal independent set."
        ],
        "answer": 0,
        "feedback": [
          "Correct: the useful dependence is deliberately negative along graph edges.",
          "A single direction induces correlated projections; independence is not claimed.",
          "Some adjacent pairs may still survive and require repair.",
          "The direction is random and supplies an approximation mechanism, not the optimum."
        ]
      }
    },
    "mechanism": {
      "title": "Compare one-vertex tails with two-vertex tails",
      "definitions": [
        {
          "term": "Gaussian projection Zi",
          "meaning": "The inner product vᵢ·r for a unit vector and a standard multivariate Gaussian r; Zi is standard normal."
        },
        {
          "term": "Threshold t",
          "meaning": "A positive value above which a vertex is initially selected."
        },
        {
          "term": "Repair charge",
          "meaning": "Delete at most one endpoint for each selected edge, losing at most the number of such edges."
        }
      ],
      "paragraphs": [
        "For adjacent i,j, the covariance of their projections equals vᵢ·vⱼ≤−1/2. Therefore Var(Zi+Zj)=2+2Cov(Zi,Zj)≤1. If both exceed t, their sum exceeds 2t, which permits a much smaller upper-tail bound than the single-vertex event Zi≥t.",
        "The expected repaired size is at least nPr(Z≥t)−mPr(adjacent pair selected). With m≤nΔ/2, choose t² on the order of (2/3)ln Δ plus suitable constants. The ratio of pair tail to single tail then absorbs the degree factor, leaving a bound of order nΔ^−1/3/√ln Δ in the asymptotic regime."
      ],
      "formula": "E[repaired independent-set size] ≥ ∑ᵢPr(Zi≥t)−∑ᵢⱼ∈E Pr(Zi≥t,Zj≥t)",
      "question": {
        "prompt": "For adjacent projections with covariance −1/2, what is Var(Zi+Zj)?",
        "options": [
          "2",
          "1",
          "3",
          "0"
        ],
        "answer": 1,
        "feedback": [
          "Two would be the variance for independent unit-variance projections.",
          "Correct: 1+1+2(−1/2)=1.",
          "Positive covariance one half would yield three, the opposite geometry.",
          "Variance zero would require perfect anticorrelation of minus one."
        ]
      }
    },
    "example": {
      "title": "Compute a concrete expectation lower bound",
      "setup": "Suppose n=1000, maximum degree Δ=20 and t=2. Use the conservative bounds Pr(N(0,1)≥2)≥0.02275 and Pr(N(0,1)≥4)≤0.00003168. The latter bounds adjacent co-selection through the sum event.",
      "table": {
        "headers": [
          "Charge",
          "Calculation",
          "Bound"
        ],
        "rows": [
          [
            "Selected vertices",
            "1000×0.02275",
            "22.75"
          ],
          [
            "Number of edges",
            "1000×20/2",
            "at most 10000"
          ],
          [
            "Selected-edge charge",
            "10000×0.00003168",
            "at most 0.3168"
          ]
        ]
      },
      "steps": [
        {
          "title": "Count vertex benefit",
          "explanation": "Every unit-vector projection is standard normal, so the expected number selected is approximately 22.75."
        },
        {
          "title": "Bound adjacent-pair harm",
          "explanation": "The sum of an adjacent pair has variance at most one. Both projections above two implies their sum is above four, giving the displayed tail upper bound."
        },
        {
          "title": "Pay for edge repair",
          "explanation": "Delete one endpoint per surviving edge. Even with overlaps, at most the number of surviving edges need be deleted."
        },
        {
          "title": "Subtract expectations",
          "explanation": "The expected repaired size is at least approximately 22.75−0.3168=22.4332. This is an expectation lower bound, not a promise of a fractional-sized output."
        }
      ],
      "conclusion": "The finite values illustrate negative-correlation rounding. They are not an optimized choice of threshold or a universal numerical guarantee for every degree.",
      "question": {
        "prompt": "Using the displayed tail values, what lower bound is obtained after the expected repair charge?",
        "options": [
          "Approximately 0.3168",
          "Exactly 1000/20",
          "Approximately 22.4332",
          "Exactly 22 vertices in every outcome"
        ],
        "answer": 2,
        "feedback": [
          "That is the estimated harm term alone, before subtracting it from the benefit.",
          "The calculation is based on Gaussian tails, not the deterministic expression n/Δ.",
          "Correct: subtract the upper bound on edge repairs from the expected vertex benefit.",
          "Expectation does not assert the same integer output size for every random direction."
        ]
      }
    },
    "proof": {
      "title": "Choose a threshold by balancing exponents",
      "paragraphs": [
        "The proof uses only a lower bound on single-vertex retention and an upper bound on adjacent co-retention. It does not need independent edge events or independent vertex selections."
      ],
      "steps": [
        {
          "claim": "Each projection has the same standard normal marginal.",
          "why": "The vector is unit length and the Gaussian direction has identity covariance."
        },
        {
          "claim": "Adjacent simultaneous exceedance implies a large sum exceedance.",
          "why": "The event {Zi≥t,Zj≥t} is contained in {Zi+Zj≥2t}."
        },
        {
          "claim": "Negative edge covariance gives sum variance at most one.",
          "why": "The vector-coloring constraint bounds the covariance by minus one half."
        },
        {
          "claim": "Optimize n times the vertex tail minus O(nΔ) times the pair tail.",
          "why": "The different Gaussian exponents permit a degree-dependent threshold for which repair costs consume only a controlled fraction of retained vertices."
        }
      ],
      "question": {
        "prompt": "Which implication is used to bound adjacent co-selection?",
        "options": [
          "Zi+Zj≥2t implies both individual projections exceed t.",
          "All adjacent projections are independent.",
          "A small expected edge count means no selected edge can occur.",
          "Zi≥t and Zj≥t implies Zi+Zj≥2t."
        ],
        "answer": 3,
        "feedback": [
          "The converse fails: one large projection can compensate for a smaller other one.",
          "Their negative covariance is the feature used, not independence.",
          "A small expectation still permits bad edges in some outcomes; repair is necessary.",
          "Correct: event containment gives an upper bound using the sum’s tail."
        ]
      }
    },
    "boundary": {
      "title": "Respect the asymptotic range and covariance information",
      "paragraphs": [
        "The final degree expression suppresses absolute constants and applies in a large-degree regime. Tiny degrees and weaker vector geometry must be handled explicitly."
      ],
      "cases": [
        {
          "label": "Maximum degree one",
          "setting": "Substituting Δ=1 into a displayed asymptotic factor involving 1/√ln Δ gives division by zero.",
          "question": {
            "prompt": "What is the appropriate response?",
            "options": [
              "Use a separate elementary bounded-degree argument instead of that asymptotic expression.",
              "Conclude the graph has an infinite independent set.",
              "Replace ln 1 by one without explanation.",
              "Declare no independent set exists."
            ],
            "answer": 0,
            "feedback": [
              "Correct: asymptotic formulas are not literal expressions at singular small parameters.",
              "A finite graph cannot have an infinite vertex subset.",
              "Changing the expression requires a justified uniform convention or separate case.",
              "Every nonempty graph has at least a one-vertex independent set."
            ]
          }
        },
        {
          "label": "Weaker angular separation",
          "setting": "Adjacent vectors now have inner product zero rather than at most −1/2.",
          "question": {
            "prompt": "What happens to the sum-variance calculation?",
            "options": [
              "It remains at most one for the same reason.",
              "It can rise to two, weakening the joint-tail bound.",
              "Both projections become deterministic.",
              "Every edge is excluded with probability one."
            ],
            "answer": 1,
            "feedback": [
              "The old bound used a negative covariance of at most minus one half.",
              "Correct: Var(Zi+Zj)=2 with zero covariance, so the previous exponent is unavailable.",
              "Unit Gaussian marginals remain random with variance one.",
              "Orthogonality does not prevent simultaneous positive projections."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Use shared Gaussian randomness to exploit negative correlations.",
        "Bound joint selection by a sum event with controlled variance.",
        "Subtract expected repair cost from expected selected mass.",
        "Retain logarithmic tail factors and handle small degrees separately."
      ],
      "retrieval": "Starting with covariance at most −1/2, derive the sum-tail comparison and explain why balancing its exponent with the single-vertex tail produces a Δ^−1/3 scale."
    },
    "sourceNote": "Develops Williamson–Shmoys §13.2. The source supplies detailed Gaussian-tail estimates and constants; the displayed finite-tail values are rounded numerical illustrations."
  },
  "core-dual-cover": {
    "intro": {
      "title": "Buy a set when its dual budget is exactly filled",
      "paragraphs": [
        "Set cover asks for sets whose union contains every required element. The primal–dual viewpoint gives each element a nonnegative price yᵤ. A set imposes a budget constraint: the sum of prices of its elements cannot exceed its purchase cost. Any prices obeying all these budgets form a lower-bound certificate for the optimal cover.",
        "The algorithm increases the price of an uncovered element until a set containing it becomes tight, then buys that set. Tightness lets us rewrite the final purchase cost in terms of element prices. The approximation factor measures how many times one element’s price can be charged across the bought sets."
      ],
      "question": {
        "prompt": "What does a dual-feasible element-price assignment certify?",
        "options": [
          "Its total price is always the exact optimum.",
          "Its total price is a lower bound on the cost of every feasible cover.",
          "Every tight set must belong to every optimum cover.",
          "The priced elements may be omitted from the output."
        ],
        "answer": 1,
        "feedback": [
          "A feasible dual solution can be far below the optimal dual or primal value.",
          "Correct: summing feasible set budgets against any integral cover establishes weak duality.",
          "Tightness is an algorithmic purchase opportunity, not a necessity claim about all optimal covers.",
          "The primal solution must still cover every required element."
        ]
      }
    },
    "mechanism": {
      "title": "Count incidence frequency in the charging identity",
      "definitions": [
        {
          "term": "Dual constraint for S",
          "meaning": "The inequality ∑ᵤ∈S yᵤ≤cS, with all element prices nonnegative."
        },
        {
          "term": "Tight set",
          "meaning": "A set whose dual sum equals its cost."
        },
        {
          "term": "Frequency f",
          "meaning": "The maximum number of input sets containing any one element."
        }
      ],
      "paragraphs": [
        "When an uncovered element’s price rises, every containing set’s slack decreases at the same rate. Stop at the first tight constraint, buy a corresponding set and mark all its elements covered. Because purchased sets cover the current element, future raised elements do not belong to them, preserving their tightness.",
        "The final cost is ∑boughtS∑ᵤ∈S yᵤ. Reverse the summation order: each yᵤ is repeated as many times as the element appears in bought sets. This multiplicity is at most its input frequency, hence at most f. Weak duality then converts the charge into fOPT."
      ],
      "formula": "cost(bought sets)=∑ᵤ yᵤ·bought-incidences(u) ≤ f∑ᵤyᵤ ≤ fOPT",
      "question": {
        "prompt": "Which parameter controls how many times one element’s dual price appears in the purchased-set cost?",
        "options": [
          "The number of elements in the largest set.",
          "The number of colors in a graph.",
          "The number of sets containing that element.",
          "The largest element label."
        ],
        "answer": 2,
        "feedback": [
          "Set cardinality counts in the other direction and does not bound this multiplicity.",
          "There is no coloring parameter in this set-cover charging argument.",
          "Correct: reversing the incidence sum counts memberships of that particular element.",
          "Names or labels have no mathematical effect on incidence frequency."
        ]
      }
    },
    "example": {
      "title": "Track prices until two sets become tight",
      "setup": "Let U={a,b,c}. Sets are S1={a,b} of cost 4, S2={b,c} of cost 3, and S3={a,c} of cost 5. Start all dual prices at zero; process uncovered a first, then c.",
      "table": {
        "headers": [
          "Set",
          "Final dual sum",
          "Cost / status"
        ],
        "rows": [
          [
            "S1",
            "ya+yb=4",
            "4 / tight and bought"
          ],
          [
            "S2",
            "yb+yc=1",
            "3 / slack"
          ],
          [
            "S3",
            "ya+yc=5",
            "5 / tight and bought"
          ]
        ]
      },
      "steps": [
        {
          "title": "Raise the first uncovered price",
          "explanation": "Increase ya until it reaches 4. S1 becomes tight before S3, so buy S1 and cover a and b."
        },
        {
          "title": "Cover the remaining element",
          "explanation": "Increase yc. S3 has only one unit of remaining slack, whereas S2 has three. At yc=1, buy S3 and cover c."
        },
        {
          "title": "Evaluate the output and certificate",
          "explanation": "The bought cover costs 4+5=9. The feasible dual objective is ya+yb+yc=5."
        },
        {
          "title": "Check the multiplicities",
          "explanation": "Price ya=4 is counted in two bought sets, and yc=1 in one, giving 2×4+1=9. Frequency is two, so cost≤2×5=10≤2OPT. The actual optimum S1+S2 costs 7."
        }
      ],
      "conclusion": "The particular dual certificate need not be optimal. It only needs to be feasible, and its repeated charges must be controlled correctly.",
      "question": {
        "prompt": "What is the purchased cover’s cost in this run?",
        "options": [
          "5",
          "7",
          "10",
          "9"
        ],
        "answer": 3,
        "feedback": [
          "Five is the constructed dual objective, not the primal purchase cost.",
          "Seven is the optimum obtained by a different pair of sets.",
          "Ten is the frequency-times-dual upper bound, which can be loose.",
          "Correct: the algorithm bought S1 and S3 at costs four and five."
        ]
      }
    },
    "proof": {
      "title": "Use feasibility, tightness and multiplicity in that order",
      "paragraphs": [
        "These are three separate invariants. Covering every element proves primal feasibility; stopping at tightness preserves the dual lower bound; the frequency calculation compares their objectives."
      ],
      "steps": [
        {
          "claim": "No dual constraint is exceeded during a price increase.",
          "why": "The increase stops as soon as its first containing set’s slack reaches zero."
        },
        {
          "claim": "Every processed uncovered element becomes covered.",
          "why": "The set bought at that stopping time contains it."
        },
        {
          "claim": "Purchased sets remain tight after purchase.",
          "why": "Every element of a purchased set is covered, so none of those prices is raised later."
        },
        {
          "claim": "Each price is charged at most f times.",
          "why": "The purchased sets are among the input sets containing that element; weak duality finishes the factor bound."
        }
      ],
      "question": {
        "prompt": "Why would continuing to raise a price after one containing set becomes tight be dangerous?",
        "options": [
          "It can violate that set’s dual constraint and destroy the lower-bound certificate.",
          "It automatically improves the approximation factor.",
          "It makes the set cheaper in the input.",
          "It changes the number of elements in the universe."
        ],
        "answer": 0,
        "feedback": [
          "Correct: a price above its set budget is no longer dual-feasible.",
          "A larger infeasible dual value does not certify a valid comparison with OPT.",
          "Input costs are fixed; the dual update does not change them.",
          "Only a variable value changes, not the combinatorial input."
        ]
      }
    },
    "boundary": {
      "title": "Frequency is not set size",
      "paragraphs": [
        "Two incidence parameters can look similar in notation while serving different analyses. Inspect the reversed sum to see which one the proof really needs."
      ],
      "cases": [
        {
          "label": "Many tiny sets share one element",
          "setting": "There are 100 sets {a,bᵢ}, each costing one. All are necessary to cover their distinct bᵢ elements.",
          "question": {
            "prompt": "What is the frequency of a?",
            "options": [
              "2",
              "100",
              "1",
              "0"
            ],
            "answer": 1,
            "feedback": [
              "Two is each set’s cardinality, not the number of sets containing a.",
              "Correct: the same element belongs to all one hundred sets.",
              "A belongs to more than one set; its repeated charge can be large.",
              "It is explicitly included in every listed set."
            ]
          }
        },
        {
          "label": "An uncoverable element",
          "setting": "Some required element belongs to no input set.",
          "question": {
            "prompt": "What must be handled before claiming the algorithm returns a cover?",
            "options": [
              "Raise that element’s dual price until a nonexistent set becomes tight.",
              "Delete the element without changing the problem.",
              "The instance is infeasible and must be detected.",
              "Return any cheap set as a feasible answer."
            ],
            "answer": 2,
            "feedback": [
              "No containing constraint exists to provide such a stopping event.",
              "Removing a required element changes the original feasibility requirement.",
              "Correct: coverability is needed for the stopping and primal-feasibility arguments.",
              "A set that misses the element cannot form a feasible cover."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "A feasible dual objective is a lower-bound certificate.",
        "Stop a price increase at the first tight set.",
        "Purchased sets stay tight because only uncovered-element prices rise.",
        "Reverse the charging sum and bound membership frequency, not set cardinality."
      ],
      "retrieval": "Run the three-set example with a different first uncovered element, then derive its final cost as a sum of dual prices times bought-set incidences."
    },
    "sourceNote": "Develops Williamson–Shmoys §7.1. This is the bounded-frequency primal–dual algorithm, not the separate harmonic-number analysis of greedy set cover."
  },
  "core-dual-path": {
    "intro": {
      "title": "A tight edge collection is not yet a shortest path",
      "paragraphs": [
        "For an s–t path, every cut separating s from t must be crossed. Give each such cut a dual price, subject to the requirement that the prices of cuts crossed by any edge sum to at most that edge’s cost. A feasible set of cut prices lower-bounds every s–t path.",
        "Grow the cut around the currently reached tree until an edge becomes tight, then add it and expand the tree. At termination the tight tree may contain branches irrelevant to reaching t. Removing those branches is essential: tightness expresses cost as cut prices times crossing multiplicities, and an unnecessarily large tree can pay the same cut more than once."
      ],
      "question": {
        "prompt": "Why does buying only tight edges not by itself establish exact optimality?",
        "options": [
          "Tight edges always have negative costs.",
          "A dual objective is an upper bound on shortest-path cost.",
          "The bought subgraph may cross a positive-price cut multiple times and include useless branches.",
          "The endpoints s and t become identical."
        ],
        "answer": 2,
        "feedback": [
          "With nonnegative input costs, tightness does not imply a negative edge cost.",
          "Dual feasibility gives a lower bound for this minimization problem.",
          "Correct: tightness gives an accounting identity, but multiplicities determine whether that identity is exact.",
          "The algorithm must still connect two specified terminals."
        ]
      }
    },
    "mechanism": {
      "title": "Grow connected reached sets, then prune",
      "definitions": [
        {
          "term": "s–t separating cut S",
          "meaning": "A vertex set containing s but not t, with boundary edges δ(S)."
        },
        {
          "term": "Edge slack",
          "meaning": "Its cost minus the sum of current dual prices of cuts it crosses."
        },
        {
          "term": "Pruning",
          "meaning": "Remove edges unnecessary for maintaining an s–t connection; in the constructed tree this leaves its unique s–t path."
        }
      ],
      "paragraphs": [
        "The raised vertex sets grow with the reached tree, so they form nested connected regions. Dual growth stops at tight edges, maintaining nonnegative slack. Adding a tight edge extends the reached tree rather than purchasing arbitrary cycles.",
        "For the pruned tree path, each positive-price reached-set cut is crossed exactly once. A tree path cannot leave such a connected rooted region and later reenter it without creating an alternative internal connection and hence a cycle. Thus the final cost equals the sum of raised cut prices."
      ],
      "formula": "cost(P)=∑S yS·|P∩δ(S)|=∑S yS≤OPT",
      "question": {
        "prompt": "What property turns the final charging bound into an equality with the dual objective?",
        "options": [
          "Every s–t cut has the same cardinality.",
          "Every tight edge must be retained.",
          "The number of vertices equals the path cost.",
          "The final path crosses each positive-price grown cut exactly once."
        ],
        "answer": 3,
        "feedback": [
          "Cut cardinalities may vary and are not the equality condition.",
          "Discarding unnecessary tight branches is part of the construction.",
          "Costs are arbitrary nonnegative input values, not vertex counts.",
          "Correct: every positive dual price then appears with multiplicity one."
        ]
      }
    },
    "example": {
      "title": "Pay once for a path instead of twice for a branch cut",
      "setup": "There are edges s–a, a–t and s–b, each of cost one. Raise cut {s} to price one, making s–a and s–b tight; then raise reached cut {s,a,b} to price one, making a–t tight.",
      "table": {
        "headers": [
          "Positive-price cut",
          "Price",
          "Tight-tree crossings"
        ],
        "rows": [
          [
            "{s}",
            "1",
            "s–a and s–b: two"
          ],
          [
            "{s,a,b}",
            "1",
            "a–t: one"
          ]
        ]
      },
      "steps": [
        {
          "title": "Check the dual budgets",
          "explanation": "Edge s–a pays for the first cut only, s–b pays for the first cut only, and a–t pays for the second cut only. Every cost-one edge has total charge one."
        },
        {
          "title": "Count the whole tree cost",
          "explanation": "The tight edge collection has three edges and cost three, while the dual objective is only two."
        },
        {
          "title": "Remove the unnecessary branch",
          "explanation": "Delete s–b. The remaining unique s–t path is s–a–t and has cost two."
        },
        {
          "title": "Read the optimality certificate",
          "explanation": "The path crosses each positive-price cut once, so its cost equals the feasible dual value two. Every s–t path costs at least two, proving exactness."
        }
      ],
      "conclusion": "The algorithm’s certificate is the combination of a feasible path and a feasible equal-valued dual solution. A large connected tight subgraph alone does not give that certificate.",
      "question": {
        "prompt": "What is the cost after pruning the displayed tight tree to an s–t path?",
        "options": [
          "2",
          "3",
          "1",
          "0"
        ],
        "answer": 0,
        "feedback": [
          "Correct: only the two cost-one edges s–a and a–t remain.",
          "Three includes the unnecessary branch to b.",
          "No single listed edge directly connects s to t.",
          "All edges on the required path have positive cost."
        ]
      }
    },
    "proof": {
      "title": "Match a feasible path to a lower bound",
      "paragraphs": [
        "The exact shortest-path result is stronger than a constant-factor primal–dual argument. Its special structural feature is the single crossing of each grown cut."
      ],
      "steps": [
        {
          "claim": "The cut prices remain dual-feasible.",
          "why": "Growth stops before any edge’s accumulated cut charge would exceed its cost."
        },
        {
          "claim": "The bought edges build a tree connecting the reached region.",
          "why": "Each added edge attaches an unreached part through a tight boundary edge."
        },
        {
          "claim": "Pruning leaves the tree’s unique s–t path.",
          "why": "Branches not lying on that path contribute nothing to terminal connectivity."
        },
        {
          "claim": "Every positively grown cut is crossed once by this path.",
          "why": "Its s-side reached vertices are connected inside the tree; reentry would contradict the tree structure."
        }
      ],
      "question": {
        "prompt": "What finally proves that the pruned path is optimal rather than only approximately good?",
        "options": [
          "It contains the largest possible number of tight edges.",
          "Its feasible cost equals a feasible dual lower bound.",
          "Its edges all have the same cost.",
          "The original graph is itself a tree."
        ],
        "answer": 1,
        "feedback": [
          "Extra tight edges can increase cost without improving connectivity.",
          "Correct: weak duality sandwiches OPT between two equal objective values.",
          "Equal costs were used only in the example, not in the theorem.",
          "The input can contain many cycles; the constructed edge set is what is controlled."
        ]
      }
    },
    "boundary": {
      "title": "Not every separating cut is crossed once",
      "paragraphs": [
        "Single crossing is proved for the algorithm’s grown connected cuts. It is not a property of an arbitrary s–t path against every possible separating vertex set."
      ],
      "cases": [
        {
          "label": "An arbitrary disconnected s-side",
          "setting": "A path is s–u–v–t, and take S={s,v}.",
          "question": {
            "prompt": "How many edges of the path cross δ(S)?",
            "options": [
              "1",
              "2",
              "3",
              "0"
            ],
            "answer": 2,
            "feedback": [
              "The single-crossing theorem applies to the grown connected reached regions, not this arbitrary S.",
              "An s–t separating cut is crossed an odd number of times by this path.",
              "Correct: s–u, u–v and v–t all have endpoints on opposite sides.",
              "The path begins in S and ends outside it, so zero crossings is impossible."
            ]
          }
        },
        {
          "label": "Keeping every tight branch",
          "setting": "A feasible tight tree contains several branches that do not lie on its s–t path.",
          "question": {
            "prompt": "What must the exactness argument do?",
            "options": [
              "Charge every branch for free.",
              "Assume their edge costs vanish.",
              "Replace weak duality by the opposite inequality.",
              "Remove unnecessary branches and analyze the surviving path’s cut multiplicities."
            ],
            "answer": 3,
            "feedback": [
              "Tight branches can have positive cost and cannot simply disappear from accounting.",
              "Tightness means a dual constraint is met, not that the edge has zero cost.",
              "Weak duality retains its usual direction throughout the proof.",
              "Correct: pruning supplies the multiplicity-one structure needed for equality."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Use cut prices as a lower-bound certificate for path cost.",
        "Maintain edge slack while expanding a reached tree.",
        "Prune tight branches before claiming exactness.",
        "Prove single crossings for grown connected cuts, not all cuts."
      ],
      "retrieval": "Reconstruct the three-edge example and identify the precise place where the whole tight tree costs more than the dual value. Then prove why pruning removes that discrepancy."
    },
    "sourceNote": "Develops Williamson–Shmoys §7.3. The reader follows the cut-growing and pruning interpretation of the assigned shortest-path algorithm."
  },
  "core-steiner": {
    "intro": {
      "title": "Several connection demands create branching",
      "paragraphs": [
        "Generalized Steiner tree, also called Steiner forest, specifies pairs of vertices that must become connected. The solution may be a forest because unrelated demand groups need not join each other. A cut is relevant whenever it separates the endpoints of at least one required pair.",
        "Unlike the one-path problem, several demands naturally create branches. A positive dual cut may be crossed several times by the final forest. The factor-two proof therefore does not bound every component’s degree by two; it bounds an aggregate sum of active-component degrees after pruning unnecessary edges."
      ],
      "question": {
        "prompt": "What makes a component active during dual growth?",
        "options": [
          "It contains any terminal, even if all its demands are internally connected.",
          "It has the largest number of graph edges.",
          "Its degree is exactly two.",
          "It separates the endpoints of at least one required demand pair."
        ],
        "answer": 3,
        "feedback": [
          "Terminal presence alone does not imply a still-separated required pair.",
          "Graph size is not the activity criterion.",
          "Components can have many different degrees, including greater than two.",
          "Correct: activity measures an unmet connection requirement across the component boundary."
        ]
      }
    },
    "mechanism": {
      "title": "Grow every active moat at the same rate",
      "definitions": [
        {
          "term": "Demand pair",
          "meaning": "A specified pair whose endpoints must belong to the same output component."
        },
        {
          "term": "Active component",
          "meaning": "A current component containing exactly one endpoint of some still-separated demand pair."
        },
        {
          "term": "Contracted forest",
          "meaning": "The pruned final forest viewed after contracting the components present during a growth interval."
        }
      ],
      "paragraphs": [
        "Raise the dual variables of all active components uniformly. An edge between two active components spends its remaining slack at rate two, while one between an active and inactive component spends it at rate one. Buy tight edges and merge the relevant components.",
        "Prune bought edges that are unnecessary for meeting the demands. In the contracted pruned forest, inactive nonisolated components cannot be useless leaves. The forest degree identity then bounds the sum of active-component degrees by at most twice their number. Integrating this cost-growth bound over all intervals yields twice the dual objective."
      ],
      "formula": "during each growth interval: ∑active C degreeF(C) ≤ 2·number of active components",
      "question": {
        "prompt": "If an edge joins two distinct active components whose duals each rise by δ, how much additional dual charge does it receive?",
        "options": [
          "2δ",
          "δ",
          "0",
          "δ²"
        ],
        "answer": 0,
        "feedback": [
          "Correct: the edge crosses both growing component boundaries.",
          "That rate applies when only one endpoint component is active.",
          "An edge crossing active cuts does consume slack.",
          "Dual constraints are linear sums, so the charge is linear in δ."
        ]
      }
    },
    "example": {
      "title": "An active component can have degree four",
      "setup": "Consider a unit-cost star with center c and four leaves ℓ1,…,ℓ4. Demand pairs are (c,ℓi) for every leaf. Initially all five singleton components are active.",
      "table": {
        "headers": [
          "Component group",
          "Count",
          "Total degree in final star"
        ],
        "rows": [
          [
            "Center component",
            "1",
            "4"
          ],
          [
            "Leaf components",
            "4",
            "4"
          ],
          [
            "All active components",
            "5",
            "8"
          ]
        ]
      },
      "steps": [
        {
          "title": "Grow all five singleton prices",
          "explanation": "Every star edge crosses the center cut and its own leaf cut, so its charge grows at twice the common rate."
        },
        {
          "title": "Reach tightness",
          "explanation": "At growth time 1/2, each unit-cost edge has charge 1/2+1/2=1 and becomes tight."
        },
        {
          "title": "Evaluate primal and dual objectives",
          "explanation": "Buying the four star edges costs four. The five dual variables have value 1/2 each, so their objective is 2.5."
        },
        {
          "title": "Check the aggregate degree inequality",
          "explanation": "The active degree sum is eight, which is at most 2×5=10. Yet the center’s individual degree is four, disproving the incorrect pointwise degree-at-most-two claim."
        }
      ],
      "conclusion": "The instance is solved optimally, but the proof’s factor-two upper bound is five. Approximation analyses can be slack even on exactly solved examples.",
      "question": {
        "prompt": "What is the degree sum over all initially active contracted components?",
        "options": [
          "5",
          "8",
          "4",
          "10"
        ],
        "answer": 1,
        "feedback": [
          "Five counts components, not their incident forest edges.",
          "Correct: four star edges each contribute two endpoint incidences.",
          "Four counts edges once rather than summing endpoint degrees.",
          "Ten is the upper bound twice the number of active components, not the actual sum."
        ]
      }
    },
    "proof": {
      "title": "Use a forest identity instead of a false pointwise claim",
      "paragraphs": [
        "Every tight edge’s final cost can be expressed through the dual growth intervals that charged it. The structural lemma must therefore control the edge incidences exposed during each such interval."
      ],
      "steps": [
        {
          "claim": "Uniform active-component growth preserves dual feasibility until a tight-edge event.",
          "why": "Edge slack decreases at the number of active component cuts crossing it, and the next event is chosen before slack becomes negative."
        },
        {
          "claim": "Pruning retains all required pair connections.",
          "why": "Only edges unnecessary for those feasibility requirements are removed."
        },
        {
          "claim": "An inactive nonisolated contracted component cannot be an unnecessary leaf.",
          "why": "Its lone incident edge would serve no still-separated demand crossing that component and would have been pruned."
        },
        {
          "claim": "Sum degrees in the contracted forest and integrate the bound.",
          "why": "A forest has total degree below twice its vertex count; accounting for inactive degrees leaves at most twice the number of active components."
        }
      ],
      "question": {
        "prompt": "Why does a degree-four active component not invalidate the factor-two proof?",
        "options": [
          "Degree four equals degree two after rounding.",
          "Every degree-four component is inactive by definition.",
          "The proof bounds the sum of active degrees, not each active degree separately.",
          "The component’s dual price must be zero."
        ],
        "answer": 2,
        "feedback": [
          "Degrees are exact integers; there is no such rounding step.",
          "Activity depends on separated demand pairs, not on a degree threshold.",
          "Correct: low-degree components compensate for branching in the aggregate forest inequality.",
          "The star example gives the center a positive dual price of one half."
        ]
      }
    },
    "boundary": {
      "title": "Demand feasibility determines the geometry of growth",
      "paragraphs": [
        "A component can contain many terminals and still be inactive if every demanded pair touching it has both endpoints inside. Conversely one terminal can keep a cut active when its partner remains outside."
      ],
      "cases": [
        {
          "label": "All demands inside a component",
          "setting": "Every endpoint in component C has its required partner inside C, though C contains many terminals.",
          "question": {
            "prompt": "Must C remain active solely because it contains terminals?",
            "options": [
              "Yes; every nonempty terminal component grows forever.",
              "Yes; activity is equivalent to having positive degree.",
              "No; all terminal vertices should now be deleted.",
              "No; none of those pairs is separated by C."
            ],
            "answer": 3,
            "feedback": [
              "Such a rule would grow variables after their relevant demands were already satisfied.",
              "Degree and activity play different roles in the analysis.",
              "Satisfied terminals stay in the feasible solution; inactivity does not remove them.",
              "Correct: activity is tied to a crossing unmet requirement."
            ]
          }
        },
        {
          "label": "Skipping the pruning phase",
          "setting": "The tight bought forest has a leaf branch serving no required connection.",
          "question": {
            "prompt": "Why is it unsafe to claim the standard factor-two analysis immediately?",
            "options": [
              "The inactive-component structural lemma may fail before unnecessary branches are removed.",
              "The dual prices automatically become infeasible at termination.",
              "A forest can no longer connect a demand pair.",
              "All edge costs become negative."
            ],
            "answer": 0,
            "feedback": [
              "Correct: pruning is part of the theorem’s structural justification, not just a cosmetic saving.",
              "Termination does not by itself destroy an already feasible dual.",
              "A forest can satisfy many demand pairs; the issue is excessive charged structure.",
              "Input costs remain the same nonnegative values."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Activate components according to separated required pairs.",
        "Charge an edge for every active cut it crosses.",
        "Prune unnecessary structure before using the degree lemma.",
        "Bound aggregate active degrees and integrate growth over time."
      ],
      "retrieval": "Use the four-leaf star to refute a pointwise degree claim, then explain how the forest identity still proves the aggregate factor-two bound."
    },
    "sourceNote": "Develops Williamson–Shmoys §7.4. The full contracted-forest and pruning lemma should be reconstructed from the assigned source for a complete examination proof."
  },
  "core-tree-metrics": {
    "intro": {
      "title": "Randomize the tree to protect each original pair",
      "paragraphs": [
        "Trees simplify routing because every vertex pair has a unique connecting path. Replacing an arbitrary metric by one fixed spanning tree, however, can stretch a short original connection into a very long tree route. A minimum spanning tree optimizes total tree-edge weight, not every pair’s distortion.",
        "A distribution over suitable dominating tree metrics can control the expected stretch of each fixed pair. This is a statement about a pair chosen before the tree is sampled. It is not a statement that every sampled tree has small maximum distortion. That quantifier distinction is essential when transferring a fixed optimal network solution into the tree."
      ],
      "question": {
        "prompt": "What does a pairwise expected-stretch bound control?",
        "options": [
          "For each fixed pair, its expected tree distance relative to original distance.",
          "The maximum pair stretch in every sampled tree.",
          "The number of vertices in every original path.",
          "The cost of every deterministic spanning tree."
        ],
        "answer": 0,
        "feedback": [
          "Correct: the expectation is taken after fixing the original pair.",
          "Moving the maximum inside the expectation is a stronger, generally unsupported statement.",
          "Stretch compares distances, not simply path vertex counts.",
          "The theorem concerns a carefully chosen randomized construction, not all trees."
        ]
      }
    },
    "mechanism": {
      "title": "Charge a fixed network edge by edge",
      "definitions": [
        {
          "term": "Dominating tree metric",
          "meaning": "A tree distance satisfying dT(u,v)≥d(u,v) for every original pair."
        },
        {
          "term": "Expected stretch α",
          "meaning": "A bound E[dT(u,v)]≤αd(u,v), with α=O(log n) for the assigned construction."
        },
        {
          "term": "Concave capacity cost f",
          "meaning": "A nondecreasing concave function with f(0)=0, so merging capacities costs no more than charging them separately."
        }
      ],
      "paragraphs": [
        "The hierarchical embedding uses randomized partition choices and controls a pair’s probability of separation at each scale. Summing the scale contributions gives the logarithmic expected distortion. Auxiliary tree vertices must be handled as in the source before treating tree edges as routes between original vertices.",
        "For buy-at-bulk transfer, fix an optimal original capacity vector before sampling. Route each original edge’s capacity along its tree path. Concavity gives subadditivity when those loads merge, so expected tree cost is bounded by summing each fixed original edge’s cost coefficient times its expected tree distance. A feasible tree solution can then be mapped back using the source’s controlled routing."
      ],
      "formula": "E[∑e f(c*e)dT(e)] ≤ α∑e f(c*e)d(e)",
      "question": {
        "prompt": "Why can dependent tree distances still be summed in this expectation calculation?",
        "options": [
          "Every pair distance is generated by an independent tree.",
          "Linearity of expectation does not require independence between distances.",
          "All original capacities are zero.",
          "The maximum can always be exchanged with expectation."
        ],
        "answer": 1,
        "feedback": [
          "One shared sampled tree determines the distances, which are generally dependent.",
          "Correct: fix the edge-capacity coefficients, then add their individual expected contributions.",
          "The argument applies to an arbitrary fixed feasible capacity vector.",
          "A maximum is nonlinear; its interchange is precisely the dangerous step."
        ]
      }
    },
    "example": {
      "title": "A cycle separates pairwise expectation from worst stretch",
      "setup": "Take a six-vertex unit cycle. Form a random spanning tree by deleting one uniformly chosen cycle edge. For a fixed adjacent pair u,v, its original distance is one.",
      "table": {
        "headers": [
          "Deleted edge",
          "Probability",
          "Tree distance between u,v"
        ],
        "rows": [
          [
            "The edge u–v",
            "1/6",
            "5"
          ],
          [
            "Any other edge",
            "5/6",
            "1"
          ]
        ]
      },
      "steps": [
        {
          "title": "Inspect a deterministic tree",
          "explanation": "Whichever edge is deleted, its endpoints are stretched from original distance one to tree distance five. Thus the maximum stretch of every resulting tree is five."
        },
        {
          "title": "Fix one pair before sampling",
          "explanation": "The specified pair u,v experiences distance five only with probability 1/6; otherwise its own edge remains and its distance is one."
        },
        {
          "title": "Average its distance",
          "explanation": "The expectation is (1/6)×5+(5/6)×1=5/3. This is much smaller than the always-present maximum stretch five."
        },
        {
          "title": "Check a capacity merge",
          "explanation": "For the concave function f(c)=√c, merging loads 9 and 16 costs f(25)=5, while separate charges sum to f(9)+f(16)=7. This illustrates the subadditivity used in routing transfer."
        }
      ],
      "conclusion": "This cycle distribution is a teaching example, not the general hierarchical embedding algorithm. It shows why pairwise expected statements and worst-pair statements must be distinguished.",
      "question": {
        "prompt": "What is the expected tree distance of the fixed adjacent pair in the six-cycle example?",
        "options": [
          "5",
          "1",
          "5/3",
          "6"
        ],
        "answer": 2,
        "feedback": [
          "Five is the maximum pair stretch in each tree, not this fixed pair’s expectation.",
          "The chosen pair’s own edge is deleted with positive probability, so its expectation exceeds one.",
          "Correct: weight distance five by 1/6 and distance one by 5/6.",
          "A six-vertex path has five edges, not six between its endpoints."
        ]
      }
    },
    "proof": {
      "title": "Transfer a fixed optimum before optimizing on the tree",
      "paragraphs": [
        "A useful comparison is built from a fixed original optimum. If the benchmark were chosen after seeing the random tree without justification, the pairwise expectation theorem would not automatically apply to its choice."
      ],
      "steps": [
        {
          "claim": "The embedding dominates original pair distances.",
          "why": "This prevents a tree solution from obtaining artificial savings by contracting original distances."
        },
        {
          "claim": "A fixed original capacity solution induces feasible tree routing.",
          "why": "Replace each original edge by its unique tree path and combine the capacities it carries."
        },
        {
          "claim": "Merged capacity cost is at most the sum of separate charges.",
          "why": "Concavity, nonnegativity and f(0)=0 imply f(a+b)≤f(a)+f(b). Laying separate charges over a route therefore upper-bounds its merged cost."
        },
        {
          "claim": "Apply pairwise expected stretch and map a tree solution back.",
          "why": "Linearity bounds the fixed benchmark’s expected tree cost; the source’s mapping and auxiliary-vertex treatment then control the original-space solution."
        }
      ],
      "question": {
        "prompt": "Which inequality expresses the concave cost property needed when two routed loads merge?",
        "options": [
          "f(a+b)≥f(a)+f(b) for every concave f",
          "f(a+b)=f(a)f(b)",
          "f(a+b)=0",
          "f(a+b)≤f(a)+f(b)"
        ],
        "answer": 3,
        "feedback": [
          "That inequality describes the opposite charging behavior and need not hold for concave functions.",
          "A product formula does not follow from concavity.",
          "Positive loads may have positive cost; normalization only specifies f(0)=0.",
          "Correct: merging loads cannot cost more than the separate accounting charges."
        ]
      }
    },
    "boundary": {
      "title": "Do not replace the randomized embedding by an MST",
      "paragraphs": [
        "The tree is chosen to satisfy distortion properties, not simply to minimize its own edge sum. Its theorem’s quantifiers must remain visible throughout the reduction."
      ],
      "cases": [
        {
          "label": "One fixed cycle MST",
          "setting": "Delete a fixed edge from an n-vertex unit cycle.",
          "question": {
            "prompt": "What stretch occurs for the endpoints of that deleted edge?",
            "options": [
              "n−1",
              "1",
              "O(1/n)",
              "0"
            ],
            "answer": 0,
            "feedback": [
              "Correct: the remaining tree route traverses all other n−1 cycle edges.",
              "The direct unit edge is no longer present in the tree.",
              "The tree distance grows rather than contracts for this pair.",
              "Distinct vertices in a positive-edge tree have positive distance."
            ]
          }
        },
        {
          "label": "Moving a maximum inside expectation",
          "setting": "Every fixed pair has expected stretch at most α.",
          "question": {
            "prompt": "Does this alone establish E[maxpair stretch]≤α?",
            "options": [
              "Yes; maxima are linear operators.",
              "No; the worst pair may depend on the sampled tree.",
              "Yes; domination removes all randomness.",
              "No; expectation is undefined for finite distributions."
            ],
            "answer": 1,
            "feedback": [
              "A maximum is nonlinear, so linearity of expectation cannot justify that exchange.",
              "Correct: each sampled tree can have a different badly stretched pair.",
              "Domination is a distance inequality, not a statement of determinism.",
              "Finite examples such as the random cycle tree have ordinary well-defined expectations."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "MST weight and pairwise distortion are different objectives.",
        "Fix a pair or benchmark network before taking the tree expectation.",
        "Use concavity to bound merged capacity cost by separate charges.",
        "Account for auxiliary vertices and the routing-back step."
      ],
      "retrieval": "Generalize the cycle calculation to n vertices, compare the fixed adjacent pair’s expected stretch with the expected maximum stretch, and explain which quantity the buy-at-bulk comparison actually uses."
    },
    "sourceNote": "Develops Williamson–Shmoys §§8.5–8.6. The hierarchical partition theorem and controlled elimination of auxiliary vertices are deep inputs from the assigned treatment, not consequences of the cycle example."
  },
  "core-planar-mis": {
    "intro": {
      "title": "Delete a little of the unknown optimum to simplify the graph",
      "paragraphs": [
        "Maximum independent set is hard on general graphs, but planarity lets us remove a periodic family of layers and leave pieces of bounded structural width. Those pieces can be solved exactly by dynamic programming. The approximation comes from trying every possible deleted residue class and keeping the best resulting independent set.",
        "The optimum is not known to the algorithm. It is used only in the proof: its vertices are partitioned among k layer residues, so some residue contains at most a 1/k share. Deleting that residue leaves most of this fixed optimum available as a feasible candidate for the exact subproblem algorithm."
      ],
      "question": {
        "prompt": "Why can the proof identify a good deleted residue without knowing the optimal independent set?",
        "options": [
          "The algorithm first computes OPT exactly on the original graph.",
          "Averaging proves one exists, and the algorithm tries all k residues.",
          "Every residue removes exactly the same number of optimum vertices.",
          "Planar graphs have a unique optimal independent set."
        ],
        "answer": 1,
        "feedback": [
          "That would bypass the problem the approximation algorithm is designed to solve.",
          "Correct: exhaustive testing of the bounded number of shifts replaces knowledge of the good one.",
          "Only a minimum-at-most-average statement is needed; residue counts can differ.",
          "Uniqueness is neither assumed nor required."
        ]
      }
    },
    "mechanism": {
      "title": "Use outer-face layers and independent bag states",
      "definitions": [
        {
          "term": "Outer-face layer",
          "meaning": "Vertices on the outer face of the current planar embedding, removed before the next layer is formed."
        },
        {
          "term": "Residue deletion",
          "meaning": "Remove all layers whose indices equal a chosen value modulo k."
        },
        {
          "term": "Bag state",
          "meaning": "An independent subset of a bag in a bounded-treewidth decomposition, describing which boundary vertices belong to the partial solution."
        }
      ],
      "paragraphs": [
        "After deleting one residue, each surviving piece occupies a bounded number of consecutive outer-face layers. The assigned structural theorems give treewidth O(k). For fixed accuracy, choose k on the order of 1/ε; the exponential dependence on bag width then becomes a constant relative to n.",
        "A dynamic program must maintain consistency between adjacent bags and count selected vertices once. At an introduce node, check adjacency against the selected bag subset. At a forget node, maximize over whether the forgotten vertex was selected. At a join node, add child values and subtract the selected bag vertices counted in both children."
      ],
      "formula": "best candidate size ≥ (1−1/k)OPT",
      "question": {
        "prompt": "At a join node, child values are 8 and 9 and the shared selected bag has size 2. What is the combined value?",
        "options": [
          "17",
          "19",
          "15",
          "7"
        ],
        "answer": 2,
        "feedback": [
          "Seventeen counts the selected shared bag twice.",
          "Adding the bag again would create an even larger overcount.",
          "Correct: 8+9−2 removes the shared bag’s double counting.",
          "Subtracting an entire child value would discard its distinct interior vertices."
        ]
      }
    },
    "example": {
      "title": "Average over four deletion shifts",
      "setup": "For a fixed optimum independent set of size 20, suppose the numbers of its vertices in four layer-residue classes are 7,3,6,4. These counts are used only for analysis; the algorithm does not know them.",
      "table": {
        "headers": [
          "Deleted residue",
          "Optimum vertices lost",
          "Fixed-optimum vertices still feasible"
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
        ]
      },
      "steps": [
        {
          "title": "Apply the average bound",
          "explanation": "The average loss is 20/4=5. The best residue loss, three, is no greater than that average."
        },
        {
          "title": "Retain a feasible benchmark",
          "explanation": "Deleting residue one leaves 17 vertices of the fixed optimum. They remain independent because deleting graph vertices cannot create new edges."
        },
        {
          "title": "Solve every reduced instance",
          "explanation": "The bounded-treewidth DP finds an optimum of each remaining graph, so its residue-one result has size at least 17. It could improve on the restricted benchmark by using replacement vertices."
        },
        {
          "title": "State the uniform guarantee",
          "explanation": "Without the special residue counts, k=4 guarantees at least (1−1/4)×20=15. The example’s stronger lower bound is instance-specific."
        }
      ],
      "conclusion": "The proof never claims the remaining optimum is exactly the original optimum minus the deleted count. It only uses that restricted set as a feasible lower bound.",
      "question": {
        "prompt": "What lower bound does the displayed residue-one benchmark give on the DP result?",
        "options": [
          "Exactly 17 vertices.",
          "At most 17 vertices.",
          "Exactly 15 vertices.",
          "At least 17 vertices."
        ],
        "answer": 3,
        "feedback": [
          "Replacement vertices may allow the reduced graph’s optimum to be larger.",
          "The direction is a lower bound from a known feasible benchmark.",
          "Fifteen is the generic k=4 guarantee, not the stronger bound from these counts.",
          "Correct: the surviving part of the original optimum is feasible, and exact optimization can do no worse."
        ]
      }
    },
    "proof": {
      "title": "Separate averaging, structural width and exact optimization",
      "paragraphs": [
        "Each of the three ingredients has a different role. Averaging limits lost objective value; planarity limits width; the dynamic program exploits that width without sacrificing further optimality inside each reduced graph."
      ],
      "steps": [
        {
          "claim": "Partition a fixed optimum among k layer residues.",
          "why": "Every vertex has exactly one layer index and hence one residue."
        },
        {
          "claim": "Some deletion loses at most OPT/k optimum vertices.",
          "why": "The residue counts are nonnegative and sum to OPT."
        },
        {
          "claim": "Each reduced component has treewidth O(k).",
          "why": "The planar outer-layer structure supplies the bounded-outerplanarity theorem from the assigned source."
        },
        {
          "claim": "Exact bag-state optimization and the best shift retain the approximation guarantee.",
          "why": "One tried reduced instance already contains a feasible independent set of size at least (1−1/k)OPT."
        }
      ],
      "question": {
        "prompt": "Which part of the argument specifically uses planarity?",
        "options": [
          "The structural treewidth bound after deleting periodic outer-face layers.",
          "The arithmetic fact that one residue has at most average size.",
          "The identity 8+9−2=15.",
          "The fact that deleting vertices cannot create an edge."
        ],
        "answer": 0,
        "feedback": [
          "Correct: the width theorem is what makes exact optimization tractable on the pieces.",
          "Averaging applies to any partition, planar or not.",
          "Join-node accounting is general dynamic-programming bookkeeping.",
          "Induced vertex deletion has that property in every graph."
        ]
      }
    },
    "boundary": {
      "title": "A structural theorem is not supplied by a picture",
      "paragraphs": [
        "The layer choice and treewidth theorem must match. Drawing horizontal bands through an arbitrary graph does not establish the property required by the dynamic program."
      ],
      "cases": [
        {
          "label": "Arbitrary nonplanar input",
          "setting": "Use the same residue-count averaging on a general graph.",
          "question": {
            "prompt": "What part remains unproved before claiming a PTAS?",
            "options": [
              "That residue counts sum to the optimum size.",
              "That the surviving pieces have bounded treewidth as a function of k.",
              "That the best of several feasible sets is feasible.",
              "That independent sets contain vertices."
            ],
            "answer": 1,
            "feedback": [
              "Every partition still accounts for each optimum vertex once.",
              "Correct: averaging survives, but tractable structural simplification is not automatic.",
              "Choosing one of the already feasible independent sets preserves feasibility.",
              "The combinatorial definition has not changed."
            ]
          }
        },
        {
          "label": "Ignoring bag independence",
          "setting": "A bag contains adjacent vertices u and v, and a proposed state selects both.",
          "question": {
            "prompt": "Is this a legal independent-set bag state?",
            "options": [
              "Yes; edges are checked only after the final join.",
              "Yes; treewidth removes graph edges.",
              "No; it already violates an edge constraint within the bag.",
              "Only if u and v have different layer residues before deletion."
            ],
            "answer": 2,
            "feedback": [
              "Keeping an invalid state can contaminate every later DP value.",
              "A decomposition organizes the graph; it does not delete its remaining edges.",
              "Correct: internal bag feasibility must be enforced at the relevant introduce or state-validity check.",
              "Any surviving adjacent pair cannot both belong to an independent set."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Try every deleted layer residue.",
        "Use a restricted original optimum only as a proof benchmark.",
        "Invoke the correct planar width theorem before running the DP.",
        "Enforce independent bag states and subtract shared selections at joins."
      ],
      "retrieval": "Prove the 1−1/k averaging guarantee without assuming knowledge of OPT, then write the join recurrence and explain which exact structural result makes its state space bounded for fixed ε."
    },
    "sourceNote": "Develops Williamson–Shmoys §10.2 on planar maximum independent set. Bounded outerplanarity and treewidth results are stated as source inputs; arbitrary BFS-layer variants require their own structural justification."
  },
  "core-hardness": {
    "intro": {
      "title": "A decision reduction needs a quantitative gap",
      "paragraphs": [
        "An exact optimization problem can be NP-hard while admitting good approximation. To rule out a particular approximation ratio, a reduction must preserve a visible separation between YES and NO objective values. The approximation output on a YES instance must still lie strictly above every feasible NO value.",
        "A probabilistically checkable proof provides such a separation through its acceptance probability. Enumerate the verifier’s random tapes and turn each local check into a constraint on globally shared proof-bit variables. Completeness supplies a high-valued assignment; soundness limits every assignment on NO inputs."
      ],
      "question": {
        "prompt": "For a maximization gap with YES value at least cM and NO value at most sM, when does a ρ-approximation distinguish the cases?",
        "options": [
          "Whenever ρc=s.",
          "Whenever c>s, regardless of ρ.",
          "When ρc>s.",
          "Only when c=0."
        ],
        "answer": 2,
        "feedback": [
          "Equality leaves the output threshold ambiguous.",
          "A weak approximation can shrink the YES guarantee below the NO bound.",
          "Correct: the YES output lower bound must strictly exceed the NO feasibility upper bound.",
          "A zero YES lower bound cannot create the positive separation being used."
        ]
      }
    },
    "mechanism": {
      "title": "Turn local proof tests into globally consistent constraints",
      "definitions": [
        {
          "term": "Completeness c",
          "meaning": "The acceptance probability achievable by a suitable proof on a YES input."
        },
        {
          "term": "Soundness s",
          "meaning": "An upper bound on acceptance probability for every proof on a NO input."
        },
        {
          "term": "Gadget value",
          "meaning": "The number of target clauses satisfiable after fixing a local predicate’s truth, including optimal choices of its private auxiliary variables."
        }
      ],
      "paragraphs": [
        "Using r=O(log n) random bits gives polynomially many random tapes. A constant number q of queries makes each verifier test a constant-arity constraint. All tests referring to one proof position use the same variable; allowing a separate answer for every test would destroy soundness.",
        "The assigned parity gadgets translate satisfied versus unsatisfied predicates into values 4 versus 3 for four E3SAT clauses, and 11 versus 10 for twelve 2SAT clauses. Starting from parity satisfaction near one versus near one half yields limiting gap ratios 7/8 and 21/22. The small completeness and soundness errors must be retained until strict separation is established."
      ],
      "formula": "E3SAT: YES≥(4−ε)M, NO≤(7/2+δ)M; choose ρ(4−ε)>7/2+δ",
      "question": {
        "prompt": "Why is r=O(log n) important when enumerating verifier random tapes?",
        "options": [
          "It makes the verifier deterministic.",
          "It forces all queried proof bits to be equal.",
          "It guarantees zero soundness error.",
          "It makes 2^r polynomial in n."
        ],
        "answer": 3,
        "feedback": [
          "There remain many possible random tapes and local tests.",
          "Queries may address different proof positions with different values.",
          "Soundness is a separate probabilistic property of the verifier.",
          "Correct: logarithmic randomness keeps the explicit reduction output polynomial-sized."
        ]
      }
    },
    "example": {
      "title": "Keep finite completeness and soundness errors visible",
      "setup": "Suppose a numerical gap instance has M=100 parity constraints, with at least 98 satisfiable in the YES case and at most 51 in the NO case. Apply the displayed gadget value rules.",
      "table": {
        "headers": [
          "Objective",
          "YES lower bound",
          "NO upper bound"
        ],
        "rows": [
          [
            "Parity constraints",
            "98",
            "51"
          ],
          [
            "Four-clause E3SAT gadgets",
            "4×98+3×2=398",
            "4×51+3×49=351"
          ],
          [
            "Twelve-clause 2SAT gadgets",
            "11×98+10×2=1098",
            "11×51+10×49=1051"
          ]
        ]
      },
      "steps": [
        {
          "title": "Translate predicate values, not just instance sizes",
          "explanation": "An unsatisfied parity constraint still contributes three E3SAT clauses, or ten 2SAT clauses after optimizing its gadget auxiliaries. This baseline changes the approximation gap."
        },
        {
          "title": "Test an E3SAT ratio of 0.9",
          "explanation": "On a YES input, its guaranteed value is at least 0.9×398=358.2, hence at least 359 clauses integrally. A NO input permits at most 351."
        },
        {
          "title": "Test a ratio of 0.88 on these finite values",
          "explanation": "Its YES lower bound is only 0.88×398=350.24, which does not separate it from a NO upper bound of 351."
        },
        {
          "title": "Interpret the limiting theorem correctly",
          "explanation": "Although 0.88 exceeds 7/8, proving hardness at that ratio requires choosing smaller source errors so strict separation holds. The arbitrary numerical errors in this example are not automatically small enough."
        }
      ],
      "conclusion": "The table illustrates gap arithmetic assuming the stated promises. The PCP theorem supplies suitable families and tunable positive error parameters; this example is not itself a proof of those deep inputs.",
      "question": {
        "prompt": "How many E3SAT clauses are guaranteed satisfiable on the displayed YES case?",
        "options": [
          "398",
          "392",
          "400",
          "351"
        ],
        "answer": 0,
        "feedback": [
          "Correct: the two unsatisfied parity constraints still contribute three clauses each.",
          "This counts only the four clauses from the 98 satisfied constraints and drops the baseline.",
          "All 400 clauses would require satisfying every parity constraint.",
          "351 is the NO-case upper bound, not the YES lower bound."
        ]
      }
    },
    "proof": {
      "title": "Compose the verifier gap with the gadget gap",
      "paragraphs": [
        "The reduction’s output size, global consistency, gadget analysis and approximation convention are independent proof obligations. A correct conclusion needs all four."
      ],
      "steps": [
        {
          "claim": "Enumerate a polynomial number of constant-query verifier tests.",
          "why": "Logarithmic random bits and constant query count keep the constraint instance polynomial-sized with bounded arity."
        },
        {
          "claim": "Use one variable for each proof position throughout the instance.",
          "why": "Soundness quantifies over a single global proof, not separately optimized local transcripts."
        },
        {
          "claim": "Prove each gadget’s attainable values for both predicate cases.",
          "why": "The affine conversion from predicate satisfaction to target objective depends on the exact satisfied and unsatisfied values."
        },
        {
          "claim": "Choose source error parameters to obtain ρc>s in target units.",
          "why": "A strict gap lets the approximation algorithm decide the original NP-hard language, contradicting P≠NP."
        }
      ],
      "question": {
        "prompt": "Why would giving every local test a separate copy of each queried proof bit be invalid without consistency constraints?",
        "options": [
          "It would make the number of random tapes smaller.",
          "Different tests could use incompatible answers, defeating the soundness comparison with one global proof.",
          "It would force the resulting instance to be planar.",
          "It would preserve every objective value exactly."
        ],
        "answer": 1,
        "feedback": [
          "Copying variables does not reduce the verifier’s random-tape count.",
          "Correct: local satisfiability with inconsistent copies can exceed the value allowed to any genuine proof.",
          "No planarity conclusion follows from making independent variable copies.",
          "Removing consistency generally enlarges the feasible assignment space and can change the optimum."
        ]
      }
    },
    "boundary": {
      "title": "Check the threshold and reduction size",
      "paragraphs": [
        "A familiar reduction name is not a substitute for an explicit objective calculation. Hardness thresholds depend on the ratio convention and the precision of the gap."
      ],
      "cases": [
        {
          "label": "Only one clause distinguishes YES and NO",
          "setting": "A reduction guarantees YES optimum M and NO optimum at most M−1, with M unbounded.",
          "question": {
            "prompt": "Does this alone give a fixed constant-factor approximation gap below one?",
            "options": [
              "Yes; the gap ratio is always one half.",
              "Yes; every NP-hard problem has the same approximation threshold.",
              "No; (M−1)/M tends to one.",
              "No; exact decision reductions never have any use."
            ],
            "answer": 2,
            "feedback": [
              "A difference of one clause is not generally half the total objective.",
              "Approximability is problem- and reduction-specific.",
              "Correct: a vanishing relative gap does not establish the desired fixed-ratio barrier.",
              "Such reductions establish exact hardness, but need strengthening for this approximation claim."
            ]
          }
        },
        {
          "label": "Linearly many random bits",
          "setting": "A verifier uses r=n random bits and the reduction explicitly lists all random tapes.",
          "question": {
            "prompt": "What obstacle appears?",
            "options": [
              "The number of tests is necessarily n².",
              "Every test becomes deterministic and free.",
              "The soundness gap must improve to zero.",
              "The explicit list can contain 2^n tests and is not a polynomial-size reduction."
            ],
            "answer": 3,
            "feedback": [
              "That count would correspond to roughly logarithmic randomness, not r=n.",
              "Each fixed test is concrete, but exponentially many of them still create an enormous instance.",
              "The number of random bits alone does not determine zero-error soundness.",
              "Correct: the enumeration cost depends exponentially on the number of random bits."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "State whether a maximization ratio is below one or a minimization factor is above one.",
        "Track polynomial output size and globally shared proof bits.",
        "Compute both gadget values, including unsatisfied-predicate baselines.",
        "Retain source errors until the target YES and NO bounds strictly separate."
      ],
      "retrieval": "Starting from parity completeness 1−ε and soundness 1/2+δ, derive the E3SAT and 2SAT gap expressions and explain why their limiting ratios are 7/8 and 21/22."
    },
    "sourceNote": "Develops Williamson–Shmoys §§16.1 and 16.3. PCP existence and its quantitative predicate variants are deep theorem inputs; the lesson teaches the reduction and gap accounting rather than claiming a short proof of those theorems."
  }
};
