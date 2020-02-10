/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */


function getMinMax(string) {


let target = ','; 

let pos = 0;
while (true) {
  let foundPos = string.indexOf(target, pos);
  string = string.replace(",", "*");
  string = string.replace(" ", "*");
  string = string.replace("или ", "*");
  string = string.replace("и", "*");
  string = string.replace("хотя", "*");
  string = string.replace("+", "*");
  if (foundPos == -1) break;

pos = foundPos + 1; 

}

let y = string
.split('*')
.map(function(item) {return +(item) + '\n';});

    let min = +y[0];
    for(let i = 0; i < y.length; i++) {
        if((+y[i]) < min){
            min = +y[i]; 
        } 
    };
    
    let max = +y[0];
    for(let i = 0; i < y.length; i++) {
        if((+y[i]) > max){
            max = +y[i]; 
        } 
    }   
    
    

return {min, max};
};