// 준비 이벤트(html 코드를 다읽고 나서 실행해줘)
// $(document).ready(function(){}) 축약형은 아래꺼

$(function () {
  // modal
  // .lst-bbs li:first-child를 클릭했을때
  $(".lst-bbs li:first-child").click(function (e) {
    // a태그의 링크 값 없애기
    e.preventDefault();
    console.log("dddddd");
    // #아이디값이 modal을 찾아서 display: flex 변경해줘
    $("#modal").css("display", "flex");
    // 이방법을 써도 된데 $("#modal").show();
  });

  // .modal-box .btn-close를 클릭했을때.
  $(".modal-box .btn-close").on("click focus", function () {
    // #modal을 안보이게 해줘
    $("#modal").hide();
  });
});