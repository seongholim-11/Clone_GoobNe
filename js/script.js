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
