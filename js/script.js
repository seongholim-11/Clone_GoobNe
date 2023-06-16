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
const join = document.querySelector('#join');
const _join = document.querySelector('.join');
const jbg = document.querySelector('.jbg');
const jclose = document.querySelector('.jclose');


function modal() {
    join.style.display = 'block'
    jbg.style.display = 'block'
    _join.style.display = 'flex'
    signUp()
    _signUp()
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
    let idArea = document.querySelector('#idArea')
    let idMes = document.querySelector('#idMes')
    let pwArea = document.querySelector('#pwArea')
    let pwMes = document.querySelector('#pwMes')
    let pwArea2 = document.querySelector('#pwArea2')
    let pwMes2 = document.querySelector('#pwMes2')
    let $name = document.querySelector('#name')
    let nameMes = document.querySelector('#nameMes')
    let phone = document.querySelector('#phone')
    let phMes = document.querySelector('#phMes')
    let email = document.querySelector('#email')
    let eMes = document.querySelector('#eMes')
    let born = document.querySelector('#born')
    let bMes = document.querySelector('#bMes')
    let gMes = document.querySelector('#gMes')

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

    idArea.addEventListener('blur', function () {
        if (regid.test(idArea.value)) {
            idMes.innerHTML = "correct!"
            idMes.style.color = "green"
        } else {
            alert("아이디는 영대소문자, 숫자 포함 4글자 이상 가능합니다.")
            idArea.innerHTML = ""
            idArea.value = '';
            idArea.blur();
        }
    })

    pwArea.addEventListener('blur', function () {
        if (regpw.test(pwArea.value)) {
            pwMes.innerHTML = "correct!"
            pwMes.style.color = "green"
        } else {
            alert("비밀번호는 특수문자, 문자 포함해서 8자 이상 16자 이하가 가능합니다")
            pwArea.innerHTML = ""
            pwArea.value = '';
            pwArea.blur();
        }
    })

    pwArea2.addEventListener('blur', function () {
        if (pwArea.value == pwArea2.value && !pwArea2.value == '') {
            pwMes2.innerHTML = "correct!"
            pwMes2.style.color = "green"
        } else {
            if ((pwArea.value == "") || (pwArea2.value == '')) {
                pwArea.focus();
            } else {
                alert("비밀번호가 불일치합니다.")
                pwArea2.innerHTML = ""
                pwArea2.value = '';
                pwArea2.blur();
            }
        }
    })

    $name.addEventListener('blur', function () {
        if (regname.test($name.value)) {
            nameMes.innerHTML = "correct!"
            nameMes.style.color = "green"
        } else {
            alert("이름은 한글 또는 영어로 2자 이상 20자 이하가 가능합니다.")
            $name.innerHTML = ""
            $name.value = '';
            $name.blur();
        }
    })

    phone.addEventListener('blur', function () {
        if (regphone.test(phone.value)) {
            phMes.innerHTML = "correct!"
            phMes.style.color = "green"
        } else {
            alert("'010'으로 시작하여 '-' 구분없이 번호를 입력해주세요")
            phone.innerHTML = ""
            phone.value = '';
            phone.blur();
        }
    })

    email.addEventListener('blur', function () {
        if (regemail.test(email.value)) {
            eMes.innerHTML = "correct!"
            eMes.style.color = "green"
        } else {
            if (email.value == "") {
                eMes.innerHTML = ""
            } else {
                alert("이메일 형식에 맞게 다시 입력해주세요")
                email.innerHTML = ""
                email.value = '';
                email.blur();
            }
        }
    })
    born.addEventListener('blur', function () {
        if (regborn.test(born.value)) {
            bMes.innerHTML = "correct!"
            bMes.style.color = "green"
        } else {
            if (born.value == "") {
                bMes.innerHTML = ""
            } else {
                alert("8자리 생년월일을 입력해주세요")
                born.innerHTML = ""
                born.value = '';
                born.blur();
            }
        }
    })

    document.getElementById('_submit').onclick = function () {
        if ($name.value == "") {
            alert("이름을 입력해주세요")
            return false
        } else {
            if (!regid.test(idArea.value)) {
                alert('아이디를 입력해주세요')
                idArea.value = "";
                return false
            } else {
                if (pwArea.value == "") {
                    alert("비밀번호를 입력해주세요")
                    return false
                } else {
                    if (pwArea.value != pwArea2.value) {
                        alert('비밀번호가 일치하지 않습니다.')
                        return false
                    } else {
                        if (idArea.value == "") {
                            alert("아이디를 입력해주세요")
                            return false
                        } else {
                            if (phone.value == "") {
                                alert("번호를 입력해주세요")
                                return false
                            } else {
                                if (email.value == "") {
                                    alert("이메일을 입력해주세요")
                                    return false
                                } else {
                                    if (born.value == "") {
                                        alert("생년월일을 입력해주세요")
                                        return false
                                    } else {
                                        if (document.querySelector('[name=gender]:checked') == null) {
                                            gMes.style.color = 'red'
                                            gMes.innerHTML = '성별을 체크해주세요'
                                            document.querySelector('#female').focus();
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
    };
};
function _signUp() {
    let _idArea = document.querySelector('#_idArea')
    let _idMes = document.querySelector('#_idMes')
    let _pwArea = document.querySelector('#_pwArea')
    let _pwMes = document.querySelector('#_pwMes')
    let _pwArea2 = document.querySelector('#_pwArea2')
    let _pwMes2 = document.querySelector('#_pwMes2')
    let _$name = document.querySelector('#_name')
    let _nameMes = document.querySelector('#_nameMes')
    let _phone = document.querySelector('#_phone')
    let _phMes = document.querySelector('#_phMes')
    let _email = document.querySelector('#_email')
    let _eMes = document.querySelector('#_eMes')
    let _born = document.querySelector('#_born')
    let _bMes = document.querySelector('#_bMes')
    let _gMes = document.querySelector('#_gMes')

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

    _idArea.addEventListener('blur', function () {
        if (regid.test(_idArea.value)) {
            _idMes.innerHTML = "correct!"
            _idMes.style.color = "green"
        } else {
            alert("아이디는 영대소문자, 숫자 포함 4글자 이상 가능합니다.")
            _idArea.innerHTML = ""
            _idArea.value = '';
            _idArea.blur();
        }
    })

    _pwArea.addEventListener('blur', function () {
        if (regpw.test(_pwArea.value)) {
            _pwMes.innerHTML = "correct!"
            _pwMes.style.color = "green"
        } else {
            alert("비밀번호는 특수문자, 문자 포함해서 8자 이상 16자 이하가 가능합니다")
            _pwArea.innerHTML = ""
            _pwArea.value = '';
            _pwArea.blur();
        }
    })

    _pwArea2.addEventListener('blur', function () {
        if (_pwArea.value == _pwArea2.value && !_pwArea2.value == '') {
            _pwMes2.innerHTML = "correct!"
            _pwMes2.style.color = "green"
        } else {
            if ((_pwArea.value == "") || (_pwArea2.value == '')) {
                _pwArea.focus();
            } else {
                alert("비밀번호가 불일치합니다.")
                _pwArea2.innerHTML = ""
                _pwArea2.value = '';
                _pwArea2.blur();
            }
        }
    })

    _$name.addEventListener('blur', function () {
        if (regname.test(_$name.value)) {
            _nameMes.innerHTML = "correct!"
            _nameMes.style.color = "green"
        } else {
            alert("이름은 한글 또는 영어로 2자 이상 20자 이하가 가능합니다.")
            _$name.innerHTML = ""
            _$name.value = '';
            _$name.blur();
        }
    })

    _phone.addEventListener('blur', function () {
        if (regphone.test(_phone.value)) {
            _phMes.innerHTML = "correct!"
            _phMes.style.color = "green"
        } else {
            alert("'010'으로 시작하여 '-' 구분없이 번호를 입력해주세요")
            _phone.innerHTML = ""
            _phone.value = '';
            _phone.blur();
        }
    })

    _email.addEventListener('blur', function () {
        if (regemail.test(_email.value)) {
            _eMes.innerHTML = "correct!"
            _eMes.style.color = "green"
        } else {
            if (_email.value == "") {
                eMes.innerHTML = ""
            } else {
                alert("이메일 형식에 맞게 다시 입력해주세요")
                _email.innerHTML = ""
                _email.value = '';
                _email.blur();
            }
        }
    })
    _born.addEventListener('blur', function () {
        if (regborn.test(_born.value)) {
            _bMes.innerHTML = "correct!"
            _bMes.style.color = "green"
        } else {
            if (_born.value == "") {
                bMes.innerHTML = ""
            } else {
                alert("8자리 생년월일을 입력해주세요")
                _born.innerHTML = ""
                _born.value = '';
                _born.blur();
            }
        }
    })

    document.getElementById('_submit').onclick = function () {
        if (_$name.value == "") {
            alert("이름을 입력해주세요")
            return false
        } else {
            if (!regid.test(_idArea.value)) {
                alert('아이디를 입력해주세요')
                _idArea.value = "";
                return false
            } else {
                if (_pwArea.value == "") {
                    alert("비밀번호를 입력해주세요")
                    return false
                } else {
                    if (_pwArea.value != _pwArea2.value) {
                        alert('비밀번호가 일치하지 않습니다.')
                        return false
                    } else {
                        if (_idArea.value == "") {
                            alert("아이디를 입력해주세요")
                            return false
                        } else {
                            if (_phone.value == "") {
                                alert("번호를 입력해주세요")
                                return false
                            } else {
                                if (_email.value == "") {
                                    alert("이메일을 입력해주세요")
                                    return false
                                } else {
                                    if (_born.value == "") {
                                        alert("생년월일을 입력해주세요")
                                        return false
                                    } else {
                                        if (document.querySelector('[name=_gender]:checked') == null) {
                                            _gMes.style.color = 'red'
                                            _gMes.innerHTML = '성별을 체크해주세요'
                                            document.querySelector('#female').focus();
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
    };
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