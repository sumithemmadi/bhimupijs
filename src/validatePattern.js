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

var handles = require("./handles.json");
var jsonData = JSON.parse(JSON.stringify(handles));

exports.validatePattern = function validatePattern(vpa) {
  var result = /^[a-z0-9_.-]{3,}@[a-z]{3,}$/i.test(vpa);
  var vpaArr = vpa.split("@");
  var handleName = vpaArr[1];
  var flag = !!jsonData._.includes(handleName);
  var tpap = flag ? jsonData.handle[handleName].TPAP : "unknown";
  var pspBank = flag ? jsonData.handle[handleName].PSPbank : "unknown";
  var helpLink = flag ? jsonData.handle[handleName].link : "unknown";

  if (result) {
    var vpaData1 = {
      query: vpa,
      isQueryPatternValid: true,
      message: "Valid VPA Pattern!",
      tpap,
      pspBank,
      link: helpLink,
      userId: vpaArr[0],
      handleName: vpaArr[1],
    };
    return vpaData1;
  } else {
    var vpaData2 = {
      query: vpa,
      isQueryPatternValid: false,
      message: "Invalid VPA Pattern!",
    };
    return vpaData2;
  }
};
