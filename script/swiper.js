export function initSwiper() {
    const swiper = new Swiper(".swiper", {
        initialSlide: 2,
        centeredSlides: true,
        loop: true,
        speed: 900,
        grabCursor: true,
        autoplay: true,
        allowTouchMove: true,
        effect: "coverflow",
    
        coverflowEffect: {
            rotate: -10,
            stretch: -45,
            depth: 90,
            modifier: 1,
            slideShadows: true,
        },
    
        mousewheel: {
            thresholdDelta: 50,
            sensitivity: 1,
        },
    
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 5,
        },
        },
    });
}
