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

import axios, { AxiosResponse } from "axios";
import { validatePattern, ValidateVPA } from "./validatePattern.js";

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

const HEADERS = {
  "sec-ch-ua":
    'Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101.0.1210.47',
  Accept: "application/json, text/plain, */*",
  "sec-ch-ua-mobile": "?0",
  "channel-id": "WEB_UNAUTH",
  "sec-ch-ua-platform": "Windows",
  Origin: "https://www.airtel.in",
  "Sec-Fetch-Site": "same-site",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Dest": "empty",
  Referer: "https://www.airtel.in/",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "en-US,en;q=0.9",
};

const ERROR_MESSAGES = {
  ENOTFOUND: "Check your internet connection!",
};

export async function sendRequest(
  qp: ValidateVPA,
  userId: string,
  handleName: string,
  vpa: string
): Promise<VerifyVPA> {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `https://paydigi.airtel.in/web/pg-service/v1/validate/vpa/${vpa}`,
      {
        headers: HEADERS,
      }
    );

    const data = response.data;

    if (data.result && data.data.vpaValid) {
      const vpaData1: VerifyVPA = {
        result: data.result,
        query: vpa,
        isQueryPatternValid: qp.isQueryPatternValid,
        isVpaVerified: data.data.vpaValid,
        vpa: data.data.vpa,
        payeeAccountName: data.data.payeeAccountName,
        tpap: qp.tpap,
        pspBank: qp.pspBank,
        link: qp.link,
        userId,
        handleName,
        message: "Valid UPI ID",
      };
      return vpaData1;
    } else if (data.result && !data.data.vpaValid) {
      const vpaData2: VerifyVPA = {
        result: data.result,
        query: vpa,
        isQueryPatternValid: qp.isQueryPatternValid,
        isVpaVerified: data.data.vpaValid,
        tpap: qp.tpap,
        pspBank: qp.pspBank,
        link: qp.link,
        userId,
        handleName,
        message: "Invalid UPI ID!",
      };
      return vpaData2;
    } else {
      const vpaData3: VerifyVPA = {
        result: data.result,
        query: vpa,
        isQueryPatternValid: qp.isQueryPatternValid,
        message: "Something went wrong!",
      };
      return vpaData3;
    }
  } catch (err: any) {
    if (err.code === "ENOTFOUND" || err.code === "EAI_AGAIN") {
      const vpaData4: VerifyVPA = {
        result: false,
        query: vpa,
        isQueryPatternValid: qp.isQueryPatternValid,
        message: ERROR_MESSAGES.ENOTFOUND,
      };
      return vpaData4;
    } else {
      const vpaData5: VerifyVPA = {
        result: false,
        query: vpa,
        isQueryPatternValid: qp.isQueryPatternValid,
        message: err.message,
      };
      return vpaData5;
    }
  }
}

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
export async function verifyUPI(vpa: string): Promise<VerifyVPA> {
  const vpaArr = vpa.split("@");
  const qp: ValidateVPA = validatePattern(vpa);

  if (
    vpaArr.length !== 2 ||
    !qp.isQueryPatternValid ||
    vpaArr[0].length <= 1 ||
    vpaArr[1].length <= 2
  ) {
    const vpaData: VerifyVPA = {
      result: true,
      query: vpa,
      isQueryPatternValid: qp.isQueryPatternValid,
      message: "Invalid UPI ID!",
    };
    return vpaData;
  } else {
    return await sendRequest(qp, vpaArr[0], vpaArr[1], vpa);
  }
}

export { VerifyVPA };
