$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
        speed: 1500
    });
})

$(function () {
    $('.main_product_slide').slick({
        arrows: true,
        dots: true,
        slidesToShow: 4,
    });

})