const swiper = new Swiper('.bestseller__swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        // when window width is >= 320px
        576: {
            slidesPerView: 1.8,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 2.9,
            spaceBetween: 50,
        },
        

    }
});

const swiperSecond = new Swiper('.review__swiper', {
    // Optional parameters
    spaceBetween: 53,
    slidesPerView: 3,
    navigation: {
        nextEl: '.review__next',
        prevEl: '.review__prev',
    },
    pagination: {
        el: '.review__pag',
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

const modal = new GraphModal();

const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const body = document.body;
const navItems = nav?.querySelectorAll('a');
burger?.addEventListener('click', () => {
    body.classList.toggle('disable-scroll');
    burger?.classList.toggle('burger--active');
    nav.classList.toggle('header__nav--visible');
})
navItems.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('disable-scroll');
        burger?.classList.remove('burger--active');
        nav.classList.remove('header__nav--visible');
    })
})



