# front_test
front-end, ui, practise
<h2>css踩坑日记</h2>
<p>这种奇怪的连续选择器写法会使得后面的ul、li元素继承，使得后续的样式编写变得极其复杂
  （因为你无法预料到它继承了哪一级的父元素）</p>
<pre style="display:none">
<code>
html{
    font-size: 14px;
  }
  .ctn{
    /*width: 960px;*/
    width: 68.57rem;
    margin: 0 auto;
  }
  .nav-bar{
    /*width: 960px;*/
    width: 68.57rem;
    background-color: gray;
    border-radius: 0.2rem;
  }
</code>
<code>
/**
*导航菜单的测试
*使用列表
*/
  /*一级列表*/
  .nav-bar ul{
    list-style: none;
    width: 100%;
    font-size: 2.5rem;
    padding: 0;
    margin: 0;
    text-align: left;
    display: flex;
    justify-content: flex-start;
  }
  .nav-bar ul li{
    width: 9rem;
    display: inline-block;
    padding: 0;
  }
</code>
<code>
/*
*二级列表
*初始状态为不显示
*/
  .nav-bar ul li ul{
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
  .nav-bar ul li:hover ul{
    /*left: auto;使用方法一超出可视范围后，再使用left为auto使得子列
    表显示正常（回归该怎么显示怎么显示，此时应为纵向）*/
    width: 9rem;		/**********不管是用哪种方法，此时应该设置一下ul的宽度，避免ul继承到奇怪的width*/
    display: flex;
    flex-direction: column;
    border: 0.071rem solid gray;
    border-radius: 0.2rem;
  }
  /*
  *二级列表的li宽度设置可以省略，因为父容器ul已经规定了宽度
  */
  .nav-bar ul li ul li{
    width: 9rem;/*可以注释掉,因为父容器ul已经规定了宽度*/
    background-color: gray;
    /*display: flex;
    flex-direction: column;*/
  }
</code>
<code>
/*
*三级列表
*注意样式之间的继承关系，或者不经意间的继承关系
*/
  .nav-bar ul li ul li ul{/*该段样式可以注释，(继承自二级列表样式)因为二级列表的
  样式.nav-bar ul li ul中已经定义了display：none，*/
    display: none;
  }
  .nav-bar ul li:hover ul li ul{/*该段样式不能注释，与上一段可注释不同的是在
  此之前不存在到hover后display为none的样式*/
    display: none;
  }
  .nav-bar ul li ul li:hover ul{
    display: inline-flex;
  }
  .nav-bar ul li ul li:hover ul li{
    left: 9rem;
  }
</code>
</pre>
<p>因此尽可能不要这么写
  <code>
    .nav-bar ul li{}
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
