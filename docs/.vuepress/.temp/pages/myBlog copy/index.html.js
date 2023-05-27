export const data = JSON.parse("{\"key\":\"v-2f9e64be\",\"path\":\"/myBlog%20copy/\",\"title\":\"主体\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"myBlog copy/index.md\"}")

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
