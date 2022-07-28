// MIT License

// Copyright (c) 2022 Emmadi Sumith Kumar

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

const axios = require("axios").default;
var { validatePattern } = require("./validatePattern.js");

async function sendRequest(qp, userId, handleName, vpa) {
  const headers = {
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
  return await axios
    .get(`https://paydigi.airtel.in/web/pg-service/v1/validate/vpa/${vpa}`, {
      headers: headers,
    })
    .then((response) => {
      var data = response.data;
      // console.log(data)
      if (data.result && data.data.vpaValid) {
        var vpaData1 = {
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
        var vpaData2 = {
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
        var vpaData3 = {
          result: data.result,
          query: vpa,
          isQueryPatternValid: qp.isQueryPatternValid,
          message: "Something went wrong!",
        };
        return vpaData3;
      }
    })
    .catch((err) => {
      if (err.code == "ENOTFOUND") {
        console.log("Check your internet connection!");
      } else {
        console.log(err.message);
      }
      process.exit(1);
    });
}

exports.verifyUPI = async function verifyUPI(vpa) {
  var vpaArr = vpa.split("@");
  var qp = validatePattern(vpa);
  if (
    vpaArr.length != 2 ||
    !qp.isQueryPatternValid ||
    vpaArr[0].length <= 1 ||
    vpaArr[1].length <= 2
  ) {
    var vpaData = {
      result: true,
      query: vpa,
      isQueryPatternValid: qp.isQueryPatternValid,
      message: "Invalid UPI ID!",
    };
    return vpaData;
  } else {
    return await sendRequest(qp, vpaArr[0], vpaArr[1], vpa).then((x) => {
      return x;
    });
  }
};

module.exports.validatePattern = validatePattern;
