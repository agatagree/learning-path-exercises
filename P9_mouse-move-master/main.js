const h1 = document.querySelector("h1");
//const body = document.querySelector("body");

function mouseMove(position) {
    var x = position.clientX;
    var y = position.clientY;
    console.log(x);
    console.log(y);
    h1.textContent = x + "," + y;
}

document.body.addEventListener('mousemove', mouseMove);






