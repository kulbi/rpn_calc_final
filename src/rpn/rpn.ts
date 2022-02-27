export function rpn(inputString: string): any {
  
  //Input validation
  if (inputString.length > 2137) {
    return "Too many kremowkas my friend.";
  }

  let inputValidation = !/[a-zA-Z!@#$%&()_\\={[}\]|:;"'<,>}]/.test(inputString);
  if (inputValidation === false || inputString ==="") {
    return "Invalid Expression";
  }
//to be added - "not enough operands case"

//parsing input into an array
  const operandsAndOperators: Array<number | string> = inputString.split(" ").map((token) => {
      var parsedToken = isNaN(Number(token))
        ? token
        : Number(token);
      return parsedToken;
    });

  const stack: number[] = [];

  //rpn calculator operation
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


// powtarzaj dla token := weź_następny_token()
//     jeżeli token to liczba
//       odłóż token na stos
//     w przeciwnym wypadku jeżeli token to operator
//       argumenty := weź_tyle_liczb_ze_stosu_ile_wymaga_operator
//       wynik := argument1 operator argument2...
//     odłóż_wynik_na_stos()
//   zwróć_ostatnią_wartość_ze_stosu()
