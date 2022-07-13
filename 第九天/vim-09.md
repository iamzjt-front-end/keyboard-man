# 第九天 - vim09

更高效的移动

vim-easymotion:
  注：<leader> 代表的是反斜杠，由于比较难按，所以改键成了空格键。

  基于行：
    <leader> <leader> + w: 向下跳转至单词的开头
    <leader> <leader> + b: 向上跳转至单词的开头

    <leader> <leader> + e: 向下跳转至单词的结尾
    <leader> <leader> + ge: 向上跳转至单词的结尾

  基于行:
    <leader> <leader> + j: 向下跳转至行的开头
    <leader> <leader> + k: 向上行的开头跳转至行的开头

    <leader> <leader> + l: 向上的开头跳转至行的开头
    <leader> <leader> + h: 向上行的开头跳转至行的开头

    <leader> <leader> <leader> + j: 向上行的开头跳转至行的开头

vim-sneak:
  s: 两个字符 往下匹配（按;继续往后找）
  S: 两个字符 往上匹配（按;继续往上找）