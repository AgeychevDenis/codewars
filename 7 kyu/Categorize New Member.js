function openOrSenior(data) {
   let mass = []
   data.forEach(elem => {
      if (elem[0] >= 55 && elem[1] > 7) {
         mass.push('Senior')
      } else {
         mass.push('Open')
      }
   })
   return mass
}