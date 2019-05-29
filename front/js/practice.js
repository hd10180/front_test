/*图片轮播*/
var banner = document.getElementById("banner");
var pic = document.getElementById("image-group").getElementsByTagName("img");
var dot = document.getElementById("dot-group").getElementsByTagName("li");
var last = document.getElementById("banner-prev");
var next = document.getElementById("banner-next");
var index = 0;
var timer = null;

/*定义图片切换函数*/
function changePic(curIndex) {
    for (var i = 0; i < pic.length; ++i) {
        pic[i].style.display = "none";
        dot[i].className = "unselected-dot";
    }
    pic[curIndex].style.display = "block";
    dot[curIndex].className = "selected-dot";
}

/*index超出图片总量时归零*/
function autoPlay() {
    if (+index >= pic.length) {
        index = 0;
    }
    changePic(index);
    index++;
}

/*定义并调用自动播放函数*/
timer = setInterval(autoPlay, 3000);
/*鼠标划过整个容器时停止自动播放*/
banner.onmouseover = function () {
    clearInterval(timer);
}
/*鼠标离开整个容器时继续播放下一张*/
banner.onmouseout = function () {
    timer = setInterval(autoPlay, 3000);
}
/*遍历所有数字导航实现划过切换至对应的图片*/
for (var i = 0; i < dot.length; i++) {
    dot[i].onmouseover = function () {
        console.log(i);
        clearInterval(timer);
        index = this.innerText - 1;
        changePic(index)
    };
    dot[i].onclick = function () {
        clearInterval(timer);
        index = this.innerText - 1;
        changePic(index)
    }
}
// 上一张
// last.onclick = function () {
//     clearInterval(timer);
//     // alert(document.querySelector("li[class='selected']").innerText)
//     index = document.querySelector("li[class='selected-dot']").innerText;
//     // console.log("last:init index"+index);
//     if (index == 1) {
//         index = pic.length - 1;
//         // console.log("last:if index =0"+index);
//         changePic(index)
//     } else {
//         // console.log("last:else index"+index);
//         changePic(index - 2)
//     }
// }
// // 下一张
// next.onclick = function () {
//     clearInterval(timer);
//     index = document.querySelector("li[class='selected-dot']").innerText;
//     // console.log(index);
//     if (index == pic.length) {
//         index = 0;
//         // console.log(index);
//         changePic(index)
//     } else {
//         // console.log(index);
//         changePic(index)
//     }
// }

// 商品分类
// var categories=document.getElementsByClassName("category")[0].getElementsByTagName("li");
// var categories_info=document.getElementsByClassName("ctn");
// for(var i=0;i<categories_info.length-1;i++){
//
//     categories[i+1].onmouseover = function () {
//         console.log(categories_info[i])
//         categories_info[i].style.display="block";
//     };
//     categories[i+1].onmouseout=function () {
//         categories_info[i].style.display="none";
//     }
// }

