// 你不知道的JavaScript
function foo(el) {
  console.log(el, this.id);
}

let obj = {
  id: 'awesome',
}

let nums = [1, 2, 3];
nums.forEach((item, index) => {
  console.log('111' + item);
  console.log('222' + item); 
  console.log('333' + item); 
  console.log('555' + item); 
});

<h1>哈哈哈哈</h1>