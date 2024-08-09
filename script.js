const container = document.querySelector('.container');
const button = document.querySelector('button');
let new_size;
let new_grid;

let initial_size = 16;
addDiv(initial_size);

container.style.width = initial_size*22 + "px";

function addDiv(size) {   
    for (let i = 0; i < size ** 2; i++) { 
        let newDiv = document.createElement("div");
        newDiv.classList.add("grid");
        container.appendChild(newDiv);
    };
}; // create the grid

let grid = document.querySelectorAll('div.grid');

grid.forEach((square) => {
    square.addEventListener("mouseover", color);
});

function color () {
    for(let i = 0; i < grid.length; i++) {
        grid[i].addEventListener("mouseover", function () {
            grid[i].style.backgroundColor = "aquamarine";
        });
    };
}

button.addEventListener("click", function findSize() {
    new_size = prompt("How many squares per side?",);
    rid();
    addDiv(new_size);
    resize(new_size);
    newColor();

});

function rid () {
    for(let i = 0; i < grid.length; i++) {
        grid[i].remove();
    };
}; // remove previous grid 

function resize (new_size) {
    container.style.width = new_size*22 + "px";
}; // resize container

function newColor () {
    grid = document.querySelectorAll('div.grid');
    grid.forEach((square) => {
        square.addEventListener("mouseover", color);
    });
}



