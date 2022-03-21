function countDevelopers(list) {
   let sum = 0
   list.forEach(elem => {
      if (elem.continent === 'Europe' && elem.language === 'JavaScript') {
         sum += 1
      }
   })
   return sum
}