/*
This function compute result for equation given in Reverse Polish Notation.
*/

import { type } from "os";

export function rpn(inputString: string): any {
  //Input validation
  if (inputString.length > 2137) {
    return "Too many kremowkas my friend.";
  }

  let inputValidation = !/[a-zA-Z!@#$%&()_\\={[}\]|:;"'<,>}]/.test(inputString);
  if (inputValidation === false || inputString ==="") {
    return "Invalid Expression";
  }


//parsing input into an array
  const operandsAndOperators: Array<number | string> = inputString.split(" ").map((token) => {
      var parsedToken = isNaN(Number(token))
        ? token
        : Number(token);
      return parsedToken;
    });

  
//last case of input validation for "Not enough operands". Potentially can be simplified in future.
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
