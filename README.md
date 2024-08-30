# chrome-extensions-template

一个基于`react`、`vite`、`typeScript`的`chrome`插件开发模板仓库，企业级配置，开箱即用。

## 特征

- 🔥支持热更新`HMR`
- 🔧自动构建配置的`manifest.json`
- ⚡超快的开发模式
- 🌐完整的`chrome`插件配置
- [`eslint`](https://eslint.org/)、[`stylelint`](https://stylelint.io/)、[`prettier`](https://prettier.io/) 对代码风格进行约束
- [`husky`](https://typicode.github.io/husky/) 提交代码前校验
- 集成[`unocss`](https://unocss.dev/)

## 仓库目录

```tsx
├─ .husky                       /** 代码提交校验 */
├─ .vscode                      /** vscode 配置，定义自动保存规则 */
├─ public                       /** 静态资源文件夹 */
├─ src                          /** 主要开发目录 */
│  ├─ assets
│  │  └─ styles
│  │     └─ uno.css             /** unocss cli 自动生成的css文件 勿动  */
│  └─ pages
│     ├─ background
│     ├─ content
│     ├─ devtools
│     ├─ newtab
│     ├─ options
│     ├─ panel
│     └─ popup
├─ .editorconfig
├─ .gitignore
├─ .lintstagedrc                /** 代码提交前校验 eslint prettier stylelint */
├─ .prettierignore
├─ .prettierrc                  /** prettier setting */
├─ commitlint.config.ts         /** commitlint setting */
├─ eslint.config.js             /** eslint setting */
├─ manifest.json                /** chrome manifest.json */
├─ nodemon.json                 /** nodemon setting */
├─ stylelint.config.js          /** stylelint setting */
├─ unocss.config.ts             /** unocss setting */
└─ vite.config.ts
```

## ⚠️注意事项

1. 如果要使用`unocss` 需在每个模块的入口文件添加`@/assets/styles/uno.css`;

   例如：`content/index.tsx` 、`popup/index.tsx`

2. `@crxjs/vite-plugin` 不支持`vite@5` 所以使用`@crxjs/vite-plugin@2.0.0-beta.25`
