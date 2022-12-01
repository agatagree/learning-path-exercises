let size = 10;
let orderElement = 1;

const init = () => {
const btn = document.createElement("button");
btn.textContent = "Create list";
document.body.appendChild(btn);

const btnReset = document.createElement("button");
btnReset.textContent = "Reset";
document.body.appendChild(btnReset);
btnReset.style.marginLeft = "10px";

const ul = document.createElement("ul");
document.body.appendChild(ul);

btn.addEventListener("click", createLiElements);
btnReset.addEventListener("click", resetList);
}

const createLiElements = () => {
for (let i = 1; i < 11; i++) {
    const li = document.createElement("li");
    document.querySelector("ul").appendChild(li);
    li.textContent = "Element no. " + orderElement;
    orderElement++;
    li.style.fontSize = size + "px";
    size++;
    li.style.listStyleType = "none";
}
}
const resetList = () => {
    document.querySelector("ul").textContent = "";
}


init()