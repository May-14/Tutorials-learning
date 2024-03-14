const ul = document.querySelector("ul");
const input = document.querySelector("#item");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    let enteredItem = input.value;
    input.value = "";
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    li.appendChild(span);
    li.appendChild(deleteButton);
    deleteButton.classList.add("deleteButton")
    span.textContent = enteredItem;
    deleteButton.textContent = "Delete";
    ul.appendChild(li);
    input.focus()
    const allButtons = document.querySelectorAll(".deleteButton");
    allButtons.forEach((button) => {
        button.addEventListener("click", e => {
            console.log(e.target.parentElement.remove());
            input.focus()
        })
    });
})




















// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// const paragraph = document.createElement("p");
// paragraph.style.color = "red";
// paragraph.textContent = "Hey I'm red!";

// const h3 = document.createElement("h3");
// h3.setAttribute("style", "color: blue;");
// h3.textContent = "I'm a blue h3";

// const div = document.createElement("div");
// div.setAttribute("style", "border: black solid 1px; background-color: pink;");
// const childH1 = document.createElement("h1");
// childH1.textContent = "I'm in a div";
// const childP = document.createElement("p");
// childP.textContent = "ME TOO!";
// div.appendChild(childH1);
// div.appendChild(childP);


// container.appendChild(content);
// container.appendChild(paragraph);
// container.appendChild(h3);
// container.appendChild(div)

// const button = document.querySelector("#btn");
// // button.onclick = () =>alert("Hello World");
// button.addEventListener("click", function (e) {
//     console.log(e.target.style.background = "blue");
// })
