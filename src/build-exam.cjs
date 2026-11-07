const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=__dirname;
const out=path.resolve(root,process.argv[2]||'doctoral-exam');
fs.mkdirSync(out,{recursive:true});
let html=fs.readFileSync(path.join(root,'doctoral-exam-before-hardening.html'),'utf8');
const css=['exam-depth.css','question-bank.css','video-library.css','study-roadmap.css','reading-studio.css','guided-reader.css'].map(f=>fs.readFileSync(path.join(root,f),'utf8')).join('\n');
const code=['core-units.js','exam-depth.js','visual-labs.js','exam-transfers.js','exam-calibration.js','bank-approx.js','bank-complexity.js','bank-probability.js','question-bank-data.js','question-bank-ui.js','video-resources.js','video-library.js','study-roadmap.js','guided-approx.js','guided-complexity.js','guided-probability.js','guided-reader.js','reading-studio.js'].map(f=>fs.readFileSync(path.join(root,f),'utf8')).join('\n');
if(/<\/script/i.test(code))throw Error('Unexpected script closing sequence');
html=html.replace('</style>',()=>css+'\n</style>').replace('</body>',()=>'<script>\n'+code+'\n</script>\n</body>');
fs.writeFileSync(path.join(out,'index.html'),html);
const dataContext=vm.createContext({});
for(const file of ['core-units.js','bank-approx.js','bank-complexity.js','bank-probability.js','question-bank-data.js','video-resources.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),dataContext);
const bank=JSON.parse(vm.runInContext('JSON.stringify(questionBankDocument())',dataContext));
fs.mkdirSync(path.join(out,'data'),{recursive:true});
fs.writeFileSync(path.join(out,'data','questions.json'),JSON.stringify(bank,null,2)+'\n');
const units=JSON.parse(vm.runInContext('JSON.stringify(CORE_UNITS)',dataContext));
const names={approx:'Approximation algorithms',complexity:'Interactive proofs and zero knowledge',probability:'Probabilistic method'};
const tierNames={oral:'Short oral check',doctoral:'Doctoral proof',examiner:'Examiner challenge',research:'Research seminar',open:'Open problem'};
function questionMarkdown(q,i){return `## ${i+1}. ${q.title}\n\n**${tierNames[q.tier]} · ${q.kind} · ${q.minutes} minutes suggested**\n\nID: ${q.id}\n\n${q.prompt}\n\n${q.provenance?'**Presentation note:** '+q.provenance+'\n\n':''}**Required output:** ${q.deliverable}\n\n**Prerequisites:** ${q.prerequisites.join('; ')}\n\n**Examiner follow-up:** ${q.followup}\n\n<details>\n<summary>${q.status==='open'?'Orientation; not a general solution':'Solution route / investigation plan'}</summary>\n\n${q.guide.map((p,j)=>(j+1)+'. '+p).join('\n\n')}\n\n</details>\n\n${q.references.map(r=>'['+r.title+']('+r.url+')').join(' · ')}\n\n[Open this question on the website](https://hadi1373z.github.io/doctoral-exam/#question/${encodeURIComponent(q.id)})\n`;}
const questionRoot=path.join(out,'questions');fs.mkdirSync(questionRoot,{recursive:true});
let index='# Doctoral question repository\n\n'+bank.questions.length+' original course questions across 50 assigned topics: 12 per topic, including two research seminar investigations. Short oral checks are labeled separately from full proof, examiner and research tasks. The 100 cold-exam transfer prompts remain outside this study bank and are shown only after proof commitment in the website.\n\nResearch seminar exercises are not claims of new results. The two open-problem agendas are supplementary, and solving an unrestricted open problem is not expected. All work here is practice; exam progress uses the separate cold evidence rules.\n\n[Browse and search the website](https://hadi1373z.github.io/doctoral-exam/#questions) · [Portable JSON dataset](../data/questions.json) · [Open-problem agendas](open-problems.md)\n';
for(const [subject,name]of Object.entries(names)){
 fs.mkdirSync(path.join(questionRoot,subject),{recursive:true});index+='\n## '+name+'\n\n';
 for(const u of units.filter(u=>u.s===subject)){
  const list=bank.questions.filter(q=>q.unit===u.id),file=u.id.replace('core-','')+'.md';
  const intro='# '+u.title+'\n\n'+u.section+' · '+bank.sources[u.source].name+'\n\n'+list.length+' questions: '+list.filter(q=>q.tier==='doctoral').length+' doctoral proofs, '+list.filter(q=>q.tier==='examiner').length+' examiner challenges, '+list.filter(q=>q.tier==='research').length+' research investigations, and '+list.filter(q=>q.tier==='oral').length+' short oral checks.\n\n[All topics](../README.md) · [Open this topic on the website](https://hadi1373z.github.io/doctoral-exam/#topic/'+u.id+')\n\n';
  fs.writeFileSync(path.join(questionRoot,subject,file),intro+list.map(questionMarkdown).join('\n---\n\n'));
  index+='- ['+u.section+' · '+u.title+']('+subject+'/'+file+') — '+list.length+' questions\n';
 }
}
fs.writeFileSync(path.join(questionRoot,'README.md'),index);
fs.writeFileSync(path.join(questionRoot,'open-problems.md'),'# Supplementary open-problem agendas\n\nStatus references checked 5 November 2026. These agendas are separate from the 600 course questions. A proof of the unrestricted question is not expected; each agenda specifies a bounded seminar task.\n\n'+bank.openProblems.map(questionMarkdown).join('\n---\n\n'));
const videos=JSON.parse(vm.runInContext('JSON.stringify(EDUCATIONAL_VIDEOS)',dataContext)),videoDate=vm.runInContext('VIDEO_VERIFIED_DATE',dataContext);
fs.writeFileSync(path.join(out,'data','videos.json'),JSON.stringify({schema:'doctoral-educational-videos-v1',sourceLinksChecked:videoDate,videos},null,2)+'\n');
fs.mkdirSync(path.join(out,'videos'),{recursive:true});
let videoIndex='# Educational videos\n\n[Open the video library](https://hadi1373z.github.io/doctoral-exam/#videos)\n\n'+videos.length+' public lectures across the three exam subjects. Each resource retains its official source and viewing URL. Topic lectures and background support are labeled separately; none is claimed to replace every proof in the assigned books or papers. Watching earns no cold-exam credit. Source links checked '+videoDate+'.\n\nUse the live website for in-page playback. If a provider restricts its player, use the direct viewing link or official lecture page.\n';
for(const [subject,name]of Object.entries(names)){videoIndex+='\n## '+name+'\n\n';for(const v of videos.filter(v=>v.subject===subject))videoIndex+='### '+v.title+'\n\n'+v.speaker+' · '+v.institution+' · '+v.level+' · '+v.coverage+' support\n\n'+v.scopeNote+'\n\n[Watch lecture]('+v.watchUrl+') · [Official source]('+v.sourceUrl+') · [Open player](https://hadi1373z.github.io/doctoral-exam/#video/'+v.id+')\n\nTopics: '+v.topics.map(id=>units.find(u=>u.id===id).title).join('; ')+'.\n\n';}
videoIndex+='\n## Assigned-topic coverage\n\nThe catalogue has verified mappings for '+new Set(videos.flatMap(v=>v.topics)).size+' of '+units.length+' study units. Unmapped topics use clearly labeled related-subject lectures in the website.\n\n';
for(const u of units){const matches=videos.filter(v=>v.topics.includes(u.id));videoIndex+='- **'+u.title+'**: '+(matches.length?matches.map(v=>'['+v.title+']('+v.watchUrl+') ('+v.coverage+')').join('; '):'No verified exact-topic mapping yet; related subject lectures are offered.')+'\n';}
fs.writeFileSync(path.join(out,'videos','README.md'),videoIndex);
const sourceFiles=['doctoral-exam-before-hardening.html','core-units.js','exam-depth.js','exam-depth.css','visual-labs.js','exam-transfers.js','exam-calibration.js','bank-approx.js','bank-complexity.js','bank-probability.js','question-bank-data.js','question-bank-ui.js','question-bank.css','video-resources.js','video-library.js','video-library.css','build-exam.cjs','verify-bank.cjs','verify-calibration.cjs','verify-depth.cjs','verify-videos.cjs','study-roadmap.js','study-roadmap.css','verify-roadmap.cjs','guided-approx.js','guided-complexity.js','guided-probability.js','guided-reader.js','guided-reader.css','verify-guided.cjs','research-audits.cjs'];
fs.mkdirSync(path.join(out,'src'),{recursive:true});
for(const file of [...sourceFiles,'reading-studio.css','reading-studio.js']){const from=path.join(root,file),to=path.join(out,'src',file);if(path.resolve(from)!==path.resolve(to))fs.copyFileSync(from,to);}
console.log('Built standalone site:',Buffer.byteLength(html),'bytes');
console.log('Built question repository:',bank.questions.length,'course questions,',bank.openProblems.length,'open agendas,',units.length,'topic files.');
console.log('Built educational video library:',videos.length,'lectures.');
