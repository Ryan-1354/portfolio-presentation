/* ==========================================================================
   案例研究頁共用腳本（Channel-T / Super8 共用同一份）
   1. 依各頁實際章節標題動態產生左側錨點導覽 + scroll-spy 高亮
   2. 圖片 Lightbox 放大檢視
   ========================================================================== */
(function () {
  'use strict';

  var main = document.querySelector('main');

  /* 錨點捲動偏移：桌機（≥1320px）無固定頂部導覽，用較小值；
     手機／平板有固定頂部列，需加大以免 section 標題被頂部列遮住 */
  function scrollOffset() {
    return window.innerWidth < 1320 ? 72 : 40;
  }
  function syncScrollPadding() {
    document.documentElement.style.scrollPaddingTop = scrollOffset() + 'px';
  }
  syncScrollPadding();
  window.addEventListener('resize', syncScrollPadding);

  /* ------------------------------------------------------------------
     錨點捲動：讓跳轉後 section 的標題貼近視窗頂端。
     section 上下有 112px 裝飾留白，若對齊 section 外框頂端，標題會
     被推到畫面中段、看起來像停在一片空白裡；因此改對齊 section 內
     第一個內容元素（eyebrow / 標題）。
     另外頁面有大量 loading="lazy" 圖片，原生錨點會在圖片尚未載入時
     就算好位置、之後 layout 撐開又跑掉，所以一律改由 JS 於點擊、
     load、hashchange 後重新計算捲動位置。
     ------------------------------------------------------------------ */
  function scrollToId(id, behavior) {
    var el = document.getElementById(id);
    if (!el) return;
    /* hero（TOP）直接回到頁面最頂端 */
    if (el.classList.contains('hero')) {
      window.scrollTo({ top: 0, behavior: behavior || 'auto' });
      return;
    }
    var container = el.querySelector('.container');
    var anchorEl = (container && container.firstElementChild) || container || el;
    var y = anchorEl.getBoundingClientRect().top + window.pageYOffset - scrollOffset();
    if (y < 0) y = 0;
    window.scrollTo({ top: y, behavior: behavior || 'auto' });
  }

  document.addEventListener('click', function (e) {
    var t = e.target;
    var a = t && t.closest ? t.closest('a[href^="#"]') : null;
    if (!a) return;
    var id = a.getAttribute('href').slice(1);
    if (!id || !document.getElementById(id)) return;
    e.preventDefault();
    scrollToId(id, 'smooth');
    if (window.history && history.replaceState) {
      history.replaceState(null, '', '#' + id);
    } else {
      location.hash = id;
    }
  });

  /* 首次載入 / 重新整理時網址帶 hash：等圖片與字體載入完成後再定位，
     避免落在 section 內部而非最上緣 */
  window.addEventListener('load', function () {
    if (location.hash.length > 1) {
      requestAnimationFrame(function () {
        scrollToId(location.hash.slice(1), 'auto');
      });
    }
  });

  /* ------------------------------------------------------------------
     側邊錨點導覽
     取 <main> 內、帶 id 的 section 的 .section-title 作為導覽項目；
     標記 data-nav-skip 的 section 不列入（例如附錄）。
     ------------------------------------------------------------------ */
  if (main) {
    var titleEls = main.querySelectorAll(
      'section[id]:not([data-nav-skip]) .section-title'
    );
    var items = [];

    if (titleEls.length) {
      var nav = document.createElement('nav');
      nav.className = 'sidenav';
      nav.setAttribute('aria-label', '章節導覽');

      var list = document.createElement('ul');
      list.className = 'sidenav__list';

      /* 第一個導覽項目：TOP，點擊回到 hero */
      var hero = main.querySelector('.hero[id]');
      if (hero) {
        var topLi = document.createElement('li');
        var topA = document.createElement('a');
        topA.className = 'sidenav__link';
        topA.href = '#' + hero.id;
        topA.textContent = 'TOP';
        topLi.appendChild(topA);
        list.appendChild(topLi);
        items.push({ id: hero.id, el: hero, link: topA });
      }

      Array.prototype.forEach.call(titleEls, function (titleEl) {
        var section = titleEl.closest('section[id]');
        if (!section) return;

        var li = document.createElement('li');
        var a = document.createElement('a');
        a.className = 'sidenav__link';
        a.href = '#' + section.id;
        a.textContent = (titleEl.textContent || '').trim();
        li.appendChild(a);
        list.appendChild(li);

        items.push({ id: section.id, el: section, link: a });
      });

      nav.appendChild(list);
      document.body.appendChild(nav);

      /* scroll-spy：目前所在區塊高亮 */
      var ticking = false;

      function updateActive() {
        ticking = false;
        var threshold = 140; // 視為「進入」的畫面上緣偏移
        var currentId = items[0].id;

        for (var i = 0; i < items.length; i++) {
          if (items[i].el.getBoundingClientRect().top <= threshold) {
            currentId = items[i].id;
          } else {
            break;
          }
        }
        for (var j = 0; j < items.length; j++) {
          var on = items[j].id === currentId;
          items[j].link.classList.toggle('is-active', on);
          if (items[j].mlink) items[j].mlink.classList.toggle('is-active', on);
        }
      }

      function requestUpdate() {
        if (!ticking) {
          window.requestAnimationFrame(updateActive);
          ticking = true;
        }
      }

      window.addEventListener('scroll', requestUpdate, { passive: true });
      window.addEventListener('resize', requestUpdate);
      updateActive();

      /* ----------------------------------------------------------------
         手機／平板固定頂部列：左側返回、右側 hamburger 展開章節導覽。
         桌機（≥1320px）維持 .home-link + .sidenav，頂部列以 CSS 隱藏。
         ---------------------------------------------------------------- */
      var homeLink = document.querySelector('.home-link');

      var bar = document.createElement('header');
      bar.className = 'cs-topbar';

      var back = document.createElement('a');
      back.className = 'cs-topbar__back';
      back.href = homeLink ? homeLink.getAttribute('href') : '../#work';
      back.textContent = homeLink
        ? (homeLink.textContent || '').trim()
        : '← 案例研究';

      var toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'cs-topbar__toggle';
      toggle.setAttribute('aria-label', '章節導覽');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '<span></span><span></span><span></span>';

      bar.appendChild(back);
      bar.appendChild(toggle);

      var menu = document.createElement('nav');
      menu.className = 'cs-menu';
      menu.setAttribute('aria-label', '章節導覽');
      var menuList = document.createElement('ul');
      menuList.className = 'cs-menu__list';
      items.forEach(function (it) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.className = 'cs-menu__link';
        a.href = '#' + it.id;
        a.textContent = it.link.textContent;
        li.appendChild(a);
        menuList.appendChild(li);
        it.mlink = a;
      });
      menu.appendChild(menuList);

      var backdrop = document.createElement('div');
      backdrop.className = 'cs-menu__backdrop';

      document.body.appendChild(bar);
      document.body.appendChild(backdrop);
      document.body.appendChild(menu);

      function closeMenu() {
        menu.classList.remove('is-open');
        backdrop.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
      }
      function openMenu() {
        menu.classList.add('is-open');
        backdrop.classList.add('is-open');
        toggle.classList.add('is-active');
        toggle.setAttribute('aria-expanded', 'true');
      }
      toggle.addEventListener('click', function () {
        if (menu.classList.contains('is-open')) closeMenu();
        else openMenu();
      });
      backdrop.addEventListener('click', closeMenu);
      /* 點任一章節連結後關閉（捲動由全域 hash handler 處理） */
      menu.addEventListener('click', function (e) {
        if (e.target.closest('a')) closeMenu();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
      });
      /* 視窗放大到桌機尺寸時關閉，避免殘留開啟狀態 */
      window.addEventListener('resize', function () {
        if (window.innerWidth >= 1320) closeMenu();
      });
      updateActive();
    }
  }

  /* ------------------------------------------------------------------
     圖片 Lightbox：點擊任一張圖放大檢視、可再點擊分級縮放並拖曳平移
     ------------------------------------------------------------------ */
  var lb = document.getElementById('lightbox');
  if (!lb) return;

  var lbImg = document.getElementById('lightboxImg');
  var lbCap = document.getElementById('lightboxCaption');
  var lbClose = document.getElementById('lightboxClose');

  var ZOOM_STEPS = [1, 1.6, 2.4, 3.4];
  var zoomIndex = 0;
  var panX = 0,
    panY = 0;

  function applyTransform() {
    lbImg.style.transform =
      'translate(' + panX + 'px,' + panY + 'px) scale(' + ZOOM_STEPS[zoomIndex] + ')';
    var last = zoomIndex === ZOOM_STEPS.length - 1;
    lbImg.style.cursor = zoomIndex === 0 ? 'zoom-in' : last ? 'zoom-out' : 'zoom-in';
  }

  function resetZoom() {
    zoomIndex = 0;
    panX = 0;
    panY = 0;
    lbImg.style.transition = 'transform 0.25s ease';
    applyTransform();
  }

  function openLightbox(img) {
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt || '';
    var fig = img.closest('figure');
    var fc = fig ? fig.querySelector('figcaption') : null;
    lbCap.innerHTML = fc ? fc.innerHTML : '';
    resetZoom();
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lbImg.removeAttribute('src');
    resetZoom();
  }

  Array.prototype.forEach.call(document.querySelectorAll('figure img'), function (img) {
    img.addEventListener('click', function () {
      openLightbox(img);
    });
  });

  var dragging = false,
    moved = false,
    startX = 0,
    startY = 0,
    startPanX = 0,
    startPanY = 0;

  lbImg.addEventListener('click', function (e) {
    e.stopPropagation();
    if (moved) {
      moved = false;
      return;
    }
    zoomIndex = (zoomIndex + 1) % ZOOM_STEPS.length;
    if (zoomIndex === 0) {
      panX = 0;
      panY = 0;
    }
    lbImg.style.transition = 'transform 0.25s ease';
    applyTransform();
  });

  lbImg.addEventListener('mousedown', function (e) {
    if (zoomIndex === 0) return;
    e.preventDefault();
    dragging = true;
    moved = false;
    startX = e.clientX;
    startY = e.clientY;
    startPanX = panX;
    startPanY = panY;
    lbImg.style.transition = 'none';
    lbImg.style.cursor = 'grabbing';
  });
  window.addEventListener('mousemove', function (e) {
    if (!dragging) return;
    var dx = e.clientX - startX;
    var dy = e.clientY - startY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
    panX = startPanX + dx;
    panY = startPanY + dy;
    applyTransform();
  });
  window.addEventListener('mouseup', function () {
    if (!dragging) return;
    dragging = false;
    applyTransform();
  });

  lbClose.addEventListener('click', closeLightbox);
  lb.addEventListener('click', function (e) {
    if (e.target !== lbImg) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
  });
})();
