const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
module.exports=function(root=__dirname){
 const ctx=vm.createContext({document:{addEventListener(){}},localStorage:{getItem(){return null;},setItem(){}}});
 const base=fs.readFileSync(path.join(root,'doctoral-exam-before-hardening.html'),'utf8');for(const m of base.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi))vm.runInContext(m[1],ctx);
 for(const f of ['core-units.js','foundation-approx.js','foundation-complexity.js','foundation-probability.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
 const data=JSON.parse(vm.runInContext('JSON.stringify({datasets:[FOUNDATION_APPROX,FOUNDATION_COMPLEXITY,FOUNDATION_PROBABILITY],legacy:QUESTIONS,units:CORE_UNITS,lessons:LESSONS,sources:CORE_SOURCES})',ctx));
 const metadata=Object.assign(Object.create(null),...data.datasets.map(d=>d.legacy)),fresh=data.datasets.flatMap(d=>d.questions),math={},katex=require(path.join(root,'vendor/katex.cjs'));
 if(fresh.length!==150||data.legacy.length!==68||Object.keys(metadata).length!==68)throw Error('Foundation bank needs 150 assigned questions and metadata for all 68 original questions');
 for(const unit of data.units)if(fresh.filter(q=>q.topic===unit.id).length!==3)throw Error('Need exactly three foundation questions for '+unit.id);
 const questions=[...data.legacy.map(q=>({...q,...metadata[q.id],assigned:false,subject:data.lessons.find(l=>l.id===q.topic).s})),...fresh.map(q=>({...q,assigned:true,subject:data.units.find(u=>u.id===q.topic)?.s}))];
 if(new Set(questions.map(q=>q.id)).size!==questions.length)throw Error('Duplicate foundation question IDs');
 for(const q of questions){const t=q.teaching;if(!t||!t.summary||t.steps?.length<3||t.distractors?.length!==4||!t.takeaway||!t.followup||q.options?.length!==4||new Set(q.options).size!==4||!Number.isInteger(q.answer)||q.answer<0||q.answer>3||!q.subject)throw Error('Incomplete foundation teaching '+q.id);if(t.tex)try{math[q.id]=katex.renderToString(t.tex,{displayMode:true,output:'mathml',strict:'error',throwOnError:true,trust:false});}catch(e){throw Error('Invalid foundation math '+q.id+': '+e.message);}}
 return {datasets:data.datasets,math,document:{schema:'foundation-quizzes-v1',questions,sources:data.sources},code:'const FOUNDATION_MATH_HTML='+JSON.stringify(math)+';\n'};
};
