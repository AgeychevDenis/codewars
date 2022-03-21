function betterThanAverage(classPoints, yourPoints) {
   let score = 0
   classPoints.forEach(item => {
      score += item
   })
   let result = score / classPoints.length
   return result < yourPoints
}