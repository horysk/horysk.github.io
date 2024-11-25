(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$(".toggle-password").click(function() {

	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});

})(jQuery);





$("button").click(function(){
	// 获取输入框
	var phoneInput = $("#phonenumber");
	// 获取输入框内容
	var phonenumber = $("#phonenumber").val();
	var password = $("#password-field").val();
	var Actcode = $("#password-field1").val();
	
	// 验证手机号码格式
	function isPoneAvailable(phoneInput){
	var myreg= /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	if (!myreg.test(phonenumber)) {
		window.alert("请输入正确的手机号");
	// $("#phone_msg").html("请输入正确的手机号格式");
	return false;
	} else {
	// $("#phone_msg").html("验证成功，此条可不显示");
	window.alert("手机号可用，请联系管理员注册");
	const Http = new XMLHttpRequest();
	
	return true;
	}
	}
	isPoneAvailable();
	})
	