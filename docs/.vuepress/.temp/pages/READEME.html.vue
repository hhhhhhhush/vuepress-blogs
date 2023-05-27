<template><div><h1>这是一个标题</h1>
<p>这是一个段落，其中包含了一些文本内容。</p>
<ul>
<li>这是一个无序列表项</li>
<li>这是另一个无序列表项</li>
</ul>
<p>这是一个链接，指向<a href="https://vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress官方网站<ExternalLinkIcon/></a>。</p>
<p>这是一张图片：</p>
<p><img src="https://vuepress.vuejs.org/hero.png" alt="VuePress Logo"></p>
<!-- 相对路径 -->
<p><RouterLink to="/">首页</RouterLink><br>
<RouterLink to="/reference/config.html">配置参考</RouterLink><br>
<RouterLink to="/getting-started.html">快速上手</RouterLink></p>
<!-- 绝对路径 -->
<p><RouterLink to="/zh/guide/">指南</RouterLink><br>
<RouterLink to="/zh/reference/config.html#links">配置参考 &gt; markdown.links</RouterLink></p>
<!-- URL -->
<p><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a></p>
<p>vuepress可以使用表情图标
<a href="https://github.com/ikatyang/emoji-cheat-sheet" target="_blank" rel="noopener noreferrer">可以访问查看文档<ExternalLinkIcon/></a></p>
<p>VuePress 2 已经发布 🎉 ！</p>
<nav class="table-of-contents"><ul><li><router-link to="#二级">二级</router-link><ul><li><router-link to="#三级">三级</router-link></li></ul></li><li><router-link to="#支持代码块-内的数字代表代码高亮的部分-后面第一个是代码类型">支持代码块 {}内的数字代表代码高亮的部分 ```后面第一个是代码类型</router-link></li></ul></nav>
<h2>二级</h2>
<h3>三级</h3>
<h2>支持代码块 {}内的数字代表代码高亮的部分 ```后面第一个是代码类型</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'你好， VuePress'</span><span class="token punctuation">,</span>

  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'你好， VuePress'</span><span class="token punctuation">,</span>

  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token comment">&lt;!-- 默认情况下，这里会被保持原样 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 这里会被 Vue 编译 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 由于 JS 代码高亮，这里不会被正确编译</span>
<span class="token keyword">const</span> onePlusTwoPlusThree <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>--- 导入代码块</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  rootComponents<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>--- 仅导入指定行号 1-5</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>--- 代码语言会根据文件扩展名进行推断，但我们建议你显式指定：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  rootComponents<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>---高亮行号</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  rootComponents<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>---导入文件的第 3 行至第 20 行</p>
<p>---指定语言为 'js'</p>
<p>---对导入代码的第 3 行进行高亮，即文件的第 5 行</p>
<p>---禁用行号</p>
<div class="language-javascript" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newParams<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">noop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> isArray <span class="token operator">=</span> Array<span class="token punctuation">.</span>isArray<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">warn</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> args <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>console<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"[Vue Router warn]: "</span> <span class="token operator">+</span> msg<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token constant">TRAILING_SLASH_RE</span> <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\/$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeTrailingSlash</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=></span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token constant">TRAILING_SLASH_RE</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">parseURL</span><span class="token punctuation">(</span>parseQuery2<span class="token punctuation">,</span> location2<span class="token punctuation">,</span> currentLocation <span class="token operator">=</span> <span class="token string">"/"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> path<span class="token punctuation">,</span> query <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> searchString <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">,</span> hash <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> hashPos <span class="token operator">=</span> location2<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">"#"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> searchPos <span class="token operator">=</span> location2<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">"?"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>hashPos <span class="token operator">&lt;</span> searchPos <span class="token operator">&amp;&amp;</span> hashPos <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    searchPos <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>searchPos <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    path <span class="token operator">=</span> location2<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> searchPos<span class="token punctuation">)</span><span class="token punctuation">;</span>
    searchString <span class="token operator">=</span> location2<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>searchPos <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> hashPos <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> hashPos <span class="token operator">:</span> location2<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    query <span class="token operator">=</span> <span class="token function">parseQuery2</span><span class="token punctuation">(</span>searchString<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>hashPos <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    path <span class="token operator">=</span> path <span class="token operator">||</span> location2<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> hashPos<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div><p>---Markdown 中允许直接使用 Vue 模板语法。</p>
<p>一加一等于： {{ 1 + 1 }}</p>
<p><span v-for="i in 3"> span: {{ i }} </span></p>
<p>---内置组件</p>
<CodeGroup>
  <CodeGroupItem title="PNPM">
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="YARN">
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">install</span>
</code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="NPM" active>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li>VuePress - <Badge type="tip" text="v2" vertical="top" /></li>
<li>VuePress - <Badge type="warning" text="v2" vertical="middle" /></li>
<li>VuePress - <Badge type="danger" text="v2" vertical="bottom" /></li>
</ul>
<p>这是默认主题内置的 <code v-pre>&lt;Badge /&gt;</code> 组件 <Badge text="演示" /></p>
<p>---![xxx]     相当于alt=&quot;xxxx&quot;</p>
<p><img src="/images/1.jpg" alt="图片"></p>
</div></template>


