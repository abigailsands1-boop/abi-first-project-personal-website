// Fade-in sections as they scroll into view
const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
  { threshold: 0.15 }
);

document.querySelectorAll('.section, .card').forEach((el) => {
  el.classList.add('fade');
  observer.observe(el);
});
