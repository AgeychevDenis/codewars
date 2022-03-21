function litres(time) {
   let water = 0.5
   let opi = time * water
   let result = Math.round(opi - 0.5)

   return result
}