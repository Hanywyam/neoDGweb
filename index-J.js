/* main5: contact us 
-----------------------------*/
// main5: 인풋에 값 입력 후 글자색(#fff) 유지
const inputs = document.querySelectorAll("type[contact]");
console.log(inputs);
/* 
inputs.blur((e) => {
  e.target.css("color", "#fff");
}) */

// main5: submit 버튼 내용이 없으면 alert('필수 내용을 입력해주세요.');

const submitBtn = document.querySelector(".ctt-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("user-name").value;
  const emailInput = document.getElementById("user-email").value;
  const shareInput = document.getElementById("user-share").value;

  if (nameInput === "" || emailInput === "" || shareInput === "") {
    alert("내용을 입력해주세요.");
    return false;
  } else {
    alert("내용이 전송되었습니다.");
    return true;
  }
});

/* header: 메뉴바 보이기
 -----------------------------

const menuIcon = document.querySelector(".mouse-over-label");
const menu = document.querySelectorAll(".menubars");
const menuLi = document.querySelectorAll(".menubars li");
const globalMenuA = document.querySelectorAll(".menubars a");

// 해당 박스로 부드러운 이동
globalMenuA.forEach((item, idx) => {
  item.addEventListener("click", (evt) => {
    evt.preventDefault();

    const boxes = document.querySelectorAll("href[#]");
    const getBox = boxes[idx].offsetTop;
    scrollTo({
      top: getBox,
      behavior: "smooth",
    });
  });
});

// 모바일 토글 버튼
menuIcon.addEventListener("click", (evt) => {
  const target = evt.currentTarget;

  // target.classList.toggle("close-icon");
  menu.classList.toggle("menuOn");

  menuLi.forEach((li) => {
    li.addEventListener("click", () => {
      // target.classList.remove("close-icon");
      menu.classList.remove("menuOn");
    });
  });
});
*/

const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menubars");
const menuLi = document.querySelectorAll(".menubars li");
const globalMenuA = document.querySelectorAll(".menubars a");

globalMenuA.forEach((item, idx) => {
  item.addEventListener("click", (evt) => {
    evt.preventDefault();

    const targetId = item.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const getBox = targetElement.offsetTop;
      window.scrollTo({
        top: getBox,
        behavior: "smooth",
      });
    }
  });
});

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("menuOn");

  menuLi.forEach((li) => {
    li.addEventListener("click", () => {
      menu.classList.remove("menuOn");
    });
  });
});

/* main2: our solution ==> 위치값이 정확하지 않아서 적용 안됨 ㅠ
-----------------------------
const ani5 = gsap.timeline();
ani5.from(".solution-wrap1 h5", { y: 30, autoAlpha: 0 })
.from(".solution-wrap2 h3", { y: 30, autoAlpha: 0 });

ScrollTrigger.create({
animation: ani5,
trigger: ".solution-container",
start: "top top",
end: "+=2500",
scrub: true,
anticipatePin: 1,
// markers: true,
});

const ani6 = gsap.timeline();
ani6.

ScrollTrigger.create({
animation: ani6,
trigger: ".solution-wrap2",
start: "top top",
end: "+=2500",
scrub: true,
anticipatePin: 1,
// markers: true,
});
*/
