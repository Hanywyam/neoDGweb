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