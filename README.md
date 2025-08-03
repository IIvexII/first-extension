# Counter Extension

A lightweight browser extension that adds a simple counter to your browser. Click the button to increment the counter. Clean, modern, and built with web technologies.

## Features

- Simple counter with increment functionality
- Clean, modern UI built with TailwindCSS
- Built with React and TypeScript for type safety
- Easy to customize and extend

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm, pnpm, or yarn package manager
- Modern web browser (Chrome, Firefox, Edge, etc.)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/my-first-extension.git
   cd my-first-extension
   ```

2. Install dependencies

   ```bash
   pnpm install
   # or
   npm install
   ```

### Development

1. Start the development server:

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

2. Load the extension in your browser:
   - Open your browser and navigate to `chrome://extensions/` (or equivalent for your browser)
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `build/chrome-mv3-dev` directory

## 🛠️ Building for Production

To create a production build:

```bash
pnpm build
# or
npm run build
```

The production build will be available in the `build` directory, ready to be published to browser extension stores.

## 📦 Technologies Used

- [Plasmo](https://docs.plasmo.com/) - Browser extension framework
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
