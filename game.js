
let game = document.querySelector("#game");
let chicken = document.querySelector("#chicken");
let pig = document.querySelector("#pig");
let cow = document.querySelector("#cow");
let score = document.querySelector("#score");
let scoreCount;

function random(max){
    return Math.floor(Math.random() * max);
}

function randomizeAnimal(animal){
  
    animal.style.top = random((game.offsetHeight - 20) - animal.offsetHeight) + "px";
    animal.style.left = random((game.offsetWidth - 20) - animal.offsetWidth) + "px";
}

/*function randomizeChicken(){
    chicken.style.top = random(game.offsetHeight - chicken.offsetHeight) + "px";
    chicken.style.left = random(game.offsetWidth - chicken.offsetWidth) + "px";
}

function randomizePig(){
    pig.style.top = random(game.offsetHeight - pig.offsetHeight) + "px";
    pig.style.left = random(game.offsetWidth - pig.offsetWidth) + "px";
}

function randomizeCow(){
    cow.style.top = random(game.offsetHeight - cow.offsetHeight) + "px";
    cow.style.left = random(game.offsetWidth - cow.offsetWidth) + "px";
}*/


function youWin(){
    alert("Winner!");
}


chicken.addEventListener('click', () => {score = score + 2; scoreCount.innerHTML = score});
pig.addEventListener('click', () => {score = score + 3; scoreCount.innerHTML = score});
cow.addEventListener('click', () => {score++; scoreCount.innerHTML = score});

chicken.addEventListener('mouseover', function(){
    if ( random(100) < 80 ){
        randomizeAnimal(chicken);
    }
});

pig.addEventListener('mouseover', function(){
    if ( random(100) < 90 ){
        randomizeAnimal(pig);
    }
});

cow.addEventListener('mouseover', function(){
    if ( random(100) < 60 ){
        randomizeAnimal(cow);
    }
});

window.setInterval(() => randomizeAnimal(chicken), 1000);
window.setInterval(() => randomizeAnimal(pig), 800);
window.setInterval(() => randomizeAnimal(cow), 1200);