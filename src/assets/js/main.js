$(document).ready(function () {
    $('#slide1').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
        }
    })
});

$(document).ready(function () {
    $('#slide2').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
        }
    })
});

