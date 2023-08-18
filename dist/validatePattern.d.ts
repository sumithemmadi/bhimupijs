interface ValidateVPA {
    query: string;
    isQueryPatternValid: boolean;
    message: string;
    tpap: string;
    pspBank: string;
    link: string;
    userId: string;
    handleName: string;
}
/**
 * Validates a Virtual Payment Address (VPA) pattern and extracts relevant information.
 *
 * This function takes a Virtual Payment Address (VPA) pattern as input and performs
 * validation on the pattern. A valid VPA pattern consists of two parts: a user identifier
 * and a handle name, separated by an "@" symbol. The user identifier must consist of at
 * least 3 alphanumeric characters, followed by the "@" symbol, and the handle name must
 * consist of at least 3 alphabetic characters.
 *
 * @param {string} vpa - The VPA pattern to be validated (e.g., "user@examplebank").
 * @returns {ValidateVPA} An object containing validation results and extracted information:
 * - query: The original VPA pattern.
 * - isQueryPatternValid: A boolean indicating whether the VPA pattern is valid.
 * - message: A message indicating the validation result ("Valid VPA Pattern!" or "Invalid VPA Pattern!").
 * - tpap: The Third-Party App Provider associated with the handle name (if valid and found).
 * - pspBank: The Payment Service Provider bank associated with the handle name (if valid and found).
 * - link: A link associated with the handle name (if valid and found).
 * - userId: The user identifier extracted from the VPA pattern.
 * - handleName: The handle name extracted from the VPA pattern.
 */
export declare function validatePattern(vpa: string): ValidateVPA;
export { ValidateVPA };
