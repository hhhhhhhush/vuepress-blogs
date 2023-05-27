---
lang: en
---

 # 这是一个标题

这是一个段落，其中包含了一些文本内容。

- 这是一个无序列表项
- 这是另一个无序列表项

这是一个链接，指向[VuePress官方网站](https://vuepress.vuejs.org/)。

这是一张图片：

![VuePress Logo](https://vuepress.vuejs.org/hero.png)

<!-- 相对路径 -->
[首页](../README.md)  
[配置参考](../reference/config.md)  
[快速上手](./getting-started.md)  
<!-- 绝对路径 -->
[指南](/zh/guide/README.md)  
[配置参考 > markdown.links](/zh/reference/config.md#links)  
<!-- URL -->
[GitHub](https://github.com) 

vuepress可以使用表情图标
[可以访问查看文档](https://github.com/ikatyang/emoji-cheat-sheet)

VuePress 2 已经发布 :tada: ！

[[toc]]
## 二级
### 三级

## 支持代码块 {}内的数字代表代码高亮的部分 ```后面第一个是代码类型
```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

```ts:no-line-numbers
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

--- 导入代码块
@[code](./.vuepress/client.ts)

--- 仅导入指定行号 1-5
@[code{1-5}](./.vuepress/client.ts)

--- 代码语言会根据文件扩展名进行推断，但我们建议你显式指定：
@[code ts](./.vuepress/client.ts)

---高亮行号
@[code ts{2,4-6}](./.vuepress/client.ts)


---导入文件的第 3 行至第 20 行

---指定语言为 'js'

---对导入代码的第 3 行进行高亮，即文件的第 5 行

---禁用行号
@[code{35-60} js{3}:no-line-numbers](./.vuepress/.cache/deps/vue-router.js)

---Markdown 中允许直接使用 Vue 模板语法。

一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>


---内置组件
<CodeGroup>
  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm install
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn install
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>

- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />


这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />

---![xxx] &nbsp;&nbsp;&nbsp; 相当于alt="xxxx" 

![图片](/images/1.jpg)