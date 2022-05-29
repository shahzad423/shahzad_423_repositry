$(document).ready(function() {
    $(".favorite ").click(function() {
        $(this).toggleClass("active ");
    });
    initTimer();
});

function initTimer() {
    if ($('.timer').length) {


        var target_date = new Date().getTime();

        var days, hours, minutes, seconds;
        var d = $('#day');
        var h = $('#hour');
        var m = $('#mintue');
        var s = $('#second');

        setInterval(function() {
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;


            days = parseInt(seconds_left / 86400);
            seconds_left = seconds_left % 86400;

            hours = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;

            minutes = parseInt(seconds_left / 60);
            seconds = parseInt(seconds_left % 60);


            d.text(days);
            h.text(hours);
            m.text(minutes);
            s.text(seconds);


        }, 1000);

    }

}


$(document).ready(function() {

    $('.items').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        minSlides: 1,
        maxSlides: 1,
        arrows: true,
        prevArrow: '.prev',
        nextArrow: '.next',


        centerMode: false,
        dots: true,
        responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]

    });
});

$(document).ready(function() {

    $('.item').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        minSlides: 1,
        maxSlides: 1,
        arrows: true,
        prevArrow: '.prevv',
        nextArrow: '.nextt',


        centerMode: false,
        dots: true,
        draggable: true,
        cssEase: 'ease',
        easing: 'linear',
        responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]

    });
});
var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = 'none';
});