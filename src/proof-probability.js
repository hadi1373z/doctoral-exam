const PROOF_PROBABILITY = {
  "core-four-functions": {
    "proof": {
      "goal": "Prove the Four Functions inequality by a valid one-coordinate compression, including cross products and zero cases.",
      "scope": "This walkthrough proves the finite Boolean-lattice induction. Transfer to arbitrary finite distributive lattices also uses their set representation.",
      "frames": [
        {
          "title": "Keep both cross products",
          "question": "After splitting on one coordinate, which two products have the same union and intersection?",
          "diagram": {
            "kind": "table",
            "columns": [
              "A bit",
              "B bit",
              "upper bound"
            ],
            "rows": [
              [
                "0",
                "0",
                "γ₀δ₀"
              ],
              [
                "0",
                "1",
                "γ₁δ₀"
              ],
              [
                "1",
                "0",
                "γ₁δ₀"
              ],
              [
                "1",
                "1",
                "γ₁δ₁"
              ]
            ],
            "focus": [
              1,
              2
            ],
            "note": "The middle two rows need one common bound; separate slice induction misses them."
          },
          "claim": "α₀β₁ ≤ C and α₁β₀ ≤ C, where C=γ₁δ₀.",
          "explanation": "The cross pairs have union bit one and intersection bit zero. This shared upper bound is exactly what couples the two slices. The diagonal inequalities alone do not compare the product of the summed masses.",
          "carry": "Both cross factors C−α₀β₁ and C−α₁β₀ are nonnegative."
        },
        {
          "title": "Expose the nonnegative remainder",
          "question": "Assume C>0. What remains after replacing the diagonal output values by their smallest permitted values?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "γ₀",
                "relation": "≥",
                "right": "α₀β₀/δ₀",
                "reason": "diagonal at bit zero"
              },
              {
                "left": "δ₁",
                "relation": "≥",
                "right": "α₁β₁/γ₁",
                "reason": "diagonal at bit one"
              },
              {
                "left": "output − input",
                "relation": "≥",
                "right": "(C−α₀β₁)(C−α₁β₀)/C",
                "reason": "expand after substitution"
              }
            ],
            "focus": 2,
            "note": "All divisions occur only after C>0 has been established."
          },
          "claim": "(α₀+α₁)(β₀+β₁) ≤ (γ₀+γ₁)(δ₀+δ₁).",
          "explanation": "Multiplying the two diagonal lower bounds and expanding leaves the displayed remainder. Both numerator factors are nonnegative by the cross hypotheses. If C=0 instead, both cross products vanish, and adding the two diagonal inequalities proves the same conclusion without division.",
          "carry": "The two-point theorem is now available, including its degenerate case."
        },
        {
          "title": "Compress actual lifts, not separate slices",
          "question": "For fixed A′,B′ on n−1 coordinates, how do their two lifts become one local inequality?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 120,
                "y": 65,
                "label": [
                  "A′ and A′∪{n}",
                  "α₀ + α₁"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 600,
                "y": 65,
                "label": [
                  "B′ and B′∪{n}",
                  "β₀ + β₁"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 240,
                "y": 250,
                "label": [
                  "A′∪B′",
                  "γ₀ + γ₁"
                ],
                "tone": "output"
              },
              {
                "id": "n3",
                "x": 500,
                "y": 250,
                "label": [
                  "A′∩B′",
                  "δ₀ + δ₁"
                ],
                "tone": "input"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n2",
                "label": "join lifts",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n1",
                "to": "n2",
                "label": "join lifts",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n0",
                "to": "n3",
                "label": "meet lifts",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n1",
                "to": "n3",
                "label": "meet lifts",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "The two-point theorem handles all four combinations of lifts together."
          },
          "claim": "ᾱ(A′)β̄(B′) ≤ γ̄(A′∪B′)δ̄(A′∩B′).",
          "explanation": "Define each barred function by adding its two coordinate slices. Apply the two-point result to the four original hypotheses for these fixed A′,B′. This proves that compression preserves the exact local hypothesis needed for induction.",
          "carry": "The compressed functions satisfy the same theorem on one fewer coordinate."
        },
        {
          "title": "Recover every original mass once",
          "question": "Why do the barred total masses equal the original total masses?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "Σ ᾱ",
                "relation": "=",
                "right": "Σ α",
                "reason": "each set has one lower lift"
              },
              {
                "left": "(Σ ᾱ)(Σ β̄)",
                "relation": "≤",
                "right": "(Σ γ̄)(Σ δ̄)",
                "reason": "induction on n−1"
              },
              {
                "left": "(Σ α)(Σ β)",
                "relation": "≤",
                "right": "(Σ γ)(Σ δ)",
                "reason": "identify all four sums"
              }
            ],
            "focus": 1,
            "note": "Compression partitions the lattice into pairs; no multiplicity is discarded."
          },
          "claim": "The desired inequality follows by induction from the two-point base.",
          "explanation": "Every original subset occurs exactly once in a pair indexed by its restriction to the first n−1 coordinates. Substituting these four sum identities into the induction conclusion completes the proof.",
          "carry": "Local join/meet control survives summation because cross terms were preserved."
        }
      ]
    },
    "challenges": [
      {
        "id": "four-functions-extension-1",
        "title": "Optimize the hidden slack",
        "minutes": 12,
        "skill": "Sharp two-point algebra and constrained optimization.",
        "connection": "The worked family example loses multiplicities; this task measures the algebraic slack that replaces injectivity.",
        "prompt": "On the two-point lattice take α=(1,3), β=(2,4), γ₁=4 and δ₀=2. Among all nonnegative γ₀,δ₁ satisfying every Four Functions hypothesis, find the minimum of (γ₀+γ₁)(δ₀+δ₁). Prove optimality, verify both cross constraints, and compute the gap from (Σα)(Σβ).",
        "hints": [
          "The diagonal constraints give separate lower bounds on γ₀ and δ₁.",
          "The objective is increasing in each variable; then check the cross products 4 and 6 against C=8."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the minimum output product?",
          "expected": 25,
          "feedback": "The constraints force γ₀≥1 and δ₁≥3. Their minimum gives (1+4)(2+3)=25, while the input product is 4·6=24. The gap equals (8−4)(8−6)/8=1."
        },
        "solution": [
          "The bit-zero diagonal gives γ₀·2≥1·2, hence γ₀≥1.",
          "The bit-one diagonal gives 4δ₁≥3·4, hence δ₁≥3.",
          "The cross products are 1·4=4 and 3·2=6, each at most γ₁δ₀=8. Thus the two diagonal minima are feasible simultaneously.",
          "Monotonicity of the positive objective makes (1,3) optimal. The minimum is 25 and the strict slack over 24 is one."
        ],
        "rubric": [
          "Derive both diagonal lower bounds and check cross constraints.",
          "Justify global optimality, not merely exhibit a feasible choice.",
          "Identify the slack with the nonnegative-remainder factorization."
        ],
        "mistake": "Setting the output product equal to the input product assumes sharpness that the fixed cross bound C=8 does not allow.",
        "followup": "With α,β fixed, characterize all positive C for which sharp diagonal choices yield equality."
      },
      {
        "id": "four-functions-extension-2",
        "title": "When can compression be sharp?",
        "minutes": 12,
        "skill": "Equality analysis, including the interaction of diagonal and cross constraints.",
        "connection": "The example shows that the map to union/intersection is not injective; equality must therefore come from algebra, not bijection.",
        "prompt": "Assume all αᵢ,βᵢ,γ₁,δ₀ are positive and choose the diagonal output values sharply: γ₀δ₀=α₀β₀ and γ₁δ₁=α₁β₁. Let u=α₀β₁ and v=α₁β₀. Derive the exact output-minus-input expression in C=γ₁δ₀. Under the two cross constraints, characterize equality and show why choosing C=√(uv) is generally infeasible.",
        "hints": [
          "Expand the product after solving the two sharp diagonal equations.",
          "Feasibility is C≥max(u,v), not C≥√(uv)."
        ],
        "probe": {
          "kind": "choice",
          "prompt": "For u≠v and sharp diagonal constraints, when does equality hold?",
          "options": [
            "Exactly when C=√(uv), since the two cross terms balance.",
            "Exactly when C=min(u,v), since one remainder factor vanishes.",
            "Exactly when C=max(u,v), where feasibility and one zero factor coincide.",
            "For every C≥max(u,v), since both diagonal constraints are sharp."
          ],
          "answer": 2,
          "feedback": [
            "The geometric mean is below the larger cross product when u≠v, violating that cross constraint.",
            "The smaller cross product leaves the larger cross constraint unsatisfied.",
            "The slack is (C−u)(C−v)/C. Feasibility forces C≥max(u,v), so equality occurs at that endpoint.",
            "Sharp diagonal constraints leave the two cross factors; both are strictly positive if C>max(u,v)."
          ]
        },
        "solution": [
          "Substituting the sharp diagonal values yields slack C−u−v+uv/C=(C−u)(C−v)/C.",
          "Both cross constraints force C≥max(u,v). This restriction is stronger than nonnegativity of the product alone.",
          "If u≠v, the feasible endpoint C=max(u,v) makes one factor zero. Any larger C makes both factors positive.",
          "The proposed value √(uv) lies strictly between u and v and therefore violates the larger cross constraint."
        ],
        "rubric": [
          "Derive the exact slack rather than cite an equality slogan.",
          "Use both cross constraints to restrict the feasible domain.",
          "Explain why the geometric-mean proposal fails."
        ],
        "mistake": "The sign of a product does not by itself ensure each original cross inequality.",
        "followup": "Remove the sharp-diagonal assumption and determine which additional equalities are forced by equality of total masses."
      }
    ]
  },
  "core-fkg": {
    "proof": {
      "goal": "Derive positive association from log-supermodularity by constructing the correct four functions.",
      "scope": "Four Functions on a finite distributive lattice is the established input. The normalization requires Z=Σμ>0.",
      "frames": [
        {
          "title": "Put the two observables on the input side",
          "question": "Which choice of α and β makes their total masses the desired expectations?",
          "diagram": {
            "kind": "table",
            "columns": [
              "function",
              "definition",
              "total mass"
            ],
            "rows": [
              [
                "α(x)",
                "f(x)μ(x)",
                "Z E[f]"
              ],
              [
                "β(x)",
                "g(x)μ(x)",
                "Z E[g]"
              ],
              [
                "γ(x)",
                "f(x)g(x)μ(x)",
                "Z E[fg]"
              ],
              [
                "δ(x)",
                "μ(x)",
                "Z"
              ]
            ],
            "focus": [
              0,
              1
            ],
            "note": "Start with f,g≥0; shifting real-valued observables is handled at the end."
          },
          "claim": "The desired association is the Four Functions conclusion for these choices.",
          "explanation": "The product of the input sums is Z²E[f]E[g], while the product of the output sums is Z²E[fg]. Their order will follow once the local join/meet hypothesis is verified.",
          "carry": "It remains to compare α(x)β(y) with γ(x∨y)δ(x∧y)."
        },
        {
          "title": "See exactly where monotonicity enters",
          "question": "Why can both observable factors be moved to the join?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 120,
                "y": 65,
                "label": [
                  "x",
                  "f(x)μ(x)"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 600,
                "y": 65,
                "label": [
                  "y",
                  "g(y)μ(y)"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 240,
                "y": 250,
                "label": [
                  "x∨y",
                  "f(x∨y)g(x∨y)"
                ],
                "tone": "output"
              },
              {
                "id": "n3",
                "x": 500,
                "y": 250,
                "label": [
                  "x∧y",
                  "μ(x∧y)"
                ],
                "tone": "input"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n2",
                "label": "f increases",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n1",
                "to": "n2",
                "label": "g increases",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n0",
                "to": "n3",
                "label": "measure meet",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n1",
                "to": "n3",
                "label": "measure meet",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "Both observables move upward; the measure splits between join and meet."
          },
          "claim": "f(x)g(y) ≤ f(x∨y)g(x∨y).",
          "explanation": "Because x≤x∨y and y≤x∨y, monotonicity gives the two scalar comparisons. Nonnegativity lets us multiply them. The meet does not need an observable factor in this construction.",
          "carry": "The only remaining local comparison concerns the measure μ."
        },
        {
          "title": "Use the actual FKG measure hypothesis",
          "question": "What must replace μ(x)μ(y) after the observables have moved upward?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "μ(x)μ(y)",
                "relation": "≤",
                "right": "μ(x∨y)μ(x∧y)",
                "reason": "log-supermodularity"
              },
              {
                "left": "α(x)β(y)",
                "relation": "≤",
                "right": "γ(x∨y)δ(x∧y)",
                "reason": "combine both comparisons"
              },
              {
                "left": "(Σα)(Σβ)",
                "relation": "≤",
                "right": "(Σγ)(Σδ)",
                "reason": "Four Functions"
              }
            ],
            "focus": 1,
            "note": "Monotonicity of f and g alone cannot supply the first row."
          },
          "claim": "Four Functions yields Z²E[f]E[g] ≤ Z²E[fg].",
          "explanation": "This is the precise place where dependence is controlled. Product measures satisfy the measure inequality with equality, but arbitrary dependent measures need not satisfy it. Four Functions now transports the pointwise control to total masses.",
          "carry": "Divide by the positive Z² to obtain nonnegative covariance."
        },
        {
          "title": "Allow real-valued increasing observables",
          "question": "Why does shifting f and g not change the covariance?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "Cov(f+a,g+b)",
                "relation": "=",
                "right": "Cov(f,g)",
                "reason": "constant terms cancel"
              },
              {
                "left": "E[(f+a)(g+b)]",
                "relation": "≥",
                "right": "E[f+a] E[g+b]",
                "reason": "apply nonnegative case"
              }
            ],
            "focus": 1,
            "note": "Choose shifts large enough on the finite lattice, then cancel them."
          },
          "claim": "The association inequality holds for all finite real increasing f,g.",
          "explanation": "Finiteness supplies minima, so constants a,b can make both observables nonnegative. Expanding both sides shows that the terms aE[g], bE[f], and ab cancel, leaving exactly the original covariance inequality.",
          "carry": "FKG is a statement about the measure plus the common monotonicity direction."
        }
      ]
    },
    "challenges": [
      {
        "id": "fkg-extension-1",
        "title": "External fields preserve the determinant",
        "minutes": 12,
        "skill": "Log-supermodularity under reweighting and exact covariance.",
        "connection": "The worked two-bit measure has positive covariance; now perturb both marginals without assuming independence.",
        "prompt": "On {0,1}² take unnormalized masses μ(00)=1, μ(01)=2, μ(10)=3, μ(11)=12. Reweight each state x by r^{x₁}s^{x₂}, with r,s>0. Prove the reweighted measure remains log-supermodular and derive an exact covariance formula for the coordinate indicators. Evaluate it at r=2,s=3.",
        "hints": [
          "For two bits, the only nontrivial lattice comparison is μ00μ11≥μ01μ10.",
          "For normalized masses a,b,c,d, coordinate covariance is (ad−bc)/(a+b+c+d)²."
        ],
        "probe": {
          "kind": "number",
          "prompt": "At r=2,s=3, what is the coordinate covariance?",
          "expected": 0.004982698961937716,
          "feedback": "The reweighted masses are 1,6,6,72, with Z=85. The determinant is 72−36=36, hence covariance 36/85². Reweighting changes the normalization as well as the numerator."
        },
        "solution": [
          "The original lattice determinant is 1·12−2·3=6>0.",
          "External-field factors contribute rs to both products in the lattice comparison, preserving its sign.",
          "The new determinant is 6rs, and Z=1+2s+3r+12rs, so covariance is 6rs/Z².",
          "At r=2,s=3, Z=85 and 6rs=36. Positive association persists although neither marginal stays at its original value."
        ],
        "rubric": [
          "Verify the measure inequality after reweighting.",
          "Derive the determinant-over-Z² formula.",
          "Use the new normalization and evaluate the requested field."
        ],
        "mistake": "Keeping the old denominator after applying external fields produces the wrong probability measure.",
        "followup": "Identify which multiplicative reweightings on a larger Boolean lattice preserve log-supermodularity exactly."
      },
      {
        "id": "fkg-extension-2",
        "title": "Pairwise correlation is not association",
        "minutes": 12,
        "skill": "Distinguishing coordinate tests from all increasing observables.",
        "connection": "The example tests two coordinate events; FKG promises much more than those few tests.",
        "prompt": "Let X be uniform on {000,011,101,110}. Prove that every pair of coordinate bits is independent. Then take A={X₁=1} and B={X₂=X₃=1}; both are increasing events on the whole cube. Compute their covariance, exhibit a violated log-supermodularity comparison, and explain why pairwise nonnegative covariance cannot replace the FKG hypothesis.",
        "hints": [
          "List the four outcomes of any chosen coordinate pair.",
          "For the lattice test, compare 011 and 101 with their join and meet."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is Cov(1_A,1_B)?",
          "expected": -0.125,
          "feedback": "P(A)=1/2 and P(B)=1/4, but P(A∩B)=P(111)=0. The covariance is −1/8 even though every coordinate pair is independent."
        },
        "solution": [
          "Every coordinate pair takes 00,01,10,11 once, giving pairwise independence.",
          "A has probability 1/2, B has probability 1/4, and their intersection is the absent state 111.",
          "The covariance is therefore −1/8. This witnesses failure of association for increasing functions.",
          "For x=011,y=101, both input masses are positive, but join 111 and meet 001 have mass zero. Thus log-supermodularity fails exactly where the Four Functions proof needs it."
        ],
        "rubric": [
          "Verify all coordinate pairs rather than just symmetry of marginals.",
          "Check the events are increasing on the ambient cube.",
          "Provide a concrete violated lattice inequality."
        ],
        "mistake": "Testing only coordinate covariance misses nonlinear increasing observables such as a conjunction.",
        "followup": "Construct an analogous example using n bits with one parity constraint and determine which orders of independence survive."
      }
    ]
  },
  "core-harris": {
    "proof": {
      "goal": "Prove positive association on a Bernoulli product space by accounting for both within-slice and between-slice covariance.",
      "scope": "The induction uses independent remaining coordinates in each pinned-coordinate slice. It does not extend automatically to conditioning on an arbitrary event.",
      "frames": [
        {
          "title": "Isolate the last independent bit",
          "question": "What remains random when Xₙ is pinned to 0 or 1?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 150,
                "y": 65,
                "label": [
                  "Xₙ=0",
                  "probability 1−p"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 570,
                "y": 65,
                "label": [
                  "Xₙ=1",
                  "probability p"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 150,
                "y": 250,
                "label": [
                  "a₀=E[f ∣ Xₙ=0]",
                  "b₀=E[g ∣ Xₙ=0]"
                ],
                "tone": "output"
              },
              {
                "id": "n3",
                "x": 570,
                "y": 250,
                "label": [
                  "a₁=E[f ∣ Xₙ=1]",
                  "b₁=E[g ∣ Xₙ=1]"
                ],
                "tone": "input"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n2",
                "label": "product slice",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n1",
                "to": "n3",
                "label": "product slice",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "Pinning one coordinate leaves the same product law on the others."
          },
          "claim": "E[fg|Xₙ=i] ≥ aᵢbᵢ by induction.",
          "explanation": "The product assumption preserves independence among the unexposed bits after a coordinate is fixed. Increasingness also survives restriction. These facts let the lower-dimensional induction apply separately in each slice.",
          "carry": "Within-slice covariance is nonnegative; the slice means still need comparison."
        },
        {
          "title": "Average the slice inequalities",
          "question": "Does averaging already give the unconditional product?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "E[fg]",
                "relation": "≥",
                "right": "(1−p)a₀b₀+p a₁b₁",
                "reason": "average the slice bounds"
              },
              {
                "left": "E[f]E[g]",
                "relation": "=",
                "right": "((1−p)a₀+pa₁)((1−p)b₀+pb₁)",
                "reason": "average means separately"
              }
            ],
            "focus": 0,
            "note": "The two displayed expressions differ by a between-slice covariance."
          },
          "claim": "One must retain the difference between average products and product averages.",
          "explanation": "The tower property gives the first expression. Expanding the product of the unconditional means produces cross terms a₀b₁ and a₁b₀; ignoring them is the common incomplete induction.",
          "carry": "Factor the remaining scalar difference before claiming association."
        },
        {
          "title": "Factor the missing term",
          "question": "Which factorization records the common monotonicity direction?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "E[fg]−E[f]E[g]",
                "relation": "≥",
                "right": "p(1−p)(a₁−a₀)(b₁−b₀)",
                "reason": "expand and factor"
              },
              {
                "left": "a₁−a₀",
                "relation": "≥",
                "right": "0",
                "reason": "couple identical other bits"
              },
              {
                "left": "b₁−b₀",
                "relation": "≥",
                "right": "0",
                "reason": "the same monotonicity argument"
              }
            ],
            "focus": 0,
            "note": "The same coupling compares both slice means pointwise."
          },
          "claim": "Both within-slice and between-slice contributions are nonnegative.",
          "explanation": "Couple the two slices using exactly the same remaining-coordinate outcome. Changing only the final bit from zero to one cannot decrease either observable. The two differences therefore have the same nonnegative sign.",
          "carry": "The scalar Bernoulli covariance closes the induction."
        },
        {
          "title": "Keep a quantitative check of the factorization",
          "question": "For f=X₁∨X₂ and g=X₂∨X₃, where does all covariance come from?",
          "diagram": {
            "kind": "table",
            "columns": [
              "X₂",
              "E[f|X₂]",
              "E[g|X₂]"
            ],
            "rows": [
              [
                "0",
                "p₁",
                "p₃"
              ],
              [
                "1",
                "1",
                "1"
              ]
            ],
            "focus": [
              0,
              1
            ],
            "note": "The observables are independent inside each X₂ slice."
          },
          "claim": "Cov(f,g)=p₂(1−p₂)(1−p₁)(1−p₃).",
          "explanation": "Given the shared bit, f and g depend on separate independent bits, so the within-slice covariance is zero. The full covariance is exactly the factored between-slice term, providing a direct check of the proof mechanism.",
          "carry": "Positive dependence can arise from a shared coordinate without any dependence in the base inputs."
        }
      ]
    },
    "challenges": [
      {
        "id": "harris-extension-1",
        "title": "Locate all covariance in the shared bit",
        "minutes": 12,
        "skill": "Conditional independence and quantitative equality analysis.",
        "connection": "The original example conditions on one biased bit; this task makes the entire dependence pass through a different shared bit.",
        "prompt": "Let X₁,X₂,X₃ be independent with probabilities 1/4,1/3,3/4. Set f=X₁∨X₂ and g=X₂∨X₃. Derive Cov(f,g) twice: first by conditioning on X₂ and factoring the slice means, then by computing E[f], E[g], and E[fg]. Generalize to arbitrary biases and characterize when covariance vanishes.",
        "hints": [
          "Given X₂=0, f and g are separate bits; given X₂=1, both are one.",
          "The between-slice term is p₂(1−p₂)(a₁−a₀)(b₁−b₀)."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the exact covariance for the stated biases?",
          "expected": 0.041666666666666664,
          "feedback": "The slice gaps are 3/4 and 1/4, and p₂(1−p₂)=2/9. Their product is 1/24. E[f]=1/2, E[g]=5/6 and E[fg]=11/24 confirm it."
        },
        "solution": [
          "Conditional independence makes both within-slice covariance terms zero.",
          "The two slice-mean gaps are 1−p₁ and 1−p₃. Thus covariance is p₂(1−p₂)(1−p₁)(1−p₃).",
          "Substitution gives (2/9)(3/4)(1/4)=1/24; direct means give E[fg]=5/12+1/24=11/24.",
          "The general expression vanishes precisely when p₂ is 0 or 1, or p₁=1, or p₃=1. In each case the shared bit no longer transmits nonconstant influence to both outputs."
        ],
        "rubric": [
          "Explain why conditional covariance vanishes.",
          "Produce both an exact joint-probability check and the factorization.",
          "State all degenerate equality cases."
        ],
        "mistake": "The original bits being independent does not make f and g independent: both use X₂.",
        "followup": "Replace the OR gates by arbitrary increasing functions and identify the extra within-slice terms."
      },
      {
        "id": "harris-extension-2",
        "title": "Conditioning on an increasing event can reverse the sign",
        "minutes": 12,
        "skill": "Knowing when the induction hypothesis remains legal.",
        "connection": "The worked proof pins a coordinate; it does not condition on an arbitrary positive event.",
        "prompt": "Start with two independent fair bits and condition on E={X₁∨X₂=1}. Compute the conditional coordinate covariance. E is itself increasing, so explain why this is not a counterexample to Harris but does refute the claim that conditioning on every increasing event preserves association. Locate the failed step in a proposed slice-induction proof under the conditional law.",
        "hints": [
          "The conditioned space consists of 01,10,11 with equal probabilities.",
          "Compare P(X₁=X₂=1|E) with the product of the two conditioned marginals."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is Cov(X₁,X₂ | E)?",
          "expected": -0.1111111111111111,
          "feedback": "Each marginal becomes 2/3 while the joint success probability is 1/3, giving 1/3−4/9=−1/9. Conditioning changed the base measure, not the monotonicity of the coordinate functions."
        },
        "solution": [
          "Conditioning removes 00 and leaves three equiprobable states.",
          "The conditioned marginals are 2/3 and the joint success probability is 1/3.",
          "Their covariance is −1/9, although E and both tested coordinate events are increasing.",
          "Harris applied to the original product law is intact. The conditional law is not a product law, so reusing the product-space induction after this conditioning is unjustified."
        ],
        "rubric": [
          "Compute the normalized conditional law.",
          "Separate the validity of Harris from preservation under conditioning.",
          "Identify loss of product structure as the missing hypothesis."
        ],
        "mistake": "An increasing conditioning event is not the same operation as fixing a coordinate.",
        "followup": "Characterize which events on the two-bit fair cube yield an associated conditional measure."
      }
    ]
  },
  "core-xyz": {
    "proof": {
      "goal": "Transport FKG from a pivot-relative distributive lattice of labelings to the uniform law on linear extensions.",
      "scope": "The explicit lattice formulas and distributive-law verification are the key combinatorial input. The limiting argument below keeps the poset size fixed.",
      "frames": [
        {
          "title": "Choose coordinates that make both pivot events increasing",
          "question": "Why is the pivot coordinate ordered in reverse?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 120,
                "y": 65,
                "label": [
                  "pivot label x₁",
                  "reverse order"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 360,
                "y": 65,
                "label": [
                  "relative label x₂−x₁",
                  "ordinary order"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 600,
                "y": 65,
                "label": [
                  "relative label x₃−x₁",
                  "ordinary order"
                ],
                "tone": "output"
              },
              {
                "id": "n3",
                "x": 120,
                "y": 250,
                "label": [
                  "x₁≤x₂",
                  "gap ≥0"
                ],
                "tone": "input"
              },
              {
                "id": "n4",
                "x": 360,
                "y": 250,
                "label": [
                  "x₁≤x₃",
                  "gap ≥0"
                ],
                "tone": "active"
              }
            ],
            "edges": [
              {
                "from": "n1",
                "to": "n3",
                "label": "increasing gap",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n2",
                "to": "n4",
                "label": "increasing gap",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n0",
                "to": "n3",
                "label": "same pivot",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n0",
                "to": "n4",
                "label": "same pivot",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "One common pivot direction makes both comparison events increasing."
          },
          "claim": "Use the order x≤y iff x₁≥y₁ and xᵢ−x₁≤yᵢ−y₁.",
          "explanation": "In these coordinates, each pivot comparison asks whether one relative gap is nonnegative. Increasing the lattice element can only increase that gap. Reversing the pivot coordinate is part of the lattice construction; ordinary coordinate order would not do this job.",
          "carry": "Both events have the common monotonicity required by FKG."
        },
        {
          "title": "Keep order-preserving labelings closed",
          "question": "Why does the indicator of a poset-respecting labeling become log-supermodular?",
          "diagram": {
            "kind": "table",
            "columns": [
              "object",
              "coordinate operation",
              "poset inequality"
            ],
            "rows": [
              [
                "join",
                "max gaps + min pivot",
                "preserved"
              ],
              [
                "meet",
                "min gaps + max pivot",
                "preserved"
              ]
            ],
            "focus": [
              0,
              1
            ],
            "note": "The common pivot shift cancels when comparing labels at comparable poset elements."
          },
          "claim": "μ(x)μ(y)≤μ(x∨y)μ(x∧y) for the feasible-labeling indicator μ.",
          "explanation": "If both labelings respect each poset inequality, taking coordinatewise maxima of their relative labels preserves it, and so does taking minima. The common pivot shift does not alter such comparisons. Thus feasible labelings are closed under both operations.",
          "carry": "FKG is now applicable on the finite distributive labeling lattice."
        },
        {
          "title": "Apply FKG before passing to rankings",
          "question": "Which finite probability law has just been proved associated?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "Pₘ(x₁≤x₂, x₁≤x₃)",
                "relation": "≥",
                "right": "Pₘ(x₁≤x₂)Pₘ(x₁≤x₃)",
                "reason": "FKG on feasible labelings"
              }
            ],
            "focus": 0,
            "note": "Pₘ is uniform on weakly order-preserving labelings; ties are still allowed."
          },
          "claim": "The pivot inequality holds for every finite label range {1,…,m}.",
          "explanation": "The indicator measure is uniform on labelings satisfying the poset inequalities. At this stage equal labels may occur, so it is not yet the uniform law on linear extensions. The final deduction must explicitly remove that difference.",
          "carry": "Bound the tied fraction and identify the law after conditioning on no ties."
        },
        {
          "title": "Count each strict ranking equally",
          "question": "Why does conditioning on distinct labels give a uniform extension?",
          "diagram": {
            "kind": "table",
            "columns": [
              "class",
              "count for fixed n"
            ],
            "rows": [
              [
                "one linear extension",
                "C(m,n) distinct labelings"
              ],
              [
                "all distinct labelings",
                "e(P) C(m,n)"
              ],
              [
                "labelings with a tie",
                "O(mⁿ⁻¹)"
              ]
            ],
            "focus": [
              0,
              1
            ],
            "note": "Every extension chooses the same increasing n-tuple of labels."
          },
          "claim": "As m→∞, the finite-labeling probabilities converge to uniform-extension probabilities.",
          "explanation": "For each extension and each chosen n-subset of labels, assigning them in that ranking gives exactly one strictly labeled outcome. Tied outcomes have one fewer free label and therefore vanishing relative mass for fixed n. Taking limits preserves the FKG inequality.",
          "carry": "The XYZ conclusion follows with a uniform law, not an unspecified ranking bias."
        }
      ]
    },
    "challenges": [
      {
        "id": "xyz-extension-1",
        "title": "A four-element poset changes all three probabilities",
        "minutes": 12,
        "skill": "Uniform-extension enumeration and conditional insertion.",
        "connection": "The antichain example has six rankings; adding two constraints tests whether the same covariance reasoning is actually understood.",
        "prompt": "Let P have elements x,y,z,w and only relations y<w and z<w. Enumerate its linear extensions without treating x as equally likely to precede every particular element. Compute P(x<y), P(x<z), and P(x<y and x<z), then their covariance. Explain an insertion argument that assigns the correct probability to each extension.",
        "hints": [
          "The restricted order on y,z,w is either yzw or zyw.",
          "Insert x into one of four slots in each of those two orders."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the covariance of 1{x<y} and 1{x<z}?",
          "expected": 0.109375,
          "feedback": "There are eight extensions. The two marginals are 3/8, while the joint event has probability 2/8=1/4. The difference is 1/4−9/64=7/64."
        },
        "solution": [
          "There are exactly two legal orders on y,z,w, each with w last. Inserting x into four slots gives eight distinct extensions.",
          "In yzw, only the first slot puts x before y; in zyw, the first two slots do. Thus P(x<y)=3/8, and symmetry gives P(x<z)=3/8.",
          "Both comparisons hold exactly when x is in the first slot, giving two of eight extensions and probability 1/4.",
          "The covariance is 7/64>0, consistent with XYZ. Uniform insertion is justified here because each extension has a unique restricted order and slot."
        ],
        "rubric": [
          "Count all extensions with equal weights.",
          "Give both marginal counts and the joint count.",
          "Explain why the insertion parametrization is bijective."
        ],
        "mistake": "Symmetry between y and z gives equal marginals, not the value 1/2.",
        "followup": "Replace w by a chain of r elements above both y and z and derive the corresponding insertion probabilities."
      },
      {
        "id": "xyz-extension-2",
        "title": "The finite-label law can be mostly ties",
        "minutes": 12,
        "skill": "Counting the bridge between weak labelings and uniform extensions.",
        "connection": "The worked antichain enumeration hides the finite-label approximation used in the actual proof.",
        "prompt": "Use the same poset y<w,z<w and allow labels in {1,…,5}, with weak inequalities y≤w,z≤w. Count all feasible labelings, count globally distinct feasible labelings, and show that each linear extension gets the same number in the latter class. Then prove, for a general fixed n-element poset, that the tied fraction tends to zero with m; identify why fixing n matters.",
        "hints": [
          "Choose the label of w first; the x label is unrestricted.",
          "Distinct labelings are e(P)C(m,n), while a union bound over tied pairs costs O(mⁿ⁻¹)."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What fraction of the feasible five-label assignments are globally distinct?",
          "expected": 0.14545454545454545,
          "feedback": "There are 5·(1²+2²+3²+4²+5²)=275 weak assignments. Distinct ones number 8·C(5,4)=40, so the fraction is 40/275=8/55."
        },
        "solution": [
          "For a chosen w label j, y and z each have j choices and x has five. This gives 5Σj²=275 feasible weak assignments.",
          "There are eight extensions and C(5,4)=5 choices of four distinct labels for each, hence 40 distinct assignments.",
          "The requested fraction is 8/55. Ties are common at this small m, so identifying weak labelings with rankings immediately would be a serious error.",
          "For fixed n, at most C(n,2)mⁿ⁻¹ assignments have any repeated label, whereas e(P)C(m,n) grows on the order of mⁿ. Their ratio tends to zero. If n also grows, these constants and asymptotics must be controlled anew."
        ],
        "rubric": [
          "Normalize using all feasible weak labelings.",
          "Show equal multiplicity for each linear extension.",
          "Supply the fixed-n asymptotic comparison rather than assert ties are rare."
        ],
        "mistake": "Uniform weak labels do not directly induce a uniform extension until ties are removed.",
        "followup": "Find an explicit m(n) sufficient to make the tied fraction at most 1/10 using the crude union bound."
      }
    ]
  },
  "core-azuma": {
    "proof": {
      "goal": "Derive Azuma from conditional exponential-moment bounds without assuming independent martingale differences.",
      "scope": "The conditional one-step Hoeffding bound is the elementary analytic input. Constants here use absolute increment bounds |Dᵢ|≤cᵢ.",
      "frames": [
        {
          "title": "Center one increment conditionally",
          "question": "Which conditioning makes the increment have mean zero?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 150,
                "y": 160,
                "label": [
                  "past Fᵢ₋₁",
                  "Mᵢ₋₁ known"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 570,
                "y": 65,
                "label": [
                  "Dᵢ=Mᵢ−Mᵢ₋₁",
                  "conditional mean 0"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 570,
                "y": 255,
                "label": [
                  "−cᵢ ≤ Dᵢ ≤ cᵢ",
                  "bounded jump"
                ],
                "tone": "output"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n1",
                "label": "martingale property",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n0",
                "to": "n2",
                "label": "predictable bound",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "The past may determine the next increment distribution."
          },
          "claim": "E[e^{λDᵢ}|Fᵢ₋₁] ≤ e^{λ²cᵢ²/2}.",
          "explanation": "Apply the bounded-mean-zero exponential estimate inside each conditional probability space. This allows the increment law to depend on everything already revealed. No independence among the Dᵢ is asserted.",
          "carry": "A deterministic conditional MGF bound can be pulled through the tower property."
        },
        {
          "title": "Carry the MGF through the exposure tree",
          "question": "Why can the last conditional factor be removed even when the increments depend on each other?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "E e^{λΣ₁ᵐDᵢ}",
                "relation": "≤",
                "right": "e^{λ²cₘ²/2} E e^{λΣ₁ᵐ⁻¹Dᵢ}",
                "reason": "condition on Fₘ₋₁"
              },
              {
                "left": "E e^{λ(Mₘ−M₀)}",
                "relation": "≤",
                "right": "e^{λ²Σcᵢ²/2}",
                "reason": "iterate the tower property"
              }
            ],
            "focus": 1,
            "note": "This is conditional iteration, not a product formula for independent variables."
          },
          "claim": "The complete martingale has MGF controlled by the sum of squared bounds.",
          "explanation": "The earlier partial sum is measurable with respect to Fₘ₋₁. After conditioning, it stays fixed while the final one-step factor is bounded. Repeating removes one increment at a time.",
          "carry": "Set V=Σcᵢ²; the remaining task is a scalar exponential optimization."
        },
        {
          "title": "Convert the MGF into a tail",
          "question": "What event becomes suitable for Markov when λ>0?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "P(Mₘ−M₀≥t)",
                "relation": "≤",
                "right": "exp(−λt+λ²V/2)",
                "reason": "exponential Markov"
              },
              {
                "left": "λ*",
                "relation": "=",
                "right": "t/V",
                "reason": "minimize the quadratic"
              },
              {
                "left": "P(Mₘ−M₀≥t)",
                "relation": "≤",
                "right": "exp(−t²/(2V))",
                "reason": "substitute λ*"
              }
            ],
            "focus": 2,
            "note": "Take t>0 and V>0; if V=0 the martingale is constant."
          },
          "claim": "The upper tail has exponent −t²/(2Σcᵢ²).",
          "explanation": "The exponential is increasing, so a deviation of at least t forces e^{λ(Mₘ−M₀)}≥e^{λt}. Optimizing the quadratic exponent gives the strongest bound available from this MGF estimate.",
          "carry": "A lower tail requires applying the same argument to −M."
        },
        {
          "title": "Keep the two tails separate until the end",
          "question": "Where does the factor two originate?",
          "diagram": {
            "kind": "table",
            "columns": [
              "event",
              "one-sided bound"
            ],
            "rows": [
              [
                "Mₘ−M₀≥t",
                "e^{−t²/(2V)}"
              ],
              [
                "Mₘ−M₀≤−t",
                "e^{−t²/(2V)}"
              ],
              [
                "|Mₘ−M₀|≥t",
                "2e^{−t²/(2V)}"
              ]
            ],
            "focus": [
              2
            ],
            "note": "The two events are combined by a union bound, not by a symmetry assumption."
          },
          "claim": "P(|Mₘ−M₀|≥t) ≤ 2 exp(−t²/(2V)).",
          "explanation": "The negated process is also a martingale with exactly the same absolute jump bounds. Applying the upper-tail argument to it establishes the lower tail even when the original martingale distribution is asymmetric.",
          "carry": "Conditional centering and bounded jumps, not independent differences, drive the proof."
        }
      ]
    },
    "challenges": [
      {
        "id": "azuma-extension-1",
        "title": "A dependent-difference martingale",
        "minutes": 12,
        "skill": "Exact laws, conditional MGFs, and invalid factorization.",
        "connection": "The fair-coin example has independent centered increments; this perturbation keeps the martingale property while destroying that simplification.",
        "prompt": "Take fresh fair signs ε₁,ε₂. Put D₁=ε₁ and D₂=2ε₂ if ε₁=1, but D₂=0 if ε₁=−1. Show M₀=0,M₁=D₁,M₂=D₁+D₂ is a martingale. Derive the exact terminal law and MGF, exhibit dependence of D₁,D₂, and derive an Azuma upper-tail bound using c₁=1,c₂=2.",
        "hints": [
          "Condition D₂ on ε₁ rather than on nothing.",
          "The terminal values are 3 and −1, but they are not equally likely."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is E[M₂⁴]?",
          "expected": 21,
          "feedback": "M₂=3 with probability 1/4 and −1 with probability 3/4. Thus E[M₂⁴]=81/4+3/4=21. Treating the two increments as independent gives a different law."
        },
        "solution": [
          "E[D₁]=0 and E[D₂|ε₁]=0, so the stated process is a martingale. Yet D₂=0 precisely when ε₁=−1, showing dependence.",
          "For ε₁=1, the outcomes are 3 or −1, each with probability 1/4. For ε₁=−1, the outcome is −1 with probability 1/2.",
          "Therefore E[e^{λM₂}]=(e^{3λ}+3e^{−λ})/4 and E[M₂⁴]=21.",
          "The conditional MGF proof remains legal and gives P(M₂≥t)≤exp(−t²/10), because Σcᵢ²=5. Ordinary unconditional MGF factorization is illegal here."
        ],
        "rubric": [
          "Verify conditional mean zero at the second step.",
          "Compute the asymmetric terminal distribution and its MGF.",
          "Separate legality of the conditional proof from sharpness of its bound."
        ],
        "mistake": "Zero covariance or zero means do not imply independent differences.",
        "followup": "Use the actual conditional range lengths to improve the MGF estimate, and compare it with the exact tail at t=2."
      },
      {
        "id": "azuma-extension-2",
        "title": "A factor of four hidden in the range",
        "minutes": 12,
        "skill": "Optimizing a conditional range bound instead of an absolute-jump bound.",
        "connection": "The worked four-coin martingale uses jumps ±1/2; an arbitrary Bernoulli bias changes the centered interval without changing its length.",
        "prompt": "Let X₁,…,X₁₀₀ be independent Bernoulli(0.1), and Mᵢ=Σ_{j≤i}(Xⱼ−0.1). Derive the conditional MGF using the interval [−0.1,0.9] of length one. Optimize the bound for P(M₁₀₀≥10). Compare its exponent with the valid but weaker application of the absolute-jump bound cᵢ=1, and explain the source of the factor four.",
        "hints": [
          "The range-length Hoeffding estimate is exp(λ²(b−a)²/8).",
          "Minimize −10λ+100λ²/8, not −10λ+100λ²/2."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the optimizing positive λ for the range-length bound?",
          "expected": 0.4,
          "feedback": "The derivative of −10λ+12.5λ² is −10+25λ, so λ*=0.4. It yields e^{−2}, versus e^{−1/2} from cᵢ=1."
        },
        "solution": [
          "Each increment has conditional mean zero and range length one, giving E[e^{λDᵢ}|past]≤e^{λ²/8}.",
          "Tower iteration yields E[e^{λM₁₀₀}]≤e^{100λ²/8}.",
          "The optimized exponent is −10(0.4)+100(0.4)²/8=−2.",
          "Using only |Dᵢ|≤1 yields exponent −10²/(2·100)=−1/2. The improvement comes from preserving the actual interval length; it is not an independence correction."
        ],
        "rubric": [
          "Use the conditional interval correctly after centering.",
          "Optimize λ and give both exponents.",
          "Explain why an absolute bound loses information."
        ],
        "mistake": "The range length is one, but the absolute-jump theorem uses an interval of length two when c=1.",
        "followup": "Repeat for nonidentical Bernoulli biases and decide when the cᵢ=max(pᵢ,1−pᵢ) bound comes closest to the range-length bound."
      }
    ]
  },
  "core-chromatic": {
    "proof": {
      "goal": "Explain how a quantile, a Lipschitz deletion statistic, and a small-subgraph coloring lemma create a four-value chromatic window.",
      "scope": "For p=n^{−α} with fixed α>5/6. The small-subgraph three-colorability lemma is a separate proved input; the dense clique-packing argument is a different application in the assigned section.",
      "frames": [
        {
          "title": "Concentrate a repair statistic, not χ directly",
          "question": "Which statistic has an atom at zero at the chosen lower quantile?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 120,
                "y": 65,
                "label": [
                  "u: least integer",
                  "P(χ≤u)>ε"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 360,
                "y": 65,
                "label": [
                  "Y: minimum deleted",
                  "vertices for u colors"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 600,
                "y": 65,
                "label": [
                  "Y=0 iff χ≤u",
                  "positive atom >ε"
                ],
                "tone": "output"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n1",
                "label": "choose the target",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n1",
                "to": "n2",
                "label": "definition of Y",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "Changing one vertex block changes Y by at most one."
          },
          "claim": "Y is vertex-Lipschitz and P(Y=0)>ε.",
          "explanation": "If two graphs differ only on edges incident to one vertex, any deletion set for one can be enlarged by that vertex for the other. This proves sensitivity one. The quantile choice gives the atom that anchors the otherwise unknown mean.",
          "carry": "Azuma can compare the atom at zero to μ=E[Y]."
        },
        {
          "title": "Use the lower tail to locate the mean",
          "question": "Choose λ with e^{−λ²/2}=ε. What would μ>λ√(n−1) imply?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "P(Y≤μ−λ√(n−1))",
                "relation": "≤",
                "right": "ε",
                "reason": "lower Azuma tail"
              },
              {
                "left": "P(Y=0)",
                "relation": ">",
                "right": "ε",
                "reason": "definition of u"
              },
              {
                "left": "μ",
                "relation": "≤",
                "right": "λ√(n−1)",
                "reason": "otherwise the two facts conflict"
              }
            ],
            "focus": 2,
            "note": "The lower-tail event would contain the atom at zero."
          },
          "claim": "The mean repair size is at most λ√(n−1).",
          "explanation": "Since Y is nonnegative, a larger mean would put zero strictly inside the lower-tail threshold, forcing its probability to be at most ε. That contradicts the quantile atom. This is the missing mean estimate in a naive concentration proof.",
          "carry": "The upper tail now bounds a repair set of size O(√n)."
        },
        {
          "title": "Color the exceptional vertices separately",
          "question": "How does a deletion set of order √n become only three new colors?",
          "diagram": {
            "kind": "table",
            "columns": [
              "part",
              "coloring resource"
            ],
            "rows": [
              [
                "G−S",
                "u colors by definition"
              ],
              [
                "|S|≤2λ√(n−1)",
                "3 colors by structural lemma"
              ],
              [
                "whole graph",
                "disjoint palettes: u+3"
              ]
            ],
            "focus": [
              1,
              2
            ],
            "note": "Use a disjoint palette; edges crossing between the two parts then cause no conflict."
          },
          "claim": "With high probability χ(G)≤u+3.",
          "explanation": "The upper Azuma tail and the mean estimate make Y≤2λ√(n−1) except on a probability-ε event. The small-subgraph lemma simultaneously three-colors every set this small. Coloring the complement with u colors and S with a fresh palette proves the upper endpoint.",
          "carry": "The upper window endpoint depends on the sparse structural lemma, not on Azuma alone."
        },
        {
          "title": "Control the lower endpoint and all failure events",
          "question": "Why does minimality of u give the lower endpoint?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "P(χ<u)",
                "relation": "≤",
                "right": "ε",
                "reason": "u is the least quantile integer"
              },
              {
                "left": "P(Y>2λ√(n−1))",
                "relation": "≤",
                "right": "ε",
                "reason": "upper Azuma tail"
              },
              {
                "left": "P(u≤χ≤u+3)",
                "relation": "≥",
                "right": "1−2ε−ηₙ",
                "reason": "ηₙ: structural-lemma failure"
              }
            ],
            "focus": 2,
            "note": "For fixed ε and α>5/6, ηₙ→0; then let the error tolerance decrease."
          },
          "claim": "A four-integer interval captures arbitrarily high asymptotic probability.",
          "explanation": "The lower-quantile failure, excessive-repair failure, and structural-lemma failure are distinct. Their sum controls the whole argument. A generic O(√n) bound on χ around its mean would not by itself imply this constant-width window.",
          "carry": "Always state the sparsity range and the extra coloring lemma."
        }
      ]
    },
    "challenges": [
      {
        "id": "chromatic-extension-1",
        "title": "Optimize the packing alteration",
        "minutes": 12,
        "skill": "Sampling, overlapping-pair deletion, and an integer existence conclusion.",
        "connection": "The K₄ example motivates edge-disjoint triangle packing; now derive a useful lower bound instead of just counting triangles.",
        "prompt": "Let H be the disjoint union of two copies of K₄. Select each triangle independently with probability q. Compute the number of triangles and the number of unordered pairs sharing an edge. Delete one selected triangle from every overlapping pair. Derive and optimize a lower bound for the expected remaining packing, then extract an integer lower bound on the maximum packing size. Explain why every selected conflict costs at most one deletion even when conflicts overlap.",
        "hints": [
          "Each K₄ contributes four triangles and six conflicting unordered pairs.",
          "The alteration bound is 8q−12q²."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the optimized real-valued expectation lower bound?",
          "expected": 1.3333333333333333,
          "feedback": "The derivative of 8q−12q² vanishes at q=1/3, giving 8/3−12/9=4/3. An integer packing of size at least two must therefore exist."
        },
        "solution": [
          "There are eight triangles and twelve unordered overlapping pairs, with no cross-component conflicts.",
          "A chosen triangle survives unless deleted during conflict repair; processing each conflicting pair removes at most one triangle, so remaining count is at least selected triangles minus selected conflicts.",
          "Linearity gives expectation at least 8q−12q². Its maximum on [0,1] is 4/3 at q=1/3.",
          "Some integer packing therefore has size at least two. This matches the actual maximum: each K₄ contributes at most one edge-disjoint triangle."
        ],
        "rubric": [
          "Count unordered conflicts with the correct convention.",
          "Justify the alteration inequality despite overlapping conflicts.",
          "Optimize over a legal q and convert expectation to an integer existence result."
        ],
        "mistake": "Using the number of triangles as a Lipschitz statistic overlooks the much better stability of a maximum packing.",
        "followup": "For a general family with mean count μ and expected conflicting-pair count Δ/2, derive the truncated optimizer q=min(1,μ/Δ)."
      },
      {
        "id": "chromatic-extension-2",
        "title": "Reconstruct the quantile-to-window argument",
        "minutes": 12,
        "skill": "Using both concentration tails and a structural repair lemma.",
        "connection": "The finite packing example does not explain why a chromatic window has constant width; this task isolates the missing argument.",
        "prompt": "Suppose n=10001, u is the least integer with P(χ≤u)>e^{−2}, and Y is the deletion statistic from the proof. Assume the vertex-exposure Azuma bounds use n−1 steps, and the event that every set of at most 400 vertices is three-colorable fails with probability at most 0.01. Derive a lower bound on P(u≤χ≤u+3), showing the mean bound first. State why applying Azuma directly to χ would not establish the same conclusion.",
        "hints": [
          "Use λ=2, so λ√(n−1)=200.",
          "The two quantile/concentration failures each cost at most e^{−2}; keep the 0.01 structural failure separate."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What deletion-set size does the two-tail argument guarantee before invoking the structural lemma?",
          "expected": 400,
          "feedback": "The atom at zero forces E[Y]≤200. The upper tail then gives Y≤400 except with probability e^{−2}. Using 200 as the deletion budget forgets the second deviation."
        },
        "solution": [
          "Since P(Y=0)>e^{−2}, the lower tail at distance 2√10000=200 forces E[Y]≤200.",
          "The upper tail yields P(Y>400)≤e^{−2}.",
          "On the structural event, remove such an S, color the complement with u colors, and color S with three new colors.",
          "Minimality of u gives P(χ<u)≤e^{−2}. The final success probability is at least 1−2e^{−2}−0.01. A direct concentration window for χ has width O(√n), with no mechanism producing only three extra colors."
        ],
        "rubric": [
          "Derive the mean bound from the zero atom.",
          "Use disjoint palettes and the exact deletion budget.",
          "Account for all three failure sources."
        ],
        "mistake": "The lower-tail estimate locates a mean; it does not already give the high-probability upper bound on Y.",
        "followup": "For α=0.9, rederive the small-subgraph union-bound exponent 3α/2−5/4 and explain why it is positive."
      }
    ]
  },
  "core-gradation": {
    "proof": {
      "goal": "Track conditional query effects through an adaptive decision tree using a worst-path variance budget and an admissible MGF range.",
      "scope": "The refined small-parameter exponential estimate from §7.4 is an input. Its ε,δ-dependent deviation restriction is essential, not an optional technicality.",
      "frames": [
        {
          "title": "Adaptivity chooses the next independent coordinate",
          "question": "What distribution does an unqueried coordinate retain after previous responses?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 360,
                "y": 45,
                "label": [
                  "revealed responses",
                  "choose index i"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 150,
                "y": 150,
                "label": [
                  "Xi=0",
                  "probability 1−pᵢ"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 570,
                "y": 150,
                "label": [
                  "Xi=1",
                  "probability pᵢ"
                ],
                "tone": "output"
              },
              {
                "id": "n3",
                "x": 150,
                "y": 270,
                "label": [
                  "conditional mean m₀"
                ],
                "tone": "input"
              },
              {
                "id": "n4",
                "x": 570,
                "y": 270,
                "label": [
                  "conditional mean m₁"
                ],
                "tone": "active"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n1",
                "label": "next query",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n0",
                "to": "n2",
                "label": "next query",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n1",
                "to": "n3",
                "label": "completion average",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n2",
                "to": "n4",
                "label": "completion average",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "The chosen index depends on the past, but its fresh Bernoulli law does not."
          },
          "claim": "|m₁−m₀|≤cᵢ.",
          "explanation": "Couple the two completions using identical values for every other unqueried coordinate. The coordinate-effect hypothesis bounds their output difference pointwise by cᵢ, hence also bounds the difference of the conditional means.",
          "carry": "The martingale increment is a centered two-point variable."
        },
        {
          "title": "Use the biased variance cost",
          "question": "If d=m₁−m₀, what are the two centered jumps?",
          "diagram": {
            "kind": "table",
            "columns": [
              "response",
              "jump",
              "probability"
            ],
            "rows": [
              [
                "Xi=1",
                "(1−pᵢ)d",
                "pᵢ"
              ],
              [
                "Xi=0",
                "−pᵢd",
                "1−pᵢ"
              ]
            ],
            "focus": [
              0,
              1
            ],
            "note": "The conditional variance is pᵢ(1−pᵢ)d², at most the charged coordinate cost."
          },
          "claim": "E[D²|past]≤pᵢ(1−pᵢ)cᵢ².",
          "explanation": "The current mean is (1−pᵢ)m₀+pᵢm₁, so subtracting it gives the two jumps shown. This exact centering is why rare Yes/No outcomes can cost much less than an indiscriminate cᵢ².",
          "carry": "Charge this query its deterministic upper variance cost."
        },
        {
          "title": "Budget the entire possible line of questioning",
          "question": "Which budget survives adaptive branch choices?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "Σ queried pᵢ(1−pᵢ)cᵢ²",
                "relation": "≤",
                "right": "σ² on every root–leaf path",
                "reason": "decision-tree hypothesis"
              },
              {
                "left": "E exp(λ(Y−EY))",
                "relation": "≤",
                "right": "exp((1+ε)λ²σ²/2)",
                "reason": "small-parameter MGF iteration"
              }
            ],
            "focus": 1,
            "note": "The proof needs a bound on every possible path, not merely an average-cost estimate."
          },
          "claim": "Conditional iteration accumulates at most σ² along any path.",
          "explanation": "An induction from the leaves can bound every subtree using its remaining variance allowance. Since the budget holds pathwise, an adaptive choice cannot route the calculation through an unbudgeted expensive branch.",
          "carry": "The refined MGF estimate is available only for the allowed λC range."
        },
        {
          "title": "Keep the theorem’s admissible range visible",
          "question": "Which deviations can be optimized without leaving the one-step estimate?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "P(|Y−EY|>ασ)",
                "relation": "≤",
                "right": "2e^{−α²/(2(1+ε))}",
                "reason": "refined query theorem"
              },
              {
                "left": "αC",
                "relation": "<",
                "right": "σ(1+ε)δ",
                "reason": "required admissible range"
              }
            ],
            "focus": 1,
            "note": "C bounds the largest coordinate effect; δ depends on ε."
          },
          "claim": "Variance-sensitive concentration is a moderate-deviation statement here.",
          "explanation": "Optimizing the exponential parameter is legitimate only while every one-step estimate remains valid. A small σ² does not imply a Gaussian tail at arbitrarily large multiples of σ. Checking this range is part of using the theorem correctly.",
          "carry": "Both the worst-path budget and the deviation restriction must be verified in an application."
        }
      ]
    },
    "challenges": [
      {
        "id": "gradation-extension-1",
        "title": "An early-stopping algorithm still has a long branch",
        "minutes": 12,
        "skill": "Separating expected query cost from a pathwise variance allowance.",
        "connection": "The three-bit OR example stops early; increasing the length exposes the difference between typical and worst paths.",
        "prompt": "For 100 independent Bernoulli(0.01) bits, evaluate their OR by querying in order and stopping at the first one. Derive the worst-path variance budget, the expected accumulated variance cost, and the admissible deviation threshold t for the choice ε=δ=1,C=1 in the refined theorem. Explain why substituting the expected cost as σ² is not justified.",
        "hints": [
          "The all-zero response path queries every bit.",
          "P(query i)=(0.99)^{i−1}, so sum a geometric series for the expected cost."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the correct worst-path σ² for this strategy?",
          "expected": 0.99,
          "feedback": "Each query costs 0.01·0.99=0.0099, and the all-zero path uses all 100 queries. Thus σ²=0.99, even though the expected cost is 0.99(1−0.99¹⁰⁰), which is smaller."
        },
        "solution": [
          "The coordinate effect is one and each fresh query costs 0.0099. The all-zero branch therefore costs exactly 0.99.",
          "Expected total cost equals 0.0099Σ_{i=0}^{99}0.99^i=0.99(1−0.99¹⁰⁰).",
          "Writing t=ασ, the range αC<2σ becomes t<2σ²=1.98 for ε=δ=1 and C=1.",
          "The theorem’s premise quantifies over every path. A smaller average does not bound the cost of the long all-zero branch, so it cannot replace σ² in this argument."
        ],
        "rubric": [
          "Exhibit the worst branch.",
          "Compute the expected cost using query probabilities.",
          "Convert the α restriction into a restriction on the actual deviation t."
        ],
        "mistake": "Stopping early in expectation does not remove the possible path that reveals all bits.",
        "followup": "Design a different statistic and strategy for which adaptive querying genuinely lowers the worst-path budget relative to revealing every coordinate."
      },
      {
        "id": "gradation-extension-2",
        "title": "A rare Bernoulli variable refutes an all-scale Gaussian claim",
        "minutes": 12,
        "skill": "Testing a proposed theorem outside its permitted range.",
        "connection": "The OR example has rare successes, so a variance-sized denominator can tempt an unjustified all-deviation extrapolation.",
        "prompt": "Let Y be Bernoulli(0.01). A proposed extension asserts P(|Y−EY|>t)≤2exp(−t²/[2p(1−p)]) for every t>0 merely because the one-query variance is p(1−p). Test it at t=1/2. Compute the true probability, compare with the proposed bound, and explain which restriction in the assigned theorem prevents this contradiction.",
        "hints": [
          "Only Y=1 creates a deviation larger than 1/2.",
          "For ε=δ=1,C=1, legality requires t<2p(1−p)."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the true probability P(|Y−0.01|>1/2)?",
          "expected": 0.01,
          "feedback": "The event is exactly {Y=1}, so its probability is 0.01. The proposed Gaussian expression is about 6.57×10⁻⁶, falsely smaller than the true probability."
        },
        "solution": [
          "The two centered values are −0.01 and 0.99. At t=1/2, only the latter exceeds the threshold in absolute value.",
          "Thus the true probability is p=0.01.",
          "The proposed expression is 2exp(−0.25/0.0198), approximately 6.57×10⁻⁶, so the proposed all-scale bound fails.",
          "The assigned refined result requires t<2σ²/C=0.0198 for ε=δ=1. The test t=0.5 is far outside that range, so there is no contradiction with the actual theorem."
        ],
        "rubric": [
          "Compute the event under the two-point law.",
          "Compare probabilities numerically or by logarithms.",
          "Locate the exact violated admissibility condition."
        ],
        "mistake": "A second-moment scale can control local exponential behavior without controlling rare jumps at every scale.",
        "followup": "Find, as p→0, a deviation scale for which the proposed Gaussian exponent conflicts with the unavoidable event of probability p."
      }
    ]
  },
  "core-azuma-app": {
    "proof": {
      "goal": "Choose the actual independent exposure coordinates, prove the correct sensitivity, and connect concentration to the application.",
      "scope": "These frames develop the exposure mechanism and the distance-to-a-set deduction. The random-matching application additionally uses the admissible-range query theorem, not an unrestricted variance bound.",
      "frames": [
        {
          "title": "Changing one image can affect two bins",
          "question": "Why is the number of missing outputs still sensitivity one?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 360,
                "y": 45,
                "label": [
                  "move input image",
                  "a → b"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 150,
                "y": 155,
                "label": [
                  "bin a may become",
                  "empty: +1"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 570,
                "y": 155,
                "label": [
                  "bin b may become",
                  "occupied: −1"
                ],
                "tone": "output"
              },
              {
                "id": "n3",
                "x": 360,
                "y": 270,
                "label": [
                  "net change in",
                  "missing bins: ≤1"
                ],
                "tone": "input"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n1",
                "label": "remove one ball",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n0",
                "to": "n2",
                "label": "insert one ball",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n1",
                "to": "n3",
                "label": "opposite signs",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n2",
                "to": "n3",
                "label": "opposite signs",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "Two indicator changes have opposite signs, so their effects do not add to two."
          },
          "claim": "Changing one independent input image changes X by at most one.",
          "explanation": "Only the old and new output bins can change emptiness status. Losing the final preimage adds one missing bin; gaining the first preimage removes one. These changes cancel if both occur. A crude sum of two absolute changes would lose this structure.",
          "carry": "Expose input images, not the dependent empty-bin indicators."
        },
        {
          "title": "Compute the center before concentrating",
          "question": "Which quantities may be summed without independence?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "E[X]",
                "relation": "=",
                "right": "n(1−1/n)ⁿ",
                "reason": "sum empty-bin probabilities"
              },
              {
                "left": "Σ cᵢ²",
                "relation": "=",
                "right": "n",
                "reason": "n independent input images"
              },
              {
                "left": "P(|X−EX|≥t)",
                "relation": "≤",
                "right": "2e^{−t²/(2n)}",
                "reason": "exposure martingale"
              }
            ],
            "focus": 2,
            "note": "Linearity locates the mean; the independent-image coupling supplies the tail bound."
          },
          "claim": "The occupancy statistic has a valid image-exposure concentration bound.",
          "explanation": "The empty-bin indicators are dependent, but linearity does not require their independence. For the martingale, couple completions using all other input images identically, which transfers the sensitivity-one bound to each exposure increment.",
          "carry": "Do not confuse a convenient expectation decomposition with legal independent coordinates."
        },
        {
          "title": "Retain the factor two for signed vectors",
          "question": "How far can one complete sign replacement move a vector sum?",
          "diagram": {
            "kind": "table",
            "columns": [
              "sign replacement",
              "vector change",
              "norm bound"
            ],
            "rows": [
              [
                "εᵢ: +1 → −1",
                "−2vᵢ",
                "2‖vᵢ‖"
              ],
              [
                "norm statistic",
                "triangle inequality",
                "difference ≤2‖vᵢ‖"
              ]
            ],
            "focus": [
              0,
              1
            ],
            "note": "A sign replacement is not an addition of one copy of vᵢ."
          },
          "claim": "The norm statistic is 2‖vᵢ‖-Lipschitz in sign i.",
          "explanation": "For two coupled sums differing only at sign i, the reverse triangle inequality bounds their norm difference by the norm of their difference. That difference is exactly 2vᵢ up to sign. This gives an applicable bounded-differences estimate in any normed space.",
          "carry": "Exposure constants must reflect the whole replacement operation."
        },
        {
          "title": "An atom at distance zero locates the center",
          "question": "How can a set of known measure control the mean Hamming distance to it?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "P(D=0)",
                "relation": "≥",
                "right": "a",
                "reason": "D is distance to A"
              },
              {
                "left": "E[D]",
                "relation": "≤",
                "right": "√(2n ln(1/a))",
                "reason": "lower Azuma tail at zero"
              },
              {
                "left": "P(D>ED+s)",
                "relation": "≤",
                "right": "e^{−s²/(2n)}",
                "reason": "upper Azuma tail"
              }
            ],
            "focus": 1,
            "note": "D is one-Lipschitz in each independent cube coordinate."
          },
          "claim": "A known mass a of A yields an explicit radius for a high-probability neighborhood.",
          "explanation": "If the mean distance were too large, the lower concentration tail would make its atom at zero smaller than a. Once the mean is bounded, the upper tail controls the additional radius needed to cover most points.",
          "carry": "Use both tails; an unknown mean cannot simply be set to zero."
        }
      ]
    },
    "challenges": [
      {
        "id": "azuma-app-extension-1",
        "title": "Find the missing covariance in occupancy",
        "minutes": 12,
        "skill": "Exact second moments versus independent exposure coordinates.",
        "connection": "The four-image worked example computes the mean; now determine the variance without pretending its empty-bin indicators are independent.",
        "prompt": "Choose a uniform random function from four inputs to four outputs, and let X be the number of missing outputs. Derive E[X] and Var(X) by counting one-bin and two-bin emptiness. Then explain why a Doob martingale should expose input images rather than use the empty-bin indicators as independent trials. Prove the sensitivity-one bound with a coupling.",
        "hints": [
          "A fixed bin is empty with probability (3/4)⁴; a fixed pair is empty with probability (2/4)⁴.",
          "Expand X²=ΣIⱼ+2Σ_{j<k}IⱼIₖ."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the exact variance?",
          "expected": 0.413818359375,
          "feedback": "With a=81/256 and b=1/16, Var(X)=4a+12b−16a²=1695/4096. The covariance terms are negative and cannot be discarded."
        },
        "solution": [
          "For each bin, P(empty)=81/256, so E[X]=81/64.",
          "For distinct bins, joint emptiness has probability 1/16. Thus E[X²]=4·81/256+12·1/16.",
          "Subtracting (81/64)² gives Var(X)=1695/4096. This is not the variance of four independent Bernoulli indicators.",
          "Expose the four independent input images. Reassigning one image can empty its old bin and fill its new bin, with opposite contributions, so the total missing count changes by at most one."
        ],
        "rubric": [
          "Count joint emptiness and the ordered-pair factor correctly.",
          "Calculate an exact variance, including covariance.",
          "Give the sensitivity coupling and choose legal base coordinates."
        ],
        "mistake": "The indicators are useful for expectation and second moments but are not an independent product representation.",
        "followup": "Derive the general n-bin variance formula and identify its leading-order behavior."
      },
      {
        "id": "azuma-app-extension-2",
        "title": "Turn a mass bound into a neighborhood radius",
        "minutes": 12,
        "skill": "Quantile anchoring and two one-sided concentration estimates.",
        "connection": "The finite missing-image example fixes the center explicitly; distance-to-a-set applications must first bound an unknown center.",
        "prompt": "In the uniform 64-dimensional cube, let A have measure at least e^{−2}, and let D be Hamming distance to A. Using the absolute-increment Azuma convention with 64 increments bounded by one, derive a radius r such that P(D>r)≤e^{−8}. Show the mean-distance estimate, then add the upper-tail allowance. Explain why taking only the second allowance is invalid.",
        "hints": [
          "The atom D=0 has probability at least e^{−2}.",
          "Solve e^{−m²/(2·64)}=e^{−2}, then solve the upper-tail deviation for e^{−8}."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What radius follows from this two-tail argument?",
          "expected": 48,
          "feedback": "The lower tail forces E[D]≤16. An upper deviation of 32 costs e^{−32²/128}=e^{−8}; therefore radius 48 works. Radius 32 alone forgets the possible nonzero mean."
        },
        "solution": [
          "Changing one cube bit changes D by at most one, by applying the triangle inequality for Hamming distance.",
          "The zero atom and lower tail imply E[D]≤√(2·64·2)=16.",
          "The upper-tail allowance is √(2·64·8)=32.",
          "Thus P(D>48)≤e^{−8}. The radius is a proven bound from these estimates, not a claim that every such set needs radius 48."
        ],
        "rubric": [
          "Prove the Lipschitz property of D.",
          "Use the zero atom to locate the mean.",
          "Add, rather than substitute, the upper deviation."
        ],
        "mistake": "Concentration is around E[D], not around the nearest point of A.",
        "followup": "Repeat with a general mass a and error tolerance η, and compare the result with a coordinate subcube."
      }
    ]
  },
  "core-talagrand": {
    "proof": {
      "goal": "Link convex mismatch geometry to the projection/fiber induction, then extract the convex-distance tail.",
      "scope": "The supporting-hyperplane argument, Hölder step, and scalar optimization are displayed; this is a finite product-space proof mechanism, with all integration steps subject to the stated positive-mass conditions.",
      "frames": [
        {
          "title": "Average repair directions, not repair lengths",
          "question": "Why can three distinct one-coordinate repairs produce distance 1/√3?",
          "diagram": {
            "kind": "table",
            "columns": [
              "repair",
              "mismatch vector"
            ],
            "rows": [
              [
                "100",
                "(1,0,0)"
              ],
              [
                "010",
                "(0,1,0)"
              ],
              [
                "001",
                "(0,0,1)"
              ],
              [
                "uniform mixture",
                "(1/3,1/3,1/3)"
              ]
            ],
            "focus": [
              3
            ],
            "note": "For x=000, the mixture has squared norm 1/3 although every individual repair has norm one."
          },
          "claim": "dT(A,x)=min{‖v‖₂ : v lies in the convex mismatch hull}.",
          "explanation": "Let v minimize the hull norm. If v=0, handle that case directly. Otherwise the supporting hyperplane gives a nonnegative unit weight vector v/‖v‖ with every repair cost at least ‖v‖. Conversely, a convex mixture producing v bounds every unit-weight minimum by its scalar product with v, at most ‖v‖.",
          "carry": "The distance measures a convex compromise among repairs."
        },
        {
          "title": "Split projection and fiber repairs",
          "question": "What changes when a repair stays inside the current fiber?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 120,
                "y": 65,
                "label": [
                  "B: projected set",
                  "old coordinates"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 120,
                "y": 255,
                "label": [
                  "Aω: same last label",
                  "a fiber inside B"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 600,
                "y": 65,
                "label": [
                  "repair via B",
                  "last bit may change"
                ],
                "tone": "output"
              },
              {
                "id": "n3",
                "x": 600,
                "y": 255,
                "label": [
                  "repair via Aω",
                  "last bit unchanged"
                ],
                "tone": "input"
              },
              {
                "id": "n4",
                "x": 360,
                "y": 160,
                "label": [
                  "mix with weight λ",
                  "0≤λ≤1"
                ],
                "tone": "active"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n2",
                "label": "projection repair",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n1",
                "to": "n3",
                "label": "fiber repair",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n2",
                "to": "n4",
                "label": "weight 1−λ",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n3",
                "to": "n4",
                "label": "weight λ",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "Only the projected repair pays a last-coordinate mismatch."
          },
          "claim": "d² ≤ (1−λ)²+λdω²+(1−λ)dB².",
          "explanation": "Take a convex mixture of a repair from the fiber and one from the projection. Its last-coordinate mismatch is at most 1−λ, while convexity of squared norm bounds the old-coordinate part by the weighted squared distances.",
          "carry": "Hold λ fixed while integrating over the old coordinates."
        },
        {
          "title": "Apply Hölder before choosing the mixture",
          "question": "Where do the projection mass b and relative fiber mass r enter?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "b",
                "relation": "=",
                "right": "P(B)",
                "reason": "projection mass"
              },
              {
                "left": "r",
                "relation": "=",
                "right": "P(Aω)/b",
                "reason": "relative fiber mass"
              },
              {
                "left": "∫x e^{d²/4}",
                "relation": "≤",
                "right": "b⁻¹e^{(1−λ)²/4}r^{−λ}",
                "reason": "Hölder and induction"
              }
            ],
            "focus": 2,
            "note": "An x-dependent optimizer cannot be substituted into a fixed-exponent Hölder argument."
          },
          "claim": "The induction reduces to minimizing one scalar factor for each last-coordinate value.",
          "explanation": "With λ fixed, Hölder separates the two exponential distance terms. The lower-dimensional induction bounds their integrals using the projection and fiber masses. Only after this integration may λ be selected as a function of the fiber ratio r.",
          "carry": "Optimize e^{(1−λ)²/4}r^{−λ} on 0≤λ≤1."
        },
        {
          "title": "Optimize and average across fibers",
          "question": "Why does the scalar bound 2−r close the induction?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "λ*",
                "relation": "=",
                "right": "max(0,1+2 ln r)",
                "reason": "take λ=0 when r=0"
              },
              {
                "left": "e^{(1−λ*)²/4}r^{−λ*}",
                "relation": "≤",
                "right": "2−r",
                "reason": "one-variable inequality"
              },
              {
                "left": "∫ e^{d²/4}",
                "relation": "≤",
                "right": "a⁻¹s(2−s) ≤ a⁻¹",
                "reason": "a=P(A), s=a/b"
              }
            ],
            "focus": 2,
            "note": "The final inequality uses 0<s≤1 and s(2−s)≤1."
          },
          "claim": "P(A) E[e^{dT(A,X)²/4}]≤1.",
          "explanation": "For e^{−1/2}≤r≤1 put u=−ln r. The optimized factor is e^{u−u²}. The function log(2−e^{−u})−u+u² starts at zero and has derivative 2[u−(1−e^{−u})/(2−e^{−u})]≥0, since (1−e^{−u})/(2−e^{−u})≤u. Thus the factor is at most 2−r. For 0≤r≤e^{−1/2}, choose λ=0: e^{1/4}≤4/3≤2−r because r≤2/3. Averaging b⁻¹(2−r) gives b⁻¹(2−a/b)=a⁻¹s(2−s)≤a⁻¹.",
          "carry": "The exponential-integral theorem is now available for the full product."
        },
        {
          "title": "Convert the geometric integral into separation",
          "question": "What does a distance greater than t force in the exponential?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "P(dT(A,X)>t)",
                "relation": "≤",
                "right": "e^{−t²/4} E e^{dT²/4}",
                "reason": "Markov"
              },
              {
                "left": "P(A)P(dT(A,X)>t)",
                "relation": "≤",
                "right": "e^{−t²/4}",
                "reason": "insert the integral bound"
              }
            ],
            "focus": 1,
            "note": "The product of event probabilities is controlled without counting ambient coordinates."
          },
          "claim": "A set of positive mass has a convex-distance neighborhood with an exponentially small outside tail.",
          "explanation": "The exponential is nonnegative and increasing in squared distance, so Markov applies directly. The dimension-free form comes from the convex mismatch geometry and product induction, not from replacing Hamming distance by its square root.",
          "carry": "Applications must show geometric separation in this particular distance."
        }
      ]
    },
    "challenges": [
      {
        "id": "talagrand-extension-1",
        "title": "Choose the mixture at the legal stage",
        "minutes": 12,
        "skill": "Calculus inside the fiber induction and the order of quantifiers.",
        "connection": "The three-repair example explains convex mixing; now optimize the mixture needed in the actual product-space proof.",
        "prompt": "In the fiber induction, let r=P(Aω)/P(B), and consider Fᵣ(λ)=exp((1−λ)²/4)r^{−λ} for 0≤λ≤1. Derive its minimizing λ, including the boundary case. Evaluate the minimum for r=e^{−1/4}, and compare the optimizer for r=e^{−1}. Explain why choosing λ separately for every old-coordinate point before Hölder would not justify the displayed integral bound.",
        "hints": [
          "Differentiate log Fᵣ, not Fᵣ itself.",
          "The stationary value is 1+2 ln r, then clip it to [0,1]."
        ],
        "probe": {
          "kind": "number",
          "prompt": "For r=e^{−1/4}, what is the minimum scalar factor?",
          "expected": 1.2062302494209807,
          "feedback": "The minimizer is λ=1/2. Its log factor is (1/2)²/4+(1/2)(1/4)=1/16+1/8=3/16, so the minimum is e^{3/16}."
        },
        "solution": [
          "The log derivative is (λ−1)/2−ln r, giving stationary point λ=1+2ln r. Convexity of the log makes it a minimum when feasible.",
          "For r=e^{−1/4}, λ=1/2 and the minimum is e^{3/16}.",
          "For r=e^{−1}, the stationary point is −1, outside the interval; the minimizing λ is zero and the factor is e^{1/4}.",
          "Hölder uses fixed exponents for the integration in x. One may optimize after that integration using r(ω), but an x-varying λ would require a separate argument and cannot be silently inserted."
        ],
        "rubric": [
          "Derive and constrain the stationary point.",
          "Compute both interior and endpoint cases.",
          "Explain the legal order of optimization and integration."
        ],
        "mistake": "The unconstrained stationary formula is not a valid mixing weight when r is small.",
        "followup": "Prove the scalar inequality min Fᵣ≤2−r separately on the interior and boundary regimes."
      },
      {
        "id": "talagrand-extension-2",
        "title": "Many-coordinate repairs can still have small convex distance",
        "minutes": 12,
        "skill": "An exact convex-hull optimization beyond the singleton example.",
        "connection": "The worked example mixes three one-coordinate repairs. Requiring several repairs simultaneously tests whether the geometry is understood.",
        "prompt": "Let x=0¹² and A be all binary strings of Hamming weight at least three. Compute dT(A,x) exactly by giving both a lower bound valid for every convex mixture and a mixture attaining it. Generalize to n coordinates and threshold r. Compare this result with the minimum Hamming distance, and explain why minimizing the norm of a repair is the wrong operation.",
        "hints": [
          "Every mismatch vector has coordinate sum at least r.",
          "Mix uniformly over all r-subsets to make every coordinate of the average equal to r/n."
        ],
        "probe": {
          "kind": "number",
          "prompt": "For n=12,r=3, what is dT(A,x)²?",
          "expected": 0.75,
          "feedback": "Every hull point has sum at least three, so Cauchy–Schwarz gives squared norm at least 9/12. The uniform mixture of all three-subsets has all coordinates 1/4 and attains 12/16=3/4."
        },
        "solution": [
          "Every point in the convex mismatch hull has nonnegative coordinates with total at least r.",
          "Cauchy–Schwarz yields ‖v‖²≥(Σvᵢ)²/n≥r²/n.",
          "Uniformly averaging the indicator vectors of all r-subsets produces v=(r/n,…,r/n), attaining that bound.",
          "Therefore dT=r/√n; for 12 and 3 its square is 3/4. The nearest individual repair has Hamming distance r and Euclidean mismatch norm √r, a different minimization."
        ],
        "rubric": [
          "Prove a lower bound for every convex mixture.",
          "Construct an attaining mixture and compute its coordinates.",
          "Distinguish Hamming distance, individual-vector norm, and hull norm."
        ],
        "mistake": "A convex hull can contain vectors shorter than every original mismatch vector.",
        "followup": "Let coordinate costs differ; solve the analogous minimum-norm problem for a specified nonuniform family of r-subsets."
      }
    ]
  },
  "core-certificate": {
    "proof": {
      "goal": "Use a small certificate at a high outcome to separate it from a low-value event in Talagrand distance.",
      "scope": "Talagrand’s convex-distance inequality is the established input. This deduction requires a product space, a valid coordinate Lipschitz bound, and a certificate for every high outcome.",
      "frames": [
        {
          "title": "Fix the high point before choosing its witness",
          "question": "Which coordinates must all completions preserve?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 120,
                "y": 65,
                "label": [
                  "high outcome y",
                  "X(y)≥b"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 360,
                "y": 65,
                "label": [
                  "certificate I(y)",
                  "size ≤f(b)"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 600,
                "y": 65,
                "label": [
                  "all completions",
                  "agree on I(y): X≥b"
                ],
                "tone": "output"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n1",
                "label": "choose a witness",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n1",
                "to": "n2",
                "label": "certificate rule",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "The certificate may depend on y; it need not be chosen uniformly in advance."
          },
          "claim": "A high-value point supplies a set I with |I|≤f(b).",
          "explanation": "For a matching, reveal the b disjoint present edges of one witness. Every completion containing those edges still has matching size at least b. The rest of the graph is irrelevant to this lower-bound certificate.",
          "carry": "Place the distance weights on this point-specific set I."
        },
        {
          "title": "Concentrate all weight on the certificate",
          "question": "What weighted mismatch cost corresponds to h changed certificate bits?",
          "diagram": {
            "kind": "table",
            "columns": [
              "coordinate",
              "weight",
              "contribution"
            ],
            "rows": [
              [
                "i∈I",
                "1/√|I|",
                "one mismatch: 1/√|I|"
              ],
              [
                "i∉I",
                "0",
                "ignored"
              ],
              [
                "h mismatches in I",
                "h/√|I|",
                "all other bits arbitrary"
              ]
            ],
            "focus": [
              0,
              2
            ],
            "note": "These nonnegative weights have Euclidean norm one."
          },
          "claim": "Distance less than t would permit at most t√|I| certificate disagreements.",
          "explanation": "The convex-distance definition allows a different unit cost vector for each high point. Equal costs on I translate weighted closeness into a bound on the number of witness coordinates that would need repair.",
          "carry": "Repairing only I will create a point that still certifies X≥b."
        },
        {
          "title": "Repair the low point and use Lipschitzness",
          "question": "Why can a sufficiently low point not be close in these weights?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "X(z′)",
                "relation": "≥",
                "right": "b",
                "reason": "z′ agrees with y on I"
              },
              {
                "left": "X(z)",
                "relation": "≥",
                "right": "b−h",
                "reason": "h one-coordinate repairs"
              },
              {
                "left": "h",
                "relation": "≤",
                "right": "t√f(b)",
                "reason": "distance and certificate size"
              }
            ],
            "focus": 1,
            "note": "A low point with X(z)<b−t√f(b) contradicts these three rows."
          },
          "claim": "Every high point lies outside the t-neighborhood of the low event.",
          "explanation": "Construct z′ by changing only the disagreements with y inside I; leave all other coordinates as in z. Certification forces X(z′)≥b. One-Lipschitzness says these h changes can raise X by at most h, contradicting the low-event threshold.",
          "carry": "The proof has established geometric separation, not merely a small witness count."
        },
        {
          "title": "Apply Talagrand with the right event probability",
          "question": "What can be divided out only when a high-event probability is known?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "P(X≤b−t√f(b)) P(X≥b)",
                "relation": "≤",
                "right": "e^{−t²/4}",
                "reason": "Talagrand separation"
              },
              {
                "left": "P(X≤b−t√f(b))",
                "relation": "≤",
                "right": "e^{−t²/4}/a",
                "reason": "if P(X≥b)≥a>0"
              }
            ],
            "focus": 1,
            "note": "Without a lower bound a, the product bound is the justified conclusion."
          },
          "claim": "Certificates improve the fluctuation scale from ambient dimension to f(b).",
          "explanation": "The low event is A, and every high outcome is outside its convex-distance neighborhood. Talagrand bounds the product of their probabilities. A median or another quantile supplies a useful a; the mean cannot be substituted without further work. For the displayed non-strict threshold, apply separation at parameters increasing to t from below and take the limit.",
          "carry": "Keep the Lipschitz constant, certificate size, and reference quantile explicit."
        }
      ]
    },
    "challenges": [
      {
        "id": "certificate-extension-1",
        "title": "The Lipschitz constant must survive the geometric argument",
        "minutes": 12,
        "skill": "Rescaling a certificate concentration deduction.",
        "connection": "The matching example has sensitivity one. This task checks the proof when a certificate is equally small but a coordinate can have twice the effect.",
        "prompt": "Let X be 2-Lipschitz on a product space and f-certifiable with f(100)=100. Assume P(X≥100)≥1/2. Rework the repair argument to bound P(X≤60). Derive the convex-distance separation parameter rather than replacing c=1 at the last line, and state whether the resulting numerical bound is automatically useful.",
        "hints": [
          "Repairing h witness coordinates can now change X by at most 2h.",
          "A deficit d requires distance at least d/(c√f(b))."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What upper bound follows for P(X≤60)?",
          "expected": 0.7357588823428847,
          "feedback": "The deficit is 40 and c√f=2·10=20, so the distance parameter is t=2. Talagrand gives a product at most e^{-1}; dividing by the high-event probability 1/2 gives 2/e."
        },
        "solution": [
          "A low point repaired on h witness coordinates can rise by at most 2h, so a forty-unit deficit requires at least twenty repairs.",
          "With equal witness weights, the separating distance parameter is 20/√100=2.",
          "Talagrand bounds P(X≤60)P(X≥100) by e^{−2²/4}=e^{−1}.",
          "The probability assumption permits division, yielding 2/e<1. For a smaller deficit the same method might give a bound above one, which must be treated as vacuous."
        ],
        "rubric": [
          "Carry c through the repair contradiction.",
          "Compute the distance parameter before applying the theorem.",
          "Divide by a justified high-event lower bound."
        ],
        "mistake": "Small certificates do not cancel a larger coordinate effect; the exponent loses a factor c².",
        "followup": "Derive the formula for general c,b,d,f(b), and identify when its divided probability bound falls below one."
      },
      {
        "id": "certificate-extension-2",
        "title": "The same graph statistic has different certificate scales",
        "minutes": 12,
        "skill": "Choosing independent blocks that reveal the most efficient witness.",
        "connection": "The matching example certifies by present edges. Clique number illustrates how the exposure model changes both the witness and the concentration scale.",
        "prompt": "In G(n,p), expose for each vertex j the independent block of edges {ij:i<j}. Prove clique number is one-Lipschitz under replacing one block. For a high point containing a b-clique, show that b−1 complete blocks certify it. Compare this with revealing C(b,2) individual edges. If b=25 and P(ω≥25)≥1/2, derive the block-certificate bound on P(ω≤5).",
        "hints": [
          "Changing block j changes only edges incident to vertex j; remove j from any affected clique.",
          "All edges of a fixed clique belong to the blocks of its vertices except its least-indexed vertex."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What upper bound follows from the block certificate?",
          "expected": 0.031007707198018628,
          "feedback": "The block certificate has size 24. A deficit of 20 gives exponent 20²/(4·24)=25/6, so the lower-tail probability is at most 2e^{−25/6}."
        },
        "solution": [
          "Replacing one block changes only edges incident to j. Removing j from a clique leaves a clique in the other graph, proving sensitivity one in both directions.",
          "For a chosen b-clique, pin the b−1 blocks belonging to its vertices other than the least-indexed one. They fix every edge of that clique.",
          "Thus f(b)=b−1 is a valid block certificate, instead of C(b,2) single-edge coordinates. Each representation is a product space, but the certificate sizes differ.",
          "Apply the deduction with b=25,d=20,f=24 and high-event mass at least 1/2 to obtain 2e^{−25/6}."
        ],
        "rubric": [
          "Prove the block sensitivity rather than count changed edges.",
          "Identify exactly which blocks certify the chosen clique.",
          "Compare the two legal coordinate representations quantitatively."
        ],
        "mistake": "Counting all changed edges inside a vertex block misses the remove-one-vertex coupling.",
        "followup": "Determine whether any smaller fixed collection of whole blocks can certify a specified clique when unexposed edges remain arbitrary."
      }
    ]
  },
  "core-kim-vu": {
    "proof": {
      "goal": "Compute the derivative parameters of a nonnegative random polynomial and verify whether the stated Kim–Vu concentration bound is useful.",
      "scope": "The general Kim–Vu theorem is a deep input whose proof is omitted in the assigned text. These frames fully develop the application logic and do not claim to prove that theorem.",
      "frames": [
        {
          "title": "Use edge indicators as polynomial variables",
          "question": "Why is graph dependence compatible with independent base inputs?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 120,
                "y": 65,
                "label": [
                  "independent edges",
                  "tₑ∈{0,1}"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 360,
                "y": 65,
                "label": [
                  "triangle abc",
                  "t_ab t_ac t_bc"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 600,
                "y": 65,
                "label": [
                  "X=Σ triangles",
                  "degree 3 polynomial"
                ],
                "tone": "output"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n1",
                "label": "monomial inputs",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n1",
                "to": "n2",
                "label": "nonnegative sum",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "Triangles may overlap; only their underlying edge indicators are required independent."
          },
          "claim": "X is a multilinear degree-three polynomial with nonnegative coefficients.",
          "explanation": "The random events “these triangles occur” are dependent, but the theorem works on the independent edge variables. Its derivative parameters measure exactly how a common subset of those inputs can influence many monomials.",
          "carry": "Compute all derivative orders rather than just the mean."
        },
        {
          "title": "Differentiate every possible overlap pattern",
          "question": "Which derivative expectation remains one even when p is tiny?",
          "diagram": {
            "kind": "table",
            "columns": [
              "forced edges",
              "largest derivative mean"
            ],
            "rows": [
              [
                "none",
                "C(n,3)p³"
              ],
              [
                "one edge",
                "(n−2)p²"
              ],
              [
                "two adjacent edges",
                "p"
              ],
              [
                "three forming a triangle",
                "1"
              ]
            ],
            "focus": [
              3
            ],
            "note": "A full monomial derivative is the constant one."
          },
          "claim": "E′=max((n−2)p²,p,1) and E=max(E[X],E′).",
          "explanation": "One forced edge leaves n−2 choices for the third vertex. Two adjacent forced edges leave one required edge. Forcing all three edges of a triangle leaves no randomness at all, so its derivative is one; sparse p cannot make E′ vanish.",
          "carry": "The controlling scale is the maximum across orders."
        },
        {
          "title": "Insert the actual number of base variables",
          "question": "Which n appears in the theorem’s polynomial prefactor?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "N",
                "relation": "=",
                "right": "C(n,2)",
                "reason": "number of edge variables"
              },
              {
                "left": "P(|X−μ|>a₃√(EE′)λ³)",
                "relation": "<",
                "right": "2e² e^{−λ}N²",
                "reason": "Kim–Vu with degree 3"
              }
            ],
            "focus": 1,
            "note": "N is not the number of graph vertices."
          },
          "claim": "The deviation scale and the failure probability must be optimized together.",
          "explanation": "The theorem’s polynomial prefactor counts independent variables, which are edges here. Choosing λ as a large enough multiple of ln n suppresses N², but also inflates the allowed deviation by λ³. Both effects belong in a useful concentration conclusion.",
          "carry": "A small failure probability is irrelevant if the deviation exceeds the mean."
        },
        {
          "title": "Check the relative error, not just the theorem’s legality",
          "question": "What ratio must tend to zero for relative concentration?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "relative deviation",
                "relation": "=",
                "right": "a₃λ³√(EE′)/μ",
                "reason": "divide the threshold by μ"
              },
              {
                "left": "relative deviation",
                "relation": "=",
                "right": "a₃λ³√(E′/μ)",
                "reason": "when E=μ"
              }
            ],
            "focus": 1,
            "note": "The theorem can be valid yet quantitatively vacuous for a sparse statistic."
          },
          "claim": "Relative concentration requires λ³√(E′/μ)→0 in this degree-three application.",
          "explanation": "After identifying the correct regime for E, compare the permitted deviation with μ. Taking λ≈ln n often costs a polylogarithmic factor. A large derivative mean signals a shared-input bottleneck rather than a technical nuisance to be omitted.",
          "carry": "Inspect overlap structure before declaring a random count concentrated."
        }
      ]
    },
    "challenges": [
      {
        "id": "kim-vu-extension-1",
        "title": "A graph has n vertices but Θ(n²) variables",
        "minutes": 12,
        "skill": "Parameter scaling and simultaneous control of threshold and failure rate.",
        "connection": "The five-vertex calculation lists derivative values. This asymptotic perturbation tests which values dominate and how the theorem is actually applied.",
        "prompt": "Let X count triangles in G(n,n^{−3/4}). Derive μ,E₁,E₂,E₃ and identify E,E′ for large n. Apply the degree-three Kim–Vu theorem with λ=C ln n. Find the least integer C for which its displayed upper bound on failure is O(n^{−2}), remembering that the theorem counts edge variables. Then determine whether its allowed relative deviation tends to zero.",
        "hints": [
          "The prefactor is N² with N=C(n,2), hence order n⁴.",
          "The mean has order n^{3/4}, while the highest-order derivative remains one."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the least integer C giving O(n^{−2}) from the displayed failure bound?",
          "expected": 6,
          "feedback": "The failure bound has order n⁴e^{−C ln n}=n^{4−C}; C=6 gives O(n^{−2}). Treating graph vertices as the independent variables would incorrectly suggest C=4."
        },
        "solution": [
          "The mean is C(n,3)n^{−9/4}=Θ(n^{3/4}). E₁=(n−2)n^{−3/2}=Θ(n^{−1/2}), E₂=n^{−3/4}, and E₃=1.",
          "Consequently E′=1 and E=μ for large n.",
          "There are N=C(n,2)=Θ(n²) independent edge variables. The degree-three prefactor N² is Θ(n⁴), so C=6 is the least integer for O(n^{−2}).",
          "The relative threshold is O((ln n)³/√μ)=O((ln n)³n^{−3/8}), which tends to zero. Thus this application yields meaningful relative concentration."
        ],
        "rubric": [
          "Compute all derivative orders.",
          "Use the edge-variable count in the prefactor.",
          "Check that the threshold is o(μ), not merely that the failure tends to zero."
        ],
        "mistake": "Forgetting E₃=1 or using n instead of N corrupts two different parts of the argument.",
        "followup": "Repeat for p=n^{−α} and locate every change in the dominant derivative scale."
      },
      {
        "id": "kim-vu-extension-2",
        "title": "One common variable can prevent concentration",
        "minutes": 12,
        "skill": "Detecting a derivative bottleneck through an exact law.",
        "connection": "Overlapping triangles share edge indicators. This simpler nonnegative polynomial isolates the effect of a single shared input.",
        "prompt": "Let Z₁,…,Z₉ be independent fair bits and Y=Z₁(Z₂+⋯+Z₉). Compute E[Y], Var(Y), the largest first- and second-order derivative expectations, and the probability Y=0. Explain why a theorem whose scale involves √(EE′) should not give vanishing relative error here, despite Y being a sum of eight nonnegative degree-two monomials.",
        "hints": [
          "Condition first on the common switch Z₁.",
          "The derivative with respect to Z₁ is the entire remaining sum."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is Var(Y)?",
          "expected": 5,
          "feedback": "If W∼Bin(8,1/2), then Y=Z₁W, E[Y]=2 and E[Y²]=(1/2)(Var(W)+(EW)²)=9. Hence Var(Y)=9−4=5."
        },
        "solution": [
          "Conditioning on Z₁ gives Y=0 with probability at least 1/2, while Y|Z₁=1 is Bin(8,1/2).",
          "Thus E[Y]=2 and E[Y²]=(1/2)(2+16)=9, giving variance five. In fact P(Y=0)=1/2+1/512.",
          "The largest first derivative mean is E[Z₂+⋯+Z₉]=4, and a derivative in {1,j} is one. Hence E′=4 and E=4.",
          "In the version with m variables, μ and E′ are both Θ(m), so √(EE′) is Θ(m). The scale cannot be o(μ), consistent with the persistent zero atom."
        ],
        "rubric": [
          "Derive an exact second moment by conditioning.",
          "Locate the common-variable derivative rather than average derivative sizes.",
          "Relate the nonvanishing relative scale to a concrete failure event."
        ],
        "mistake": "Many summands do not ensure concentration when all share one random switch.",
        "followup": "For Y=(Z₁+Z₂)(Z₃+⋯+Z_m), determine which derivatives and conditional atoms control the scale."
      }
    ]
  },
  "core-shannon": {
    "proof": {
      "goal": "Separate channel atypicality from random-code confusion, then extract a fixed code under the intended error convention.",
      "scope": "This is the achievability and random-linear-code mechanism. It does not supply an efficient decoder or identify average and maximum message error without an extra argument.",
      "frames": [
        {
          "title": "Budget the noise event first",
          "question": "Why choose a radius qn with p<q<1/2 rather than the exact mean pn?",
          "diagram": {
            "kind": "table",
            "columns": [
              "noise event",
              "reason"
            ],
            "rows": [
              [
                "weight ≤qn",
                "typical radius with slack"
              ],
              [
                "weight >qn",
                "probability →0"
              ],
              [
                "q<1/2",
                "lower-half ball estimate"
              ]
            ],
            "focus": [
              0,
              2
            ],
            "note": "Slack separates the channel tail from the coding collision calculation."
          },
          "claim": "For a BSC(p), atypical noise beyond qn has vanishing probability.",
          "explanation": "Independent channel flips concentrate below any fixed qn with q>p. The restriction q<1/2 is also needed for the standard entropy upper bound on Hamming-ball volume. These are separate reasons to choose q carefully.",
          "carry": "Now condition on a typical received word and bound code confusion."
        },
        {
          "title": "Charge each possible competitor a ball volume",
          "question": "What law makes one independent random competitor land in the decoding ball?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "V(n,qn)",
                "relation": "≤",
                "right": "2^{nH₂(q)}",
                "reason": "q≤1/2"
              },
              {
                "left": "P(one competitor confuses)",
                "relation": "≤",
                "right": "V(n,qn)/2ⁿ",
                "reason": "uniform random competitor"
              },
              {
                "left": "P(any competitor confuses)",
                "relation": "≤",
                "right": "2^{k−n(1−H₂(q))}",
                "reason": "union bound over messages"
              }
            ],
            "focus": 2,
            "note": "Competitor independence is not required by the union bound."
          },
          "claim": "The confusion contribution vanishes if k/n<1−H₂(q).",
          "explanation": "For a uniformly selected competitor, any fixed ball occupies at most the displayed fraction of the cube. Summing this probability over competitors controls their union even when competitor events are dependent.",
          "carry": "Combine this with the channel-tail contribution before fixing a code."
        },
        {
          "title": "Average over codes, then fix one",
          "question": "What performance guarantee is inherited by at least one fixed code?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 120,
                "y": 65,
                "label": [
                  "random code ensemble",
                  "average channel error"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 360,
                "y": 65,
                "label": [
                  "noise failure",
                  "plus confusion failure"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 600,
                "y": 65,
                "label": [
                  "some fixed code",
                  "error ≤ ensemble mean"
                ],
                "tone": "output"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n1",
                "label": "two failure modes",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n1",
                "to": "n2",
                "label": "averaging argument",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "The averaging convention includes the transmitted-message law unless symmetry removes it."
          },
          "claim": "An ensemble error bound proves existence of a fixed code with that average error.",
          "explanation": "If every fixed code had error larger than the ensemble average, averaging could not produce the stated mean. This existence step is elementary but does not automatically guarantee small error for every message or an efficient coding algorithm.",
          "carry": "Maximum error requires symmetry or a separate expurgation step."
        },
        {
          "title": "For linear codes, work with differences",
          "question": "How can dependent codewords still allow the same union bound?",
          "diagram": {
            "kind": "table",
            "columns": [
              "nonzero message v",
              "random generator effect"
            ],
            "rows": [
              [
                "Gv",
                "uniform on {0,1}ⁿ"
              ],
              [
                "different v values",
                "may be dependent"
              ],
              [
                "decoded difference",
                "compare Gv with noise"
              ]
            ],
            "focus": [
              0,
              2
            ],
            "note": "Shift by the transmitted codeword before averaging the random generator."
          },
          "claim": "A random linear generator permits the per-difference bound without independent codewords.",
          "explanation": "Over F₂, every fixed nonzero message difference maps to a uniform vector when the generator entries are independent fair bits. Linearity shifts the decoding question to the noise around zero. Union bounding these differences avoids an unjustified claim of independent codewords.",
          "carry": "Always specify what is conditioned on and which error convention is proved."
        }
      ]
    },
    "challenges": [
      {
        "id": "shannon-extension-1",
        "title": "Dependent linear codewords still suffice",
        "minutes": 12,
        "skill": "Difference-based random coding and a correct entropy exponent.",
        "connection": "The repetition-code example analyzes one fixed code. This challenge reconstructs the random-linear-code argument without assuming its codewords are independent.",
        "prompt": "Take a uniformly random binary linear generator mapping 250-bit messages to length 1000. Use typical-noise radius 0.2n for a BSC(0.1). Show why each nonzero message difference has a uniform image, derive a union bound on confusion using V(n,0.2n)≤2^{nH₂(0.2)}, and explain why one should shift the received word by the transmitted codeword before this calculation. Separate rank-deficient generators and atypical channel noise from any unsupported efficiency claim.",
        "hints": [
          "For fixed v≠0, each row dot v is an independent fair bit.",
          "Linearity compares every rival to the transmitted message through Gv; the rivals need not be independent."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What positive exponent E gives the confusion bound at most 2^{−E}?",
          "expected": 28.071905112637694,
          "feedback": "The exponent is 1000(1−H₂(0.2))−250≈28.0719051. The message-difference union bound handles dependence; atypical channel noise is a separate term."
        },
        "solution": [
          "For each fixed nonzero v, a random generator maps v uniformly into the n-bit cube. This does not make all Gv jointly independent.",
          "By linearity, subtracting the transmitted codeword leaves the channel noise, and every rival corresponds to a nonzero difference v.",
          "For each v, the probability over G that Gv lies within the relevant radius of the noise is at most V/2ⁿ. Union bounding fewer than 2^{250} differences gives 2^{250−1000(1−H₂(0.2))}.",
          "The exponent is about 28.0719051. A zero image of a nonzero difference is already a possible collision; one may separately bound rank failure if a full-rank code is required. Neither calculation supplies an efficient decoder."
        ],
        "rubric": [
          "Justify uniformity for fixed nonzero differences.",
          "Use a union bound without asserting joint codeword independence.",
          "State the noise, rank, and computational limitations separately."
        ],
        "mistake": "Conditioning on arbitrary transmitted codeword information can change distributions; the difference formulation avoids that unnecessary conditioning.",
        "followup": "Derive the ensemble rank-failure bound and compare its exponent with the confusion exponent here."
      },
      {
        "id": "shannon-extension-2",
        "title": "Average error does not yet mean maximum error",
        "minutes": 12,
        "skill": "Expurgation with an explicit rate cost.",
        "connection": "The worked example has message symmetry. A general existence argument may only control the average over messages.",
        "prompt": "A fixed code has 1024 codewords and average message error at most 1/64 under a specified decoder. Delete every message whose error is at least 1/8. Prove a lower bound on the number retained and a maximum-error guarantee for the retained code, adjusting the decoder without increasing any retained message error. Express the finite rate loss and explain why this is different from asserting that the original maximum error was small.",
        "hints": [
          "Apply Markov to the error value of a uniformly chosen message.",
          "A received word decoded as a deleted message can be reassigned without removing any previously correct retained decoding."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What retained-code size is guaranteed by this expurgation bound?",
          "expected": 896,
          "feedback": "At most 1024·(1/64)/(1/8)=128 messages have error at least 1/8. At least 896 remain, each with error strictly below 1/8 under the original decoder."
        },
        "solution": [
          "Let e_m be each message error. Their sum is at most 1024/64=16.",
          "Every deleted message contributes at least 1/8, so at most 128 messages are deleted and at least 896 remain.",
          "Retained messages have error below 1/8. Preserve every decoding decision to a retained message; reassign other outputs arbitrarily among retained messages, which cannot spoil any previously correct retained outcome.",
          "The rate decreases from log₂(1024)/n to at least log₂(896)/n, a loss at most log₂(1024/896)/n. No such maximum-error claim was established for the original code."
        ],
        "rubric": [
          "Use the correct error threshold and inequality direction.",
          "Justify decoder adjustment for the subcode.",
          "State the retained size and explicit rate loss."
        ],
        "mistake": "A small average allows a minority of very bad messages; it is not already a maximum-error bound.",
        "followup": "For average error ε and retained maximum threshold τ, optimize the retained fraction and rate penalty as functions of τ."
      }
    ]
  },
  "core-liar": {
    "proof": {
      "goal": "Construct Carole’s nondecreasing weight strategy and explain why the weight condition is only one direction.",
      "scope": "The binomial survival potential applies to fair hypothetical responses. A low starting weight does not itself construct Paul’s splitting strategy.",
      "frames": [
        {
          "title": "Interpret the binomial weight before using it",
          "question": "What does one chip at remaining lie allowance i survive?",
          "diagram": {
            "kind": "table",
            "columns": [
              "remaining queries",
              "allowed lies",
              "survival probability"
            ],
            "rows": [
              [
                "q",
                "i",
                "B(q,i)=2⁻qΣⱼ≤i C(q,j)"
              ],
              [
                "0",
                "i≥0",
                "1"
              ]
            ],
            "focus": [
              1
            ],
            "note": "The terminal value counts surviving candidates, not a probability of Paul winning."
          },
          "claim": "W=ΣxᵢB(q,i) is the expected terminal survivor count under fair responses.",
          "explanation": "Against any adaptive Paul strategy, a fixed candidate is contradicted by a fresh fair reported answer with conditional probability one half. Its lie count therefore follows the needed binomial law, and linearity adds candidate survival probabilities without independence between candidates.",
          "carry": "The potential has an exact successor averaging identity."
        },
        {
          "title": "Compare the two possible answers to a question",
          "question": "Why does every question give a response with successor weight at least W?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 360,
                "y": 55,
                "label": [
                  "current position",
                  "weight W"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 160,
                "y": 250,
                "label": [
                  "reported Yes",
                  "weight Wᵧ"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 560,
                "y": 250,
                "label": [
                  "reported No",
                  "weight Wₙ"
                ],
                "tone": "output"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n1",
                "label": "one successor",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n0",
                "to": "n2",
                "label": "other successor",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "The two successor values satisfy W=(Wᵧ+Wₙ)/2."
          },
          "claim": "max(Wᵧ,Wₙ)≥W.",
          "explanation": "The binomial recurrence B(q,i)=[B(q−1,i)+B(q−1,i−1)]/2 holds chip by chip. Summing it proves the average identity for every possible question, including an adaptive question chosen from the current state.",
          "carry": "Carole can choose a maximizing answer after each question."
        },
        {
          "title": "Carry strict weight above one to the terminal state",
          "question": "Why must the initial inequality be strict in this argument?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "W₀",
                "relation": ">",
                "right": "1",
                "reason": "hypothesis"
              },
              {
                "left": "Wnext",
                "relation": "≥",
                "right": "Wcurrent",
                "reason": "Carole takes the larger successor"
              },
              {
                "left": "terminal survivors",
                "relation": "=",
                "right": "Wterminal>1",
                "reason": "B(0,i)=1 for live chips"
              }
            ],
            "focus": 2,
            "note": "An integer strictly above one means at least two surviving candidates."
          },
          "claim": "Starting from W>1, Carole can force ambiguity.",
          "explanation": "The potential never drops below its starting value. At zero questions, each live candidate has weight one. The surviving-candidate count is an integer, so a terminal value above one leaves at least two possibilities that Paul cannot distinguish.",
          "carry": "The proof establishes a sufficient condition for Carole."
        },
        {
          "title": "Do not reverse an averaging argument",
          "question": "What extra requirement would Paul need when W≤1?",
          "diagram": {
            "kind": "table",
            "columns": [
              "player",
              "needed successor condition"
            ],
            "rows": [
              [
                "Carole",
                "one child has W>1"
              ],
              [
                "Paul",
                "both children have W≤1"
              ]
            ],
            "focus": [
              1
            ],
            "note": "An average ≤1 does not force both children to be ≤1."
          },
          "claim": "Paul needs an achievable balanced question, not merely a low average weight.",
          "explanation": "Question constraints and integrality determine which two successors can be realized. A state may have W≤1 but every legal question may leave one child above one. This gap is why the counting condition cannot be treated as a complete strategy theorem.",
          "carry": "Analyze the feasible split, not only the parent weight."
        }
      ]
    },
    "challenges": [
      {
        "id": "liar-extension-1",
        "title": "A subcritical weight with no legal first split",
        "minutes": 12,
        "skill": "Minimax analysis of all possible first questions.",
        "connection": "The four-candidate example tests the weight obstruction; this five-candidate state shows why its converse fails.",
        "prompt": "Five candidates each allow one lie, with five questions remaining. Compute the initial weight. If a first question contains m candidates, derive both four-question successor weights in terms of m. Minimize their maximum over every integer m from 0 to 5, and use the result to prove Carole can win despite the initial weight being below one.",
        "hints": [
          "B(5,1)=6/32; after the answer, candidates inside and outside the query have different remaining lie allowances.",
          "The successor numerators over denominator 16 are 5+4m and 25−4m."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the smallest possible maximum successor weight?",
          "expected": 1.0625,
          "feedback": "The two successors are (5+4m)/16 and (25−4m)/16. Their continuous balance is m=2.5, but integer m=2 or 3 gives maximum 17/16>1."
        },
        "solution": [
          "The initial weight is 5·6/32=15/16<1.",
          "For one response, m candidates retain one lie and 5−m retain none, giving (5+4m)/16; the other response gives (25−4m)/16.",
          "Their maximum is minimized at the integers nearest 2.5, namely m=2 or 3, where it equals 17/16. All other m give a larger maximum.",
          "Carole selects that supercritical child and thereafter maintains weight above one, forcing at least two terminal survivors."
        ],
        "rubric": [
          "Derive both successor formulas from lie allowances.",
          "Optimize over integer legal questions.",
          "Connect the supercritical successor to Carole’s terminal strategy."
        ],
        "mistake": "The fractional split m=2.5 is not a question on five individual candidates.",
        "followup": "For n candidates and one lie, determine when the first-question integrality obstruction persists near the volume threshold."
      },
      {
        "id": "liar-extension-2",
        "title": "A biased response coin changes the potential",
        "minutes": 12,
        "skill": "Understanding why the fair-response interpretation is strategy independent.",
        "connection": "The worked binomial calculation uses fair hypothetical answers; replacing the coin changes the distribution of lies.",
        "prompt": "There are two candidate values, each with one lie allowed and two questions remaining. Paul asks the uninformative question containing both candidates twice. Carole independently reports Yes with probability 3/4. Compute the expected terminal number of live candidates, then repeat if both questions contain neither candidate. Explain why replacing the fair binomial weight by one fixed biased-binomial formula cannot be independent of Paul’s choices.",
        "hints": [
          "A candidate is eliminated only after two lies.",
          "Which answer is a lie depends on whether that candidate belongs to the query."
        ],
        "probe": {
          "kind": "number",
          "prompt": "When both queries contain both candidates, what is the expected terminal survivor count?",
          "expected": 1.875,
          "feedback": "Each candidate is eliminated only after two No responses, probability (1/4)²=1/16. Its survival probability is 15/16, so the expected count is 2·15/16=15/8."
        },
        "solution": [
          "When every candidate belongs to each query, Yes is truthful and two No responses are required for elimination. Thus each survives with probability 15/16.",
          "Linearity gives expected survivor count 15/8, regardless of the dependence between the two survivor indicators.",
          "If every query contains neither candidate, Yes is a lie; each survives with probability 1−(3/4)²=7/16, giving total expectation 7/8.",
          "The same initial lie allowances yield different biased survival means under different questions. A fair response has lie probability 1/2 in either case, which is what makes the original binomial potential independent of Paul’s question choices."
        ],
        "rubric": [
          "Identify truthful versus lying answers for each query type.",
          "Compute both survivor expectations without assuming candidate independence.",
          "Explain the special role of fairness in a strategy-independent state potential."
        ],
        "mistake": "A fixed response bias is not a fixed lie bias: truthful answers depend on the candidate and the question.",
        "followup": "Describe what additional state a dynamic-programming potential would need when responses have a prescribed nonfair distribution."
      }
    ]
  },
  "core-tenure": {
    "proof": {
      "goal": "Prove both directions of the dyadic threshold using successor averaging and the constructive splitting lemma.",
      "scope": "The splitting lemma relies on finite dyadic chip weights 2^{−i} and the gluing induction. It does not hold for arbitrary positive chip weights.",
      "frames": [
        {
          "title": "Promotion doubles the weight of the retained part",
          "question": "How do the two successor values relate to the proposed split?",
          "diagram": {
            "kind": "table",
            "columns": [
              "part retained",
              "new weight"
            ],
            "rows": [
              [
                "S",
                "2W(S)"
              ],
              [
                "complement",
                "2W(Sᶜ)"
              ],
              [
                "average of children",
                "W(S)+W(Sᶜ)=W"
              ]
            ],
            "focus": [
              2
            ],
            "note": "Only one part survives, but every survivor moves one level toward tenure."
          },
          "claim": "The parent weight is the average of its two successor weights.",
          "explanation": "A chip at level i has weight 2^{−i}. Promotion moves it to i−1, multiplying that weight by two, while firing contributes zero. These deterministic formulas prove the averaging identity for every split.",
          "carry": "Carole can preserve W<1 by taking the lighter child."
        },
        {
          "title": "Below one, the target is impossible",
          "question": "Why can a weight-minimizing response prevent tenure forever?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "Winitial",
                "relation": "<",
                "right": "1",
                "reason": "subcritical position"
              },
              {
                "left": "Wnext",
                "relation": "≤",
                "right": "Wcurrent",
                "reason": "choose the smaller successor"
              },
              {
                "left": "one tenure chip",
                "relation": "=",
                "right": "weight 1",
                "reason": "level zero"
              }
            ],
            "focus": 1,
            "note": "A level-zero chip alone would violate the maintained strict inequality."
          },
          "claim": "For W<1, Carole wins.",
          "explanation": "The smaller of two numbers is at most their average, so the maintained weight never reaches one. A tenure chip would have weight one by itself. The finite promote-or-fire game therefore terminates without tenure.",
          "carry": "For W≥1, Paul needs a split with both parts of weight at least one half."
        },
        {
          "title": "Glue two equal chips without changing total weight",
          "question": "Why must a finite supercritical position contain a repeated level?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 120,
                "y": 65,
                "label": [
                  "two level-i chips",
                  "2⁻i + 2⁻i"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 360,
                "y": 65,
                "label": [
                  "one superchip",
                  "2⁻(i−1)"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 600,
                "y": 65,
                "label": [
                  "split shorter list",
                  "then unglue together"
                ],
                "tone": "output"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n1",
                "label": "equal total weight",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n1",
                "to": "n2",
                "label": "induct on chip count",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "If at most one chip occupied each positive level, the finite sum would be strictly below one."
          },
          "claim": "Every W≥1 position can be split into two parts of weight at least 1/2.",
          "explanation": "A repeated level must exist. Two level-one chips can be separated directly. For a repeated deeper level, glue them into a superchip one level nearer tenure, apply induction to the shorter list, then put both originals into the superchip’s assigned part.",
          "carry": "The dyadic weights make the gluing operation exact."
        },
        {
          "title": "Use the split lemma as a strategy invariant",
          "question": "What happens whichever part Carole chooses to keep?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "W(S), W(Sᶜ)",
                "relation": "≥",
                "right": "1/2",
                "reason": "gluing-based split"
              },
              {
                "left": "Wnext",
                "relation": "≥",
                "right": "1",
                "reason": "promotion doubles chosen part"
              },
              {
                "left": "termination with no chips",
                "relation": "=",
                "right": "weight 0: impossible",
                "reason": "W≥1 is maintained"
              }
            ],
            "focus": 1,
            "note": "Finite termination forces a tenure chip rather than an infinite avoidance path."
          },
          "claim": "For W≥1, Paul wins by keeping the post-response weight at least one.",
          "explanation": "At every nonterminal state, Paul invokes the splitting lemma. Both possible responses leave weight at least one. The game cannot end by firing every chip, and its levels strictly decrease for survivors, so the only remaining terminal outcome is tenure.",
          "carry": "A strategy theorem needs both the potential and an implementable safe split."
        }
      ]
    },
    "challenges": [
      {
        "id": "tenure-extension-1",
        "title": "How rare is a safe random partition?",
        "minutes": 12,
        "skill": "Constructive dyadic splitting versus a probabilistic guess.",
        "connection": "The worked 1/2,1/4,1/4 position has an evident split; the six-chip position tests gluing and exact partition counts.",
        "prompt": "Consider two chips at level two and four chips at level three. Construct a safe split by gluing, and count the probability that a uniformly random labeled partition puts each chip independently into S or its complement and is safe for Paul. Show why total weight one forces each safe part to have exactly weight one half.",
        "hints": [
          "In units of 1/8, the chip weights are 2,2,1,1,1,1.",
          "If S has a large chips and b small chips, its half-weight equation is 2a+b=4."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What fraction of the 64 labeled random partitions are safe?",
          "expected": 0.21875,
          "feedback": "The solutions give C(2,0)C(4,4)+C(2,1)C(4,2)+C(2,2)C(4,0)=1+12+1=14 safe subsets. Thus the probability is 14/64=7/32."
        },
        "solution": [
          "The total weight is 2/4+4/8=1, so both parts being at least 1/2 forces exact equality.",
          "Glue the four level-three chips in pairs into two level-two superchips, giving four quarter-weight chips; split those into pairs and unglue.",
          "For a labeled random subset S, let a count quarter-weight chips and b count eighth-weight chips. Safety is exactly 2a+b=4.",
          "There are 1+12+1=14 such subsets among 2⁶=64, giving probability 7/32. The gluing strategy guarantees a safe split rather than merely hoping to sample one."
        ],
        "rubric": [
          "Construct a legitimate unglued split.",
          "Derive the exact half-weight equation.",
          "Count labeled subsets with both sides included in the event."
        ],
        "mistake": "Weight one guarantees existence of a safe partition, not safety of every partition or of a typical guess.",
        "followup": "Give an algorithm that finds a half-weight subset of any finite dyadic weight-one position."
      },
      {
        "id": "tenure-extension-2",
        "title": "Why arbitrary weights destroy the converse",
        "minutes": 12,
        "skill": "Identifying the structural hypothesis behind a splitting lemma.",
        "connection": "The worked proof glues equal dyadic chips; this task removes that arithmetic structure while keeping the averaging identity.",
        "prompt": "Consider an abstract one-step game with chip weights 0.4,0.35,0.25. Paul partitions them, Carole retains either part, and all retained weights double. Compute the largest minimum successor weight Paul can force. Explain why total weight one and successor averaging do not give a safe split here, and identify the precise step in the Tenure Game proof that no longer applies.",
        "hints": [
          "List all attainable subset sums rather than split one chip fractionally.",
          "A safe split at total one would require an attainable subset sum exactly 1/2."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is Paul’s best guaranteed successor weight?",
          "expected": 0.8,
          "feedback": "The subset sums nearest 1/2 are 0.4 and 0.6. Their smaller side weighs 0.4, so doubling gives at most 0.8; that bound is attained by separating the 0.4 chip."
        },
        "solution": [
          "The attainable sums are 0,0.25,0.35,0.4,0.6,0.65,0.75,1. None equals one half.",
          "For any split with sum s, the worst child is 2min(s,1−s). This is maximized at s=0.4 or 0.6.",
          "The best guaranteed successor value is therefore 0.8<1, even though the parent weight is one and equals the average successor value.",
          "The dyadic repeated-level and exact-gluing argument has no analogue for these three weights. Averaging alone proves the subcritical direction but cannot prove the supercritical converse."
        ],
        "rubric": [
          "Enumerate feasible subset sums.",
          "Solve the minimax successor optimization.",
          "Locate the failed dyadic-gluing premise."
        ],
        "mistake": "A fractional half-half division is not a legal partition of indivisible chips.",
        "followup": "Find a condition on a multiset of rational weights that guarantees a safe half-weight subset."
      }
    ]
  },
  "core-balancing": {
    "proof": {
      "goal": "Turn fresh randomized signs against each adaptive Pusher strategy into a deterministic strategy-existence conclusion.",
      "scope": "This proves the random-walk upper-bound mechanism. The matching lower-bound potential and the zero-one reduction are additional assigned arguments, not consequences of this upper-bound proof.",
      "frames": [
        {
          "title": "The adversary moves before the fresh sign",
          "question": "What is the conditional law of one coordinate increment?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 120,
                "y": 65,
                "label": [
                  "past transcript",
                  "Pusher chooses vᵢ"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 360,
                "y": 65,
                "label": [
                  "fresh fair sign εᵢ",
                  "chosen after vᵢ"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 600,
                "y": 65,
                "label": [
                  "coordinate increment",
                  "εᵢvᵢⱼ is fair ±1"
                ],
                "tone": "output"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n1",
                "label": "move order",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n1",
                "to": "n2",
                "label": "conditional symmetry",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "The vector can depend on the past; its current coordinate is fixed before the fresh coin."
          },
          "claim": "Each coordinate has the law of an ordinary n-step fair random walk.",
          "explanation": "Conditional on every past response and the current vector, vᵢⱼ is a fixed sign. Multiplying it by a fresh fair sign leaves a fresh fair increment. Repeating this conditional fact gives the usual walk distribution for any single coordinate, despite adaptive vector choices.",
          "carry": "Coordinate marginals are controlled; independence across coordinates is unnecessary."
        },
        {
          "title": "Compute a single-coordinate failure probability",
          "question": "Which binomial terms correspond to a strict discrepancy threshold?",
          "diagram": {
            "kind": "table",
            "columns": [
              "S₄ value",
              "multiplicity out of 16"
            ],
            "rows": [
              [
                "−4",
                "1"
              ],
              [
                "−2",
                "4"
              ],
              [
                "0",
                "6"
              ],
              [
                "2",
                "4"
              ],
              [
                "4",
                "1"
              ]
            ],
            "focus": [
              0,
              4
            ],
            "note": "For a threshold of two, only the first and last rows fail."
          },
          "claim": "P(|Sₙ|>a) is the relevant one-coordinate tail.",
          "explanation": "The strict inequality in the game payoff determines which lattice points count as failures. Exact binomial tails or a valid concentration estimate may bound this probability. The same marginal bound applies to every coordinate under the fixed adaptive Pusher strategy.",
          "carry": "Sum these failure probabilities before invoking a game-theoretic conclusion."
        },
        {
          "title": "Find positive probability of simultaneous success",
          "question": "What condition makes the union bound strictly less than one?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "P(any coordinate exceeds a)",
                "relation": "≤",
                "right": "n P(|Sₙ|>a)",
                "reason": "union bound, no independence"
              },
              {
                "left": "n P(|Sₙ|>a)",
                "relation": "<",
                "right": "1",
                "reason": "strict tail criterion"
              },
              {
                "left": "P(all coordinates ≤a)",
                "relation": ">",
                "right": "0",
                "reason": "complement of failure"
              }
            ],
            "focus": 1,
            "note": "The random signs need not make the coordinate events independent."
          },
          "claim": "Against each fixed Pusher strategy, fresh randomized Chooser play has a successful realization.",
          "explanation": "A probability below one for failure proves that the fixed adversary cannot force a win against every possible sign response. This statement quantifies over a Pusher strategy first; it does not produce one universal sign sequence that defeats all adversaries.",
          "carry": "The remaining step concerns strategies, not a fixed sequence of signs."
        },
        {
          "title": "Use determinacy with the correct quantifiers",
          "question": "Why does a successful random realization against each strategy rule out Pusher’s forced win?",
          "diagram": {
            "kind": "table",
            "columns": [
              "statement",
              "what it means"
            ],
            "rows": [
              [
                "for each Pusher policy",
                "some sign path succeeds"
              ],
              [
                "Pusher forced win",
                "every sign path fails"
              ],
              [
                "finite game determinacy",
                "Chooser has a policy"
              ]
            ],
            "focus": [
              0,
              2
            ],
            "note": "A Chooser policy can depend on the currently presented vector."
          },
          "claim": "Finite perfect-information determinacy gives a winning Chooser strategy for this threshold.",
          "explanation": "If Pusher had a forcing strategy, the randomized policy would fail with probability one against it, contradicting the strict union bound. Since the finite threshold game has no draws, Chooser must have a deterministic winning policy. This is not a claim that a nonadaptive sign list works.",
          "carry": "Preserve the distinction between a response strategy and an advance schedule."
        }
      ]
    },
    "challenges": [
      {
        "id": "balancing-extension-1",
        "title": "Find the first threshold the exact walk certifies",
        "minutes": 12,
        "skill": "Exact binomial tails, strict inequalities, and the union bound.",
        "connection": "The four-round example computes one walk tail; the full argument must beat the number of coordinates simultaneously.",
        "prompt": "In the 16-round balancing game in 16 dimensions, use the exact law of S₁₆ to find the smallest nonnegative even threshold a for which 16P(|S₁₆|>a)<1. Show enough binomial sums to prove both success at your threshold and failure of this criterion at the previous even threshold. Explain why failure of the criterion would not prove Pusher wins.",
        "hints": [
          "For a=8, the strict tail corresponds to at most three positive signs or at least thirteen.",
          "For a=6, include the fourth binomial layer as well."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the smallest even threshold certified by the exact union-bound criterion?",
          "expected": 8,
          "feedback": "At a=8 the tail is 2(1+16+120+560)/65536=1394/65536, and multiplying by 16 is below one. At a=6 it is 2(1+16+120+560+1820)/65536=5034/65536, whose sixteenfold value exceeds one."
        },
        "solution": [
          "For a=8, |S₁₆|>8 means the number of positive increments lies in {0,1,2,3,13,14,15,16}.",
          "The tail numerator is 2(1+16+120+560)=1394, so the union-bound failure is 22304/65536<1.",
          "At a=6, adding the fourth and twelfth layers gives numerator 5034; multiplying by 16 gives 80544/65536>1. Tail probabilities only grow at smaller thresholds.",
          "Thus eight is the first even threshold certified by this argument. The failed inequality at six is inconclusive about the actual game value; it only means this union bound cannot certify six."
        ],
        "rubric": [
          "Use the strict tail and correct lattice endpoints.",
          "Check the sixteen-coordinate factor.",
          "Separate an inconclusive upper-bound method from a lower-bound strategy."
        ],
        "mistake": "A union bound at least one says nothing about the true probability of failure.",
        "followup": "Compare the exact threshold with the one obtained from the standard two-sided exponential random-walk tail."
      },
      {
        "id": "balancing-extension-2",
        "title": "Why a strategy is not a universal sign list",
        "minutes": 12,
        "skill": "Adversarial quantifier order and deterministic strategy dependence.",
        "connection": "The finite random-walk example produces successful sign realizations only after an adversary is fixed.",
        "prompt": "A student reads the randomized proof as: there is one sequence of n signs that works against every Pusher policy. Refute this by giving Pusher’s response to any publicly announced sign list. Then explain why finite-game determinacy can still yield a deterministic winning Chooser strategy. Your explanation must explicitly state who sees the current vector and when the fresh random sign is chosen in the probabilistic proof.",
        "hints": [
          "For an announced sign σᵢ, Pusher can make σᵢvᵢ point in the same direction every round.",
          "A deterministic policy can depend on the presented vᵢ; a preannounced schedule cannot."
        ],
        "probe": {
          "kind": "choice",
          "prompt": "Which conclusion correctly reconciles the probabilistic proof with the announced-list attack?",
          "options": [
            "A Chooser response policy may depend on each current vector, although no single advance sign schedule need work.",
            "The union bound requires independent coordinates, so the randomized argument fails before determinacy.",
            "There is a universal advance sign schedule, but Pusher is forbidden to choose its vectors using that schedule.",
            "Determinacy gives only a randomized strategy because Pusher is allowed to adapt to earlier signs."
          ],
          "answer": 0,
          "feedback": [
            "Pusher can defeat any announced schedule by taking vᵢ=σᵢ·1, but a policy sees vᵢ and can choose a response to it. These are different quantifiers.",
            "The union bound uses marginal tails only. Coordinate dependence is explicitly allowed.",
            "The proof never establishes a universal schedule, and the game does not impose this artificial information restriction.",
            "Finite perfect-information threshold games admit deterministic winning policies; adaptivity is part of the strategy space."
          ]
        },
        "solution": [
          "Given a public schedule σ, Pusher chooses vᵢ=σᵢ(1,…,1). The actual signed increment is then (1,…,1) every round, giving final discrepancy n.",
          "This disproves a single fixed sign list working against all Pusher policies.",
          "The randomized argument instead fixes Pusher’s policy first and then shows positive success probability for fresh signs chosen after each vector.",
          "Determinacy rules out any forcing Pusher policy and yields a Chooser policy that can use the entire visible history and current vector. It need not be a fixed schedule."
        ],
        "rubric": [
          "Construct the legal schedule-dependent attack.",
          "State the order of choices in the random argument.",
          "Distinguish strategies from complete advance sign strings."
        ],
        "mistake": "Interchanging “for every Pusher policy” and “there exists a sign list” changes the theorem.",
        "followup": "Explain why evaluating the resulting deterministic policy efficiently is a separate question from its game-theoretic existence."
      }
    ]
  },
  "core-half-liar": {
    "proof": {
      "goal": "Derive the asymmetric response-path upper bound and identify the extra construction needed for matching achievability.",
      "scope": "The k=1 upper-bound mechanism is developed. The nearly balanced first stage and the final chip-game strategy are separate ingredients of the lower construction; the latter is an exercise input in the assigned text.",
      "frames": [
        {
          "title": "Count possible first lies along the truthful path",
          "question": "Why is the candidate’s response set sized by its truthful No answers?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 150,
                "y": 160,
                "label": [
                  "truthful path σ",
                  "z No answers"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 570,
                "y": 65,
                "label": [
                  "no lie",
                  "one reported path"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 570,
                "y": 255,
                "label": [
                  "first lie at a No",
                  "one path per position"
                ],
                "tone": "output"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n1",
                "label": "always legal",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n0",
                "to": "n2",
                "label": "only No→Yes lies",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "After a lie in an adaptive tree, later truthful answers may follow a different branch."
          },
          "claim": "A candidate with z truthful No answers has exactly z+1 legal reported paths when k=1.",
          "explanation": "Each legal nontruthful response path has a unique first lie at a No position on the original truthful path. Once that lie is used, the remaining responses are forced by truth along the resulting branch. Different first-lie positions give distinct paths. This counting does not assume fixed nonadaptive questions.",
          "carry": "Assign weight W(σ)=z+1 to the candidate."
        },
        {
          "title": "Use disjointness of reported leaves",
          "question": "Why must different candidates’ reported-path sets be disjoint under a winning strategy?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "Σ candidates W(σᵢ)",
                "relation": "≤",
                "right": "2^q",
                "reason": "disjoint response leaves"
              },
              {
                "left": "W(σ)",
                "relation": "=",
                "right": "1 + number of No bits",
                "reason": "one-sided lie count"
              }
            ],
            "focus": 0,
            "note": "A shared reported leaf would leave Paul unable to distinguish two values."
          },
          "claim": "A winning strategy must fit all asymmetric response sets into the q-bit answer tree.",
          "explanation": "A q-question binary tree has at most 2^q reported answer strings. If two candidate values permit the same reported leaf, both remain possible after all questions, contradicting identification. Summing their disjoint response-set sizes gives the budget.",
          "carry": "Small-weight truthful paths must be counted separately."
        },
        {
          "title": "Pay for exceptional truthful paths",
          "question": "How many candidates can use unusually few No answers?",
          "diagram": {
            "kind": "table",
            "columns": [
              "truthful path type",
              "counting control"
            ],
            "rows": [
              [
                "No count ≤(q−u)/2",
                "≤2^q P(Sq≤−u) paths"
              ],
              [
                "remaining paths",
                "weight >(q−u)/2"
              ],
              [
                "typical candidates",
                "≤2^{q+1}/(q−u)"
              ]
            ],
            "focus": [
              0,
              2
            ],
            "note": "The truthful paths themselves are distinct, so binomial counting bounds exceptional candidates."
          },
          "claim": "n≤2^q[P(Sq≤−u)+2/(q−u)].",
          "explanation": "Low-weight paths are cheap in the response budget, but there are few of them. Every other candidate consumes at least roughly (q−u)/2 leaves. Bounding both groups avoids the false assumption that every candidate has a typical truthful string.",
          "carry": "Choose u growing faster than √q but slower than q."
        },
        {
          "title": "Separate the asymptotic obstruction from construction",
          "question": "Why does an upper count not supply a legal winning strategy?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "u=q^{2/3}",
                "relation": "⇒",
                "right": "e^{−u²/(2q)}=o(1/q)",
                "reason": "fair-walk tail"
              },
              {
                "left": "n",
                "relation": "≤",
                "right": "(1+o(1))2^{q+1}/q",
                "reason": "upper count"
              },
              {
                "left": "matching lower construction",
                "relation": "needs",
                "right": "balanced prefix + chip endgame",
                "reason": "additional strategy argument"
              }
            ],
            "focus": 1,
            "note": "The response geometry and adaptivity still constrain realizable question trees."
          },
          "claim": "The leading k=1 asymptotic requires a separate two-stage lower construction.",
          "explanation": "The selected u makes the exceptional-path term negligible and leaves q−u asymptotic to q. Achievability then groups candidates under nearly balanced first-stage strings and invokes a controlled final chip-game strategy. It does not follow by reversing the volume inequality.",
          "carry": "State which part is a count and which part constructs legal questions."
        }
      ]
    },
    "challenges": [
      {
        "id": "half-liar-extension-1",
        "title": "A volume bound misses asymmetric packing obstructions",
        "minutes": 12,
        "skill": "Disjoint response sets for a constant-weight family.",
        "connection": "The four-question illustration lists one candidate’s possible responses; now force several such response sets to coexist.",
        "prompt": "Consider nonadaptive four-question truthful strings with exactly two No answers, and permit at most one No→Yes lie. Determine the largest number of these truthful strings that can be used together for guaranteed identification. Prove your upper bound by analyzing when two response sets intersect, and exhibit an attaining collection. Compare with the weaker count obtained by assigning three responses to every candidate.",
        "hints": [
          "Represent a truthful string by its two No positions.",
          "Two distinct two-subsets sharing one position can both produce the response with only that shared No remaining."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the largest possible number of candidates in this restricted nonadaptive code?",
          "expected": 2,
          "feedback": "Response sets are disjoint exactly when the two No-position sets are disjoint. At most two disjoint two-subsets fit in four positions, and {1,2},{3,4} attain it. The volume bound alone would only give floor(16/3)=5."
        },
        "solution": [
          "A truthful string with two No positions S has reported No sets S and S\\{i} for i∈S, hence three responses.",
          "Two distinct two-subsets S,T share a legal response exactly when they intersect in one position: both can report that singleton No set.",
          "A legal collection must therefore consist of pairwise disjoint two-subsets, so its size is at most two.",
          "The sets {1,2} and {3,4} have disjoint response sets and attain two. The count 3n≤16 permits up to five and is not sufficient for realizability."
        ],
        "rubric": [
          "Analyze response-set intersections, not just their sizes.",
          "Prove maximality and give a legal attaining pair.",
          "Explain the gap between a volume obstruction and an actual code."
        ],
        "mistake": "Disjoint truthful strings are not enough: their possible one-lie responses must also be disjoint.",
        "followup": "Solve the same restricted problem for length q and truthful strings with exactly two No answers."
      },
      {
        "id": "half-liar-extension-2",
        "title": "Choose the tail cutoff without losing the leading constant",
        "minutes": 12,
        "skill": "Asymptotic balancing of rare paths and volume consumption.",
        "connection": "The finite response-string example hides the optimization needed to make exceptional truthful paths negligible.",
        "prompt": "Starting from n≤2^q[exp(−u²/(2q))+2/(q−u)], set u=√(c q ln q), with fixed c>0. Determine the conditions on c that make the exceptional-path term o(1/q) and keep u=o(q). Derive the resulting leading upper bound and explain what happens at the critical value c=2.",
        "hints": [
          "The exponential term becomes q^{−c/2}.",
          "Compare it with 1/q rather than merely ask whether it tends to zero."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the least positive integer c that makes the exceptional term o(1/q)?",
          "expected": 3,
          "feedback": "The ratio q^{−c/2}/(1/q)=q^{1−c/2} tends to zero exactly when c>2. Hence the least integer is three; c=2 leaves a same-order contribution."
        },
        "solution": [
          "The chosen cutoff satisfies u/q=√(c ln q/q)→0 for every fixed c.",
          "The exceptional-path factor is exp(−c ln q/2)=q^{−c/2}.",
          "It is negligible compared with 1/q exactly for c>2. Then 2/(q−u)=(2+o(1))/q, giving n≤(1+o(1))2^{q+1}/q.",
          "At c=2, the exceptional contribution is 1/q and cannot be discarded; this estimate gives a leading coefficient three rather than the desired two."
        ],
        "rubric": [
          "Compare the exceptional term with the main term.",
          "Verify the cutoff remains sublinear.",
          "Explain the critical value’s effect on the leading constant."
        ],
        "mistake": "A rare-path probability tending to zero can still dominate the main 1/q scale.",
        "followup": "Determine how slowly c(q) may approach two from above while preserving a negligible exceptional contribution."
      }
    ]
  },
  "core-entropy": {
    "proof": {
      "goal": "Derive entropy subadditivity and use uniform family sampling to bound the size of an extremal set system.",
      "scope": "All entropies are discrete and measured in bits. Equality needs genuine joint independence, not only equal or pairwise-independent marginals.",
      "frames": [
        {
          "title": "Factor a joint probability along one order",
          "question": "What becomes of the logarithm of a product of conditional probabilities?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "P(x₁,…,xₙ)",
                "relation": "=",
                "right": "ΠᵢP(xᵢ|x₁,…,xᵢ₋₁)",
                "reason": "probability chain rule"
              },
              {
                "left": "H(X₁,…,Xₙ)",
                "relation": "=",
                "right": "ΣᵢH(Xᵢ|X₁,…,Xᵢ₋₁)",
                "reason": "take expected negative log"
              }
            ],
            "focus": 1,
            "note": "Terms with zero probability contribute zero under the usual entropy convention."
          },
          "claim": "The entropy chain rule is an identity, not an independence assumption.",
          "explanation": "The joint law factors into successive conditional laws. Taking the negative base-two logarithm turns that factorization into a sum, and averaging gives the displayed conditional entropies.",
          "carry": "Inequalities enter when conditioning is removed."
        },
        {
          "title": "Measure the information lost by using marginals",
          "question": "Which divergence is the gap in subadditivity?",
          "diagram": {
            "kind": "table",
            "columns": [
              "quantity",
              "expression"
            ],
            "rows": [
              [
                "joint law",
                "P"
              ],
              [
                "independent comparison law",
                "Q=ΠᵢPᵢ"
              ],
              [
                "D(P∥Q)",
                "ΣᵢH(Xᵢ)−H(X)"
              ]
            ],
            "focus": [
              2
            ],
            "note": "Nonnegative relative entropy gives the inequality and its equality condition."
          },
          "claim": "H(X)≤ΣᵢH(Xᵢ), with equality exactly for the product law.",
          "explanation": "Expanding the log likelihood ratio against the product of the marginals identifies the gap. Relative entropy is nonnegative, and equality forces the two full probability laws to agree. Pairwise independence alone does not identify the full joint law.",
          "carry": "To count a family, make the joint law uniform on that family."
        },
        {
          "title": "Uniform sampling turns entropy into log cardinality",
          "question": "Why is a uniform family member the correct random object?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 150,
                "y": 160,
                "label": [
                  "F⊆{0,1}ⁿ",
                  "choose X uniformly"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 570,
                "y": 65,
                "label": [
                  "H(X)=log₂ |F|"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 570,
                "y": 255,
                "label": [
                  "P(Xᵢ=1)=pᵢ",
                  "H(Xᵢ)=H₂(pᵢ)"
                ],
                "tone": "output"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n1",
                "label": "uniformity",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n0",
                "to": "n2",
                "label": "coordinate counts",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "The joint law is uniform, but its coordinates need not be independent."
          },
          "claim": "log₂|F|≤ΣᵢH₂(pᵢ).",
          "explanation": "Uniformity makes each family member contribute the same information log₂|F|. Each bit marginal is Bernoulli with bias equal to the proportion of family members containing that coordinate. Subadditivity then yields an explicit counting bound from these biases.",
          "carry": "Additional combinatorial information can now constrain the marginal biases."
        },
        {
          "title": "Use concavity only after the joint bound",
          "question": "What does a bound on average set size say about the sum of bit entropies?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "ΣᵢH₂(pᵢ)",
                "relation": "≤",
                "right": "nH₂((Σpᵢ)/n)",
                "reason": "concavity of binary entropy"
              },
              {
                "left": "log₂|F|",
                "relation": "≤",
                "right": "nH₂(ρ)",
                "reason": "if average weight ≤ρn, ρ≤1/2"
              }
            ],
            "focus": 1,
            "note": "The last step also uses that H₂ is increasing up to 1/2."
          },
          "claim": "A family of average weight at most ρn has |F|≤2^{nH₂(ρ)} for ρ≤1/2.",
          "explanation": "Linearity gives Σpᵢ equal to the expected set size under uniform sampling. Concavity makes equalized marginals the largest possible entropy sum at that average; monotonicity on the lower half permits replacement by ρ.",
          "carry": "Track uniformity, subadditivity, concavity, and monotonicity as separate steps."
        }
      ]
    },
    "challenges": [
      {
        "id": "entropy-extension-1",
        "title": "Pairwise independence can hide two full bits",
        "minutes": 12,
        "skill": "Linear constraints, joint entropy, and the equality condition.",
        "connection": "The worked family has unbiased coordinates with dependence; this construction makes every coordinate pair independent as well.",
        "prompt": "Let X be uniform on the binary solutions of X₁⊕X₂⊕X₃=0 and X₃⊕X₄⊕X₅=0. Determine its support size, joint entropy, and all one-bit entropies. Prove that every pair of coordinates is independent, yet compute the divergence from the product of all marginals. Explain why pairwise independence cannot make entropy subadditivity an equality.",
        "hints": [
          "Use X₁,X₂,X₄ as free bits.",
          "The five coordinates are distinct nonzero linear forms in those three free bits."
        ],
        "probe": {
          "kind": "number",
          "prompt": "How many bits is D(P_X ∥ ΠᵢP_{Xᵢ})?",
          "expected": 2,
          "feedback": "There are three free bits, so H(X)=3. Every coordinate is fair and contributes one marginal bit; therefore the divergence is 5−3=2."
        },
        "solution": [
          "The two constraints have rank two, leaving 2³=8 equally likely solutions and joint entropy three.",
          "With free bits U=X₁,V=X₂,W=X₄, the coordinates are U,V,U⊕V,W,U⊕V⊕W. Each is a nonzero linear form and hence fair.",
          "Any two displayed forms are distinct and therefore linearly independent over F₂; each coordinate pair is uniform on four outcomes.",
          "Nevertheless the joint law is confined to eight of the 32 cube points. Its entropy gap and divergence from the product of its fair marginals is 5−3=2 bits."
        ],
        "rubric": [
          "Identify and count the free variables.",
          "Prove pairwise independence rather than just unbiasedness.",
          "Connect the strict entropy gap to the nonproduct full law."
        ],
        "mistake": "Pairwise independence controls two-dimensional marginals, not the number of independent constraints on the full vector.",
        "followup": "For a binary linear code, relate total correlation to parity-check rank and identify when every pair remains independent."
      },
      {
        "id": "entropy-extension-2",
        "title": "An average-size constraint is enough",
        "minutes": 12,
        "skill": "Combining uniform-family entropy, concavity, and integer rounding.",
        "connection": "The example compares entropies of one family. This task turns an average combinatorial constraint into a cardinality bound.",
        "prompt": "Let F be a nonempty family of subsets of an eight-element set, with average member size at most two. Do not assume every member has size at most two. Prove |F|≤2^{8H₂(1/4)}, simplify this expression to an exact rational number, and give the resulting integer upper bound. State the separate equality requirements in the subadditivity and concavity steps.",
        "hints": [
          "Choose a uniform member and use Σpᵢ≤2.",
          "2^{8H₂(1/4)}=4⁸/3⁶."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What integer upper bound follows after rounding down the entropy bound?",
          "expected": 89,
          "feedback": "The entropy bound is 4⁸/3⁶=65536/729≈89.8985. Since the family size is an integer, it is at most 89. The argument uses only average size."
        },
        "solution": [
          "Uniform sampling gives H(X)=log₂|F| and Σpᵢ=E|X|≤2.",
          "Subadditivity gives H(X)≤ΣH₂(pᵢ); concavity and lower-half monotonicity give ΣH₂(pᵢ)≤8H₂(1/4).",
          "Exponentiating yields 4⁸/3⁶=65536/729, hence the integer upper bound 89.",
          "Equality in subadditivity requires joint independence; equality in strict concavity requires equal biases. These are separate conditions and are not forced by an average-size constraint."
        ],
        "rubric": [
          "Use a uniform family member.",
          "Apply concavity in the correct direction and justify the lower-half step.",
          "Simplify the exponent and handle integer cardinality."
        ],
        "mistake": "Replacing an average-size assumption by a pointwise size restriction would prove a different, stronger counting problem.",
        "followup": "Investigate whether equality in the real-valued entropy bound is possible for a uniform nonempty family at a bias other than 0,1/2,1."
      }
    ]
  },
  "core-shearer": {
    "proof": {
      "goal": "Compare every projected entropy to one common chain expansion and then count coordinate multiplicity.",
      "scope": "This is the discrete projection proof. Weighted covers follow by the same nonnegative-term counting; the measurable-body version needs an additional approximation argument.",
      "frames": [
        {
          "title": "Fix one global coordinate order",
          "question": "Why must every projection use the same inherited ordering?",
          "diagram": {
            "kind": "table",
            "columns": [
              "full chain",
              "a projection S"
            ],
            "rows": [
              [
                "H(Xᵢ|X₁,…,Xᵢ₋₁)",
                "H(Xᵢ|Xⱼ:j∈S,j<i)"
              ],
              [
                "earlier full coordinates",
                "only earlier S coordinates"
              ]
            ],
            "focus": [
              0
            ],
            "note": "The right-hand conditioning set is always a subset of the left-hand one."
          },
          "claim": "H(XS)=Σ_{i∈S}H(Xᵢ|Xⱼ:j∈S,j<i).",
          "explanation": "The chain rule is applied inside S using the global ordering. This makes each projected term comparable to exactly one fixed full-chain term. Arbitrary reordered expansions can obscure which conditioning sets contain which.",
          "carry": "Add the missing earlier coordinates and use conditioning monotonicity."
        },
        {
          "title": "Use the inequality in the correct direction",
          "question": "Does adding conditioning increase or decrease discrete entropy?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "H(Xᵢ|Xⱼ:j∈S,j<i)",
                "relation": "≥",
                "right": "H(Xᵢ|X₁,…,Xᵢ₋₁)",
                "reason": "conditioning reduces entropy"
              },
              {
                "left": "H(XS)",
                "relation": "≥",
                "right": "Σᵢ∈S H(Xᵢ|X<i)",
                "reason": "sum the comparable terms"
              }
            ],
            "focus": 1,
            "note": "The projected entropy is the upper quantity because it knows less of the past."
          },
          "claim": "Every occurrence of coordinate i pays for one full-chain entropy term.",
          "explanation": "Adding information cannot increase discrete conditional entropy. Thus even though projected coordinates may have complicated dependence, their entropy contributes at least the sum of the corresponding fixed full-chain terms.",
          "carry": "The combinatorial cover condition can now be applied term by term."
        },
        {
          "title": "Count each coordinate’s coverage",
          "question": "What happens if each coordinate belongs to at least k chosen projections?",
          "diagram": {
            "kind": "table",
            "columns": [
              "coordinate",
              "full-chain term",
              "times paid"
            ],
            "rows": [
              [
                "1",
                "H(X₁)",
                "at least k"
              ],
              [
                "i",
                "H(Xᵢ|X<i)",
                "at least k"
              ],
              [
                "n",
                "H(Xₙ|X<n)",
                "at least k"
              ]
            ],
            "focus": [
              1
            ],
            "note": "All conditional entropy terms are nonnegative."
          },
          "claim": "ΣS H(XS)≥kH(X).",
          "explanation": "Summing the previous inequalities counts a full-chain term once for every projection containing its coordinate. Since every multiplicity is at least k and terms are nonnegative, the sum is at least k times the complete chain entropy.",
          "carry": "Uniform-family sampling turns this entropy inequality into a counting result."
        },
        {
          "title": "Use support bounds without assuming uniform projections",
          "question": "Which distribution is uniform, and which need not be?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "H(X)",
                "relation": "=",
                "right": "log₂|F|",
                "reason": "X uniform on F"
              },
              {
                "left": "H(XS)",
                "relation": "≤",
                "right": "log₂|πS F|",
                "reason": "support-size bound"
              },
              {
                "left": "|F|^k",
                "relation": "≤",
                "right": "ΠS |πS F|",
                "reason": "combine and exponentiate"
              }
            ],
            "focus": 2,
            "note": "A uniform joint family member can cast a nonuniform projection."
          },
          "claim": "Shearer bounds the family by the product of its distinct projection sizes.",
          "explanation": "Uniformity is used for the joint entropy only. Each projected law is merely supported on its projection family, so its entropy is bounded above by the log of that support; equality there would need a uniform projected law.",
          "carry": "Coordinate coverage and projection multiplicities must both be explicit."
        }
      ]
    },
    "challenges": [
      {
        "id": "shearer-extension-1",
        "title": "More projections can give a weaker bound",
        "minutes": 12,
        "skill": "Choosing a useful cover rather than blindly multiplying available sizes.",
        "connection": "The box example attains a symmetric three-projection bound. An asymmetric four-coordinate instance tests whether the cover exponent is understood.",
        "prompt": "For F in a four-coordinate product, suppose the known projection sizes on 12,23,34,41 are at most 4,9,16,25. Compare the Shearer bounds from the two opposite-pair covers and from all four projections. Then allow nonnegative weights on these four projections, with each coordinate covered to total weight at least one. Show that the best bound obtainable by this weighted-cover argument is 64, not the all-four bound.",
        "hints": [
          "The opposite covers 12+34 and 23+41 each have multiplicity one.",
          "For an optimal positive-cost weighted cover of this four-cycle, opposite even weights can be equalized, as can the odd weights."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the best cardinality upper bound obtained by the stated weighted-cover argument?",
          "expected": 64,
          "feedback": "The two opposite covers give 4·16=64 and 9·25=225. The all-four multiplicity-two cover gives √(4·9·16·25)=120. Weighted interpolation cannot beat the cheaper opposite cover."
        },
        "solution": [
          "The cover {12,34} gives |F|≤64, while {23,41} gives |F|≤225.",
          "Using all four projections counts every coordinate twice and gives |F|≤120; having more input factors has not improved the bound.",
          "In a minimum-cost weighted cover, reduce each of the two even edge weights to their minimum a; the odd weights must then be at least 1−a. With positive costs, take both odd weights equal to 1−a and 0≤a≤1.",
          "The logarithmic bound is a ln64+(1−a)ln225, minimized at a=1. Thus 64 is optimal within this weighted-Shearer method, without a claim that it is the actual largest realizable family under every constraint."
        ],
        "rubric": [
          "Apply the correct multiplicity to each cover.",
          "Optimize the weighted logarithmic expression.",
          "Distinguish the best bound from an assertion of realizable equality."
        ],
        "mistake": "Multiplying every known projection size and forgetting the cover exponent can make a valid bound much weaker.",
        "followup": "Formulate the analogous weighted-cover optimization for a five-cycle of available coordinate pairs."
      },
      {
        "id": "shearer-extension-2",
        "title": "Use the actual nonuniform projected laws",
        "minutes": 12,
        "skill": "Entropy calculation from unequal projection fibers.",
        "connection": "The product-box example has uniform projections; most family projections do not.",
        "prompt": "Take F={000,001,010,100}, uniformly sampled, and use its three pair projections. Compute the law and entropy of each projected pair. Apply the entropy version of Shearer before replacing entropy by log support size, and compare the integer bounds obtained from these two routes. Explain why no projected law is uniform despite the joint law being uniform.",
        "hints": [
          "Each pair projection has one outcome of probability 1/2 and two of probability 1/4.",
          "Compare 2^{(3/2)(3/2)} with √(3³), then round down."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What integer upper bound follows from the actual projected entropies?",
          "expected": 4,
          "feedback": "Each pair entropy is 1.5 bits. Shearer gives log₂|F|≤(3·1.5)/2=2.25, so |F|≤2^{2.25}<5 and hence |F|≤4. Support sizes alone give √27≈5.196 and only the integer bound five."
        },
        "solution": [
          "Every pair projection is {00,01,10}; the zero pair has two preimages and the other two outcomes have one each.",
          "Its distribution is (1/2,1/4,1/4), whose entropy is 1/2+1/2+1/2=1.5 bits.",
          "Every coordinate is covered twice, so 2log₂|F|≤3·1.5=4.5. Exponentiation and integer rounding yield |F|≤4.",
          "Using only three support sizes gives |F|²≤27, hence |F|≤5. Unequal fiber sizes explain both the nonuniform projections and the lost strength in replacing entropy by log support."
        ],
        "rubric": [
          "Count projection fibers and normalize them.",
          "Compute the entropy and multiplicity factor.",
          "Compare the two integer bounds without asserting projected uniformity."
        ],
        "mistake": "Uniform sampling on F does not assign equal mass to projected points with different numbers of preimages.",
        "followup": "Characterize equality in the entropy-to-support replacement for an arbitrary projection."
      }
    ]
  },
  "core-tester-color": {
    "proof": {
      "goal": "Explain how farness supplies useful vertices and a bounded restriction tree controls every possible sampled coloring.",
      "scope": "The list-coloring repair bound is a structural lemma from the assigned proof. The displayed s=40/ε² guarantee uses 0<ε<0.1 and n>400/ε³; small graph diagrams illustrate the mechanism, not those size assumptions.",
      "frames": [
        {
          "title": "Lists encode every extension of a partial coloring",
          "question": "What does a colorless sampled vertex certify?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 120,
                "y": 65,
                "label": [
                  "partial coloring φ",
                  "on sampled S"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 360,
                "y": 65,
                "label": [
                  "Lφ(v): colors absent",
                  "from neighbors in S"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 600,
                "y": 65,
                "label": [
                  "empty list",
                  "no extension of φ"
                ],
                "tone": "output"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n1",
                "label": "forbid used colors",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n1",
                "to": "n2",
                "label": "genuine obstruction",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "Rejecting one partial coloring is not yet rejecting all colorings."
          },
          "claim": "A colorless vertex kills its branch; a restricting vertex reduces lists under every feasible color.",
          "explanation": "Each list contains exactly the colors still compatible with the colored sampled neighbors. An empty list proves that particular partial coloring cannot extend. A restriction tree must retain the other feasible coloring branches until they too are killed.",
          "carry": "Use a minimum over feasible colors to make restriction branch-independent."
        },
        {
          "title": "Farness rules out too few useful vertices",
          "question": "Why must many vertices be colorless or restricting?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "repair cost",
                "relation": "≤",
                "right": "n|S∪U|+(1/2)Σv δφ(v)",
                "reason": "list-based coloring bound"
              },
              {
                "left": "|S∪U∪W|",
                "relation": "≥",
                "right": "εn/2",
                "reason": "otherwise repair is <εn²"
              }
            ],
            "focus": 1,
            "note": "δφ(v) is the minimum number of new list deletions over feasible colors."
          },
          "claim": "An ε-far graph has many vertices useful for advancing or killing any current branch.",
          "explanation": "Color each remaining vertex by a feasible color minimizing the number of compatible neighbors. The resulting monochromatic-edge bound would repair the graph too cheaply if both colorless and restricting vertices were scarce. Farness therefore forces the displayed lower count.",
          "carry": "Under the sample-size hypotheses, a fresh sampled vertex is useful with conditional probability at least 0.4ε."
        },
        {
          "title": "A list potential bounds all branch lengths",
          "question": "How many successful restrictions can a branch contain?",
          "diagram": {
            "kind": "table",
            "columns": [
              "quantity",
              "bound"
            ],
            "rows": [
              [
                "initial total list size",
                "3n"
              ],
              [
                "drop at a restricting step",
                "at least εn"
              ],
              [
                "restriction depth",
                "at most 3/ε"
              ],
              [
                "children per node",
                "at most 3"
              ]
            ],
            "focus": [
              2,
              3
            ],
            "note": "The tree can be embedded in a predetermined full ternary tree."
          },
          "claim": "The number of possible tree locations is less than 3^{3/ε+1}.",
          "explanation": "Every feasible color at a restricting vertex deletes at least εn available colors from neighboring lists. Since the initial potential is at most 3n and never increases, each branch has bounded depth. The branching factor then bounds the total collection that sampling must control.",
          "carry": "Use a union bound over fixed possible tree locations, not a retrospectively chosen branch."
        },
        {
          "title": "Make sampling defeat every surviving branch",
          "question": "How does the per-branch tail beat the number of branches?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "E useful samples",
                "relation": "≥",
                "right": "16/ε",
                "reason": "s=40/ε² and success ≥0.4ε"
              },
              {
                "left": "P(fewer than 3/ε successes)",
                "relation": "≤",
                "right": "e^{−169/(32ε)}",
                "reason": "binomial lower-tail bound"
              },
              {
                "left": "P(any branch survives)",
                "relation": "<",
                "right": "3^{3/ε+1}e^{−169/(32ε)}",
                "reason": "predetermined-tree union bound"
              }
            ],
            "focus": 2,
            "note": "The final expression is below 0.1 in the theorem’s stated parameter range."
          },
          "claim": "With high probability all branches terminate, certifying that the sampled graph is not three-colorable.",
          "explanation": "Conditional success probabilities permit a binomial lower-tail domination argument even though the process is adaptive. Its exponential decay beats the fixed ternary-tree count. Only when every branch has died does the sample give a genuine noncolorability witness.",
          "carry": "Both progress under every color and simultaneous branch control are essential."
        }
      ]
    },
    "challenges": [
      {
        "id": "tester-color-extension-1",
        "title": "Find the constant that beats the restriction tree",
        "minutes": 12,
        "skill": "Comparing an exponential tail with exponential branch count.",
        "connection": "The K₄ example kills one branch directly; the general proof must pay for every possible branch simultaneously.",
        "prompt": "Assume the same restriction-tree argument gives depth 3/ε, fewer than 3^{3/ε+1} possible locations, and conditional useful-sample probability at least 0.4ε. Replace the sample budget by C/ε². Derive the lower-tail exponent using the estimate exp(−(μ−3/ε)²/(2μ)). Find the least integer C for which this union bound tends to zero as ε decreases to zero. Explain why this asymptotic constant does not by itself reproduce the theorem’s finite 0.1 guarantee.",
        "hints": [
          "The mean lower bound is μ=0.4C/ε.",
          "Compare (0.4C−3)²/(0.8C) with 3 ln3, and require 0.4C>3."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the least integer C that makes the stated asymptotic union bound decay?",
          "expected": 30,
          "feedback": "For C=29 the tail coefficient is 8.6²/23.2≈3.18793<3ln3. For C=30 it is 9²/24=3.375>3ln3≈3.29584. The difference must be strictly positive."
        },
        "solution": [
          "The expected number of useful samples is at least 0.4C/ε; the branch needs at most 3/ε successes.",
          "The lower-tail bound has exponent −[(0.4C−3)²/(0.8C)]/ε, for C>7.5.",
          "The tree count contributes +(3ln3)/ε plus the constant ln3. Direct comparison shows the first working integer is C=30.",
          "A positive asymptotic exponent only guarantees decay for sufficiently small ε. The source’s uniform finite-range probability bound also controls constants and the stated n and ε assumptions."
        ],
        "rubric": [
          "Derive both exponential contributions.",
          "Check the strict mean condition and the neighboring integers.",
          "Separate asymptotic decay from a uniform finite-range error guarantee."
        ],
        "mistake": "A small failure probability for one branch does not suffice when the number of branches is exponential in 1/ε.",
        "followup": "Generalize the coefficient competition to k colors with list potential kn and at most k children per node."
      },
      {
        "id": "tester-color-extension-2",
        "title": "An average color loss does not control every branch",
        "minutes": 12,
        "skill": "The minimum-over-colors definition of a restricting vertex.",
        "connection": "The worked example follows color assignments one at a time; a general restriction step must work whichever feasible color is chosen.",
        "prompt": "A vertex v has feasible list {red,blue}. Among its still-uncolored neighbors, choosing red deletes red from one list, while choosing blue deletes blue from ten lists. The restricting threshold is five list deletions. Analyze proposed definitions using maximum or average color loss instead of minimum loss. Construct a partial-coloring/list realization of this local pattern using three fixed color anchors, and show why the potential-depth proof cannot use either proposed definition unchanged.",
        "hints": [
          "A branch may choose the feasible color with the smallest loss.",
          "Anchor triangles can force a neighbor’s list to be a chosen singleton."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the correct δφ(v) for this local pattern?",
          "expected": 1,
          "feedback": "The correct definition takes the minimum over feasible colors: min(1,10)=1. The maximum and average exceed five but do not guarantee a five-unit drop on the red branch."
        },
        "solution": [
          "The correct value is δφ(v)=min(1,10)=1, so v is not restricting at threshold five.",
          "The maximum loss is ten and the average is 5.5, but either would label v restricting while the red branch removes only one neighbor color.",
          "Realize the pattern with properly colored red,blue,green anchors: connect v to the green anchor; make one red-only neighbor adjacent to the blue and green anchors, and ten blue-only neighbors adjacent to the red and green anchors; connect these neighbors to v.",
          "A feasible branch can choose red, so the asserted guaranteed drop fails. Farness is used separately to find vertices whose minimum loss is large; a favorable or average color cannot replace that universal requirement."
        ],
        "rubric": [
          "Compute the correct minimum.",
          "Give a realizable list configuration.",
          "Identify the universal branch guarantee needed by the potential argument."
        ],
        "mistake": "The tree includes all feasible colors, so it cannot assume a favorable color choice at each restriction.",
        "followup": "Modify the local pattern so each color has large average influence but one branch repeatedly makes only a small potential drop."
      }
    ]
  },
  "core-triangle-removal": {
    "proof": {
      "goal": "Convert a dense-graph farness promise into many triangles, then into a justified sampling budget.",
      "scope": "The regularity lemma from Chapter 9 is an input to the assigned removal proof, not an extra assigned chapter here. The regular-triple counting deduction and sampling calculation are made explicit.",
      "frames": [
        {
          "title": "Charge every cleaning operation to the repair budget",
          "question": "Why must the total edge-deletion cost be below the farness threshold?",
          "diagram": {
            "kind": "table",
            "columns": [
              "deleted edge type",
              "purpose"
            ],
            "rows": [
              [
                "incident to exception set",
                "remove uncontrolled vertices"
              ],
              [
                "inside partition classes",
                "force distinct classes"
              ],
              [
                "irregular class pairs",
                "allow regular-pair estimates"
              ],
              [
                "very sparse class pairs",
                "retain positive densities"
              ]
            ],
            "focus": [
              0,
              1,
              2,
              3
            ],
            "note": "Choose the regularity parameters so the combined deletion cost is strictly less than εn²."
          },
          "claim": "A cleaned triangle-free graph would contradict ε-farness.",
          "explanation": "Regularity supplies an equitable partition, and the assigned parameter estimates make the four deletion categories fit inside the permitted budget. The strict inequality is what converts cleaning into a contradiction if no triangle remains; merely finding a partition does not do that.",
          "carry": "Some surviving triangle must use three dense regular class pairs."
        },
        {
          "title": "A surviving triangle identifies a regular triple",
          "question": "What structure remains around its three vertex classes?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 360,
                "y": 55,
                "label": [
                  "class A",
                  "size m"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 150,
                "y": 245,
                "label": [
                  "class B",
                  "size m"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 570,
                "y": 245,
                "label": [
                  "class C",
                  "size m"
                ],
                "tone": "output"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n1",
                "label": "η-regular, density≥d",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n1",
                "to": "n2",
                "label": "η-regular, density≥d",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n0",
                "to": "n2",
                "label": "η-regular, density≥d",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "A surviving triangle gives a triangle of usable partition classes, not yet the required triangle abundance."
          },
          "claim": "A,B,C form a dense η-regular triple.",
          "explanation": "Edges within classes, irregular pairs, and sparse pairs were deleted. Thus each surviving edge of the triangle belongs to a usable dense regular pair, and its three endpoints lie in distinct classes. Counting across those classes will upgrade existence to abundance.",
          "carry": "Select vertices in A with sufficiently large neighborhoods in both other classes."
        },
        {
          "title": "Count all triangles across the regular triple",
          "question": "Why do good vertices give a cubic number of triangles?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "number of good a∈A",
                "relation": "≥",
                "right": "(1−2η)m",
                "reason": "two regular-pair degree estimates"
              },
              {
                "left": "|NB(a)|, |NC(a)|",
                "relation": "≥",
                "right": "(d−η)m",
                "reason": "good-vertex definition"
              },
              {
                "left": "triangles across A,B,C",
                "relation": "≥",
                "right": "(1−2η)(d−η)³m³",
                "reason": "regularity of B,C; d≥2η"
              }
            ],
            "focus": 2,
            "note": "The neighborhood subsets are large enough for the B,C regularity estimate."
          },
          "claim": "A usable regular triple contains a positive cubic number of triangles.",
          "explanation": "At most ηm vertices fail each of the two degree estimates. For every remaining a, its two neighborhoods have size at least (d−η)m≥ηm. Regularity of the B,C pair supplies density at least d−η between them. Summing these edge counts over good a counts distinct triangles.",
          "carry": "The partition-size bound converts this into a density δ(ε)>0 in the whole graph."
        },
        {
          "title": "Amplify a real density lower bound",
          "question": "How many independent triple samples suffice once the triangle density is δ?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "P(one sample detects)",
                "relation": "≥",
                "right": "δ",
                "reason": "uniform vertex triple"
              },
              {
                "left": "P(q samples all miss)",
                "relation": "≤",
                "right": "(1−δ)^q ≤e^{−δq}",
                "reason": "independent samples"
              },
              {
                "left": "q",
                "relation": "≥",
                "right": "ln(1/β)/δ",
                "reason": "target error β"
              }
            ],
            "focus": 1,
            "note": "Only the structural theorem makes δ depend on ε rather than on n."
          },
          "claim": "The tester has a sample bound depending on ε and the error target, independent of graph size.",
          "explanation": "Sampling a uniformly random triple detects exactly when that triple induces a triangle. Once removal has supplied a positive density lower bound, independent repetitions yield the exponential miss bound. An isolated or sparse collection of triangles would not justify a constant budget.",
          "carry": "Every rejection is a genuine triangle witness; farness is needed for frequent detection."
        }
      ]
    },
    "challenges": [
      {
        "id": "triangle-removal-extension-1",
        "title": "Many triangles can still be sparse for testing",
        "minutes": 12,
        "skill": "Exact amplification and the dense farness promise.",
        "connection": "The six-vertex example has two disjoint triangles; scaling that pattern tests whether “many” means a positive triple density.",
        "prompt": "Let G be ten disjoint triangles on 30 vertices. Compute the exact success probability of a uniform unordered triple sample and the least number of independent samples giving miss probability at most 1/3. Derive the normalized number of edge deletions needed to make G triangle-free, then generalize to n/3 disjoint triangles. Explain why the growing sampling requirement does not contradict the constant-query theorem for fixed ε-far graphs.",
        "hints": [
          "There are C(30,3)=4060 triples and ten successful triples.",
          "One edge per component is necessary and sufficient for repair."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What is the least number of independent triple samples with miss probability at most 1/3?",
          "expected": 446,
          "feedback": "Each sample hits with probability 1/406. Solve (405/406)^q≤1/3 and round up; the least integer is 446."
        },
        "solution": [
          "The triangle density among unordered triples is 10/4060=1/406.",
          "Independent samples miss with probability (405/406)^q, giving q=ceil(ln(1/3)/ln(405/406))=446.",
          "The exact repair cost is ten deletions, normalized by n² as 10/900=1/90. In general, n/3 disjoint triangles need n/3 deletions, a normalized cost 1/(3n).",
          "For fixed ε, these graphs eventually cease to be ε-far. Their triple density is Θ(n^{−2}), so the Θ(n²) triple-sampling requirement is fully consistent with the removal-based theorem."
        ],
        "rubric": [
          "Normalize by the number of unordered triples.",
          "Use independent-sample amplification and round in the correct direction.",
          "Compare repair cost with a fixed dense-graph ε threshold."
        ],
        "mistake": "A triangle count linear in n is not a positive fraction of all Θ(n³) triples.",
        "followup": "For a uniformly sampled r-vertex set, estimate the r scale needed to hit a triangle in the general disjoint-triangle graph."
      },
      {
        "id": "triangle-removal-extension-2",
        "title": "Derive a regular-triple counting bound",
        "minutes": 12,
        "skill": "Using degree exceptions and regularity on the correct subsets.",
        "connection": "The finite example can count triangles directly; the removal proof must infer abundance from coarse pair information.",
        "prompt": "Let A,B,C be disjoint classes of 100 vertices each. Assume all three pairs are η-regular with η=0.05 and density at least d=0.4. Prove the continuous lower bound (1−2η)(d−η)³·100³ on the number of triangles across the classes. Show why each neighborhood pair is large enough for regularity. Finally round this continuous bound upward once to give an integer guarantee.",
        "hints": [
          "Discard at most η|A| bad vertices for each of B and C.",
          "For a good a, both neighborhoods have at least 35 vertices, exceeding η·100=5."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What integer guarantee results by rounding the stated continuous bound up once?",
          "expected": 38588,
          "feedback": "The bound is 0.9·0.35³·1000000=38587.5, hence at least 38588 triangles. This is the requested final rounding of the continuous estimate, not the sharpest possible use of intermediate integrality."
        },
        "solution": [
          "In an η-regular pair of density at least d, fewer than η|A| vertices can have degree below (d−η)|B|. Apply this to A,B and A,C.",
          "At least (1−2η)·100=90 vertices a have both neighborhood sizes at least 35.",
          "Each such pair of neighborhoods is large enough for regularity of B,C, so it has edge density at least d−η=0.35 and contributes at least 0.35·35² triangles through a.",
          "Summing gives 38587.5 as a continuous lower bound. Since the triangle count is integral, a single final upward rounding gives the stated guarantee 38588."
        ],
        "rubric": [
          "Account for both bad-vertex sets.",
          "Verify the regularity subset-size threshold.",
          "Count triangles once through their A vertex and handle the specified rounding."
        ],
        "mistake": "Regularity cannot be invoked on arbitrary tiny neighborhoods; the condition d−η≥η must be checked.",
        "followup": "Express the bound for unequal class sizes and identify the parameter condition under which the same argument works."
      }
    ]
  },
  "core-hereditary": {
    "proof": {
      "goal": "Describe a hereditary property by induced obstructions and derive a one-sided bounded-sample tester from induced removal.",
      "scope": "The induced-removal theorem and the general semi-hereditary characterization are deep stated inputs in the assigned text. These frames prove the elementary obstruction description and testing deduction.",
      "frames": [
        {
          "title": "Use induced obstructions, including nonedges",
          "question": "What forbidden pattern can certify that an induced sample fails the property?",
          "diagram": {
            "kind": "network",
            "nodes": [
              {
                "id": "n0",
                "x": 120,
                "y": 65,
                "label": [
                  "hereditary property P",
                  "closed under",
                  "induced restriction"
                ],
                "tone": "input"
              },
              {
                "id": "n1",
                "x": 360,
                "y": 65,
                "label": [
                  "forbidden induced H",
                  "possibly many sizes"
                ],
                "tone": "active"
              },
              {
                "id": "n2",
                "x": 600,
                "y": 65,
                "label": [
                  "G∉P",
                  "an induced H occurs"
                ],
                "tone": "output"
              }
            ],
            "edges": [
              {
                "from": "n0",
                "to": "n1",
                "label": "minimal obstructions",
                "tone": "active",
                "directed": true
              },
              {
                "from": "n1",
                "to": "n2",
                "label": "induced witness",
                "tone": "active",
                "directed": true
              }
            ],
            "note": "An induced witness specifies both present and absent edges."
          },
          "claim": "A hereditary property is exactly avoidance of a family of forbidden induced graphs.",
          "explanation": "Take all finite graphs outside P that are minimal under induced restriction. A graph in P contains none by heredity; a graph outside P has a minimal induced subgraph outside P. The forbidden family may be infinite and cannot generally be replaced by a single fixed graph.",
          "carry": "The structural theorem must handle both nonedges and potentially unbounded obstruction sizes."
        },
        {
          "title": "Invoke the actual induced-removal input",
          "question": "What bounded witness abundance does farness supply?",
          "diagram": {
            "kind": "table",
            "columns": [
              "input",
              "structural output"
            ],
            "rows": [
              [
                "accuracy ε",
                "bounded sample size M"
              ],
              [
                "ε-far from P",
                "bad-sample density δ>0"
              ],
              [
                "depends on ε and P",
                "not on graph size n"
              ]
            ],
            "focus": [
              1
            ],
            "note": "The deep theorem supplies these bounds; ordinary triangle removal is not a substitute."
          },
          "claim": "For fixed ε, a bounded random induced sample detects a violation with positive probability.",
          "explanation": "The removal statement converts dense edit distance from P into an abundance of bounded induced obstructions, or equivalently a suitable bounded bad-sample guarantee. Controlling only present-edge patterns would miss the required nonedges.",
          "carry": "Inspect the full induced graph on the sampled vertices."
        },
        {
          "title": "One-sidedness follows from heredity itself",
          "question": "Why can a graph in P never be rejected by this tester?",
          "diagram": {
            "kind": "inequality",
            "lines": [
              {
                "left": "G∈P",
                "relation": "⇒",
                "right": "G[S]∈P for every S",
                "reason": "heredity"
              },
              {
                "left": "sample contains induced H∉P",
                "relation": "⇒",
                "right": "G∉P",
                "reason": "contrapositive of restriction"
              },
              {
                "left": "P(false rejection | G∈P)",
                "relation": "=",
                "right": "0",
                "reason": "every rejection has a witness"
              }
            ],
            "focus": 2,
            "note": "A good sample does not certify that the entire graph belongs to P."
          },
          "claim": "Rejecting only a violating induced sample gives one-sided error.",
          "explanation": "The tester may be computationally expensive on its bounded sample, but it checks a finite induced graph exactly. Heredity makes every rejection sound regardless of sampling probability; removal is needed only to make detection frequent for far inputs.",
          "carry": "Soundness and detection probability arise from different ingredients."
        },
        {
          "title": "Amplify by uniting independent samples",
          "question": "Why does a bad sub-sample remain bad inside a larger induced sample?",
          "diagram": {
            "kind": "table",
            "columns": [
              "sampling step",
              "logical consequence"
            ],
            "rows": [
              [
                "q independent M-sets",
                "miss probability ≤(1−δ)^q"
              ],
              [
                "take their vertex union",
                "at most qM vertices"
              ],
              [
                "one bad M-set inside union",
                "union cannot belong to P"
              ]
            ],
            "focus": [
              2
            ],
            "note": "If the union were in P, all of its induced subgraphs would also be in P."
          },
          "claim": "A sufficiently large bounded sample reaches any desired fixed rejection probability.",
          "explanation": "Independent repetitions need not produce disjoint vertex sets. Their union still has bounded size, and any detected obstruction is an induced subgraph of that union. Thus the one-sided guarantee survives amplification without assuming independence of vertices within the union.",
          "carry": "Keep the deep removal input separate from this elementary sampling deduction."
        }
      ]
    },
    "challenges": [
      {
        "id": "hereditary-extension-1",
        "title": "Amplify an infinite-obstruction property",
        "minutes": 12,
        "skill": "One-sided amplification without a single fixed forbidden graph.",
        "connection": "The induced-cycle example has one small obstruction; a general hereditary property may have infinitely many forbidden sizes.",
        "prompt": "Assume a hereditary property P has the following removal consequence at a chosen ε: at least 1/16 of all eight-vertex subsets induce graphs outside P. Draw independent uniform eight-vertex subsets, take their union, and test the entire induced graph on that union. Find a vertex-budget bound giving rejection probability at least 0.95. Prove soundness and amplification even when sampled subsets overlap, and explain why no single fixed forbidden graph was required.",
        "hints": [
          "The independent objects are the sampled eight-vertex subsets.",
          "If any one sampled induced graph is outside P, heredity forces the induced graph on their union to be outside P."
        ],
        "probe": {
          "kind": "number",
          "prompt": "What vertex-budget bound q·8 follows from the least repetition count q?",
          "expected": 376,
          "feedback": "The miss probability is at most (15/16)^q. The least q with this at most 0.05 is 47, so the union uses at most 376 vertices."
        },
        "solution": [
          "Each independent eight-set is bad with probability at least 1/16, so all q are good with probability at most (15/16)^q.",
          "Solving for miss probability at most 0.05 gives q=47 and at most 8q=376 distinct sampled vertices.",
          "If a sampled eight-set is bad but the union induced graph were in P, heredity would force that eight-set to be in P, a contradiction. Overlap does not alter this implication.",
          "If G itself belongs to P, every induced union belongs to P and no rejection is possible. The argument uses bad induced subgraphs, not one named obstruction common to every bad sample."
        ],
        "rubric": [
          "Calculate the repetition count and vertex upper bound.",
          "Prove the union implication with the correct contrapositive.",
          "Distinguish independence of sample draws from overlap of their vertices."
        ],
        "mistake": "Overlapping vertex sets do not destroy independence when the sets themselves are drawn independently.",
        "followup": "Compare this union-of-samples tester with a single uniformly chosen 376-vertex induced sample."
      },
      {
        "id": "hereditary-extension-2",
        "title": "Ordinary copies create false rejections",
        "minutes": 12,
        "skill": "Induced characterization and sound witness counting.",
        "connection": "The chorded-cycle example distinguishes an induced obstruction from an ordinary subgraph. Cluster graphs give a different property where the distinction is decisive.",
        "prompt": "Prove that a graph has no induced three-vertex path P₃ exactly when each connected component is a clique. Then analyze the complete graph K₆: count its ordinary, not necessarily induced, P₃ subgraphs, counting a center and an unordered pair of endpoints. Explain why a detector that rejects on those ordinary copies would violate one-sidedness for this hereditary property. State what an induced-removal-based tester must inspect instead.",
        "hints": [
          "If a component is not complete, choose a shortest path between nonadjacent vertices.",
          "In a clique, every choice of center and two other vertices gives an ordinary two-edge path but also has the extra endpoint edge."
        ],
        "probe": {
          "kind": "number",
          "prompt": "How many ordinary P₃ subgraphs does K₆ have under the specified convention?",
          "expected": 60,
          "feedback": "There are six choices of center and C(5,2)=10 choices of unordered endpoints, giving 60. None is induced because the endpoints are adjacent."
        },
        "solution": [
          "A disjoint union of cliques contains no induced P₃: three vertices in one component form a clique, and different components cannot form the path.",
          "If a connected component is not a clique, a shortest path between nonadjacent vertices has its first three vertices forming an induced P₃, since a shortcut edge would shorten the path.",
          "K₆ has 6C(5,2)=60 ordinary P₃ subgraphs but zero induced P₃ copies. It belongs to the property.",
          "Rejecting an ordinary P₃ would therefore reject a valid input. A correct witness checks both path edges and the missing endpoint edge in the full induced triple."
        ],
        "rubric": [
          "Prove both directions of the component characterization.",
          "Specify and execute the ordinary-copy counting convention.",
          "Explain the exact nonedge needed for a sound induced witness."
        ],
        "mistake": "A forbidden induced path is not the same as forbidding every path subgraph.",
        "followup": "Show how adding or deleting a single edge can create an induced P₃, and explain why arbitrary edge monotonicity is absent."
      }
    ]
  }
};
