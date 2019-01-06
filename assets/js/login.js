
$(function(){
// effect.1 二维码登录-滑动特效
	$('.qrcode').mouseover(function(){
		$(this).animate({'left':'15px'},500,function(){
			$('.scanqr').fadeIn(200);
		})
	}).mouseout(function(){
		$(this).stop();
		$('.scanqr').fadeOut(200,function(){
			$('.qrcode').animate({'left':'80px'},500);
		})
	})

// effect.2 二维码/密码登录切换-点击右上角
	//声明全局变量，表示初始状态
	var state=true;
	$('#toggle').click(function(){		
		if(state==true){
				$(this).removeClass('iconfont icon-diannao').addClass('iconfont icon-erweimajiaobiao');
				$(this).siblings('#pw').addClass('show').siblings('#qr').removeClass('show');
				$(this).siblings('.tips').find('p .cont').text('扫码登录更安全');
				state=false;
		}else if(state==false){
			$(this).removeClass('iconfont icon-erweimajiaobiao').addClass('iconfont icon-diannao');
			$(this).siblings('#qr').addClass('show').siblings('#pw').removeClass('show');
			$(this).siblings('.tips').find('p .cont').text('密码登录在这里');
			state=true;
		}
		// $('.tips').css('display','block');
		// setTimeout(function(){
		// 	$('.tips').css('display','none');
		// },5000)
	})

	// 二维码登录-点击切换-右下标签（密码登录）
	$('a#changepw').click(function(){
		$('#toggle').removeClass('iconfont icon-diannao').addClass('iconfont icon-erweimajiaobiao');
		$('#toggle').siblings('#pw').addClass('show').siblings('#qr').removeClass('show');
		$('#toggle').siblings('.tips').find('p .cont').text('扫码登录更安全');
		state=false;
	})



// effect.3 用户名 Ajax数据提交响应
	$('#username input').blur(function(){
		console.log($('#pw form').serialize());
		$.ajax({
			'url':'assets/php/login.php',
			'type':'post',
			'async':true,
			'data':$('#pw form').serialize(),
			'success':function(msg){
				// console.log(msg);
				if($('#username input').val()!=''){
					if(msg=='n'){
						$('#info').show().find('#cont').text('不存在的用户名')
					}else{
						$('#info').hide();
					}
				}
				
			}
		})
	})

// effect.4 密码正则验证
	var patt=/^[a-z][1-9a-zA-Z@_]{5,8}$/;
	$('#password input').blur(function(){
		if($('#password input').val()==''){
			$('#info').show().find('#cont').text('请输入密码')
		}else if(!patt.test($('#password input').val())){
			$('#info').show().find('#cont').text('密码格式错误')
		}else{
			$('#info').hide();
		}
	})
		

// 你输入的密码和账户名不匹配，是否忘记密码或忘记会员名








})	