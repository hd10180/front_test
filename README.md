# front_test
front-end, ui, practise
<h2>css踩坑之一</h2>
<p>这种选择器写法会使得后面的ul、li元素继承，使得后续的样式编写变得极其复杂
  （因为你无法预料到它继承了哪一级的父元素）
</p>
<p>尽可能不要这么写
  <code>
    .nav-bar ul li ul li{}
  </code>
</p>
<p>
以下为修改后的代码，基本实现了下拉菜单
</p>
<pre>
<code>
/*一级列表*/
.nav-bar .lev1-ul{
  list-style: none;
  width: 100%;
  font-size: 2.5rem;
  padding: 0;
  margin: 0;
  text-align: left;
  display: flex;
  justify-content: flex-start;
}
.nav-bar .lev1-ul li{
  width: 9rem;
  display: inline-block;
  padding: 0;
}
</code>
</pre>
<pre>
<code>
/*
*二级列表
*初始状态为不显示
*/
.nav-bar .lev2-ul{
  /*left: -999rem;使得子列表不显示的方法一，利用绝对定位+位置设置成超出可视范围*/
  /*z-index: 1000;*/
  position: absolute;/*要使得此时的width和hover后的width生效，需要进行绝对定位*/
  /*width: 9rem;此时不需要设置width属性，似乎因为display属性不显示，所以没必要设置width*/
  display: none;
}
/*
*添加hover显示，注意规定二级列表的宽度
*使用display为flex和flex-direction为column使其纵向显示
*/
.nav-bar .lev1-ul li:hover .lev2-ul{
  /*left: auto;使用方法一超出可视范围后，再使用left为auto使得子列表显示正常（回归该怎么显示怎么显示，此时应为纵向）*/
  width: 9rem;		/**********不管是用哪种方法，此时应该设置一下ul的宽度，避免ul继承到奇怪的width*/
  display: flex;
  flex-direction: column;
}
/*
*二级列表的li宽度设置可以省略，因为父容器ul已经规定了宽度
*/
.nav-bar .lev1-ul li .lev2-ul li{
  width: 9rem;/*可以注释掉,因为父容器ul已经规定了宽度，但要根据实际情况调整*/
  background-color: gray;
  /*display: flex; 这段应该放在父容器ul中
  flex-direction: column;*/
}
</code>
</pre>
<pre>
<code>
/*
*三级列表
*注意样式之间的继承关系，或者不经意间的继承关系
*/
.nav-bar .lev1-ul li .lev2-ul li .lev3-ul{/*该段样式可以跟下一段样式选择一段保留*/
  display: none;
}
.nav-bar .lev1-ul li:hover .lev2-ul li .lev3-ul{/*该段样式与上一段样式选择一段就行，功能一样*/
  display: none;
  left: 9rem;
}
.nav-bar .lev1-ul li .lev2-ul li:hover .lev3-ul{
  display: flex;
  position: absolute;
  left: 9rem;
  top: 0;
  margin-top: -0.05em;
}
.nav-bar .lev1-ul li .lev2-ul li:hover .lev3-ul li{
  width: 10rem;/*此时的li宽度尽可能根据需要调整，否则宽度讲继承上级的li宽度*/
}
</code>
</pre>
<p>完整代码参见nav-bar.html和nav-bar.css</p>
