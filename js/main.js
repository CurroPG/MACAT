/* ============================================================
   MACAT — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll state ─────────────────────────────────── */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile menu ─────────────────────────────────────────── */
  const burger = document.getElementById('nav-burger');
  const mobileNav = document.getElementById('nav-mobile');

  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mobileNav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ── Hero background parallax + loaded class ─────────────── */
  const heroBg = document.querySelector('.hero__bg');
  if (heroBg) {
    heroBg.classList.add('loaded');
    let bgTransitionSwapped = false;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        if (!bgTransitionSwapped) {
          heroBg.style.transition = 'transform 0.2s linear';
          bgTransitionSwapped = true;
        }
        const zoom = 1 + Math.min(y * 0.0004, 0.15);
        heroBg.style.transform = `scale(${zoom}) translateY(${y * 0.2}px)`;
      }
    }, { passive: true });
  }

  /* ── Hero fase 1b: dispara el fade-in escalonado tras el logo ── */
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.classList.add('is-loaded');
  }

  /* ── Hero fase 2: subtítulos ligados al scroll (no un trigger único) ── */
  const heroSubtitles = document.getElementById('hero-subtitles');
  if (heroSection && heroSubtitles) {
    let heroTicking = false;
    const updateHeroExit = () => {
      const rect = heroSection.getBoundingClientRect();
      const heroHeight = rect.height || window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / heroHeight, 0), 1);
      heroSubtitles.style.transform = `translateY(${progress * 120}px)`;
      heroSubtitles.style.opacity = String(1 - progress);
      heroTicking = false;
    };
    window.addEventListener('scroll', () => {
      if (!heroTicking) {
        requestAnimationFrame(updateHeroExit);
        heroTicking = true;
      }
    }, { passive: true });
    updateHeroExit();
  }

  /* ── Timecode counter ─────────────────────────────────────── */
  const timecode = document.getElementById('timecode');
  if (timecode) {
    let frames = 0, secs = 0, mins = 0, hrs = 0;
    const fps = 24;
    const pad = n => String(n).padStart(2, '0');
    setInterval(() => {
      frames++;
      if (frames >= fps) { frames = 0; secs++; }
      if (secs  >= 60)   { secs  = 0; mins++; }
      if (mins  >= 60)   { mins  = 0; hrs++; }
      timecode.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}:${pad(frames)}`;
    }, 1000 / fps);
  }

  /* ── Scroll reveal (Intersection Observer) ───────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => {
    revealObserver.observe(el);
  });

  /* ── FAQ accordion ───────────────────────────────────────── */
  document.querySelectorAll('.faq__item').forEach(item => {
    const question = item.querySelector('.faq__question');
    question.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq__item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ── Gallery carousel (arrows + protagonist slide) ────────── */
  const galTrack = document.getElementById('gal-track');
  const galPrev  = document.getElementById('gal-prev');
  const galNext  = document.getElementById('gal-next');

  if (galTrack) {
    const scrollByItem = (dir) => {
      const item = galTrack.querySelector('.gal-item');
      if (!item) return;
      const gap = parseFloat(getComputedStyle(galTrack).gap) || 0;
      const amount = item.getBoundingClientRect().width + gap;
      galTrack.scrollBy({ left: dir * amount, behavior: 'smooth' });
    };
    galPrev?.addEventListener('click', () => scrollByItem(-1));
    galNext?.addEventListener('click', () => scrollByItem(1));

    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('is-active', entry.intersectionRatio > 0.6);
      });
    }, { root: galTrack, threshold: [0, 0.25, 0.5, 0.6, 0.75, 1] });

    galTrack.querySelectorAll('.gal-item').forEach(item => activeObserver.observe(item));
  }

  /* ── Gallery lightbox ────────────────────────────────────── */
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  document.querySelectorAll('.gal-item').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.querySelector('img').src;
      lightboxImg.src = src;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  lightboxClose.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  /* ── Smooth scroll for anchor links ─────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY
                   - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });

  /* ── Form submit (demo — just shows feedback) ────────────── */
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (!btn) return;
      const original = btn.textContent;
      btn.textContent = '¡enviado!';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  });

});
