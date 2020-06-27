function getNum(num){
   var result =document.getElementById("screen");
    result.value+=num;
}
function clearScreen(){
    var result=document.getElementById("screen");
    result.value="";

}
function result(){
var result=document.getElementById("screen");
 result.value=eval(result.value);
}