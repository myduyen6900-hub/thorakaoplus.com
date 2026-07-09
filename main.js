/* =========================================================================
   Thorakaoplus — Shared behavior
   Loaded on every page. Every block checks that its target elements exist
   before wiring up, since not every page has a rail, a gallery, etc.
   ========================================================================= */

(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     1. Mobile menu toggle
     --------------------------------------------------------------------- */
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ---------------------------------------------------------------------
     2. Header shadow on scroll
     --------------------------------------------------------------------- */
  const headerEl = document.querySelector('header.site');
  if (headerEl) {
    window.addEventListener('scroll', () => {
      headerEl.style.boxShadow = window.scrollY > 8 ? '0 2px 12px -6px rgba(43,32,24,0.25)' : 'none';
    }, { passive: true });
  }

  /* ---------------------------------------------------------------------
     3. Product rail (home page) — arrows + progress bar
     --------------------------------------------------------------------- */
  const rail = document.getElementById('rail');
  const prev = document.getElementById('railPrev');
  const next = document.getElementById('railNext');
  const railProgress = document.getElementById('railProgress');
  if (rail && prev && next && railProgress) {
    const scrollAmount = () => {
      const card = rail.querySelector('.card');
      return card ? card.offsetWidth + 16 : 300;
    };
    prev.addEventListener('click', () => rail.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
    next.addEventListener('click', () => rail.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));
    const updateRailProgress = () => {
      const max = rail.scrollWidth - rail.clientWidth;
      const pct = max > 0 ? (rail.scrollLeft / max) * 100 : 0;
      railProgress.style.width = Math.max(8, pct) + '%';
    };
    rail.addEventListener('scroll', updateRailProgress, { passive: true });
    updateRailProgress();
  }

  /* ---------------------------------------------------------------------
     4. Gallery rail — mouse wheel translates to horizontal scroll
     --------------------------------------------------------------------- */
  const gallery = document.getElementById('gallery');
  if (gallery) {
    gallery.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        gallery.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    }, { passive: false });
  }

  /* ---------------------------------------------------------------------
     5. Ambient "video" scene play / pause toggle (home page)
     --------------------------------------------------------------------- */
  const scene = document.getElementById('videoScene');
  const playToggle = document.getElementById('playToggle');
  const playLabel = document.getElementById('playLabel');
  const playIcon = document.getElementById('playIcon');
  if (scene && playToggle && playLabel && playIcon) {
    let playing = true;
    playToggle.addEventListener('click', () => {
      playing = !playing;
      scene.classList.toggle('paused', !playing);
      playToggle.setAttribute('aria-pressed', String(playing));
      playLabel.textContent = playing ? 'Tạm dừng' : 'Phát';
      playIcon.innerHTML = playing
        ? '<rect width="3" height="10" fill="currentColor"/><rect x="7" width="3" height="10" fill="currentColor"/>'
        : '<path d="M0 0 L9 5 L0 10Z" fill="currentColor"/>';
    });
  }

  /* ---------------------------------------------------------------------
     6. Scroll reveal
     --------------------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal:not(.in)');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  /* ---------------------------------------------------------------------
     7. Cart — shared across every page via localStorage
     Each "Thêm vào giỏ" button carries data attributes:
       data-id, data-name, data-price, data-tag, data-image
     --------------------------------------------------------------------- */
  const CART_KEY = 'thorakaoplus_cart';

  function readCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function writeCart(cart) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) { /* storage unavailable — fail silently */ }
    updateCartBadge();
  }

  function addToCart(item) {
    const cart = readCart();
    const existing = cart.find((p) => p.id === item.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...item, qty: 1 });
    }
    writeCart(cart);
  }

  function updateCartBadge() {
    const count = readCart().reduce((sum, p) => sum + p.qty, 0);
    document.querySelectorAll('.cart-btn').forEach((btn) => {
      btn.textContent = String(count);
      btn.setAttribute('aria-label', `Giỏ hàng, ${count} sản phẩm`);
    });
  }

  document.querySelectorAll('.add-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const original = btn.textContent;
      btn.textContent = 'Đã thêm ✓';
      setTimeout(() => { btn.textContent = original; }, 1400);

      addToCart({
        id: btn.dataset.id || btn.dataset.name || original,
        name: btn.dataset.name || 'Sản phẩm Thorakao+',
        price: Number(btn.dataset.price || 0),
        tag: btn.dataset.tag || '',
        image: btn.dataset.image || ''
      });
    });
  });

  updateCartBadge();

  /* Expose a minimal API for cart.html to render/manage line items */
  window.ThorakaoCart = {
    read: readCart,
    write: writeCart,
    add: addToCart,
    remove(id) {
      writeCart(readCart().filter((p) => p.id !== id));
    },
    setQty(id, qty) {
      const cart = readCart();
      const item = cart.find((p) => p.id === id);
      if (!item) return;
      if (qty <= 0) {
        writeCart(cart.filter((p) => p.id !== id));
      } else {
        item.qty = qty;
        writeCart(cart);
      }
    },
    formatVnd(n) {
      return n.toLocaleString('vi-VN') + 'đ';
    }
  };
})();
