/*
* @Author: 13291
* @Date:   2018-12-18 13:31:46
* @Last Modified by:   13291
* @Last Modified time: 2019-01-05 18:55:08
*/
var speed = 40;
window.onload = function () {//悬浮 和 公告滚动
	var header = document.getElementsByClassName("header")[0];
	window.onscroll = function () {
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st > 180){
			header.style.position = 'fixed';
		}else{
			header.style.position = 'static';
		}
	}
	var demo=document.getElementById("gonggao");
	var demo2=document.getElementById("gonggao1");
	var demo1=document.getElementById("gonggao0");
	demo2.innerHTML = demo1.innerHTML;
	function Marquee(){
		if(demo.scrollTop>=demo1.offsetHeight){
	        demo.scrollTop=0;
	    }
	    else{
	        demo.scrollTop=demo.scrollTop+1;
	    }
	}
	var MyMar=setInterval(Marquee,speed);
	demo.onmouseover=function(){clearInterval(MyMar)};
	demo.onmouseout=function(){MyMar=setInterval(Marquee,speed); };
}
function getStyle(obj, attr){//轮播图
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
//话费
function ShowT() {
	document.fname.xiaofei.value = "￥" + document.fname.select.options[fname.select.selectedIndex].text;
}
//右侧图定位
var rimg1 = document.getElementById("rightimg1");
var rimg2 = document.getElementsByClassName("rightimg2")[0];
var rimg3 = document.getElementsByClassName("rightimg3")[0];
var rimg4 = document.getElementsByClassName("rightimg4")[0];


rimg1.onmouseover = function(){
	rimg1.setAttribute("class","rightimg11");
}
rimg2.onmouseover = function(){
	rimg2.setAttribute("class","rightimg22");
}
rimg3.onmouseover = function(){
	rimg3.setAttribute("class","rightimg33");
}
rimg4.onmouseover = function(){
	rimg4.setAttribute("class","rightimg44");
}

rimg1.onmouseout = function(){
	rimg1.setAttribute("class","rightimg1");
}
rimg2.onmouseout = function(){
	rimg2.setAttribute("class","rightimg2");
}
rimg3.onmouseout = function(){
	rimg3.setAttribute("class","rightimg3");
}
rimg4.onmouseout = function(){
	rimg4.setAttribute("class","rightimg4");
}