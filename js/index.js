/**
 * Created by Administrator on 2017/6/19 0019.
 */

window.onload = function () {//ҳ��������
    var aMenu = document.getElementById('menu');//��ȡid ����menu ��ΨһԪ��
    var liArr = aMenu.getElementsByTagName('li');//��ȡ��ǩ����li ������Ԫ��
    var bMenu = document.getElementById('menu-content');//��ȡid ����menu-content ��ΨһԪ��
    var divArr = bMenu.getElementsByTagName('div');//��ȡ��ǩ����div ������Ԫ��
    var mark = document.getElementById('mark');//��ȡid ����mark ��ΨһԪ��
    var mArr = [25,95,165,235,305];//��һ�������top���е�ֵ������
    //ѭ����������liArr
    for( var m = 0; m < liArr.length; m++ ){
        //��������¼�
        liArr[m].onmouseover = (function (a) {//�հ�
            //����ֵ   ����
            return function () {
                //ѭ����������divArr
                for( var x = 0; x < divArr.length; x++ ){
                    //�ı���ʽ -- ��
                    divArr[x].style.zIndex = 1
                }
                divArr[a].style.zIndex = 2;
                //�ı���ʽ -- top
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

//���ض���
    var aTop=document.getElementById('top');//��ȡid����top��ΨһԪ��
    var time;
    aTop.onclick=fn1;
        function fn(){
            console.log(document.body.scrollTop)
            //���˻��������������������ȡ�������߶� ����������ȡ�������߶�
          var xx=  document.body.scrollTop-- || document.documentElement.scrollTop--;
           //��ι�����С�ڻ����0��ʱ��  �Ѽ�ʱ�������
            if ( xx <=0){
                clearInterval(time)
            }
        }
            function fn1(){
                //����1�����Ժ�ִ��fn�������  ѭ����ʱ��
                time = setInterval(fn, 1)
            }
//���� �� �����������¼�
        window.onscroll=function(){
            //���  ������ �ĸ߶ȴ��ڻ����100
            if(document.body.scrollTop >= 400 ||document.documentElement.scrollTop >= 400){
                //����͸����Ϊ0
                aTop.style.opacity=1
                //����Ϊ1
            }else{
                aTop.style.opacity=0
            }
        }