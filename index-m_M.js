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
