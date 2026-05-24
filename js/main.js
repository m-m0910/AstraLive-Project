$(function () {
  /*=================================================
  画面に表示されたタイミングで処理を実行
  ===================================================*/

  $(window).scroll(function () {
    $(".flowlist").each(function () {
      console.log("スクロール");

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("slide");
      }
    });

    // concept-textクラスに対して順に処理を行う
    $(".fade-up").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // concept-textクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 100) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

      $(".slide-left").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // concept-textクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 100) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateX(0)");
      }
    });
  });

$(window).on("scroll load",function () {    // concept-textクラスに対して順に処理を行う
    $(".zoom-in").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // concept-textクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 100) {
        $(this).css("opacity", "1");
        $(this).css("transform", "scale(1.5)");
      }
    });
  });
});

$(".count-text") .on("input",function(){
  let textLength = $(this).val().length;

$(this)
      .siblings(".count")
      .text(textLength + "/500字");

});

$(function () {

  $(".btn").on("click", function () {

    localStorage.setItem(
      "realName",
      $("#real-name").val()
    );

    localStorage.setItem(
      "realNameKana",
      $("#real-name-kana").val()
    );

    localStorage.setItem(
      "age",
      $("#age").val()
    );

    localStorage.setItem(
      "mail",
      $("#mail").val()
    );

    localStorage.setItem(
      "number",
      $("#number").val()
    );

    localStorage.setItem(
      "reason",
      $("#reason").val()
    );

    localStorage.setItem(
      "game",
      $("#game").val()
    );

    localStorage.setItem(
      "plan",
      $("#plan").val()
    );

    localStorage.setItem(
      "appeal",
      $("#appeal").val()
    );

    localStorage.setItem(
      "gender",
      $('input[name="gender"]:checked')
        .parent()
        .text()
        .trim()
    );

  });

});