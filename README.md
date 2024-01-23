# 📧 mail 🕵️‍♂️

Unveil the mysteries of your emails with "mail", your go-to detective for decoding the safety of every message! 🔐

## Description 📝

"mail" is a static website designed for analyzing email messages to determine their safety. It allows users to upload a `message/rfc822` file or paste mail headers directly.
The application parses mail data from the email parser ([postal-mime](https://github.com/postalsys/postal-mime)) to provide information about the email, including general details, header information (SPF, DKIM, DMARC), data information (raw text, internal links), and details about mail attachments.

## Table of Contents 📑

- [📧 mail 🕵️‍♂️](#-mail-️️)
  - [Description 📝](#description-)
  - [Table of Contents 📑](#table-of-contents-)
  - [Features 🚀](#features-)
  - [Usage 🕹️](#usage-️)
  - [Roadmap 🗺️](#roadmap-️)
  - [Deployment 🌐](#deployment-)
  - [Contributing 🤝](#contributing-)
  - [Development Setup ⚙️](#development-setup-️)
  - [License 📜](#license-)
  - [Feedback 📬](#feedback-)
  - [Project Status 🚧](#project-status-)

## Features 🚀

- 🔄 **Drag and Drop**: Easily upload `message/rfc822` (`.eml`) files for analysis.
- 📊 **Header Analysis**: Check SPF, DKIM, and DMARC information for domain configuration. (TODO)
- 🔍 **Data Inspection**: View raw text, internal links, and general information about the email.
- 📎 **Attachment Details**: Identify and assess the safety of email attachments.

## Usage 🕹️

- Upload File 📁✨:

  - Drag and drop your `message/rfc822` file onto the designated area.
  - Alternatively, paste mail headers directly into the provided text area.

- Analysis Results 🧐🎭:
  - The application parses data with postal-mime and enrich it to display information about the email.
  - Check the results for general details, header information, data insights, and attachment safety.

## Roadmap 🗺️

- [ ] Add blacklist check in `received` ([MX blacklist](https://mxtoolbox.com/problem/blacklist/)).

- [ ] Add domain analysis feature ([MX domain blacklist](https://mxtoolbox.com/problem/rhsbl)).

- [ ] Add link abuse score ([URLhaus](https://urlhaus.abuse.ch/api/), [PhishTank](https://www.phishtank.com/index.php) or [botvrij.eu](https://botvrij.eu/))

- [ ] Add attachment file analysis (e.g. extract inside links).

- [ ] Add header for additional settings (Dark mode).

- [ ] Display information with colors and icons (info, alert, danger).

- [ ] Only show the relevant sections and hide the general information (raw data, body structure for example).

- [ ] Enhance data parsing and enhancement.

- [ ] Add `.msg` file compatibility.

- [x] Add footer for links (GitHub and BuyMeACoffee).

- [x] Add link extraction from mail content.

## Deployment 🌐

You can access the website at the following URLs:

- [Mail](https://mail.cybai.re)
- [Mail - GitHub Pages](https://cletqui.github.io/mail)
- [Mail - Cloudflare Pages](https://mail-7c7.pages.dev)

[![pages-build-deployment](https://github.com/cletqui/mail/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/cletqui/mail/actions/workflows/pages/pages-build-deployment)

## Contributing 🤝

We welcome contributions! If you'd like to contribute to `mail`, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make changes and commit them.
4. Submit a pull request with a clear description of your changes.

Please adhere to the Contributing Guidelines for a smooth collaboration.

## Development Setup ⚙️

To set up the project locally for development:

1. Clone the repository.

   ```bash
   git clone https://github.com/cletqui/mail.git
   ```

2. Go into the project folder.

   ```bash
   cd mail
   ```

And that's all it takes to get this simple project and start contributing!

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Feedback 📬

We welcome your feedback! If you encounter any issues or have suggestions for improvement, please open an [issue](https://github.com/cletqui/mail/issues).

## Project Status 🚧

This project is actively maintained and open to contributions.
