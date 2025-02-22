import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    plugins: {
      prettier, // Підключення плагіна Prettier
    },
    rules: {
      "prettier/prettier": "warn", // Всі помилки форматування згідно з Prettier будуть виводитись як помилки
      "no-console": "warn", // Попередження при використанні console.log, console.error та інших методів консолі
      "no-unused-vars": "warn", // Попередження при наявності не використаних змінних
      "react/prop-types": "off", // Вимикаємо правило для перевірки типів пропсів (якщо не використовуєте PropTypes)
      "react/react-in-jsx-scope": "off", // Вимикаємо правило для використання React в JSX, якщо не використовуєте стару версію React (до версії 17)
      eqeqeq: "warn", // Попередження при використанні нестрогих порівнянь (наприклад, == замість `===`)
      "no-trailing-spaces": "warn", // Помилка при наявності пробілів в кінці рядка
      indent: ["warn", 2], // Помилка при некоректних відступах, 2 пробіли
      semi: ["warn", "always"], // Вимога ставити крапку з комою в кінці рядків
      quotes: ["warn", "single"], // Вимога використовувати одинарні лапки
    },
  },
  pluginJs.configs.recommended,
];