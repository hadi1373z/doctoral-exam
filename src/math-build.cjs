const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
module.exports=function compileLessonMath(root=__dirname){
 const katex=require(path.join(root,'vendor','katex.cjs')),context=vm.createContext({});
 vm.runInContext(fs.readFileSync(path.join(root,'math-notation.js'),'utf8'),context);
 const notation=JSON.parse(vm.runInContext('JSON.stringify(LESSON_LATEX)',context)),html={};
 for(const[id,equation]of Object.entries(notation)){
  if(typeof equation.tex!=='string'||!equation.tex.trim())throw Error('Missing LaTeX: '+id);
  try{html[id]=katex.renderToString(equation.tex,{displayMode:true,output:'mathml',throwOnError:true,strict:'error',trust:false});}
  catch(error){throw Error('Invalid LaTeX for '+id+': '+error.message);}
 }
 return {ids:Object.keys(notation),html,notation,version:katex.version,code:'const LESSON_MATH_HTML = '+JSON.stringify(html)+';\n'};
};
