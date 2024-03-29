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

interface BankInfo {
  _: string[];
  handle: {
    [id: string]: {
      PSPbank: string;
      TPAP: string;
      id: string;
      link: string;
    };
  };
}

const handles: BankInfo = {
  _: [
    "apl",
    "airtelpaymentsbank",
    "yapl",
    "abfspay",
    "fbl",
    "axisb",
    "idfcbank",
    "ybl",
    "rmhdfcbank",
    "icici",
    "okaxis",
    "okhdfcbank",
    "okicici",
    "oksbi",
    "axisbank",
    "jupiteraxis",
    "hdfcbankjd",
    "indus",
    "hsbc",
    "myicici",
    "ikwik",
    "ibl",
    "axl",
    "pingpay",
    "kmbl",
    "tapicici",
    "timecosmos",
    "yesbank",
    "waicici",
    "waaxis",
    "wahdfcbank",
    "wasbi",
    "barodampay",
    "rbl",
    "idbi",
    "upi",
    "aubank",
    "bandhan",
    "kbl",
    "federal",
    "sbi",
    "uco",
    "citi",
    "citigold",
    "dlb",
    "dbs",
    "freecharge",
    "indianbank",
    "allbank",
    "paytm",
    "sib",
    "airtel",
    "jio",
    "ippb",
    "nsdl",
    "fpb",
    "fino",
  ],
  handle: {
    abfspay: {
      PSPbank: "Federal Bank",
      TPAP: "Bajaj Finserv",
      id: "abfspay",
      link: "https://www.bajajfinservmarkets.in/contact-us.html",
    },
    airtel: {
      PSPbank: "Airtel Payments Bank",
      TPAP: "Airtel Payments Bank",
      id: "airtel",
      link: "https://www.airtel.in/bank/",
    },
    airtelpaymentsbank: {
      PSPbank: "Airtel Payments Bank",
      TPAP: "Airtel Payments Bank",
      id: "airtelpaymentsbank",
      link: "https://www.airtel.in/bank/",
    },
    allbank: {
      PSPbank: "Indian Bank",
      TPAP: "IndOASIS",
      id: "allbank",
      link: "https://www.indianbank.net.in/jsp/startIB.jsp",
    },
    apl: {
      PSPbank: "Axis Bank",
      TPAP: "Amazon Pay",
      id: "apl",
      link: "https://www.amazon.in/hz/contact-us/",
    },
    aubank: {
      PSPbank: "AU Small Finance Bank",
      TPAP: "BHIM AUPay ",
      id: "aubank",
      link: "https://www.aubank.in/",
    },
    axisb: {
      PSPbank: "Axis Bank",
      TPAP: "CRED",
      id: "axisb",
      link: "https://cred.club/",
    },
    axisbank: {
      PSPbank: "Axis Bank",
      TPAP: "Axis Pay",
      id: "axisbank",
      link: "https://www.axisbank.com/",
    },
    axl: {
      PSPbank: "Axis Bank",
      TPAP: "PhonePe",
      id: "axl",
      link: "https://www.phonepe.com/contact-us/",
    },
    bandhan: {
      PSPbank: "Bandhan Bank",
      TPAP: "BHIM BANDHAN UPI",
      id: "bandhan",
      link: "https://bandhanbank.com/",
    },
    barodampay: {
      PSPbank: "Bank of Baroda",
      TPAP: "BHIM Baroda Pay",
      id: "barodampay",
      link: "https://www.bankofbaroda.in/contact-us",
    },
    citi: {
      PSPbank: "Citi Bank",
      TPAP: "Citi Mobile",
      id: "citi",
      link: "https://www.online.citibank.co.in/",
    },
    citigold: {
      PSPbank: "Citi Bank",
      TPAP: "Citi Mobile",
      id: "citigold",
      link: " https://www.online.citibank.co.in/",
    },
    dbs: {
      PSPbank: "DigiBank - DBS",
      TPAP: "DigiBank - DBS",
      id: "dbs",
      link: "https://www.dbs.com/digibank/in/default.page",
    },
    dlb: {
      PSPbank: "Dhanlaxmi Bank",
      TPAP: "DhanSmart",
      id: "dlb",
      link: "https://www.dhanbank.com/personal/online-services.aspx",
    },
    fbl: {
      PSPbank: "Federal Bank",
      TPAP: "CoinTab",
      id: "fbl",
      link: "https://www.cointab.in/contact/ ",
    },
    federal: {
      PSPbank: "Federal Bank",
      TPAP: " BHIM Lotza UPI",
      id: "federal",
      link: "https://www.federalbank.co.in/",
    },
    fino: {
      PSPbank: "Fino Bank",
      TPAP: "FINO BANK",
      id: "fino",
      link: "https://www.finobank.com/personal/products/upi",
    },
    fpb: {
      PSPbank: "Fino Bank",
      TPAP: "FINO BANK",
      id: "fpb",
      link: "https://www.finobank.com/personal/products/upi",
    },
    freecharge: {
      PSPbank: "Axis Bank",
      TPAP: "Freecharge",
      id: "freecharge",
      link: "https://www.freecharge.in/",
    },
    hdfcbankjd: {
      PSPbank: "HDFC Bank",
      TPAP: "JustDial",
      id: "hdfcbankjd",
      link: "https://www.justdial.com/",
    },
    hsbc: {
      PSPbank: "HSBC Bank",
      TPAP: "HSBC Simply Pay ",
      id: "hsbc",
      link: "https://www.hsbc.co.in/ways-to-bank/mobile-banking/simply-pay/",
    },
    ibl: {
      PSPbank: "ICICI Bank",
      TPAP: "PhonePe",
      id: "ibl",
      link: "https://www.phonepe.com/contact-us/",
    },
    icici: {
      PSPbank: "ICICI bank",
      TPAP: "iMobile by ICICI Bank",
      id: "icici",
      link: "https://support.goibibo.com/support/solutions/folders/12000008822",
    },
    idbi: {
      PSPbank: "IDBI Bank",
      TPAP: "BHIM PayWiz or IDBI Bank GO Mobile+ ",
      id: "idbi",
      link: "https://www.idbibank.in/contact-us.aspx",
    },
    ikwik: {
      PSPbank: "HDFC Bank",
      TPAP: "MobiKwik",
      id: "ikwik",
      link: "https://www.mobikwik.com/contact",
    },
    indianbank: {
      PSPbank: "Indian Bank",
      TPAP: "IndOASIS",
      id: "indianbank",
      link: "https://www.indianbank.net.in/jsp/startIB.jsp",
    },
    indus: {
      PSPbank: "IndusInd Bank",
      TPAP: "IndusPay",
      id: "indus",
      link: "https://www.indusind.com/in/en/microsites/induspay.html",
    },
    ippb: {
      PSPbank: "India Post Payments Bank",
      TPAP: "India Post Payments Bank",
      id: "ippb",
      link: "https://www.ippbonline.com/",
    },
    jio: {
      PSPbank: "Jio Payments Bank",
      TPAP: "Jio Payments Bank",
      id: "jio",
      link: "https://www.jiopaymentsbank.com/contact-us",
    },
    jupiteraxis: {
      PSPbank: "Axis Bank Limited",
      TPAP: "Jupiter Money",
      id: "jupiteraxis",
      link: "https://jupiter.money/contact/",
    },
    kbl: {
      PSPbank: "Karnataka Bank",
      TPAP: "BHIM KBL UPI",
      id: "kbl",
      link: "https://karnatakabank.com/contact-us",
    },
    kmbl: {
      PSPbank: "Kotak Mahindra Bank",
      TPAP: "SuperPay (Chintamoney)",
      id: "kmbl",
      link: "https://www.superpay.money/media",
    },
    myicici: {
      PSPbank: "ICICI Bank",
      TPAP: "Mi Pay",
      id: "iMobile by ICICI Bank or myicici",
      link: "https://www.pay.mi.com/in/#/contact-us",
    },
    nsdl: {
      PSPbank: "NSDL Bank",
      TPAP: "National Securities Depository Limited",
      id: "nsdl",
      link: "https://nsdlbank.com/contact_us.php",
    },
    okaxis: {
      PSPbank: "Axis Bank ",
      TPAP: "Google Pay",
      id: "okaxis",
      link: "https://support.google.com/pay/india/answer/10084701#zippy=%2Clevel---complaints-registration%2Clevel---grievance-redressal",
    },
    okhdfcbank: {
      PSPbank: "HDFC Bank",
      TPAP: "Google Pay",
      id: "okhdfcbank",
      link: "https://support.google.com/pay/india/answer/10084701#zippy=%2Clevel---complaints-registration%2Clevel---grievance-redressal",
    },
    okicici: {
      PSPbank: "ICICI Bank",
      TPAP: "Google Pay",
      id: "okicici",
      link: "https://support.google.com/pay/india/answer/10084701#zippy=%2Clevel---complaints-registration%2Clevel---grievance-redressal",
    },
    oksbi: {
      PSPbank: "State Bank of India ",
      TPAP: "Google Pay",
      id: "oksbi",
      link: "https://support.google.com/pay/india/answer/10084701#zippy=%2Clevel---complaints-registration%2Clevel---grievance-redressal",
    },
    paytm: {
      PSPbank: "Paytm Payments Bank (PPBL) ",
      TPAP: "Paytm",
      id: "paytm",
      link: "https://paytm.com/",
    },
    pingpay: {
      PSPbank: "Axis Bank",
      TPAP: "Samsung Pay",
      id: "pingpay",
      link: "https://www.samsung.com/in/support/email/",
    },
    rbl: {
      PSPbank: "RBL Bank",
      TPAP: "BHIM RBL Pay ",
      id: "rbl",
      link: "https://www.rblbank.com/contact-us",
    },
    rmhdfcbank: {
      PSPbank: "HDFC",
      TPAP: " FinShell Pay",
      id: "rmhdfcbank",
      link: " https://finshell.co.in/",
    },
    sbi: {
      PSPbank: "State Bank of India",
      TPAP: "BHIM SBIPay",
      id: "sbi",
      link: "https://www.onlinesbi.com/",
    },
    sib: {
      PSPbank: "South Indian Bank",
      TPAP: "SIB Mirror+",
      id: "sib",
      link: "https://www.southindianbank.com/helpDesk/helpDeskDetails.aspx?hdId=18",
    },
    tapicici: {
      PSPbank: "ICICI Bank",
      TPAP: "TataNeu",
      id: "tapicici",
      link: "https://www.tata.com/business/tata-digital/tata-neu",
    },
    timecosmos: {
      PSPbank: "The Cosmos Co-Operative Bank Ltd",
      TPAP: "Timepay",
      id: "timecosmos",
      link: "https://www.timepayonline.com/upi-terms-conditions.php?current=Terms-Conditions",
    },
    uco: {
      PSPbank: "UCO Bank",
      TPAP: "UCO UPI",
      id: "uco",
      link: "https://www.ucobank.com/english/home.aspx",
    },
    upi: {
      PSPbank: "National Payment Corporation of India (NPCI)",
      TPAP: "BHIM UPI App",
      id: "upi",
      link: "https://www.bhimupi.org.in/",
    },
    waaxis: {
      PSPbank: "HDFC Bank",
      TPAP: "WhatsApp",
      id: "waaxis",
      link: "http://www.whatsapp.com/contact/?lang=en",
    },
    wahdfcbank: {
      PSPbank: "HDFC Bank",
      TPAP: "WhatsApp",
      id: "wahdfcbank",
      link: "http://www.whatsapp.com/contact/?lang=en",
    },
    waicici: {
      PSPbank: "ICICI Bank",
      TPAP: "WhatsApp",
      id: "waicici",
      link: "http://www.whatsapp.com/contact/?lang=en",
    },
    wasbi: {
      PSPbank: "State Bank of India",
      TPAP: "WhatsApp",
      id: "wasbi",
      link: "http://www.whatsapp.com/contact/?lang=en",
    },
    yapl: {
      PSPbank: "Yes Bank",
      TPAP: "Amazon Pay",
      id: "yapl",
      link: "https://www.amazon.in/hz/contact-us/",
    },
    ybl: {
      PSPbank: "Yes Bank",
      TPAP: "PhonePe",
      id: "ybl",
      link: "https://www.phonepe.com/contact-us/",
    },
    yesbank: {
      PSPbank: "Yes Bank",
      TPAP: "YuvaPay",
      id: "yesbank",
      link: "https://www.yuvapay.com/contact.aspx",
    },
  },
};

export default handles;
