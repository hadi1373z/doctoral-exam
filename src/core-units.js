'use strict';
const CORE_SOURCES = {
  "ws": {
    "name": "Williamson–Shmoys · The Design of Approximation Algorithms",
    "url": "https://designofapproxalgs.com/",
    "scope": "§§3.1–3.3; §§5.1–5.5; §§6.1, 6.2, 6.5, 13.2; §§7.1, 7.3, 7.4; §§8.5, 8.6; §10.1; §§16.1, 16.3"
  },
  "as": {
    "name": "Alon–Spencer · The Probabilistic Method, fourth edition",
    "url": "https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953",
    "scope": "Chapters 6, 7, 15, and 17"
  },
  "lfkn": {
    "name": "Lund–Fortnow–Karloff–Nisan · Algebraic Methods for Interactive Proof Systems",
    "url": "https://lance.fortnow.com/papers/files/ip.pdf",
    "scope": "The complete assigned paper: permanent verification, algebraic reduction, soundness, and consequences"
  },
  "shamir": {
    "name": "Shamir · IP = PSPACE",
    "url": "https://doi.org/10.1145/146585.146609",
    "scope": "The complete assigned paper: quantified formulas, degree reduction, protocol and resource analysis"
  },
  "bfl": {
    "name": "Babai–Fortnow–Lund · Two-Prover Interactive Protocols",
    "url": "https://lance.fortnow.com/papers/files/mip2.pdf",
    "scope": "The complete assigned paper: oracle characterization, algebraic encoding, multilinearity testing, and structural consequences"
  },
  "gmw": {
    "name": "Goldreich–Micali–Wigderson · Proofs that Yield Nothing But Their Validity",
    "url": "https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf",
    "scope": "The complete assigned paper: definitions, graph protocols, cryptographic primitives, NP construction, and simulation"
  }
};
const CORE_UNITS = [
  {
    "id": "core-knapsack",
    "s": "approx",
    "source": "ws",
    "section": "§3.1",
    "title": "Knapsack: an FPTAS with a full bit-complexity argument",
    "theorem": "Profit-indexed dynamic programming is pseudo-polynomial; scaling profits with K=εPmax/n yields a feasible solution worth at least (1−ε)OPT in polynomial time in n and 1/ε.",
    "proof": [
      "Discard items heavier than capacity; set Pmax to the largest remaining profit.",
      "Set p′ᵢ=⌊pᵢ/K⌋; minimize weight for each total scaled profit.",
      "Compare the rounded objective of the optimum with that of the computed solution.",
      "Bound loss by nK≤εOPT and count DP states and arithmetic bits."
    ],
    "task": "Construct the profit-scaling algorithm from scratch. Prove feasibility, the multiplicative guarantee and polynomial bit complexity. Explain why a DP polynomial in the numerical capacity is insufficient.",
    "answer": [
      "For every feasible item, pᵢ≤Pmax≤OPT. Hence total scaled profit is at most n²/ε, so the basic DP has O(n³/ε) transitions.",
      "For the optimum set O, K∑O p′ᵢ≥∑O pᵢ−|O|K≥OPT−εPmax. Optimality in the scaled DP and pᵢ≥Kp′ᵢ transfer this bound to the output.",
      "Weights and profits are represented in binary; arithmetic on their sums uses polynomially many bits. If no feasible positive-profit item remains, return the empty solution."
    ],
    "followups": [
      [
        "Why not scale using an unknown OPT?",
        "Use the computable Pmax, which lies between OPT/n and OPT after infeasible items are removed."
      ],
      [
        "Can an FPTAS have running time n^(1/ε)?",
        "No. That is polynomial for fixed ε, but not polynomial jointly in input size and 1/ε."
      ]
    ],
    "results": [
      "T3.1"
    ],
    "stretch": false,
    "unit": "§3.1",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "For every feasible item, pᵢ≤Pmax≤OPT. Hence total scaled profit is at most n²/ε, so the basic DP has O(n³/ε) transitions.",
    "example": "For the optimum set O, K∑O p′ᵢ≥∑O pᵢ−|O|K≥OPT−εPmax. Optimality in the scaled DP and pᵢ≥Kp′ᵢ transfer this bound to the output.",
    "warning": "Use the computable Pmax, which lies between OPT/n and OPT after infeasible items are removed.",
    "oral": "Construct the profit-scaling algorithm from scratch. Prove feasibility, the multiplicative guarantee and polynomial bit complexity. Explain why a DP polynomial in the numerical capacity is insufficient."
  },
  {
    "id": "core-scheduling-scheme",
    "s": "approx",
    "source": "ws",
    "section": "§3.2",
    "title": "Scheduling schemes: large jobs, rounded types, configurations",
    "theorem": "Identical-machine makespan scheduling admits a PTAS by rounding large jobs and placing the small jobs after solving a bounded-type configuration problem.",
    "proof": [
      "Guess a target makespan T and use a lower bound on OPT.",
      "Separate jobs at εT; round large processing times upward on a controlled grid.",
      "Enumerate feasible machine configurations or use the section’s bounded-type DP.",
      "Insert the small jobs on least-loaded machines and charge the last-job overshoot."
    ],
    "task": "Design a dual-approximation feasibility test for a proposed T. Bound the number of large-job types and configurations, prove the rounding loss and small-job insertion bound, then state exactly which parameters are fixed for polynomial time.",
    "answer": [
      "If pᵢ>εT, a T-load machine has fewer than 1/ε such jobs. Rounding to multiples of ε²T increases its large-job load by at most εT.",
      "A machine configuration records counts of rounded types, not item identities. With ε fixed, the family of configurations is bounded independently of n.",
      "If a small job of length at most εT is placed last, its start time is at most total load/m≤T whenever a T-schedule exists; its completion is at most (1+ε)T. Combine this with the rounding slack and rescale the internal ε."
    ],
    "followups": [
      [
        "What fails for unrelated machines?",
        "A job has a different length on each machine; the identical-type compression and common average-load argument no longer give this proof."
      ],
      [
        "Does a large exponent depending on ε give an FPTAS?",
        "It gives a PTAS only. Keep the distinction between n^(f(1/ε)) and poly(n,1/ε) explicit."
      ]
    ],
    "results": [
      "T3.5",
      "T3.6",
      "T3.7",
      "T3.8"
    ],
    "stretch": false,
    "unit": "§3.2",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "If pᵢ>εT, a T-load machine has fewer than 1/ε such jobs. Rounding to multiples of ε²T increases its large-job load by at most εT.",
    "example": "A machine configuration records counts of rounded types, not item identities. With ε fixed, the family of configurations is bounded independently of n.",
    "warning": "A job has a different length on each machine; the identical-type compression and common average-load argument no longer give this proof.",
    "oral": "Design a dual-approximation feasibility test for a proposed T. Bound the number of large-job types and configurations, prove the rounding loss and small-job insertion bound, then state exactly which parameters are fixed for polynomial time."
  },
  {
    "id": "core-bin-scheme",
    "s": "approx",
    "source": "ws",
    "section": "§3.3",
    "title": "Bin packing: linear grouping and the additive term",
    "theorem": "Grouping and rounding large items gives an asymptotic approximation scheme; the guarantee must retain its additive-bin term.",
    "proof": [
      "Separate items of size at least ε.",
      "Sort large items and group them into equal-cardinality blocks.",
      "Pack the rounded instance by configurations and charge the discarded largest block separately.",
      "Insert small items and analyze the nearly full bins."
    ],
    "task": "Reconstruct the linear-grouping injection that compares the rounded instance with OPT. Derive an asymptotic (1+O(ε))OPT+O(1) bound. Then prove why an absolute ratio below 3/2 would solve a two-bin partition decision problem.",
    "answer": [
      "Rounding one block upward can be charged to the preceding block’s larger items; explicitly match items between adjacent blocks. The largest block is treated separately.",
      "If a new bin is opened while placing an item smaller than ε, the earlier bins have load above 1−ε. Their count is controlled by total size/(1−ε).",
      "For a partition instance of total size 2 with each item at most 1, OPT=2 exactly when a two-bin packing exists. An absolute ratio strictly below 3/2 must output an integer number of bins below 3 on YES instances."
    ],
    "followups": [
      [
        "Why can an APTAS coexist with this hardness?",
        "Its additive constant can matter when OPT=2; asymptotic and absolute guarantees have different quantifiers."
      ],
      [
        "Is a total-volume lower bound sufficient to pack items?",
        "No. Three items of size 0.6 have total 1.8 but need three unit bins."
      ]
    ],
    "results": [
      "T3.12"
    ],
    "stretch": false,
    "unit": "§3.3",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "Rounding one block upward can be charged to the preceding block’s larger items; explicitly match items between adjacent blocks. The largest block is treated separately.",
    "example": "If a new bin is opened while placing an item smaller than ε, the earlier bins have load above 1−ε. Their count is controlled by total size/(1−ε).",
    "warning": "Its additive constant can matter when OPT=2; asymptotic and absolute guarantees have different quantifiers.",
    "oral": "Reconstruct the linear-grouping injection that compares the rounded instance with OPT. Derive an asymptotic (1+O(ε))OPT+O(1) bound. Then prove why an absolute ratio below 3/2 would solve a two-bin partition decision problem."
  },
  {
    "id": "core-sat-random",
    "s": "approx",
    "source": "ws",
    "section": "§§5.1–5.3",
    "title": "Random and biased assignments; derandomization",
    "theorem": "An independent fair assignment satisfies a k-literal non-tautological clause on distinct variables with probability 1−2^−k. Conditional expectation converts a computable expectation guarantee into a deterministic one.",
    "proof": [
      "Express weighted satisfaction as a sum of indicators.",
      "Calculate clause failure under the chosen marginal probabilities.",
      "Maintain the conditional expected objective for a partial assignment.",
      "Choose the next bit with the larger conditional expectation."
    ],
    "task": "Give a weighted MAX-SAT instance with both unit and long clauses. Compute the conditional-expectation update exactly, derive the length-dependent ratio, and explain the limitation of one common biased coin when negative literals are present.",
    "answer": [
      "For independent marginals yᵢ, a clause fails with probability ∏positive(1−yᵢ)∏negative yᵢ. The conditional expression drops assigned false literals and becomes zero failure once a literal is true.",
      "At a fair next bit, E[X|prefix] is the average of its two child expectations; choose a child at least as large. Recompute clause contributions in polynomial time.",
      "A common bias improves positive unit clauses while harming negative ones. A guarantee must analyze the actual literal pattern; it cannot simply substitute p into 1−(1−p)^k for every clause."
    ],
    "followups": [
      [
        "Where is independence used?",
        "Only to multiply the within-clause failure probabilities. Linearity of expectation needs no independence between clauses."
      ],
      [
        "What is a certificate for the final deterministic guarantee?",
        "A monotone sequence of conditional expectations ending at the actual integral objective."
      ]
    ],
    "results": [
      "T5.1",
      "T5.2",
      "T5.3",
      "T5.5",
      "T5.7"
    ],
    "stretch": false,
    "unit": "§§5.1–5.3",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "For independent marginals yᵢ, a clause fails with probability ∏positive(1−yᵢ)∏negative yᵢ. The conditional expression drops assigned false literals and becomes zero failure once a literal is true.",
    "example": "At a fair next bit, E[X|prefix] is the average of its two child expectations; choose a child at least as large. Recompute clause contributions in polynomial time.",
    "warning": "Only to multiply the within-clause failure probabilities. Linearity of expectation needs no independence between clauses.",
    "oral": "Give a weighted MAX-SAT instance with both unit and long clauses. Compute the conditional-expectation update exactly, derive the length-dependent ratio, and explain the limitation of one common biased coin when negative literals are present."
  },
  {
    "id": "core-sat-lp",
    "s": "approx",
    "source": "ws",
    "section": "§§5.4–5.5",
    "title": "MAX-SAT: LP rounding and the better-of-two 3/4 guarantee",
    "theorem": "Independent LP-marginal rounding gives 1−1/e; choosing the better of fair and LP rounding gives a 3/4 approximation, by a clausewise comparison with the same LP benchmark.",
    "proof": [
      "Normalize clauses and solve the MAX-SAT LP with zC≤sum of literal marginals and zC≤1.",
      "Independently set each variable true with its LP marginal; bound a k-literal clause by (1−(1−1/k)^k)zC.",
      "A fair assignment satisfies that clause with probability 1−2^(−k)≥(1−2^(−k))zC.",
      "For every k≥1, half the sum of these two coefficients is at least 3/4; sum by clause weight and take the better assignment."
    ],
    "task": "Derive the LP-rounding clause bound with AM–GM, then prove the better-of-two 3/4 guarantee clause by clause. Explain why averaging 1/2 and 1−1/e is too weak and why the same LP objective is necessary.",
    "answer": [
      "Normalize clauses and solve the MAX-SAT LP with zC≤sum of literal marginals and zC≤1.",
      "Independently set each variable true with its LP marginal; bound a k-literal clause by (1−(1−1/k)^k)zC.",
      "A fair assignment satisfies that clause with probability 1−2^(−k)≥(1−2^(−k))zC.",
      "For every k≥1, half the sum of these two coefficients is at least 3/4; sum by clause weight and take the better assignment.",
      "For k=1 the two coefficients are 1/2 and 1; for k=2 they are 3/4 and 3/4. For k≥3, 1−2^(−k)≥7/8 and 1−(1−1/k)^k≥1−1/e, whose sum exceeds 3/2. The maximum of two objective values is at least their mean."
    ],
    "followups": [
      [
        "Why is the LP a correct benchmark for maximization?",
        "Every Boolean assignment is LP-feasible, so LP optimum upper-bounds integral OPT."
      ],
      [
        "Can correlations between repeated literals invalidate AM–GM?",
        "Yes. Normalize clauses to remove repeated variables and tautologies before using the independent-literal product."
      ]
    ],
    "results": [
      "T5.10",
      "T5.11"
    ],
    "stretch": false,
    "unit": "§§5.4–5.5",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "Normalize clauses and solve the MAX-SAT LP with zC≤sum of literal marginals and zC≤1.",
    "example": "Independently set each variable true with its LP marginal; bound a k-literal clause by (1−(1−1/k)^k)zC.",
    "warning": "Every Boolean assignment is LP-feasible, so LP optimum upper-bounds integral OPT.",
    "oral": "Derive the 1−1/e factor from the clause LP. Prove a 3/4 factor by comparing the better of fair and LP assignments, including the exceptional unit-clause case. Identify why averaging two global ratios loses the sharper bound."
  },
  {
    "id": "core-sdp-cut",
    "s": "approx",
    "source": "ws",
    "section": "§§6.1–6.2",
    "title": "Gram matrices and the exact MAX-CUT ratio",
    "theorem": "A PSD matrix with unit diagonal is a Gram matrix of unit vectors. Hyperplane rounding gives separation probability θ/π and the Goemans–Williamson factor minθ 2θ/[π(1−cos θ)]≈0.87856.",
    "proof": [
      "Convert a sign quadratic objective to a PSD Gram-matrix program.",
      "Factor a feasible matrix to vectors.",
      "Calculate angular separation under a uniform hyperplane.",
      "Prove an edgewise comparison and sum with nonnegative weights."
    ],
    "task": "Derive the SDP and the angle probability without invoking the algorithm’s name. Characterize an interior minimizer of the ratio. Explain why negative edge weights invalidate this edgewise summation proof.",
    "answer": [
      "For integral signs, Xᵢⱼ=sᵢsⱼ; dropping rank one leaves X≽0 and Xᵢᵢ=1. The relaxed objective is an upper bound for maximization.",
      "Rotational symmetry reduces an edge to a plane; the separating normal directions occupy angular measure 2θ out of 2π, giving θ/π.",
      "The stationary equation is 1−cos θ=θ sin θ. Compare both sides edgewise; multiplication by a negative weight reverses an inequality, so the standard nonnegative-weight hypothesis matters."
    ],
    "followups": [
      [
        "Can a numerically tiny negative eigenvalue be ignored in a rigorous proof?",
        "A certified or appropriately repaired PSD solution and optimization tolerance are needed; exact feasibility and floating-point output are different claims."
      ],
      [
        "Does the SDP optimum equal OPT?",
        "Not generally. It is an upper bound and can have a nontrivial integrality gap."
      ]
    ],
    "results": [
      "D6.1",
      "F6.2",
      "C6.6",
      "T6.9",
      "T6.10",
      "T6.11"
    ],
    "stretch": false,
    "unit": "§§6.1–6.2",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "For integral signs, Xᵢⱼ=sᵢsⱼ; dropping rank one leaves X≽0 and Xᵢᵢ=1. The relaxed objective is an upper bound for maximization.",
    "example": "Rotational symmetry reduces an edge to a plane; the separating normal directions occupy angular measure 2θ out of 2π, giving θ/π.",
    "warning": "A certified or appropriately repaired PSD solution and optimization tolerance are needed; exact feasibility and floating-point output are different claims.",
    "oral": "Derive the SDP and the angle probability without invoking the algorithm’s name. Characterize an interior minimizer of the ratio. Explain why negative edge weights invalidate this edgewise summation proof."
  },
  {
    "id": "core-color-sdp",
    "s": "approx",
    "source": "ws",
    "section": "§6.5",
    "title": "Vector coloring, semicoloring, and the 0.387 exponent",
    "theorem": "A 3-coloring embeds in three unit vectors with edge inner product −1/2. Multiple hyperplanes yield semicolorings; balancing high-degree removal against low-degree rounding gives the section’s exponent.",
    "proof": [
      "Construct the equilateral-triangle vector solution.",
      "Bound the collision probability after t independent hyperplanes by 3^−t.",
      "Delete endpoints of monochromatic edges to retain a properly colored constant fraction.",
      "Balance n/σ against σ^(log₃2), then iterate semicolorings."
    ],
    "task": "Derive the semicoloring probability and color count from first principles. Solve n/σ=σ^(log₃2), explain the approximately 0.387 exponent, and account for the logarithmic factor needed to color every vertex.",
    "answer": [
      "An edge has angle at least 2π/3, so a hyperplane fails to separate it with probability at most 1/3. After t=⌈2+log₃Δ⌉ planes, sum collision indicators over at most nΔ/2 edges.",
      "Markov bounds the chance of too many monochromatic edges. Removing their endpoints leaves at least a constant fraction properly colored, which is enough for recursive semicoloring.",
      "Writing a=log₃2, choose σ=n^(1/(1+a)); the exponent a/(1+a)=log₆2≈0.38685. Repeating on the remaining vertices adds a logarithmic color factor."
    ],
    "followups": [
      [
        "Why is a vector 3-coloring not an actual 3-coloring?",
        "The relaxation imposes pairwise angular inequalities, not a partition into three discrete classes."
      ],
      [
        "Can one use the same palette at every recursive round?",
        "No guarantee prevents edges between rounds from becoming monochromatic. Use disjoint palettes in this construction."
      ]
    ],
    "results": [
      "T6.20",
      "C6.22",
      "T6.23",
      "T6.24"
    ],
    "stretch": false,
    "unit": "§6.5",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "An edge has angle at least 2π/3, so a hyperplane fails to separate it with probability at most 1/3. After t=⌈2+log₃Δ⌉ planes, sum collision indicators over at most nΔ/2 edges.",
    "example": "Markov bounds the chance of too many monochromatic edges. Removing their endpoints leaves at least a constant fraction properly colored, which is enough for recursive semicoloring.",
    "warning": "The relaxation imposes pairwise angular inequalities, not a partition into three discrete classes.",
    "oral": "Derive the semicoloring probability and color count from first principles. Solve n/σ=σ^(log₃2), explain the approximately 0.387 exponent, and account for the logarithmic factor needed to color every vertex."
  },
  {
    "id": "core-gaussian-color",
    "s": "approx",
    "source": "ws",
    "section": "§13.2",
    "title": "Gaussian threshold rounding for independent sets",
    "theorem": "The section’s Gaussian-vector algorithm extracts an independent set of expected size Ω(nΔ^−1/3(ln Δ)^−1/2) from a promised 3-colorable graph.",
    "proof": [
      "Choose a standard Gaussian direction and retain vertices above a threshold.",
      "Use the negative edge correlations of the vector solution.",
      "Bound retained vertices and retained edges using Gaussian tails.",
      "Delete one endpoint per retained edge and optimize the threshold."
    ],
    "task": "Derive the one-vertex and two-adjacent-vertex tail estimates used by the algorithm. Optimize the threshold so the expected repair cost is smaller than the retained mass, retaining logarithmic factors rather than hiding them prematurely.",
    "answer": [
      "A unit vector dotted with a standard Gaussian is N(0,1). An edge’s two projections are jointly Gaussian with correlation at most −1/2.",
      "If both projections exceed t, their sum exceeds 2t, while the sum variance is at most 1. This makes adjacent co-selection much rarer than single-vertex selection.",
      "The expected independent-set size is at least the expected selected vertices minus the expected selected edges. Optimizing the Gaussian threshold yields the stated Δ^−1/3 factor with the tail prefactor involving √ln Δ."
    ],
    "followups": [
      [
        "Why is this not independent vertex sampling?",
        "All vertex choices use one Gaussian direction and are correlated; the useful negative correlation comes from the SDP geometry."
      ],
      [
        "What changes when Δ is bounded by a small constant?",
        "Use a separate constant-size-degree argument rather than treating ln Δ at Δ=1 as a valid asymptotic formula."
      ]
    ],
    "results": [
      "T13.9"
    ],
    "stretch": true,
    "unit": "§13.2",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "A unit vector dotted with a standard Gaussian is N(0,1). An edge’s two projections are jointly Gaussian with correlation at most −1/2.",
    "example": "If both projections exceed t, their sum exceeds 2t, while the sum variance is at most 1. This makes adjacent co-selection much rarer than single-vertex selection.",
    "warning": "All vertex choices use one Gaussian direction and are correlated; the useful negative correlation comes from the SDP geometry.",
    "oral": "Derive the one-vertex and two-adjacent-vertex tail estimates used by the algorithm. Optimize the threshold so the expected repair cost is smaller than the retained mass, retaining logarithmic factors rather than hiding them prematurely."
  },
  {
    "id": "core-dual-cover",
    "s": "approx",
    "source": "ws",
    "section": "§7.1",
    "title": "Primal–dual set cover: tight sets and frequency",
    "theorem": "Raising uncovered-element dual variables until sets become tight gives an f-approximation when each element belongs to at most f sets.",
    "proof": [
      "Write min∑cSxS and max∑yᵤ with ∑u∈S yᵤ≤cS.",
      "Raise an uncovered element’s y until a containing set becomes tight.",
      "Buy a tight set and maintain dual feasibility.",
      "Expand bought-set cost as a sum of dual charges; bound each multiplicity by f."
    ],
    "task": "Prove primal feasibility, dual feasibility and the f factor. Construct the charging expression explicitly and explain why replacing f by the maximum set cardinality is unjustified.",
    "answer": [
      "Every purchased set is tight, so ∑bought cS=∑ᵤ yᵤ·|{bought S:u∈S}|≤f∑ᵤyᵤ.",
      "Weak duality gives ∑ᵤyᵤ≤OPT. Termination covers all elements provided the instance is coverable.",
      "The bound is incidence frequency per element, not size per set. A set’s cardinality can be small while an element occurs in very many sets."
    ],
    "followups": [
      [
        "Why stop increasing a dual variable when a set gets tight?",
        "Further growth could violate its dual constraint, destroying the lower-bound certificate."
      ],
      [
        "Does greedy’s Hn analysis automatically prove this algorithm’s ratio?",
        "No. Greedy charging and dual tight-set charging are distinct analyses."
      ]
    ],
    "results": [
      "T7.1"
    ],
    "stretch": false,
    "unit": "§7.1",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "Every purchased set is tight, so ∑bought cS=∑ᵤ yᵤ·|{bought S:u∈S}|≤f∑ᵤyᵤ.",
    "example": "Weak duality gives ∑ᵤyᵤ≤OPT. Termination covers all elements provided the instance is coverable.",
    "warning": "Further growth could violate its dual constraint, destroying the lower-bound certificate.",
    "oral": "Prove primal feasibility, dual feasibility and the f factor. Construct the charging expression explicitly and explain why replacing f by the maximum set cardinality is unjustified."
  },
  {
    "id": "core-dual-path",
    "s": "approx",
    "source": "ws",
    "section": "§7.3",
    "title": "Shortest path: why reverse deletion is essential",
    "theorem": "A primal–dual cut-growing procedure yields an exact shortest s–t path after redundant tight edges are removed.",
    "proof": [
      "Use s–t separating cuts as dual variables.",
      "Grow the cut separating the current reachable region from t.",
      "Add edges when their reduced slack reaches zero.",
      "Delete redundant edges and show each positive dual cut is crossed once by the final path."
    ],
    "task": "Write the path cut relaxation and its dual. Give an example where the whole collection of tight edges is unnecessarily expensive. Prove that the pruned path crosses every raised cut once and consequently has cost equal to the dual objective.",
    "answer": [
      "Tightness alone gives cost as a sum of dual variables weighted by cut-crossing multiplicities. Exactness requires those multiplicities to be one on the final path.",
      "Reachable regions form nested s-side cuts. Reverse deletion removes branches that are not needed to connect s to t.",
      "For the surviving path P, ∑e∈P cₑ=∑S yS|P∩δ(S)|=∑S yS≤OPT. Feasibility gives the reverse inequality and proves optimality."
    ],
    "followups": [
      [
        "Why does an arbitrary tight connected subgraph not suffice?",
        "It may pay for extra branches and cross a positive dual cut more than once."
      ],
      [
        "Where is the final equality stronger than an approximation proof?",
        "Each dual charge is counted exactly once, rather than at most a constant number of times."
      ]
    ],
    "results": [
      "T7.6"
    ],
    "stretch": false,
    "unit": "§7.3",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "Tightness alone gives cost as a sum of dual variables weighted by cut-crossing multiplicities. Exactness requires those multiplicities to be one on the final path.",
    "example": "Reachable regions form nested s-side cuts. Reverse deletion removes branches that are not needed to connect s to t.",
    "warning": "It may pay for extra branches and cross a positive dual cut more than once.",
    "oral": "Write the path cut relaxation and its dual. Give an example where the whole collection of tight edges is unnecessarily expensive. Prove that the pruned path crosses every raised cut once and consequently has cost equal to the dual objective."
  },
  {
    "id": "core-steiner",
    "s": "approx",
    "source": "ws",
    "section": "§7.4",
    "title": "Generalized Steiner tree: moat growth and the forest lemma",
    "theorem": "Simultaneous growth of active components, followed by pruning, gives a factor-2 approximation for generalized Steiner tree/Steiner forest.",
    "proof": [
      "Write cut constraints for separating required terminal pairs.",
      "Raise dual variables of active components uniformly.",
      "Buy a tight edge and merge components.",
      "Prune unnecessary edges; use a contracted-forest degree argument to charge at most twice total dual growth."
    ],
    "task": "Reconstruct the dual-fitting calculation during one growth interval. State precisely which components are active, prove the needed degree bound after pruning, and explain why bounding each component’s degree by two is false.",
    "answer": [
      "A component is active when it separates at least one still-disconnected demand pair. Growing its dual preserves all edge constraints until the next edge becomes tight.",
      "In the pruned forest, sum degrees of active contracted components and account for inactive components. The argument is an aggregate forest bound; an individual active component can have degree far above two.",
      "Integrate the aggregate crossing bound over growth time to obtain cost(F)≤2∑S yS≤2OPT. Pruning is part of the proof, not an optional optimization."
    ],
    "followups": [
      [
        "Why cannot one directly reuse the shortest-path equality?",
        "Many demand pairs create branching. A positive cut may be crossed several times, so only aggregate charging survives."
      ],
      [
        "Why is the set of demand pairs important?",
        "Activity is determined by separation of required pairs, not merely by whether a component contains any terminal."
      ]
    ],
    "results": [
      "T7.8"
    ],
    "stretch": true,
    "unit": "§7.4",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "A component is active when it separates at least one still-disconnected demand pair. Growing its dual preserves all edge constraints until the next edge becomes tight.",
    "example": "In the pruned forest, sum degrees of active contracted components and account for inactive components. The argument is an aggregate forest bound; an individual active component can have degree far above two.",
    "warning": "Many demand pairs create branching. A positive cut may be crossed several times, so only aggregate charging survives.",
    "oral": "Reconstruct the dual-fitting calculation during one growth interval. State precisely which components are active, prove the needed degree bound after pruning, and explain why bounding each component’s degree by two is false."
  },
  {
    "id": "core-tree-metrics",
    "s": "approx",
    "source": "ws",
    "section": "§§8.5–8.6",
    "title": "Random tree metrics and buy-at-bulk transfer",
    "theorem": "Random dominating hierarchical tree metrics have expected O(log n) stretch. With careful routing and concave capacity costs, this yields an O(log n) buy-at-bulk approximation.",
    "proof": [
      "Randomize hierarchical partitions by a scale and a permutation.",
      "Bound pair separation at every scale and sum weighted separation probabilities.",
      "Remove auxiliary tree vertices with controlled additional stretch.",
      "Route tree edges through the original graph; use subadditivity of concave nondecreasing costs."
    ],
    "task": "Explain why the MST is not an O(log n)-distortion substitute. Prove how a fixed optimal solution is charged under a random dominating embedding, and identify the assumptions needed to map tree capacities back to graph edges.",
    "answer": [
      "A cycle metric’s MST is a path: the deleted adjacent pair can have tree distance n−1 while original distance is 1. Randomization over suitable trees controls expected stretch pair by pair.",
      "For a fixed optimal edge-capacity vector c*, linearity gives E[∑e f(c*ₑ)dT(e)]≤O(log n)∑e f(c*ₑ)d(e). No independence between tree distances is needed.",
      "When several tree routes share a graph edge, concavity with f(0)=0 and nondecreasing f gives f(a+b)≤f(a)+f(b), controlling merged capacity cost."
    ],
    "followups": [
      [
        "Is E[maxpair stretch]≤O(log n) implied?",
        "No. A bound on each pair’s expected stretch does not commute with the maximum."
      ],
      [
        "Why is domination useful?",
        "It prevents the tree objective from underestimating distances when transferring a feasible solution."
      ]
    ],
    "results": [
      "T8.17",
      "T8.19",
      "C8.20",
      "T8.23"
    ],
    "stretch": true,
    "unit": "§§8.5–8.6",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "A cycle metric’s MST is a path: the deleted adjacent pair can have tree distance n−1 while original distance is 1. Randomization over suitable trees controls expected stretch pair by pair.",
    "example": "For a fixed optimal edge-capacity vector c*, linearity gives E[∑e f(c*ₑ)dT(e)]≤O(log n)∑e f(c*ₑ)d(e). No independence between tree distances is needed.",
    "warning": "No. A bound on each pair’s expected stretch does not commute with the maximum.",
    "oral": "Explain why the MST is not an O(log n)-distortion substitute. Prove how a fixed optimal solution is charged under a random dominating embedding, and identify the assumptions needed to map tree capacities back to graph edges."
  },
  {
    "id": "core-euclidean-tsp",
    "s": "approx",
    "source": "ws",
    "section": "§10.1",
    "title": "Euclidean TSP: dissection, portals, patching and a PTAS",
    "theorem": "For fixed ε>0, Euclidean TSP in the plane admits a randomized (1+ε) approximation in n·(log n)^{O(1/ε)} time, with success probability at least 1/2 per random dissection; all polynomially many integer shifts may be enumerated.",
    "proof": [
      "Snap and scale to a nice instance, keeping the two-way tour-length perturbation explicit.",
      "Randomly shift a recursive square dissection; place nested portals on each side.",
      "Use the crossing/patching structure theorem: m=O(log n/ε) portals per side and r=O(1/ε) crossings suffice with probability at least 1/2.",
      "Dynamic-program over squares, boundary portal occurrences and entry/exit pairings; merge four children without creating premature cycles.",
      "Shortcut portal visits by the Euclidean triangle inequality, undo snapping and allocate accuracy across the reductions."
    ],
    "task": "Reconstruct the Euclidean TSP PTAS. Prove the snapping loss bound, describe a sufficient boundary state and its four-child transition, and distinguish the weaker portal-only running time from the polynomial bound after patching. State the exact structural lemma you invoke and how its expected extra cost yields success probability 1/2.",
    "answer": [
      "If each point moves by at most δ, each edge changes by at most 2δ and any n-edge tour by at most 2nδ. Applying this once to the old optimum and once to the returned tour gives C≤(1+η)OPT+(2+η)2nδ.",
      "A boundary state must record portal occurrences with multiplicity and which entry is paired with which exit. Four boundary points can have identical used portals but different connections, so a portal subset alone is insufficient.",
      "The structural theorem is the hard geometric input. Random shift makes scale-specific patching and portal detours cheap in expectation. With expected overhead ≤ηOPT/2, Markov gives overhead ≤ηOPT with probability ≥1/2.",
      "With m=O(log n/η) and r=O(1/η), the DP costs m^{O(r)}n log n, absorbed into n(log n)^{O(1/η)} for fixed η. The weaker r=O(m) bound only yields n^{O(log log n)}.",
      "For each state enumerate compatible internal crossings and pairings of four child squares, reject inconsistent connections and closed subtours that leave points outside, then minimize the sum of child costs. At the root require one closed tour.",
      "Independent repetition t times reduces structural failure to at most 2^(−t); taking the best feasible output never worsens cost. Enumerating all O(n²) shifts of a nice instance also finds a good shift."
    ],
    "followups": [
      [
        "Why is a subset of boundary portals an insufficient DP state?",
        "Two partial solutions can use the same four portals but pair them as (a,b),(c,d) or (a,c),(b,d). Only one may connect to the outside without a premature cycle. Record multiplicity and connectivity."
      ],
      [
        "Does portal-respecting alone establish a PTAS?",
        "No. Without a constant-in-n crossing bound, the boundary state can be quasi-polynomial. Patching improves r from O(log n/ε) to O(1/ε), while m remains O(log n/ε)."
      ]
    ],
    "results": [
      "L10.1",
      "T10.2",
      "T10.3",
      "T10.4",
      "C10.5",
      "C10.6",
      "L10.7",
      "L10.8"
    ],
    "stretch": true,
    "unit": "§10.1",
    "minutes": 45,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "If each point moves by at most δ, each edge changes by at most 2δ and any n-edge tour by at most 2nδ. Applying this once to the old optimum and once to the returned tour gives C≤(1+η)OPT+(2+η)2nδ.",
    "example": "A boundary state must record portal occurrences with multiplicity and which entry is paired with which exit. Four boundary points can have identical used portals but different connections, so a portal subset alone is insufficient.",
    "warning": "Two partial solutions can use the same four portals but pair them as (a,b),(c,d) or (a,c),(b,d). Only one may connect to the outside without a premature cycle. Record multiplicity and connectivity.",
    "oral": "Reconstruct the Euclidean TSP PTAS. Prove the snapping loss bound, describe a sufficient boundary state and its four-child transition, and distinguish the weaker portal-only running time from the polynomial bound after patching. State the exact structural lemma you invoke and how its expected extra cost yields success probability 1/2."
  },
  {
    "id": "core-hardness",
    "s": "approx",
    "source": "ws",
    "section": "§§16.1, 16.3",
    "title": "Hardness: gaps, PCP predicates, and approximation conventions",
    "theorem": "Polynomially many constant-query PCP tests form a constant-arity gap CSP. An approximation beating the NO/YES gap would decide the source NP-hard language.",
    "proof": [
      "Track completeness c, soundness s, random bits r and query count q.",
      "Create one local constraint for each random tape.",
      "Use one global assignment to all proof positions.",
      "Compute the approximation threshold in a stated ratio convention."
    ],
    "task": "Turn a PCP with r=O(log n) and q=O(1) into a polynomial gap instance. Derive the 7/8 MAX-E3SAT threshold and the 21/22 MAX-2SAT threshold from the corresponding predicate gadgets. Explain why an exact decision reduction alone does not establish a constant approximation gap.",
    "answer": [
      "There are 2^r polynomially many tests, each involving at most q proof bits. The proof assignment must be globally consistent across tests.",
      "A maximization ρ-approximation distinguishes YES value at least cM from NO value at most sM only when ρc>s, with strict separation and the small error parameters retained.",
      "The assigned parity-to-3SAT gadget gives values 4 per satisfied parity constraint and 3 otherwise, producing a limiting NO/YES ratio 7/8. The 2SAT gadget’s values 11 and 10 give (10+1/2)/11=21/22."
    ],
    "followups": [
      [
        "Why does q=O(1) not mean the raw witness can be sampled?",
        "The PCP theorem supplies an encoded proof with local consistency guarantees. Arbitrary NP certificates lack that property."
      ],
      [
        "Does P≠NP imply every optimization problem is hard to approximate?",
        "No. A suitable gap-preserving reduction is needed for the particular objective and ratio."
      ]
    ],
    "results": [
      "T16.1",
      "T16.2",
      "T16.18",
      "T16.19",
      "C16.20",
      "T16.21",
      "T16.22",
      "T16.23",
      "T16.24"
    ],
    "stretch": true,
    "unit": "§§16.1, 16.3",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "There are 2^r polynomially many tests, each involving at most q proof bits. The proof assignment must be globally consistent across tests.",
    "example": "A maximization ρ-approximation distinguishes YES value at least cM from NO value at most sM only when ρc>s, with strict separation and the small error parameters retained.",
    "warning": "The PCP theorem supplies an encoded proof with local consistency guarantees. Arbitrary NP certificates lack that property.",
    "oral": "Turn a PCP with r=O(log n) and q=O(1) into a polynomial gap instance. Derive the 7/8 MAX-E3SAT threshold and the 21/22 MAX-2SAT threshold from the corresponding predicate gadgets. Explain why an exact decision reduction alone does not establish a constant approximation gap."
  },
  {
    "id": "core-lfkn-permanent",
    "s": "complexity",
    "source": "lfkn",
    "section": "Permanent protocol",
    "title": "LFKN: verify the permanent, not just a Boolean sum",
    "theorem": "The permanent polynomial permits recursive expansion and interpolation-based compression of many subclaims into one randomly chosen smaller claim.",
    "proof": [
      "Expand the permanent along a row into n smaller permanents.",
      "Interpolate a low-degree matrix curve through the needed submatrices.",
      "Ask for the permanent polynomial restricted to that curve.",
      "Check the expansion and reduce to one random evaluation on the curve; recurse."
    ],
    "task": "Describe the LFKN permanent-verification protocol with message order, degree bounds and random-point compression. Account for the total error over all matrix sizes and explain how an exact integer claim is recovered from finite-field checks.",
    "answer": [
      "If a matrix curve has entry degree at most n−1, its (n−1)-dimensional permanent has degree at most (n−1)². This is polynomial and can be represented by coefficients.",
      "The prover commits to the entire univariate polynomial before the fresh point is sampled. A false restricted polynomial collides with the truth at at most its degree many field points.",
      "Recursing shrinks matrix size; sum the per-level degree/field-size errors. For a 0–1 permanent, 0≤perm(A)≤n!, so use enough field size or enough modular information to distinguish possible integer values."
    ],
    "followups": [
      [
        "Why is “the verifier computes the final permanent” circular?",
        "The verifier only computes the constant-size base case. Each compression must reduce matrix dimension."
      ],
      [
        "Can the prover see the random point before sending coefficients?",
        "No. That would let it interpolate a lie through the test point and destroy the root-bound argument."
      ]
    ],
    "results": [
      "Permanent verification theorem",
      "Polynomial extrapolation reduction"
    ],
    "stretch": true,
    "unit": "Permanent protocol",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "If a matrix curve has entry degree at most n−1, its (n−1)-dimensional permanent has degree at most (n−1)². This is polynomial and can be represented by coefficients.",
    "example": "The prover commits to the entire univariate polynomial before the fresh point is sampled. A false restricted polynomial collides with the truth at at most its degree many field points.",
    "warning": "The verifier only computes the constant-size base case. Each compression must reduce matrix dimension.",
    "oral": "Describe the LFKN permanent-verification protocol with message order, degree bounds and random-point compression. Account for the total error over all matrix sizes and explain how an exact integer claim is recovered from finite-field checks."
  },
  {
    "id": "core-lfkn-consequences",
    "s": "complexity",
    "source": "lfkn",
    "section": "Closure and consequences",
    "title": "LFKN: P^#P, PH, program checking and relativization",
    "theorem": "The LFKN algebraic protocol verifies counting computations; combined with counting completeness and Toda’s theorem it yields interactive proofs for PH.",
    "proof": [
      "Specify what a #P oracle answer encodes.",
      "Verify claimed oracle values interactively.",
      "Bound the number and size of queries in the outer polynomial-time computation.",
      "Amplify each subprotocol and union-bound all dishonest claims."
    ],
    "task": "Fill in the reduction from a polynomial-time computation with counting-oracle access to an interactive proof. Handle adaptive queries and determine how small each subprotocol’s error must be. Identify which steps are algebraic rather than black-box relativizing.",
    "answer": [
      "An honest transcript fixes the outer machine’s next query. If a cheating prover supplies an incorrect value, verify that claim with the counting protocol before trusting its consequences.",
      "There are at most polynomially many such checks; set each error below the desired total error divided by a bound on their count. Conditional soundness against the current history is sufficient for the union bound.",
      "Toda’s PH⊆P^#P containment is a separate ingredient. The conclusion PH⊆IP does not make IP=NP and does not automatically hold for an arbitrary common oracle."
    ],
    "followups": [
      [
        "Why can adaptive queries still be checked?",
        "Condition on the transcript before each claim; the local protocol’s soundness holds for every fixed false claim and cheating continuation."
      ],
      [
        "Why does a relativized separating oracle not refute LFKN?",
        "The unrelativized arithmetization exploits structure that arbitrary oracle gates need not provide."
      ]
    ],
    "results": [
      "PH containment",
      "Counting-oracle consequences"
    ],
    "stretch": true,
    "unit": "Closure and consequences",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "An honest transcript fixes the outer machine’s next query. If a cheating prover supplies an incorrect value, verify that claim with the counting protocol before trusting its consequences.",
    "example": "There are at most polynomially many such checks; set each error below the desired total error divided by a bound on their count. Conditional soundness against the current history is sufficient for the union bound.",
    "warning": "Condition on the transcript before each claim; the local protocol’s soundness holds for every fixed false claim and cheating continuation.",
    "oral": "Fill in the reduction from a polynomial-time computation with counting-oracle access to an interactive proof. Handle adaptive queries and determine how small each subprotocol’s error must be. Identify which steps are algebraic rather than black-box relativizing."
  },
  {
    "id": "core-qbf",
    "s": "complexity",
    "source": "shamir",
    "section": "Degree reduction",
    "title": "Shamir: eliminate quantifiers without exponential degree",
    "theorem": "QBF arithmetization plus repeated multilinearization keeps individual degrees bounded while backward random checks verify a polynomial-length operator sequence.",
    "proof": [
      "Replace Boolean gates with arithmetic identities.",
      "Represent ∀ by multiplication and ∃ by a+b−ab on Boolean values.",
      "Insert RᵢP=(1−xᵢ)P|xᵢ=0+xᵢP|xᵢ=1 between eliminations.",
      "Verify operations backward, checking low-degree restrictions at fresh field points."
    ],
    "task": "Write the operators for ∃, ∀ and Rᵢ. Prove that Rᵢ preserves all Boolean values but can change non-Boolean evaluations. Explain how its placement controls degree, count operator checks and derive a polynomial field-size requirement.",
    "answer": [
      "Rᵢ interpolates the endpoint restrictions and is linear in xᵢ. It agrees with P whenever xᵢ∈{0,1}; other field values can differ.",
      "Quantifier elimination can multiply degrees in surviving variables. Reducing all surviving coordinates between elimination stages prevents repeated doubling from accumulating.",
      "The verifier works backward from the final claimed scalar. At each operation, it checks a univariate polynomial of a known bounded degree, samples a fresh point, and reduces the claim. With polynomially many checks and polynomial degrees, a polynomial-size field gives constant total soundness error."
    ],
    "followups": [
      [
        "Give a polynomial changed by Rᵢ.",
        "P(x)=x² becomes R(P)=x. They agree at 0 and 1 and disagree at, for example, 2 in a field where 2²≠2."
      ],
      [
        "Why is bare sum-check not already a proof for QBF?",
        "Alternating quantifiers are not one Boolean hypercube sum; naive elimination can also create exponentially large degrees."
      ]
    ],
    "results": [
      "IP=PSPACE main theorem",
      "QBF arithmetization",
      "Degree-reduction operator"
    ],
    "stretch": true,
    "unit": "Degree reduction",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "Rᵢ interpolates the endpoint restrictions and is linear in xᵢ. It agrees with P whenever xᵢ∈{0,1}; other field values can differ.",
    "example": "Quantifier elimination can multiply degrees in surviving variables. Reducing all surviving coordinates between elimination stages prevents repeated doubling from accumulating.",
    "warning": "P(x)=x² becomes R(P)=x. They agree at 0 and 1 and disagree at, for example, 2 in a field where 2²≠2.",
    "oral": "Write the operators for ∃, ∀ and Rᵢ. Prove that Rᵢ preserves all Boolean values but can change non-Boolean evaluations. Explain how its placement controls degree, count operator checks and derive a polynomial field-size requirement."
  },
  {
    "id": "core-private-ip",
    "s": "complexity",
    "source": "shamir",
    "section": "Upper bound and precision",
    "title": "IP ⊆ PSPACE: private information changes the recurrence",
    "theorem": "A polynomial-space simulation must optimize prover moves using only the public transcript; revealing private verifier coins to the maximization is unsound.",
    "proof": [
      "Bound transcript length and the verifier’s random tape length by polynomials.",
      "At a public transcript, enumerate all private random tapes consistent with the verifier messages observed so far.",
      "For each possible prover message, compute its conditional acceptance value recursively.",
      "Reuse space to sum weighted values and maximize over legal transcript-dependent messages."
    ],
    "task": "Repair the naive max/average game-tree proof for a private-coin verifier. Give a one-bit example where E[max] differs from max[E]. Explain how conditional random-tape weights and exact acceptance numerators can be recomputed in polynomial space.",
    "answer": [
      "Let a hidden fair bit be b and accept when the prover guesses b. A legal prover succeeds with probability 1/2, whereas maximizing separately after revealing b gives E[max]=1.",
      "The strategy depends on the observed transcript, not on an unobserved private verifier configuration. Enumerate consistent random tapes to compute transition probabilities; do not give their identities to the maximization.",
      "A useful integer recurrence is F(h)=the maximum number of accepting tapes consistent with public history h. At a prover move take max_y F(hy); at a visible verifier message sum F(hz) over the messages z, whose consistent-tape sets partition the current set. At a terminal history, enumerate and count accepting consistent tapes.",
      "With a polynomial bound R on all private random bits, each F is at most 2^R and uses O(R) bits. The transcript, loop counters and recursive stack all have polynomial size. The root value divided by 2^R is the optimal legal acceptance probability."
    ],
    "followups": [
      [
        "Why does time blow-up not invalidate the proof?",
        "PSPACE constrains workspace, not polynomial running time. Exponential branching can be re-enumerated."
      ],
      [
        "Would the public-coin recurrence be simpler?",
        "Yes. Public randomness is part of the transcript, so averaging and subsequent prover choices can be ordered directly."
      ]
    ],
    "results": [
      "IP⊆PSPACE",
      "Private-coin strategy restriction"
    ],
    "stretch": true,
    "unit": "Upper bound and precision",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "Let a hidden fair bit be b and accept when the prover guesses b. A legal prover succeeds with probability 1/2, whereas maximizing separately after revealing b gives E[max]=1.",
    "example": "The strategy depends on the observed transcript, not on an unobserved private verifier configuration. Enumerate consistent random tapes to compute transition probabilities; do not give their identities to the maximization.",
    "warning": "PSPACE constrains workspace, not polynomial running time. Exponential branching can be re-enumerated.",
    "oral": "Repair the naive max/average game-tree proof for a private-coin verifier. Give a one-bit example where E[max] differs from max[E]. Explain how conditional random-tape weights and exact acceptance numerators can be recomputed in polynomial space."
  },
  {
    "id": "core-bfl-oracle",
    "s": "complexity",
    "source": "bfl",
    "section": "Oracle characterization",
    "title": "BFL: the oracle model and two-prover consistency",
    "theorem": "The proof-oracle viewpoint requires a single fixed answer function. Two noncommunicating provers allow consistency checks, but naive agreement at one point does not establish global correctness.",
    "proof": [
      "Define polynomial-size questions and exponentially many possible addresses.",
      "Describe a fixed proof oracle and its answer function.",
      "Use separated provers for correlated restriction and point queries.",
      "State the consistency and proximity lemmas needed before decoding a global object."
    ],
    "task": "Explain how a two-prover strategy differs from an adaptive single-prover strategy. Give a contextual-answer cheating strategy when the whole query bundle is sent to one prover. Identify the theorem needed to turn local consistency into a global algebraic proof.",
    "answer": [
      "A deterministic strategy for a separated prover is a function of its own question and the input. Shared initial randomness can be fixed when maximizing acceptance.",
      "A single prover that sees a line and a point can tailor the line polynomial to that point. Separation prevents that coordination after the questions arrive.",
      "Consistency is necessary but not sufficient: a low-degree/multilinearity proximity theorem and a decoding argument are needed. “The provers cross-check each other” is not a soundness proof."
    ],
    "followups": [
      [
        "Can a prover see the other prover’s question?",
        "Not in the classical model being analyzed. Allowing that information changes the legal strategies."
      ],
      [
        "Why not call the strategy table a polynomial NP certificate?",
        "Polynomial-length questions have exponentially many possible values; the full table can be exponentially large."
      ]
    ],
    "results": [
      "Oracle characterization",
      "Two-prover consistency"
    ],
    "stretch": true,
    "unit": "Oracle characterization",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "A deterministic strategy for a separated prover is a function of its own question and the input. Shared initial randomness can be fixed when maximizing acceptance.",
    "example": "A single prover that sees a line and a point can tailor the line polynomial to that point. Separation prevents that coordination after the questions arrive.",
    "warning": "Not in the classical model being analyzed. Allowing that information changes the legal strategies.",
    "oral": "Explain how a two-prover strategy differs from an adaptive single-prover strategy. Give a contextual-answer cheating strategy when the whole query bundle is sent to one prover. Identify the theorem needed to turn local consistency into a global algebraic proof."
  },
  {
    "id": "core-bfl-multilinear",
    "s": "complexity",
    "source": "bfl",
    "section": "Multilinearity and decoding",
    "title": "BFL: tests, proximity, self-correction and global consistency",
    "theorem": "The algebraic encoding is checked by local restrictions; passing with high probability must imply proximity to one multilinear function before its values can be trusted.",
    "proof": [
      "State the domain, field and distance notion for the encoding.",
      "Test one-coordinate line restrictions for degree one.",
      "Invoke the robust multilinearity theorem with its quantitative hypothesis.",
      "Use self-correction and consistency checks to evaluate the decoded object."
    ],
    "task": "Present the dependency graph of the BFL soundness proof: local tests → proximity → a decoded multilinear function → correctness of the encoded computation. Explain why perfect success on sampled lines alone is not a complete proof, and give an example of a quadratic function detected by a degree-one line test.",
    "answer": [
      "On a coordinate line, a multilinear function restricts to an affine univariate polynomial. A quadratic such as x₁² fails an exact affine-line test on a sufficiently large field.",
      "For imperfect tests one needs a quantitative statement: high success implies small relative Hamming distance to a global multilinear function. State the test distribution and all error dependencies.",
      "A decoded function must satisfy both encoding consistency and the algebraic computation constraints. Proximity without computation checks can certify a consistent encoding of a false witness."
    ],
    "followups": [
      [
        "Is this a request to reproduce the entire multilinearity theorem in five minutes?",
        "No. This is a proof-architecture task: state the exact intermediate claim you use and defend how it connects to the next step."
      ],
      [
        "Why does self-correction require a proximity bound?",
        "Without closeness to one codeword, local random reconstructions can be mutually inconsistent."
      ]
    ],
    "results": [
      "Multilinearity test",
      "Self-correction",
      "Arithmetized computation"
    ],
    "stretch": true,
    "unit": "Multilinearity and decoding",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "On a coordinate line, a multilinear function restricts to an affine univariate polynomial. A quadratic such as x₁² fails an exact affine-line test on a sufficiently large field.",
    "example": "For imperfect tests one needs a quantitative statement: high success implies small relative Hamming distance to a global multilinear function. State the test distribution and all error dependencies.",
    "warning": "No. This is a proof-architecture task: state the exact intermediate claim you use and defend how it connects to the next step.",
    "oral": "Present the dependency graph of the BFL soundness proof: local tests → proximity → a decoded multilinear function → correctness of the encoded computation. Explain why perfect success on sampled lines alone is not a complete proof, and give an example of a quadratic function detected by a degree-one line test."
  },
  {
    "id": "core-bfl-nexp",
    "s": "complexity",
    "source": "bfl",
    "section": "The main theorem and consequences",
    "title": "MIP = NEXP: both bounds and circuit consequences",
    "theorem": "Classical polynomial-time multi-prover interactive proofs characterize nondeterministic exponential time; the upper bound guesses complete local strategy tables.",
    "proof": [
      "Count all questions and answers allowed by a polynomial-time verifier.",
      "Guess one local answer table for each prover.",
      "Enumerate verifier random tapes and compute exact acceptance.",
      "For the lower bound, identify how an exponential computation is encoded and checked locally."
    ],
    "task": "Prove MIP⊆NEXP with explicit table-size and random-tape bounds. Outline NEXP⊆MIP, naming its algebraic bottlenecks. Explain why the PSPACE single-prover simulation cannot independently optimize each prover response history.",
    "answer": [
      "There are 2^poly(n) possible questions; each answer has polynomial length. A constant number of tables therefore has exponential total size.",
      "After guessing them, enumerate 2^poly(n) verifier random tapes and compute the acceptance fraction using counters of polynomial bit length. The total computation is still nondeterministic exponential time.",
      "For the lower bound, an exponential witness/computation is represented through algebraic encodings with polynomial-length addresses. Local tests and consistency force a global object; this is where the deep theorem lies. The paper also connects small prover circuits with MA-type simulations and EXP circuit consequences."
    ],
    "followups": [
      [
        "Why can two local choices not be maximized separately at every global transcript?",
        "The same local question must receive the same table answer across contexts the prover cannot distinguish."
      ],
      [
        "Does classical MIP=NEXP state anything about entangled strategies?",
        "No. The legal strategy model here is classical; importing another model changes the theorem."
      ]
    ],
    "results": [
      "Main theorem 1.1",
      "NEXP upper bound",
      "EXP circuit consequences"
    ],
    "stretch": true,
    "unit": "The main theorem and consequences",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "There are 2^poly(n) possible questions; each answer has polynomial length. A constant number of tables therefore has exponential total size.",
    "example": "After guessing them, enumerate 2^poly(n) verifier random tapes and compute the acceptance fraction using counters of polynomial bit length. The total computation is still nondeterministic exponential time.",
    "warning": "The same local question must receive the same table answer across contexts the prover cannot distinguish.",
    "oral": "Prove MIP⊆NEXP with explicit table-size and random-tape bounds. Outline NEXP⊆MIP, naming its algebraic bottlenecks. Explain why the PSPACE single-prover simulation cannot independently optimize each prover response history."
  },
  {
    "id": "core-gmw-def",
    "s": "complexity",
    "source": "gmw",
    "section": "Definitions and graph isomorphism",
    "title": "Zero knowledge: malicious views, simulators and quantifiers",
    "theorem": "Zero knowledge compares the entire verifier view with a simulator’s output for every permitted efficient verifier, including auxiliary information in the chosen definition.",
    "proof": [
      "Write completeness and soundness separately from the simulation claim.",
      "Specify the verifier view: random tape, messages and outputs.",
      "Construct the graph-isomorphism simulator by guessing a challenge.",
      "Analyze expected rewinding time and the conditional output distribution."
    ],
    "task": "Give a full quantifier-level definition and simulate the graph-isomorphism protocol against an arbitrary efficient verifier. Explain why a uniform random relabeling hides the guessed source graph and why expected two trials follows.",
    "answer": [
      "For isomorphic G₀,G₁, a random relabeling of either graph has the same distribution. Choose a guessed challenge b, send a random relabeling of G_b and rewind unless the verifier asks b.",
      "Because the first-message distribution is independent of b, success probability is 1/2 for a fixed verifier random tape and auxiliary input. Conditioned on success, the view matches the real protocol.",
      "Expected-polynomial-time simulation and strict polynomial-time simulation are distinct conventions; truncation trades an exact distribution for a small statistical error."
    ],
    "followups": [
      [
        "Why is an honest-verifier simulator insufficient?",
        "A malicious verifier can choose challenges as a function of the first message and its auxiliary input. The simulation must handle that strategy."
      ],
      [
        "Does simulation imply soundness?",
        "No. A protocol can be simulatable yet accept false statements; these are separate properties."
      ]
    ],
    "results": [
      "Zero-knowledge definition",
      "Graph isomorphism protocol"
    ],
    "stretch": true,
    "unit": "Definitions and graph isomorphism",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "For isomorphic G₀,G₁, a random relabeling of either graph has the same distribution. Choose a guessed challenge b, send a random relabeling of G_b and rewind unless the verifier asks b.",
    "example": "Because the first-message distribution is independent of b, success probability is 1/2 for a fixed verifier random tape and auxiliary input. Conditioned on success, the view matches the real protocol.",
    "warning": "A malicious verifier can choose challenges as a function of the first message and its auxiliary input. The simulation must handle that strategy.",
    "oral": "Give a full quantifier-level definition and simulate the graph-isomorphism protocol against an arbitrary efficient verifier. Explain why a uniform random relabeling hides the guessed source graph and why expected two trials follows."
  },
  {
    "id": "core-gmw-gni",
    "s": "complexity",
    "source": "gmw",
    "section": "Graph nonisomorphism",
    "title": "Graph nonisomorphism: hidden choices and verifier certification",
    "theorem": "The basic graph-nonisomorphism verifier sends a random relabeling of a secretly chosen input graph; on isomorphic inputs the hidden bit is information-theoretically concealed.",
    "proof": [
      "Define the basic challenge and unbounded prover response.",
      "Prove perfect completeness for nonisomorphic inputs.",
      "Show identical challenge distributions on isomorphic inputs.",
      "Explain why malicious-verifier zero knowledge needs more than this soundness calculation."
    ],
    "task": "Prove completeness and soundness of the basic GNI protocol. Exhibit the malicious-verifier simulation obstacle when an arbitrary graph is supplied as the challenge. Describe the role of the paper’s additional verifier-certification machinery without claiming the basic three-line protocol already solves it.",
    "answer": [
      "If G₀ and G₁ are nonisomorphic, the challenge graph is isomorphic to exactly one of them, so the unbounded prover can identify b.",
      "If they are isomorphic, random relabelings have identical distributions and no prover can guess the uniformly hidden b with probability above 1/2.",
      "A malicious verifier may send a challenge not honestly derived from either input. Simulating the response by running a graph-isomorphism decision procedure is not a polynomial-time simulation proof; the stronger construction handles this issue."
    ],
    "followups": [
      [
        "What is the difference from the GI protocol?",
        "The GNI prover distinguishes a hidden source; the GI prover demonstrates an isomorphism to a selected source."
      ],
      [
        "Why does soundness amplify sequentially?",
        "Condition on every preceding history. On a false statement the next hidden bit is fresh and remains unbiased to the prover."
      ]
    ],
    "results": [
      "Graph nonisomorphism",
      "Malicious-verifier simulation"
    ],
    "stretch": true,
    "unit": "Graph nonisomorphism",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "If G₀ and G₁ are nonisomorphic, the challenge graph is isomorphic to exactly one of them, so the unbounded prover can identify b.",
    "example": "If they are isomorphic, random relabelings have identical distributions and no prover can guess the uniformly hidden b with probability above 1/2.",
    "warning": "The GNI prover distinguishes a hidden source; the GI prover demonstrates an isomorphism to a selected source.",
    "oral": "Prove completeness and soundness of the basic GNI protocol. Exhibit the malicious-verifier simulation obstacle when an arbitrary graph is supplied as the challenge. Describe the role of the paper’s additional verifier-certification machinery without claiming the basic three-line protocol already solves it."
  },
  {
    "id": "core-gmw-np",
    "s": "complexity",
    "source": "gmw",
    "section": "Commitments and NP construction",
    "title": "GMW: commit, challenge, open; simulate a cheating verifier",
    "theorem": "Under the paper’s cryptographic hiding assumptions, NP statements have computational zero-knowledge proof systems through a graph-3-coloring reduction and commitment protocol.",
    "proof": [
      "Reduce the NP relation to a witness-preserving 3-coloring instance.",
      "Commit to a freshly permuted coloring.",
      "Open the endpoints of the verifier’s chosen edge.",
      "Prove binding-based soundness and hiding-based simulation with rewinding."
    ],
    "task": "For a graph with m edges, derive the one-round soundness bound and the sequential repetition count. Build the simulator that guesses an edge, and explain exactly why a cheating verifier’s edge choice cannot simply be assumed uniform.",
    "answer": [
      "Binding fixes one color per vertex in a cheating commitment. A non-3-colorable graph has a violated edge, so an honest uniformly chosen edge catches it with probability at least 1/m. Sequential k rounds have error at most (1−1/m)^k.",
      "The simulator guesses the edge to be opened, commits to consistent random distinct colors there and dummy colors elsewhere, and rewinds if a different edge is requested. The analysis uses computational hiding to justify the challenge behavior.",
      "Hiding supports zero knowledge, binding supports soundness. State the commitment model: statistically binding and computationally hiding commitments give information-theoretic binding with computational simulation indistinguishability."
    ],
    "followups": [
      [
        "Is parallel repetition automatically zero knowledge?",
        "No. The sequential rewinding proof does not immediately extend to simultaneous many-edge challenges."
      ],
      [
        "Does a random permutation of one fixed coloring hide everything?",
        "It hides labels, but opening many correlated edges of the same commitment can reveal structure. Fresh commitments and the protocol schedule matter."
      ]
    ],
    "results": [
      "All NP has zero knowledge under assumptions",
      "Commitment primitive",
      "Sequential simulation"
    ],
    "stretch": true,
    "unit": "Commitments and NP construction",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "Binding fixes one color per vertex in a cheating commitment. A non-3-colorable graph has a violated edge, so an honest uniformly chosen edge catches it with probability at least 1/m. Sequential k rounds have error at most (1−1/m)^k.",
    "example": "The simulator guesses the edge to be opened, commits to consistent random distinct colors there and dummy colors elsewhere, and rewinds if a different edge is requested. The analysis uses computational hiding to justify the challenge behavior.",
    "warning": "No. The sequential rewinding proof does not immediately extend to simultaneous many-edge challenges.",
    "oral": "For a graph with m edges, derive the one-round soundness bound and the sequential repetition count. Build the simulator that guesses an edge, and explain exactly why a cheating verifier’s edge choice cannot simply be assumed uniform."
  },
  {
    "id": "core-four-functions",
    "s": "probability",
    "source": "as",
    "section": "§6.1",
    "title": "Four Functions: the induction and lattice consequences",
    "theorem": "A pointwise product comparison at union and intersection implies a product comparison between the sums of four nonnegative set functions.",
    "proof": [
      "Split every family by whether its members contain the last coordinate.",
      "Write the four induced inequalities on the smaller Boolean lattice.",
      "Apply the induction hypothesis and the required two-point inequality.",
      "Transfer to distributive lattices and counting indicator functions."
    ],
    "task": "State the Four Functions theorem with nonnegativity and its exact union/intersection hypothesis. Reconstruct the coordinate-splitting induction rather than invoking FKG. Explain how the distributive-lattice and set-difference corollaries are obtained.",
    "answer": [
      "The hypothesis has the form α(A)β(B)≤γ(A∪B)δ(A∩B) for every A,B. The conclusion compares (∑α)(∑β) with (∑γ)(∑δ).",
      "The induction is a four-function argument: splitting into contains/does-not-contain pieces introduces cross terms that must be bounded, not discarded.",
      "Indicator functions turn the theorem into cardinality inequalities. A finite distributive lattice embeds into an appropriate set lattice with join and meet represented by union and intersection."
    ],
    "followups": [
      [
        "Why is nonnegativity required?",
        "The summation and product comparison arguments can reverse or fail for signed functions."
      ],
      [
        "Is this only a statement about uniform probability?",
        "No. The four functions can encode weights; product and lattice-measure inequalities are applications."
      ]
    ],
    "results": [
      "T6.1.1",
      "C6.1.2",
      "C6.1.3",
      "C6.1.4"
    ],
    "stretch": true,
    "unit": "§6.1",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "The hypothesis has the form α(A)β(B)≤γ(A∪B)δ(A∩B) for every A,B. The conclusion compares (∑α)(∑β) with (∑γ)(∑δ).",
    "example": "The induction is a four-function argument: splitting into contains/does-not-contain pieces introduces cross terms that must be bounded, not discarded.",
    "warning": "The summation and product comparison arguments can reverse or fail for signed functions.",
    "oral": "State the Four Functions theorem with nonnegativity and its exact union/intersection hypothesis. Reconstruct the coordinate-splitting induction rather than invoking FKG. Explain how the distributive-lattice and set-difference corollaries are obtained."
  },
  {
    "id": "core-fkg",
    "s": "probability",
    "source": "as",
    "section": "§6.2",
    "title": "FKG: measure hypotheses and negative examples",
    "theorem": "An appropriate log-supermodular measure on a finite distributive lattice positively correlates increasing functions.",
    "proof": [
      "Write μ(x∨y)μ(x∧y)≥μ(x)μ(y).",
      "Insert weighted increasing functions into Four Functions.",
      "Normalize by the measure’s total mass.",
      "Apply to increasing events and derive the opposite-monotonicity sign."
    ],
    "task": "Derive FKG from Four Functions for nonnegative increasing functions, then extend to real increasing functions on a finite lattice. Construct an increasing-event counterexample for a non-log-supermodular measure.",
    "answer": [
      "For increasing f,g, f(A)g(B)≤f(A∪B)g(A∪B). Combine this with log-supermodularity using α=fμ, β=gμ, γ=fgμ, δ=μ.",
      "Four Functions gives (∑fμ)(∑gμ)≤(∑fgμ)(∑μ). Normalize. Finite real functions can be shifted by constants without changing covariance.",
      "Give mass 1/2 each to 10 and 01 in {0,1}². Events “first bit is 1” and “second bit is 1” are increasing, yet their joint probability is 0<1/4."
    ],
    "followups": [
      [
        "Do increasing events need to be independent?",
        "No. Positive association gives a one-sided comparison, not independence."
      ],
      [
        "Does pairwise independence imply the FKG conclusion for every increasing event?",
        "No. FKG is a global structural property of the measure."
      ]
    ],
    "results": [
      "T6.2.1"
    ],
    "stretch": false,
    "unit": "§6.2",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "For increasing f,g, f(A)g(B)≤f(A∪B)g(A∪B). Combine this with log-supermodularity using α=fμ, β=gμ, γ=fgμ, δ=μ.",
    "example": "Four Functions gives (∑fμ)(∑gμ)≤(∑fgμ)(∑μ). Normalize. Finite real functions can be shifted by constants without changing covariance.",
    "warning": "No. Positive association gives a one-sided comparison, not independence.",
    "oral": "Derive FKG from Four Functions for nonnegative increasing functions, then extend to real increasing functions on a finite lattice. Construct an increasing-event counterexample for a non-log-supermodular measure."
  },
  {
    "id": "core-harris",
    "s": "probability",
    "source": "as",
    "section": "§6.3",
    "title": "Product-measure correlation: an inductive proof",
    "theorem": "Increasing events are positively correlated under independent-coordinate product measures; an increasing and a decreasing event are negatively correlated.",
    "proof": [
      "Condition on the last independent coordinate.",
      "Apply the inductive covariance inequality within each slice.",
      "Use monotonicity to compare the two conditional probabilities.",
      "Expand the remaining two-point covariance as a product of differences."
    ],
    "task": "Prove Harris–Kleitman by induction for unequal coordinate biases pᵢ. Write the last-coordinate covariance term explicitly. Apply it to two increasing random-graph properties and explain what fails for a fixed-edge-count model.",
    "answer": [
      "Let a_b=Pr(A|Xn=b), b_b=Pr(B|Xn=b). The leftover covariance is p(1−p)(a₁−a₀)(b₁−b₀)≥0.",
      "Independence leaves each conditioned slice a smaller product space. For an increasing and decreasing pair, one conditional difference changes sign.",
      "G(n,p) is a product measure over edges. Uniform G(n,m) has dependent coordinates; the product-measure proof is unavailable and correlation may have a different sign."
    ],
    "followups": [
      [
        "Why is monotonicity essential?",
        "For X Bernoulli, A={X=1} and B={X=0} have negative covariance."
      ],
      [
        "Does the argument require all pᵢ to coincide?",
        "No. Conditioning only uses independence, and the last-coordinate calculation allows any p∈[0,1]."
      ]
    ],
    "results": [
      "P6.3.1",
      "T6.3.2",
      "T6.3.3"
    ],
    "stretch": false,
    "unit": "§6.3",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "Let a_b=Pr(A|Xn=b), b_b=Pr(B|Xn=b). The leftover covariance is p(1−p)(a₁−a₀)(b₁−b₀)≥0.",
    "example": "Independence leaves each conditioned slice a smaller product space. For an increasing and decreasing pair, one conditional difference changes sign.",
    "warning": "For X Bernoulli, A={X=1} and B={X=0} have negative covariance.",
    "oral": "Prove Harris–Kleitman by induction for unequal coordinate biases pᵢ. Write the last-coordinate covariance term explicitly. Apply it to two increasing random-graph properties and explain what fails for a fixed-edge-count model."
  },
  {
    "id": "core-xyz",
    "s": "probability",
    "source": "as",
    "section": "§6.4",
    "title": "Linear extensions and the XYZ correlation theorem",
    "theorem": "For a uniform random linear extension of a finite poset, the events that a fixed element precedes two other designated elements satisfy the assigned positive-correlation inequality.",
    "proof": [
      "Specify the uniform sample space of all linear extensions.",
      "Represent the relevant ordering constraints by suitable families.",
      "Apply the section’s lattice/counting inequality.",
      "Normalize cardinalities to get the joint-probability bound."
    ],
    "task": "State the XYZ theorem and reconstruct its reduction to a counting inequality. Explain why independently assigning random ranks and conditioning on the poset is not a sufficient FKG proof.",
    "answer": [
      "For designated a,b,c, the target is Pr(a<b and a<c)≥Pr(a<b)Pr(a<c), where comparisons are in the sampled extension.",
      "Uniformity is over valid extensions, whose coordinates are not independent. One must use the structural counting argument from the section.",
      "A conditional distribution can lose product-measure association; simply saying “random rankings are independent” ignores the conditioning that defines a linear extension."
    ],
    "followups": [
      [
        "What if the poset already forces a before b?",
        "That event has probability 1 and the inequality reduces to equality for its contribution."
      ],
      [
        "How can a small instance be checked exactly?",
        "Enumerate topological orderings, count the two events and their intersection, and compare the normalized counts."
      ]
    ],
    "results": [
      "T6.4.1"
    ],
    "stretch": true,
    "unit": "§6.4",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "For designated a,b,c, the target is Pr(a<b and a<c)≥Pr(a<b)Pr(a<c), where comparisons are in the sampled extension.",
    "example": "Uniformity is over valid extensions, whose coordinates are not independent. One must use the structural counting argument from the section.",
    "warning": "That event has probability 1 and the inequality reduces to equality for its contribution.",
    "oral": "State the XYZ theorem and reconstruct its reduction to a counting inequality. Explain why independently assigning random ranks and conditioning on the poset is not a sufficient FKG proof."
  },
  {
    "id": "core-azuma",
    "s": "probability",
    "source": "as",
    "section": "§§7.1–7.2",
    "title": "Azuma: conditional MGFs and exposure couplings",
    "theorem": "A martingale with bounded increments has sub-Gaussian tails; Lipschitz graph functions obtain such increments through an explicit coupling of conditional completions.",
    "proof": [
      "Define the filtration and the Doob martingale.",
      "Prove a conditional exponential-moment bound for each increment.",
      "Iterate conditional expectations and optimize the exponential parameter.",
      "Couple future completions to justify the increment bound."
    ],
    "task": "Derive Pr(|Mₘ−M₀|≥t)≤2exp(−t²/(2∑cᵢ²)) under |Mᵢ−Mᵢ₋₁|≤cᵢ. For a graph statistic, show the coupling that proves the bound; explain why “the statistic is Lipschitz” needs a specified exposure.",
    "answer": [
      "Conditional mean zero and the bounded-increment MGF yield E exp(λ(Mₘ−M₀))≤exp(λ²∑cᵢ²/2). Markov and λ=t/∑cᵢ² give a one-sided tail.",
      "Apply the same proof to −M for the lower tail. A variance estimate alone does not justify this exponential inequality.",
      "When exposing one independent coordinate, couple all remaining coordinates identically in the two possible completions. Their function values differ by the coordinate Lipschitz constant, so the two conditional expectations do too."
    ],
    "followups": [
      [
        "Do bounded increments imply independent increments?",
        "No. The proof uses conditional expectations and the martingale property."
      ],
      [
        "Why can vertex exposure beat edge exposure for chromatic number?",
        "Changing the edges of one vertex changes χ by at most one, leaving only n exposure steps rather than Θ(n²)."
      ]
    ],
    "results": [
      "T7.2.1",
      "C7.2.2",
      "T7.2.3",
      "T7.2.4"
    ],
    "stretch": false,
    "unit": "§§7.1–7.2",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "Conditional mean zero and the bounded-increment MGF yield E exp(λ(Mₘ−M₀))≤exp(λ²∑cᵢ²/2). Markov and λ=t/∑cᵢ² give a one-sided tail.",
    "example": "Apply the same proof to −M for the lower tail. A variance estimate alone does not justify this exponential inequality.",
    "warning": "No. The proof uses conditional expectations and the martingale property.",
    "oral": "Derive Pr(|Mₘ−M₀|≥t)≤2exp(−t²/(2∑cᵢ²)) under |Mᵢ−Mᵢ₋₁|≤cᵢ. For a graph statistic, show the coupling that proves the bound; explain why “the statistic is Lipschitz” needs a specified exposure."
  },
  {
    "id": "core-chromatic",
    "s": "probability",
    "source": "as",
    "section": "§7.3",
    "title": "Chromatic concentration: packing and sparse windows",
    "theorem": "The chapter strengthens coarse Azuma estimates using edge-disjoint clique packings and sparse-graph structural bounds; its narrow chromatic window has explicit hypotheses on p.",
    "proof": [
      "Identify the chosen clique size and a maximum edge-disjoint clique packing.",
      "Use a Lipschitz packing statistic rather than the raw clique count.",
      "Derive the relevant lower-tail estimate.",
      "Combine a high-probability small-subgraph coloring lemma with the chromatic-number argument."
    ],
    "task": "Explain the advantage of exposing a maximum edge-disjoint clique packing instead of counting all cliques. State the p=n^−α, α>5/6 window theorem precisely, and identify where the three-colorability of small induced subgraphs is used.",
    "answer": [
      "A single edge belongs to many cliques, so raw clique count can have a large influence. In an edge-disjoint packing, changing one edge changes the optimum packing size by at most one.",
      "The dense G(n,1/2) clique lower tail and the sparse chromatic window are different results with different parameters; do not merge their hypotheses.",
      "For fixed α>5/6, the section proves concentration of χ(G(n,p)) within four consecutive integers, using that every sufficiently small vertex set is three-colorable with high probability."
    ],
    "followups": [
      [
        "Does the four-integer statement hold for every p?",
        "No. The stated sparse regime is part of the theorem."
      ],
      [
        "Why is a packing maximum still Lipschitz although the optimizer can change completely?",
        "Removing an edge destroys at most one packed clique; add that clique back to compare the two optimum values."
      ]
    ],
    "results": [
      "L7.3.1",
      "T7.3.2",
      "T7.3.3",
      "L7.3.4"
    ],
    "stretch": true,
    "unit": "§7.3",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "A single edge belongs to many cliques, so raw clique count can have a large influence. In an edge-disjoint packing, changing one edge changes the optimum packing size by at most one.",
    "example": "The dense G(n,1/2) clique lower tail and the sparse chromatic window are different results with different parameters; do not merge their hypotheses.",
    "warning": "No. The stated sparse regime is part of the theorem.",
    "oral": "Explain the advantage of exposing a maximum edge-disjoint clique packing instead of counting all cliques. State the p=n^−α, α>5/6 window theorem precisely, and identify where the three-colorability of small induced subgraphs is used."
  },
  {
    "id": "core-gradation",
    "s": "probability",
    "source": "as",
    "section": "§7.4",
    "title": "Gradations and adaptive-query variance accounting",
    "theorem": "A Lipschitz condition on a gradation controls martingale increments. A variance-sensitive adaptive-query bound requires its additional maximum-effect hypothesis.",
    "proof": [
      "Describe nested partitions and the associated conditional expectations.",
      "Couple atoms in successive partitions to bound differences.",
      "For an adaptive decision tree, account for per-query conditional variance.",
      "State the range of deviations for which the variance-sensitive theorem applies."
    ],
    "task": "Formulate the gradation Lipschitz condition and show how it induces a martingale. Contrast a sum of worst-case squared effects with a variance budget along an adaptive decision-tree path. Explain why variance alone cannot control arbitrarily large jumps.",
    "answer": [
      "A gradation specifies what is revealed at each stage. The conditional expectation process is a martingale by the tower property.",
      "Bounded maximum effect and bounded cumulative conditional variance are separate pieces of information. A rare enormous jump can have small variance yet spoil a claimed sub-Gaussian tail outside the admissible range.",
      "To apply the adaptive theorem, verify its bound on every possible query path, not only on the average executed path."
    ],
    "followups": [
      [
        "Can the next queried coordinate depend on earlier answers?",
        "Yes, but the filtration, conditional variances and maximum effects must follow that adaptive rule."
      ],
      [
        "What invalidates a proof using only Var(X)?",
        "Second-moment information yields Chebyshev, not a universal exponential tail."
      ]
    ],
    "results": [
      "T7.4.1",
      "T7.4.2",
      "T7.4.3"
    ],
    "stretch": true,
    "unit": "§7.4",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "A gradation specifies what is revealed at each stage. The conditional expectation process is a martingale by the tower property.",
    "example": "Bounded maximum effect and bounded cumulative conditional variance are separate pieces of information. A rare enormous jump can have small variance yet spoil a claimed sub-Gaussian tail outside the admissible range.",
    "warning": "Yes, but the filtration, conditional variances and maximum effects must follow that adaptive rule.",
    "oral": "Formulate the gradation Lipschitz condition and show how it induces a martingale. Contrast a sum of worst-case squared effects with a variance budget along an adaptive decision-tree path. Explain why variance alone cannot control arbitrarily large jumps."
  },
  {
    "id": "core-azuma-app",
    "s": "probability",
    "source": "as",
    "section": "§7.5",
    "title": "Four concentration applications: find the right Lipschitz constant",
    "theorem": "Missing values of a random map, signed vector norms and Hamming neighborhoods illustrate how concentration depends on the model and the sensitivity of the exposed coordinates.",
    "proof": [
      "Choose the independent random coordinates.",
      "Bound how one coordinate change affects the statistic.",
      "Translate the resulting concentration statement to the desired object.",
      "Separate exact expectations from approximations to the center."
    ],
    "task": "For a random map [n]→[n], prove that changing one image changes the number of missing values by at most one. For a signed vector sum, determine the effect of flipping a sign. Derive a Hamming-neighborhood consequence by concentrating distance to a set.",
    "answer": [
      "Changing one image can fill one previously empty bin and empty its old bin; these effects have opposite signs, so the missing-bin count changes by at most one.",
      "For ||∑εᵢvᵢ|| with ||vᵢ||≤1, flipping one sign changes the vector by 2vᵢ. State whether your martingale bound uses full replacement effect or the centered half-range before choosing constants.",
      "Distance to a subset of the cube is 1-Lipschitz in each bit. Concentrating it and using the set’s mass relates lower and upper quantiles, producing the neighborhood expansion conclusion."
    ],
    "followups": [
      [
        "Why is centering at n/e not exactly centering at the expectation?",
        "E[missing]=n(1−1/n)^n, so a deterministic error term is needed when replacing the exact center by n/e."
      ],
      [
        "Can a norm be replaced by one chosen coordinate?",
        "Not if the target theorem concerns the norm. Use the reverse triangle inequality to control the norm directly."
      ]
    ],
    "results": [
      "T7.5.1",
      "T7.5.2",
      "T7.5.3"
    ],
    "stretch": false,
    "unit": "§7.5",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "Changing one image can fill one previously empty bin and empty its old bin; these effects have opposite signs, so the missing-bin count changes by at most one.",
    "example": "For ||∑εᵢvᵢ|| with ||vᵢ||≤1, flipping one sign changes the vector by 2vᵢ. State whether your martingale bound uses full replacement effect or the centered half-range before choosing constants.",
    "warning": "E[missing]=n(1−1/n)^n, so a deterministic error term is needed when replacing the exact center by n/e.",
    "oral": "For a random map [n]→[n], prove that changing one image changes the number of missing values by at most one. For a signed vector sum, determine the effect of flipping a sign. Derive a Hamming-neighborhood consequence by concentrating distance to a set."
  },
  {
    "id": "core-talagrand",
    "s": "probability",
    "source": "as",
    "section": "§7.6",
    "title": "Talagrand’s convex distance: geometric rather than Hamming distance",
    "theorem": "Talagrand’s product-space inequality controls a convexified weighted mismatch distance, not ordinary Hamming distance.",
    "proof": [
      "Build mismatch indicator vectors between x and points in A.",
      "Take their convex hull and find its minimum Euclidean norm.",
      "Relate this to the weighted supremum form of convex distance.",
      "Apply the exponential-integral inequality and Markov."
    ],
    "task": "Define the mismatch-vector convex hull and prove the dual weighted-distance interpretation. Derive μ{dT(x,A)≥t}≤exp(−t²/4)/μ(A). Compute the convex distance for A={00,11}, x=01 and compare it with Hamming distance.",
    "answer": [
      "For x=01, the mismatch vectors to A are (0,1) and (1,0). Their convex hull has minimum norm 1/√2 at (1/2,1/2), while Hamming distance to A is 1.",
      "The source inequality E exp(dT(X,A)²/4)≤1/μ(A) implies the displayed tail by Markov.",
      "The weighting/convexification can average several possible witnesses. Replacing it by the raw count of changed coordinates is a different inequality."
    ],
    "followups": [
      [
        "Why must the underlying measure be a product?",
        "The theorem exploits independence of the coordinate spaces; arbitrary dependent measures need not satisfy it."
      ],
      [
        "What happens if μ(A)=0?",
        "The bound is vacuous or undefined in this form. Apply it only for positive-mass A."
      ]
    ],
    "results": [
      "T7.6.1",
      "T7.6.2"
    ],
    "stretch": true,
    "unit": "§7.6",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "For x=01, the mismatch vectors to A are (0,1) and (1,0). Their convex hull has minimum norm 1/√2 at (1/2,1/2), while Hamming distance to A is 1.",
    "example": "The source inequality E exp(dT(X,A)²/4)≤1/μ(A) implies the displayed tail by Markov.",
    "warning": "The theorem exploits independence of the coordinate spaces; arbitrary dependent measures need not satisfy it.",
    "oral": "Define the mismatch-vector convex hull and prove the dual weighted-distance interpretation. Derive μ{dT(x,A)≥t}≤exp(−t²/4)/μ(A). Compute the convex distance for A={00,11}, x=01 and compare it with Hamming distance."
  },
  {
    "id": "core-certificate",
    "s": "probability",
    "source": "as",
    "section": "§7.7",
    "title": "Certifiable variables: turn witnesses into sharper concentration",
    "theorem": "A Lipschitz random variable with small certificates for large values obtains stronger lower-tail control through Talagrand’s convex distance.",
    "proof": [
      "Define what a certificate of X≥b fixes.",
      "Bound the number f(b) of coordinates needed.",
      "Relate a low-value outcome to weighted mismatches on a certificate.",
      "Apply Talagrand to high-value and low-value event sets."
    ],
    "task": "For maximum matching in a graph with independent edge variables, prove 1-Lipschitzness and give a b-edge certificate for X≥b. Derive the form Pr(X≤b−t√f(b))Pr(X≥b)≤e^−t²/4 and explain its median-centered interpretation.",
    "answer": [
      "Flipping one edge changes maximum matching size by at most one: remove that edge from an optimal matching if needed. A matching of b present edges certifies X≥b using b coordinates.",
      "A deficit of t√f(b) forces enough mismatches against every high-value certificate. The certificate size, rather than the total number of random coordinates, controls the scale.",
      "Set b to an appropriate median or quantile to turn the product of event probabilities into a one-sided tail. Passing from median to expectation requires an additional estimate."
    ],
    "followups": [
      [
        "Does triangle count have a b-edge certificate for count≥b?",
        "Not automatically. Overlapping triangles complicate both the certificate size and the Lipschitz constant."
      ],
      [
        "Why can this improve on Azuma?",
        "The relevant witness can use far fewer coordinates than the full product space."
      ]
    ],
    "results": [
      "T7.7.1"
    ],
    "stretch": true,
    "unit": "§7.7",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "Flipping one edge changes maximum matching size by at most one: remove that edge from an optimal matching if needed. A matching of b present edges certifies X≥b using b coordinates.",
    "example": "A deficit of t√f(b) forces enough mismatches against every high-value certificate. The certificate size, rather than the total number of random coordinates, controls the scale.",
    "warning": "Not automatically. Overlapping triangles complicate both the certificate size and the Lipschitz constant.",
    "oral": "For maximum matching in a graph with independent edge variables, prove 1-Lipschitzness and give a b-edge certificate for X≥b. Derive the form Pr(X≤b−t√f(b))Pr(X≥b)≤e^−t²/4 and explain its median-centered interpretation."
  },
  {
    "id": "core-kim-vu",
    "s": "probability",
    "source": "as",
    "section": "§7.8",
    "title": "Kim–Vu: derivative expectations matter",
    "theorem": "Concentration of a bounded-degree nonnegative polynomial in independent Bernoulli variables is controlled by expectations of its partial derivatives, not only its mean.",
    "proof": [
      "Represent the statistic as a multilinear polynomial.",
      "For each derivative order, calculate the largest expected derivative.",
      "Define E and E′ using the theorem’s nonempty-derivative convention.",
      "Check the polynomial degree and the deviation/range parameters."
    ],
    "task": "For triangle count in G(n,p), compute the mean and the first-, second-, and third-derivative expectation scales. Identify the dense and sparse regimes in the Kim–Vu parameters and explain why substituting only μ into a Chernoff formula is invalid.",
    "answer": [
      "For X=∑triangles ∏edges xₑ, E[X]=C(n,3)p³. A derivative in one edge has expectation (n−2)p²; two adjacent edges give p; a full triangle gives 1. Other incompatible derivatives vanish.",
      "Thus nonempty derivative expectations can dominate the mean in sparse regimes. Define the theorem’s E′ as the maximum over nonempty derivatives, including the third derivative.",
      "The polynomial has nonnegative coefficients and fixed degree three. Apply the source theorem with its constants and λ-range; dependence among triangle indicators prevents treating them as independent Bernoulli summands."
    ],
    "followups": [
      [
        "Why include the highest-order derivative?",
        "For a monomial it equals its coefficient; dropping it can falsely predict concentration when the expected count is tiny."
      ],
      [
        "Is the triangle-count polynomial monotone?",
        "Yes, but monotonicity alone does not establish its concentration scale."
      ]
    ],
    "results": [
      "T7.8.1"
    ],
    "stretch": true,
    "unit": "§7.8",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "For X=∑triangles ∏edges xₑ, E[X]=C(n,3)p³. A derivative in one edge has expectation (n−2)p²; two adjacent edges give p; a full triangle gives 1. Other incompatible derivatives vanish.",
    "example": "Thus nonempty derivative expectations can dominate the mean in sparse regimes. Define the theorem’s E′ as the maximum over nonempty derivatives, including the third derivative.",
    "warning": "For a monomial it equals its coefficient; dropping it can falsely predict concentration when the expected count is tiny.",
    "oral": "For triangle count in G(n,p), compute the mean and the first-, second-, and third-derivative expectation scales. Identify the dense and sparse regimes in the Kim–Vu parameters and explain why substituting only μ into a Chernoff formula is invalid."
  },
  {
    "id": "core-shannon",
    "s": "probability",
    "source": "as",
    "section": "§15.1",
    "title": "Shannon coding: random errors versus worst-case errors",
    "theorem": "For a binary symmetric channel with crossover p<1/2, rates approaching 1−H₂(p) from below are achievable with vanishing decoding error; the section also treats linear codes.",
    "proof": [
      "Define the random channel model and rate log₂|C|/n.",
      "Bound the probability of atypically many flips.",
      "Bound the volume of a typical Hamming ball using binary entropy.",
      "Use random coding and a union bound or an averaging argument to obtain a good code."
    ],
    "task": "Prove a random-coding achievability bound at rate R<1−H₂(p). Separate the typical-error event from confusion with another codeword. Contrast this with the minimum-distance requirement for correcting every pattern of t adversarial errors.",
    "answer": [
      "For any small δ>0, channel noise has at most (p+δ)n flips with high probability. The associated Hamming ball has at most 2^(nH₂(p+δ)) strings up to subexponential factors.",
      "For a random codebook of 2^(nR) words, a competing word lands in a decoding ball with probability bounded by its volume/2^n. Union-bound over competitors and choose R+H₂(p+δ)<1.",
      "Random-noise achievability allows a small decoding-error probability. Correcting every t-bit corruption requires minimum distance at least 2t+1 and is a stronger, different requirement."
    ],
    "followups": [
      [
        "Why does the entropy approximation require p≤1/2?",
        "Binary Hamming-ball volume grows at exponent H₂(p) only in the lower-half regime; beyond half the ball includes most of the cube."
      ],
      [
        "What additional issue does the linear-code theorem address?",
        "The code must be a subspace; random generator/parity-check arguments replace independent arbitrary codeword sampling."
      ]
    ],
    "results": [
      "T15.1.1",
      "T15.1.2"
    ],
    "stretch": true,
    "unit": "§15.1",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "For any small δ>0, channel noise has at most (p+δ)n flips with high probability. The associated Hamming ball has at most 2^(nH₂(p+δ)) strings up to subexponential factors.",
    "example": "For a random codebook of 2^(nR) words, a competing word lands in a decoding ball with probability bounded by its volume/2^n. Union-bound over competitors and choose R+H₂(p+δ)<1.",
    "warning": "Binary Hamming-ball volume grows at exponent H₂(p) only in the lower-half regime; beyond half the ball includes most of the cube.",
    "oral": "Prove a random-coding achievability bound at rate R<1−H₂(p). Separate the typical-error event from confusion with another codeword. Contrast this with the minimum-distance requirement for correcting every pattern of t adversarial errors."
  },
  {
    "id": "core-liar",
    "s": "probability",
    "source": "as",
    "section": "§15.2",
    "title": "The adaptive Liar Game: a weight bound is not a strategy",
    "theorem": "The ChipLiar weight ∑xᵢB(q,i), with B(q,i)=2^−q∑j≤i C(q,j), gives a sufficient winning condition for the adversary when it exceeds one.",
    "proof": [
      "Interpret chips by remaining lie budgets.",
      "Write successor states for the two possible answers.",
      "Prove the weight equals the average of successor weights.",
      "Keep weight above one to prevent unique identification."
    ],
    "task": "Derive the ChipLiar recurrence for a chosen partition and prove the adversary’s weight argument. Deduce n∑j≤k C(q,j)>2^q as an impossibility bound. Explain why its converse is not an automatic adaptive search strategy.",
    "answer": [
      "Pascal’s identity gives B(q,i)=[B(q−1,i)+B(q−1,i−1)]/2. Summing chip contributions yields the average-of-successor-weights identity.",
      "The adversary selects a branch with weight at least the current value. At q=0 each surviving chip has weight one, so weight>1 means at least two candidates remain.",
      "For n candidates each with budget k, the initial weight is n2^−q∑j≤k C(q,j). A small total weight does not ensure an available question balances both successor states."
    ],
    "followups": [
      [
        "Why is a code-distance argument alone incomplete for adaptive questions?",
        "Future questions depend on earlier reported answers; a fixed answer vector per item no longer captures the entire decision tree."
      ],
      [
        "What is the subtle integer obstruction?",
        "Chip weights are discrete. A mathematically desired half split might not correspond to any permitted partition of the actual chips."
      ]
    ],
    "results": [
      "T15.2.1",
      "C15.2.2"
    ],
    "stretch": true,
    "unit": "§15.2",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "Pascal’s identity gives B(q,i)=[B(q−1,i)+B(q−1,i−1)]/2. Summing chip contributions yields the average-of-successor-weights identity.",
    "example": "The adversary selects a branch with weight at least the current value. At q=0 each surviving chip has weight one, so weight>1 means at least two candidates remain.",
    "warning": "Future questions depend on earlier reported answers; a fixed answer vector per item no longer captures the entire decision tree.",
    "oral": "Derive the ChipLiar recurrence for a chosen partition and prove the adversary’s weight argument. Deduce n∑j≤k C(q,j)>2^q as an impossibility bound. Explain why its converse is not an automatic adaptive search strategy."
  },
  {
    "id": "core-tenure",
    "s": "probability",
    "source": "as",
    "section": "§15.3",
    "title": "Tenure Game: the exact dyadic threshold",
    "theorem": "For chips at positive levels i, total dyadic weight W=∑xᵢ2^−i has an exact threshold: W<1 lets Carole win; W≥1 lets Paul force a chip to level zero.",
    "proof": [
      "For a chosen chip subset, compute both promote-one-side/delete-the-other outcomes.",
      "Use that current weight is the average of successor weights.",
      "Below one, Carole always selects the smaller successor.",
      "At or above one, split dyadic chip weight into two parts each at least one half."
    ],
    "task": "Prove both directions of the threshold and the dyadic splitting lemma. Explain the induction that glues two equal-level chips into one higher chip, including the equality case W=1.",
    "answer": [
      "Promotion from i to i−1 doubles the promoted chip’s weight; deletion removes the other side, so Wy+Wn=2W. Carole can maintain W<1, which excludes a level-zero chip.",
      "If W≥1, there are two chips at some level unless the total is below one. Glue two level-i chips into one level-(i−1) chip and induct to obtain a split with both parts of weight at least 1/2.",
      "Paul chooses that split, so either successor has weight at least one. The game ends in finitely many promotions, and it cannot end with no chips."
    ],
    "followups": [
      [
        "How does this differ from the Liar Game?",
        "Here nonpromoted chips are deleted; the exact dyadic splitting lemma supplies a converse that the Liar Game weight bound lacks."
      ],
      [
        "Can Paul lose when W=1 by choosing the wrong partition?",
        "Yes. The theorem guarantees a strategy, not that every partition is safe."
      ]
    ],
    "results": [
      "T15.3.1",
      "L15.3.2",
      "T15.3.3"
    ],
    "stretch": false,
    "unit": "§15.3",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "Promotion from i to i−1 doubles the promoted chip’s weight; deletion removes the other side, so Wy+Wn=2W. Carole can maintain W<1, which excludes a level-zero chip.",
    "example": "If W≥1, there are two chips at some level unless the total is below one. Glue two level-i chips into one level-(i−1) chip and induct to obtain a split with both parts of weight at least 1/2.",
    "warning": "Here nonpromoted chips are deleted; the exact dyadic splitting lemma supplies a converse that the Liar Game weight bound lacks.",
    "oral": "Prove both directions of the threshold and the dyadic splitting lemma. Explain the induction that glues two equal-level chips into one higher chip, including the equality case W=1."
  },
  {
    "id": "core-balancing",
    "s": "probability",
    "source": "as",
    "section": "§§15.4–15.5",
    "title": "Balancing vectors: randomized play against an adaptive adversary",
    "theorem": "In the n-round n-dimensional sign-vector game, the assigned bounds give value Θ(√(n ln n)); the online/nonadaptive discussion concerns irrevocable coloring choices.",
    "proof": [
      "At each round, Pusher selects a sign vector and Chooser selects its sign.",
      "For random Chooser signs, calculate each coordinate’s walk distribution conditionally on past play.",
      "Use a tail bound and a union bound over coordinates.",
      "Use finite perfect-information determinacy and the source’s reverse potential argument for the lower bound."
    ],
    "task": "Prove the O(√(n ln n)) upper bound against an adaptive Pusher. Explain the quantifier step from a random strategy with positive success probability against every fixed opponent strategy to a deterministic winning strategy. State what extra work yields the matching lower bound.",
    "answer": [
      "Even if Pusher adapts to the past, multiplying its current ±1 coordinate by a fresh fair Chooser sign gives a fresh fair conditional increment. Each coordinate has the n-step symmetric-walk law.",
      "Pr(maxj |Sj|>α)≤nPr(|Sn|>α). A threshold with the right-hand side below one gives positive success probability against every fixed Pusher strategy.",
      "Determinacy rules out a winning Pusher strategy, so Chooser has a winning strategy. The Ω bound uses a carefully balanced potential; it does not follow by reversing the union bound."
    ],
    "followups": [
      [
        "Does nonadaptive here mean a fixed list of yes/no identification queries?",
        "In §15.5 it is the online irrevocable discrepancy model: columns arrive and a sign must be chosen immediately."
      ],
      [
        "Can one replace Θ(√(n ln n)) by the offline O(√n) discrepancy theorem?",
        "No. The information pattern and irrevocability constraints differ."
      ]
    ],
    "results": [
      "T15.4.1",
      "C15.4.2",
      "T15.4.3",
      "C15.4.4",
      "§15.5 online model"
    ],
    "stretch": true,
    "unit": "§§15.4–15.5",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "Even if Pusher adapts to the past, multiplying its current ±1 coordinate by a fresh fair Chooser sign gives a fresh fair conditional increment. Each coordinate has the n-step symmetric-walk law.",
    "example": "Pr(maxj |Sj|>α)≤nPr(|Sn|>α). A threshold with the right-hand side below one gives positive success probability against every fixed Pusher strategy.",
    "warning": "In §15.5 it is the online irrevocable discrepancy model: columns arrive and a sign must be chosen immediately.",
    "oral": "Prove the O(√(n ln n)) upper bound against an adaptive Pusher. Explain the quantifier step from a random strategy with positive success probability against every fixed opponent strategy to a deterministic winning strategy. State what extra work yields the matching lower bound."
  },
  {
    "id": "core-half-liar",
    "s": "probability",
    "source": "as",
    "section": "§15.6",
    "title": "Half-Liar Game: one-sided lies and the k=1 proof",
    "theorem": "When a truthful Yes cannot be changed but a truthful No may be reported as Yes, the assigned result is Aₖ(q)∼2^(q+k)/C(q,k) for fixed k; the book works out k=1.",
    "proof": [
      "Specify the permitted one-sided corruption.",
      "Use the adaptive decision tree and possible response-string sets.",
      "For k=1, assign a response weight equal to one plus the number of truthful No responses.",
      "Combine the upper counting bound with the two-stage construction."
    ],
    "task": "Derive the k=1 response-set counting bound and explain why the answer-string geometry is asymmetric. Outline the two-stage lower-bound strategy and state clearly which general-k proof is not supplied by the assigned text.",
    "answer": [
      "If only No→Yes lies are legal, a truthful response string with z No positions has z+1 possible outcomes when at most one lie is used.",
      "Different hidden items must have disjoint possible response sets in a winning decision tree. Adaptive paths must be handled as tree paths, not silently replaced by a fixed code.",
      "The lower bound first obtains approximately balanced answers and then finishes through the chip-game strategy. State the fixed-k asymptotic, but do not label the k=1 argument a complete proof for arbitrary k."
    ],
    "followups": [
      [
        "Would ordinary Hamming balls give the exact bound?",
        "No. One-sided errors produce asymmetric response sets whose sizes depend on the truthful string."
      ],
      [
        "May a truthful Yes be reported No in this model?",
        "No. That would be a different game."
      ]
    ],
    "results": [
      "T15.6.1"
    ],
    "stretch": true,
    "unit": "§15.6",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "If only No→Yes lies are legal, a truthful response string with z No positions has z+1 possible outcomes when at most one lie is used.",
    "example": "Different hidden items must have disjoint possible response sets in a winning decision tree. Adaptive paths must be handled as tree paths, not silently replaced by a fixed code.",
    "warning": "No. One-sided errors produce asymmetric response sets whose sizes depend on the truthful string.",
    "oral": "Derive the k=1 response-set counting bound and explain why the answer-string geometry is asymmetric. Outline the two-stage lower-bound strategy and state clearly which general-k proof is not supplied by the assigned text."
  },
  {
    "id": "core-entropy",
    "s": "probability",
    "source": "as",
    "section": "§15.7 · basic inequalities",
    "title": "Entropy: chain rule, conditioning and extremal families",
    "theorem": "Entropy obeys the chain rule, conditioning reduces conditional entropy, and H(X)≤log₂|supp X|. These facts bound the size of a set family by its coordinate biases.",
    "proof": [
      "Prove the log-sum/KL nonnegativity inequality.",
      "Deduce nonnegative mutual information and conditioning-reduces-entropy.",
      "Apply the chain rule to a uniform random member of a family.",
      "Bound each coordinate entropy by its Bernoulli entropy."
    ],
    "task": "Prove |F|≤2^(∑H₂(pᵢ)) when pᵢ is the fraction of members containing coordinate i. Characterize equality, including the distinction between independent Bernoulli coordinates and a uniform distribution on an arbitrary family.",
    "answer": [
      "For a uniform member X of F, H(X)=log₂|F|. Chain rule and conditioning give H(X)≤∑H(Xᵢ)=∑H₂(pᵢ).",
      "Equality in subadditivity requires mutual independence of coordinates with nontrivial entropy. Uniformity on F then restricts F to a Cartesian product of its allowed coordinate values.",
      "A small family may have unbiased individual coordinates and strong dependence; marginal entropies alone can substantially overcount its true logarithmic size."
    ],
    "followups": [
      [
        "Give such a dependent family.",
        "Even-parity binary triples have three unbiased coordinates and total entropy two bits, not three."
      ],
      [
        "Is H(X|Y=y)≤H(X) true for every y?",
        "No. The inequality holds after averaging over Y; conditioning on a rare outcome can increase uncertainty."
      ]
    ],
    "results": [
      "L15.7.1",
      "P15.7.2",
      "C15.7.3"
    ],
    "stretch": false,
    "unit": "§15.7 · basic inequalities",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "For a uniform member X of F, H(X)=log₂|F|. Chain rule and conditioning give H(X)≤∑H(Xᵢ)=∑H₂(pᵢ).",
    "example": "Equality in subadditivity requires mutual independence of coordinates with nontrivial entropy. Uniformity on F then restricts F to a Cartesian product of its allowed coordinate values.",
    "warning": "Even-parity binary triples have three unbiased coordinates and total entropy two bits, not three.",
    "oral": "Prove |F|≤2^(∑H₂(pᵢ)) when pᵢ is the fraction of members containing coordinate i. Characterize equality, including the distinction between independent Bernoulli coordinates and a uniform distribution on an arbitrary family."
  },
  {
    "id": "core-shearer",
    "s": "probability",
    "source": "as",
    "section": "§15.7 · projection inequalities",
    "title": "Shearer and Loomis–Whitney: control every coordinate multiplicity",
    "theorem": "If every coordinate is contained in at least k projection sets, then kH(X)≤∑H(XS); uniform-family entropy converts this to a cardinality projection inequality.",
    "proof": [
      "Fix one global coordinate order.",
      "Expand every projection entropy by its own chain rule in that order.",
      "Conditioning on fewer earlier coordinates can only increase each term.",
      "Count each full-chain term at least k times."
    ],
    "task": "Prove Shearer’s lemma by chain-rule bookkeeping, derive |F|^k≤∏|πS(F)|, and specialize to the three-dimensional Loomis–Whitney inequality. Explain why equality of the projection distributions with uniform distributions is not required.",
    "answer": [
      "For i∈S, H(Xᵢ|Xj:j<i,j∈S)≥H(Xᵢ|X₁,…,Xᵢ₋₁). Sum over S and use the coordinate-cover multiplicity.",
      "A projection need not be uniform. Only H(XS)≤log₂|πS(F)| is used, while X is uniform on the original family.",
      "For three pairwise coordinate projections, each coordinate appears twice: |F|²≤|πxyF||πxzF||πyzF|. The volume version follows through discretization and a limiting argument."
    ],
    "followups": [
      [
        "Why does pairwise independence not prove Shearer by itself?",
        "Higher-order conditional dependencies remain. The chain-rule proof handles arbitrary joint distributions."
      ],
      [
        "What is needed for the triangle-intersecting graph-family corollary?",
        "Choose projections whose complements are triangle-free, bound each projected family, and apply the exact multiplicities."
      ]
    ],
    "results": [
      "P15.7.4",
      "C15.7.5",
      "C15.7.6",
      "C15.7.7",
      "C15.7.8"
    ],
    "stretch": true,
    "unit": "§15.7 · projection inequalities",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "For i∈S, H(Xᵢ|Xj:j<i,j∈S)≥H(Xᵢ|X₁,…,Xᵢ₋₁). Sum over S and use the coordinate-cover multiplicity.",
    "example": "A projection need not be uniform. Only H(XS)≤log₂|πS(F)| is used, while X is uniform on the original family.",
    "warning": "Higher-order conditional dependencies remain. The chain-rule proof handles arbitrary joint distributions.",
    "oral": "Prove Shearer’s lemma by chain-rule bookkeeping, derive |F|^k≤∏|πS(F)|, and specialize to the three-dimensional Loomis–Whitney inequality. Explain why equality of the projection distributions with uniform distributions is not required."
  },
  {
    "id": "core-tester-color",
    "s": "probability",
    "source": "as",
    "section": "§§17.1–17.2",
    "title": "Dense-graph testing and the 3-coloring restriction tree",
    "theorem": "Distance is normalized by n² edge edits. A one-sided tester rejects only upon finding a genuine obstruction; the assigned 3-coloring tester analyzes all branches of a restriction tree.",
    "proof": [
      "Define ε-farness in the dense adjacency-query model.",
      "Maintain feasible color lists for each partial coloring.",
      "Show every successful sample shrinks total list size by an εn-scale amount.",
      "Bound tree depth and union-bound the failure over every branch."
    ],
    "task": "Reconstruct the restriction-tree proof for testing 3-colorability. Explain why following only one guessed partial coloring is unsound. Derive how farness creates many restricting vertices and how depth bounds lead to a constant-size sample.",
    "answer": [
      "A sampled graph is non-3-colorable only when every branch of possible partial colorings fails. A failed greedy coloring on one branch is not a certificate.",
      "The potential is total remaining feasible-list size, initially at most 3n. A restricting vertex removes Ω(εn) list entries, giving depth O(1/ε).",
      "Farness prevents all vertices from having harmless extensions: otherwise a global coloring with few monochromatic edges could be repaired cheaply. Chernoff bounds and a union bound over a bounded ternary tree finish the sample analysis."
    ],
    "followups": [
      [
        "Does accepting imply the whole graph is 3-colorable?",
        "No. One-sided error guarantees rejection probability for ε-far graphs, not a global certificate on every accepted input."
      ],
      [
        "Why is a sparse-graph normalization different?",
        "Changing εn² edges is natural in the dense model. Replacing it by εn without changing the theorem changes the promise."
      ]
    ],
    "results": [
      "T17.2.1",
      "Claims17.2.2–17.2.6"
    ],
    "stretch": true,
    "unit": "§§17.1–17.2",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "A sampled graph is non-3-colorable only when every branch of possible partial colorings fails. A failed greedy coloring on one branch is not a certificate.",
    "example": "The potential is total remaining feasible-list size, initially at most 3n. A restricting vertex removes Ω(εn) list entries, giving depth O(1/ε).",
    "warning": "No. One-sided error guarantees rejection probability for ε-far graphs, not a global certificate on every accepted input.",
    "oral": "Reconstruct the restriction-tree proof for testing 3-colorability. Explain why following only one guessed partial coloring is unsound. Derive how farness creates many restricting vertices and how depth bounds lead to a constant-size sample."
  },
  {
    "id": "core-triangle-removal",
    "s": "probability",
    "source": "as",
    "section": "§17.3",
    "title": "Triangle removal: a structural lemma becomes a tester",
    "theorem": "For each ε>0, a graph requiring εn² edge deletions to become triangle-free has at least δ(ε)n³ triangles; independent triple samples then give a one-sided tester.",
    "proof": [
      "State the removal lemma with the dependence δ(ε).",
      "Delete exceptional, irregular, internal and sparse-pair edges in a regularity partition.",
      "Use farness to leave a triangle among dense regular classes.",
      "Count triangles there and translate density into a rejection probability."
    ],
    "task": "Prove the sampling theorem assuming the triangle-removal lemma, with the correct ordered-versus-unordered normalization. Then outline the regularity/counting proof and explain why seeing no triangle is not evidence that only few edits are needed without the farness promise.",
    "answer": [
      "If T≥δn³ unordered triangles, a uniform unordered triple is a triangle with probability T/C(n,3), asymptotically at least 6δ. The exact ratio is the quantity to use on finite n.",
      "After q independent triple samples, miss probability is (1−T/C(n,3))^q≤exp(−qT/C(n,3)); q=O(1/δ) gives constant soundness.",
      "Only rejection is a certificate. The lemma supplies δ(ε), whose dependence can be extremely poor; constant query complexity in n does not mean practical efficiency in ε."
    ],
    "followups": [
      [
        "Does the conclusion estimate ε from one sample?",
        "No. A single sampled triangle certifies non-freeness, not a quantitative edit distance."
      ],
      [
        "Can a graph contain a triangle but be very close to triangle-free?",
        "Yes. One isolated triangle needs only one edge deletion."
      ]
    ],
    "results": [
      "L17.3.1",
      "C17.3.2"
    ],
    "stretch": true,
    "unit": "§17.3",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "If T≥δn³ unordered triangles, a uniform unordered triple is a triangle with probability T/C(n,3), asymptotically at least 6δ. The exact ratio is the quantity to use on finite n.",
    "example": "After q independent triple samples, miss probability is (1−T/C(n,3))^q≤exp(−qT/C(n,3)); q=O(1/δ) gives constant soundness.",
    "warning": "No. A single sampled triangle certifies non-freeness, not a quantitative edit distance.",
    "oral": "Prove the sampling theorem assuming the triangle-removal lemma, with the correct ordered-versus-unordered normalization. Then outline the regularity/counting proof and explain why seeing no triangle is not evidence that only few edits are needed without the farness promise."
  },
  {
    "id": "core-hereditary",
    "s": "probability",
    "source": "as",
    "section": "§17.4",
    "title": "Induced removal, hereditary properties and oblivious testing",
    "theorem": "Hereditary graph properties admit one-sided testers through induced forbidden-pattern removal. The chapter’s final characterization concerns semi-hereditary properties and oblivious testers.",
    "proof": [
      "Represent a hereditary property by all its forbidden induced subgraphs.",
      "State the induced-removal theorem with bounded witness size depending on ε and the family.",
      "Sample a bounded vertex set and reject on a forbidden induced witness.",
      "Distinguish hereditary, semi-hereditary and oblivious one-sided testing."
    ],
    "task": "Prove that a hereditary property is induced-F-free for its forbidden family. Explain how an infinite forbidden family can still yield bounded witnesses for ε-far inputs. State why the induced-removal theorem is a deep input rather than a consequence of the ordinary triangle lemma.",
    "answer": [
      "If a graph has the hereditary property, all its induced subgraphs do; if it fails, the graph itself belongs to the forbidden family. This proves the characterization.",
      "The induced-removal theorem supplies a witness-size bound and abundance estimates depending on ε and the property, even when the forbidden family is infinite.",
      "Induced copies constrain both edges and nonedges. Ordinary non-induced removal does not automatically control them. The source omits some proofs of the deepest structural characterizations; the study task is to state the input accurately and derive the tester."
    ],
    "followups": [
      [
        "Why is triangle-free hereditary but connected not hereditary?",
        "Taking an induced subgraph cannot create a triangle, but can disconnect a connected graph."
      ],
      [
        "What must an oblivious tester’s sampling size avoid depending on?",
        "It is governed by the accuracy parameter rather than tailoring a separate strategy to each large n, with the small-size cases treated appropriately."
      ]
    ],
    "results": [
      "L17.4.1",
      "T17.4.2",
      "T17.4.3",
      "C17.4.4",
      "T17.4.5"
    ],
    "stretch": true,
    "unit": "§17.4",
    "minutes": 30,
    "priority": 1,
    "level": 3,
    "assigned": true,
    "mechanism": "If a graph has the hereditary property, all its induced subgraphs do; if it fails, the graph itself belongs to the forbidden family. This proves the characterization.",
    "example": "The induced-removal theorem supplies a witness-size bound and abundance estimates depending on ε and the property, even when the forbidden family is infinite.",
    "warning": "Taking an induced subgraph cannot create a triangle, but can disconnect a connected graph.",
    "oral": "Prove that a hereditary property is induced-F-free for its forbidden family. Explain how an infinite forbidden family can still yield bounded witnesses for ε-far inputs. State why the induced-removal theorem is a deep input rather than a consequence of the ordinary triangle lemma."
  }
];
