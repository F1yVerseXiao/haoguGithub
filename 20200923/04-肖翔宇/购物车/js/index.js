$("[type='checkbox']").click(function () {
  console.log($(this));
});

$(function () {
  calculateAll();
});



// 真 · 全选点击函数
$("#ckbAll").click(function () {
  if ($("[type='checkbox']").prop("checked") == true) {
    $("[type='checkbox']").prop({
      checked: true,
    });
  } else {
    $("[type='checkbox']").prop({
      checked: false,
    });
  }
  calculateAll();
});

// 真 · 计算总价函数
function calculateAll() {
  var totalPrice = 0;
  $(".subTotal").each(function (a) {
    totalPrice += Number($(".subTotal").eq(a).text());
  });
  $("#totalPrice").val(totalPrice);
}
