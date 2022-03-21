function towerBuilder(nFloors) {
   let res = []
   for (i = 0; i < nFloors; i++) {
      res.push(" ".repeat((nFloors - i) - 1) + "*".repeat((i * 2) + 1) + " ".repeat((nFloors - i) - 1));
   }
   return res
}