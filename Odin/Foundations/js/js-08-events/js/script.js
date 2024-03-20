// let button = document.querySelector("button");
let input = document.querySelector("input");
let paragraph = document.querySelector("p");

// window.addEventListener("mousemove", e => {
//     paragraph.textContent = e.screenX
// })


input.addEventListener("keydown", e => {
    paragraph.textContent = e.key;
}) 