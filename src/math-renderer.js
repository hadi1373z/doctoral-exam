'use strict';
function renderLessonEquation(id){
 const equation=LESSON_LATEX[id],html=LESSON_MATH_HTML[id];
 if(!equation||!html)throw Error('No typeset lesson equation: '+id);
 return `<div class="guided-formula lesson-equation" data-equation-unit="${id}"><div class="lesson-equation-math" tabindex="0" aria-label="Key equation; scroll horizontally if needed">${html}</div>${equation.note?'<p class="lesson-equation-note">'+escapeHTML(equation.note)+'</p>':''}<details class="lesson-equation-source"><summary>LaTeX source</summary><pre>${escapeHTML(equation.tex)}</pre></details></div>`;
}
