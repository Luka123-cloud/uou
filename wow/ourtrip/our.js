const preloader = document.getElementById('preloader');
const text = document.getElementById('preloader-text');
    // Старт движения вверх
window.addEventListener('load', () => {
    preloader.classList.add('active');

    setTimeout(() => {
        text.classList.add('fly-away');
    }, 3200);

    setTimeout(() => {
        preloader.classList.add('hide');
    }, 3900);
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

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const container = document.querySelector('.horizontal-scroll');
  container.style.transform = `translateX(-${scrollY}px)`;
});

// Установим высоту body = ширине всех секций
document.body.style.height = `${window.innerWidth * 64}px`; // если 4 секции
