$(function () {
  /*=================================================
  画面に表示されたタイミングで処理を実行
  ===================================================*/

$(window).scroll(function () {
    $(".flow").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("flow");
      }
    });
  });


});