const { verifyUPI } = require("..")

const vpa = "sumithemmadi@ybl";

async function verify(vpa){
    var upiData = await verifyUPI(vpa)
    console.log(upiData)
}

verify(vpa)