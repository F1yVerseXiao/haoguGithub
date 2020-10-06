// $(window).scroll(function () {
//   // 页面被卷进上方的距离
//   // $(window).scrollTop()
//   if ($(window).scrollTop() >= 300) {
//     $("#aside, #top").off().fadeIn();
//   } else {
//     $("#aside, #top").off().fadeOut();
//   }
//   // 浏览器的可视高度 + 文档被卷去的距离 - 楼层距离文档顶部的距离  >  浏览器高度的一半
//   $(".main").each(function (index) {
//     if (
//       $(window).height() + $(window).scrollTop() - $(this).offset().top >
//       $(window).height()
//     ) {
//       $(".aside")
//         .eq(index + 1)
//         .addClass("active")
//         .siblings()
//         .removeClass("active");
//     }
//     $(this).click(function () {
//       $("html, body").animate({
//         scrollTop: 0,
//       });
//     });
//   });
// });

$(window).scroll(function () {
  if ($(window).scrollTop() >= 300) {
    $(".headerc, .aside").fadeIn();
  } else {
    $(".headerc, .aside").fadeOut();
  }

  // 浏览器的可视高度 + 文档被卷去的距离 - 楼层距离文档顶部的距离  >  浏览器高度的一半

  $(".floor").each(function (index) {
    if (
      $(window).height() + $(window).scrollTop() - $(this).offset().top >
      $(window).height() / 2
    ) {
      $(".aside li")
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
  });
});
$(".aside li")
  .not(".gotop")
  .click(function () {
    $("body, html").animate(
      {
        scrollTop: $(".floor").eq($(this).index()).offset().top - 100,
      },
      "fast"
    );
  });
$(".gotop").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    "fast"
  );
});
