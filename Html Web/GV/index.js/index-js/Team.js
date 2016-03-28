function rnd(m, n) {
    return parseInt(Math.random() * (n - m) + m);
}
/*getByClass开始*/
function getByClass(oparent, sClass) {
    function findInArr(str, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == str) {
                return true;
            }
        }
        return false;
    }

    if (oparent.getElementsByClassName) {
        return oparent.getElementsByClassName(sClass);
    } else {
        var aEle = oparent.getElementsByTagName('*');
        var All = [];
        for (var i = 0; i < aEle.length; i++) {
            var arr = aEle[i].className.split(' ');
            if (findInArr(sClass, arr)) {
                All.push(aEle[i]);
            }
        }
        return All;
    }
}
/*getByClass结束*/

/*全局a标签选项卡*/
function onmouseaAa(obj) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].onmouseenter = function () {
            for (var i = 0; i < obj.length; i++) {
                obj[i].style.color = '';
            }
            this.style.color = '#000A12';
        };
        obj[i].onmouseleave = function () {
            this.style.color = '';
        };
    }
}
/*全局a标签选项卡*/

/*黑白判断浏览器*/
function noChrome() {
    var oIndex = document.getElementById('index');
    var aImg = document.getElementsByTagName('img');
    var aImParent = getByClass(oIndex, 'img-header');
    for (var i = 0; i < aImParent.length; i++) {
        aImParent[i].index = i;
        aImParent[i].onmouseenter = function () {
            for (var i = 0; i < aImParent.length; i++) {
                aImg[i].style.filter = 'grayscale(1)';
            }
            aImg[this.index].style.filter = 'grayscale(0)';

        };
        aImParent[i].onmouseleave = function () {
            for (var i = 0; i < aImParent.length; i++) {
                aImg[i].style.filter = 'grayscale(1)';
            }
        };
    }

}
function thisChrome() {
    var oIndex = document.getElementById('index');
    var aImg = document.getElementsByTagName('img');
    var aImParent = getByClass(oIndex, 'img-header');
    for (var i = 0; i < aImParent.length; i++) {
        aImParent[i].index = i;
        aImParent[i].onmouseenter = function () {
            for (var i = 0; i < aImParent.length; i++) {
                aImg[i].style.WebkitFilter = 'grayscale(1)';
            }
            aImg[this.index].style.WebkitFilter = 'grayscale(0)';
        };
        aImParent[i].onmouseleave = function () {
            for (var i = 0; i < aImParent.length; i++) {
                aImg[i].style.WebkitFilter = 'grayscale(1)';
            }
        };
    }
}
/*黑白判断浏览器*/

/*以上是通用的方法*/
window.onload = function () {
    /*banner 鼠标跟随*/
    (function () {
        document.onmousemove = function (ev) {
            var oDiv3 = document.getElementById('content-bg-3');
            var oEvnet = ev || event;
            var oL = oEvnet.clientX * 0.01;
            var oT = oEvnet.clientY * 0.01;
            oDiv3.style.left = 513 + oL + 'px';
            oDiv3.style.top = -50 + oT + 'px';
        };
    })();
    /*banner 鼠标跟随*/
    /*导航条移入*/
    function aLionmou() {
        var oUl1 = document.getElementById('ul1');
        var aLi = oUl1.getElementsByTagName('li');
        var aDiv1 = oUl1.getElementsByTagName('div');
        var aA = oUl1.getElementsByTagName('a');
        var oNum = 0;
        var timer = null;
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].index = i;
            (function (a) {
                aLi[i].onmouseenter = function () {
                    for (var i = 0; i < aLi.length; i++) {
                        for (var i = 0; i < aLi.length; i++) {
                            aA[i].style.color = '#787878';
                        }
                        clearInterval(timer);
                        timer = setInterval(function () {
                            oNum -= 10;
                            if (oNum < 0) {
                                oNum = 0;
                            }
                            aDiv1[a].style.width = oNum + 'px';
                        }, 20);
                        aDiv1[a].style.background = 'rgb(' + rnd(0, 255) + ',' + rnd(0, 255) + ',' + rnd(0, 255) + ')';
                        aA[a].style.color = 'rgb(' + rnd(0, 255) + ',' + rnd(0, 255) + ',' + rnd(0, 255) + ')';
                    }
                    clearInterval(timer);
                    timer = setInterval(function () {
                        oNum += 10;
                        if (oNum > aLi[0].offsetWidth) {
                            oNum = aLi[0].offsetWidth;
                        }
                        aDiv1[a].style.width = oNum + 'px';
                    }, 20);
                };
                aLi[i].onmouseleave = function () {
                    for (var i = 0; i < aLi.length; i++) {
                        aDiv1[a].style.width = '0px';
                        aA[i].style.color = '#787878';
                    }
                    clearInterval(timer);
                    timer = setInterval(function () {
                        oNum -= 10;
                        if (oNum < 0) {
                            oNum = 0;
                        }
                        aDiv1[a].style.width = oNum + 'px';
                    }, 20);
                    aDiv1[a].style.background = 'rgb(' + rnd(0, 255) + ',' + rnd(0, 255) + ',' + rnd(0, 255) + ')';
                };
            })(i);
        }
    }

    aLionmou();
    /*导航条移入*/
    /*鼠标移入*/
    var oConten = document.getElementById('content-list');
    var aA = oConten.getElementsByTagName('a');
    onmouseaAa(aA);
    /*鼠标移入*/

    /*图片父级移入事件*/
    if (window.navigator.userAgent.indexOf('Firefox') != -1) {
        noChrome();
        function oBox(){
            var oIndex = document.getElementById('index');
            var oBox1 = getByClass(oIndex, 'img-header');
            var oBox2 = getByClass(oIndex, 'box2');
            var timer = null;
            /*以下是移入移出事件*/
            var aImg = document.getElementsByTagName('img');
            var oFilte = 'filter';
            //alert(1)
            var n = 0;
            var m = 0;
            clearInterval(timer);
            for (var i = 0; i < oBox1.length; i++) {
                (function (a) {
                    oBox1[i].onmouseenter = function () {
                        clearInterval(timer);
                        timer = setTimeout(function () {
                            oBox2[a].style.display = 'block';
                            oBox2[a].style.borderColor = '#f93b2a';
                            aImg[a].style[oFilte]  = 'grayscale(0)';
                            timer = setInterval(function () {
                                n += 4;
                                if (n > 10) {
                                    n = 10;
                                }
                                oBox2[a].style.height = parseFloat(n + 100) + 'px';
                                oBox2[a].style.width = parseFloat(n + 100) + 'px';
                                m -= 2;
                                if (m < -10) {
                                    m = -10;
                                }
                                oBox2[a].style.left = m + 'px';
                                oBox2[a].style.top = m + 'px';
                            }, 1);
                        }, 200);
                    };
                    /*移出*/
                    oBox1[i].onmouseleave = function () {
                        oBox2[a].style.display = 'none';
                        aImg[a].style[oFilte] = 'grayscale(1)';
                        clearInterval(timer);
                    };
                })(i);
            }

        }
        oBox();
    } else if (window.navigator.userAgent.indexOf('Chrome') > -1) {
        thisChrome();
        function oBox1(){
            var oIndex = document.getElementById('index');
            var oBox1 = getByClass(oIndex, 'img-header');
            var oBox2 = getByClass(oIndex, 'box2');
            var timer = null;
            /*以下是移入移出事件*/
            var aImg = document.getElementsByTagName('img');
            var oFilte = 'WebkitFilter';
            //alert(1)
            var n = 0;
            var m = 0;
            clearInterval(timer);
            for (var i = 0; i < oBox1.length; i++) {
                (function (a) {
                    oBox1[i].onmouseenter = function () {
                        clearInterval(timer);
                        timer = setTimeout(function () {
                            oBox2[a].style.display = 'block';
                            oBox2[a].style.borderColor = '#f93b2a';
                            for(var i=0;i<oBox1.length;i++){
                                if(window.navigator.userAgent.indexOf('Firefox') != -1){
                                    noChrome();
                                }
                                aImg[i].style[oFilte]  = 'grayscale(1)';
                            }
                            aImg[a].style[oFilte]  = 'grayscale(0)';
                            timer = setInterval(function () {
                                n += 4;
                                if (n > 10) {
                                    n = 10;
                                }
                                oBox2[a].style.height = parseFloat(n + 100) + 'px';
                                oBox2[a].style.width = parseFloat(n + 100) + 'px';
                                m -= 2;
                                if (m < -10) {
                                    m = -10;
                                }
                                oBox2[a].style.left = m + 'px';
                                oBox2[a].style.top = m + 'px';
                            }, 1);
                        }, 200);
                    };
                    /*移出*/
                    oBox1[i].onmouseleave = function () {
                        oBox2[a].style.display = 'none';
                        aImg[a].style[oFilte] = 'grayscale(1)';
                        clearInterval(timer);
                    };
                })(i);
            }

        }
        oBox1();
    }
    /*图片父级移入/出事件*/

    /*禁止鼠标左键*/
    document.onmousedown = function (){
        return false;
    };
};