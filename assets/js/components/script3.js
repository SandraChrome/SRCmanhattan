$(document).ready(function () {
    $('.kitchen__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 4,
        prevArrow: '<button type="button" class="slick-prev" data-aos="fade-up"><img class="slider__prev-img" src="assets/img/kitchen-slider/svg/left.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next" data-aos="fade-up"><img class="slider__next-img" src="assets/img/kitchen-slider/svg/next.svg" alt="next"></img></button>',
        responsive: [
            {
                breakpoint: 1178,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 774,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2,
                }
            }, {
                breakpoint: 612,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                }
            }
        ]
    });


    $('.equipment__accordion-btn').click(function () {
        const parent = $(this).parent()

        if (parent.hasClass('equipment__accordion-item--active')) {
            parent.removeClass('equipment__accordion-item--active')
            $(this).next('.equipment__accordion-content').slideUp(200)
        } else {
            $('.equipment__accordion-btn').next('.equipment__accordion-content').slideUp(200)
            $(this).next('.equipment__accordion-content').slideDown(200)
            $('.equipment__accordion-item').removeClass('equipment__accordion-item--active')
            parent.addClass('equipment__accordion-item--active')
        }
    })
    $('.equipment__accordion-btn:first').click()

    $('.gallery__item').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true

        }
    });


    $('.reservation__form-input--phone').mask('+7 (999) 999-99-99');

    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };


    $('input[type="tel"]').click(function () {
        $(this).setCursorPosition(4);
    });

})
