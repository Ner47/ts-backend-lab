# TS Backend Lab

Цель: учебный TS-проект для отработки бэкенд-скиллов.

- Модульная система: ESM (`"type": "module"`) [[1]]
- Язык: TypeScript
- Точка входа в dev-режиме: `src/index.ts` (через `tsx`) [[1]]
- Форматирование: Prettier (+ EditorConfig)
- Линтинг: ESLint (typescript-eslint)
- Проверка типов: TypeScript
- Git hooks: Husky + lint-staged (pre-commit), Commitlint (commit-msg) [[1]]
- Лицензия: MIT [[1]]

## Быстрый старт

````bash
git clone https://github.com/Ner47/ts-backend-lab.git
cd ts-backend-lab
npm install
npm run dev
Скрипт dev запускает src/index.ts через tsx без предварительной компиляции [[1]].
Скрипты
npm run dev — запуск приложения в режиме разработки (Node + tsx) [[1]]
npm run lint — проверка ESLint [[1]]
npm run lint:fix — ESLint с автоисправлениями [[1]]
npm run format — автоформатирование Prettier [[1]]
npm run format:check — проверка форматирования (без записи) [[1]]
npm run typecheck — проверка типов TypeScript (без эмита) [[1]]
npm run check — полный набор проверок: lint → format:check → typecheck [[1]]
Проверки локально
Все разом:
bash


npm run check
По отдельности:
bash


npm run lint
npm run format:check   # или npm run format для исправления
npm run typecheck
Стиль кода и форматирование
В проекте используется Prettier (в devDependencies) [[1]]. EditorConfig рекомендуется для базовых настроек редактора.
Пример .editorconfig:
ini


root = true
[*] end_of_line = lf insert_final_newline = true charset = utf-8 indent_style = space indent_size = 2
text


- Пример `.prettierignore`:
node_modules dist coverage
text



Убедитесь, что в IDE включено автоисправление/форматирование по сохранению для Prettier/ESLint.

## Git hooks: Husky, lint-staged, Commitlint

Husky устанавливается автоматически через `prepare`-скрипт (`"prepare": "husky"`) [[1]].

- Pre-commit (линт и форматирование изменённых файлов через lint-staged):
```bash
npx husky set .husky/pre-commit "npx lint-staged"
Commit-msg (проверка Conventional Commits через Commitlint):
bash


npx husky set .husky/commit-msg 'npx --no -- commitlint --edit "\$1"'
Текущая конфигурация lint-staged (из package.json) [[1]]:
json


{
  "lint-staged": {
    "**/*.{ts,js}": [
      "eslint --fix",
      "prettier --write"
    ],
    "**/*.{md,json,yml,yaml}": [
      "prettier --write"
    ]
  }
}
Рекомендуется придерживаться Conventional Commits при именовании коммитов.
Контрибьюция
Форкните репозиторий и создайте ветку от main:
feature/..., fix/..., docs/... и т.п.
Установка:
bash


npm install
Перед PR:
Обновите/добавьте тесты при изменении поведения (когда тесты появятся)
Запустите проверки:
bash


npm run check
# при необходимости отформатируйте:
npm run format
Убедитесь, что линтер и типы проходят без ошибок
Оформление PR:
Кратко опишите изменения и мотивацию
Укажите, какие проверки запускались
При визуальных/поведенческих изменениях приложите скриншоты/описание
Коммиты:
Используйте понятные сообщения (желательно Conventional Commits)
Опционально подключите Commitlint hook (см. раздел про Git hooks)
Структура проекта (минимум)
text


.
├── src/
│   └── index.ts        # точка входа приложения
├── package.json
├── tsconfig.json
├── .editorconfig
├── .prettierignore
└── ...
Changelog (опционально)
В проект добавлен conventional-changelog-cli в devDependencies — при желании можно генерировать CHANGELOG (под Conventional Commits) [[1]]:
bash


npx conventional-changelog -p conventionalcommits -i CHANGELOG.md -s
Лицензия
MIT — см. файл LICENSE [[1]].
````
