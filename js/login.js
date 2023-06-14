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
