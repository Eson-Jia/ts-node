# ts-node

a demo show how to use ts in node.js env
[TypeScript](https://github.com/microsoft/TypeScript) is a superset of JavaScript that compiles to clean JavaScript output.
目前 TypeScript 在 node 开发的方式为使用 ts 写代码然后编译成 js运行。

## ts and js

1. 源于 js 终于 js
2. Strong tools for large appsL:类型使得开发者在开发应用的时候使用高生效生产工具和实践如静态检查，代码重构，代码提示等。
3. 既可以在开发时使用新特性支持，又可以编译成更低版本的简单js。

## ts in 5 min

[TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
[chinese tutorials](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html)

## gulp 自动化处理流

[gulp github](https://github.com/gulpjs/gulp)
[Gulp tutorials](https://www.typescriptlang.org/docs/handbook/gulp.html)
[chinese tutorials](https://www.tslang.cn/docs/handbook/gulp.html)

## 调试利器 sourcemap

sourcemap的作用，ts 工程编译成 js 才能运行和调试，在调试的时候直接调试编译后的 js 文件会有诸多不便。sourcemap 可以记录 js 代码位置与 ts 代码位置一一对应关系。当编译后的 js debug运行出现错误或者断点调试的时候，显示的 ts 代码的位置，这将大大方便开发者。

sourcemap可以在对应 js 文件中[如](./doc/index-inline.js)
当与 js 存在同一个文件中是 sourcemap 会 base64 编码成字符串
也可以分别存储在两个文件中：[js文件](./doc/index.js),[map文件](./doc/index.js.map)

### mapSources 函数

sourcemaps 的 [mapSources](https://github.com/gulp-sourcemaps/gulp-sourcemaps#alter-sources-property-on-sourcemaps) 函数 控制 生成的 sourcemap 中的 sources 字段的内容。

### sourceMappingURL

修改 sourceMappingURL的回调

### sourceMappingURLPrefix

给 sourceMappingURL 加前缀

分别设置 sourceMappingURL 和 sourceMappingURLPrefix 路径

[gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps)
[ruanyifeng source map](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)

## 使用.d.ts文件

既然要开发一个项目，显然不会只有这些代码。肯定要用到内建模块和第三方模块。然而，直接导入模块，在.ts文件中是不行的。例如：

```ts
import { readFile } from 'fs';//报错 [ts] Cannot find module 'fs'.
```

这是由于`typescript`自身的机制，需要一份`xx.d.ts`声明文件，来说明模块对外公开的方法和属性的类型以及内容。感觉有一些麻烦。在`TypeScript 2.0`以上的版本，获取类型声明文件只需要使用`npm`。在项目目录下执行安装:

```shell
npm install --save @types/node
```
