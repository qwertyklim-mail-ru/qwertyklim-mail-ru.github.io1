
/*
1. Все «пиксели» имеют класс pixel.
2. Выпадающий список с цветами имеет класс chosen-color.
3. «Ластик» — это чекбокс с классом eraser.
4. Когда на «пиксель» кликают, у него должен измениться цвет фона.
5. Если в момент клика ластик выключен, фон нажатого «пикселя» должен стать того цвета, который выбран в списке.
6. Если в момент клика ластик включён, фон нажатого «пикселя» должен стать белым — 'white'.
*/

let pixels = document.querySelectorAll('.pixel');
let chosenColor = document.querySelector('.chosen-color');
let eraser = document.querySelector('.eraser');

//console.log(pixels);
//console.log(chosenColor);
//console.log(eraser);

for(let pixel of pixels) {
  pixel.onclick = function () {
    //console.log('pixel.onclick');
    //console.log(pixel);
    //console.log(chosenColor.value);
    //console.log(eraser.checked);
    //pixel.style.backgroundColor = 'red';
    
    if (!eraser.checked) {
      pixel.style.backgroundColor = chosenColor.value;
    } else {
      pixel.style.backgroundColor = 'white';
    }
  }
}

/*
let ratioButtons = document.querySelectorAll('.review');
let submitButton = document.querySelector('.submit-button');
let errorMsg = document.querySelector('.error');


for(let ratioButton of ratioButtons) {
  ratioButton.onchange = function () {
    console.log('bt.onClick');
    console.log(ratioButton.dataset.evaluation);
    submitButton.disabled = ratioButton.dataset.evaluation == 'bad';
    if (submitButton.disabled){
      errorMsg.classList.add('shown');
    } else {
      errorMsg.classList.remove('shown');
    }
  }
}
*/

//display = document.querySelector('.display');
//clearButton = document.querySelector('.clear');

//console.log(display);
//console.log(buttons);
//console.log(clearButton);

/*
function setDisplayText(newText) {
    console.log('setDisplayText');
    display.textContent = newText;
}

clearButton.onclick = function () {
  console.log('clearButton.onClick');
  setDisplayText ('');
};


for(let bt of buttons) {
  bt.onclick = function () {
    console.log('bt.onClick');

    let symbol = bt.innerText;
  
    if (symbol.length == 0) {
      //symbol = '&nbsp;';
      symbol = ' ';
    };
  
    console.log(symbol);
    
    setDisplayText (display.textContent + symbol);
  }
}
*/
