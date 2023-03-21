$(function () {
    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function (e) {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active');
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinity: true,
        draggable: false,
        waitForAnimate: false
    })

    $('.team__slider-prev').on('click', (e) => {
        e.preventDefault();
        $('.team__slider').slick('slickPrev');
    })

    $('.team__slider-next').on('click', (e) => {
        e.preventDefault();
        $('.team__slider').slick('slickNext');
    })

    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.testimonials__dots')
        // slidesToShow:4,
        // infinity:true,
        // draggable:false,
        // waitForAnimate: false
    })

    $('.testimonials__slider-prev').on('click', (e) => {
        e.preventDefault();
        $('.testimonials__slider').slick('slickPrev');
    })

    $('.testimonials__next').on('click', (e) => {
        e.preventDefault();
        $('.testimonials__slider').slick('slickNext');
    })


    $('.program__acc-link').on('click', function (e) {

        e.preventDefault();
        // $(this).toggleClass('program__acc-link--active');
        // $(this).children('.program__acc-text').slideToggle();


        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active');
            $(this).children('.program__acc-text').slideUp();
        } else {
            $('.program__acc-link').removeClass('program__acc-link--active');
            $('.program__acc-text').slideUp();
            $(this).addClass('program__acc-link--active');
            $(this).children('.program__acc-text').slideDown();
        }




        // $('.program__acc-link').removeClass('program__acc-link--active-link');
        // $(this).toggleClass('program__acc-link--active');
        // $(this).children('.program__acc-text').slideToggle();

    })
})