function countPositivesSumNegatives(input) {
   if (!input || !input.length) return []
   let numbers = 0
   let minusNum = 0
   input.forEach(num => {
      if (num > 0) {
         numbers++
      } else {
         minusNum += num
      }
   })
   return [numbers, minusNum]
}