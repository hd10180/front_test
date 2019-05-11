var selected_step=document.getElementById('reg-process-box').getElementsByTagName('a');
var index=0;
function step_selected(curindex){
	for(var i=0;i<selected_step.length;i++){
		selected_step[i].getElementsByTagName('div')[0].className='reg-process-item'
	}
	selected_step[curindex].getElementsByTagName('div')[0].className='reg-process-item-selected'
}
for(var i = 0;i < selected_step.length;i++){
    selected_step[i].onmouseover = function(){
        index = this.getElementsByTagName('span')[0].innerText-1
        step_selected(index)
    }
}
var last_step=document.getElementById('reg-process-last')
last_step.onclick=function(){
	var curindex=document.querySelector("div[class='reg-process-item-selected']").parentElement.getElementsByTagName('span')[0].innerText
	// console.log(document.querySelector("div[class='reg-process-item-selected']").parentElement.getElementsByTagName('span')[0].innerText)
	if(curindex==1){
		step_selected(curindex-1)
	}else{
		step_selected(curindex-2)
	}
}
var next_step=document.getElementById('reg-process-next')
next_step.onclick=function(){
	var curindex=document.querySelector("div[class='reg-process-item-selected']").parentElement.getElementsByTagName('span')[0].innerText
	// console.log(document.querySelector("div[class='reg-process-item-selected']").parentElement.getElementsByTagName('span')[0].innerText)
	if(curindex==selected_step.length){
		step_selected(curindex-1)
	}else{
		step_selected(curindex)
	}
}
/*图片轮播*/
var banner = document.getElementById("banner");
var pic = document.getElementById("image-group").getElementsByTagName("img");
var dot = document.getElementById("dot-group").getElementsByTagName("li");
var last=document.getElementById("banner-prev");
var next=document.getElementById("banner-next");
var index = 0;
var timer = null;
/*定义图片切换函数*/
function changePic (curIndex) {
    for(var i = 0;i < pic.length;++i){
        pic[i].style.display = "none";
        dot[i].className = "unselected-dot";
    }
    pic[curIndex].style.display = "block";
    dot[curIndex].className = "selected-dot";
}
/*index超出图片总量时归零*/
function autoPlay(){
    if(+index >= pic.length){
        index = 0;
    }
    changePic(index);
    index++;
}
/*定义并调用自动播放函数*/
timer = setInterval(autoPlay,3000);
/*鼠标划过整个容器时停止自动播放*/
banner.onmouseover = function(){
    clearInterval(timer);
}
/*鼠标离开整个容器时继续播放下一张*/
banner.onmouseout = function(){
    timer = setInterval(autoPlay,3000);
}
/*遍历所有数字导航实现划过切换至对应的图片*/
for(var i = 0;i < dot.length;i++){
    dot[i].onmouseover = function(){
        clearInterval(timer);
        index = this.innerText-1;
        changePic(index)
    }
}
// 上一张
last.onclick=function(){
	clearInterval(timer);
	// alert(document.querySelector("li[class='selected']").innerText)
	index = document.querySelector("li[class='selected-dot']").innerText;
	// console.log("last:init index"+index);
	if(index==1){
		index=pic.length-1;
		// console.log("last:if index =0"+index);
		changePic(index)
	}
	else{
		// console.log("last:else index"+index);
		changePic(index-2)
	} 
}
// 下一张
next.onclick=function(){
	clearInterval(timer);
	index = document.querySelector("li[class='selected-dot']").innerText;
	// console.log(index);
	if(index==pic.length){
		index=0;
		// console.log(index);
		changePic(index)
	}
	else{
		// console.log(index);
		changePic(index)
	} 
}