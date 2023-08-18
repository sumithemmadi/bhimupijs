# Bhimupijs

[![NPM version](https://img.shields.io/npm/v/bhimupijs.svg)](https://www.npmjs.com/package/bhimupijs)
[![GIT Stars](https://img.shields.io/github/stars/sumithemmadi/bhimupijs)](https://github.com/sumithemmadi/bhimupijs/)
[![Download](https://img.shields.io/npm/dt/bhimupijs.svg)](https://github.com/sumithemmadi/bhimupijs)
[![GitHub Sponsors](https://img.shields.io/badge/sponsor-1-blue)](https://github.com/sumithemmadi/bhimupijs)
[![LICENSE](https://img.shields.io/npm/l/bhimupijs.svg)](https://github.com/sumithemmadi/bhimupijs/blob/main/LICENSE)
[![Maintenance](https://img.shields.io/npms-io/maintenance-score/bhimupijs)](https://github.com/sumithemmadi/bhimupijs)
[![Issues](https://img.shields.io/github/issues/sumithemmadi/bhimupijs)](https://github.com/sumithemmadi/bhimupijs/issues)

<!-- [![GitHub Sponsors](https://img.shields.io/github/sponsors/sumithemmadi)](https://github.com/sumithemmadi/bhimupijs) -->


Bhimupijs is a lightweight npm module that provides functionalities to validate, verify, and generate QR codes for UPI IDs (Unified Payments Interface). It aims to simplify the process of working with UPI handles, making it easy to perform checks and generate QR codes for payment transactions.

## Features

- Validate the format of UPI IDs (VPAs).
- Verify the validity of UPI IDs by querying a remote service.
- Generate QR codes for UPI IDs.

## Bhimupijs Command-Line Interface (CLI)

Bhimupijs provides a convenient command-line interface (CLI) that allows you to perform various tasks related to UPI (Unified Payments Interface) handles, such as validation, verification, and QR code generation.

### Root Installation

To use the Bhimupijs CLI, you need to install the package globally on your system using the following command:

```bash
npm install -g bhimupijs
```

### cli Usage

The Bhimupijs CLI supports several commands and options. Here are the available commands:

### Options

- `--help`, `-h`: Display usage information and available options.
- `--qrcode`, `--qr`: Generate and display a QR code.
- `--vp`, `--vp`: Show detailed UPI ID information.
- `--name`, `-n`: Display the extracted handle name from the UPI ID.
  
To verify a UPI ID by querying a remote service:

```bash
bhimupijs <upiId> 
```

Example:

```bash
bhimupijs sumithemmadi@ybl
```

#### Validate UPI ID

Use the `--vp`  to validate a UPI ID (VPA) pattern:

```bash
bhimupijs <upiId> --vp
```

Example:

```bash
bhimupijs  sumithemmadi@paytm --vp
```

#### Generate QR Code

Use the `--qr` command to generate a QR code for a valid UPI ID:

```bash
bhimupijs  <upiId> --qr
```

Example:

```bash
bhimupijs  sumithemmadi@paytm --qr
```


## Usage

### Installation

```bash
npm install bhimupijs
```

Here's a quick example of how you can use Bhimupijs to validate and verify UPI IDs:

### **validate UPI Id**
  
```typescript
import { validatePattern, ValidateVPA } from 'bhimupijs';

function validateUPI(vpa: string): void {
  const validationResult: ValidateVPA = validatePattern(vpa);

}

validateUPI('sumithemmadi@paytm');

// {
//   query: 'sumithemmadi@paytm',
//   isQueryPatternValid: true,
//   message: 'Valid VPA Pattern!',
//   tpap: 'Paytm',
//   pspBank: 'Paytm Payments Bank (PPBL) ',
//   link: 'https://paytm.com/',
//   userId: 'sumithemmadi',
//   handleName: 'paytm'
// }

```

- **query**: The original VPA pattern.
- **isQueryPatternValid**: A boolean indicating whether the VPA pattern is valid.
- **message**: A message indicating the validation result ("Valid VPA Pattern!" or "Invalid VPA Pattern!").
- **tpap**: The Third-Party App Provider associated with the handle name (if valid and found).
- **pspBank**: The Payment Service Provider bank associated with the handle name (if valid and found).
- **link**: A link associated with the handle name (if valid and found).
- **userId**: The user identifier extracted from the VPA pattern.
- **handleName**: The handle name extracted from the VPA pattern.

### **Verify UPI Id**

```typescript
import { verifyUPI, VerifyVPA } from 'bhimupijs';

async function main() {
    const upiId = 'sumithemmadi@paytm';

    try {
        const response: VerifyVPA = await verifyUPI(upiId);
        console.log(response)
    } catch (error: any) {
        console.error('Error:', error.message);
    }
}

main();

// {
//   result: true,
//   query: 'sumithemmadi@paytm',
//   isQueryPatternValid: true,
//   isVpaVerified: true,
//   vpa: 'sumithemmadi@paytm',
//   payeeAccountName: 'Emmadi Sumith Kumar',
//   tpap: 'Paytm',
//   pspBank: 'Paytm Payments Bank (PPBL) ',
//   link: 'https://paytm.com/',
//   userId: 'sumithemmadi',
//   handleName: 'paytm',
//   message: 'Valid UPI ID'
// }

```
- **result**: A boolean indicating the overall result of the verification process.
- **query**: The original VPA pattern that was verified.
- **isQueryPatternValid**: A boolean indicating whether the VPA pattern is valid.
- **isVpaVerified**: A boolean indicating whether the VPA is verified by the API.
- **vpa**: The verified VPA (if verification is successful).
- **payeeAccountName**: The payee account name associated with the verified VPA (if verification is successful).
- **tpap**: The Third-Party App Provider associated with the handle name from the VPA pattern (if valid and found).
- **pspBank**: The Payment Service Provider bank associated with the handle name from the VPA pattern (if valid and found).
- **link**: A link associated with the handle name from the VPA pattern (if valid and found).
- **userId**: The user identifier extracted from the VPA pattern.
- **handleName**: The handle name extracted from the VPA pattern.
- **message**: A message providing information about the verification result.



For more detailed examples and API documentation, please refer to the [API Documentation](./typings/index.d.ts).

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or want to add new features, feel free to open an issue or submit a pull request on [GitHub](https://github.com/sumithemmadi/bhimupijs).

### Troubleshooting

If you encounter any issues or have questions, please refer to the [GitHub repository](https://github.com/sumithemmadi/bhimupijs) for this package or open an issue there.

## 💝 Sponsor

If you find TruecallerJS helpful or inspiring, consider supporting me through GitHub Sponsors. Your sponsorship helps me dedicate more time and effort to open source development and creating impactful projects.

- **Sponsor Me**: [https://github.com/sponsors/sumithemmadi](https://github.com/sponsors/sumithemmadi/)
- **Paypal**: [paypal.me/sumithemmadi](https://paypal.me/sumithemmadi)
- **UPI ID** : sumithemmadi@paytm

### 💖 Sponsors

[![Sponsors](https://sumithemmadi.github.io/sponsor.svg)](https://github.com/sponsors/sumithemmadi/)

## Acknowledgments

Thank you for choosing TruecallerJS! I hope it helps you retrieve phone number details efficiently.


## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

