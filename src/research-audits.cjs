/* Small, exhaustive baselines for the repository's research investigations.
   These certify the specified finite cases, not asymptotic theorems. */
const assert=require('node:assert/strict');
function classicalCHSH(copies){
 if(![1,2].includes(copies))throw Error('This finite audit enumerates one or two copies only.');
 const alphabet=2**copies,strategyCount=alphabet**alphabet;let best=-1,witness=null;
 for(let code=0;code<strategyCount;code++){
  let remainder=code;const alice=[];for(let x=0;x<alphabet;x++){alice.push(remainder%alphabet);remainder=Math.floor(remainder/alphabet);}
  let total=0;const bob=[];
  for(let y=0;y<alphabet;y++){
   let local=-1,answer=0;
   for(let b=0;b<alphabet;b++){let score=0;for(let x=0;x<alphabet;x++)if((alice[x]^b)===(x&y))score++;if(score>local){local=score;answer=b;}}
   total+=local;bob.push(answer);
  }
  if(total>best){best=total;witness={alice,bob};}
 }
 return {copies,inputPairs:alphabet**2,winningPairs:best,value:best/alphabet**2,witness,aliceStrategiesEnumerated:strategyCount};
}
const single=classicalCHSH(1),double=classicalCHSH(2);assert.equal(single.winningPairs,3);assert.equal(double.winningPairs,10);assert.ok(double.value>single.value**2);
// Alice's full table is enumerated. For a fixed table, Bob's best response can
// be optimized independently for each y. Randomized classical strategies are
// convex mixtures of deterministic tables, so none beats this finite maximum.
const meet=(x,y)=>x===y?x:x===0||y===0?0:x===4?y:y===4?x:0;
const join=(x,y)=>x===y?x:x===4||y===4?4:x===0?y:y===0?x:4;
const alpha=[0,1,1,0,0],beta=[0,0,0,1,0],gamma=[0,0,0,0,1],delta=[1,0,0,0,0];
for(let x=0;x<5;x++)for(let y=0;y<5;y++)assert.ok(alpha[x]*beta[y]<=gamma[join(x,y)]*delta[meet(x,y)]);
const sum=a=>a.reduce((x,y)=>x+y,0),lhs=sum(alpha)*sum(beta),rhs=sum(gamma)*sum(delta);assert.equal(lhs,2);assert.equal(rhs,1);
const cutoff=Math.exp(-.5),edgeCoefficient=2*Math.log(1/cutoff)/(1-cutoff),penaltyCoefficient=1/(1-cutoff);assert.ok(Math.abs(edgeCoefficient-penaltyCoefficient)<1e-12);
console.log(JSON.stringify({classicalCHSH:{single,double,independentTwoCopyProduct:single.value**2},nonDistributiveFourFunctions:{lattice:'M3',pointwisePairsChecked:25,lhs,rhs,conclusion:'Pointwise hypothesis holds, but the sum-product conclusion fails without distributivity.'},prizeCollectingUniformThreshold:{cutoff,edgeCoefficient,penaltyCoefficient,interpretation:'Numerical equality of the two analysis coefficients; this does not replace the rounding or minimax proof.'}},null,2));
