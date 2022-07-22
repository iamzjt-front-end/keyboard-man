# 第十三天 - vim13

替换字符串

:[rang]s[ubstitute]/{pattern}/{string}/[flags]

flags: g-全文匹配 c-弹对话框交互式选择替换 可以结合使用: gc

1. 当前行替换 -> :s/需要替换的字符串/替换后的字符串

2. 当前文件替换 -> :%s/需要替换的字符串/替换后的字符串

3. 指定行数替换 -> :15,17s/需要替换的字符串/替换后的字符串

4. $ 指定行到尾部 -> :15,$s/需要替换的字符串/替换后的字符串

5. 支持正则 -> :%s/v\dnode/xixi 或 :%s/v[12]node/xixi

gb: 多选 区分大小写

## 练习

vnode

Vnode

vnode vnode haha

v1node

v2node
