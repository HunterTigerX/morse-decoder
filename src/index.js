const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let finalResult = "";
    let exprArray = expr.match(/.{1,10}/g);
    let copyMorse = Object.assign({}, MORSE_TABLE);
    let arrayMorse = Object.entries(copyMorse);
    for (let i = 0; i < arrayMorse.length; i++) {
        arrayMorse[i][0] = arrayMorse[i][0].replace(/-/g, 11);
        arrayMorse[i][0] = arrayMorse[i][0].replace(/\./g, 10);
    if (arrayMorse[i][0].length < 10) {
    while (arrayMorse[i][0].length < 10) {
        arrayMorse[i][0] = arrayMorse[i][0].split("");
        arrayMorse[i][0].unshift("0");
        arrayMorse[i][0] = arrayMorse[i][0].join("");
        }
    }   
}
    for (let a = 0; a < exprArray.length; a++) {
        if (exprArray[a][0] === "*" && exprArray[a][0] !== 1 && exprArray[a][0] !== 0) {
            finalResult += " ";
        } else {
        for (b = 0; b < arrayMorse.length; b++) {
            if (exprArray[a] === arrayMorse[b][0]) {
                finalResult += arrayMorse[b][1];
            }
        } 
    }}
return finalResult;
}



module.exports = {
    decode
}
