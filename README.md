# Sentry

####  FIRST OF ALL, WHAT IS SENTRY.IO?
Sentry.IO makes it extremely easy and effective to track errors. It provides a range of features that make it easy to identify and fix errors in our application.

1. Monitor our application in real-time
2. Identify errors and crashes as they happen
3. Get detailed error reports with stack traces and context information
4. Discover insights into your application’s performance and usage
5. Collaborate with our team to fix errors quickly

-  The error tracking (@sentry/react) and performance monitoring (@sentry/tracing) to 
- sentry is couldbased application
- When a project is running in production, it is used for error tracking and performance monitoring.
- The most ideal website loading time is 2 seconds. If our website's loading time is 3 seconds or more, customers may leave the application. we use the Sentry        application for monitoring.
- Many companies, including GitHub, Disney, VMware, Slack, Microsoft, Monday.com, and Cloudflare, use Sentry



























This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
