$(function () {
    //获取元素
    var allCheckbox = $('input[type="checkbox"]'); //获取所有的复选框
    var wholeCheckbox = $(".whole-check");   //获取全选按钮
    var cartBox = $(".cart-box")
    console.log(allCheckbox.length);
    // 点击全选按钮
    wholeCheckbox.click(function () {
        var checkboxs = cartBox.find('input[type="checkbox"]')
        if ($(this).is(":checked")) {
            $(".whole-check").prop("checked", true)
            $(".whole-check").next("label").addClass("active")
            checkboxs.next("label").addClass("active")
        } else {
            $(".whole-check").prop("checked", false)
            $(".whole-check").next("label").removeClass("active")
            checkboxs.next("label").removeClass("active")
        }
    })
})