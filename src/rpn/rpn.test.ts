import { rpn } from "./rpn";
describe("rpn()", () => {
  it("returs 4 when passed", () => {
    expect(rpn("1 3 +")).toBe(4);
  });
  it("return 12 when passed", () => {
    expect(rpn("2 2 + 3 *")).toBe(12);
  });
  it("return 1 when passed", () => {
    expect(rpn("2 2 /")).toBe(1);
  });
  it("return 8 when passed", () => {
    expect(rpn("3 1 - 2 2 + *")).toBe(8);
  });
  it("return 23 when passed", () => {
    expect(rpn("4 3 4 + 5 1 + 2 * + +")).toBe(23);
  });
  it("return /Invalid Expression/ when passed - empty input", () => {
    expect(rpn("")).toBe("Invalid Expression");
  });
  it("return /Invalid Expression/ when passed - incorrect input datatype", () => {
    expect(rpn("abc")).toBe("Invalid Expression");
  });
  it("return message /Not Enough Operands/ when passed", () => {
    expect(rpn("1 +")).toBe("Not Enough Operands");
  });
});