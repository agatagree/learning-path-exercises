function whenClick (position) {
var x = position.clientX;
var y = position.clientY;

if (x % 2 == 0 && y % 2 == 0) {
    console.log("RED, x:" + x + " , y:" + y);
    document.body.style.backgroundColor = "red";} 

if (x % 2 == 0 && y % 2 !== 0) {
    console.log("GREEN, x:" + x + " , y:" + y);
    document.body.style.backgroundColor = "green";} 

if (x % 2 !== 0 && y % 2 == 0) {
    console.log("GREEN, x:" + x + " , y:" + y);
    document.body.style.backgroundColor = "green";} 

if (x % 2 !== 0 && y % 2 !== 0) {
    console.log("BLUE, x:" + x + " , y:" + y);
    document.body.style.backgroundColor = "blue";} 

}

document.addEventListener('click', whenClick);