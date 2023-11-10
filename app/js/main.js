const swiper = new Swiper('.bestseller__swiper', {
    // Optional parameters
    slidesPerView: 3,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.faq__item');
    accordions.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.faq__btn');
            const content = self.querySelector('.faq__text');
            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                control.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                control.setAttribute('aria-expanded', false);
                control.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
                
            }
        });
    });
});