const swiper = new Swiper('.bestseller__swiper', {
    // Optional parameters
    slidesPerView: 2.9,
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
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


const btns = document.querySelectorAll('.main_btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modals');
btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');
        modals.forEach((el) => {
            el.classList.remove('modal-overlay--visible');
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');

    });
});
modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
            el.classList.remove('modal-overlay--visible');
        })
    }
});