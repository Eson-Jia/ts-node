# ts-node

a demo show how to use ts in node.js env
[TypeScript](https://github.com/microsoft/TypeScript) is a superset of JavaScript that compiles to clean JavaScript output.

## ts in 5 min

[TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
[chinese tutorials](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html)

## gulp 自动化处理流

[gulp github](https://github.com/gulpjs/gulp)
[Gulp tutorials](https://www.typescriptlang.org/docs/handbook/gulp.html)
[chinese tutorials](https://www.tslang.cn/docs/handbook/gulp.html)

## 使用.d.ts文件

既然要开发一个项目，显然不会只有这些代码。肯定要用到内建模块和第三方模块。然而，直接导入模块，在.ts文件中是不行的。例如：

```ts
import { readFile } from 'fs';//报错 [ts] Cannot find module 'fs'.
```

这是由于`typescript`自身的机制，需要一份`xx.d.ts`声明文件，来说明模块对外公开的方法和属性的类型以及内容。感觉有一些麻烦。在`TypeScript 2.0`以上的版本，获取类型声明文件只需要使用`npm`。在项目目录下执行安装:

```shell
npm install --save @types/node
```
