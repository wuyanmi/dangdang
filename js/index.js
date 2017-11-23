/**
 * Created by Administrator on 2017/6/19 0019.
 */

window.onload = function () {//页面加载完成
    var aMenu = document.getElementById('menu');//获取id 名叫menu 的唯一元素
    var liArr = aMenu.getElementsByTagName('li');//获取标签名叫li 的所有元素
    var bMenu = document.getElementById('menu-content');//获取id 名叫menu-content 的唯一元素
    var divArr = bMenu.getElementsByTagName('div');//获取标签名叫div 的所有元素
    var mark = document.getElementById('mark');//获取id 名叫mark 的唯一元素
    var mArr = [25,95,165,235,305];//用一个数组把top所有的值存起来
    //循环遍历数组liArr
    for( var m = 0; m < liArr.length; m++ ){
        //鼠标移入事件
        liArr[m].onmouseover = (function (a) {//闭包
            //返回值   函数
            return function () {
                //循环遍历数组divArr
                for( var x = 0; x < divArr.length; x++ ){
                    //改变样式 -- 层
                    divArr[x].style.zIndex = 1
                }
                divArr[a].style.zIndex = 2;
                //改变样式 -- top
                mark.style.top = mArr[a] + 'px';
                for(var y=0;y< liArr.length;y++){
                    liArr[y].style.background="#909090"
                }
                for(var z=0;z <liArr.length;z++){
                    liArr[z].style.color="#9e0001"
                }
            }
        })(m)
    }


};

//返回顶部
    var aTop=document.getElementById('top');//获取id名叫top的唯一元素
    var time;
    aTop.onclick=fn1;
        function fn(){
            console.log(document.body.scrollTop)
            //除了火狐浏览器，其他浏览器获取滚动条高度 火狐浏览器获取滚动条高度
          var xx=  document.body.scrollTop-- || document.documentElement.scrollTop--;
           //半段滚动条小于或等于0的时候  把计时器清除掉
            if ( xx <=0){
                clearInterval(time)
            }
        }
            function fn1(){
                //无限1毫秒以后执行fn这个函数  循环计时器
                time = setInterval(fn, 1)
            }
//窗口 绑定 滚动滚动条事件
        window.onscroll=function(){
            //如果  滚动条 的高度大于或等于100
            if(document.body.scrollTop >= 400 ||document.documentElement.scrollTop >= 400){
                //他的透明度为0
                aTop.style.opacity=1
                //否则为1
            }else{
                aTop.style.opacity=0
            }
        }