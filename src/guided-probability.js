/* Original guided lessons, checked against the uploaded Alon–Spencer fourth edition. */
const GUIDED_PROBABILITY = {
  "core-four-functions": {
    "intro": {
      "title": "Why compare four functions?",
      "paragraphs": [
        "Suppose two collections of sets can be combined by union and intersection. The same resulting set may arise from several pairs, so counting input pairs and output pairs by a naive one-to-one correspondence can fail. The Four Functions theorem gives a structural replacement: a comparison at each pair of sets survives summation over the whole Boolean lattice.",
        "Four nonnegative functions play different roles. The functions α and β describe the inputs; γ pays for their union and δ pays for their intersection. Before learning the induction, keep those roles separate. The theorem is useful precisely because local inequalities can be easier to establish than the desired inequality between large sums."
      ],
      "question": {
        "prompt": "Why is simply counting distinct unions insufficient to control all input pairs?",
        "options": [
          "Several input pairs can have the same union.",
          "Union always reduces cardinality.",
          "Intersection is not defined for finite sets.",
          "Every pair has a different union."
        ],
        "answer": 0,
        "feedback": [
          "Correct: multiplicities are lost when a family of distinct unions replaces a list of pairs.",
          "A union contains each input set; the issue is collisions, not shrinking sets.",
          "Finite-set intersection is well defined and is the second structural operation.",
          "For example, both (∅,{1}) and ({1},{1}) have union {1}."
        ]
      }
    },
    "mechanism": {
      "title": "The local hypothesis and the induction",
      "definitions": [
        {
          "term": "Boolean lattice",
          "meaning": "All subsets of a finite ground set, ordered by inclusion."
        },
        {
          "term": "Four-function hypothesis",
          "meaning": "For every A,B, require α(A)β(B)≤γ(A∪B)δ(A∩B), with all values nonnegative."
        },
        {
          "term": "Coordinate compression",
          "meaning": "Replace each function value on A by the sum of its values on A and A∪{n}."
        }
      ],
      "paragraphs": [
        "The conclusion for the full lattice is a product inequality between four total masses. Restricting α and β to chosen input families, and γ and δ to their possible unions and intersections, gives the family version. Nonnegativity makes that restriction legitimate.",
        "To remove one coordinate, add the two slices of each function. The key question is whether the compressed functions still satisfy the local hypothesis. They do because the one-coordinate theorem controls all four slice products together. Merely applying induction separately to two slices would leave the cross products unexplained."
      ],
      "formula": "(ΣA α(A))(ΣB β(B)) ≤ (ΣC γ(C))(ΣD δ(D))",
      "question": {
        "prompt": "For the one-coordinate lattice {∅,{1}}, both cross products α₀β₁ and α₁β₀ are bounded by which expression?",
        "options": [
          "γ₀δ₁",
          "γ₁δ₀",
          "γ₀δ₀",
          "The sum γ₀+δ₁"
        ],
        "answer": 1,
        "feedback": [
          "Cross pairs have union {1}, not ∅, and intersection ∅.",
          "Correct: either cross pair has union {1} and intersection ∅.",
          "The expression γ₀δ₀ bounds the pair (∅,∅); a cross pair instead has nonempty union and empty intersection.",
          "The hypothesis compares products of function values, not this additive expression."
        ]
      }
    },
    "example": {
      "title": "Count a family without an injective pairing",
      "setup": "On {1,2}, let A={∅,{1}} and B={{1},{2}}. Define the pointwise union family A∨B={a∪b:a∈A,b∈B} and intersection family A∧B={a∩b:a∈A,b∈B}. These are not ordinary union and intersection of the two families. Use constant weights one on the relevant families.",
      "table": {
        "headers": [
          "Input pair",
          "Union",
          "Intersection"
        ],
        "rows": [
          [
            "∅, {1}",
            "{1}",
            "∅"
          ],
          [
            "∅, {2}",
            "{2}",
            "∅"
          ],
          [
            "{1}, {1}",
            "{1}",
            "{1}"
          ],
          [
            "{1}, {2}",
            "{1,2}",
            "∅"
          ]
        ]
      },
      "steps": [
        {
          "title": "Count inputs",
          "explanation": "Each family has two members, so there are four input pairs."
        },
        {
          "title": "Remove repeated outputs",
          "explanation": "The union family is {{1},{2},{1,2}}, while the intersection family is {∅,{1}}."
        },
        {
          "title": "Compare the products",
          "explanation": "The family inequality reads 2·2≤3·2, or 4≤6. It does not say the four input pairs have four different unions."
        }
      ],
      "conclusion": "This finite calculation illustrates the family version. The general theorem requires the induction and works for arbitrary nonnegative weights, not only indicators.",
      "question": {
        "prompt": "What is |A∨B|·|A∧B| for the pointwise families defined in this example?",
        "options": [
          "4",
          "5",
          "6",
          "8"
        ],
        "answer": 2,
        "feedback": [
          "Four counts input pairs; it is not the product of the two output-family sizes.",
          "The two output families have sizes three and two; the comparison multiplies these sizes, giving six rather than their sum five.",
          "Correct: there are three distinct unions and two distinct intersections.",
          "Repeated unions and intersections must not be counted as distinct family members."
        ]
      }
    },
    "proof": {
      "title": "Make the cross terms visible",
      "paragraphs": [
        "The entire induction rests on a two-point algebraic fact. If γ₁δ₀>0, the diagonal hypotheses imply γ₀≥α₀β₀/δ₀ and δ₁≥α₁β₁/γ₁. Substitute these lower bounds into (γ₀+γ₁)(δ₀+δ₁). After multiplying out and clearing the positive denominator γ₁δ₀, the desired comparison reduces to (γ₁δ₀−α₀β₁)(γ₁δ₀−α₁β₀)≥0. Each factor is nonnegative by a cross hypothesis. If γ₁δ₀=0, both cross products vanish and the diagonal inequalities give the result directly, without division."
      ],
      "steps": [
        {
          "claim": "Prove the two-point statement.",
          "why": "It is the operation that combines the two coordinate slices while retaining cross products."
        },
        {
          "claim": "Fix A′,B′ on n−1 coordinates and apply the two-point statement to their two lifts.",
          "why": "Their possible unions and intersections are exactly the lifts of A′∪B′ and A′∩B′."
        },
        {
          "claim": "The compressed functions satisfy the same type of local hypothesis.",
          "why": "This supplies the hypothesis needed to invoke induction rather than assuming it."
        },
        {
          "claim": "Apply induction and identify the compressed sums with the original sums.",
          "why": "Every original set occurs in exactly one pair of lifts."
        }
      ],
      "question": {
        "prompt": "What must be checked before applying induction to the compressed functions?",
        "options": [
          "That they are identical functions.",
          "That their total masses are all one.",
          "That no cross term occurs.",
          "That they satisfy the union/intersection product hypothesis."
        ],
        "answer": 3,
        "feedback": [
          "The four functions can assign different weights; induction requires the local product comparison, not equality of the functions.",
          "Normalization is not required for this weighted counting statement.",
          "Cross terms do occur; the two-point argument controls them.",
          "Correct: induction applies to a structural hypothesis, not just to functions on a smaller domain."
        ]
      }
    },
    "boundary": {
      "title": "What the hypotheses buy",
      "paragraphs": [
        "Track the underlying lattice operations and the signs of the weights. A familiar probability interpretation is optional; the theorem is a statement about nonnegative mass. Extensions to distributive lattices use an operation-preserving set representation."
      ],
      "cases": [
        {
          "label": "Signed weights",
          "setting": "A proposed proof allows negative values and repeatedly multiplies inequalities by function values.",
          "question": {
            "prompt": "Which issue must be repaired?",
            "options": [
              "A negative multiplier can reverse an inequality.",
              "Negative values make all sums infinite.",
              "Signed functions have no domain.",
              "The theorem becomes automatic."
            ],
            "answer": 0,
            "feedback": [
              "Correct: the stated theorem assumes nonnegative values, and the proof uses that assumption.",
              "The domain is finite, so divergence is not the problem.",
              "A signed function can be defined perfectly well; this theorem does not cover it.",
              "Dropping a hypothesis requires a new result, not automatic validity."
            ]
          }
        },
        {
          "label": "Distributive representation",
          "setting": "A finite distributive lattice is represented by sets with join as union and meet as intersection.",
          "question": {
            "prompt": "What feature lets the set-lattice theorem transfer?",
            "options": [
              "Only the number of lattice elements.",
              "Preservation of both join and meet.",
              "Uniform probability on the lattice.",
              "Independence of lattice elements."
            ],
            "answer": 1,
            "feedback": [
              "Equal cardinality alone says nothing about the relevant operations.",
              "Correct: the local hypothesis is expressed using join and meet, so those operations must be preserved.",
              "The theorem allows arbitrary nonnegative weights.",
              "The objects are lattice elements, not independent random coordinates."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Separate input weights from union and intersection weights.",
        "The one-coordinate algebra controls the cross terms.",
        "Compression preserves the local hypothesis before induction is invoked."
      ],
      "retrieval": "Reconstruct the compressed functions and explain exactly where the two-point case is used; then recover the cardinality inequality for two set families."
    },
    "sourceNote": "Alon–Spencer §6.1. The reader develops the Boolean-lattice induction; the distributive-lattice representation and set-difference corollary should also be checked in the assigned text."
  },
  "core-fkg": {
    "intro": {
      "title": "When favorable events reinforce one another",
      "paragraphs": [
        "Imagine configurations described by sets of present features. An event is increasing when adding features cannot destroy it. Two increasing events often favor the same configurations, suggesting positive correlation. That intuition is reliable only when the measure has appropriate structure; monotonicity of the events alone is insufficient.",
        "The FKG inequality supplies a measure condition: moving mass toward joins and meets must not lose relative weight. This is log-supermodularity. It permits dependence between coordinates, unlike a product-space theorem. The goal is to identify the condition, then derive correlation from the Four Functions theorem rather than treating positive correlation as a slogan."
      ],
      "question": {
        "prompt": "Which statement best describes positive association?",
        "options": [
          "Every pair of events is independent.",
          "Increasing functions have nonnegative covariance under the specified measure.",
          "Any dependent measure works.",
          "Only identical events can be correlated."
        ],
        "answer": 1,
        "feedback": [
          "Association gives an inequality; independence gives equality and is stronger for a fixed pair.",
          "Correct: FKG controls the covariance of increasing functions under its structural hypotheses.",
          "The measure condition is essential; dependence alone gives no sign.",
          "Different increasing events can be positively correlated."
        ]
      }
    },
    "mechanism": {
      "title": "Place the measure into four functions",
      "definitions": [
        {
          "term": "Increasing function",
          "meaning": "f(x)≤f(y) whenever x≤y in the lattice."
        },
        {
          "term": "Log-supermodular mass",
          "meaning": "μ(x)μ(y)≤μ(x∨y)μ(x∧y) for every pair."
        },
        {
          "term": "Normalization",
          "meaning": "Divide weighted sums by Z=Σx μ(x)>0 to obtain probabilities and expectations."
        }
      ],
      "paragraphs": [
        "For nonnegative increasing f and g, use α=fμ, β=gμ, γ=fgμ and δ=μ. The measure condition moves μ(x)μ(y) to join and meet, while monotonicity moves f(x) and g(y) to the join. These are two separate justifications in the local Four Functions inequality.",
        "The resulting weighted inequality contains a factor Z on the right. Dividing by Z² produces E[f]E[g]≤E[fg]. On a finite lattice, a real increasing function can be shifted upward to become nonnegative. Covariance is unchanged by adding constants, so the conclusion extends beyond nonnegative f and g."
      ],
      "formula": "E[fg] − E[f]E[g] ≥ 0",
      "question": {
        "prompt": "Why does the unnormalized conclusion contain Σx μ(x)?",
        "options": [
          "It is the total mass of δ=μ.",
          "It is an error probability.",
          "It forces every point to have equal mass.",
          "It replaces the join operation."
        ],
        "answer": 0,
        "feedback": [
          "Correct: the fourth function in the Four Functions application is the original mass function.",
          "No approximation or error event appears in this deduction.",
          "Normalization does not make unequal weights equal.",
          "Join and meet remain in the hypothesis; total mass appears after summing."
        ]
      }
    },
    "example": {
      "title": "A dependent measure with positive covariance",
      "setup": "Give 00 and 11 mass 2 each, and 01 and 10 mass 1 each. Let A be “first bit is 1” and B be “second bit is 1”.",
      "table": {
        "headers": [
          "Configuration",
          "Unnormalized mass",
          "Probability"
        ],
        "rows": [
          [
            "00",
            "2",
            "1/3"
          ],
          [
            "01",
            "1",
            "1/6"
          ],
          [
            "10",
            "1",
            "1/6"
          ],
          [
            "11",
            "2",
            "1/3"
          ]
        ]
      },
      "steps": [
        {
          "title": "Check the measure condition",
          "explanation": "The only nontrivial incomparable pair is 01,10. Its mass product is 1, while the join/meet product μ(11)μ(00) is 4."
        },
        {
          "title": "Compute marginal events",
          "explanation": "Each bit is 1 with probability 1/6+1/3=1/2."
        },
        {
          "title": "Compute their intersection",
          "explanation": "Both events occur only at 11, so Pr(A∩B)=1/3. The covariance of the indicators is 1/3−1/4=1/12."
        }
      ],
      "conclusion": "The events are positively correlated but not independent. Checking one incomparable pair suffices here because the lattice has only two coordinates; it is not a general shortcut for arbitrary lattices.",
      "question": {
        "prompt": "What is Pr(A∩B)−Pr(A)Pr(B) in this measure?",
        "options": [
          "0",
          "1/6",
          "1/12",
          "1/3"
        ],
        "answer": 2,
        "feedback": [
          "Zero would mean independence for these two indicators, contradicted by 1/3≠1/4.",
          "Subtracting the marginal product gives 1/12, not one off-diagonal point mass.",
          "Correct: 1/3−(1/2)(1/2)=1/12.",
          "That is the intersection probability before subtracting the product of marginals."
        ]
      }
    },
    "proof": {
      "title": "Normalize only after the structural step",
      "paragraphs": [
        "The proof is short because the substantial combinatorial work was done by Four Functions. Its brevity makes hypothesis bookkeeping especially important. The lattice must be finite and distributive, the mass must be nonnegative and log-supermodular, and total mass must be positive when expectations are used."
      ],
      "steps": [
        {
          "claim": "Build α,β,γ,δ from f,g,μ.",
          "why": "This arranges the desired weighted sums as the four total masses."
        },
        {
          "claim": "Verify the pointwise hypothesis using both monotonicity and log-supermodularity.",
          "why": "Neither property alone supplies the full inequality."
        },
        {
          "claim": "Apply Four Functions and divide by Z².",
          "why": "The division turns the mass comparison into the covariance statement."
        },
        {
          "claim": "Shift finite real increasing functions if necessary.",
          "why": "Subtracting constants afterward leaves covariance unchanged."
        }
      ],
      "question": {
        "prompt": "Which argument extends the result from nonnegative increasing f to arbitrary finite real increasing f?",
        "options": [
          "Replace f by |f| and forget the sign.",
          "Assume its mean is positive.",
          "Discard configurations where f is negative.",
          "Add a constant and use covariance invariance."
        ],
        "answer": 3,
        "feedback": [
          "Absolute value can destroy monotonicity and changes the covariance.",
          "A positive mean does not make every function value nonnegative.",
          "Discarding configurations changes the measure and may destroy its hypothesis.",
          "Correct: finiteness permits an upward shift, and constants cancel in covariance."
        ]
      }
    },
    "boundary": {
      "title": "Test the measure, not only the events",
      "paragraphs": [
        "A counterexample should preserve increasing events while breaking the measure condition. This isolates the assumption responsible for the conclusion. Opposite monotonicity is a different case and produces the reversed covariance sign."
      ],
      "cases": [
        {
          "label": "Exactly one present bit",
          "setting": "Put probability 1/2 on each of 10 and 01, with no mass elsewhere.",
          "question": {
            "prompt": "For the two coordinate-presence events, what happens?",
            "options": [
              "The intersection is 1/2.",
              "The events are negatively correlated.",
              "They are independent because the marginals agree.",
              "FKG applies because both events increase."
            ],
            "answer": 1,
            "feedback": [
              "No supported configuration has both bits present.",
              "Correct: the intersection is zero and the marginal product is 1/4; log-supermodularity also fails.",
              "Both events have probability one half, but independence would require an intersection of one quarter, whereas their intersection here is empty.",
              "The increasing-event condition does not replace the measure condition."
            ]
          }
        },
        {
          "label": "One function decreases",
          "setting": "Keep a valid FKG measure, let f increase and h decrease.",
          "question": {
            "prompt": "How can the covariance sign be obtained?",
            "options": [
              "It must still be nonnegative.",
              "No comparison is possible even on a finite lattice.",
              "Apply positive association to f and −h to get Cov(f,h)≤0.",
              "Assume f and h are independent."
            ],
            "answer": 2,
            "feedback": [
              "Opposite monotonicities give the opposite sign.",
              "Negating the decreasing function creates an increasing one.",
              "Correct: −h increases, and Cov(f,−h)=−Cov(f,h).",
              "Independence is not an assumption or a consequence here."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Increasing events alone do not guarantee positive association.",
        "The Four Functions substitution carries both the measure and the observables.",
        "Normalize by total mass and distinguish association from independence."
      ],
      "retrieval": "Derive FKG with all four substituted functions, then compute the coordinate-event covariance for a measure supported only on 01 and 10."
    },
    "sourceNote": "Alon–Spencer §6.2. Four Functions is the established input; the derivation and the measure counterexample are worked here."
  },
  "core-harris": {
    "intro": {
      "title": "Positive correlation from independent coordinates",
      "paragraphs": [
        "Consider independent bits whose success probabilities need not be equal. An increasing event becomes easier to satisfy when a bit changes from zero to one. If two events are increasing, the same revealed bit tends to move both conditional probabilities in the same direction. That shared motion creates a nonnegative covariance term.",
        "The Harris–Kleitman argument turns this observation into an induction. It does not assert that the events themselves are independent: two graph properties may depend on many of the same independent edge variables. Independence belongs to the underlying coordinates and survives conditioning on one coordinate."
      ],
      "question": {
        "prompt": "Where is independence assumed in the product-measure correlation theorem?",
        "options": [
          "Between the two increasing events.",
          "Between every graph property.",
          "Between the underlying coordinate variables.",
          "Between an event and its complement."
        ],
        "answer": 2,
        "feedback": [
          "The increasing events may overlap strongly and need not be independent.",
          "Graph properties often share edges and are therefore dependent.",
          "Correct: the coordinate law is a product; event dependence is what the theorem studies.",
          "A nontrivial event and its complement are mutually exclusive, not independent."
        ]
      }
    },
    "mechanism": {
      "title": "Expose one bit and compare two slices",
      "definitions": [
        {
          "term": "Product measure",
          "meaning": "The joint coordinate probability factors, with arbitrary individual biases pᵢ."
        },
        {
          "term": "Conditional slice",
          "meaning": "The smaller product space remaining after fixing one coordinate."
        },
        {
          "term": "Two-point covariance",
          "meaning": "For a final bit of bias p, the leftover term is p(1−p)(a₁−a₀)(b₁−b₀)."
        }
      ],
      "paragraphs": [
        "Let a₀ and a₁ be the probabilities of A after fixing the last bit, and define b₀,b₁ for B. Within each slice, induction bounds the joint probability below by the product of its two conditional marginals. Averaging these slice bounds is not yet the desired product of the unconditional marginals.",
        "Subtract that unconditional product. The remaining expression factors into p(1−p) times the two conditional differences. Both differences are nonnegative for increasing events, because the untouched coordinates have exactly the same distribution in the two slices. This final identity is the reason the induction closes."
      ],
      "formula": "Cov slice means = p(1−p)(a₁−a₀)(b₁−b₀) ≥ 0",
      "question": {
        "prompt": "Why can the induction hypothesis be applied after fixing one coordinate?",
        "options": [
          "The remaining coordinates retain their product law.",
          "All conditional events become constants.",
          "The two events become disjoint.",
          "The remaining biases become 1/2."
        ],
        "answer": 0,
        "feedback": [
          "Correct: coordinate independence ensures conditioning does not distort the law of the other coordinates.",
          "Some conditional events may remain nontrivial.",
          "Disjointness is not produced by conditioning and would not give positive association.",
          "The original biases are retained; fairness is unnecessary."
        ]
      }
    },
    "example": {
      "title": "Two unequal biases",
      "setup": "Let X₁ have success probability 1/3 and X₂ have success probability 2/3, independently. Set A={at least one success} and B={X₁=1}. Condition on X₁.",
      "table": {
        "headers": [
          "X₁",
          "Pr(A | X₁)",
          "Pr(B | X₁)"
        ],
        "rows": [
          [
            "0",
            "2/3",
            "0"
          ],
          [
            "1",
            "1",
            "1"
          ]
        ]
      },
      "steps": [
        {
          "title": "Find the marginals",
          "explanation": "Pr(A)=1−(2/3)(1/3)=7/9, while Pr(B)=1/3."
        },
        {
          "title": "Find the intersection",
          "explanation": "B implies A, so Pr(A∩B)=1/3. The product of marginals is 7/27."
        },
        {
          "title": "Recognize the covariance identity",
          "explanation": "Their difference is 2/27. The final-bit term gives (1/3)(2/3)(1−2/3)(1−0)=2/27 as well."
        }
      ],
      "conclusion": "The unequal biases cause no difficulty. Here the within-slice covariance terms vanish, so the entire positive covariance comes from the movement of the conditional means.",
      "question": {
        "prompt": "What is the covariance of the indicators of A and B?",
        "options": [
          "2/27",
          "1/27",
          "7/27",
          "1/3"
        ],
        "answer": 0,
        "feedback": [
          "Correct: 1/3−7/27=2/27.",
          "That would subtract an incorrect marginal product.",
          "The value 7/27 is the product of the two marginals. Covariance subtracts this from the intersection probability 1/3.",
          "This is Pr(A∩B), before subtracting the marginal product."
        ]
      }
    },
    "proof": {
      "title": "The last algebraic step matters",
      "paragraphs": [
        "A proof that says only “condition and use induction” is incomplete. Induction compares quantities inside a fixed slice; the desired result concerns the whole space. The factorization of the covariance of slice means bridges that gap. It also immediately explains what happens for opposite monotonicity."
      ],
      "steps": [
        {
          "claim": "Prove the assertion for one Bernoulli coordinate.",
          "why": "The covariance is the explicit product of the two changes in value."
        },
        {
          "claim": "Condition on one coordinate and apply induction inside both slices.",
          "why": "The remaining coordinates are still independent."
        },
        {
          "claim": "Average the within-slice inequalities.",
          "why": "This gives a lower bound involving conditional means, not yet the unconditional product."
        },
        {
          "claim": "Subtract the unconditional product and factor the remainder.",
          "why": "The two monotone differences have the same sign."
        }
      ],
      "question": {
        "prompt": "If A increases and B decreases, what changes in the final covariance term?",
        "options": [
          "The factor p(1−p) becomes negative.",
          "One conditional difference has the opposite sign.",
          "Independence of coordinates disappears.",
          "The induction requires equal biases."
        ],
        "answer": 1,
        "feedback": [
          "The Bernoulli variance factor p(1−p) stays nonnegative; the sign change comes from the oppositely directed event differences.",
          "Correct: monotonicity now makes the two differences point in opposite directions.",
          "Changing an event does not change the coordinate law.",
          "Unequal biases are allowed in either monotonicity case."
        ]
      }
    },
    "boundary": {
      "title": "Recognize a product space before using the theorem",
      "paragraphs": [
        "Random graph models illustrate both the power and the limitation of the result. Independent edge selection is a product law. Fixing the number of selected edges creates dependence, so the same proof and conclusion cannot be imported automatically."
      ],
      "cases": [
        {
          "label": "A fixed edge count",
          "setting": "Choose exactly one of two possible edges uniformly. Let A and B mean that the first and second edge, respectively, are selected.",
          "question": {
            "prompt": "What is Pr(A∩B) compared with Pr(A)Pr(B)?",
            "options": [
              "1/2 versus 1/4",
              "1/4 versus 1/4",
              "0 versus 1/4",
              "1 versus 1/4"
            ],
            "answer": 2,
            "feedback": [
              "Only one edge is selected, so the joint event is impossible.",
              "The fixed-count law is not independent edge sampling.",
              "Correct: the increasing coordinate events are negatively correlated in this dependent model.",
              "The marginals are 1/2, but the intersection is zero."
            ]
          }
        },
        {
          "label": "A nonmonotone pair",
          "setting": "For one nondegenerate bit, compare A={X=1} and B={X=0}.",
          "question": {
            "prompt": "Why is this not a counterexample to positive association?",
            "options": [
              "The space is infinite.",
              "The bit is not independent of itself.",
              "The two events are identical.",
              "The events do not have the same monotonicity direction."
            ],
            "answer": 3,
            "feedback": [
              "There are just two bit outcomes. The failed hypothesis is matching monotonicity, not finiteness of the space.",
              "The hypothesis concerns different underlying coordinates; the issue here is event monotonicity.",
              "The events select opposite bit values and are complements, so their intersection is empty rather than equal to either event.",
              "Correct: one increases and the other decreases."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Coordinate independence is different from event independence.",
        "Conditioning preserves the smaller product law.",
        "The covariance of slice means supplies the final nonnegative term."
      ],
      "retrieval": "Write the two-slice induction with unequal bias p and derive the factor p(1−p)(a₁−a₀)(b₁−b₀) without quoting FKG."
    },
    "sourceNote": "Alon–Spencer §6.3. The product-space induction is developed directly; the fixed-count example explains why G(n,m) needs separate analysis."
  },
  "core-xyz": {
    "intro": {
      "title": "The same pivot in two ordering events",
      "paragraphs": [
        "A partial order specifies some required precedences, but usually leaves many valid total rankings. A linear extension is a total ranking that respects every required precedence. Choose one uniformly. If x happens to precede y, should that make it easier for x also to precede z? The XYZ theorem says yes, for any finite poset.",
        "This is not a product-space statement. The positions of elements in a valid ranking are constrained, and conditioning independent random labels on the poset can create dependencies. The proof builds a special lattice on labelings where FKG really applies, then removes ties by a limit. Learning that construction is more informative than an appeal to intuitive positive dependence."
      ],
      "question": {
        "prompt": "Which two events have the shared-pivot form of the XYZ theorem?",
        "options": [
          "x precedes y; y precedes x",
          "x precedes y; x precedes z",
          "x precedes y; z precedes x, automatically",
          "Any two ordering events whatsoever"
        ],
        "answer": 1,
        "feedback": [
          "Those events are mutually exclusive for distinct elements.",
          "Correct: the same element is required to precede each of two others.",
          "The second event has the opposite direction at x and is not the stated theorem.",
          "The theorem controls a specific pair of events, not arbitrary order constraints."
        ]
      }
    },
    "mechanism": {
      "title": "Build the correct order on labelings",
      "definitions": [
        {
          "term": "Linear extension",
          "meaning": "A total ranking that preserves the given partial order."
        },
        {
          "term": "Uniform extension law",
          "meaning": "Every valid total ranking has the same probability."
        },
        {
          "term": "Pivot-relative lattice",
          "meaning": "Labelings are compared using the pivot label in reverse order and the other labels relative to it."
        }
      ],
      "paragraphs": [
        "Give each element an integer label between 1 and m, allowing ties temporarily. Index the pivot by 1. The useful order compares x₁ in reverse and each difference xᵢ−x₁ in the usual direction. Under this order, the event x₁≤x₂ is increasing because it is the condition x₂−x₁≥0.",
        "Write rᵢ=xᵢ−x₁ and sᵢ=yᵢ−y₁. The join has coordinate max(rᵢ,sᵢ)+min(x₁,y₁); the meet has coordinate min(rᵢ,sᵢ)+max(x₁,y₁). For i=1 these give the reversed pivot coordinates. If the poset requires aᵢ≤aⱼ, both labelings satisfy rᵢ≤rⱼ and sᵢ≤sⱼ; applying either max or min preserves that comparison. Thus order-preserving labelings are closed under both operations, making their indicator mass log-supermodular. Min/max distributive identities establish the lattice law. FKG now applies. As m grows, ties occupy a vanishing fraction and each tie-free valid ranking has the same number of label choices, giving the uniform extension law."
      ],
      "formula": "Pr(x precedes y and x precedes z) ≥ Pr(x precedes y)Pr(x precedes z)",
      "question": {
        "prompt": "Why introduce a special lattice instead of using independent random ranks directly?",
        "options": [
          "Every conditioned law remains a product law.",
          "The theorem requires unequal probabilities for all extensions.",
          "FKG needs verified lattice monotonicity and log-supermodularity after constraints are imposed.",
          "Ties themselves prove the final statement."
        ],
        "answer": 2,
        "feedback": [
          "Conditioning can destroy the product structure and positive association.",
          "The target law is uniform on valid extensions.",
          "Correct: the constructed order makes the needed structural hypotheses demonstrable.",
          "Ties are an intermediate complication and are removed in the limiting argument."
        ]
      }
    },
    "example": {
      "title": "Enumerate a three-element antichain",
      "setup": "There are no order constraints on distinct x,y,z. All six rankings are valid. Let A={x before y} and B={x before z}.",
      "table": {
        "headers": [
          "Ranking",
          "A",
          "B",
          "Both"
        ],
        "rows": [
          [
            "xyz",
            "Yes",
            "Yes",
            "Yes"
          ],
          [
            "xzy",
            "Yes",
            "Yes",
            "Yes"
          ],
          [
            "yxz",
            "No",
            "Yes",
            "No"
          ],
          [
            "yzx",
            "No",
            "No",
            "No"
          ],
          [
            "zxy",
            "Yes",
            "No",
            "No"
          ],
          [
            "zyx",
            "No",
            "No",
            "No"
          ]
        ]
      },
      "steps": [
        {
          "title": "Count the marginal events",
          "explanation": "Each event holds in three of the six rankings, so each has probability 1/2."
        },
        {
          "title": "Count the shared-pivot intersection",
          "explanation": "Both hold exactly when x is first. Two rankings satisfy this, so the intersection has probability 1/3."
        },
        {
          "title": "Compare with independence",
          "explanation": "The product of marginals is 1/4. The positive gap is 1/3−1/4=1/12."
        }
      ],
      "conclusion": "Enumeration verifies this poset only. The pivot-relative lattice argument is what handles arbitrary constraints and arbitrary numbers of elements.",
      "question": {
        "prompt": "For this antichain, what is Pr(B | A)?",
        "options": [
          "1/3",
          "1/2",
          "1/4",
          "2/3"
        ],
        "answer": 3,
        "feedback": [
          "1/3 is the unconditional probability of the intersection.",
          "That is Pr(B); conditioning on A increases it here.",
          "That is the product of the two marginal probabilities.",
          "Correct: (1/3)/(1/2)=2/3."
        ]
      }
    },
    "proof": {
      "title": "From finite labelings to uniform rankings",
      "paragraphs": [
        "The delicate part of the proof is constructing and checking the lattice, not dividing counts at the end. In the pivot-relative coordinates, joins and meets use coordinatewise maxima and minima together with the reversed pivot coordinate. The distributive identities for minimum and maximum explain the distributivity."
      ],
      "steps": [
        {
          "claim": "Choose the pivot-relative order on all labelings.",
          "why": "The two target events must increase in this particular order."
        },
        {
          "claim": "Verify closure of order-preserving labelings under join and meet.",
          "why": "In the displayed join/meet formulas, coordinatewise max and min preserve every required comparison aᵢ≤aⱼ. The feasible-labeling indicator is therefore log-supermodular; min/max distributivity also verifies the required lattice structure."
        },
        {
          "claim": "Apply FKG to the two pivot events.",
          "why": "All structural hypotheses now hold on a finite lattice."
        },
        {
          "claim": "Let m grow and discard the vanishing tie fraction.",
          "why": "Tie-free order types become uniformly distributed valid linear extensions."
        }
      ],
      "question": {
        "prompt": "What justifies passing from labelings to a uniform law on extensions?",
        "options": [
          "Every tie-free extension has the same number of increasing label choices.",
          "All labelings have the same order type.",
          "Ties have probability one.",
          "Every extension is an independent-coordinate event."
        ],
        "answer": 0,
        "feedback": [
          "Correct: choosing distinct ordered label values is symmetric across valid rankings, and ties vanish as m grows.",
          "Different labelings induce many different rankings.",
          "For fixed poset size, the tie fraction tends to zero.",
          "A total ranking imposes dependencies between element positions."
        ]
      }
    },
    "boundary": {
      "title": "Check the exact event form",
      "paragraphs": [
        "Order constraints can make one event certain; they do not invalidate the theorem. However, reversing one comparison or replacing uniform extensions by arbitrary weights changes the problem and requires a new justification."
      ],
      "cases": [
        {
          "label": "A forced comparison",
          "setting": "The poset itself requires x to precede y.",
          "question": {
            "prompt": "What does the XYZ inequality become?",
            "options": [
              "An impossible statement.",
              "The identity Pr(B)≥Pr(B).",
              "A claim that B is certain.",
              "A claim that all extensions coincide."
            ],
            "answer": 1,
            "feedback": [
              "A forced precedence means A has probability one, so imposing A does not change whether B occurs.",
              "Correct: A∩B=B and Pr(A)=1.",
              "Forcing x before y says nothing by itself about x versus z; the probability of B can still lie strictly between zero and one.",
              "Many extensions can respect the same forced comparison."
            ]
          }
        },
        {
          "label": "Opposing comparisons",
          "setting": "In a two-element antichain, consider A={x before y} and C={y before x}.",
          "question": {
            "prompt": "What shows why shared direction matters?",
            "options": [
              "Both events have probability zero.",
              "They are independent.",
              "Their intersection is zero although each marginal is 1/2.",
              "Their intersection is one."
            ],
            "answer": 2,
            "feedback": [
              "Each ordering occurs in one of the two rankings.",
              "The two strict opposing orders cannot occur together. Their joint probability is zero, although the marginal product is one quarter.",
              "Correct: arbitrary ordering events need not be positively correlated.",
              "The two strict orderings cannot occur together."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "The sample space is uniform valid extensions, not independent positions.",
        "The proof constructs an FKG-compatible order on labelings.",
        "A symmetry and tie-removal limit identifies the final law."
      ],
      "retrieval": "Explain why conditioning random labels is not itself a proof, then describe the pivot-relative coordinates and the two closure checks that make FKG applicable."
    },
    "sourceNote": "Alon–Spencer §6.4. The lattice construction is explained here; verify its explicit meet/join formulas and distributive-law calculations in the assigned proof."
  },
  "core-azuma": {
    "intro": {
      "title": "Reveal randomness without losing the final statistic",
      "paragraphs": [
        "A complicated random variable can become manageable when revealed one coordinate at a time. At each stage, replace the unknown final value by its conditional expectation. These successive predictions form a Doob martingale: after conditioning on what is currently known, the next prediction has the same average as the present one.",
        "Azuma’s inequality says that many individually bounded prediction changes are unlikely to accumulate into a large deviation. The increments need not be independent. The crucial property is conditional mean zero, together with a deterministic bound on the magnitude of each increment. Choosing an exposure that makes these bounds small is part of the mathematics, not a cosmetic choice."
      ],
      "question": {
        "prompt": "What does the martingale condition assert about the next prediction?",
        "options": [
          "It equals the current prediction in every outcome.",
          "Its conditional expectation equals the current prediction.",
          "It is independent of everything already revealed.",
          "It always increases."
        ],
        "answer": 1,
        "feedback": [
          "Individual predictions may change after new information arrives.",
          "Correct: averaging over the next uncertainty returns the present conditional expectation.",
          "A martingale can have highly dependent increments.",
          "New information may move a conditional prediction upward or downward; only its conditional average change must be zero."
        ]
      }
    },
    "mechanism": {
      "title": "An exponential bound from bounded increments",
      "definitions": [
        {
          "term": "Filtration",
          "meaning": "The increasing sequence of information revealed so far."
        },
        {
          "term": "Doob martingale",
          "meaning": "Mᵢ=E[X | the first i revelations], from M₀=E[X] to the final value X."
        },
        {
          "term": "Increment bound",
          "meaning": "A deterministic cᵢ with |Mᵢ−Mᵢ₋₁|≤cᵢ for every relevant history."
        }
      ],
      "paragraphs": [
        "For an increment with conditional mean zero and magnitude at most cᵢ, its conditional exponential moment is at most exp(λ²cᵢ²/2). Iterating conditional expectation multiplies these bounds. Markov’s inequality converts the exponential moment into a tail bound, and the minimizing λ is t divided by the sum of squared increment bounds.",
        "A coordinate replacement estimate needs a coupling argument before it becomes a martingale estimate. For independent coordinates, couple the unrevealed coordinates identically in two completions. If replacing the exposed coordinate changes X by at most c, the corresponding conditional expectations differ by at most c. Different exposure blocks can produce very different sums of squared bounds."
      ],
      "formula": "Pr(Mₘ−M₀ ≥ t) ≤ exp(−t²/(2Σᵢcᵢ²))",
      "question": {
        "prompt": "What quantity controls this version of the Azuma exponent?",
        "options": [
          "Only the final variance.",
          "The product of the increment bounds.",
          "The sum of squared deterministic increment bounds.",
          "The number of possible final outcomes."
        ],
        "answer": 2,
        "feedback": [
          "Variance alone does not justify this exponential inequality.",
          "The exponential-moment estimates add their quadratic exponents.",
          "Correct: the bound depends on Σcᵢ² for the chosen exposure.",
          "Outcome count does not replace the increment control."
        ]
      }
    },
    "example": {
      "title": "Follow four fair coin revelations",
      "setup": "Let X count heads in four independent fair tosses. Reveal the outcome H,T,H,H. After i tosses, Mᵢ equals the heads already seen plus half the number still hidden.",
      "table": {
        "headers": [
          "Revealed prefix",
          "Heads seen",
          "Conditional expectation"
        ],
        "rows": [
          [
            "None",
            "0",
            "2"
          ],
          [
            "H",
            "1",
            "2.5"
          ],
          [
            "HT",
            "1",
            "2"
          ],
          [
            "HTH",
            "2",
            "2.5"
          ],
          [
            "HTHH",
            "3",
            "3"
          ]
        ]
      },
      "steps": [
        {
          "title": "Compute the prediction",
          "explanation": "For prefix HT, two tosses remain, so the conditional expectation is 1+2/2=2."
        },
        {
          "title": "Bound the changes",
          "explanation": "Each revealed fair toss changes the prediction by +1/2 or −1/2. Thus Σcᵢ²=4·(1/2)²=1."
        },
        {
          "title": "Compare a tail with enumeration",
          "explanation": "The event X−2≥2 is exactly four heads and has probability 1/16. Azuma bounds it by exp(−2), approximately 0.1353, which is larger than 0.0625."
        }
      ],
      "conclusion": "The bound is not expected to match every small exact distribution. It gives a portable guarantee once the conditional increment bounds have been verified.",
      "question": {
        "prompt": "After prefix HTH, what is the Doob prediction for the final number of heads?",
        "options": [
          "2",
          "2.5",
          "3",
          "3.5"
        ],
        "answer": 1,
        "feedback": [
          "Two heads are known, but the last hidden toss still contributes expectation 1/2.",
          "Correct: two known heads plus one half from the last fair toss.",
          "That would assume the unrevealed toss is certainly a head.",
          "Only one toss remains, so at most one extra head is possible."
        ]
      }
    },
    "proof": {
      "title": "Optimize after conditioning",
      "paragraphs": [
        "The exponential moment is propagated one increment at a time using the tower property. Ordinary factorization into a product of independent moment-generating functions is unnecessary and may be false. The same argument applied to −M gives the lower tail; adding the two one-sided probabilities gives the familiar factor two."
      ],
      "steps": [
        {
          "claim": "Condition on the past and bound one increment’s exponential moment.",
          "why": "Its conditional mean vanishes and its range is bounded."
        },
        {
          "claim": "Iterate the tower property over all increments.",
          "why": "This accumulates Σcᵢ² while allowing dependence."
        },
        {
          "claim": "Apply Markov to exp(λ(Mₘ−M₀)).",
          "why": "The positive exponential is large whenever the desired upper-tail event occurs."
        },
        {
          "claim": "Choose λ=t/Σcᵢ² and repeat for −M.",
          "why": "This minimizes the quadratic exponent and supplies both tails."
        }
      ],
      "question": {
        "prompt": "Why is multiplying unconditional increment MGFs not the right general proof?",
        "options": [
          "Exponentials cannot be multiplied.",
          "Markov applies only to negative variables.",
          "Martingale increments need not be independent.",
          "The increment bounds must all be equal."
        ],
        "answer": 2,
        "feedback": [
          "Exponentials do multiply; the issue is taking expectations of a dependent product.",
          "Markov is applied to a nonnegative exponential.",
          "Correct: conditional bounds and the tower property replace independence.",
          "Each revelation can have its own deterministic bound cᵢ; the proof collects their squares rather than requiring equal effects."
        ]
      }
    },
    "boundary": {
      "title": "Choose and justify the exposure",
      "paragraphs": [
        "A numerical Lipschitz constant is meaningful only relative to a stated change of coordinates or blocks. Check the statistic in two coupled completions rather than assuming every graph property has the same sensitivity."
      ],
      "cases": [
        {
          "label": "Vertex exposure for chromatic number",
          "setting": "Reveal all edges from one vertex to earlier vertices as one block.",
          "question": {
            "prompt": "Why can this give a bound of one on the chromatic-number change between completions?",
            "options": [
              "Deleting that vertex leaves the same graph, and it can be restored with one extra color.",
              "All graphs need one color.",
              "The edge indicators become equal.",
              "The chromatic number equals its expectation."
            ],
            "answer": 0,
            "feedback": [
              "Correct: compare both graphs through their common graph with that vertex removed.",
              "Removing one vertex leaves a common graph that can require many colors; restoring that single vertex costs at most one additional color.",
              "The two completions can have different incident edges.",
              "Concentration does not mean deterministic equality to the mean."
            ]
          }
        },
        {
          "label": "Only a variance estimate",
          "setting": "A proposed proof knows Var(X)=1 but has no bound on possible jumps.",
          "question": {
            "prompt": "Which conclusion is automatically available from that information alone?",
            "options": [
              "A Gaussian tail at every scale.",
              "Zero probability beyond distance one.",
              "Independence of increments.",
              "A Chebyshev bound, not the Azuma hypothesis."
            ],
            "answer": 3,
            "feedback": [
              "Rare large values can prevent a universal Gaussian bound.",
              "A random variable can have variance one and still take very large values with tiny probability, so a support bound does not follow.",
              "Knowing a variance cannot establish independence between martingale increments; dependence is handled by conditioning instead.",
              "Correct: Chebyshev uses the variance; an exponential martingale theorem needs additional structure."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "A Doob martingale is a sequence of conditional predictions.",
        "Conditional mean-zero increments replace independent increments.",
        "Exposure and coupling determine the useful increment bounds."
      ],
      "retrieval": "Derive the one-sided Azuma bound from conditional exponential moments and justify a bounded increment for a graph statistic using two coupled completions."
    },
    "sourceNote": "Alon–Spencer §§7.1–7.2. The conditional-moment proof and the exposure argument are developed; the displayed constant uses absolute increment bounds cᵢ."
  },
  "core-chromatic": {
    "intro": {
      "title": "Improve concentration by changing the statistic",
      "paragraphs": [
        "Sometimes the statistic you first want to count reacts too strongly to a single random choice. One new graph edge may complete many cliques. Applying an edge-exposure argument directly to the raw clique count therefore gives poor or invalid bounded-difference estimates. A maximum packing of edge-disjoint cliques has much better sensitivity.",
        "The section contains two distinct applications. For dense random graphs, clique packing controls the probability of having no clique of a chosen size. For sparse p=n⁻α with fixed α>5/6, a different auxiliary statistic counts how many vertices must be removed to obtain a u-colorable graph. Do not combine the hypotheses or conclusions of these two arguments."
      ],
      "question": {
        "prompt": "Why can a maximum edge-disjoint clique packing change by at most one when an edge is deleted?",
        "options": [
          "The graph loses at most one vertex.",
          "Every clique has only one edge.",
          "At most one clique in a packing uses that edge.",
          "The optimizer must remain the same packing."
        ],
        "answer": 2,
        "feedback": [
          "Deleting one edge changes which cliques are available. The sensitivity argument removes at most the one packed clique using that edge.",
          "A clique uses several edges; the crucial restriction is that no two members of the chosen packing use the same edge.",
          "Correct: removing that one packed clique leaves a feasible packing in the modified graph.",
          "The optimum packing may change completely; comparing feasible packings controls its value."
        ]
      }
    },
    "mechanism": {
      "title": "Two auxiliary variables, two applications",
      "definitions": [
        {
          "term": "Edge-disjoint packing",
          "meaning": "A family of cliques no two of which share an edge."
        },
        {
          "term": "Deletion-to-colorability statistic",
          "meaning": "The minimum number Y of vertices whose deletion makes the graph u-colorable."
        },
        {
          "term": "Four-value window",
          "meaning": "In the stated sparse regime, χ lies between an appropriate integer u and u+3 with probability tending to one."
        }
      ],
      "paragraphs": [
        "For clique existence, the packing value is zero exactly when no clique of the chosen size exists. If its expectation is large and its edge sensitivity is one, Azuma makes a zero value unlikely. The expectation lower bound is established through a separate random selection and deletion argument among candidate cliques.",
        "For the sparse chromatic result, choose u near a lower quantile of χ. The event Y=0 has non-negligible probability, which forces E[Y]=O(√n) through a lower-tail bound. An upper-tail bound leaves at most O(√n) deleted vertices. A structural lemma makes every such small vertex set three-colorable, so three new colors suffice."
      ],
      "formula": "For fixed α>5/6 and p=n⁻α: Pr(u≤χ(G(n,p))≤u+3) → 1",
      "question": {
        "prompt": "In the sparse argument, why is a three-colorability lemma for small vertex sets useful?",
        "options": [
          "It colors the removed O(√n) vertices with at most three new colors.",
          "It makes the entire graph three-colorable.",
          "It proves every clique packing is empty.",
          "It changes p to 1/2."
        ],
        "answer": 0,
        "feedback": [
          "Correct: the rest already has a u-coloring, so these colors extend the bound to u+3.",
          "The already repaired graph is u-colorable; the small deleted set gets three fresh colors, not a coloring of the entire graph with only three colors.",
          "This is a different auxiliary statistic from the dense clique-packing argument.",
          "The sparse application retains p=n⁻α. The separate dense clique-packing result with p=1/2 has different hypotheses."
        ]
      }
    },
    "example": {
      "title": "Raw triangles versus a packing in K₄",
      "setup": "In the complete graph on vertices 1,2,3,4, compare the raw triangle count with the maximum number of edge-disjoint triangles. Then delete edge 12.",
      "table": {
        "headers": [
          "Graph",
          "Triangles",
          "Maximum edge-disjoint triangle packing"
        ],
        "rows": [
          [
            "K₄",
            "4",
            "1"
          ],
          [
            "K₄ without edge 12",
            "2",
            "1"
          ]
        ]
      },
      "steps": [
        {
          "title": "List the destroyed triangles",
          "explanation": "Triangles 123 and 124 both use edge 12, so deleting it destroys two triangles."
        },
        {
          "title": "Check overlap in K₄",
          "explanation": "Any two distinct triangles of K₄ share an edge. Thus no packing contains two triangles, although there are four individual triangles."
        },
        {
          "title": "Compare sensitivities",
          "explanation": "The raw count drops by two, while the maximum packing stays one. In a larger graph, one edge can lie in still more triangles; packing sensitivity remains at most one."
        }
      ],
      "conclusion": "The example demonstrates the bounded-difference mechanism. It does not establish either asymptotic random-graph theorem, whose expectation and structural estimates are additional proof ingredients.",
      "question": {
        "prompt": "How many triangles of K₄ survive deletion of edge 12?",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "answer": 2,
        "feedback": [
          "Triangles 134 and 234 do not use the deleted edge.",
          "There are two surviving vertex triples forming triangles.",
          "Correct: 134 and 234 remain.",
          "Two of the original four triangles used edge 12."
        ]
      }
    },
    "proof": {
      "title": "Translate concentration into a coloring window",
      "paragraphs": [
        "The sparse proof uses a quantile to anchor concentration: positive probability of Y=0 prevents the mean from being too large. Concentration then bounds Y from above. This is more delicate than concentrating χ around its mean and simply asserting a constant-width window."
      ],
      "steps": [
        {
          "claim": "Choose u from a lower quantile of χ.",
          "why": "It gives a definite probability that Y=0."
        },
        {
          "claim": "Prove Y is vertex-Lipschitz and apply both Azuma tails.",
          "why": "These combine the atom at zero with an O(√n) upper bound on Y."
        },
        {
          "claim": "Apply the small-subgraph three-colorability lemma.",
          "why": "The deleted vertices can then be repaired with three fresh colors."
        },
        {
          "claim": "Combine lower-quantile and upper-coloring events.",
          "why": "Their exceptional probabilities can be made arbitrarily small in the asymptotic regime."
        }
      ],
      "question": {
        "prompt": "Which step turns an O(√n)-vertex deletion bound into the additive three-color bound?",
        "options": [
          "A union bound alone.",
          "The structural coloring lemma for the deleted set.",
          "Replacing χ by the number of edges.",
          "Treating all colorings as independent."
        ],
        "answer": 1,
        "feedback": [
          "A union bound combines events but does not color the exceptional vertices.",
          "Correct: concentration identifies a small exceptional set; the structural lemma colors it.",
          "Edge count is not the required coloring statistic.",
          "No independence between possible colorings is assumed."
        ]
      }
    },
    "boundary": {
      "title": "Keep the asymptotic hypotheses attached",
      "paragraphs": [
        "The width of a chromatic window is a theorem with a specified probability regime and a limit in n. A small example is useful for sensitivity but cannot certify a high-probability asymptotic statement."
      ],
      "cases": [
        {
          "label": "An exponent below the stated range",
          "setting": "A graph is sampled with p=n⁻⁰·⁸.",
          "question": {
            "prompt": "Can this particular four-value theorem be invoked directly?",
            "options": [
              "Yes, because p tends to zero.",
              "Yes, because 0.8>1/2.",
              "Yes, for every n and every random graph model.",
              "No; 0.8 is below the required 5/6 threshold."
            ],
            "answer": 3,
            "feedback": [
              "Tending to zero alone is not the stated hypothesis.",
              "Other theorems may concern that range, but this result requires α>5/6.",
              "The conclusion is a high-probability statement for G(n,n⁻α) in the specified exponent regime as n grows, not a guarantee for every finite graph.",
              "Correct: its explicit exponent condition has not been met."
            ]
          }
        },
        {
          "label": "A completely different optimizer",
          "setting": "Deleting one edge causes the maximizing packing to be replaced by a very different packing.",
          "question": {
            "prompt": "Does that invalidate the sensitivity-one argument?",
            "options": [
              "Yes; the optimizing set must be unchanged.",
              "No; compare optimum values using a feasible packing after removing at most one clique.",
              "Yes; any optimizer change creates an unbounded value change.",
              "No; raw clique count must also be sensitivity one."
            ],
            "answer": 1,
            "feedback": [
              "The proof controls the optimum value, not the identity of an optimizer.",
              "Correct: feasible-solution comparison is enough even when optimizers differ.",
              "A large combinatorial change need not cause a large objective change.",
              "Raw clique count can have a much larger edge sensitivity."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Use a Lipschitz auxiliary statistic rather than raw clique count.",
        "The sparse proof concentrates a deletion-to-colorability variable.",
        "The small-subgraph coloring lemma supplies the final additive three colors."
      ],
      "retrieval": "Explain both auxiliary statistics, then reconstruct the sparse proof from the lower quantile of χ to a u+3 coloring without merging it with the dense clique-packing argument."
    },
    "sourceNote": "Alon–Spencer §7.3. The packing expectation estimate and small-subgraph coloring lemma are identified as separate inputs; consult their assigned proofs, especially the union-bound exponent in Lemma 7.3.4."
  },
  "core-gradation": {
    "intro": {
      "title": "The reveal schedule is part of the proof",
      "paragraphs": [
        "A gradation specifies progressively larger sets of coordinates whose values are known. Taking the conditional expectation of a final statistic after each revelation produces a martingale. The useful sensitivity condition concerns a whole newly revealed block, not just an informal statement that the statistic is smooth.",
        "A second setting permits adaptive queries: the next coordinate inspected can depend on earlier answers. When most answers are predictable, summing worst-case squared changes may waste information. The refined theorem accounts for pᵢ(1−pᵢ)cᵢ² along every query path, but also retains a maximum-effect bound and a restricted deviation range."
      ],
      "question": {
        "prompt": "What extra issue appears when revelation blocks contain several coordinates?",
        "options": [
          "The effect of changing the entire new block must be controlled.",
          "Every coordinate becomes deterministic.",
          "The final statistic ceases to be a random variable.",
          "The martingale condition no longer uses conditional expectation."
        ],
        "answer": 0,
        "feedback": [
          "Correct: a one-coordinate Lipschitz estimate does not automatically give a bound of one for an arbitrary block.",
          "A reveal schedule does not remove the randomness before it is exposed.",
          "The statistic is still defined on the full product space.",
          "The conditional-expectation construction is unchanged."
        ]
      }
    },
    "mechanism": {
      "title": "Two different budgets",
      "definitions": [
        {
          "term": "Gradation",
          "meaning": "Nested coordinate sets B₀⊂B₁⊂…⊂Bₘ describing revealed information."
        },
        {
          "term": "Effect cᵢ",
          "meaning": "The largest change in the statistic when only coordinate i is replaced."
        },
        {
          "term": "Path variance budget",
          "meaning": "An upper bound σ² on the sum of pᵢ(1−pᵢ)cᵢ² for every possible line of adaptive questioning."
        }
      ],
      "paragraphs": [
        "For a fixed gradation, couple completions that agree outside the new block. A block replacement bound of one controls the corresponding change in conditional prediction. Azuma then uses the number of blocks, or the sum of squared block bounds if the effects vary.",
        "For adaptive querying, a rare Bernoulli choice contributes a small pᵢ(1−pᵢ) factor. The refined result is not obtained by substituting Var(Y) into Azuma. It requires a pathwise budget and a bound C on all effects. For each ε>0, the source supplies a δ>0; the displayed bound applies only when αC<σ(1+ε)δ."
      ],
      "formula": "Pr(|Y−E[Y]|>ασ) ≤ 2 exp(−α²/(2(1+ε))) within the stated αC range",
      "question": {
        "prompt": "Which budget is required for the adaptive theorem?",
        "options": [
          "Only the average variance cost of the algorithm.",
          "An upper bound on every possible query path.",
          "Only the variance of the last query.",
          "The number of leaves, with no effect information."
        ],
        "answer": 1,
        "feedback": [
          "A low average query cost can coexist with a much larger cost on one rare response branch; the theorem needs the bound on that branch too.",
          "Correct: the theorem assumes a uniform upper bound over all lines of questioning.",
          "Every query along the path consumes variance budget, so bounding only the final query misses the accumulated contribution of earlier ones.",
          "The relevant quantities are effects, coordinate biases and pathwise variance sums."
        ]
      }
    },
    "example": {
      "title": "Stop querying as soon as an OR is known",
      "setup": "Three independent bits each equal 1 with probability 0.1. Let Y be their OR. Query in order, stopping at the first 1. Each coordinate has effect one and variance cost 0.1·0.9=0.09.",
      "table": {
        "headers": [
          "Answer path",
          "Path probability",
          "Variance cost"
        ],
        "rows": [
          [
            "1",
            "0.1",
            "0.09"
          ],
          [
            "01",
            "0.09",
            "0.18"
          ],
          [
            "001",
            "0.081",
            "0.27"
          ],
          [
            "000",
            "0.729",
            "0.27"
          ]
        ]
      },
      "steps": [
        {
          "title": "Check that the strategy determines Y",
          "explanation": "A first 1 fixes Y=1; only the all-zero path needs every query before concluding Y=0."
        },
        {
          "title": "Compute the worst path",
          "explanation": "The longest paths use three queries, so σ²=0.27 is a valid pathwise upper bound."
        },
        {
          "title": "Separate an average from a uniform bound",
          "explanation": "The expected number of queries is 1+0.9+0.81=2.71, giving expected cost 0.2439. That smaller average is not the required maximum-path budget."
        }
      ],
      "conclusion": "The tiny example illustrates how adaptive path accounting works. Its small σ does not promise a useful tail estimate at arbitrary deviation sizes; the theorem’s maximum-effect range must still be checked.",
      "question": {
        "prompt": "What pathwise variance budget is valid for this decision tree?",
        "options": [
          "0.09",
          "0.18",
          "0.2439",
          "0.27"
        ],
        "answer": 3,
        "feedback": [
          "The all-zero response path asks all three questions and costs 3·0.09=0.27, exceeding a one-query budget.",
          "Paths 001 and 000 both ask three questions, so each has cost 0.27 rather than the two-query cost 0.18.",
          "This is the expected cost, not an upper bound for every path.",
          "Correct: each of at most three queries costs 0.09."
        ]
      }
    },
    "proof": {
      "title": "Pay for each branch conditionally",
      "paragraphs": [
        "At a binary query with Yes probability p, the two conditional means differ by at most the coordinate effect. Their weighted average is the current mean. This permits a conditional exponential-moment estimate in which p(1−p)c² replaces an indiscriminate c² term, provided the exponential parameter times the maximum effect is sufficiently small."
      ],
      "steps": [
        {
          "claim": "Represent the adaptive strategy by a decision tree.",
          "why": "This makes each possible history and its remaining variance budget explicit."
        },
        {
          "claim": "Bound the difference of the two conditional means by c.",
          "why": "Couple the untouched independent coordinates identically in the two branches."
        },
        {
          "claim": "Apply the small-parameter exponential estimate at the current query.",
          "why": "The conditional mean-zero structure produces the p(1−p) variance factor."
        },
        {
          "claim": "Induct on the remaining decision-tree depth and apply exponential Markov.",
          "why": "Every branch respects the same remaining pathwise budget, and optimizing yields the stated range-limited tail."
        }
      ],
      "question": {
        "prompt": "Why does a maximum-effect bound still appear in the variance-sensitive result?",
        "options": [
          "It prevents a rare enormous jump from being hidden by a small variance factor.",
          "It makes all query probabilities equal.",
          "It eliminates adaptive choices.",
          "It forces Y to be a sum of independent indicators."
        ],
        "answer": 0,
        "feedback": [
          "Correct: the exponential approximation is controlled only in a range set by the largest possible effect.",
          "The refinement explicitly allows different coordinate biases; the maximum-effect bound controls jump size rather than making those biases equal.",
          "The theorem explicitly permits an adaptive decision tree.",
          "Y can be a more general functional determined by the queries."
        ]
      }
    },
    "boundary": {
      "title": "Do not extrapolate beyond the checked range",
      "paragraphs": [
        "A refined variance scale is valuable only after all of its conditions are verified. Keep separate the coordinate effects, the coordinate probabilities, the maximum-path total and the admissible deviation parameter."
      ],
      "cases": [
        {
          "label": "A rare expensive branch",
          "setting": "Most paths cost one unit, but one possible path costs one hundred units.",
          "question": {
            "prompt": "Can a budget near one be justified solely by the average path cost?",
            "options": [
              "Yes, because rare paths never matter.",
              "Yes, if the average is finite.",
              "No; a uniform pathwise assumption must include the expensive branch.",
              "Only the cheapest branch is relevant."
            ],
            "answer": 2,
            "feedback": [
              "Rare paths are still possible paths and are covered by the hypothesis.",
              "Finiteness does not establish the required deterministic bound.",
              "Correct: the theorem needs a budget valid on every branch.",
              "The bound is not an optimization over favorable answers."
            ]
          }
        },
        {
          "label": "Very large deviations",
          "setting": "A proof verifies the variance budget but applies the displayed estimate for αC much larger than σ(1+ε)δ.",
          "question": {
            "prompt": "What is missing?",
            "options": [
              "The theorem’s deviation-range condition.",
              "A claim that Y has mean zero originally.",
              "A proof that all bits are fair.",
              "A requirement that the tree have one branch."
            ],
            "answer": 0,
            "feedback": [
              "Correct: the refined Gaussian-style estimate is explicitly restricted to a maximum-effect range.",
              "The theorem is about Y−E[Y], so an initially nonzero mean is harmless; the unchecked large-deviation range is the problem here.",
              "Biased bits are the reason the pᵢ(1−pᵢ) refinement is useful.",
              "A decision tree normally has multiple branches."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Sensitivity is relative to the actual reveal blocks.",
        "Adaptive variance accounting must hold on every query path.",
        "A small variance scale does not remove the maximum-effect restriction."
      ],
      "retrieval": "Design an adaptive query tree for an OR, compute its largest variance cost, and explain why an expected cost cannot replace the pathwise budget."
    },
    "sourceNote": "Alon–Spencer §7.4, Theorems 7.4.1–7.4.3. The refined theorem’s ε,δ-dependent admissible range is retained rather than claiming a universal all-scale variance bound."
  },
  "core-azuma-app": {
    "intro": {
      "title": "One concentration method, four different models",
      "paragraphs": [
        "Applying a concentration theorem starts by identifying independent choices and measuring the effect of changing one of them. The section’s examples deliberately look different: empty bins in a random map, a norm of a signed vector sum, distance from a set in the Boolean cube, and degrees remaining after a random matching step.",
        "The common structure is a statistic whose conditional predictions change little under a suitable exposure. The constants still need individual care. A signed sum has full replacement effect two but a centered fair-sign increment of at most one. In the matching application, biased edge choices make the variance-sensitive query bound substantially sharper than treating every query as a fair worst-case change."
      ],
      "question": {
        "prompt": "What should be chosen before inserting numbers into Azuma’s inequality?",
        "options": [
          "A desired tail probability only.",
          "The independent coordinates, exposure order and actual sensitivity.",
          "An approximation to the expectation with no error estimate.",
          "The theorem with the smallest-looking exponent."
        ],
        "answer": 1,
        "feedback": [
          "A target probability does not establish the hypotheses.",
          "Correct: the probability model and replacement effects determine the applicable bound.",
          "Changing the center requires a deterministic error allowance.",
          "A theorem is selected by verified conditions, not by appearance."
        ]
      }
    },
    "mechanism": {
      "title": "Recognize the relevant replacement effect",
      "definitions": [
        {
          "term": "Missing value",
          "meaning": "An output label not hit by any input of a random function."
        },
        {
          "term": "Hamming distance to A",
          "meaning": "The fewest coordinate changes needed to reach any point of A."
        },
        {
          "term": "Isolated-edge matching",
          "meaning": "Edges of a randomly selected subgraph whose endpoints have no other selected incident edges."
        }
      ],
      "paragraphs": [
        "Changing one function value moves one ball from an old bin to a new bin. The old bin may become empty and the new bin may stop being empty; these effects have opposite signs. The missing-bin count changes by at most one, not two. Its exact expectation is n(1−1/n)ⁿ, which is close to but not identical with n/e.",
        "For a norm, use the reverse triangle inequality; for distance to a set, use the triangle inequality for the Hamming metric. In a D-regular graph, select edges with probability 1/D and remove endpoints of isolated selected edges. The expected remaining degree is D(1−e⁻²)+O(1). Determining it takes O(D²) biased edge queries with bounded effect, giving a variance budget O(D) and a √D scale in the permitted range."
      ],
      "formula": "E[number of missing values] = n(1−1/n)ⁿ",
      "question": {
        "prompt": "Why can moving one ball change the number of empty bins by at most one?",
        "options": [
          "The old and new bins must coincide.",
          "The number of balls changes.",
          "Emptying the old bin and filling the new one have opposite effects.",
          "Each ball independently chooses whether a bin exists."
        ],
        "answer": 2,
        "feedback": [
          "The old and new bins can differ; the bound comes from the opposite signs of emptying one bin and filling another, not from assuming they coincide.",
          "Changing one image relocates one existing ball. The total stays fixed, while emptying and filling bins have opposite effects on the empty-bin count.",
          "Correct: if both changes occur they cancel; otherwise only one unit remains.",
          "Bins are fixed labels; balls choose destinations."
        ]
      }
    },
    "example": {
      "title": "An exact center for four random images",
      "setup": "Choose a function from {1,2,3,4} to itself uniformly. For each output j, let Iⱼ indicate that no input maps to j.",
      "table": {
        "headers": [
          "Quantity",
          "Calculation",
          "Value"
        ],
        "rows": [
          [
            "A particular label is missed",
            "(3/4)⁴",
            "81/256"
          ],
          [
            "Expected missing labels",
            "4·81/256",
            "81/64"
          ],
          [
            "Approximate center",
            "4/e",
            "About 1.4715"
          ],
          [
            "Exact center",
            "81/64",
            "1.265625"
          ]
        ]
      },
      "steps": [
        {
          "title": "Use one indicator per output",
          "explanation": "The missing-label count is the sum of four indicators. These indicators are dependent, but linearity of expectation does not require their independence."
        },
        {
          "title": "Compute a single missed-label probability",
          "explanation": "All four independent inputs must avoid that label, each with probability 3/4."
        },
        {
          "title": "Keep the centering error",
          "explanation": "The exact expectation is 81/64. Replacing it by 4/e moves the center by about 0.2059; a concentration statement around the approximation must allow for that shift."
        }
      ],
      "conclusion": "The small case makes the deterministic centering issue visible. The n/e approximation improves with n, but should never silently replace the exact expectation in a finite calculation.",
      "question": {
        "prompt": "What is the exact expected number of missed outputs when n=4?",
        "options": [
          "1",
          "81/64",
          "4/e",
          "81/256"
        ],
        "answer": 1,
        "feedback": [
          "There is no deterministic rule that exactly one output is missed.",
          "Correct: four output indicators each have expectation 81/256.",
          "That is a useful approximation, not the exact finite expectation.",
          "That is the chance a single specified output is missed."
        ]
      }
    },
    "proof": {
      "title": "Turn the sensitivity check into a conclusion",
      "paragraphs": [
        "These examples also distinguish mean-centered and quantile-based arguments. Distance to A is zero with probability equal to the cube mass of A. A lower concentration tail therefore bounds its mean; the upper tail then shows that most cube points lie in a moderately enlarged Hamming neighborhood."
      ],
      "steps": [
        {
          "claim": "For the map, expose independent input images.",
          "why": "The missing-value replacement effect is at most one, so the associated martingale is bounded."
        },
        {
          "claim": "For signed vectors, first bound full sign replacement by 2∥vᵢ∥.",
          "why": "Fair averaging halves the gap between the two conditional branches, yielding increment at most ∥vᵢ∥."
        },
        {
          "claim": "For distance to A, use the atom at distance zero and both concentration tails.",
          "why": "This first controls the mean, then the measure outside a neighborhood."
        },
        {
          "claim": "For the random matching step, count the queries and their biased variance costs.",
          "why": "O(D²) choices of probability 1/D with constant effect contribute O(D), rather than O(D²), total variance."
        }
      ],
      "question": {
        "prompt": "Why does the signed-vector argument improve the increment bound from two to one when ∥vᵢ∥≤1?",
        "options": [
          "The norm is linear.",
          "Every signed sum has norm one.",
          "The two fair conditional branches average to the current prediction.",
          "The signs are revealed all at once."
        ],
        "answer": 2,
        "feedback": [
          "A norm is generally nonlinear; the proof uses the reverse triangle inequality for the full replacement and fair averaging for the half-range improvement.",
          "The signed sum can have norm much larger than one. The bound of one concerns a single conditional-prediction increment, not the final norm.",
          "Correct: each branch differs from their average by half their gap.",
          "The Doob argument reveals signs sequentially; the two fair possibilities at the current sign average to the preceding prediction."
        ]
      }
    },
    "boundary": {
      "title": "Use the correct center and the correct statistic",
      "paragraphs": [
        "A concentration argument may fail because of a constant, a center, or an information pattern rather than an incorrect named theorem. In an exam, show the actual replacement calculation before announcing a tail scale."
      ],
      "cases": [
        {
          "label": "A norm rather than a coordinate",
          "setting": "The target is ∥Σ εᵢvᵢ∥ in a general normed space.",
          "question": {
            "prompt": "Which fact directly controls a sign flip?",
            "options": [
              "The reverse triangle inequality and the change 2vᵢ.",
              "Only the first vector coordinate.",
              "The claim that all norms equal Euclidean norm.",
              "Independence of the values of the norm after each revelation."
            ],
            "answer": 0,
            "feedback": [
              "Correct: |∥S∥−∥S−2εᵢvᵢ∥|≤2∥vᵢ∥.",
              "A single coordinate does not control an arbitrary norm without further structure.",
              "The ambient space can have any norm. The triangle and reverse triangle inequalities, rather than Euclidean identities, control the replacement.",
              "Conditional prediction values are not independent in general."
            ]
          }
        },
        {
          "label": "Biased matching queries",
          "setting": "A D-regular graph experiment uses O(D²) edge queries, each with probability 1/D and bounded effect.",
          "question": {
            "prompt": "What is the order of their variance budget?",
            "options": [
              "O(D³)",
              "O(D²)",
              "O(1/D)",
              "O(D)"
            ],
            "answer": 3,
            "feedback": [
              "Each variance contribution is O(1/D), not O(D).",
              "That ignores the small edge-selection probability.",
              "A single query has variance cost O(1/D), but O(D²) possible queries raise the total path budget to O(D).",
              "Correct: O(D²)·O(1/D)=O(D), with the maximum-effect and deviation-range conditions still required."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Linearity of expectation does not require independent bin indicators.",
        "Full replacement effect and centered martingale increment can differ.",
        "The fourth application uses biased-query variance to improve the concentration scale."
      ],
      "retrieval": "Work out one replacement calculation for each of the four illustrations, and explain how the Hamming-neighborhood proof uses a positive probability of distance zero."
    },
    "sourceNote": "Alon–Spencer §7.5, including the fourth illustration involving isolated-edge matchings. The matching concentration outline uses Theorem 7.4.3 within its permitted deviation range."
  },
  "core-talagrand": {
    "intro": {
      "title": "Distance when the cheapest witness depends on the weights",
      "paragraphs": [
        "Ordinary Hamming distance charges one unit for every changed coordinate. Talagrand’s convex distance asks a different question. An adversary chooses coordinate costs whose squared sum is one; you may then choose the most favorable point of A. Different cost vectors can lead you to different witnesses in A.",
        "The resulting distance captures the possibility of spreading disagreement across several witnesses. It is often smaller than the Hamming distance and is governed by a product-space concentration theorem. The geometry becomes concrete by taking the convex hull of mismatch indicator vectors and finding its closest point to the origin."
      ],
      "question": {
        "prompt": "In the weighted interpretation, may the chosen point of A depend on the coordinate costs?",
        "options": [
          "No, one point must work for every weight vector.",
          "Yes, and that dependence is essential to the definition.",
          "Only if the coordinates are dependent.",
          "Only when A is a singleton."
        ],
        "answer": 1,
        "feedback": [
          "That would change the order of optimization and generally define another quantity.",
          "Correct: the witness can change after the adversary chooses the weights.",
          "The concentration theorem is for a product law; witness choice is a geometric feature.",
          "For a singleton there is no witness choice at all."
        ]
      }
    },
    "mechanism": {
      "title": "Convexify the mismatch vectors",
      "definitions": [
        {
          "term": "Mismatch vector",
          "meaning": "For x and y, its i-th coordinate is one when xᵢ≠yᵢ and zero otherwise."
        },
        {
          "term": "Convex hull",
          "meaning": "All weighted averages of the mismatch vectors, with nonnegative weights summing to one."
        },
        {
          "term": "Convex distance",
          "meaning": "The minimum Euclidean norm of a point in that hull; adding coordinatewise larger mismatch vectors does not reduce the minimum."
        }
      ],
      "paragraphs": [
        "A single witness has a zero-one mismatch vector. Convex combinations are not additional outcomes of the random experiment; they are geometric averages of alternative witnesses. A minimum-norm point defines a separating hyperplane, whose normal vector produces a matching adversarial cost vector. Conversely, averaging shows that every cost vector has some witness no more expensive than that norm.",
        "The substantial probabilistic theorem bounds E[exp(dT(X,A)²/4)] by 1/μ(A) for positive-mass A in a product space. Once that input is established, exponential Markov immediately bounds the mass at convex distance at least t. This deduction is different from proving the underlying integral inequality, whose induction is developed in the assigned text."
      ],
      "formula": "μ{dT(X,A)≥t} ≤ exp(−t²/4)/μ(A)",
      "question": {
        "prompt": "Which norm is minimized in the convex-hull characterization?",
        "options": [
          "The Hamming count of a single witness.",
          "The largest coordinate of every witness simultaneously.",
          "The Euclidean norm of a convex combination of mismatch vectors.",
          "The number of elements in A."
        ],
        "answer": 2,
        "feedback": [
          "That gives ordinary Hamming distance, without convexification.",
          "The characterization uses a minimum Euclidean norm, not this coordinatewise maximum.",
          "Correct: squared coordinates reward spreading mismatches across different witnesses.",
          "Set size can influence probability but is not the distance definition."
        ]
      }
    },
    "example": {
      "title": "Three alternative one-coordinate repairs",
      "setup": "Let x=000 and A={100,010,001}. Every point of A is Hamming distance one from x.",
      "table": {
        "headers": [
          "Witness",
          "Mismatch vector",
          "Euclidean norm"
        ],
        "rows": [
          [
            "100",
            "(1,0,0)",
            "1"
          ],
          [
            "010",
            "(0,1,0)",
            "1"
          ],
          [
            "001",
            "(0,0,1)",
            "1"
          ],
          [
            "Equal convex mixture",
            "(1/3,1/3,1/3)",
            "1/√3"
          ]
        ]
      },
      "steps": [
        {
          "title": "Identify the convex hull",
          "explanation": "Its points have nonnegative coordinates whose sum is one."
        },
        {
          "title": "Minimize the squared norm",
          "explanation": "For such a point v, Cauchy–Schwarz gives 1=(v₁+v₂+v₃)²≤3∥v∥². Equality holds when all coordinates are 1/3."
        },
        {
          "title": "Compare the two distances",
          "explanation": "The convex distance is 1/√3, while the Hamming distance remains one. Equal unit-length weights (1,1,1)/√3 give the matching weighted cost."
        }
      ],
      "conclusion": "Convexification changes the geometry even though no individual witness is closer in Hamming distance. This finite computation illustrates the distance; the probability inequality additionally needs the product measure.",
      "question": {
        "prompt": "What is dT(000,A)² in this example?",
        "options": [
          "1/9",
          "1/3",
          "1",
          "3"
        ],
        "answer": 1,
        "feedback": [
          "One coordinate square is 1/9, but there are three coordinates.",
          "Correct: 3·(1/3)²=1/3.",
          "That is the square of the ordinary Hamming distance here.",
          "That would correspond to three compulsory mismatches."
        ]
      }
    },
    "proof": {
      "title": "Separate geometry from the probabilistic input",
      "paragraphs": [
        "First prove the geometric equivalence. If the minimum-norm mismatch-hull point v is zero, the distance is zero and no normalization is needed. Otherwise its supporting hyperplane gives the unit cost vector v/∥v∥. Conversely, expressing v as a convex mixture shows that every unit cost vector has a witness of cost at most ∥v∥. The integral theorem is then proved by induction on the number of coordinates. In one coordinate, with a=μ(A)>0, the integral is a+(1−a)e^{1/4}≤1/a.",
        "For the induction, write a point as (x,ω), define the projection B={x:(x,ω)∈A for some ω}, and the fiber Aω={x:(x,ω)∈A}. Mixing a repair that changes ω with one that stays in its fiber gives, for 0≤λ≤1, dT(A,(x,ω))²≤(1−λ)²+λdT(Aω,x)²+(1−λ)dT(B,x)². Keep λ fixed while integrating over x: Hölder and induction bound that integral by b⁻¹exp((1−λ)²/4)r⁻λ, where b=μ(B) and r=μ(Aω)/b. Only now choose λ=max(0,1+2 ln r), with λ=0 for an empty fiber; a one-variable calculation bounds the factor by 2−r. Integrating over ω gives b⁻¹(2−a/b)=a⁻¹s(2−s)≤1/a, where a=μ(A) and s=a/b∈(0,1]. Exponential Markov then supplies the tail bound."
      ],
      "steps": [
        {
          "claim": "Establish the mismatch-hull characterization, treating v=0 separately.",
          "why": "This justifies mixing witness vectors geometrically and avoids dividing by a zero norm."
        },
        {
          "claim": "Split the final coordinate into the projection B and the fibers Aω.",
          "why": "Changing the final coordinate or keeping it gives two repairs whose convex mixture yields the displayed distance inequality."
        },
        {
          "claim": "Hold λ fixed in the old coordinates, then apply Hölder and the induction hypotheses.",
          "why": "This turns the integral into an explicit function of the fiber-to-projection mass ratio r."
        },
        {
          "claim": "Choose λ from r and integrate over the final coordinate.",
          "why": "The bound by 2−r reduces the last step to s(2−s)≤1, closing the induction."
        },
        {
          "claim": "Apply Markov at exp(t²/4).",
          "why": "The integral bound yields the factor exp(−t²/4)/μ(A) for the convex-distance tail."
        }
      ],
      "question": {
        "prompt": "Why is λ kept fixed while applying Hölder and integrating over the old coordinates x?",
        "options": [
          "The power exponents must be fixed for that Hölder step; λ is optimized afterward from the fiber mass ratio.",
          "It is forbidden for λ to depend on the final coordinate ω.",
          "The distance does not depend on λ.",
          "The induction requires λ=1 for every fiber."
        ],
        "answer": 0,
        "feedback": [
          "Correct: optimizing pointwise in x would not justify the displayed separation of integrals. After Hölder, λ may depend on the fiber through r.",
          "λ is allowed to depend on ω through μ(Aω)/μ(B), after the old-coordinate integral is bounded.",
          "The upper bound contains λ in both the repair penalty and the weighted lower-dimensional distances.",
          "The minimizing choice can lie between zero and one or equal zero for a small fiber."
        ]
      }
    },
    "boundary": {
      "title": "A geometric definition does not supply a measure theorem",
      "paragraphs": [
        "Convex distance can be computed for many sets regardless of how outcomes are sampled. The displayed concentration inequality, however, needs coordinate independence and a positive-mass target."
      ],
      "cases": [
        {
          "label": "A single distant witness",
          "setting": "Let x=0000 and A={1111}.",
          "question": {
            "prompt": "What is the convex distance?",
            "options": [
              "4",
              "1/4",
              "2",
              "0"
            ],
            "answer": 2,
            "feedback": [
              "Four is the Hamming distance; the mismatch vector has Euclidean norm √4.",
              "There is only one mismatch vector, so no averaging reduces it.",
              "Correct: ∥(1,1,1,1)∥₂=2.",
              "The point x is outside A and every coordinate differs."
            ]
          }
        },
        {
          "label": "Strongly dependent sampling",
          "setting": "In dimension ten, put probability 1/2 each on the all-zero and all-one strings, and take A to be the all-zero string.",
          "question": {
            "prompt": "Why can the product-space theorem not be used?",
            "options": [
              "A has zero mass.",
              "The coordinates are perfectly dependent; the asserted product bound would even fail at t=√10.",
              "The space has too few points for probability.",
              "Convex distance is undefined."
            ],
            "answer": 1,
            "feedback": [
              "The target A has probability 1/2 under this two-atom law, so positive mass holds; it is coordinate independence that fails.",
              "Correct: the product of the two event masses is 1/4, larger than exp(−10/4).",
              "Two-point probability spaces are valid; independence is the issue.",
              "The distance is well defined, but the sampling law lacks the theorem’s structure."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "The witness can depend on the chosen coordinate costs.",
        "Convex distance minimizes an L² norm after mixing mismatch vectors.",
        "The tail deduction uses a substantial product-space integral inequality."
      ],
      "retrieval": "Compute the distance to three coordinate-repair witnesses, prove optimality of the equal mixture, and derive the tail inequality from the exponential-integral statement."
    },
    "sourceNote": "Alon–Spencer §7.6. The lesson develops the geometric equivalence, the projection/fiber induction for the exponential-integral theorem, its one-variable optimization, and the Markov tail deduction. Verify the min/max distance and calculus details in the original proof."
  },
  "core-certificate": {
    "intro": {
      "title": "A short witness can determine the concentration scale",
      "paragraphs": [
        "To certify that a graph has a matching of size b, you can exhibit b disjoint present edges. You do not need to reveal every edge of the graph. This distinction between the total number of random coordinates and the size of a witness is exactly what makes Talagrand’s inequality useful for certifiable variables.",
        "A certificate is robust to changes outside its specified coordinates. It proves a lower bound for every completion agreeing with those coordinates. Together with a Lipschitz condition, a small certificate forces a low-value outcome to disagree substantially with a high-value witness, which can be measured by convex distance."
      ],
      "question": {
        "prompt": "What must a certificate for X≥b guarantee?",
        "options": [
          "The original outcome alone has value b.",
          "Every completion agreeing on the certified coordinates has X≥b.",
          "All coordinates have been revealed.",
          "The mean of X is b."
        ],
        "answer": 1,
        "feedback": [
          "A certificate must remain valid under arbitrary unspecified coordinates.",
          "Correct: this universal completion condition makes it a witness.",
          "The value of a small certificate is that it can reveal far fewer coordinates.",
          "A witness for an event does not determine the expectation."
        ]
      }
    },
    "mechanism": {
      "title": "Combine a witness with Lipschitz stability",
      "definitions": [
        {
          "term": "1-Lipschitz variable",
          "meaning": "Changing one underlying coordinate changes the statistic by at most one."
        },
        {
          "term": "f-certifiable",
          "meaning": "Whenever X≥b, at most f(b) coordinates can certify that lower bound."
        },
        {
          "term": "Quantile anchor",
          "meaning": "A value b with a known positive probability of X≥b, often a median."
        }
      ],
      "paragraphs": [
        "If a high-value outcome has a certificate of size at most f(b), place equal Euclidean-normalized weights on those certificate coordinates. A low-value outcome cannot agree with almost all of them: Lipschitz stability would then repair it to a certified outcome without increasing the statistic enough. This contradiction supplies a convex-distance separation.",
        "Talagrand turns the separation into a product bound for a low-value and a high-value event. The scale is √f(b), rather than the square root of all coordinates. Choosing a median gives a high-event probability at least 1/2, but centering the result at the expectation requires an additional mean–median argument."
      ],
      "formula": "Pr(X≤b−t√f(b)) Pr(X≥b) ≤ exp(−t²/4)",
      "question": {
        "prompt": "For maximum matching size with independent edge indicators, what valid certificate size can be used for X≥b?",
        "options": [
          "The total number of possible edges.",
          "b present disjoint edges.",
          "b absent edges of any kind.",
          "One edge, regardless of b."
        ],
        "answer": 1,
        "feedback": [
          "Revealing everything works trivially but misses the sharper witness size.",
          "Correct: those b edges remain a matching in every completion.",
          "Absences of arbitrary edges do not exhibit a matching.",
          "One edge cannot certify a matching of size greater than one."
        ]
      }
    },
    "example": {
      "title": "Certify a matching while leaving most edges unknown",
      "setup": "On six vertices, reveal the present edges 12,34,56. Let X be maximum matching size. All other potential edges remain unspecified.",
      "table": {
        "headers": [
          "Revealed fact",
          "What it certifies",
          "Coordinates fixed"
        ],
        "rows": [
          [
            "12 is present",
            "A matching of size at least 1",
            "1"
          ],
          [
            "12 and 34 are present",
            "A matching of size at least 2",
            "2"
          ],
          [
            "12,34,56 are present",
            "A matching of size at least 3",
            "3"
          ]
        ]
      },
      "steps": [
        {
          "title": "Check disjointness",
          "explanation": "The three edges use six different vertices, so they form a matching."
        },
        {
          "title": "Quantify over all completions",
          "explanation": "Adding or removing unspecified edges does not remove these three present edges, so every completion has X≥3."
        },
        {
          "title": "Check Lipschitzness separately",
          "explanation": "If one edge is deleted from an optimum matching, discard that edge if it was used. The matching size drops by at most one; reversing the comparison handles an added edge."
        },
        {
          "title": "Read the scale",
          "explanation": "For a b-edge matching certificate, f(b)=b. At a quantile b, the theorem’s natural deficit scale is √b rather than the square root of all possible edges."
        }
      ],
      "conclusion": "The certificate argument and the Lipschitz argument are distinct checks. This small graph verifies both without needing its full random-graph distribution.",
      "question": {
        "prompt": "How many edge coordinates suffice for the displayed certificate of X≥3?",
        "options": [
          "1",
          "2",
          "3",
          "15"
        ],
        "answer": 2,
        "feedback": [
          "One present edge witnesses only one matching edge.",
          "Two disjoint edges do not certify three matching edges.",
          "Correct: the three revealed disjoint edges are a certificate.",
          "Fifteen is the total number of potential edges on six vertices and is unnecessary."
        ]
      }
    },
    "proof": {
      "title": "Why the low and high events are separated",
      "paragraphs": [
        "Fix a high-value outcome y and a certificate I. If a low-value outcome z were too close in weighted mismatch distance, modify z only on its disagreements with y inside I. The modified point has the certificate, yet its value can rise by at most the number of changed coordinates. That is incompatible with the chosen deficit."
      ],
      "steps": [
        {
          "claim": "Choose the low-value set A and a certificate for each high-value point.",
          "why": "The certificate may depend on the point; a common certificate is not required."
        },
        {
          "claim": "Put equal weights on the chosen certificate coordinates.",
          "why": "Unit L² normalization makes a Hamming deficit translate to deficit divided by √f(b)."
        },
        {
          "claim": "Use Lipschitzness to obtain the contradiction after repairing certificate coordinates.",
          "why": "A small number of coordinate repairs cannot bridge a larger value deficit."
        },
        {
          "claim": "Apply Talagrand and divide by the high-event probability when it is known.",
          "why": "A median provides a factor at most two for the resulting one-sided bound."
        }
      ],
      "question": {
        "prompt": "If Pr(X≥25)≥1/2 and f(25)=25, which bound follows for Pr(X≤10)?",
        "options": [
          "At most 2exp(−9/4).",
          "At most exp(−15²/4) without normalization.",
          "Exactly 1/2.",
          "Zero."
        ],
        "answer": 0,
        "feedback": [
          "Correct: the deficit 15 equals 3√25, so t=3 and dividing by at least 1/2 gives the factor two.",
          "The deficit must be divided by √f(25)=5 before squaring t.",
          "The theorem gives an upper bound, not an exact probability.",
          "A concentration estimate need not make the event impossible."
        ]
      }
    },
    "boundary": {
      "title": "A certificate alone is not enough",
      "paragraphs": [
        "Many monotone graph counts have compact lower-bound certificates but large one-edge effects. Verify both ingredients before using the 1-Lipschitz form, and distinguish a median-centered bound from a mean-centered one."
      ],
      "cases": [
        {
          "label": "Triangle count",
          "setting": "A graph’s triangle count is certified to be at least s by at most 3s present edges.",
          "question": {
            "prompt": "What still prevents automatic use of the 1-Lipschitz matching argument?",
            "options": [
              "Triangles cannot be certified.",
              "Changing one edge can create or destroy many triangles.",
              "Triangle indicators are never random.",
              "The certificate must include every absent edge."
            ],
            "answer": 1,
            "feedback": [
              "The selected s triangles give a genuine certificate of size at most 3s.",
              "Correct: certifiability does not supply the missing sensitivity-one property.",
              "Triangle indicators are random functions of edge indicators; certifiability does not remove their possible dependence or their large single-edge sensitivity.",
              "Presence of the witness triangles is enough for a lower-bound certificate."
            ]
          }
        },
        {
          "label": "Changing the center",
          "setting": "A proof obtains concentration around a median and then replaces the median by E[X].",
          "question": {
            "prompt": "What additional justification is needed?",
            "options": [
              "None; medians and expectations are always equal.",
              "A proof that X is deterministic.",
              "A bound on the mean–median difference.",
              "A replacement of product measure by an arbitrary law."
            ],
            "answer": 2,
            "feedback": [
              "Asymmetric distributions can have different medians and means.",
              "Concentrated random variables need not be deterministic.",
              "Correct: integrating tails or another estimate controls the shift of center.",
              "The product-space hypothesis remains essential."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "A certificate survives arbitrary changes outside its coordinates.",
        "Certifiability and Lipschitzness are separate assumptions.",
        "The certificate size controls the convex-distance concentration scale."
      ],
      "retrieval": "Give and verify a matching certificate, prove sensitivity one, and derive the probability bound when a deficit is three times the square root of the certificate size."
    },
    "sourceNote": "Alon–Spencer §7.7. The certifiable-variable deduction is developed using matching as an original worked example; also study the source’s longest-increasing-subsequence and clique-packing applications."
  },
  "core-kim-vu": {
    "intro": {
      "title": "Count overlapping structures through a polynomial",
      "paragraphs": [
        "Triangle indicators in a random graph are not independent: triangles sharing an edge respond to the same random variable. A direct Chernoff calculation treating them as independent summands therefore has no justification. Instead, express the count as a low-degree multilinear polynomial in the independent edge indicators.",
        "Kim–Vu concentration measures how much structure can remain after fixing small groups of coordinates. Partial derivatives capture these residual counts. Their expectations may be larger than the overall mean in sparse regimes, so the mean alone is not the right concentration parameter. The section states this general theorem without its full proof; learning to set up its parameters correctly is the central task here."
      ],
      "question": {
        "prompt": "Why are triangle indicators in G(n,p) not generally independent?",
        "options": [
          "Every triangle uses all graph edges.",
          "Triangles can share an underlying edge indicator.",
          "The graph has no independent coordinates.",
          "Their expectations are always zero."
        ],
        "answer": 1,
        "feedback": [
          "A triangle uses three edges, but those triples can overlap.",
          "Correct: shared coordinates create dependence between the monomial indicators.",
          "The edge indicators are independent in G(n,p).",
          "Each triangle requires three independent present edges, giving expectation p³; shared edges, rather than a zero mean, cause dependence between triangle indicators."
        ]
      }
    },
    "mechanism": {
      "title": "Differentiate before choosing the scale",
      "definitions": [
        {
          "term": "Multilinear polynomial",
          "meaning": "A polynomial in which each variable appears with exponent at most one in every monomial."
        },
        {
          "term": "Derivative expectation Eᵢ",
          "meaning": "The largest expected partial derivative over sets of i distinct variables."
        },
        {
          "term": "E and E′",
          "meaning": "E′ is the maximum derivative expectation over nonempty orders 1 through k; E=max(E[X],E′)."
        }
      ],
      "paragraphs": [
        "For triangle count X=Σtriangles xₑx_fx_g, differentiation with respect to one edge leaves a sum of products of the two other edges of each triangle containing it. Differentiating in two adjacent edges leaves the third edge. Differentiating in all three edges of one triangle leaves the coefficient one. Incompatible edge sets can have zero derivative.",
        "The theorem applies to nonnegative coefficients and fixed degree k. The constants aₖ,dₖ depend only on k. Its exact form is displayed below; the variable count N is the number of independent indicators, so N=C(n,2) for a graph-edge model. To prove a relative error bound δμ, the deviation threshold must be at most δμ while the failure bound becomes small. The source applies this to triangles through one fixed vertex: μ=C(n−1,2)p³ and E′ has order max(np²,1). For p=n⁻α with fixed 0<α<2/3, E′/μ decreases by a positive power n⁻η, with η=min(1−α,2−3α)>0. Choosing λ as a sufficiently small constant times n^{η/6} makes √(EE′)λ³ a controlled multiple of μ; the exponential failure term absorbs the polynomial factor and permits a union bound over all root vertices."
      ],
      "formula": "Pr(|Y−μ|>aₖ√(EE′)λᵏ)<dₖe⁻λN^{k−1}, λ>1; N is the number of independent variables",
      "question": {
        "prompt": "Why must the highest derivative order be included in E′?",
        "options": [
          "It can remain one even when the mean is tiny.",
          "It is always zero for multilinear polynomials.",
          "It turns all dependent indicators into independent ones.",
          "It equals the number of vertices."
        ],
        "answer": 0,
        "feedback": [
          "Correct: differentiating a full triangle monomial leaves its coefficient.",
          "A multilinear monomial has a nonzero full mixed derivative.",
          "The theorem handles dependence through parameter control; it does not remove it.",
          "The third derivative of one triangle monomial is one."
        ]
      }
    },
    "example": {
      "title": "Compute all derivative scales on five vertices",
      "setup": "As an original finite illustration, take G(5,1/2) and let X count all triangles, rather than only triangles through one root. There are ten possible triangles and ten independent edge indicators.",
      "table": {
        "headers": [
          "Derivative order",
          "Expected value or maximum",
          "Calculation"
        ],
        "rows": [
          [
            "0: the mean",
            "1.25",
            "10·(1/2)³"
          ],
          [
            "1: a fixed edge",
            "0.75",
            "3·(1/2)²"
          ],
          [
            "2: adjacent edges",
            "0.5",
            "One possible closing edge"
          ],
          [
            "3: a triangle’s three edges",
            "1",
            "The remaining coefficient"
          ]
        ]
      },
      "steps": [
        {
          "title": "Find the mean",
          "explanation": "Each of ten vertex triples is a triangle with probability 1/8, giving μ=10/8=1.25."
        },
        {
          "title": "Find the largest nonempty derivative expectation",
          "explanation": "The maximum of 0.75,0.5,1 is E′=1. The third derivative cannot be omitted."
        },
        {
          "title": "Compare the two master parameters",
          "explanation": "E=max(1.25,1)=1.25. The unscaled factor √(EE′) is √1.25; it is not √μ with E′ silently replaced by zero."
        }
      ],
      "conclusion": "This computes the inputs, not a useful small-graph tail guarantee. The degree constants and λ-dependent failure factor must still be included when applying the theorem.",
      "question": {
        "prompt": "What are E′ and E for this example?",
        "options": [
          "E′=0.75, E=1.25",
          "E′=1, E=1.25",
          "E′=1.25, E=1",
          "E′=0.5, E=0.75"
        ],
        "answer": 1,
        "feedback": [
          "This drops the third derivative, whose expectation is one.",
          "Correct: maximize all nonempty derivative orders, then include the mean for E.",
          "E′ excludes order zero, while E cannot be smaller than the mean.",
          "Both maxima have omitted larger relevant values."
        ]
      }
    },
    "proof": {
      "title": "A correct application has several obligations",
      "paragraphs": [
        "The source omits the proof of the general Kim–Vu theorem, which combines a degree induction with martingale estimates. A short lesson should not disguise that deep input as a one-line independence argument. What can be developed fully here is the polynomial representation, the derivative calculations and the logic of using the resulting bound."
      ],
      "steps": [
        {
          "claim": "Express the statistic using independent base variables and nonnegative coefficients.",
          "why": "This checks the actual model covered by the stated theorem."
        },
        {
          "claim": "Compute derivative expectations at every nonempty order.",
          "why": "Overlaps are encoded by the residual structures counted by these derivatives."
        },
        {
          "claim": "Set E′ and E with the required maxima.",
          "why": "A sparse statistic can have derivatives much larger than its mean."
        },
        {
          "claim": "Choose λ and compare the theorem’s threshold with the desired deviation.",
          "why": "A formally valid absolute bound may still be too large to prove relative concentration."
        }
      ],
      "question": {
        "prompt": "What remains after listing μ,E₁,E₂,E₃ if the aim is relative error δμ?",
        "options": [
          "Nothing; the relative bound is automatic.",
          "Assume the theorem’s constants vanish.",
          "Check that the λ-dependent deviation threshold is at most δμ and the failure bound is small.",
          "Replace overlapping triangles by independent copies."
        ],
        "answer": 2,
        "feedback": [
          "A parameter list alone does not establish a useful relative-error scale.",
          "The positive constants aₖ and dₖ remain in the stated theorem and must be included when fitting the threshold below δμ.",
          "Correct: both the deviation threshold and its probability must be checked.",
          "That changes the random variable being studied."
        ]
      }
    },
    "boundary": {
      "title": "The mean is not the whole story",
      "paragraphs": [
        "Sparse examples reveal why the derivative convention matters. Changes in coefficients or in the sign structure also need to be checked against the exact version of the theorem being invoked."
      ],
      "cases": [
        {
          "label": "A sparser five-vertex model",
          "setting": "Change p from 1/2 to 1/10 while retaining the triangle polynomial.",
          "question": {
            "prompt": "Which parameter is now larger: the mean or E′?",
            "options": [
              "The mean is 10 and dominates.",
              "Both are zero.",
              "The mean is 0.01 while E′ remains 1.",
              "E′ becomes p³."
            ],
            "answer": 2,
            "feedback": [
              "There are ten possible triangles, each with probability 0.1³, so the sparse mean is 0.01 rather than ten.",
              "Differentiating in the three edges of one triangle leaves coefficient one regardless of p, so not all derivative parameters vanish.",
              "Correct: high-order derivatives dominate this sparse mean.",
              "E′ includes all nonempty derivative orders, not only the original monomial expectation."
            ]
          }
        },
        {
          "label": "Signed coefficients",
          "setting": "A proposed statistic is a difference of two subgraph counts, giving negative polynomial coefficients.",
          "question": {
            "prompt": "Can the stated nonnegative-polynomial theorem be applied unchanged?",
            "options": [
              "Yes, because every polynomial is multilinear after rewriting.",
              "No; the nonnegative-coefficient hypothesis must be addressed.",
              "Yes, because the mean is positive.",
              "Only if all negative coefficients are ignored."
            ],
            "answer": 1,
            "feedback": [
              "Multilinearity does not remove the sign condition.",
              "Correct: a different result or a justified decomposition is needed.",
              "A positive total mean does not make every coefficient nonnegative.",
              "Discarding terms changes the statistic and requires a separate comparison."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Use independent edge variables, not independent triangle indicators.",
        "Include the highest nonempty derivatives in E′.",
        "The general concentration theorem is an input; usefulness still requires parameter and λ checks."
      ],
      "retrieval": "For triangle count, derive each derivative expectation and explain what changes as p becomes small; then state the two additional checks needed to obtain a relative-error bound."
    },
    "sourceNote": "Alon–Spencer §7.8. The general Kim–Vu proof is omitted in the assigned text. The lesson states the applicable bound, develops all derivative parameters, and connects the original total-triangle example to the source’s fixed-root triangle application for 0<α<2/3."
  },
  "core-shannon": {
    "intro": {
      "title": "Reliability does not require every error pattern to be corrected",
      "paragraphs": [
        "A noisy communication channel can corrupt a transmitted binary word. Redundancy lets a decoder recover the intended message, but two notions of reliability must be separated. A binary symmetric channel flips each bit independently with probability p. An adversarial model instead permits any corruption pattern up to a specified number of flips.",
        "Shannon’s achievability argument exploits the first model: most noise strings have about pn flipped bits, while atypical noise has small probability. A random code can keep the chance of another codeword entering the relevant decoding neighborhood small. The conclusion is a vanishing error probability at a rate below 1−H₂(p), not perfect correction of every conceivable corruption."
      ],
      "question": {
        "prompt": "What does random-noise coding achievability permit?",
        "options": [
          "A small probability of decoding failure under the specified channel.",
          "Failure on every typical noise pattern.",
          "No redundancy at every noise level.",
          "Perfect correction of arbitrarily many adversarial flips."
        ],
        "answer": 0,
        "feedback": [
          "Correct: reliability is probabilistic under the channel law.",
          "The proof is designed to handle typical noise with high probability.",
          "A nonzero noise level constrains the achievable rate.",
          "Arbitrarily large adversarial corruption can erase all information."
        ]
      }
    },
    "mechanism": {
      "title": "Separate atypical noise from codeword confusion",
      "definitions": [
        {
          "term": "Rate",
          "meaning": "R=(log₂ number of codewords)/n for block length n."
        },
        {
          "term": "Binary entropy",
          "meaning": "H₂(p)=−p log₂p−(1−p)log₂(1−p), with zero terms interpreted by continuity."
        },
        {
          "term": "Typical decoding ball",
          "meaning": "A Hamming ball of radius about (p+δ)n containing likely channel outputs for a transmitted word."
        }
      ],
      "paragraphs": [
        "First select δ>0 small enough that R+H₂(p+δ)<1. A concentration bound makes more than (p+δ)n flips unlikely. The number of binary strings in a ball of that radius is at most 2^{nH₂(p+δ)} up to the usual harmless finite-length treatment, with p+δ<1/2.",
        "For an independently random competing codeword, the chance of landing in a fixed decoding ball is its volume divided by 2ⁿ. A union bound over about 2^{nR} competitors gives an exponentially small confusion term. Averaging establishes existence of a good code. Linear codes require a subspace-compatible random construction; arbitrary independently selected words do not automatically form a linear code."
      ],
      "formula": "confusion bound ≲ 2^{n(R+H₂(p+δ)−1)}",
      "question": {
        "prompt": "Why choose δ so that R+H₂(p+δ)<1?",
        "options": [
          "It forces p to be zero.",
          "It makes the competing-codeword union bound decay exponentially.",
          "It makes every Hamming ball contain one word.",
          "It proves all random codebooks are linear."
        ],
        "answer": 1,
        "feedback": [
          "The argument handles positive noise probability.",
          "Correct: the exponent of the confusion term becomes negative.",
          "The ball still contains exponentially many strings in general.",
          "Independently chosen arbitrary words need not form a subspace. The linear-code result uses a construction respecting closure under binary addition."
        ]
      }
    },
    "example": {
      "title": "A small repetition code under a real channel",
      "setup": "Encode one bit as 00000 or 11111 and decode by majority. The code has length five, two codewords and rate 1/5. Let each bit flip independently with probability 0.1.",
      "table": {
        "headers": [
          "Number of flips",
          "Probability",
          "Majority outcome"
        ],
        "rows": [
          [
            "3",
            "10·0.1³·0.9²=0.0081",
            "Wrong"
          ],
          [
            "4",
            "5·0.1⁴·0.9=0.00045",
            "Wrong"
          ],
          [
            "5",
            "0.1⁵=0.00001",
            "Wrong"
          ]
        ]
      },
      "steps": [
        {
          "title": "Identify the failure event",
          "explanation": "A majority decoder fails exactly when at least three of the five bits flip."
        },
        {
          "title": "Add the disjoint probabilities",
          "explanation": "The total error probability is 0.0081+0.00045+0.00001=0.00856."
        },
        {
          "title": "Compare channel and distance statements",
          "explanation": "The two codewords have distance five, so every pattern of at most two flips is corrected. Larger patterns can fail, but their channel probability is included in the small error total."
        },
        {
          "title": "Interpret the rate",
          "explanation": "Rate 0.2 is below 1−H₂(0.1)≈0.531. This tiny code illustrates reliability; it does not demonstrate asymptotic capacity-achieving rate."
        }
      ],
      "conclusion": "The calculation is exact for this code and channel. The random-coding proof addresses a sequence of longer codes whose rates approach the entropy threshold from below.",
      "question": {
        "prompt": "What is the decoding error probability for the five-bit repetition code here?",
        "options": [
          "0.1",
          "0.00001",
          "0.00856",
          "0.531"
        ],
        "answer": 2,
        "feedback": [
          "That is the probability of one specified bit flipping.",
          "That counts only the five-flip event and misses three and four flips.",
          "Correct: sum the binomial probabilities for three, four and five flips.",
          "That is approximately the channel’s entropy-based rate threshold, not this code’s error probability."
        ]
      }
    },
    "proof": {
      "title": "Averaging produces a code, not an efficient decoder automatically",
      "paragraphs": [
        "Track the two failure mechanisms separately. A rare noise event is controlled by the channel distribution, and a confusion event is controlled by random code selection. Once their average sum is small, at least one fixed code has small error. This existence argument by itself does not establish a practical encoding or decoding algorithm."
      ],
      "steps": [
        {
          "claim": "Define a typical-noise radius strictly below n/2.",
          "why": "Concentration controls atypical noise and the binary-entropy ball-volume estimate applies."
        },
        {
          "claim": "Bound confusion for one competitor, conditional on the received word.",
          "why": "A uniform random competitor hits the ball with probability volume divided by 2ⁿ."
        },
        {
          "claim": "Union-bound competitors and average over codebooks.",
          "why": "The negative exponent yields an existence statement for good fixed codes."
        },
        {
          "claim": "Check the performance convention and the linear-code construction separately.",
          "why": "Average message error, maximal message error and linear structure require their own stated arguments."
        }
      ],
      "question": {
        "prompt": "What does a small average over random codebooks directly imply?",
        "options": [
          "Every codebook is good.",
          "The decoder runs in polynomial time.",
          "Every corruption pattern is correctable.",
          "At least one fixed codebook has error no larger than the average bound."
        ],
        "answer": 3,
        "feedback": [
          "Some codebooks can have large decoding error even when the ensemble average is small; averaging only guarantees existence of a sufficiently good one.",
          "Existence and decoding complexity are different issues.",
          "The bound concerns the channel error probability.",
          "Correct: some member of a finite or probabilistic ensemble performs at least as well as its mean."
        ]
      }
    },
    "boundary": {
      "title": "Keep the channel model attached",
      "paragraphs": [
        "A rate statement, a minimum-distance guarantee and an efficient-decoding claim answer different questions. Changing any one of these targets requires checking which parts of the argument remain valid."
      ],
      "cases": [
        {
          "label": "Worst-case errors",
          "setting": "Require correction of every pattern of at most t bit flips.",
          "question": {
            "prompt": "What minimum-distance condition suffices for unique decoding?",
            "options": [
              "Distance at least 2t+1.",
              "Distance at least t.",
              "Only positive average distance.",
              "Rate below one, with no distance condition."
            ],
            "answer": 0,
            "feedback": [
              "Correct: radius-t balls around distinct codewords must be disjoint.",
              "Two radius-t balls can overlap at that distance.",
              "An average does not prevent a close pair of codewords.",
              "Redundancy alone does not specify a separation guarantee."
            ]
          }
        },
        {
          "label": "A radius above half the cube",
          "setting": "A proposed volume estimate uses 2^{nH₂(a)} for a Hamming ball with a>1/2.",
          "question": {
            "prompt": "Why is the usual lower-half entropy exponent being misused?",
            "options": [
              "Hamming balls are empty there.",
              "The ball already contains most of the cube, while H₂(a) decreases beyond 1/2.",
              "Entropy is undefined for a between 1/2 and 1.",
              "Every codeword is outside the ball."
            ],
            "answer": 1,
            "feedback": [
              "A Hamming ball of radius greater than n/2 contains a large fraction of the cube, so the decreasing upper-half entropy exponent cannot describe its size.",
              "Correct: the familiar entropy estimate must be used in its stated radius regime.",
              "H₂(a) remains defined above one half, but decreases there; the issue is applying a lower-half ball-volume estimate outside its valid radius range.",
              "A ball contains its own center and many other strings."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Separate typical channel noise from confusion with other codewords.",
        "The entropy threshold comes from ball volume versus codebook size.",
        "Random-noise reliability, adversarial correction and efficient decoding are different claims."
      ],
      "retrieval": "Derive the random-coding confusion exponent and then explain why a distance-five repetition code corrects every two-bit error but has a nonzero error probability on a binary symmetric channel."
    },
    "sourceNote": "Alon–Spencer §15.1. The lesson develops achievability and a finite coding example; the assigned linear-code theorem requires its subspace-based random construction."
  },
  "core-liar": {
    "intro": {
      "title": "Searching when an answer may be false",
      "paragraphs": [
        "Paul wants to identify a hidden item using yes/no membership questions. Carole may lie a limited number of times. After a transcript, different candidates may have used different portions of their lie allowance. A single count of remaining candidates therefore loses information: a candidate with spare lies is harder to eliminate than one with no lies left.",
        "The ChipLiar representation keeps one chip per candidate, at the level equal to its remaining lie budget. A reported answer moves inconsistent candidates one level toward deletion. The useful potential is the expected number of survivors if future answers are chosen by fair coins. This probabilistic interpretation produces both an impossibility bound and an explicit adversarial strategy."
      ],
      "question": {
        "prompt": "Why is the number of surviving candidates alone an incomplete state description?",
        "options": [
          "Candidates cannot be labeled.",
          "Some surviving candidates may have different remaining lie budgets.",
          "Questions never depend on earlier answers.",
          "There are no terminal conditions."
        ],
        "answer": 1,
        "feedback": [
          "Labels identify candidates, but their remaining budgets still matter.",
          "Correct: two states with equal chip counts can have different survivability.",
          "Paul can choose later membership sets from earlier reported answers, so a complete strategy must retain the response-tree structure.",
          "The game ends after the specified number of questions."
        ]
      }
    },
    "mechanism": {
      "title": "Weight a chip by its future survival probability",
      "definitions": [
        {
          "term": "Chip level i",
          "meaning": "The represented candidate can still tolerate at most i inconsistent future answers."
        },
        {
          "term": "B(q,i)",
          "meaning": "The probability of at most i heads in q fair flips: 2⁻qΣⱼ₌₀ⁱC(q,j)."
        },
        {
          "term": "State weight",
          "meaning": "W=ΣᵢxᵢB(q,i) when q questions remain and xᵢ chips have level i."
        }
      ],
      "paragraphs": [
        "For any question, a fair random response moves each particular chip left with conditional probability 1/2, regardless of whether Paul included it in the question set. A chip at level i survives q further questions exactly when it suffers at most i such moves. Linearity of expectation adds these survival probabilities without requiring different chips to survive independently.",
        "Pascal’s identity gives B(q,i)=[B(q−1,i)+B(q−1,i−1)]/2. Consequently the current weight is the average of the two successor weights for every question. Carole chooses a successor with at least the current weight. If W>1 initially, it remains above one; at the end the weight is the integer number of survivors, so at least two candidates remain."
      ],
      "formula": "W=(WYes+WNo)/2; W>1 is a sufficient condition for Carole to win",
      "question": {
        "prompt": "Why can Carole maintain a weight above one?",
        "options": [
          "Both successor weights are always equal.",
          "She may choose any numerical state she wants.",
          "At least one successor is at least their average, which is the current weight.",
          "Every chip is independent of every other chip."
        ],
        "answer": 2,
        "feedback": [
          "A one-versus-three question in the example gives successor weights 7/8 and 13/8. Averaging, not equality of branches, preserves the potential.",
          "She must choose one of the two legal response states.",
          "Correct: the averaging identity gives a legal nondecreasing-weight choice.",
          "The potential argument uses linearity, not independent survival events."
        ]
      }
    },
    "example": {
      "title": "Four candidates, four questions, one lie",
      "setup": "All four candidates start with one lie available. With q=4, B(4,1)=(1+4)/16=5/16, so initial weight is 5/4.",
      "table": {
        "headers": [
          "First question size",
          "Successor (x₀,x₁)",
          "Weight with 3 questions left"
        ],
        "rows": [
          [
            "One candidate",
            "(3,1)",
            "3/8+1/2=7/8"
          ],
          [
            "One candidate: other answer",
            "(1,3)",
            "1/8+3/2=13/8"
          ],
          [
            "Two candidates",
            "(2,2)",
            "2/8+2/2=5/4"
          ]
        ]
      },
      "steps": [
        {
          "title": "Compute the initial potential",
          "explanation": "There are four chips at level one, giving 4·5/16=5/4>1."
        },
        {
          "title": "Inspect an unbalanced question",
          "explanation": "The two response weights are 7/8 and 13/8. Their average is 5/4, exactly the original weight."
        },
        {
          "title": "Follow Carole’s strategy",
          "explanation": "For that question she selects the 13/8 successor. A balanced two-versus-two question leaves both successors at 5/4. The potential cannot be forced below one."
        }
      ],
      "conclusion": "The weight argument proves that four questions cannot always identify the item when one lie is allowed. It does not need an explicit enumeration of every adaptive question tree.",
      "question": {
        "prompt": "For the one-versus-three first question, which successor weight would Carole choose?",
        "options": [
          "7/8",
          "1",
          "5/4",
          "13/8"
        ],
        "answer": 3,
        "feedback": [
          "That would decrease the potential unnecessarily.",
          "The legal successors weigh 7/8 and 13/8; Carole cannot choose an intermediate numerical state merely because it would be convenient.",
          "That is their average, not a successor in this unbalanced split.",
          "Correct: maximizing the successor weight preserves the impossibility invariant."
        ]
      }
    },
    "proof": {
      "title": "Convert a probabilistic potential into a strategy",
      "paragraphs": [
        "The terminal interpretation is crucial. With no questions left, B(0,i)=1 for every nonnegative level i. Thus the weight is not an abstract real number: it counts the candidates that have not been eliminated. Strictly greater than one means more than one survivor."
      ],
      "steps": [
        {
          "claim": "Interpret B(q,i) as one chip’s survival probability under random responses.",
          "why": "Each future response moves that chip with conditional probability one half."
        },
        {
          "claim": "Sum survival probabilities to obtain the state weight.",
          "why": "Linearity works even though the same response affects many chips."
        },
        {
          "claim": "Use the successor averaging identity at every question.",
          "why": "Carole can choose a legal branch that does not decrease W."
        },
        {
          "claim": "Evaluate the potential when q=0.",
          "why": "A weight above one becomes at least two surviving candidates, so unique identification fails."
        }
      ],
      "question": {
        "prompt": "Why is the terminal inequality W>1 enough to establish failure of identification?",
        "options": [
          "A nonnegative integer greater than one is at least two.",
          "Every positive real weight represents infinitely many items.",
          "All final chips must have different levels.",
          "Paul is forbidden from making a final guess."
        ],
        "answer": 0,
        "feedback": [
          "Correct: terminal weight is exactly the integer survivor count.",
          "The terminal position contains finitely many candidate chips. Its weight counts those chips exactly, so being greater than one means at least two remain.",
          "Levels need not be distinct and do not matter when no questions remain.",
          "The issue is that more than one candidate is consistent with the transcript."
        ]
      }
    },
    "boundary": {
      "title": "A necessary counting condition need not be a strategy",
      "paragraphs": [
        "The converse of the weight obstruction is not automatic. To win, Paul must realize a legal split whose two successors are both safe. Discrete chips may prevent a desired balancing of weights even when total weight is at most one."
      ],
      "cases": [
        {
          "label": "Weight at most one",
          "setting": "A state has W=0.95 with questions still remaining.",
          "question": {
            "prompt": "What follows from the theorem just proved?",
            "options": [
              "Paul definitely wins.",
              "Carole definitely loses.",
              "Only that the sufficient obstruction W>1 is unavailable.",
              "There are no surviving candidates."
            ],
            "answer": 2,
            "feedback": [
              "Constructing a safe sequence of legal questions requires additional work.",
              "The argument proves that W>1 lets Carole win; from W≤1 it does not construct a winning sequence of legal questions for Paul.",
              "Correct: failure of a sufficient condition is not a winning strategy for the opponent.",
              "The potential is a weighted future survival count, not the current number of chips."
            ]
          }
        },
        {
          "label": "Adaptivity",
          "setting": "Paul chooses each question after seeing previous reported answers.",
          "question": {
            "prompt": "Why does a fixed list of answer strings not automatically describe the whole strategy?",
            "options": [
              "The same candidate may follow different future query branches after a lie.",
              "Adaptive questions cannot be represented by a tree.",
              "All lies occur after the questions end.",
              "Membership questions have no truthful answer."
            ],
            "answer": 0,
            "feedback": [
              "Correct: the transcript changes later questions, so the decision-tree structure must be respected.",
              "A decision tree is exactly the appropriate representation.",
              "Lies occur in the reported responses during play.",
              "For each hidden item and current question, the truthful response is well defined."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Track remaining lie budgets, not only candidate counts.",
        "The survival-probability potential is the average of successor potentials.",
        "Weight above one obstructs identification; the converse needs a legal balancing strategy."
      ],
      "retrieval": "Derive B(q,i)’s recurrence, compute both successor weights for a one-versus-three question, and explain why the initial weight test is not a full characterization of winning positions."
    },
    "sourceNote": "Alon–Spencer §15.2. Both the random-response interpretation and Carole’s nondecreasing-weight strategy are developed; the source gives a concrete counterexample to the converse."
  },
  "core-tenure": {
    "intro": {
      "title": "A promotion game with an exact threshold",
      "paragraphs": [
        "In the Tenure Game, a chip at level i needs i promotions to reach level zero. Paul partitions the chips. Carole promotes every chip on one side and deletes all chips on the other. Paul wins if any chip reaches zero. Unlike the Liar Game, unchosen chips disappear immediately rather than merely losing a lie allowance.",
        "A chip at level i has weight 2⁻ⁱ. Promotion doubles that weight and deletion removes it. This potential gives Carole a defense below total weight one. The striking additional fact is a dyadic splitting lemma: at weight at least one, Paul can divide the chips into two groups each weighing at least one half. That makes the threshold exact."
      ],
      "question": {
        "prompt": "What happens to the weight of a surviving chip after one promotion?",
        "options": [
          "It halves.",
          "It stays unchanged.",
          "It doubles.",
          "It becomes zero."
        ],
        "answer": 2,
        "feedback": [
          "Moving from i to i−1 changes 2⁻ⁱ to 2·2⁻ⁱ.",
          "A move from level i to i−1 replaces weight 2⁻ⁱ by 2⁻⁽ⁱ⁻¹⁾, which is twice as large rather than unchanged.",
          "Correct: one fewer required promotion doubles the dyadic weight.",
          "A promoted chip survives at a higher dyadic weight. Only the chips in the discarded group contribute zero afterward."
        ]
      }
    },
    "mechanism": {
      "title": "Control both sides of the partition",
      "definitions": [
        {
          "term": "Dyadic weight",
          "meaning": "A level-i chip contributes 2⁻ⁱ, so a level-zero chip contributes one."
        },
        {
          "term": "Carole’s lower-weight strategy",
          "meaning": "Choose the successor with the smaller total weight."
        },
        {
          "term": "Dyadic splitting lemma",
          "meaning": "A finite positive-level chip set of weight at least one has a partition with both parts of weight at least one half."
        }
      ],
      "paragraphs": [
        "If Paul’s two parts have weights a and b, the successors have weights 2a and 2b. Their average is a+b, the current weight. Below one, Carole chooses a successor no larger than this average and prevents a level-zero chip, which alone would weigh one.",
        "Above or at one, Paul uses the splitting lemma so neither successor drops below one. The lemma is proved by combining two chips at the same level into one superchip one level higher. If no level contains two chips, the finite sum of distinct positive-level dyadic weights is below one, a contradiction. Ungluing a superchip preserves its group’s weight."
      ],
      "formula": "WYes+WNo=2W; Paul wins exactly when W≥1",
      "question": {
        "prompt": "Why does the equality case W=1 belong to Paul’s winning side?",
        "options": [
          "A partition into two half-weight groups guarantees every successor still has weight at least one.",
          "Carole must choose the more expensive successor.",
          "Every legal partition is then safe.",
          "One level-zero chip is present initially."
        ],
        "answer": 0,
        "feedback": [
          "Correct: promotion doubles either chosen group’s weight to at least one.",
          "Carole may choose either successor; Paul makes both safe.",
          "A badly chosen partition can lose even at total weight one.",
          "The theorem begins with chips at positive levels."
        ]
      }
    },
    "example": {
      "title": "One near-tenure chip and two farther chips",
      "setup": "Start with one chip at level 1 and two chips at level 2. Their weights are 1/2,1/4,1/4, totaling one.",
      "table": {
        "headers": [
          "Paul’s group",
          "Weight before promotion",
          "If that group survives"
        ],
        "rows": [
          [
            "The level-1 chip",
            "1/2",
            "One level-0 chip: immediate win"
          ],
          [
            "The two level-2 chips",
            "1/2",
            "Two level-1 chips: total weight 1"
          ]
        ]
      },
      "steps": [
        {
          "title": "Make a safe partition",
          "explanation": "Put the level-1 chip on one side and both level-2 chips on the other. Each side has weight 1/2."
        },
        {
          "title": "Inspect both legal outcomes",
          "explanation": "If Carole promotes the single chip, it reaches zero. Otherwise the two farther chips become two level-1 chips."
        },
        {
          "title": "Finish the remaining case",
          "explanation": "Split those two level-1 chips, one on each side. Whichever survives is promoted to level zero."
        }
      ],
      "conclusion": "The strategy succeeds against both choices at every stage. The invariant W≥1 alone is not a recipe for an arbitrary partition; the splitting step is essential.",
      "question": {
        "prompt": "If the two level-2 chips survive the first move, what is their new total weight?",
        "options": [
          "1/4",
          "1/2",
          "1",
          "2"
        ],
        "answer": 2,
        "feedback": [
          "Each surviving chip has moved closer to zero, so weight cannot fall to 1/4.",
          "That was the group’s weight before promotion.",
          "Correct: two level-1 chips contribute 1/2+1/2=1.",
          "They do not yet reach level zero; each weighs one half."
        ]
      }
    },
    "proof": {
      "title": "Why dyadic arithmetic supplies the converse",
      "paragraphs": [
        "The gluing argument is an induction on chip count. When two chips sit at level one, splitting them already gives a half-weight chip on each side. Otherwise glue a pair at a deeper common level, apply induction to the shorter chip list, and put the original pair into the superchip’s assigned part."
      ],
      "steps": [
        {
          "claim": "Below one, let Carole minimize successor weight.",
          "why": "The average identity keeps the total strictly below the weight of a winning level-zero chip."
        },
        {
          "claim": "At weight at least one, find a repeated level.",
          "why": "A finite set with at most one chip at each positive level has total less than the geometric series one."
        },
        {
          "claim": "Glue equal-level chips and prove the safe partition inductively.",
          "why": "The dyadic weights add exactly to the weight of the superchip."
        },
        {
          "claim": "Maintain W≥1 until the finite game terminates.",
          "why": "All surviving chips move closer to zero, and the game cannot end with no chips while that invariant holds."
        }
      ],
      "question": {
        "prompt": "What property makes gluing two level-i chips legitimate?",
        "options": [
          "Their weights sum to the weight of one level-(i−1) chip.",
          "The chips must be independently sampled.",
          "Their labels are identical.",
          "The number of rounds doubles."
        ],
        "answer": 0,
        "feedback": [
          "Correct: 2·2⁻ⁱ=2⁻⁽ⁱ⁻¹⁾.",
          "The game is deterministic once moves are selected.",
          "The weights depend on levels, not chip labels; two different chips at the same level have the required equal dyadic weights.",
          "Gluing is a proof device, not a change to the actual time rules."
        ]
      }
    },
    "boundary": {
      "title": "Distinguish a winning position from a good move",
      "paragraphs": [
        "An exact threshold classifies starting positions, not every possible action from them. The contrast with the Liar Game is instructive: here the dyadic splitting lemma supplies the converse that a mere averaging invariant could not provide."
      ],
      "cases": [
        {
          "label": "Below threshold",
          "setting": "A position has total weight 3/4.",
          "question": {
            "prompt": "What can Carole maintain by taking the lower-weight successor?",
            "options": [
              "Weight at least one.",
              "Weight at most 3/4, hence no level-zero chip.",
              "Exactly one surviving chip at every step.",
              "An infinite game."
            ],
            "answer": 1,
            "feedback": [
              "Carole minimizes successor weight so that a position below one stays below the weight contributed by a level-zero chip.",
              "Correct: a successor no larger than the current average stays below one.",
              "The invariant controls weight, not an exact chip count.",
              "The maximum initial level bounds the game length."
            ]
          }
        },
        {
          "label": "A reckless partition at equality",
          "setting": "At W=1, Paul puts all chips on one side and leaves the other side empty.",
          "question": {
            "prompt": "Can Carole defeat this particular move?",
            "options": [
              "No, every move from W=1 wins.",
              "No, an empty group must be ignored.",
              "Yes, by promoting the empty side and deleting all other chips.",
              "Only if a negative weight is allowed."
            ],
            "answer": 2,
            "feedback": [
              "The theorem guarantees a strategy using safe partitions.",
              "Both legal sides are available under the game rule.",
              "Correct: the empty successor has weight zero.",
              "No negative weights are involved: Carole simply chooses the legal empty group, whose promoted weight is zero, and deletes the other group."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Promotion doubles dyadic weight; deletion removes it.",
        "Carole defends W<1 by choosing a lower-weight branch.",
        "The gluing lemma lets Paul make both branches safe when W≥1."
      ],
      "retrieval": "Prove the dyadic splitting lemma, including the equality case, and demonstrate the complete winning strategy for chips at levels 1,2,2."
    },
    "sourceNote": "Alon–Spencer §15.3. Both threshold directions and the gluing-based splitting lemma are developed rather than treating the converse as a consequence of averaging alone."
  },
  "core-balancing": {
    "intro": {
      "title": "Keep every coordinate small while an adversary chooses vectors",
      "paragraphs": [
        "In each round, Pusher chooses a vector with coordinates ±1 and Chooser decides whether to add or subtract it from the current position. There are n rounds in n dimensions. The final loss is the largest absolute coordinate. Pusher can react to the entire past, so the input sequence need not be fixed in advance.",
        "A fresh fair random sign is still powerful against this adaptive opponent. In any fixed coordinate, multiplying the currently chosen ±1 entry by an independent fair sign produces another fresh fair increment. A tail bound controls that coordinate, and a union bound controls all coordinates. Turning positive-probability success into a deterministic winning strategy uses finite-game determinacy, not an assumption that one fixed random seed beats every opponent."
      ],
      "question": {
        "prompt": "Why does a fresh fair Chooser sign yield a fair increment in a fixed coordinate?",
        "options": [
          "Pusher’s current ±1 entry is known from the past, and multiplying by it preserves fairness.",
          "Pusher must choose every vector before play starts.",
          "The coordinates must be independent of one another.",
          "The running sum is always zero."
        ],
        "answer": 0,
        "feedback": [
          "Correct: conditional on the history and current vector, the new sign is independent and symmetric.",
          "Pusher may choose a vector from the full past history. Conditional on that history and vector, the newly sampled Chooser sign remains fair.",
          "The coordinates can be strongly dependent; the union bound does not need their independence.",
          "The running position fluctuates with the signs; conditional symmetry gives a walk distribution, not an identically zero sum."
        ]
      }
    },
    "mechanism": {
      "title": "A tail bound plus the right quantifiers",
      "definitions": [
        {
          "term": "Game value",
          "meaning": "The smallest final maximum-coordinate bound Chooser can guarantee against every legal Pusher strategy."
        },
        {
          "term": "Coordinate walk",
          "meaning": "For each coordinate separately, the accumulated n increments have the fair ±1 random-walk law under random Chooser signs."
        },
        {
          "term": "Online irrevocability",
          "meaning": "Each arriving column or point must be assigned a sign immediately, and that sign cannot be changed later."
        }
      ],
      "paragraphs": [
        "If Pr(|Sₙ|>a)<1/n for a fair length-n walk, then the probability some coordinate exceeds a is less than one. This works for every fixed adaptive Pusher strategy because the conditional-increment argument holds at every history. A standard walk tail gives a scale O(√(n ln n)).",
        "Now regard exceeding a as a win/lose finite perfect-information game. If Pusher had a deterministic strategy forcing a violation against every Chooser strategy, random Chooser could never succeed against it. The positive-success calculation rules that out, and determinacy gives Chooser a winning strategy. The matching lower bound uses a separate potential argument. The zero-one column version explains the online discrepancy interpretation of §15.5."
      ],
      "formula": "Pr(maxⱼ |Pⱼ|>a) ≤ n Pr(|Sₙ|>a)",
      "question": {
        "prompt": "Does the union bound over coordinates require their final sums to be independent?",
        "options": [
          "Yes, otherwise it is invalid.",
          "Only when n is even.",
          "No; marginal tail bounds suffice.",
          "Yes, unless every vector is constant."
        ],
        "answer": 2,
        "feedback": [
          "For any events Eⱼ, Pr(∪Eⱼ)≤ΣPr(Eⱼ). No independence assumption between the coordinate failures is needed.",
          "Parity is unrelated to the validity of a union bound.",
          "Correct: dependence between coordinates can be arbitrary.",
          "Constant vectors can create maximal dependence, and the union bound still applies."
        ]
      }
    },
    "example": {
      "title": "A four-round calculation against adaptive play",
      "setup": "Let n=4 and use fresh fair Chooser signs. For any fixed coordinate, S₄ can be −4,−2,0,2,4 with binomial multiplicities.",
      "table": {
        "headers": [
          "Coordinate total",
          "Number of sign sequences",
          "Probability"
        ],
        "rows": [
          [
            "−4 or 4",
            "2",
            "2/16"
          ],
          [
            "−2 or 2",
            "8",
            "8/16"
          ],
          [
            "0",
            "6",
            "6/16"
          ]
        ]
      },
      "steps": [
        {
          "title": "Choose threshold two",
          "explanation": "The event |S₄|>2 consists only of totals ±4, so its probability is 2/16=1/8."
        },
        {
          "title": "Control all four coordinates",
          "explanation": "The union bound gives probability at most 4·1/8=1/2 of any coordinate exceeding two."
        },
        {
          "title": "Interpret success",
          "explanation": "For every fixed Pusher strategy, random Chooser has probability at least 1/2 of finishing with all coordinate magnitudes at most two."
        },
        {
          "title": "Use determinacy carefully",
          "explanation": "This rules out a Pusher strategy forcing a larger value and implies a deterministic Chooser winning strategy. It does not identify one universal successful random seed."
        }
      ],
      "conclusion": "The finite example makes the probability-versus-strategy quantifiers visible. The asymptotic lower bound and efficient construction of a strategy are separate issues.",
      "question": {
        "prompt": "What upper bound does the union calculation give for failure at threshold two?",
        "options": [
          "1/16",
          "1/8",
          "1/2",
          "1"
        ],
        "answer": 2,
        "feedback": [
          "Both all-positive and all-negative coordinate increments exceed magnitude two, so the one-coordinate tail is 2/16 rather than 1/16.",
          "That is the tail probability for one coordinate.",
          "Correct: multiply the one-coordinate bound 1/8 by four.",
          "The calculation gives a strictly smaller bound, which is essential to positive success probability."
        ]
      }
    },
    "proof": {
      "title": "From fresh randomness to a deterministic existence result",
      "paragraphs": [
        "The order of quantifiers matters. The statement is that against each fixed Pusher strategy the random Chooser policy has a successful realization. It is not that one randomly chosen sign sequence works simultaneously against all Pusher strategies. Determinacy supplies the final deterministic existence statement at the strategy level."
      ],
      "steps": [
        {
          "claim": "Condition on the past and the current Pusher vector.",
          "why": "The new Chooser sign is still a fresh fair bit in each coordinate."
        },
        {
          "claim": "Obtain the ordinary walk distribution for each coordinate.",
          "why": "Repeated conditional fairness gives the same joint increment law within that coordinate as independent fair signs."
        },
        {
          "claim": "Union-bound the coordinate failures below probability one.",
          "why": "At least one successful play then exists against every fixed opponent strategy."
        },
        {
          "claim": "Invoke finite-game determinacy and keep the lower bound separate.",
          "why": "Absence of a forced Pusher win yields a Chooser win; an Ω bound cannot be obtained by reversing a union bound."
        }
      ],
      "question": {
        "prompt": "What inference would be a quantifier error?",
        "options": [
          "For every fixed Pusher strategy, success has positive probability.",
          "There exists one fixed sign sequence that beats every adaptive Pusher strategy because each separately has a successful sequence.",
          "Pusher cannot force failure against all Chooser play.",
          "A union bound can control the maximum coordinate."
        ],
        "answer": 1,
        "feedback": [
          "This is exactly the probabilistic calculation.",
          "Correct: the successful realization may depend on the opponent strategy.",
          "This follows by contradiction from positive success against a proposed forcing strategy.",
          "This needs no independence between coordinates."
        ]
      }
    },
    "boundary": {
      "title": "Online and offline discrepancy are different tasks",
      "paragraphs": [
        "In the zero-one vector variant, each arriving incidence column tells which sets contain the new point. Choosing its sign is an irrevocable online coloring decision. An offline theorem that sees the entire set system before assigning signs has a different information pattern."
      ],
      "cases": [
        {
          "label": "All coordinates move together",
          "setting": "Pusher chooses the all-ones vector in every round.",
          "question": {
            "prompt": "What happens to the dependence between coordinates?",
            "options": [
              "They are independent because the Chooser signs are fair.",
              "Their final sums are identical, but the marginal-walk and union-bound argument remains valid.",
              "The vector entries cease to be ±1.",
              "The tail probability must be zero."
            ],
            "answer": 1,
            "feedback": [
              "With an all-ones Pusher vector, every coordinate receives the same Chooser sign in each round, so their final sums coincide.",
              "Correct: coordinate independence is unnecessary for the upper-bound proof.",
              "The all-ones vector belongs to {−1,+1}ⁿ, so this example is legal and demonstrates coordinate dependence rather than a rule violation.",
              "Identical coordinates share the same fluctuating random walk; equality between coordinates does not force the common value to stay near zero."
            ]
          }
        },
        {
          "label": "An offline discrepancy theorem",
          "setting": "A theorem guarantees O(√n) discrepancy after seeing the whole incidence matrix.",
          "question": {
            "prompt": "Does that by itself give an online O(√n) strategy?",
            "options": [
              "Yes, because both problems use signs.",
              "Yes, because all columns can be recolored later online.",
              "Only if the adversary is renamed.",
              "No; irrevocable decisions with future columns hidden require a different argument."
            ],
            "answer": 3,
            "feedback": [
              "Sharing an objective does not make the information patterns identical.",
              "Online coloring here forbids later recoloring.",
              "The substantive issue is unavailable future information.",
              "Correct: an offline existence theorem does not supply the stronger online guarantee."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Fresh random signs stay fair in each coordinate against adaptive vectors.",
        "Coordinate dependence does not obstruct a union bound.",
        "Determinacy closes a strategy-level quantifier gap; offline and online discrepancy must be distinguished."
      ],
      "retrieval": "Prove the one-coordinate random-walk law against an adaptive Pusher, derive the four-round bound, and state precisely how determinacy turns positive success into a winning strategy."
    },
    "sourceNote": "Alon–Spencer §§15.4–15.5. The randomized upper bound and determinacy step are developed. The matching lower-bound potential and the zero-one reduction remain additional assigned proof steps; no modern algorithmic-complexity claim is inferred from the older discussion."
  },
  "core-half-liar": {
    "intro": {
      "title": "One-sided lies create asymmetric response sets",
      "paragraphs": [
        "In the Half-Liar Game, a truthful Yes must be reported as Yes. A truthful No may be changed to Yes, using one lie. This asymmetry means that the number of possible corrupted transcripts depends on the number of No answers, unlike an ordinary symmetric Hamming ball.",
        "Questions may still be adaptive. For one lie, follow the fully truthful path for a candidate. Each No on that path offers one possible first lie. After that lie, every remaining response is truthful along the new branch. Thus there is one possible response path for each eligible first-lie position, plus the no-lie path. The paths need not be obtained by simply flipping one symbol in a fixed transcript when later questions change."
      ],
      "question": {
        "prompt": "Which response corruption is legal in this game?",
        "options": [
          "Yes may become No, but No may not become Yes.",
          "Both directions are legal without limit.",
          "No may become Yes, while a truthful Yes stays Yes.",
          "Only the final answer may be changed."
        ],
        "answer": 2,
        "feedback": [
          "The assigned rule permits false Yes answers to truthful No questions. It forbids changing a truthful Yes into a No.",
          "The model has a lie budget and permits only one direction.",
          "Correct: the false-positive response consumes one lie.",
          "A permitted lie can occur at an earlier question."
        ]
      }
    },
    "mechanism": {
      "title": "Count response paths before designing a strategy",
      "definitions": [
        {
          "term": "Truthful path",
          "meaning": "The response sequence obtained when every question is answered truthfully for a fixed hidden item."
        },
        {
          "term": "One-lie weight",
          "meaning": "W(σ)=1 plus the number of No responses on the truthful path."
        },
        {
          "term": "Disjoint response sets",
          "meaning": "In a winning identification strategy, no reported transcript may be consistent with two different hidden items."
        }
      ],
      "paragraphs": [
        "For a candidate with z truthful No responses, there are z+1 possible reported paths under at most one allowed lie. Distinct eligible first-lie positions create paths whose first disagreement with the truthful path occurs at different depths, so these paths are distinct even in an adaptive tree.",
        "Summing these weights over all hidden items gives at most 2ᵠ if identification always succeeds. The upper bound separates unusually low-weight truthful strings from the typical strings with roughly q/2 No answers. Concentration makes the former rare, while the latter each consume about q/2 transcripts. This yields A₁(q)≤(1+o(1))2^{q+1}/q. A matching construction needs a separate two-stage strategy, not merely the counting inequality."
      ],
      "formula": "Σitems (1 + number of truthful No responses) ≤ 2ᵠ",
      "question": {
        "prompt": "Why must the possible reported-response sets of two items be disjoint?",
        "options": [
          "Otherwise the same transcript could leave both items possible.",
          "Because all response strings have equal weight.",
          "Because questions are necessarily nonadaptive.",
          "Because every item has the same truthful path."
        ],
        "answer": 0,
        "feedback": [
          "Correct: unique identification is impossible if one reported path is consistent with two items.",
          "Weights depend on the number of truthful No responses.",
          "The disjointness condition also applies to adaptive decision trees.",
          "Different items can and generally do have different truthful paths."
        ]
      }
    },
    "example": {
      "title": "A four-question nonadaptive illustration",
      "setup": "For one item, a fixed sequence of questions has truthful response NYNN. At most one No may be changed to Yes. This fixed-query example makes the asymmetric response set explicit.",
      "table": {
        "headers": [
          "Lie choice",
          "Reported responses",
          "Reason"
        ],
        "rows": [
          [
            "No lie",
            "NYNN",
            "Truthful transcript"
          ],
          [
            "First answer",
            "YYNN",
            "Change the first No"
          ],
          [
            "Third answer",
            "NYYN",
            "Change the third No"
          ],
          [
            "Fourth answer",
            "NYNY",
            "Change the fourth No"
          ]
        ]
      },
      "steps": [
        {
          "title": "Count legal lie positions",
          "explanation": "There are three No positions. The truthful Yes in the second position cannot be changed."
        },
        {
          "title": "Include the truthful outcome",
          "explanation": "The response set therefore has three one-lie strings plus the no-lie string, for size four."
        },
        {
          "title": "Respect the adaptive distinction",
          "explanation": "For adaptive queries, later truthful answers can change after the first lie. The same count is obtained from first-divergence paths, not by assuming a fixed Hamming ball."
        }
      ],
      "conclusion": "The enumeration demonstrates one item’s response set, not a complete winning strategy for several items. A strategy must keep every pair of candidate response sets disjoint.",
      "question": {
        "prompt": "How many possible reported transcripts does this item have?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": 2,
        "feedback": [
          "All three permitted No-to-Yes changes are distinct possibilities.",
          "Besides the three distinct allowed single-lie paths, Carole may answer every question truthfully, adding a fourth legal path.",
          "Correct: three eligible lie positions plus no lie.",
          "A truthful Yes cannot be changed, so a symmetric four-bit radius-one ball would overcount."
        ]
      }
    },
    "proof": {
      "title": "Why the one-lie asymptotic has an extra factor two",
      "paragraphs": [
        "Typical truthful strings contain about q/2 No responses, so each consumes about q/2 reported paths. The upper bound must still account for atypical strings with fewer No answers; otherwise it would silently assume every candidate has a typical path. The lower construction first forces many nearly balanced responses and then finishes a controlled chip-game endgame."
      ],
      "steps": [
        {
          "claim": "Assign each item its truthful path and weight.",
          "why": "A one-lie response set is counted by the no-lie path and possible first-lie depths."
        },
        {
          "claim": "Use disjointness to bound the total weight by 2ᵠ.",
          "why": "There are only 2ᵠ length-q binary response strings."
        },
        {
          "claim": "Separate low-weight paths using a binomial tail.",
          "why": "There cannot be many atypical truthful strings, while every remaining item consumes roughly q/2 transcripts."
        },
        {
          "claim": "For achievability, construct balanced first-stage questions and a final identification strategy.",
          "why": "A counting bound alone does not ensure legal adaptive splits exist."
        }
      ],
      "question": {
        "prompt": "Why is it invalid to conclude achievability directly from the response-set counting bound?",
        "options": [
          "The number 2ᵠ is infinite.",
          "The bound is only a necessary packing condition; compatible legal questions still have to be constructed.",
          "The inequality prohibits any question.",
          "All response sets automatically overlap."
        ],
        "answer": 1,
        "feedback": [
          "For finite q, the transcript space is finite.",
          "Correct: volume control and existence of a realizable adaptive strategy are different steps.",
          "The inequality restricts possible successful strategies, not whether questions can be asked.",
          "Suitable constructions can make the sets disjoint."
        ]
      }
    },
    "boundary": {
      "title": "Read the range and the information pattern",
      "paragraphs": [
        "The stated general result is an asymptotic for fixed k as q grows. The book develops the one-lie proof in detail and leaves an endgame construction to exercises. Do not relabel that as a complete proof for a growing lie budget."
      ],
      "cases": [
        {
          "label": "An all-Yes truthful path",
          "setting": "A candidate’s truthful response string has no No positions.",
          "question": {
            "prompt": "How many legal reported paths are possible with at most one one-sided lie?",
            "options": [
              "q+1",
              "2ᵠ",
              "q",
              "1"
            ],
            "answer": 3,
            "feedback": [
              "An all-Yes truthful path has no eligible first-lie position under the No-to-Yes rule, so only its original response path is possible.",
              "The lie restriction forbids arbitrary output strings.",
              "Every truthful response is Yes, and the permitted corruption never changes a Yes; therefore no single-lie alternative is created.",
              "Correct: only the truthful all-Yes path is legal."
            ]
          }
        },
        {
          "label": "A growing budget",
          "setting": "Someone substitutes k=q/3 into the fixed-k asymptotic Aₖ(q)∼2^{q+k}/C(q,k).",
          "question": {
            "prompt": "What is the logical problem?",
            "options": [
              "An asymptotic proved for fixed k does not automatically hold when k grows with q.",
              "Binomial coefficients are undefined.",
              "The model forbids q questions.",
              "The result must become an exact equality."
            ],
            "answer": 0,
            "feedback": [
              "Correct: changing the parameter regime requires uniform estimates or a new theorem.",
              "The coefficient is defined when the integer parameters are valid.",
              "The issue is the growing lie budget k=q/3, not whether q queries are legal. A fixed-k asymptotic need not remain valid in this new regime.",
              "An asymptotic is not an exact finite formula."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Only No-to-Yes lies are permitted.",
        "One-lie response sets have size one plus the truthful No count, using first-divergence reasoning for adaptive trees.",
        "Counting supplies an upper bound; achievability requires an explicit strategy."
      ],
      "retrieval": "Count one candidate’s legal response paths in an adaptive tree and explain how typical No counts lead to the scale 2^{q+1}/q."
    },
    "sourceNote": "Alon–Spencer §15.6. The reader develops the asymmetric counting argument and explains the two-stage lower-bound architecture. The final chip-game strategy is an exercise input in the assigned text; the general-k asymptotic is not proved by the k=1 calculation."
  },
  "core-entropy": {
    "intro": {
      "title": "Turn counting into uncertainty",
      "paragraphs": [
        "To count a finite family F, choose a uniformly random member X. Its entropy is exactly log₂|F|. If each member is described by coordinates, the chain rule lets us count information coordinate by coordinate. Discarding dependence can only increase the resulting upper bound, so marginal entropies bound the family’s size.",
        "Entropy is not a synonym for the number of possible values. A variable supported on many values can have small entropy when most probability is concentrated on one of them. Uniformity of X on the original family is what converts its entropy into an exact cardinality; its individual coordinates and projections need not be uniform."
      ],
      "question": {
        "prompt": "Why choose X uniformly from the family being counted?",
        "options": [
          "It makes all coordinates independent.",
          "It guarantees H(X)=log₂|F|.",
          "It makes every marginal uniform.",
          "It eliminates all conditional entropy."
        ],
        "answer": 1,
        "feedback": [
          "Uniformity on a family can coexist with strong coordinate dependence.",
          "Correct: equal mass on every family member makes entropy equal the logarithm of its size.",
          "A projection can have repeated fibers of different sizes.",
          "Conditional entropy may be positive and is handled by the chain rule."
        ]
      }
    },
    "mechanism": {
      "title": "Three inequalities with distinct roles",
      "definitions": [
        {
          "term": "Entropy",
          "meaning": "H(X)=Σx Pr(X=x)log₂(1/Pr(X=x)) for a finite discrete variable."
        },
        {
          "term": "Conditional entropy",
          "meaning": "The average, over Y, of the entropy of the conditional law of X given Y."
        },
        {
          "term": "Binary entropy H₂(p)",
          "meaning": "The entropy of a bit whose probability of one is p."
        }
      ],
      "paragraphs": [
        "The chain rule follows by writing a joint probability as a marginal times a conditional probability and splitting its logarithm. Nonnegative relative entropy gives both H(X)≤log₂|support(X)| and nonnegative mutual information. The latter is the statement that conditioning reduces entropy on average.",
        "If X is uniform on a family of zero-one vectors and its i-th marginal has mean pᵢ, then log₂|F|=H(X)≤ΣᵢH(Xᵢ)=ΣᵢH₂(pᵢ). No independence is needed for this upper bound. Equality in subadditivity requires independence; uniformity on the family then restricts its shape to a Cartesian product of allowed coordinate values."
      ],
      "formula": "|F| ≤ 2^{ΣᵢH₂(pᵢ)}",
      "question": {
        "prompt": "Which inequality is meant by “conditioning reduces entropy”?",
        "options": [
          "H(X|Y=y)≤H(X) for every individual y.",
          "H(X|Y)≤H(X), with conditional entropy averaged over Y.",
          "H(X|Y)=0 for every pair of variables.",
          "H(X,Y)≤H(Y) always."
        ],
        "answer": 1,
        "feedback": [
          "A rare conditioning outcome can increase uncertainty.",
          "Correct: the comparison is an average over conditioning outcomes.",
          "Only complete determination of X by Y makes the conditional entropy zero.",
          "The chain rule gives H(X,Y)=H(Y)+H(X|Y), generally at least H(Y)."
        ]
      }
    },
    "example": {
      "title": "Unbiased coordinates can still hide strong dependence",
      "setup": "Let X be uniform on F={0000,0011,1100,1111}. Each of the four coordinates equals one in half the family members.",
      "table": {
        "headers": [
          "Family member",
          "Probability",
          "Dependence pattern"
        ],
        "rows": [
          [
            "0000",
            "1/4",
            "First pair equal; second pair equal"
          ],
          [
            "0011",
            "1/4",
            "First pair equal; second pair equal"
          ],
          [
            "1100",
            "1/4",
            "First pair equal; second pair equal"
          ],
          [
            "1111",
            "1/4",
            "First pair equal; second pair equal"
          ]
        ]
      },
      "steps": [
        {
          "title": "Compute joint entropy",
          "explanation": "Four equally likely vectors give H(X)=log₂4=2 bits."
        },
        {
          "title": "Compute marginal entropy",
          "explanation": "Every coordinate is a fair bit, so the sum of marginal entropies is four bits."
        },
        {
          "title": "Locate the missing information",
          "explanation": "Once the first coordinate of a pair is known, its second coordinate contributes no new information. The chain rule therefore counts one bit from each pair."
        },
        {
          "title": "Apply the family-size bound",
          "explanation": "The marginal bound gives |F|≤2⁴=16, while the actual size is four. The slack measures ignored dependence."
        }
      ],
      "conclusion": "The bound is valid without independence, but can be loose. Fair individual coordinates do not imply that all binary strings are present in the family.",
      "question": {
        "prompt": "What is H(X) for this uniform four-member family?",
        "options": [
          "1 bit",
          "2 bits",
          "4 bits",
          "16 bits"
        ],
        "answer": 1,
        "feedback": [
          "There are two independent pair choices, not one.",
          "Correct: log₂4=2.",
          "Four is the sum of the marginal entropies, which overcounts dependence here.",
          "Sixteen is the size of the full four-bit cube, not an entropy value here."
        ]
      }
    },
    "proof": {
      "title": "Use relative entropy to justify the direction",
      "paragraphs": [
        "Relative entropy D(P∥Q)=Σp log₂(p/q) is nonnegative. One proof applies concavity of log to the average of q/p under P. Taking Q uniform gives the support-size bound; taking Q to be the product of marginals gives subadditivity. These choices explain why each inequality has its particular direction."
      ],
      "steps": [
        {
          "claim": "Prove the chain rule by factoring joint probabilities.",
          "why": "The logarithm separates the information in a marginal from the extra conditional information."
        },
        {
          "claim": "Apply nonnegative relative entropy to a product of marginals.",
          "why": "This yields H(X₁,…,Xₙ)≤ΣH(Xᵢ)."
        },
        {
          "claim": "Choose a uniform family member and compute its bit marginals.",
          "why": "The joint entropy becomes log₂|F| and each coordinate entropy becomes H₂(pᵢ)."
        },
        {
          "claim": "Exponentiate the entropy inequality.",
          "why": "Base-two logarithms turn the information bound into the cardinality bound."
        }
      ],
      "question": {
        "prompt": "When can equality in the marginal family bound occur for a uniform binary family?",
        "options": [
          "Whenever each coordinate is fair.",
          "Only when the coordinates are independent, forcing a Cartesian product of allowed coordinate values.",
          "Whenever every pair of members is distinct.",
          "Whenever the family has even size."
        ],
        "answer": 1,
        "feedback": [
          "The worked example has fair coordinates but strong dependence and strict inequality.",
          "Correct: equality requires independent coordinates and is compatible with uniformity only for such a product family.",
          "Distinctness is already part of being a set family and says nothing about independence.",
          "Parity of the family size does not characterize equality."
        ]
      }
    },
    "boundary": {
      "title": "Pointwise conditioning and averaging differ",
      "paragraphs": [
        "The phrase “information cannot increase uncertainty” refers to an average comparison. Conditioning on one rare outcome can select a more balanced, hence more uncertain, conditional distribution."
      ],
      "cases": [
        {
          "label": "A rare ambiguous outcome",
          "setting": "Let Pr(X=0)=0.9 and Pr(X=1)=Pr(X=2)=0.05. Let Y indicate X≠0.",
          "question": {
            "prompt": "What is H(X|Y)?",
            "options": [
              "1 bit",
              "0.9 bits",
              "0.1 bits",
              "It exceeds log₂3."
            ],
            "answer": 2,
            "feedback": [
              "The conditional entropy is one only on Y=1, which occurs with probability 0.1.",
              "When Y=0, X is known exactly, so that 0.9 mass contributes zero.",
              "Correct: 0.9·0+0.1·1=0.1 bits.",
              "A three-valued variable cannot have entropy above log₂3."
            ]
          }
        },
        {
          "label": "An arbitrary nonuniform family law",
          "setting": "X is supported on a family F but is not uniform on F.",
          "question": {
            "prompt": "Which relation is always valid?",
            "options": [
              "H(X)=log₂|F| automatically.",
              "H(X)≤log₂|F|, so equality cannot be silently assumed for counting.",
              "H(X)>log₂|F|.",
              "Every projection is uniform."
            ],
            "answer": 1,
            "feedback": [
              "The exact counting identity needs uniformity.",
              "Correct: the support bound remains valid, but it is not an equality for an arbitrary law.",
              "Nonnegative relative entropy gives the opposite direction.",
              "Projection probabilities depend on the law and on fiber sizes."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Uniform choice translates cardinality into entropy.",
        "Chain rule and average conditioning control dependence.",
        "Marginal entropy bounds need no independence, but equality does."
      ],
      "retrieval": "Derive the family bound from relative entropy and the chain rule, and give an explicit uniform family whose bits are all unbiased but whose joint entropy is much smaller than their sum."
    },
    "sourceNote": "Alon–Spencer §15.7, basic entropy inequalities. All variables in this lesson are discrete; no differential-entropy analogue is asserted."
  },
  "core-shearer": {
    "intro": {
      "title": "Count information through overlapping projections",
      "paragraphs": [
        "Suppose a family of high-dimensional objects is hard to count, but several coordinate projections are easy to bound. Their information overlaps. Shearer’s lemma tells us exactly how to compensate for that overlap: if every coordinate is covered at least k times, the sum of projection entropies is at least k times the full entropy.",
        "The argument does not assume independent coordinates or uniform projections. Choose one global order of coordinates and expand every projection by the chain rule in that order. A projection conditions on fewer earlier coordinates than the full vector does, so it can only assign more conditional entropy to a coordinate. Coverage multiplicity then becomes an information inequality."
      ],
      "question": {
        "prompt": "What does the integer k measure in Shearer’s lemma?",
        "options": [
          "The number of possible values of each coordinate.",
          "The number of projection sets, regardless of their contents.",
          "A lower bound on how often every coordinate is covered.",
          "The dimension divided by two."
        ],
        "answer": 2,
        "feedback": [
          "Alphabet sizes enter support bounds, not the coverage parameter.",
          "A large projection family can still omit a coordinate.",
          "Correct: minimum coordinate multiplicity is the relevant quantity.",
          "The lemma applies to general projection families and multiplicities."
        ]
      }
    },
    "mechanism": {
      "title": "Use the same coordinate order everywhere",
      "definitions": [
        {
          "term": "Projection πS(F)",
          "meaning": "The set of coordinate restrictions to S of members of F."
        },
        {
          "term": "Coverage multiplicity",
          "meaning": "The number of chosen projection sets containing a particular coordinate."
        },
        {
          "term": "Shearer’s entropy inequality",
          "meaning": "kH(X)≤ΣS H(XS) when each coordinate occurs in at least k sets."
        }
      ],
      "paragraphs": [
        "For i in S, the chain-rule term of H(XS) conditions only on earlier coordinates that also belong to S. Conditioning on all earlier coordinates gives a smaller or equal term. Summing over S counts the full-chain term for coordinate i as many times as i is covered. Discrete conditional entropy is nonnegative, so coverage at least k is sufficient.",
        "Now choose X uniformly from F. Its full entropy is log₂|F|, while a projection entropy is at most log₂|πS(F)|. The projection may be nonuniform; only the upper bound is used. Exponentiating produces a product bound on family sizes. Three pairwise projections in three dimensions cover every coordinate twice, yielding Loomis–Whitney."
      ],
      "formula": "|F|ᵏ ≤ ∏S |πS(F)|; in 3D, |F|²≤|πxyF|·|πxzF|·|πyzF|",
      "question": {
        "prompt": "Why is a projection’s chain-rule term at least the corresponding full-chain term?",
        "options": [
          "It conditions on fewer preceding coordinates.",
          "All projected variables are independent.",
          "Projection always makes the distribution uniform.",
          "The full-chain term is negative."
        ],
        "answer": 0,
        "feedback": [
          "Correct: additional conditioning can reduce conditional entropy on average.",
          "Shearer’s lemma handles arbitrary dependence by comparing conditional-entropy terms; independence is not the reason its inequality has this direction.",
          "Projection can produce unequal fiber probabilities.",
          "For discrete variables, conditional entropy is nonnegative."
        ]
      }
    },
    "example": {
      "title": "A box attains the projection bound exactly",
      "setup": "Let F=A×B×C with |A|=2, |B|=3 and |C|=4. Use the xy, xz and yz projections.",
      "table": {
        "headers": [
          "Object",
          "Cardinality",
          "Calculation"
        ],
        "rows": [
          [
            "F",
            "24",
            "2·3·4"
          ],
          [
            "πxy(F)",
            "6",
            "2·3"
          ],
          [
            "πxz(F)",
            "8",
            "2·4"
          ],
          [
            "πyz(F)",
            "12",
            "3·4"
          ]
        ]
      },
      "steps": [
        {
          "title": "Check coordinate coverage",
          "explanation": "x occurs in xy and xz, y in xy and yz, and z in xz and yz. Each is covered twice."
        },
        {
          "title": "Compute the two sides",
          "explanation": "The full-family square is 24²=576. The projection product is 6·8·12=576."
        },
        {
          "title": "Explain equality",
          "explanation": "Uniform choice from a Cartesian box has independent coordinates, and every projection is uniform on its own box. The inequalities in the entropy proof are tight here."
        }
      ],
      "conclusion": "A box demonstrates the exact constant and exponent. General families can have nonuniform projections and strict inequality, but the same argument still applies.",
      "question": {
        "prompt": "What is the right-hand projection product for this box?",
        "options": [
          "26",
          "144",
          "576",
          "1728"
        ],
        "answer": 2,
        "feedback": [
          "That is the sum 6+8+12; the inequality uses a product.",
          "This omits one of the three projection factors.",
          "Correct: 6·8·12=576, matching 24².",
          "The product of the stated projection sizes is smaller than this value."
        ]
      }
    },
    "proof": {
      "title": "Count every conditional-information contribution",
      "paragraphs": [
        "Fixing one coordinate order prevents inconsistent chain expansions. Each projection term can then be compared with exactly the same full-chain term, making the coverage counting transparent. Uniformity is needed at the beginning for H(X)=log₂|F|, not for the projected laws."
      ],
      "steps": [
        {
          "claim": "Expand each H(XS) using the inherited global coordinate order.",
          "why": "This identifies which earlier variables have been conditioned on."
        },
        {
          "claim": "Replace those partial conditioning sets by all earlier coordinates.",
          "why": "The entropy term cannot increase after the extra conditioning."
        },
        {
          "claim": "Count each full-chain term at least k times.",
          "why": "Coverage multiplicity and nonnegative discrete conditional entropy give kH(X)."
        },
        {
          "claim": "Use projection support-size bounds and exponentiate.",
          "why": "This turns the information comparison into the desired counting inequality."
        }
      ],
      "question": {
        "prompt": "Why is the assertion H(XS)=log₂|πS(F)| usually too strong?",
        "options": [
          "A projection is never finite.",
          "Projected values may have unequal numbers of preimages in F.",
          "Entropy cannot be defined on a projection.",
          "Every projection has exactly one value."
        ],
        "answer": 1,
        "feedback": [
          "The projections of a finite family are finite.",
          "Correct: unequal fibers create a nonuniform projected distribution.",
          "Projection entropy is an ordinary discrete entropy.",
          "The support of a projection can contain many values, with unequal probabilities when their preimage counts in the original family differ."
        ]
      }
    },
    "boundary": {
      "title": "Coverage and distribution must be checked separately",
      "paragraphs": [
        "The theorem is not merely a statement that many observations reveal an object. Every coordinate must receive the promised coverage. The entropy-to-cardinality step also has an inequality at projections, which is exactly what permits nonuniformity."
      ],
      "cases": [
        {
          "label": "An uncovered coordinate",
          "setting": "A family contains many values of z but only one x and one y; the only chosen projection is xy.",
          "question": {
            "prompt": "Why cannot this projection control |F| with k=1?",
            "options": [
              "z is not covered at all.",
              "The family must have zero members.",
              "The xy projection is infinite.",
              "The coordinate names are in the wrong order."
            ],
            "answer": 0,
            "feedback": [
              "Correct: arbitrarily many z values are invisible to that projection, violating the coverage hypothesis.",
              "Fix x and y but allow z to range over any finite set. The family can grow while its xy projection stays a singleton, exposing the missing coverage.",
              "With x and y fixed, the xy projection has one possible value; all growth in the family is hidden in the uncovered z coordinate.",
              "Any fixed order works if all hypotheses hold."
            ]
          }
        },
        {
          "label": "A nonuniform projection",
          "setting": "F={000,001,010}, chosen uniformly. Its xy projection is 00 with probability 2/3 and 01 with probability 1/3.",
          "question": {
            "prompt": "Which support-size statement should the proof use?",
            "options": [
              "H(Xxy)=1 because its support has size two.",
              "H(Xxy)=0 because the first coordinate is fixed.",
              "H(Xxy)≤1, with strict inequality here.",
              "H(Xxy)>1 because the probabilities differ."
            ],
            "answer": 2,
            "feedback": [
              "Equality would require a uniform distribution on the two pairs.",
              "The second coordinate still has nonzero entropy.",
              "Correct: entropy is bounded by log₂2, and the nonuniform probabilities make it smaller.",
              "Nonuniformity lowers entropy relative to the uniform law on the same support."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "A global coordinate order aligns all projection chain rules.",
        "Minimum coverage multiplicity produces the exponent k.",
        "Uniform original objects need not have uniform projections."
      ],
      "retrieval": "Prove Shearer’s lemma by expanding three pairwise projections in one coordinate order, then compute both sides of Loomis–Whitney for a 2×3×4 box."
    },
    "sourceNote": "Alon–Spencer §15.7, projection inequalities and their counting consequences. The discrete proof is developed; the measurable-body version additionally uses approximation and a limiting argument."
  },
  "core-tester-color": {
    "intro": {
      "title": "Test a dense graph without constructing a global coloring",
      "paragraphs": [
        "A property tester distinguishes graphs with a property from graphs far from it. In the dense adjacency-query model, distance is measured in edge edits divided by n². A 3-colorability tester need not produce a coloring of the whole graph; it samples a small vertex set and checks whether the induced subgraph is 3-colorable.",
        "The easy direction is one-sided correctness: an induced subgraph of a 3-colorable graph is 3-colorable. The hard direction says that an ε-far graph usually reveals a small non-3-colorable witness. A greedy coloring failure on one branch is not enough, because a different assignment of earlier colors may succeed. The proof must control every possible partial-coloring branch."
      ],
      "question": {
        "prompt": "What is a valid one-sided rejection certificate?",
        "options": [
          "One greedy coloring attempt fails.",
          "The sampled induced graph has no proper 3-coloring.",
          "The whole graph has many vertices.",
          "One sampled vertex has degree four."
        ],
        "answer": 1,
        "feedback": [
          "A different color choice may repair the greedy attempt.",
          "Correct: a genuinely non-3-colorable induced witness cannot occur inside a 3-colorable graph.",
          "Graph size alone does not obstruct three colors.",
          "High degree by itself does not imply non-3-colorability."
        ]
      }
    },
    "mechanism": {
      "title": "Shrink color lists along every branch",
      "definitions": [
        {
          "term": "ε-far from 3-colorable",
          "meaning": "At least εn² edges must be deleted to obtain a 3-colorable graph."
        },
        {
          "term": "Feasible-color list",
          "meaning": "Colors not already used on the vertex’s colored neighbors."
        },
        {
          "term": "Restricting vertex",
          "meaning": "A vertex whose every feasible color removes that color from at least εn relevant neighboring lists."
        }
      ],
      "paragraphs": [
        "At a partial coloring, either many vertices already have empty lists, or farness forces many vertices that substantially restrict future choices. The total list-size potential begins at 3n. Every restricting step removes at least εn entries, so a branch has depth at most 3/ε.",
        "Branch on all feasible colors rather than choosing one greedily. The resulting tree has bounded branching and depth depending on ε, not n. Sampling enough vertices makes every possible branch encounter sufficient restricting or colorless vertices. The assigned theorem gives s=40/ε² under its explicit small-ε and sufficiently-large-n conditions; smaller input sizes can be handled by examining the whole graph."
      ],
      "formula": "Depth ≤ 3/ε; the sample-size theorem uses s=40/ε² in its stated regime",
      "question": {
        "prompt": "Why does the potential bound the restriction-tree depth?",
        "options": [
          "The potential increases by εn each round.",
          "Every graph has three vertices.",
          "The potential starts at 3n and drops by at least εn at a restricting step.",
          "All branches are identical."
        ],
        "answer": 2,
        "feedback": [
          "A restricting vertex removes at least εn feasible-color entries, so the potential moves downward from its initial value at most 3n.",
          "There are three available colors per vertex, not three vertices. The initial list potential is 3n on an n-vertex graph.",
          "Correct: at most 3n/(εn)=3/ε such decreases are possible.",
          "Branches may differ; the proof controls them all."
        ]
      }
    },
    "example": {
      "title": "Watch an explicit obstruction empty a color list",
      "setup": "Sample all four vertices a,b,c,d of K₄. Follow one branch assigning colors red, blue and green to a,b,c in that order.",
      "table": {
        "headers": [
          "Stage",
          "Feasible colors of d",
          "Reason"
        ],
        "rows": [
          [
            "Before coloring",
            "Red, blue, green",
            "No colored neighbors"
          ],
          [
            "a is red",
            "Blue, green",
            "d is adjacent to a"
          ],
          [
            "b is blue",
            "Green",
            "d is adjacent to b"
          ],
          [
            "c is green",
            "None",
            "d is adjacent to c"
          ]
        ]
      },
      "steps": [
        {
          "title": "Identify the local failure",
          "explanation": "The fourth vertex has an empty list after three mutually adjacent vertices use all three colors."
        },
        {
          "title": "Check alternative branches",
          "explanation": "In K₄, any proper assignment to the first three vertices uses three distinct colors, so changing their names does not rescue the fourth vertex."
        },
        {
          "title": "Recognize the genuine witness",
          "explanation": "K₄ itself is not 3-colorable. Its rejection is valid independently of the ambient graph or the particular branch displayed."
        }
      ],
      "conclusion": "This finite obstruction illustrates color lists. The full sampling theorem needs farness, a restriction tree over all branches and a probability bound; seeing a small K₄ example is not that proof.",
      "question": {
        "prompt": "If ε=0.05, what upper bound does 3/ε give for restricting steps along a branch?",
        "options": [
          "3",
          "20",
          "60",
          "1200"
        ],
        "answer": 2,
        "feedback": [
          "The potential ratio is 3n divided by εn, giving 3/ε; at ε=0.05 this is sixty, not three.",
          "That is 1/ε, missing the three initial colors per vertex.",
          "Correct: 3/0.05=60.",
          "This does not equal the stated potential ratio."
        ]
      }
    },
    "proof": {
      "title": "From farness to extinction of every branch",
      "paragraphs": [
        "The structural step bounds the number of monochromatic edges in a coloring chosen from the current lists. If there were too few colorless and restricting vertices, this coloring would permit too cheap an edge deletion, contradicting farness. That argument supplies a lower bound on the chance a sample is useful for any particular unfinished branch."
      ],
      "steps": [
        {
          "claim": "Define lists and a restricting-vertex threshold for every partial coloring.",
          "why": "The proof must address all compatible assignments, not a selected greedy run."
        },
        {
          "claim": "Use ε-farness to show many vertices are colorless or restricting.",
          "why": "Otherwise a global coloring with too few monochromatic edges contradicts the edit-distance promise."
        },
        {
          "claim": "Use the list potential to bound every branch’s depth.",
          "why": "The full tree fits into a ternary tree of depth at most 3/ε."
        },
        {
          "claim": "Combine sampling concentration with a union bound over the predetermined tree.",
          "why": "With high probability no viable leaf remains; thus no sampled proper coloring exists."
        }
      ],
      "question": {
        "prompt": "Why is a union bound over all possible branches necessary?",
        "options": [
          "A graph is rejected only when every possible proper-coloring branch fails.",
          "Only the first branch ever matters.",
          "The graph’s vertices are independent events.",
          "Every branch necessarily has the same sampled labels."
        ],
        "answer": 0,
        "feedback": [
          "Correct: failure of one proposed coloring does not rule out another.",
          "That would confuse greedy failure with non-colorability.",
          "The union argument concerns potential bad branches, not vertex independence.",
          "Branches can represent different assignments and restrictions."
        ]
      }
    },
    "boundary": {
      "title": "Distinguish sound rejection from certain acceptance",
      "paragraphs": [
        "One-sided error protects graphs that truly have the property. It does not turn every accepted sample into a global certificate. The dense-model normalization and the dependence on ε also remain part of the statement."
      ],
      "cases": [
        {
          "label": "An accepted sample",
          "setting": "The sampled induced graph is 3-colorable.",
          "question": {
            "prompt": "What can be concluded from this one run?",
            "options": [
              "The whole input graph is certainly 3-colorable.",
              "The tester found no obstruction in this sample; a far graph can still be accepted with its bounded error probability.",
              "Every unsampled edge can be ignored permanently.",
              "The input is at edit distance zero."
            ],
            "answer": 1,
            "feedback": [
              "The sample may avoid all obstructions even when unsampled vertices and edges prevent a global proper coloring. Acceptance therefore has a probabilistic soundness guarantee.",
              "Correct: the soundness statement is probabilistic on ε-far inputs.",
              "The omitted edges may create global obstructions.",
              "Acceptance alone does not determine the edit distance."
            ]
          }
        },
        {
          "label": "Changing the normalization",
          "setting": "A proof replaces εn² required edits by εn without changing anything else.",
          "question": {
            "prompt": "Why is that not the same dense-graph theorem?",
            "options": [
              "The two expressions are equal for every n.",
              "Dense testers never use adjacency queries.",
              "It changes the farness promise and therefore the class of inputs requiring rejection.",
              "It merely changes the names of colors."
            ],
            "answer": 2,
            "feedback": [
              "The dense distance counts a fraction of all n² possible ordered-pair scale edges. Replacing εn² by εn weakens the farness promise by a factor n.",
              "The dense model is defined using adjacency access.",
              "Correct: distance normalization is part of the model, not optional notation.",
              "The issue is graph distance, not the color alphabet."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Reject on a genuinely non-3-colorable sampled graph.",
        "Farness forces progress in the color-list potential.",
        "All branches must fail; an accepted sample does not certify a global coloring."
      ],
      "retrieval": "Define restricting vertices, derive the 3/ε depth bound, and explain how a union bound over the full ternary tree completes the one-sided testing proof."
    },
    "sourceNote": "Alon–Spencer §§17.1–17.2. The exact s=40/ε² theorem assumes 0<ε<0.1 and n>400/ε³; the finite K₄ example is an illustration, not an application of that asymptotic-size hypothesis."
  },
  "core-triangle-removal": {
    "intro": {
      "title": "Why distance from triangle-free forces many witnesses",
      "paragraphs": [
        "A single triangle proves a graph is not triangle-free, but it may be repaired by deleting one edge. To justify a constant-query tester, we need more: a graph requiring εn² edge deletions must contain a positive density of triangles. The triangle-removal lemma supplies that bridge between global edit distance and local witness abundance.",
        "Once abundance is known, testing becomes elementary probability. Sample independent vertex triples, inspect their three edges, and reject when any triple forms a triangle. Triangle-free graphs are never falsely rejected. An ε-far graph has a probability of revealing a witness bounded below by a function of ε, regardless of n."
      ],
      "question": {
        "prompt": "What makes the removal lemma relevant to a tester?",
        "options": [
          "It gives a coloring of every graph.",
          "It converts ε-farness into many locally sampleable triangle witnesses.",
          "It says one triangle requires εn² deletions.",
          "It makes every sampled triple a triangle."
        ],
        "answer": 1,
        "feedback": [
          "Triangle removal concerns triangle-free structure, not graph coloring.",
          "Correct: witness abundance is what makes a bounded sample effective.",
          "An isolated triangle can be destroyed with one edge deletion.",
          "The hit probability need only be bounded away from zero as a function of ε."
        ]
      }
    },
    "mechanism": {
      "title": "Normalize the sampling probability correctly",
      "definitions": [
        {
          "term": "Triangle-removal lemma",
          "meaning": "For every ε>0, some δ(ε)>0 makes every ε-far n-vertex graph contain at least δn³ triangles."
        },
        {
          "term": "One-sided tester",
          "meaning": "A procedure that rejects only after finding a genuine forbidden triangle."
        },
        {
          "term": "Independent triple samples",
          "meaning": "Each trial chooses a fresh uniform unordered three-vertex set, allowing repetitions between trials."
        }
      ],
      "paragraphs": [
        "If the graph has T unordered triangles, one uniform unordered triple hits a triangle with probability T/C(n,3). After q independent trials, the exact miss probability is (1−T/C(n,3))ᵠ. Bounding 1−x by exp(−x) turns this into an exponential tail in q times the hit probability.",
        "The removal lemma itself uses a regularity partition and a counting argument. Delete exceptional edges, within-part edges, irregular pairs and sparse regular pairs, spending less than εn² deletions. Farness forces a surviving triangle across three dense regular classes. Regularity then ensures that this triangle pattern expands into many actual triangles. The regularity theorem is a substantial structural input, not a consequence of the sampling calculation."
      ],
      "formula": "Pr(no triangle found in q trials) = (1−T/C(n,3))ᵠ ≤ exp(−qT/C(n,3))",
      "question": {
        "prompt": "Which denominator belongs to a uniform unordered triple sample?",
        "options": [
          "n³ exactly.",
          "The number of edges.",
          "C(n,3).",
          "T itself."
        ],
        "answer": 2,
        "feedback": [
          "n³ counts ordered triples with repetitions and needs different normalization.",
          "The sampling objects are vertex triples, not single edges.",
          "Correct: there are C(n,3) distinct unordered triples.",
          "Dividing T by itself would falsely make the hit probability one whenever any triangle exists."
        ]
      }
    },
    "example": {
      "title": "Two disjoint triangles on six vertices",
      "setup": "Let the only edges form triangles 123 and 456. There are T=2 triangles among C(6,3)=20 unordered triples.",
      "table": {
        "headers": [
          "Independent samples q",
          "Exact miss probability",
          "Approximation"
        ],
        "rows": [
          [
            "1",
            "0.9",
            "0.9"
          ],
          [
            "5",
            "0.9⁵",
            "0.59049"
          ],
          [
            "10",
            "0.9¹⁰",
            "About 0.34868"
          ],
          [
            "22",
            "0.9²²",
            "About 0.09848"
          ]
        ]
      },
      "steps": [
        {
          "title": "Compute the exact hit probability",
          "explanation": "A single sample hits one of two favorable triples out of twenty, so its success probability is 0.1."
        },
        {
          "title": "Multiply miss probabilities across trials",
          "explanation": "The graph is fixed; the repeated random triple selections are independent. Thus five misses have probability 0.9⁵."
        },
        {
          "title": "Separate existence from distance",
          "explanation": "Two edge deletions suffice and are necessary, one per disconnected triangle. Under n² normalization this graph has triangle-free deletion distance 2/36=1/18."
        }
      ],
      "conclusion": "The example shows exact finite sampling and edit normalization. It does not identify the general removal function δ(ε), whose proof uses the regularity and counting ingredients.",
      "question": {
        "prompt": "What is the probability that five independent triple samples all miss?",
        "options": [
          "0.5",
          "0.1⁵",
          "0.9/5",
          "0.59049"
        ],
        "answer": 3,
        "feedback": [
          "Multiplying five trials does not give 1−5·0.1 exactly.",
          "That is the probability all five samples hit.",
          "Independence multiplies miss probabilities; it does not divide a single miss probability by q.",
          "Correct: 0.9⁵=0.59049."
        ]
      }
    },
    "proof": {
      "title": "Keep the structural and algorithmic deductions separate",
      "paragraphs": [
        "The edge-deletion budget is the core logical use of farness. If the cleaned graph had no triangle, the cleaning would be a repair cheaper than εn², a contradiction. The surviving regular-class pattern is then counted, not merely exhibited. Only after abundance has been established can random sampling amplify detection probability."
      ],
      "steps": [
        {
          "claim": "Apply the regularity partition with parameters chosen from ε.",
          "why": "It organizes most edge pairs into well-behaved dense or sparse relations."
        },
        {
          "claim": "Delete the four types of unusable edges within the permitted budget.",
          "why": "Farness guarantees that this cleaned graph still contains a triangle."
        },
        {
          "claim": "Count triangles across the three dense regular classes.",
          "why": "A single surviving pattern must imply δn³ witnesses, not just one."
        },
        {
          "claim": "Sample enough independent triples to make the miss probability small.",
          "why": "The abundance bound gives a hit probability depending only on ε."
        }
      ],
      "question": {
        "prompt": "Where is ε-farness used in the regularity-based proof?",
        "options": [
          "To ensure a triangle survives any cleaning using fewer than εn² deletions.",
          "To make the partition unique.",
          "To make all vertices have the same degree.",
          "To guarantee every triple is independent of every other triangle."
        ],
        "answer": 0,
        "feedback": [
          "Correct: otherwise the cleaning itself would contradict the definition of farness.",
          "The proof can use any partition satisfying the required regularity conditions; ε-farness ensures that the bounded cleaning budget cannot remove every triangle.",
          "Degree regularity is not the stated farness condition.",
          "The graph’s triangle indicators can be dependent; the tester samples triples independently."
        ]
      }
    },
    "boundary": {
      "title": "A sampled witness and a quantitative distance are different",
      "paragraphs": [
        "One-sided rejection is a certificate of failure of the property. It is not a distance estimator. Conversely, a missed witness on one run is compatible with both a triangle-free graph and an unlucky sample from a far graph."
      ],
      "cases": [
        {
          "label": "One isolated triangle",
          "setting": "A huge graph has one triangle and otherwise no edges.",
          "question": {
            "prompt": "What does observing that triangle certify?",
            "options": [
              "The graph is ε-far for every fixed ε.",
              "The graph is not triangle-free, but one edge deletion repairs it.",
              "The graph has δn³ triangles for a fixed δ>0.",
              "The graph requires n² deletions."
            ],
            "answer": 1,
            "feedback": [
              "Its normalized repair cost tends to zero as n grows.",
              "Correct: non-membership is certified, while large edit distance is not.",
              "There is only one triangle, not a positive fixed density.",
              "Deleting a single edge of the triangle suffices."
            ]
          }
        },
        {
          "label": "Constant in n",
          "setting": "The tester has a sample bound depending only on ε, but δ(ε) is extremely small.",
          "question": {
            "prompt": "What does constant query complexity mean here?",
            "options": [
              "The algorithm is automatically practical for all ε.",
              "The sample count is three.",
              "The bound is independent of n for fixed ε, while dependence on ε can be very large.",
              "The removal lemma becomes unnecessary."
            ],
            "answer": 2,
            "feedback": [
              "A huge dependence on ε can make the tester impractical.",
              "Each trial queries three edges, but the number of trials can be large.",
              "Correct: the asymptotic parameter being held fixed must be stated.",
              "The removal lemma is precisely what makes n-independent sampling possible."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Removal turns global farness into local witness density.",
        "Use T/C(n,3) for unordered triple sampling.",
        "One-sided rejection certifies a triangle, not a particular edit distance."
      ],
      "retrieval": "Prove the sampling guarantee assuming triangle removal, then explain how the cleaning budget and regular-pair counting produce the abundance input."
    },
    "sourceNote": "Alon–Spencer §17.3. The source proves triangle removal using the regularity lemma from Chapter 9; that lemma is identified as an input rather than silently added as a new assigned chapter."
  },
  "core-hereditary": {
    "intro": {
      "title": "Induced obstructions must remember missing edges",
      "paragraphs": [
        "A hereditary graph property survives taking induced subgraphs. Such a property can be described by a possibly infinite family of forbidden induced graphs. The word induced matters: a witness specifies both which pairs are edges and which pairs are nonedges. Deleting edges can create a forbidden induced pattern even though taking an induced vertex subset cannot.",
        "The deep induced-removal theorem says that graphs ε-far from such a property have many bounded-size forbidden witnesses, where the bound depends on ε and the property. This turns an infinite forbidden family into a finite sampling task at each fixed accuracy. The theorem does not say that one universal forbidden graph or one universal sample size works for every property and every ε."
      ],
      "question": {
        "prompt": "What does hereditary mean?",
        "options": [
          "The property survives deletion of arbitrary edges only.",
          "The property survives taking induced subgraphs on vertex subsets.",
          "Every graph has the property eventually.",
          "The property depends only on edge count."
        ],
        "answer": 1,
        "feedback": [
          "Closure under both edge and vertex deletion is the stronger monotone notion in this setting.",
          "Correct: induced restriction keeps all edges among the remaining vertices.",
          "Hereditary closure is a structural condition, not eventual universality.",
          "Many hereditary properties depend on detailed adjacency patterns."
        ]
      }
    },
    "mechanism": {
      "title": "Three levels of characterization",
      "definitions": [
        {
          "term": "Forbidden induced family",
          "meaning": "All finite graphs whose presence as an induced subgraph is incompatible with the property."
        },
        {
          "term": "Oblivious tester",
          "meaning": "Its vertex sample size depends on ε; it decides from the sampled induced graph, using the whole graph when it is smaller than the requested sample."
        },
        {
          "term": "Semi-hereditary property",
          "meaning": "A property contained in some hereditary H such that sufficiently large ε-far inputs must lie outside H."
        }
      ],
      "paragraphs": [
        "For a hereditary property P, take as forbidden family every graph failing P. A graph in P cannot contain any of them induced, and a graph outside P contains itself as a forbidden induced graph. This elementary equivalence does not itself bound the size or abundance of witnesses in a large far graph.",
        "The induced-removal theorem supplies precisely those missing quantitative facts: some forbidden F has size bounded by a function of ε and occurs with a density bounded below in terms of ε. A bounded sample then detects an obstruction with constant probability. The final theorem characterizes properties with oblivious one-sided testers by semi-heredity. Its proof uses stronger regularity machinery and is not supplied in this short deduction."
      ],
      "formula": "hereditary P ⇒ induced-forbidden-family description ⇒ one-sided testability",
      "question": {
        "prompt": "What does the deep induced-removal theorem add beyond the forbidden-family description?",
        "options": [
          "It makes every forbidden family finite once and for all.",
          "It gives bounded-size, abundant witnesses for ε-far inputs.",
          "It removes the need to inspect nonedges.",
          "It says all graph properties are hereditary."
        ],
        "answer": 1,
        "feedback": [
          "Induced removal bounds the size of some abundant witness separately for each ε, without turning the entire forbidden family into a fixed finite list.",
          "Correct: size and abundance bounds make finite sampling effective.",
          "Induced copies continue to constrain nonedges.",
          "The theorem concerns the stated structural classes of properties."
        ]
      }
    },
    "example": {
      "title": "A four-cycle can disappear when a chord is added",
      "setup": "On four vertices, keep cycle edges 12,23,34,41 and vary the two diagonals 13,24. Examine the property of having no induced four-cycle.",
      "table": {
        "headers": [
          "Number of diagonals",
          "Ordinary four-cycle present?",
          "Induced four-cycle on these vertices?"
        ],
        "rows": [
          [
            "0",
            "Yes",
            "Yes"
          ],
          [
            "1",
            "Yes",
            "No"
          ],
          [
            "2",
            "Yes",
            "No"
          ]
        ]
      },
      "steps": [
        {
          "title": "Inspect all six pairs",
          "explanation": "An induced C₄ needs the four cycle edges present and both diagonals absent."
        },
        {
          "title": "Add one diagonal",
          "explanation": "The cycle still exists as a non-induced subgraph, but the four vertices no longer induce C₄ because an extra edge is present."
        },
        {
          "title": "Reverse the operation",
          "explanation": "K₄ is induced-C₄-free. Deleting its two diagonals creates an induced C₄, showing that this hereditary property is not closed under arbitrary edge deletion."
        }
      ],
      "conclusion": "An ordinary subgraph test that ignores nonedges would confuse all three rows. Hereditary induced-pattern testing needs the entire adjacency pattern of the sampled vertices.",
      "question": {
        "prompt": "How many absent diagonals are required for these four vertices to induce C₄?",
        "options": [
          "0",
          "1",
          "2",
          "4"
        ],
        "answer": 2,
        "feedback": [
          "With both diagonals present the induced graph is K₄.",
          "One remaining diagonal is still an extra edge and destroys an induced C₄.",
          "Correct: both non-cycle pairs must be nonedges.",
          "There are only two diagonals among these four vertices."
        ]
      }
    },
    "proof": {
      "title": "From an infinite family to a finite tester",
      "paragraphs": [
        "The sampling deduction is elementary once the structural theorem is granted, but the structural theorem is not elementary triangle removal with a word changed. Induced copies require simultaneous control of edge and nonedge densities, and a forbidden family may contain graphs of unbounded order."
      ],
      "steps": [
        {
          "claim": "Describe P by its forbidden induced family.",
          "why": "Hereditary closure prevents forbidden induced subgraphs, and any failure graph witnesses its own failure."
        },
        {
          "claim": "Invoke induced removal for the accuracy ε.",
          "why": "It supplies a witness-size bound and a positive density for some forbidden pattern."
        },
        {
          "claim": "Sample a sufficiently large bounded vertex set and inspect its induced graph.",
          "why": "Witness abundance gives a detection probability depending only on ε and the property."
        },
        {
          "claim": "Reject only when the sample violates the hereditary property.",
          "why": "Any such induced witness is impossible inside a graph satisfying P, ensuring one-sided correctness."
        }
      ],
      "question": {
        "prompt": "Why can an infinite forbidden family still yield a bounded-query tester for fixed ε?",
        "options": [
          "Only ε-far inputs require a bounded-size abundant witness, supplied by induced removal.",
          "An infinite family cannot contain any finite graph.",
          "All forbidden graphs are the same size.",
          "The tester enumerates the whole input graph regardless of n."
        ],
        "answer": 0,
        "feedback": [
          "Correct: the quantitative witness bound is accuracy-dependent, even when the full family is infinite.",
          "An infinite family can consist entirely of finite graphs of growing sizes.",
          "An infinite forbidden family may contain graphs of arbitrarily large sizes. The theorem supplies a finite witness-size bound only after ε is fixed.",
          "For fixed ε the sample size is bounded independently of large n."
        ]
      }
    },
    "boundary": {
      "title": "Hereditary, monotone and semi-hereditary are not synonyms",
      "paragraphs": [
        "A precise theorem statement must specify its class of properties and tester model. Closure under induced subgraphs, closure under edge deletions, and asymptotic approximation by a hereditary class play distinct roles."
      ],
      "cases": [
        {
          "label": "Connected graphs",
          "setting": "Take a connected three-vertex path and retain only its two endpoints as an induced subgraph.",
          "question": {
            "prompt": "What does this show?",
            "options": [
              "Connectedness is hereditary.",
              "The induced subgraph remains a path with an invisible middle vertex.",
              "Connectedness is not hereditary.",
              "Every hereditary property must concern triangles."
            ],
            "answer": 2,
            "feedback": [
              "In the induced subgraph on the path endpoints, the middle vertex and both incident edges are absent, leaving two isolated vertices.",
              "An induced subgraph contains only the chosen vertices and their mutual edges.",
              "Correct: one induced restriction destroys connectedness.",
              "Many hereditary properties concern other forbidden induced patterns."
            ]
          }
        },
        {
          "label": "The final tester characterization",
          "setting": "A graph property is claimed to admit an oblivious one-sided tester.",
          "question": {
            "prompt": "Which structural condition appears in the chapter’s final equivalence?",
            "options": [
              "Every graph with enough edges has the property.",
              "The property is semi-hereditary.",
              "The property must be exactly triangle-free.",
              "The property has a fixed finite forbidden list."
            ],
            "answer": 1,
            "feedback": [
              "Edge density alone is not the characterization.",
              "Correct: the equivalence uses semi-heredity, with a hereditary envelope and the stated large-input farness condition.",
              "The characterization covers all semi-hereditary properties in the stated oblivious one-sided tester model, not only triangle-freeness.",
              "The forbidden family can be infinite; the necessary quantitative input is a bounded abundant witness for each fixed accuracy ε."
            ]
          }
        }
      ]
    },
    "recap": {
      "takeaways": [
        "Induced witnesses specify nonedges as well as edges.",
        "Hereditary closure gives a forbidden-family description; induced removal supplies quantitative witnesses.",
        "The oblivious one-sided characterization concerns semi-hereditary properties."
      ],
      "retrieval": "Prove the forbidden-family description, explain why adding a chord changes an induced C₄ witness, and state the separate size-and-abundance input needed for a tester."
    },
    "sourceNote": "Alon–Spencer §17.4. The assigned text states the deep induced-removal and semi-hereditary characterization theorems without detailed proofs. The elementary description and sampling deductions are developed here, with that limitation explicit."
  }
};
