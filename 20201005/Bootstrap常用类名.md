[TOC]

# Bootstrap常用类名

## 1. 全局css样式
### 1.1 容器(重点)

```html
container
container-fluid
```

### 1.2 栅格系统(重点)

```html
col-xs-	.col-sm-	.col-md-	.col-lg-
```

### 1.3 排版
### 1.4 代码

### 1.5 表格

```htm
table
table-striped
table-bordered
table-hover
table-condensed:紧凑
table-responsive:响应式表格
```

### 1.6 表单(重点)

```html
form-group
form-control
help-block
form-inline
form-horizontal
control-label
has-success
has-warning
has-error
has-feedback
input-group
input-group-addon
input-lg
form-group-lg
```

### 1.7 按钮(重点)

```html
btn-default
btn-primary
btn-success
btn-info
btn-warning
btn-danger
btn-link
btn-lg
```

### 1.8 图片(重点)

```html
img-responsive
img-rounded
img-thumbnail(小样)
img-circle
```

### 1.9 辅助类

```html
text-muted
text-primary....
close(×)
caret(▼)
pull-left
pull-right
center-block
```

### 1.10 响应式工具

```html
.visible-xs-block、.visible-xs-inline 和 .visible-xs-inline-block。
.visible-xs、.visible-sm、.visible-md 和 .visible-lg 类也同时存在。但是从 v3.2.0 版本开始不再建议使用。除了 <table> 相关的元素的特殊情况外，它们与 .visible-*-block 大体相同。
.visible-print-block
.visible-print-inline
.visible-print-inline-block
```



## 2. 组件

### 2.1 字体图标
### 2.2 下拉菜单(重点)

```html
dropdown
dropdown-toggle
data-toggle="dropdown"
dropdown-menu
divider
dropup
dropdown-menu-right
dropdown-header
```

### 2.3 按钮组

```html
btn-group
btn-toolbar
btn-group-vertical
.btn-group-justified
```

### 2.4 按钮式下拉菜单
### 2.5 输入框组

```html
input-group
```

### 2.6 导航(重点)

```html
nav nav-tabs
nav nav-pills
nav-stacked
nav-justified
```

### 2.7 导航条

```html
navbar navbar-default
container
navbar-header
button navbar-toggle collapsed data-toggle="collapse" data-target
data-target
collapse navbar-collapse
nav navbar-nav(导航内容,在小屏幕下,折叠内容)

navbar-form navbar-left
navbar-btn
navbar-text
navbar-right

navbar-fixed-top
navbar-fixed-bottom
body { padding-bottom: 70px; }
navbar-static-top
```

### 2.8 路径导航

```html
breadcrumb
```

### 2.9 分页

```html
pagination
pagination-lg
pager
previous
next
```

### 2.10 标签
### 2.11 徽章

```html
badge
```

### 2.12 巨幕

```html
jumbotron
```

### 2.13 页头

```html
page-header
```

### 2.14 缩略图(重点)

```html
caption
<h3>Thumbnail label</h3>
<p>...</p>
```

### 2.15 警告框

```html
alert-success
alert-dismissible
data-dismiss="alert"
```

### 2.16 进度条

```html
progress
progress-bar
progress-bar-success
progress-bar-striped
```

### 2.17 媒体对象(重点)

```html
media
media-left
media-object
media-body
media-heading
```

### 2.18 列表组

```html
list-group
list-group-item
```

### 2.19 面板

```html
panel panel-default
panel-heading
	panel-title
panel-body
panel-footer

panel-success
```

### 2.20 具有响应式特性的嵌入内容

```html
embed-responsive embed-responsive-16by9
embed-responsive-item
```

### 2.21 Well

## 3. JavaScript插件

### 3.1 模态框

```html
modal fade
modal-dialog
modal-content
modal-header
modal-title
modal-body
modal-footer
data-toggle="modal" data-target="#myModal"
```

### 3.2 下拉菜单
### 3.3 滚动监听

```html
 body {
            position: relative;
        }
data-spy="scroll" data-target="#mynav" data-offset="60"
```



### 3.4 标签页

```
data-toggle="tab"
tab-content
tab-pane fade in active
```



### 3.5 工具提示

```html
<button class="btn btn-default" data-toggle="tooltip" data-placement="left" title="点击查看更多">左边提示</button>

```



### 3.6 弹出框

```html
<button class="btn btn-default" data-toggle="popover" data-placement="left" title="点击查看更多" data-content="内容详情">左边提示</button>

```



### 3.7 警告框
### 3.8 按钮
### 3.9 Collapse(折叠)
### 3.10 Carousel(轮播)(重点)

```html
<div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="1000">
<ol class="carousel-indicators">
<div class="carousel-inner">
<a href="#myCarousel" class="left carousel-control" data-slide="prev">
<a href="#myCarousel" class="right carousel-control" data-slide="next">

```

### 3.11 Affix(粘贴)