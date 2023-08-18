import { validatePattern as vpFunction, ValidateVPA } from "./validatePattern.js";
import { verifyUPI as vUPI, VerifyVPA } from "./verifyUPI.js";
export declare const validatePattern: typeof vpFunction;
export declare const verifyUPI: typeof vUPI;
export { ValidateVPA, VerifyVPA };
declare const bhimupijs: {
    validatePattern: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    verifyUPI: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
};
export default bhimupijs;
