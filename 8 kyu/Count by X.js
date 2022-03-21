function countBy(x, n) {
   let z = []
   let index = 1

   while (z.length < n) {
      z.push(x * index)
      index++
   }

   return z
}