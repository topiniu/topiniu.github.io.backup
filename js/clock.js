/**
 * Created by Administrator on 2016/12/27 0027.
 */
var dom = document.getElementById("clock");
var ctx = dom.getContext("2d");
var width = dom.width;
var height = dom.height;
var r = width/2;
var rem = width / 200;


function drawBackground(){
    ctx.save();
    ctx.translate(r,r);
    ctx.beginPath();
    var grd = ctx.createRadialGradient(0,0,1,0,0,r);
    grd.addColorStop(0,"#fff");
    grd.addColorStop(1,"#E5E5E5");
    ctx.fillStyle = grd;

    ctx.arc(0,0,r - 5,0,2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "#000";
    var hourNumbers = [3,4,5,6,7,8,9,10,11,12,1,2];
    ctx.font = 18 * rem + "px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    hourNumbers.forEach(function(number,i){
        var rad = 2 * Math.PI /12 * i;
        var x = Math.cos(rad) * (r - 30 * rem);
        var y = Math.sin(rad) * (r - 30 * rem);
        ctx.fillText(number,x,y);
    });

    for(var i=1;i<=60;i++){
        var rad = 2* Math.PI / 60 * i;
        var x = Math.cos(rad) * (r - 18 * rem);
        var y = Math.sin(rad) * (r - 18 * rem);
        ctx.beginPath();
        if(i % 5 === 0){
            ctx.fillStyle = "black";
            ctx.lineWidth = 6;
            ctx.arc(x,y,2 * rem,0,2 * Math.PI,false);
        }else{
            ctx.lineWidth = 3;
            ctx.fillStyle = "#ccc";
            ctx.arc(x,y,2 * rem,0,2 * Math.PI,false);
        }
        ctx.fill();
    }
}
function drawHour(hour){
    ctx.save();
    ctx.beginPath();
    var rad = 2 * Math.PI /12 * hour;
    ctx.rotate(rad);
    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";
    ctx.lineWidth = 4 * rem;
    ctx.lineCap = "round";
    ctx.moveTo(0,20 * rem);
    ctx.lineTo(0,-r / 2 + 5);
    ctx.stroke();
    ctx.restore();
}
function drawMinute(minute){
    ctx.save();
    ctx.beginPath();
    var rad = 2 * Math.PI / 60 * minute;
    ctx.rotate(rad);
    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";
    ctx.lineWidth = 3 * rem;
    ctx.lineCap = "round"
    ctx.moveTo(0,20 * rem);
    ctx.lineTo(0,-r + 35 * rem);
    ctx.stroke();
    ctx.restore();
}
function drawSecond(second){
    ctx.save();
    ctx.beginPath();
    var rad = 2 * Math.PI / 60 * second;
    ctx.rotate(rad);
    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";
    ctx.moveTo(-2 * rem,20 * rem);
    ctx.lineTo(2 * rem,20 * rem);
    ctx.lineTo(1,-r+18 * rem);
    ctx.lineTo(-1,-r+18 * rem);
    ctx.fillStyle = "#cc0000";
    ctx.fill();
    ctx.restore();
}
function drawDot(){
    ctx.beginPath();
    ctx.shadowBlur = 5;
    ctx.shadowColor = "black";
    ctx.fillStyle = "#fff";
    ctx.arc(0,0,3 * rem,0,2 * Math.PI,false);
    ctx.fill();
}


function drawClock(){
    ctx.clearRect(0,0,width,height);
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    drawBackground();
    drawHour(hour);
    drawMinute(minute);
    drawSecond(second);
    drawDot();
    ctx.restore();
}
drawClock();

setInterval(drawClock,1000);