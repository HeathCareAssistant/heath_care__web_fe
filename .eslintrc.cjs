/* eslint-disable no-undef */
const globals = require('globals');
const js = require('eslint-plugin-js');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');
const eslintPluginPrettier = require('eslint-plugin-prettier');
const imports = require('eslint-plugin-import');

module.exports = [
    { ignores: ['dist', 'build', 'node_modules'] },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
            },
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: {
                    jsx: true,
                    impliedStrict: true,
                },
                sourceType: 'module',
            },
        },
        settings: {
            react: {
                version: 'detect',
                componentWrapperFunctions: ['styled'],
            },
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                    moduleDirectory: ['node_modules', 'src/'],
                },
                alias: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                    map: [['@', './src']],
                    // Add more aliases here
                },
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier: eslintPluginPrettier,
            import: imports,
        },
        rules: {
            // Base configurations
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            ...eslintPluginPrettier.configs.recommended.rules,

            // React specific rules
            'react/jsx-no-target-blank': [
                'warn',
                { enforceDynamicLinks: 'always' },
            ],
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-filename-extension': [
                1,
                { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
            ],
            'react/function-component-definition': [
                2,
                {
                    namedComponents: ['arrow-function', 'function-declaration'],
                    unnamedComponents: ['arrow-function'],
                },
            ],
            'react/jsx-props-no-spreading': 'off',
            'react/no-unknown-property': ['error', { ignore: ['css'] }],

            // React Hooks rules
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // React Refresh rules
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],

            // Import rules
            'import/prefer-default-export': 'off',
            'import/no-extraneous-dependencies': 'off',
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc' },
                },
            ],

            // Prettier configuration
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto',
                    singleQuote: true,
                    semi: true,
                    tabWidth: 2,
                    trailingComma: 'es5',
                },
            ],

            // General rules
            'no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-param-reassign': ['error', { props: false }],

            // Accessibility rules (if you really need to disable them)
            'jsx-a11y/no-static-element-interactions': 'warn',
            'jsx-a11y/click-events-have-key-events': 'warn',
        },
    },
]
