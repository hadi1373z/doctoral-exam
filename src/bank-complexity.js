/* Original advanced problems. Fields and protocol variants are specified in each prompt. */
const BANK_COMPLEXITY = [
  {
    unit:'core-lfkn-permanent',slug:'lfkn-balanced-compression',tier:'doctoral',kind:'construction',
    title:'Balance the minor-compression tree',
    prompt:'At matrix dimension k, expansion produces k claimed permanents of (k−1)×(k−1) matrices over F_q. Replace sequential pairwise compression by a balanced binary tree, sending every polynomial at a tree level before sampling that level’s fresh points. Compare sequential, balanced and one-curve compression in rounds, coefficients, field operations and total soundness degree budget through dimension n.',
    prerequisites:['Permanent expansion','Polynomial root bound','Binary trees'],minutes:40,
    guide:[
      'A pairwise merge at this stage uses a degree-at-most k−1 polynomial. There are k−1 merges regardless of the tree shape, so the sum of discrepancy degrees is (k−1)². Independent subtrees can be processed together; a balanced tree has ceil(log₂ k) layers. Conditioning on all messages already fixed at a layer permits a union bound without assuming that cheating events are independent.',
      'Summing over k gives O(n²), O(n log n) and O(n) communication rounds for sequential merges, balanced merges and the degree-(k−1)² interpolation curve respectively. All three send O(n³) field elements in this direct implementation and have O(n³/q) soundness error. Count evaluation/interpolation work separately from message length and multiply field-element counts by ceil(log₂ q) for bit communication.'
    ],
    followup:'Can independent challenges at one tree level be replaced by one shared challenge without changing the union-bound proof?',
    deliverable:'Three-column resource table and a conditional soundness proof for the balanced protocol.',
    references:[{title:'Lund–Fortnow–Karloff–Nisan, Algebraic Methods for Interactive Proof Systems',url:'https://lance.fortnow.com/papers/files/ip.pdf'}]
  },
  {
    unit:'core-lfkn-permanent',slug:'lfkn-sharp-root-loss',tier:'doctoral',kind:'construction',
    title:'Make the one-step root bound tight',
    prompt:'Fix d≥1 and a prime power q>d+2. In a merge of d×d matrices take C=0 and D=I_d. Construct false endpoint claims and a legal degree-d prover polynomial for which the fresh random compression point erases the false claim with probability exactly d/q. Explain why endpoint checks do not improve this worst-case bound.',
    prerequisites:['Permanent of a diagonal matrix','Polynomial interpolation','Finite fields'],minutes:30,
    guide:[
      'The truthful restriction is f(t)=per(tI_d)=t^d. Choose d distinct roots S contained in F_q minus {0,1}, and a nonzero scalar c. Set g(t)=t^d+c∏_{a∈S}(t−a), and announce g(0),g(1) as the endpoint values. Both endpoint values are false because neither endpoint belongs to S, but the verifier’s endpoint consistency checks succeed.',
      'The discrepancy has exactly the d prescribed roots, so the reduced claim becomes truthful on exactly d of the q possible challenges. The degree may drop after cancellation for a particular c, but remains at most d and the discrepancy still has degree d. This is a worst-case example for one merge, not a claim that every level of a full permanent protocol simultaneously attains its union bound.'
    ],
    followup:'What changes if the verifier samples uniformly from F_q minus {0,1}?',
    deliverable:'Explicit C,D,g, endpoint claims and an exact collision probability.'
  },
  {
    unit:'core-lfkn-permanent',slug:'lfkn-value-message-basis',tier:'doctoral',kind:'proof',
    title:'Replace coefficient messages by evaluation messages',
    prompt:'A merge requires a polynomial of degree at most d over F_q, with q>d+2. Specify a protocol in which the prover sends d+1 values at fixed distinct public nodes instead of coefficients. Give the verifier’s interpolation formula, endpoint and random-point checks, and a direct polynomial bound on arithmetic and bit costs.',
    prerequisites:['Lagrange interpolation','Finite-field arithmetic','Protocol message order'],minutes:35,
    guide:[
      'Fix distinct nodes α₀,…,α_d before interaction. Every received value vector determines one polynomial g(t)=∑v_i∏_{j≠i}(t−α_j)/(α_i−α_j). Thus a bounded-length value message enforces the degree cap just as a bounded coefficient message does. Check g(0) and g(1) against the two current claims, then choose a fresh uniform r and continue with g(r).',
      'Using direct Lagrange evaluation costs O(d²) field operations per evaluated point, with denominator inverses precomputed once for fixed nodes. Each message contains (d+1)ceil(log₂ q) bits, apart from framing; field operations are polynomial in log q under an explicit field representation. Soundness is basis-independent because a false endpoint forces this uniquely determined g to differ from the truthful degree-d restriction.'
    ],
    followup:'Why must a verifier reject duplicate interpolation nodes rather than treating the resulting system as another representation?',
    deliverable:'Complete message specification and a resource bound in d and log q.'
  },
  {
    unit:'core-lfkn-permanent',slug:'lfkn-entropy-challenges',tier:'examiner',kind:'proof',
    title:'Soundness with imperfect random challenges',
    prompt:'At each compression, suppose the challenge distribution D_h, conditioned on the entire prior public history h and the current prover polynomial, satisfies max_a D_h(a)≤2^(−H). Prove a soundness bound for discrepancy degrees d₁,…,d_L. Give a matching one-step example when the challenge support has at most d points, and audit reduction modulo q of a uniformly sampled b-bit integer.',
    prerequisites:['Conditional probability','Min-entropy','Root counting'],minutes:35,
    guide:[
      'A fixed nonzero discrepancy of degree d has at most d roots, so its collision probability is at most min(1,d·2^(−H)). Sum these conditional bounds at the first loss of a false-claim invariant. The entropy requirement must hold after the polynomial message; a marginally uniform challenge correlated with that message supplies no such guarantee.',
      'If the support S has size at most d, a discrepancy containing ∏_{a∈S}(X−a) can vanish at every possible challenge. For U mod q with U uniform on b bits, each atom is at most ceil(2^b/q)/2^b, giving the corresponding d-times-largest-atom bound. Rejection sampling restores uniformity; a truncation event needs its own error budget.'
    ],
    followup:'Is a large Shannon entropy sufficient to substitute H in the bound?',
    deliverable:'Conditional theorem, support attack and an explicit biased-sampling bound.'
  },
  {
    unit:'core-lfkn-permanent',slug:'lfkn-extension-field-nodes',tier:'examiner',kind:'counterexample',
    title:'Interpolation nodes in small characteristic',
    prompt:'A proposed batched compression uses the integer labels 0,1,…,k−1 as interpolation nodes over F_(2^ℓ), claiming that 2^ℓ>k makes them distinct. Exhibit the error and repair the protocol using an explicit representation F_2[T]/(f). State the matrix-curve degree, permanent degree and communication cost for k claims about d×d matrices.',
    prerequisites:['Extension fields','Lagrange interpolation','Individual and total degree'],minutes:35,
    guide:[
      'Integer embedding into a characteristic-two field sends every even integer to 0 and every odd integer to 1. Cardinality does not make those particular field elements distinct. Instead fix an irreducible degree-ℓ polynomial f and enumerate k distinct ℓ-bit coefficient vectors representing residue classes, with 2^ℓ≥k.',
      'Lagrange interpolation through matrices B₁,…,B_k produces a matrix curve C(t) with entry degree at most k−1. Its d-dimensional permanent has degree at most d(k−1), so send d(k−1)+1 coefficients and test all prescribed nodes before the fresh challenge. Communication is O(dkℓ) bits for this polynomial message, plus the initial scalar claims. Field construction and arithmetic must use the agreed representation.'
    ],
    followup:'Does increasing ℓ also increase the characteristic relevant to reconstructing an integer permanent?',
    deliverable:'A characteristic-two counterexample and a fully specified repaired interpolation scheme.'
  },
  {
    unit:'core-lfkn-permanent',slug:'lfkn-batch-independent-matrices',tier:'examiner',kind:'synthesis',
    title:'Batch independent permanent assertions safely',
    prompt:'You are given k unrelated d×d matrices A_i over F_q and claimed permanents s_i, with q≥k. Audit the proposal to verify only ∏s_i using a block-diagonal permanent. Then design one random-point interpolation reduction that retains an incorrect-claim invariant whenever at least one s_i is false. Quantify degree, messages and error.',
    prerequisites:['Block-diagonal permanents','Interpolation curves','Soundness invariants'],minutes:40,
    guide:[
      'A product equality does not certify every factor. For example A₁=[0], A₂=[1] and claims (0,2) over a field of characteristic greater than two pass the product check. Zero factors can mask arbitrary false assertions, and even nonzero factors can compensate multiplicatively.',
      'Choose distinct α_i and interpolate a degree-(k−1) matrix curve through the A_i. Ask for a polynomial g of degree at most d(k−1), check g(α_i)=s_i for every i, and sample uniform r. Any incorrect s_i implies g differs from per(C(t)); the reduced assertion at C(r) remains false except with probability at most d(k−1)/q. Follow it by the ordinary dimension-reducing protocol and add the two error budgets.'
    ],
    followup:'For k=1, what reduction is necessary, and how should the degree-zero edge case be handled?',
    deliverable:'A masking example and a protocol for batching k same-dimension assertions.'
  },
  {
    unit:'core-lfkn-permanent',slug:'lfkn-characteristic-versus-size',tier:'examiner',kind:'counterexample',
    title:'Separate field size from integer information',
    prompt:'A verifier uses F_(p^ℓ) with enormous p^ℓ to obtain a tiny root-bound error, then claims that one verified field value uniquely determines the integer permanent of a 0–1 matrix. Refute the inference even when the field contains more than n! elements. Explain the special role of characteristic two and give separate conditions for algebraic soundness and integer reconstruction.',
    prerequisites:['Characteristic of a field','Integer-to-field homomorphisms','Permanent and determinant'],minutes:35,
    guide:[
      'The homomorphism from integers into F_(p^ℓ) has kernel pZ regardless of ℓ. An extension field enlarges the challenge space but does not reveal more than the residue modulo p of an integer permanent. For the 2×2 all-ones matrix the permanent is 2, which maps to zero in every characteristic-two extension, however large that extension is.',
      'In characteristic two, determinant and permanent coincide because the signs in the determinant disappear. Computing that residue is therefore much weaker than recovering the integer count. Root-bound soundness depends on q=p^ℓ relative to discrepancy degrees; unique integer reconstruction depends on a bound for the integer range and on the characteristic modulus, or on the product of distinct characteristic primes.'
    ],
    followup:'Can several fields of characteristics p,p,p supply three independent CRT moduli?',
    deliverable:'A numerical counterexample and two explicitly different parameter requirements.'
  },
  {
    unit:'core-lfkn-permanent',slug:'lfkn-restart-audit',tier:'research',kind:'research-extension',
    title:'Audit selective restart policies',
    prompt:'Modify a degree-d compression so that the prover may abort after seeing r and request another fresh challenge, with at most T attempts. Analyze both unconditional false acceptance and false acceptance conditioned on eventual completion. Give a policy attaining the qualitative gap, and design a verifier rule that preserves a stated error budget η.',
    prerequisites:['Root-bound soundness','Stopping events','Conditional distributions'],minutes:45,
    guide:[
      'If each polynomial is fixed before its attempt’s fresh challenge, a false assertion can escape in at most d/q probability per attempt. A union bound gives unconditional false acceptance at most Td/q, even if later polynomials depend on earlier failed challenges. Choosing q≥Td/η preserves an η budget for this step.',
      'The prover can abort precisely when the challenge is not a root of a chosen discrepancy. Then every completed execution can be a false acceptance, although completion is rare; conditional soundness is not the original soundness definition. Count an abort as rejection, cap retries globally and report acceptance probability over all verifier randomness. An unbounded restart policy can eventually hit a root with probability one.'
    ],
    followup:'What changes if the application retries an aborted proof outside the verifier’s recorded attempt counter?',
    deliverable:'A stopping-policy attack, a repaired verifier specification and a theorem distinguishing conditional from unconditional error.'
  },
  {
    unit:'core-lfkn-permanent',slug:'lfkn-corrupted-oracle-correction',tier:'research',kind:'research-extension',
    title:'Recover a permanent from a corrupted evaluation oracle',
    prompt:'Let O agree with permanent on at least 1−ρ of all d×d matrices over F_q. For a target A choose a uniform matrix R and query O(A+tR) at L distinct nonzero t, where q>L and L>d. Use univariate error correction to recover per(A), stating a sufficient success bound without independence assumptions on the queried errors. Compare this fixed-oracle model with an interactive cheating prover.',
    prerequisites:['Permanent polynomial degree','Reed–Solomon unique decoding','Markov inequality'],minutes:50,
    guide:[
      'For every nonzero t, A+tR is uniform, so the expected number Z of corrupted answers is at most Lρ. The restriction t↦per(A+tR) has degree at most d. A unique decoder corrects t₀=floor((L−d−1)/2) errors, and Markov gives failure probability at most Lρ/(t₀+1). Choose L and ρ so this is below one, then amplify with independent choices of R.',
      'Queries on one affine line are correlated; the expectation and Markov argument deliberately avoid a binomial-tail claim. The oracle must be one fixed function with the stated global agreement. An adaptive prover allowed to see the entire line can corrupt every queried point while having no meaningful pre-existing distance from permanent, so the same premise does not follow from interactive access alone.'
    ],
    followup:'Can a quadratic matrix curve give pairwise-independent query locations while retaining a polynomial restriction degree?',
    deliverable:'A decoder algorithm, a parameter inequality for success, and a precise comparison of oracle and interactive models.'
  },

  {
    unit:'core-lfkn-consequences',slug:'count-randomized-outer-machine',tier:'doctoral',kind:'proof',
    title:'Compose counting verification with an outer randomized computation',
    prompt:'An outer polynomial-time randomized oracle machine makes at most Q(n) adaptive counting queries and has error α(n). Each answer-verification subprotocol has honest rejection probability at most β and false-answer acceptance probability at most δ, conditionally on every prior history. Derive completeness and soundness of the composite verifier, including randomness, bit lengths and amplification costs.',
    prerequisites:['Adaptive oracle computations','Conditional soundness','Union bounds'],minutes:40,
    guide:[
      'Couple the honest execution with the ideal outer oracle computation using the same outer random tape. With probability at least 1−α it takes an accepting ideal path; at most Qβ additional probability is lost to honest subprotocol failures. Thus completeness is at least 1−α−Qβ, assuming correctly encoded answers and a verifier that rejects malformed or out-of-range counts.',
      'For a NO input, if no false oracle answer is accepted, every completed path agrees with an ideal outer path, whose acceptance probability is at most α. A first-incorrect-answer argument adds at most Qδ. Fresh verification randomness must remain valid conditional on the outer history. Count the polynomial output bits of each #P query and the polynomial overhead needed to achieve β,δ of order η/Q.'
    ],
    followup:'Which term vanishes when the counting protocol has perfect completeness?',
    deliverable:'Two explicit probability bounds and a polynomial-resource composition theorem.',
    references:[{title:'Lund–Fortnow–Karloff–Nisan, Algebraic Methods for Interactive Proof Systems',url:'https://lance.fortnow.com/papers/files/ip.pdf'}]
  },
  {
    unit:'core-lfkn-consequences',slug:'count-weighted-gap-functions',tier:'doctoral',kind:'construction',
    title:'Verify weighted counts and signed gaps',
    prompt:'For a polynomial-time predicate R(x,y), |y|=p(n), and a polynomial-time nonnegative integer weight W(x,y)<2^b(n), construct a #P representation of ∑_y R(x,y)W(x,y). Then design an interactive verifier for a claimed difference of two such sums. Give range bounds, witness lengths, number of counting checks and the total error.',
    prerequisites:['Definition of #P','Binary integer encodings','Counting verification'],minutes:35,
    guide:[
      'Use accepting witnesses (y,z) with |z|=b(n), requiring R(x,y) and the integer z<W(x,y). Exactly W(x,y) choices of z accept for each eligible y. The resulting count is below 2^(p+b), and the construction runs in polynomial time in the original input length.',
      'For a signed gap g=f₀−f₁, request and verify both nonnegative counts, range-check them, and subtract using p+b+O(1) bits. At least one false count must have passed whenever the verified difference is wrong, so two checks of error δ give error at most 2δ. A negative gap is not itself a #P count merely because its two summands are; name the signed-function model separately.'
    ],
    followup:'How do you encode a signed weight without permitting a negative number of accepting paths?',
    deliverable:'An explicit counting machine and a signed-value verification protocol.'
  },
  {
    unit:'core-lfkn-consequences',slug:'count-certified-witness-sampling',tier:'doctoral',kind:'construction',
    title:'Sample a witness using certified branch counts',
    prompt:'Assume R(x,y) has a positive total count C of witnesses y∈{0,1}^p, and exact prefix-count verification has perfect completeness for the honest prover. Design an honest-prover procedure that samples a uniformly random witness using at most 2p+1 count claims and fresh branch-sampling coins. Analyze exact rational sampling, zero-count branches and malicious selective aborts.',
    prerequisites:['Self-reducibility','Conditional probabilities','Counting protocols'],minutes:40,
    guide:[
      'First certify the positive total count C. At a reached prefix u certify extension counts c₀,c₁, check their sum against the previous positive count, and use fresh independent coins to choose branch b with probability c_b/(c₀+c₁). The probabilities along every witness path telescope to 1/C. Perfect completeness ensures honest verification never rejects and thus introduces no prefix-dependent selection; zero-count branches are never taken.',
      'Sample an integer uniformly below c₀+c₁ by rejection from enough fair bits; expected trials are below two and arithmetic uses O(p) count bits. This exact sampler has expected polynomial time. If a separate instance has C=0, it can report no witness after certification rather than sample. False accepted counts have a conditional union-bound budget, but a malicious prover can abort on selected prefixes even while claiming true counts. Uniformity conditioned on completion therefore does not follow from soundness.'
    ],
    followup:'What output convention permits a clean coupling statement without conditioning away malicious aborts?',
    deliverable:'Sampling pseudocode, a telescoping uniformity proof and an abort-bias example.'
  },
  {
    unit:'core-lfkn-consequences',slug:'count-complement-quantifiers',tier:'examiner',kind:'counterexample',
    title:'Why flipping the verifier’s output is insufficient',
    prompt:'Write the prover and probability quantifiers for an interactive proof of L, and audit the proposed proof of its complement obtained by flipping acceptance and rejection. Give a one-message counterexample. Then explain how a verified exact count can support both the predicates f(x)=0 and f(x)>0 without using that invalid transformation.',
    prerequisites:['Completeness and soundness quantifiers','Nonnegative counting functions'],minutes:30,
    guide:[
      'Completeness asserts existence of an accepting prover on YES inputs; it does not say every prover accepts. A verifier that accepts when its single received bit is 1 and rejects when it is 0 has a perfectly successful prover, yet its flipped verifier also has one. Replacing existentially successful behavior by the opposite output does not produce a universal soundness guarantee.',
      'For an exactly verifiable nonnegative f, request one bounded-range value a, verify it, and then evaluate either a=0 or a>0 deterministically. A wrong decision requires an incorrectly certified value. The special function-verification structure supplies both predicates; it does not justify a general syntactic complementation rule for arbitrary interactive protocols.'
    ],
    followup:'What stronger condition on all prover strategies would make output flipping safe?',
    deliverable:'Formal quantifiers, a minimal counterexample and two counting-based decision verifiers.'
  },
  {
    unit:'core-lfkn-consequences',slug:'count-oracle-extension-cost',tier:'examiner',kind:'proof',
    title:'A low-degree oracle extension need not be cheaply evaluable',
    prompt:'Let O:{0,1}^m→{0,1} be an arbitrary black-box oracle and let Õ be its unique multilinear extension over an odd-characteristic field. Evaluate Õ at (1/2,…,1/2). Prove a deterministic black-box query lower bound for exact evaluation and explain what this obstruction does, and does not, establish about relativizing algebraic protocols.',
    prerequisites:['Multilinear interpolation','Oracle query models','Adversary arguments'],minutes:35,
    guide:[
      'The interpolation weights at this point are all 2^(−m), so Õ(1/2,…,1/2)=2^(−m)∑_b O(b) in the field. Any deterministic evaluator that leaves an address unqueried has identical observations on two oracles differing only there, yet their extension values differ by the nonzero field element 2^(−m). Exact evaluation therefore requires all 2^m queries in the worst case.',
      'The extension still has individual degree one and total degree at most m. Thus the problem is not absence of a low-degree formal extension but lack of an efficient black-box evaluation procedure at non-Boolean points. This explains a concrete obstacle to inserting arbitrary oracle gates into an algebraic verifier; it is not by itself a complete oracle separation between complexity classes.'
    ],
    followup:'How does the argument change in characteristic two, where 1/2 is unavailable?',
    deliverable:'Interpolation calculation, query lower bound and a carefully delimited relativization conclusion.'
  },
  {
    unit:'core-lfkn-consequences',slug:'count-stateful-program-checker',tier:'examiner',kind:'synthesis',
    title:'Turn a permanent program into a checker’s prover',
    prompt:'A program P answers permanent queries over F_q and may retain state. Specify how a checker can use evaluation queries to P to generate every bounded-degree polynomial message in an LFKN execution for the initial answer P(A). Prove the checker’s two guarantees and state exactly what a rejection certifies about P.',
    prerequisites:['LFKN compression','Interpolation from values','Program checking'],minutes:40,
    guide:[
      'For a degree-d matrix restriction, ask P for its permanent at d+1 distinct interpolation nodes and interpolate the polynomial message. Expansion claims are likewise obtained by querying the minors. If every answer P gives is correct, these messages are truthful and the checker accepts the initial answer with perfect completeness, apart from any explicitly introduced sampling cutoff.',
      'If P(A) is wrong, all subsequent stateful answers constitute a legal adaptive cheating prover, so LFKN soundness still bounds acceptance. A rejection proves that at least one answer in the executed collection was incorrect; it need not identify which query was wrong or provide an efficiently checkable counterexample with a known correct permanent. Specify whether correctness refers to a fixed function or to every response in a stateful run.'
    ],
    followup:'Why does interpolation require a trusted degree bound on the true restriction rather than a promise that P is a low-degree program?',
    deliverable:'Checker pseudocode and logically exact accept/reject guarantees.'
  },
  {
    unit:'core-lfkn-consequences',slug:'count-random-prime-zero-test',tier:'examiner',kind:'proof',
    title:'Certify zero through several possible characteristics',
    prompt:'Let g be an integer gap with |g|<2^b. The verifier samples uniformly from a public list of K distinct primes and interactively verifies a claimed residue g mod p using a subprotocol of soundness δ. Design a test for g=0, bound its error when g≠0, and distinguish this test from reconstructing the integer g.',
    prerequisites:['Prime divisors','Modular arithmetic','Counting-gap verification'],minutes:35,
    guide:[
      'A nonzero integer of magnitude below 2^b has fewer than b distinct prime divisors, since the product of b distinct primes is at least 2^b. Thus at most b entries of any distinct-prime list divide g. Accept only after a residue-zero claim is verified; for g≠0, acceptance is at most b/K+δ.',
      'Choosing K≥2b/η and δ≤η/2 gives error at most η, assuming the supplied list and modular-verification reductions have polynomial total size and cost. On g=0 every prime gives a true zero residue. No integer reconstruction occurs: the random choice limits the chance of choosing a characteristic that annihilates this particular nonzero gap. A prover-selected prime would not provide that guarantee.'
    ],
    followup:'Give a sharper bound when every prime in the list is at least P_min.',
    deliverable:'A zero-test protocol and an explicit error and resource budget.'
  },
  {
    unit:'core-lfkn-consequences',slug:'count-anytime-error-budgets',tier:'research',kind:'research-extension',
    title:'Allocate verification error under an adaptive query schedule',
    prompt:'A computation may make an initially unknown polynomial number of oracle queries. Give an error schedule δ_i that guarantees total false acceptance at most η for every stopping time. Then, for known query costs a_i>0 and verification work modeled by a_i log(1/δ_i), solve the continuous optimal budget allocation and explain its limitations for adaptive queries.',
    prerequisites:['Summable series','Conditional union bounds','Constrained optimization'],minutes:45,
    guide:[
      'Use δ_i=η/[i(i+1)]. Its sum over all i≥1 is η, so every finite or adaptively stopped execution has the same first-error bound, without knowing its final query count. For polynomially many queries, log(1/δ_i)=O(log i+log(1/η)), preserving polynomial overhead under the stated cost model.',
      'For a fixed finite cost list, Lagrange multipliers give δ_i=ηa_i/∑_j a_j, subject to any extra upper bounds on admissible error. The objective and constraint show why expensive checks receive larger budgets. This optimization is an offline model, not automatically an implementable rule when future costs are unknown or depend on unverified answers; compare it against the valid anytime schedule on a specified adversarial query family.'
    ],
    followup:'How should the allocation change if a subprotocol requires δ_i≤1/3 before amplification?',
    deliverable:'An anytime theorem, an optimized finite schedule and a concrete comparison instance.'
  },
  {
    unit:'core-lfkn-consequences',slug:'count-reused-challenge-attack',tier:'research',kind:'research-extension',
    title:'Audit reuse of a public algebraic challenge',
    prompt:'Consider a toy verifier for claims a=f(0), where the fixed polynomial f≡0 is directly evaluable. It receives a degree-one g, checks g(0)=a, reveals uniform r∈F_q, and checks g(r)=f(r). Show why reusing r after one honest invocation breaks a later false-claim check. Generalize the audit to adaptive counting subprotocols and give a repair.',
    prerequisites:['Polynomial root soundness','Adaptive histories','Fresh randomness'],minutes:40,
    guide:[
      'An honest first invocation uses a=0,g=0 and reveals r. If r≠0, a later prover claiming a=1 can send g(X)=1−X/r, which passes both checks at the reused point. The second false assertion is accepted with probability at least 1−1/q, whereas an independently sampled challenge would collide with this fixed nonzero degree-one discrepancy at only one point.',
      'The toy language is deliberately easy: it isolates a failure in the conditional soundness argument rather than establishing hardness. In a composed verifier, check whether each challenge retains its required distribution after all previous transcripts and the current polynomial are fixed. Allocate fresh independent samples, or prove a replacement randomness property strong enough for that conditional statement; marginal uniformity alone is insufficient.'
    ],
    followup:'Can challenge reuse be safe for genuinely simultaneous, nonadaptive polynomial messages fixed before any challenge is revealed?',
    deliverable:'A complete cheating transcript and a reusable conditional-randomness audit criterion.'
  },

  {
    unit:'core-qbf',slug:'qbf-quotient-operator-order',tier:'doctoral',kind:'proof',
    title:'Degree reduction as a quotient-ring normal form',
    prompt:'Work over a field F and the quotient F[x₁,…,x_m]/(x_i²−x_i : i∈[m]). Prove uniqueness of the multilinear representative of every Boolean-cube function. Using P(x,y)=x, show that coordinate reduction R_x and universal elimination of y need not commute as formal polynomials, while their Boolean values agree. Explain the operator-order obligation for a backward verifier.',
    prerequisites:['Polynomial quotient rings','Boolean interpolation','Quantifier elimination'],minutes:40,
    guide:[
      'Repeated replacement of x_i^k by x_i for k≥1 produces a multilinear representative. Uniqueness follows by induction: a multilinear polynomial vanishing on the Boolean cube has both endpoint restrictions zero in the last coordinate, and hence all its coefficients vanish. Equivalently use the 2^m Boolean Lagrange basis polynomials.',
      'Universal elimination sends P=x to x², whereas reducing x afterward sends x² to x. Reducing P first leaves x, so eliminating y afterward still yields x². These expressions agree on Boolean x but differ at general field points. A backward proof must verify the actual ordered operator identities, rather than replacing intermediate random-point evaluations by an unspecified Boolean-equivalent polynomial.'
    ],
    followup:'Which algebraic operations descend naturally to the quotient, and what changes when the verifier evaluates outside the Boolean cube?',
    deliverable:'A normal-form proof, a noncommutation calculation and a verifier invariant.'
  },
  {
    unit:'core-qbf',slug:'qbf-explicit-reduction-schedule',tier:'doctoral',kind:'construction',
    title:'Count every operation in a normalized QBF protocol',
    prompt:'An arithmetic formula of size s in n Boolean variables has individual degrees at most s. In the guide’s degree-reduction reformulation, first reduce all n coordinates, then eliminate quantifiers one at a time, reducing every surviving coordinate after each elimination. Bound operator count, individual degrees in every backward restriction, communication and a sufficient field size for total error η.',
    prerequisites:['Boolean gate arithmetization','Degree reduction R_i','Backward random checking'],minutes:45,
    guide:[
      'Initial coordinate reductions need n operators. A stage with k surviving variables before elimination uses one quantifier operator and k−1 reductions. Thus n+n(n+1)/2 operators suffice. After initial normalization each surviving variable has degree at most one; a product or Boolean-OR elimination raises surviving individual degrees to at most two, and the following reductions restore degree one.',
      'During the initial reductions the relevant univariate degrees are at most s; afterward they are at most two. A safe uniform discrepancy cap is D=max(s,2). With L operators, q≥LD/η gives the root-bound budget, and coefficient messages contain O(LD log q) bits. The verifier stores assignments and operator indices and finally evaluates the original size-s formula; it need not materialize an exponentially expanded polynomial. This is a reformulation, not the exact syntax of Shamir’s simple-QBF normalization.'
    ],
    followup:'Can the final reductions after eliminating the last variable be omitted from this count?',
    deliverable:'An indexed operator schedule and a bit-level polynomial resource proof.',
    references:[{title:'Adi Shamir, IP = PSPACE',url:'https://doi.org/10.1145/146585.146609'}]
  },
  {
    unit:'core-qbf',slug:'qbf-two-existential-encodings',tier:'doctoral',kind:'synthesis',
    title:'Compare Boolean-valued and nonzero-valued arithmetization',
    prompt:'Compare existential elimination a+b−ab with elimination by a+b in a negation-normal QBF arithmetization using products for universals. Evaluate ∀x∃y True in both conventions. State the correct invariant for each, and explain why a modular zero test can fail for the nonzero-valued convention even on a true formula.',
    prerequisites:['Boolean truth tables','Integer sums and products','Modular arithmetic'],minutes:35,
    guide:[
      'The Boolean-valued convention returns exactly 0 or 1 on Boolean assignments and makes ∀x∃y True evaluate to 1. The nonnegative sum/product convention returns 2 for each existential branch and then 4 for the universal product. Its invariant is zero for false and positive for true, rather than equality to the Boolean truth value.',
      'Reducing the value 4 modulo 2 turns this true example into zero. More generally a characteristic dividing a positive arithmetized value can destroy the nonzero invariant. A proof using this convention must address prime selection and magnitude/divisibility; a Boolean-valued normalized protocol has a different invariant. Neither convention justifies mixing the other’s gate identities or final acceptance predicate without a new proof.'
    ],
    followup:'Why is pushing negations to literals useful for the nonnegative sum/product interpretation?',
    deliverable:'Two explicit evaluations and an invariant-and-characteristic comparison table.'
  },
  {
    unit:'core-qbf',slug:'qbf-characteristic-two-extensions',tier:'examiner',kind:'proof',
    title:'Use characteristic two without reducing the challenge space to two points',
    prompt:'Audit a normalized Boolean-valued QBF protocol over F_(2^ℓ). Verify the AND, OR and R_i identities on Boolean values, and explain why a large extension field can support the root-bound argument. Use X²−X to distinguish polynomial identities from equality of functions on F₂.',
    prerequisites:['Extension fields','Boolean arithmetization','Formal versus functional equality'],minutes:35,
    guide:[
      'AND is ab and OR is a+b−ab, with subtraction equal to addition in characteristic two; the four Boolean truth-table entries remain correct. The operator (1−x)P(0)+xP(1) still agrees at x=0,1 and is affine in x. Thus Boolean-valued gate correctness does not require odd characteristic.',
      'The nonzero formal polynomial X²−X vanishes on all of F₂, illustrating why two available challenge points give no useful degree-two root estimate. On a larger characteristic-two extension it has only the roots 0 and 1, so uniform sampling from q=2^ℓ points restores a 2/q estimate. Keep the original degree cap below the field-size scale used in the error calculation and represent field elements explicitly.'
    ],
    followup:'Does this argument justify Shamir’s integer nonzero-valued convention in every characteristic?',
    deliverable:'Truth-table checks and a field-size argument with a formal-polynomial counterexample.'
  },
  {
    unit:'core-qbf',slug:'qbf-squaring-circuit-trap',tier:'examiner',kind:'counterexample',
    title:'Small circuits can have exponentially large formal degree',
    prompt:'Let P₀(x)=x and P_(j+1)(x)=P_j(x)², represented as a size-O(j) arithmetic circuit with shared subcomputations. Compare formal degree, Boolean-cube behavior and coefficient-message length with and without inserting R_x after every squaring. Explain which resource assertion a circuit-size bound alone fails to establish.',
    prerequisites:['Arithmetic circuits','Degree growth','Multilinearization'],minutes:30,
    guide:[
      'Without reduction P_j=x^(2^j), although all these polynomials equal x on Boolean inputs. Circuit size and repeated-squaring evaluation time are polynomial in j, but a dense univariate coefficient message may require 2^j+1 entries. A verifier that assumes small circuit size implies small restriction degree has lost its polynomial communication guarantee.',
      'Applying R_x after each squaring replaces x² by x, so every normalized stage is degree one. The intermediate operation being checked has degree at most two, and a backward protocol can verify O(j) such operations with constant-size polynomial messages. State the field size relative to j and the desired total error; equality on Boolean points does not authorize skipping the operator checks at random non-Boolean assignments.'
    ],
    followup:'What distinction remains if sparse monomial notation is allowed instead of dense coefficient messages?',
    deliverable:'A degree/size table and a normalized verification schedule for this circuit family.'
  },
  {
    unit:'core-qbf',slug:'qbf-boolean-branch-catch-rate',tier:'examiner',kind:'counterexample',
    title:'Why Boolean branch sampling can miss one false leaf',
    prompt:'A proposed protocol verifies a universally quantified Boolean predicate by asking for its two child values, checking their product, and following a uniformly random Boolean child. Apply it to ∀x₁…∀x_n (x₁∨⋯∨x_n), falsely claimed true. Construct a consistent prover strategy and compute its exact acceptance probability. Compare with low-degree random-point reduction over F_q.',
    prerequisites:['Universal quantifiers','Decision trees','Polynomial root bounds'],minutes:35,
    guide:[
      'The predicate has one false leaf, the all-zero assignment. A prover can announce value 1 at every internal node and both children 1. Every product check succeeds. The verifier rejects only when its n random branch choices lead to the all-zero leaf, so false acceptance is exactly 1−2^(−n).',
      'The failure is quantitative: a false value can be concentrated on an exponentially small Boolean branch, so following one actual child does not preserve falsity with high probability. A polynomial restriction checked at a fresh field point instead keeps a false assertion except at its bounded number of roots. Degree reduction is required to make the sum of those root budgets polynomial rather than exponentially large.'
    ],
    followup:'How many independent Boolean branch walks are needed for constant rejection probability on this example?',
    deliverable:'A full cheating strategy, exact acceptance calculation and a parameter comparison.'
  },
  {
    unit:'core-qbf',slug:'qbf-uncapped-degree-attack',tier:'examiner',kind:'construction',
    title:'Remove the degree cap and build an almost-always escaping lie',
    prompt:'For odd q>2, the truthful restriction is f≡0 and a verifier checks a false universal value 1 using g(0)g(1)=1, then moves to g(r) at uniform r∈F_q. If no polynomial-degree cap is enforced, construct g that is 1 exactly at 0 and 1 and zero elsewhere. Compute the probability that the next claim becomes truthful and specify an enforceable repair.',
    prerequisites:['Fermat identity over finite fields','Degree caps','Backward soundness'],minutes:35,
    guide:[
      'Take g(X)=1−(X(X−1))^(q−1). At X=0,1 it equals 1, and at every other field element the nonzero quantity X(X−1) has (q−1)-st power 1. Hence both endpoint values support the false product claim, while a random challenge erases the false assertion with probability 1−2/q.',
      'The polynomial has degree 2(q−1), so the usual small-degree root estimate is unavailable. Enforce the announced degree bound by requiring exactly D+1 coefficients or D+1 evaluations at fixed nodes, interpreted as the uniquely determined degree-at-most-D polynomial. Reject overlong or malformed messages; merely evaluating a prover-supplied high-degree circuit at a few points does not enforce a degree promise.'
    ],
    followup:'Why does increasing q without changing the message-format rule make this particular attack stronger?',
    deliverable:'An explicit escaping polynomial and a degree-enforcing message format.'
  },
  {
    unit:'core-qbf',slug:'qbf-sparse-normalization-audit',tier:'research',kind:'research-extension',
    title:'Reduce only coordinates whose degree budget needs repair',
    prompt:'Replace the all-surviving-coordinates normalization schedule by a syntactic degree tracker. For a specified QBF formula and threshold D≥2, insert R_i only when the tracked degree of surviving x_i would exceed D before a later verification step. Prove a safe tracker, give one family where it saves operations and one where it cannot omit reductions, and compare verifier communication.',
    prerequisites:['Syntactic degree analysis','QBF operator schedules','Degree reduction'],minutes:50,
    guide:[
      'Maintain an upper bound for each individual degree: addition takes a maximum, multiplication adds bounds, substitution never increases a surviving bound, and R_i sets its own bound to at most one without increasing other coordinates. These rules provide a checkable sufficient schedule even when polynomial cancellations make the actual degree lower. Verify each inserted operation in its actual order.',
      'For subformulas using disjoint surviving-variable sets, products need not double every coordinate, so normalizing all variables can waste checks. Repeated use of a surviving factor in both Boolean branches gives a contrasting squaring family. Report total checked degrees, rather than only the number of inserted operators: fewer checks with larger degrees can increase coefficient communication or the required field size. No optimality claim is needed for the scheduling heuristic.'
    ],
    followup:'Can deciding whether a reduction is truly unnecessary require reasoning about polynomial identity rather than syntax?',
    deliverable:'Tracker pseudocode, two explicit formula families and measured symbolic resource tables.'
  },
  {
    unit:'core-qbf',slug:'qbf-affine-change-audit',tier:'research',kind:'research-extension',
    title:'Which coordinate changes respect Boolean normalization?',
    prompt:'Over a field of characteristic different from two, classify invertible affine maps taking {0,1}^m onto itself and prove the classification. Then exhibit a characteristic-two Boolean-cube automorphism whose substitution into a multilinear polynomial produces a non-multilinear formal polynomial. State the consequence for reusing a degree-reduction schedule after changing coordinates.',
    prerequisites:['Affine maps','Boolean cubes','Individual degree'],minutes:55,
    guide:[
      'A scalar affine coordinate a₀+∑a_i x_i that is Boolean on every Boolean input can depend on at most one variable in odd characteristic. Comparing the values at 0, e_i and e_i+e_j proves this restriction; a nonconstant coordinate is x_i or 1−x_i. Invertibility then forces a permutation of coordinates followed by independent complements.',
      'In characteristic two the invertible map (u,v)↦(u+v,v) preserves the Boolean cube. Substituting it into P(x,y)=xy gives uv+v², which has individual degree two in v even though its Boolean normal form is uv+v. Boolean-cube preservation alone therefore does not preserve the off-cube polynomial representation used by an interactive verifier. Recompute degree bounds and insert the relevant normalization identities after substitution.'
    ],
    followup:'Why does the odd-characteristic argument fail specifically when 1+1=0?',
    deliverable:'A classification proof and a concrete transformed-polynomial protocol audit.'
  },

  {
    unit:'core-private-ip',slug:'private-and-posterior-game',tier:'doctoral',kind:'proof',
    title:'Solve an unequal posterior information-set game',
    prompt:'A verifier chooses independent uniform bits u,v, sends z=u∧v, receives one bit y and accepts iff y=u⊕v. Enumerate the private tapes compatible with each public history and compute an optimal legal strategy and its exact acceptance probability. Compare conditioning on z with giving the prover the full tape, and express the calculation using integer accepting-tape counts.',
    prerequisites:['Conditional probability','Private-coin strategies','Information sets'],minutes:30,
    guide:[
      'For z=0 the compatible tapes are 00,01,10; their target parities are 0,1,1, so y=1 wins on two of three. For z=1 only tape 11 is possible and y=0 wins. The unconditional optimum is 2/4+1/4=3/4. Maximizing separately for each hidden tape would incorrectly give value one.',
      'The posterior is uniform within a compatible-tape set here, but the two public messages have probabilities 3/4 and 1/4. Count two accepting tapes in the first cell and one in the second, then normalize once by four. This concrete calculation separates local conditional probabilities, public-message weights and the requirement that one action serve every tape in the same information set.'
    ],
    followup:'What is the optimum if the verifier instead sends u∨v?',
    deliverable:'A four-tape table, an optimal public-history strategy and an exact value.'
  },
  {
    unit:'core-private-ip',slug:'private-pure-strategy-suffices',tier:'doctoral',kind:'proof',
    title:'Eliminate the prover’s private randomization',
    prompt:'For a fixed input, normalize a polynomial-round private-coin verifier to a finite protocol tree with bounded messages. Prove that the maximum acceptance probability over randomized, computationally unbounded provers is attained by a deterministic function of the public transcript. Explain why this does not require storing the entire optimal strategy in polynomial space.',
    prerequisites:['Finite extensive-form games','Convex combinations','Public transcripts'],minutes:35,
    guide:[
      'A randomized prover induces a distribution over deterministic contingent policies: fix all of its random choices, including choices at histories not reached in the current execution. Its acceptance probability is the average value of these policies. Since the finite set of deterministic policies has a maximum, randomization cannot exceed that maximum. Equivalently choose maximizing actions recursively at transcript information sets.',
      'The deterministic policy is constrained by observable history, not by the verifier’s hidden configuration. It may have an exponentially large table, but a polynomial-space algorithm can recompute the value of a history and enumerate its possible next messages whenever needed. Polynomial space concerns the workspace of this repeated computation, not the size of a simultaneously stored policy certificate.'
    ],
    followup:'Why is fixing independent actions separately at hidden verifier configurations a different, invalid derandomization?',
    deliverable:'A finite-policy proof and an explanation of implicit versus explicit strategy storage.'
  },
  {
    unit:'core-private-ip',slug:'private-replay-consistency-predicate',tier:'doctoral',kind:'construction',
    title:'Recognize compatible private tapes by replay',
    prompt:'Fix a polynomial-time verifier V using at most R(n) fair bits, padded to a complete R-bit tape. For an encoded public history h, construct a polynomial-time predicate C(h,r) saying that tape r is compatible with h. Include malformed messages, early halting and unreachable histories. Show how this predicate supports counting compatible tapes without materializing their set.',
    prerequisites:['Deterministic simulation with fixed randomness','Transcript encodings','Counting predicates'],minutes:35,
    guide:[
      'Replay V on input x and tape r, supplying exactly the prover messages written in h at their tagged turns. Compare each emitted verifier message with the corresponding entry of h, and reject a replay that halts too early, expects a different message type or encounters an invalid encoding. Use explicit terminal symbols and a fixed stage convention so partial histories have an unambiguous meaning.',
      'For fixed h,r the replay takes polynomial time because V does. Hence |S(h)|=∑_r C(h,r) is the count of witnesses of a polynomial-time predicate, and can be computed by an exponential enumeration using an R-bit counter. A zero count means the public history is unreachable. The recurrence can invoke this membership test repeatedly; it does not need an exponential array of compatible tapes.'
    ],
    followup:'Why should a replay not guess new prover messages to fill gaps in a fully specified history?',
    deliverable:'Replay pseudocode and precise conventions for partial and terminal histories.'
  },
  {
    unit:'core-private-ip',slug:'private-unused-coin-multiplicity',tier:'examiner',kind:'proof',
    title:'Count unused random suffixes correctly',
    prompt:'A verifier has a three-bit tape. If its first bit is zero it accepts immediately; otherwise it reads the remaining two bits and accepts iff both are one. Compute acceptance by complete-tape counting, then generalize to a private-coin interaction with adaptive coin consumption and early termination. State a normal form in which verifier-message branches partition compatible tapes.',
    prerequisites:['Padded random tapes','Terminal histories','Integer recurrences'],minutes:35,
    guide:[
      'The immediate-accept branch corresponds to four complete tapes, not one. The later-accept branch contributes only 111, so acceptance is 5/8. Treating each terminal execution path as one equally likely outcome would incorrectly assign probabilities, because paths consume different numbers of random bits.',
      'Pad every execution to R fair bits even when suffix bits are unused. Add tagged visible terminal messages and, if necessary, fixed-length stages, so a verifier step partitions S(h) into compatible child sets. At a terminal child count all accepting compatible complete tapes; sum at verifier branches and maximize over one transcript-dependent prover action. Counts stay below 2^R, with O(R) bits, while replay and recursive storage remain polynomial.'
    ],
    followup:'How does rejection sampling with a strict runtime cutoff fit the padded-tape convention?',
    deliverable:'An exact eight-tape count and a halting-safe recurrence specification.'
  },
  {
    unit:'core-private-ip',slug:'private-cardinality-is-not-state',tier:'examiner',kind:'counterexample',
    title:'Equal-size posterior cells can have different values',
    prompt:'A verifier chooses r uniformly from {00,01,10,11}, reveals its first bit z and accepts a prover bit y iff y=f(r), where f(00)=f(01)=f(10)=0 and f(11)=1. Show why retaining only the number of compatible tapes loses information even though both histories have two tapes and the same public control state. Propose a sufficient representation.',
    prerequisites:['Information sets','Conditional acceptance','State compression'],minutes:30,
    guide:[
      'For z=0, y=0 succeeds on both compatible tapes, giving conditional value one. For z=1, either response succeeds on only one of the two tapes, giving conditional value one half. The two cells have equal size but different distributions of future acceptance behavior, so cardinality alone is not a sufficient state.',
      'A sound implicit representation retains h and a replay predicate for S(h), together with the verifier description and stage. This permits enumerating each tape’s future behavior without exposing tape identity to the prover’s maximization. More aggressive compression needs an equivalence that preserves future observations and acceptance under every legal action, rather than an empirical match of cell sizes.'
    ],
    followup:'Formulate an observation-preserving bijection of tape sets that would justify merging two histories.',
    deliverable:'Two conditional values and a sufficient-state criterion for a simulator.'
  },
  {
    unit:'core-private-ip',slug:'private-exact-threshold-precision',tier:'examiner',kind:'proof',
    title:'Bound the bits needed for exact acceptance comparison',
    prompt:'A padded verifier uses R fair bits, and its optimal legal acceptance probability is K/2^R. Show how to compare it with 2/3 using polynomial-size integers, derive a lower bound on a nonzero difference from 2/3, and give a family showing why retaining only O(log n) fractional bits can be unsafe when R is polynomial in n.',
    prerequisites:['Dyadic rationals','Exact integer arithmetic','Promise gaps'],minutes:35,
    guide:[
      'Compare 3K with 2^(R+1); no rational arithmetic is necessary. Since a power of two is not divisible by three, equality cannot occur and the probability gap is at least 1/(3·2^R). The recurrence’s counters and this final comparison use O(R) bits.',
      'For a threshold such as one half, acceptance values (2^(R−1)±1)/2^R differ by only 2^(1−R), and a polynomial-time verifier can realize these values by comparing its random tape with an explicitly encoded threshold. A precision budget of O(log n) can round both to the same value when R grows faster than log n. Polynomially many precision bits are sufficient; a fixed coarse precision rule is not.'
    ],
    followup:'How does a promise gap of at least 1/poly(n) simplify approximate evaluation?',
    deliverable:'An exact comparison algorithm, a separation bound and a coarse-precision counterexample.'
  },
  {
    unit:'core-private-ip',slug:'private-recompute-optimal-policy',tier:'examiner',kind:'construction',
    title:'Extract an optimal next action without storing its policy',
    prompt:'Assume the exact compatible-tape value recurrence is available in polynomial space. Construct a polynomial-space transducer that, given a reachable prover-turn history h, outputs the lexicographically first optimal next message. Prove that repeated calls along a run define one legal optimal strategy, and bound the explicit table size that the transducer avoids storing.',
    prerequisites:['Polynomial-space recomputation','Finite message alphabets','Tie breaking'],minutes:40,
    guide:[
      'Enumerate all padded next messages y of length at most a(n), recompute the integer continuation value F(hy), and retain the largest value and its lexicographically first maximizer. The enumeration counter, one candidate message, the best value and one recursive computation all need polynomial space. Exponential recomputation time is allowed.',
      'The chosen action depends only on h and a fixed tie rule, so revisiting the same public history gives the same answer across all compatible hidden tapes. Induction on remaining stages shows the resulting policy attains F(h). With public-history length at most H(n), a full next-action table can require O(a(n)2^H(n)) bits; the transducer outputs only the currently needed entry.'
    ],
    followup:'Why may unreachable histories be assigned arbitrary actions without changing the root value?',
    deliverable:'A next-action algorithm, a legality proof and an explicit space-versus-table comparison.'
  },
  {
    unit:'core-private-ip',slug:'private-weighted-tape-generalization',tier:'research',kind:'research-extension',
    title:'Generalize the recurrence to succinct integer tape weights',
    prompt:'Replace a uniform R-bit tape by a distribution Pr[r]=w(r)/W, where w(r) is a nonnegative B-bit integer computable in polynomial time and W=∑_r w(r)>0. Prove a polynomial-space upper bound for the optimal public-history prover value in this model. State which encoding property prevents denominator growth.',
    prerequisites:['Weighted counting','Private information sets','Exact rational normalization'],minutes:45,
    guide:[
      'Define F(h) as the maximum total weight of accepting tapes compatible with h. Use a weighted sum at terminal histories, a sum over disjoint visible verifier-message cells, and a maximum over legal prover messages. At the root the optimal acceptance probability is F(∅)/W. Both W and every continuation count are below 2^(R+B), so O(R+B) bits suffice.',
      'Compute weights and compatibility on demand during tape enumeration; never store their entire list. This proof uses a single globally specified integer weight for each complete tape. It does not automatically cover an arbitrary collection of history-dependent rational transition probabilities by asserting that their common denominator is small: that separate representation requires its own bit bound or a justified approximation analysis.'
    ],
    followup:'Can zero-weight tapes be omitted from the information-set recurrence without changing any legal strategy constraint?',
    deliverable:'A weighted recurrence, bit-complexity proof and an explicit scope statement.'
  },
  {
    unit:'core-private-ip',slug:'private-bounded-leakage-factor',tier:'research',kind:'research-extension',
    title:'Quantify the power of leaking a few hidden bits',
    prompt:'At publicly specified insertion opportunities, a modified verifier additionally leaks information about its private tape; original messages and acceptance are otherwise unchanged. Require the complete leakage transcript, including payloads, timing, lengths and absence of messages, to belong to a fixed set Z with |Z|≤2^ℓ. Prove that optimal acceptance grows by at most a factor 2^ℓ, capped at one, and give a tight family.',
    prerequisites:['Public-history strategies','Partition arguments','Conditional leakage'],minutes:50,
    guide:[
      'For each complete leakage transcript z∈Z, construct an original-protocol strategy that acts as if it received z at its encoded insertion opportunities. On executions whose actual leakage transcript equals z, induction on the public interaction shows its actions match. Acceptance together with this particular z has probability at most the original optimal value. Summing over the fixed set Z gives the factor |Z|≤2^ℓ.',
      'The assumption bounds all observable leakage transcripts, not only payload bits: timing and length must be included in an actual bounded encoding or otherwise counted in Z. A Shannon-entropy or mutual-information bound alone does not establish this cardinality bound. For tightness, hide a uniform R-bit string and accept only an exact guess; revealing ℓ fixed coordinates has 2^ℓ possible complete transcripts and raises value from 2^(−R) to 2^(ℓ−R).'
    ],
    followup:'How should variable-length leakage strings be padded so the number of possible complete leakage transcripts is bounded correctly?',
    deliverable:'A strategy-partition proof, a tight example and a precise leakage-model specification.'
  },

  {
    unit:'core-bfl-oracle',slug:'oracle-bundle-to-fixed-table',tier:'doctoral',kind:'proof',
    title:'Replace a context-dependent bundle by one point table',
    prompt:'A verifier samples a bundle C of t point addresses. Prover A sees C and returns t symbols; prover B sees only a uniformly selected address C_J and returns f(C_J), with J uniform in [t]. For fixed deterministic provers, a consistency check fails with probability ε. Bound the change in any predicate on the whole bundle when A’s vector is replaced by (f(C₁),…,f(C_t)).',
    prerequisites:['Separated prover strategies','Coupling','Union bounds'],minutes:35,
    guide:[
      'Let N(C) be the number of coordinates at which A’s bundle answer differs from f. The check distribution gives E[N(C)]/t=ε, so Pr[N(C)>0]≤tε. Couple the original and replaced predicates using exactly the same sampled bundle; their outputs can differ only on this event.',
      'No independence between coordinate errors is needed, and repeated addresses are allowed with the same fixed f value. The resulting acceptance change is at most min(1,tε). This is a quantitative consistency lemma for the stated bundle distribution. It neither proves f is multilinear nor transfers a bound to a different bundle distribution without another argument.'
    ],
    followup:'What bound follows if J is nonuniform with every coordinate selected with probability at least λ/t?',
    deliverable:'A coupling proof and a statement separating consistency from algebraic correctness.',
    references:[{title:'Babai–Fortnow–Lund, Two-Prover Interactive Protocols',url:'https://lance.fortnow.com/papers/files/mip2.pdf'}]
  },
  {
    unit:'core-bfl-oracle',slug:'oracle-expander-agreement',tier:'doctoral',kind:'proof',
    title:'Prove a local-to-global agreement lemma on an expander',
    prompt:'On an N-vertex d-regular connected graph of conductance Φ, two provers have binary answer functions f,g. With probability 1/2 test f(v)=g(v) at uniform v; otherwise test f(u)=g(v) on a uniform directed edge. If rejection is δ, bound both functions’ distance from one common constant. Identify why the same-vertex test matters.',
    prerequisites:['Graph conductance','Binary cuts','Agreement testing'],minutes:45,
    guide:[
      'The same-vertex branch gives Pr[f≠g]≤2δ. The edge branch gives Pr[f(u)≠g(v)]≤2δ. By inserting f(v), and using the uniform endpoint marginal of a regular graph, obtain Pr_edge[f(u)≠f(v)]≤4δ.',
      'Let S be the smaller label class of f. Conductance makes its directed edge-boundary probability at least 2Φ|S|/N, so f differs from its majority constant on at most 2δ/Φ of vertices. The distance of g from the same constant is at most 2δ/Φ+2δ. Without the same-vertex test, a bipartite graph admits opposite side-dependent f,g that agree across every tested edge but are not common constants.'
    ],
    followup:'How do you alter the proof for an irregular graph sampled from its stationary vertex distribution?',
    deliverable:'A quantitative agreement lemma and a bipartite counterexample.'
  },
  {
    unit:'core-bfl-oracle',slug:'oracle-perfect-axis-consistency',tier:'doctoral',kind:'proof',
    title:'Decode the perfect-consistency case completely',
    prompt:'Over F_q^m, q≥2, prover A receives an axis-parallel line and supplies two coefficients of an affine restriction; prover B receives one point and supplies one field value. Specify a test with full support on line–point incidences. Prove that perfect acceptance implies B is one globally multilinear function, and count question and answer bits.',
    prerequisites:['Axis-parallel restrictions','Multilinear interpolation','Two-prover consistency'],minutes:40,
    guide:[
      'Choose direction i, the m−1 fixed coordinates and a uniformly random value for the free coordinate. Compare A’s affine evaluation with B’s point value. Perfect acceptance and full support imply equality at every incidence, so every coordinate restriction of B is affine. Induct on m, using the two endpoint restrictions in the last coordinate, to obtain a polynomial of individual degree at most one.',
      'A line question uses O(m log q+log m) bits, its answer two field elements, and B’s point question m log q bits with one field-element answer. This proves the exact case directly. For q=2 every function already has a multilinear representation, and for imperfect acceptance a robust proximity theorem is still needed; perfect-case interpolation does not supply its quantitative constants.'
    ],
    followup:'Why is it insufficient for the test distribution to omit some line–point incidences?',
    deliverable:'A complete exact-case decoder proof and an incidence-test resource count.'
  },
  {
    unit:'core-bfl-oracle',slug:'oracle-query-distribution-distance',tier:'examiner',kind:'counterexample',
    title:'Agreement distance depends on the question distribution',
    prompt:'Let the address domain have size N and consistency questions follow μ. Show that μ-weighted disagreement at most ε need not imply small uniform Hamming distance. Prove a transfer bound under μ(x)≥λ/N for every address, and exhibit a distribution and two tables that nearly saturate it.',
    prerequisites:['Weighted Hamming distance','Probability measures','Consistency tests'],minutes:30,
    guide:[
      'Choose a set S occupying half the addresses but carrying μ-mass ε; let two tables disagree exactly on S. The consistency error is ε while uniform distance is one half. A high-success statement without its query measure cannot justify decoding under uniform distance.',
      'If μ(x)≥λ/N, then μ(S)≥λ|S|/N, so uniform disagreement is at most ε/λ. Assign the minimum allowed mass λ/N to a disagreement set and distribute remaining mass elsewhere to attain equality whenever the parameters permit it. Apply such a comparison before importing a proximity theorem whose distance measure differs from the protocol’s sampled incidence measure.'
    ],
    followup:'What guarantee is possible when μ gives zero mass to a positive fraction of addresses?',
    deliverable:'A rare-address example and a sharp measure-transfer inequality.'
  },
  {
    unit:'core-bfl-oracle',slug:'oracle-chsh-local-table-obstruction',tier:'examiner',kind:'proof',
    title:'Four contexts that no pair of local tables can satisfy',
    prompt:'The verifier draws independent uniform bits x,y, sends x to prover A and y to prover B, and accepts bits a,b iff a⊕b=xy. Compute the classical value by analyzing deterministic local tables, show why shared initial randomness cannot improve it, and compare with an optimizer permitted to see both questions.',
    prerequisites:['Local deterministic strategies','XOR equations','Shared randomness'],minutes:30,
    guide:[
      'The four required equations are a₀⊕b₀=0, a₀⊕b₁=0, a₁⊕b₀=0 and a₁⊕b₁=1. XORing them gives 0=1, so at least one fails. Constant-zero answers satisfy three, yielding the exact classical value 3/4.',
      'Shared initial randomness is a distribution over deterministic table pairs, whose average cannot exceed their maximum. By contrast, an illegal joint-question optimizer may set a=0 and b=xy and win every context. The discrepancy is enforced by repeated use of the same local table entries across incompatible global contexts, not by any computational limitation on the provers.'
    ],
    followup:'How many bits of one-way post-question communication suffice to make the value one?',
    deliverable:'An exact value proof and explicit legal and illegal strategies.'
  },
  {
    unit:'core-bfl-oracle',slug:'oracle-circuit-commitment-restriction',tier:'examiner',kind:'proof',
    title:'A succinct circuit is a substantive prover restriction',
    prompt:'A proposed replacement for an exponential proof oracle asks the prover to send a size-s Boolean circuit C:{0,1}^q→{0,1}^a before any queries. Count circuits and all possible answer tables, and prove that polynomial-size circuit messages cannot represent every table. Explain the consequence for an oracle characterization and for conditional small-prover-circuit consequences.',
    prerequisites:['Circuit encodings','Counting arguments','Proof-oracle tables'],minutes:40,
    guide:[
      'With a fixed finite gate basis, size-s circuits and output wiring have descriptions of O((s+a)log(s+q+a)) bits, up to an explicit gate-order encoding. There are 2^(a·2^q) arbitrary answer tables. For s,a polynomial in q, the number of circuit descriptions is vastly smaller, so some tables have no such circuit.',
      'Sending and evaluating a circuit can enforce one globally consistent function efficiently, but only within the represented family. It cannot silently replace unrestricted exponentially long oracle proofs in a completeness theorem. Conversely, if a language’s complete prover strategies do admit polynomial circuits, those circuits can become a short Merlin witness; that is a conditional consequence requiring a separate premise about the honest strategy.'
    ],
    followup:'Does the counting argument establish that the particular honest oracle of every NEXP protocol is hard for circuits?',
    deliverable:'Circuit/table counts and a precise audit of the proposed model change.'
  },
  {
    unit:'core-bfl-oracle',slug:'oracle-nonsignaling-is-not-shared-coins',tier:'examiner',kind:'counterexample',
    title:'Uniform marginals do not imply a classical local strategy',
    prompt:'For the XOR game a⊕b=xy, define a conditional answer distribution by choosing a uniformly and setting b=a⊕xy. Verify that neither prover’s answer marginal depends on the other question. Prove that this distribution is not a mixture of classical local answer tables, and explain which assumption a marginal-only soundness audit overlooks.',
    prerequisites:['Conditional distributions','Local-table strategies','XOR-game value'],minutes:35,
    guide:[
      'For each x,y, both a and b are uniform, so A’s marginal is independent of y and B’s marginal independent of x. Nevertheless the required XOR relation holds with probability one. These are nonsignaling conditional distributions, defined here only as a mathematical relaxation of the classical strategy set.',
      'Every deterministic local-table pair satisfies at most three of the four XOR constraints. Convex combinations therefore have success at most 3/4 and cannot realize this distribution. A soundness proof must use one common joint distribution over entire local response functions, rather than checking the separate answer marginals alone. This example makes no claim about what entangled strategies can realize.'
    ],
    followup:'Write the linear constraints for the classical local-strategy polytope and compare them with marginal nonsignaling constraints.',
    deliverable:'A probability table and a separating success-value inequality.'
  },
  {
    unit:'core-bfl-oracle',slug:'oracle-adaptive-replacement-coupling',tier:'research',kind:'research-extension',
    title:'Compose decoding with an adaptive oracle computation',
    prompt:'An algebraic verifier makes at most t adaptive queries to a purported decoded oracle f. Suppose an implementation returns the correct f(x) with conditional failure at most ε for every target x and every prior history, using fresh internal coins. Prove a replacement bound for the final decision. Then construct a fixed low-density error set showing why an unconditional uniform-query error bound alone is insufficient.',
    prerequisites:['Adaptive queries','First-disagreement coupling','Self-correction'],minutes:45,
    guide:[
      'Run the implemented and ideal verifiers on the same external randomness until their first answer disagreement. At each reached target, the assumed conditional error is at most ε, hence the probability of any disagreement is at most tε. On the complementary event their entire adaptive query paths and final outputs coincide.',
      'For the limitation, corrupt one address x★ in an otherwise correct table. Uniform-query error is 1/N, but a verifier that deterministically asks x★ fails with probability one. A valid self-corrector must randomize around every target and prove an error bound uniform in that target, or the proof must establish the actual adaptive query distribution. A global Hamming-distance bound alone is not a target-wise evaluation guarantee.'
    ],
    followup:'How do an initial decoding-failure probability β and a structural-test error γ enter the final bound?',
    deliverable:'An adaptive coupling theorem and a quantitative counterexample to the weaker premise.'
  },
  {
    unit:'core-bfl-oracle',slug:'oracle-one-way-leakage-indexing',tier:'research',kind:'research-extension',
    title:'Measure how question leakage weakens separation',
    prompt:'In an explicit communication variant, A receives uniform X∈{0,1}^N and may send ℓ bits to B, which receives an independent uniform index I∈[N] and must output X_I. Prove that average error ε≤1/2 requires ℓ≥N(1−H₂(ε)), even with shared initial randomness. Contrast zero leakage with sending the entire question.',
    prerequisites:['Entropy subadditivity','Binary entropy','One-way communication'],minutes:55,
    guide:[
      'Let R be shared randomness and M the ℓ-bit message. For each coordinate i let ε_i be B’s decoding error. Binary prediction gives H(X_i|M,R)≤H₂(ε_i); summing and applying concavity gives H(X|M,R)≤N H₂(ε). Since X is independent of R and uniform, I(X;M|R)≥N(1−H₂(ε)), while I(X;M|R)≤H(M|R)≤ℓ.',
      'With no message, B has no information about any independent fair coordinate and succeeds with probability one half. Sending all N bits permits perfect success. This is a bounded, falsifiable modification of the noncommunication premise: answer-table counting alone does not quantify what a leaked question allows, whereas the information inequality supplies an explicit tradeoff.'
    ],
    followup:'What changes if worst-case error is required for every index rather than average error over I?',
    deliverable:'A complete entropy lower bound and a leakage-versus-error parameter plot or table.'
  },

  {
    unit:'core-bfl-multilinear',slug:'multilinear-code-distance',tier:'doctoral',kind:'proof',
    title:'Compute the exact distance of the multilinear code',
    prompt:'Let C contain evaluations on F_q^m of all polynomials with individual degree at most one, q≥2. Prove its dimension and exact minimum Hamming distance. Derive a unique-decoding radius and compare q=2 with q≥2m. State all lengths in field symbols and bits.',
    prerequisites:['Multilinear interpolation','Polynomial roots','Error-correcting codes'],minutes:45,
    guide:[
      'There are 2^m monomials and their evaluations are independent, so the dimension is 2^m and block length q^m. Induct on m: on every point where a nonzero leading coefficient is nonzero, the last-coordinate restriction has at most one root. This yields at least (q−1)^m nonzero evaluations. The product ∏(x_i−a_i) attains the bound.',
      'Relative distance is (1−1/q)^m, and fewer than half that fraction of errors has at most one nearest codeword. At q=2 the code is every function on the Boolean cube, with relative distance 2^(−m) and no redundancy. For q≥2m, Bernoulli’s inequality gives relative distance at least 1/2. Multiply symbol counts by ceil(log₂ q) when reporting storage.'
    ],
    followup:'Why does a constant relative distance still not provide a polynomial-time decoder by itself?',
    deliverable:'Dimension and distance proofs with a parameter table.',
    references:[{title:'Babai–Fortnow–Lund, Two-Prover Interactive Protocols',url:'https://lance.fortnow.com/papers/files/mip2.pdf'}]
  },
  {
    unit:'core-bfl-multilinear',slug:'multilinear-three-point-subtest',tier:'doctoral',kind:'proof',
    title:'Analyze a line subtest without assuming the global theorem',
    prompt:'For q≥3, test f:F_q^m→F_q by choosing a uniform axis direction and line, then three distinct points on that line. Reject if their values are not affine. If β_i is the fraction of direction-i lines at distance at least ε from every affine function, lower-bound rejection in terms of the β_i. State exactly which global conclusion remains unproved.',
    prerequisites:['Affine interpolation','Relative Hamming distance','Conditional sampling'],minutes:40,
    guide:[
      'The first two distinct points determine one affine h. On an ε-far line, h disagrees with f at at least εq points, none of which are those first two. A uniformly selected third distinct point therefore detects disagreement with probability at least εq/(q−2). Averaging over directions and lines gives rejection at least [εq/(q−2)]·(∑_i β_i/m).',
      'A rejection bound δ thus controls the average fraction of far lines, and each β_i is at most mδ(q−2)/(εq). This is a valid quantitative subtest lemma. It does not yet construct one global multilinear function close to f; that step needs a compatible local-to-global theorem with its dimension and error dependence, rather than simply reusing the one-line interpolation argument.'
    ],
    followup:'How does sampling the third point with replacement change the clean lower bound?',
    deliverable:'A subtest soundness proof and a precise missing-global-lemma statement.'
  },
  {
    unit:'core-bfl-multilinear',slug:'multilinear-corner-query-lower-bound',tier:'doctoral',kind:'proof',
    title:'Off-cube evaluation can require every Boolean corner',
    prompt:'Let q>2 and choose x∈(F_q minus {0,1})^m. An algorithm is given only query access to an arbitrary Boolean-corner table v:{0,1}^m→F_q and must exactly evaluate its multilinear extension at x. Prove a worst-case deterministic lower bound of 2^m corner queries, including adaptive algorithms, and compare with the length of a point query to a proof oracle.',
    prerequisites:['Boolean Lagrange basis','Adversary query arguments','Oracle encodings'],minutes:35,
    guide:[
      'The extension value is ∑_b v(b)∏_i x_i^(b_i)(1−x_i)^(1−b_i). Every coefficient is nonzero by the choice of x. Run a deterministic algorithm against the all-zero corner table. If any corner remains unqueried, change only that corner’s value; all answers seen by the adaptive algorithm remain unchanged, but the required evaluation changes by a nonzero amount.',
      'Hence the worst-case exact computation needs every corner, even though the polynomial has individual degree one. A proof oracle storing the extension can answer the same evaluation with an m·ceil(log₂ q)-bit address and one field symbol. This exposes the computational role of an exponentially large encoded object; low degree and short addresses do not make direct corner expansion efficient.'
    ],
    followup:'What extra algebraic circuit representation of v could invalidate the black-box lower-bound premise?',
    deliverable:'An adaptive adversary proof and a query-length versus evaluation-cost comparison.'
  },
  {
    unit:'core-bfl-multilinear',slug:'multilinear-quadratic-curve-correction',tier:'examiner',kind:'construction',
    title:'Self-correct along a quadratic curve',
    prompt:'Suppose f differs from an unknown multilinear g:F_q^m→F_q on at most an α fraction of points. At target x choose independent uniform R,S∈F_q^m and query f(x+tR+t²S) at L distinct nonzero t, with q>L>2m. Derive the restriction degree, pairwise independence, a decoding radius and a Chebyshev failure bound.',
    prerequisites:['Multilinear total degree','Pairwise independence','Univariate decoding','Chebyshev inequality'],minutes:50,
    guide:[
      'The truthful curve restriction has degree at most 2m. For distinct nonzero t,u, the coefficient matrix with rows (t,t²),(u,u²) has determinant tu(u−t)≠0. Thus the two queried points are independent uniform vectors. Error indicators are pairwise independent, even though the entire L-tuple need not be independent.',
      'Let Z count corrupted evaluations, and t₀=floor((L−2m−1)/2). Unique univariate decoding succeeds when Z≤t₀. Since E[Z]≤Lα and Var(Z)≤Lα, failure is at most Lα/(t₀+1−Lα)² when the denominator is positive. Interpolate the recovered polynomial at zero to obtain g(x), without querying the possibly corrupted target itself.'
    ],
    followup:'Compare this with the affine-curve method, whose restriction degree is m but whose query errors need not be pairwise independent.',
    deliverable:'A curve-based corrector and all parameter inequalities needed for a nontrivial success guarantee.'
  },
  {
    unit:'core-bfl-multilinear',slug:'multilinear-hyperplane-corruption',tier:'examiner',kind:'counterexample',
    title:'A nearby word can defeat axis-only correction at one target',
    prompt:'Let q≥3, m≥2, and define f(x)=g(x)+1 on the hyperplane x₁=0 and f=g elsewhere, where g is multilinear. At a target x★ on that hyperplane, a proposed corrector chooses a uniform coordinate direction, samples two distinct non-target points on that axis line and extrapolates affinely. Compute its exact success probability despite the global error rate 1/q.',
    prerequisites:['Axis-parallel geometry','Multilinear restrictions','Target-wise self-correction'],minutes:35,
    guide:[
      'For every direction other than coordinate one, the whole line through x★ remains inside the corrupted hyperplane. On that line f equals the affine restriction of g plus one, so two sampled points reconstruct f(x★), which is wrong. In direction one, all non-target points have first coordinate nonzero and are correct, so extrapolation gives g(x★).',
      'The success probability is exactly 1/m, while relative Hamming error is only 1/q. This is not a contradiction to proximity: errors may be highly concentrated around a chosen target. A corrector using random full-dimensional affine or quadratic curves obtains uniform marginals at each nonzero curve parameter and can prove a bound that holds for every fixed target.'
    ],
    followup:'Does repeating this axis-only corrector and taking a majority fix the example when m>2?',
    deliverable:'A geometric error analysis and a justified replacement sampling rule.'
  },
  {
    unit:'core-bfl-multilinear',slug:'multilinear-integer-grid-bit-bounds',tier:'examiner',kind:'proof',
    title:'Keep integer-grid encodings within a bit budget',
    prompt:'Let g be the multilinear polynomial interpolating integer Boolean-corner values of magnitude at most K. On I^m with I={0,…,N−1}, N≥2, bound the magnitude and bit length of every evaluation, and bound the bit size of coefficients. Explain why polynomial answer length does not imply that the full encoded table is polynomial size.',
    prerequisites:['Boolean interpolation over integers','Bit complexity','Exponential tables'],minutes:35,
    guide:[
      'Use g(x)=∑_b v_b∏_{i:b_i=1}x_i∏_{i:b_i=0}(1−x_i). Every summand is integral and has magnitude at most KN^m, so |g(x)|≤2^mKN^m. Signed evaluations therefore use O(log(K+1)+m log N+m) bits. Expanding the factors shows each coefficient is a signed sum of at most 2^m corner values, bounded by 2^mK.',
      'A single point address has O(m log N) bits and its answer has the stated polynomial bit length when the parameters do. The full grid still contains N^m points, and the Boolean-corner representation already has 2^m values. Do not confuse a local answer bound with an efficient direct evaluator or a polynomial-size global certificate. This integer-grid accounting is separate from finite-field cardinality arguments.'
    ],
    followup:'What breaks if corner values are unrestricted rationals with unbounded denominator length?',
    deliverable:'Magnitude, coefficient and table-size bounds in one explicit parameter table.'
  },
  {
    unit:'core-bfl-multilinear',slug:'multilinear-weighted-residual-check',tier:'examiner',kind:'synthesis',
    title:'Prevent cancellation when checking many residuals',
    prompt:'A fixed multilinear residual A:F_q^m→F_q should vanish on the Boolean cube. Show why checking only ∑_b A(b)=0 is unsound. Construct a random-weight polynomial H(r)=∑_b A(b)∏_i r_i^(b_i), prove its identity-test bound, and express H(r) as a Boolean sum suitable for degree-two-per-coordinate sum-check.',
    prerequisites:['Multilinear polynomials','Schwartz–Zippel','Sum-check'],minutes:45,
    guide:[
      'For m=1, residual values 1 and −1 cancel in odd characteristic despite both being nonzero. In H, each Boolean residual is the coefficient of a distinct monomial in r, so H is nonzero iff at least one residual is nonzero. Its total degree is at most m, giving Pr_r[H(r)=0]≤m/q for uniform independent field coordinates.',
      'Write H(r)=∑_{b∈{0,1}^m} A(b)∏_i[(1−b_i)+r_i b_i]. The summand polynomial has individual degree at most two, so an ordinary sum-check adds at most 2m/q error when its final A evaluation is trusted. The combined algebraic error is at most 3m/q. The residual must be one fixed decoded function before r is chosen; adapting the whole residual after seeing r invalidates this coefficient argument.'
    ],
    followup:'How do self-correction failures for the final A evaluation enter the budget?',
    deliverable:'A cancellation example and a complete weighted-residual verification reduction.'
  },
  {
    unit:'core-bfl-multilinear',slug:'multilinear-end-to-end-decoding-budget',tier:'research',kind:'research-extension',
    title:'Compose structural testing, correction and computation checks',
    prompt:'Assume a structural test establishes, except with probability β, one fixed multilinear g at distance at most α from f. An algebraic verifier makes t adaptive evaluations and has ideal soundness γ. Use affine-line correction with m+1 distinct nonzero samples per target to derive an end-to-end error budget. Choose explicit α,β,γ for target η and state the field-size requirements.',
    prerequisites:['Proximity theorems','Affine-line interpolation','Adaptive coupling'],minutes:50,
    guide:[
      'For any fixed target x and uniform direction R, each nonzero x+sR is uniform. The truthful restriction has degree at most m, and a union bound over m+1 queried points makes one correction fail with probability at most (m+1)α. This target-wise guarantee survives adaptive target selection when fresh directions are used.',
      'Condition on the structural guarantee and couple all corrected answers with g. Total false acceptance is at most β+t(m+1)α+γ. One sufficient allocation is β≤η/3, γ≤η/3 and α≤η/[3t(m+1)], with q≥m+2 to provide distinct nonzero interpolation parameters and whatever larger q the algebraic checks require. State the assumed structural theorem explicitly; this composition does not prove its proximity conclusion.'
    ],
    followup:'How could robust decoding improve the required α compared with insisting that all m+1 samples are correct?',
    deliverable:'A dependency diagram, conditional composition proof and concrete η-budget.'
  },
  {
    unit:'core-bfl-multilinear',slug:'multilinear-individual-degree-d',tier:'research',kind:'research-extension',
    title:'Extend every resource bound to individual degree d',
    prompt:'Replace multilinearity by individual degree at most d<q on F_q^m. Prove the evaluation code’s dimension and exact distance, derive affine-line degree and a basic target-wise correction bound, and choose q as a function of m,d for constant relative distance. Compare all table and local-message sizes with d=1.',
    prerequisites:['Tensor-product polynomial codes','Univariate roots','Self-correction'],minutes:55,
    guide:[
      'The monomial basis has (d+1)^m terms, the block length is q^m and the minimum distance is (q−d)^m, by the same tensor induction and a product of d distinct linear factors in each coordinate. Relative distance is (1−d/q)^m; q≥2md makes it at least one half by Bernoulli’s inequality.',
      'An arbitrary affine-line restriction has total degree at most md, not d. If q≥md+2, interpolating from md+1 distinct nonzero points gives a failure bound (md+1)α against a fixed α-corrupted word, using uniform marginals. For both constant distance and this corrector take q≥max(2md,md+2). Local axis polynomials require d+1 coefficients, while point addresses remain m log q bits. Report the exponential dependence of the global coefficient count on m and the polynomial dependence of local messages on d.'
    ],
    followup:'For the quadratic-curve corrector, replace every occurrence of m by which degree parameter?',
    deliverable:'Generalized distance and correction proofs plus a d=1 versus d>1 resource comparison.'
  },

  {
    unit:'core-bfl-nexp',slug:'nexp-multiround-local-histories',tier:'doctoral',kind:'proof',
    title:'Count strategies for a genuinely multiround verifier',
    prompt:'A classical verifier uses R random bits, k provers, r rounds, q-bit questions and a-bit answers, all polynomially bounded in n. Derive a padded local-history bound H, an explicit total strategy-table size and a nondeterministic exponential-time verification algorithm. Account for table lookup without assuming a unit-cost exponentially large random-access memory.',
    prerequisites:['Local histories','Classical multiprover strategies','Nondeterministic time'],minutes:45,
    guide:[
      'A prover’s action can depend on all its own received questions and earlier answers, not merely its latest q-bit question. A safe encoding has H=O(r(q+a+log r)) bits, including stage information. One padded table per stage and prover therefore needs at most kra·2^H bits, still singly exponential for polynomial parameters.',
      'Guess the entire collection before enumerating verifier tapes. For every one of the 2^R tapes simulate the interaction with those same local tables and count accepting tapes. Even scanning a full table for each lookup multiplies exponential factors into another 2^poly(n) bound. Counters use O(R) bits; table storage may be exponential, which NEXP permits and the single-prover PSPACE argument does not.'
    ],
    followup:'When can the previously sent answers be reconstructed from shorter local-history encodings?',
    deliverable:'A multiround table encoding and a machine-model-independent NEXP time bound.',
    references:[{title:'Babai–Fortnow–Lund, Two-Prover Interactive Protocols',url:'https://lance.fortnow.com/papers/files/mip2.pdf'}]
  },
  {
    unit:'core-bfl-nexp',slug:'nexp-tableau-sampling-gap',tier:'doctoral',kind:'construction',
    title:'Local tableau constraints have an exponentially small naive gap',
    prompt:'For a nondeterministic T-time Turing computation with T=2^p(n), build an accepting tableau with O(T²) cells and constant-arity local constraints. Give address and answer lengths. Show why sampling a uniform constraint cannot by itself give constant soundness, and identify the precise gap the algebraic encoding must repair.',
    prerequisites:['Cook–Levin tableaux','Succinct addressing','Soundness gaps'],minutes:40,
    guide:[
      'Pad the machine to T steps and T tape positions, with an accepting state that persists. Each cell stores a symbol from a fixed alphabet augmented with head/state markers. Initial, transition and final conditions are expressible by O(T²) constant-size local constraints; time and position addresses use O(log T)=O(p(n)) bits.',
      'Local tableau constraints alone need not have a constant violation gap. For example, take a machine that remains rejecting and alter only its final head/state cell to accepting; this satisfies the final acceptance check but breaks only O(1) local transition checks. Among Θ(T²) constraints, uniform inspection detects this with probability O(T^(−2)). Polynomially many checks still give exponentially small detection in n. BFL needs global algebraic consistency/proximity and computation checks, beyond short addresses and local constraints.'
    ],
    followup:'Does repeating the naive check n^100 times repair the gap when T=2^n?',
    deliverable:'A tableau specification, query-size count and a quantified failure of naive local sampling.'
  },
  {
    unit:'core-bfl-nexp',slug:'nexp-encoding-dimension-field-size',tier:'doctoral',kind:'proof',
    title:'Balance exponential table length against field redundancy',
    prompt:'An exponential computation has N=2^p(n) witness bits. Encode them as Boolean-corner values of a polynomial in m=ceil(log₂ N) variables and extend to F_q^m. Choose q polynomial in m with q≥2m. Bound the global table length, local address length, coefficient count and relative code distance, and show all storage remains singly exponential in n.',
    prerequisites:['Multilinear encodings','Code distance','Exponential asymptotics'],minutes:40,
    guide:[
      'The corner representation has 2^m field symbols, while the extended table has q^m symbols and point addresses of m·ceil(log₂ q) bits. For q=m^O(1), q^m=2^O(m log m). With m polynomial in n this is still 2^poly(n), even though it can exceed the original witness length by a superpolynomial factor.',
      'The multilinear code’s relative distance is (1−1/q)^m≥1−m/q≥1/2 for q≥2m. A constant field instead gives exponentially deteriorating distance as m grows. The resource tradeoff is therefore deliberate: enlarge the encoded object while preserving polynomial local questions and answers. Count field-symbol bits separately; a short local address does not make the whole table polynomial.'
    ],
    followup:'What changes if a p(n)-bit answer rather than one field symbol is stored at each original address?',
    deliverable:'A dimension/field/storage table and a proof of the singly exponential upper bound.'
  },
  {
    unit:'core-bfl-nexp',slug:'nexp-logarithmic-questions-collapse',tier:'examiner',kind:'proof',
    title:'Short question spaces yield shorter Merlin witnesses',
    prompt:'Restrict to a one-round constant-prover protocol with q(n)≤c log₂ n question bits per prover and polynomial answer length. Prove the resulting language lies in MA. If the verifier also uses O(log n) random bits, prove containment in NP. Explain why the same argument does not follow merely from short individual questions in many rounds.',
    prerequisites:['MA and NP definitions','Answer tables','Random-tape enumeration'],minutes:35,
    guide:[
      'Each one-round local table has at most n^c entries and polynomial total size. Merlin sends all tables before Arthur samples verifier randomness; Arthur then simulates the original verifier by table lookup. Completeness uses honest tables, and soundness holds because every received table collection is a legal deterministic prover strategy.',
      'If only O(log n) verifier random bits are used, the NP verifier can enumerate all polynomially many tapes and compare the exact acceptance fraction with the threshold. For many rounds, actions depend on local histories, whose total length may be polynomial even when each individual question is logarithmic. The number of distinct histories can then be exponential, invalidating the short-witness step.'
    ],
    followup:'How does the conclusion change when the number of provers is polynomial but their aggregate tables still fit in polynomial size?',
    deliverable:'MA and NP simulations with their exact encoding hypotheses.'
  },
  {
    unit:'core-bfl-nexp',slug:'nexp-small-prover-circuits-ma',tier:'examiner',kind:'proof',
    title:'Derive the conditional circuit-to-MA consequence',
    prompt:'Suppose every YES instance x of a classical multiprover protocol has a complete local strategy implemented by a polynomial-total-size collection of circuits taking padded local histories as input. Prove L∈MA. State the circuit premise with quantifiers and explain why arbitrary dishonest circuits remain covered by soundness. Relate this lemma to the paper’s prover-complexity circuit consequence.',
    prerequisites:['Nonuniform circuits','Merlin–Arthur protocols','Local strategy legality'],minutes:40,
    guide:[
      'Require one fixed polynomial bound p such that for every x∈L there exists a collection C_x of total size at most p(|x|) attaining the protocol’s completeness probability. Merlin sends C_x first. Arthur validates its syntax and simulates the verifier using these circuits on each prover’s own local history, with independent private verifier randomness as prescribed.',
      'For x∉L, every circuit collection defines a legal classical local strategy, so the original soundness theorem applies. The circuit collection may depend on x because it is an MA witness; no efficient uniform strategy-construction algorithm is required. BFL’s stronger consequences obtain this premise from hypotheses about circuit complexity of the languages/functions implementing honest prover responses, not from table consistency alone.'
    ],
    followup:'Why would circuits permitted to read the other prover’s current question invalidate the simulation’s soundness justification?',
    deliverable:'A quantified lemma, a complete MA verifier and a statement of the additional circuit assumption.'
  },
  {
    unit:'core-bfl-nexp',slug:'nexp-indexed-prover-family-upper-bound',tier:'examiner',kind:'proof',
    title:'Allow exponentially many indexed provers in the upper-bound audit',
    prompt:'Consider a classical variant with provers indexed by b(n)-bit identifiers. The verifier contacts only polynomially many per run; each prover’s padded local history has at most H(n) bits and answer length a(n), with b,H,a polynomial. Prove an NEXP upper bound by guessing all indexed strategies and specify the assumptions needed for the representation.',
    prerequisites:['Strategy-table enumeration','Succinct identifiers','Nondeterministic exponential time'],minutes:40,
    guide:[
      'There are at most 2^b prover identities and at most 2^H padded local histories per identity. A global collection of response tables therefore has at most a·2^(b+H) bits, up to polynomial stage factors. Guess it once and enumerate all polynomial-length verifier random tapes, always looking up answers by identity and that prover’s own local history.',
      'Even a naive scan per lookup stays within singly exponential time. The verifier must explicitly use only polynomial-length identifiers and polynomially bounded local histories; unrestricted identifier length or hidden unbounded interaction would change the count. This is an upper-bound extension for a specified classical model, not an invocation of the two-prover lower-bound theorem for a new strategy model.'
    ],
    followup:'Why does contacting few provers on each run not permit independently choosing a fresh strategy for an identity on every random tape?',
    deliverable:'An indexed strategy encoding and an explicit exponential time calculation.'
  },
  {
    unit:'core-bfl-nexp',slug:'nexp-lexicographic-witness-oracle',tier:'examiner',kind:'construction',
    title:'Construct an accepting exponential witness with padded NP queries',
    prompt:'A nondeterministic machine runs in T=2^p(n) time. Show how a deterministic EXP^NP machine can find a lexicographically first accepting nondeterministic choice string when one exists. Specify the padded NP query, its length, number of queries and why an unpadded original-size NP query would be a different claim.',
    prerequisites:['NP oracle machines','Exponential padding','Search-to-decision'],minutes:45,
    guide:[
      'Use a query containing x, a unary T clock and a candidate prefix u, asking whether some extension of u describes an accepting T-step computation. An NP machine guesses the remaining O(T) choice bits and simulates the computation in time polynomial in the padded query length. First test existence; then append 0 whenever the corresponding completion query is YES, otherwise append 1.',
      'There are O(T) prefix queries, each of length O(T+|x|), and constructing them plus processing their answers takes exponential time in n. Thus EXP^NP suffices for this deterministic witness selection. The NP oracle receives exponentially long padded instances; claiming polynomial-length original-input NP queries would require a different and substantially stronger reduction.'
    ],
    followup:'Does finding one accepting witness nondeterministically imply that the lexicographically first one is computable in deterministic EXP?',
    deliverable:'Greedy witness-search pseudocode and a complete padding/time analysis.'
  },
  {
    unit:'core-bfl-nexp',slug:'nexp-determinization-audit',tier:'research',kind:'research-extension',
    title:'Audit an attempted deterministic strategy-table simulation',
    prompt:'For total guessed-table length M=2^poly(n), compare nondeterministically guessing one table collection with deterministically enumerating all collections. Bound both running times including verifier-tape checks. Then state the precise complexity consequence of a polynomial-space simulation for every classical MIP verifier, using MIP=NEXP and IP=PSPACE without asserting an unproved separation.',
    prerequisites:['Nondeterministic versus deterministic time','MIP=NEXP','IP=PSPACE'],minutes:45,
    guide:[
      'One nondeterministic branch writes M bits and checks all 2^R verifier tapes in exponential time. Exhaustively enumerating all 2^M table collections generally yields a doubly exponential deterministic algorithm, because M itself is exponential. The exact acceptance counter can be small even though the candidate-strategy search space is enormous.',
      'A polynomial-space simulation for every such verifier would give NEXP⊆PSPACE. Since PSPACE⊆EXP⊆NEXP, this would imply NEXP=PSPACE. This is a conditional consequence, not a known contradiction. Any proposed local maximization shortcut must therefore justify global consistency of repeated local histories rather than silently discarding the exponential strategy constraints.'
    ],
    followup:'Which step uses nondeterminism only once, and why can it not be replaced by tape-by-tape optimizing guesses?',
    deliverable:'Two running-time formulas and a logically correct consequence audit of a proposed simulator.'
  },
  {
    unit:'core-bfl-nexp',slug:'nexp-two-copy-chsh-investigation',tier:'research',kind:'research-extension',
    title:'Test the product claim on a finite parallel repetition',
    prompt:'Repeat the classical XOR game a⊕b=xy twice in parallel, accepting only if both coordinates win. Encode each two-bit question and answer as an integer 0,…,3. Exhaustively enumerate all local functions A,B:{0,1,2,3}→{0,1,2,3}, verify the maximum success fraction, and compare with sequential repetition and the naive product (3/4)².',
    prerequisites:['Classical XOR-game value','Local-function enumeration','Parallel and sequential repetition'],minutes:55,
    guide:[
      'There are 4^4=256 local functions per prover and 65,536 pairs. For each pair count the 16 question pairs satisfying (A(x) XOR B(y))=(x AND y), bitwise. Exhaustive enumeration gives maximum 10/16; for example A=[1,0,0,0] and B=[0,1,2,1] attain it in input order 0,1,2,3. This exceeds 9/16.',
      'In sequential repetition, answers for the first game must precede the second questions. Conditional on every fixed prior joint history, the fresh game still has value at most 3/4, so accepting both has value at most 9/16, attained by independent optimal strategies. The parallel computation is a bounded reproducible counterexample to exact product multiplication, not a statement of a general parallel-repetition theorem.'
    ],
    followup:'What independence or information constraint in the sequential proof is unavailable when both question coordinates arrive together?',
    deliverable:'Enumeration code or pseudocode, a winning strategy table and a sequential-versus-parallel proof comparison.'
  },

  {
    unit:'core-gmw-def',slug:'zk-gi-witness-distribution',tier:'doctoral',kind:'proof',
    title:'Show the GI view is independent of the chosen isomorphism',
    prompt:'For isomorphic graphs G₀,G₁, analyze one graph-isomorphism proof round against a verifier whose challenge is any efficient function of its random tape, auxiliary input and the first graph H. Prove that two different witness isomorphisms induce the same entire verifier-view distribution. Count the isomorphisms giving each fixed H and response.',
    prerequisites:['Graph automorphisms','Uniform relabelings','Verifier views'],minutes:40,
    guide:[
      'Condition on the verifier’s random tape and on H. The initial relabeling of G₀ is uniform among Iso(G₀,H), a coset of Aut(G₀). For either legal challenge b, composing with any fixed witness maps this set bijectively to Iso(G_b,H). Therefore the response is uniform over the same set regardless of which witness isomorphism was used.',
      'The distribution of H is uniform over the common labeled orbit, and the verifier’s challenge is fixed once its tape, auxiliary input and H are fixed. These conditional response laws imply equality of the full view, including the tape and any deterministic final output. This proves witness independence for this protocol; general witness indistinguishability and zero knowledge remain distinct notions.'
    ],
    followup:'Which part of the argument uses the fact that all isomorphism sets between fixed graphs have equal size?',
    deliverable:'A coset-counting proof for the entire view, including malicious challenge dependence.',
    references:[{title:'Goldreich–Micali–Wigderson, Proofs that Yield Nothing But Their Validity',url:'https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf'}]
  },
  {
    unit:'core-gmw-def',slug:'zk-geometric-versus-expected-truncation',tier:'doctoral',kind:'proof',
    title:'Separate geometric simulator tails from a mere mean bound',
    prompt:'For k sequential GI rounds, cap each exact rewind simulator at T attempts and derive total statistical error and strict runtime. Contrast this with an arbitrary simulator known only to have expected time p(n): state Markov’s cutoff bound and give a finite-mean runtime distribution for which no fixed polynomial cutoff makes its tail negligible.',
    prerequisites:['Geometric distributions','Total variation','Expected versus strict polynomial time'],minutes:45,
    guide:[
      'A GI trial succeeds with probability exactly one half even after fixing the verifier’s tape and prior state. Failure of all T attempts has probability 2^(−T), so coupling all k rounds gives statistical error at most k2^(−T). Taking T≥λ+ceil(log₂ k) makes the error at most 2^(−λ), with O(kT) verifier invocations.',
      'For only E[time]≤p(n), cutoff p(n)/ε gives tail at most ε; negligible ε need not permit polynomial cutoff. A distribution placing mass proportional to 1/(j²2^j) at time 2^j has finite mean, but its tail at n^c is still at least an inverse polynomial divided by a logarithmic factor for every fixed c. The GI conversion relies on its stronger geometric tail, not just expected polynomial time.'
    ],
    followup:'Why does outputting a failure symbol on timeout give a valid statistical-distance upper bound?',
    deliverable:'A strict-simulation parameter choice and a rigorous limitation of mean-only truncation.'
  },
  {
    unit:'core-gmw-def',slug:'zk-unique-witness-wi-separation',tier:'doctoral',kind:'counterexample',
    title:'Witness indistinguishability can be vacuous',
    prompt:'Assume a polynomial-time one-way permutation family f_n. On common input x=f_n(w), consider the protocol where the prover sends w and the verifier checks f_n(w)=x. Prove witness indistinguishability and show that computational zero knowledge would contradict one-wayness. State the role of an efficient validity distinguisher and expected simulator runtime.',
    prerequisites:['One-way permutations','Witness indistinguishability','Computational zero knowledge'],minutes:40,
    guide:[
      'Each x has exactly one witness, so comparing two witnesses for the same statement is vacuous: the protocol is witness indistinguishable. It nevertheless reveals that unique preimage in full. Membership in the permutation’s range is trivial, so language complexity alone does not prevent a particular proof protocol from leaking a hard-to-compute witness.',
      'Given x, test a purported simulated view by checking whether its response w′ satisfies f_n(w′)=x. The real view always passes, so computational indistinguishability forces the simulator to produce valid preimages with overwhelming probability on random permutation outputs. This gives an inverter; if simulation is only expected polynomial time, truncate at a suitable polynomial multiple of its mean to retain a nonnegligible success probability.'
    ],
    followup:'Why is merely observing different supports insufficient here without the efficient predicate f_n(w′)=x?',
    deliverable:'A WI proof and an explicit zero-knowledge-to-inversion reduction.'
  },
  {
    unit:'core-gmw-def',slug:'zk-malformed-challenge-abort-bias',tier:'examiner',kind:'counterexample',
    title:'Handle aborting GI verifiers without rejection-sampling bias',
    prompt:'A malicious GI verifier may abort after seeing H instead of sending a legal challenge. A simulator immediately outputs every aborting attempt but outputs a non-aborting attempt only when its guessed bit matches. Show that this can bias the view. Design an exact simulator whose probability of retaining an attempt is one half for every H, including aborts.',
    prerequisites:['GI rewind simulation','Conditioning','Verifier aborts'],minutes:40,
    guide:[
      'If the real abort probability is p, the proposed retain rule keeps aborts with probability one and valid challenges with probability one half. Its output abort probability becomes p/[p+(1−p)/2], which differs from p except at the extremes. Being able to fabricate an abort transcript does not justify retaining it at a different rate.',
      'For a valid challenge retain only on a matching guessed bit, as usual. For an abort, retain only on an independent fair dummy coin and otherwise retry from the same verifier snapshot. Since the first-message distribution is independent of the guessed source on YES inputs, every H has retention probability one half. Conditional output therefore has exactly the real H and abort distribution, and expected trials remain two.'
    ],
    followup:'How would you generalize the dummy retention probability for a b-bit challenge block?',
    deliverable:'An explicit bias calculation and a corrected exact simulation algorithm.'
  },
  {
    unit:'core-gmw-def',slug:'zk-uniform-simulator-quantifiers',tier:'examiner',kind:'proof',
    title:'Put the simulator outside the instance quantifier',
    prompt:'Write an auxiliary-input computational zero-knowledge definition for an efficient prover given a witness, including verifier, simulator, distinguisher, YES-instance, witness and auxiliary-input quantifiers. Explain why a formulation allowing a separate simulator S_(x,w) for each statement and witness becomes vacuous for such protocols.',
    prerequisites:['Indistinguishable ensembles','Uniform algorithms','Auxiliary inputs'],minutes:40,
    guide:[
      'For each permitted efficient verifier V* there must be one permitted simulator S_V* whose output on x and auxiliary input z is indistinguishable from the entire real view for all polynomially bounded YES-instance/witness/auxiliary-input sequences in the chosen definition. Distinguishers receive the public data required by that definition, and the indistinguishability error is negligible in the security/input parameter.',
      'If S can instead be selected separately after x,w are fixed, its code may hardcode w and run the real efficient prover with V*. Every such protocol then has a pointwise simulator, including one that transmits the witness verbatim. Uniformity and quantifier order prevent this loophole. State separately whether nonuniform distinguishers or simulators are allowed rather than changing conventions mid-proof.'
    ],
    followup:'How does polynomial-length auxiliary information expose problems in composing a definition that handles only one fixed verifier state?',
    deliverable:'A fully quantified ensemble definition and a hardcoded-witness vacuity argument.'
  },
  {
    unit:'core-gmw-def',slug:'zk-distance-and-postprocessing',tier:'examiner',kind:'synthesis',
    title:'Compare simulation notions under postprocessing',
    prompt:'Prove closure of perfect, statistical and computational simulation under the appropriate final-view postprocessing. Then, assuming a secure stretch-doubling pseudorandom generator G, compare U_n with G(U_(n/2)) in statistical distance and efficient distinguishability. Use the example to explain why computational simulation should not be described as near equality of probability masses.',
    prerequisites:['Total variation','Efficient distinguishers','Pseudorandom generators'],minutes:40,
    guide:[
      'Identical distributions remain identical under every deterministic map. Total variation cannot increase under a randomized channel, by coupling or by pulling events back to the original space. Computational indistinguishability survives efficient postprocessing because a distinguisher for the processed views can be composed with that postprocessing.',
      'The generator’s image has size at most 2^(n/2), so uniform U_n lands there with probability at most 2^(−n/2), whereas G(U_(n/2)) always does. Statistical distance is therefore at least 1−2^(−n/2), despite computational indistinguishability under the explicit generator assumption. An inefficient image-membership test separates the distributions; this does not supply an efficient verifier with such a test.'
    ],
    followup:'Why is efficient postprocessing essential only in the computational clause?',
    deliverable:'Three closure proofs and a quantitative statistical/computational separation example.'
  },
  {
    unit:'core-gmw-def',slug:'zk-random-tape-restart-bias',tier:'examiner',kind:'counterexample',
    title:'Resampling the verifier tape can bias a simulated view',
    prompt:'A generic rejection simulator has a uniform verifier tape bit r, but its per-attempt success probabilities are p(0)=1 and p(1)=1/2. Compare selecting r once and rewinding with that fixed tape against resampling r after every failure. Compute the output tape distribution and expected attempt counts in both procedures.',
    prerequisites:['Geometric waiting time','Verifier views','Rewinding snapshots'],minutes:30,
    guide:[
      'Fixing r first preserves its intended uniform marginal: the expected attempts are (1/2)·1+(1/2)·2=3/2. Repeatedly resampling r gives overall success probability 3/4 per trial and expected attempts 4/3, but the retained tape is zero with probability (1/2)/(3/4)=2/3.',
      'The faster procedure therefore changes the full view even when its accepted transcripts are locally valid. Standard rewinding fixes the sampled verifier tape and its pre-round state. For the GI simulator the exact one-half success probability is tape-independent, so this particular bias disappears; a generic simulation argument must establish that property rather than borrowing it without proof.'
    ],
    followup:'What is the retained tape law for an arbitrary tape distribution μ and success function p(r)?',
    deliverable:'Two exact waiting-time computations and a general retained-tape formula.'
  },
  {
    unit:'core-gmw-def',slug:'zk-sequential-state-composition',tier:'research',kind:'research-extension',
    title:'Compose simulators across adversarial verifier states',
    prompt:'Consider k(n) sequential protocol invocations with a verifier retaining arbitrary polynomial-length state. Assume each invocation has an auxiliary-input black-box simulator with a uniform expected-time bound and error ε_i against every efficient continuation. Construct a sequential composition proof, bound total distinguishing advantage and expected time, and identify why honest-verifier simulation is an insufficient premise.',
    prerequisites:['Auxiliary-input zero knowledge','Hybrid arguments','Sequential composition'],minutes:55,
    guide:[
      'Treat the complete current verifier snapshot, prior public transcript and retained auxiliary data as the auxiliary state for each invocation. Replace invocations one at a time in a hybrid argument, allowing the later efficient continuation to inspect everything produced so far. Under the stated uniform guarantee, the distinguishing losses add to at most ∑ε_i.',
      'A uniform expected-time bound p(n) over all admissible snapshots gives total expected work O(kp(n)) by conditional expectation. The black-box simulator may rewind only within the current invocation while preserving the snapshot before it. Honest-verifier simulation gives neither arbitrary-state coverage nor protection against message-dependent future challenges. This is a bounded composition theorem under explicit simulator hypotheses, not an automatic concurrent-composition claim.'
    ],
    followup:'Which extra issue arises if the per-invocation expected-time bound holds only on states generated by an honest prefix?',
    deliverable:'A state-aware composition construction, a hybrid proof and a runtime bound.'
  },
  {
    unit:'core-gmw-def',slug:'zk-logarithmic-gi-blocks',tier:'research',kind:'construction',
    title:'Trade GI rounds for logarithmic challenge blocks',
    prompt:'To obtain soundness 2^(−k), group GI repetitions into sequential blocks of b≤c log₂ n parallel instances, where n≥2 is the graph size. Prove completeness, soundness, exact guessing-simulator success per block and expected runtime against valid message-dependent challenge vectors. Compare b=1, b=Θ(log n) and b=k.',
    prerequisites:['GI simulation','Parallel challenge vectors','Sequential soundness'],minutes:50,
    guide:[
      'On a YES input, the vector of independently relabeled first graphs has a distribution independent of the simulator’s guessed b-bit source vector. Any verifier challenge vector therefore matches with probability exactly 2^(−b), even after fixing its tape and pre-block state. A retained block has the correct view, with expected 2^b attempts.',
      'For a NO GI instance, each first graph can have a valid isomorphism to at most one source graph, so a uniform b-bit honest challenge succeeds in at most 2^(−b). Sequential blocks containing k total bits give soundness 2^(−k). With b=Θ(log n), expected simulation is polynomial and the block count is O(k/log n); b=k can make this particular simulator exponential. Failure of that simulator is not a proof that every parallel simulator is impossible.'
    ],
    followup:'How do malformed-vector aborts require the same retention-balancing principle as malformed one-bit challenges?',
    deliverable:'A block protocol and a rounds/soundness/simulation-cost comparison.'
  },

  {
    unit:'core-gmw-gni',slug:'gni-pairing-two-response-extraction',tier:'doctoral',kind:'proof',
    title:'Extract an isomorphism from two accepted subset responses',
    prompt:'In the GMW pairing certification, fix H and k graph pairs T_(i,0),T_(i,1). A subset challenge I asks for input-to-pair isomorphisms at i∈I and an H-to-one-member isomorphism at i∉I. Given valid responses to distinct I,K with the same first message, extract an isomorphism H→G_b. Type every map and bound verification, extraction and communication costs for n-vertex graphs.',
    prerequisites:['Permutation composition','GMW pairing certification','Special-soundness reasoning'],minutes:45,
    guide:[
      'Choose i in the symmetric difference. One response contains maps θ:G_b→T_(i,j), together with the pair’s source labeling; the other contains η:H→T_(i,j) for some member j. Compose θ^(−1)∘η to obtain H→G_b. Both answers refer to the same fixed labeled graph T_(i,j), which is the critical compatibility condition.',
      'With adjacency matrices, check each claimed isomorphism in O(n²) time and represent a permutation in O(n log n) bits. The first message has O(kn²) graph bits; the subset has k bits; openings have O(kn log n) bits. Finding a differing index costs O(k), and composition costs O(n) with permutation arrays. These bounds concern the certificate subprotocol, before repeated outer GNI rounds.'
    ],
    followup:'Why is distinctness of I and K essential even if both responses contain many valid permutations?',
    deliverable:'A typed extractor, correctness proof and full local resource count.',
    references:[{title:'Goldreich–Micali–Wigderson, Proofs that Yield Nothing But Their Validity',url:'https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf'}]
  },
  {
    unit:'core-gmw-gni',slug:'gni-invalid-question-one-subset',tier:'doctoral',kind:'proof',
    title:'An unrelated challenge can answer at most one subset',
    prompt:'Fix the verifier’s tape and first certification message, and assume H is isomorphic to neither G₀ nor G₁. Prove that at most one of the 2^k subset challenges can receive a valid response. Construct a first message for which exactly one prescribed subset is answerable, and derive the uniform challenge acceptance probability.',
    prerequisites:['Pairing extractor','Fixed-tape response functions','Cut-and-choose'],minutes:35,
    guide:[
      'If two different subsets were answerable, the symmetric-difference extraction would produce an isomorphism from H to one input graph, contradicting the premise. Thus a fixed malicious verifier can pass at most one uniformly selected subset, with probability at most 2^(−k), even if its response code depends on the entire subset.',
      'To attain the bound, fix a target subset I★. At indices in I★ supply genuine input-graph pairs, which can be opened to the inputs but not linked to unrelated H. At other indices supply a pair of copies of H, which can be linked to H but cannot be correctly opened as an input pair. Only I★ passes. Choose graphs with the required distinct isomorphism types so no accidental extra mode is possible.'
    ],
    followup:'What parameter replaces 2^(−k) if the subset distribution is not uniform?',
    deliverable:'A two-response contradiction proof and a tight first-message construction.'
  },
  {
    unit:'core-gmw-gni',slug:'gni-biased-source-robustness',tier:'doctoral',kind:'proof',
    title:'Compute soundness for a biased hidden source',
    prompt:'Modify the basic GNI verifier so that its hidden source bit equals one with known probability p instead of 1/2, and use an exactly uniform relabeling. Derive optimal soundness on isomorphic graphs, an honest-verifier simulator on nonisomorphic graphs and k-round sequential soundness. Extend the bound to adaptive biases p(h)∈[α,1−α].',
    prerequisites:['Bayes prediction','Uniform relabelings','Sequential conditioning'],minutes:35,
    guide:[
      'When the inputs are isomorphic, both source choices induce the same challenge-graph distribution. The graph supplies no information about the source, but its prior is biased, so the optimal response is the more likely bit and succeeds with probability max(p,1−p). On nonisomorphic inputs the honest unbounded prover identifies the source perfectly.',
      'An honest-verifier simulator draws the source bit and relabeling itself and writes the corresponding prover answer, so it needs no graph-isomorphism decision algorithm. With fresh choices in k rounds, soundness is max(p,1−p)^k. If every history-dependent bias stays inside [α,1−α], conditional success is at most 1−α and total soundness is at most (1−α)^k. This is an honest-verifier simulation statement for the basic protocol.'
    ],
    followup:'What happens to the soundness guarantee as α approaches zero?',
    deliverable:'Exact biased-source values and a conditionally valid repetition theorem.'
  },
  {
    unit:'core-gmw-gni',slug:'gni-rare-event-fallback-runtime',tier:'examiner',kind:'proof',
    title:'Prove expected time for the pairing simulator’s fallback',
    prompt:'On nonisomorphic input graphs, freeze the verifier’s random tape and complete pre-challenge state, including prior-round state, after H and the test pairs are fixed. Assume every restored invocation and certificate check costs at most a polynomial P(n,k). Let M count answerable subsets among 2^k and D(n) bound exhaustive classification of H including its interleaved invocation overhead. Analyze the simulator, returning bit 0 if H matches neither input. Separate M=0,1 and M≥2.',
    prerequisites:['Geometric waiting time','GMW pairing extraction','Rare-event expectation'],minutes:50,
    guide:[
      'Every retry restores the same complete snapshot and tape, so M refers to one deterministic subset-response function and each attempt costs at most P(n,k). For M=0 emit the same partial abort view as the real prover. For M≥2, extraction is entered with probability p=M/2^k, and a fresh distinct answerable subset appears with probability (M−1)/2^k≥p/2. Conditional expected retries are at most 2/p, giving unconditional work O(P(n,k)).',
      'For M=1 the entry probability is 2^(−k), and exhaustive classification contributes at most 2^(−k)D(n). Output the unique source bit if H matches one input; if it matches neither, output bit 0, exactly as prescribed in GMW’s prover and fallback. Permutation enumeration gives D(n)=2^O(n log n), so k≥ceil(log₂ D)+λ bounds this contribution by 2^(−λ). Interleaving search with retries preserves exact output behavior, including the rare unrelated-H case.'
    ],
    followup:'Why would simply deleting the M=1 case change perfect simulation into an approximate claim?',
    deliverable:'A three-case expectation proof and an explicit certification-length choice.'
  },
  {
    unit:'core-gmw-gni',slug:'gni-fixed-snapshot-extraction',tier:'examiner',kind:'counterexample',
    title:'Extraction requires the same first message',
    prompt:'A proposed GNI simulator resamples the malicious verifier’s random tape before requesting a second subset response. Audit the extraction argument by tracking H, the test pairs and every permutation’s domain and codomain. Give a verifier behavior for which two individually valid responses cannot be combined, and specify the exact snapshot that must be restored.',
    prerequisites:['Rewinding','Typed isomorphism composition','Verifier local state'],minutes:35,
    guide:[
      'The extractor needs θ:G_b→T_(i,j) and η:H→T_(i,j) for the same H and the same labeled test graph. A verifier that generates new independently relabeled pairs and a new H on each tape produces valid certificates, but their permutations generally refer to different middle graphs. Composing their array encodings is not an isomorphism proof for the retained challenge.',
      'Sample the verifier tape once, keep the complete prior-round public history, and restore its state immediately before the subset challenge while retaining the initial H and pairs. Only the subset is resampled. In later outer rounds the snapshot includes all earlier simulated responses; fixing merely the original input and random tape is not a sufficient description of the state being rewound.'
    ],
    followup:'Could an explicitly provided isomorphism between the two middle graphs repair a mismatched composition?',
    deliverable:'A typed failure example and a complete rewind-snapshot specification.'
  },
  {
    unit:'core-gmw-gni',slug:'gni-certification-source-hiding',tier:'examiner',kind:'proof',
    title:'The pairing openings must preserve the hidden source',
    prompt:'On isomorphic inputs, prove that the honest verifier’s full GMW pairing-certification transcript reveals no information about its hidden GNI source bit, even when the prover chooses its subset after seeing H and all test pairs. Analyze separately indices opened to both inputs and indices linked to H, including their permutation distributions.',
    prerequisites:['Graph-isomorphism cosets','Pairing certification','Conditional distributions'],minutes:50,
    guide:[
      'Condition on the initial labeled graphs. Since G₀ and G₁ share one isomorphism orbit, each hidden pair-order bit remains independent of those graphs. At an input-opening index the disclosed order bit and input-to-pair permutations do not depend on the hidden source. At an H-link index, the disclosed member index is the hidden source XOR an unrevealed independent order bit, hence is itself independent of the source.',
      'Given the graph endpoints, the linking permutation is uniform among isomorphisms between them: compose independent uniform isomorphism cosets and use their equal sizes. This law remains independent of the source jointly across indices. A subset chosen from the initial message cannot expose an order bit and its H-link at the same index. Thus the final source guess still succeeds with probability at most one half on isomorphic inputs.'
    ],
    followup:'Which information becomes available if both opening modes for one index are disclosed in the same real execution?',
    deliverable:'A conditional transcript-distribution proof for the full certification stage.'
  },
  {
    unit:'core-gmw-gni',slug:'gni-approximate-permutation-sampling',tier:'examiner',kind:'proof',
    title:'Track imperfect permutation sampling through GNI',
    prompt:'Suppose each relabeling permutation is sampled from a distribution within total variation ε of uniform. For the basic GNI test with a fair source bit, bound optimal one-round soundness on isomorphic graphs and k-round sequential soundness under fresh sampling. Give a strict-time Fisher–Yates implementation with an explicit cutoff error budget.',
    prerequisites:['Total variation','Bayes classification','Permutation generation'],minutes:40,
    guide:[
      'Pushing a distribution through relabeling cannot increase total variation. Each source’s challenge law is within ε of the common ideal orbit law, so their mutual distance is at most 2ε. With equal priors, optimal source prediction is (1+TV)/2, giving success at most 1/2+ε. Fresh conditional sampling yields at most (1/2+ε)^k for all-round acceptance.',
      'Fisher–Yates needs at most n bounded-integer choices. Draw each by fair-bit rejection sampling; every trial succeeds with probability at least one half. Capping each choice at L trials and using a specified fallback permutation changes the permutation law by at most n2^(−L) under coupling. Choose L≥ceil(log₂(nk/η)) to make the probability of any sampling deviation across k rounds at most η.'
    ],
    followup:'Why does an arbitrary deterministic seed expansion not automatically satisfy the assumed total-variation premise?',
    deliverable:'A robust soundness theorem and a strict-runtime sampling specification.'
  },
  {
    unit:'core-gmw-gni',slug:'gni-certificate-reveals-source',tier:'research',kind:'counterexample',
    title:'Audit the direct-certificate shortcut',
    prompt:'Replace GMW’s pairing certification by an honest verifier sending H=πG_b together with its actual source b and permutation π, so the prover can verify that H is legitimate. Analyze completeness, soundness and the need for source-hiding certification. Then compare revealing a certificate in the real protocol with extracting it only inside a simulator.',
    prerequisites:['GNI hidden-source soundness','Certificate verification','Simulation versus real execution'],minutes:45,
    guide:[
      'On nonisomorphic inputs the protocol is complete, but on isomorphic inputs the prover can simply echo the disclosed source b and be accepted with probability one. Legitimacy of H is therefore not the only requirement: the honest verifier’s certification must avoid disclosing its source on the false-statement inputs used in the soundness proof.',
      'The pairing construction provides one opening mode per index in a real execution. A simulator can rewind a fixed verifier snapshot to obtain incompatible modes and extract a source witness, while the real prover receives only its single chosen subset’s answer. Giving the real prover the extractor’s second transcript changes the information available to the strategy and can destroy soundness. This is a protocol-modification audit, not a claim that every NP certificate is inherently unsuitable.'
    ],
    followup:'What property beyond ordinary certificate validity would a replacement certification protocol need?',
    deliverable:'A complete cheating strategy and a real-execution versus simulator-extraction comparison.'
  },
  {
    unit:'core-gmw-gni',slug:'gni-biased-subset-certification',tier:'research',kind:'research-extension',
    title:'Generalize pairing certification to nonuniform subsets',
    prompt:'Let subset challenges follow an efficiently samplable distribution μ with largest atom a. Prove an invalid-H acceptance bound and an expected simulator-work bound in terms of a and exhaustive-search cost D. Specialize to independently including each test index with probability θ and derive a sufficient k for a target rare-case contribution 2^(−λ).',
    prerequisites:['Pairing extraction','Min-entropy','Rare-event simulation'],minutes:55,
    guide:[
      'An unrelated H admits at most one answerable subset, so its passing probability is at most a. For a fixed message with total answerable mass p, after an initial accepted subset I, a fresh different answerable challenge has probability at least p−μ(I)≥p−a. If p≥2a, extraction costs O(1/p) conditionally and O(1) after multiplying by entry probability.',
      'When p<2a, exhaustive fallback contributes at most 2aD to unconditional expected work. For independent inclusion probability θ, a=max(θ,1−θ)^k. It suffices that k·log₂(1/max(θ,1−θ))≥log₂ D+λ+1. Sampling the same μ in the simulator preserves the real challenge law; source-hiding soundness must still be checked for the full certification transcript, not inferred from this runtime calculation alone.'
    ],
    followup:'How does certification length deteriorate as θ tends to zero or one?',
    deliverable:'A nonuniform certification theorem and an explicit θ-versus-k tradeoff.'
  },

  {
    unit:'core-gmw-np',slug:'commit-binding-proof-versus-argument',tier:'doctoral',kind:'proof',
    title:'State the binding assumption needed for an unbounded-prover proof',
    prompt:'In the graph-3-coloring protocol with N vertices and m≥1 edges, assume each commitment has statistical binding error at most ε_b conditionally on prior history, against unbounded committers. Derive one-round and k-round soundness. Contrast this with computational binding, and state the separate hiding assumption needed for computational zero knowledge.',
    prerequisites:['Commitment binding and hiding','Graph-3-coloring protocol','Sequential soundness'],minutes:40,
    guide:[
      'Except on a union-bound event of probability at most Nε_b, every committed vertex has at most one valid color opening. Assign arbitrary colors to commitments with no valid opening; any violated edge of this assignment either has equal uniquely openable endpoint colors or an unopenable endpoint. Thus a uniform edge rejects with probability at least 1/m on the binding-good event.',
      'One-round acceptance is at most 1−1/m+Nε_b. A convenient k-round bound is (1−1/m)^k+kNε_b, by separating all binding failures and then multiplying conditional good-round bounds. Computational binding supports only an efficient-cheating-prover argument without an additional assumption; it does not establish soundness against the unbounded provers of an interactive proof. Computational hiding concerns efficient verifiers and is used in the simulation proof instead.'
    ],
    followup:'Why does the proof still work when some commitments admit no valid opening at all?',
    deliverable:'A soundness proof with explicit error terms and a proof-versus-argument assumption table.',
    references:[{title:'Goldreich–Micali–Wigderson, Proofs that Yield Nothing But Their Validity',url:'https://www.wisdom.weizmann.ac.il/~oded/X/gmw1j.pdf'}]
  },
  {
    unit:'core-gmw-np',slug:'commit-witness-transport-reduction',tier:'doctoral',kind:'proof',
    title:'Transport zero knowledge through a witness-preserving reduction',
    prompt:'Let R(x,w) be an NP relation and let f(x) be a 3-coloring instance with a polynomial-time witness map g(x,w). Prove the resulting protocol’s completeness, efficient-prover property and auxiliary-input zero knowledge. Use a separate security parameter and polynomial padding to control lengths. Distinguish what a decision-only many-one reduction supplies.',
    prerequisites:['NP relations','Witness-preserving reductions','Auxiliary-input simulation'],minutes:45,
    guide:[
      'The honest prover computes the coloring g(x,w) of f(x) and runs the coloring protocol, so its work is polynomial in the relation-input and security parameters. Soundness follows from x∉L implying f(x) is not 3-colorable. Pad the reduced graph if needed and state all size bounds so negligible errors and polynomial time are measured consistently.',
      'Translate an arbitrary verifier for x into a coloring verifier that carries x and its auxiliary input as private auxiliary state, relays all protocol messages and applies the original final output rule. Invoke auxiliary-input zero knowledge for the coloring protocol and postprocess its simulated view. A decision-only reduction ensures that YES instances map to colorable graphs, sufficient for an unbounded honest prover, but does not by itself give the stated efficient witness-to-coloring algorithm.'
    ],
    followup:'Why must the derived coloring verifier retain x rather than assume it can invert f?',
    deliverable:'A relational reduction theorem and explicit verifier/simulator translations.'
  },
  {
    unit:'core-gmw-np',slug:'commit-color-permutation-necessity',tier:'doctoral',kind:'proof',
    title:'Randomize the colors before committing',
    prompt:'For a fixed proper coloring c and an honest independently selected edge (u,v), compute the opened color-pair distribution after a uniform permutation of {1,2,3}. Show a witness-distinguishing attack if this permutation is omitted. Explain which parts of the honest-verifier calculation remain exact and which require hiding when the verifier selects an edge from the commitments.',
    prerequisites:['Color permutations','Witness indistinguishability','Commitment hiding'],minutes:35,
    guide:[
      'Since c(u)≠c(v), the six color permutations map this ordered pair bijectively to the six ordered distinct-color pairs. The opened color labels are therefore uniform and independent of the original witness for a fixed edge chosen independently of commitments. Fresh commitment randomness also has its prescribed unconditional distribution in this honest scheduling.',
      'Without color permutation, two proper witnesses differing by a global color relabeling reveal different absolute endpoint labels, and an edge-opening verifier distinguishes them directly. For a malicious commitment-dependent edge choice, conditioning on that choice can correlate colors and opening randomness with the commitment vector. The exact fixed-edge counting argument alone does not prove simulation; computational hiding and the full guessed-edge hybrid are needed.'
    ],
    followup:'Why is it unsafe to call the malicious verifier’s opened colors exactly uniform merely because the initial permutation was uniform?',
    deliverable:'A six-case distribution proof, a label-leakage attack and a precise malicious-verifier caveat.'
  },
  {
    unit:'core-gmw-np',slug:'commit-conditional-hybrid-loss',tier:'examiner',kind:'proof',
    title:'Account for conditioning in guessed-edge simulation',
    prompt:'Fix the malicious verifier’s tape and pre-commitment snapshot. Assume every invocation on a valid commitment vector terminates in polynomial time with a legal edge challenge. Compare guessed-edge simulation with an ideal true-coloring experiment using an independent uniform guessed edge. Given one-attempt computational hybrid loss δ for every efficient test, derive success probability, expected attempts and retained-view loss. State why this is not a statistical-distance claim.',
    prerequisites:['Computational hiding hybrids','Rejection simulation','Conditioning on success'],minutes:50,
    guide:[
      'The mandatory legal-edge hypothesis makes the ideal guessed edge match the verifier’s chosen edge with probability exactly 1/m, regardless of commitment-dependent edge choice. Equality of these edge identifiers is an efficient test, so the fake experiment succeeds with probability at least 1/m−δ. With δ≤1/(2m), restoring the fixed snapshot for independent attempts gives expected attempts at most 2m.',
      'Conditioning the ideal experiment on a match gives the real view because every legal chosen edge has the same matching probability. Comparing retained fake and ideal outputs incurs an O(m) loss through efficient bounded rejection sampling and hybrids; unopened-commitment hybrids typically give δ≤N times a primitive hiding advantage. This statement assumes a legal challenge on every attempt: extending it to aborting verifiers must retain abort views with their correct weights rather than discard them. The comparison is computational, not a total-variation bound.'
    ],
    followup:'Which adversary runtime increase must be included when turning a retained-view distinguisher into a primitive hiding distinguisher?',
    deliverable:'A conditional success/runtime calculation and a reduction-level retained-view comparison.'
  },
  {
    unit:'core-gmw-np',slug:'commit-two-edge-witness-relation',tier:'examiner',kind:'counterexample',
    title:'Two openings can reveal a color equality relation',
    prompt:'On the three-vertex path u−v−w, compare proper witnesses (1,2,1) and (1,2,3). A modified verifier opens both edges from the same freshly permuted committed coloring. Give an efficient distinguisher between the two views and explain why independently repeating single-edge rounds does not reveal this particular relation.',
    prerequisites:['Witness indistinguishability','Color-permutation orbits','Commitment openings'],minutes:30,
    guide:[
      'The two openings expose colors at all three path vertices under the same permutation. Test whether the labels at u and w are equal. The test returns true with probability one for the first witness and false with probability one for the second; a global color permutation preserves equality relations.',
      'Thus properness of each queried edge does not make their joint view witness-independent. In separate single-edge rounds with fresh permutations and commitments, the two endpoint-label pairs use independent color names, so cross-round equality of labels does not encode equality in one fixed witness. A simulator that fabricates each edge locally cannot be reused for two openings from one commitment vector without addressing their joint partition of colors.'
    ],
    followup:'What information would opening all three vertices of a triangle reveal about a proper 3-coloring?',
    deliverable:'A perfect distinguishing predicate and a same-round versus fresh-round comparison.'
  },
  {
    unit:'core-gmw-np',slug:'commit-optimize-edge-distribution',tier:'examiner',kind:'synthesis',
    title:'Optimize the honest edge challenge distribution',
    prompt:'For a non-3-colorable graph, define γ(p)=min_c ∑_e p_e·1[c is monochromatic on e], minimizing over all vertex 3-labelings. Formulate the LP maximizing γ and its dual. Solve the example K₄ with one pendant edge, comparing uniform sampling on all seven edges with an optimal distribution.',
    prerequisites:['Linear programming duality','Graph coloring','Commitment-based soundness'],minutes:50,
    guide:[
      'Use variables p_e≥0, ∑p_e=1 and γ≤∑p_e bad_e(c) for every labeling c. The dual chooses a distribution over labelings to minimize the maximum edge’s expected monochromatic indicator. With binding commitments, γ is exactly the worst-case rejection probability of the resulting honest edge test.',
      'For K₄ plus a pendant edge, uniform sampling gives γ=1/7: every labeling has a bad K₄ edge, and one can make exactly one edge bad while coloring the pendant properly. Put weight 1/6 on each K₄ edge and zero on the pendant to get γ=1/6. For the matching upper bound, distribute uniformly over six labelings whose unique bad K₄ edge ranges over those six choices, always extending properly to the pendant.'
    ],
    followup:'Why can an optimal distribution have minimum edge probability zero while retaining positive soundness gap?',
    deliverable:'Primal and dual LPs, optimal example weights and a matching dual certificate.'
  },
  {
    unit:'core-gmw-np',slug:'commit-resettable-prover-audit',tier:'examiner',kind:'counterexample',
    title:'Reset access is an additional verifier power',
    prompt:'Add an interface allowing a verifier to reset the honest prover to the state just after one commitment vector was sent, preserving the prover’s random tape. Show how polynomially many resets recover a coloring on every nonisolated vertex. Explain precisely why this attack changes the standard interaction model and does not follow merely from a simulator’s ability to rewind a verifier.',
    prerequisites:['Commitment challenge schedule','Resetting versus ordinary interaction','Witness extraction'],minutes:40,
    guide:[
      'Ask a different edge after each reset to the same post-commitment snapshot. All openings use the same color permutation and per-vertex commitment randomness, so their labels can be combined. Querying every edge reveals the committed proper coloring on all nonisolated vertices; isolated vertices may receive arbitrary colors afterward.',
      'In the ordinary protocol the real verifier cannot force the prover to reuse that state after a completed round; fresh rounds use fresh commitments and permutations. An offline simulator can rewind the verifier because it runs the verifier’s code and state, a power not granted symmetrically to the real verifier over the honest prover. This is an audit of an explicitly stronger reset interface, not a refutation of the standard sequential GMW proof.'
    ],
    followup:'Which reused random values must a reset-resistant modification address?',
    deliverable:'A reset attack transcript and an explicit statement of the additional interface assumption.'
  },
  {
    unit:'core-gmw-np',slug:'commit-designated-triangle-extension',tier:'research',kind:'construction',
    title:'Open a whole triangle while preserving local witness independence',
    prompt:'For every edge e=(u,v) of G, add a new vertex w_e adjacent to u,v, retaining the original edge. Commit to a proper coloring of the resulting graph, and challenge a uniform designated triangle (u,v,w_e). Prove equivalence to 3-colorability of G, soundness, local view independence and a malicious-verifier simulation using a guessed triangle. Quantify graph and communication overhead.',
    prerequisites:['Graph gadgets','Color-permutation distributions','Guessed-challenge simulation'],minutes:55,
    guide:[
      'A proper coloring of G extends uniquely at each w_e to the missing third color, and every proper coloring of the enlarged graph restricts to one of G. There are N+m vertices and 3m edges, with m designated challenge triangles. Any fixed labeling of a non-3-colorable instance violates at least one designated triangle, so binding-good soundness is at most 1−1/m.',
      'Every properly colored triangle has all three colors, and a uniform global permutation gives the same uniform distribution on its six ordered distinct triples for every witness. Guess the challenged triangle, commit to one such triple and dummy colors elsewhere, then apply the hiding-based rejection simulation with m possible challenges. Commitments grow from N to N+m and openings from two to three vertices; the same one-challenge conditioning issue still needs its proof.'
    ],
    followup:'Why does this triangle construction avoid the two-edge path’s leaked equality relation?',
    deliverable:'A complete gadget protocol, assumption-sensitive soundness/simulation proof and overhead table.'
  },
  {
    unit:'core-gmw-np',slug:'commit-end-to-end-security-parameters',tier:'research',kind:'research-extension',
    title:'Separate graph size, repetition count and primitive security',
    prompt:'For N vertices and m edges, target proof soundness and simulation distinguishing advantage at most 2^(−λ). Assume primitive binding and hiding errors are at most 2^(−λ′) against the required enlarged reduction budget, and that the established simulation reduction loses at most CkmN for k rounds. Choose k,λ′ and give total communication in terms of commitment and opening lengths. State what is assumed rather than derived from one-wayness.',
    prerequisites:['Concrete cryptographic security','Sequential soundness','Hybrid losses','Bit communication'],minutes:55,
    guide:[
      'Take k=ceil(m(λ+1)ln 2), making (1−1/m)^k≤2^(−λ−1). Require kN·2^(−λ′)≤2^(−λ−1) for accumulated binding failures and CkmN·2^(−λ′)≤2^(−λ) for simulation loss. For example λ′≥λ+ceil(log₂(2CkmN)) suffices when C≥1, with harmless small-parameter rounding.',
      'If a commitment uses L_c(λ′) total bits and an opening uses L_o(λ′), communication is O(k[N L_c(λ′)+log m+2L_o(λ′)]), plus any explicitly charged setup. The hiding guarantee must cover the reduction’s increased circuit/time budget and any rejection-sampling cutoff. Negligible security from a qualitative one-wayness assumption does not automatically provide the concrete exponential bound 2^(−λ′); that is an additional primitive-security hypothesis of this calculation.'
    ],
    followup:'How should λ′ be recomputed for the designated-triangle variant with N+m commitments?',
    deliverable:'Explicit repetition/security parameters, a communication formula and a clear assumption ledger.'
  }
];
