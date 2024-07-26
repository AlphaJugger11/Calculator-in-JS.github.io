let buffer = '0';
const screen = document.getElementById('screen');
let  symbolClick = '';
const  equals = '=';
let result = '';
function ClickingButton(value){
    // console.log(value);
    console.log(buffer,' hi ',result, ' hello ',symbolClick);
    if (isNaN(parseInt(value))){
        handlingSymbol(value);
    }else   {
        handlingNumber(value);
    }
}

function handlingNumber(num){
    if (buffer === '0'){
        buffer = num;
        updateScreen(buffer);
    }
    else if (buffer != '0' && symbolClick != ''){
        result += num;
        updateScreen(result);
    }
    else{
        buffer+= num;
        updateScreen(buffer);
    }
    
}

// function updateScreen(buff){
//     screen.innerText = buff
// }

function handlingSymbol(symbol){
    console.log(symbol)
    if (symbol == 'CE'){
        buffer = '0';
        result = '';
        symbolClick = '';
        updateScreen(buffer);
    }
    else if (symbol == '/'){
        symbolClick = symbol;
        updateScreen(symbolClick);
    }
    else if (symbol == '*'){
        symbolClick = symbol;
        updateScreen(symbolClick);
    }
    else if (symbol == '+'){
        symbolClick = symbol;
        updateScreen(symbolClick);
    }
    else if (symbol == '-'){
        symbolClick = symbol;
        updateScreen(symbolClick);
    }
    else if (symbol == 'Del'){
        if (buffer != '0'){
            buffer = buffer.slice(0,-1);
            updateScreen(buffer); 
        }
          
    }
    else if (symbol == equals){
        if (symbolClick === '+'){
            buffer = parseInt(buffer)
            buffer += parseInt(result);
            updateScreen(buffer.toString());
            result = '';
        }
        else if (symbolClick === '-'){
            buffer = parseInt(buffer)
            buffer -= parseInt(result);
            updateScreen(buffer.toString());
            result = '';
        }
        else if (symbolClick === '*'){
            buffer = parseInt(buffer)
            buffer *= parseInt(result);
            updateScreen(buffer.toString())
            result ='';
        }
        else if (symbolClick === '/'){
            buffer = parseInt(buffer)  ;
            buffer /= parseInt(result);
            updateScreen(buffer.toString());
            result = '';
        }
    }
    

}
function updateScreen(buff) {
    screen.innerText = buff;
    adjustFontSize();
}

function adjustFontSize() {
    const screen = document.getElementById('screen');
    let fontSize = 70; // Initial font size
    const maxWidth = screen.clientWidth;
    const textWidth = screen.scrollWidth;

    while (textWidth > maxWidth && fontSize > 40) {
        fontSize--;
        screen.style.fontSize = fontSize + 'px';
    }
}



function startingInit(){
    document
    .querySelector('.buttons-div')
    .addEventListener('click', function(event) {
        ClickingButton(event.target.innerText);
    });
}

startingInit();