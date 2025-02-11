var rule = {
  类型: "小说", //影视|听书|漫画|小说
  title: "58小说",
  host: "https://www.xwbxsw1.com",
  url: "/fyclass/",
  searchUrl: "/search.php?keyword=**",
  searchable: 2,
  quickSearch: 0,
  filterable: 1,
  filter: "",
  filter_url: "",
  filter_def: {},
  headers: {
    "User-Agent": "MOBILE_UA",
  },
  timeout: 5000,
  class_name:
    "玄幻小说&修真小说&都市小说&历史小说&科幻小说&网游小说&女生小说&完结小说",
  class_url:
    "xiaoshuosort1&xiaoshuosort2&xiaoshuosort3&xiaoshuosort4&xiaoshuosort5&xiaoshuosort6&xiaoshuosort7&wanbenxiaoshuo",
  cate_exclude: "",
  play_parse: true,
  lazy: $js.toString(() => {
    let html = request(input)
    let title = pdfh(html, "h1&&Text")
    let content = pdfh(html, "#content&&Html")
    let ret = JSON.stringify({
      title,
      content,
    })
    input = { parse: 0, url: "novel://" + ret, js: "" }
  }),
  double: false,
  推荐: "#newscontent&&ul&&li;.s2&&a&&Text;;.s4&&Text;a&&href",
  一级: "#newscontent&&ul&&li;.s2&&a&&Text;;.s5&&Text;a&&href",
  二级: {
    title: "h1&&Text",
    img: "img&&src",
    desc: "#info&&p:eq(3)&&Text;#info&&p:eq(2)&&Text;;;#info&&p&&Text",
    content: "#intro&&Text",
    tabs: "#list&&dl&&dt",
    lists: "#list&&dd",
    tab_text: "body&&Text",
    list_text: "body&&Text",
    list_url: "a&&href",
    list_url_prefix: "",
  },
  搜索: ".result-list&&.result-item;h3&&a&&Text;img&&src;.result-game-item-desc&&Text;a&&href;.result-game-item-info&&p&&Text",
}
