import { verifyUPI } from "../dist/verifyUPI.js";

describe("verifyUPI", () => {
  it("should verify a valid UPI ID", async () => {
    const upiId = "sumithemmadi@paytm";
    const response = await verifyUPI(upiId);

    expect(response.result).toBe(true);
    expect(response.isQueryPatternValid).toBe(true);
    expect(response.isVpaVerified).toBe(true);
    expect(response.vpa).toBe("sumithemmadi@paytm");
    expect(response.payeeAccountName).toBe("Emmadi Sumith Kumar");
    expect(response.tpap).toBe("Paytm");
    expect(response.pspBank).toBe("Paytm Payments Bank (PPBL) ");
    expect(response.link).toBe("https://paytm.com/");
    expect(response.userId).toBe("sumithemmadi");
    expect(response.handleName).toBe("paytm");
    expect(response.message).toBe("Valid UPI ID");
  });
});
