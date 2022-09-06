// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const sucuk = 100;
const sakiz = 5;
const kola = 10;

let toplamFiyat = sucuk + sakiz + kola;
console.log(toplamFiyat);


//! bir arttir
toplamFiyat++;
// toplamFiyat=toplamFiyat+1;
console.log(toplamFiyat);

//! 10 arttir
toplamFiyat+=10
console.log(toplamFiyat);


//? + operatörü String Concatination işlemi de yapar.
const ad = "ahmet";
const soyAd = "Can";
console.log(ad  + soyAd);


const s1=5;
const s2="6";
//! sayi olmuyor tirnak icindeki string ifade 
//!bir sayi ve string toplanirsa

console.log(s1+s2);
//!cikarma isleminde verilerden biri number ise digeri tirnak icinde olsa bile cikarma yapar

console.log(s1-s2);

const s3="iki";
console.log(s1-s3); //! nan not a number



const dogumTarihi=1969;
const isim="Ashley";
console.log(isim+ " " +(2022-dogumTarihi)+ " "   +"yasindadir");


//! template literals(backticks)
console.log(`${isim} ${2022-dogumTarihi} yasindadir`);


//* ARTTIRMA AZALTMA


let a=5;
console.log("ilk",a++);//5
console.log(a);//6

let b=a++;

console.log(b);//6
console.log(a);//7

console.log("*************");
let c=10;
console.log(++c,c);



let d=++c;
console.log(d);
console.log(c);


let e=33;
console.log(--e);//32
console.log(e--,e);//32//31



//! e yi 5 arttir   *******


e+=6;  //e=e+5 bunun kisayolu

console.log(e);

// c nin 10 katini al  (c=12)

// c=c*10
  c*=10;  //kisa yazimi 

console.log(c);







