let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let msgCont = document.querySelector('#msg-container');
let newGameBtn = document.querySelector('#new-game');
let msg = document.querySelector('#msg');
let turnO = true;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

const resetGame = ()=>{
    turnO = true;
    enableButtons();
    msgCont.classList.add("hidden")

}



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "o";
            turnO = false;
        }
        else {
            box.innerText = "x";
            turnO = true;
        }
        box.disabled = true
        checkWinner();
    })


});


const disableButtons = ()=>{
    for(box of boxes){
        box.disabled = true
    }
}
const enableButtons = ()=>{
    for(box of boxes){
        box.disabled = false
        box.innerText=""
    }
}

const showWinMsg = (winner)=> {
    msg.innerText = `Winner is ${winner}`;
    msgCont.classList.remove("hidden")
    disableButtons();
}

const checkWinner = () => {
    for (const pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val & pos1Val === pos3Val){
                boxes.disabled=true;
                showWinMsg(pos1Val)
            }
        }
    }
}

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);