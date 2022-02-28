/*
This function compute result for equation given in Reverse Polish Notation.
*/

export function rpn(inputString: string) {

  function inputCheck(inputString: string):string {
    const inputLimit = 100;
    if (inputString.length > inputLimit) {
      return "This is too long equation.";
    }

    const unexpectedInput = /[a-zA-Z!@#$%&()_\\={[}\]|:;"'<,>}]/;
    const regexCheck = !unexpectedInput.test(inputString);
    if (regexCheck === false || inputString ==="") {
      return "Invalid Expression";
    }
    return "Valid input"; 
  }

  const inputStatusResult = inputCheck(inputString);
  if (inputStatusResult != "Valid input") return(inputStatusResult);
  
  const operandsAndOperators: Array<number | string> = inputString.split(" ").map((equation) => {
    const parsedEquation = isNaN(Number(equation))
      ? equation
      : Number(equation);
    return parsedEquation;
  });

  //input validation for "Not enough operands". It is more universal than just 'not enough operands', 
  //so consider change output to "invalid expression". Potentially can be done more elegant in future.
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
 
  //rpn calculator operation - potentially better on 'switch' function, for future consideration
  const stack: number[] = [];
  operandsAndOperators.forEach((operandsAndOperators) => {    
    let result: any;
      if (typeof operandsAndOperators === "string"){ 
        if (operandsAndOperators === "+") {
          // @ts-ignore
          result = ((a: number, b: number) => a + b)(...stack.splice(-2));
        } 
        if (operandsAndOperators === "-") {
          // @ts-ignore
          result = ((a: number, b: number) => a - b)(...stack.splice(-2));
        } 
        if (operandsAndOperators === "*") {
          // @ts-ignore
          result = ((a: number, b: number) => a * b)(...stack.splice(-2));
        } 
        if (operandsAndOperators === "/") {
          // @ts-ignore
          result = ((a: number, b: number) => a / b)(...stack.splice(-2));
        } 
     }
      else result = operandsAndOperators;
      stack.push(result);
    });
    return stack[0] as number;

  }

