function verificarFibo(num){
    let x = 0;
    let y = 1;

    while (y < num){
        let z = x + y;
        x = y;
        y = z;
    }
    return y === num;
}

let input = 15;

if (verificarFibo(input)) {
    console.log(input + " pertence à sequência de Fibonacci.");
  } else {
    console.log(input + " não pertence à sequência de Fibonacci.");   
  
  }



