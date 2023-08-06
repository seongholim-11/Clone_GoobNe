# 🐓 Clone_GoobNe

굽네 치킨 웹사이트를 Redesign하여 제작한 웹페이지입니다.
<br>
<br>


## 🖥️ 프로젝트 소개

 굽네치킨 홈페이지를 기반으로 한 interactive한 웹페이지를 만들기 위해 jQuery와 slick slider 라이브러리를 사용하여 동적인 요소를 다루었고, IntersectionObserver 함수를 활용하여 스크롤에 따라 변화하는 효과를 구현했습니다. 또한, 반응형 웹으로 제작하여 다양한 디바이스에서 일관된 사용자 경험을 제공하였습니다. 사용자들에게 재미있고 편리한 웹 경험을 제공하기 위해 다양한 기술과 라이브러리를 적절히 활용했습니다.
<br/>

<!-- <img width="100%" src="./img/kinfa.gif"/> -->
<br>

<br/>

## 🕰️ 개발 기간

-   23.06.06 - 23.06.20 (14일)
<br>


## ⚙️ 개발 환경

-   `HTML5`
-   `CSS3`
-   `JavaScript (ECMAScript 2022)`
-   `Jquery 2.2.4`
-   `slick`
-   `IDE : VScode 1.80`
-   `ETC : Github / Mac Os 환경에서 개발`
-   `DEPLOY : Github.io`
<br>

## 📁 파일 / 폴더 구조

<!-- <img width="100%" src="./img/kinfafolder.PNG"/> -->

<!-- #### 📂 CSS
- 메인, 서브 페이지에 대한 CSS 파일을 모아둔 폴더입니다.
#### 📂 IMG
- 메인, 서브 페이지의 이미지 소스를 모아둔 폴더입니다.
#### 📂 JS
- 모든 페이지에 대한 JS 파일을 담아둔 폴더입니다.
#### 📂SUB
- 서브 페이지에 대한 HTML 파일을 모아둔 폴더입니다.
#### 📂 INDEX.HTML
- 메인 페이지에 대한 HTML 파일입니다.
<br> -->

## 💻 Release History
* 0.0.1 (23.06.20)
    * first release
<br>

## 📌 주요 기능

#### Drop 메뉴바

-   window 객체의 onscroll 함수를 사용하여 Nav 바의 높이보다 스크롤을 많이 하게 되면 Nav바가 drop되게 제작하였습니다.

#### 사이드 메뉴바

-   Jquery의 class 관련 함수들과 slide 관련 함수를 활용하여 사이드 메뉴바를 제작하였습니다.

#### 회원가입 모달창

-   display: none / block 을 통해 모달창을 구현하였습니다.
-   정규식을 사용하여 잘못된 입력 값을 판별하고 그 내용을 사용자에게 알릴 수 있도록 구현하였습니다.

#### 메인 배너 슬라이더

-   slick 라이브러리를 활용하여 slide를 구현하였습니다.
-   dot, infinite, autoplay 등 부가기능을 추가하였습니다.

#### 탭 메뉴

-   클릭된 탭 메뉴의 index에 맞는 이미지가 출력되는 방식으로 뉴스 섹션을 구현하였습니다.

#### IntersectionObserver 스크롤 이벤트

-   IntersectionObserver() 함수를 통해 해당 요소를 감시하여 그 요소가 화면 안으로 들어왔는지 인식하고, 인식이 된다면 CSS의 transform 효과를 주어 동적인 웹페이지를 구현하였습니다.

#### Infinity slider

-   setInterval() 함수를 통해 일정 시간마다 slide 전체를 움직이게 구현하였습니다.
-   slide 마지막 요소 끝에 첫 요소를 insertAfter해서 slide가 계속 이어질 수 있도록 제작하였습니다.

