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


// effect.2 放大镜 of Part.4>module.1>unit.1 上部放大镜
	$('.smPic').mousemove(function(e){
		var left=e.pageX-$(this).offset().left-$('.showbox').width()/2;
		var top=e.pageY-$(this).offset().top-$('.showbox').height()/2;
		if(left<=0){
			left=0;
		}else if(left>=$(this).innerWidth()-$('.showbox').outerWidth()){
			left=$(this).innerWidth()-$('.showbox').outerWidth();
		};
		if(top<=0){
			top=0;
		}else if(top>=$(this).innerWidth()-$('.showbox').outerWidth()){
			top=$(this).innerHeight()-$('.showbox').outerHeight();
		};
		$('.showbox').show().css({
			'left':left+'px',
			'top':top+'px',
		});
		var rateX=left/$(this).width();
		var rateY=top/$(this).height();
		var lgLeft=-$('.lgPic img').width()*rateX;
		var lgTop=-$('.lgPic img').height()*rateY;
		$('.lgPic').show().children($('.lgPic img')).css({
			'left':lgLeft+'px',
			'top':lgTop+'px',
		})
	}).mouseout(function(){
		$('.showbox').add($('.lgPic')).hide();
	})
	$('.caro li').mouseover(function(){
		var src=$(this).children($('.caro li img')).attr('src');
		$('.lgPic img').attr('src',src);
		$('.smPic img').attr('src',src);
	});


// effect.3 二级选单联动 part.4 > module.2 >unit.3 运费carriage
		// 点击显示选单
	$('.destination').click(function(){
		$('.selectDest').slideToggle(200);
	});
		// 声明对象
	var addr={
		// 省份
		'0':{
			'1':'北京',
			'2':'河北',
			'3':'山东',
			'4':'山西',
			'5':'重庆',
		},
		// 北京
		'1':{
			'1':'西城区',
			'2':'东城区',
			'3':'朝阳区',
			'4':'昌平区',
			'5':'通州区',
		},
		'2':{
			'1':'石家庄',
			'2':'保定',
			'3':'廊坊',
			'4':'邢台',
			'5':'临漳',
		},
		// 山东
		"3":{
			"1":"济南",
			"2":"青岛",
			"3":"淄博",
			"4":"德州",
			"5":"威海"
		},
		// 山西
		"4":{
			"1":"太原",
			"2":"大同",
			"3":"长治",
			"4":"阳泉",
			"5":"吕梁"
		},
		// 重庆
		"5":{
			"1":"渝中区",
			"2":"江北区",
			"3":"渝北区",
			"4":"沙坪坝",
			"5":"合川区",
		},
	};
		// 填充省份节点内容
	var strpro='<option value="0">请选择</option>'
	for(var i in addr[0]){
		strpro+='<option value="'+i+'">'+addr[0][i]+'</option>';
	}
	// console.log(strpro);
	$("#pro").html(strpro);
		// 触发事件change
	$("#pro").change(function(){
		var value=$("#pro").val();
		if(value=="0"){
			$('#cities').children("#city").andSelf().hide();
		}else{
			$('#cities').children("#city").andSelf().show();
			var strcity='<option value="0">请选择</option>'
			for(var j in addr[value]){
				strcity+='<option value="'+j+'">'+addr[value][j]+'</option>'
			}
			$('#city').html(strcity);
		}
	})
	$("#city").change(function(){
		if($('#city').val()=="0"){
			$('.destination').html('请选择城市/区县');
		}else{
			var cont=$("#city option").eq($('#city').val()).html();
			$('.destination').html(cont);
			$('.selectDest').slideUp(200);
		}
	})


// html.1 行.308 js 为unit.5每个li添加节点i.checked
	$(".order-all li").append('<i class="icon-checked"></i>')
// effect.4 鼠标事件：鼠标滑过显示红色边框，点击显示i.checked
			// part.4 >  module.5 > cell.2 套装类型
	$(".order-all li").click(function(){
		$(this).toggleClass('checked').siblings().removeClass('checked');
	})


// effect.5 鼠标事件：鼠标点击增减数字 html行.313 
			// part.4 >  module.5 > cell.2 套装类型
	$(".counter .plus").click(function(){
		// console.log(typeof $(".counter .shownum").val());
		var num=parseInt($(".counter .shownum").val());
		num++;
		$(".counter .shownum").val(num);
	})
	$(".counter .minus").click(function(){
		var num=parseInt($(".counter .shownum").val());
		num--;
		if(num<=0){
			num=0;
		}
		$(".counter .shownum").val(num);
	})
		// 用户输入
	$(".counter .shownum").change(function(){
		// console.log(!parseInt($(this).val()));
		if(!parseInt($(this).val())){
			$(".counter .shownum").val('1');
		}else{
			$(".counter .shownum").val(parseInt($(this).val()));
		}
	})


// effect.5 鼠标事件：鼠标点击增减数量 html.行.381
			// part.4 >  module.5 > cell.5 服务承诺ensure 支付方式
	$('.tm-pay b').click(function(){
		$(this).siblings('.tm-paylist').toggleClass('show');
	})


// effect.6 选项卡
		// part.5>module.1>unit.5 宝贝排行榜 html.行.503
	$('.rank-basis li').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.rank-list li').eq($(this).index()).show().siblings().hide();
	})


// html.2 行.570 js 添加img节点 共19张 
	var str='';
	for(var i=1;i<=19;i++){
		str+='<img src="assets/images/details/detail-pics'+i+'.jpg" alt="" />';	
	}
	// console.log(str);
	$('#detail-box .picsbox').html(str);
	// 前三张加下边距
	// console.log($('#detail-box .picsbox img').size());
	for(var j=0;j<$('#detail-box .picsbox img').size();j++){
		if(j<3){
			$('#detail-box .picsbox img').eq(j).css('marginBottom','10px');
		}
	}


// effect.7 选项卡 of part.5>module.2 右侧列表
	$('#tabbar-box li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		for(var i=0;i<$('#detail-box>.detail>li').size();i++){
			$('#detail-box>.detail>li').eq(i).show();
			if(i<$(this).index()){
				$('#detail-box>.detail>li').eq(i).hide();
			}
			if(i==0){
				$('#detail-box>.detail>li').eq(1).hide();
			}
		}
		// console.log($(this).index());
		$('#detail-box>.detail>li').eq($(this).index()).show();
	})

// effect.8 ajax添加节点 of part.5>module.2>unit.3 瀑布流(伪) html 行.651
	$.ajax({
		url:'assets/php/details.php',
		type:'post',
		async:'true',
		success:function(msg){
			 var arr=JSON.parse(msg);
			// console.log(msg);
			$.each(arr,function(index,value){
				var str='<li><a href=""><img '+arr[index][0]+' alt=""><\/a><p>&yen;<span>'+arr[index][1]+'<\/span><\/p><\/li>';
				// console.log(arr[index][0]);
				$('#waterfall .wf-list').append(str);
				// 多添加几次 撑起高度
				$('#waterfall .wf-list').append(str);
				$('#waterfall .wf-list').append(str);
			})
		}
	})


// html 679行 aside.rightbar 设置高度
	$('.rightbar').css('height',$(window).innerHeight());
	$(window).resize(function(){
		$('.rightbar').css('height',$(window).innerHeight());
	})
// html 695行 ul.rightbar>li 插入背景
	var arrRightBar=['back','qrcode','2top'];
	for(var l=0;l<arrRightBar.length;l++){
		$('.rightbar-func li').eq(l).css({
			'backgroundImage':'url(assets/images/rightbar-'+arrRightBar[l]+'.png)'
		})
	}


})
