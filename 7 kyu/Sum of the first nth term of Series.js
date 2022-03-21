function SeriesSum(n) {
   let num = 0
   for (let i = 0; i < n; i++) {
      num += 1 / (i * 3 + 1)
   }
   return num.toFixed(2)
}