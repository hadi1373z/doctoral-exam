const EXAM_TRANSFERS = {
  "core-knapsack": [
    {
      "q": "A colleague chooses K=ε times the largest input profit divided by n, including infeasible items. Construct a family where the approximation proof fails. Repair the algorithm, including the zero-profit case.",
      "a": "Include one overweight item of profit M and a feasible item of profit 1. Taking M>n/ε rounds the feasible profit to zero, so an arbitrary optimum of the scaled instance may be empty. Remove overweight items before computing Pmax; if no positive-profit feasible item remains, return empty. Otherwise Pmax≤OPT and nK≤εOPT."
    },
    {
      "q": "Replace floor rounding by ceiling rounding in the profit DP. Does the same approximation proof survive? Give the correct additive-loss comparison or a counterexample, and bound the state space.",
      "a": "For ceiling profits, K sum p′(O)≥OPT and K sum p′(S)<p(S)+nK. Maximizing the scaled profit therefore gives p(S)>OPT−nK. The same loss bound survives after filtering, and each p′≤n/ε+1; the state bound changes only by O(n)."
    }
  ],
  "core-scheduling-scheme": [
    {
      "q": "After rounding large jobs, the total rounded workload can exceed mT. Identify the invalid step in a small-job insertion argument that still uses average load ≤T. Give a corrected bound.",
      "a": "Use original processing times for the final insertion or include the rounding slack in the total load. If rounded large jobs add at most εT per machine, the rounded total is ≤m(1+ε)T; a last small job adds at most εT, giving (1+2ε)T. Rescale the internal accuracy parameter."
    },
    {
      "q": "A feasibility test rejects a target T but is allowed to accept schedules of length (1+ε)T. Explain the one-sided implication needed for binary search and why rejection alone does not prove OPT>(1+ε)T.",
      "a": "The required implication is OPT≤T ⇒ acceptance; therefore rejection implies OPT>T. Acceptance supplies an actual schedule of length ≤(1+ε)T. It does not certify feasibility at T. Maintain lower and upper bounds with this gap and include the search precision in the final ratio."
    }
  ],
  "core-bin-scheme": [
    {
      "q": "Someone deletes the additive constant from an asymptotic bin-packing scheme because ε is small. Use the two-bin partition gap to explain precisely why this conclusion is invalid.",
      "a": "An asymptotic guarantee has the form A(I)≤(1+ε)OPT(I)+Cε. At OPT=2 the constant need not be negligible. An absolute ratio <3/2 would force an integer output below 3 whenever OPT=2, deciding whether two bins suffice. Quantifiers on sufficiently large OPT cannot be dropped."
    },
    {
      "q": "Rounding each sorted large item upward separately seems simpler than grouping. Identify the missing bounded-type argument and reconstruct the inter-block injection.",
      "a": "Without grouping there may be n distinct rounded sizes, so configuration enumeration need not have size depending only on ε. Equal-cardinality sorted blocks create boundedly many types. Map each rounded item of block j to the corresponding larger item of block j−1; handle the first block separately."
    }
  ],
  "core-sat-random": [
    {
      "q": "All variables are given the same fair random bit. Every literal still has marginal 1/2. Which clause-probability and derandomization claims remain valid? Supply a falsifying clause.",
      "a": "For x∨y, correlated equal bits give satisfaction probability 1/2, not 3/4. Literal marginals alone do not justify a product of failure probabilities. Linearity of expectation still holds, and conditional expectation still derandomizes a computable distribution, but its achievable starting expectation can be smaller."
    },
    {
      "q": "A formula contains x∨x and x∨¬x. Audit a claim that every two-literal clause is satisfied with probability 3/4 and repair the preprocessing and expectation.",
      "a": "The repeated clause is a unit clause with probability 1/2; the tautology is always satisfied. Remove duplicate literals and account for tautology weight as a constant. Apply 1−2^−k only to normalized clauses on distinct variables."
    }
  ],
  "core-sat-lp": [
    {
      "q": "A student averages the global 1/2 fair-assignment guarantee and the 1−1/e LP guarantee to claim 3/4. Locate the numerical and logical errors and give the clausewise repair.",
      "a": "Their average is about 0.566, not 0.75. Preserve clause length: fair success ≥(1−2^−k)z and LP success ≥[1−(1−1/k)^k]z. Their half-sum is ≥3z/4: check k=1 and k=2 exactly, and k≥3 with 7/8+1−1/e≥3/2."
    },
    {
      "q": "Suppose an LP optimum is smaller than a feasible Boolean assignment’s value. Can the rounding guarantee still be used against OPT? Diagnose the relaxation direction for a maximization problem.",
      "a": "No: that LP cannot be the intended relaxation. Every Boolean assignment must embed as an LP-feasible solution with the same objective, so LP optimum≥OPT. Then E[ALG]≥ρ LP≥ρ OPT; reversing this inequality destroys the guarantee."
    }
  ],
  "core-sdp-cut": [
    {
      "q": "Apply the edgewise hyperplane inequality to a graph with a negative edge weight. Show the inequality reversal and explain why the usual summation proof does not transfer.",
      "a": "For each nonnegative edge, pcut≥α(1−cos θ)/2. Multiplication by a negative weight reverses this comparison. Summing all these inequalities no longer lower-bounds the rounded objective by α times the SDP objective. A different formulation or proof is needed."
    },
    {
      "q": "A matrix has unit diagonal and all off-diagonal entries −0.9 in dimension three. Is it a feasible Gram relaxation? Produce a certificate and identify the missing constraint.",
      "a": "Its all-ones eigenvector has eigenvalue 1+2(−0.9)=−0.8, or directly 1ᵀX1<0. Unit diagonal and entrywise bounds do not imply positive semidefiniteness. PSD is essential for a real vector representation."
    }
  ],
  "core-color-sdp": [
    {
      "q": "A semicoloring colors only a constant fraction of vertices. A candidate quotes its color count as the final coloring bound. Supply the recurrence and account for the extra logarithm.",
      "a": "If each round removes at least a fixed fraction, O(log n) rounds suffice. Applying a bound valid for each remaining graph and using disjoint palettes gives at most O(log n) times the one-round bound. A semicoloring is not itself a complete coloring."
    },
    {
      "q": "Solve the degree-threshold balance symbolically rather than quoting a decimal exponent. Explain which two algorithmic costs are balanced.",
      "a": "Write a=log₃2. From n/σ=σ^a obtain σ=n^(1/(1+a)) and common cost n^(a/(1+a)), approximately n^0.38685. This balances high-degree neighborhood handling against low-degree semicoloring, with the iteration logarithm counted separately."
    }
  ],
  "core-gaussian-color": [
    {
      "q": "The selected vertex set has large expectation but also many internal edges. Derive a deterministic repair inequality and explain why expected size alone does not certify an independent set.",
      "a": "Delete at most one endpoint for each induced edge; the surviving independent set has size at least |S|−e(S). Thus E[|S|−e(S)] is the relevant lower bound. Pairwise Gaussian tail control is needed to keep the edge term below the vertex term."
    },
    {
      "q": "Two adjacent unit vectors have correlation −1/2. Explain why treating their Gaussian projections as independent gives the wrong joint tail, and state the variance of their sum.",
      "a": "For a standard Gaussian g, projections U,V have covariance −1/2 and unit variances, so Var(U+V)=1. The event U,V≥t implies U+V≥2t; this yields a stronger exponential bound than multiplying unrelated marginal estimates. Keep the marginal tail’s polynomial prefactor when optimizing."
    }
  ],
  "core-dual-cover": [
    {
      "q": "There is one element belonging to M singleton sets. Contrast maximum set size with element frequency and explain which one appears in primal–dual charging.",
      "a": "Maximum set cardinality is 1, but the element frequency is M. In ∑chosen S cS=∑e ye times the number of chosen sets containing e, the multiplicity is bounded by element frequency, not set size. Selecting every tight set can cost M."
    },
    {
      "q": "A tight set ceases to be tight after a later dual increase on one of its elements. Explain what the algorithm must freeze or restrict to preserve dual feasibility.",
      "a": "Once an element is covered, its dual stops increasing. Only uncovered-element duals are raised, and any set containing such an element has not already been selected as covering it. Stop at the next tight constraint; no set’s total dual may exceed its cost."
    }
  ],
  "core-dual-path": [
    {
      "q": "The set of all tight edges includes a cycle and dead-end branches. Why is charging all those edges to the dual invalid? Give the equality needed after pruning.",
      "a": "A raised cut may be crossed several times by that edge set. Prune to an s–t path whose intersection with each raised reachable-set cut has exactly one edge. Then ∑e in P ce=∑S yS |P∩δ(S)|=∑S yS, matching the feasible dual."
    },
    {
      "q": "Take shortest-path labels d(v) and the truncated potential min(d(v),r). Prove edge feasibility and explain how integrating growing cuts recovers the path length.",
      "a": "For every edge uv, |d(u)−d(v)|≤cuv, and truncation is 1-Lipschitz, so |min(d(u),r)−min(d(v),r)|≤cuv. Growing distance sublevel sets until d(t) raises total cut weight d(t), which equals an optimal path length."
    }
  ],
  "core-steiner": [
    {
      "q": "A pruned forest has a component of degree five. Does that refute the factor-two proof? Replace the false pointwise degree claim by the correct amortized statement.",
      "a": "No. The analysis bounds the sum of relevant component degrees during a growth interval, using acyclicity and the fact that inactive components of the contracted pruned forest cannot be useless leaves. Individual active components may have degree above two; the total is at most twice the number of active components."
    },
    {
      "q": "An already satisfied component continues growing its dual. Identify the dual objective being paid for and why active status must be defined by an unsatisfied demand pair.",
      "a": "Dual variables correspond to cuts separating a required pair. A component with no outstanding pair crossing it has no eligible separating-cut variable to raise. Continuing indiscriminately can charge growth outside the relaxation and breaks the cost-versus-dual accounting."
    }
  ],
  "core-tree-metrics": [
    {
      "q": "Prove that an MST on an n-cycle with unit edge lengths can distort one original edge by n−1. Explain why domination alone is insufficient for the expected approximation guarantee.",
      "a": "Every MST deletes one edge; that edge’s endpoints then have tree distance n−1 while original distance is 1. A useful embedding also bounds expected stretch for each pair. Domination gives only the lower direction; it cannot control expected routed cost."
    },
    {
      "q": "The algorithm selects its comparison optimum after seeing the random tree. Identify the quantifier problem and give the valid linearity-of-expectation charging order.",
      "a": "Fix an optimal graph solution independently of the random embedding. Charge each of its routed demands or capacity contributions under the per-pair expected-stretch bound, then sum expectations. Adaptively choosing the comparison object can correlate it with rare highly distorted pairs and invalidate that bound."
    }
  ],
  "core-hardness": [
    {
      "q": "A reduction distinguishes OPT=M from OPT≤sM. Explain the strict approximation threshold for maximization and why an algorithm achieving exactly s need not separate the cases.",
      "a": "A ratio ρ>s produces value >sM in every YES instance and at most sM in every NO instance. At ρ=s the guaranteed YES output may equal sM, so there is no strict separation. Include rational precision and the polynomial size of the gap construction."
    },
    {
      "q": "A verifier reads q constant bits using r random bits, but its predicate depends on the query answers. Explain how one random tape still yields a constant-arity constraint and count constraints.",
      "a": "For each tape, unfold its constant-depth adaptive query tree. It has at most 2^q−1 possible query positions, a constant, so acceptance defines a constant-arity predicate on their union. There are 2^r tapes; r=O(log n) makes the constraint list polynomial."
    }
  ],
  "core-lfkn-permanent": [
    {
      "q": "A prover waits to see the interpolation point before sending the polynomial. Explain the cheating strategy and restore the message order and error bound.",
      "a": "After learning r, the prover can choose a polynomial agreeing with the desired false story at that point without having committed to one low-degree discrepancy. Require the bounded-degree polynomial first, check its claimed aggregate, then sample fresh r. A nonzero discrepancy of degree d vanishes with probability at most d/|F|."
    },
    {
      "q": "An integer permanent is verified modulo a prime smaller than its possible magnitude. Does one congruence identify the integer? State a valid reconstruction condition.",
      "a": "No: distinct integers can have the same residue. Bound the permanent’s magnitude from the input, then use a sufficiently large modulus or several primes whose product exceeds the full range of possible values. Chinese-remainder reconstruction is unique only with that range bound."
    }
  ],
  "core-lfkn-consequences": [
    {
      "q": "A computation makes Q adaptive counting queries. Each invoked protocol has error 1/3. Audit the composed soundness and choose an error budget.",
      "a": "Adaptive composition does not make the failure events independent. Conditional soundness for each query plus a union bound gives total error at most Qδ. Choose δ≤η/Q for desired error η and account for the amplification cost; use the first incorrect accepted query argument."
    },
    {
      "q": "Why is saying PH reduces to a counting oracle not already a proof that PH⊆IP? Identify the additional closure simulation and its resource obligations.",
      "a": "A verifier must emulate the polynomial-time oracle computation while interactively certifying claimed answers, including adaptive queries. It needs polynomial communication and time, a sound error budget, and correct encoding of counting values. Toda’s reduction alone supplies none of those interactive details."
    }
  ],
  "core-qbf": [
    {
      "q": "Apply multilinearization to f(x)=x². Compare f and Rf on Boolean points and at a non-Boolean field element. Explain why preserving the Boolean cube is the correct invariant.",
      "a": "Rf(x)=(1−x)f(0)+xf(1)=x. They agree at 0 and 1 but generally not elsewhere. The reduction preserves the quantified Boolean formula’s value while controlling degree; random evaluations are checked using the operator identity, not an assertion that f=Rf everywhere."
    },
    {
      "q": "Replace ∃ by the real-field expression (a+b)/2. Evaluate its Boolean truth table and explain why the correct arithmetization is different.",
      "a": "An existential OR is a+b−ab, not an average. On (1,0) an average gives 1/2 instead of 1, and on a field it does not encode Boolean OR. Universal AND is ab; multilinearization must be inserted to prevent degree blowup."
    }
  ],
  "core-private-ip": [
    {
      "q": "A verifier hides two fair bits and accepts if the prover’s next message equals both. Compare the legal optimum with an optimizer allowed to inspect the random tape. State the transcript invariant that blocks this error.",
      "a": "A legal fixed guess succeeds with probability 1/4; a tape-aware guess succeeds with probability 1. At each prover node one message must be chosen uniformly across all random tapes consistent with that public history. Maximize the total accepting-tape numerator, not one choice per hidden tape."
    },
    {
      "q": "At a verifier node, two different visible messages partition the consistent tape set unevenly. Why is an unweighted average over visible messages wrong? Give the exact recurrence.",
      "a": "Visible messages need not be equiprobable. Let F(h) count the maximum accepting tapes among tapes consistent with public history h under one legal continuation. Then F(h)=sum_z F(hz) at a visible verifier-message step, and F(h)=max_y F(hy) at a prover step. Normalize once by the initial number of random tapes."
    }
  ],
  "core-bfl-oracle": [
    {
      "q": "Two provers return consistent answers for the one point cross-checked today, but the first changes its answer according to the surrounding query bundle. Explain why agreement does not define one oracle.",
      "a": "Pairwise observed agreement only constrains that sampled context. A contextual first prover can assign different values to the same point when it appears in different bundles. Soundness requires a consistency/proximity theorem yielding one fixed decoded function with quantitative error, before using it as an algebraic proof."
    },
    {
      "q": "Allow the second prover to learn the first prover’s entire query before answering. Describe why a consistency test becomes vacuous even without direct access to the first answer.",
      "a": "A deterministic shared strategy may compute the first prover’s context-dependent answer from its full query. The second can reproduce the designated answer rather than commit to a context-independent point value. Query isolation is part of the model, not just a ban on explicit answer forwarding."
    }
  ],
  "core-bfl-multilinear": [
    {
      "q": "The function f(x,y)=xy is multilinear but f(t,t)=t². Does a degree-two restriction on this diagonal refute multilinearity? State the test geometry precisely.",
      "a": "No. Multilinearity bounds degree separately in each coordinate; it does not make every arbitrary line affine. Axis-parallel restrictions of xy are affine, whereas a diagonal restriction can have degree two. State exactly which restrictions and degree bounds the actual test uses."
    },
    {
      "q": "A function passes every sampled local test in one run. Explain why this observation is not a theorem that the function is globally multilinear, and write the quantitative implication a soundness proof needs.",
      "a": "A finite random sample can miss all defects. One needs a theorem of the form: sufficiently high acceptance probability over the tester’s random choices implies closeness to a single multilinear function, with specified distance and rejection parameters. Decode that function before checking the encoded computation."
    }
  ],
  "core-bfl-nexp": [
    {
      "q": "A polynomial-time verifier asks each of two provers q(n)-bit questions and receives a(n)-bit answers. Count deterministic strategy-table bits, then explain how NEXP checks the acceptance probability.",
      "a": "Each prover needs at most 2^q(n) a(n) table bits. Guess both tables in nondeterministic exponential time, enumerate at most 2^r(n) verifier tapes, and simulate each transcript using those fixed local tables. This is exponential for polynomial q,a,r, including polynomially many rounds and local histories."
    },
    {
      "q": "Optimize prover one’s response independently for each verifier random tape while proving MIP⊆NEXP. Why can this accept impossible strategies?",
      "a": "The same local question or history can arise under different hidden tapes or other-prover questions. A valid prover must answer consistently across those occurrences. Guess one fixed local strategy table first; tape-by-tape optimization illegally grants hidden information and inconsistent answers."
    }
  ],
  "core-gmw-def": [
    {
      "q": "A simulator reproduces only acceptance probability and ignores the verifier’s random tape and auxiliary input. Explain why this does not meet zero knowledge and state the missing quantifiers.",
      "a": "Acceptance is only one bit of the view; the transcript may reveal a witness while preserving that bit’s distribution. For every allowed efficient verifier and auxiliary input there must be a simulator whose output is indistinguishable from the entire real view on YES instances, under the chosen perfect/statistical/computational definition."
    },
    {
      "q": "In graph-isomorphism simulation, a malicious verifier chooses its challenge as a function of the first message. Why does guessing that challenge still succeed with probability 1/2?",
      "a": "The simulator chooses a guess b and a uniform relabeling of Gb. Since the two input graphs are isomorphic, the first-message distribution is identical for both b. Conditional on that message, the guess is still uniform, so any verifier challenge matches it with probability 1/2. This uses the YES-instance isomorphism."
    }
  ],
  "core-gmw-gni": [
    {
      "q": "A malicious verifier sends a graph unrelated to either input and asks which graph generated it. Why cannot the honest-verifier simulator argument simply be reused?",
      "a": "The real honest verifier knows a source bit and isomorphism for its challenge; a malicious verifier need not. An efficient simulator may be unable to classify the arbitrary graph. The full zero-knowledge construction needs the additional verifier-certification machinery; soundness of the basic GNI test does not supply it."
    },
    {
      "q": "Suppose the two input graphs are isomorphic but have different numbers of relabeling permutations leading to one labeled graph. Can that leak the source bit? Analyze automorphisms.",
      "a": "Isomorphic input graphs have the same automorphism-group size and the same orbit of labeled graphs. Uniform permutations therefore induce identical challenge distributions. The hidden fair source bit remains independent of the challenge, so even an unbounded prover succeeds with probability at most 1/2."
    }
  ],
  "core-gmw-np": [
    {
      "q": "A cheating verifier chooses its edge after seeing commitments. Explain why a simulator cannot assume a uniform edge choice, and where computational hiding enters the guessing argument.",
      "a": "The verifier’s choice may be arbitrarily message-dependent. Use commitments hiding the simulator’s guessed edge and colors so that the verifier cannot efficiently correlate its challenge with that guess beyond the indistinguishability bound. Rewinding succeeds with probability approximately 1/m, not because the verifier samples uniformly."
    },
    {
      "q": "All edges are tested once in parallel using one commitment to one coloring. Could revealing every endpoint color preserve zero knowledge? Contrast this with sequential fresh commitments.",
      "a": "Opening all endpoints can reveal an entire valid coloring, a witness. The single-edge simulator does not extend by simply opening everything. Sequential repetition with fresh random color permutations and commitments has its own simulation argument; parallel composition requires an additional proof and may change knowledge leakage."
    }
  ],
  "core-four-functions": [
    {
      "q": "All four functions are allowed to take negative values. Explain why the sum-product theorem cannot be extended by simply repeating the induction, and identify a concrete nonnegativity use.",
      "a": "The induction multiplies and compares nonnegative slice sums and uses monotone inequalities for products. With negative factors, multiplication can reverse inequalities and sum-product comparisons fail. State nonnegativity explicitly; shifting functions does not generally preserve the multiplicative pointwise hypothesis."
    },
    {
      "q": "On a one-coordinate Boolean lattice, write every pointwise hypothesis and show which cross terms must be controlled in the product of sums.",
      "a": "For x,y∈{0,1}, require α(x)β(y)≤γ(max(x,y))δ(min(x,y)). The x=y terms control α0β0 and α1β1; the x≠y terms involve γ1δ0. The conclusion compares all four terms of (α0+α1)(β0+β1); the cross-term combination is the key two-point lemma, not an assumed termwise matching to γ0δ1."
    }
  ],
  "core-fkg": [
    {
      "q": "A measure is uniform on {01,10}. The events that coordinate one or coordinate two equals one are increasing. Compute their covariance and diagnose the missing hypothesis.",
      "a": "Each event has probability 1/2 and their intersection has probability zero, so covariance is −1/4. This measure fails log-supermodularity: μ00 μ11=0<μ01 μ10. Increasing events alone do not imply positive association under an arbitrary measure."
    },
    {
      "q": "FKG is stated for nonnegative increasing functions, but a desired increasing function takes negative values. Give the finite-space reduction and explain why covariance is unchanged.",
      "a": "Subtract each function’s minimum to obtain nonnegative increasing functions. Cov(f+c,g+d)=Cov(f,g), so the resulting nonnegative covariance transfers back. Finiteness supplies finite minima; shifting the measure or the theorem’s four arbitrary functions is a different operation."
    }
  ],
  "core-harris": [
    {
      "q": "Condition G(n,p) on having exactly one edge among two possible edges. Apply two increasing edge-presence events and test whether the product-measure proof survives.",
      "a": "The events each have probability 1/2 and never occur together, giving covariance −1/4. Conditioning on the edge count introduces dependence. The product-measure last-coordinate induction cannot be reused without a different inequality."
    },
    {
      "q": "Two increasing events are defined on unequal independent Bernoulli biases. Derive the last-coordinate covariance contribution instead of assuming every bias is 1/2.",
      "a": "Let ai,bi be conditional event probabilities for last bit i. Total covariance is the mean conditional covariance plus p(1−p)(a1−a0)(b1−b0). Induction gives nonnegative conditional covariances and monotonicity gives nonnegative increments for every p∈[0,1]."
    }
  ],
  "core-xyz": [
    {
      "q": "For three incomparable labeled elements a,b,c, compute P(a<b), P(a<c), and their intersection under a uniform linear order. Compare with the product.",
      "a": "The marginals are each 1/2. The intersection says a comes first, so its probability is 1/3, which exceeds 1/4. The induced rank comparisons are dependent even in this simplest case."
    },
    {
      "q": "Assign independent continuous random ranks, then condition on all poset inequalities. Why is citing product-measure Harris before conditioning not a proof of the XYZ inequality?",
      "a": "The conditioning event can destroy coordinate independence and the rank-comparison events need not have the required common coordinatewise monotonicity. A counting or lattice argument for the conditional uniform linear-extension distribution is still needed."
    }
  ],
  "core-azuma": [
    {
      "q": "Expose all n² adjacency-matrix entries independently, including both copies of every undirected edge. Diagnose the model and compare edge exposure with vertex exposure for chromatic number.",
      "a": "The two symmetric entries are the same edge and are not independent copies. An edge exposure and a vertex exposure generate different filtrations and increment counts. Chromatic number changes by at most one when all edges incident to one vertex are altered, so a vertex exposure can use n bounded increments rather than Θ(n²)."
    },
    {
      "q": "A martingale has one enormous jump of magnitude L but a small reported variance. Explain why the bounded-increment Azuma denominator cannot be replaced by that variance without extra hypotheses.",
      "a": "Azuma uses deterministic bounds ci on every increment and denominator ∑ci². A rare large jump may dominate the tail. Variance-sensitive bounds require additional jump control and their own theorem; small variance alone does not imply the quoted sub-Gaussian tail."
    }
  ],
  "core-chromatic": [
    {
      "q": "A student counts all cliques and calls the indicators independent. Describe overlap dependence and why an edge-disjoint packing is a different concentration object.",
      "a": "Cliques sharing edges depend on the same edge variables, so their indicators are not independent. A maximum edge-disjoint packing limits the effect of changing one edge and supports a sharper exposure argument. Its relationship to chromatic number still needs the chapter’s structural reasoning."
    },
    {
      "q": "Someone states the sparse random-graph chromatic window for every p. Explain why the regime p=n^−α with α>5/6 and the small-induced-subgraph coloring input cannot be silently omitted.",
      "a": "The window theorem’s sparsity hypotheses make its auxiliary structural estimates valid. A proof must state those hypotheses and identify where small induced subgraphs are 3-colorable. Omitting them changes the theorem; a coarse Azuma bound alone does not establish the narrow window."
    }
  ],
  "core-gradation": [
    {
      "q": "An adaptive algorithm queries the most influential coordinate next. Explain how a pathwise variance budget differs from summing worst-case squared effects over every possible coordinate.",
      "a": "The adaptive filtration depends on previous answers. A valid bound must control the predictable conditional variance accumulated along every realized path, together with a maximum jump/effect condition. A deterministic sum of global worst-case effects is a different, often weaker quantity; neither may be substituted without checking the theorem."
    },
    {
      "q": "On the cube, f(x)=sum xi. Write its conditional-expectation martingale under unequal independent biases and compute each increment bound explicitly.",
      "a": "After revealing i coordinates, Mi=sum j≤i xj+sum j>i pj. The increment is xi−pi, whose absolute value is at most max(pi,1−pi)≤1. The variance contribution is pi(1−pi); these are distinct inputs to distinct concentration bounds."
    }
  ],
  "core-azuma-app": [
    {
      "q": "A random map [n]→[n] changes one image from a to b. Can the number of missing values change by two? Examine all possibilities and give the sharp bound.",
      "a": "Only occupancy of a and b can change. Losing the last preimage of a can add one missing value; gaining the first preimage of b can remove one. If both happen they cancel. Thus the net absolute change is at most one, not two."
    },
    {
      "q": "A signed vector sum changes εi from +1 to −1. Derive the norm sensitivity and explain why bounding it by ||vi|| loses a factor two.",
      "a": "The vector sum changes by −2vi. The reverse triangle inequality gives a change in its norm of at most 2||vi||. This factor enters squared in an Azuma denominator, so omitting it changes the exponential constant."
    }
  ],
  "core-talagrand": [
    {
      "q": "For x=01 and A={00,11}, compute the closest point in the convex hull of mismatch vectors. Explain why ordinary Hamming distance gives a different answer.",
      "a": "The mismatch vectors are (0,1) and (1,0). Their convex hull has minimum Euclidean norm at (1/2,1/2), giving dT=1/√2. Hamming distance is 1. Convexification permits a fractional mixture; it is not the Euclidean norm of one selected mismatch vector."
    },
    {
      "q": "A proof chooses a different witness y∈A for each weight vector and then swaps min and max without justification. State the geometric fact needed for the dual convex-distance formula.",
      "a": "For the compact convex hull K of nonnegative mismatch vectors, the Euclidean distance to the origin equals max over nonnegative unit vectors α of min v∈K α·v. This follows from separating at the closest point, not an arbitrary min-max swap over the nonconvex witness set."
    }
  ],
  "core-certificate": [
    {
      "q": "For maximum matching, distinguish a certificate of X≥b from evidence that X=b. Explain why b present edges suffice for the former but not the latter.",
      "a": "Exhibit b pairwise vertex-disjoint present edges. Any completion retaining those edge coordinates has a matching of size at least b, so this is a b-coordinate certificate for X≥b. It does not exclude a larger matching and is not an exact-optimum certificate."
    },
    {
      "q": "Replace independent edge indicators by a uniformly chosen graph with exactly m edges. Which hypothesis of the product-space certificate argument fails?",
      "a": "The coordinates are no longer independent: conditioning on the edge count couples them. Lipschitzness and short certificates remain combinatorial facts, but the stated Talagrand product-space inequality cannot be applied unchanged. A concentration theorem for that model is required."
    }
  ],
  "core-kim-vu": [
    {
      "q": "Differentiate the triangle-count polynomial with respect to one edge, two adjacent edges, and two disjoint edges. Explain why a single mean parameter cannot replace these scales.",
      "a": "The one-edge derivative sums n−2 products of the other two triangle edges, with expectation (n−2)p². Two adjacent edges leave their completing edge, expectation p; two disjoint edges occur in no triangle, giving zero. A third derivative on a triangle is 1. These scales may compete with μ=C(n,3)p³."
    },
    {
      "q": "If p tends to zero so fast that μ stays bounded, why cannot a dense-regime relative concentration conclusion simply be retained?",
      "a": "The higher derivative expectation scales need not be negligible compared with μ. Rare individual triangles can dominate the count, and a bounded mean does not support vanishing relative fluctuations by the dense-regime argument. Check every theorem parameter and its required scale."
    }
  ],
  "core-shannon": [
    {
      "q": "A code corrects a BSC with vanishing average error. Does it necessarily correct every error vector of weight at most pn? Contrast the quantifiers and the minimum-distance condition.",
      "a": "No. Channel reliability averages over random noise and allows a small bad set; worst-case correction demands disjoint radius-t Hamming balls, equivalently minimum distance at least 2t+1. A typical-set random-coding proof does not supply that adversarial guarantee."
    },
    {
      "q": "In the random-coding union bound, someone multiplies the Hamming-ball volume by the number of codewords without dividing by 2^n. Derive the correct confusion term.",
      "a": "For a uniform independent competing codeword, probability of lying in a radius-t ball is Vol(n,t)/2^n. Union over M−1 competitors gives at most (M−1)Vol(n,t)/2^n. Separate this from the probability that actual noise leaves the chosen typical radius."
    }
  ],
  "core-liar": [
    {
      "q": "The sphere-counting necessary condition is satisfied. A candidate asserts that an adaptive winning questioning strategy therefore exists. Locate the missing construction.",
      "a": "Counting only bounds the total response volume available. It does not ensure that each adaptive question can split all residual lie-state weights appropriately. A sufficient strategy requires a recursive construction maintaining a feasible state; the necessary sphere bound alone is not its converse."
    },
    {
      "q": "Derive B(q,i)=[B(q−1,i)+B(q−1,i−1)]/2 and explain how it gives the conservation identity for the two possible answer states.",
      "a": "Apply Pascal’s identity to 2^−q sum j≤i C(q,j), with B(q,−1)=0. For each chip, the two branch contributions average to its current weight. Summing shows that at least one branch retains at least the current weight, which supports the adversary’s impossibility argument."
    }
  ],
  "core-tenure": [
    {
      "q": "At total weight exactly one, a player claims the strict W<1 defense still applies. Explain the boundary and exhibit an equal split for two level-one chips.",
      "a": "Equality belongs to Paul’s winning side. Each level-one chip weighs 1/2; choose one in each part so both branch weights are 1 after the chosen part moves down one level. The proof at W<1 cannot be extended to equality by continuity because reaching level zero is a discrete win."
    },
    {
      "q": "A partition splits total positive-level chip weight W into w and W−w. Compute both next weights and identify the dyadic splitting condition needed to keep both at least one.",
      "a": "Each branch retains one part and doubles its weights, giving 2w and 2(W−w). Both are at least one iff 1/2≤w≤W−1/2. For dyadic chip weights at positive levels, the splitting lemma supplies such a partition when W≥1; mere equality of the average to W is insufficient."
    }
  ],
  "core-balancing": [
    {
      "q": "Random signs beat every fixed nonadaptive vector sequence with positive probability. Does that sentence alone prove a deterministic strategy against an adaptive Pusher? State the needed game quantifiers.",
      "a": "No. The tail estimate must hold against every adaptive opponent strategy conditional on the evolving history. Then a finite perfect-information game with no deterministic winning strategy would have an opponent forcing failure against every randomized strategy, contradicting the positive success probability. A fixed-sequence union bound alone does not address adaptivity."
    },
    {
      "q": "For each coordinate, a Pusher chooses increments of magnitude at most one using past signs. Derive an Azuma union bound across n coordinates and choose a threshold giving failure probability at most 1/2.",
      "a": "The signed coordinate sum is a martingale with n increments bounded by one. Two-sided Azuma and a union bound give at most 2n exp(−t²/(2n)). Taking t=√(2n ln(4n)) makes this at most 1/2, yielding the upper scale O(√(n ln n))."
    }
  ],
  "core-half-liar": [
    {
      "q": "Replace the half-lie response set by an ordinary Hamming ball. Explain the directional error and how the response count depends on the true answer string.",
      "a": "Only a truthful No can change to Yes, so possible corruptions lie in a directed Boolean neighborhood. A string with z truthful No positions permits sum j≤k C(z,j) corruptions, rather than sum j≤k C(q,j) for every string. The asymmetry drives the refined counting and construction."
    },
    {
      "q": "The theorem is asymptotic for fixed k. Let k grow with q and reuse the displayed equivalent. Explain why this is not justified by the fixed-k statement.",
      "a": "An asymptotic equivalent with fixed k may have error terms depending on k. No uniform control in a growing-k regime follows. The assigned text’s worked k=1 argument also does not replace a proof for all growing k."
    }
  ],
  "core-entropy": [
    {
      "q": "A uniform family has all coordinate marginals 1/2. Does that force the family to be the full cube? Give a strict-inequality example in the entropy bound.",
      "a": "No. The family {00,11} has fair marginals but entropy 1, while the sum of coordinate entropies is 2. Equality in subadditivity requires independent coordinates; marginal fairness alone does not imply it."
    },
    {
      "q": "Characterize equality for a uniform set family in |F|≤2^(sum H₂(pi)). Why is saying independent biased Bernoulli coordinates insufficient without the uniform-family constraint?",
      "a": "Equality requires independent coordinates. A uniform distribution on its support can be an independent product only when every nonfixed coordinate is fair; otherwise supported words have unequal probabilities. Thus the uniform family must be a subcube with some fixed coordinates."
    }
  ],
  "core-shearer": [
    {
      "q": "Every coordinate is covered twice except one, which appears once. Is k=2 still valid? Construct a random vector concentrated entirely on the undercovered coordinate.",
      "a": "Let that coordinate be one fair bit and all others constant. Then 2H(X)=2 but the sum of projection entropies is only 1. The minimum coverage, not average coverage, determines k."
    },
    {
      "q": "A projection of a uniform family is not uniformly distributed on its support. Does this invalidate the cardinality form of Shearer? Supply the missing inequality.",
      "a": "No. Shearer applies to actual projection distributions, and H(XS)≤log₂|πS(F)| regardless of uniformity. Since the full family distribution is uniform, H(X)=log₂|F|. Combine and exponentiate; do not assert uniform projection distributions."
    }
  ],
  "core-tester-color": [
    {
      "q": "A tester greedily extends one partial 3-coloring and rejects if that branch fails. Give the reason this can reject a 3-colorable graph and state the correct branching invariant.",
      "a": "A locally proper choice may not extend even when another choice does. One-sided correctness requires preserving every possible restriction of a global proper coloring, or exhaustively testing the sampled induced graph’s colorability. Failure of one branch is not an obstruction to all colorings."
    },
    {
      "q": "Normalize distance by n instead of n² while keeping the same constant-sample theorem. Explain how this changes the promise and why one-sided acceptance on colorable inputs is only half the tester proof.",
      "a": "Dense graph distance counts edge edits relative to n². An εn-edit promise is much weaker and does not inherit the same sampling guarantee. Besides never rejecting a colorable graph, prove rejection probability at least the specified constant for every ε-far graph under the correct normalization."
    }
  ],
  "core-triangle-removal": [
    {
      "q": "There are T unordered triangles. A tester samples uniformly from unordered vertex triples with replacement across trials. Derive the exact rejection probability after q trials and a sufficient q.",
      "a": "One-trial probability is p=T/C(n,3), not T/n³. Independent trials reject with probability 1−(1−p)^q. Since (1−p)^q≤exp(−pq), q≥ln(1/η)/p suffices for miss probability at most η; round q up."
    },
    {
      "q": "A graph contains one triangle on n vertices. A tester sees no triangle in ten samples. Can it conclude closeness to triangle-free with the removal lemma alone? Separate the promise from the observation.",
      "a": "No-triangle samples are inconclusive without a quantitative farness promise and sample bound. One triangle is removable by one edge, so its normalized distance tends to zero. The removal lemma says ε-far graphs have at least δ(ε)n³ triangles; use that density to choose the number of samples."
    }
  ],
  "core-hereditary": [
    {
      "q": "Use ordinary, noninduced triangle removal to claim a one-sided tester for an arbitrary hereditary property. Identify the missing theorem and the difference between induced and noninduced witnesses.",
      "a": "A hereditary property is closed under vertex deletion and may forbid induced patterns that include nonedges. Ordinary triangle removal controls one noninduced pattern only. Need an induced-removal theorem with quantitative bounded witnesses for the relevant forbidden family, including potentially infinitely many patterns."
    },
    {
      "q": "A property has infinitely many minimal forbidden induced graphs. Explain why no single fixed obstruction-size bound follows from heredity alone, and what ε-dependent conclusion testability supplies.",
      "a": "Heredity identifies the property with avoidance of its entire forbidden induced family, whose members can have unbounded sizes. The removal/testability theorem supplies, for each fixed ε, a bounded witness size and detection probability for ε-far graphs. That is an ε-dependent conclusion from a deep theorem, not a finite forbidden characterization."
    }
  ],
  "core-euclidean-tsp": [
    {
      "q": "A geometric scheme moves each input point by at most ρL/n, where L≤OPT. Its internal approximation parameter is η. Derive the strongest ratio certified by these facts, give explicit choices of ρ and η for target 1+ε, and identify where zero-diameter inputs require a separate branch.",
      "a": "The uniform tour perturbation is B=2ρL. Hence C≤(1+η)OPT+(2+η)B≤[1+η+2ρ(2+η)]OPT. For 0<ε≤1, η=ε/4 and ρ=ε/16 give total excess ≤ε/4+9ε/32<ε. If L=0 all points coincide and the zero-length tour is optimal; do not divide by L."
    },
    {
      "q": "A proposed square DP stores portal occurrences and their total number, but no pairing. Construct two partial path collections with the same recorded data and different compatibility with outside paths. Then analyze its claimed polynomial time if it permits r=c log n crossings and uses m=c log n portals, for fixed positive c.",
      "a": "Use four labeled boundary occurrences a,b,c,d. Pairing (a,b),(c,d) and pairing (a,c),(b,d) have identical occurrence data. An outside pairing can close two separate cycles in the first case and one in the other; a state that identifies them loses feasibility information. The bound m^{O(r)} becomes (log n)^{O(log n)}=n^{O(log log n)}, which does not certify polynomial time. Patching to r=O(1/ε) and a connectivity-aware state repairs the two distinct gaps."
    }
  ]
};

function examChoose(n,k){if(k<0||k>n)return 0;let a=1;for(let i=1;i<=k;i++)a=a*(n-i+1)/i;return Math.round(a);}
function examCheckpoint(id,seed){
 const n=4+(seed%5),m=2+((seed>>>4)%4),p=(2+(seed%5))/10;
 const out=(q,values,explanation)=>({q,fields:values.map(([label,expected])=>({label,expected})),explanation});
 switch(id.replace('core-','')){
 case 'euclidean-tsp':return out(`Each of ${n} tour points moves by at most 1/8. Independent shifted dissections are good with probability at least 1/2.`,[['Uniform tour perturbation bound',n/4],['Runs ensuring failure at most 1/16',4]],'Each of n edges changes by at most 1/4. Four independent runs have joint failure at most (1/2)^4.');
 case 'knapsack':return out(`There are ${n} feasible items, Pmax=80 and ε=1/4. Use floor scaling.`,[['K',20/n],['Maximum total rounding loss nK',20]],'K=εPmax/n and nK=εPmax≤εOPT. This is a loss bound, not the actual loss.');
 case 'scheduling-scheme':return out(`A target schedule has T=${n*20}, ε=1/10 and at most 10 large jobs per machine. Round each up by at most ε²T.`,[['Upper bound on added load per machine',n*2]],'At most 10 jobs each gain at most 0.01T, for a total at most 0.1T.');
 case 'bin-scheme':return out(`A claimed absolute ratio is 1.49 and OPT=${m}.`,[['Largest integral number of bins permitted by the claim',Math.floor(1.49*m)]],'The integer output is at most floor(1.49 OPT). In particular OPT=2 forces output 2.');
 case 'sat-random':return out(`One normalized clause has ${n} distinct literals under independent fair bits.`,[['Satisfaction probability',1-2**(-n)]],'All literals are false with probability 2^−k. This uses within-clause independence.');
 case 'sat-lp':return out(`A normalized 2-literal clause has LP literal marginals ${p} and ${1-p}. Its LP z is 1.`,[['LP-rounding satisfaction probability',1-p*(1-p)],['Fair-assignment satisfaction probability',.75]],'Independent LP rounding fails with probability p(1−p). A fair normalized two-literal clause succeeds with probability 3/4.');
 case 'pcst':return out(`Let α be uniform on [1/${m},1]. Calculate to four decimal places.`,[['E[1/α]',Math.log(m)/(1-1/m)]],'Integrate (1/α)/(1−1/m) from 1/m to 1; the logarithm is natural.');
 case 'facility':return out(`A metric rerouting path has three hop lengths ${n}, ${m}, and 2.`,[['Upper bound on direct distance from triangle inequality',n+m+2]],'Apply triangle inequality twice. This upper bound need not equal the actual direct distance.');
 case 'release':return out(`A single job starts at release time ${n}, runs for ${m} time units without preemption, and is represented as uniform fractional processing over that interval.`,[['Completion time',n+m],['Average processing time plus p/2',n+m]],'Average time is r+p/2; adding p/2 recovers r+p for one uninterrupted interval.');
 case 'flow':return out(`An edge is independently chosen by ${n} unit commodities with probability 1/${n}. Use the Chernoff upper bound (eμ/a)^a at a=${m+3}.`,[['Mean edge load μ',1],['Chernoff upper bound',Math.min(1,(Math.E/(m+3))**(m+3))]],'The mean is 1; substitute into (eμ/a)^a. This is a bound, not the exact tail.');
 case 'dense-color':return out(`A sample has ${n} vertices. Enumerate every assignment of three colors before extension tests.`,[['Number of assignments',3**n]],'There are three choices per sampled vertex. Only valid restrictions can extend to a proper coloring.');
 case 'sdp-cut':{const d=[60,90,120,150][seed%4],r=d*Math.PI/180;return out(`Two unit vectors have angle ${d} degrees.`,[['Hyperplane cut probability',d/180],['SDP edge contribution (unit edge weight)',(1-Math.cos(r))/2]],'The probabilities are θ/π and (1−cos θ)/2; they are different quantities.');}
 case 'color-sdp':{const a=Math.log(2)/Math.log(3);return out('Let a=log₃2 and balance n/σ=σ^a.',[['Exponent of n in σ',1/(1+a)],['Exponent of n in the balanced color count',a/(1+a)]],'Solve σ^(1+a)=n. The final coloring analysis must still account for iteration logarithms.');}
 case 'gaussian-color':return out(`Standard Gaussian projections U,V have correlation −1/2. A selected graph has ${n*3} vertices and ${m} induced edges.`,[['Var(U+V)',1],['Guaranteed size after deleting at most one endpoint per edge',n*3-m]],'Variance is 1+1+2(−1/2)=1. The repair inequality is α(G[S])≥|S|−e(S).');
 case 'dual-cover':return out(`A feasible dual has total value ${n} and every element occurs in at most ${m} selected tight sets.`,[['Charging upper bound on selected-set cost',n*m]],'Swap the sums: every dual variable is charged at most the element frequency.');
 case 'dual-path':return out(`Three raised cuts have dual weights 2, ${n}, and ${m}; a pruned tight path crosses each exactly once.`,[['Path cost certified by these cuts',2+n+m]],'Tightness and single crossings give cost=∑S yS.');
 case 'steiner':return out(`During an interval there are ${n} active components, with total relevant degree at most twice their count; all active duals grow by ${m}.`,[['Dual increase',n*m],['Cost increase upper bound',2*n*m]],'Charge the interval by Δ times the sum of component degrees, not by assuming every degree≤2.');
 case 'tree-metrics':return out(`Remove one edge from an unweighted cycle with ${n+3} vertices to form a spanning tree.`,[['Stretch of the removed edge endpoints',n+2]],'The remaining path has ncycle−1 edges, whereas their original distance is one.');
 case 'planar-mis':return out(`A fixed optimal independent set has size ${n*m}; delete one of ${m} layer residues, trying all residues.`,[['Upper bound on the lost optimum vertices in some residue',n],['Guaranteed remaining optimum vertices in that residue',n*(m-1)]],'Average the optimum vertices across residue classes, not all graph vertices.');
 case 'hardness':return out(`A gap instance has YES optimum ${n*8} and NO optimum at most 7/8 of that.`,[['NO objective upper bound',n*7],['Ratio strictly above which distinguishes the cases',7/8]],'To distinguish, an approximation ratio must be strictly greater than 7/8. The endpoint alone need not suffice.');
 case 'lfkn-permanent':return out(`There are ${n} random polynomial checks, each discrepancy degree at most ${m}, over F101.`,[['Union-bound soundness error upper bound',n*m/101]],'Condition on the first false claim; each fixed nonzero discrepancy has at most its degree many roots. Sum the conditional error budgets.');
 case 'lfkn-consequences':return out(`There are ${n} adaptive oracle verifications and desired total error 1/10. Use an equal union-bound budget.`,[['Maximum error per verification',.1/n]],'Adaptive queries require conditional soundness; Qδ≤η does not need independence.');
 case 'qbf':return out(`For f(x)=x² over a field of characteristic greater than ${n+1}, evaluate its Boolean multilinearization at x=${n}.`,[['f(n)',n*n],['(Rf)(n)',n]],'Rf(x)=(1−x)f(0)+xf(1)=x. Equality is required only at Boolean x.');
 case 'private-ip':return out(`A verifier hides ${m} fair bits and accepts iff a single prover guess equals the full hidden string.`,[['Best legal success probability',2**(-m)],['Success if the prover illegally sees the hidden bits',1]],'The legal message cannot depend on hidden verifier randomness.');
 case 'bfl-oracle':return out(`One prover receives a q-bit point query where q=${n}, and returns ${m} answer bits.`,[['Bits in one complete deterministic answer table',2**n*m]],'There are 2^q possible point queries. A fixed table commits to every answer independently of query context.');
 case 'bfl-multilinear':return out(`Over a field of characteristic greater than ${n}, take f(x,y)=xy. Compare an axis restriction y=${n} and the diagonal (x,y)=(t,t).`,[['Degree in x on that axis',1],['Degree in t on the diagonal',2]],'Individual degree one does not imply total degree one on arbitrary lines.');
 case 'bfl-nexp':return out(`Two provers each have ${n}-bit one-round questions and ${m}-bit answers.`,[['Total bits in both fixed answer tables',2*2**n*m]],'Two tables each need 2^q times a bits; these are guessed once before enumerating verifier tapes.');
 case 'gmw-def':return out(`An isomorphism simulator independently guesses one of two challenge bits. Each trial succeeds with probability 1/2.`,[['Expected trials',2],['Probability all first '+n+' trials fail',2**(-n)]],'Identical first-message distributions on YES inputs keep the guessed bit uniform even for message-dependent challenges.');
 case 'gmw-gni':return out(`On isomorphic input graphs, repeat the basic GNI test ${m} times with fresh hidden bits.`,[['Maximum probability every test accepts',2**(-m)]],'Each fresh source bit is concealed by identical relabeling distributions. This is soundness, not a malicious-verifier zero-knowledge proof.');
 case 'gmw-np':return out(`A graph has ${n} edges and a cheating coloring violates at least one. Test a uniform edge in each of ${m} fresh rounds.`,[['One-round acceptance upper bound',1-1/n],['All-round acceptance upper bound',(1-1/n)**m]],'At least one bad edge is found with probability 1/mEdges per round; multiply conditional bounds for fresh sequential rounds.');
 case 'four-functions':return out(`On {0,1}, take α=β=γ=δ, with values f(0)=${m}, f(1)=${n}.`,[['Product of the two sums on either side',(n+m)**2]],'In this special one-coordinate case the pointwise max/min products are identical, and the conclusion is equality. This does not prove the general induction.');
 case 'fkg':return out('A measure gives probability 1/2 to 01 and 1/2 to 10. A and B are coordinate-one and coordinate-two presence.',[['P(A∩B)',0],['Cov(1A,1B)',-.25]],'Both events are increasing but the measure is not log-supermodular.');
 case 'harris':return out(`For the last independent bit with p=${p}, the conditional probabilities for two increasing events rise by 1/2 and 1/4.`,[['Last-coordinate covariance contribution',p*(1-p)/8]],'The additional covariance term is p(1−p)(a1−a0)(b1−b0).');
 case 'xyz':return out('Take the uniform order of three incomparable elements a,b,c.',[['P(a<b and a<c)',1/3],['P(a<b)P(a<c)',.25]],'Exactly two of six orders put a first. Each pairwise comparison has probability 1/2.');
 case 'azuma':return out(`Use ${n*10} martingale increments bounded in absolute value by 1. Set t=${n*5}.`,[['Two-sided Azuma upper bound (cap at 1)',Math.min(1,2*Math.exp(-((n*5)**2)/(2*n*10)))]],'Use min(1,2 exp(−t²/(2∑ci²))). A bound above one is uninformative.');
 case 'chromatic':return out(`In a vertex exposure with ${n*10} steps, each chromatic-number martingale increment is bounded by 1.`,[['Sum of squared increment bounds',n*10]],'There are nVertices bounded increments. A narrower window still needs the chapter’s extra structural argument.');
 case 'gradation':return out(`Independent Bernoulli coordinates have biases ${p} and 1/2. For their sum expose one coordinate per step.`,[['Total variance budget',p*(1-p)+.25],['Valid sum of squared bounds using ci=1',2]],'Variance and deterministic squared-effect budgets are distinct; do not substitute one into the other theorem.');
 case 'azuma-app':return out(`One vector in a signed sum has norm ${n}. Flip its sign.`,[['Upper bound on change in the norm of the total sum',2*n]],'The vector sum changes by 2vi; the reverse triangle inequality bounds the change in its norm.');
 case 'talagrand':return out('For A={00,11} and x=01, calculate the convex mismatch distance.',[['Squared Talagrand convex distance',.5],['Hamming distance',1]],'The closest convex mismatch vector is (1/2,1/2), with squared norm 1/2.');
 case 'certificate':return out(`A graph has a matching of size ${n}; each edge presence is one independent coordinate.`,[['Number of present-edge coordinates in a certificate of X≥'+n,n],['Lipschitz constant under changing one edge',1]],'A specified matching certifies a lower bound; one edge can change maximum matching size by at most one.');
 case 'kim-vu':return out(`For triangle count in G(${n+3},${p}), compute derivative expectations.`,[['Expected triangle count',examChoose(n+3,3)*p**3],['Expected one-edge derivative',(n+1)*p*p],['Expected derivative on two adjacent edges',p]],'The derivatives count completions of the fixed partial triangle: C(N,3)p³, (N−2)p², and p.');
 case 'shannon':return out(`Use binary words of length ${n}, correcting every one-bit error.`,[['Volume of one radius-one Hamming ball',1+n],['Minimum required pairwise codeword distance',3]],'The ball has one center and n one-bit neighbors. Disjoint radius-t balls require distance at least 2t+1.');
 case 'liar':return out(`There are q=${n} questions and at most one lie.`,[['Volume of one ordinary response ball',1+n],['Sphere-counting upper bound on number of hidden items',Math.floor(2**n/(1+n))]],'Each item needs at least 1+q answer strings in the counting bound. The converse strategy is not automatic.');
 case 'tenure':return out(`There are ${m*2} chips at level ${m}.`,[['Total dyadic weight',2*m*2**(-m)]],'Each level-i chip has weight 2^−i. Compare the total with one, including the equality case.');
 case 'balancing':return out(`For ${n} coordinates over ${n} rounds, set t=√(2n ln(4n)).`,[['Azuma plus union-bound failure upper bound',.5]],'Substitute into 2n exp(−t²/(2n))=1/2. This establishes only the upper bound.');
 case 'half-liar':return out(`A truthful answer string has ${n} No positions and ${m} Yes positions; at most one No may change to Yes.`,[['Number of possible corrupted strings',1+n]],'Only No positions are corruptible. The unmodified string adds one to the n single-change strings.');
 case 'entropy':return out('A uniform family consists of 00 and 11.',[['Joint entropy in bits',1],['Sum of coordinate entropies in bits',2]],'Both marginals are fair, but the two coordinates are dependent.');
 case 'shearer':return out(`A three-coordinate family has pair-projection support sizes ${n}, ${m}, and 4. Each coordinate occurs twice.`,[['Upper bound on family cardinality from Loomis–Whitney (before flooring)',Math.sqrt(n*m*4)]],'Shearer gives |F|²≤|π12 F||π13 F||π23 F|. This is an upper bound even if such sizes are not jointly realizable.');
 case 'tester-color':return out(`Dense graph distance is normalized by N². N=${n*10} and ε=1/10.`,[['Edge-edit threshold εN²',10*n*n]],'The assigned dense model uses N² normalization; do not replace it by N.');
 case 'triangle-removal':return out(`A graph has ${n+3} vertices and exactly ${m} unordered triangles. Sample one uniform unordered vertex triple.`,[['Exact rejection probability',m/examChoose(n+3,3)]],'There are C(N,3) unordered triples. Sampling trials are independent only when chosen that way.');
 case 'hereditary':return out(`A sampled induced graph has ${n} vertices.`,[['Number of unordered adjacency/nonadjacency positions',examChoose(n,2)]],'An induced witness specifies both edges and nonedges for every unordered vertex pair.');
 default:throw Error('Missing checkpoint for '+id);
 }
}
