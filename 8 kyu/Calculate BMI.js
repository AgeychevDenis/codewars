function bmi(weight, height) {
   let mass = weight / (height * height)

   if (mass <= 18.5) {
      return 'Underweight'
   } else if (mass <= 25) {
      return 'Normal'
   } else if (mass <= 30) {
      return 'Overweight'
   } else {
      return 'Obese'
   }
}