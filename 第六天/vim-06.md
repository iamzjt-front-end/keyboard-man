#第六天 - vim06

掌握文本对象

vi(: 选中括号内部的
va(: 从括号外部开始选中

di(: 删除括号内部的
va(: 从括号外部开始删除

ciw: 光标在单词内部时删除整个单词 并进入insert模式
diw: 光标在单词内部时删除整个单词

vs code: 
    vim-textobj-arguments:
        ia: 不包含分隔符
        aa: 包含分隔符
    技巧:
        删除一个参数: daa
        修改一个参数：cia

    vim-textobj-entire:
        dae: 删除当前文本所有内容
        die: 删除当前文本所有内容，但是不包含前面和后面的空格