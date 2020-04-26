#备忘录
在.babelrc中使用   //    ["import",{"libraryName":"view-design", "libraryDirectory":"src/components"}]
可以实现ivew的按需加载
##形式如下:
// .babelrc
{
  "plugins": [["import", {
    "libraryName": "view-design",
    "libraryDirectory": "src/components"
  }]]
}
