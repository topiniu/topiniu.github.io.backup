/**
 * Created by topiniu on 2017/2/21.
 */

var colorClass = ["red","blue","green","gray","orange","yellow","violet"];
var coloredDiv = new Array();
function choseCS(){
    var n = 1,i = 0;
    var row,col,colorNO,cclassName,colorN;
    coloredDiv = new Array();
    n = parseInt(Math.random()*36 + 30);//要更改颜色的方块数量
    // alert(n);
    colorN = parseInt(Math.random() * 7, 10);
    for(;i<n;i++) {
        row = parseInt(Math.random() * 20, 10) + 1;//随机行
        col = parseInt(Math.random() * 10, 10) + 1;//随机列
        colorNO = parseInt(Math.random() * 5, 10) + 1;//随机下表
        cclassName = colorClass[colorN] + colorNO;//随机颜色

        coloredDiv.push(new coloredItem(row,col,cclassName));
    }
    var index=0;

    //for循环用了面向对象思想，之前使用的是定时循环事件函数
    for(var x in coloredDiv){
        coloredDiv[x].changeCo();
    }
}
function changeColor(row,col,cclassName){
    // alert(row+ "  "+ col+"   "+cclassName);
    // alert(row + "   " + col + "  " + cclassName);
    var p = $(".row:nth-child(" + row + ")>.colorScreen:nth-child(" + col + ")");
    p.addClass(cclassName);
}

$(function(){
    loadImg();
    setTimeout(loadP,800);
    //设置循环更改背景颜色函数  随机时间为3-8s
    setTimeout(function () {
        choseCS();
        var time = parseInt(Math.random()*5 + 3,10);
        // alert("time= "+ time);

        //延迟执行并更改下次随机时间
        setInterval(function(){
            clearColoredDiv();
            choseCS();

            time = parseInt(Math.random()*5 + 3,10);
            // alert("next time:  "+time);

        },time*1000);
    },1800);

    var item2NavBtnFlkag = false;//是移动端吗
    if($(".item2 .navBtnC").css("opacity")==="0"){
        item2NavBtnFlkag = true;//是移动端
        showPanel_mobile();
    }

    $('#fullpage').fullpage({

        // verticalCentered:false,
        keyboardScrolling:true,
        // paddingTop:'10%',
        onLeave: function (index, nextIndex, direction) {

            if(index==4){//item 4 leave
                toggleContactBtn(0);
            }else if(index==2){//item 2 leave
                //移动端和pc端调用不同的逻辑
                if(item2NavBtnFlkag){

                }else{
                    hidePanel_pc(0);
                }
            }else if(index==3){//item 3 leave
                // mobileShowProLink();
                showProject(0);
            }

            if(nextIndex==2){//will into item 2
                if(item2NavBtnFlkag){
                    // showPanel_mobile();
                }else{
                    showPanel_pc(1);
                }
            }
        },
        afterLoad: function(anchorLink,index){

            if(index==4){//item 4 loaded
                toggleContactBtn(1);
            }else if(index==3){//item 3 loaded
                showProject(1);
                // mobileShowProLink();
            }
        }
    });
});