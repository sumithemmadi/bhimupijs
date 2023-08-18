import { validatePattern } from "../dist/index.js";

describe("validateUPI", () => {
  it("should validate a valid VPA pattern", () => {
    const vpa = "sumithemmadi@paytm";
    const validationResult = validatePattern(vpa);

    expect(validationResult.isQueryPatternValid).toBe(true);
    expect(validationResult.message).toBe("Valid VPA Pattern!");
    expect(validationResult.tpap).toBe("Paytm");
    expect(validationResult.pspBank).toBe("Paytm Payments Bank (PPBL) ");
    expect(validationResult.link).toBe("https://paytm.com/");
    expect(validationResult.userId).toBe("sumithemmadi");
    expect(validationResult.handleName).toBe("paytm");
  });

  it("should validate an invalid VPA pattern", () => {
    const vpa = "invalidvpa@y";
    const validationResult = validatePattern(vpa);

    expect(validationResult.isQueryPatternValid).toBe(false);
    expect(validationResult.message).toBe("Invalid VPA Pattern!");
  });
});
