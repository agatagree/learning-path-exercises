const div = document.querySelector('div');
let drawActive = false;

function changePosition (position) {
    if( drawActive) {
       
    var x = position.clientX;
    var y = position.clientY;

    div.style.top = y + "px";
    div.style.left = x + "px";
    div.style.transform = "translate(-50%, -50%)";
} else {
    div.style.backgroundColor = "black";
}}


div.addEventListener('mousemove', changePosition);


div.addEventListener('mousedown', () => {
    div.style.backgroundColor = "grey";
    drawActive = !drawActive;
})

 
