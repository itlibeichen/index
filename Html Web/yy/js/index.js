window.onload=function(){
    var oUl = document.getElementById('box');     //��ȡid��box��ul
    var aLi = oUl.getElementsByTagName('li');     //��ȡ�����������li
    for (var i=0;i<aLi.length;i++){               //forѭ��
        aLi[i].onmouseover=function(){            //����������¼�  �ڼ�����ʱ��
           this.style.border='1px solid red';     //��ǰ��li�߿��ɺ�ɫ ��ǰҲ���ǵڼ�����ʱ��
        }
        aLi[i].onmouseout=function(){             //������Ƴ��¼�
           this.style.border='1px solid transparent'; //������Ƴ���ʱ��ǰ��li�߿���͸��;
        }
    }
}
