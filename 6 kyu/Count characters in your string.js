function count(string) {
   const obj = {}
   for (let str of string) {
      obj[str] = obj.hasOwnProperty(str) ? obj[str] + 1 : 1;
   }
   return obj;
}