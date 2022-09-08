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




// carpma ve üs alma 


////*************** */


const pi=3.14;
const r=5;
const alan=pi*r**2 /// 2* üs alma ile olur

const cevre=Math.ceil(2*pi*r);

console.log(alan,cevre);

//?Bazı fonksiyonlar
// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.



const number=456;
const birler=number%10;
const onlar=Math.floor(number/10)%10;
const yüzler=Math.trunc(number/100);
console.log(birler,onlar,yüzler);

// * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================

const rakam=4;
console.log(rakam==4);//true
console.log(rakam=="4");//ture
console.log(rakam==="4");//false
console.log(rakam!=4);//false
console.log(rakam!="4");//false

console.log(rakam>4);//false
console.log(rakam>=4);//true



// * =======================================================
// *                 MANTIKSAL OPERATÖRLER
// * =======================================================

//? TRUE
console.log(Boolean(5));//true
console.log(Boolean(-5));//true
console.log(Boolean(-15.5));//true

//? 5 falsy
console.log(Boolean(0)); //false
console.log(Boolean(null));//false
console.log(Boolean(""));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false



const v1=false || 0 || 12.6 || true || false || null

console.log(Boolean(v1));
console.log(v1);


const v2=false||0||null||undefined||NaN;
console.log(v2);

const v3=5 && true && true && 0 &&"";
console.log(v3);

const v4= 6 && true && 12.5 && 7;
console.log(v4); //!false olani bulamayinca sondakini döndürüyor


//! DEGIL !

console.log(!v4);  //! normalde true v4 ama false döndürdü


console.log(!v2); //!normalde false ama ! isarei ile döndürdü     ! isareti tersine döndürüyor...







// * =======================================================
// *                TİP DÖNÜŞÜMLERİ
// * =======================================================

const para= Number("1000") +Number("900")

console.log(para);


// number yerine alternatif parseInt te kullanılabilir
// console.log(parseInt(para));
console.log(Number("")); //0
console.log(Number(null)); //0


//* -------- NULLISH COALESCING OPERATOR----------- */
//?  Bir ifadenin null veya undefined olması durumuna göre seçim yapmamıza olanak sağlayan bir operatördür.eğer kullanıcı input a null girer yada hiçbişey (undefined) girmezse, belirteceğim ifadeyi (noname) kabul et


const isim1 = null; // ?null
const defaultIsim = "noname";
const islem1 = isim1 ?? defaultIsim;
// isim1 true ise onu döndür yoksa 2. ifadeyi
console.log(islem1); //noname 

































