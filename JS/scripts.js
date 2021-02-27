var body = document.body,
    html = document.documentElement;

var maxY = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight) - 250;
let maxX = Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
) - 250;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let x1 = document.createElement('img');
x1.setAttribute("src", "img/XO/x1.png");
let x2 = document.createElement('img');
x2.setAttribute("src", "img/XO/x2.png");
let x3 = document.createElement('img');
x3.setAttribute("src", "img/XO/x3.png");
let o1 = document.createElement('img');
o1.setAttribute("src", "img/XO/o1.png");
let o2 = document.createElement('img');
o2.setAttribute("src", "img/XO/o2.png");
let arr = [x1, x2, x3, o1, o2];
for (let cpt = 1; cpt != 51; cpt++) {
    let X = getRndInteger(0, maxX);
    let Y = getRndInteger(0, maxY);
    let indice = getRndInteger(0, 4);
    let cloned = arr[indice].cloneNode(true);
    cloned.classList.add("x");
    cloned.setAttribute("style", `top:${Y}px ; left :${X}px`);
    document.body.appendChild(cloned);
}
// console.log(document.querySelector('body'));
// let x1 = document.createElement('img');
// x1.setAttribute("src", "img/XO/o1.png");
// let Y = 0;
// let X = 0;
// while (Y < maxY) {
//     X = 0;
//     while (X < maxX) {
//         let cloned = x1.cloneNode(true);
//         cloned.setAttribute("style", `top:${Y}px ; left :${X}px`);
//         cloned.classList.add("o");
//         document.body.appendChild(cloned);
//         X += 50;
//     }
//     Y += 50;
// }


$(function() {
    // Slides
    $('.slick-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });
    // init feather icons
    feather.replace();

    //page scroll
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1000);
        event.preventDefault();
    });


    //toggle scroll menu
    var scrollTop = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        //adjust menu background
        if (scroll > 80) {
            if (scroll > scrollTop) {
                $('.smart-scroll').addClass('scrolling').removeClass('up');
            } else {
                $('.smart-scroll').addClass('up');
            }
        } else {
            // remove if scroll = scrollTop
            $('.smart-scroll').removeClass('scrolling').removeClass('up');
        }

        scrollTop = scroll;

        // adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });

    // scroll top top
    $('.scroll-top').click(function() {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    /**Theme switcher - DEMO PURPOSE ONLY */
    $('.switcher-trigger').click(function() {
        $('.switcher-wrap').toggleClass('active');
    });
    $('.color-switcher ul li').click(function() {
        var color = $(this).attr('data-color');
        $('#theme-color').attr("href", "css/" + color + ".css");
        $('.color-switcher ul li').removeClass('active');
        $(this).addClass('active');
    });
});