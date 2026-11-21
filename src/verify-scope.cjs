const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),root=__dirname;
const site=require('path').resolve(__dirname,process.argv[2]||'doctoral-exam');
const html=fs.readFileSync(site+'/index.html','utf8');
const c=vm.createContext({console,document:{addEventListener(){},getElementById(){return null;}},localStorage:{getItem(){return null;},setItem(){}},window:{location:{hash:'',pathname:'/',search:''},history:{replaceState(){}},addEventListener(){}}});
for(const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi))vm.runInContext(m[1],c);
const run=x=>vm.runInContext(x,c),json=x=>JSON.parse(run('JSON.stringify('+x+')'));
const expected=JSON.parse(fs.readFileSync(root+'/approximation-scope.json'));
assert.deepEqual(json('ALGORITHM_SECTION_AUDIT.map(a=>a.section)'),expected.requiredSections);
assert.deepEqual(json('CORE_UNITS.filter(u=>u.s==="approx").map(u=>u.id)'),expected.requiredUnits);
assert.equal(run('CORE_UNITS.length'),45);assert.equal(run('QUESTION_BANK.length'),540);
assert.equal(run('STUDY_PLAN_15.flatMap(d=>d.units).length'),45);assert.equal(run('new Set(STUDY_PLAN_15.flatMap(d=>d.units)).size'),45);
assert.equal(run('LECTURE_UNIT_IDS.length'),45);assert.equal(run('examTotals().total'),45);
for(const u of json('CORE_UNITS')){
 assert.equal(run(`QUESTION_BANK.filter(q=>q.unit===${JSON.stringify(u.id)}).length`),12,u.id);
 assert.equal(run(`FOUNDATION_APPROX.questions.concat(FOUNDATION_COMPLEXITY.questions,FOUNDATION_PROBABILITY.questions).filter(q=>q.topic===${JSON.stringify(u.id)}).length`),3,u.id);
 assert.equal(run(`EXAM_TRANSFERS[${JSON.stringify(u.id)}].length`),2,u.id);
 assert.ok(run(`Number.isFinite(examCheckpoint(${JSON.stringify(u.id)},42).fields[0].expected)`),u.id);
}
for(const p of json('ALGORITHM_CATALOG')){run(`algorithmDetail(ALGORITHM_BY_ID.get(${JSON.stringify(p.id)}))`);if(p.id==='euclidean-tsp')assert.equal(p.scope,'assigned');if(p.id==='planar-independent-set')assert.equal(p.scope,'additional');}
run('ui.lecture.id="core-euclidean-tsp"');const output=run('renderLecture()');assert.ok(!/undefined|NaN/.test(output));
assert.ok(run('renderLessonPicture("core-euclidean-tsp")').includes('portal'));
assert.ok(!run('renderSyllabus()').includes('all of Chapter 5'));
assert.ok(run('renderSyllabus()').includes('20 sections'));
assert.equal(run('examTotals().cold'),0);assert.equal(run('examTotals().retained'),0);
console.log('PASS exact 20-section scope; 14 approximation / 45 total units; 540 questions; plan, story and lecture rendering; no activity-based exam credit.');
