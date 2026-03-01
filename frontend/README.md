# Portfolio React (Setup Guide)

This README is the **setup and development guide** for the React portfolio application. It explains how to install dependencies, run the dev server, and build for production. The project itself showcases projects, skills, and other personal information using React and Vite.

## Features

- **React** front-end framework with hooks and functional components.
- **Vite** build tool for fast development and HMR (Hot Module Replacement).
- Component structure for header, hero, about, skills, projects, contact, and footer.
- Responsive design with CSS modules for each component.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing.

### Prerequisites

- Node.js (v16 or above recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/biswajitmanna/portfolio-website.git
   cd portfolio-react
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Start the development server with hot-reloading:
```bash
npm run dev
# or
yarn dev
```
Browse to [http://localhost:5173](http://localhost:5173) to view the app.

### Building for Production

Create an optimized production build:
```bash
npm run build
# or
yarn build
```
The output will be in the `dist` directory.

### Previewing the Production Build

To test the production build locally:
```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
portfolio-react/
├── public/         # static assets
├── src/
│   ├── assets/     # images and media
│   ├── components/ # reusable UI components
│   ├── pages/      # page-level components like Home
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md       # this file
```

## ESLint

The project includes a minimal ESLint setup to enforce coding standards. You can expand it with TypeScript-aware rules if you switch to TypeScript.

## Deployment

You can deploy the `dist` folder to platforms like Netlify, Vercel, GitHub Pages, or any static-hosting provider.

## Contributing

Feel free to open issues or pull requests if you'd like to add features or fix issues. This is a personal project, so contributions are welcome but not required.

## License

This project is open source and available under the [MIT License](LICENSE).

---