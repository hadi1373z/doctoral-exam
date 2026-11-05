const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(require('node:path').resolve(__dirname,process.argv[2]||'doctoral-exam','index.html'),'utf8');
const store=new Map([['doctoral_lab_exam_2026_v1',JSON.stringify({completed:['scheduling'],quiz:[{id:'old-record',correct:true}],proofs:[],orals:[],notes:{scheduling:'Keep these notes'},version:1})]]);
const sandbox={console,document:{addEventListener(){}},localStorage:{getItem:k=>store.get(k)??null,setItem:(k,v)=>store.set(k,v),removeItem:k=>store.delete(k)}};
vm.createContext(sandbox);
for(const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi))vm.runInContext(m[1],sandbox);
vm.runInContext(`globalThis.api={LESSONS,CORE_UNITS,CORE_SOURCES,QUESTIONS,PROOFS,progress,LAB_ITEMS,SAT_CLAUSES,PATH_EDGES,knapsackLab,conditionalSAT,satValue,correlationLab,codeLab,tenureWeight,tenureNext,projectionLab,graphEdges,triangleCount,shortestGraph,hardQualifies,subjectStats,latestHard,VS,VISUAL_LABS,visualModel,normalizeAdvanced,setProgress:p=>{progress=normalizeAdvanced({...blankProgress(),...p})}}`,sandbox);
const a=sandbox.api;
assert.equal(a.CORE_UNITS.length,50);assert.equal(a.LESSONS.length,83);assert.equal(a.QUESTIONS.length,68);assert.equal(a.PROOFS.length,13);
assert.equal(new Set(a.LESSONS.map(x=>x.id)).size,83);
assert.equal(a.progress.completed[0],'scheduling');assert.equal(a.progress.notes.scheduling,'Keep these notes');assert.equal(a.progress.quiz[0].id,'old-record');assert.equal(a.progress.challenges.length,0);
for(const u of a.CORE_UNITS){assert.ok(a.CORE_SOURCES[u.source]);assert.equal(u.proof.length,4,u.id);assert.equal(u.followups.length,2,u.id);assert.ok(u.answer.length>=3);assert.ok(u.task.length>120);assert.ok(u.results.length>0);}
assert.equal(a.CORE_UNITS.filter(u=>u.source==='as').length,21);
assert.equal(a.CORE_UNITS.filter(u=>u.source==='ws').length,19);
assert.ok(a.CORE_UNITS.some(u=>u.section==='§10.2'&&u.title.includes('Baker')));
for(const section of ['5.1','5.2','5.3','5.4','5.5','5.6','5.7','5.8','5.9','5.10','5.11','5.12']){
 const covers=a.CORE_UNITS.some(u=>u.source==='ws'&&((section==='5.1'||section==='5.2'||section==='5.3')?u.id==='core-sat-random':(section==='5.4'||section==='5.5'||section==='5.6')?u.id==='core-sat-lp':section==='5.10'||section==='5.11'?u.id==='core-flow':u.section.includes(section)));
 assert.ok(covers,'Missing WS '+section);
}
const yes={id:'core-knapsack',score:18,assisted:false,criticalClear:true,answer:'A justified proof with resource accounting. '.repeat(8),defenses:['An explicit hypothesis and counterexample. '.repeat(3),'A complete response to the second question. '.repeat(3)]};
assert.ok(a.hardQualifies(yes));assert.ok(!a.hardQualifies({...yes,assisted:true}));assert.ok(!a.hardQualifies({...yes,criticalClear:false}));assert.ok(!a.hardQualifies({...yes,defenses:['','']}));assert.ok(!a.hardQualifies({...yes,score:15}));
a.setProgress({challenges:[yes,{...yes,score:17},{...yes,score:19}]});assert.equal(a.latestHard('approx').length,1,'Repeated challenge cannot inflate distinct evidence');
const ids=a.QUESTIONS.filter(q=>a.LESSONS.find(l=>l.id===q.topic).s==='approx').slice(0,8).map(q=>q.id),pids=a.PROOFS.filter(p=>a.LESSONS.find(l=>l.id===p.topic).s==='approx').slice(0,2).map(p=>p.id);
const foundation={quiz:ids.map(id=>({id,correct:true})),proofs:pids.map(id=>({id,correct:true})),orals:[{topic:'scheduling',score:9},{topic:'maxsat',score:9}]};
a.setProgress(foundation);assert.ok(!a.subjectStats('approx').expert,'Old easy evidence alone cannot earn advanced status');
a.setProgress({...foundation,challenges:['core-knapsack','core-scheduling-scheme','core-bin-scheme'].map(id=>({...yes,id,assisted:true}))});assert.ok(a.subjectStats('approx').score<=40,'Assisted answers must not add hard-score points');assert.ok(!a.subjectStats('approx').expert);
a.setProgress({...foundation,challenges:['core-knapsack','core-scheduling-scheme','core-bin-scheme'].map(id=>({...yes,id}))});assert.equal(a.subjectStats('approx').score,0);assert.ok(!a.subjectStats('approx').expert,'Familiar self-reviews cannot imply subject mastery');
for(const cap of [10,15,28,45])for(const eps of [.1,.2,.4,.8]){const r=a.knapsackLab(a.LAB_ITEMS,cap,eps);assert.ok(r.weight<=cap);assert.ok(r.profit+1e-8>=(1-eps)*r.opt);assert.equal(new Set(r.selected).size,r.selected.length);}
for(let len=0;len<4;len++)for(let mask=0;mask<2**len;mask++){const p=Array.from({length:len},(_,i)=>(mask>>i)&1),before=a.conditionalSAT(p),b0=a.conditionalSAT([...p,0]),b1=a.conditionalSAT([...p,1]);assert.ok(Math.abs(before-(b0+b1)/2)<1e-10);assert.ok(Math.max(b0,b1)>=before);}
for(const p of [.05,.2,.5,.8,.95])assert.ok(a.correlationLab(p,'product').cov>=-1e-12);assert.equal(a.correlationLab(.5,'exclusive').cov,-.25);
assert.ok(a.codeLab([0,7,25,30],1).valid);assert.equal(a.codeLab([0,7,25,30],1).overlap,0);assert.ok(!a.codeLab([0,1],1).valid);assert.ok(a.codeLab([0,1],1).overlap>0);
const chips=[2,2,3,3,3,3].map((level,id)=>({id,level}));let safe=false;for(let mask=0;mask<64;mask++){const selected=chips.filter(c=>mask>>c.id&1).map(c=>c.id),y=a.tenureWeight(a.tenureNext(chips,selected,true)),n=a.tenureWeight(a.tenureNext(chips,selected,false));assert.equal((y+n)/2,a.tenureWeight(chips));if(y>=1&&n>=1)safe=true;}assert.ok(safe);
for(let mask=0;mask<256;mask++){const f=Array.from({length:8},(_,i)=>i).filter(i=>mask>>i&1),r=a.projectionLab(f);assert.ok(r.lhs<=r.rhs,'Shearer failed for '+mask);}
assert.equal(a.triangleCount(9,a.graphEdges('cliques')),14);assert.equal(a.triangleCount(9,a.graphEdges('bipartite')),0);assert.equal(a.triangleCount(9,a.graphEdges('single')),1);
const dist=a.shortestGraph(6,a.PATH_EDGES).dist;assert.equal(dist[4],10);for(let r=0;r<=11;r++)for(const[u,v,w]of a.PATH_EDGES)assert.ok(w-Math.abs(Math.min(dist[u],r)-Math.min(dist[v],r))>=-1e-10);
for(const[id]of a.VISUAL_LABS.filter(x=>x[0]!=='classic')){const m=a.visualModel(id);assert.ok(m.body.includes('visual-stage'),id);assert.ok(!/NaN|undefined|Infinity/.test(m.body),id+' invalid display');}
assert.ok(!/<(?:script|link|img)[^>]+(?:src|href)=["']https?:/i.test(html));
console.log('PASS: 50 source-mapped units / 83 lessons, Chapter 5 + §10.2 coverage, legacy migration, strict distinct evidence, all 13 visual models.');
console.log('PASS: 16 knapsack comparisons, all SAT prefixes, exact correlation, Hamming-ball overlaps, 64 Tenure partitions, all 256 Shearer families, triangle counts and shortest-path dual feasibility.');
