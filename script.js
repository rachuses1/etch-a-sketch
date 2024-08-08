const container = document.querySelector('.container');


function addDiv() {    
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
};

for (let i = 0; i < 16; i++) {
    addDiv();
};