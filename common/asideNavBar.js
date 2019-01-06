// html n行 aside.rightbar 设置高度
	$('.rightbar').css('height',$(window).innerHeight());
	$(window).resize(function(){
		$('.rightbar').css('height',$(window).innerHeight());
	})
// html m行 ul.rightbar>li 插入背景
	var arrRightBar=['back','qrcode','2top'];
	for(var l=0;l<arrRightBar.length;l++){
		$('.rightbar-func li').eq(l).css({
			'backgroundImage':'url(assets/images/rightbar-'+arrRightBar[l]+'.png)'
		})
	}