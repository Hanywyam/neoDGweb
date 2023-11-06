var idx_lgth = $("#wrapper>div").length;
var srt = 1;

$("section>a").click(function () {
  var idx = $(this).index();
  srt = idx;
  $(this).addClass("on").siblings().removeClass("on");
  $("#wrapper>div").eq(idx).addClass("on").siblings().removeClass("on");
});

setInterval(AutoRun, 3000);

function AutoRun() {
  if (srt == idx_lgth) {
    srt = 0;
  }
  $("section>a").eq(srt).addClass("on").siblings().removeClass("on");
  $("#wrapper>div").eq(srt).addClass("on").siblings().removeClass("on");
  srt++;
}

// 640 이상일때

const wrapper = document.getElementById("wrapImg");
const swiper = document.getElementById("wrapper");
let left_wrap = wrapper.getBoundingClientRect().left;
let hei = wrapper.offsetHeight;
let len = swiper.children.length;
let ul_wid = hei * len;
let per = hei / (window.innerHeight / 20);
let pos = {
  prev: 0,
  now: 0,
  ul: 0,
};
let order;

wrapper.addEventListener("touchmove", startSlider, false);
wrapper.addEventListener("touchend", adjustSlider, false);

function startSlider(e) {
  e = e || window.event;
  e.preventDefault();
  // console.log(e.changedTouches[0]);
  pos.prev = e.changedTouches[0].clientX - left_wrap;
  if (pos.prev > pos.now) {
    // console.log('오른쪽으로');
    pos.ul += per;
  } else {
    // console.log('왼쪽으로');
    pos.ul -= per;
  }
  moveSlider();
  pos.now = pos.prev;
}

function moveSlider() {
  const minTranslateX = -750;
  if (pos.ul > 0) {
    pos.ul = 0;
  }
  if (pos.ul < -(ul_wid - hei)) {
    pos.ul = -(ul_wid - hei);
  }
  if (pos.ul < minTranslateX) {
    pos.ul = minTranslateX;
  }
  swiper.style.transform = `translateX(${pos.ul}px)`;
}

function adjustSlider() {
  order = Math.round(pos.ul / hei);
  pos.ul = order * hei;
  swiper.style.transform = `translateX(${pos.ul}px)`;
}
