/* Authored LaTeX for the 50 assigned lessons. Mathematical prose is not auto-converted. */
const LESSON_LATEX = {
  "core-knapsack": {
    "tex": "K\\sum_{i\\in O}p_i'\\ge \\mathrm{OPT}-nK\\ge(1-\\varepsilon)\\mathrm{OPT}"
  },
  "core-scheduling-scheme": {
    "tex": "\\begin{aligned}L_{\\mathrm{restored}}&\\le T+k\\frac{T}{k^2}=\\left(1+\\frac1k\\right)T,\\\\ C_j&\\le \\frac{\\sum_i p_i}{m}+p_j\\le T+\\frac{T}{k}.\\end{aligned}",
    "note": "The second line uses the original total processing volume and a last short job."
  },
  "core-bin-scheme": {
    "tex": "N_{\\mathrm{nearly\\ full}}<\\frac{\\sum_i s_i}{1-\\varepsilon}",
    "note": "Here sᵢ are item sizes; bin capacity is normalized to one."
  },
  "core-sat-random": {
    "tex": "\\begin{aligned}\\mathbb E[X\\mid\\text{prefix}]={}&\\frac12\\,\\mathbb E[X\\mid\\text{prefix},x=0]\\\\&+\\frac12\\,\\mathbb E[X\\mid\\text{prefix},x=1].\\end{aligned}"
  },
  "core-sat-lp": {
    "tex": "\\Pr(C\\text{ is satisfied})\\ge\\left[1-\\left(1-\\frac1k\\right)^k\\right]z_C\\ge\\left(1-\\frac1e\\right)z_C"
  },
  "core-pcst": {
    "tex": "\\mathbb E[\\mathrm{cost}]\\le\\frac{2\\ln(1/\\gamma)}{1-\\gamma}\\,E+\\frac{1}{1-\\gamma}\\,P"
  },
  "core-facility": {
    "tex": "\\begin{aligned}\\mathbb E[\\mathrm{cost}]&\\le F^*+\\sum_j C_j^*+2\\sum_j v_j^*\\\\&\\le 3\\,\\mathrm{OPT}.\\end{aligned}",
    "note": "F* is fractional opening cost, Cⱼ* is fractional connection cost for client j, and vⱼ* is its dual price."
  },
  "core-release": {
    "tex": "\\mathbb E[\\widehat C_j]\\le p_j+2\\mathbb E[X_j]=2C_j^*"
  },
  "core-flow": {
    "tex": "\\Pr(X\\ge a)\\le e^{a-\\mu}\\left(\\frac{\\mu}{a}\\right)^a\\le\\left(\\frac{e\\mu}{a}\\right)^a,\\qquad a\\ge\\mu,\\ a>0"
  },
  "core-dense-color": {
    "tex": "\\Pr\\bigl(\\exists v:\\ N(v)\\cap S=\\varnothing\\bigr)\\le n\\,e^{-p\\delta n}"
  },
  "core-sdp-cut": {
    "tex": "\\alpha_{\\mathrm{GW}}=\\min_{0<\\theta\\le\\pi}\\frac{2\\theta}{\\pi(1-\\cos\\theta)}\\approx0.87856"
  },
  "core-color-sdp": {
    "tex": "\\begin{gathered}\\frac n\\sigma=\\sigma^{\\log_3 2},\\\\ \\text{color exponent}=\\frac{\\log_3 2}{1+\\log_3 2}=\\log_6 2.\\end{gathered}"
  },
  "core-gaussian-color": {
    "tex": "\\begin{aligned}\\mathbb E[|I_{\\mathrm{repaired}}|]\\ge{}&\\sum_i\\Pr(Z_i\\ge t)\\\\&-\\sum_{\\{i,j\\}\\in E}\\Pr(Z_i\\ge t,\\ Z_j\\ge t).\\end{aligned}"
  },
  "core-dual-cover": {
    "tex": "c(\\mathcal B)=\\sum_u y_u\\,d_{\\mathcal B}(u)\\le f\\sum_u y_u\\le f\\,\\mathrm{OPT}",
    "note": "B is the family of bought sets; d_B(u) counts bought sets containing element u."
  },
  "core-dual-path": {
    "tex": "c(P)=\\sum_S y_S\\,|P\\cap\\delta(S)|=\\sum_S y_S\\le\\mathrm{OPT}"
  },
  "core-steiner": {
    "tex": "\\sum_{C\\in\\mathcal A}\\deg_F(C)\\le2|\\mathcal A|",
    "note": "During a growth interval, A is the family of active components of the pruned contracted forest."
  },
  "core-tree-metrics": {
    "tex": "\\mathbb E_T\\!\\left[\\sum_{e\\in E}f(c_e^*)\\,d_T(e)\\right]\\le\\alpha\\sum_{e\\in E}f(c_e^*)\\,d(e)"
  },
  "core-planar-mis": {
    "tex": "|I_{\\mathrm{best}}|\\ge\\left(1-\\frac1k\\right)\\mathrm{OPT}"
  },
  "core-hardness": {
    "tex": "\\begin{gathered}\\mathrm{YES}\\ge(4-\\varepsilon)M,\\qquad\\mathrm{NO}\\le\\left(\\frac72+\\delta\\right)M,\\\\ \\rho(4-\\varepsilon)>\\frac72+\\delta.\\end{gathered}",
    "note": "The last inequality is the strict separation required by the gap argument."
  },
  "core-lfkn-permanent": {
    "tex": "\\Pr(\\text{a false endpoint pair becomes true})\\le\\frac{r}{|\\mathbb F|}"
  },
  "core-lfkn-consequences": {
    "tex": "\\Pr(\\text{some false oracle claim is accepted})\\le q(n)\\,\\varepsilon_{\\mathrm{local}}"
  },
  "core-qbf": {
    "tex": "R_xP(x,y)=(1-x)P(0,y)+xP(1,y)"
  },
  "core-private-ip": {
    "tex": "\\begin{aligned}F(h)&=\\max_y F(hy)&&\\text{(prover turn)},\\\\ F(h)&=\\sum_z F(hz)&&\\text{(visible-message turn)}.\\end{aligned}"
  },
  "core-bfl-oracle": {
    "tex": "a_1=A(q_1),\\qquad a_2=B(q_2)",
    "note": "Each separated prover's answer depends on its own question only."
  },
  "core-bfl-multilinear": {
    "tex": "\\begin{gathered}\\deg_{x_i}P\\le1\\quad\\text{for every coordinate }i,\\\\ \\operatorname{dist}(f,P)=\\frac{|\\{a\\in D:f(a)\\ne P(a)\\}|}{|D|}.\\end{gathered}"
  },
  "core-bfl-nexp": {
    "tex": "\\begin{aligned}\\text{table length}&\\le(\\text{number of provers})\\,2^{q(n)}\\,(\\text{answer length})\\\\&=2^{\\operatorname{poly}(n)}.\\end{aligned}"
  },
  "core-gmw-def": {
    "tex": "\\begin{gathered}b\\sim\\operatorname{Unif}\\{0,1\\},\\qquad b\\perp(H,r),\\qquad c(H,r)\\in\\{0,1\\},\\\\ \\Pr\\bigl(b=c(H,r)\\bigr)=\\frac12.\\end{gathered}",
    "note": "The fair guessed bit is independent of the full verifier view (H,r), including its private random tape."
  },
  "core-gmw-gni": {
    "tex": "G_0\\cong G_1\\ \\Longrightarrow\\ \\Pr(\\widehat b=b\\mid\\text{history})\\le\\frac12",
    "note": "The honest verifier uses a fresh fair hidden source bit and a uniform relabeling."
  },
  "core-gmw-np": {
    "tex": "\\Pr(\\text{all }k\\text{ false-claim rounds pass})\\le\\left(1-\\frac1m\\right)^k\\le e^{-k/m}"
  },
  "core-four-functions": {
    "tex": "\\begin{aligned}&\\left(\\sum_{A\\subseteq[n]}\\alpha(A)\\right)\\left(\\sum_{B\\subseteq[n]}\\beta(B)\\right)\\\\&\\qquad\\le\\left(\\sum_{C\\subseteq[n]}\\gamma(C)\\right)\\left(\\sum_{D\\subseteq[n]}\\delta(D)\\right).\\end{aligned}",
    "note": "All four sums range over subsets of the same finite ground set [n]."
  },
  "core-fkg": {
    "tex": "\\mathbb E[fg]-\\mathbb E[f]\\,\\mathbb E[g]\\ge0"
  },
  "core-harris": {
    "tex": "\\operatorname{Cov}(a_X,b_X)=p(1-p)(a_1-a_0)(b_1-b_0)\\ge0",
    "note": "X is the exposed Bernoulli(p) bit; aᵢ and bᵢ are the two functions' conditional means in slice i."
  },
  "core-xyz": {
    "tex": "\\Pr(x\\prec y,\\ x\\prec z)\\ge\\Pr(x\\prec y)\\Pr(x\\prec z)"
  },
  "core-azuma": {
    "tex": "\\Pr(M_m-M_0\\ge t)\\le\\exp\\!\\left(-\\frac{t^2}{2\\sum_{i=1}^m c_i^2}\\right)"
  },
  "core-chromatic": {
    "tex": "\\begin{gathered}p=n^{-\\alpha},\\qquad\\alpha>\\frac56,\\\\ \\Pr\\bigl(u\\le\\chi(G(n,p))\\le u+3\\bigr)\\xrightarrow[n\\to\\infty]{}1.\\end{gathered}"
  },
  "core-gradation": {
    "tex": "\\begin{gathered}\\Pr\\bigl(|Y-\\mathbb E[Y]|>\\alpha\\sigma\\bigr)\\le2\\exp\\!\\left(-\\frac{\\alpha^2}{2(1+\\varepsilon)}\\right),\\\\ \\alpha C<\\sigma(1+\\varepsilon)\\delta.\\end{gathered}",
    "note": "For each ε > 0, the theorem supplies δ > 0. The pathwise variance budget, effect bound and displayed deviation range are required."
  },
  "core-azuma-app": {
    "tex": "\\mathbb E[\\text{number of missing values}]=n\\left(1-\\frac1n\\right)^n"
  },
  "core-talagrand": {
    "tex": "\\mu\\bigl(\\{x:d_T(x,A)\\ge t\\}\\bigr)\\le\\frac{e^{-t^2/4}}{\\mu(A)},\\qquad\\mu(A)>0"
  },
  "core-certificate": {
    "tex": "\\Pr\\bigl(X\\le b-t\\sqrt{f(b)}\\bigr)\\Pr(X\\ge b)\\le e^{-t^2/4}"
  },
  "core-kim-vu": {
    "tex": "\\begin{gathered}\\Pr\\!\\left(|Y-\\mu|>a_k\\sqrt{EE'}\\,\\lambda^k\\right)<d_k e^{-\\lambda}N^{k-1},\\\\ \\lambda>1.\\end{gathered}",
    "note": "N is the number of independent base variables, not necessarily the number of graph vertices."
  },
  "core-shannon": {
    "tex": "\\text{confusion bound}\\ \\lesssim\\ 2^{\\,n\\left(R+H_2(p+\\delta)-1\\right)}",
    "note": "This is the typical-noise confusion term; atypical-noise probability is bounded separately."
  },
  "core-liar": {
    "tex": "\\begin{gathered}W=\\frac{W_{\\mathrm{Yes}}+W_{\\mathrm{No}}}{2},\\\\ W>1\\ \\Longrightarrow\\ \\text{Carole wins}.\\end{gathered}"
  },
  "core-tenure": {
    "tex": "\\begin{gathered}W_{\\mathrm{Yes}}+W_{\\mathrm{No}}=2W,\\\\ \\text{Paul wins}\\ \\Longleftrightarrow\\ W\\ge1.\\end{gathered}"
  },
  "core-balancing": {
    "tex": "\\Pr\\!\\left(\\max_{1\\le j\\le n}|P_j|>a\\right)\\le n\\,\\Pr(|S_n|>a)"
  },
  "core-half-liar": {
    "tex": "\\sum_{\\text{items}}\\left(1+\\#\\{\\text{truthful No responses}\\}\\right)\\le2^q"
  },
  "core-entropy": {
    "tex": "|F|\\le2^{\\sum_{i=1}^n H_2(p_i)}"
  },
  "core-shearer": {
    "tex": "\\begin{gathered}|F|^k\\le\\prod_{S\\in\\mathcal S}|\\pi_S(F)|,\\\\ |F|^2\\le|\\pi_{xy}(F)|\\,|\\pi_{xz}(F)|\\,|\\pi_{yz}(F)|.\\end{gathered}",
    "note": "For the first inequality, every coordinate belongs to at least k sets in the projection cover S."
  },
  "core-tester-color": {
    "tex": "\\operatorname{depth}\\le\\frac3\\varepsilon,\\qquad s=\\frac{40}{\\varepsilon^2}",
    "note": "The sample-size theorem uses its stated regime: 0 < ε < 0.1 and n > 400/ε³."
  },
  "core-triangle-removal": {
    "tex": "\\begin{aligned}\\Pr(\\text{no triangle in }q\\text{ trials})&=\\left(1-\\frac{T}{\\binom n3}\\right)^q\\\\&\\le\\exp\\!\\left(-\\frac{qT}{\\binom n3}\\right).\\end{aligned}"
  },
  "core-hereditary": {
    "tex": "\\begin{gathered}\\mathcal P\\text{ hereditary}\\\\ \\Longrightarrow\\ \\mathcal P=\\operatorname{Forb}_{\\mathrm{ind}}(\\mathcal F)\\\\ \\Longrightarrow\\ \\mathcal P\\text{ is one-sided testable}.\\end{gathered}",
    "note": "F is a family of forbidden induced subgraphs. The final implication uses the induced-removal input."
  }
};
