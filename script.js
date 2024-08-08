const container = document.querySelector('.container');


function addDiv() {    
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid");
    container.appendChild(newDiv);
};

for (let i = 0; i < 16*16; i++) {
    addDiv();
};

let grid = document.querySelectorAll("div.grid");
let gridSquare = grid.children;

document.addEventListener("mouseover", color);
function color () {
for(let i = 0; i < grid.length; i++) {
    grid[i].addEventListener("mouseover", function () {
        grid[i].style.backgroundColor = "aquamarine";
    });
};
}
