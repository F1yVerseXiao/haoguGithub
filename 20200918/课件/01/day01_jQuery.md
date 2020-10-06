## 1.1. jQuery 介绍

### 1.1.1 JavaScript 库

	JavaScript库：即 library，是一个封装好的特定的集合（方法和函数）。从封装一大堆函数的角度理解库，就是在这个库中，封装了很多预先定义好的函数在里面，比如动画animate、hide、show，比如获取元素等。

> 简单理解： 就是一个JS 文件，里面对我们原生js代码进行了封装，存放到里面。这样我们可以快速高效的使用这些封装好的功能了。
>
> 比如 jQuery，就是为了快速方便的操作DOM，里面基本都是函数（方法）。

### 1.1.2 jQuery的概念

	jQuery总体概况如下 :

- jQuery 是一个快速、简洁的 JavaScript 库，其设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。

- j 就是 JavaScript；   Query 查询； 意思就是查询js，把js中的DOM操作做了封装，我们可以快速的查询使用里面的功能。

- jQuery 封装了 JavaScript 常用的功能代码，优化了 DOM 操作、事件处理、动画设计和 Ajax 交互。

- 学习jQuery本质： 就是学习调用这些函数（方法）。

- jQuery 出现的目的是加快前端人员的开发速度，我们可以非常方便的调用和使用它，从而提高开发效率。

  ![jQuery概述](images/jQuery概述.jpg)

### 1.1.3 jQuery的优点

1. 轻量级。核心文件才几十kb，不会影响页面加载速度。
2. 跨浏览器兼容，基本兼容了现在主流的浏览器。
3. 链式编程、隐式迭代。
4. 对事件、样式、动画支持，大大简化了DOM操作。
5. 支持插件扩展开发。有着丰富的第三方的插件，例如：树形菜单、日期控件、轮播图等。
6. 免费、开源。

## 1.2. jQuery 的基本使用

### 1.2.1 jQuery 的下载

	jQuery的官网地址： https://jquery.com/，官网即可下载最新版本。

>  各个版本的下载：https://code.jquery.com/

	版本介绍：

> 1x ：兼容 IE 678 等低版本浏览器， 官网不再更新
>
> 2x ：不兼容 IE 678 等低版本浏览器， 官网不再更新
>
> 3x ：不兼容 IE 678 等低版本浏览器， 是官方主要更新维护的版本

### 1.2.2  引入方式
步骤：

- 引入jQuery文件。
- 在文档最末尾插入 script 标签。
```html
<!DOCTYPE html>
<html>
<head>
<title> Using jQuery </title>
</head>
<body>
<p>I'm a paragraph</p>

<!-- 从百度的CDN获取jQuery -->
<script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>

<!-- 如果CDN不可用，到自己的服务获取jQuery -->
<script>window.jQuery || document.write('<script src="./js/jquery.min.js"></script>');</script>
</body>
</html>
```
### 1.2.3 使用CDN（Content Delivery Network）改善性能
  **可用的CDN服务器如下：**
  jQuery官方提供的CDN：https://code.jquery.com/jquery-3.4.1.js
  ![](images\使用CDN.png)

### 1.2.4 jQuery中的顶级对象$

1.  \$是 jQuery 的别称，在代码中可以使用 jQuery 代替，但一般为了方便，通常都直接使用 $ 。
2.  \$是jQuery的顶级对象，相当于原生JavaScript中的 window。把元素利用$包装成jQuery对象，就可以调用jQuery 的方法。

### 1.2.5 jQuery的入口函数
	jQuery中常见的两种入口函数：

```javascript
// 第一种: 简单易用。
$(function () {   
    ...  // 此处是页面 DOM 加载完成的入口
}) ; 

// 第二种: 繁琐，但是也可以实现
$(document).ready(function(){
   ...  //  此处是页面DOM加载完成的入口
});
```

	总结：

1. 等着 DOM 结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery 帮我们完成了封装。
2. 相当于原生 js 中的 DOMContentLoaded。
3. 不同于原生 js 中的 load 事件是等页面文档、外部的 js 文件、css文件、图片加载完毕才执行内部代码。
4. 更推荐使用第一种方式。

### 1.2.6  jQuery 对象和 DOM 对象

	使用 jQuery 方法和原生JS获取的元素是不一样的，总结如下 : 

1. 用原生 JS 获取来的对象就是 DOM 对象
2. jQuery 方法获取的元素就是 jQuery 对象。
3. jQuery 对象本质是： 利用$对DOM 对象包装后产生的对象（伪数组形式存储）。

> 注意：
>
> 只有 jQuery 对象才能使用 jQuery 方法，DOM 对象则使用原生的 JavaScirpt 方法。

![jQuery对象和DOM对象](images/jQuery对象和DOM对象.png)

### 1.2.7  jQuery 对象和 DOM 对象转换

	DOM 对象与 jQuery 对象之间是可以相互转换的。因为原生js 比 jQuery 更大，原生的一些属性和方法 jQuery没有给我们封装. 要想使用这些属性和方法需要把jQuery对象转换为DOM对象才能使用。

```javascript
// 1.DOM对象转换成jQuery对象，方法只有一种
var box = document.getElementById('box');  // 获取DOM对象
var jQueryObject = $(box);  // 把DOM对象转换为 jQuery 对象

// 2.jQuery 对象转换为 DOM 对象有两种方法：
//   2.1 jQuery对象[索引值]
var domObject1 = $('div')[0]

//   2.2 jQuery对象.get(索引值)
var domObject2 = $('div').get(0)
 
```

总结：实际开发比较常用的是把DOM对象转换为jQuery对象，这样能够调用功能更加强大的jQuery中的方法。

## 1.3. jQuery 选择器

	原生 JS 获取元素方式很多，很杂，而且兼容性情况不一致，因此 jQuery 给我们做了封装，使获取元素统一标准。

### 1.3.1 基础选择器

```js
$("选择器")   //  里面选择器直接写 CSS 选择器即可，但是要加引号 
```

选择器     |示例         |说明
-----------|-------------|---------------------------------------
全局选择器 |`$('*')     `|选择所有元素
标签选择器 |`$('p')     `|选择所有的`p`元素
ID选择器   |`$('#top')  `|选择所有`id`属性值为`top`的元素
Class选择  |`$('.box')  `|选择所有`class`属性值中包含`box`类名的元素
并集选择器 |`$('div, p')`|选择所有的`div`元素和`p`元素(相当于css的并集选择器)
并集选择器 |`$('li.active')`|选择li元素并且类名为active的元素(交集选择器)

### 1.3.2 层级选择器

层级选择器最常用的两个分别为：后代选择器和子代选择器。
| 选择器                 | 示例           | 说明                                     |
| ---------------------- | -------------- | ---------------------------------------- |
| 子代选择器             | `$('div > p')` | 选择作为`div`元素子元素的所有`p`元素     |
| 后代选择器             | `$('div p')`   | 选择作为`div`后代的所有`p`元素           |
| 相邻选择器（同级兄弟） | `$('div + p')` | 选择紧邻`div`元素且位于其后的`p`元素     |
| 兄弟选择器             | `$('div ~ p')` | 选择作为`div`元素且位于其后的所有`p`元素 |

**基础选择器和层级选择器案例代码**

```javascript
<body>
    <div>我是div</div>
    <div class="nav">我是nav div</div>
    <p>我是p</p>
    <ul>
        <li>我是ul 的</li>
        <li>我是ul 的</li>        
        <li>我是ul 的</li>
    </ul>
    <script>
        $(function() {
            console.log($(".nav"));
            console.log($("ul li"));
        })
    </script>
</body>
```

### 1.3.3 筛选选择器

筛选选择器，顾名思义就是在所有的选项中选择满足条件的进行筛选选择。常见如下 :
| 选择器   | 实例          | 描述                                                         |
| -------- | ------------- | :----------------------------------------------------------- |
| `:first` | $('li:first') | 选择上下文匹配的第一个元素。`li a:first`返回列表元素中的第一个a标签 |
| `:last ` | $('li:last')  | 选择上下文匹配的最后一个元素。`li a:last`返回列表元素中的最后一个a标签 |
| `:even ` | $('li:even')  | 选择上下文中的偶数元素。`li:even`选择匹配元素集合中的偶数位的`li`元素（从0开始） |
| `:odd  ` | $('li:odd')   | 选择上下文中的奇数元素。`li:odd`选择匹配元素集合中的奇数位的`li`元素（从0开始） |
| `:eq(n)` | $('li:eq(2)') | 选择第n个匹配元素（从0开始）                                 |
| `:gt(n)` | $('li:gt(2)') | 大于，选择第n个匹配元素之后的元素（排除第n个）               |
| `:lt(n)` | $('li:lt(2)') | 小于，选择第n个匹配元素之前的元素（排除第n个）               |

**案例代码**

```js
<body>
    <ul>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
    </ul>
    <ol>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
    </ol>
    <script>
        $(function() {
            $("ul li:first").css("color", "red");
            $("ul li:eq(2)").css("color", "blue");
            $("ol li:odd").css("color", "skyblue");
            $("ol li:even").css("color", "pink");
        })
    </script>
</body>。
```

## 1.4 根据关系获取集合

| 方法                                  | 示例                          | 描述                                                         |
| ------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| (*selector*).parent(*filter*)         | $('li').parent(); | 返回元素的直接父元素。如果设置选择器，则只会返回匹配选择器的父元素。*filter*可选，规定缩小搜索父元素范围的选择器表达式。 |
| (*selector*).children(*filter*)       | $('ul').children(('li'); | 取得一个包含匹配的元素集合中每一个元素的所有子元素的元素集合。如果设置选择器，则只会返回匹配选择器的子元素。<br />*filter*可选。规定缩小搜索子元素范围的选择器表达式。 |
| (*selector*).find(*filter*)(重点)     | $('div').find(('span'); | 返回元素中匹配选择器的后代元素。<br /><font color='red'>*filter*必需</font>。过滤搜索后代条件的选择器表达式、元素或 jQuery 对象。 |
| (*selector*).prev(*filter*)           | $('.first').prev((); | 返回元素前面的直接兄弟元素。                                 |
| (*selector*).prevAll(*filter*)        | $('.first').prevAll((); | 返回元素前面的所有兄弟元素。                                 |
| (*selector*).next(*filter*)           | $(''.last').next((); | 返回元素后面的直接兄弟元素。                                 |
| (*selector*).nextAll(*filter*)        | $('.last').nextAll((); | 返回元素后面的所有兄弟元素。如果设置选择器，则只会返回匹配选择器的兄弟元素。 |
| (*selector*).siblings(*filter*)(重点) | $('ul').siblings(('li'); | 返回元素前后的所有兄弟元素。如果设置选择器，则只会返回匹配选择器的兄弟元素。 |
| (selector).hasClass(selector)        | $('div').hasClass(('content'); | 检查当前元素是否含有某个特定的类,如有返回true                |
| (*selector*).eq(*index*) | $('li').eq(2); | 返回包含指定索引元素的新集合。参数可以为负数，表示从集合结尾开始计算。 |

```html
  <div class="container">
        <div id="box0" class="box">box0</div>
        <div id="box1" class="box">
          <p>第1个段落</p>
          <p>第2个段落</p>
          <p>第3个段落</p>
          <p>第4个段落</p>
        </div>
        <div id="box2" class="box">
          <p>第5个段落</p>
          <p>第6个段落</p>
          <p>第7个段落</p>
          <p>第8个段落</p>
        </div>
        <div id="box3" class="box">
          <p class="paragraph">第9个段落</p>
          <p class="paragraph">第10个段落</p>
          <p>第<span>11</span>个段落</p>
          <p>第<span>12</span>个段落</p>
        </div>
        <div id="box4" class="box foo">box4</div>
        <div id="box5" class="box foo">box5</div>
        <div id="box6" class="box foo">box6</div>
      </div>
```



## 1.5 补充知识

### 1.5.1  jQuery的事件

下面是 jQuery 中事件方法的一些例子：

```js
  $("button").click(function(){
   事件处理
  });
```

### 1.5.2 操作 css 方法

jQuery 可以使用 css 方法来修改简单元素样式； 也可以操作类，修改多个样式。

常用以下三种形式 : 

```javascript
// 1.参数只写属性名，则是返回属性值
var strColor = $(this).css('color');

// 2.  参数是属性名，属性值，逗号分隔，是设置一组样式，属性必须加引号，值如果是数字可以不用跟单位和引号
$(this).css(''color'', ''red'');

// 3.  参数可以是对象形式，方便设置多组样式。属性名和属性值用冒号隔开， 属性可以不用加引号
$(this).css({ "color":"white","font-size":"20px"});

```

注意：css() 多用于样式少时操作，多了则不太方便。

### 1.5.3 设置类样式方法

	作用等同于以前的 classList，可以操作类样式， 注意操作类里面的参数不要加点。
	
	常用的三种设置类样式方法：

```javascript
// 1.添加类
$("div").addClass("current");

// 2.删除类
$("div").removeClass("current");

// 3.切换类
$("div").toggleClass("current");

```
### 1.5.4 jQuery的编程思想
- 隐式迭代

```javascript
// 遍历内部 DOM 元素（伪数组形式存储）的过程就叫做隐式迭代。
// 简单理解：给匹配到的所有元素进行循环遍历，执行相应的方法，而不用我们再进行循环，简化我们的操作，方便我们调用。
$('div').hide();  // 页面中所有的div全部隐藏，不用循环操作
```

- jQuery 里面的排他思想

```javascript
// 想要多选一的效果，排他思想：当前元素设置样式，其余的兄弟元素清除样式。
$(this).css(“color”,”red”);
$(this).siblings(). css(“color”,””);
```


- 链式编程

```javascript
// 链式编程是为了节省代码量，看起来更优雅。
$(this).css('color', 'red').sibling().css('color', ''); 
```
### 1.5.5 案例：tab 栏切换

> 思路分析: 
> 1.点击上部的li，当前li 添加current类，其余兄弟移除类。
> 2.点击的同时，得到当前li 的索引号
> 3.让下部里面相应索引号的item显示，其余的item隐藏
>
> ![](images\tab.gif)