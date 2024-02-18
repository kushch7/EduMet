var swiper = new Swiper(".mySwiperBig", {
    slidesPerView: 3,
    spaceBetween: 50,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper(".mySwiperSmall", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
