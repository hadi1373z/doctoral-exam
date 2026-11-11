const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
module.exports=function(root=__dirname){
 const context=vm.createContext({});for(const f of ['lecture-curriculum.js','lecture-boards.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),context);
 const data=JSON.parse(vm.runInContext('JSON.stringify({modules:LECTURE_MODULES,bridges:LECTURE_BRIDGES,sections:LECTURE_SECTIONS,boards:LECTURE_BOARDS})',context));
 const katex=require(path.join(root,'vendor/katex.cjs')),math={};
 for(const[id,board]of Object.entries(data.boards))math[id]=board.steps.map((s,i)=>{if(!s.tex)return '';try{return katex.renderToString(s.tex,{displayMode:true,output:'mathml',throwOnError:true,strict:'error',trust:false});}catch(e){throw Error('Lecture equation '+id+' step '+i+': '+e.message);}});
 return {data,math,code:'const LECTURE_BOARD_MATH='+JSON.stringify(math)+';\n'};
};
