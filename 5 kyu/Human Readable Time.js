function humanReadable(seconds) {
   let t = seconds;

   let h = Math.floor(t / 60 / 60);

   let m = Math.floor(t / 60) - (h * 60);

   let s = t % 60;

   let formatted = [
      h.toString().padStart(2, '0'),
      m.toString().padStart(2, '0'),
      s.toString().padStart(2, '0')
   ].join(':');

   return formatted
}