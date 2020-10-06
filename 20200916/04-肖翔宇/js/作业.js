// 获取DOM元素
var txtMin = document.querySelector("#txtMin");
var txtMax = document.querySelector("#txtMax");
var btnPriceSearch = document.querySelector("#btnPriceSearch");
var btnNameSearch = document.querySelector("#btnNameSearch");
var table = document.querySelector("table");
var tbody = document.querySelector("#tbody");

// 数组存放手机对象
var phones = [];

// 手机类
class Phone {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    phones.push(this);
  }
}

// 手机对象
var mi = new Phone(1, "小米", 3999);
var oppo = new Phone(2, "oppo", 999);
var honor = new Phone(3, "荣耀", 1299);
var huaweip20 = new Phone(4, "华为P20", 2999);
var huaweip30 = new Phone(5, "华为P30", 3999);

// 窗口加载时把数据拼串作为tbody的innerHTML
window.onload = function () {
  addInPage(phones);
};

// 按照价格查询按钮点击事件
btnPriceSearch.onclick = function () {
  if (!txtMax.value.trim() || !txtMin.value.trim()) {
    alert("请检查输入");
    return;
  }
  // addInPage();
  var relArr = [];
  var min = Number(txtMin.value.trim());
  var max = Number(txtMax.value.trim());
  for (var i = 0; i < phones.length; i++) {
    relArr.push([phones[i].id, phones[i].name, phones[i].price]);
  }
  relArr = relArr.filter(function (value, index, arr) {
    return value[2] >= min && value[2] <= max;
  });
  console.log(relArr);
  addInPage(relArr, "按照价格查询");
};

// 按照商品名称查询按钮点击事件
btnNameSearch.onclick = function () {
  var userStr = txtName.value.trim();
  if (!userStr) {
    alert("请输入商品名称");
    addInPage(phones);
    return;
  }
  var relArr = [];
  console.log(phones);
  console.log(userStr);
  for (var i = 0; i < phones.length; i++) {
    relArr.push([phones[i].id, phones[i].name, phones[i].price]);
  }
  relArr = relArr.filter(function (value, index, arr) {
    return value[1].includes(userStr);
  });
  addInPage(relArr, '按照商品名称查询');
};

// 拼串把传入数组的数据加入至页面
// 如果没有传参或传入数组长度为0, 则直接返回
function addInPage(arr) {
  if (!arr || arr.length == 0) {
    alert("没有查询到, 请检查输入内容");
    return;
  }
  if (arguments[1]) {
    var relStr = "";
    for (var i = 0; i < arr.length; i++) {
      relStr += "<tr>";
      for (var j = 0; j < arr[i].length; j++) {
        relStr += "<td>" + arr[i][j] + "</td>";
      }
      tbody.innerHTML = relStr;
    }
    return;
  }
  table.style.display = "table";
  var relStr = "";
  for (var i = 0; i < arr.length; i++) {
    relStr +=
      "<tr><td>" +
      arr[i].id +
      "</td>" +
      "<td>" +
      arr[i].name +
      "</td>" +
      "<td>" +
      arr[i].price +
      "</td></tr>";
  }
  tbody.innerHTML = relStr;
}
