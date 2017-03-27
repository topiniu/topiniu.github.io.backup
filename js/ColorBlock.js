/**
 * Created by topiniu on 2017/3/27 0027.
 */

//还是用面向对象的思想好解决些
//定义colorwall对象，提供改变颜色、擦出颜色两个功能。
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

}