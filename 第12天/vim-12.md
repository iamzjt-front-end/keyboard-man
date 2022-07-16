# 第十二天 - vim12

掌握 vim-surround: 处理包裹字符的

Change existing surround to desired:  c s <existing> <desired>

Add desired surround around text defined by:  y s <monitor> <desired>

Delete existing surround:  d s <existing>

Surround when in visual modes(surrounds full selection):  S <desired>



练习:

``` js
import { add } from './add';

const str = "nihao jsk hui";

const a = `b${name}`;
```