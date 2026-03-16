document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight/1.2 && rect.bottom >0){
            el.classList.add('visible');
        }
    });
});

const header = document.getElementById("myhead");
const show = 2628;
window.addEventListener("scroll", () =>{
    if (window.scrollY > show) {
        header.classList.add('change');
    } else {
        header.classList.remove('change');
    };
});

document.querySelectorAll('.fade-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 
        document.body.classList.add('fade-out'); 

        setTimeout(() => { 
            window.location.href = this.href; 
        }, 800); 
    }); 
});

window.addEventListener('DOMContentLoaded', () => { 
    document.body.classList.add('loaded'); 
});
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href]').forEach(link => {
    if (
      link.getAttribute('target') === '_blank' ||
      link.href.startsWith('#') ||
      link.hostname !== window.location.hostname
    ) return;

    link.addEventListener('click', function (e) {
      e.preventDefault();

      const preloader = document.getElementById('preloader');
      const text = document.getElementById('preloader-text');

      preloader.classList.add('show');

      setTimeout(() => {
        text.classList.add('fly-away');
      }, 1500);

      setTimeout(() => {
        preloader.classList.remove('show');
        preloader.classList.add('up'); // анимация уезда вверх
      }, 2500);

      setTimeout(() => {
        window.location.href = this.href;
      }, 3500);
    });
  });
});
