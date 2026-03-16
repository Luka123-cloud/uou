document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight/1.5 && rect.bottom >0){
            el.classList.add('visible');
        }
    });
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
