function countSheeps(arrayOfSheep) {
   let n = 0
   arrayOfSheep.forEach(element => {
      if (element === true) {
         n++
      }
   });
   return n
}