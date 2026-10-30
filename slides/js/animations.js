function restartAnim(el) {
  el.classList.remove('run');
  void el.offsetWidth; // force reflow so the animation can replay
  el.classList.add('run');
}

function applyFragmentState(el, shown) {
  if (el.dataset.anim) {
    if (shown) restartAnim(el); else el.classList.remove('run');
  }
  if (el.dataset.target && el.dataset.class) {
    el.dataset.target.split(',').forEach((sel) => {
      document.querySelectorAll(sel.trim()).forEach((t) => {
        t.classList.toggle(el.dataset.class, shown);
      });
    });
  }
}

Reveal.on('fragmentshown', (e) => applyFragmentState(e.fragment, true));
Reveal.on('fragmenthidden', (e) => applyFragmentState(e.fragment, false));
