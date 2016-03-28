function rnd(m,n){
    return parseInt(Math.random()*(n-m)+m);
}
function oAonmouse(obj,value1,value2) {
    obj.onmouseenter = function () {
        obj.style.background = [value1];
    };
    obj.onmouseleave = function () {
        obj.style.background = [value2];
    }
}
/*getByClass开始*/
function getByClass(oparent,sClass){
    function findInArr(str,arr){
        for(var i = 0;i<arr.length;i++){
            if(arr[i] == str){
                return true;
            }
        }
        return false;
    }

    if(oparent.getElementsByClassName){
        return oparent.getElementsByClassName(sClass);
    }else{
        var aEle = oparent.getElementsByTagName('*');
        var All = [];
        for(var i = 0;i<aEle.length;i++){
            var arr = aEle[i].className.split(' ');

            if(findInArr(sClass,arr)){
                All.push(aEle[i]);
            }
        }
        return All;
    }
}
/*getByClass结束*/

/*以上是通用的方法*/


window.onload = function (){
    /*banner 鼠标跟随*/
    document.onmousemove=function show1(ev){
        var oDiv = document.getElementById('content-bg');
        var oDiv2 = document.getElementById('content-bg-2');
        var oEvnet = ev || event;
        var oL = oEvnet.clientX*0.01;
        var oT = oEvnet.clientY*0.01;
        oDiv.style.left = 513+ oL*0.5 + 'px';/*这里有改动 +0.5*/
        oDiv.style.top = oT*0.5 + 'px';/*这里有改动 +0.5*/
        oDiv2.style.left =  577+ oL + 'px';
        oDiv2.style.top = -50 + oT + 'px';
        };
    /*banner 鼠标跟随*/

    /*导航条移入*/
    function aLionmou(){
        var oUl1 = document.getElementById('ul1');
        var aLi = oUl1.getElementsByTagName('li');
        var aDiv1 = oUl1.getElementsByTagName('div');
        var aA = oUl1.getElementsByTagName('a');
        var oNum = 0;
        var timer = null;
        for(var i=0;i<aLi.length;i++){
            aLi[i].index = i;
            (function (a){
                aLi[i].onmouseenter = function (){
                    for(var i = 0;i<aLi.length;i++){
                        for(var i=0;i<aLi.length;i++){
                            aA[i].style.color = '#787878';
                        }
                        clearInterval(timer);
                        timer=setInterval(function (){
                            oNum-=10;
                            if(oNum<0){
                                oNum = 0;
                            }
                            aDiv1[a].style.width = oNum+'px';
                        },20);
                        aDiv1[a].style.background = 'rgb('+rnd(0,255)+','+rnd(0,255)+','+rnd(0,255)+')';
                        aA[a].style.color = 'rgb('+rnd(0,255)+','+rnd(0,255)+','+rnd(0,255)+')';
                    }
                    clearInterval(timer);
                    timer=setInterval(function (){
                        oNum+=10;
                        if(oNum>aLi[0].offsetWidth){
                            oNum = aLi[0].offsetWidth;
                        }
                        aDiv1[a].style.width = oNum+'px';
                    },20);
                };
                aLi[i].onmouseleave = function (){
                    for(var i = 0;i<aLi.length;i++){
                        aDiv1[a].style.width = '0px';
                        aA[i].style.color = '#787878';
                    }
                    clearInterval(timer);
                    timer=setInterval(function (){
                        oNum-=10;
                        if(oNum<0){
                            oNum = 0;
                        }
                        aDiv1[a].style.width = oNum+'px';
                    },20);
                    aDiv1[a].style.background = 'rgb('+rnd(0,255)+','+rnd(0,255)+','+rnd(0,255)+')';
                };
            })(i);
        }
    }
    aLionmou();
    /*导航条移入*/
    /*鼠标移入*/
    var oAct = document.getElementById('aCt');
    oAonmouse(oAct,'#8B8BB8','#8b8b8b');
    /*鼠标移入*/
    /*头像通过class*/
    function aTitle(){
        var oContent = document.getElementById('content');
        var oTit = oContent.getElementsByClassName('imgon');
        var aTit = oContent.getElementsByClassName('tit');
        var aNum = 0;
        var timer = null;
        clearInterval(timer);
        for(var i=0;i<oTit.length;i++){
            (function (a){
                clearInterval(timer);
                oTit[i].onmouseover = function (){
                    for(var i = 0;i<oTit.length;i++){
                        aTit[i].style.width = '50px';
                    }
                    clearInterval(timer);
                    timer=setInterval(function (){
                        aNum+=0.5;
                        if(aNum> 30){
                            aNum = 30;
                        }
                        aTit[a].style.width = (aNum+50)+'px';
                    },5);
                };
                clearInterval(timer);
                oTit[i].onmouseout = function(){
                    clearInterval(timer);
                    timer=setInterval(function (){
                        aNum-=0.5;
                        if(aNum < 0){
                            aNum = 0;
                        }
                        aTit[a].style.width = (aNum+50)+'px';
                    },1);
                };
            })(i);
        }
    }
    aTitle();
    /*头像通过class*/
};




