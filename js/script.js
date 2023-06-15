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

function moreClose() {
    close.trigger("click");
}

// aside ul
let aside_ul_a = $('.depth a');
$('.depth>ul').hide();
aside_ul_a.on({
    click: function () {
        $('.depth>a').not($(this).find('a').toggleClass('active'));
        // $('.depth>ul').slideToggle();
        $('.depth>ul').not($(this).parent().find('ul').slideToggle());
    }
})

// join
const jButton = $('.jbutton');
const join = document.querySelector('.join');
const jbg = document.querySelector('.jbg');
const jclose = document.querySelector('.jclose');


function modal() {
    jbg.style.display = 'block'
    join.style.display = 'flex'
    signUp()
}

jButton.each(function () {
    $(this).click(function () {
        // 모달창 띄우기
        modal();
        close.trigger("click");
    });
})


jclose.addEventListener('click', function () {
    // 모달창 띄우기
    jbg.style.display = 'none'
    join.style.display = 'none'
});

function signUp() {
    let idArea = document.querySelectorAll('#idArea')
    let idMes = document.querySelectorAll('#idMes')
    let pwArea = document.querySelectorAll('#pwArea')
    let pwMes = document.querySelectorAll('#pwMes')
    let pwArea2 = document.querySelectorAll('#pwArea2')
    let pwMes2 = document.querySelectorAll('#pwMes2')
    let $name = document.querySelectorAll('#name')
    let nameMes = document.querySelectorAll('#nameMes')
    let phone = document.querySelectorAll('#phone')
    let phMes = document.querySelectorAll('#phMes')
    let email = document.querySelectorAll('#email')
    let eMes = document.querySelectorAll('#eMes')
    let born = document.querySelectorAll('#born')
    let bMes = document.querySelectorAll('#bMes')
    let gMes = document.querySelectorAll('#gMes')

    let regid = /^[a-zA-z0-9]{4,}$/
    let regpw = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[!@#$%^&*()_+])/
    let regname = /^[a-zA-Z가-힣]{2,20}$/
    let regphone = /(^010)([0-9]{3,4})([0-9]{4})$/
    let regemail = /^[a-zA-Z0-9]([-_.]?\w+)*@[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,3}$/g;
    let regborn = /[0-9]{8}$/g


    // ? 없거나 있거나(최대 하나)
    // ?= 앞쪽과 일치(/ab(?=c)/)
    // * 없거나 있거나 많거나 (여러개)
    // + 하나 또는 많이(최소 하나)

    idArea.forEach(element => {
        element.addEventListener('blur', function () {
            if (regid.test(element.value)) {
                idMes.forEach(element => {
                    element.innerHTML = "correct!"
                    element.style.color = "green"
                })
            } else {
                alert("아이디는 영대소문자, 숫자 포함 4글자 이상 가능합니다.")
                element.innerHTML = ""
                element.value = '';
                element.blur();
            }
        })
    });

    pwArea.forEach(element => {
        element.addEventListener('blur', function () {
            if (regpw.test(element.value)) {
                pwMes.forEach(element => {
                    element.innerHTML = "correct!"
                    element.style.color = "green"
                })
            } else {
                alert("비밀번호는 특수문자, 문자 포함해서 8자 이상 16자 이하가 가능합니다")
                element.innerHTML = ""
                element.value = '';
                element.blur();
            }
        })
    })

    pwArea2.forEach(element => {
        element.addEventListener('blur', function () {
            pwArea.forEach(item => {
                if (item.value == element.value && !element.value == '') {
                    pwMes2.forEach(element => {
                        element.innerHTML = "correct!"
                        element.style.color = "green"
                    })
                } else {
                    if ((item.value == "") || (element.value == '')) {
                        item.focus();
                    } else {
                        alert("비밀번호가 불일치합니다.")
                        element.innerHTML = ""
                        element.value = '';
                        element.blur();
                    }
                }
            })
        })
    })

    $name.forEach(element => {
        element.addEventListener('blur', function () {
            if (regname.test(element.value)) {
                nameMes.forEach(element => {
                    element.innerHTML = "correct!"
                    element.style.color = "green"
                })
            } else {
                alert("이름은 한글 또는 영어로 2자 이상 20자 이하가 가능합니다.")
                element.innerHTML = ""
                element.value = '';
                element.blur();
            }
        })
    })

    phone.forEach(element => {
        element.addEventListener('blur', function () {
            if (regphone.test(element.value)) {
                phMes.forEach(element => {
                    element.innerHTML = "correct!"
                    element.style.color = "green"
                })
            } else {
                alert("'010'으로 시작하여 '-' 구분없이 번호를 입력해주세요")
                element.innerHTML = ""
                element.value = '';
                element.blur();
            }
        })
    })

    email.forEach(element => {
        element.addEventListener('blur', function () {
            if (regemail.test(element.value)) {
                eMes.forEach(element => {
                    element.innerHTML = "correct!"
                    element.style.color = "green"
                })
            } else {
                if (element.value == "") {
                    eMes.innerHTML = ""
                } else {
                    alert("이메일 형식에 맞게 다시 입력해주세요")
                    element.innerHTML = ""
                    element.value = '';
                    element.blur();
                }
            }
        })
    })

    born.forEach(element => {
        element.addEventListener('blur', function () {
            if (regborn.test(element.value)) {
                bMes.forEach(element => {
                    element.innerHTML = "correct!"
                    element.style.color = "green"
                })
            } else {
                if (element.value == "") {
                    bMes.innerHTML = ""
                } else {
                    alert("8자리 생년월일을 입력해주세요")
                    element.innerHTML = ""
                    element.value = '';
                    element.blur();
                }
            }
        })
    })

    const submit = document.querySelectorAll('#submit');
        console.log("🚀 ~ file: script.js:240 ~ signUp ~ submit:", submit)
        submit[0].addEventListener.click(function () {
            if ($name[0].value == "") {
                alert("이름을 입력해주세요")
                return false
            } else {
                if (!regid.test(idArea[0].value)) {
                    alert('아이디를 입력해주세요')
                    idArea[0].value = "";
                    return false
                } else {
                    if (pwArea[0].value == "") {
                        alert("비밀번호를 입력해주세요")
                        return false
                    } else {
                        if (pwArea[0].value != pwArea2[0].value) {
                            alert('비밀번호가 일치하지 않습니다.')
                            return false
                        } else {
                            if (idArea[0].value == "") {
                                alert("아이디를 입력해주세요")
                                return false
                            } else {
                                if (phone[0].value == "") {
                                    alert("번호를 입력해주세요")
                                    return false
                                } else {
                                    if (email[0].value == "") {
                                        alert("이메일을 입력해주세요")
                                        return false
                                    } else {
                                        if (born[0].value == "") {
                                            alert("생년월일을 입력해주세요")
                                            return false
                                        } else {
                                            if (document.querySelectorAll('[name=gender]:checked')[0] == null) {
                                                gMes[0].style.color = 'red'
                                                gMes[0].innerHTML = '성별을 체크해주세요'
                                                document.querySelectorAll('.female')[0].focus();
                                            } else {
                                                location.href = 'index.html'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        submit[1].addEventListener.click(function () {
            if ($name[1].value == "") {
                alert("이름을 입력해주세요")
                return false
            } else {
                if (!regid.test(idArea[1].value)) {
                    alert('아이디를 입력해주세요')
                    idArea[1].value = "";
                    return false
                } else {
                    if (pwArea[1].value == "") {
                        alert("비밀번호를 입력해주세요")
                        return false
                    } else {
                        if (pwArea[1].value != pwArea2[1].value) {
                            alert('비밀번호가 일치하지 않습니다.')
                            return false
                        } else {
                            if (idArea[1].value == "") {
                                alert("아이디를 입력해주세요")
                                return false
                            } else {
                                if (phone[1].value == "") {
                                    alert("번호를 입력해주세요")
                                    return false
                                } else {
                                    if (email[1].value == "") {
                                        alert("이메일을 입력해주세요")
                                        return false
                                    } else {
                                        if (born[1].value == "") {
                                            alert("생년월일을 입력해주세요")
                                            return false
                                        } else {
                                            if (document.querySelectorAll('[name=gender]:checked')[1] == null) {
                                                gMes[1].style.color = 'red'
                                                gMes[1].innerHTML = '성별을 체크해주세요'
                                                document.querySelectorAll('.female')[1].focus();
                                            } else {
                                                location.href = 'index.html'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
};





// banner
$('.main-vi-wrap').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
        for (let j = 0; j < oii.length; j++) {
            let classes = oii[j].classList;
            if (classes.contains('active')) {
                a = j;
            }
        }

        for (let i = 0; i < oii.length; i++) {
            oii[i].classList.remove('active')
        }
        a--
        if (a == -1) { a = 3 }
        oii[a].classList.add('active')
        console.log("🚀 ~ file: script.js:216 ~ a:", a)

    })
    next.addEventListener('click', function () {
        for (let j = 0; j < oii.length; j++) {
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