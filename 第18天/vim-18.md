# 第 18 天 - vim18

vim 调用 vscode 的命令

{
  // 格式化文档
  "before": ["<Leader>", "f", "d"],
  "commands": ["editor.action.formatDocument"]
},
{
  // 变量重命名
  "before": ["<Leader>", "r", "n"],
  "commands": ["editor.action.rename"]
},
