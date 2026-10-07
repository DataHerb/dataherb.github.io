(function () {
  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Screenshot tour tabs
  document.querySelectorAll('[data-tour]').forEach(function (root) {
    var tabs = root.querySelectorAll('[role="tab"]');
    function select(tab) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
    }
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(tab); });
      tab.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        var next = tabs[(i + d + tabs.length) % tabs.length];
        select(next); next.focus();
      });
    });
  });

  // Copy buttons
  function copy(text, btn, label) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(function () {
      var old = btn.getAttribute('data-label') || label;
      btn.textContent = 'Copied';
      setTimeout(function () { btn.textContent = old; }, 1400);
    });
  }
  document.querySelectorAll('div.highlighter-rouge').forEach(function (block) {
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'copy-btn'; btn.textContent = 'Copy';
    btn.addEventListener('click', function () { copy(block.querySelector('pre').innerText.replace(/\n$/, ''), btn, 'Copy'); });
    block.appendChild(btn);
  });
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      navigator.clipboard && navigator.clipboard.writeText(btn.getAttribute('data-copy'));
      btn.classList.add('done');
      setTimeout(function () { btn.classList.remove('done'); }, 1400);
    });
  });

  // On-page table of contents for docs
  var toc = document.getElementById('toc');
  var prose = document.querySelector('.prose');
  if (toc && prose) {
    var heads = prose.querySelectorAll('h2[id]');
    if (heads.length < 2) { toc.parentNode.removeChild(toc); return; }
    var ul = document.createElement('ul');
    var links = [];
    heads.forEach(function (h) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + h.id; a.textContent = h.textContent;
      li.appendChild(a); ul.appendChild(li); links.push(a);
    });
    toc.appendChild(ul);
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id); });
        });
      }, { rootMargin: '-80px 0px -70% 0px' });
      heads.forEach(function (h) { io.observe(h); });
    }
  }
})();
