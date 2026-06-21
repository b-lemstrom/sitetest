function openLightbox(title, detail) {
  document.getElementById('lightbox-caption').textContent = title + ' — ' + detail;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Message sent ✓';
  btn.style.background = 'rgba(217,168,188,0.3)';
  btn.disabled = true;
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Shop filter
function filterShop(type, btn) {
  document.querySelectorAll('.shop-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.shop-item').forEach(item => {
    item.style.display = (type === 'all' || item.dataset.type === type) ? '' : 'none';
  });
}

// Enquire — pre-fills the contact form and scrolls to it
function enquire(title, type, price) {
  const typeLabel = { original: 'original painting', print: 'print', commission: 'commission' }[type] || type;
  const msg = document.getElementById('message');
  if (msg) {
    msg.value = `Hi, I'm interested in the ${typeLabel} "${title}" (${price}). Could you tell me more about availability and shipping?`;
  }
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}
