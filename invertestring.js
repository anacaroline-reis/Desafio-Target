function inverter_string(str){
    let new_string = "";

    for (let index = str.length-1; index >= 0 ; index--) {
        new_string += str[index];
        
    }
    return new_string;
}

let input = "Ana Maria Braga";

let inputInvertido = inverter_string(input);

console.log(inputInvertido);