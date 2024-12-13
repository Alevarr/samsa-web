# 1. Table of content

- [1. Table of content](#1-table-of-content)
- [2. UltraSwap Web Project in Next.js](#2-ultraswap-web-project-in-nextjs)
  - [2.1. Project Overview](#21-project-overview)
  - [2.2. What is Next.js?](#22-what-is-nextjs)
  - [2.3. App Directory Structure](#23-app-directory-structure)
  - [2.4. Commit with Conventional Commit](#24-commit-with-conventional-commit)
  - [2.5. Next UI: The Aesthetics of the Future](#25-next-ui-the-aesthetics-of-the-future)
  - [2.6. Form Validation with React Hook Form and Zod](#26-form-validation-with-react-hook-form-and-zod)
  - [2.7. Getting Started](#27-getting-started)
  - [2.8. Run Locally](#28-run-locally)
    - [2.8.1. Run in production mode](#281-run-in-production-mode)

# 2. UltraSwap Web Project in Next.js

In this README, we'll introduce you to the project's key components and technologies that make it stand out.

## 2.1. Project Overview

- **Framework**: Next.js 13
- **App Directory**: Utilizing the new app directory structure
- **Commit Style**: Conventional Commit
- **UI Library**: Leveraging the elegant Next UI
- **Form Validation**: Employing React Hook Form and Zod

... More to be added when we go further

## 2.2. What is Next.js?

Next.js is not just a framework; it's a paradigm shift in web development. It offers a delightful developer experience with features like server-side rendering, static site generation, and more. With version 13, Next.js has pushed the boundaries even further, making it a formidable choice for modern web applications.

## 2.3. App Directory Structure

The Next.js project is organized using the app directory structure.

## 2.4. Commit with Conventional Commit

Every great project needs a strong foundation, and in our case, it begins with our commitment to high-quality code. We follow the Conventional Commit style to ensure our codebase is well-structured, making it easier to understand and maintain.

## 2.5. Next UI: The Aesthetics of the Future

Next UI is the visual embodiment of modern design principles. It brings a harmonious blend of aesthetics and functionality to our project, ensuring that our user interface is not just beautiful but highly user-friendly.

## 2.6. Form Validation with React Hook Form and Zod

Forms are the gateways to user interaction, and we've entrusted React Hook Form and Zod to handle the validation. With these powerful tools, we ensure that our forms are not just functional but also secure and responsive.

## 2.7. Getting Started

[Install pnpm globally on your machine](https://pnpm.io/installation)

## 2.8. Run Locally

Install husky (pre commit hook)

```bash
  pnpm prepare
```

Install dependencies (pnpm only)

```bash
  pnpm install
```

Rename .env.template to .env.local and ask for the private variables

Start the server (dev mode)

```bash
  pnpm dev
```

[Launch UltraSwap](http://localhost:3000)

### 2.8.1. Run in production mode

Build the project

```bash
  pnpm build
```

Start the server (prod mode)

```bash
  pnpm start
```

[Launch UltraSwap](http://localhost:3000)
