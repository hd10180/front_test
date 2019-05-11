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

var close_dialog=document.getElementById('close-dialog');
var dialog=document.getElementById('dialog')
close_dialog.onclick=function(){
	dialog.style.display="none"
}
