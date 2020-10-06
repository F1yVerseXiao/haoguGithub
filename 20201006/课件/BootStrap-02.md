## 一、辅组类和响应式工具

### 1.辅助类

Bootstrap 在布局方面提供了一些细小的辅组样式，用于文字颜色以及背景色的设置、显示关闭图标等等。

##### 1.1情景文本颜色

|     样式名      |  描述  |
| :----------: | :--: |
|  text-muted  | 柔和灰  |
| text-primary | 主要蓝  |
| text-success | 成功绿  |
|  text-info   | 信息蓝  |
| text-warning | 警告黄  |
| text-danger  | 危险红  |

```html
//各种色调的字体
<p class="text-muted">Bootstrap 视频教程</p>
<p class="text-primary">Bootstrap 视频教程</p>
<p class="text-success">Bootstrap 视频教程</p>
<p class="text-info">Bootstrap 视频教程</p>
<p class="text-warning">Bootstrap 视频教程</p>
<p class="text-danger">Bootstrap 视频教程</p>
```

##### 1.2情景背景色

|    样式名     |  描述  |
| :--------: | :--: |
| bg-primary | 主要蓝  |
| bg-success | 成功绿  |
|  bg-info   | 信息蓝  |
| bg-warning | 警告黄  |
| bg-danger  | 危险红  |

```html
//各种色调的背景
<p class="bg-primary">Bootstrap 视频教程</p>
<p class="bg-success">Bootstrap 视频教程</p>
<p class="bg-info">Bootstrap 视频教程</p>
<p class="bg-warning">Bootstrap 视频教程</p>
<p class="bg-danger">Bootstrap 视频教程</p>
```

##### 1.3关闭按钮

```html
<button type="button" class="close"></button>
```

##### 1.4三角符号

```html
<span class="caret"></span>
```

##### 1.5快速浮动

```html
<div class="pull-left">左边</div>
<div class="pull-right">右边</div>
```

注：这个浮动其实就是 float，只不过使用了!important 加强了优先级。

##### 1.6块级居中

```html
<div class="center-block">居中</div>
```

注：就是 margin:x auto；并且设置了 display:block;。

##### 1.7清理浮动

```html
<div class="clearfix"></div>
```

注：这个 div 可以放在需要清理浮动区块的前面即可。

##### 1.8显示和隐藏

```html
<div class="show">show</div>
<div class="hidden">hidden</div>
```

### 2.响应式工具

在媒体查询时，针对不同的屏幕大小，有时需要显示和隐藏部分内容。响应式工具类，  就提供了这种解决方案。

```html
//超小屏幕激活显示
<div class="visible-xs-block a">Bootstrap</div>

//超小屏幕激活隐藏
<div class="hidden-xs a">Bootstrap</div>

注：对于显示的内容，有三种变体，分别为：block、inline-block、inline。
```

## 二、图标菜单按钮组件

本节课我们主要学习一下 Bootstrap 的三个组件功能：小图标组件、下拉菜单组件和各种按钮组件。

### 1.小图标组件

Bootstrap 提供了免费的 263 个小图标（数了两次），具体可以参考中文官网的组件链接：http://v3.bootcss.com/components/#glyphicons。部分图标如下：

```html
可以使用<i>或<span>标签来配合使用，具体如下：
//使用小图标
<i class="glyphicon glyphicon-star"></i>
<span class="glyphicon glyphicon-star"></span>

//也可以结合按钮
<button class="btn btn-default btn-lg">
	<span class="glyphicon glyphicon-star"></span>
</button>

<button class="btn btn-default btn">
	<span class="glyphicon glyphicon-star"></span>
</button>

<button class="btn btn-default btn-sm">
	<span class="glyphicon glyphicon-star"></span>
</button>

<button class="btn btn-default btn-xs">
	<span class="glyphicon glyphicon-star"></span>
</button>
```

### 2.下拉菜单组件

下拉菜单，就是点击一个元素或按钮，触发隐藏的列表显示出来。

```html
//基本格式
<div class="dropdown">
  <button class="btn btn-default" data-toggle="dropdown">
  	下拉菜单
  	<span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li>首页</li>
    <li>资讯</li>
    <li>产品</li>
    <li>关于</li>
  </ul>
</div>
```

按钮和菜单需要包裹在.dropdown 的容器里，而作为被点击的元素按钮需要设置data-toggle="dropdown"才能有效。对于菜单部分，设置 class="dropdown-menu"才能自动隐藏并添加固定样式。设置 class="caret"表示箭头，可上可下。

```html
//设置向上触发
<div class="dropup">
//菜单项居右对齐，默认值是 dropdown-menu-left
<ul class="dropdown-menu dropdown-menu-right">
//设置菜单的标题，不要加超链接
<li class="dropdown-header">网站导航</li>
//设置菜单的分割线
<li class="divider"></li>
//设置菜单的禁用项
<li class="disabled">产品</li>
//让菜单默认显示
<div class="dropdown open">
```

三．按钮组组件
按钮组就是多个按钮集成在一个容器里形成独有的效果。

```html
//基本格式

<div class="btn-group">
  <button type="button" class="btn btn-default">左</button>
  <button type="button" class="btn btn-default">中</button>
  <button type="button" class="btn btn-default">右</button>
</div>

//将多个按钮组整合起来便于管理
<div class="btn-toolbar">
  <div class="btn-group">
    <button type="button" class="btn btn-default">左</button>
    <button type="button" class="btn btn-default">中</button>
    <button type="button" class="btn btn-default">右</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-default">1</button>
    <button type="button" class="btn btn-default">2</button>
    <button type="button" class="btn btn-default">3</button>
  </div>
</div>

//设置按钮组大小
<div class="btn-group btn-group-lg">
<div class="btn-group>
<div class="btn-group btn-group-sm">
<div class="btn-group btn-group-xs">
//嵌套一个分组，比如下拉菜单

<div class="btn-group">
  <button type="button" class="btn btn-default">左</button>
  <button type="button" class="btn btn-default">中</button>
  <button type="button" class="btn btn-default">右</button>
  <div class="btn-group">
    <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
        下拉菜单
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <li>首页</li>
      <li>资讯</li>
      <li>产品</li>
      <li>关于</li>
    </ul>
  </div>
</div>
```

注意：这里<div>中并没有实现 class="dropdown"，通过源码分析知道嵌套本身已经有定位就不需要再设置。而右边的圆角只要多加一个 class="dropdown-toggle"即可。



```html

/设置按钮组垂直排列
<div class="btn-group-vertical">

//设置两端对齐按钮组，使用<a>标签
<div class="btn-group-justified">
  <a type="button" class="btn btn-default">左</a>
  <a type="button" class="btn btn-default">中</a>
  <a type="button" class="btn btn-default">右</a>
</div>

//如果需要使用<button>标签，则需要对每个按钮进行群组

<div class="btn-group-justified">
  <div class="btn-group">
      <button type="button" class="btn btn-default">左</button>
  </div>
  <div class="btn-group">
      <button type="button" class="btn btn-default">中</button>
  </div>
  <div class="btn-group">
      <button type="button" class="btn btn-default">右</button>
  </div>
</div>
```

四．按钮式下拉菜单
这个下拉菜单其实和第二个知识点一样，只不过，这个是在群组里，不需要<div>声明
class="dropdown"。

```html
//群组按钮下拉菜单
<div class="btn-group">
	<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
	下拉菜单
	<span class="caret"></span>
	</button>
  <ul class="dropdown-menu">
    <li>首页</li>
    <li>资讯</li>
    <li>产品</li>
    <li>关于</li>
  </ul>

</div>

//分裂式按钮下拉菜单

<div class="btn-group">
  <button type="button" class="btn btn-default">下拉菜单</button>
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
  <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li>首页</li>
    <li>资讯</li>
    <li>产品</li>
    <li>关于</li>
  </ul>
</div>

//向上弹出式
<div class="btn-group dropup">
```

## 三、输入框和导航组件

### 1.输入框组件

文本输入框就是可以在<input>元素前后加上文字或按钮，可以实现对表单控件的扩展。

```html
//在左侧添加文字
<div class="input-group">
  <span class="input-group-addon">@</span>
  <input type="text" class="form-control">
</div>

//在右侧添加文字
<div class="input-group">
  <input type="text" class="form-control">
  <span class="input-group-addon">@163.com</span>
</div>

//在两侧添加文字
<div class="input-group">
  <span class="input-group-addon">$</span>
  <input type="text" class="form-control">
  <span class="input-group-addon">.00</span>
</div>

//设置尺寸，另外三种分别是默认、xs、sm
<div class="input-group input-group-lg">

//左侧使用复选框和单选框
<div class="input-group">
  <span class="input-group-addon"><input type="checkbox"></span>
  <input type="text" class="form-control">
</div>

<div class="input-group">
  <span class="input-group-addon"><input type="radio"></span>
  <input type="text" class="form-control">
</div>

//左侧使用按钮
<div class="input-group">
  <span class="input-group-btn">
  	<button type="button" class="btn btn-default">按钮</button>
  </span>
  <input type="text" class="form-control">
</div>

//左侧使用下拉菜单或分列式
<div class="input-group">
  <span class="input-group-btn">
    <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
      下拉菜单
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <li class="dropdown-header">网站导航</li>
      <li><a href="#">首页</a></li>
      <li><a href="#">资讯</a></li>
      <li class="divider"><a href="#">产品</a></li>
      <li class="disabled"><a href="#">关于</a></li>
    </ul>
   </span>
	<input type="text" class="form-control">
</div>
```

### 2.导航组件

Bootstrap 提供了一组导航组件，用于实现 Web 页面的栏目操作。

```html
//基本导航标签页
<ul class="nav nav-tabs">
  <li class="active"><a href="#">首页</a></li>
  <li><a href="#">资讯</a></li>
  <li><a href="#">产品</a></a></li>
  <li><a href="#">关于</a></li>
</ul>

//胶囊式导航
<ul class="nav nav-pills">

//垂直胶囊式导航
<ul class="nav nav-pills nav-stacked">

//导航两端对齐
<ul class="nav nav-tabs nav-justified">

//禁用导航中的项目
<li class="disabled"><a href="#">关于</a></li>

//带下拉菜单的导航
<ul class="nav nav-tabs">
  <li class="active"><a href="#">首页</a></li>
  <li><a href="#">资讯</a></li>
  <li class="dropdown">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
    下拉菜单
    <span class="caret"></span>
  </a>
  <ul class="dropdown-menu">
    <li><a href="#">菜单一</a></li>
    <li><a href="#">菜单二</a></li>
  </ul>
  </li>
</ul>
```

### 3.导航条组件

导航条是网站中作为导航页头的响应式基础组件。

```html
//基本格式
<nav class="navbar navbar-default">
	...
</nav>

//反色调导航
<nav class="navbar navbar-inverse">
	...
</nav>

//基本导航条，包含标题和列表
<nav class="navbar navbar-default">
  <div class="container">
    <div class="navbar-header">
        <a href="#" class="navbar-brand">标题</a>
    </div>

    <ul class="nav navbar-nav">
      <li class="active"><a href="#">首页</a></li>
      <li><a href="#">资讯</a></li>
      <li class="disabled"><a href="#">产品</a></li>
      <li><a href="#">关于</a></li>
    </ul>
  </div>
</nav>

//导航条中使用表单
<form action="" class="navbar-form navbar-left">
  <div class="input-group">
    <input type="text" class="form-control">
    <span class="input-group-btn">
        <button type="submit" class="btn btn-default">提交</button>
    </span>
  </div>
</form>

//导航中使用按钮
<button class="btn btn-default navbar-btn">按钮</button>

//导航中使用对齐方式，left 和 right
<button class="btn btn-default navbar-btn navbar-right">按钮</button>

//导航中使用一段文本
<p class="navbar-text">我是一段文本</p>

//非导航链接，一般需要置入文本区域内
<a href="#" class="navbar-link">非导航链接</a>

//将导航固定在顶部，下面的内容会自动上移
<nav class="navbar navbar-default navbar-fixed-top">

//将导航补丁在底部
<nav class="navbar navbar-default navbar-fixed-bottom">

//静态导航，和页面等宽的导航条，去掉了圆角
<nav class="navbar navbar-default navbar-static-top">
```

## 四、路径分页标签和徽章组件

### 1.路径组件

路径组件也叫做面包屑导航。

```html
//面包屑导航
<ol class="breadcrumb">
  <li><a href="#">首页</a></li>
  <li><a href="#">产品列表</a></li>
  <li class="active">韩版 2015 年羊绒毛衣</li>
</ol>
```

### 2.分页组件

分页组件可以提供带有展示页面的功能。

```html
//默认分页
<ul class="pagination">
  <li><a href="#">&laquo;</a></li>
  <li><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">5</a></li>
  <li><a href="#">&raquo;</a></li>
</ul>

//首选项和禁用
<li class="active"><a href="#">1</a></li>
<li class="disabled"><a href="#">2</a></li>

//设置尺寸，四种 lg、默认、sm 和 xs
<ul class="pagination pagination-lg">

//翻页效果
<ul class="pager">
  <li><a href="#">上一页</a></li>
  <li><a href="#">下一页</a></li>
</ul>

//对齐翻页链接
<ul class="pager">
  <li class="previous"><a href="#">上一页</a></li>
  <li class="next"><a href="#">下一页</a></li>
</ul>

//翻页项禁用
<li class="previous disabled"><a href="#">上一页</a></li>
```

### 3.标签

```html
//在文本后面带上标签
<h3>标签 <span class="label label-default">new</span></h3>

//不同色调的标签
<h3>标签 <span class="label label-primary">new</span></h3>
<h3>标签 <span class="label label-success">new</span></h3>
<h3>标签 <span class="label label-info">new</span></h3>
<h3>标签 <span class="label label-warning">new</span></h3>
<h3>标签 <span class="label label-danger">new</span></h3>
```

### 4.徽章

```html
//未读信息数量徽章
<a href="#">信息 <span class="badge">10</span></a>

//按钮中使用徽章
<button class="btn btn-success">
提交 <span class="badge">3</span>
</button>

//激活状态自动适配色调
<ul class="nav nav-pills">
  <li class="active">
  <a href="#">首页 <span class="badge">2</span></a>
  </li>
  <li><a href="#">资讯</a></li>
</ul>
```

## 五、巨幕页头缩略图

### 1.巨幕组件

巨幕组件主要是展示网站的关键性区域。

```html
//在固定的范围内，有圆角
<div class="container">
  <div class="jumbotron">
    <h2>网站标题</h2>
    <p>这是一个学习性的网站！</p>
    <p><a href="#" class="btn btn-default">更多内容</a></p>
  </div>
</div>

//100%全屏，没有圆角
<div class="jumbotron">
  <div class="container">
    <h2>网站标题</h2>
    <p>这是一个学习性的网站！</p>
    <p><a href="#" class="btn btn-default">更多内容</a></p>
  </div>
</div>
```

### 2.页头组件

```html
//增加一些空间
<div class="page-header">
	<h1>大标题 <small>小标题</small></h1>
</div>
```

### 3.缩略图组件

```html
//缩略图配合响应式
<div class="container">
  <div class="row">
    <div class="col-xs-6 col-md-3 col-sm-4">
      <div class="thumbnail">
          <img src="img/pic.png" alt="">
      </div>
    </div>
    <div class="col-xs-6 col-md-3 col-sm-4">
      <div class="thumbnail">
          <img src="img/pic.png" alt="">
      </div>
    </div>
    <div class="col-xs-6 col-md-3 col-sm-4">
      <div class="thumbnail">
          <img src="img/pic.png" alt="">
      </div>
    </div>
    <div class="col-xs-6 col-md-3 col-sm-4">
      <div class="thumbnail">
          <img src="img/pic.png" alt="">
      </div>
    </div>
  </div>
</div>

//自定义内容
<div class="container">
  <div class="row">
    <div class="col-xs-6 col-md-3 col-sm-4">
      <div class="thumbnail">
          <img src="img/pic.png" alt="">
      <div class="caption">
        <h3>图文并茂</h3>
        <p>这是一个图片结合文字的缩略图</p>
        <p><a href="#" class="btn btn-default">进入</a></p>
      </div>
      </div>
      </div>
    <div class="col-xs-6 col-md-3 col-sm-4">
      <div class="thumbnail">
          <img src="img/pic.png" alt="">
        <div class="caption">
          <h3>图文并茂</h3>
          <p>这是一个图片结合文字的缩略图</p>
          <p><a href="#" class="btn btn-default">进入</a></p>
        </div>
      </div>
  </div>
    <div class="col-xs-6 col-md-3 col-sm-4">
        <div class="thumbnail">
            <img src="img/pic.png" alt="">
            <div class="caption">
              <h3>图文并茂</h3>
              <p>这是一个图片结合文字的缩略图</p>
              <p><a href="#" class="btn btn-default">进入</a></p>
            </div>
        </div>
    </div>
    <div class="col-xs-6 col-md-3 col-sm-4">
        <div class="thumbnail">
            <img src="img/pic.png" alt="">
            <div class="caption">
              <h3>图文并茂</h3>
              <p>这是一个图片结合文字的缩略图</p>
              <p><a href="#" class="btn btn-default">进入</a></p>
            </div>
        </div>
    </div>
  </div>
</div>
```
