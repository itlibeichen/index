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

/*全局a标签选项卡*/
function onmouseaAa (obj){
    for(var i=0;i<obj.length;i++){
        obj[i].onmouseenter = function (){
            for(var i=0;i<obj.length;i++){
                obj[i].style.color = '';
            }
            this.style.color = '#000A12';
        };
        obj[i].onmouseleave = function (){
            this.style.color = '';
        };
    }
}
/*全局a标签选项卡*/

/*以上是通用的方法*/
window.onload = function (){
    /*banner 鼠标跟随*/
        (function (){
            document.onmousemove=function (ev){
                var oDiv3 = document.getElementById('content-bg-3');
                var oEvnet = ev || event;
                var oL = oEvnet.clientX*0.01;
                var oT = oEvnet.clientY*0.01;
                oDiv3.style.left =  513+ oL + 'px';
                oDiv3.style.top = -50 + oT + 'px';
            };
        })();
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
    var oCn = document.getElementById('content-second');
    var aAa = oCn.getElementsByTagName('a');
    oAonmouse(oAct,'#ef3f8e','#db327e');
    //oAonmouse(aAa,'#ef3f8e','#db327e');
    onmouseaAa(aAa);
    //console.log(aAa);
    /*鼠标移入*/
};



