# 第 17 天 - vim17

掌握宏

1.录制一个宏
  开始录制: qa (a 是寄存器的名字, 也可以用别的)
  结束录制: q
  查看录制好的宏: :reg a
  使用: @a
  调用最后一次执行的宏: @@ (对于某个宏需要连续调用的话，这个命令十分有用)
  重复执行: 数字＋@＋寄存器 例如: 10@a
  安全机制: 报错就停
  追加: qA

2.修改宏 (a 指的是寄存器名称)
  取出: "ap  或者 :put a  (复制出来)
  修改: "ayy 或者 "ayw  (粘贴进去)


## 练习

1) One
2) Two
3) Three
4) Four
5) Four

0s)r.w~j

hahaha
hahaha
hahaha
hahaha
hahaha
hahaha
hahaha
hahaha
hahaha