/*
* @Author: 13291
* @Date:   2018-12-23 15:22:29
* @Last Modified by:   13291
* @Last Modified time: 2019-01-04 18:39:49
*/

window.onload = function () {//悬浮 
	ml.innerHTML = "'150ml'";
	ml1.setAttribute("class", "mlq")
	ml2.setAttribute("class", "mlh")
	var header = document.getElementsByClassName("header")[0];
	window.onscroll = function () {
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st > 180){
			header.style.position = 'fixed';
		}else{
			header.style.position = 'static';
		}
	}
}
//1.获取元素
var box = document.getElementById("box");
var img1 = document.getElementById("img1");
var slider = document.getElementById("slider");//放大镜
var img2 = document.getElementById("img2");
var Bimg = document.getElementById("Bimg");//大图
//2.给左侧的小图绑定鼠标移入、移除、移动事件。

img1.onmouseover = function () {
	// body...
	slider.style.display = "block";
	img2.style.display = "block";
}
img1.onmouseout = function () {
	// body...
	slider.style.display = "none";
	img2.style.display = "none";
}
img1.onmousemove = function (ev) {
	// body...
	//(1)根据鼠标的位置来记录放大镜的位置(透明遮罩的位置)
	var left = ev.clientX - box.offsetLeft - slider.offsetWidth/2;
	var top = ev.clientY - box.offsetTop - slider.offsetHeight/2 ;
	var maxleft = img1.offsetWidth - slider.offsetWidth;
	var maxtop = img1.offsetHeight - slider.offsetHeight;
	left = left > maxleft?maxleft:left < 0?0:left;//left有极限值(0 < left < maxleft)
	top = top > maxtop?maxtop:top < 0?0:top;//类似于left
	//（2）设置放大镜的位置
	slider.style.left = left +  "px";
	slider.style.top = top + "px";
	
	//根据左侧大图的位置，计算大图移动比例
	var w = left/maxleft;//水平比例
	var h = top/maxtop;//垂直比例
	//计算大图的最大移动范围
	var BimgLeft = img2.offsetWidth - Bimg.offsetWidth;

	var BimgTop = img2.offsetHeight - Bimg.offsetHeight;
	//计算大图的移动距离，设置位置
	Bimg.style.left = w*BimgLeft + "px";
	Bimg.style.top = h*BimgTop + "px";
}

var sp0 = document.getElementById("sp0");
var sp1 = document.getElementById("sp1");
var spimg = document.getElementById("spimg");
var spimg0 = document.getElementById("Bimg");
var spanl = document.getElementById("spanl");
var spanr = document.getElementById("spanr");


sp0.onmouseover = function(){
	sp0.setAttribute("class", "sp0c");
	sp1.setAttribute("class", "sp1c");
	spimg.src = "img/pp0.jpeg";
	spimg0.src = "img/pp0.jpeg";

}


sp1.onmouseover = function(){
	sp1.setAttribute("class", "sp0c");
	sp0.setAttribute("class", "sp1c");
	spimg.src = "img/pp1.jpeg";
	spimg0.src = "img/pp1.jpeg";
}

spanl.onclick = function () {
	sp0.setAttribute("class", "sp0c");
	sp1.setAttribute("class", "sp1c");
	spimg.src = "img/pp0.jpeg";
	spimg0.src = "img/pp0.jpeg";
}

spanr.onclick = function(){
	sp1.setAttribute("class", "sp0c");
	sp0.setAttribute("class", "sp1c");
	spimg.src = "img/pp1.jpeg";
	spimg0.src = "img/pp1.jpeg";
}

var ml1 = document.getElementById("ml1");
var ml2 = document.getElementById("ml2");
var ml = document.getElementById("ml");


	

ml1.onclick = function(){
	ml.innerHTML = "'150ml'";
	ml1.setAttribute("class", "mlq")
	ml2.setAttribute("class", "mlh")
}
ml2.onclick = function(){
	ml.innerHTML = "'200ml'";
	ml1.setAttribute("class", "mlh")
	ml2.setAttribute("class", "mlq")
}



var jia = document.getElementById("jia");
var jian = document.getElementById("jian");
var shu = document.getElementById("shu");

jia.onclick = function(){
	var i = parseInt(shu.value);
	if ( i < 5) {
		i++;
		shu.value = i;
	}else{
		jia.style.cursor = "not-allowed";
	}
}

jian.onclick = function(){
	var i = parseInt(shu.value);
	if ( i > 1) {
		i--;
		shu.value = i;
	}else{
		jian.style.cursor = "not-allowed";
	}
}

function getStyle(obj,style) {  
	if(obj.currentStyle) 
	{  
	    return obj.currentStyle[style];  
	} 
	else 
	{  
	    return getComputedStyle(obj)[style];  
	}  
}
var che = document.getElementById("che");
var dahui = document.getElementById("dahui");
che.onclick = function(){
	dahui.style.display = "block";
}
var chahao = document.getElementById("chahao");

chahao.onmouseover = function () {
	chahao.style.backgroundColor = "red";
}
chahao.onmouseout = function(){
	chahao.style.backgroundColor = "white";
}
chahao.onclick = function(){
	dahui.style.display = "none";
}
var done = document.getElementById("done");
done.onclick = function(){
	dahui.style.display = "none";
}