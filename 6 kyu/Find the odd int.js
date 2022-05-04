function findOdd(arr) {
   for (let i = 0; i < arr.length; i++) {
      const count = arr.filter(value => value === arr[i]).length;
      if (count % 2 == 1) {
         return arr[i];
      }
   }
   return -1;
}