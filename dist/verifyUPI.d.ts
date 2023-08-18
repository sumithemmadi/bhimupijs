import { ValidateVPA } from "./validatePattern.js";
interface VerifyVPA {
    result: boolean;
    query: string;
    isQueryPatternValid: boolean;
    isVpaVerified?: boolean;
    vpa?: string;
    payeeAccountName?: string;
    tpap?: string;
    pspBank?: string;
    link?: string;
    userId?: string;
    handleName?: string;
    message: string;
}
export declare function sendRequest(qp: ValidateVPA, userId: string, handleName: string, vpa: string): Promise<VerifyVPA>;
/**
 * Verifies a Virtual Payment Address (VPA) by sending a request to the Airtel Pay Digi API.
 *
 * This function takes a Virtual Payment Address (VPA) as input and performs the following steps:
 * - Validates the VPA pattern structure.
 * - Sends a request to the Airtel Pay Digi API to verify the provided VPA.
 * - Processes the API response and constructs a VerifyVPA object with relevant information.
 *
 * @param {string} vpa - The Virtual Payment Address (VPA) to be verified (e.g., "user@examplebank").
 * @returns {Promise<VerifyVPA>} A Promise that resolves to a VerifyVPA object containing verification results and extracted information:
 * - result: A boolean indicating the overall result of the verification process.
 * - query: The original VPA pattern that was verified.
 * - isQueryPatternValid: A boolean indicating whether the VPA pattern is valid.
 * - isVpaVerified: A boolean indicating whether the VPA is verified by the API.
 * - vpa: The verified VPA (if verification is successful).
 * - payeeAccountName: The payee account name associated with the verified VPA (if verification is successful).
 * - tpap: The Third-Party App Provider associated with the handle name from the VPA pattern (if valid and found).
 * - pspBank: The Payment Service Provider bank associated with the handle name from the VPA pattern (if valid and found).
 * - link: A link associated with the handle name from the VPA pattern (if valid and found).
 * - userId: The user identifier extracted from the VPA pattern.
 * - handleName: The handle name extracted from the VPA pattern.
 * - message: A message providing information about the verification result.
 */
export declare function verifyUPI(vpa: string): Promise<VerifyVPA>;
export { VerifyVPA };
