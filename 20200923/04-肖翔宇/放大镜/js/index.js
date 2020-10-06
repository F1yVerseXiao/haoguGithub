$("#small").hover(
  function () {
    $("#big, #mask").css({
      display: "block",
    });
    $(this).mousemove(function (e) {
      // 鼠标在小盒子内的位置
      var mouseInSmallX = e.clientX - $(this).offset().left;
      var mouseInSmallY = e.clientY - $(this).offset().top;
      // 获取蒙版最大最小移动距离
      var smallMoveX = mouseInSmallX - $("#mask").width() / 2;
      smallMoveX =
        smallMoveX >= $(this).width() - $("#mask").width()
          ? $(this).width() - $("#mask").width()
          : smallMoveX;
      smallMoveX = smallMoveX <= 0 ? 0 : smallMoveX;
      var smallMoveY = mouseInSmallY - $("#mask").height() / 2;
      smallMoveY =
        smallMoveY >= $(this).height() - $("#mask").height()
          ? $(this).height() - $("#mask").height()
          : smallMoveY;
      smallMoveY = smallMoveY <= 0 ? 0 : smallMoveY;
      //移动小盒子
      $("#mask").css({
        left: smallMoveX + "px",
        top: smallMoveY + "px",
      });

      // 获取比例并付给大盒子
      // 负的(蒙版目前的移动距离 / 蒙版的最大移动距离) * (大图片的宽高 - 大盒子的宽高)
      $("#big > img").css({
        left:
          -(smallMoveX / ($("#small").width() - $("#mask").width())) *
            ($("#big > img").width() - $("#big").width()) +
          "px",
        top:
          -(smallMoveY / ($("#small").height() - $("#mask").height())) *
            ($("#big > img").height() - $("#big").height()) +
          "px",
      });
    });
  },
  function () {
    $("#big, #mask").css({
      display: "none",
    });
  }
);
