/* Keep the reading path visible; group the complete toolkit within easy reach. */
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('side-nav');
  if (!nav || nav.querySelector('.nav-group')) return;
  const videoSymbol = nav.querySelector('[data-view="videos"] .nav-symbol');
  if (videoSymbol) videoSymbol.textContent = '▷';
  const groups = [
    ['Practice & examination', ['cold','challenges','practice','proofs','oral','expertise','audit']],
    ['Reference & exploration', ['learn','syllabus','playgrounds']]
  ];
  for (const [title, views] of groups) {
    const group = document.createElement('details');
    group.className = 'nav-group';
    const summary = document.createElement('summary');
    summary.textContent = title;
    group.append(summary);
    for (const view of views) {
      const link = nav.querySelector('[data-view="' + view + '"]');
      if (link) group.append(link);
    }
    if (group.children.length > 1) nav.append(group);
  }
  const revealActiveGroup = () => {
    for (const group of nav.querySelectorAll('.nav-group')) {
      if (group.querySelector('.nav-link.active')) group.open = true;
    }
  };
  revealActiveGroup();
  new MutationObserver(revealActiveGroup).observe(nav, {subtree:true, attributes:true, attributeFilter:['class']});
});
