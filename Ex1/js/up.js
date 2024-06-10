'use strict'

let numberOfSeries

for (let i = 0; i < 1; i++) {
    numberOfSeries = +prompt('Nechta serial ko`rdingiz?', '');
    if (numberOfSeries == '' || numberOfSeries == null){
        i--
    }
    
}

 


let savol1;
let savol2;
let savol3;
let savol4;

for (let i = 0; i < 1; i++) {
    savol1 = prompt("Oxirgi ko`rgan serialingiz?", '');
    if (savol1 == '' || savol1 == null){
        i--
    }
    
}
for (let i = 0; i < 1; i++) {
    savol2 = +prompt("Nechi baxo berasiz?", '');
    if (savol2 == '' || savol2 == null){
        i--
    }
    
}
for (let i = 0; i < 1; i++) {
    savol3 = prompt("Oxirgi ko`rgan serialingiz?", '');
    if (savol3 == '' || savol3 == null){
        i--
    }
    
}
for (let i = 0; i < 1; i++) {
    savol4 = +prompt("Nechi baxo berasiz?", '');
    if (savol4 == '' || savol4 == null){
        i--
    }
    
}



alert(`Seriallar kurilgan = ${numberOfSeries} , Oxirgisi = ${savol1} va  , Bahosi = ${savol2}`)