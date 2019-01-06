$(function(){
//1. 遮罩层宽高
	$('#shield').show().css({
		width:$(document).width(),
		height:$(document).height(),
	})
	$('#agreement').show().css({
		left:$(window).innerWidth()/2-$('#agreement').outerWidth()/2,
		top:$(window).innerHeight()/2-$('#agreement').outerHeight()/2,
	})
		// -点击关闭遮罩层
	$('#agreement button').on('click',function(){
		$('#shield').add($('#agreement')).hide();

	})

//2. 拖拽
	$('#agreement').mousedown(function(e){
		//固定距离差
		var dx=e.pageX-$(this).offset().left;
		var dy=e.pageY-$(this).offset().top;
		// console.log($(this).scrollLeft());
		$(document).mousemove(function(ent){
			// 位置偏移值
			var left=ent.pageX-dx;
			var top=ent.pageY-dy;
			// console.log(left);
			//最大距离判断
			var maxleft=$(this).width()-$('#agreement').outerWidth();
			var maxtop=$(this).height()-$('#agreement').outerHeight();
			if(left<=0){
				left=0;
			}else if(left>=maxleft){
				left=maxleft;
			}
			if(top<=0){
				top=0;
			}else if(top>=maxtop){
				top=maxtop;
			}
			console.log(left,top);
			//赋值
			$('#agreement').css({
				'left':left+'px',
				'top':top+'px',
			})
		})
	}).mouseup(function(){
		$(document).off('mousemove');
	})



//3. 电话地区选择
	$('#select .showbox').click(function(){
		$(this).next().toggleClass('show');
	})
	$('#select .optslist li').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
	}).click(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		$('.showbox span.fl').html($(this).find('span.fl').html());
		$('.showbox span.fr').html($(this).find('span.fr').html());
		$('#select .optslist').removeClass('show');
	})
		//-鼠标移动到下侧，滚动条自动滚动
	var optslist=document.getElementsByClassName('optslist')[0];
	// console.log(optslist);
	$('#select .optslist').mousemove(function(e){
		var mousetop=e.clientY;
		// console.log(mousetop);
		if(mousetop>=220){
			ss=setInterval(function(){
				optslist.scrollBy(0,1)
			},20);
		}
	}).mouseout(function(){
		clearInterval(ss);
	})
// 4. 电话号码正则
	var patt=/^1((3[0-9])|(5[0-9])|(8[0,9])|47|66|(7[013678]))[0-9]{8}$/
	$('.phone input').blur(function(){
		// console.log($(this).val());
		$(this).next('.erro').show();
		if($(this).val()==''){
			$(this).next('.erro').find('i.iconfont').removeClass('icon-dui').addClass('icon-cuo').css({
				'color':'#f40',
			}).next().text('请输入你的手机号');
		}else if(patt.test($(this).val())){
			$(this).next('.erro').find('i.iconfont').removeClass('icon-cuo').addClass('icon-dui').css({
				'color':'#6bc827',
			});
			$('.info').text('');
		}else{
			$(this).next('.erro').find('i.iconfont').removeClass('icon-dui').addClass('icon-cuo').css({
				'color':'#f40',
			}).next().text('手机号码格式不正确，请重新输入');
		}
		
	})




})