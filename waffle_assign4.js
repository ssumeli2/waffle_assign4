const message = 'Hello world' 

console.log(message)

var fruits = ['apple', 'mango', 'banana'];
console.log(fruits);

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

function sumNumbers() {
  var sum = 0;

  for (var i = 1; i <= 100; i++) {
    sum += i;
  }

  return sum;
}

var result = sumNumbers();
console.log(result);
