$(function() {
	//单页面导航插件
	$('.nav').singlePageNav({
		offset: 80
	});
	//按钮菜单
	function button(){
		var window_width=$(window).width();
		function toggleClose(){
			//显示关闭按钮
			$('.navbar-toggle').hide();
			$('.navbar-close').show();
		}
		function closeToggle(){
			//不显示关闭按钮,显示菜单按钮
			$('.navbar-close').hide();
			$('.navbar-toggle').show();
		}
		if(window_width<=640){
			$('.navbar-toggle').click(function() {
				toggleClose();
				$('#navbar').slideDown('fast');
			});
			$('.navbar-close').click(function() {
				closeToggle();
				$('#navbar').slideUp('fast');
			});
			$('#navbar a').click(function() {
				closeToggle();
				$('#navbar').slideUp();
			});
			//home换张小图片
			$('#home .background-pictures .home-content img').attr('src','img/curry2.png');
		}
		else{
			$('#navbar').show();
			$('.navbar-toggle').hide();
			$('#navbar a').click(function() {
				$('#navbar').slideDown();
			});
		}
	}
	$(window).on('resize',button).trigger('resize');
	//动画插件
	new WOW().init();
	//返回顶部
	var back_timer = '';
	$(window).scroll(function() {
		var top = $(window).scrollTop();
		(top > 500) ? $('.back-top').show(): $('.back-top').hide();
	});
	$('.back-top').click(function() {
		back_timer = setInterval(function() {
			$(window).scrollTop($(window).scrollTop() - 500);
			if($(window).scrollTop() <= 0) {
				clearInterval(back_timer);
			}
		}, 50)
	});
	//	experience轮播
	var c = 0; //总变量
	$('#experience ul li').mouseover(function() {
		if(status == 0) {
			clearInterval(timer); //清除定时器
			$(this).addClass('active').siblings().removeClass();
			var i = $(this).index();
			$('#experience .list div').eq(i).show().siblings().hide();
		}
	});
	$('#experience ul li').mouseout(function() {
		timer = setInterval(run, 2000);
	});
	var timer = '';
	timer = setInterval(run, 2000);

	function run() {
		if(c > 2) {
			c = 0;
		}
		$('#experience ul li').eq(c).addClass('active').siblings().removeClass();
		$('#experience .list div').eq(c).show().siblings().hide();
		c++;
	}
});