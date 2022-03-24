function prefill(n, v) {
   if (n === 0 || n === '0') return [];

   if (n < 0 || !Number.isInteger(n)) {
      let typeError = new TypeError();
      typeError.name = "TypeError";
      typeError.message = n + " is invalid";
      throw typeError
   };

   return new Array(n).fill(v);
}