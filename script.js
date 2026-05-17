// Nav scroll behavior
const nav = document.getElementById('main-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// QR code generation
const qrCanvas = document.getElementById('qr-canvas');
if (qrCanvas && typeof QRCode !== 'undefined') {
  QRCode.toCanvas(qrCanvas, 'https://apps.apple.com/app/id6769332453', {
    width: 72,
    margin: 1,
    color: { dark: '#1d1d1f', light: '#ffffff' }
  });
}

// Fade-in on scroll (Intersection Observer)
const fadeEls = document.querySelectorAll('.fade-up, .feat-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach(el => observer.observe(el));

// Trigger hero fade-ups immediately (already in viewport on load)
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .fade-up').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 + i * 130);
  });
});
