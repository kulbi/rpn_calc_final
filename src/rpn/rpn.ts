/*
This function compute result for equation given in Reverse Polish Notation.
*/


export function rpn(inputString: string) {

  function inputCheck(inputString: string):string {
    let inputStatus :string;
    const inputLimit = 100;
    if (inputString.length > inputLimit) {
      return inputStatus = "This is too long equation.";
    }

    const unexpectedInput = /[a-zA-Z!@#$%&()_\\={[}\]|:;"'<,>}]/;
    let regexCheck = !unexpectedInput.test(inputString);
    if (regexCheck === false || inputString ==="") {
      return inputStatus = "Invalid Expression";
    }
    return(inputStatus = "Valid input"); 
  }


  let inputStatusResult = inputCheck(inputString);
  if (inputStatusResult != "Valid input") return(inputStatusResult);
  


  //parsing input into an array --> 'parse to array' function
  //change token into parsedInput. give info in code review. token used when logging in (returns token)


    const operandsAndOperators: Array<number | string> = inputString.split(" ").map((equation) => {
          let parsedEquation = isNaN(Number(equation))
            ? equation
            : Number(equation);
          return parsedEquation;
        });

    
  //last case of input validation for "Not enough operands". Potentially can be simplified in future.
  //function - validate operands
  console.log("here an array before loop " +operandsAndOperators);
  function equationValidation(...operandsAndOperators: any): string { //<-------tu sie wypierdala
  let operatorCount = 0;
  let counter:number;
  let equationStatus :string;
  console.log("here an array " +operandsAndOperators);
  console.log("lenght of array: "+operandsAndOperators.length);
  console.log;(operandsAndOperators[0]);
  console.log("gowno");
  console.log;("position 1 is: " +operandsAndOperators[1]);
  for (counter=0; counter < operandsAndOperators.length; counter++){
      if(typeof operandsAndOperators[counter] === 'string'){
        operatorCount++;
        //return equationStatus = "Valid equation";
        console.log("operator position is" + operandsAndOperators[counter]);
      }
        console.log("operator count is" + operatorCount);
      if (operatorCount + 1 != operandsAndOperators.length - operatorCount) {
      return equationStatus = "Not Enough Operands";
      }
    }
  return equationStatus = "Valid equation";
}

let equationValidatioResult = equationValidation([...operandsAndOperators]);
if (equationValidatioResult != "Valid equation") return(equationValidatioResult);
 
  //let equationValidationResult = equationValidation(inputString);
  //console.log(equationValidationResult);
 // if (dupa === "Valid equation") {

   // const inputLength = inputString.length; 



    //rpn calculator operation
    const stack: number[] = [];
    console.log("stack is" +stack);
    operandsAndOperators.forEach((operandsAndOperators) => {
      let result: any;
      
      if (typeof operandsAndOperators === "string"){ 
        //funkcja, która podstawia znak działania jako zmienną (nie powtarzaj results)
        //uzyj switch do obslugi tego
        let sign = operandsAndOperators;
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

let test = rpn ("6 3 +");
console.log(test);
