$(function(){

// effect.1 选项卡 of part.2>module.2 右侧网址导航
	$('.haslist').mouseover(function(){
		$(this).css({'background':'#fff'}).find('#iconbymarks-2down').css({
			'transform': 'rotate(180deg)',
			'transformOrigin':'50% 25%',
		}).end().find('.navlist').show();
	}).mouseout(function(){
		$(this).css('background','transparent').find('#iconbymarks-2down').css({
			'transform': 'rotate(0)',
			'transformOrigin':'50% 25%',
		}).end().find('.navlist').hide();
	})
	//手机版
	$('.verphone a').mouseover(function(){
		$(this).siblings('.phone-list').show();
	}).mouseout(function(){
		$(this).siblings('.phone-list').hide();
	})

	$('.phone-list').mouseover(function(){
		$(this).show();
	}).mouseout(function(){
		$(this).hide();
	})


// effect.2 搜索框样式 of part.3 搜索栏
	// 行.177
	$('#search').focus(function(){
		if($(this).val()=='搜索 天猫 商品/品牌/店铺'){
			$(this).val('').attr('placeholder','搜索 天猫 商品/品牌/店铺');
		}
		$(this).css('color','#333');
	}).blur(function(){
		if($(this).val()==''){
			$(this).val('搜索 天猫 商品/品牌/店铺').attr('placeholder','');
			$(this).css('color','#666');
		}
	})


// html 314行: 元素section.goods-link 子元素div 添加class:clearfix
	$('.goods-link>div').addClass('clearfix');


// effect.3 选项卡 of part.4 横幅-菜单
	// 颜色数组
	var arr=['#e54077','#427def','#6347ed','#e54077','#6347ed','#427def','#fa5c5c','#f7a831','#f7a831','#427def','#dd2727','#427def','#f7a831','#3bc7b0','#dd2727','#3bc7b0'];
	//设置a标记颜色,与左侧选项同色
	$('.goods-link a.setcolor').each(function(){
		$(this).css('color',arr[$(this).parent().parent().parent().parent().index()]);
		// console.log($(this).parent().parent().parent().parent().index());
	})
	//选项卡事件 $('.menu-opts li').eq()
	$('.menu-opts li').mouseover(function(){
		$(this).css('backgroundColor','#fff');
		$(this).find('a').add($(this).find('a').siblings()).css('color',arr[$(this).index()]);
		$('.menu-cont li').eq($(this).index()).show().siblings().hide();
	}).mouseout(function(){
		$(this).css('backgroundColor','transparent');
		$(this).find('a').add($(this).find('a').siblings()).css('color',"#fff");
		$('.menu-cont li').eq($(this).index()).hide();
	})
	$('.menu-cont li').mouseover(function(){
		$('.menu-opts li').eq($(this).index()).css('backgroundColor','#fff');
		$('.menu-opts li').eq($(this).index()).find('a').add($('.menu-opts li').eq($(this).index()).find('a').siblings()).css('color',arr[$('.menu-opts li').eq($(this).index()).index()]);
		$(this).show().siblings().hide();
	}).mouseout(function(){
		$('.menu-opts li').eq($(this).index()).css('backgroundColor','transparent');
		$('.menu-opts li').eq($(this).index()).find('a').add($('.menu-opts li').eq($(this).index()).find('a').siblings()).css('color',"#fff");
		$(this).hide();
	})

// effect.4 轮播图 of part.4 横幅-菜单
	// carousel
	// 1.插入轮播用图
		//声明图像路径数组
	var arrpic=['1.webp','2.jpg','3.jpg','4.jpg','5.webp','6.webp']
		//插入图像
	for(var i=0;i<arrpic.length;i++){
		$('#showbox #pics li').eq(i).css('backgroundImage','url(assets/images/index-carousel/carousel_0'+arrpic[i]+')')
	}
	// 2.小图事件：鼠标划入变色
	$('#pics li a').mouseover(function(){
		$(this).children('span').fadeIn(1000);
	}).mouseout(function(){
		$(this).children('span').stop().fadeOut(1000);
	})
	// 3.轮播图
	var tips=0;
	function p_i(){
		$('#pics li').eq(tips).show().siblings().hide();
		$('#indi li').eq(tips).addClass('active').siblings().removeClass('active');
	}
	function auto(){
		timer=setInterval(function(){
			p_i();
			tips++;
			if(tips>=$('#pics li').length){
				tips=0;
			}
		},3000)
	}
	auto();
	$('#pics li').mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
		auto();
	})
	$('#indi li').mouseover(function(){
		tips=$(this).index();
		p_i();
	})



// html 748行 元素ul.marks 子节点li 添加图片
	// 1.声明图像路径数组
	var arrmarks=['1.jpg','2.png','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.png','13.png','14.jpg','15.png','16.jpg','17.png','18.jpg','19.jpg','20.png','21.webp','22.png','23.png','24.jpg','25.jpg','26.png','27.png','28.jpg','29.jpg']
	// 2.遍历数组 赋值
	for(var j=0;j<arrmarks.length;j++){
		$('.marks li').eq(j).css('backgroundImage','url(assets/images/index-markwall/'+arrmarks[j]+')');
		// console.log('assets/images/index-markwall/'+arrmarks[j]);
	}


// effet.5 鼠标移入事件 of part.6 商标墙
	$('.marks li:not(.replace)').on('mouseover',function(){
		$(this).find('a').animate({'opacity':'1'},100);
	}).on('mouseout',function(){
		$(this).find('a').stop().animate({'opacity':'0'},100);
	})
	$('.marks li.replace').mouseover(function(){
		$(this).find('i.iconfont').addClass('rotate');
	}).mouseout(function(){
		$(this).find('i.iconfont').removeClass('rotate')
	})


// effet.6 轮播图 of part.7 楼层内容-module.1 天猫超市
	var m=true;
	function caro(num){
		$('.sec-opts').children('div').eq(num).addClass('active').siblings('div').removeClass('active');
		$('.sec-cont').children('a').eq(num).addClass('show').siblings('a').removeClass('show');
	}
	function auto2(){
		timer2=setInterval(function(){
			if(m){
				caro(1)
			}else{
				caro(0);
			}
			m=!m;
		},3000)
	}
	auto2();
	$('.floor-carousel-1').mouseover(function(){
		clearInterval(timer2);
	}).mouseout(function(){
		auto2();
	})


// effect.7 瀑布流 of part.7 楼层内容 module.8 猜你喜欢
	$(window).scroll(function(){
		// console.log($(window).scrollTop());
		// console.log($(document).height()-$(window).innerHeight());

		if($(document).height()<9000){
			if($(window).scrollTop()>=$(document).height()-$(window).innerHeight()*2){
				// $(window).innerHeight()*2 不到底加载，瀑布流结束前不显示出.footer
				$.ajax({
					'url':'assets/php/index_waterfall_flow.php',
					'type':'get',
					'async':'true',
					'data':'length='+$('.wonder .tmall-floor-cont li').length,
					// +$('.wonder .tmall-floor-cont li').length,
					'success':function(msg){
						var arr=JSON.parse(msg);
						$.each(arr,function(index,value){
							$('.wonder .tmall-floor-cont li').eq(value).css('marginLeft','13px');
						 	$('.wonder .tmall-floor-cont').append($('.wonder .tmall-floor-cont li').eq(value).clone(true));
			 				// html 1609行 js调整 第1个和第5*n个li的左外边距
						 	for(var k=0;k<Math.ceil($('.wonder .tmall-floor-cont li').length/5);k++){
								$('.wonder .tmall-floor-cont li').eq(5*k).css('marginLeft','3px');
							}
							// console.log(value);
						})
					}
				})
			}
		}
	})

	
// html 1609行 js调整 第1个和第5*n个li的左外边距
	// console.log(Math.ceil($('.wonder .tmall-floor-cont li').length/5));
	 for(var k=0;k<Math.ceil($('.wonder .tmall-floor-cont li').length/5);k++){
	 	$('.wonder .tmall-floor-cont li').eq(5*k).css('marginLeft','3px');
	 }


// effect.8 楼层 of part.8 楼层提示
	// 1.toTop
	$('.floor-indi>a').click(function(){
		$(window).scrollTop(0);
	})
	// 2.toAppointFloor
	// $('.tmall-floor').each(function(){
	// 	console.log($(this).offset().top)
	// });
	$('.floor-indi ul li').click(function(){
		$('html').animate({
			scrollTop:$('.tmall-floor').eq($(this).index()).offset().top
		},1000);
	})
	// 3.绑定指示器
	var arrfloor=[];
	for(var m=0;m<$('.tmall-floor').length;m++){
		arrfloor[arrfloor.length]=$('.tmall-floor').eq(m).offset().top;
	}
	// console.log(arrfloor);
	// console.log($(window).innerHeight())
	$(window).scroll(function(){
		for(var n=0;n<arrfloor.length;n++){
			if($(window).scrollTop()>=arrfloor[n]-$(window).innerHeight()/2 && $(window).scrollTop()<arrfloor[n+1]-$(window).innerHeight()/2){
				$('.floor-indi>ul>li').eq(n).css({
					backgroundColor:'#f00',
				}).siblings().css('backgroundColor','rgba(0,0,0,.6)')
			}else if( $(window).scrollTop()>=arrfloor[arrfloor.length-1]-$(window).innerHeight()/2){
				$('.floor-indi>ul>li').eq(arrfloor.length-1).css({
					backgroundColor:'#f00',
				}).siblings().css('backgroundColor','rgba(0,0,0,.6)')
			}else if($(window).scrollTop()<arrfloor[0]-$(window).innerHeight()/2){
				$('.floor-indi>ul>li').eq(0).css('backgroundColor','rgba(0,0,0,.6)')
			}
		}
		// 4.滚动到指定距离显示楼层指示器
		if($(window).scrollTop()>=$('.brandwall').offset().top){
			$('.floor-indi').show(200);
		}else{
			$('.floor-indi').hide(200);
		}
	})


// effet.9 输入框样式 (同 effect.2) of part.9 定位切换
	$('#hide-search').focus(function(){
		if($(this).val()=='搜索 天猫 商品/品牌/店铺'){
			$(this).val('').attr('placeholder','搜索 天猫 商品/品牌/店铺');
		}
		$(this).css('color','#333');
	}).blur(function(){
		if($(this).val()==''){
			$(this).val('搜索 天猫 商品/品牌/店铺').attr('placeholder','');
			$(this).css('color','#666');
		}
	})


// effets.10 定位切换 of part.9 定位切换
	$(window).scroll(function(){
		if($(window).scrollTop()>1000){
			$('.show-hide-wrap').slideDown(200);
		}else{
			$('.show-hide-wrap').slideUp(200);
		}
	})


// html 1706行 aside.rightbar 设置高度
	$('.rightbar').css('height',$(window).innerHeight());
	$(window).resize(function(){
		$('.rightbar').css('height',$(window).innerHeight());
	})

// html 1722 ul.rightbar>li 插入背景
	var arrRightBar=['back','qrcode','2top'];
	for(var l=0;l<arrRightBar.length;l++){
		$('.rightbar-func li').eq(l).css({
			'backgroundImage':'url(assets/images/rightbar-'+arrRightBar[l]+'.png)'
		})
	}

})