/**
 * Created by topiniu on 2017/2/21.
 */

var colorClass = ["red","blue","green","gray","orange","yellow","violet"];
var coloredDiv = new Array();
function choseCS(){
    var n = 1,i = 0;
    var row,col,colorNO,cclassName,colorN;
    coloredDiv = new Array();
    n = parseInt(Math.random()*36 + 30);
    colorN = parseInt(Math.random() * 7, 10);
    for(;i<n;i++) {
        row = parseInt(Math.random() * 20, 10) + 1;
        col = parseInt(Math.random() * 10, 10) + 1;
        colorNO = parseInt(Math.random() * 5, 10) + 1;
        cclassName = colorClass[colorN] + colorNO;

        coloredDiv.push(new coloredItem(row,col,cclassName));
    }
    var index=0;
        var isi = setInterval(function () {
            // alert("bug");
            changeColor(coloredDiv[index].ro, coloredDiv[index].co, coloredDiv[index].clzName);
            // alert(coloredDiv.length + "    index: " + index);
            index++;
            if(index===coloredDiv.length){
                clearInterval(isi);
            }
        },80);
}
function changeColor(row,col,cclassName){
    // alert(row + "   " + col + "  " + cclassName);
    var p = $(".row:nth-child(" + row + ")>.colorScreen:nth-child(" + col + ")");
    p.addClass(cclassName);
}

function coloredItem(irow,icol,icclassName){
    this.ro = irow;
    this.co = icol;
    this.clzName = icclassName;

}

function warpColor(){
    for(x in coloredDiv){
        var p = $(".row:nth-child(" + coloredDiv[x].ro + ")>.colorScreen:nth-child(" + coloredDiv[x].co + ")");
        p.removeClass(coloredDiv[x].clzName);
    }
}

$(function(){
    choseCS();
    $('#fullpage').fullpage({

        verticalCentered:false,
        keyboardScrolling:true,
        paddingTop:'10%',
        onLeave: function () {
            warpColor();
            choseCS();
        }
    });
});