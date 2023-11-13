/* main5: contact us 
-----------------------------*/
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
 ----------------------------- */

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
