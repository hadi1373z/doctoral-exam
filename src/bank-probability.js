const BANK_PROBABILITY = [
  {
    "unit": "core-four-functions",
    "slug": "activity-weighted-families",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Union–intersection inequalities with activities",
    "prompt": "Let F,G be nonempty families in 2^[n], let z_i>0, and set Z_F(z)=Σ_{A∈F}∏_{i∈A}z_i. Assuming Four Functions, prove Z_F Z_G≤Z_{F∨G}Z_{F∧G}. Compute all four polynomials for F={∅,{1}} and G={{1},{2}} and identify the nonnegative gap.",
    "prerequisites": [
      "Four Functions theorem",
      "weighted set families",
      "finite lattices"
    ],
    "minutes": 40,
    "guide": [
      "Use α(A)=1_F(A)z^A and β(B)=1_G(B)z^B. The identity z^A z^B=z^(A∪B)z^(A∩B) supplies the pointwise hypothesis with γ and δ supported on the join and meet families.",
      "Here Z_F=1+z_1, Z_G=z_1+z_2, Z_join=z_1+z_2+z_1z_2 and Z_meet=1+z_1. The difference is z_1z_2(1+z_1). Keep the theorem as the assumed deep input; the task is its weighted application."
    ],
    "followup": "What remains valid when some activities vanish, and how do you justify the boundary case?",
    "deliverable": "A weighted theorem, the explicit polynomial gap, and a continuity argument."
  },
  {
    "unit": "core-four-functions",
    "slug": "nondistributive-diamond",
    "tier": "doctoral",
    "kind": "counterexample",
    "title": "Locate the obstruction in the five-element diamond",
    "prompt": "In the lattice M3 with bottom 0, top 1 and three incomparable atoms a,b,c, find nonempty X,Y violating |X||Y|≤|X∨Y||X∧Y|. Convert the example into four nonnegative indicator functions satisfying the pointwise hypothesis but violating the sum conclusion.",
    "prerequisites": [
      "Four Functions theorem",
      "weighted set families",
      "finite lattices"
    ],
    "minutes": 45,
    "guide": [
      "Take X={a,b} and Y={c}. Both mixed joins equal 1 and both mixed meets equal 0. Thus the input product is 2 while both output families have cardinality one.",
      "Set α=1_X, β=1_Y, γ=1_{ {1} }, δ=1_{ {0} }. Whenever α(x)β(y) is nonzero, the required output product is one; all other left sides vanish. This proves that the lattice assumption has real content."
    ],
    "followup": "Does the same construction work with only two atoms? Explain the distributivity change.",
    "deliverable": "A complete lattice table sufficient for the example and a four-function certificate."
  },
  {
    "unit": "core-four-functions",
    "slug": "marginal-log-supermodularity",
    "tier": "examiner",
    "kind": "proof",
    "title": "Marginalizing a log-supermodular weight",
    "prompt": "Let w(x,z)≥0 on {0,1}^a×{0,1}^b satisfy w(u)w(v)≤w(u∨v)w(u∧v). Assuming Four Functions, prove that W(x)=Σ_z w(x,z) is log-supermodular. Include zero-valued slices; do not divide by their masses.",
    "prerequisites": [
      "Four Functions theorem",
      "weighted set families",
      "finite lattices"
    ],
    "minutes": 50,
    "guide": [
      "For fixed x,y, use α(z)=w(x,z), β(z)=w(y,z), γ(z)=w(x∨y,z), and δ(z)=w(x∧y,z). The full-space hypothesis compares α(z)β(t) with γ(z∨t)δ(z∧t).",
      "Summing by Four Functions yields W(x)W(y)≤W(x∨y)W(x∧y). The argument works without strict positivity, so it covers hard constraints and support indicators directly."
    ],
    "followup": "Why is summing pointwise inequalities only with z=t insufficient?",
    "deliverable": "A marginal-closure proof with the four functions and their domains explicitly identified."
  },
  {
    "unit": "core-four-functions",
    "slug": "grid-path-partition-functions",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "A lattice of bounded monotone paths",
    "prompt": "For integers m,r≥1 let L={x∈{0,…,m}^r:x_1≤…≤x_r}. For path families A,B⊆L and positive coordinate activities z_j, establish the weighted join–meet counting inequality on L. Prove closure under coordinatewise minimum and maximum and explain the distributive-lattice input.",
    "prerequisites": [
      "Four Functions theorem",
      "weighted set families",
      "finite lattices"
    ],
    "minutes": 55,
    "guide": [
      "Minimum and maximum preserve nondecreasing coordinate sequences. Each coordinate lies in a chain, where min and max distribute; hence L is a finite distributive sublattice of the product of chains.",
      "Assign weight exp(Σ_j t_j x_j). Coordinatewise min plus max equals x_j+y_j, so the two weights multiply exactly under meet and join. Apply the distributive-lattice Four Functions theorem, assumed here rather than reproved."
    ],
    "followup": "Would arbitrary lattice paths with a fixed number of strict rises remain closed under meet and join?",
    "deliverable": "A closure proof, a weighted inequality and a precise description of the allowed path family."
  },
  {
    "unit": "core-four-functions",
    "slug": "dimension-free-defect",
    "tier": "examiner",
    "kind": "proof",
    "title": "A controlled pointwise defect costs one factor",
    "prompt": "Suppose α,β,γ,δ≥0 on a Boolean lattice and α(A)β(B)≤Kγ(A∪B)δ(A∩B) for every A,B, where K≥1. Prove the sum-product inequality with factor K, rather than K^n, and show the constant cannot be reduced uniformly.",
    "prerequisites": [
      "Four Functions theorem",
      "weighted set families",
      "finite lattices"
    ],
    "minutes": 60,
    "guide": [
      "Replace γ by Kγ and apply the exact Four Functions theorem once on the whole lattice. The constant belongs to the pointwise inequality globally; repeatedly paying it at coordinate splits introduces an unnecessary dimension dependence.",
      "For sharpness put all four functions on one common lattice point, with α=K and β=γ=δ=1 there. Both the pointwise and summed inequalities are equalities with factor K."
    ],
    "followup": "If the defect is exp(ε times Hamming distance(A,B)), which uniform factor follows immediately?",
    "deliverable": "A dimension-free comparison and an explicit sharpness example."
  },
  {
    "unit": "core-four-functions",
    "slug": "zero-temperature-counting",
    "tier": "research",
    "kind": "research-extension",
    "title": "From partition functions to extremal scores and multiplicities",
    "prompt": "For finite families F,G⊆2^[n] and a real score s(A)=Σ_i c_i1_{i∈A}, apply the activity inequality at z_i=e^(t c_i). As t→∞ derive inequalities for maximum scores and, when the leading exponents agree, for the numbers of maximizing members. State exactly when the multiplicity conclusion is available.",
    "prerequisites": [
      "Four Functions theorem",
      "weighted set families",
      "finite lattices"
    ],
    "minutes": 85,
    "guide": [
      "For any finite nonempty H, log Z_H(e^(tc))=t max_H s+log m_H+o(1), where m_H counts maximizers. Compare the two sides first after dividing logarithms by t.",
      "If the sums of maximum scores on the two sides are equal, cancel the common exponential and take limits to obtain m_F m_G≤m_join m_meet. If the exponent inequality is strict, the leading asymptotics impose no such multiplicity comparison."
    ],
    "followup": "Construct a strict-exponent example showing why multiplicities cannot be compared without the equality hypothesis.",
    "deliverable": "A two-level asymptotic theorem with a worked strictness example."
  },
  {
    "unit": "core-four-functions",
    "slug": "finite-extremizer-audit",
    "tier": "research",
    "kind": "research-extension",
    "title": "An exact audit of extremizers on a small cube",
    "prompt": "Design a reproducible exhaustive study of nonempty F,G⊆2^[3]. Compute D=|F∨G||F∧G|−|F||G|, classify zero-gap pairs by family sizes, and test the conjecture that equality forces both families to be sublattices. Supply a certified counterexample or a complete finite verification, not a general theorem inferred from a sample.",
    "prerequisites": [
      "Four Functions theorem",
      "weighted set families",
      "finite lattices"
    ],
    "minutes": 100,
    "guide": [
      "Represent subsets by three-bit integers, joins by bitwise OR and meets by bitwise AND. There are 255^2 ordered nonempty family pairs, small enough for exact enumeration; store canonical witnesses for every reported claim.",
      "The proposed equality characterization is already suspect: if G={∅}, then F∨G=F and F∧G={∅}, giving equality for every F, including nonsublattices. Use this as a baseline that the implementation must recover before exploring additional restrictions."
    ],
    "followup": "After excluding singleton families, which modified characterization survives the finite search?",
    "deliverable": "Executable pseudocode, exact counts by sizes, and machine-checkable extremal witnesses."
  },
  {
    "unit": "core-four-functions",
    "slug": "ideal-embedding-detail",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Construct the distributive-lattice embedding",
    "prompt": "For a finite distributive lattice L, let J be its join-irreducible elements and put φ(x)={j∈J:j≤x}. Prove that φ is injective and preserves meet and join, then transfer a four-function inequality by extending functions by zero outside φ(L). Identify where distributivity is essential.",
    "prerequisites": [
      "Four Functions theorem",
      "weighted set families",
      "finite lattices"
    ],
    "minutes": 45,
    "guide": [
      "Every nonzero element is a join of join-irreducibles, by induction down the finite order. This makes φ injective and gives φ(x∧y)=φ(x)∩φ(y).",
      "In a distributive lattice a join-irreducible j is join-prime: j≤x∨y implies j=(j∧x)∨(j∧y), hence j≤x or j≤y. This proves union preservation. The zero extensions satisfy the Boolean pointwise condition because the embedded image is a sublattice."
    ],
    "followup": "Show explicitly which join-prime implication fails for an atom of M3.",
    "deliverable": "A self-contained embedding proof and a justified zero-extension transfer."
  },
  {
    "unit": "core-four-functions",
    "slug": "conditional-slice-closure",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Hard constraints, slices and eliminated variables",
    "prompt": "Let C⊆{0,1}^{r+s} be closed under meet and join and let w≥0 be log-supermodular. For a fixed visible coordinate assignment x, define Z(x)=Σ_z 1_C(x,z)w(x,z). Prove that the support of Z is a sublattice and that every nonzero conditional slice remains log-supermodular. Distinguish conditioning from marginalization.",
    "prerequisites": [
      "Four Functions theorem",
      "weighted set families",
      "finite lattices"
    ],
    "minutes": 60,
    "guide": [
      "The product 1_C w is log-supermodular: if both input weights are positive then both meet and join remain in C. Fixing coordinates preserves the defining inequality on the unfixed coordinates.",
      "If Z(x),Z(y)>0, choose compatible completions z,t. Their meet and join are compatible completions of x∧y and x∨y, so both marginal masses are positive. Marginal log-supermodularity additionally uses the previously proved Four Functions summation argument."
    ],
    "followup": "Can a support be a sublattice while its positive weights fail log-supermodularity?",
    "deliverable": "A closure diagram with separate proofs for support, conditional slices and marginal weights."
  },
  {
    "unit": "core-fkg",
    "slug": "ferromagnetic-binary-model",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Verify association in a binary interaction model",
    "prompt": "On {0,1}^V set μ(x) proportional to exp(Σ_i h_i x_i+Σ_{ij∈E}J_ij x_i x_j), with arbitrary real h_i and J_ij≥0. Prove log-supermodularity by checking each interaction term, and deduce Cov(x_i,x_j)≥0. Show a negative single-edge interaction violates the lattice condition.",
    "prerequisites": [
      "log-supermodular measures",
      "FKG inequality",
      "covariance"
    ],
    "minutes": 40,
    "guide": [
      "Linear field terms have zero lattice defect. For a pair term x_i x_j the defect at x∨y and x∧y is nonnegative; it is one precisely in the crossed pattern (1,0),(0,1), and zero in the other cases.",
      "Exponentiate and add the nonnegative interaction defects to verify FKG's hypothesis. With two vertices and J<0, the weights satisfy μ00 μ11/(μ10 μ01)=e^J<1, explicitly reversing the necessary two-coordinate lattice inequality."
    ],
    "followup": "Does the sign of a field h_i affect the association argument?",
    "deliverable": "A termwise lattice calculation and a two-site negative-interaction certificate."
  },
  {
    "unit": "core-fkg",
    "slug": "conditioning-can-destroy",
    "tier": "doctoral",
    "kind": "counterexample",
    "title": "Conditioning on an increasing event can destroy association",
    "prompt": "Let X_1,X_2 be independent fair bits and condition on X_1∨X_2=1. Compute the resulting covariance and exhibit the failed log-supermodularity inequality. Contrast this operation with conditioning on specified coordinate values.",
    "prerequisites": [
      "log-supermodular measures",
      "FKG inequality",
      "covariance"
    ],
    "minutes": 45,
    "guide": [
      "The conditional law is uniform on 01,10,11. Both conditional marginals are 2/3 and the joint-one probability is 1/3, so the covariance is −1/9.",
      "The two positive states 01 and 10 have meet 00 of zero conditional mass. Their product is positive while the meet–join product vanishes. A coordinate slice, by contrast, is closed under meet and join and inherits the original lattice inequality."
    ],
    "followup": "Give a sufficient support condition under which multiplying an FKG weight by an event indicator preserves log-supermodularity.",
    "deliverable": "Exact conditional probabilities and a structural explanation of the failed hypothesis."
  },
  {
    "unit": "core-fkg",
    "slug": "external-field-response",
    "tier": "examiner",
    "kind": "proof",
    "title": "Differentiate expectations under an external field",
    "prompt": "Let μ be a nonzero log-supermodular weight on a finite Boolean lattice and μ_t(x) proportional to μ(x)e^(tH(x)), where H(x)=Σ_i a_i x_i and a_i≥0. For every increasing real f prove dE_t f/dt=Cov_t(f,H)≥0, and derive nonnegative field-response entries ∂E x_i/∂h_j.",
    "prerequisites": [
      "log-supermodular measures",
      "FKG inequality",
      "covariance"
    ],
    "minutes": 50,
    "guide": [
      "The exponential field is log-modular because H(x)+H(y)=H(x∨y)+H(x∧y). Therefore every tilted measure still satisfies FKG. Differentiate the finite numerator and normalization to obtain the covariance identity.",
      "Both f and H are increasing, so FKG makes that derivative nonnegative. Taking f=x_i and varying only the jth field gives the response matrix entry Cov(x_i,x_j); its diagonal is Var(x_i), and the entire covariance matrix is positive semidefinite for a separate elementary reason."
    ],
    "followup": "Does entrywise nonnegativity of a covariance matrix by itself imply the FKG lattice condition?",
    "deliverable": "A differentiable monotonicity theorem and the response-matrix identities."
  },
  {
    "unit": "core-fkg",
    "slug": "association-weaker-than-lattice",
    "tier": "examiner",
    "kind": "construction",
    "title": "Association need not imply log-supermodularity",
    "prompt": "Take independent fair U,V and define X=(U,V,U∨V). Prove that every pair of increasing functions of X is positively correlated, but the law of X is not log-supermodular on the three-cube. State which implication between association and the lattice condition this separates.",
    "prerequisites": [
      "log-supermodular measures",
      "FKG inequality",
      "covariance"
    ],
    "minutes": 55,
    "guide": [
      "The map (u,v)↦(u,v,u∨v) is coordinatewise increasing. Increasing functions of X therefore pull back to increasing functions of the independent pair (U,V), where Harris applies.",
      "The support is {000,011,101,111}, each with mass 1/4. The meet of 011 and 101 is 001, absent from the support, while their join is 111. The lattice product inequality consequently fails although association holds."
    ],
    "followup": "Is log-supermodularity preserved by arbitrary increasing deterministic maps? Use the same example.",
    "deliverable": "A proof of association and a four-state failure certificate."
  },
  {
    "unit": "core-fkg",
    "slug": "two-bit-characterization",
    "tier": "examiner",
    "kind": "proof",
    "title": "The exact two-bit criterion",
    "prompt": "Let a strictly positive law on {0,1}² have unnormalized masses a,b,c,d at 00,10,01,11. Prove that ad≥bc is equivalent to positive association for every pair of increasing real functions. Compute Cov(X_1,X_2) exactly and explain why checking just this covariance suffices only in dimension two.",
    "prerequisites": [
      "log-supermodular measures",
      "FKG inequality",
      "covariance"
    ],
    "minutes": 60,
    "guide": [
      "The only incomparable pair in the two-cube is 10,01, so log-supermodularity is exactly ad≥bc. FKG proves sufficiency for all increasing functions.",
      "With Z=a+b+c+d, Cov(X_1,X_2)=(ad−bc)/Z². Since the two coordinate indicators are increasing, association implies this determinant is nonnegative. In higher dimensions there are many conditional and incomparable-state inequalities that one unconditional pair covariance does not encode."
    ],
    "followup": "Remove strict positivity and formulate the criterion with zero masses.",
    "deliverable": "An equivalence proof and the normalized determinant calculation."
  },
  {
    "unit": "core-fkg",
    "slug": "random-cluster-lattice-check",
    "tier": "research",
    "kind": "research-extension",
    "title": "A graph-component weight and its parameter boundary",
    "prompt": "For a finite multigraph G=(V,E), 0<p_e<1 and q>0, consider w(A)=q^{k(A)}∏_{e∈A}p_e∏_{e∉A}(1−p_e), where k(A) counts components. Prove FKG for q≥1 by establishing the needed component inequality. For q<1 give a two-parallel-edge counterexample.",
    "prerequisites": [
      "log-supermodular measures",
      "FKG inequality",
      "covariance"
    ],
    "minutes": 85,
    "guide": [
      "Show k(A∪B)+k(A∩B)≥k(A)+k(B). One route uses r(A)=|V|−k(A), the rank of the span of oriented edge incidence vectors, and dimension submodularity. The product edge factors cancel exactly under meet and join.",
      "For two parallel edges joining two vertices, k(∅)=2 and every nonempty subset has k=1. After cancelling edge factors, the crossed lattice comparison is q²≤q³, false for q<1. By the two-bit criterion, this example also has negatively correlated edge indicators."
    ],
    "followup": "Which steps survive with loops, and why do loops not alter the rank argument?",
    "deliverable": "A rank-based proof and an exact parameter-boundary counterexample."
  },
  {
    "unit": "core-fkg",
    "slug": "boundary-condition-comparison",
    "tier": "research",
    "kind": "research-extension",
    "title": "Monotonicity under fixed boundary spins",
    "prompt": "In the nonnegative-interaction binary model, fix boundary spins on B⊆V and let τ≤τ' be two boundary assignments. Prove that every increasing function of the remaining spins has larger expectation under τ'. Derive the comparison by interpolating external fields and handle arbitrary finite fields without a coupling theorem.",
    "prerequisites": [
      "log-supermodular measures",
      "FKG inequality",
      "covariance"
    ],
    "minutes": 100,
    "guide": [
      "Conditioning on τ replaces each internal field h_i by h_i+Σ_{j∈B}J_ij τ_j; interactions among free vertices remain nonnegative. Increasing the boundary raises these fields coordinatewise.",
      "Interpolate one field at a time. The derivative of an increasing expectation in a nonnegative direction is an FKG covariance, hence nonnegative. Integrating these derivatives proves the comparison. This establishes stochastic expectation order without asserting that an explicit monotone sample coupling has been constructed."
    ],
    "followup": "How can a single negative boundary interaction reverse the comparison?",
    "deliverable": "A finite interpolation proof and a two-vertex reverse-sign example."
  },
  {
    "unit": "core-fkg",
    "slug": "multiple-increasing-events",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Many-event lower bounds under an FKG measure",
    "prompt": "Let μ be an FKG probability measure on a finite distributive lattice and A_1,…,A_m increasing events. Prove μ(∩_i A_i)≥∏_i μ(A_i), and prove the analogous statement for decreasing events. Give an example in which every inequality is strict.",
    "prerequisites": [
      "log-supermodular measures",
      "FKG inequality",
      "covariance"
    ],
    "minutes": 45,
    "guide": [
      "The intersection of increasing events is increasing, so apply the two-event inequality inductively. For decreasing events use the decreasing version, or reverse the lattice order; no independence between the indicators is needed.",
      "For strictness on one fair bit take every A_i={X=1}, with m≥2. The joint probability is 1/2 and the product is 2^−m. Distinguish this useful association bound from the generally false claim that the events factor exactly."
    ],
    "followup": "Apply the decreasing-event version to bound the probability that none of several increasing bad events occurs.",
    "deliverable": "An induction and a sharp dependence example."
  },
  {
    "unit": "core-fkg",
    "slug": "pairwise-independence-trap",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "Pairwise independent coordinates can fail increasing-event association",
    "prompt": "Let X be uniform on {000,011,101,110}. Verify pairwise independence of its three coordinates and then find increasing events A,B with negative covariance. Explain why a correlation matrix cannot certify FKG or full association.",
    "prerequisites": [
      "log-supermodular measures",
      "FKG inequality",
      "covariance"
    ],
    "minutes": 60,
    "guide": [
      "Each coordinate is fair and every two-coordinate projection is uniform on the four binary pairs. Thus all three pairwise coordinate covariances vanish.",
      "Choose A={X_1=X_2=1} and B={X_3=1}. Their probabilities are 1/4 and 1/2, but their intersection is empty, yielding covariance −1/8. Increasing nonlinear events expose dependence invisible in the coordinate covariance matrix."
    ],
    "followup": "What happens to this example after adding a small uniform-cube mixture to make every state positive?",
    "deliverable": "Projection tables, the negative covariance, and a continuity argument for positive perturbations."
  },
  {
    "unit": "core-harris",
    "slug": "strictness-essential-coordinates",
    "tier": "doctoral",
    "kind": "proof",
    "title": "When is Harris an equality?",
    "prompt": "For increasing events A,B under a product law with all 0<p_i<1, call i essential to A if changing only bit i changes membership somewhere. Prove Cov(1_A,1_B)=0 exactly when A and B have disjoint essential-coordinate sets. Include constant events.",
    "prerequisites": [
      "product measures",
      "Harris inequality",
      "conditional expectation"
    ],
    "minutes": 40,
    "guide": [
      "If a coordinate i is essential to an increasing event, the averaged discrete derivative I_i(A)=P(A|X_i=1)−P(A|X_i=0) is strictly positive because every remaining configuration has positive mass.",
      "Condition on X_i. Harris on each slice gives Cov(1_A,1_B)≥p_i(1−p_i)I_i(A)I_i(B), positive when i is shared. Conversely a Boolean function depends only on its essential coordinates, so disjoint essential sets give independence."
    ],
    "followup": "Why does strict positivity of all coordinate biases matter for the characterization?",
    "deliverable": "An equality theorem with both directions and boundary-bias counterexamples."
  },
  {
    "unit": "core-harris",
    "slug": "random-hitting-lower-bound",
    "tier": "doctoral",
    "kind": "synthesis",
    "title": "A quantitative lower bound for a random hitting set",
    "prompt": "Choose each element of [n] independently with probability p_i. For prescribed nonempty sets S_1,…,S_m, prove a product lower bound for hitting all of them. For S_1={1,2}, S_2={2,3} and common p, calculate the exact probability and its gap from the product bound.",
    "prerequisites": [
      "product measures",
      "Harris inequality",
      "conditional expectation"
    ],
    "minutes": 45,
    "guide": [
      "Each event H_j={R∩S_j≠∅} is increasing, so Harris iterates to P(∩H_j)≥∏_j[1−∏_{i∈S_j}(1−p_i)]. The product is over prescribed sets, while each inner product is the independent probability of missing that one set.",
      "For the overlapping pair, condition on bit 2: the exact probability is p+(1−p)p². Subtract [1−(1−p)²]² to obtain p(1−p)³. The shared essential coordinate explains the strict positive gap for 0<p<1."
    ],
    "followup": "Show that disjoint S_j give equality and identify other degenerate equality cases.",
    "deliverable": "The general bound, an exact overlap calculation and its equality analysis."
  },
  {
    "unit": "core-harris",
    "slug": "russo-pivotal-identity",
    "tier": "examiner",
    "kind": "proof",
    "title": "Differentiate a monotone event probability",
    "prompt": "For an increasing event A on n independent Bernoulli(p) bits, prove dP_p(A)/dp=Σ_i P_p(i is pivotal). Derive Cov_p(1_A,X_i)=p(1−p)P_p(i is pivotal), and calculate both sides for A={at least two of three bits are one}.",
    "prerequisites": [
      "product measures",
      "Harris inequality",
      "conditional expectation"
    ],
    "minutes": 50,
    "guide": [
      "Differentiate the multilinear probability first with separate biases p_i. The partial derivative is P(A|X_i=1)−P(A|X_i=0), which equals the pivotal probability for a monotone Boolean event.",
      "For the three-bit majority event P(A)=3p²−2p³, so the derivative is 6p(1−p). Each pivotal event means the other two bits differ, with probability 2p(1−p). Multiply this by p(1−p) for the coordinate covariance."
    ],
    "followup": "Which identity remains true for a nonmonotone event, and how must pivotality be signed?",
    "deliverable": "A derivative proof and a complete majority-event calculation."
  },
  {
    "unit": "core-harris",
    "slug": "ordered-alphabet-harris",
    "tier": "examiner",
    "kind": "proof",
    "title": "Harris beyond binary coordinates",
    "prompt": "Let independent Z_i take values in finite totally ordered sets, with arbitrary marginal laws. Prove positive association for increasing real functions on their product, using induction and the identity Cov(f(Z),g(Z))=E[(f(Z)−f(Z'))(g(Z)−g(Z'))]/2 for one coordinate.",
    "prerequisites": [
      "product measures",
      "Harris inequality",
      "conditional expectation"
    ],
    "minutes": 55,
    "guide": [
      "For a single ordered coordinate and an independent copy Z', the two differences always have the same sign. Expanding the expectation gives the covariance identity and proves its nonnegativity.",
      "Condition on the last coordinate. The conditional covariance is nonnegative by induction, while the conditional means are increasing functions of the last ordered value. Apply the one-coordinate inequality to the remaining covariance term."
    ],
    "followup": "Why does this proof not directly work when one coordinate has an arbitrary partial order with incomparable values?",
    "deliverable": "A finite-alphabet proof with the ordering assumption used explicitly."
  },
  {
    "unit": "core-harris",
    "slug": "two-terminal-reliability-bounds",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Reliability bounds without independent path events",
    "prompt": "In a graph whose edges occur independently with probabilities p_e, let P_1,…,P_m be specified s–t paths. Give an upper bound on P(at least one P_j survives) using Harris on failure events, and compare it with the union bound. Compute both bounds for two length-two paths sharing one edge, with common p.",
    "prerequisites": [
      "product measures",
      "Harris inequality",
      "conditional expectation"
    ],
    "minutes": 60,
    "guide": [
      "Path survival is increasing and path failure is decreasing. Thus P(no selected path survives)≥∏_j(1−∏_{e∈P_j}p_e), so the desired union probability is at most one minus this product.",
      "For paths {a,b} and {a,c}, the exact union probability is 2p²−p³. The Harris upper bound is 2p²−p⁴ and the union bound is min(1,2p²). The shared edge prevents replacing the exact union probability by the independent-path formula."
    ],
    "followup": "Which direction gives a lower bound on simultaneous survival of all selected paths?",
    "deliverable": "A general reliability inequality and an exact shared-edge comparison."
  },
  {
    "unit": "core-harris",
    "slug": "covariance-decomposition",
    "tier": "research",
    "kind": "research-extension",
    "title": "A martingale decomposition of monotone covariance",
    "prompt": "For increasing real f,g of independent biased bits, expose coordinates in one fixed order. Derive an exact covariance formula as a sum of products of conditional discrete derivatives. Compare it with the single-coordinate lower bound, and disprove the tempting bound obtained by summing all unconditional influence products.",
    "prerequisites": [
      "product measures",
      "Harris inequality",
      "conditional expectation"
    ],
    "minutes": 85,
    "guide": [
      "Let D_i f(prefix)=E[f|prefix,X_i=1]−E[f|prefix,X_i=0]. Doob increments equal (X_i−p_i)D_i f. Orthogonality between different martingale times gives Cov(f,g)=Σ_i p_i(1−p_i)E[D_i f D_i g].",
      "The conditional derivatives are nonnegative, but they are not the unconditional influences. On two fair bits take f=OR and g=AND: Cov(f,g)=1/16, whereas summing p_i(1−p_i)I_i(f)I_i(g) gives 1/8. Each individual-coordinate lower bound remains valid."
    ],
    "followup": "How does changing exposure order redistribute the exact nonnegative summands?",
    "deliverable": "The decomposition, the invalid-sum counterexample and two exposure-order calculations."
  },
  {
    "unit": "core-harris",
    "slug": "network-infection-association",
    "tier": "research",
    "kind": "research-extension",
    "title": "Association in an independent-edge infection model",
    "prompt": "Fix a finite directed graph and independently declare each arc open with probability p_e. A source infects vertices reachable by open directed paths. Prove a lower product bound for infecting all terminals, derive the derivative of a terminal's infection probability in one arc parameter, and formulate a reproducible exact-enumeration check on a five-vertex network.",
    "prerequisites": [
      "product measures",
      "Harris inequality",
      "conditional expectation"
    ],
    "minutes": 100,
    "guide": [
      "Reachability to each terminal is increasing in the arc indicators. Harris therefore gives the all-terminal lower bound, even though many routes share arcs. The derivative in p_e is the probability that e changes reachability when the other arcs are fixed.",
      "Enumerate all 2^m arc states for a chosen network with at most ten arcs, using exact rational p_e. Compare the exact joint probability to the product and check the finite-difference derivative against the pivotal formula. A negative gap or derivative is an implementation failure criterion."
    ],
    "followup": "How does allowing correlated arc failures affect each step of the argument?",
    "deliverable": "A theorem, an explicit small network, and exact rational audit results."
  },
  {
    "unit": "core-harris",
    "slug": "complementary-color-correlation",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Two complementary edge colors have opposite monotonicity",
    "prompt": "Independently color each edge of a fixed graph red with probability p_e and blue otherwise. Let A be a red increasing edge property and B a blue increasing edge property. Prove P(A∩B)≤P(A)P(B). For a three-edge path calculate the probability that all red edges include its first two edges while all blue edges include its last two.",
    "prerequisites": [
      "product measures",
      "Harris inequality",
      "conditional expectation"
    ],
    "minutes": 45,
    "guide": [
      "Use the red indicators as the product coordinates. A is increasing, whereas a blue increasing property is decreasing in those red coordinates. Harris with opposite monotonicity gives the upper bound.",
      "In the path example, the middle edge would have to be simultaneously red and blue, so the intersection has probability zero. With 0<p_e<1 both marginal event probabilities are positive, giving a strict inequality caused by the shared edge."
    ],
    "followup": "What changes if the red and blue graphs are sampled independently instead of being complementary?",
    "deliverable": "A monotonicity proof and an exact incompatible-overlap example."
  },
  {
    "unit": "core-harris",
    "slug": "monotone-coupling-in-bias",
    "tier": "examiner",
    "kind": "construction",
    "title": "Compare two product measures by one uniform coupling",
    "prompt": "Let p_i≤q_i and let A be increasing. Construct a coupling proving P_p(A)≤P_q(A). Derive an upper bound on P_q(A)−P_p(A) in terms of Σ_i(q_i−p_i), and a sharper telescoping formula involving pivotal probabilities at intermediate bias vectors.",
    "prerequisites": [
      "product measures",
      "Harris inequality",
      "conditional expectation"
    ],
    "minutes": 60,
    "guide": [
      "Take independent U_i uniform on [0,1] and set X_i=1_{U_i≤p_i}, Y_i=1_{U_i≤q_i}. Then X≤Y pointwise. A change in event membership requires at least one coordinate disagreement, giving the sum bound by a union bound.",
      "Change the biases one at a time. Multilinearity gives an exact contribution (q_i−p_i) times the pivotal probability with earlier coordinates at q and later coordinates at p. This formula improves the coarse bound whenever many coordinates are rarely pivotal."
    ],
    "followup": "Can the total influence at p alone replace all intermediate pivotal probabilities without an additional argument?",
    "deliverable": "A coupling, the coarse bound and an exact parameter-by-parameter identity."
  },
  {
    "unit": "core-xyz",
    "slug": "four-element-exact-correlation",
    "tier": "doctoral",
    "kind": "construction",
    "title": "An exact XYZ calculation with a nontrivial order constraint",
    "prompt": "Let P have elements a,b,c,d, with only b<d and c<d forced. List all linear extensions and compute P(a<b), P(a<c), their intersection, and their covariance. Explain how the symmetry between b and c reduces the enumeration without making a's position independent of their ranks.",
    "prerequisites": [
      "linear extensions",
      "XYZ theorem",
      "finite-poset counting"
    ],
    "minutes": 40,
    "guide": [
      "First order b,c,d: there are two possibilities, bcd and cbd. Insert the isolated a into one of four slots of either order, giving eight equiprobable extensions.",
      "In bcd, a precedes b in one slot and c in two; in cbd these counts reverse. Both marginals are 3/8, while a precedes both in two of the eight extensions, giving joint probability 1/4 and covariance 7/64."
    ],
    "followup": "How do the probabilities change if d<a is added?",
    "deliverable": "The eight extensions, exact rational probabilities and a comparison with the XYZ bound."
  },
  {
    "unit": "core-xyz",
    "slug": "chain-and-two-isolates",
    "tier": "doctoral",
    "kind": "proof",
    "title": "A one-parameter family with an exact XYZ gap",
    "prompt": "Take a chain a=a_1<a_2<…<a_r and two isolated elements b,c, with r≥1. In a uniform linear extension prove P(a<b)=r/(r+1), P(a<b,a<c)=r/(r+2), and derive the exact covariance. Interpret its behavior as r→∞.",
    "prerequisites": [
      "linear extensions",
      "XYZ theorem",
      "finite-poset counting"
    ],
    "minutes": 45,
    "guide": [
      "A uniform extension is a uniform shuffle of the ordered chain and the two singleton elements. Restricting to the chain and b gives each insertion position of b the same probability, so only one of r+1 positions precedes a.",
      "The event that a precedes both singletons means the first position is occupied by a chain element, which occurs with probability r/(r+2). The gap is r/[(r+2)(r+1)²], positive but tending to zero quadratically."
    ],
    "followup": "Replace b,c by s isolated elements and calculate the probability that a precedes all of them.",
    "deliverable": "A shuffle-counting derivation and the exact positive gap."
  },
  {
    "unit": "core-xyz",
    "slug": "finite-grid-tie-error",
    "tier": "examiner",
    "kind": "proof",
    "title": "Quantify the tie-removal step in the XYZ proof",
    "prompt": "Fix a poset P on n labeled elements and m≥n. Sample uniformly from order-preserving maps P→[m]. Prove that conditioning on distinct labels induces the uniform linear-extension law, and bound the total-variation error by C(n,2)m^(n−1)/(e(P)C(m,n)), where e(P) is the number of extensions.",
    "prerequisites": [
      "linear extensions",
      "XYZ theorem",
      "finite-poset counting"
    ],
    "minutes": 50,
    "guide": [
      "There are exactly e(P)C(m,n) injective order-preserving maps: choose the n labels and then the extension assigning their increasing order. Every extension receives the same number of maps.",
      "At most C(n,2)m^(n−1) maps have some equal coordinate, even before imposing the poset constraints. The tied fraction is at most this quantity divided by the injective count. Coupling by conditioning proves the total-variation bound; cap it at one when it is coarse."
    ],
    "followup": "For fixed n, extract an explicit O(1/m) constant and state why it is not uniform in growing n.",
    "deliverable": "A finite counting estimate and a rigorous passage from grid maps to extensions."
  },
  {
    "unit": "core-xyz",
    "slug": "shepp-lattice-sublemma",
    "tier": "examiner",
    "kind": "proof",
    "title": "Check the unusual lattice used by XYZ",
    "prompt": "For x,y∈[m]^n define x≼y by x_1≥y_1 and x_i−x_1≤y_i−y_1 for i≥2. Prove that the proposed meet has coordinates min(x_i−x_1,y_i−y_1)+max(x_1,y_1), and the join uses max plus min. Verify both remain in [m]^n and preserve order-map constraints.",
    "prerequisites": [
      "linear extensions",
      "XYZ theorem",
      "finite-poset counting"
    ],
    "minutes": 55,
    "guide": [
      "Assume, for example, x_1≥y_1. The proposed meet coordinates are min(x_i,y_i+x_1−y_1), lying between 1 and m because one candidate is x_i. The proposed join coordinates are max(x_i−x_1+y_1,y_i), also within the box.",
      "In the transformed coordinates (−x_1,x_2−x_1,…,x_n−x_1), the order is coordinatewise and the formulas are the coordinatewise extrema. If x_i≤x_j and y_i≤y_j, taking either corresponding min or max preserves that inequality. These checks justify the lattice lemma used in the full XYZ proof."
    ],
    "followup": "Why is this order different from ordinary coordinatewise order on the original labels?",
    "deliverable": "A meet/join proof including box closure and support closure; the full XYZ theorem may be assumed."
  },
  {
    "unit": "core-xyz",
    "slug": "mixed-comparisons-negative",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "A comparison orientation matters",
    "prompt": "In a uniform extension of a four-element antichain {a,b,c,d}, compare A={a<b} and B={c<a}. Compute their covariance and explain why XYZ does not assert a positive sign for this pair. Then reverse the whole poset to state the common-successor analogue of XYZ.",
    "prerequisites": [
      "linear extensions",
      "XYZ theorem",
      "finite-poset counting"
    ],
    "minutes": 60,
    "guide": [
      "The irrelevant element d does not change the relative order distribution of a,b,c. Each event has probability 1/2, but their intersection requires c<a<b, one of six relative orders. The covariance is 1/6−1/4=−1/12.",
      "XYZ compares two events with a shared element on the same side of both comparisons. Reversing every extension is a bijection to extensions of the dual poset, giving positive association for {b<a} and {c<a} as well."
    ],
    "followup": "Can comparisons on disjoint pairs be assigned a universal covariance sign in arbitrary posets?",
    "deliverable": "An exact negative example and a correctly oriented dual theorem."
  },
  {
    "unit": "core-xyz",
    "slug": "many-arm-xyz-extension",
    "tier": "research",
    "kind": "research-extension",
    "title": "Extend XYZ to many comparisons sharing one element",
    "prompt": "Assume the XYZ proof's finite distributive lattice of order-preserving grid maps, with its FKG measure, is available. Prove P(a precedes every b∈B)≥∏_{b∈B}P(a<b) for any finite B disjoint from a. Identify why pairwise XYZ inequalities alone would not justify this conclusion.",
    "prerequisites": [
      "linear extensions",
      "XYZ theorem",
      "finite-poset counting"
    ],
    "minutes": 85,
    "guide": [
      "On the transformed grid lattice, every indicator {x_a≤x_b} is increasing. Products of these indicators remain increasing, so iterated FKG gives the many-event product lower bound before taking the no-ties limit.",
      "The finite-grid tie estimate transfers the inequality to uniform extensions. On an n-element antichain with B containing every other element, the joint probability is 1/n, whereas the product is 2^{−(n−1)}. Pairwise association by itself need not imply arbitrary many-event bounds; the stronger lattice representation supplies that step."
    ],
    "followup": "Derive the same inequality with blocks of comparisons sharing a and explain the closure of the event class.",
    "deliverable": "A rigorous many-arm extension with the lattice lemma explicitly assumed and an antichain check."
  },
  {
    "unit": "core-xyz",
    "slug": "exact-extension-sampling-audit",
    "tier": "research",
    "kind": "research-extension",
    "title": "Uniform extensions versus uniform choices of minima",
    "prompt": "Build an exact dynamic program over ideals that counts extensions and samples them uniformly. Use it to audit the rule 'choose a currently minimal element uniformly'. Supply a three-element counterexample to that rule and a reproducible comparison of XYZ probabilities under both distributions on a specified six-element poset.",
    "prerequisites": [
      "linear extensions",
      "XYZ theorem",
      "finite-poset counting"
    ],
    "minutes": 100,
    "guide": [
      "Let F(I) count completions after ideal I. Then F(I)=Σ_{v minimal outside I}F(I∪{v}), with F(P)=1. A correct sampler chooses v with probability F(I∪{v})/F(I), using integer counts.",
      "For a<b with c isolated, uniform-minimum sampling gives probability 1/2 to cab and 1/4 each to abc and acb, whereas the uniform extension law gives 1/3 each. The audit must verify that exact sample probabilities equal 1/e(P); empirical agreement alone is insufficient."
    ],
    "followup": "Can an observed XYZ violation under a biased sampler disprove the theorem for uniform extensions?",
    "deliverable": "A counting recurrence, exact biased-sampling witness and a documented six-element audit."
  },
  {
    "unit": "core-xyz",
    "slug": "isolated-element-rank-reduction",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Insert one isolated element and express correlations by ranks",
    "prompt": "Let Q be an (n−1)-element poset containing distinct b,c, and add an isolated a. Prove that a uniform extension is obtained by choosing a uniform extension of Q and an independent uniform insertion slot. Express P(a<b), P(a<c) and their intersection through the ranks R_b,R_c in Q, and translate XYZ into a rank-moment inequality.",
    "prerequisites": [
      "linear extensions",
      "XYZ theorem",
      "finite-poset counting"
    ],
    "minutes": 45,
    "guide": [
      "Every extension of Q has exactly n insertions of a, so the pair 'extension, slot' is uniform. Given ranks R_b,R_c, the number of insertion slots before b is R_b, and before both is min(R_b,R_c).",
      "Therefore the marginals are E R_b/n and E R_c/n, while the joint probability is E min(R_b,R_c)/n. Assuming XYZ yields n E min(R_b,R_c)≥E R_b E R_c. This is a derived rank inequality, not independence of the two ranks."
    ],
    "followup": "Check the formulas when Q is a chain and when Q is an antichain.",
    "deliverable": "A bijection, three rank formulas and the resulting moment comparison."
  },
  {
    "unit": "core-xyz",
    "slug": "adjacent-swap-stationarity",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "A correct uniform stationary law without a mixing claim",
    "prompt": "On linear extensions of a finite poset, consider the lazy chain that with probability 1/2 stays put and otherwise selects a uniform adjacent position and swaps its elements only if they are incomparable. Prove uniform stationarity and irreducibility. Explain why these properties alone give no quantitative sampling-time guarantee.",
    "prerequisites": [
      "linear extensions",
      "XYZ theorem",
      "finite-poset counting"
    ],
    "minutes": 60,
    "guide": [
      "Every allowed adjacent swap has the same transition probability in both directions, so the uniform distribution satisfies detailed balance. The added holding probability ensures aperiodicity.",
      "To connect any extension to a target extension, move the target's first element leftward. Every element it crosses must be incomparable with it, since a forced predecessor would also precede it in the target. Fix that first element and repeat on the remaining poset. This proves connectivity but does not bound mixing time."
    ],
    "followup": "How would biased choices among available minima differ from this reversible construction?",
    "deliverable": "A detailed-balance proof, a connectivity argument and a precise limit on the conclusion."
  },
  {
    "unit": "core-azuma",
    "slug": "permutation-fixed-points",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Expose a permutation with a transposition coupling",
    "prompt": "For a uniform permutation π of [n], let F count fixed points. Expose π(1),…,π(n) and prove that each Doob increment has absolute value at most two by coupling completions with different next images. Deduce a tail bound, compute E F and Var F for n≥2, and assess the bound's scale.",
    "prerequisites": [
      "Doob martingales",
      "conditional MGFs",
      "exposure couplings"
    ],
    "minutes": 40,
    "guide": [
      "To compare next images a and b, swap the occurrences of a and b in a completed permutation. This is a bijection of the two conditional completion spaces and changes at most two fixed-point indicators, so the conditional expectations differ by at most two.",
      "Thus P(|F−1|≥t)≤2exp(−t²/(8n)). Direct indicator calculations give E F=1 and Var F=1: two specified positions are simultaneously fixed with probability 1/[n(n−1)]. The martingale bound is valid but far from the true constant fluctuation scale."
    ],
    "followup": "Can a sharper completion calculation improve the increment bounds without changing the product-free coupling idea?",
    "deliverable": "A completion bijection, a valid Azuma bound and exact first two moments."
  },
  {
    "unit": "core-azuma",
    "slug": "components-exposure-choice",
    "tier": "doctoral",
    "kind": "synthesis",
    "title": "The right exposure for connected-component count",
    "prompt": "In G(n,p), let C be the number of connected components. Prove that changing one edge changes C by at most one, whereas changing all edges incident to one vertex can change C by n−1. Compare the resulting Azuma variance proxies for edge and vertex exposures, and give an extremal graph pair.",
    "prerequisites": [
      "Doob martingales",
      "conditional MGFs",
      "exposure couplings"
    ],
    "minutes": 45,
    "guide": [
      "Adding one edge either merges exactly two components or changes none; deleting one edge either splits one component into two or changes none. Independent edge exposure therefore has squared-increment sum at most C(n,2).",
      "An empty graph and a spanning star differ only in one vertex's incident edges and have component counts n and one. Thus the vertex-block replacement effect may be n−1, giving a crude proxy of order n³ rather than n². Fewer exposure steps do not automatically improve concentration."
    ],
    "followup": "Why does chromatic number behave differently under the same vertex-block exposure?",
    "deliverable": "A sensitivity proof, an extremal pair and both exposure bounds."
  },
  {
    "unit": "core-azuma",
    "slug": "maximal-azuma",
    "tier": "examiner",
    "kind": "proof",
    "title": "Control the largest martingale excursion",
    "prompt": "Let M_0=0 and |M_i−M_{i−1}|≤c_i, with deterministic V=Σ_{i≤N}c_i². Prove P(max_{i≤N}M_i≥t)≤exp(−t²/(2V)) using an exponential supermartingale and a bounded stopping time, rather than a union bound over N times.",
    "prerequisites": [
      "Doob martingales",
      "conditional MGFs",
      "exposure couplings"
    ],
    "minutes": 50,
    "guide": [
      "The conditional MGF estimate makes Z_i=exp(λM_i−λ²Σ_{j≤i}c_j²/2) a nonnegative supermartingale with E Z_0=1. Stop at the first threshold crossing, or at N if no crossing occurs.",
      "At a crossing, Z is at least exp(λt−λ²V/2). The finite optional-stopping calculation follows directly by conditioning one step at a time. Markov's bound and λ=t/V give the result; apply it also to −M for a two-sided maximum."
    ],
    "followup": "What changes when c_i² is predictable and its total is bounded on every path?",
    "deliverable": "A maximal inequality with a complete finite stopping argument."
  },
  {
    "unit": "core-azuma",
    "slug": "stopped-square-walk",
    "tier": "examiner",
    "kind": "proof",
    "title": "Stop a square-walk martingale to reduce its effects",
    "prompt": "Let S_i=Σ_{j≤i}ε_j for fresh fair signs and M_i=S_i²−i. Verify the martingale property and compute its increments. Compare Azuma using the deterministic bounds 2(i−1) with the stopped process at τ=min{i:|S_i|≥b}, for an integer b≥1.",
    "prerequisites": [
      "Doob martingales",
      "conditional MGFs",
      "exposure couplings"
    ],
    "minutes": 55,
    "guide": [
      "Expanding S_i² gives M_i−M_{i−1}=2ε_i S_{i−1}, whose conditional mean is zero. The unconditional deterministic effect bound yields Σ 4(i−1)²=Θ(N³).",
      "Before the first crossing of b, |S_{i−1}|≤b−1. The stopped martingale M_{i∧τ} consequently has increments bounded by 2(b−1), and squared-effect sum at most 4N(b−1)². State concentration only for the stopped statistic; transferring to M_N requires separately controlling τ≤N."
    ],
    "followup": "Why is b=1 a useful check on the stopped formula?",
    "deliverable": "A martingale calculation and a comparison that keeps the stopping event explicit."
  },
  {
    "unit": "core-azuma",
    "slug": "maximum-of-many-statistics",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "A concentration bound for the maximum of many observables",
    "prompt": "Let f_1,…,f_K depend on independent coordinates, each with replacement effects c_i. Prove P(max_j[f_j−E f_j]≥t)≤K exp(−2t²/Σc_i²) using the range form of Hoeffding's lemma. Derive an expectation bound of order √(Σc_i² log K), including K=1 separately.",
    "prerequisites": [
      "Doob martingales",
      "conditional MGFs",
      "exposure couplings"
    ],
    "minutes": 60,
    "guide": [
      "For one exposed coordinate, the conditional martingale increment has a range interval of length at most c_i. The conditional Hoeffding bound is exp(λ²c_i²/8), yielding the sharper range-form tail rather than the coarser absolute-increment constant.",
      "The log-sum-exp bound gives E max_j(f_j−E f_j)≤log K/λ+λΣc_i²/8. Optimize λ=√(8log K/Σc_i²) to obtain √(Σc_i² log K/2) when K>1; for K=1 the centered expectation is zero."
    ],
    "followup": "Does the maximum itself retain coordinate effects c_i, and where does log K enter if so?",
    "deliverable": "A union tail and an optimized MGF expectation estimate."
  },
  {
    "unit": "core-azuma",
    "slug": "sampling-without-replacement",
    "tier": "research",
    "kind": "research-extension",
    "title": "A finite-population martingale calculation",
    "prompt": "A population of N bits contains K ones. Draw m<N bits without replacement and let X be their sum. Derive the Doob increment Δ_i=(N−m)(Z_i−p_i)/(N−i), where p_i is the remaining success fraction before draw i, and use it to obtain an explicit squared-effect Azuma bound. Compare m near N with m≪N.",
    "prerequisites": [
      "Doob martingales",
      "conditional MGFs",
      "exposure couplings"
    ],
    "minutes": 85,
    "guide": [
      "After i observations with sum s_i, the conditional expectation is s_i+(m−i)(K−s_i)/(N−i). Subtract the corresponding expression at i−1 to obtain the displayed increment exactly.",
      "Since |Z_i−p_i|≤1, use c_i=(N−m)/(N−i) and V=Σ_{i=1}^m[(N−m)/(N−i)]². This captures reduced uncertainty near a census; the case m=N is deterministic and must be handled separately because the formula's last denominator vanishes."
    ],
    "followup": "Can you improve constants by keeping the conditional range rather than only the absolute increment?",
    "deliverable": "The exact increment identity, an explicit finite sum and a regime comparison."
  },
  {
    "unit": "core-azuma",
    "slug": "variance-and-jump-bernstein",
    "tier": "research",
    "kind": "research-extension",
    "title": "Derive a Bernstein-type martingale extension",
    "prompt": "Suppose martingale differences D_i satisfy |D_i|≤c and Σ_i E[D_i²|F_{i−1}]≤v on every path. Prove P(M_N−M_0≥t)≤exp(−t²/[2(v+ct/3)]) by a conditional MGF argument. Apply it to Σ_i(B_i−p_i), with predictable p_i and fresh conditional Bernoulli B_i.",
    "prerequisites": [
      "Doob martingales",
      "conditional MGFs",
      "exposure couplings"
    ],
    "minutes": 100,
    "guide": [
      "Expand the conditional exponential. Since E[D_i|F_{i−1}]=0 and |D_i|^k≤c^{k−2}D_i², use k!≥2·3^{k−2} to bound the MGF by exp(λ²E[D_i²|F_{i−1}]/[2(1−λc/3)]) for 0<λc<3.",
      "Iterate with the predictable variance compensator and choose λ=t/(v+ct/3). For adaptive Bernoulli trials use c=1 and conditional variance p_i(1−p_i). The linear ct term explicitly records why a variance-only Gaussian bound cannot cover arbitrarily large deviations."
    ],
    "followup": "Show how to stop when the conditional variance budget would exceed v.",
    "deliverable": "A full MGF proof and a verified adaptive-trial application."
  },
  {
    "unit": "core-azuma",
    "slug": "random-max-cut-concentration",
    "tier": "doctoral",
    "kind": "proof",
    "title": "A concentrated graph optimum from edge exposure",
    "prompt": "For G(n,p), let X be its maximum cut size. Prove edge replacement effect one, obtain a two-sided Azuma bound, and show E X≥pC(n,2)/2 without analyzing the random optimum directly. State a high-probability lower bound with failure at most n^−3.",
    "prerequisites": [
      "Doob martingales",
      "conditional MGFs",
      "exposure couplings"
    ],
    "minutes": 45,
    "guide": [
      "Changing an edge changes the value of every fixed cut by at most one, hence the maximum by at most one. Edge exposure gives V=C(n,2).",
      "For each realized graph a uniformly random vertex bipartition cuts half its edges in expectation, so its maximum cut is at least e(G)/2. Taking expectations gives the desired center lower bound. Use t=√(6V log n) in the one-sided Azuma inequality."
    ],
    "followup": "Would a lower bound for E X alone certify that most graphs have a large cut without concentration?",
    "deliverable": "A sensitivity proof and a numerical high-probability lower bound in n,p."
  },
  {
    "unit": "core-azuma",
    "slug": "median-mean-conversion",
    "tier": "examiner",
    "kind": "proof",
    "title": "Translate bounded-increment tails between centers",
    "prompt": "Let X=M_N with deterministic squared-increment sum V and mean μ. Show that every median m satisfies |m−μ|≤√(2V ln2) under the two one-sided Azuma bounds. Deduce a median-centered tail and bound E|X−μ| by integrating the two-sided bound.",
    "prerequisites": [
      "Doob martingales",
      "conditional MGFs",
      "exposure couplings"
    ],
    "minutes": 60,
    "guide": [
      "If m>μ, the median property P(X≥m)≥1/2 and the upper Azuma tail force (m−μ)²≤2V ln2; use the lower tail for the opposite case. Care with strict versus nonstrict events can be handled by approaching the threshold.",
      "Triangle inequality gives P(|X−m|≥s+√(2V ln2))≤2e^{−s²/(2V)}. Integrating min(1,2e^{−t²/(2V)}) yields an O(√V) absolute-deviation bound; using the untruncated Gaussian integral gives the valid explicit bound √(2πV)."
    ],
    "followup": "Explain why a median need not equal a mode or an integer nearest the expectation.",
    "deliverable": "A center-conversion lemma and an integrated moment bound."
  },
  {
    "unit": "core-chromatic",
    "slug": "greedy-packing-from-incidences",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Extract an edge-disjoint clique packing quantitatively",
    "prompt": "In a deterministic graph let X be its number of k-cliques, k≥3, and suppose each edge belongs to at most D of them. Prove that a maximal greedy edge-disjoint packing has size at least X/[C(k,2)D]. Explain why replacing X and D by their expectations in a random graph is not a justified step.",
    "prerequisites": [
      "random-graph exposure",
      "clique packings",
      "critical graphs",
      "Azuma inequality"
    ],
    "minutes": 40,
    "guide": [
      "Every selected clique conflicts with at most C(k,2)D candidate cliques, by assigning a shared edge and then a clique containing it. A maximal packing's conflict neighborhoods cover all k-cliques, proving the bound.",
      "For random graphs the displayed inequality is pointwise in the realized D. It yields E Y≥E[X/(C(k,2)D)] when D>0, not the ratio E X/[C(k,2)E D]. Any use of average incidence needs an additional deterministic truncation or probability argument."
    ],
    "followup": "Calculate X,D and the actual packing size for K_{k+1}.",
    "deliverable": "A greedy covering proof and a precise expectation-ratio warning."
  },
  {
    "unit": "core-chromatic",
    "slug": "quantile-anchored-deletion",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Use a chromatic quantile to anchor a deletion variable",
    "prompt": "Let u be the least integer with P(χ(G(n,p))≤u)>η, where 0<η<1/2. Define Y as the minimum vertices whose deletion leaves a u-colorable graph. Prove E Y≤√(2n ln(1/η)) and P(Y>2√(2n ln(1/η)))≤η. Include the vertex-exposure coupling.",
    "prerequisites": [
      "random-graph exposure",
      "clique packings",
      "critical graphs",
      "Azuma inequality"
    ],
    "minutes": 45,
    "guide": [
      "Two graphs differing only in one vertex's incident edges have deletion numbers differing by at most one: add that vertex to a deletion set on either side. Coupling all other edge variables identically yields n bounded Doob increments.",
      "Since P(Y=0)>η, the lower Azuma tail forces the mean to be at most λ√n with λ=√(2ln(1/η)). The upper tail then bounds Y by 2λ√n except with probability η. The minimality of u also gives P(χ<u)≤η."
    ],
    "followup": "What extra coloring statement about the deleted vertices converts this into a short interval for χ?",
    "deliverable": "A finite-η deletion lemma with both concentration steps justified."
  },
  {
    "unit": "core-chromatic",
    "slug": "dense-triangle-packing-exponent",
    "tier": "examiner",
    "kind": "construction",
    "title": "Recover the correct dense no-triangle exponential scale",
    "prompt": "Assume n=3r and 0<p<1 is fixed. Construct r² edge-disjoint triangles in K_n using three equal parts and modular addition. Use their surviving copies to lower-bound the expected maximum triangle packing in G(n,p), then prove P(G is triangle-free)≤exp(−c_p n²). Compare with the empty-graph lower bound.",
    "prerequisites": [
      "random-graph exposure",
      "clique packings",
      "critical graphs",
      "Azuma inequality"
    ],
    "minutes": 50,
    "guide": [
      "Index each part by Z_r and use triangles (a_i,b_j,c_{i+j}). Every cross-part edge appears in exactly one of these triangles. Each triangle survives with probability p³, so the expected optimum packing is at least r²p³.",
      "Maximum packing is one-edge Lipschitz. Azuma over C(n,2) edges gives P(Y=0)≤exp(−(r²p³)²/[2C(n,2)]), which is exp(−Ω_p(n²)). The event of no edges has probability (1−p)^{C(n,2)}, proving a matching exponential order for fixed p."
    ],
    "followup": "How do rounding n/3 and allowing p=p(n) affect the claimed constants?",
    "deliverable": "An explicit modular packing and upper/lower exponential-scale bounds."
  },
  {
    "unit": "core-chromatic",
    "slug": "general-small-subgraph-coloring",
    "tier": "examiner",
    "kind": "proof",
    "title": "Generalize the sparse critical-subgraph calculation",
    "prompt": "Let r≥3, β∈(0,1), p=n^−α and c>0 fixed. Prove that every set of at most cn^β vertices is r-colorable with high probability whenever α>β+2(1−β)/r. Use a minimal non-r-colorable subgraph and display the exponent that controls the union bound.",
    "prerequisites": [
      "random-graph exposure",
      "clique packings",
      "critical graphs",
      "Azuma inequality"
    ],
    "minutes": 55,
    "guide": [
      "A vertex-minimal non-r-colorable graph has minimum degree at least r: otherwise remove a low-degree vertex and extend an r-coloring. A t-vertex witness therefore has at least rt/2 edges.",
      "The probability of some witness is bounded by Σ_t C(n,t)C(C(t,2),⌈rt/2⌉)p^{⌈rt/2⌉}. Up to fixed constants its tth term is at most [C n^{1−αr/2}t^{r/2−1}]^t. At t≤cn^β the base tends to zero under the stated inequality; fixed small t and rounding are harmless."
    ],
    "followup": "Specialize to β=1/2,r=3 and recover the threshold 5/6.",
    "deliverable": "A general sparse-colorability lemma with a controlled finite sum."
  },
  {
    "unit": "core-chromatic",
    "slug": "coarse-sparse-window-extension",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "A family of constant-width chromatic windows",
    "prompt": "Assume the small-subgraph coloring lemma with β=1/2 and the finite-η deletion estimate. For fixed r≥3 and α>1/2+1/r, prove that for every fixed η>0 there exists an integer u(n,η) with P(u≤χ(G(n,n^−α))≤u+r)≥1−3η for all sufficiently large n.",
    "prerequisites": [
      "random-graph exposure",
      "clique packings",
      "critical graphs",
      "Azuma inequality"
    ],
    "minutes": 60,
    "guide": [
      "The deletion estimate leaves at most c_η√n vertices outside a u-colorable graph except with probability η. The generalized sparse lemma says every such leftover vertex set is r-colorable except with another probability tending to zero.",
      "Use disjoint palettes for the retained and deleted subgraphs, giving χ≤u+r. The quantile definition gives P(χ<u)≤η. Keep n's threshold dependent on η and r; this fixed-error statement alone is not yet a single center sequence with error o(1)."
    ],
    "followup": "For a given α>1/2, what integer r makes the argument apply?",
    "deliverable": "A finite-error window theorem and all quantifier dependencies."
  },
  {
    "unit": "core-chromatic",
    "slug": "diagonalize-moving-quantiles",
    "tier": "research",
    "kind": "research-extension",
    "title": "Repair the quantifiers in an asymptotically certain window",
    "prompt": "Suppose that for every fixed η>0 and all large enough n there is u(n,η) such that P(u≤χ_n≤u+r)≥1−3η. Construct one deterministic sequence v_n for which P(v_n≤χ_n≤v_n+r)→1. Show how the construction accommodates structural lemmas valid only for each fixed c_η.",
    "prerequisites": [
      "random-graph exposure",
      "clique packings",
      "critical graphs",
      "Azuma inequality"
    ],
    "minutes": 85,
    "guide": [
      "Choose η_j↓0 and increasing thresholds N_j so that the fixed-η_j probability bound and the needed structural lemma both hold for all n≥N_j. Choose the thresholds strictly increasing even when earlier estimates already hold.",
      "Set j(n)=max{j:N_j≤n} and v_n=u(n,η_{j(n)}). Then j(n)→∞ and the error is at most 3η_{j(n)}. This diagonal construction allows c_η to grow slowly with n without asserting a uniform structural estimate that has not been proved."
    ],
    "followup": "Why does simply saying 'η was arbitrary' leave a gap when the chosen center depends on η?",
    "deliverable": "A complete deterministic diagonal selection and a quantifier audit."
  },
  {
    "unit": "core-chromatic",
    "slug": "packing-certificate-comparison",
    "tier": "research",
    "kind": "research-extension",
    "title": "Compare two concentration mechanisms for the same packing",
    "prompt": "For maximum edge-disjoint k-clique packing Y in G(n,1/2), assume E Y≥a n²/k^4 and a median m≥b n²/k^4, with positive fixed a,b. Compare the no-clique exponent from edge-exposure Azuma with the certifiable-variable bound using a certificate of C(k,2)Y present edges. State which mean–median comparison is still required if only the expectation hypothesis is known.",
    "prerequisites": [
      "random-graph exposure",
      "clique packings",
      "critical graphs",
      "Azuma inequality"
    ],
    "minutes": 100,
    "guide": [
      "Azuma gives a lower-tail exponent of order (E Y)²/n², namely n²/k^8. A b-clique witness uses C(k,2)b edge coordinates, and packing has edge replacement effect one.",
      "The Talagrand certificate inequality with high threshold m and lower value zero gives P(Y=0)≤2exp(−m/[4C(k,2)]), hence exponent Ω(n²/k^6). The median lower bound is an additional input unless it is derived from concentration; substituting a mean without conversion is invalid."
    ],
    "followup": "Use the Azuma bound to obtain a median lower bound when E Y≫n and state the resulting k-range.",
    "deliverable": "Two exponents, certificate calculations and an explicit mean–median dependency."
  },
  {
    "unit": "core-chromatic",
    "slug": "independence-number-is-not-coloring",
    "tier": "doctoral",
    "kind": "counterexample",
    "title": "Concentrating an independence number does not determine χ",
    "prompt": "For even n=2m, construct two graphs on n vertices with the same independence number m but chromatic numbers 2 and m+1. Use them to explain exactly what a concentration interval for α(G) implies through χ(G)≥n/α(G), and why it supplies no comparable upper bound.",
    "prerequisites": [
      "random-graph exposure",
      "clique packings",
      "critical graphs",
      "Azuma inequality"
    ],
    "minutes": 45,
    "guide": [
      "K_{m,m} has independence number m and chromatic number two. The disjoint union of K_{m+1} with m−1 isolated vertices also has independence number 1+(m−1)=m, but chromatic number m+1.",
      "If α lies between a−t and a+t, the deterministic inequality yields only χ≥n/(a+t). A coloring partitions vertices into independent sets, but the existence of one large independent set does not guarantee a sequence of equally large sets in the remaining graph."
    ],
    "followup": "What extra hereditary independent-set guarantee would make an iterative coloring argument possible?",
    "deliverable": "Two exact constructions and a one-direction concentration transfer."
  },
  {
    "unit": "core-chromatic",
    "slug": "very-sparse-exact-colors",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Sharpen the window in the very sparse range",
    "prompt": "For p=n^−α with fixed α>1, determine χ(G(n,p)) with high probability when 1<α<2 and when α>2. At α=2 compute the limiting probabilities of χ=1 and χ=2. Prove the absence of cycles by a first-moment calculation.",
    "prerequisites": [
      "random-graph exposure",
      "clique packings",
      "critical graphs",
      "Azuma inequality"
    ],
    "minutes": 60,
    "guide": [
      "The expected number of cycles is at most Σ_{k≥3}(np)^k/(2k)=o(1) because np→0. Thus the graph is a forest with high probability and needs at most two colors.",
      "For 1<α<2 the expected edge count tends to infinity and P(no edges)=(1−p)^{C(n,2)}→0, so χ=2 with high probability. For α>2 no edge occurs with high probability, so χ=1. At α=2 the empty probability tends to e^{−1/2}, with all remaining mass on χ=2."
    ],
    "followup": "Why is the case α=1 outside this cycle-sum argument?",
    "deliverable": "A complete regime calculation including the critical edge-count boundary."
  },
  {
    "unit": "core-gradation",
    "slug": "batching-can-hurt",
    "tier": "doctoral",
    "kind": "counterexample",
    "title": "Grouping coordinates can make the denominator larger",
    "prompt": "Let N=bk independent fair bits and L=Σ_i X_i. Compare singleton exposure with a gradation that reveals b blocks of k bits each. Compute replacement effects, squared-effect sums and actual variance. Explain why the number of exposure stages alone cannot rank two gradations.",
    "prerequisites": [
      "gradations",
      "adaptive decision trees",
      "conditional variance",
      "bounded effects"
    ],
    "minutes": 40,
    "guide": [
      "A singleton replacement changes L by at most one, so its worst-effect squared sum is N. Replacing an entire k-bit block changes L by at most k, giving b k²=Nk for the block bound.",
      "The true variance is N/4 in both representations. If the block's independent internal structure is retained, its MGF still reflects k Bernoulli terms and recovers the sharper denominator. A theorem using only one worst block effect discards that information."
    ],
    "followup": "Give a statistic, such as chromatic number under vertex exposure, where a large block has an unusually small total effect.",
    "deliverable": "Both gradation calculations and a precise account of the lost information."
  },
  {
    "unit": "core-gradation",
    "slug": "or-query-budget",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Expected query variance is not a pathwise budget",
    "prompt": "Determine OR of N independent Bernoulli(p) bits by reading until the first one or until all bits are exhausted. Compute the expected number of queries and the maximum total query variance along a path. Compare the two as Np→∞ and explain which budget the adaptive theorem permits.",
    "prerequisites": [
      "gradations",
      "adaptive decision trees",
      "conditional variance",
      "bounded effects"
    ],
    "minutes": 45,
    "guide": [
      "The probability that query j is reached is (1−p)^{j−1}, so E Q=[1−(1−p)^N]/p. Each queried bit has global effect one and variance p(1−p).",
      "Thus expected accumulated query variance is (1−p)[1−(1−p)^N], while the all-zero path has variance Np(1−p). The source theorem requires a bound for every path; replacing that by the expectation would omit a possible long branch."
    ],
    "followup": "Can one add a separate exceptional-path probability and then use a stopped argument?",
    "deliverable": "The two exact budgets and an explicit explanation of the admissible theorem input."
  },
  {
    "unit": "core-gradation",
    "slug": "biased-two-point-mgf",
    "tier": "examiner",
    "kind": "proof",
    "title": "Prove the local MGF lemma quantitatively",
    "prompt": "For 0≤p≤1 show that p e^{(1−p)a}+(1−p)e^{−pa}≤exp(p(1−p)a²) whenever |a|≤1. Use this to identify the ε=δ=1 specialization of the adaptive variance theorem and its allowable deviation range.",
    "prerequisites": [
      "gradations",
      "adaptive decision trees",
      "conditional variance",
      "bounded effects"
    ],
    "minutes": 50,
    "guide": [
      "The constant and linear Taylor terms are one and zero, and the quadratic coefficient is p(1−p)/2. For k≥3 the absolute coefficient is at most p(1−p)/k!, since p^{k−1}+(1−p)^{k−1}≤1.",
      "For |a|≤1, Σ_{k≥3}|a|^k/k!≤(e−5/2)a²<a²/2. Hence the expression is at most 1+p(1−p)a²≤exp(p(1−p)a²). With λ=α/(2σ), the condition λC<1 is αC<2σ and the resulting two-sided exponent is −α²/4."
    ],
    "followup": "How does reducing the allowed |a| improve the coefficient toward one half?",
    "deliverable": "A Taylor proof with a numerical remainder bound and the translated theorem parameters."
  },
  {
    "unit": "core-gradation",
    "slug": "parity-query-lower-bound",
    "tier": "examiner",
    "kind": "proof",
    "title": "A decision tree can be forced to inspect every bit",
    "prompt": "For parity Y=X_1⊕…⊕X_N under independent fair bits, prove that every deterministic exact decision tree queries all N distinct coordinates on every path. Compute its path variance budget using effects one and compare it with Var(Y). Explain why the adaptive theorem need not be sharp.",
    "prerequisites": [
      "gradations",
      "adaptive decision trees",
      "conditional variance",
      "bounded effects"
    ],
    "minutes": 55,
    "guide": [
      "If a leaf leaves one bit unread, two full assignments consistent with its answers and differing only at that bit have opposite parity. Therefore no such leaf determines Y exactly.",
      "Every path has N query contributions of 1/4, so σ²=N/4, whereas Y itself is a fair bit with variance 1/4. The query-variance proxy is an upper bound built from worst coordinate effects, not an identity for the output's variance."
    ],
    "followup": "Which argument fails if the algorithm may output a parity guess with a small error probability?",
    "deliverable": "A decision-tree lower bound and a sharp distinction between output variance and query budget."
  },
  {
    "unit": "core-gradation",
    "slug": "adaptive-addressing",
    "tier": "examiner",
    "kind": "construction",
    "title": "An addressing function with a short exact query strategy",
    "prompt": "Use ℓ fair selector bits to choose one of N=2^ℓ independent Bernoulli(p) data bits, and let Y be the selected bit. Show every coordinate has global effect at most one. Construct an exact query tree with maximum variance budget ℓ/4+p(1−p), and compare it with querying all coordinates.",
    "prerequisites": [
      "gradations",
      "adaptive decision trees",
      "conditional variance",
      "bounded effects"
    ],
    "minutes": 60,
    "guide": [
      "Read the selector first, then read exactly the selected data bit. The selector choices remain fair independent bits and the final data query has success probability p regardless of the address.",
      "The path budget is ℓ/4+p(1−p), compared with ℓ/4+Np(1−p) for reading all data. Repeating the construction on m independent blocks and summing outputs gives a nontrivial family with effect one and total budget m times the short-tree budget."
    ],
    "followup": "Why must the data bits be independent of the selector for the stated final-query variance?",
    "deliverable": "An explicit decision tree and two parameterized variance budgets."
  },
  {
    "unit": "core-gradation",
    "slug": "tree-mgf-induction",
    "tier": "research",
    "kind": "research-extension",
    "title": "A path-budget MGF proof without a fixed query count",
    "prompt": "Assume the local two-point MGF inequality with coefficient (1+ε)/2 for |a|≤δ. For an exact finite adaptive query tree with maximum effect C and every root-to-leaf variance sum at most v, prove E exp(λ(Y−E Y))≤exp((1+ε)λ²v/2) for |λ|C≤δ. Allow different tree depths.",
    "prerequisites": [
      "gradations",
      "adaptive decision trees",
      "conditional variance",
      "bounded effects"
    ],
    "minutes": 85,
    "guide": [
      "At a node querying bit i, write the two child means as μ+(1−p_i)b and μ−p_i b. Coupling the remaining independent variables identically proves |b|≤c_i.",
      "Both child subtrees have remaining path budget at most v−p_i(1−p_i)c_i². Apply induction to their centered MGFs and then the local two-point lemma to their mean shifts. Leaves have zero residual fluctuation, so unequal depths cause no difficulty."
    ],
    "followup": "How should the budget be defined if a strategy redundantly queries an already known coordinate?",
    "deliverable": "A complete induction with node means, residual budgets and leaf conditions."
  },
  {
    "unit": "core-gradation",
    "slug": "high-probability-budget-stopping",
    "tier": "research",
    "kind": "research-extension",
    "title": "Convert an exceptional query budget into an exceptional probability",
    "prompt": "Suppose an adaptive reveal martingale has increments bounded by C, predictable conditional variances V_N, and P(V_N>v)≤η. Using the conditional Bernstein MGF lemma as an explicit assumed input, prove a tail bound of the form η+2exp(−t²/[2(v+C²+Ct/3)]). Define a stopping rule and account for its variance overshoot.",
    "prerequisites": [
      "gradations",
      "adaptive decision trees",
      "conditional variance",
      "bounded effects"
    ],
    "minutes": 100,
    "guide": [
      "Stop just after the first step whose accumulated predictable variance exceeds v, or at termination. Each single conditional variance is at most C², so the stopped process has pathwise variance budget at most v+C².",
      "On the event V_N≤v the stopped and original processes coincide. Apply the two-sided Bernstein martingale bound to the stopped process and add the probability η of disagreement. This is a valid replacement for an expected-budget shortcut because the exceptional event is charged explicitly."
    ],
    "followup": "Can stopping immediately before an announced variance increment remove the C² overshoot?",
    "deliverable": "A stopped-martingale proof and a fully specified exceptional-event term."
  },
  {
    "unit": "core-gradation",
    "slug": "dependent-coordinate-coupling-failure",
    "tier": "doctoral",
    "kind": "counterexample",
    "title": "A small coordinate effect need not bound a dependent reveal",
    "prompt": "Let X_1=…=X_N=B for a fair bit B and define f(x)=N^−1Σ_i x_i on the full cube. Each single-coordinate replacement effect is 1/N. Compute the Doob martingale under the dependent law and show why the first increment violates the product-space coupling conclusion.",
    "prerequisites": [
      "gradations",
      "adaptive decision trees",
      "conditional variance",
      "bounded effects"
    ],
    "minutes": 45,
    "guide": [
      "The unconditional expectation is 1/2. Revealing X_1 reveals B and therefore f(X)=B completely, so the first martingale increment has absolute value 1/2 and all later increments vanish.",
      "The deterministic coordinate sensitivity is indeed 1/N on the ambient cube. But completions conditional on X_1=0 and X_1=1 differ in every remaining coordinate, so an identical-completion coupling is unavailable. Independence is the missing hypothesis."
    ],
    "followup": "Would revealing the entire dependent block at once restore a correct block-effect estimate?",
    "deliverable": "The explicit martingale and the precise failed coupling step."
  },
  {
    "unit": "core-gradation",
    "slug": "sparse-binomial-range",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Check the admissible variance-sensitive deviation scale",
    "prompt": "Let Y∼Bin(N,p_N), with p_N=N^−β and fixed 0<β<1. Apply the ε=δ=1 adaptive theorem with all bits queried to deviations t=√(Np_N)log N. Verify its side condition, compute the exponent scale, and compare with absolute-increment Azuma at the same t.",
    "prerequisites": [
      "gradations",
      "adaptive decision trees",
      "conditional variance",
      "bounded effects"
    ],
    "minutes": 60,
    "guide": [
      "Here C=1 and σ²=Np_N(1−p_N). The normalized deviation is α=t/σ≈log N. The side condition α<2σ holds because N^{(1−β)/2} dominates log N.",
      "The adaptive bound is at most 2exp(−Θ(log²N)). Absolute-increment Azuma gives exponent t²/(2N)=Θ(p_N log²N), which tends to zero and is uninformative after capping the probability at one. The improvement comes with a verified deviation range."
    ],
    "followup": "What happens if Np_N stays bounded instead?",
    "deliverable": "A parameter check and two explicitly compared tail exponents."
  },
  {
    "unit": "core-azuma-app",
    "slug": "nonuniform-weighted-empty-bins",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Weighted occupancy with nonuniform probabilities",
    "prompt": "Throw m independent balls into n bins with probabilities q_j. Let Z=Σ_j w_j1_{bin j empty}, with 0≤w_j≤W. Derive E Z, prove a replacement effect at most W rather than 2W, and establish nonpositive covariance between distinct empty-bin indicators.",
    "prerequisites": [
      "bounded differences",
      "occupancy models",
      "norm inequalities",
      "Hamming distance"
    ],
    "minutes": 40,
    "guide": [
      "The mean is Σ_j w_j(1−q_j)^m. Moving one ball can empty its old bin and fill its new bin; these contributions have opposite signs, so their net absolute change is at most max(w_old,w_new)≤W.",
      "For distinct bins i,j, joint emptiness has probability (1−q_i−q_j)^m≤[(1−q_i)(1−q_j)]^m. Hence Var Z≤Σ_j w_j²a_j(1−a_j), where a_j=(1−q_j)^m. This variance calculation and the bounded-difference tail are separate statements."
    ],
    "followup": "Which conclusion fails if ball destinations are perfectly correlated?",
    "deliverable": "A weighted sensitivity proof, exact mean and covariance-based variance bound."
  },
  {
    "unit": "core-azuma-app",
    "slug": "hilbert-signed-sum-center",
    "tier": "doctoral",
    "kind": "proof",
    "title": "A Hilbert-space center obtained from a second moment",
    "prompt": "Let v_i lie in a real Hilbert space and ε_i be independent fair signs. Prove E||Σ_i ε_i v_i||²=Σ_i||v_i||² and derive an upper tail above √(Σ_i||v_i||²). Explain when Jensen's bound for the mean is attained, using orthogonal and collinear examples.",
    "prerequisites": [
      "bounded differences",
      "occupancy models",
      "norm inequalities",
      "Hamming distance"
    ],
    "minutes": 45,
    "guide": [
      "All cross inner products vanish after expectation because E ε_i ε_j=0 for i≠j. Jensen gives E||Σ ε_i v_i||≤√Σ||v_i||².",
      "Replacing one sign changes the norm by at most 2||v_i||, and fair-sign centering halves the martingale effect to ||v_i||. Azuma gives an upper tail exp(−t²/[2Σ||v_i||²]) above the stated deterministic center. Orthogonal vectors make the norm constant and Jensen an equality; repeated collinear vectors generally do not."
    ],
    "followup": "Is orthogonality necessary for equality, or is almost-sure constancy of the norm the actual condition?",
    "deliverable": "A moment identity, a concentration statement and two contrasting geometries."
  },
  {
    "unit": "core-azuma-app",
    "slug": "weighted-biased-neighborhood",
    "tier": "examiner",
    "kind": "proof",
    "title": "Weighted neighborhood expansion under a biased cube law",
    "prompt": "Let independent biased bits carry product law μ, let a=μ(A)>0, and use weighted Hamming distance d_c with weights c_i>0 and V=Σc_i². Prove μ{d_c(X,A)>√(V ln(1/a)/2)+√(V ln(1/b)/2)}≤b for 0<b<1, using the range form of bounded differences.",
    "prerequisites": [
      "bounded differences",
      "occupancy models",
      "norm inequalities",
      "Hamming distance"
    ],
    "minutes": 50,
    "guide": [
      "The distance D to A changes by at most c_i when bit i changes. Thus P(D−E D≤−t) and P(D−E D≥t) are each at most exp(−2t²/V), regardless of the coordinate biases.",
      "Since P(D=0)=a, the lower-tail inequality implies E D≤√(V ln(1/a)/2). Apply the upper tail at √(V ln(1/b)/2). No uniform-counting interpretation is needed for the biased measure."
    ],
    "followup": "How should zero coordinate weights be treated when the distance becomes a pseudometric?",
    "deliverable": "A weighted expansion theorem with both quantile-to-mean and mean-to-tail steps."
  },
  {
    "unit": "core-azuma-app",
    "slug": "collision-count-sensitivity",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Collisions are much less Lipschitz than empty bins",
    "prompt": "For m independent uniform throws into n bins, let C=Σ_j C(N_j,2) count colliding pairs. Compute E C and the exact worst replacement effect m−1. Derive the resulting bounded-difference tail and explain why its fluctuation scale is poor when m=n.",
    "prerequisites": [
      "bounded differences",
      "occupancy models",
      "norm inequalities",
      "Hamming distance"
    ],
    "minutes": 55,
    "guide": [
      "Each pair of balls collides with probability 1/n, so E C=C(m,2)/n. Moving a ball from a bin of size a to another of size b changes C by b−(a−1), whose absolute value is at most m−1.",
      "The range-form denominator is m(m−1)², producing a scale m^{3/2}. When m=n, the mean is only Θ(n), and pair-indicator covariance calculations give variance Θ(n), so this worst-effect concentration is very coarse."
    ],
    "followup": "Verify that two distinct pair-collision indicators are pairwise independent even when the pairs share one ball.",
    "deliverable": "A mean and sensitivity calculation plus a variance-based diagnosis of looseness."
  },
  {
    "unit": "core-azuma-app",
    "slug": "biased-sign-norms",
    "tier": "examiner",
    "kind": "proof",
    "title": "Separate a variance-dependent center from a range-dependent tail",
    "prompt": "Let independent ε_i∈{−1,1} satisfy P(ε_i=1)=p_i and let v_i be Hilbert-space vectors. For Z=||Σ_i(ε_i−E ε_i)v_i||, derive a second-moment center and a valid bounded-difference tail. Explain why the tail denominator does not automatically become the second-moment denominator.",
    "prerequisites": [
      "bounded differences",
      "occupancy models",
      "norm inequalities",
      "Hamming distance"
    ],
    "minutes": 60,
    "guide": [
      "Independence and centering give E Z²=Σ_i4p_i(1−p_i)||v_i||². Jensen bounds E Z by the square root of this quantity.",
      "A sign replacement changes Z by at most 2||v_i||. The range-form inequality gives P(Z≥E Z+t)≤exp(−t²/[2Σ||v_i||²]). Replacing that denominator by Σ4p_i(1−p_i)||v_i||² needs a variance-sensitive theorem and its jump/deviation hypotheses."
    ],
    "followup": "Give a very rare, very large one-coordinate example demonstrating why the center calculation alone does not prove the sharper tail.",
    "deliverable": "A centered-vector second moment and a correctly parameterized concentration bound."
  },
  {
    "unit": "core-azuma-app",
    "slug": "occupancy-poissonization",
    "tier": "research",
    "kind": "research-extension",
    "title": "Poissonize empty bins and pay for conditioning back",
    "prompt": "Replace m uniform balls in n bins by independent Poisson(m/n) bin counts and let Z be the number empty. Derive a Chernoff bound using independent empty-bin indicators. Transfer it to exactly m balls by conditioning on the total count, explicitly paying the factor 1/P(Poisson(m)=m). Compare the two natural centers.",
    "prerequisites": [
      "bounded differences",
      "occupancy models",
      "norm inequalities",
      "Hamming distance"
    ],
    "minutes": 85,
    "guide": [
      "In the Poissonized model Z∼Bin(n,e^{−m/n}); standard MGF optimization gives its binomial tail. Conditional on the total m, the bin counts have the multinomial occupancy law, as follows by cancelling the factorial terms in their joint probability.",
      "For any event E, P(E|total=m)≤P(E)/P(total=m). Stirling's estimate, assumed or proved, makes the conditioning factor Θ(√m). The Poissonized center ne^{−m/n} differs from n(1−1/n)^m; bound this deterministic shift before asserting a tail about the exact fixed-m mean."
    ],
    "followup": "For m=n and deviations √(n log n), when does the exponential tail absorb the √m conditioning cost?",
    "deliverable": "A Poissonization identity, a conditioned tail and an explicit center-shift estimate."
  },
  {
    "unit": "core-azuma-app",
    "slug": "truncated-collision-extension",
    "tier": "research",
    "kind": "research-extension",
    "title": "A bounded-effect surrogate for collision count",
    "prompt": "For m=n uniform throws, define φ_L(0)=0 and φ_L(k)−φ_L(k−1)=min(k−1,L), and C_L=Σ_jφ_L(N_j). Prove replacement effect at most L, identify when C_L=C, and derive a tail for C around E C with an explicit occupancy-failure and expectation-shift term.",
    "prerequisites": [
      "bounded differences",
      "occupancy models",
      "norm inequalities",
      "Hamming distance"
    ],
    "minutes": 100,
    "guide": [
      "Moving a ball changes C_L by the difference of two increments in [0,L], so the effect is at most L. Since φ_L(k)=C(k,2) for k≤L+1, equality holds whenever every bin has load at most L+1.",
      "A union bound gives P(max N_j≥L+2)≤n[e/(L+2)]^{L+2}. Also 0≤E(C−C_L)≤C(n,2)P(max N_j≥L+2). Apply bounded differences to C_L with denominator nL² and add the bad-load probability and this deterministic center shift. Choose L to make both errors explicit."
    ],
    "followup": "What L of order log n/log log n makes the expectation shift negligible compared with √n L?",
    "deliverable": "A rigorous surrogate argument with all approximation errors displayed."
  },
  {
    "unit": "core-azuma-app",
    "slug": "isolated-vertex-concentration",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Isolated vertices: exact covariance and an edge effect",
    "prompt": "In G(n,p) let I count isolated vertices. Compute E I and Cov(1_{u isolated},1_{v isolated}) for u≠v. Prove edge replacement effect at most two and give a bounded-difference tail. Explain the covariance sign by comparing this model with empty bins from independent throws.",
    "prerequisites": [
      "bounded differences",
      "occupancy models",
      "norm inequalities",
      "Hamming distance"
    ],
    "minutes": 45,
    "guide": [
      "A vertex is isolated with probability a=(1−p)^{n−1}. Two vertices are both isolated when all 2n−3 incident edges are absent, so their covariance is (1−p)^{2n−3}−(1−p)^{2n−2}=p(1−p)^{2n−3}≥0.",
      "Changing one edge affects isolation only at its two endpoints, so the full replacement effect is at most two. Range-form bounded differences gives P(|I−E I|≥t)≤2exp(−t²/[2C(n,2)]). The positive covariance comes from the shared required-absent edge; occupancy emptiness had a different dependence mechanism."
    ],
    "followup": "Use the covariance formula to write Var I exactly and compare sparse p=c/n with the tail proxy.",
    "deliverable": "Exact first two moments and a correctly scaled edge-exposure bound."
  },
  {
    "unit": "core-azuma-app",
    "slug": "norm-geometry-counterexample",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "A Hilbert-space center cannot be used in every norm",
    "prompt": "Take v_i=e_i in R^n and independent fair signs. Compute ||Σ_i ε_i e_i|| in ℓ_1, ℓ_2 and ℓ_∞. Use the examples to refute a universal bound E||Σ ε_i v_i||≤√Σ||v_i||² in arbitrary normed spaces, while retaining valid sign-Lipschitz concentration.",
    "prerequisites": [
      "bounded differences",
      "occupancy models",
      "norm inequalities",
      "Hamming distance"
    ],
    "minutes": 60,
    "guide": [
      "Each e_i has norm one in all three spaces. The random sum has norms n, √n and one respectively, and these values are deterministic.",
      "Thus the proposed square-root center fails in ℓ_1 by a factor √n. The reverse triangle inequality still bounds sign replacement by 2||v_i|| in every normed space, so concentration about the actual mean remains valid even when a Hilbert second-moment identity is unavailable."
    ],
    "followup": "Why is a concentration inequality about a mean compatible with a very large deterministic mean?",
    "deliverable": "Three exact norm calculations and a separation of geometry from concentration."
  },
  {
    "unit": "core-talagrand",
    "slug": "threshold-family-distance",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Compute convex distance to a threshold family",
    "prompt": "Let A={y∈{0,1}^n:Σ_i y_i≥k} and let x have r<k ones. Prove d_T(x,A)²=(k−r)²/(n−r). Give an explicit convex combination attaining the minimum and a matching lower bound; handle r≥k separately.",
    "prerequisites": [
      "Talagrand convex distance",
      "convex hulls",
      "product measures"
    ],
    "minutes": 40,
    "guide": [
      "Any y∈A must turn at least k−r of x's zero coordinates into ones, regardless of any additional flips. Every convex mismatch vector therefore has total mass at least k−r on the n−r zero coordinates, so Cauchy–Schwarz gives squared norm at least (k−r)²/(n−r).",
      "Average uniformly over y obtained by adding exactly k−r of those zero coordinates and changing no existing ones. The resulting mismatch vector is (k−r)/(n−r) on the zeros and zero elsewhere, attaining the lower bound. For r≥k, x∈A and distance is zero."
    ],
    "followup": "Compare this formula with ordinary Hamming distance k−r.",
    "deliverable": "A primal convex witness and a matching norm lower bound."
  },
  {
    "unit": "core-talagrand",
    "slug": "product-distance-additivity",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Convex distance tensorizes on product target sets",
    "prompt": "For nonempty A⊆Ω_1×…×Ω_r and B⊆Ω_{r+1}×…×Ω_n, prove d_T((x,z),A×B)²=d_T(x,A)²+d_T(z,B)². Justify the convex-hull identity involved; do not assume independent random coordinates are needed for this geometric identity.",
    "prerequisites": [
      "Talagrand convex distance",
      "convex hulls",
      "product measures"
    ],
    "minutes": 45,
    "guide": [
      "The mismatch set for A×B is U_A(x)×U_B(z). Its convex hull equals conv U_A(x)×conv U_B(z): one inclusion is immediate, and the other follows by multiplying convex-combination coefficients.",
      "The squared Euclidean norm of a concatenated vector is the sum of squared norms, and the two factors can be minimized independently. Independence enters Talagrand's probability theorem, not this deterministic product-distance calculation."
    ],
    "followup": "Does an analogous exact formula hold for a union of target sets?",
    "deliverable": "A convex-hull identity and the resulting distance formula."
  },
  {
    "unit": "core-talagrand",
    "slug": "hamming-comparison-sharp",
    "tier": "examiner",
    "kind": "proof",
    "title": "Find the sharp elementary comparisons with Hamming distance",
    "prompt": "For nonempty A⊆{0,1}^n and h=d_H(x,A), prove h/√n≤d_T(x,A)≤√h. Give examples attaining each bound and explain why neither d_T=d_H nor d_T=√d_H is generally correct.",
    "prerequisites": [
      "Talagrand convex distance",
      "convex hulls",
      "product measures"
    ],
    "minutes": 50,
    "guide": [
      "Every mismatch vector has ℓ_1 norm at least h, so every convex combination does too. Cauchy–Schwarz gives its ℓ_2 norm at least h/√n. A nearest actual mismatch vector has exactly h ones and norm √h, proving the upper bound.",
      "For the lower bound take x=0 and A consisting of all h-element subsets; their symmetric average has all coordinates h/n. For the upper bound take A a singleton at Hamming distance h, so no convexification reduces the norm."
    ],
    "followup": "Can the lower bound improve when every mismatch is supported on a known coordinate set of size s<n?",
    "deliverable": "The two inequalities and explicit sharpness families."
  },
  {
    "unit": "core-talagrand",
    "slug": "dependent-two-atom-failure",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "A dependent law violates the exponential-integral inequality",
    "prompt": "Let X equal 0^n or 1^n with probability 1/2 each, and take A={0^n}. Compute μ(A)E exp(d_T(X,A)²/4) and determine the smallest integer n for which it exceeds one. Explain what remains true geometrically despite this failure.",
    "prerequisites": [
      "Talagrand convex distance",
      "convex hulls",
      "product measures"
    ],
    "minutes": 55,
    "guide": [
      "There is only one target, so d_T(0^n,A)=0 and d_T(1^n,A)=√n. The product in question is [1+e^{n/4}]/4.",
      "It exceeds one when n>4ln3, first at n=5. The mismatch convex hull and all deterministic distance comparisons remain valid, but the measure is not a product measure and the stated probabilistic inequality fails."
    ],
    "followup": "What does this example say about replacing independent coordinates by merely identical coordinate marginals?",
    "deliverable": "An exact numerical threshold and a clean geometric/probabilistic distinction."
  },
  {
    "unit": "core-talagrand",
    "slug": "weighted-halfspace-separation",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Separate two weighted-sum events by convex distance",
    "prompt": "For independent bits and weights w_i≥0, let S=Σ_iw_iX_i and A={S≤a}. Prove d_T(x,A)≥(S(x)−a)/||w||_2 when S(x)>a. Deduce P(S≤a)P(S≥a+t||w||_2)≤e^{−t²/4}, assuming Talagrand's inequality.",
    "prerequisites": [
      "Talagrand convex distance",
      "convex hulls",
      "product measures"
    ],
    "minutes": 60,
    "guide": [
      "For every y∈A, S(x)−a≤S(x)−S(y)≤Σ_i w_i1_{x_i≠y_i}. The same lower bound holds after convexifying mismatch vectors. Cauchy–Schwarz then gives the distance estimate.",
      "The high-sum event lies outside the convex-distance t-neighborhood of A. The Talagrand tail bound is at most e^{−t²/4}/P(A), giving the product inequality when P(A)>0; the zero-probability case is trivial."
    ],
    "followup": "How can signed weights be handled by changing coordinate order or using absolute values?",
    "deliverable": "A deterministic separation proof and the resulting two-event probability inequality."
  },
  {
    "unit": "core-talagrand",
    "slug": "certified-convex-distance-computation",
    "tier": "research",
    "kind": "research-extension",
    "title": "Compute convex distance with primal and dual certificates",
    "prompt": "For explicitly listed A⊆{0,1}^n, design a reproducible algorithm returning upper and lower certificates for d_T(x,A), with gap at most 10^−6 on test instances. Use a threshold family as an analytic baseline. State how rational convex coefficients and a normalized dual vector certify the two bounds.",
    "prerequisites": [
      "Talagrand convex distance",
      "convex hulls",
      "product measures"
    ],
    "minutes": 85,
    "guide": [
      "Minimize ||Uθ||² over θ≥0, Σθ=1, where columns of U are mismatch vectors. Any feasible θ gives an upper bound. Any vector α with ||α||_2≤1 gives a lower bound min_{y∈A}α·u(x,y), by convex separation or the dual distance formula.",
      "Numerical solver output alone is not a certificate: round θ, renormalize it and evaluate its norm with error control; scale a rational α conservatively to ensure norm at most one. Failure means the certified gap exceeds tolerance or the threshold-family baseline is missed, not merely that two floating outputs disagree."
    ],
    "followup": "How would an optimization oracle for A replace explicitly storing all mismatch columns?",
    "deliverable": "An algorithm, certified numerical bounds and a reproducible baseline report."
  },
  {
    "unit": "core-talagrand",
    "slug": "optimal-subcube-exponent",
    "tier": "research",
    "kind": "research-extension",
    "title": "Find the sharp exponent for product subcube targets",
    "prompt": "Let A fix an arbitrary set of binary coordinates to zero, under an independent product law with arbitrary biases. Determine the largest universal c for which μ(A)E exp(c d_T(X,A)²)≤1 holds for every such subcube and every dimension. Compare it with Talagrand's general exponent 1/4.",
    "prerequisites": [
      "Talagrand convex distance",
      "convex hulls",
      "product measures"
    ],
    "minutes": 100,
    "guide": [
      "For a fixed-to-zero coordinate with success probability p, squared convex distance contributes X_i and target mass contributes 1−p. Independence factors the expression into ∏_i(1−p_i)(1−p_i+p_i e^c).",
      "At c=ln2 each factor is 1−p_i²≤1. Conversely the one-coordinate factor is 1+p(e^c−2)+O(p²) as p↓0, so any c>ln2 fails. Thus ln2 is sharp for this target class; this does not establish that exponent for arbitrary target sets."
    ],
    "followup": "Show that fixing coordinates to one leads to the same sharp universal constant.",
    "deliverable": "A sharp restricted-class theorem with matching upper and lower parameter arguments."
  },
  {
    "unit": "core-talagrand",
    "slug": "union-convexification",
    "tier": "doctoral",
    "kind": "construction",
    "title": "A union can be closer than every individual target",
    "prompt": "Let x=000 and A_1={100}, A_2={010}, A_3={001}. Compute d_T(x,A_i) and d_T(x,A_1∪A_2∪A_3). Generalize to n singleton targets e_i and explain the difference from ordinary distance to a union.",
    "prerequisites": [
      "Talagrand convex distance",
      "convex hulls",
      "product measures"
    ],
    "minutes": 45,
    "guide": [
      "Each singleton target has its one mismatch vector e_i, of norm one. The union target has the simplex conv{e_1,e_2,e_3}; its minimum norm is attained at (1/3,1/3,1/3), giving 1/√3.",
      "In n dimensions every point of this simplex has coordinate sum one, so Cauchy–Schwarz gives minimum norm 1/√n, attained at the uniform vector. Ordinary Hamming distance to the union is still one: convexification mixes different nearest witnesses."
    ],
    "followup": "Which inequality between d_T(x,A∪B) and the two separate distances always holds?",
    "deliverable": "Exact distances and a proof for arbitrary dimension."
  },
  {
    "unit": "core-talagrand",
    "slug": "parity-target-distance",
    "tier": "examiner",
    "kind": "proof",
    "title": "Convex distance to a parity class",
    "prompt": "Let A be the even-parity class of {0,1}^n under the uniform product measure. Compute d_T(x,A) for x in and outside A. Evaluate E exp(d_T(X,A)²/4), and explain why a parity obstruction can have tiny convex distance even though it cannot be repaired without a coordinate change.",
    "prerequisites": [
      "Talagrand convex distance",
      "convex hulls",
      "product measures"
    ],
    "minutes": 60,
    "guide": [
      "For odd x, flipping any one bit reaches A, so all standard unit mismatch vectors belong to the mismatch set. Their average gives distance at most 1/√n.",
      "Every mismatch to an even-parity point has an odd positive number of ones, hence ℓ_1 norm at least one; convexification and Cauchy–Schwarz give the reverse bound. Half the cube has distance zero and half has squared distance 1/n, so the exponential moment is [1+e^{1/(4n)}]/2."
    ],
    "followup": "Compare this example with a fixed-coordinate subcube of measure one half.",
    "deliverable": "A distance formula, an exact exponential moment and a geometric interpretation."
  },
  {
    "unit": "core-certificate",
    "slug": "longest-increasing-subsequence",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Certify a long increasing subsequence",
    "prompt": "Let Z_1,…,Z_n be independent real random variables, with ties allowed, and let L be the longest strictly increasing subsequence length. Prove one-coordinate replacement effect one and b-coordinate certifiability of L≥b. Deduce P(L≤b−s)P(L≥b)≤exp(−s²/(4b)) for integer b≥1.",
    "prerequisites": [
      "Talagrand certificate inequality",
      "Lipschitz effects",
      "witnesses",
      "median conversion"
    ],
    "minutes": 40,
    "guide": [
      "Deleting the changed coordinate from an optimal increasing subsequence loses at most one element. Comparing in both directions proves the replacement effect, regardless of ties or whether the optimizer changes completely.",
      "A specified increasing subsequence of b indices and their actual values remains increasing when all other coordinates change. It is a b-coordinate certificate. Substitute f(b)=b and t=s/√b in the certificate theorem; do not assume a formula for E L."
    ],
    "followup": "Would the same proof work for the longest nondecreasing subsequence?",
    "deliverable": "A complete effect and certificate verification and a two-event lower-tail inequality."
  },
  {
    "unit": "core-certificate",
    "slug": "fixed-pattern-edge-packings",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Certify a maximum disjoint-pattern packing",
    "prompt": "Let H be a fixed graph with h≥1 edges and no isolated vertices. In a graph with independent edge indicators, let Y be the largest number of edge-disjoint H-copies. Prove replacement effect one and a certificate of at most hb coordinates for Y≥b, then derive its median-centered lower tail.",
    "prerequisites": [
      "Talagrand certificate inequality",
      "Lipschitz effects",
      "witnesses",
      "median conversion"
    ],
    "minutes": 45,
    "guide": [
      "Removing one edge destroys at most one copy in an optimal edge-disjoint packing, even though it may destroy many nonpacked copies. This proves effect one for the optimum packing statistic.",
      "A packing of b copies uses exactly hb present edges and certifies Y≥b. For an integer median m≥1, P(Y≥m)≥1/2 and the theorem gives P(Y≤m−s)≤2exp(−s²/(4hm)). The theorem applies to this packing, not to the raw number of H-copies."
    ],
    "followup": "How would vertex-disjoint packing change the natural coordinate model and certificate size?",
    "deliverable": "An exchange argument, a witness count and an explicit median tail."
  },
  {
    "unit": "core-certificate",
    "slug": "weighted-matching-certificates",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "A weighted matching needs both an effect and a witness bound",
    "prompt": "In a fixed graph, each edge is independently available and has deterministic weight in [a,W], where 0<a≤W. Let X be the maximum available matching weight. Prove replacement effect W and for every b>0 a certificate for X≥b using at most min(⌊|V|/2⌋,⌈b/a⌉) present edges. Write the resulting two-event tail with its W factor.",
    "prerequisites": [
      "Talagrand certificate inequality",
      "Lipschitz effects",
      "witnesses",
      "median conversion"
    ],
    "minutes": 50,
    "guide": [
      "Delete a changed edge from an optimal matching to lose at most W. To certify a value at least b, take edges from a witness matching until their total first reaches b; the number selected is at most ⌈b/a⌉ and never exceeds the matching size bound.",
      "For sensitivity W, scale X by W or use the scaled certificate inequality directly. With f(b)=min(⌊|V|/2⌋,⌈b/a⌉), the bound is P(X≤b−s)P(X≥b)≤exp(−s²/[4W²f(b)]), for a nonzero certificate bound."
    ],
    "followup": "What survives if no positive lower bound a on weights is available?",
    "deliverable": "Effect and certificate proofs and a dimensionally correct weighted tail."
  },
  {
    "unit": "core-certificate",
    "slug": "median-to-expectation-certificates",
    "tier": "examiner",
    "kind": "proof",
    "title": "Convert a median tail without silently changing centers",
    "prompt": "Let X be a nonnegative integer statistic with effect one and certificate bound f(b)≤rb for integers b≥1, r≥1. Starting from the two-event certificate inequality, derive upper and lower tails about an integer median m≥1 and prove |E X−m|≤C(√(rm)+r) for an absolute constant C.",
    "prerequisites": [
      "Talagrand certificate inequality",
      "Lipschitz effects",
      "witnesses",
      "median conversion"
    ],
    "minutes": 55,
    "guide": [
      "For the lower tail use high threshold m: P(X≤m−s)≤2e^{−s²/(4rm)}. For the upper tail put b=m+s and low threshold m, giving P(X≥m+s)≤2e^{−s²/[4r(m+s)]}, with integer rounding handled explicitly.",
      "Integrate or sum the tails. For s≤m bound m+s≤2m to get a Gaussian integral of order √(rm); for s>m use m+s≤2s to get an exponential tail of scale r. Enlarging constants handles lattice endpoints. This extra argument is what permits replacing a median by the mean."
    ],
    "followup": "How would an additive certificate term f(b)≤r(b+c) alter the conversion?",
    "deliverable": "Both one-sided tails and a justified mean–median estimate with a stated constant."
  },
  {
    "unit": "core-certificate",
    "slug": "independence-number-nonedges",
    "tier": "examiner",
    "kind": "proof",
    "title": "An independent set certifies absent edges",
    "prompt": "For G(n,p), let α be the largest independent-set size. Prove edge replacement effect one, determine a valid certificate size for α≥b, and derive the certificate tail scale. Explain why listing only the b selected vertices is not a b-coordinate certificate in the independent-edge product space.",
    "prerequisites": [
      "Talagrand certificate inequality",
      "Lipschitz effects",
      "witnesses",
      "median conversion"
    ],
    "minutes": 60,
    "guide": [
      "Changing one edge can destroy at most one vertex from an independent set, so the optimum changes by at most one. An independent set on b vertices is certified by the absence of all C(b,2) internal edge coordinates.",
      "Thus f(b)=C(b,2) is valid, yielding P(α≤b−s)P(α≥b)≤exp(−s²/[4C(b,2)]) for b≥2. The typical deviation scale supplied by this certificate is order b, not √b. Coordinates are random edges; vertex labels alone reveal none of their required nonedges."
    ],
    "followup": "Make the analogous calculation for clique number and compare the witness type.",
    "deliverable": "A certificate audit and the resulting scale, including the trivial b≤1 cases."
  },
  {
    "unit": "core-certificate",
    "slug": "random-coverage-budget",
    "tier": "research",
    "kind": "research-extension",
    "title": "A budgeted coverage optimum is certifiable",
    "prompt": "Fix integers k,L,b≥1 and subsets S_1,…,S_m of a universe, each of size at most L, and independently activate them. Let X be the maximum number of elements covered by at most k active sets. Prove effect L and a certificate using at most min(k,b) coordinates for X≥b, then compare the bound with disjoint equal-size sets as a benchmark.",
    "prerequisites": [
      "Talagrand certificate inequality",
      "Lipschitz effects",
      "witnesses",
      "median conversion"
    ],
    "minutes": 85,
    "guide": [
      "Deactivating one chosen set removes at most L covered elements. From any cover witnessing at least b elements, discard redundant sets or add useful sets until b elements are reached; at most b sets are needed because each useful addition contributes at least one new element, and never more than k are used.",
      "The two-event bound is exp(−s²/[4L²min(k,b)]) for a deficit s below b. For m disjoint L-element sets, X=L min(B,k), where B is the number active. This benchmark permits exact binomial tails and exposes when the generic certificate bound loses constants or saturation information."
    ],
    "followup": "How do arbitrary overlaps alter the certificate argument, and which part of the benchmark no longer applies?",
    "deliverable": "A certifiability theorem and a quantitative disjoint-set comparison."
  },
  {
    "unit": "core-certificate",
    "slug": "thinning-disjoint-witnesses",
    "tier": "research",
    "kind": "research-extension",
    "title": "Independent thinning yields a stronger conditional benchmark",
    "prompt": "A deterministic host graph contains an edge-disjoint packing of b copies of a fixed h-edge graph H. Retain each host edge independently with probability p. Prove that the surviving optimum packing stochastically dominates Bin(b,p^h), derive a Chernoff lower tail, and compare it with the generic hb-coordinate certificate scale.",
    "prerequisites": [
      "Talagrand certificate inequality",
      "Lipschitz effects",
      "witnesses",
      "median conversion"
    ],
    "minutes": 100,
    "guide": [
      "Each of the b fixed copies survives exactly when its h edges survive. Their edge sets are disjoint, so these survival indicators are independent Bernoulli(p^h). All surviving fixed copies form an available packing.",
      "Hence P(Y≤(1−δ)bp^h)≤exp(−δ²bp^h/2) for 0<δ<1. This bound is centered at a certified lower benchmark bp^h, rather than the unknown median of the optimum. It cannot be transferred to overlapping witness copies by claiming their survival indicators are independent."
    ],
    "followup": "Construct a host where many overlapping copies give a misleading independent-binomial prediction.",
    "deliverable": "A stochastic-domination proof and a clear comparison of centers and exponents."
  },
  {
    "unit": "core-certificate",
    "slug": "short-certificates-large-effects",
    "tier": "doctoral",
    "kind": "counterexample",
    "title": "Short witnesses do not imply small replacement effects",
    "prompt": "For n=2r+1 independent bits, let R be the longest consecutive run of ones. Show that R≥b has a b-coordinate certificate but that R does not have replacement effect one. Give two strings differing in a single bit with a change of r+1, and state a valid global effect bound.",
    "prerequisites": [
      "Talagrand certificate inequality",
      "Lipschitz effects",
      "witnesses",
      "median conversion"
    ],
    "minutes": 45,
    "guide": [
      "Fixing b consecutive one coordinates certifies a run of length at least b. But the string 1^r 0 1^r has longest run r, while changing its middle bit gives a run of length 2r+1, a change r+1.",
      "A changed zero can merge the runs on its two sides. The improvement is at most min(left,right)+1≤⌈n/2⌉; the same bound follows for deletion by symmetry. Certifiability alone therefore does not justify the effect-one form of the theorem."
    ],
    "followup": "Does the longest increasing subsequence have the same merging problem? Identify the exchange argument that prevents it.",
    "deliverable": "A sharp one-bit sensitivity example and a valid certificate/effect pair."
  },
  {
    "unit": "core-certificate",
    "slug": "distinct-bin-certification",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Use occupied-bin witnesses when balls greatly outnumber bins",
    "prompt": "Throw m independent balls into n bins with arbitrary destination probabilities and let D count occupied bins. Prove effect one and b-coordinate certifiability of D≥b. Derive a median lower-tail bound at scale √n, and compare it with the √m scale from exposing every ball by Azuma.",
    "prerequisites": [
      "Talagrand certificate inequality",
      "Lipschitz effects",
      "witnesses",
      "median conversion"
    ],
    "minutes": 60,
    "guide": [
      "One moved ball can empty its old bin and fill a new bin, with opposite contributions, so the number of occupied bins changes by at most one. One representative ball from each of b distinct bins certifies D≥b.",
      "An integer median q satisfies q≤n, and the certificate theorem gives P(D≤q−s)≤2e^{−s²/(4q)}≤2e^{−s²/(4n)}. When m≫n this can improve the full ball-exposure scale √m. It remains a median-centered statement until a conversion argument is supplied."
    ],
    "followup": "How does a highly nonuniform destination law change the median while leaving the certificate argument intact?",
    "deliverable": "An occupancy certificate proof and a comparison of concentration scales."
  },
  {
    "unit": "core-kim-vu",
    "slug": "four-cycle-derivative-profile",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Compute the full C4 derivative profile",
    "prompt": "Let X count unordered four-cycles in G(n,p), n≥4. Compute E X and expected derivatives for one edge, two adjacent edges, two disjoint edges, a three-edge path, and a full four-cycle. Identify incompatible partial edge sets and obtain E' up to absolute constants.",
    "prerequisites": [
      "multilinear polynomials",
      "derivative expectations",
      "Kim–Vu theorem",
      "random subgraph counts"
    ],
    "minutes": 40,
    "guide": [
      "There are 3C(n,4) four-cycles. A fixed edge lies in (n−2)(n−3) cycles; two adjacent edges lie in n−3 cycles; two disjoint edges occur as opposite edges in two cycles. Multiply by p to the number of missing cycle edges.",
      "Thus the listed expectations are 3C(n,4)p^4, (n−2)(n−3)p³, (n−3)p², 2p², p and one. Three edges must form a path, and four must form a cycle. For large n, E'=Θ(max(n²p³,1)), retaining the highest derivative even when p is tiny."
    ],
    "followup": "Which derivative controls E' when p=n^−α with α above or below 2/3?",
    "deliverable": "A complete derivative table and a justified maximum."
  },
  {
    "unit": "core-kim-vu",
    "slug": "three-star-profile",
    "tier": "doctoral",
    "kind": "proof",
    "title": "A count dominated by degree fluctuations",
    "prompt": "Let Y=Σ_v C(d(v),3), counting three-edge stars in G(n,p). Derive the mean and all nonzero derivative-expectation types through order three. Compare E' with the triangle-count profile, and explain the role of the common center.",
    "prerequisites": [
      "multilinear polynomials",
      "derivative expectations",
      "Kim–Vu theorem",
      "random subgraph counts"
    ],
    "minutes": 45,
    "guide": [
      "The mean is nC(n−1,3)p³. For a fixed edge either endpoint can be the center, giving E_1=2C(n−2,2)p². Two adjacent fixed edges have a forced common center and n−3 choices for the remaining leaf, giving (n−3)p.",
      "Two disjoint edges cannot lie in one three-star. A third derivative is one exactly when the fixed three edges form a star. Thus E'=Θ(max(n²p²,np,1)). This profile records the large influence of high-degree centers rather than treating star indicators as independent."
    ],
    "followup": "How does the profile change for stars with a fixed designated center?",
    "deliverable": "An exact table, incompatible cases and a comparison of dependence mechanisms."
  },
  {
    "unit": "core-kim-vu",
    "slug": "rare-gate-large-mean",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "A diverging mean can coexist with almost certain zero",
    "prompt": "Let Z∼Bernoulli(ε), X_i∼Bernoulli(p) independently, and Y=ZΣ_{i=1}^N X_i. Compute its mean and derivative expectations. Choose ε→0 and N so that E Y→∞ but P(Y=0)→1, and explain how E' diagnoses the failure of relative concentration.",
    "prerequisites": [
      "multilinear polynomials",
      "derivative expectations",
      "Kim–Vu theorem",
      "random subgraph counts"
    ],
    "minutes": 50,
    "guide": [
      "Here μ=εNp, the Z derivative has expectation Np, each X_i derivative has expectation ε, and each mixed derivative ∂_Z∂_{X_i}Y equals one. Therefore E'=max(Np,ε,1).",
      "Take fixed p=1/2, ε=N^−1/2. Then μ=√N/2 diverges but Y=0 with probability at least 1−N^−1/2. The derivative in the rare gate is much larger than the mean, so the Kim–Vu scale does not falsely promise concentration from μ alone."
    ],
    "followup": "What changes if ε is fixed away from zero while N grows?",
    "deliverable": "An explicit asymptotic counterexample and its derivative diagnosis."
  },
  {
    "unit": "core-kim-vu",
    "slug": "polynomial-variable-count",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Keep graph vertices distinct from polynomial variables",
    "prompt": "Assume the Kim–Vu bound P(|Y−μ|>a_k√(EE')λ^k)≤d_ke^−λ N^{k−1}, where N is the number of independent variables. For triangle count in G(n,p), choose λ so the probability is at most n^−D for fixed D>0. State a sufficient derivative-ratio condition for relative error o(1).",
    "prerequisites": [
      "multilinear polynomials",
      "derivative expectations",
      "Kim–Vu theorem",
      "random subgraph counts"
    ],
    "minutes": 55,
    "guide": [
      "The independent variables are potential edges, so N=C(n,2), not n. Since k=3, the polynomial prefactor is N²=O(n^4). Taking λ=(D+5)ln n plus a fixed constant absorbing d_3 makes the tail at most n^−D for large n.",
      "When μ≥E', the relative threshold is a_3λ³√(E'/μ). Thus μ/E'≫log^6 n is sufficient for relative concentration at this failure level. All constants depend on fixed degree and D; the Kim–Vu inequality itself is assumed as the deep input."
    ],
    "followup": "What λ is needed for a simultaneous statement over n rooted triangle counts?",
    "deliverable": "A correct variable count, a failure-budget choice and an explicit relative-error criterion."
  },
  {
    "unit": "core-kim-vu",
    "slug": "multilinearize-before-differentiating",
    "tier": "examiner",
    "kind": "proof",
    "title": "The Boolean polynomial must be multilinearized",
    "prompt": "For independent Bernoulli(p) variables X_i, consider Y=(Σ_i X_i)². Express the same Boolean function as a multilinear nonnegative polynomial, compute μ,E_1,E_2, and compare with formally differentiating the unmultilinearized square. Explain which derivative profile belongs in Kim–Vu.",
    "prerequisites": [
      "multilinear polynomials",
      "derivative expectations",
      "Kim–Vu theorem",
      "random subgraph counts"
    ],
    "minutes": 60,
    "guide": [
      "On the Boolean cube X_i²=X_i, so Y=Σ_i X_i+2Σ_{i<j}X_iX_j. Hence μ=Np+N(N−1)p², E_1=1+2(N−1)p and E_2=2.",
      "Differentiating the original algebraic square yields 2Σ X_i and expectation 2Np, a different expression because ordinary differentiation does not preserve equality restricted to {0,1}^N. Kim–Vu's hyperedge/partial-derivative definition uses the squarefree representation of the random statistic."
    ],
    "followup": "Prove uniqueness of a multilinear representation of a Boolean-cube function by induction on N.",
    "deliverable": "A squarefree expansion and the correct derivative parameters."
  },
  {
    "unit": "core-kim-vu",
    "slug": "uniform-rooted-counts",
    "tier": "research",
    "kind": "research-extension",
    "title": "Make rooted triangle concentration simultaneous",
    "prompt": "For each vertex x of G(n,n^−α), let Y_x count triangles containing x, with fixed 0<α<2/3. Compute μ and E' for Y_x and use the stated Kim–Vu theorem to prove max_x|Y_x/μ−1|→0 in probability. Choose λ explicitly and include the union bound over roots.",
    "prerequisites": [
      "multilinear polynomials",
      "derivative expectations",
      "Kim–Vu theorem",
      "random subgraph counts"
    ],
    "minutes": 85,
    "guide": [
      "The mean is C(n−1,2)p³. A derivative in an edge incident to x has expectation (n−2)p²; a derivative in an edge not incident to x has expectation p². Nonempty higher derivatives include the value one, giving E'=Θ(max(np²,1)).",
      "The ratio μ/E' has polynomial order min(np,n²p³), which diverges polynomially throughout α<2/3. Set λ=C log n with C>6. The relative threshold O(log³n√(E'/μ)) tends to zero, while n·O(n^4e^−λ) tends to zero. No independence between different roots is required."
    ],
    "followup": "Why does the calculation stop giving relative concentration at α=2/3?",
    "deliverable": "A rooted derivative audit and a simultaneous concentration proof with all factors counted."
  },
  {
    "unit": "core-kim-vu",
    "slug": "fixed-graph-density-criterion",
    "tier": "research",
    "kind": "research-extension",
    "title": "A general derivative criterion for a fixed graph",
    "prompt": "Let H be a fixed simple graph with v vertices, e≥1 edges and no isolated vertices. For its unlabeled-copy count in G(n,p), show up to H-dependent constants that μ/E' is the minimum of n^{v(F)}p^{e(F)} over nonempty edge-subgraphs F⊆H, where v(F) counts incident vertices. Deduce a sufficient Kim–Vu relative-concentration criterion and identify its density threshold for p=n^−α.",
    "prerequisites": [
      "multilinear polynomials",
      "derivative expectations",
      "Kim–Vu theorem",
      "random subgraph counts"
    ],
    "minutes": 100,
    "guide": [
      "Fixing a derivative edge set isomorphic to F leaves O_H(n^{v−v(F)}) completions and e−e(F) independent edges. Conversely every compatible fixed F has Θ_H of that many completions for n sufficiently large; multiple embeddings contribute only H-dependent constants.",
      "Since μ=Θ_H(n^v p^e), divide by the largest nonempty derivative expectation to obtain the minimum ratio. Requiring every such n^{v(F)}p^{e(F)}≫log^{2e}n suffices with λ=C log n. For a fixed power p=n^−α this holds when α<min_F v(F)/e(F); this is a sufficient theorem-derived threshold, not a claim of necessity for every concentration notion."
    ],
    "followup": "Evaluate the criterion for triangles, four-cycles and a graph with a dense core plus a pendant edge.",
    "deliverable": "A general derivative comparison and three explicit density calculations."
  },
  {
    "unit": "core-kim-vu",
    "slug": "rooted-one-edge-completions",
    "tier": "doctoral",
    "kind": "proof",
    "title": "A simple polynomial whose highest derivative cannot be omitted",
    "prompt": "Let Y count length-two paths from a fixed root x with distinct remaining vertices in G(n,p), counting each unordered edge set once. Compute μ and the first- and second-derivative expectation types. Determine when μ/E' diverges for p=n^−α, and compare the result with rooted triangle counts.",
    "prerequisites": [
      "multilinear polynomials",
      "derivative expectations",
      "Kim–Vu theorem",
      "random subgraph counts"
    ],
    "minutes": 45,
    "guide": [
      "A path may have x as an endpoint or as its center if 'from a root' is ambiguous; fix the endpoint convention explicitly. With endpoint x, choose its neighbor u and then v≠x,u, giving μ=(n−1)(n−2)p².",
      "For an edge xu, there are n−2 completions and derivative expectation (n−2)p. For an edge uv not incident to x, either endpoint can be the middle vertex, giving 2p. A compatible two-edge path derivative is one. Thus E'=Θ(max(np,1)) and μ/E' diverges polynomially for α<1."
    ],
    "followup": "Repeat the calculation when x is required to be the center, and identify the constant-factor changes.",
    "deliverable": "An unambiguous path convention, derivative table and power-law regime."
  },
  {
    "unit": "core-kim-vu",
    "slug": "nonnegative-value-negative-coefficients",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "Nonnegative values are not the coefficient hypothesis",
    "prompt": "Consider Y=X_1+X_2−2X_1X_2 on two independent Bernoulli bits. Verify Y≥0 pointwise, compute its multilinear coefficients and derivative expectations, and explain why the stated nonnegative-coefficient Kim–Vu theorem does not apply. Show that adding a constant cannot repair the offending coefficient.",
    "prerequisites": [
      "multilinear polynomials",
      "derivative expectations",
      "Kim–Vu theorem",
      "random subgraph counts"
    ],
    "minutes": 60,
    "guide": [
      "The values are zero at 00 and 11 and one at 01 and 10, so Y is a nonnegative indicator. Its unique multilinear coefficient of X_1X_2 is −2.",
      "The expected first derivatives are 1−2p and the second derivative is −2. The theorem's E_i are built from nonnegative monomial weights, a structure absent here. A constant shift changes only the empty monomial and leaves the negative degree-two coefficient untouched."
    ],
    "followup": "Can a different representation using additional independent coordinates be asserted without constructing it?",
    "deliverable": "A four-state table and a precise hypothesis failure, without claiming the statistic is unconcentrated."
  },
  {
    "unit": "core-shannon",
    "slug": "entropy-converse-bsc",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Prove the BSC rate converse with an error indicator",
    "prompt": "A uniform message M from a codebook of size 2^{nR} is sent through BSC(p), and a decoder has average error P_e. Prove nR≤n[1−H_2(p)]+1+P_e nR. Derive the asymptotic converse for P_e→0, proving the needed conditional-entropy estimate rather than invoking capacity as a black box.",
    "prerequisites": [
      "binary entropy",
      "random coding",
      "channel noise",
      "linear codes"
    ],
    "minutes": 40,
    "guide": [
      "With output Y, H(Y)≤n and H(Y|M)=nH_2(p), so I(M;Y)≤n[1−H_2(p)]. Let E indicate decoding error; conditioning on E gives H(M|Y)≤H(E)+P_e log_2|C|≤1+P_e nR.",
      "Use H(M)=I(M;Y)+H(M|Y). If P_e→0 and rates remain finite, the inequality forces limsup R≤1−H_2(p). This complements random-coding achievability and specifies the average-message error convention."
    ],
    "followup": "How does the estimate improve if, on error, only |C|−1 alternatives are possible?",
    "deliverable": "A self-contained information-theoretic converse and the limiting quantifiers."
  },
  {
    "unit": "core-shannon",
    "slug": "random-parity-check-code",
    "tier": "doctoral",
    "kind": "construction",
    "title": "Achievability from a random parity-check matrix",
    "prompt": "Choose an m×n binary matrix H with independent fair entries and use code ker H. For BSC(p), decode by selecting a noise vector of weight at most t with the observed syndrome, rejecting ambiguities. Prove an ensemble error bound P(weight noise>t)+Vol(n,t)2^−m and a rate lower bound 1−m/n.",
    "prerequisites": [
      "binary entropy",
      "random coding",
      "channel noise",
      "linear codes"
    ],
    "minutes": 45,
    "guide": [
      "For any distinct noise vectors z,z', their difference is nonzero, and a random row has dot product zero with it with probability 1/2. Thus P_H(Hz=Hz')=2^−m. Union-bound over competing low-weight noise vectors for each actual typical z.",
      "The kernel dimension is n−rank H≥n−m even if H is rank deficient. Choose t=(p+δ)n and m/n>H_2(p+δ). The averaged noise-decoding error tends to zero, so some matrix works; linear translation symmetry makes this decoder's error the same for every transmitted codeword."
    ],
    "followup": "Why does a rank-deficient matrix not invalidate either the collision probability or the rate lower bound?",
    "deliverable": "A linear-code construction, a syndrome-collision bound and a complete rate calculation."
  },
  {
    "unit": "core-shannon",
    "slug": "expurgate-average-error",
    "tier": "examiner",
    "kind": "proof",
    "title": "Turn average-message reliability into maximum-message reliability",
    "prompt": "Suppose a length-n code has M messages and average decoding error at most ε_n. Show there is a subcode of at least M/2 messages with maximum error at most 2ε_n. Define the subcode decoder carefully and calculate the rate loss. Explain why this does not convert random-noise reliability into worst-case error correction.",
    "prerequisites": [
      "binary entropy",
      "random coding",
      "channel noise",
      "linear codes"
    ],
    "minutes": 50,
    "guide": [
      "At least half the messages have individual error at most 2ε_n by Markov's inequality. Retain those messages. Use the old decoder when it outputs a retained message, and otherwise output any fixed retained message or declare failure.",
      "For a retained transmitted message, every formerly correct output remains correct; reassigning discarded outputs cannot increase error. The subcode rate decreases by at most 1/n. The bound still averages over channel noise for each message and imposes no minimum-distance guarantee."
    ],
    "followup": "How does retaining a 1−θ fraction trade rate loss against the maximum-error multiplier?",
    "deliverable": "A decoder construction and a rate/error tradeoff valid for every n."
  },
  {
    "unit": "core-shannon",
    "slug": "finite-blocklength-union-bound",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "A finite numerical random-coding guarantee",
    "prompt": "For BSC(p) with 0<p<1/2 and rate R<1−H_2(p), derive the bound 2e^{−2δ²n}+2^{−n[1−R−H_2(p+δ)]} for an appropriate typical-ball decoder, with 0<δ<1/2−p. For p=0.1,R=0.4 choose δ explicitly and give an n sufficient for error at most 10^−3.",
    "prerequisites": [
      "binary entropy",
      "random coding",
      "channel noise",
      "linear codes"
    ],
    "minutes": 55,
    "guide": [
      "Hoeffding bounds atypical noise weight by at most 2e^{−2δ²n}; a one-sided version can improve the factor. The Hamming-ball inequality Vol(n,(p+δ)n)≤2^{nH_2(p+δ)} controls confusion with other random codewords.",
      "Choose, for example, δ=0.02 and evaluate g=1−0.4−H_2(0.12)>0. It is sufficient to take n at least max{ln(4000)/(2δ²),log_2(2000)/g}, with integer radius rounding absorbed by choosing t=⌊(p+δ)n⌋ and keeping the entropy upper bound."
    ],
    "followup": "How would you optimize δ numerically, and which term dominates for the displayed conservative choice?",
    "deliverable": "A finite error bound, a computed entropy gap and a reproducible blocklength calculation."
  },
  {
    "unit": "core-shannon",
    "slug": "binary-erasure-variant",
    "tier": "examiner",
    "kind": "construction",
    "title": "Repeat the argument for an erasure channel",
    "prompt": "Each transmitted bit is independently erased with probability e∈(0,1), and the receiver knows the erased positions. Use a random k×n generator matrix to show reliable transmission at every rate k/n<1−e. Bound the probability that the unerased columns fail to determine the message without assuming full matrix rank.",
    "prerequisites": [
      "binary entropy",
      "random coding",
      "channel noise",
      "linear codes"
    ],
    "minutes": 60,
    "guide": [
      "Condition on m unerased coordinates. For any fixed nonzero message difference, its image in those m random columns is all zero with probability 2^−m. A union bound over fewer than 2^k differences bounds rank failure by 2^{k−m}.",
      "With high probability m≥(1−e−δ)n. If k≤(1−e−2δ)n, the conditional failure probability is at most 2^{−δn}; add the binomial atypical-erasure probability. This argument itself also ensures injective encoding for a good matrix, because a message difference invisible everywhere is invisible on every unerased set."
    ],
    "followup": "Why is the entropy penalty H_2(p) for bit flips replaced here by the erasure fraction e?",
    "deliverable": "A complete random-linear-code proof with separate noise and rank-failure events."
  },
  {
    "unit": "core-shannon",
    "slug": "mismatched-radius-investigation",
    "tier": "research",
    "kind": "research-extension",
    "title": "Investigate a decoder with the wrong noise radius",
    "prompt": "For BSC(p), consider random codebooks and a decoder accepting a unique codeword within radius qn, with fixed q∈(0,1/2). Derive a rigorous guarantee when q>p and R<1−H_2(q). Show why q<p makes the transmitted word absent from the candidate list with probability tending to one. Propose a small exact experiment with a stated baseline and failure criterion.",
    "prerequisites": [
      "binary entropy",
      "random coding",
      "channel noise",
      "linear codes"
    ],
    "minutes": 85,
    "guide": [
      "For q>p, use the same typical-noise plus confusion decomposition, now with q controlling both the noise tail and ball volume. A positive exponent requires the stated rate inequality; failure of this sufficient inequality is not itself a theorem that every such decoder fails.",
      "For q<p, the law of large numbers makes P(weight noise≤qn) tend to zero, so the prescribed candidate-list decoder cannot output the transmitted word except on that rare event. For n≤16 enumerate all noise vectors with exact BSC weights and compare observed errors to the proven bound for seeded random codebooks."
    ],
    "followup": "What changes at q=p, where the typical-noise event no longer has probability tending to one?",
    "deliverable": "A two-regime theorem and a reproducible finite-channel audit plan."
  },
  {
    "unit": "core-shannon",
    "slug": "random-covering-duality",
    "tier": "research",
    "kind": "research-extension",
    "title": "A covering version of the random-code calculation",
    "prompt": "For D∈(0,1/2), choose M uniform independent centers in {0,1}^n. Prove that the expected fraction of strings farther than Dn from every center is at most exp(−M Vol(n,⌊Dn⌋)/2^n). Using a standard Stirling estimate as an explicit input, show rates above 1−H_2(D) permit vanishing uncovered fraction. Compare the quantifiers with channel coding.",
    "prerequisites": [
      "binary entropy",
      "random coding",
      "channel noise",
      "linear codes"
    ],
    "minutes": 100,
    "guide": [
      "For each fixed source string, a uniform center covers it with probability V/2^n. Independence of centers makes its uncovered probability (1−V/2^n)^M≤e^{−MV/2^n}; average over all source strings.",
      "Stirling gives V≥2^{nH_2(D)−O(log n)}. With M=2^{nR} and R>1−H_2(D), the expected uncovered fraction tends to zero, hence some center set works. This is an average source-covering guarantee; it neither requires disjoint balls nor corrects adversarial channel errors."
    ],
    "followup": "What extra logarithmic factor in M would ensure every source string is covered by a union bound?",
    "deliverable": "A random covering theorem, its entropy threshold and an all-strings extension."
  },
  {
    "unit": "core-shannon",
    "slug": "puncturing-and-shortening",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Two concrete code transformations have different guarantees",
    "prompt": "Let C⊆{0,1}^n have size M and minimum distance d. Delete t fixed coordinates to puncture the code, assuming t<d; prove size is preserved and distance is at least d−t. Separately, fix a common value on t coordinates and shorten: prove a subcode of size at least M/2^t and distance at least d remains after deletion.",
    "prerequisites": [
      "binary entropy",
      "random coding",
      "channel noise",
      "linear codes"
    ],
    "minutes": 45,
    "guide": [
      "If two codewords become identical after puncturing, they differed in at most t<d positions, impossible. Each pair loses at most t differing coordinates, proving the distance lower bound.",
      "For shortening, partition by the 2^t possible patterns and keep a largest fiber. All retained words agree on the deleted coordinates, so deleting them loses no pairwise distance. Track the new length n−t and the distinct cardinality losses before forming rate bounds."
    ],
    "followup": "Why do these minimum-distance facts alone not determine BSC decoding error at a given rate?",
    "deliverable": "Both transformation proofs and their separate length, size and distance formulas."
  },
  {
    "unit": "core-shannon",
    "slug": "biased-input-information",
    "tier": "examiner",
    "kind": "proof",
    "title": "The fair input maximizes one-use BSC information",
    "prompt": "Let X∼Bernoulli(q), N∼Bernoulli(p) independently and Y=X⊕N, with p∈(0,1/2). Compute I(X;Y), prove its maximum over q is 1−H_2(p), and identify the maximizing q. Explain how this calculation differs from constructing a long reliable code.",
    "prerequisites": [
      "binary entropy",
      "random coding",
      "channel noise",
      "linear codes"
    ],
    "minutes": 60,
    "guide": [
      "The output-one probability is p+(1−2p)q. Therefore H(Y)=H_2(p+(1−2p)q), while H(Y|X)=H_2(p), giving the exact mutual-information expression.",
      "Binary entropy is uniquely maximized at one half, and p+(1−2p)q=1/2 exactly when q=1/2. This proves the single-use optimizer; a coding theorem still requires a block construction, a decoder and a vanishing-error argument."
    ],
    "followup": "What happens to uniqueness at p=1/2 and to the information when p=0?",
    "deliverable": "The exact information function, its optimizer and endpoint checks."
  },
  {
    "unit": "core-liar",
    "slug": "five-items-five-questions",
    "tier": "doctoral",
    "kind": "proof",
    "title": "An explicit state below the sphere bound that still loses",
    "prompt": "In the adaptive Liar Game with five items, five yes/no questions and at most one lie, show that the initial normalized sphere weight is 30/32<1 but every first question allows Carole a successor state of weight greater than one. Examine all split sizes using complement symmetry.",
    "prerequisites": [
      "adaptive Liar Game",
      "chip states",
      "binomial weights",
      "finite minimax"
    ],
    "minutes": 40,
    "guide": [
      "A first question containing s items produces successor lie-budget counts (5−s,s) or (s,5−s), ordered as zero-budget then one-budget. With four questions left, their unnormalized weights are 25−4s and 5+4s, divided by 16.",
      "By complement symmetry take s≤2. Then the larger successor weight is (25−4s)/16≥17/16>1. The existing weight defense now wins for Carole. This is a concrete integrality obstruction, not a failure of the necessary sphere calculation."
    ],
    "followup": "Which additional spare capacity would be needed to balance both first successors below one?",
    "deliverable": "A complete first-move enumeration and an explicit losing-state certificate."
  },
  {
    "unit": "core-liar",
    "slug": "exact-chip-state-recursion",
    "tier": "doctoral",
    "kind": "construction",
    "title": "Write an exact finite-state solver",
    "prompt": "For a state x=(x_0,…,x_k) with q questions left, derive an exact recursive winning criterion for Paul by considering integers 0≤a_i≤x_i in a question. Give the two successor vectors and the terminal condition. Specify memoization and complement symmetry sufficient to compute all states with total at most eight and k≤2.",
    "prerequisites": [
      "adaptive Liar Game",
      "chip states",
      "binomial weights",
      "finite minimax"
    ],
    "minutes": 45,
    "guide": [
      "Set x_{k+1}=a_{k+1}=0. One branch has y_i=a_i+(x_{i+1}−a_{i+1}); the other has z_i=(x_i−a_i)+a_{i+1}. Paul wins iff some a makes both successors winning with q−1 questions.",
      "At q=0 the state wins iff Σ_i x_i≤1. Memoize by the count tuple and q; exchanging a with x−a swaps branches, so only one representative is needed. The recursion is exact because item labels within a common remaining-budget class are strategically interchangeable."
    ],
    "followup": "How should the solver output a human-checkable adversary certificate for a losing state?",
    "deliverable": "A full recurrence, terminal cases and a reproducible state-enumeration design."
  },
  {
    "unit": "core-liar",
    "slug": "perfect-one-lie-nonadaptive-code",
    "tier": "examiner",
    "kind": "construction",
    "title": "A perfect sphere-bound example from a parity-check code",
    "prompt": "Let q=2^r−1 and let H be the r×q binary matrix containing every nonzero column of F_2^r exactly once. Use ker H as fixed answer strings to identify 2^{q−r} items despite one arbitrary lie. Prove unique syndrome decoding and equality in the sphere count.",
    "prerequisites": [
      "adaptive Liar Game",
      "chip states",
      "binomial weights",
      "finite minimax"
    ],
    "minutes": 50,
    "guide": [
      "No nonzero codeword has weight one or two, since no column is zero and no two columns coincide. A one-bit error has syndrome equal to its unique column, so the error position is recoverable; syndrome zero means no error.",
      "The r rows have full rank because the standard basis columns occur. Thus the code has 2^{q−r} words, and each radius-one ball has q+1=2^r strings. Their disjoint balls exhaust all 2^q possible response strings, meeting the count exactly for this special nonadaptive construction."
    ],
    "followup": "Why does this special equality construction not prove the converse of the sphere bound for arbitrary q?",
    "deliverable": "A parity-check proof, a decoder and the exact sphere equality."
  },
  {
    "unit": "core-liar",
    "slug": "bounded-size-truthful-questions",
    "tier": "examiner",
    "kind": "proof",
    "title": "Question-size constraints change even the no-lie capacity",
    "prompt": "With no lies, allow q adaptive membership questions but require every queried subset of the original candidate set to have at most s elements, where s≥1. Let N_s(q) be the maximum identifiable number. Prove N_s(0)=1 and N_s(q)=N_s(q−1)+min(s,N_s(q−1)), and solve its exponential-then-linear behavior.",
    "prerequisites": [
      "adaptive Liar Game",
      "chip states",
      "binomial weights",
      "finite minimax"
    ],
    "minutes": 55,
    "guide": [
      "At the root, the Yes branch contains at most s candidates and both branches must contain at most N_s(q−1) identifiable candidates. Their sum is at most the displayed recurrence.",
      "Conversely split candidates into a Yes group of size min(s,N_s(q−1)) and a No group of size N_s(q−1), then use optimal subtrees; questions can be restricted to the current branch without increasing their size. Capacity doubles until it first reaches or exceeds s, then grows by s per extra question."
    ],
    "followup": "State the closed form using h=⌈log_2 s⌉ and check the special case s=1.",
    "deliverable": "A capacity recurrence, an inductive construction and an explicit closed form."
  },
  {
    "unit": "core-liar",
    "slug": "list-identification-weight",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Allow a final list of L candidates",
    "prompt": "Modify the adaptive Liar Game so Paul succeeds when at most L candidates survive, with L≥1. Prove that normalized chip weight greater than L lets Carole win. Deduce a necessary sphere bound for n initially equal-budget items and discuss the equality case without asserting a converse.",
    "prerequisites": [
      "adaptive Liar Game",
      "chip states",
      "binomial weights",
      "finite minimax"
    ],
    "minutes": 60,
    "guide": [
      "The same average-of-successor-weights identity lets Carole retain a weight above L at every step. With zero questions remaining the weight is exactly the number of surviving chips, so at least L+1 survive.",
      "For n items and k lies, the necessary condition is nΣ_{j≤k}C(q,j)≤L2^q. The proof changes the terminal threshold but not the integer feasibility of root partitions; equality or slack below the threshold still requires an actual questioning strategy."
    ],
    "followup": "How does a fixed nonadaptive answer code express the condition that every received string lies in at most L error balls?",
    "deliverable": "A list-version adversary proof and its necessary counting inequality."
  },
  {
    "unit": "core-liar",
    "slug": "qary-lie-weight",
    "tier": "research",
    "kind": "research-extension",
    "title": "Generalize the adversary weight to an alphabet of answers",
    "prompt": "Suppose every question partitions candidates into ℓ≥2 answer classes and at most k answers may be changed to any of the other ℓ−1 symbols. Derive the normalized weight B_ℓ(q,k)=ℓ^−qΣ_{j≤k}C(q,j)(ℓ−1)^j, prove its average-successor identity, and obtain the adaptive impossibility bound.",
    "prerequisites": [
      "adaptive Liar Game",
      "chip states",
      "binomial weights",
      "finite minimax"
    ],
    "minutes": 85,
    "guide": [
      "If Carole picks a uniformly random reported symbol, a given candidate receives a lie with conditional probability (ℓ−1)/ℓ at every round, even when future questions adapt. Its survival probability is exactly the displayed binomial-tail expression.",
      "Averaging over the ℓ successors preserves total weight. Thus weight greater than one yields a deterministic weight-maximizing adversary and the necessary condition nΣ_{j≤k}C(q,j)(ℓ−1)^j≤ℓ^q. This extends the obstruction; it does not construct balancing questions below it."
    ],
    "followup": "Write the recurrence when remaining lie budgets differ across candidates.",
    "deliverable": "A multi-answer weight proof with its exact recurrence and necessary bound."
  },
  {
    "unit": "core-liar",
    "slug": "minimax-vs-weight-audit",
    "tier": "research",
    "kind": "research-extension",
    "title": "Measure the gap between counting and exact play",
    "prompt": "Use the exact chip-state recursion to enumerate k=1 states of at most eight chips and q≤7. Compare minimax winning status with normalized weight≤1. Report the smallest losing states passing the weight test, with a complete first-move certificate and a fixed state-ordering convention for 'smallest'.",
    "prerequisites": [
      "adaptive Liar Game",
      "chip states",
      "binomial weights",
      "finite minimax"
    ],
    "minutes": 100,
    "guide": [
      "Enumerate integer split counts, memoize successors and use terminal sum≤1. Baseline checks are the zero-lie capacity 2^q, the perfect-code instances when available, and the explicit five-item, five-question obstruction.",
      "A losing-state certificate lists, for each split up to complement symmetry, a losing successor; recursively store a directed acyclic proof graph. Failure criteria are a violated baseline, disagreement with the recurrence or a certificate with an unverified branch. Finite data should not be promoted to a universal sufficient weight criterion."
    ],
    "followup": "Which symmetry reductions remain valid for heterogeneous remaining lie budgets?",
    "deliverable": "A reproducible exact experiment, a certificate format and a table of counterexamples."
  },
  {
    "unit": "core-liar",
    "slug": "single-chip-law-under-adaptivity",
    "tier": "doctoral",
    "kind": "proof",
    "title": "A chip has a binomial movement law even in an adaptive game",
    "prompt": "Fix any adaptive Paul strategy and let Carole answer each question with a fresh fair bit. For one specified chip, prove its movement indicators are independent fair bits up to q rounds, despite the adaptively chosen partitions. Explain why movements of different chips need not be independent, and give identical and complementary examples.",
    "prerequisites": [
      "adaptive Liar Game",
      "chip states",
      "binomial weights",
      "finite minimax"
    ],
    "minutes": 45,
    "guide": [
      "Condition on the entire history before a round. Whether the chip is selected is already fixed, and one of the two fresh answers moves it; its conditional movement probability is exactly one half. Iterating these conditional probabilities gives the product law for that chip's movement sequence.",
      "Two chips always placed on the same side have identical movement indicators; two always placed on opposite sides have complementary indicators. Linearity of expectation over survival indicators remains valid, but a binomial law for the total number of survivors generally does not follow."
    ],
    "followup": "How does the one-chip argument change for uniform answers from an ℓ-symbol alphabet?",
    "deliverable": "A conditional-law proof and two explicit cross-chip dependence constructions."
  },
  {
    "unit": "core-liar",
    "slug": "errors-and-erasures-code",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Add marked erasures to fixed-answer identification",
    "prompt": "For a nonadaptive binary answer code, allow up to k≥0 adversarial bit flips and 0≤s≤q marked erasures. Prove that minimum distance at least 2k+s+1 guarantees unique identification. Derive the necessary sphere bound MΣ_{j≤k}C(q−s,j)≤2^{q−s} for any fixed erased coordinate set, and explain the roles of t<d puncturing.",
    "prerequisites": [
      "adaptive Liar Game",
      "chip states",
      "binomial weights",
      "finite minimax"
    ],
    "minutes": 60,
    "guide": [
      "If two codewords both fit a received word after s erased coordinates and k errors each, they differ in at most 2k+s coordinates, contradicting the distance bound. Conversely a distance at most 2k+s allows erasing up to s disagreements and splitting the remaining disagreements between two error patterns.",
      "Fix an erased coordinate set. Any successful code has distinct punctured words and disjoint radius-k balls in the remaining q−s coordinates. Counting these balls gives the necessary inequality. This concerns fixed answer strings; adaptive question trees require their own state analysis."
    ],
    "followup": "State the exact converse when fewer than s disagreements are available to erase.",
    "deliverable": "A distance proof and a properly normalized erasure sphere bound."
  },
  {
    "unit": "core-tenure",
    "slug": "constructive-half-weight-subset",
    "tier": "doctoral",
    "kind": "construction",
    "title": "Build the dyadic split by carrying bundles",
    "prompt": "Given finitely many chips at positive integer levels with total weight W=Σ_i x_i2^−i≥1, construct an original-chip subset of weight exactly 1/2. Give a binary-carry algorithm that records bundles and use the subset to specify a safe first Tenure move.",
    "prerequisites": [
      "Tenure Game",
      "dyadic weights",
      "finite game strategies",
      "binary trees"
    ],
    "minutes": 40,
    "guide": [
      "Repeatedly merge two level-i bundles into one bundle of weight 2^{−(i−1)}, retaining the list of original chips in each bundle. If no level-one bundle could be formed, at most one bundle at every positive level would remain, with total weight strictly below one.",
      "A level-one bundle supplies weight exactly 1/2; its complement has weight at least 1/2. Promoting either chosen part doubles its weight, so both successors have weight at least one. Bundles are only a bookkeeping device; the actual move splits original chips, not artificial merged pieces."
    ],
    "followup": "Can the subset be found greedily from largest to smallest weights without explicitly storing the carry tree?",
    "deliverable": "An implementable split algorithm and a proof that it yields a legal safe move."
  },
  {
    "unit": "core-tenure",
    "slug": "fixed-horizon-threshold",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Only chips that can arrive by the deadline count",
    "prompt": "Suppose the Tenure Game must be won within h moves. Show that its exact winning criterion is Σ_{1≤i≤h}x_i2^−i≥1, regardless of chips at deeper levels. Prove both directions and treat h=0 and an initially tenured chip separately.",
    "prerequisites": [
      "Tenure Game",
      "dyadic weights",
      "finite game strategies",
      "binary trees"
    ],
    "minutes": 45,
    "guide": [
      "Chips initially deeper than h cannot reach level zero by the deadline. The smaller-successor weight defense applied only to levels at most h keeps their weight below one if the truncated initial weight is below one.",
      "If the truncated weight is at least one, ignore deeper chips and use the ordinary dyadic winning strategy on levels at most h. Every surviving useful chip moves up at each round, so the strategy ends within h moves. An initial level-zero chip is an immediate win; otherwise h=0 cannot suffice."
    ],
    "followup": "Can deeper chips ever force a useful split unavailable to the shallower subsystem?",
    "deliverable": "A deadline-sensitive threshold theorem and boundary cases."
  },
  {
    "unit": "core-tenure",
    "slug": "multi-step-promotion",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Promotions by a fixed number of levels",
    "prompt": "Modify the binary Tenure Game so every retained chip moves from level i to max(0,i−d), with fixed integer d≥1, while the other side is deleted. Prove the exact threshold Σ_i x_i2^{−⌈i/d⌉}≥1. Translate an optimal strategy from the ordinary game.",
    "prerequisites": [
      "Tenure Game",
      "dyadic weights",
      "finite game strategies",
      "binary trees"
    ],
    "minutes": 50,
    "guide": [
      "Assign effective level j=⌈i/d⌉. A promotion lowers j by exactly one until the chip reaches zero, because ⌈(i−d)/d⌉=⌈i/d⌉−1 for i>d.",
      "The modified game is therefore identical, at the effective-level level, to the ordinary binary Tenure Game. Aggregate counts with equal effective level and apply the dyadic threshold and splitting construction. The original level i itself is not the correct exponent when d>1."
    ],
    "followup": "What if d depends on the round in a known schedule?",
    "deliverable": "An effective-level reduction and a concrete example with d=2."
  },
  {
    "unit": "core-tenure",
    "slug": "multiway-tenure",
    "tier": "examiner",
    "kind": "proof",
    "title": "An ℓ-way Tenure Game and an ℓ-adic split",
    "prompt": "Let Paul partition chips into ℓ≥2 groups, after which Carole retains one group, promotes it by one level and deletes all others. Prove the exact criterion Σ_i x_iℓ^−i≥1. Establish the ℓ-adic partition lemma needed for the winning direction, rather than using only an averaging argument.",
    "prerequisites": [
      "Tenure Game",
      "dyadic weights",
      "finite game strategies",
      "binary trees"
    ],
    "minutes": 55,
    "guide": [
      "The average of the ℓ successor weights is the current weight, so below one Carole can preserve a weight below one. For the converse, merge ℓ same-level chips into one bundle at the next level.",
      "If fewer than ℓ bundles remain at every positive level, their total weight is less than Σ_{i≥1}(ℓ−1)ℓ^−i=1. Thus weight at least one supplies enough level-one bundles to extract ℓ disjoint parts of weight 1/ℓ; assign leftover chips arbitrarily. Every successor has weight at least one."
    ],
    "followup": "How do you recover a partition of the original chips from merged bundles?",
    "deliverable": "A full threshold proof including a constructive ℓ-adic lemma."
  },
  {
    "unit": "core-tenure",
    "slug": "nondyadic-weight-failure",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "A weight-one state need not split without dyadic structure",
    "prompt": "Consider a variant with indivisible chips of arbitrary positive weights: retain one of two parts, double its chip weights and delete the other part; reaching individual weight at least one wins. Show that three chips of weight 1/3 have total one but lose against a minimizing Carole. Identify the failed subset-sum step.",
    "prerequisites": [
      "Tenure Game",
      "dyadic weights",
      "finite game strategies",
      "binary trees"
    ],
    "minutes": 60,
    "guide": [
      "Every partition splits the three chips as 0 versus 3 or 1 versus 2. Carole chooses the smaller-weight side. In the nontrivial split only one chip survives, with new weight 2/3; in the trivial split no chip survives.",
      "From total weight below one, choosing the smaller successor preserves total weight below one and prevents an individual chip of weight one. The missing property is a subset of total weight exactly 1/2, which dyadic chips guarantee and these thirds do not."
    ],
    "followup": "Does total weight strictly above one repair the statement for arbitrary indivisible weights?",
    "deliverable": "A complete losing strategy and a pinpointed failure of the dyadic argument."
  },
  {
    "unit": "core-tenure",
    "slug": "kraft-randomized-success",
    "tier": "research",
    "kind": "research-extension",
    "title": "The dyadic weight is an exact random-answer success probability",
    "prompt": "Let Carole independently choose either retained side with probability 1/2 each round. Prove that Paul's maximum probability of eventually obtaining tenure is min(1,W), where W=Σ_i x_i2^−i. For W≤1 construct a prefix-free binary tree whose leaves have the given chip depths, proving the required coding lemma by dyadic interval packing.",
    "prerequisites": [
      "Tenure Game",
      "dyadic weights",
      "finite game strategies",
      "binary trees"
    ],
    "minutes": 85,
    "guide": [
      "Each chip at level i survives its first i choices with probability 2^−i under any Paul strategy, so the probability of any success is at most W. For W≤1, pack disjoint dyadic intervals of lengths 2^−i in [0,1); their binary addresses form a prefix-free collection.",
      "At each node assign chips to its two descendant subtrees. A fair answer path reaches each chip leaf with exactly its dyadic probability, and the leaf events are disjoint, giving success probability W. If W≥1, the deterministic threshold strategy succeeds for every answer path and hence with probability one."
    ],
    "followup": "Why is an arbitrary collection of binary strings of the right lengths insufficient without prefix-freeness?",
    "deliverable": "A sharp probabilistic theorem, an elementary coding construction and the matching upper bound."
  },
  {
    "unit": "core-tenure",
    "slug": "critical-weight-duration",
    "tier": "research",
    "kind": "research-extension",
    "title": "Expected duration at exact weight one",
    "prompt": "Assume W=1 and fair independent Carole choices. Prove that any strategy which wins on every branch has expected stopping time Σ_i i x_i2^−i, and construct one using a prefix tree. Work out the state x_1=1,x_2=1,x_3=2. Justify extending play after a first win when computing individual chip probabilities.",
    "prerequisites": [
      "Tenure Game",
      "dyadic weights",
      "finite game strategies",
      "binary trees"
    ],
    "minutes": 100,
    "guide": [
      "In a full fictitious continuation, each chip's eventual tenure indicator has expectation 2^−i, so the expected number tenured is one. A surely winning strategy has at least one tenured chip on every answer path; consequently there is exactly one almost surely, ruling out overlapping success events.",
      "The unique successful chip's tenure time is its starting level i, and its success probability is 2^−i. Therefore E T=Σ_i i x_i2^−i. The example has value 1/2+1/2+3/4=7/4, attained by leaf words 0,10,110,111. The continuation is only analytical and does not delay the actual stopping time."
    ],
    "followup": "Which step breaks when W>1 and success events may overlap?",
    "deliverable": "A duration identity, a legal strategy tree and a worked heterogeneous example."
  },
  {
    "unit": "core-tenure",
    "slug": "robustness-to-chip-deletion",
    "tier": "doctoral",
    "kind": "proof",
    "title": "A sharp robustness threshold before play",
    "prompt": "Before the ordinary Tenure Game begins, Carole may delete up to r chips, where r is a fixed nonnegative integer. Determine a necessary and sufficient winning condition for Paul in terms of W and the r largest individual dyadic weights. Specialize to n chips all at level k.",
    "prerequisites": [
      "Tenure Game",
      "dyadic weights",
      "finite game strategies",
      "binary trees"
    ],
    "minutes": 45,
    "guide": [
      "After the deletion phase the ordinary threshold applies. Carole minimizes remaining total weight by deleting the r heaviest chips, or all chips if fewer than r are present.",
      "Paul can win against every allowed deletion exactly when W minus the sum of those largest weights is at least one. For one level k this becomes n−r≥2^k, with the convention that a negative remaining count means no chips. This is a worst-case robustness statement, not an average deletion estimate."
    ],
    "followup": "How would a level-dependent deletion cost turn the preliminary adversary step into a knapsack problem?",
    "deliverable": "A sharp criterion and its homogeneous specialization."
  },
  {
    "unit": "core-tenure",
    "slug": "whole-level-query-restriction",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "Restricting legal splits destroys the threshold converse",
    "prompt": "Modify the game so Paul must select all or none of the chips at each occupied level. Show that for n≥2 chips all at one positive level, Carole can win immediately even when their total dyadic weight is arbitrarily large. Explain why the usual carry lemma does not produce a legal move in this variant.",
    "prerequisites": [
      "Tenure Game",
      "dyadic weights",
      "finite game strategies",
      "binary trees"
    ],
    "minutes": 60,
    "guide": [
      "With only one occupied level, every legal selected set is either the entire chip set or empty. Carole retains the empty side and deletes all chips, so Paul loses in one move.",
      "By choosing n as large as desired the initial total n2^−k can exceed one by any factor. The ordinary theorem requires the ability to separate individual equal-level chips; carrying bundles proves existence of an arbitrary chip subset, not a union of whole levels."
    ],
    "followup": "What minimal relaxation of the move restriction makes the homogeneous level-k threshold attainable again?",
    "deliverable": "A legal-move counterexample and a precise statement of the lost splitting freedom."
  },
  {
    "unit": "core-balancing",
    "slug": "deterministic-cosh-potential",
    "tier": "doctoral",
    "kind": "construction",
    "title": "Construct a deterministic chooser directly",
    "prompt": "In T rounds in dimension d, Pusher gives v_t∈{−1,1}^d before Chooser selects ε_t. Use Φ_t=Σ_j cosh(λS_{t,j}) to construct a deterministic chooser with ||S_T||_∞≤√(2T ln(2d)). Prove the potential update against an adaptive Pusher.",
    "prerequisites": [
      "online vector balancing",
      "adaptive strategies",
      "exponential potentials",
      "finite games"
    ],
    "minutes": 40,
    "guide": [
      "For a fixed current vector, the average potential of the two sign choices is cosh(λ)Φ_{t−1}, because each coordinate increment has magnitude one. Choose the sign with no larger than this average.",
      "Then Φ_T≤d(coshλ)^T≤d e^{Tλ²/2}. Since cosh(λs)≥e^{λ|s|}/2, the norm is at most ln(2d)/λ+Tλ/2. Optimize λ=√(2ln(2d)/T). The rule is deterministic and uses only the current state and offered vector."
    ],
    "followup": "How does the same potential handle entries in [−1,1]?",
    "deliverable": "An explicit online sign rule and its optimized discrepancy guarantee."
  },
  {
    "unit": "core-balancing",
    "slug": "euclidean-greedy-comparison",
    "tier": "doctoral",
    "kind": "proof",
    "title": "A geometric greedy rule gives a different bound",
    "prompt": "Let Pusher offer arbitrary vectors v_t∈R^d with ||v_t||_2≤L_t. Choose ε_t to make ⟨S_{t−1},ε_tv_t⟩≤0. Prove ||S_T||_2²≤Σ_tL_t² and compare the induced infinity bound with exponential-potential balancing for sign vectors.",
    "prerequisites": [
      "online vector balancing",
      "adaptive strategies",
      "exponential potentials",
      "finite games"
    ],
    "minutes": 45,
    "guide": [
      "Expand ||S_{t−1}+ε_tv_t||_2². The cross term is nonpositive by the choice of sign, so the squared norm increases by at most ||v_t||². Sum this inequality over all rounds.",
      "For sign vectors L_t²=d, the guarantee is √(Td), whereas a coordinate exponential potential gives √(2Tln(2d)). The Euclidean rule remains useful for small vector norms or when Euclidean rather than coordinate error is the objective."
    ],
    "followup": "Can the chooser use this argument in an arbitrary norm without an inner product?",
    "deliverable": "A deterministic geometric proof and a parameter-based comparison."
  },
  {
    "unit": "core-balancing",
    "slug": "anytime-coordinate-control",
    "tier": "examiner",
    "kind": "proof",
    "title": "Control every prefix without a union bound over times",
    "prompt": "Suppose fresh fair Chooser signs multiply adaptive predictable vectors with |v_{t,j}|≤a_t, where Σ_t a_t²≤V deterministically. Prove P(max_{t≤T,j≤d}|S_{t,j}|≥u)≤2d exp(−u²/(2V)) using the maximal martingale inequality. Contrast it with a union over all dT coordinate-time pairs.",
    "prerequisites": [
      "online vector balancing",
      "adaptive strategies",
      "exponential potentials",
      "finite games"
    ],
    "minutes": 50,
    "guide": [
      "For each coordinate, S_{t,j} is a martingale with conditional sign-MGF at most exp(λ²a_t²/2). Apply the maximal exponential-supermartingale argument separately to its positive and negative excursions.",
      "Union-bound only over coordinates and signs, giving 2d rather than 2dT. Setting u=√(2Vln(2d/η)) controls every prefix with failure at most η. Predictability of v_t is essential: it must be selected before the current fresh sign is seen."
    ],
    "followup": "How does the result change if Pusher sees ε_t before offering v_t?",
    "deliverable": "An anytime tail with a specified information order and an explicit threshold."
  },
  {
    "unit": "core-balancing",
    "slug": "all-sign-patterns-lower-bound",
    "tier": "examiner",
    "kind": "construction",
    "title": "A nonadaptive construction saturating the linear scale",
    "prompt": "Take d=2^T coordinates indexed by σ∈{−1,1}^T. At round t let the offered vector have coordinate v_{t,σ}=σ_t. Prove that every Chooser sign sequence produces final infinity norm T. Compare this with the logarithmic-dimension upper bound and state what the example does not prove for d=T.",
    "prerequisites": [
      "online vector balancing",
      "adaptive strategies",
      "exponential potentials",
      "finite games"
    ],
    "minutes": 55,
    "guide": [
      "For a realized Chooser sequence ε, use the coordinate indexed by σ=ε. Its final sum is Σ_t ε_tσ_t=T, while no coordinate can have absolute sum larger than T.",
      "The offered vectors were fixed before play, so this lower bound needs no adaptivity. Since ln d=Tln2, the generic √(Tln d) scale is already order T here. The construction does not establish the √(Tln T) lower bound in the d=T regime."
    ],
    "followup": "How many coordinates suffice if only a specified subset of sign sequences needs to be defeated?",
    "deliverable": "An explicit matrix construction and a careful parameter comparison."
  },
  {
    "unit": "core-balancing",
    "slug": "biased-random-chooser-drift",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "A fixed bias creates linear drift",
    "prompt": "Let Chooser independently choose ε_t=1 with probability q≠1/2, and let Pusher always offer the scalar vector one. Show that |S_T| has linear order T with high probability. Give an explicit deviation inequality and explain why a fair-sign martingale proof cannot be reused.",
    "prerequisites": [
      "online vector balancing",
      "adaptive strategies",
      "exponential potentials",
      "finite games"
    ],
    "minutes": 60,
    "guide": [
      "E S_T=(2q−1)T. Hoeffding for the sum of signs gives P(|S_T−(2q−1)T|≥u)≤2exp(−u²/(2T)). This is concentration around the nonzero drift, obtained from independent increments with range length two.",
      "Take u=|2q−1|T/2 to obtain |S_T|≥|2q−1|T/2 except with probability at most 2exp(−(2q−1)²T/8). The increments have nonzero conditional mean, so centering or a different choosing strategy is necessary."
    ],
    "followup": "What if the bias q_t tends to one half but Σ_t(2q_t−1) remains large?",
    "deliverable": "A quantitative drift counterexample and the failed martingale hypothesis."
  },
  {
    "unit": "core-balancing",
    "slug": "online-fractional-rounding",
    "tier": "research",
    "kind": "research-extension",
    "title": "Round predictable fractional choices online",
    "prompt": "At each round an adaptive adversary offers x_t∈[0,1] and v_t∈[−1,1]^d before a bit B_t is chosen. For E_T=Σ_t(B_t−x_t)v_t, prove a randomized infinity bound √((T/2)ln(2d/η)) with failure η. Then construct a deterministic sign-choice potential achieving the corresponding positive-success threshold.",
    "prerequisites": [
      "online vector balancing",
      "adaptive strategies",
      "exponential potentials",
      "finite games"
    ],
    "minutes": 85,
    "guide": [
      "Choose B_t conditionally Bernoulli(x_t). Each coordinate increment has mean zero and range length at most one, so its conditional MGF is at most e^{λ²/8}. Summing and union-bounding gives 2d e^{−2u²/T}.",
      "Use a sum of positive and negative exponentials of coordinate errors. The x_t-weighted average of its two child potentials grows by at most e^{λ²/8}, so choose a child no larger than that average. Optimizing yields a deterministic final bound √((T/2)ln(2d)), valid against adaptive offered pairs."
    ],
    "followup": "Why does independent rounding with probability one half fail to preserve the same error center for arbitrary x_t?",
    "deliverable": "A predictable-rounding theorem and an explicit deterministic potential rule."
  },
  {
    "unit": "core-balancing",
    "slug": "small-game-minimax-audit",
    "tier": "research",
    "kind": "research-extension",
    "title": "Compute exact small vector-game values",
    "prompt": "For sign-vector games with d≤4 and T≤6, design an exact minimax solver and compare optimal Chooser play with the cosh-potential rule. State the recurrence, symmetry reductions and a reproducible tie-breaking convention. Require an explicit adversarial sequence whenever the greedy rule is suboptimal.",
    "prerequisites": [
      "online vector balancing",
      "adaptive strategies",
      "exponential potentials",
      "finite games"
    ],
    "minutes": 100,
    "guide": [
      "With t rounds left and sum s, the value satisfies V_t(s)=max_{v∈{−1,1}^d}min_{ε∈{−1,1}}V_{t−1}(s+εv), with V_0(s)=||s||_∞. Memoize integer states.",
      "Coordinate permutations and sign flips preserve the game, while v and −v give the same two choices. Verify d=1 and the all-sign-pattern lower bound as baselines. A greedy-versus-optimal gap must be witnessed by a complete branch strategy or checked recurrence values, not only a simulated random opponent."
    ],
    "followup": "How does the state space change for vectors with entries in {−1,0,1}?",
    "deliverable": "A minimax specification, baseline results and certified greedy counterexamples if any."
  },
  {
    "unit": "core-balancing",
    "slug": "hadamard-offline-lower-bound",
    "tier": "doctoral",
    "kind": "construction",
    "title": "A square sign matrix forces square-root discrepancy",
    "prompt": "For T=d=2^r construct the Sylvester sign matrix H recursively and prove H^TH=T I. Show that every sign vector ε has ||Hε||_∞≥√T. Explain why this is an offline lower bound and why it is weaker than the assigned online game's matching logarithmic lower bound.",
    "prerequisites": [
      "online vector balancing",
      "adaptive strategies",
      "exponential potentials",
      "finite games"
    ],
    "minutes": 45,
    "guide": [
      "Start with H_1=(1) and form H_{2m}=[[H_m,H_m],[H_m,−H_m]]. Block multiplication proves orthogonal columns by induction.",
      "For every ε∈{−1,1}^T, ||Hε||_2²=ε^T(TI)ε=T². With T coordinates, the maximum absolute coordinate is at least √T. Presenting H's columns in any order gives the same obstruction even to a chooser who sees the full matrix."
    ],
    "followup": "What property of an adaptive lower-bound strategy must go beyond this orthogonality argument?",
    "deliverable": "A recursive matrix construction and a norm-based universal sign lower bound."
  },
  {
    "unit": "core-balancing",
    "slug": "exact-two-dimensional-game",
    "tier": "examiner",
    "kind": "proof",
    "title": "Solve the sign-vector game in dimensions one and two",
    "prompt": "For T-round games with vectors in {−1,1}^d, determine the exact value for d=1 and d=2. Prove that in dimension two the value is one for odd T and two for positive even T, with value zero at T=0. Supply both chooser invariants and a final-round adversary argument.",
    "prerequisites": [
      "online vector balancing",
      "adaptive strategies",
      "exponential potentials",
      "finite games"
    ],
    "minutes": 60,
    "guide": [
      "In one dimension, choose signs to keep the running sum zero at even times and of magnitude one at odd times. In dimension two use U=(S_1+S_2)/2 and V=(S_1−S_2)/2: each offered direction changes exactly one of U,V by ±1, so keep each at zero or magnitude one.",
      "At odd times exactly one of U,V is odd, giving infinity norm one; at even times the bound is two. For the even-time lower bound, immediately before the last move both original coordinates are odd. If their magnitudes are both one, Pusher offers the other diagonal direction so neither sign reaches zero; if a magnitude is larger, any final move leaves a magnitude at least two."
    ],
    "followup": "Why does this exact small-dimensional behavior differ greatly from a random-sign walk bound?",
    "deliverable": "Exact values, deterministic invariants and matching adversary lower bounds."
  },
  {
    "unit": "core-half-liar",
    "slug": "directed-ball-intersections",
    "tier": "doctoral",
    "kind": "proof",
    "title": "The exact intersection criterion for one-sided error balls",
    "prompt": "For a fixed binary answer string x, let D_k(x)={z:z≥x coordinatewise, |z|−|x|≤k}. Prove D_k(x) and D_k(y) intersect exactly when both |supp(x)\\supp(y)|≤k and |supp(y)\\supp(x)|≤k. Give a two-bit example distinguishable with one one-sided lie but not one arbitrary lie.",
    "prerequisites": [
      "one-sided lies",
      "adaptive answer trees",
      "directed neighborhoods",
      "fixed-k asymptotics"
    ],
    "minutes": 40,
    "guide": [
      "Any common received string must contain supp(x)∪supp(y). Thus it needs at least |supp(y)\\supp(x)| additions from x and the reverse number from y. These necessary conditions are sufficient by taking their union as the received support.",
      "For x=00,y=11,k=1, the directed balls are {00,01,10} and {11}, disjoint. Their ordinary Hamming distance is only two, so radius-one undirected balls overlap. This criterion is for nonadaptive fixed answer strings."
    ],
    "followup": "On a constant-weight layer, simplify the criterion to a Johnson-distance condition.",
    "deliverable": "A necessary-and-sufficient intersection proof and an explicit coding separation."
  },
  {
    "unit": "core-half-liar",
    "slug": "constant-weight-directed-codes",
    "tier": "doctoral",
    "kind": "synthesis",
    "title": "Counting one-sided errors on a fixed weight layer",
    "prompt": "Let every nonadaptive truthful answer string have weight w and allow at most k No→Yes changes, with 0≤k≤q−w. Prove that disjoint error sets require M C(q−w,k)≤C(q,w+k). Explain why this counts only the outer layer and is a necessary bound rather than a construction.",
    "prerequisites": [
      "one-sided lies",
      "adaptive answer trees",
      "directed neighborhoods",
      "fixed-k asymptotics"
    ],
    "minutes": 45,
    "guide": [
      "Each weight-w codeword has exactly C(q−w,k) received strings in the weight-(w+k) layer obtained by adding k ones. Unique decoding requires these top-layer shadows to be disjoint across codewords.",
      "There are C(q,w+k) strings in that layer, proving the count. Lower layers must also be disjoint, but this argument alone does not coordinate them or produce a family attaining the top-layer bound."
    ],
    "followup": "Compare this bound for w≈q/2,k=1 with the adaptive order 2^{q+1}/q.",
    "deliverable": "A finite layer-count bound and an explicit comparison of its asymptotic strength."
  },
  {
    "unit": "core-half-liar",
    "slug": "adaptive-one-lie-count",
    "tier": "examiner",
    "kind": "proof",
    "title": "Count adaptive response strings by their first deviation",
    "prompt": "Fix a deterministic adaptive question tree and one hidden item. Let its completely truthful path contain z No answers. Prove that with at most one No→Yes lie there are exactly z+1 possible reported answer strings, even though the questions after a lie may differ from those on the truthful path.",
    "prerequisites": [
      "one-sided lies",
      "adaptive answer trees",
      "directed neighborhoods",
      "fixed-k asymptotics"
    ],
    "minutes": 50,
    "guide": [
      "There is one completely truthful response string. If a lie is used, the path agrees with the truthful path until its first deviation, which must occur at one of the z truthful No positions.",
      "After that deviation the remaining answers are forced truthful along the new branch because no lie budget remains. Different first-deviation positions give distinct strings. This argument explains why the k=1 count survives adaptivity without replacing the entire tree by fixed codewords."
    ],
    "followup": "Construct a two-question adaptive example where using the truthful path's No count fails for k=2.",
    "deliverable": "A bijection between possible first-lie positions and corrupted response strings."
  },
  {
    "unit": "core-half-liar",
    "slug": "sharpen-one-lie-upper-error",
    "tier": "examiner",
    "kind": "proof",
    "title": "Improve the explicit error term in the k=1 upper bound",
    "prompt": "Assume the standard k=1 counting inequality n≤2^q exp(−u²/(2q))+2^{q+1}/(q−u), for 0<u<q. Choose u=√(6q ln q) for sufficiently large q and derive A_1(q)≤(2^{q+1}/q)[1+O(√(ln q/q))]. Track both terms instead of only asserting an asymptotic equivalent.",
    "prerequisites": [
      "one-sided lies",
      "adaptive answer trees",
      "directed neighborhoods",
      "fixed-k asymptotics"
    ],
    "minutes": 55,
    "guide": [
      "The first term becomes 2^q q^−3, which is smaller than 2^{q+1}/q by a relative factor 1/(2q²). The second term equals (2^{q+1}/q)/(1−u/q).",
      "Since u/q=√(6ln q/q)→0, expand or bound 1/(1−x)≤1+2x for x≤1/2. This yields the displayed quantitative upper error. The premise is an established k=1 counting bound, not a uniform-in-k estimate."
    ],
    "followup": "How would a different constant in u affect the balance of the exponentially small and denominator terms?",
    "deliverable": "An explicit parameter choice and a controlled relative-error calculation."
  },
  {
    "unit": "core-half-liar",
    "slug": "one-sided-chip-recursion",
    "tier": "examiner",
    "kind": "construction",
    "title": "An exact recursion respecting the direction of lies",
    "prompt": "Let x_0 candidates have no lie remaining and x_1 have one No→Yes lie remaining. A membership question includes a_0 and a_1 of those candidates. Derive both observed-answer successor states and an exact minimax recursion. Explain why a No answer eliminates every candidate inside the question.",
    "prerequisites": [
      "one-sided lies",
      "adaptive answer trees",
      "directed neighborhoods",
      "fixed-k asymptotics"
    ],
    "minutes": 60,
    "guide": [
      "For an observed No, truthful Yes cannot be changed, so only outside candidates survive: (x_0−a_0,x_1−a_1). For an observed Yes, inside candidates retain their budgets, while outside one-budget candidates consume their lie: (a_0+x_1−a_1,a_1).",
      "Paul wins with q questions iff some allowed integer pair (a_0,a_1) has both successor states winning with q−1 questions. At q=0 the total candidate count must be at most one. Unlike the ordinary liar game, complementing a question does not simply swap these two successors without also reversing lie direction."
    ],
    "followup": "Extend the successor formulas to k remaining-budget classes.",
    "deliverable": "A directional chip-state recurrence and its terminal condition."
  },
  {
    "unit": "core-half-liar",
    "slug": "adaptive-two-lie-geometry",
    "tier": "research",
    "kind": "research-extension",
    "title": "Expose the first point where a fixed-string argument fails",
    "prompt": "Construct a depth-two adaptive question tree and one hidden item whose truthful answers are No,Yes, but whose possible reports with at most two No→Yes lies number three rather than Σ_{j≤2}C(1,j)=2. Enumerate the paths and formulate a correct state-based counting method for general k.",
    "prerequisites": [
      "one-sided lies",
      "adaptive answer trees",
      "directed neighborhoods",
      "fixed-k asymptotics"
    ],
    "minutes": 85,
    "guide": [
      "Ask a first question excluding the item. After a reported No, ask a question containing it; after a reported Yes, ask a question excluding it. The truthful path is NY.",
      "The possible reported strings are NY with no lie, YN with one lie, and YY with two lies. The second lie opportunity exists only after the first lie changes the branch. For general k count reachable tree states with a remaining budget and actual item membership, rather than directed Hamming balls around one fixed truthful string."
    ],
    "followup": "Why does the z+1 argument remain exact for one lie despite this counterexample?",
    "deliverable": "A fully enumerated adaptive counterexample and a corrected general-k dynamic-programming formulation."
  },
  {
    "unit": "core-half-liar",
    "slug": "adaptive-vs-fixed-code-audit",
    "tier": "research",
    "kind": "research-extension",
    "title": "Compare exact adaptive and nonadaptive half-liar capacities",
    "prompt": "For q≤5 and one one-sided lie, design exact computations of adaptive capacity using the chip recursion and nonadaptive capacity using disjoint directed balls. Specify baseline cases, a maximum-independent-set formulation, and a checkable certificate for any claimed gap between capacities.",
    "prerequisites": [
      "one-sided lies",
      "adaptive answer trees",
      "directed neighborhoods",
      "fixed-k asymptotics"
    ],
    "minutes": 100,
    "guide": [
      "Make a graph on all 2^q truthful strings, joining pairs whose directed radius-one balls intersect. A maximum independent set gives a nonadaptive code, with incompatibility decided by the two directed support differences.",
      "Compute adaptive states by memoized minimax over (x_0,x_1,q). A nonadaptive lower certificate is a listed code; an adaptive lower certificate is a question tree. Upper certificates require a proved search exhaustion or branch-and-bound proof. Compare finite values with, but do not infer them from, the fixed-k asymptotic formula."
    ],
    "followup": "Which symmetry of the full cube preserves one-sided directed balls, and which familiar bit-complement symmetry does not?",
    "deliverable": "A reproducible finite comparison with both construction and upper-bound certificates."
  },
  {
    "unit": "core-half-liar",
    "slug": "one-sided-repetition-baseline",
    "tier": "doctoral",
    "kind": "construction",
    "title": "A simple explicit code for any fixed lie budget",
    "prompt": "For m independent binary identification bits, repeat each truthful membership answer k+1 times and allow at most k total No→Yes lies. Give a decoder identifying 2^m items in q=m(k+1) questions. Explain why the same block decoder can fail for two-direction lies.",
    "prerequisites": [
      "one-sided lies",
      "adaptive answer trees",
      "directed neighborhoods",
      "fixed-k asymptotics"
    ],
    "minutes": 45,
    "guide": [
      "A truthful Yes block is all ones, since Yes cannot be changed. A truthful No block contains at least one zero because converting all k+1 positions would exceed the entire lie budget. Decode a block as Yes exactly when all its reports are Yes.",
      "Thus all m original bits are recovered and the rate is 1/(k+1). This is a constructive baseline, much less efficient than the fixed-k asymptotic capacity but valid at every blocklength of this form. An arbitrary Yes→No flip would corrupt the all-ones test."
    ],
    "followup": "What minimum block length is required by this decoder when the total lie budget is k?",
    "deliverable": "An explicit question set, decoder and finite guarantee."
  },
  {
    "unit": "core-half-liar",
    "slug": "reverse-direction-isomorphism",
    "tier": "examiner",
    "kind": "proof",
    "title": "Reversing the permitted lie direction preserves capacity",
    "prompt": "Prove that a game permitting only No→Yes lies has the same adaptive capacity as a game permitting only Yes→No lies, by transforming queries and answers. Show with q=2,k=1 that either one-sided game can distinguish two items while the ordinary two-direction liar game cannot.",
    "prerequisites": [
      "one-sided lies",
      "adaptive answer trees",
      "directed neighborhoods",
      "fixed-k asymptotics"
    ],
    "minutes": 60,
    "guide": [
      "Complement every queried subset and invert every reported bit. A truthful membership bit and a permitted upward corruption then become a truthful complement bit and a permitted downward corruption, preserving the number of lies and the question-tree structure.",
      "For two items ask the same separating question twice; in the upward model only 00 can change and never to 11 with one lie, so the two items remain distinguishable. In the ordinary game a nonseparating first question gives no advantage. A separating answer leaves one candidate with one lie remaining and one with none, a one-question state of weight 3/2>1, which Carole wins."
    ],
    "followup": "Give the explicit two-step adaptive impossibility argument rather than relying only on a fixed-code distance claim.",
    "deliverable": "A direction-reversal bijection and exact two-question examples."
  },
  {
    "unit": "core-entropy",
    "slug": "total-correlation-identity",
    "tier": "doctoral",
    "kind": "proof",
    "title": "The entropy deficit is a relative entropy",
    "prompt": "For a joint law P of finite X_1,…,X_n, prove Σ_iH(X_i)−H(X_1,…,X_n)=D_2(P||∏_iP_i). Derive nonnegativity from the log-sum inequality and characterize equality, including zero-probability states.",
    "prerequisites": [
      "Shannon entropy",
      "chain rule",
      "relative entropy",
      "binary entropy"
    ],
    "minutes": 40,
    "guide": [
      "Expand the base-two log likelihood ratio under P. The joint term contributes −H(P); each marginal log term contributes +H(P_i). Whenever P(x)>0, each corresponding marginal mass is positive, so the product denominator is nonzero.",
      "The log-sum inequality gives nonnegative relative entropy with equality exactly when P equals the product law on its whole support. Normalization then extends the equality to all states, giving mutual independence rather than merely pairwise independence."
    ],
    "followup": "Compute the deficit for a uniform parity class and explain why all pairwise projections can miss it.",
    "deliverable": "An exact deficit identity and an equality proof that treats zero masses carefully."
  },
  {
    "unit": "core-entropy",
    "slug": "binomial-entropy-sandwich",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Bound a binomial coefficient within a polynomial factor",
    "prompt": "For 0<r<n and p=r/n, prove (n+1)^−1 2^{nH_2(p)}≤C(n,r)≤2^{nH_2(p)}. Derive the upper bound by entropy of a uniform r-subset, and the lower bound by locating a mode of Bin(n,p).",
    "prerequisites": [
      "Shannon entropy",
      "chain rule",
      "relative entropy",
      "binary entropy"
    ],
    "minutes": 45,
    "guide": [
      "A uniform r-subset has entropy log_2 C(n,r) and each coordinate has Bernoulli(p) entropy. Subadditivity gives the upper bound.",
      "For Bin(n,p) with p=r/n, the probability at r is a maximum term, as checked by adjacent probability ratios. Among n+1 terms it is at least 1/(n+1). Since p^r(1−p)^{n−r}=2^{−nH_2(p)}, rearrange to get the lower bound."
    ],
    "followup": "How does Stirling improve the polynomial factor when p stays away from zero and one?",
    "deliverable": "Two elementary proofs and an explicit entropy approximation error."
  },
  {
    "unit": "core-entropy",
    "slug": "data-processing-noisy-bits",
    "tier": "examiner",
    "kind": "proof",
    "title": "A two-channel calculation of data processing",
    "prompt": "Let X be a fair bit, Y=X⊕N_ε and Z=Y⊕N_δ for independent noise bits with ε,δ∈[0,1/2]. Compute I(X;Y) and I(X;Z), prove the data-processing inequality from chain rules for this Markov chain, and deduce H_2(ε+δ−2εδ)≥H_2(ε).",
    "prerequisites": [
      "Shannon entropy",
      "chain rule",
      "relative entropy",
      "binary entropy"
    ],
    "minutes": 50,
    "guide": [
      "The effective flip probability from X to Z is ε(1−δ)+(1−ε)δ. Both outputs remain fair, so their informations are one minus the binary entropy of their respective noise probabilities.",
      "For a Markov chain X→Y→Z, I(X;Y,Z)=I(X;Y)+I(X;Z|Y)=I(X;Y). Expanding in the other order gives I(X;Z)+I(X;Y|Z)≥I(X;Z). Nonnegative conditional mutual information supplies the inequality."
    ],
    "followup": "When is equality possible in the noisy-bit example?",
    "deliverable": "An explicit crossover calculation and a chain-rule proof of information loss."
  },
  {
    "unit": "core-entropy",
    "slug": "permutation-entropy-deficit",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Uniform coordinates can hide a linear entropy deficit",
    "prompt": "Let π be a uniform permutation of [n]. Compute H(π), each coordinate entropy and the conditional chain-rule terms H(π(i)|π(1),…,π(i−1)). Use Stirling's estimate as an explicit input to estimate Σ_iH(π(i))−H(π).",
    "prerequisites": [
      "Shannon entropy",
      "chain rule",
      "relative entropy",
      "binary entropy"
    ],
    "minutes": 55,
    "guide": [
      "There are n! equiprobable permutations, giving joint entropy log_2 n!. Each coordinate is uniform on [n], so the sum of coordinate entropies is nlog_2 n.",
      "After i−1 positions are revealed, the next value is uniform among n−i+1 unused labels. Summing log_2(n−i+1) recovers log_2 n!. Stirling gives deficit nlog_2 e−(1/2)log_2(2πn)+o(1), despite identical uniform one-coordinate marginals."
    ],
    "followup": "Which conditioning event explains the drop in each successive coordinate's available values?",
    "deliverable": "An exact chain-rule calculation and a first-order asymptotic deficit."
  },
  {
    "unit": "core-entropy",
    "slug": "bounded-degree-graph-families",
    "tier": "examiner",
    "kind": "proof",
    "title": "Count a family using its degree constraints",
    "prompt": "Let F be any family of labeled simple graphs on n vertices, each with maximum degree at most d≤(n−1)/2. Use the entropy of a uniform member to prove |F|≤2^{C(n,2)H_2(d/(n−1))}. State all averaging and concavity steps and discuss what changes when d>(n−1)/2.",
    "prerequisites": [
      "Shannon entropy",
      "chain rule",
      "relative entropy",
      "binary entropy"
    ],
    "minutes": 60,
    "guide": [
      "Write one bit per potential edge. Subadditivity bounds log_2|F| by Σ_eH_2(p_e). Every graph has at most nd/2 edges, so the average edge marginal is at most d/(n−1).",
      "Concavity gives Σ_eH_2(p_e)≤C(n,2)H_2(average p_e). Binary entropy is increasing only up to one half, which justifies replacing that average by d/(n−1) under the stated hypothesis. Beyond half, the safe general bound is 2^{C(n,2)} unless a different constraint is used."
    ],
    "followup": "Can prescribed individual expected degrees yield a sharper bound than one global edge average?",
    "deliverable": "An entropy counting proof with the monotonicity range explicitly checked."
  },
  {
    "unit": "core-entropy",
    "slug": "quantitative-near-independence",
    "tier": "research",
    "kind": "research-extension",
    "title": "Small entropy deficit forces closeness to a product",
    "prompt": "For a finite joint law with entropy deficit Δ bits, prove ||P−∏P_i||_TV≤√(Δ ln2/2). Establish the finite Pinsker inequality using log-sum reduction to a two-point partition and a scalar convexity estimate. Explain why pairwise-small covariances cannot replace Δ in this statement.",
    "prerequisites": [
      "Shannon entropy",
      "chain rule",
      "relative entropy",
      "binary entropy"
    ],
    "minutes": 85,
    "guide": [
      "Let Q=∏P_i and A={x:P(x)≥Q(x)}; then P(A)−Q(A)=TV(P,Q). The log-sum inequality coarsens natural-log divergence to the binary divergence between probabilities P(A),Q(A).",
      "For fixed q, binary natural-log divergence d(p||q) has second derivative 1/[p(1−p)]≥4, vanishes with zero first derivative at p=q, and is at least 2(p−q)². Combine this with D_natural=Δln2. Pairwise-independent parity laws show why low-order covariance information misses total dependence."
    ],
    "followup": "What bound follows for the probability difference of any specified event under P and its product approximation?",
    "deliverable": "A finite quantitative stability theorem with a self-contained divergence proof."
  },
  {
    "unit": "core-entropy",
    "slug": "maximum-entropy-truncated-geometric",
    "tier": "research",
    "kind": "research-extension",
    "title": "Solve a finite maximum-entropy problem by a partition function",
    "prompt": "For an integer m≥1, among distributions on {0,…,m} with mean m/3, find the maximum entropy law and prove uniqueness. Use P_t(j)=e^{tj}/Z(t), natural parameter t, and determine t implicitly. Derive the maximum entropy value in bits and explain why the uniform law is not optimal under this mean constraint.",
    "prerequisites": [
      "Shannon entropy",
      "chain rule",
      "relative entropy",
      "binary entropy"
    ],
    "minutes": 100,
    "guide": [
      "For any candidate P, nonnegativity of D(P||P_t) gives H_2(P)≤[ln Z(t)−tE_P J]/ln2, with equality exactly at P_t. Thus choose t to make E_tJ=m/3.",
      "The mean is (ln Z)'(t), whose derivative is Var_t(J)>0 for finite t when m≥1. It ranges from zero to m, so the required t exists uniquely and is negative because t=0 gives mean m/2. This proves both attainment and uniqueness without a heuristic Lagrange-multiplier argument."
    ],
    "followup": "How do several linear expectation constraints change the exponential-family calculation?",
    "deliverable": "A uniquely specified maximizing distribution and an exact variational proof."
  },
  {
    "unit": "core-entropy",
    "slug": "conditional-information-parity",
    "tier": "doctoral",
    "kind": "synthesis",
    "title": "Pairwise information can appear after conditioning",
    "prompt": "Let U,V be independent fair bits and set W=U⊕V. Compute H(U,V,W), every pair entropy, I(U;V), I(U;V|W), and the total correlation. Explain why conditioning-reduces-entropy does not imply conditioning always reduces mutual information.",
    "prerequisites": [
      "Shannon entropy",
      "chain rule",
      "relative entropy",
      "binary entropy"
    ],
    "minutes": 45,
    "guide": [
      "The triple has four equiprobable states and entropy two bits. Every pair is uniform on four states, so all pair entropies are two and each unconditional pair mutual information is zero.",
      "Given W, either bit determines the other, giving I(U;V|W)=1. The total correlation is 3−2=1 bit. Conditional entropy decreases on average, but mutual information is a difference of conditional entropies, so its monotonicity under additional conditioning does not follow."
    ],
    "followup": "How does the chain-rule identity I(U;V,W)=I(U;W)+I(U;V|W) resolve the apparent paradox?",
    "deliverable": "A complete entropy table and a precise conditional-information explanation."
  },
  {
    "unit": "core-entropy",
    "slug": "one-heavy-atom-entropy",
    "tier": "examiner",
    "kind": "proof",
    "title": "The entropy cost of a prescribed heavy atom",
    "prompt": "Let X have support size at most M≥2 and suppose a designated state has probability a∈[0,1]. Prove H(X)≤H_2(a)+(1−a)log_2(M−1), characterize equality, and use the bound to quantify how far entropy falls below log_2 M when a is much larger than 1/M.",
    "prerequisites": [
      "Shannon entropy",
      "chain rule",
      "relative entropy",
      "binary entropy"
    ],
    "minutes": 60,
    "guide": [
      "Introduce B indicating the designated atom. Since B is determined by X, the chain rule gives H(X)=H_2(a)+(1−a)H(X|B=0). Bound the latter conditional entropy by log_2(M−1).",
      "Equality requires the remaining M−1 states to have equal mass, except for degenerate endpoint cases. The gap between log_2 M and the displayed entropy upper bound equals the binary divergence D_2(Bern(a)||Bern(1/M)), making the loss positive whenever a≠1/M."
    ],
    "followup": "What changes if one knows only that some atom has mass at least a≥1/M?",
    "deliverable": "A sharp entropy bound, equality cases and an exact divergence expression for the gap."
  },
  {
    "unit": "core-shearer",
    "slug": "fractional-coordinate-covers",
    "tier": "doctoral",
    "kind": "proof",
    "title": "A fractional form of Shearer's lemma",
    "prompt": "Let nonnegative weights α_S satisfy Σ_{S∋i}α_S≥1 for every coordinate i. Prove H(X)≤Σ_Sα_SH(X_S), and deduce |F|≤∏_S|π_SF|^{α_S} for finite nonempty F. Explain why real weights cause no rational-approximation problem.",
    "prerequisites": [
      "Shearer inequality",
      "projection families",
      "fractional covers",
      "chain-rule bookkeeping"
    ],
    "minutes": 40,
    "guide": [
      "Expand every H(X_S) using the same global coordinate order. Each term H(X_i|earlier coordinates in S) is at least H(X_i|all earlier coordinates). Multiplying by nonnegative α_S preserves the direction.",
      "After summing, each full-chain term is counted with total weight at least one. Entropies of discrete finite variables are nonnegative, so overcoverage is harmless. The proof directly permits real coefficients; for the family bound use a uniform member only on F, not on every projection."
    ],
    "followup": "What fails for differential entropy if the overcoverage step uses terms that may be negative?",
    "deliverable": "A fractional inequality and its finite cardinality corollary."
  },
  {
    "unit": "core-shearer",
    "slug": "regular-graph-independent-set-count",
    "tier": "doctoral",
    "kind": "proof",
    "title": "A local-star bound for all independent sets",
    "prompt": "Let G be d-regular on N vertices, d≥1, and let I(G) be its number of independent sets. Apply Shearer to closed-neighborhood projections and prove I(G)≤(2^d+1)^{N/(d+1)}. Explain why edges among a vertex's neighbors only improve the local bound.",
    "prerequisites": [
      "Shearer inequality",
      "projection families",
      "fractional covers",
      "chain-rule bookkeeping"
    ],
    "minutes": 45,
    "guide": [
      "Choose a uniform independent-set indicator vector. Every coordinate lies in exactly d+1 closed neighborhoods, so (d+1)H(X)≤Σ_vH(X_{N[v]}).",
      "In a closed neighborhood, either its center is absent, allowing at most 2^d neighbor subsets, or it is present, forcing all d neighbors absent. Thus each projection has at most 2^d+1 patterns. Additional neighbor-neighbor edges can remove patterns but cannot create any."
    ],
    "followup": "Check the inequality on a disjoint union of K_{d+1} and compare its slack.",
    "deliverable": "A neighborhood-cover proof and a deterministic local pattern count."
  },
  {
    "unit": "core-shearer",
    "slug": "triangle-join-bound",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "A projection inequality for a three-way relational join",
    "prompt": "Let R_AB⊆A×B, R_AC⊆A×C and R_BC⊆B×C be finite relations. Bound the size of J={(a,b,c):(a,b)∈R_AB,(a,c)∈R_AC,(b,c)∈R_BC} by √(|R_AB||R_AC||R_BC|). Give box relations attaining equality and explain why nonuniform projection distributions are harmless.",
    "prerequisites": [
      "Shearer inequality",
      "projection families",
      "fractional covers",
      "chain-rule bookkeeping"
    ],
    "minutes": 50,
    "guide": [
      "The three pair projections of J are contained in the supplied relations. Apply the two-fold coordinate-cover form of Shearer to a uniform triple in J, then bound each projected entropy by the logarithm of its support size.",
      "For A_0×B_0×C_0 take all pair relations to be complete boxes. Then |J|=|A_0||B_0||C_0| and the square-root product is identical. The actual projections of a general uniform J need not be uniform; only their support bounds were used."
    ],
    "followup": "What simpler bound follows from either two relations that together determine a triple?",
    "deliverable": "A join-size proof and an explicit equality construction."
  },
  {
    "unit": "core-shearer",
    "slug": "three-projection-equality",
    "tier": "examiner",
    "kind": "proof",
    "title": "Characterize equality in the three-coordinate entropy inequality",
    "prompt": "For finite X,Y,Z prove H(X,Y)+H(X,Z)+H(Y,Z)−2H(X,Y,Z)=I(X;Y|Z)+I(Z;(X,Y)). Deduce that equality in the three-coordinate Shearer inequality forces mutual independence. Explain the additional uniformity conditions needed for equality in the cardinality Loomis–Whitney inequality.",
    "prerequisites": [
      "Shearer inequality",
      "projection families",
      "fractional covers",
      "chain-rule bookkeeping"
    ],
    "minutes": 55,
    "guide": [
      "Expand both information terms by chain rules to obtain the displayed identity. Their nonnegativity makes the gap nonnegative.",
      "If the gap vanishes, Z is independent of (X,Y) and X,Y are conditionally independent given Z; together these force the full product law. For a uniform member of a finite family, equality of the cardinality bounds also requires projection entropies to reach their support logarithms. The resulting family is a Cartesian box, including degenerate coordinate sets."
    ],
    "followup": "Compute the entropy gap for a uniform parity triple and a fully diagonal triple.",
    "deliverable": "An exact gap identity and equality characterization at entropy and support levels."
  },
  {
    "unit": "core-shearer",
    "slug": "five-cycle-fractional-cover",
    "tier": "examiner",
    "kind": "construction",
    "title": "An odd-cycle fractional cover beats integral bookkeeping",
    "prompt": "For coordinates 1,…,5 let each adjacent-pair projection around a five-cycle have size at most R. Use weights 1/2 on the five pairs to prove |F|≤R^{5/2}. Show the exponent is sharp for square R and compare it with a bound obtained from an integral edge cover.",
    "prerequisites": [
      "Shearer inequality",
      "projection families",
      "fractional covers",
      "chain-rule bookkeeping"
    ],
    "minutes": 60,
    "guide": [
      "Every coordinate occurs in two cycle edges, so weights one half cover it exactly once. The fractional Shearer corollary gives the displayed product bound.",
      "For F=[m]^5 each pair projection has size m²=R and |F|=m^5=R^{5/2}, proving sharpness. An integral edge cover needs three of the pair sets and would only give R³ by the same support-size bookkeeping."
    ],
    "followup": "Why does a four-cycle not exhibit the same fractional-versus-integral gap for equal projection bounds?",
    "deliverable": "A fractional certificate, a sharp example and a cover comparison."
  },
  {
    "unit": "core-shearer",
    "slug": "triangle-count-from-edges",
    "tier": "research",
    "kind": "research-extension",
    "title": "Derive an asymptotically sharp triangle bound from projections",
    "prompt": "Let a finite simple graph have m edges and T triangles. Apply Loomis–Whitney to the set of ordered vertex triples forming triangles to prove T≤(√2/3)m^{3/2}. Show the leading constant is asymptotically sharp on complete graphs; keep all ordered/unordered factors explicit.",
    "prerequisites": [
      "Shearer inequality",
      "projection families",
      "fractional covers",
      "chain-rule bookkeeping"
    ],
    "minutes": 85,
    "guide": [
      "The triple set has size 6T. Each of its three ordered pair projections is contained in the 2m oriented edges, so (6T)²≤(2m)³.",
      "Rearrange to T≤√2 m^{3/2}/3. For K_n, m=n(n−1)/2 and T=n(n−1)(n−2)/6; their ratio tends to √2/3. The argument proves the asymptotic constant but does not supply the exact extremal formula at every integer m."
    ],
    "followup": "How would retaining the actual pair-projection sizes improve the bound when some edges lie in no triangle?",
    "deliverable": "A factor-checked proof and an asymptotic sharpness calculation."
  },
  {
    "unit": "core-shearer",
    "slug": "functional-triangle-inequality",
    "tier": "research",
    "kind": "research-extension",
    "title": "A weighted functional extension beyond support counting",
    "prompt": "For nonnegative finite arrays a_xy,b_xz,c_yz, prove Σ_{x,y,z}a_xy b_xz c_yz≤||a||_2||b||_2||c||_2. Recover the relational join bound for indicator arrays and exhibit a nontrivial family attaining equality. Use Cauchy–Schwarz rather than importing an unproved general hypergraph inequality.",
    "prerequisites": [
      "Shearer inequality",
      "projection families",
      "fractional covers",
      "chain-rule bookkeeping"
    ],
    "minutes": 100,
    "guide": [
      "First apply Cauchy–Schwarz over x,y to a_xy and Σ_z b_xz c_yz. The second factor is the Frobenius norm of BC^T, bounded by ||B||_F||C||_F, which itself follows by expanding and applying Cauchy–Schwarz to the row inner products.",
      "For equality take a_xy=u_xv_y, b_xz=u_xw_z and c_yz=v_yw_z with nonnegative vectors. Both sides equal (Σu_x²)(Σv_y²)(Σw_z²). Indicator arrays give the support-counting inequality as a special case."
    ],
    "followup": "Which equality conditions are lost when one array has zero rows or columns?",
    "deliverable": "A self-contained weighted theorem, its indicator specialization and equality examples."
  },
  {
    "unit": "core-shearer",
    "slug": "tree-entropy-upper-bound",
    "tier": "doctoral",
    "kind": "proof",
    "title": "A tree organizes a different entropy bound",
    "prompt": "For any finite vector X_V and a tree T on its coordinates, prove H(X_V)≤Σ_{uv∈E(T)}H(X_u,X_v)−Σ_v(deg_T(v)−1)H(X_v). Root the tree and state an exact conditional-independence criterion for equality.",
    "prerequisites": [
      "Shearer inequality",
      "projection families",
      "fractional covers",
      "chain-rule bookkeeping"
    ],
    "minutes": 45,
    "guide": [
      "Order vertices so each parent appears before its children. Chain rule and conditioning reduction give H(X_V)≤H(X_root)+Σ_{v≠root}H(X_v|X_parent(v)).",
      "Expand each conditional term to obtain the tree expression. Equality requires each X_v to be conditionally independent of all earlier nonparent coordinates given its parent, in the chosen order; equivalently the law has the corresponding tree factorization on its positive-probability conditioning states."
    ],
    "followup": "Why can negative coefficients of singleton entropies make a naive support-cardinality replacement invalid?",
    "deliverable": "A rooted chain-rule proof and an explicit equality condition."
  },
  {
    "unit": "core-shearer",
    "slug": "invalid-projection-division",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "Dividing by an overlap support can undercount badly",
    "prompt": "Disprove |F|≤|π_XYF||π_YZF|/|π_YF|. For m≥3 take F=([m]×{0}×[m])∪{(1,1,1)}. Compute all four cardinalities and give the correct fiberwise upper bound in terms of the two pair relations.",
    "prerequisites": [
      "Shearer inequality",
      "projection families",
      "fractional covers",
      "chain-rule bookkeeping"
    ],
    "minutes": 60,
    "guide": [
      "Here |F|=m²+1, each pair projection has size m+1, and the Y projection has size two. At m=3 the proposed right side is eight while |F|=ten.",
      "The correct join bound is Σ_y |{x:(x,y)∈π_XYF}|·|{z:(y,z)∈π_YZF}|. A single average denominator discards correlations between large fibers. The entropy tree bound subtracts H(Y), whose sign prevents replacing it by an upper support bound in that direction."
    ],
    "followup": "What uniform-fiber assumptions would make a division-by-overlap formula valid?",
    "deliverable": "A numerical counterexample and the exact fiberwise repair."
  },
  {
    "unit": "core-tester-color",
    "slug": "edit-distance-monochromatic-objective",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Colorability distance is a minimum monochromatic-edge objective",
    "prompt": "For a graph G prove that the minimum number of edge edits making it k-colorable equals min_φ |{uv∈E:φ(u)=φ(v)}| over all k-colorings φ of the vertices. For the balanced blow-up of K4 with four classes of size m, prove the exact 3-colorability distance is m².",
    "prerequisites": [
      "dense-graph edit distance",
      "proper colorings",
      "restriction trees",
      "one-sided testing"
    ],
    "minutes": 40,
    "guide": [
      "Deleting all monochromatic edges of any assignment makes it proper. Conversely any edited graph with a proper assignment must delete every original edge monochromatic under that assignment; edge additions cannot remove that obligation.",
      "For the K4 blow-up, fix all but one original part's color counts. The monochromatic-edge objective is linear in the remaining part's distribution, so concentrating that part in one best color cannot increase cost. Round all four parts this way. Four monochromatic parts in three colors force a merged pair costing m², and merging exactly one pair attains it."
    ],
    "followup": "What changes for weighted deletion costs or a promise that only edge additions are allowed?",
    "deliverable": "An exact distance identity and a rigorous blow-up optimization."
  },
  {
    "unit": "core-tester-color",
    "slug": "four-part-sample-detection",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Calculate a colorability tester on a blow-up exactly",
    "prompt": "For the balanced K4 blow-up on n=4m vertices, show that an induced sample is non-3-colorable exactly when it meets all four parts. Give an exact inclusion–exclusion formula for a uniform s-subset and the with-replacement limit for fixed s as m→∞. Relate its fixed farness 1/16 to sample complexity.",
    "prerequisites": [
      "dense-graph edit distance",
      "proper colorings",
      "restriction trees",
      "one-sided testing"
    ],
    "minutes": 45,
    "guide": [
      "Any sample meeting at most three parts is complete multipartite with at most three nonempty classes and is 3-colorable. Meeting all four yields a K4 by taking one representative from each part.",
      "The rejection probability is Σ_{j=0}^4(−1)^j C(4,j) C((4−j)m,s)/C(4m,s), with binomial coefficients zero when appropriate. The limit is 1−4(3/4)^s+6(1/2)^s−4(1/4)^s. The exact edit distance m² divided by n² is 1/16."
    ],
    "followup": "How does the formula change when the four parts have unequal sizes?",
    "deliverable": "A structural equivalence and two fully normalized probability formulas."
  },
  {
    "unit": "core-tester-color",
    "slug": "restriction-repair-inequality",
    "tier": "examiner",
    "kind": "proof",
    "title": "Derive the restricting-vertex abundance lemma",
    "prompt": "For a partial proper 3-coloring on S, let U be vertices with empty feasible lists. For v outside S∪U let δ(v) be the minimum, over its feasible colors, of the number of neighbors outside S∪U whose lists contain that color. Prove the repair bound d_3(G)≤n|S∪U|+(1/2)Σ_vδ(v), and deduce |S∪U∪{δ≥εn}|≥εn/2 when d_3(G)≥εn².",
    "prerequisites": [
      "dense-graph edit distance",
      "proper colorings",
      "restriction trees",
      "one-sided testing"
    ],
    "minutes": 50,
    "guide": [
      "Assign each remaining vertex a feasible color minimizing the relevant neighbor count, and assign arbitrary colors to U. At most n|S∪U| monochromatic edges touch the exceptional vertices; elsewhere each monochromatic edge is counted at both endpoints among their δ-bounds.",
      "If W={δ≥εn}, bound δ(v) by n on W and by εn outside W. The repair cost is at most n(|S∪U|+|W|)+(ε/2)n². Farness forces the displayed lower bound on the exceptional-plus-restricting set, with harmless weak/strict endpoint choices."
    ],
    "followup": "Where does the minimum over every feasible color prevent the tree from following only a favorable branch?",
    "deliverable": "A repair coloring construction and a quantitative abundance deduction."
  },
  {
    "unit": "core-tester-color",
    "slug": "adaptive-success-rounds",
    "tier": "examiner",
    "kind": "proof",
    "title": "A conditional sampling calculation for every tree branch",
    "prompt": "Suppose each unfinished branch of a ternary restriction tree needs at most D successful sampled vertices, with conditional success probability at least ρ at every draw until completion, and there are at most L possible color-choice paths. Prove a bound L P(Bin(s,ρ)<D) on failure and give an s sufficient for total failure η. Explain how sampling without replacement preserves ρ under an explicit exposed-vertex allowance.",
    "prerequisites": [
      "dense-graph edit distance",
      "proper colorings",
      "restriction trees",
      "one-sided testing"
    ],
    "minutes": 55,
    "guide": [
      "Couple each branch's success indicator to a fresh uniform random variable using its conditional success probability; until completion it dominates Bernoulli(ρ). Extend successes after completion if needed. Union-bound over at most L fixed color-choice paths.",
      "If sρ≥2D and sρ≥8ln(L/η), Chernoff gives the desired failure bound. In the graph application, if each useful set has size at least εn/2 and at most εn/4 vertices have been exposed, the remaining useful fraction is at least ε/4, so take ρ=ε/4. With D=O(1/ε) and ln L=O(D), this yields s=O((1+ln(1/η))/ε²)."
    ],
    "followup": "Why must one condition on the past rather than call the graph-dependent success sets independent?",
    "deliverable": "A conditional domination proof and an explicit sample-size inequality."
  },
  {
    "unit": "core-tester-color",
    "slug": "queries-versus-exponential-runtime",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Count the actual resources of the sample tester",
    "prompt": "Assume the source's 3-coloring sampling theorem uses s=⌈40/ε²⌉ vertices when n>400/ε³. Give a complete tester including the complementary small-n branch, its adjacency-query bound and a brute-force running-time bound. Explain why constant query complexity in n is consistent with NP-hard exact 3-colorability.",
    "prerequisites": [
      "dense-graph edit distance",
      "proper colorings",
      "restriction trees",
      "one-sided testing"
    ],
    "minutes": 60,
    "guide": [
      "In the large-n branch query every sampled pair, using at most C(s,2)=O(ε^−4) queries, and test the induced graph by up to 3^s color assignments. This is independent of n but exponential in ε^−2.",
      "For n≤400/ε³ query the whole graph and decide exactly, costing O(ε^−6) queries and at most 3^{O(ε^−3)} time. Combining the branches gives a function of ε only. The tester distinguishes valid from ε-far inputs and need not decide inputs in the intervening gap."
    ],
    "followup": "How can a better exact coloring subroutine improve time without changing the query argument?",
    "deliverable": "A fully specified algorithm and separate query, runtime and promise statements."
  },
  {
    "unit": "core-tester-color",
    "slug": "non-tolerant-blowup-counterexample",
    "tier": "research",
    "kind": "research-extension",
    "title": "A one-sided sample tester need not be tolerant",
    "prompt": "Take a complete four-partite graph on a δ fraction of n vertices with four equal parts, and leave all other vertices isolated. Prove its 3-colorability distance is δ²n²/16. Set δ=(2/5)√ε and show that sampling s=⌈40/ε²⌉ vertices rejects with probability tending to one as ε↓0, although the graph is only ε/100-far.",
    "prerequisites": [
      "dense-graph edit distance",
      "proper colorings",
      "restriction trees",
      "one-sided testing"
    ],
    "minutes": 85,
    "guide": [
      "The isolated vertices contribute no monochromatic edges. The same part-rounding argument as for the balanced full blow-up gives edit distance (δn/4)²=δ²n²/16, equal to εn²/100 for the chosen δ, up to integer rounding.",
      "Rejection occurs when all four small parts are hit. The probability of missing a fixed part in sampling without replacement is at most exp(−sδ/4), so rejection is at least 1−4e^{−sδ/4}. This tends to one. Thus testing exact colorability versus ε-farness does not supply acceptance of ε/100-close graphs."
    ],
    "followup": "What additional promise and algorithm would a genuinely tolerant tester need?",
    "deliverable": "A quantitative close-input rejection example and a precise distinction between the two testing promises."
  },
  {
    "unit": "core-tester-color",
    "slug": "unequal-blowup-investigation",
    "tier": "research",
    "kind": "research-extension",
    "title": "Investigate detection at fixed multipartite edit distance",
    "prompt": "For complete four-partite blow-ups with class fractions a_i>0 and possible isolated vertices, prove 3-colorability distance is n²min_{i<j}a_i a_j up to rounding. Derive the exact with-replacement rejection probability for s samples. Design a reproducible rational-grid search for the worst rejection probability under min pair-product≥ε, with balanced blow-ups as a baseline.",
    "prerequisites": [
      "dense-graph edit distance",
      "proper colorings",
      "restriction trees",
      "one-sided testing"
    ],
    "minutes": 100,
    "guide": [
      "Rounding each part's fractional color assignment to a single best color never increases the monochromatic objective. The optimal assignment merges exactly a minimum-product pair and places the other two parts in the remaining colors.",
      "Inclusion–exclusion gives P(hit all four)=Σ_{J⊆[4]}(−1)^{|J|}(1−Σ_{j∈J}a_j)^s. Enumerate rational a_i on a stated grid with Σa_i≤1, use exact arithmetic where feasible, and report finite-grid minima only. A claim about the continuous optimum additionally requires a certified optimization or approximation error bound."
    ],
    "followup": "Can an extremizer put positive mass in isolated vertices, and what would certify that conclusion?",
    "deliverable": "A distance proof, probability formula and a reproducible finite optimization protocol."
  },
  {
    "unit": "core-tester-color",
    "slug": "many-small-obstructions-distance",
    "tier": "doctoral",
    "kind": "synthesis",
    "title": "Many tiny obstructions can still be dense-model close",
    "prompt": "Let n be divisible by four and let G be a disjoint union of n/4 copies of K4. Compute its exact 3-colorability distance and bound the probability that a uniform s-subset contains a non-3-colorable induced subgraph. Explain why this does not contradict a constant-query tester for fixed ε.",
    "prerequisites": [
      "dense-graph edit distance",
      "proper colorings",
      "restriction trees",
      "one-sided testing"
    ],
    "minutes": 45,
    "guide": [
      "One edge deletion is necessary and sufficient per K4 component, so the distance is n/4 edits, normalized as 1/(4n). A sampled induced subgraph is non-3-colorable exactly when it contains all four vertices of at least one component.",
      "A union bound gives rejection at most (n/4) C(s,4)/C(n,4)=O(s^4/n³) for fixed s. The obstruction count is linear, while fixed dense-model farness requires quadratic edit distance; ε here shrinks with n."
    ],
    "followup": "What changes if each K4 vertex is replaced by a growing equal-size independent class?",
    "deliverable": "An exact edit distance and a normalized sampling estimate."
  },
  {
    "unit": "core-tester-color",
    "slug": "triangle-free-four-chromatic-witness",
    "tier": "examiner",
    "kind": "construction",
    "title": "Triangle samples alone cannot test 3-colorability",
    "prompt": "Construct the 11-vertex Mycielski graph of C5: retain cycle vertices v_i, add u_i adjacent to the two cycle neighbors of v_i, and add w adjacent to all u_i. Prove it is triangle-free and has chromatic number four. Explain why a tester checking only triangles targets the wrong obstruction family.",
    "prerequisites": [
      "dense-graph edit distance",
      "proper colorings",
      "restriction trees",
      "one-sided testing"
    ],
    "minutes": 60,
    "guide": [
      "The original C5 has no triangle, the u_i are mutually nonadjacent, w has no original-vertex neighbors, and a triangle involving one u_i would require its two cycle neighbors to be adjacent, which they are not. A 3-coloring of C5 extends to a 4-coloring by copying colors to u_i and using a new color at w.",
      "If a 3-coloring of the full graph existed, let w have color three, so no u_i does. Replace each original vertex of color three by the color of its copy u_i. Adjacency of copies to neighbors preserves properness and yields a 2-coloring of C5, impossible."
    ],
    "followup": "Why does a single non-3-colorable finite example not by itself establish dense-model farness for large inputs?",
    "deliverable": "An explicit adjacency description, two graph proofs and the testing implication."
  },
  {
    "unit": "core-triangle-removal",
    "slug": "triangle-packing-cover-gap",
    "tier": "doctoral",
    "kind": "proof",
    "title": "A maximal packing gives only a quadratic witness count",
    "prompt": "Let τ(G) be the minimum edge deletions making G triangle-free and ν(G) the maximum number of edge-disjoint triangles. Prove ν≤τ≤3ν. Deduce ν≥εn²/3 for an ε-far graph and explain why this does not yet prove the removal lemma's δn³ triangle count.",
    "prerequisites": [
      "triangle removal lemma",
      "regular pairs",
      "dense testing",
      "packing and covering"
    ],
    "minutes": 40,
    "guide": [
      "Every deletion set must meet every triangle of an edge-disjoint packing, requiring at least one distinct edge per packed triangle. Conversely remove all three edges of a maximal packing: any remaining triangle would be edge-disjoint from it and contradict maximality.",
      "Thus ε-farness forces Ω(εn²) edge-disjoint triangles, but the removal conclusion is cubic in n for fixed ε. The extra abundance is precisely the structural content supplied by regularity or another proof of triangle removal."
    ],
    "followup": "Give a graph where τ=ν and discuss how close τ can be to 3ν.",
    "deliverable": "Two deterministic inequalities and a clear accounting of the missing factor of n."
  },
  {
    "unit": "core-triangle-removal",
    "slug": "regular-triple-counting",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Prove a quantitative counting lemma for a regular triple",
    "prompt": "Let A,B,C each have m vertices and all three cross-pairs be η-regular with densities at least d, where 0<η<min(d/2,1/4). Prove there are at least (1−2η)(d−η)^3m³ triangles with one vertex in each part. State the regularity thresholds used on each neighborhood.",
    "prerequisites": [
      "triangle removal lemma",
      "regular pairs",
      "dense testing",
      "packing and covering"
    ],
    "minutes": 45,
    "guide": [
      "All but fewer than ηm vertices of A have at least (d−η)m neighbors in B, and the same holds for C; otherwise those exceptional vertices and the full opposite class violate regularity. At least (1−2η)m vertices are typical for both.",
      "For each typical a, both neighborhoods have size at least (d−η)m≥ηm. Regularity of (B,C) therefore gives at least (d−η)|N_B(a)||N_C(a)| edges between them. Sum over typical a; each triangle is counted exactly once at its A vertex."
    ],
    "followup": "Which parts fail if one dense pair is not regular?",
    "deliverable": "A full counting proof with every subset-size requirement checked."
  },
  {
    "unit": "core-triangle-removal",
    "slug": "regularity-cleanup-budget",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Check the deletion budget and the resulting δ",
    "prompt": "For 0<ε<1, assume an ε/4-regular equitable partition with exceptional set V_0, k between ⌈4/ε⌉ and T, and common class size c. Delete exceptional, internal, irregular-pair and density-below-ε/2 edges. Bound the four costs by εn²/4, εn²/8, εn²/4 and εn²/4, then derive the valid removal parameter δ=ε³/(512T³).",
    "prerequisites": [
      "triangle removal lemma",
      "regular pairs",
      "dense testing",
      "packing and covering"
    ],
    "minutes": 50,
    "guide": [
      "The sum of the displayed costs is 7εn²/8<εn², so an ε-far graph retains a triangle. It lies across three distinct nonexceptional classes, each pair regular and of density at least ε/2.",
      "At least c/2 vertices in one class have at least εc/4 neighbors in each other class. Every such vertex lies in at least (ε/4)^3c² triangles, and c³≥n³/(4T³) for the standard partition bounds. Multiplying yields ε³n³/(512T³). The regularity partition theorem is the explicitly assumed deep input."
    ],
    "followup": "How must n<T be handled when the displayed δn³ is below one?",
    "deliverable": "A complete cost ledger and a factor-checked abundance constant."
  },
  {
    "unit": "core-triangle-removal",
    "slug": "expectation-not-detection",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "A sampled triangle count can have constant mean and vanishing detection",
    "prompt": "Let G have a hub joined to every vertex of K_{m,m}, so n=2m+1. For a uniform s-subset with s=⌊n^{1/3}⌋, compute the expected sampled triangle count asymptotically and show its chance of containing any triangle tends to zero. Identify why an expectation-only argument fails.",
    "prerequisites": [
      "triangle removal lemma",
      "regular pairs",
      "dense testing",
      "packing and covering"
    ],
    "minutes": 55,
    "guide": [
      "Every triangle consists of the hub and one vertex from each side, so T=m². The expected sampled count is m² C(s,3)/C(n,3), tending to 1/4.",
      "Every sampled triangle requires including the hub, an event of probability s/n=O(n^−2/3). Conditional on that rare event, many triangles can appear. The graph can be made triangle-free by deleting only m hub edges, so it is not a fixed-ε far input; removal-based detection is unaffected."
    ],
    "followup": "What second-moment or structural information would turn an expected count into a detection probability?",
    "deliverable": "An exact expectation formula and a rare-hub upper bound on rejection."
  },
  {
    "unit": "core-triangle-removal",
    "slug": "noisy-oracle-one-sided-impossibility",
    "tier": "examiner",
    "kind": "proof",
    "title": "Full-support query noise destroys exact one-sided certification",
    "prompt": "Suppose each adjacency answer is independently flipped with fixed probability θ∈(0,1/2), including repeated queries. Prove that no tester using an almost-sure finite bounded number of queries can both reject some far input with positive probability and accept every triangle-free graph with probability one. Contrast this with two-sided high-confidence testing.",
    "prerequisites": [
      "triangle removal lemma",
      "regular pairs",
      "dense testing",
      "packing and covering"
    ],
    "minutes": 60,
    "guide": [
      "Fix internal random coins on a positive-measure set yielding some finite rejecting transcript on the far graph. Under the empty graph every finite response pattern has positive probability because both answers have nonzero noise probability, even with adaptive queries.",
      "Therefore that rejecting behavior also has positive probability on a triangle-free input, contradicting exact one-sided acceptance. Repetition can make false rejection very small, but cannot make it exactly zero with a bounded finite number of full-support noisy observations."
    ],
    "followup": "What changes with a one-sided oracle noise model that never reports a nonexistent edge?",
    "deliverable": "A transcript-support impossibility proof and a precise distinction between zero and small error."
  },
  {
    "unit": "core-triangle-removal",
    "slug": "removal-to-cyclic-progressions",
    "tier": "research",
    "kind": "research-extension",
    "title": "Use triangle removal to force a cyclic arithmetic progression",
    "prompt": "Assume triangle removal. For fixed α>0 and sufficiently large odd N, prove every A⊆Z_N of size at least αN contains distinct a,b,c with a+b=2c. Build a tripartite graph on three copies of Z_N using differences a,b and doubled c, and count its edge-disjoint trivial triangles under the contrary assumption.",
    "prerequisites": [
      "triangle removal lemma",
      "regular pairs",
      "dense testing",
      "packing and covering"
    ],
    "minutes": 85,
    "guide": [
      "Put edges x–y when y−x∈A, y–z when z−y∈A, and x–z when (z−x)/2∈A; division by two is valid for odd N. Triangles correspond to a,b,c∈A with a+b=2c.",
      "If only trivial progressions exist, triangles are (x,x+a,x+2a), totaling |A|N, and are edge-disjoint because each of their edge types identifies x,a uniquely. Thus at least |A|N≥αN² deletions are needed, making the 3N-vertex graph α/9-far. Removal forces Ω_α(N³) triangles, contradicting the O(N²) count for large N."
    ],
    "followup": "Explain why a nontrivial solution in an odd cyclic group has three distinct elements.",
    "deliverable": "A complete graph reduction with all scale factors and the assumed removal input named."
  },
  {
    "unit": "core-triangle-removal",
    "slug": "behrend-removal-parameter-barrier",
    "tier": "research",
    "kind": "research-extension",
    "title": "Derive a superpolynomial barrier from a supplied progression-free set",
    "prompt": "Assume the deep construction that for arbitrarily large m there is A⊆[m] with no nontrivial three-term progression and |A|≥m e^{−C√ln m}. Thin A to a prescribed comparable size, embed it in Z_{4m+1}, and use the tripartite construction to show that no uniform triangle-removal lower bound δ(ε)≥cε^b can hold for fixed c,b>0.",
    "prerequisites": [
      "triangle removal lemma",
      "regular pairs",
      "dense testing",
      "packing and covering"
    ],
    "minutes": 100,
    "guide": [
      "With N=4m+1 and s=|A|, only trivial cyclic progressions occur because a+b and 2c lie below N. The graph has n=3N vertices, exactly sN edge-disjoint triangles, and normalized deletion distance ε_m=s/(9N), attained by deleting all edges of one type.",
      "Its triangle density is s/(27N²)=ε_m/(3N). Choose the thinning so ε_m→0 with ε_m bounded below by a constant times e^{−C√ln m}. For every fixed b, [ε_m/(3N)]/ε_m^b→0, since ln N dominates √ln m. The progression-free construction is assumed; the reduction and parameter comparison are the student's proof."
    ],
    "followup": "What query lower bound follows specifically for a tester that samples independent vertex triples?",
    "deliverable": "A supplied-construction reduction and a quantified failure of every polynomial δ lower bound."
  },
  {
    "unit": "core-triangle-removal",
    "slug": "blowup-exact-deletion-distance",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Balanced blow-ups preserve triangle edit distance exactly",
    "prompt": "Let H be a fixed graph and replace every vertex by an independent class of m vertices, every base edge by a complete bipartite block. Prove T(H^{(m)})=m³T(H) and τ(H^{(m)})=m²τ(H). For the lower bound use uniformly chosen representatives from all classes.",
    "prerequisites": [
      "triangle removal lemma",
      "regular pairs",
      "dense testing",
      "packing and covering"
    ],
    "minutes": 45,
    "guide": [
      "Each triangle uses three distinct classes and corresponds to a unique base triangle, with m³ choices. Deleting every block corresponding to an optimal base deletion set proves the distance upper bound.",
      "After any triangle-destroying deletion set D in the blow-up, choose one uniform representative per class. The surviving representative graph is triangle-free, so at least τ(H) base edges are missing. Its expected number of missing edges is |D|/m², forcing |D|≥m²τ(H)."
    ],
    "followup": "Does the same representative proof extend to induced forbidden-pattern edit distance, where additions may also be needed?",
    "deliverable": "Exact count and distance scaling with a randomized lower-bound certificate."
  },
  {
    "unit": "core-triangle-removal",
    "slug": "triangle-incidence-distance-bounds",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "What raw triangle count alone can certify",
    "prompt": "Let G have T triangles and maximum degree Δ≥2. Prove T/(Δ−1)≤τ(G)≤T, where τ is triangle-deletion distance, and compare these bounds with triangle removal. Give examples showing that Θ(n²) triangles can coexist with only O(n) required deletions.",
    "prerequisites": [
      "triangle removal lemma",
      "regular pairs",
      "dense testing",
      "packing and covering"
    ],
    "minutes": 60,
    "guide": [
      "Each deleted edge destroys at most its number of common neighbors, at most Δ−1. Charging every original triangle to one deleted edge proves the lower bound. For the upper bound choose one edge from each original triangle and delete their union.",
      "The hub over K_{m,m} has m² triangles but deletion of m hub edges suffices, illustrating the O(n) distance possibility. Removal runs in the opposite useful direction: fixed quadratic distance forces cubic abundance, whereas a raw count below that scale may permit concentrated, easily destroyed triangles."
    ],
    "followup": "Check both inequalities on disjoint triangles and on complete graphs.",
    "deliverable": "Two incidence bounds and a quantitatively contrasting family."
  },
  {
    "unit": "core-hereditary",
    "slug": "cluster-graphs-induced-paths",
    "tier": "doctoral",
    "kind": "proof",
    "title": "A hereditary property that is not edge-monotone",
    "prompt": "Prove that a graph has no induced three-vertex path P3 exactly when each connected component is a clique. Show this property is hereditary but not closed under edge deletion, using a three-vertex example. Describe the full edge/nonedge certificate for an induced P3.",
    "prerequisites": [
      "induced forbidden subgraphs",
      "hereditary properties",
      "induced removal input",
      "oblivious testing"
    ],
    "minutes": 40,
    "guide": [
      "If a component is not complete, choose two nonadjacent vertices with a shortest connecting path. Its first three vertices form an induced P3, since a shortcut would contradict shortestness. Conversely a disjoint union of cliques has no such induced path.",
      "Vertex deletion preserves the clique-component description. Deleting one edge from K3 produces P3 and violates the property, proving failure of edge monotonicity. The witness requires two present edges and the absent endpoint edge, not merely a two-edge subgraph."
    ],
    "followup": "What forbidden induced graph describes complements of these graphs?",
    "deliverable": "A structural characterization and a minimal edge-deletion counterexample."
  },
  {
    "unit": "core-hereditary",
    "slug": "bounded-obstruction-sampling",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Derive a tester from a quantitative induced-removal input",
    "prompt": "Assume that every ε-far graph contains at least δn^h unordered induced copies of some forbidden H with h≤h_0, where h_0,δ depend only on ε. Design a one-sided tester with failure η by sampling independent blocks of h_0 distinct vertices. Explain how to handle the unknown H and h within each block.",
    "prerequisites": [
      "induced forbidden subgraphs",
      "hereditary properties",
      "induced removal input",
      "oblivious testing"
    ],
    "minutes": 45,
    "guide": [
      "Query every pair in a block and reject if it contains any forbidden induced graph of size at most h_0. Its first h sampled vertices form a uniform h-subset, which is an H-copy with probability at least δn^h/C(n,h)≥δ, under the assumed normalization.",
      "Use r=⌈ln(1/η)/δ⌉ independent blocks, giving miss probability at most e^{−rδ}. All valid graphs have no forbidden induced witness and are always accepted. If n<h_0, inspect the full graph. The abundance assertion is the assumed deep input, not something proved by the sampling calculation."
    ],
    "followup": "How would labeled-copy normalization change the displayed per-block success estimate?",
    "deliverable": "A tester, query budget O(rh_0²), and a factor-checked rejection bound."
  },
  {
    "unit": "core-hereditary",
    "slug": "infinite-obstructions-can-be-close",
    "tier": "examiner",
    "kind": "construction",
    "title": "Unbounded minimal obstructions need not be far",
    "prompt": "For the hereditary property of chordality, prove that each cycle C_ℓ, ℓ≥4, is a minimal forbidden induced graph: it is not chordal but every proper induced subgraph is chordal. Compute its exact edit distance to chordality and explain compatibility with an ε-dependent bounded-witness theorem.",
    "prerequisites": [
      "induced forbidden subgraphs",
      "hereditary properties",
      "induced removal input",
      "oblivious testing"
    ],
    "minutes": 50,
    "guide": [
      "A chordless cycle of length at least four is nonchordal by definition. Every proper induced subgraph of a cycle is a disjoint union of paths, hence a forest and chordal.",
      "Deleting one cycle edge makes a path, so the edit distance is exactly one, normalized as 1/ℓ². Thus arbitrarily large minimal obstructions exist, but their normalized distances tend to zero. A witness bound for fixed ε-far inputs does not bound all minimal forbidden graphs."
    ],
    "followup": "Why would a theorem bounding all minimal forbidden sizes be much stronger than testability?",
    "deliverable": "A minimal-obstruction proof and an exact normalized-distance calculation."
  },
  {
    "unit": "core-hereditary",
    "slug": "semihereditary-nonempty-example",
    "tier": "examiner",
    "kind": "proof",
    "title": "A concrete semi-hereditary property beyond hereditary ones",
    "prompt": "For n≥2 let P mean 'triangle-free and containing at least one edge'; define its one-vertex case to be accepted. Show P is not hereditary, but is semi-hereditary with hereditary envelope H=triangle-free. Give an explicit M(ε) and derive a tester from triangle-freeness testing with a suitable accuracy adjustment.",
    "prerequisites": [
      "induced forbidden subgraphs",
      "hereditary properties",
      "induced removal input",
      "oblivious testing"
    ],
    "minutes": 55,
    "guide": [
      "A graph with one edge and at least two isolated vertices belongs to P, but its induced two-isolate subgraph does not. P is contained in H. The only n≥2 graphs in H but outside P are edgeless, and adding one edge repairs them.",
      "Therefore for n>1/√ε no H-graph is ε-far from P, establishing the semi-hereditary condition. More quantitatively d_P(G)≤d_H(G)+1, so for n²≥2/ε, ε-farness from P implies ε/2-farness from H. Treat smaller n exactly and invoke the triangle-free tester at ε/2 for larger n."
    ],
    "followup": "Why must a naive tester that checks P on every induced sample fail one-sided correctness?",
    "deliverable": "A nonhereditary example, an explicit envelope threshold and a valid testing reduction."
  },
  {
    "unit": "core-hereditary",
    "slug": "complement-testing-transfer",
    "tier": "examiner",
    "kind": "synthesis",
    "title": "Complementation preserves induced testing structure",
    "prompt": "For any hereditary property P, define its complement property by G∈P^c iff the complement graph lies in P. Prove heredity, equality of dense edit distances under complement, and a query-preserving transfer of one-sided testers. Identify the forbidden induced family for complements of disjoint unions of cliques.",
    "prerequisites": [
      "induced forbidden subgraphs",
      "hereditary properties",
      "induced removal input",
      "oblivious testing"
    ],
    "minutes": 60,
    "guide": [
      "Complementation commutes with taking induced vertex sets and converts each edge addition into a deletion and each deletion into an addition. It is a bijection preserving the number of edited unordered pairs.",
      "Simulate each query to the complement by inverting the original adjacency bit, so query complexity and one-sided correctness are preserved. Complements of cluster graphs are complete multipartite graphs; the forbidden induced P3 becomes its complement, an edge together with an isolated vertex."
    ],
    "followup": "Why does the corresponding statement for non-induced forbidden copies require additional care?",
    "deliverable": "A structural, metric and algorithmic transfer proof with an explicit forbidden graph."
  },
  {
    "unit": "core-hereditary",
    "slug": "small-edit-envelope-theorem",
    "tier": "research",
    "kind": "research-extension",
    "title": "A uniform subquadratic envelope gives an oblivious tester",
    "prompt": "Let P⊆H, where H is hereditary and has an oblivious one-sided tester. Assume every n-vertex H-graph is within g(n)=o(n²) edits of P, and P is decidable on every finite graph. Prove P is semi-hereditary and construct an oblivious one-sided tester, explicitly handling the sample-size cutoff without rejecting valid P-graphs for nonhereditary sample failures.",
    "prerequisites": [
      "induced forbidden subgraphs",
      "hereditary properties",
      "induced removal input",
      "oblivious testing"
    ],
    "minutes": 85,
    "guide": [
      "Triangle inequality gives d_P(G)≤d_H(G)+g(n). Choose M so g(n)≤εn²/2 for n≥M. Then ε-farness from P implies ε/2-farness from H, and an H-graph cannot be ε-far from P for sufficiently large n.",
      "Choose a fixed sample size Q larger than M and the H-tester's required size. If fewer than Q vertices are returned, the whole graph is known and P can be decided exactly. If Q are returned, use only the H-test on a uniform required subsample. At n=Q this is still sound by Q>M; do not apply P directly to large induced samples."
    ],
    "followup": "Which step uses uniform subquadratic closeness over all H-graphs rather than closeness on average?",
    "deliverable": "A general envelope theorem and a fully specified oblivious testing construction."
  },
  {
    "unit": "core-hereditary",
    "slug": "bounded-witness-plus-finite-removal",
    "tier": "research",
    "kind": "research-extension",
    "title": "Recover abundance from a bounded-witness corollary plus a finite removal theorem",
    "prompt": "Assume P is hereditary and every γ-far graph has a forbidden induced witness of size at most W_P(γ). Also assume the induced-removal theorem only for finite forbidden families. Prove these two inputs imply a quantitative abundance statement sufficient to test P. Distinguish the roles of the two deep inputs.",
    "prerequisites": [
      "induced forbidden subgraphs",
      "hereditary properties",
      "induced removal input",
      "oblivious testing"
    ],
    "minutes": 100,
    "guide": [
      "Fix ε and let F consist of every non-P graph with at most W_P(ε/2) vertices; this is a finite isomorphism family. If G could be edited within fewer than εn²/2 steps to an induced-F-free G', the witness contrapositive would make G' less than ε/2-far from P.",
      "The two edit paths would then make G less than ε-far from P, a contradiction. Therefore an ε-far G is ε/2-far from induced-F-freeness. Apply finite-family induced removal to obtain many copies of one member of F, then the elementary sampling lemma. The existence of one witness alone was insufficient; finite removal supplies abundance."
    ],
    "followup": "How are strict versus weak edit-distance thresholds handled by replacing ε/2 with ε/3?",
    "deliverable": "A reduction from bounded witnesses to abundance with all dependencies on ε explicit."
  },
  {
    "unit": "core-hereditary",
    "slug": "nonedges-are-essential-certificates",
    "tier": "doctoral",
    "kind": "proof",
    "title": "Present-edge observations cannot certify a cluster-graph obstruction",
    "prompt": "A deterministic query transcript records only the edges observed present and ignores all nonedge answers. Prove that such a transcript can never certify failure of the cluster-graph property. Contrast it with a fully observed induced P3 and explain the consequence for one-sided tester design.",
    "prerequisites": [
      "induced forbidden subgraphs",
      "hereditary properties",
      "induced removal input",
      "oblivious testing"
    ],
    "minutes": 45,
    "guide": [
      "Every collection of observed present edges can be completed to the complete graph on the same vertices, which is a single clique and satisfies the property. Therefore positive-edge observations alone never force a violation in all compatible completions.",
      "An induced P3 fixes two edges present and the endpoint pair absent, and every graph with that induced triple fails the property. A one-sided tester needs a transcript incompatible with every valid input; for a nonmonotone hereditary property this can require nonedge information."
    ],
    "followup": "What analogous distinction arises between ordinary C4 copies and induced C4 copies inside K4?",
    "deliverable": "A completion argument and an explicit minimal mixed edge/nonedge certificate."
  },
  {
    "unit": "core-hereditary",
    "slug": "sample-membership-not-always-safe",
    "tier": "examiner",
    "kind": "counterexample",
    "title": "A semi-hereditary property cannot simply be checked on every sample",
    "prompt": "For P='triangle-free with at least one edge' on n≥2, take a valid graph consisting of one edge and n−2 isolates. For fixed sample size s≥2 compute the chance that the induced sample fails P. Explain why rejecting whenever the sample fails P violates one-sided correctness, despite P being one-sided testable.",
    "prerequisites": [
      "induced forbidden subgraphs",
      "hereditary properties",
      "induced removal input",
      "oblivious testing"
    ],
    "minutes": 60,
    "guide": [
      "The sample has an edge only if it contains both endpoints of the unique edge, with probability s(s−1)/[n(n−1)]. Every other sample is edgeless and hence fails P.",
      "Thus naive rejection occurs with probability 1−s(s−1)/[n(n−1)], tending to one on valid inputs. A correct envelope-based tester checks the hereditary condition on large samples and reserves exact P-membership for input sizes known to be fully observed below its fixed cutoff."
    ],
    "followup": "Why is the analogous rule safe for a genuinely hereditary property?",
    "deliverable": "An exact rejection probability and a corrected sample decision rule."
  }
];
