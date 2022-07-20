function getMax3(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

let result1 = getMax3(3, 7, 5);

console.log('最大值: ' + result1);


function getMax3_origin(num1, num2, num3) {
  let arr = [num1, num2, num3];
  let max = arr[0];
  for (let i = 1; i < 2; i++) {
    if(arr[i] > max) {
       max = arr[i]; 
    }
  }
  return max;
}

let result2 = getMax3_origin(3, 7, 5);

console.log('最大值: ' + result2);