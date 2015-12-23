#Fancybox商品图片展示
    Fancybox图片播放插件可以支持图片、html文本、flash动画、iframe以及ajax的支持，可以自定义播放器的CSS样式，可以以组的形式进行播放，如果将鼠标滚动插件（mouse wheel plugin）包含进来的话Fancybox还能支持鼠标滚轮滚动来翻阅图片，Fancybox播放器支持投影，更有立体的感觉。
####官方地址：http://www.fancybox.net/

##兼容性

* ie6+
* Chrome 8+

##样例：

###1、使用步骤
* 引入样式文件（box.css，jquery.fancybox.css，jquery.fancybox-thumbs.css）

```javascript
<link rel="stylesheet" type="text/css" href="style/box.css" />//商品图片样式文件
<link rel="stylesheet" type="text/css" href="style/jquery.fancybox.css?v=2.1.5" media="screen" />//fancybox样式文件
<link rel="stylesheet" type="text/css" href="style/jquery.fancybox-thumbs.css?v=1.0.7" />//fancybox相关操作样式文件
```
* 在页面头部引用Jquery库：jquery-1.10.2.min.js；
* 以及Fancybox的实现代码：DD_belatedPNG.js，jquery.mousewheel.pack.js，jquery.fancybox.pack.js，jquery.fancybox-thumbs.js，goods.js。

```javascript
//jQuery库
<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
//png图片透明处理js文件
<!--[if IE 6]>
<script src="javascript/DD_belatedPNG.js" type="text/javascript"></script>
<![endif]-->
//鼠标操作js文件
<script type="text/javascript" src="js/jquery.mousewheel.pack.js?v=3.1.3"></script>
//fancybox主要js文件
<script type="text/javascript" src="js/jquery.fancybox.pack.js?v=2.1.5"></script>
//fancybox相关操作js文件
<script type="text/javascript" src="js/jquery.fancybox-thumbs.js?v=1.0.7"></script>
//商品图片操作js文件
<script type="text/javascript" src="js/goods.js"></script>
```

* 在页面上添加代码

```javascript
<div class="box">
    <div class="tb-booth tb-pic tb-s310">
        <div class="arrow-left"></div>
        <div class="arrow-right"></div>
        <div class="gallayWrap">
            <a href="images/1.jpg" class="fancybox-gallery" data-fancybox-group="gallery" title="第一张图"><img src="images/1.jpg" alt=""/></a>
            <a href="images/2.jpg" class="fancybox-gallery hideGalleryBig" data-fancybox-group="gallery" title="第二张图"><img src="images/2.jpg" alt=""/></a>
        </div>
    </div>
    <div class="thumb-wrap">
        <ul class="tb-thumb" id="thumblist">
            <li class="tb-selected"><div class="tb-pic tb-s40"><a href="javascript:void(0)"><img src="images/1.jpg" ></a></div></li>
            <li><div class="tb-pic tb-s40"><a href="javascript:void(0)"><img src="images/2.jpg" ></a></div></li>
        </ul>
    </div>
</div>
```
###2、demo
* [Fancybox商品图片展示demo](http://192.168.14.97:8080/plugin/goodsGallery)

##配置和API
###1、配置
```javascript
$(".fancybox-gallery").fancybox({
	wrapCSS    : 'fancybox-custom',//默认显示风格
	openEffect : 'elastic',//展开动画
	openSpeed  : 150,//展开时间
	closeEffect : 'elastic',//收起动画
	closeSpeed  : 150,//收起时间
	helpers : {
		thumbs : {//缩略图宽高
			width  : 50,
			height : 50
		}
	}
});
```
###2、API
* [Fancybox商品图片展示的API详细参数地址](http://www.fancybox.net/api)








