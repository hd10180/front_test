// /**
//  *点击商品详情按钮显示商品详情，点击累计评价显示累计评价
//  * 点击商品详情按钮切换商品详情按钮样式，点击累计评价切换累计评价样式
//  */
// var item_desc_btn=document.getElementById('c-item-desc-btn');
// var item_comments_btn=document.getElementById('c-item-comments-btn');
// /**
//  * 需要显示的两个div
//  * */
// var item_desc_box=document.getElementById('s-item-desc-box');
// var item_comments_box=document.getElementById('s-item-comments-box');
// item_desc_btn.onclick=function () {
//     if (item_desc_btn.classList.contains("selected-get-item-some")) {
//         item_comments_btn.classList.remove('selected-get-item-some');
//         item_desc_box.style.display="block";
//         item_comments_box.style.display='none';
//     }else{
//         item_desc_btn.classList.add("selected-get-item-some");
//         // item_desc_btn.className+='selected-get-item-some';
//         item_comments_btn.classList.remove('selected-get-item-some');
//         item_desc_box.style.display="block";
//         item_comments_box.style.display='none';
//     }
//
// };
// item_comments_btn.onclick=function () {
//     if(item_comments_btn.classList.contains("selected-get-item-some")){
//         item_desc_btn.className='get-item-detail';
//         item_desc_box.style.display="none";
//         item_comments_box.style.display='block';
//     }
//     else {
//         item_desc_btn.className='get-item-detail';
//         item_comments_btn.classList.add('selected-get-item-some');
//         item_desc_box.style.display="none";
//         item_comments_box.style.display='block';
//     }
// };
/**
* 控制点击商品详情或累计评价按钮，显示对应的div
* */
        /**
         * js实现
         * */
        //按钮列表
        // var btn_list=document.getElementsByClassName("top-choices-ctn")[0]
        //                      .getElementsByTagName("ul")[0]
        //                      .getElementsByTagName('li');
        // //需要显示的容器列表
        // var disp_list=document.getElementsByClassName("item-desc-ctn");
        // //需要添加的样式
        // var class_name1="selected-get-item-some";
        // //切换显示的方法
        // var disp_or_not=function(list_of_el1,list_of_el2,class_name){
        //      for (let i=0;i<list_of_el1.length;i++){
        //          let k=i;
        //          list_of_el1[k].onclick=function(){
        //              for (let j=0;j<list_of_el1.length;j++){
        //                  if (j==k){
        //                     if (list_of_el1[j].classList.contains(class_name)){
        //                             list_of_el2[j].style.display = 'block';
        //                         }
        //                     else {
        //                            list_of_el1[j].classList.add(class_name);
        //                            list_of_el2[j].style.display = 'block';
        //                        }
        //                     }
        //                  else {
        //                         list_of_el1[j].classList.remove(class_name);
        //                         list_of_el2[j].style.display = 'none';
        //                     }
        //                 }
        //             }
        //         }
        // };
        // disp_or_not(btn_list,disp_list,class_name1);
        /**
         * jq实现
         * */
        $(function(){
            var btn_list=$(".top-choices-ctn>ul>li");
            var disp_list=$(".item-desc-ctn");
            var class_name1="selected-get-item-some";
            var disp_or_not=function(list_of_el1,list_of_el2,class_name){
                    for (let i=0;i<list_of_el1.length;i++){
                        let k=i;
                        list_of_el1.eq(k).click(function(){
                            for (let j=0;j<list_of_el1.length;j++){
                                if (j==k){
                                   if (list_of_el1.eq(j).hasClass(class_name)){
                                        list_of_el2.eq(j).css("display","block");
                                    }
                                   else {
                                       list_of_el1.eq(j).addClass(class_name);
                                       list_of_el2.eq(j).css("display","block");
                                   }
                                }
                                else {
                                    list_of_el1.eq(j).removeClass(class_name);
                                    list_of_el2.eq(j).css("display","none");
                                }
                            }
                        });
                    }
            };
            disp_or_not(btn_list,disp_list,class_name1);
        });

/**
 * 商品购买左侧的图片展示，鼠标放置或点击图片行，上面的图片显示切换图片
 * */
//图片显示框
var display_box=$('#display-box');

//图片缩放显示出来的真实图片
var zoom_img=$("#zoom-img");

//图片缩放区域遮罩层
var zoom_span=$("#zoom-span");

//图片缩略图列表，用于点击或hover
var pic_bar_list=$("#item-pic-bar-list").find(".pic-item");

//需要展示的图片列表
var display_images=["https://img.alicdn.com/imgextra/i4/2224996251/O1CN01ZfS1FZ1w30LACjG2E_!!0-item_pic.jpg_430x430q90.jpg",
                 "https://img.alicdn.com/imgextra/i3/2224996251/O1CN01su2SvY1w30LAaVntM_!!2224996251.jpg_430x430q90.jpg",
                 "https://img.alicdn.com/imgextra/i2/2224996251/O1CN017CAGhH1w30JCiw9eA_!!0-item_pic.jpg_430x430q90.jpg",
                 "https://img.alicdn.com/imgextra/i3/2224996251/O1CN01WHJdLJ1w30JVksQ6J_!!2224996251.jpg_430x430q90.jpg",
                 "https://img.alicdn.com/imgextra/i1/2224996251/O1CN01xn3mhd1w30LD4kNfK_!!2224996251.jpg_430x430q90.jpg"];

//商品原图列表，局部放大时显示
var zoom_images=["https://img.alicdn.com/imgextra/i4/2224996251/O1CN01ZfS1FZ1w30LACjG2E_!!0-item_pic.jpg",
                 "https://img.alicdn.com/imgextra/i3/2224996251/O1CN01su2SvY1w30LAaVntM_!!2224996251.jpg",
                 "https://img.alicdn.com/imgextra/i2/2224996251/O1CN017CAGhH1w30JCiw9eA_!!0-item_pic.jpg",
                 "https://img.alicdn.com/imgextra/i3/2224996251/O1CN01WHJdLJ1w30JVksQ6J_!!2224996251.jpg",
                 "https://img.alicdn.com/imgextra/i1/2224996251/O1CN01xn3mhd1w30LD4kNfK_!!2224996251.jpg"];

//用于切换图片显示框的方法
var change_display_image=function (index) {
    display_box.attr('src',display_images[index]);
    zoom_img.attr('src',zoom_images[index]);
};
// 循环调用
for (let i=0;i<pic_bar_list.length;i++){
    let j=i;
    pic_bar_list.eq(j).hover(function () {
        change_display_image(j);
        pic_bar_list.eq(j).css('border-color','#000');
        for (var temp=0;temp<pic_bar_list.length;temp++){
            let m=temp;
            if (m==j){
                 pic_bar_list.eq(m).css('border-color','#000');
            } else {
                pic_bar_list.eq(m).css('border-color','#fff');
            }
        }
    });
}


/**
 * 鼠标放在图片显示框内时触发切换图片 局部放大 的图片 || ***************未实现
 * */
$(".shade").hover(function () {
    $('#zoom-span').show();
    $('#zoom-box').show();
},function () {
    $('#zoom-span').hide();
    $('#zoom-box').hide();
});
$('.shade').mousemove(function (e) {
   var x=e.offsetX;
   var y=e.offsetY;
   var sp_l,sp_t;

   if (x<100){sp_l=0;}
   if (x>=100&&x<=318){sp_l=x-100;}
   if (x>318){sp_l=218;}

   if (y<100){sp_t=0;}
   if (y>=100&&y<=318){sp_t=y-100;}
   if (y>318){sp_t=218;}
   $("#zoom-span").css({top:sp_t,left:sp_l});

   var zoom_l,zoom_t;
   zoom_l=($('#zoom-img').width()/$('#shade').width())*sp_l;
   zoom_t=($('#zoom-img').height()/$('#shade').height())*sp_t;
    $('#zoom-img').css({top:-zoom_t,left:-zoom_l});
});
/**
 * 累计评价区，点击图片显示大图
 * */
        /**
         *  js实现代码
         * */
        // var trs=document.getElementsByClassName('item-comments-table-box')[0]
        //     .getElementsByTagName('tr');
        //
        // for (let i=0;i<trs.length;i++) {
        //     let z=i;
        //     let imgs=trs[z].getElementsByClassName('buyer-comments-images-ctn')[0]
        //         .getElementsByTagName('img');
        //     if (imgs.length>0){
        //         let maximize_box=trs[z].getElementsByClassName('maximize-img-box')[0];
        //         for (let j=0;j<imgs.length;j++){
        //             imgs[j].onclick = function () {
        //                 if (maximize_box.style.display == "block") {
        //                     maximize_box.style.display = "none";
        //                 }
        //                 else{
        //                     maximize_box.src = imgs[j].src;
        //                     maximize_box.style.display = "block";
        //                 }
        //             };
        //         }
        //         maximize_box.onclick=function () {
        //             if (maximize_box.style.display == "block") {
        //                     maximize_box.style.display = "none";
        //                 }
        //                 else{
        //                     maximize_box.style.display = "block";
        //                 }
        //         }
        //     }
        // }

        /**
         * jq实现
         */
        //获取评论行数
        var trs=$('.item-comments-table-box').eq(0).find('tr');
        for (let i=0;i<trs.length;i++) {
            let z=i;
            //该条评论的图片数
            let imgs=trs.eq(z).find('.buyer-comments-images-ctn').eq(0).find('img');
            if (imgs.length>0){
                let maximize_box=trs.eq(z).find('.maximize-img-box').eq(0);
                for (let j=0;j<imgs.length;j++){;
                    imgs.eq(j).click(function () {
                        if (maximize_box.is(':visible')) {
                            maximize_box.hide();
                        }
                        else{
                            maximize_box.attr('src',imgs[j].src);
                            maximize_box.show();
                        }
                    });
                }
                maximize_box.click(function () {
                    if (maximize_box.is(':visible')) {
                            maximize_box.hide();
                        }
                    else{
                        maximize_box.show();
                    }
                });
            }
        }


/**
 * 购买容器右侧的纵向可滚动广告条，实现点击按钮切换显示
 * */
        /** js实现
         * */
        // var item_list=document.getElementsByClassName('scroll-ad-box')[0]
        //     .getElementsByTagName('li');
        // //按钮组：两个，分别为上下页
        // var control_group=document.getElementsByClassName('ad-control-ctn')[0]
        //     .getElementsByClassName('ad-control-item');
        //
        // //上下页函数的实现，不适用与大部分的翻页
        // function change_scroll_ad(list,flag) {
        //     for (let i in list){
        //         item_list[list[i]].style.display='none';
        //     }
        //     //下一页
        //     if (flag===1){
        //         if (list[2]<8){//下一页，判断index是否会越界
        //             for (let i =1;i<=3;i++){
        //                 item_list[list[2]+i].style.display='block';
        //             }
        //         } else{
        //             for (let i=0;i<3;i++){
        //                 item_list[i].style.display='block';
        //             }
        //         }
        //     }
        //     //上一页
        //     else if (flag===0){
        //         if (list[0]===0){//判断是否会越界
        //             for (let i=8;i>5;i--){
        //                 item_list[i].style.display='block';
        //             }
        //         } else{
        //             for (let i =0;i<3;i++){
        //                 item_list[list[i]-3].style.display='block';
        //             }
        //         }
        //     } else
        //         console.log("请指定翻页参数")
        // }
        // //按钮只有两个，因此将按钮按钮组的下标用作change_scroll_ad的翻页参数（0：上一页，1：下一页）
        // for (let i=0;i<control_group.length;i++){
        //     control_group[i].onclick=function () {
        //         let disp_list1=[];
        //         for (let i=0;i<item_list.length;i++){
        //             if(window.getComputedStyle(item_list[i],null).getPropertyValue('display')==="block"){
        //                 disp_list1.push(i)
        //             }
        //         }
        //         change_scroll_ad(disp_list1,i);//i参考上一条注释
        //     }
        // }

        /**
         * jq实现
         * */
        // 图片组包含9个图片，默认为单次只能显示3个
        var item_list=$('.scroll-ad-box').eq(0).find('li');
        //按钮组：两个，分别为上下页
        var control_group=$('.ad-control-ctn').eq(0).find('.ad-control-item');

        //上下页函数的实现，不适用与大部分的翻页
        function change_scroll_ad(list,flag) {
            for (let i in list){
                item_list.eq(list[i]).hide();
            }
            //下一页
            if (flag===1){
                if (list[2]<8){//下一页，判断index是否会越界
                    for (let i =1;i<=3;i++){
                        item_list.eq(list[2]+i).show();
                    }
                } else{
                    for (let i=0;i<3;i++){
                        item_list.eq(i).show();
                    }
                }
            }
            //上一页
            else if (flag===0){
                if (list[0]===0){//判断是否会越界
                    for (let i=8;i>5;i--){
                        item_list.eq(i).show();
                    }
                } else{
                    for (let i =0;i<3;i++){
                        item_list.eq(list[i]-3).show();
                    }
                }
            } else
                console.log("请指定翻页参数")
        }
        //按钮只有两个，因此将按钮按钮组的下标用作change_scroll_ad的翻页参数（0：上一页，1：下一页）
        for (let i=0;i<control_group.length;i++){
            control_group.eq(i).click(function () {
                let disp_list1=[];
                for (let i=0;i<item_list.length;i++){
                    if(item_list.eq(i).is(':visible')){
                        disp_list1.push(i)
                    }
                }
                change_scroll_ad(disp_list1,i);//i参考上一条注释
            });
        }
