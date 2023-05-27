export const data = JSON.parse("{\"key\":\"v-bbb893f0\",\"path\":\"/Frontmatter.html\",\"title\":\"页面的标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"页面的标题\",\"description\":\"页面的描述\"},\"headers\":[{\"level\":2,\"title\":\"frontmatter\",\"slug\":\"frontmatter\",\"link\":\"#frontmatter\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"Frontmatter.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
