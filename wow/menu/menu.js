window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const container = document.querySelector('.horizontal-scroll');
  container.style.transform = `translateX(-${scrollY}px)`;
});

// Установим высоту body = ширине всех секций
document.body.style.height = `${window.innerWidth * 4}px`; // если 4 секции
