module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'airbnb', 'plugin:react-hooks/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'consistent-return': 0,
		camelcase: 0,
		'no-param-reassign': 0,
		'linebreak-style': ['error', 'unix'],
		semi: ['error', 'always'],
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'import/no-extraneous-dependencies': 0,
		'import/no-unresolved': 0,
		'react/jsx-indent': 0,
		'max-len': ['error', 140],
		'object-curly-newline': 0,
	},
};
