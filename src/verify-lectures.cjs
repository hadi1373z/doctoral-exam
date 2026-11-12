const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,process.argv[2]||'doctoral-exam'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const scripts=[...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map(m=>m[1]);
function create(saved,hash){const memory=new Map();if(saved)memory.set('doctoral_lab_exam_2026_v1',JSON.stringify(saved));const c={console,document:{addEventListener(){},getElementById(){return null;}},localStorage:{getItem:k=>memory.get(k)??null,setItem:(k,v)=>memory.set(k,v)}};if(hash!==undefined)c.window={location:{hash,pathname:'/',search:'',protocol:'https:'},history:{replaceState(){}},addEventListener(){}};vm.createContext(c);for(const s of scripts)vm.runInContext(s,c);return {run:s=>vm.runInContext(s,c),memory};}
const {run,memory}=create({version:4,completed:['core-azuma'],quiz:[],proofs:[],orals:[],notes:{keep:'Research notes remain'},lectureReading:{revision:'continuous-lectures-v1',lastUnit:'core-qbf',records:{'core-qbf':{section:4,studied:[0,1,1,7,30,-1],notes:'My degree calculation',touchedAt:10},unknown:{section:5}}}});
const ids=Array.from(run('LECTURE_UNIT_IDS')),units=Array.from(run('CORE_UNITS.map(u=>u.id)'));
assert.equal(ids.length,50);assert.equal(new Set(ids).size,50);assert.deepEqual([...ids].sort(),[...units].sort());assert.equal(run('LECTURE_MODULES.length'),17);
assert.equal(run('lectureResume()'),'core-qbf');assert.equal(run("lectureRecord('core-qbf').section"),4);assert.equal(run("lectureRecord('core-qbf').studied.length"),3);assert.equal(run("progress.notes.keep"),'Research notes remain');assert.equal(run("lectureRecord('unknown')"),null);
run('guidedTotals()');
run('for(const id of LECTURE_UNIT_IDS)for(const c of guidedChecks(id))guidedAnswer(id,c.key)');
const examBefore=run('JSON.stringify({completed:progress.completed,quiz:progress.quiz,proofs:progress.proofs,orals:progress.orals,calibration:progress.calibration,guided:progress.guidedReading})');
for(const id of ids){run('ui.lecture.id='+JSON.stringify(id)+';ui.course.id=ui.lecture.id');const content=run('renderLecture()');
 assert.ok(!/="(?:undefined|NaN)"|>undefined</.test(content),id);assert.equal((content.match(/data-lecture-section=/g)||[]).length,8,id);assert.equal((content.match(/id="examiner-task-/g)||[]).length,2,id);assert.ok(content.includes('THE CLAIM TO UNDERSTAND'),id);
 assert.ok(content.includes('data-equation-unit="'+id+'"')&&content.includes('<math'),id+' needs semantic mathematics');assert.ok(content.includes('INFERENCE 1 /')&&content.includes('Carry forward:'),id+' needs explanations after pictures');
 const data=run('GUIDED_LESSONS['+JSON.stringify(id)+']');for(const s of data.example.steps)assert.ok(content.includes(run('guidedText('+JSON.stringify(s.explanation)+')')),id+' worked step hidden');
 const withheld=run('Object.values(EXAM_TRANSFERS).flat().map(f=>f.q)');for(const q of withheld)assert.ok(!content.includes(q),id+' leaks a withheld cold form');
 for(let n=0;n<8;n++)if(!run('lectureRecord('+JSON.stringify(id)+').studied.includes('+n+')'))assert.equal(run('lectureMark('+JSON.stringify(id)+','+n+')'),true);assert.equal(run('lectureRecord('+JSON.stringify(id)+').studied.length'),8);
}
assert.equal(run('JSON.stringify({completed:progress.completed,quiz:progress.quiz,proofs:progress.proofs,orals:progress.orals,calibration:progress.calibration,guided:progress.guidedReading})'),examBefore,'Reading all lectures must not manufacture guided passes or exam evidence');
assert.equal(run("lectureMark('core-qbf',8)"),false);assert.equal(run("lectureRemember('core-qbf',-1)"),false);
assert.equal(run("lectureRemember('core-qbf',6)"),true);run("lectureRecord('core-qbf').notes='A restored proof question';save()");
const restored=create(JSON.parse(memory.get('doctoral_lab_exam_2026_v1')));assert.equal(restored.run('lectureResume()'),'core-qbf');assert.equal(restored.run("lectureRecord('core-qbf').section"),6);assert.equal(restored.run("lectureRecord('core-qbf').notes"),'A restored proof question');assert.equal(restored.run('lectureTotals().studied'),50);
const deep=create(null,'#lecture/core-bfl-multilinear/5');assert.equal(deep.run('ui.view'),'lecture');assert.equal(deep.run('ui.lecture.id'),'core-bfl-multilinear');assert.equal(deep.run("lectureRecord('core-bfl-multilinear').section"),4,'A lecture deep link must not be quiz-gated');
assert.equal(run("lectureNeighbor('core-lfkn-permanent',-1)"),null);assert.equal(run("lectureNeighbor('core-qbf',1)"),'core-private-ip');assert.equal(run("lectureNeighbor('core-hereditary',1)"),null);
const boards=run('LECTURE_BOARDS'),math=run('LECTURE_BOARD_MATH');assert.equal(Object.keys(boards).length,15);for(const[id,b]of Object.entries(boards)){assert.ok(b.steps.length>=4);for(let i=0;i<b.steps.length;i++)if(b.steps[i].tex)assert.ok(math[id][i].includes('<math')&&!math[id][i].includes('katex-error'));}
// Independently verify the inclusion-exclusion identity in the new LFKN derivation.
function permanent(a){if(!a.length)return 1;return a[0].reduce((sum,v,j)=>sum+v*permanent(a.slice(1).map(r=>r.filter((_,k)=>k!==j))),0);}
for(let n=1;n<=5;n++){const a=Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>(i*3+j*5+2)%7-2));let sum=0;for(let mask=0;mask<2**n;mask++){let product=1,count=0;for(let j=0;j<n;j++)if(mask&(1<<j))count++;for(let i=0;i<n;i++)product*=a[i].reduce((s,v,j)=>s+((mask&(1<<j))?v:0),0);sum+=(-1)**count*product;}assert.ok((-1)**n*sum===permanent(a));}
const textbook=fs.readFileSync(path.join(root,'textbook','index.html'),'utf8');assert.ok(textbook.includes('lecture-companion'),'Textbook must connect to lectures');
for(const filename of ['02_approximation_algorithms_summary_hadi_zamani.tex','03_interactive_proofs_summary_hadi_zamani.tex','04_probabilistic_method_summary_hadi_zamani.tex'])assert.ok(fs.statSync(path.join(root,'textbook','summaries',filename)).size>10000);
assert.ok(!fs.existsSync(path.join(root,'textbook','summaries','01_research_statement_hadi_zamani.tex')));
assert.ok(!/research statement|data-book="research"|href="#research/i.test(textbook));
console.log('Lecture course verified: 50 assigned topics, 17 ordered chapters, 400 open reading sections, 100 integrated examiner extensions, 10 expanded paper derivations; resume/import and examination evidence preserved.');
