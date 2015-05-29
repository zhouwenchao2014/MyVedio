window.onload=function(){
	var width=$("video")[0].offsetWidth;
	$($("#controlBar")[0]).css("width",(width+20)+"px");
	$($("#playControlls")[0]).css("left",width*0.015+"px");
	$($("#timebar")[0]).css("left",width*0.089+"px");
	$($("#timebar")[0]).css("width",width*0.58+"px");
	$($("#alltime")[0]).css("left",width*0.69+"px");
	$($("#nowTime")[0]).css("left",width*0.025+"px");
	$($("#voiceBar")[0]).css("left",width*0.79+"px");
	$($("#voicePic")[0]).css("left",width*0.76+"px");
	$($("#fullScreen")[0]).css("left",width*0.99+"px");

}
function getTime(s){
	debugger
	var h=parseInt(s/3600);
	var m=parseInt((s-h*3600)/60);
	var min=parseInt(s-h*3600-m*60);
	if(m<=9){
		m="0"+m.toString();
	}
	if(min<=9){
		min="0"+min.toString();
	}
	return h.toString()+":"+m.toString()+":"+min.toString();
}
function getNowTime(){
	var nowtime=getTime($("video")[0].currentTime);
	$($("#nowtimespan")[0]).remove();
	$($("#nowTime")[0]).append("<span id='nowtimespan' style='font-family : 微软雅黑,宋体;font-size: 3px;'>"+nowtime+"</span>");
}
function play(){
	$($("#pause")[0]).show();
	$($("#play")[0]).hide();
	$("video")[0].play();
	var alltime=getTime($("video")[0].duration);
	$($("#alltime")[0]).append("<span id='alltimespan' style='font-family : 微软雅黑,宋体;font-size: 3px;'>"+alltime+"</span>");
	setInterval('getNowTime()',100);
	$($("#nowtimebar")[0]).css("width","0px");
	$($("#nowtimebar")[0]).animate({
		width:'100%'
	},$("video")[0].duration*1000);
	debugger
}
function pause(){
	$($("#process")[0]).css("animation-play-state","paused");
	$($("#play")[0]).show();
	$($("#pause")[0]).hide();
	$("video")[0].pause();
}
function fullScreenFun(){
	debugger
	var video=$("video")[0];
	video.webkitRequestFullScreen();
}
function setVoice(){
	debugger
	var voice=$("#voice")[0].valueAsNumber;
	$("video")[0].volume=voice;
	if(voice==0){
		$(".fa-volume-down,.fa-volume-up").hide();//隐藏声音中等和最大图标
		$(".fa-volume-off").show();//显示声音关闭图标
	}
	if(voice<0.6){
		$(".fa-volume-off,.fa-volume-up").hide();//隐藏声音关闭和最大图标
		$(".fa-volume-down").show();//显示声音中等图标
	}
	if(voice>=0.6){
		$(".fa-volume-down,.fa-volume-off").hide();//隐藏声音中等和关闭图标
		$(".fa-volume-up").show();//显示声音最大图标
	}
}