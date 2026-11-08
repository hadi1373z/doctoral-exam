const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,process.argv[2]||'doctoral-exam'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const c={console,document:{addEventListener(){},getElementById(){return null;}},localStorage:{getItem(){return null;},setItem(){}}};
vm.createContext(c);for(const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi))vm.runInContext(m[1],c);
const run=s=>vm.runInContext(s,c);
const ids=run('CORE_UNITS.map(u=>u.id)');
assert.equal(ids.length,50);assert.equal(run('Object.keys(LESSON_PICTURE_MAP).length'),50);
for(const id of ids){
 const family=run(`pictureModel(${JSON.stringify(id)}).family`);assert.ok(family,id);
 for(let n=0;n<12;n++){
  run(`pictureInteract(${JSON.stringify(id)},'cycle');pictureInteract(${JSON.stringify(id)},'step');`);
  const figure=run(`renderLessonPicture(${JSON.stringify(id)})`);
  assert.ok(figure.includes('role="img"')&&figure.includes('<title>'),id+' accessible illustration');
  assert.ok(!/undefined|NaN|Infinity/.test(figure),id+' invalid mathematical state');
 }
}
function status(id,mode=0,step=0){return run(`Object.assign(pictureState('core-${id}'),{mode:${mode},step:${step}});pictureModel('core-${id}').status`);}
assert.match(status('fkg'),/0\.000/);assert.match(status('fkg',1),/0\.150/);assert.match(status('fkg',2),/-0\.250/);
assert.match(status('azuma',0,0),/= 2\.0/);assert.match(status('azuma',0,4),/= 3\.0/);
assert.match(status('shannon',0),/sizes 1 and 1 · overlap 0/);assert.match(status('shannon',1),/sizes 5 and 5 · overlap 0/);assert.match(status('shannon',2),/sizes 11 and 11 · overlap 6/);
assert.match(status('shearer'),/16 ≤ 64/);assert.match(status('shearer',1),/64 ≤ 64/);assert.match(status('shearer',2),/4 ≤ 8/);
assert.match(status('release'),/sum 1·2\+3·3=11/);assert.match(status('release',1),/sum 3·2\+1·4=10/);
assert.match(status('lfkn-permanent'),/10 · determinant.*−2/);
for(let t=0;t<11;t++)assert.equal(status('lfkn-consequences',t).includes('· agreement'),t===0||t===1);
assert.match(status('bfl-multilinear'),/slopes 2 and 2: linear/);assert.match(status('bfl-multilinear',1),/slopes 3 and 1: not linear/);
assert.match(status('qbf'),/evaluates to 0/);assert.match(status('qbf',1),/evaluates to 1/);
assert.match(status('private-ip'),/1\/2/);assert.match(status('private-ip',1),/success 1 /);
assert.match(status('triangle-removal',0,0),/0\.950/);assert.match(status('triangle-removal',1,0),/0\.900/);assert.match(status('triangle-removal',2,19),/1\.000/);
run("pictureState('core-knapsack').mask=3");assert.match(status('knapsack'),/weight 10 · value 19/);
run("pictureState('core-flow').mask=0");assert.ok(run("pictureModel('core-flow').svg.includes('load 3 / capacity 2')"));
run("pictureState('core-steiner').mask=5");assert.match(status('steiner'),/cost 2 · pair a–b connected · pair c–d connected/);
// These pictures must never create evidence or move a learner through a checkpoint.
const before=run('JSON.stringify(progress)');
for(const id of ids)for(const op of ['cycle','step','toggle','schedule','balance','reset'])run(`pictureInteract(${JSON.stringify(id)},${JSON.stringify(op)},'1')`);
assert.equal(run('JSON.stringify(progress)'),before,'Picture experimentation changed learner progress');
assert.equal(run('examTotals().cold'),0);assert.equal(run('guidedTotals().completed'),0);
console.log('PASS: all 50 assigned lessons have accessible interactive pictures; exact finite probability, graph, scheduling and protocol examples agree with their stated values.');
console.log('PASS: exploring every picture leaves learning checkpoints and cold-exam evidence unchanged.');
