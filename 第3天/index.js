// 你不知道的JavaScript
function foo(el) {
  console.log(el, this.id);
}

let obj = {
  id: 'hahaha',
}

let nums = [1, 2, 3];
nums.map(foo, obj);

// you're keyboard man