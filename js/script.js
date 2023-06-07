// header(drop)
let header = document.querySelector('#header');
let headerHeight = header.offsetHeight;

window.onscroll = function () {
    let windowTop = window.scrollY;

    if (windowTop >= headerHeight) {
        header.classList.add("drop");
    } else {
        header.classList.remove("drop")
    }
}

// more-btn
let moreBtn = $('.more-btn-wrap');
$('.aside').hide();

moreBtn.on({
    click: function () {
        $('.bar').toggleClass('toggle');
        $('.aside').slideDown();
        $('.aside-lnb').addClass('active');
        $('.aside-bg').delay(1000).show();
    }
})

// aside
let close = $('.aside-close');
close.on({
    click: function () {
        $('.aside-lnb').removeClass('active');
        $('.bar1').removeClass('toggle');
        $('.bar2').removeClass('toggle');
        $('.bar3').removeClass('toggle');
        $('.aside-bg').delay(1000).hide();
    }
})

// aside ul
let aside_ul_a = $('.depth a');
$('.depth>ul').hide();
aside_ul_a.on({click: function () {
        $('.depth>a').not($(this).find('a').toggleClass('active'));
        // $('.depth>ul').slideToggle();
        $('.depth>ul').not($(this).parent().find('ul').slideToggle());
    }
})

// banner
$('.main-vi-wrap').slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
});

// oven-menu
let observer = new IntersectionObserver((e) => {
    e.forEach((a) => {
        if (a.isIntersecting) {
            a.target.style.transform = 'translateY(0rem)';
        } else {
            a.target.style.transform = 'translateY(30rem)';
        }

    })
})

let food = document.getElementsByClassName('food')

observer.observe(food[0]);
observer.observe(food[1]);
observer.observe(food[2]);
observer.observe(food[3]);

// oven-menu
$('.oven-slide').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000
});

// goobne new
function moveSpan() {
    const elements = document.querySelectorAll('.text-goobne');
    let distance = 0;

    setInterval(() => {
        elements.forEach((element) => {
            element.style.transform = `translateX(${distance}%)`;
        });
        distance -= 0.1;

        if (distance <= -100) {
            distance = 0;
        }
    }, 6);
}
moveSpan()

// goobnews
let news_text = $('.news-content');
news_text.on({
    click: function () {
        news_text.removeClass('active')
        $(this).toggleClass('active');
        let a = $(this).index();
        console.log("🚀 ~ file: script.js:117 ~ a:", a)
        $(".news-img img").attr("src", "./img/goobnews/p_" + a + ".png");
    }
})

// goobsters

const slideBanner = $('.goobster-img ul');
const slideList = $('.goobster-img ul li');

let setIntervalId;

bannerSlide()

// bannerSlide() 함수 만들기
function bannerSlide() {
    setIntervalId = setInterval(() => {
        let slideWidth = slideList.width();
        slideBanner.animate({ left: -(slideWidth + 20) },
            function () {
                $('.goobster-img ul li:first').insertAfter('.goobster-img ul li:last');
                slideBanner.css({ left: 0 })
            })
    }, 2000)
}

$(slideBanner).on('mouseover focus', function () {
    clearInterval(setIntervalId)
})

$(slideBanner).on('mouseout leave', function () {
    bannerSlide()
})

// Goobtube
//img
let observer_goobtube_img = new IntersectionObserver((item) => {
    item.forEach((img) => {
        if (img.isIntersecting) {
            img.target.style.left = '10%';
            img.target.style.transform = 'translateY(-50%)';
            img.target.style.opacity = '1';;
        } else {
            img.target.style.left = '-20%';
            img.target.style.transform = 'translateY(-50%)';
            img.target.style.opacity = '0';
        }

    })
})

let youtube = document.getElementsByClassName('oii-img')

observer_goobtube_img.observe(youtube[0]);
observer_goobtube_img.observe(youtube[1]);
observer_goobtube_img.observe(youtube[2]);
observer_goobtube_img.observe(youtube[3]);


//text
let observer_goobtube_text = new IntersectionObserver((item) => {
    item.forEach((text) => {
        if (text.isIntersecting) {
            text.target.style.right = '10%';
            text.target.style.transform = 'translateY(-50%)';
            text.target.style.opacity = '1';;
        } else {
            text.target.style.right = '-20%';
            text.target.style.transform = 'translateY(-50%)';
            text.target.style.opacity = '0';
        }

    })
})

let youtube_text = document.getElementsByClassName('oii-text')

observer_goobtube_text.observe(youtube_text[0]);
observer_goobtube_text.observe(youtube_text[1]);
observer_goobtube_text.observe(youtube_text[2]);
observer_goobtube_text.observe(youtube_text[3]);

// prev, next button
const prev = document.querySelector('.prev_arrow');
const next = document.querySelector('.next_arrow');
const oii = document.querySelectorAll('.oii');
let list = 0;
let a = 0

function goobtubeButton() {
    prev.addEventListener('click', function () {
        for ( let j = 0; j < oii.length; j++) {
            let classes = oii[j].classList;
            if (classes.contains('active')) {
                a = j;
            }
        }

        for (let i = 0; i < oii.length; i++) {
            oii[i].classList.remove('active')
        }
        a--
        if (a == -1) { a = 3}
        oii[a].classList.add('active')
        console.log("🚀 ~ file: script.js:216 ~ a:", a)

    })
    next.addEventListener('click', function () {
        for ( let j = 0; j < oii.length; j++) {
            let classes = oii[j].classList;
            if (classes.contains('active')) {
                a = j;
            }
        }

        for (let i = 0; i < oii.length; i++) {
            oii[i].classList.remove('active')
        }

        a++
        if (a == 4) { a = 0 }
        oii[a].classList.add('active')
    })
}

goobtubeButton()