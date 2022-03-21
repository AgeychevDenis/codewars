function greetDevelopers(list) {
   list.forEach(obj => {
      obj.greeting = `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`;
   })
   return list
}