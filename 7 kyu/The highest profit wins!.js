function minMax(arr) {
   const min = Math.min.apply(null, arr);
   const max = Math.max.apply(null, arr);

   return [min, max];
}