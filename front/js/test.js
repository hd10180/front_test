/*图片轮播*/
var slideShowContainer = document.getElementById("image-container");
var pic = document.getElementById("image-slider").getElementsByTagName("a");
var dot = document.getElementById("image-dot").getElementsByTagName("li");
var last=document.getElementById("pre");
var next=document.getElementById("next");
var index = 0;
var timer = null;
/*定义图片切换函数*/
function changePic (curIndex) {
    for(var i = 0;i < pic.length;++i){
        pic[i].style.display = "none";
        dot[i].className = "unselected";
    }
    pic[curIndex].style.display = "block";
    dot[curIndex].className = "selected";
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
slideShowContainer.onmouseover = function(){
    clearInterval(timer);
}
/*鼠标离开整个容器时继续播放下一张*/
slideShowContainer.onmouseout = function(){
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
	index = document.querySelector("li[class='selected']").innerText;
	console.log("last:init index"+index);
	if(index==1){
		index=pic.length-1;
		console.log("last:if index =0"+index);
		changePic(index)
	}
	else{
		console.log("last:else index"+index);
		changePic(index-2)
	} 
}
// 下一张
next.onclick=function(){
	clearInterval(timer);
	index = document.querySelector("li[class='selected']").innerText;
	console.log(index);
	if(index==pic.length){
		index=0;
		console.log(index);
		changePic(index)
	}
	else{
		console.log(index);
		changePic(index)
	} 
}
//绘制曲线图
var curve_graph=echarts.init(document.getElementById('curve-graph'));
$.get("https://edu.telking.com/api/",{type:"month"}).done(function(result){
	// console.log(result);
	// console.log(result.data['series'])
	curve_graph.setOption({
		title:{
			text:'曲线图数据展示',
			left:'44%',
			top:'4%',
			textStyle:{
				fontfamily: 'STHeitiSC-Medium',
				fontSize: 20,
				letterSpacing: 0,
				color: '#262b2e'
			}
		},
		tooltip:{},
		legend:{
			
		},
		xAxis:{
			data:result.data.xAxis
		},
		yAxis:{},
		series:[{
			type:'line',  //类型
			smooth:true,  //这个是把线变成曲线
			data:result.data.series
		}]
	})
})

//绘制饼图
var pie_graph=echarts.init(document.getElementById('pie-graph'));
$.get("https://edu.telking.com/api/",{type:"week"}).done(function(result){
	// console.log(result);
	// console.log(result.data.series.length)
	// console.log(result.data.xAxis[0])
	var ser = []
	for(var i=0;i<result.data.series.length;i++){
		// console.log(result.data.xAxis[i]+result.data.series[i])
		var item={'name':result.data.xAxis[i],'value':result.data.series[i]};
		ser.push(item)
	}
	console.log(ser)
	pie_graph.setOption({
		title:{
			text:'饼状图数据展示',
			left:'48%',
			top:'4%',
			textAlign:'center',
			textStyle:{
				fontfamily: 'STHeitiSC-Medium',
				fontSize: 20,
				letterSpacing: 0,
				color: '#262b2e'
			}
		},
		tooltip:{},
		series:[{
			type:'pie',  //类型
			// smooth:true,  //这个是把线变成曲线
			data:ser,
		}]
	})
})

//绘制柱状图
var bar_graph=echarts.init(document.getElementById('bar-graph'));
$.get("https://edu.telking.com/api/",{type:"week"}).done(function(result){
	// console.log(result);
	// console.log(result.data['series'])
	bar_graph.setOption({
		title:{
			text:'柱状图数据展示',
			left:'48%',
			top:'4%',
			textAlign:'center',
			textStyle:{
				fontfamily: 'STHeitiSC-Medium',
				fontSize: 20,
				letterSpacing: 0,
				color: '#262b2e'
			}
		},
		tooltip:{},
		legend:{},
		xAxis:{
			data:result.data.xAxis
		},
		yAxis:{
			name:'商品数'
		},
		series:[{
			type:'bar',  //类型
			data:result.data.series
		}]
	})
})