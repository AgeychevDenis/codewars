const uniqueInOrder = function (iterable) {
   const arr = []

   for (let i = 0; i < iterable.length; i++) {
      const curr = iterable[i];
      const prev = iterable[i + 1];
      if (curr !== prev) {
         arr.push(curr)
      }
   }
   return arr;
}