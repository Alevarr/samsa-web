## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/your-username/graph-labs-web.git
   ```

2. Navigate to the project directory:

   ```sh
   cd graph-labs-web
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

### Running the Application

1. Start the development server:

   ```sh
   npm run dev
   ```

2. Open your web browser and go to `http://localhost:5173` to see the application in action.

### Building for Production

To build the application for production, run:

```sh
npm run build
```

This will create an optimized bundle in the `dist` folder.

### Previewing the Production Build

To preview the production build, run:

```sh
npm run preview
```

This will start a local server to serve the production build.

## Project Structure

- `src`: Contains the source code of the application.
  - `components`: Reusable components used throughout the application.
  - `constant`: Application constants.
  - `features`: Feature-specific components and logic.
  - `pages`: Application pages.
  - `App.tsx`: The root component of the application.
  - `main.tsx`: The entry point of the application.
  - `routes.tsx`: Application routing configuration.

- `public`: Contains static files.

- `vite.config.ts`: Vite configuration file.
- `tailwind.config.ts`: Tailwind CSS configuration file.
- `tsconfig.json`: TypeScript configuration file.

## License

This project is licensed under the MIT License.
