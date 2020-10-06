## 一.Bootstrap 介绍

### 1.1Bootstrap 概述

	Bootstrap 是由 Twitter公司(非官方中文惯称：推特,全球最大的微博)的设计师Mark Otto和Jacob Thornton合作基于HTML、CSS、JavaScript 开发的简洁、直观、强悍的前端开发框架，使得 Web 开发更加快捷。Bootstrap提供了优雅的HTML和CSS规范，它即是由动态CSS语言Less写成。
	
	2010年6 月，Twitter内部的工程师为了解决前端开发任务中的协作统一问题。经历各种方案后，Bootstrap 最终被确定下来，并于 2011 年 8 月发布。经过很长时间的迭代升级，由最初的 CSS 驱动项目发展成为内置很多 JavaScript 插件和图标的多功能 Web 前端的开源框架。
	
	Bootstrap 最为重要的部分就是它的响应式布局，通过这种布局可以兼容 PC 端、PAD 以及手机移动端的页面访问。

### 1.2Bootstrap 特点

	Bootstrap 非常流行，得益于它非常实用的功能和特点。主要核心功能特点如下：
	(1).跨设备、跨浏览器
	可以兼容所有现代浏览器，包括比较诟病的 IE7、8。当然，本课程不再考虑 IE9 以下浏览器。
	(2).响应式布局
	不但可以支持 PC 端的各种分辨率的显示，还支持移动端 PAD、手机等屏幕的响应式切换显示。
	(3).提供的全面的组件
	Bootstrap 提供了实用性很强的组件，包括：导航、标签、工具条、按钮等一系列组件，方便开发者调用。
	(4).内置 jQuery 插件
	Bootstrap 提供了很多实用性的 jquery 插件，这些插件方便开发者实现 Web 中各种常规特效。
	(5).支持 HTML5、CSS3
	HTML5 语义化标签和 CSS3 属性，都得到很好的支持。
	(6).支持 LESS 动态样式
	LESS 使用变量、嵌套、操作混合编码，编写更快、更灵活的 CSS。它和 Bootstrap 能很好的配合开发。

### 1.3Bootstrap 结构

首先，想要了解 Boostrap 的文档结构，需要在[官网](https://v3.bootcss.com/)先把它下载到本地。解压后，目录呈现这样的结构：

```
bootstrap/
├── css/
	│├── bootstrap.css
	│├── bootstrap.css.map
	│├── bootstrap.min.css
	│├── bootstrap-theme.css
	│├── bootstrap-theme.css.map
	│└── bootstrap-theme.min.css
├── js/
	│├── bootstrap.js
	│└── bootstrap.min.js
└── fonts/
	├── glyphicons-halflings-regular.eot
	├── glyphicons-halflings-regular.svg
	├── glyphicons-halflings-regular.ttf
	├── glyphicons-halflings-regular.woff
	└── glyphicons-halflings-regular.woff2
```



主要分为三大核心目录：css(样式)、js(脚本)、fonts(字体)。

1. css 目录中有四个 css 后缀的文件，其中包含 min 字样的，是压缩版本，一般使用这个；不包含的属于没有压缩的，可以学习了解 css 代码的文件；而 map 后缀的文件则是css 源码映射表，在一些特定的浏览器工具中使用。
2. js 目录包含两个文件，是未压缩和压缩的 js 文件。
3. fonts 目录包含了不同后缀的字体文件。

### 1.4创建第一个页面

我们创建一个 HTML5 的页面，并且将 Bootstrap 的核心文件引入，然后测试是否正常显示。

```
<!DOCTYPE html>
<html lang="zh-cn">
    <head>
    <meta charset="UTF-8">
    <title>Bootstrap 介绍</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    </head>
    <body>

      <button class="btn btn-info">Bootstrap</button>

      <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
    </body>
</html>
```

## 二、**排版样式**

### 2.1页面排版

Bootstrap 提供了一些常规设计好的页面排版的样式供开发者使用。

### 2.2页面主体

Bootstrap 将全局 font-size 设置为 14px，line-height 行高设置为 1.428(即20px)；<p>段落元素被设置等于 1/2 行高(即 10px)；颜色被设置为#333。

```
//创建包含段落突出的文本
<p>Bootstrap 框架</p>
<p class="lead">Bootstrap 框架</p>
<p>Bootstrap 框架</p>
<p>Bootstrap 框架</p>
<p>Bootstrap 框架</p>
```

### 2.3标题

```
//从 h1 到 h6	
<h1>Bootstrap 框架</h1>	//36px
<h2>Bootstrap 框架</h2>	//30px
<h3>Bootstrap 框架</h3>	//24px
<h4>Bootstrap 框架</h4>	//18px
<h5>Bootstrap 框架</h5>	//14px
<h6>Bootstrap 框架</h6>	//12px
```

我们从 浏览器调试工具查看元素了解到，Bootstrap 分别对 h1 ~ h6 进行了 CSS 样式的重构， 并且还支持普通内联元素定义 class=(.h1 ~ h6)来实现相同的功能。

```
//内联元素使用标题字体
<span class="h1">Bootstrap</span>
```

注：通过 浏览器调试工具 查看元素还看到，字体颜色、字体样式、行高均被固定了，从而保证了统一性，而原生的会根据系统内置的首选字体决定，颜色是最黑色。

在 h1 ~ h6 元素之间，还可以嵌入一个 small 元素作为副标题

```
//在标题元素内插入 small 元素
<h1>Bootstrap 框架 <small>Bootstrap 小标题</small></h1>
<h2>Bootstrap 框架 <small>Bootstrap 小标题</small></h2>
<h3>Bootstrap 框架 <small>Bootstrap 小标题</small></h3>
<h4>Bootstrap 框架 <small>Bootstrap 小标题</small></h4>
<h5>Bootstrap 框架 <small>Bootstrap 小标题</small></h5>
<h6>Bootstrap 框架 <small>Bootstrap 小标题</small></h6>
```

通过 Firebug 查看，我们发现 h1 ~ h3 下 small 元素的大小只占父元素的 65%，那么通过计算(查看 Firebug 计算后的样式)，h1 ~ h3 下的 small 为 23.4px、19.5px、15.6px； h4 ~ h6 下 small 元素的大小只占父元素的 75% ,分别为：13.5px、10.5px、9px。
在 h1 ~ h6 下的 small 样式也进行了改变，颜色变成淡灰色：#777，行高为 1，粗度为 400。

### 2.4内联文本元素

```
//添加标记，<mark>元素或.mark 类
<p>Bootstrap<mark>框架</mark></p>

//各种加线条的文本
<del>Bootstrap 框架</del>	//删除的文本
<s>Bootstrap 框架</s>	//无用的文本
<ins>Bootstrap 框架</ins>	//插入的文本
<u>Bootstrap 框架</u>	//效果同上，下划线文本

//各种强调的文本
<small>Bootstrap 框架</small>	//标准字号的 85%
<strong>Bootstrap 框架</strong>	//加粗 700
<em>Bootstrap 框架</em>	//倾斜
```

### 2.5对齐

```
//设置文本对齐
<p class="text-left">Bootstrap 框架</p>	//居左
<p class="text-center">Bootstrap 框架</p>	//居中
<p class="text-right">Bootstrap 框架</p>	//居右
<p class="text-justify">Bootstrap 框架</p>	//两端对齐，支持度不佳
<p class="text-nowrap">Bootstrap 框架</p>	//不换行
```

### 2.6大小写

```
//设置英文文本大小写
<p class="text-lowercase">Bootstrap 框架</p> //小写
<p class="text-uppercase">Bootstrap 框架</p> //大写
<p class="text-capitalize">Bootstrap 框架</p>//首字母大写
```

### 2.7缩略语

```
//缩略语
Bootstrap<abbr title="Bootstrap" class="initialism">框架</abbr>
```

### 2.8地址文本

```
//设置地址，去掉了倾斜，设置了行高，底部 20px
<address>
  <strong>Twitter, Inc.</strong><br> 795 Folsom Ave, Suite 600<br>
  San Francisco, CA 94107<br>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>
```

### 2.9引用文本

```
//默认样式引用，增加了做边线，设定了字体大小和内外边距
<blockquote>
Bootstrap 框架
</blockquote>

//反向
<blockquote class="blockquote-reverse "> Bootstrap 框架
</blockquote>
```

### 2.10列表排版

```
//移出默认样式
<ul class="list-unstyled">
  <li>Bootstrap 框架</li>
  <li>Bootstrap 框架</li>
  <li>Bootstrap 框架</li>
  <li>Bootstrap 框架</li>
  <li>Bootstrap 框架</li>
</ul>

//设置成内联
<ul class="list-inline">
  <li>Bootstrap 框架</li>
  <li>Bootstrap 框架</li>
  <li>Bootstrap 框架</li>
  <li>Bootstrap 框架</li>
  <li>Bootstrap 框架</li>
</ul>

//水平排列描述列表
<dl class="dl-horizontal">
  <dt>Bootstrap</dt>
  <dd>Bootstrap 提供了一些常规设计好的页面排版的样式供开发者使用。</dd>
</dl>
```

### 2.11代码

```
//内联代码
<code>&lt;section&gt;</code>

//用户输入
press <kbd>ctrl + ,</kbd>

//代码块
<pre>&lt;p&gt;Please input...&lt;/p&gt;</pre>

Bootstrap 还列举了<var>表示标记变量，<samp>表示程序输出，只不过没有重新复写 CSS。
```

## 三、表格和按钮

### 1.表格

	Bootstrap 提供了一些丰富的表格样式供开发者使用。

##### 1.1基本格式

```
//实现基本的表格样式
<table class="table">
```

注：我们可以通过 Firebug 查看相应的 CSS。

##### 1.2条纹状表格

```
//让<tbody>里的行产生一行隔一行加单色背景效果
<table class="table table-striped">
```

注：表格效果需要基于基本格式.table

##### 1.3带边框的表格

```
//给表格增加边框
<table class="table table-bordered">
```

##### 1.4悬停鼠标

```
//让<tbody>下的表格悬停鼠标实现背景效果
<table class="table table-hover">
```

##### 1.5状态类

```
//可以单独设置每一行的背景样式
<tr class="success">
```

注：一共五种不同的样式可供选择。

|   样式    |        说明         |
| :-----: | :---------------: |
| active  |    鼠标悬停在行或单元格上    |
| success |    标识成功或积极的动作     |
|  info   |   标识普通的提示信息或动作    |
| warning |    标识警告或需要用户注意    |
| danger  | 表示危险或潜在的带来负面影响的动作 |

##### 1.6隐藏某一行

```
//隐藏行
<tr class="sr-only">
```

##### 1.7响应式表格

```
//表格父元素设置响应式，小于 768px 出现边框
<body class="table-responsive">
```

### 2.按钮

Bootstrap 提供了很多丰富按钮供开发者使用。

##### 2.1可作为按钮使用的标签或元素

```
//转化成普通按钮
<a href="###" class="btn btn-default">Link</a>
<button class="btn btn-default">Button</button>
<input type="button" class="btn btn-default" value="input">
```

注意事项有三点：
(1).针对组件的注意事项
虽然按钮类可以应用到 <a> 和 <button> 元素上，但是，导航和导航条组件只支持<button> 元素。
(2).链接被作为按钮使用时的注意事项
如果 <a> 元素被作为按钮使用 -- 并用于在当前页面触发某些功能 -- 而不是用于 链接其他页面或链接当前页面中的其他部分，那么，务必为其设置 role="button" 属性。
(3).跨浏览器展现
我们总结的最佳实践是：强烈建议尽可能使用 <button> 元素来获得在各个浏览器上获得相匹配的绘制效果。
另外，我们还发现了 Firefox <30 版本的浏览器上出现的一个 bug，其表现是：阻止我们为基于 <input> 元素所创建的按钮设置 line-height 属性，这就导致在Firefox 浏览器上不能完全和其他按钮保持一致的高度。

##### 2.2预定义样式

```
//一般信息
<button class="btn btn-info">Button</button>
```

|     样式      |   说明   |
| :---------: | :----: |
| btn-default |  默认样式  |
| btn-success |  成功样式  |
|  btn-info   | 一般信息样式 |
| btn-warning |  警告样式  |
| btn-danger  |  危险样式  |
| btn-primary | 首选项样式  |
|  btn-link   |  链接样式  |

##### 2.3尺寸大小

```
//从大到小的尺寸
<button class="btn btn-lg">Button</button>
<button class="btn">Button</button>
<button class="btn btn-sm">Button</button>
<button class="btn btn-xs">Button</button>
```

##### 2.4 块级按钮

```
//块级换行
<button class="btn btn-block">Button</button>
<button class="btn btn-block">Button</button>
```

##### 2.5激活状态

```
//激活按钮
<button class="btn active">Button</button>
```

##### 2.6禁用状态

```
//禁用按钮
<button class="btn active disabled">Button</button>
```

##  四、表单和图片

### 1.表单

##### 1.1基本格式

```
//实现基本的表单样式
<form>
  <div class="form-group">
    <label>电子邮件</label>
    <input type="email" class="form-control" placeholder="请输入您的电子邮件">
  </div>
  <div class="form-group">
  <label>密码</label>
  <input type="password" class="form-control" placeholder="请输入您的密码">
  </div>
</form>
```

注：只有正确设置了输入框的 type 类型，才能被赋予正确的样式。支持的输入框控件包括：text、password、datetime、datetime-local、date、month、time、week、number、email、url、search、tel 和 color。

##### 1.2内联表单

```
//让表单左对齐浮动，并表现为 inline-block 内联块结构
<form class="form-inline">
```

注：当小于 768px，会恢复独占样式

##### 1.3表单合组

```
//前后增加片段
<div class="input-group">
  <div class="input-group-addon">￥</div>
  <input type="text" class="form-control">
  <div class="input-group-addon">.00</div>
</div>
```

##### 1.4水平排列

```
//让表单内的元素保持水平排列
<form class="form-horizontal">
  <div class="form-group">
      <label class="col-sm-2 control-label">电子邮件</label>
      <div class="col-sm-10">
          <input type="email" class="form-control" placeholder="请输入您的电子邮件">
      </div>
  </div>
</form>
```

注：这里用到了 col-sm 栅格系统，后面章节会重点讲解，而 control-label 表示和父元素样式同步。

##### 1.5复选框和单选框

```
//设置复选框，在一行

<div class="checkbox">
  <label>
      <input type="checkbox">体育
  </label>
</div>

<div class="checkbox">
  <label>
      <input type="checkbox">音乐
  </label>
</div>

//设置禁用的复选框

<div class="checkbox disabled">
  <label>
      <input type="checkbox" disabled>音乐
  </label>
</div>

//设置内联一行显示的复选框

<label class="checkbox-inline">
	<input type="checkbox">体育
</label>

<label class="checkbox-inline disabled">
	<input type="checkbox" disabled>音乐
</label>

//设置单选框

<div class="radio disabled">
  <label>
      <input type="radio" name="sex" disabled>男
  </label>
</div>

```

##### 1.6.下拉列表

```
//设置下拉列表

<select class="form-control">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>

```

##### 1.7校验状态

```
//设置为错误状态
<div class="form-group has-error">
```

注：还有其他状态如下

|     样式      |  说明  |
| :---------: | :--: |
|  has-error  | 错误状态 |
| has-success | 成功状态 |
| has-warning | 警告状态 |

```
//label 标签同步相应状态
<label class="control-label">Input with success</label>
```

##### 1.8添加额外的图标

```
//文本框右侧内置文本图标
<div class="form-group has-feedback">
  <label>电子邮件</label>
  <input type="email" class="form-control">
  <span class="glyphicon glyphicon-ok form-control-feedback"></span>
</div>
```

注：除了 glyphicon-ok 外，还有几个如下表：

|           样式           |  说明  |
| :--------------------: | :--: |
|      glyphicon-ok      | 成功状态 |
| glyphicon-warning-sign | 警告状态 |
|    glyphicon-remove    | 错误状态 |

##### 1.9控制尺寸

```
//从大到小
<input type="password" class="form-control input-lg">
<input type="password" class="form-control">
<input type="password" class="form-control input-sm">
```

注：也可以设置父元素 form-group-lg、form-group-sm，来调整。



### 2.图片

Bootstrap 提供了一些丰富的图片样式供开发者使用。

##### 图片形状

```
//三种形状
<img src="img/pic.png" alt="图片" class="img-rounded">
<img src="img/pic.png" alt="图片" class="img-circle">
<img src="img/pic.png" alt="图片" class="img-thumbnail">

//响应式图片
<img src="img/pic.png" alt="图片" class="img-responsive">
```

## 五、栅格系统

### 1.移动设备优先

在 HTML5 的项目中，我们做了移动端的项目。它有一份非常重要的 meta，用于设置屏幕和设备等宽以及是否运行用户缩放，及缩放比例的问题。

```
//分别为：屏幕宽度和设备一致、初始缩放比例、最大缩放比例和禁止用户缩放
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

### 2.布局容器

Bootstrap 需要为页面内容和栅格系统包裹一个.container 容器。由于 padding 等属性的原因，这两种容器类不能相互嵌套。

```
//固定宽度

<div class="container">
	...
</div>
//100%宽度
<div class="container-fluid">
	...
</div>

```

栅格系统中，浏览器会随着屏幕的大小的增减自动分配最多12 列。通过一系列的行(row) 与列(column)的组合来创建页面布局。工作原理如下：
1.“行（row）”必须包含在 .container （固定宽度）或 .container-fluid （100%
宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
2.通过“行（row）”在水平方向创建一组“列（column）”。
3.你的内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为  行（row）”的直接子元素。
4.类似 .row 和 .col-xs-4 这种预定义的类，可以用来快速创建栅格布局。
Bootstrap 源码中定义的 mixin 也可以用来创建语义化的布局。
5.通过为“列（column）”设置 padding 属性，从而创建列与列之间的间隔（gutter）。

通过为 .row 元素设置负值 margin 从而抵消掉为 .container 元素设置的 padding， 也就间接为“行（row）”所包含的“列（column）”抵消掉了 padding。
6.负值的 margin 就是下面的示例为什么是向外突出的原因。在栅格列中的内容排成一行。
7.栅格系统中的列是通过指定 1 到 12 的值来表示其跨越的范围。例如，三个等宽的列可以使用三个 .col-xs-4 来创建。
8.如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。
栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 .col-md-* 栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ，并且针对小屏幕设备覆盖栅格类。因此，在元素上应用任何 .col-lg-* 不存在， 也影响大屏幕设备。

```
//创建一个响应式行
<div class="container">
  <div class="row">
  ...
  </div>
</div>

//创建最多 12 列的响应式行
<div class="container">
  <div class="row">
    <div class="col-md-1 a">1</div>
    <div class="col-md-1 a">2</div>
    <div class="col-md-1 a">3</div>
    <div class="col-md-1 a">4</div>
    <div class="col-md-1 a">5</div>
    <div class="col-md-1 a">6</div>
    <div class="col-md-1 a">7</div>
    <div class="col-md-1 a">8</div>
    <div class="col-md-1 a">9</div>
    <div class="col-md-1 a">10</div>
    <div class="col-md-1 a">11</div>
    <div class="col-md-1 a">12</div>
  </div>
</div>
```

```
//为了显示明显的 CSS
.a {
  	height: 100px; background-color: #eee; border:1px solid #ccc;
  }

//总列数都是 12，每列分配多列
<div class="container">
  <div class="row">
    <div class="col-md-4 a">1-4</div>
    <div class="col-md-4 a">5-8</div>
    <div class="col-md-4 a">9-12</div>
  </div>
  <div class="row">
    <div class="col-md-8 a">1-8</div>
    <div class="col-md-4 a">9-12</div>
  </div>
</div>
```

如上图所示，栅格系统最外层区分了四种宽度的浏览器：超小屏(<768px)、小屏(>=768px)、中屏(>=992px)和大屏(>=1200px)。而内层.container 容器的自适应宽度为：自动、750px、970px 和 1170px。自动的意思为，如果你是手机屏幕，则全面独占一行显示。

```
//四种屏幕分类全部激活
<div class="container">
  <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 a">4</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 a">4</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 a">4</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 a">4</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 a">4</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 a">4</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 a">4</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 a">4</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 a">4</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 a">4</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 a">4</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 a">4</div>
  </div>
</div>
```

```
//有时我们可以设置列偏移，让中间保持空隙
<div class="container">
  <div class="row">
    <div class="col-md-8 a">8</div>
    <div class="col-md-3 col-md-offset-1 a">3</div>
  </div>
</div>


//可以把两个列交换位置，push 向左移动，pull 向右移动
<div class="container">
  <div class="row">
    <div class="col-md-9 col-md-push-3 a">9</div>
    <div class="col-md-3 col-md-pull-9 a">3</div>
  </div>
</div>
```