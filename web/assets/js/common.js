//
//
//****메뉴
//
// 메뉴 열기 버튼 요소 가져오기
const menuOpenButton = document.getElementById("menuButton");

// 메인 메뉴 요소 가져오기
const mainMenu = document.getElementById("mainMenu");

// 언어 열기 버튼 요소 가져오기
const langOpenButton = document.getElementById("langButton");

// 언어 레이어 가져오기
const language = document.getElementById("language");

// 모든 h3 요소의 하위 링크 선택
const h3Links = document.querySelectorAll("nav h3 > a");

// 모든 연결된 ul 요소 선택
const uls = document.querySelectorAll("nav h3 + ul");

// 뷰포트의 너비 가져오기
let viewportWidth = window.innerWidth;

window.addEventListener("resize", function () {
  // 리사이즈 시 뷰포트 너비 업데이트
  viewportWidth = window.innerWidth;
});

// 메뉴 열기 버튼 클릭 시 이벤트 처리
menuOpenButton.addEventListener("click", function () {
  mainMenu.classList.remove("hidden");
  mainMenu.classList.add("block");

  // 모든 ul 요소를 표시
  uls.forEach(function (ul) {
    ul.classList.remove("pc:hidden");
    ul.classList.add("pc:block");
  });
});



// 언어 열기 버튼 클릭 시 이벤트 처리
langOpenButton.addEventListener("click", function () {
  language.classList.toggle("hidden");

});


// 메뉴 닫기 버튼 요소 가져오기
const menuCloseButton = document.getElementById("menuClose");

// 메뉴 닫기 버튼 클릭 시 이벤트 처리
menuCloseButton.addEventListener("click", function () {
  mainMenu.classList.remove("block");
  mainMenu.classList.add("hidden");
});

// 메뉴 이벤트 처리


// 모든 a 태그의 활성화 클래스 제거
function deactivateAllLinks() {
  h3Links.forEach((h3link) => {
    h3link.classList.remove("pc:after:rotate-180"); // 활성화 상태 클래스 제거
  });
}

// 모든 하위 ul 숨기기
function hideAllSubMenus() {
  const subMenus = document.querySelectorAll("nav ul ul");
  subMenus.forEach((ul) => {
    ul.classList.remove("pc:block");
    ul.classList.add("pc:hidden");
  });
}

// h3 > a 클릭 이벤트 처리
h3Links.forEach(function (h3link) {
  h3link.addEventListener("click", function (event) {

    const parentLi = h3link.closest("li"); // 클릭된 a의 li 부모 찾기
    const ul = parentLi.querySelector("ul"); // li 아래 ul 찾기
    const isCurrentlyActive = h3link.classList.contains("active");

    if(ul) {
      event.preventDefault(); // 기본 동작 방지 (예: 링크 이동)
    }

    // 모든 메뉴와 링크 초기화
    deactivateAllLinks();
    hideAllSubMenus();

    if (ul && !isCurrentlyActive) {
      // 현재 클릭된 메뉴만 활성화
      ul.classList.remove("pc:hidden");
      ul.classList.add("pc:block");
      h3link.classList.add("pc:after:rotate-180"); // a 태그에 활성화 클래스 추가
    }
  });
});

// 문서의 빈 공간 클릭 시 모든 메뉴 닫기
document.addEventListener("click", function (event) {
  const clickedInsideMenu = event.target.closest("nav");
  if (!clickedInsideMenu) {
    deactivateAllLinks(); // 모든 a 태그 비활성화
    hideAllSubMenus(); // 모든 하위 메뉴 닫기
  }
});



const swiper = new Swiper(".main-swiper", {
  speed: 3000,
  spaceBetween: 0,
  effect: "fade",
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 5000,
  },
});

const swiper2 = new Swiper(".solution-swiper", {
  speed: 5000,
  spaceBetween: 30,
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 1,
  },

  breakpoints: {
    1200: {
      spaceBetween: 90,
    },
  },

  
});


document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".swiper2-button-pause")?.addEventListener("click", function() {
    swiper2.autoplay.stop();
    this.style.display = "none";
    document.querySelector(".swiper2-button-play").style.display = "block";
  });

  document.querySelector(".swiper2-button-play")?.addEventListener("click", function() {
    swiper2.autoplay.start();
    this.style.display = "none";
    document.querySelector(".swiper2-button-pause").style.display = "block";
  });
});


const swiper3 = new Swiper(".skil-swiper", {
  speed: 5000,
  spaceBetween: 30,
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 1,
  },

  breakpoints: {
    1200: {
      spaceBetween: 90,
    },
  },

  
});




const swiper4 = new Swiper(".intro-swiper", {
  speed: 1000,
  spaceBetween: 10,
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    1200: {
      spaceBetween: 90,
    },
  },

  pagination: {
    el: ".intro-pagination",
  },
  
});




document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".swiper3-button-pause")?.addEventListener("click", function() {
    swiper3.autoplay.stop();
    this.style.display = "none";
    document.querySelector(".swiper3-button-play").style.display = "block";
  });

  document.querySelector(".swiper3-button-play")?.addEventListener("click", function() {
    swiper3.autoplay.start();
    this.style.display = "none";
    document.querySelector(".swiper3-button-pause").style.display = "block";
  });
});





document.addEventListener("DOMContentLoaded", () => {
  const parent = document.querySelector('.floatingOutline');
  const boxes = document.querySelectorAll('.floatingBox');

  if (parent && boxes.length > 0) {
    const parentWidth = parent.offsetWidth + 300;
    const parentHeight = parent.offsetHeight + 300;

    const boxStates = Array.from(boxes).map(() => ({
      posX: Math.random() * parentWidth - 150,
      posY: Math.random() * parentHeight - 150,
      speedX: (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1),
      speedY: (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1),
    }));

    function moveBoxes() {
      boxes.forEach((box, index) => {
        const state = boxStates[index];

        state.posX += state.speedX;
        state.posY += state.speedY;

        if (state.posX <= -150 || state.posX >= parentWidth - 150 - box.offsetWidth) {
          state.speedX *= -1;
        }
        if (state.posY <= -150 || state.posY >= parentHeight - 150 - box.offsetHeight) {
          state.speedY *= -1;
        }

        box.style.left = `${state.posX}px`;
        box.style.top = `${state.posY}px`;
      });

      requestAnimationFrame(moveBoxes);
    }

    moveBoxes();
  } else {

  }
});





document.addEventListener("DOMContentLoaded", function() {
  function jobBox() {
    const container = document.querySelector('.icon-container');
    const icons = document.querySelectorAll('.icon');

    if (icons.length >= 3) { // 아이콘이 3개 이상 존재할 경우에만 실행
      let currentIndex = 0;
      let lastWindowWidth = window.innerWidth;

      function highlightIcons(isMobile) {
        // 모든 아이콘에서 강조 제거
        icons.forEach(icon => {
          icon.classList.remove('scale-100');
          icon.classList.add('scale-50');
          icon.querySelector('p').classList.remove('opacity-100');
          icon.querySelector('p').classList.add('opacity-0');
        });

        if (isMobile) {
          // 모바일 동작: 세로 회전
          let topIndex = (currentIndex + 2) % 3;
          let centerIndex = currentIndex;
          let bottomIndex = (currentIndex + 1) % 3;

          icons[topIndex].style.left = '50%';
          icons[centerIndex].style.left = '50%';
          icons[bottomIndex].style.left = '50%';

          icons[topIndex].style.marginLeft = '';
          icons[centerIndex].style.marginLeft = '';
          icons[bottomIndex].style.marginLeft = '';

          icons[topIndex].style.top = '0';
          icons[centerIndex].style.top = '240px';
          icons[bottomIndex].style.top = '560px';

          icons[centerIndex].classList.remove('scale-50');
          icons[centerIndex].classList.add('scale-100');
          icons[centerIndex].querySelector('p').classList.remove('opacity-0');
          icons[centerIndex].querySelector('p').classList.add('opacity-100');
        } else {
          // 데스크탑 동작: 가로 회전
          let leftIndex = (currentIndex + 2) % 3;
          let centerIndex = currentIndex;
          let rightIndex = (currentIndex + 1) % 3;

          icons[leftIndex].style.left = '50%';
          icons[centerIndex].style.left = '50%';
          icons[rightIndex].style.left = '50%';

          icons[leftIndex].style.marginLeft = '-390px';
          icons[centerIndex].style.marginLeft = '';
          icons[rightIndex].style.marginLeft = '390px';

          icons[leftIndex].style.top = '80px';
          icons[centerIndex].style.top = '80px';
          icons[rightIndex].style.top = '80px';

          icons[centerIndex].classList.remove('scale-50');
          icons[centerIndex].classList.add('scale-100');
          icons[centerIndex].querySelector('p').classList.remove('opacity-0');
          icons[centerIndex].querySelector('p').classList.add('opacity-100');
        }
        currentIndex = (currentIndex + 1) % 3;
      }

      function updateLayout() {
        const isMobile = window.innerWidth <= 1199;
        highlightIcons(isMobile);
      }

      function checkWidthChange() {
        const currentWidth = window.innerWidth;
        if (currentWidth !== lastWindowWidth) {
          lastWindowWidth = currentWidth;
          updateLayout();
        }
      }

      // 초기 레이아웃 설정
      updateLayout();

      // 4초마다 애니메이션 반복
      setInterval(() => {
        updateLayout();
      }, 4000);

      // 너비 변경 시 레이아웃 업데이트
      window.addEventListener('resize', checkWidthChange);

    } else {
      
    }
  }

  jobBox();
});
