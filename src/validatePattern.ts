// MIT License

// Copyright (c) 2021 Emmadi Sumith Kumar

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import handles from "./handles.js";

interface HandleData {
  TPAP: string;
  PSPbank: string;
  link: string;
}

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
export function validatePattern(vpa: string): ValidateVPA {
  const result = /^[a-z0-9_.-]{3,}@[a-z]{3,}$/i.test(vpa);
  const vpaArr = vpa.split("@");
  const handleName = vpaArr[1];
  const flag = handles._.includes(handleName);

  const {
    TPAP = "unknown",
    PSPbank = "unknown",
    link = "unknown",
  } = flag
    ? (handles.handle as Record<string, HandleData>)[handleName] || {}
    : {};

  const vpaData: ValidateVPA = {
    query: vpa,
    isQueryPatternValid: result,
    message: result ? "Valid VPA Pattern!" : "Invalid VPA Pattern!",
    tpap: TPAP,
    pspBank: PSPbank,
    link: link,
    userId: vpaArr[0],
    handleName: handleName,
  };

  return vpaData;
}

export { ValidateVPA };
