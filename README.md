# About Work

- Самойленко Александр;
- Тестовое задание для Frontend-разработчика;
- Описание проекта:
  - Проект выполнен в соответствии с техническим заданием:
    - сверстан по макету, добавлен адаптив до 360px включительно
    - выполнен на стеке React + TypeScript
    - добавлена база данных работающая на json server
    - объекты, не имеющие обязательных свойств, не попадают на страницу и выводятся в консоль
    - реализованы:
      - фильтрация по тегам, получаемым с сервера
      - сортировка по цене, автору и дате (в возрастающем и убывающем порядке)
      - сброс опций фильтра
  - В работе использовались библиотеки:
    - json-server для работы с сервером
    - axios для выполнения HTTP запросов
    - tailwind для работы со стилями
    - clsx для управления классами

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
