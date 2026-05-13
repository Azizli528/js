// Task-1 :
// Aşağıdakı kodda nəticənin 30 olması lazımdır, amma proqramçı haradasa səhv edib. Səhvi tapıb tip çevirmə ilə düzəltməlidirər:

// JavaScript
// let qiymet1 = "10";
// let qiymet2 = "20";

// // Səhv olan sətir:
// let cem = qiymet1 + qiymet2; 

// console.log(cem); // Hazırda "1020" çıxır. Necə 30 edək?


let qiymet1 = "10";
let qiymet2 = "20";

let newqiymet1 = Number(qiymet1);
let newqiymet2 = Number(qiymet2);

let result = newqiymet1 + newqiymet2 ;
console.log(result);

// Task 2:

// Aşağıdakı dəyişənləri yaratmalı və hesablamalar aparmalıdır:

// mehsulAdi (String)

// mehsulQiymeti (Number)

// endirimFaizi (Number - məsələn, 20)

// stokdaVarmi (Boolean)

// Tapşırıq:

// Məhsulun endirimli qiymətini hesablayıb yeni bir dəyişənə mənimsədin.

// Konsola belə bir cümlə çıxarın: "Məhsul: [ad], Endirimli Qiymət: [qiymət] AZN".

// Məhsulun qiyməti 50-dən yuxarıdırsa və stokda varsa, konsola true çıxaran bir məntiq yazın.

let mehsulAdi = "Kitab" ;
let mehsulQiymeti = 80 ;
let endirimFaiz = 30 ;
let stokdaVarmi = true ;

let endirimliqiymet = mehsulQiymeti - (mehsulQiymeti * endirimFaiz / 100) ;
let varsa = mehsulQiymeti > 50 && stokdaVarmi ;

console.log(`Mehsul : ${mehsulAdi} , Endirimli Qiymət : ${endirimliqiymet} AZN`);
console.log(varsa);