class Cell{
    constructor(noun, amount){
        this.noun=noun;
        this.amount=amount;
    }
}
iIndex = new Array();
const Cells = [];

//onload function
window.onload = function() {
    fetch('./index.txt')
    .then(response => response.text())
    .then(textString => {
        iIndex = textString.split(/\r?\n|,/);
        for (i=0; i<iIndex.length; i+=2){
            let cell = new Cell(iIndex[i], iIndex[i+1]);
            Cells.push(cell);
        }
        // /\r?\n/
    });
};

//Run on Button Press