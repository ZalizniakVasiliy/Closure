function getSumParam() {
   let sumParam = 0;
   return function (param) {
     return (sumParam += param);
   };
 }
 const sum = getSumParam();
 console.log(sum(3)); //3
 console.log(sum(5)); //8
 console.log(sum(20)); //28
