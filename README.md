# GraphLabsWeb

GraphLabsWeb - это веб-приложение, которое позволяет решать задачи на графах. Это приложение было создано с помощью следующих технологий:

- [React](https://ru.reactjs.org/) - библиотека для создания пользовательских интерфейсов.
- [TypeScript](https://www.typescriptlang.org/) - статически типизированный язык программирования, который компилируется в JavaScript.
- [Vite](https://vitejs.dev/) - инструмент для сборки и запуска приложений.
- [Tailwind CSS](https://tailwindcss.com/) - фреймворк для создания CSS-стилей.
- [Cytoscape](https://js.cytoscape.org/) - библиотека для создания интерактивных графических представлений.
- [Next UI](https://nextui.org/) - библиотека для создания адаптивных и интерактивных компонентов.

## Структура проекта

Структура проекта была создана на основе статьи [Folder Structures in React Projects](https://dev.to/itswillt/folder-structures-in-react-projects-3dp8). Она состоит из следующих частей:

- `src` - папка с исходным кодом приложения.
  - `components` - папка с компонентами общими для всего приложения.
  - `constant` - папка с константами приложения.
  - `features` - папка с компонентами реализации изолированного функционала (например /feaures/auth/... содержит все что касается авторизации).
  - `pages` - папка со страницами приложения.
  - `App.tsx` - корневой компонент приложения.
  - `main.tsx` - точка входа в приложение.
  - `routes.tsx` - конфигурация маршрутизации с использованием react-router-dom [react-router-dom usage](https://medium.com/@ahsan-ali-mansoor/define-react-routes-with-better-approach-typescript-d07de782b517)
- `public` - папка с статическими файлами. [Public folder](https://create-react-app.dev/docs/using-the-public-folder/#when-to-use-the-public-folder)
- `vite.config.ts` - файл конфигурации Vite.
- `tailwind.config.ts` - файл конфигурации Tailwind CSS.
- `tsconfig.json` - файл конфигурации TypeScript.

## Как запустить проект

1. Установите Node.js, если он еще не установлен. [Node installation](https://nodejs.org/en/download/package-manager)
2. Установите зависимости, выполнив команду `npm install` в корневой папке проекта.
3. Запустите проект, выполнив команду `npm run dev` в корневой папке проекта.
4. Откройте веб-браузер и перейдите по адресу `http://localhost:5173/`.

## Особенности

1. Если страница "Бинарные операции" крашится тыкать на лого и страницу пока не откроется нормально, чето там модуль шалит.
