// Swiper for Executives Section
const swiperExecutives = new Swiper('.section:nth-of-type(1) .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    loopAdditionalSlides: 1,
    initialSlide: 0,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 800,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: '.section:nth-of-type(1) .swiper-button-next',
        prevEl: '.section:nth-of-type(1) .swiper-button-prev',
    },
    pagination: {
        el: '.section:nth-of-type(1) .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
        },
    },
    on: {
        init: function () {
            this.autoplay.start();
        },
        slideChangeTransitionStart: function () {
            this.allowSlideClick = false;
        },
        slideChangeTransitionEnd: function () {
            this.allowSlideClick = true;
        },
    },
});

// Swiper for Tech Team Section
const swiperTechTeam = new Swiper('.section:nth-of-type(2) .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    loopAdditionalSlides: 1,
    initialSlide: 0,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 800,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: '.section:nth-of-type(2) .swiper-button-next',
        prevEl: '.section:nth-of-type(2) .swiper-button-prev',
    },
    pagination: {
        el: '.section:nth-of-type(2) .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
        },
    },
    on: {
        init: function () {
            this.autoplay.start();
        },
        slideChangeTransitionStart: function () {
            this.allowSlideClick = false;
        },
        slideChangeTransitionEnd: function () {
            this.allowSlideClick = true;
        },
    },
});
