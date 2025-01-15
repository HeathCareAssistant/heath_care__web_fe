## Table of Contents
1. [To start project](#to-start-project)
2. [Folder Structure](#folder-structure)
3. [Teck stack](#teck-stack)
4. [Resource Development](#resource-development)
5. [Git Commit Convention](#git-commit-convention)
6. [Branch Naming Convention](#branch-naming-convention)


### NodeJS version: 18.17.0
### To start project
#### 1. Install package: 
>npm i
#### 2. Run project: 
>npm start
## Folder Structure 
```
├── public                        # Static resource
|   ├── img                       # Images
|   ├── data                      # Static data
|   └── ...                       # Other static files
├── src
│   ├── @types                    # type files that share across the temeplate
│   │   ├── ...                   
│   ├── assets                    # App static resource
│   │   ├── maps                  # Map meta data 
│   │   ├── markdown              # Markdown files
│   │   ├── styles                # Global CSS files
│   │   └── svg	                  # SVG files
│   ├── components                # General components
│   │   ├── docs                  # Documentations related components
│   │   ├── layout                # Layout components
│   │   ├── route                 # Components related to route
│   │   ├── shared                # Upper level components built on top of ui components
│   │   ├── template              # Template components, such as Header, Footer, Nav, etc...
│   │   └── ui                    # Bottom level components, such as Button, Dropdown, etc...
│   ├── configs                   # Configuration files        
│   │   └── ...          
│   ├── constants                 # Constant files
│   │   └── ...      
│   ├── locales                   # Localization configuration
│   │   ├── lang
│   │   |   └── ...               # Language JSON files
│   │   └── index.ts              # Localization entry file
│   ├── mock                      # Mock data for fake API Calls
│   │   ├── data                  # Mock data
│   │   |   └── ...               # Mock data TS files
│   │   ├── fakeApi               # Fake API configuration
│   │   |   └── ...               # Fake API TS files
│   │   └── index.ts              # Mock entry file
│   ├── services                  # Service files for managing API integrations
│   │   ├── ApiService.ts         # Api request & response handler
│   │   ├── BaseService.ts        # Axios configs & interceptors
│   │   └── ...                   # Other service files
│   ├── store                     # Main Redux store
│   │   ├── slices                # Genaral slices 
│   │   |   └── ...           
│   │   ├── hook.ts               # Store hook file    
│   │   ├── index.ts              # Store entry file
│   │   └── rootReducer.ts        # Root reducer
│   │   └── storeSetup.ts         # Overall store setup
│   ├── utils                     # All reusable function & hooks
│   │   ├── hooks                 # Hooks
│   │   |   └── ...      					
│   │   └── ...                   # Reusable functions 
│   ├── views                     # View files that render all the pages
│   |   ├── ...                   # All view files
│   |   └── index.ts              # View entry point
│   |   App.tsx                   # App setup
│   |   index.css                 # Css entry
│   |   main.tsx                  # React entry
│   |   mdDynamicImporter.tsx     # Dynamic md file import handling
│   └── vite-env.d.ts             # Vite environment declaration
├── .twSafelistGenerator          # Tailwind middleware for safe list
├── .eslintignore                 # Ignore file for eslint  
├── .eslintrc.cjs                 # eslint config
├── .gitignore                    # Ignore file for git
├── .prettierignore               # Ignore file for prettier
├── .prettierrc                   # Prettier config 
├── index.html                    # Entry file for the web
├── package.json                  
├── package.lock.json            
├── postcss.config.cjs            # PostCss configuration file
├── README.md  
├── safelist.txt                  # A generated whitelist classes for Tailwind css 
├── tailwind.config.cjs           # TailwindCSS configuration file
├── tsconfig.eslint.json          # Typescript config for eslint
├── tsconfig.json                 # Project Typescript configuration file
├── tsconfig.eslint.json          # Typescript config for node
└── vite.config.ts                # Config file for vite
```

-   Provide operational solutions for companies with the necessary functions to coordinate work for drivers and company employees.
    
-   Provide solution for each merchant can manage their branch and staff with contract
    

## Teck stack:

1.  React: A popular JavaScript library for building user interfaces.
    
2.  TypeScript: TypeScript is a strongly typed programming language that builds on JavaScript
    
3.  Vite: Vite is a modern, blazing-fast tool for scaffolding and bundling
    
4.  TailwindCSS: A utility-first CSS framework packed with classes.
    
5.  Redux Toolkit: Redux Toolkit is package that help to write Redux(State management tool) logic.

## Git Commit Convention

### Guidelines for Writing Effective Commit Messages

Below are the guidelines for writing effective commit messages:

1. **Start with a concise title** that summarizes the purpose of the commit.
2. **Begin the message title** with an imperative verb to describe the action: Add, Drop, Fix, Refactor, Optimize, etc.
3. **Keep the commit message title to a maximum of 50 characters**.
4. **Do not end with a period**.
5. **Separate the message title and the message body with a blank line**.
6. **Use the message body to provide specific information** that helps in later searches. If the task description in a task management system is already detailed, only include important information using keywords like (Importance: ..., References: ..., Supersedes: ..., Obsoletes: ..., See-Also: ..., etc.).

### Commit Message Structure

Below is the general structure of a commit message following the conventional commit style:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

#### Details
- **`type` and `description` are required** in every commit message, while `optional` parts are not mandatory.
- **Type**: A keyword used to classify the commit as a feature, bug fix, refactor, etc.
- **Scope**: Used to classify the commit further, indicating the area affected by the commit. It answers the question: What is being refactored or fixed? It is placed in parentheses immediately after the type. Example: `feat(authentication):`, `fix(parser):`
- **Description**: A short summary of the changes made in this commit.
- **Body**: A more detailed description, used when the description does not provide enough clarity. Notes can be added using keywords.
- **Footer**: Additional information such as pull request or issue ID, as per convention.

#### Examples
- `feat: add validation of A feature`
- `fix: fix crashing dashboard page`
- `feat(feature_a): add validation for A1 feature`

#### Detailed Example
```
feat(feature_authentication): add OAuth2 login support

This commit introduces OAuth2 login support, allowing users to log in using their Google accounts. This improves user convenience and security by leveraging Google's authentication.

Changes include:
- Added Google OAuth2 configuration.
- Updated login UI to include a "Login with Google" button.
- Modified backend to handle OAuth2 tokens and user sessions.
```

#### Common Types Recommended by Conventional Commit

- **feat**: Adds a new feature.
- **fix**: Fixes a bug in the system.
- **refactor**: Changes code without fixing a bug or adding a feature; may still indirectly fix bugs.
- **docs**: Adds or updates documentation.
- **chore**: Minor changes that do not affect code, often maintenance tasks.
- **style**: Changes that do not alter code meaning, such as CSS/UI updates.
- **perf**: Improves performance.
- **vendor**: Updates versions of dependencies or packages.

## Branch Naming Convention

To maintain consistency and make it easy to understand the purpose of each branch, use the following branch naming conventions:

-   **Feature Branches**: `feat/<task-or-feature-name>`
    
    -   Example: `feat/user-authentication`
        
-   **Bug Fix Branches**: `fix/<issue-or-bug-name>`
    
    -   Example: `fix/login-page-crash`
        
-   **Refactor Branches**: `refactor/<refactor-scope>`
    
    -   Example: `refactor/ui-components`
        
-   **Documentation Branches**: `docs/<documentation-update>`
    
    -   Example: `docs/api-endpoints`
        
-   **Chore Branches**: `chore/<maintenance-task>`
    
    -   Example: `chore/update-dependencies`
        

Keep branch names descriptive and concise to make collaboration easier