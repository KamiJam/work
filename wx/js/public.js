
function timestampToDate(stamp){
	stamp = Number(stamp);
	
	
	var date = new Date(stamp);
	var year  = date.getFullYear();
	var month = (date.getMonth()+1)>=10?(date.getMonth()+1): "0"+(date.getMonth()+1);
	var day =  date.getDate() >=10 ? date.getDate() : "0"+date.getDate();
	return  year + "-" + month + "-"+day;
}
function companyJob(comp,job){
	if(comp != ""){
		if(job != ""){
			return comp+"·"+job;
		}else{
			return comp;
		}
	}else{
		if(job != ""){
			return job;
		}else{
			return "暂无信息";
		}
	}
}

function info(message,period,func){
	$.showToast(message,period,func);
}
//非模态框
$.extend({
	showToast : function(message,period,func) {
	period = period || 1650;
	var alert = document.getElementById("toast");
	
	if(alert)return;
	if (alert == null) {
		var toastHTML = '<div id="toast" class="cust_toast">' + message + '</div>';
		document.body.insertAdjacentHTML('beforeEnd', toastHTML);
		
		var w = window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;
			console.log(document.getElementById("toast").clientWidth);
			
		document.getElementById("toast").style.opacity = 0;
		document.getElementById("toast").style.display = "block";
		document.getElementById("toast").style.left = w/2-document.getElementById("toast").clientWidth/2 + "px";
		
		document.getElementById("toast").style.opacity = 0.9;
	}
	
	setTimeout(function() {
		var alert = document.getElementById("toast");
		alert.style.opacity = 0;
		alert.parentNode.removeChild(alert);
		if(func&&typeof(func)=="function")
			func.call(null);
	}, period);
	
}});

function timestampToDate2(stamp){
	stamp = Number(stamp);
	
	
	var date = new Date(stamp);
	var year  = date.getFullYear();
	var month = (date.getMonth()+1)>=10?(date.getMonth()+1): "0"+(date.getMonth()+1);
	var day =  date.getDate() >=10 ? date.getDate() : "0"+date.getDate();
	var hour = date.getHours() >=10 ? date.getHours() : "0"+date.getHours();
	var mins = date.getMinutes() >=10 ? date.getMinutes() : "0"+date.getMinutes();
	return  year + "-" + month + "-"+day + " " +hour+":"+mins;
}


/**
 * @param {Object} selecter JQ选择器
 */
function noDataDiv(selecter){
	$(".dropload-down").hide();
	selecter.append('<div class="nodatadiv"></div>');
}

//自定义loading框
function addloading(){
	var html = '<div class="zhezhaobg" id="loadingzhezhao" style="display: none;"><div class="zhezhaoColor"></div><div class="zhezhaoDiv"><div class="TipDivBg" style="background: none;"></div><div class="TipText"><div class="spinner"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div></div></div></div>';
	if(!document.getElementById("loadingzhezhao"))
	$("body").append(html);
}
function showloading(){
	addloading();
	$("#loadingzhezhao").show();
}
function hideloading(){
	if($("#loadingzhezhao")){
		$("#loadingzhezhao").hide();
	}
	if($("#loadingzhezhao2")){
		$("#loadingzhezhao2").hide();
	}
}


//图片切成正方形
function squareImg(src){
	return src.replace(/!richimg/g,"")+"!squareprod";
}
//列表单图样式
function singleImg(src){
	return src.replace(/!richimg/g,"")+"!listpic";
}

//跳转名片页
function jumpCard(th){
    window.event.stopPropagation();
    if(!isNaN($(th).attr("data-cardid"))){
    	window.location.href = cardUrl + "?id=" + $(th).attr("data-cardid");
    }
}



/**
 * conf：微信配置
 * sharedata：分享数据
 */
function wxshare(conf,sharedata){
	wx.config({
	    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
	    appId: conf.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
	    timestamp: conf.timestamp, // 必填，生成签名的时间戳
	    nonceStr: conf.nonceStr, // 必填，生成签名的随机串
	    signature: conf.signature,// 必填，签名，见附录1
	    jsApiList:  ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});
	wx.ready(function(){
	
	    // config信息验证后会执行ready方法，
		//所有接口调用都必须在config接口获得结果之后，
		//config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，
		//则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，
		//则可以直接调用，不需要放在ready函数中。
		wx.onMenuShareTimeline({
		    title: sharedata.title, // 分享标题
		    link: sharedata.link, // 分享链接
		    imgUrl: sharedata.imgUrl, // 分享图标
		    success: function () {
		        // 用户确认分享后执行的回调函数
//		        info("分享成功");
		    },
		    cancel: function () {
		    	
		        // 用户取消分享后执行的回调函数
//		        info("取消分享");
		    }
		});
		wx.onMenuShareAppMessage({
		    title: sharedata.title, // 分享标题
		    desc: sharedata.desc, // 分享描述
		    link: sharedata.link, // 分享链接
		    imgUrl: sharedata.imgUrl, // 分享图标
		    type: 'link', // 分享类型,music、video或link，不填默认为link
		    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		    success: function () {
		        // 用户确认分享后执行的回调函数
//		        info("分享成功");
		    },
		    cancel: function () {
		        // 用户取消分享后执行的回调函数
//		        info("取消分享");
		    }
		});
	});
	wx.error(function(res){
		info(res);
	    // config信息验证失败会执行error函数，
	    //如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，
	    //也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
	
	});
}
//禁用菜单栏
function wxhideMenu(conf){
	wx.config({
	    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
	    appId: conf.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
	    timestamp: conf.timestamp, // 必填，生成签名的时间戳
	    nonceStr: conf.nonceStr, // 必填，生成签名的随机串
	    signature: conf.signature,// 必填，签名，见附录1
	    jsApiList:  [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});
	
	wx.ready(function(){
		wx.hideOptionMenu();
	});
}

//layer prompt
function layerPrompt(ph,yesFunc,noFunc){
	layer.open({
		title: [
			'添加标签',
			'background-color:#0ac48f; color:#fff;height:50px;line-height:50px;'
		],
		anim: 'up',
		content: '<textarea class="layer-input" placeholder="'+ph+'" ></textarea>',
		btn: ['确认', '取消'],
		yes: yesFunc,
		no: noFunc
	});
}
