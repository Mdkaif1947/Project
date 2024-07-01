let boxes = document.querySelectorAll(".box");
let btn = document.querySelector(".btn");
let button = document.querySelector(".button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let TurnO = true;

const winner = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const rstbutton = () => {
  TurnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
// aftet win will disabled other box
let disabledBtn = () => {
  for (box of boxes) {
    box.disabled = true;
    // enableBoxes()
  }
};
let enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// Box input mark
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (TurnO) {
      let zero = box.innerHTML = "O";
      box.style.color = "red";
      TurnO = false;
    } else {
      box.innerHTML = "X";
      box.style.color = "#40F99B";
      TurnO = true;
    }
    box.disabled = true;
    check();
  });
});


let showWinner = (winner) => {
  // let a = prompt("enter the your name")
  msg.innerText = `Congratulation Winner is  ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBtn();
};
let showDraw = () => {
    msg.innerText = "It's a draw!";
    msgContainer.classList.remove("hide");
  };


// check the winner
const check = () => {
    let isDraw = true;
  for (const parttern of winner) {
    let val1 = boxes[parttern[0]].innerText;
    let val2 = boxes[parttern[1]].innerText;
    let val3 = boxes[parttern[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
        return;
      }
    }
  }

  for (let box of boxes) {
    if (box.innerText === "") {
      isDraw = false;
      break;
    }
  }

  if (isDraw) {
    showDraw();
    disabledBtn();
  }

};



button.addEventListener("click", rstbutton);
btn.addEventListener("click", rstbutton);
