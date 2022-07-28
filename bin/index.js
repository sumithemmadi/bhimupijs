#!/usr/bin/env node

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

const yargs = require("yargs");
var { validatePattern } = require("../src/validatePattern.js");
var { verifyUPI } = require("../src/verifyUPI.js");
var qrcode = require("qrcode-terminal");

const argv = yargs
  .usage("Usage: \n$0 [VPA] (command to validate VPA).")
  .option("name", {
    alias: "n",
    description: "Print's payee name",
    type: "boolean",
  })
  .option("validate-pattern", {
    alias: "vp",
    description: "Validate VPA pattern",
    type: "boolean",
  })
  .option("qrcode", {
    alias: "qr",
    description: "Print's QR Code of vpa",
    type: "boolean",
  })
  .help()
  .example("$0 sumithemmadi@upi")
  .example("$0 sumithemmadi@upi --qr", "Print's QR code of the vpa")
  .example(
    "\nOnly install this package from npm 'npm install -g bhimupijs' or https://github.com/sumithemmadi/bhimupijs"
  )
  .alias("help", "h").argv;

// console.log(JSON.stringify(argv))
async function printData(userId, handleName, opts) {
  var xdata = await verifyUPI(opts.vpa);
  if (!opts.vp && opts.qrcode && !opts.name) {
    if (xdata.result && xdata.isVpaVerified) {
      var qrData = `upi://pay?pa=${xdata.vpa}&pn=${xdata.payeeAccountName}&mc=0000&mode=02&purpose=00`;
      var data =
        " \
\n    .88    88' 888888887  88  \x1b[38;5;214m0.\x1b[0m \x1b[32m0.\x1b[0m    \
\n   .88    88'        88  88   \x1b[38;5;214m88b\x1b[0m\x1b[32m88b.\x1b[0m   \
\n  .88    88' 88888888P. 88    \x1b[38;5;214m8888>\x1b[0m\x1b[32m88>\x1b[0m\
\n .88    88' 88         88     \x1b[38;5;214m88p\x1b[0m\x1b[32md8P'\x1b[0m   \
\n l888888l' 88         88      \x1b[38;5;214m0'\x1b[0m \x1b[32m0'\x1b[0m  \
\n\
\n     UNIFIED PAYMENT INTERFACE\n";
      console.log(data);
      qrcode.generate(encodeURI(qrData), { small: true });
      console.log("Name : ", `\x1b[32m${xdata.payeeAccountName}\x1b[0m`);
      console.log("VPA  : ", `\x1b[32m${xdata.vpa}\x1b[0m`);
      console.log(
        `\n\x1b[38;5;214mCheck if the name \x1b[32m${xdata.payeeAccountName}\x1b[0m \x1b[38;5;214mis correct for above QR Code.\x1b[0m`
      );
    } else {
      console.log(
        "A QR code can only be generated if the UPI ID you entered is verified."
      );
    }
  } else if (!opts.vp && !opts.qrcode && opts.name) {
    if (xdata.result && xdata.isVpaVerified) {
      console.log(
        `\x1b[33mName\x1b[0m : \x1b[32m${xdata.payeeAccountName}\x1b[0m`
      );
    } else {
      console.log("\x1b[33mName\x1b[0m : \x1b[32munknown\x1b[0m");
    }
  } else {
    console.log(xdata);
  }
}

if (argv._.length == 0) {
  yargs.showHelp();
  process.exit(1);
} else {
  var vpa = argv._[0].toString();
  var opts = {
    vpa: vpa,
    qrcode: !!argv.qrcode,
    name: !!argv.name,
    vp: !!argv.vp,
  };
  var vpaArr = vpa.split("@");
  if (opts.vp && !opts.qrcode && !opts.name) {
    console.log(validatePattern(vpa));
  } else {
    var userId = vpaArr[0];
    var handleName = vpaArr[1];
    printData(userId, handleName, opts);
  }
}
