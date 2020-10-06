# 操作DOM元素

## 1. 添加与删除类名

### addClass(name)

为集合中的元素添加类名。

### removeClass(name)

删除集合中元素的类名。

### hasClass(name)

判断集合中的元素是否具有指定的类名。

### toggleClass(name)

切换集合中元素的类名,添加和删除类名的切换。

## 2. 操作属性

### attr()

获取或设置标签(html标签)的属性。

### removeAttr() 

删除标签的属性。

### prop() 

获取或设置元素(DOM元素)的属性。

### removeProp() 

删除元素的属性。

### val()

获取或设置表单元素的值。

## 3. 获取和设置样式

### css()

添加或设置元素的样式。

```javascript
// 1. 添加样式
// 一次添加一个css属性
$('.box').css('background-color', '#f00');
$('.box').css('border-radius', '50%');
$('.box').css('margin-top', '20px');

// 一次添加多个css属性
$('.box').css({
    'background-color': '#f00',
    'border-radius': '50%',
    'margin-top': '20px'
});

// 2. 获取样式
// 一次获取一个css属性
console.log($('.box').css('background-color')); 
console.log($('.box').css('border-radius')); 
console.log($('.box').css('margin-top')); 

// 一次获取多个css属性
console.log($('.box').css(['background-color', 'border-radius', 'margin-top'])); 
```



### height()

获取jQuery集合中第一个元素的宽度，或者设置jQuery集合中所有元素的宽度。

### width()

获取jQuery集合中第一个元素的高度，或者设置jQuery集合中所有元素的高度。

```javascript
// 获取宽高样式的简便方法，获取的是jQuery集合中第一个元素的宽高
console.log($('div').width());
console.log($('div').height());

// 设置宽高样式的简便方法，不用加单位，默认是px
console.log($('div').width(100));
console.log($('div').height(100));
```

### innerHeight()

获取jQuery集合中第一个元素的内部高度，包括padding，但是不包括border，或者设置jQuery集合中所有元素的内部高度。


### innerWidth()

获取jQuery集合中第一个元素的内部宽度，包括padding，但是不包括border，或者设置jQuery集合中所有元素的内部宽度。

```javascript
// 获取元素的innerWidth和innerHeight，获取的是jQuery集合中第一个元素的宽高
// innerWidth = width + padding
// innerHeight = height + padding
console.log($('div').innerWidth());
console.log($('div').innerHeight());

// 设置元素的innerWidth和innerHeight，不用加单位，默认是px
// 如果设置的innerWidth大于 width + padding，则超出部分添加到width身上
// 如果设置的innerWidth小于 width + padding，则不足的部分从width身上减去
$('div').innerWidth(300);
$('div').innerHeight(300);
```



### outerHeight()

获取jQuery集合中第一个元素的外部高度，包括padding和border，但是margin是可选的，默认不包括margin

### outerWidth()

获取jQuery集合中第一个元素的外部宽度，包括padding和border，但是margin是可选的，默认不包括margin

```javascript
// 获取元素的outerWidth和outerHeight，获取的是jQuery集合中第一个元素的宽高
// innerWidth = width + padding + border + [margin]
// innerHeight = height + padding + border + [margin]
// margin是可选的，默认不包含margin
console.log($('div').outerWidth());
console.log($('div').outerHeight());
// 给方法传递参数true，表示包含margin
console.log($('div').outerWidth(true));
console.log($('div').outerHeight(true));

// 设置元素的outerWidth和outerHeight，不用加单位，默认是px
// 如果设置的outerWidth大于 width + padding + border，则超出部分添加到width身上
// 如果设置的outerWidth小于 width + padding + border，则不足的部分从width身上减去
$('div').outerWidth(300);
$('div').outerHeight(300);
```

### offset()

+ offset()：获取集合中第一个元素相对于文档的当前坐标。
+ offset(coordinates)：设置集合中所有元素的当前坐标（以像素为单位），相对于文档。

```html
<style>
    .box1 {
        width: 200px;
        height: 200px;
        margin: 20px;
        padding: 20px;
        border: 10px solid #0f0;
        background-color: #f00;
    }
    .box2 {
        width: 300px;
        height: 300px;
        margin: 30px;
        padding: 30px;
        border: 10px solid #f00;
        background-color: #0f0;
    }
</style>
<div class="box1"></div>
<div class="box2"></div>
<script>
    $(document).ready(function() {
        // 获取元素相对于文档的偏移量
        console.log($('.box2').offset());

        // 设置元素相对于文档的偏移量
        $('.box2').offset({left: 40, top: 400}); 
    });
</script>
```



### position()

返回匹配集合元素中第一个元素的偏移父辈位置（像素）, 此方法只对可见元素有效,只能获取不能设置。

```html
<style>
    .box1 {
        width: 400px;
        height: 400px;
        border: 1px solid #0f0;
        position: relative;
    }
    .box2 {
        width: 200px;
        height: 200px;
        border: 1px solid #f00;
        position: absolute;
        top: 20px;
        left: 40px;
    }
</style>
<div class="box1">
    <div class="box2"></div>
</div>
<script>
    $(document).ready(function() {
        // 获取元素相对于父元素的偏移量，获取的是jQuery集合中第一个元素相对于父元素的偏移量
        // 只能获取不能设置
        console.log($('.box2').position());
    });
</script>
```



## 4. 复制元素

### clone()

+ clone([withDataAndEvents, deepWithDataAndEvents])

复制元素。可以通过参数来指定是否要复制元素以及子元素上绑定的事件和数据。

## 5. 包裹元素

### wrap(wrappingElement)

使用指定的元素分别包裹集合中的每一个元素。

### wrapAll(wrappingElement)

使用指定的元素统一包裹集合中的所有元素。

### wrapInner(wrappingElement)

使用指定的元素分别包裹集合中每个元素的内容，包括文本内容。

### unwrap([selector])

删除集合中每个元素的包裹元素。如果指定选择器，则只删除匹配选择器的包裹元素。

## 6. 内部插入

### html([htmlString])

获取或设置集合中元素的HTML内容。

### text(text)

获取或设置集合中元素的文本内容。

### append(content,[content])

在集合中元素的后面插入内容（content）。

### appendTo(target)

将集合中的元素追加到目标元素（target）内容的后面。

### prepend(content,[content])

在集合中元素的前面插入内容（content）。

### prependTo(target)

将集合中的元素追加到目标元素（target）内容的前面。

## 7. 外部插入

### before(content,[content])

在集合中元素的前面插入内容。

### insertBefore(target)

将集合中的元素插入到目标元素（target）的前面

### after(content,[content])

在集合中元素的后面插入内容。

### insertAfter(target)

将集合中的元素插入到目标元素（target）的后面。

## 8. 删除元素

### remove([selector])    

从页面上删除集合中的所有元素及其内容，包括事件监听器和数据。如果设置选择器，则删除集合中匹配选择器的元素。

### empty()    

删除集合中所有元素的内容，元素本身不会被删除。

### detach([selector])

从页面上删除集合中的所有元素及其内容，但是保留事件监听器和数据。可以通过选择器过滤出要删除的元素。

## 9. 替换元素

### replaceAll(selector) 
 用匹配的元素替换掉所有 selector匹配到的元素。

### replaceWith(newContent)

 将所有匹配的元素替换成指定的HTML或DOM元素。

