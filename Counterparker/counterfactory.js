function counterFactory() {
    let counter =0;
    return {
        increment: function() {
          counter += 1;
          return counter;
        },
        decrement: function() {
          counter -= 1;
          return counter;
        }
      };
}

let count = counterFactory()
console.log(count.increment())
console.log(count.increment())
console.log(count.decrement())
