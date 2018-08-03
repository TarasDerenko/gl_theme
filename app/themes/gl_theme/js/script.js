$(document).ready(function () {
    $('#article-slider').owlCarousel({
        autoplay: true,
        items:1,
        loop:true,
        autoplayTimeout: 5000,
    }); 

    $('#hart-news').owlCarousel({
        autoplay: true,
        items:4,
        loop:true,
        autoplayTimeout: 5000,
    });
});