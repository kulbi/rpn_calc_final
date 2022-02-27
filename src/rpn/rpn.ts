/*
This function compute result for equation given in Reverse Polish Notation.
*/

//import { type } from "os";

export function rpn(inputString: string) {
  //Input validation -- todo: extract this as function function
  //max length - declare const and refer below
  
  
  function inputCheck(inputString: string):string {
    let inputStatus :string;
    const inputLimit = 100;
    if (inputString.length > inputLimit) {
      return inputStatus = "This is too long equation.";
    }

    const regex = /[a-zA-Z!@#$%&()_\\={[}\]|:;"'<,>}]/;
    let regexCheck = !regex.test(inputString);
    if (regexCheck === false || inputString ==="") {
      return inputStatus = "Invalid Expression";
    }
    return(inputStatus = "Valid input"); 
}
  let inputStatusResult = inputCheck(inputString);

  //console.log(inputCheck(inputString));

  if (inputStatusResult === "Valid input") {

  //parsing input into an array --> parse to array function
  //change token into parsedInput. give info in code review. token used when logging in (returns token)
    
    const operandsAndOperators: Array<number | string> = inputString.split(" ").map((equation) => {
        var parsedEquation = isNaN(Number(equation))
          ? equation
          : Number(equation);
        return parsedEquation;
      });

    
  //last case of input validation for "Not enough operands". Potentially can be simplified in future.
  //function - validate operands
  let operatorCount = 0;
  let counter:number;
  for (counter=0; counter <= operandsAndOperators.length; counter++){
      if(typeof operandsAndOperators[counter] === 'string'){
        operatorCount++;
      }
    }

    if (operatorCount + 1 != operandsAndOperators.length - operatorCount) {
      return "Not Enough Operands";
    }


    //rpn calculator operation
    const stack: number[] = [];
    operandsAndOperators.forEach((operandOrOperator) => {
      let result: any;
      if (typeof operandOrOperator === "string"){ 
        //funkcja, która podstawia znak działania jako zmienną (nie powtarzaj results)
        //uzyj switch do obslugi tego
        if (operandOrOperator === "+") {
          // @ts-ignore
          result = ((a: number, b: number) => a + b)(...stack.splice(-2));
        } 
        if (operandOrOperator === "-") {
          // @ts-ignore
          result = ((a: number, b: number) => a - b)(...stack.splice(-2));
        } 
        if (operandOrOperator === "*") {
          // @ts-ignore
          result = ((a: number, b: number) => a * b)(...stack.splice(-2));
        } 
        if (operandOrOperator === "/") {
          // @ts-ignore
          result = ((a: number, b: number) => a / b)(...stack.splice(-2));
        } 
    }
      else result = operandOrOperator;
      stack.push(result);
    });
    return stack[0] as number;
}
else return inputStatusResult;
}

let test = rpn ("6 0 + $")
console.log(test);
