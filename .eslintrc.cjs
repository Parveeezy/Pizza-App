module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
		node: true,     // Чтобы иметь возможность проверять NodeJS-код
		jest: true,     // Если используешь Jest для тестирования
	},
	extends: [
		'eslint:recommended',                 // Используем базовые правила ESLint
		'plugin:@typescript-eslint/recommended',  // Рекомендуемые правила для TypeScript
		'plugin:react/recommended',           // Рекомендуемые правила для React
		'plugin:react/jsx-runtime',          // Правила для JSX runtime (если используешь `<React.Fragment>` или `{...}`)
		'plugin:import/errors',               // Для проверки импортов
		'plugin:import/warnings',            // Предупреждения при импорте
		'plugin:import/typescript',           // Специальная поддержка импорта для TypeScript
		'plugin:redux-saga/recommended',      // Поддержка правил для Redux-Saga (если планируешь её использовать)
		'prettier',                           // Отключаем конфликты между правилами ESLint и Prettier
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'], // Игнорируем сборочные каталоги и сам config-файл
	parser: '@typescript-eslint/parser',       // Типизированный парсер для TypeScript
	plugins: [
		'@typescript-eslint',                   // Плагин для поддержки TypeScript
		'react',                                // Базовые плагины для React
		'react-refresh',                        // Для hot-reloading компонентов
		'import',                               // Подсказки для импорта модулей
		'redux-saga',                           // Для проверок связанных с redux-saga
		'prettier',                             // Для отключения конфликтов с Prettier
	],
	settings: {
		react: {
			version: 'detect',                    // Автоматически определяем версию React
		},
		'import/resolver': {
			typescript: {},                       // Разрешаем модульные пути для TypeScript
		},
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],              // Применяем специфические правила только для TypeScript-файлов
			rules: {
				'@typescript-eslint/no-explicit-any': 'off',  // Пока отключим предупреждение об использовании any (можно включить позже)
				'@typescript-eslint/ban-ts-comment': 'warn',  // Строгость против комментариев типа `//@ts-ignore`
				'@typescript-eslint/no-empty-function': 'off', // Отключаем правило пустых функций временно
				'@typescript-eslint/no-non-null-assertion': 'off', // Операторы принудительного исключения null допустимы пока
				'@typescript-eslint/camelcase': 'off',         // Правилу именования camelCase не будем следовать строго
				'@typescript-eslint/explicit-module-boundary-types': 'off', // Отключено временное требование типов границ модуля
				'@typescript-eslint/no-use-before-define': 'off', // Отключаем строгий порядок объявления переменных
				'@typescript-eslint/no-var-requires': 'off',    // Можно временно разрешить require()
				'@typescript-eslint/no-inferrable-types': 'off', // Ограничение типов, выводимых компилятором, временно отключаем
				'@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // Интерфейсы предпочтительнее
				'@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none', requireLast: false }, singleline: { delimiter: 'semi', requireLast: false } }],
				'react/react-in-jsx-scope': 'off',                // React объявлен глобально
				'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }], // Компоненты в файлах *.tsx
				'react/jsx-props-no-spreading': 'off',           // Позволяет распространять props
				'react/jsx-key': 'error',                         // Требует key-пропсов для элементов массива
				'react-hooks/exhaustive-deps': 'warn',           // Полезно следить за зависимостями useEffect
				'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // Запрещаем console.log в продакшене
				'no-unused-vars': 'off',                          // Это контролируется типом TypeScript
				'@typescript-eslint/no-unused-vars': ['error'],   // Включаем TypeScript-проверку неиспользуемых переменных
				semi: ['error', 'always'],                        // Точка с запятой обязательна везде
				'comma-dangle': ['error', 'never'],              // Без висячих запятых
				quotes: ['error', 'single'],                      // Одинарные кавычки
				indent: ['error', 'tab'],                         // Табуляция для отступов
			},
		},
	],
};