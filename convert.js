

export const converter = (views) => {
   if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + 'M';
   }
   if (views >= 10000) {
      return Math.round((views / 1000)) + 'K';
   }
   return views;
};