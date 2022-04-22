const buttonPapel = document.querySelector("#button-papel");
const buttonPedra = document.querySelector("#button-pedra");
const buttonTesoura = document.querySelector("#button-tesoura");
const textResult = document.querySelector("#text-result");
const textScore = document.querySelector("#text-score");
const buttonFinish = document.querySelector("#game-finish");
const buttonAgain = document.querySelector("#button-again");
const buttonStart = document.querySelector("#button-start");
const divContent = document.querySelector(".content");
const divStart = document.querySelector(".start");
const h2Introducion = document.querySelector("#first");

const papel = 0;
const pedra = 1;
const tesoura = 2;
let number;

let pointMachine = 0;
let pointUser = 0;

buttonStart.addEventListener("click", () => {
    divStart.style.display = "none";
    divContent.style.display = "block";
})


buttonPapel.addEventListener('click', (e) => {

    e.preventDefault();

    number = Math.floor(Math.random() * 3);

    console.log(number);

    if (number == 0) {
        console.log("Empate")
        textResult.innerHTML =
            `Empate`;
        textResult.style.color = "black";

        textScore.innerHTML =
            `Usuário: ${pointUser} Maquina: ${pointMachine}`;

    } else if (number == 1) {
        console.log("Você ganhou")
        pointUser = pointUser + 1;

        textResult.innerHTML =
            `Ganhou`;

        textResult.style.color = "green";
        textScore.innerHTML =
            `Usuário: ${pointUser} Maquina: ${pointMachine}`;

    } else {
        pointMachine = pointMachine + 1;

        textResult.innerHTML =
            `Perdeu`;
        textResult.style.color = "red";

        textScore.innerHTML =
            `Usuário: ${pointUser} Maquina: ${pointMachine}`;
    }
})

buttonPedra.addEventListener('click', (e) => {
    e.preventDefault();

    number = Math.floor(Math.random() * 3);

    console.log(number);

    if (number == 0) {
        pointMachine = pointMachine + 1;

        textResult.innerHTML =
            `Perdeu`;
        textResult.style.color = "red";

        textScore.innerHTML =
            `Usuário: ${pointUser} Maquina: ${pointMachine}`;
    } else if (number == 1) {
        textResult.style.color = "black";

        textResult.innerHTML =
            `Empate`;

        textScore.innerHTML =
            `Usuário: ${pointUser} Maquina: ${pointMachine}`;

    } else {
        pointUser = pointUser + 1;

        textResult.innerHTML =
            `Ganhou`;

        textResult.style.color = "green";
        textScore.innerHTML =
            `Usuário: ${pointUser} Maquina: ${pointMachine}`;
    }
})

buttonTesoura.addEventListener('click', (e) => {
    e.preventDefault();

    number = Math.floor(Math.random() * 3);

    console.log(number);

    if (number == 0) {
        pointUser = pointUser + 1;

        textResult.innerHTML =
            `Ganhou`;

        textResult.style.color = "green";
        textScore.innerHTML =
            `Usuário: ${pointUser} Maquina: ${pointMachine}`;
    } else if (number == 1) {
        pointMachine = pointMachine + 1;

        textResult.innerHTML =
            `Perdeu`;
        textResult.style.color = "red";

        textScore.innerHTML =
            `Usuário: ${pointUser} Maquina: ${pointMachine}`;
    } else {

        textResult.innerHTML =
            `Empate`;
        textResult.style.color = "black";

        textScore.innerHTML =
            `Usuário: ${pointUser} Maquina: ${pointMachine}`;

    }
})

buttonFinish.addEventListener("click", () => {
    textScore.innerHTML =
        ``;

    if (pointUser > pointMachine) {
        textResult.innerHTML =
            `Ganhou com ${pointUser} pontos`;
        textResult.style.color = "green";
    } else {
        textResult.innerHTML =
            `O comp. ganhou com ${pointMachine} pontos`;
        textResult.style.color = "red";
    }

    buttonFinish.style.display = "none";
    buttonAgain.style.display = "block";
    h2Introducion.style.display = "none";

    buttonPapel.disabled = true;
    buttonPedra.disabled = true;
    buttonTesoura.disabled = true;
})

buttonAgain.addEventListener("click", () => {
    document.location.reload(true);
})