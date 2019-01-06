$(function(){
	// effect.1 选项卡 of part.1 页首导航
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


// effect.2 搜索框样式 of part.2 LOGO-搜索区
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


// effect.3 搜索框样式 of part.3 主导航 > module.2 行2.检索路径+结果
	$(".searchbox input").focus(function(){
		$(this).val('');
	}).blur(function(){
		if($(this).val()==''){
			$(this).val('在当前条件下搜索');
		}
	})


// html 行.231 为li插入背景图；a标签设置样式;ul设置宽度
	// module.3 高级检索
	// 1.
	var arrbg=['1.jpg','2.png','3.jpg','4.jpg','5.jpg','6.png','7.png','8.jpg','9.jpg','10.png','11.png','12.jpg','13.jpg','14.png','15.png','16.png'];
	for(var i=0;i<arrbg.length;i++){
		$('.brands-list li').eq(i).css('backgroundImage','url(assets/images/list/list-brands/'+arrbg[i]+')')
	}
	// 2.
	$('.brands-list li a').css({
		'lineHeight':'50px',
		'backgroundColor':'#fff',
		'color':'#ff0036',
	}).outerWidth($('.brands-list li').outerWidth()).outerHeight($('.brands-list li').outerHeight())
	// 3.
	$('.brands-list').width($('.brands-list li').outerWidth()*8-8);


// effect.4 鼠标事件：进入显示 of part.3 主导航 > module.3 行3.高级检索
	$('.brands-list li').mouseover(function(){
		$(this).find('a').css({
			'display':'block',
		});
	}).mouseout(function(){
		$(this).find('a').css({
			'display':'none',
		});
	})


// effect.5 鼠标事件：滑过+点击 of part.4 筛选filter > unit.1 排序sort
	$('#sort li').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
	}).mouseout(function(){
		$(this).removeClass('active');
	})
	$('#sort li').click(function(){
		
		if($(this).hasClass('checked')){
			$(this).siblings().andSelf().removeClass('checked');
			$('#default').addClass('checked');
		}else{
			$(this).addClass('checked').siblings().removeClass('checked');
		}
			// ($('#sort li:not(#default)'))
	})


// effect.6 鼠标事件：滑过+点击 of part.4 筛选filter > unit.4 视图viewType
	$('#viewType li').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
	}).mouseout(function(){
		$(this).removeClass('active');
	})
	$('#viewType li').click(function(){
		//已选定的节点取消选定，之后选定默认（第一个）节点
		if($(this).hasClass('checked')){
			$(this).siblings().andSelf().removeClass('checked');
			$('#default').addClass('checked');
		}else{
			$(this).addClass('checked').siblings().removeClass('checked');
		}
			// ($('#viewType li:not(#default)'))
	})


// effect.7 鼠标事件：点击,n++,赋值插入html，同时改变方向节点样式
		// part.4 筛选filter > unit.4 视图viewType
	$('#toPage p .firstChild').text(3);
	$('#toPage p .lastChild').text(2);
	var minus=parseInt($('#toPage p .firstChild').text());
	var plus=parseInt($('#toPage p .lastChild').text());
	// console.log(minus,plus);
	if(minus<=1){
		$('i.icon-zuo').addClass('disabled');
	}
	if(minus>=plus){
		minus=plus;
		$('#toPage p .firstChild').text(minus);
	}
	if(plus<=1){
		$('i.icon-zuo').addClass('disabled');
		$('i.icon-you').addClass('disabled');
	}
	if(minus==plus){
		$('i.icon-you').addClass('disabled');
	}
	if(minus<=plus && minus>=1 && plus>1){
		$('i.icon-zuo').on('click',function(){
			minus--;
			$('i.icon-you').removeClass('disabled')
			if(minus>=1){
				$('#toPage p .firstChild').text(minus);
			}
			if(minus<=1){
				minus=1;
				$(this).addClass('disabled');
			}else{
				$(this).removeClass('disabled');
			}
			
		})
		$('i.icon-you').on('click',function(){
			minus++;
			$('i.icon-zuo').removeClass('disabled');
			if(minus<=plus){
				$('#toPage p .firstChild').text(minus);
			}
			if(minus>=plus){
				minus=plus;
				$(this).addClass('disabled');
			}else{
				$(this).removeClass('disabled');
			}
		})
	}else{
		$('tpPage i.iconfont').css({
			'cursor':'auto',
			'background-color':'#EFEFEF',
		})
	}


// effect.8 瀑布流 of part.5 瀑布流waterfall
	$(window).scroll(function(){
		// console.log($(window).scrollTop());
		// console.log($(document).height()-$(window).innerHeight());

		if($(document).height()<8000){
			if($(window).scrollTop()>=$(document).height()-$(window).innerHeight()*2){
				$.ajax({
					'url':'index_waterfall_flow.php',
					'type':'get',
					'async':'true',
					'data':'length='+$('#wf-cont li').length,
					// +$('#wf-cont li').length,
					'success':function(msg){
						var arr=JSON.parse(msg);
						$.each(arr,function(index,value){
						 	$('#wf-cont').append($('#wf-cont li').eq(value).clone(true));
							// console.log(value);
						})
					}
				})
			}
		}
	})


// html 625行 aside.rightbar 设置高度
	$('.rightbar').css('height',$(window).innerHeight());
	$(window).resize(function(){
		$('.rightbar').css('height',$(window).innerHeight());
	})
// html 641行 ul.rightbar>li 插入背景
	var arrRightBar=['back','qrcode','2top'];
	for(var l=0;l<arrRightBar.length;l++){
		$('.rightbar-func li').eq(l).css({
			'backgroundImage':'url(assets/images/rightbar-'+arrRightBar[l]+'.png)'
		})
	}


})