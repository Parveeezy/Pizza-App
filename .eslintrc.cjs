const path = require('path');

module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:jsx-a11y/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		project: path.resolve(__dirname, 'tsconfig.json'),
		tsconfigRootDir: __dirname,
	},
	plugins: [
		'@typescript-eslint',
		'react',
		'react-hooks',
		'import',
		'jsx-a11y',
	],
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: path.resolve(__dirname, 'tsconfig.json'),
			},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	rules: {
		// Основные правила
		'no-console': 'warn',
		'no-unused-vars': 'off',
		'no-extra-semi': 'error',

		// Импорты
		'import/no-unresolved': 'error',
		'import/no-named-as-default': 'off',
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
				'newlines-between': 'always',
				alphabetize: { order: 'asc', caseInsensitive: true },
			},
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],

		// React
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
		'react/prop-types': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',

		// TypeScript
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/explicit-function-return-type': "off",
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/consistent-type-imports': 'warn',
	},
	overrides: [
		{
			files: ['*.config.{js,ts}', '**/__tests__/**'],
			env: {
				node: true,
			},
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
		{
			files: ['**/*.tsx'],
			rules: {
				'react/prop-types': 'off',
			},
		},
	],
	ignorePatterns: [
		'dist',
		'node_modules',
		'*.d.ts',
		'vite.config.ts',
	],
};