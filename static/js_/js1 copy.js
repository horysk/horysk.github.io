
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?a9430a37066911650e26adadcc42798a";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();



 const filterContainer = document.querySelector(".gallery-filter"),
 galleryItems = document.querySelectorAll(".gallery-item");

 filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains("filter-item")){
   	 // deactivate existing active 'filter-item'
   	 filterContainer.querySelector(".active").classList.remove("active");
   	 // activate new 'filter-item'
   	 event.target.classList.add("active");
   	 const filterValue = event.target.getAttribute("data-filter");
   	 galleryItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'all'){
       	item.classList.remove("hide");
       	 item.classList.add("show");
       }
       else{
       	item.classList.remove("show");
       	item.classList.add("hide");
       }
   	 });
   }
 });
 
 



	(function($){  
	   $.fn.snow = function(options){  
		var $flake = $('<div id="snowbox" />').css({'position': 'absolute','z-index':'9999', 'top': '-50px', 'cursor': 'pointer'}).html('❄'),  
		documentHeight  = $(document).height(),  
		documentWidth   = $(document).width(),  
		defaults = {  
			minSize     : 10,  
			maxSize     : 20,  
			newOn       : 1000,  
			flakeColor  : "#AFDAEF" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */  
		},  
		options = $.extend({}, defaults, options);  
		var interval= setInterval( function(){  
		var startPositionLeft = Math.random() * documentWidth - 100,  
		startOpacity = 0.5 + Math.random(),  
		sizeFlake = options.minSize + Math.random() * options.maxSize,  
		endPositionTop = documentHeight - 200,  
		endPositionLeft = startPositionLeft - 500 + Math.random() * 500,  
		durationFall = documentHeight * 10 + Math.random() * 5000;  
		$flake.clone().appendTo('body').css({  
			left: startPositionLeft,  
			opacity: startOpacity,  
			'font-size': sizeFlake,  
			color: options.flakeColor  
		}).animate({  
			top: endPositionTop,  
		   left: endPositionLeft,  
			opacity: 0.2  
		},durationFall,'linear',function(){  
		   $(this).remove()  
		});  
		}, options.newOn);  
		};  
	})(jQuery);  
	$(function(){  
		$.fn.snow({   
			minSize: 5, /* 定义雪花最小尺寸 */  
		  maxSize: 50,/* 定义雪花最大尺寸 */  
			newOn: 300  /* 定义密集程度，数字越小越密集 */  
	   });  
	});  

	window.onload = function () {
				 var minSize = 5; //最小字体
				 var maxSize = 50;//最大字体
				 var newOne = 100; //生成雪花间隔
				 var flakColor = "#fff"; //雪花颜色
				 var flak = $("<div></div>").css({position:"absolute","top":"0px"}).html("❉");//定义一个雪花
				 var dhight = $(window).height(); //定义视图高度
				 var dw =$(window).width()-80; //定义视图宽度
				 setInterval(function(){
				 var sizeflak = minSize+Math.random()*maxSize; //产生大小不等的雪花
				 var startLeft = Math.random()*dw; //雪花生成是随机的left值
				 var startOpacity = 0.7+Math.random()*0.3; //随机透明度
				 var endTop= dhight-100; //雪花停止top的位置
				 var endLeft= Math.random()*dw; //雪花停止的left位置
				 var durationfull = 5000+Math.random()*5000; //雪花飘落速度不同
				 flak.clone().appendTo($("body")).css({
				 "left":startLeft ,
				 "opacity":startOpacity,
				 "font-size":sizeflak,
				 "color":flakColor
				 }).animate({
				 "top":endTop,
				 "left":endLeft,
				 "apacity":0.1
				 },durationfull,function(){
				 $(this).remove()
				 });
				 },newOne);
			 }

	/* 控制下雪 */
	function snowFall(snow) {
		/* 可配置属性 */
		snow = snow || {};
		this.maxFlake = snow.maxFlake || 200;   /* 最多片数 */
		this.flakeSize = snow.flakeSize || 10;  /* 雪花形状 */
		this.fallSpeed = snow.fallSpeed || 1;   /* 坠落速度 */
  }
   /* 兼容写法 */
   requestAnimationFrame = window.requestAnimationFrame ||
	   window.mozRequestAnimationFrame ||
	   window.webkitRequestAnimationFrame ||
	   window.msRequestAnimationFrame ||
	   window.oRequestAnimationFrame ||
	   function(callback) { setTimeout(callback, 1000 / 60); };

   cancelAnimationFrame = window.cancelAnimationFrame ||
	   window.mozCancelAnimationFrame ||
	   window.webkitCancelAnimationFrame ||
	   window.msCancelAnimationFrame ||
	   window.oCancelAnimationFrame;
   /* 开始下雪 */
   snowFall.prototype.start = function(){
	   /* 创建画布 */
	   snowCanvas.apply(this);
	   /* 创建雪花形状 */
	   createFlakes.apply(this);
	   /* 画雪 */
	   drawSnow.apply(this)
   }
   /* 创建画布 */
   function snowCanvas() {
	   /* 添加Dom结点 */
	   var snowcanvas = document.createElement("canvas");
	   snowcanvas.id = "snowfall";
	   snowcanvas.width = window.innerWidth;
	   snowcanvas.height = document.body.clientHeight;
	   snowcanvas.setAttribute("style", "position:absolute; top: 0; left: 0; z-index: 1; pointer-events: none;");
	   document.getElementsByTagName("body")[0].appendChild(snowcanvas);
	   this.canvas = snowcanvas;
	   this.ctx = snowcanvas.getContext("2d");
	   /* 窗口大小改变的处理 */
	   window.onresize = function() {
		   snowcanvas.width = window.innerWidth;
		   /* snowcanvas.height = window.innerHeight */
	   }
   }
   /* 雪运动对象 */
   function flakeMove(canvasWidth, canvasHeight, flakeSize, fallSpeed) {
	   this.x = Math.floor(Math.random() * canvasWidth);   /* x坐标 */
	   this.y = Math.floor(Math.random() * canvasHeight);  /* y坐标 */
	   this.size = Math.random() * flakeSize + 2;          /* 形状 */
	   this.maxSize = flakeSize;                           /* 最大形状 */
	   this.speed = Math.random() * 1 + fallSpeed;         /* 坠落速度 */
	   this.fallSpeed = fallSpeed;                         /* 坠落速度 */
	   this.velY = this.speed;                             /* Y方向速度 */
	   this.velX = 0;                                      /* X方向速度 */
	   this.stepSize = Math.random() / 30;                 /* 步长 */
	   this.step = 0                                       /* 步数 */
   }
   flakeMove.prototype.update = function() {
	   var x = this.x,
		   y = this.y;
	   /* 左右摆动(余弦) */
	   this.velX *= 0.98;
	   if (this.velY <= this.speed) {
		   this.velY = this.speed
	   }
	   this.velX += Math.cos(this.step += .05) * this.stepSize;

	   this.y += this.velY;
	   this.x += this.velX;
	   /* 飞出边界的处理 */
	   if (this.x >= canvas.width || this.x <= 0 || this.y >= canvas.height || this.y <= 0) {
		   this.reset(canvas.width, canvas.height)
	   }
   };
   /* 飞出边界-放置最顶端继续坠落 */
   flakeMove.prototype.reset = function(width, height) {
	   this.x = Math.floor(Math.random() * width);
	   this.y = 0;
	   this.size = Math.random() * this.maxSize + 2;
	   this.speed = Math.random() * 1 + this.fallSpeed;
	   this.velY = this.speed;
	   this.velX = 0;
   };
   // 渲染雪花-随机形状（此处可修改雪花颜色！！！）
   flakeMove.prototype.render = function(ctx) {
	   var snowFlake = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
	   snowFlake.addColorStop(0, "rgba(255, 255, 255, 0.9)");  /* 此处是雪花颜色，默认是白色 */
	   snowFlake.addColorStop(.5, "rgba(255, 255, 255, 0.5)"); /* 若要改为其他颜色，请自行查 */
	   snowFlake.addColorStop(1, "rgba(255, 255, 255, 0)");    /* 找16进制的RGB 颜色代码。 */
	   ctx.save();
	   ctx.fillStyle = snowFlake;
	   ctx.beginPath();
	   ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
	   ctx.fill();
	   ctx.restore();
  };
  /* 创建雪花-定义形状 */
  function createFlakes() {
	  var maxFlake = this.maxFlake,
		  flakes = this.flakes = [],
		  canvas = this.canvas;
	  for (var i = 0; i < maxFlake; i++) {
		  flakes.push(new flakeMove(canvas.width, canvas.height, this.flakeSize, this.fallSpeed))
	  }
  }
  /* 画雪 */
  function drawSnow() {
	  var maxFlake = this.maxFlake,
		  flakes = this.flakes;
	  ctx = this.ctx, canvas = this.canvas, that = this;
	  /* 清空雪花 */
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  for (var e = 0; e < maxFlake; e++) {
		  flakes[e].update();
		  flakes[e].render(ctx);
	  }
	  /*  一帧一帧的画 */
	  this.loop = requestAnimationFrame(function() {
		  drawSnow.apply(that);
	  });
  }
  /* 调用及控制方法 */
  var snow = new snowFall({maxFlake:60});
  snow.start();

	(function () {
		var a_idx = 0;
		window.onclick = function (event) {
			var a = new Array(
				 "❤申老师❤", "❤AI❤", "❤Python❤", "❤JavaScript❤", "❤Go❤", "❤C/C++❤",
				"❤富强❤", "❤民主❤", "❤文明❤", "❤和谐❤", "❤自由❤", "❤平等❤", "❤公正❤", "❤法治❤", "❤爱国❤",
				"❤敬业❤", "❤诚信❤", "❤友善❤", "❤PHP❤", "❤Java❤", "❤RUST❤", "❤C#❤", "❤C❤", "❤Vue❤", 
				"❤NodeJS❤", "❤Matlab❤", "❤Scratch❤", "❤Cython❤",);

			var heart = document.createElement("b"); //创建b元素
			heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

			document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
			a_idx = (a_idx + 1) % a.length;
			heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式

			var f = 16, // 字体大小
				x = event.clientX - f / 2, // 横坐标
				y = event.clientY - f, // 纵坐标
				c = randomColor(), // 随机颜色
				a = 1, // 透明度
				s = 1.2; // 放大缩小

			var timer = setInterval(function () { //添加定时器
				if (a <= 0) {
					document.body.removeChild(heart);
					clearInterval(timer);
				} else {
					heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
						c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
						s + ");";

					y--;
					a -= 0.016;
					s += 0.002;
				}
			}, 15)

		}
		// 随机颜色
		function randomColor() {

			return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
			.random() * 255)) + ")";

		}
	}());





	(function fairyDustCursor() {

		var possibleColors = ["#D61C59", "#E7D84B", "#1B8798"]
		var width = window.innerWidth;
		var height = window.innerHeight;
		var cursor = { x: width / 2, y: width / 2 };
		var particles = [];

		function init() {
			bindEvents();
			loop();
		}

		// Bind events that are needed
		function bindEvents() {
			document.addEventListener('mousemove', onMouseMove);
			window.addEventListener('resize', onWindowResize);
		}

		function onWindowResize(e) {
			width = window.innerWidth;
			height = window.innerHeight;
		}

		function onMouseMove(e) {
			cursor.x = e.clientX;
			cursor.y = e.clientY;

			addParticle(cursor.x, cursor.y, possibleColors[Math.floor(Math.random() * possibleColors.length)]);
		}

		function addParticle(x, y, color) {
			var particle = new Particle();
			particle.init(x, y, color);
			particles.push(particle);
		}

		function updateParticles() {

			// Updated
			for (var i = 0; i < particles.length; i++) {
				particles[i].update();
			}

			// Remove dead particles
			for (var i = particles.length - 1; i >= 0; i--) {
				if (particles[i].lifeSpan < 0) {
					particles[i].die();
					particles.splice(i, 1);
				}
			}

		}

		function loop() {
			requestAnimationFrame(loop);
			updateParticles();
		}

		/**
		 * Particles
		 */

		function Particle() {

			this.character = "*";
			this.lifeSpan = 120; //ms
			this.initialStyles = {
				"position": "fixed",
				"display": "inline-block",
				"top": "0px",
				"left": "0px",
				"pointerEvents": "none",
				"touch-action": "none",
				"z-index": "10000000",
				"fontSize": "25px",
				"will-change": "transform"
			};

			// Init, and set properties
			this.init = function (x, y, color) {

				this.velocity = {
					x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
					y: 1
				};

				this.position = { x: x + 10, y: y + 10 };
				this.initialStyles.color = color;

				this.element = document.createElement('span');
				this.element.innerHTML = this.character;
				applyProperties(this.element, this.initialStyles);
				this.update();

				document.querySelector('.js-cursor-container').appendChild(this.element);
			};

			this.update = function () {
				this.position.x += this.velocity.x;
				this.position.y += this.velocity.y;
				this.lifeSpan--;

				this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px, 0) scale(" + (this.lifeSpan / 120) + ")";
			}

			this.die = function () {
				this.element.parentNode.removeChild(this.element);
			}

		}

		/**
		 * Utils
		 */

		// Applies css `properties` to an element.
		function applyProperties(target, properties) {
			for (var key in properties) {
				target.style[key] = properties[key];
			}
		}

		if (!('ontouchstart' in window || navigator.msMaxTouchPoints)) init();
	})();    

	
	!function(){
	function n(n,e,t){
	return n.getAttribute(e)||t
	}
	 
	function e(n){
	return document.getElementsByTagName(n)
	}
	 
	function t(){
	var t=e("script"),o=t.length,i=t[o-1];
	 
	return{
	l:o,z:n(i,"zIndex",-1),o:n(i,"opacity",3),c:n(i,"color","255,0,0"),n:n(i,"count",160)
	}
	}
	 
	function o(){
	a=m.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,
	c=m.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight
	}
	 
	function i(){
	r.clearRect(0,0,a,c);
	var n,e,t,o,m,l;
	 
	s.forEach(function(i,x){
	for(i.x+=i.xa,i.y+=i.ya,i.xa*=i.x>a||i.x<0?-1:1,i.ya*=i.y>c||i.y<0?-1:1,r.fillRect(i.x-.5,i.y-.5,1,1),e=x+1;e<u.length;e++)n=u[e],
	null!==n.x&&null!==n.y&&(o=i.x-n.x,m=i.y-n.y,
	l=o*o+m*m,l<n.max&&(n===y&&l>=n.max/2&&(i.x-=.03*o,i.y-=.03*m),
	t=(n.max-l)/n.max,r.beginPath(),r.lineWidth=t/2,r.strokeStyle="rgba("+d.c+","+(t+.2)+")",r.moveTo(i.x,i.y),r.lineTo(n.x,n.y),r.stroke()))
	}),
	x(i)
	}
	var a,c,u,m=document.createElement("canvas"),
	d=t(),l="c_n"+d.l,r=m.getContext("2d"),
	x=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||
	 
	function(n){
	window.setTimeout(n,1e3/45)
	},
	 
	w=Math.random,y={x:null,y:null,max:2e4};m.id=l,m.style.cssText="position:fixed;top:0;left:0;z-index:"+d.z+";opacity:"+d.o,e("body")[0].appendChild(m),o(),window.onresize=o,
	window.onmousemove=function(n){
	n=n||window.event,y.x=n.clientX,y.y=n.clientY
	},
	 
	window.onmouseout=function(){
	y.x=null,y.y=null
	};
	for(var s=[],f=0;d.n>f;f++){
	var h=w()*a,g=w()*c,v=2*w()-1,p=2*w()-1;s.push({x:h,y:g,xa:v,ya:p,max:6e3})
	}
	u=s.concat([y]),
	setTimeout(function(){i()},100)
	}();
	