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
        // setInterval(function () {
        //     // alert("bug");
        //     changeColor(coloredDiv[index].ro, coloredDiv[index].co, coloredDiv[index].clzName);
        //     // alert(coloredDiv.length + "    index: " + index);
        //     index++;
        //     if(index===coloredDiv.length){
        //         clearInterval(isi);
        //     }
        // },300);
}
function changeColor(row,col,cclassName){
    // alert(row+ "  "+ col+"   "+cclassName);
    // alert(row + "   " + col + "  " + cclassName);
    var p = $(".row:nth-child(" + row + ")>.colorScreen:nth-child(" + col + ")");
    p.addClass(cclassName);
}

//还是用面向对象的思想好解决些
function coloredItem(irow,icol,icclassName){
    this.ro = irow;
    this.co = icol;
    this.clzName = icclassName;

}
coloredItem.prototype.changeCo = function(){
    changeColor(this.ro,this.co,this.clzName);
}
coloredItem.prototype.clearCo = function(){

    warpColor(this.ro,this.co,this.clzName);
}
function clearColoredDiv(){

    for(var x in coloredDiv){
        coloredDiv[x].clearCo();
    }
}
function warpColor(row,col,cclassName){

    var p = $(".row:nth-child(" + row + ")>.colorScreen:nth-child(" + col + ")");
    p.removeClass(cclassName);

    // for(x in coloredDiv){
    //     var p = $(".row:nth-child(" + coloredDiv[x].ro + ")>.colorScreen:nth-child(" + coloredDiv[x].co + ")");
    //     p.removeClass(coloredDiv[x].clzName);
    // }
}







$(function(){
    $('.welcome').animate({
        left:'0'
    },1000,function(){
        $('.welcome').delay(1800).animate({
            left:'-100%'
        },1000);
    });
    choseCS();
    $('#fullpage').fullpage({

        // verticalCentered:false,
        keyboardScrolling:true,
        // paddingTop:'10%',
        onLeave: function (index, nextIndex, direction) {
            clearColoredDiv();
            choseCS();

            if(index==4){
                toggleContactBtn(0);
            }else if(index==2){
                showPanel(0);
            }else if(index==3){
                showProject(0);
            }

            if(nextIndex==2){
                showPanel(1);
            }
        },
        afterLoad: function(anchorLink,index){

            if(index==4){
                toggleContactBtn(1);
            }else if(index==3){
                showProject(1);
            }
        }
    });
});