// 你不知道的JavaScript
function foo(el) {
  console.log(el, this.id);
}

let obj = {
  id: 'awesome',
}

let nums = [1, 2, 3];
nums.forEach(foo,obj);