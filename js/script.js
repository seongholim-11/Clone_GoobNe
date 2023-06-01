// header(drop)
let header = document.querySelector('#header');
let headerHeight = header.offsetHeight;

window.onscroll = function(){
    let windowTop = window.scrollY;

    if(windowTop >= headerHeight){
        header.classList.add("drop");
    }else{
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
let aside_ul = $('.depth');
$('.depth>ul').hide();
aside_ul.on({
    click: function () {
        $('.depth>a').not($(this).find('a').toggleClass('active'));
        // $('.depth>ul').slideToggle();
        $('.depth>ul').not($(this).find('ul').slideToggle());
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
    e.forEach((a)=>{
        if(a.isIntersecting){
            a.target.style.transform = 'translateY(0rem)';
        }else{
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    variableWidth: true,
    autoplay :true,
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
    },6); 
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
        $(".news-img img").attr("src", "./img/goobnews/p_"+a+".png");
    }
})

// goobsters

const slideBanner = $('.goobster-img ul');
const slideList = $('.goobster-img ul li');

let slideWidth = slideList.width();
let setIntervalId;

bannerSlide()

// bannerSlide() 함수 만들기
function bannerSlide(){
    setIntervalId = setInterval(()=>{
        slideBanner.animate({left: -(slideWidth+20)}, 500,
        function(){
            $('.goobster-img ul li:first').insertAfter('.goobster-img ul li:last');
            slideBanner.css({left:0})
        })
    }, 1100)
}

$(slideBanner).on('mouseover focus', function(){
    clearInterval(setIntervalId)
})

$(slideBanner).on('mouseout leave', function(){
    bannerSlide()
})
