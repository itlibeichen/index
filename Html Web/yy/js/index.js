window.onload=function(){
    var oUl = document.getElementById('box');     //获取id叫box的ul
    var aLi = oUl.getElementsByTagName('li');     //获取其下面的所有li
    for (var i=0;i<aLi.length;i++){               //for循环
        aLi[i].onmouseover=function(){            //绑定鼠标移入事件  第几个的时候
           this.style.border='1px solid red';     //当前的li边框变成红色 当前也就是第几个的时候
        }
        aLi[i].onmouseout=function(){             //绑定鼠标移出事件
           this.style.border='1px solid transparent'; //当鼠标移出的时候当前的li边框变成透明;
        }
    }
}
