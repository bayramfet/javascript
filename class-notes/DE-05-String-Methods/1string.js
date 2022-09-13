// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRİNG METHODS******");

//!! klasik yöntemle tanimlanan String primitive dir(ilkel)

const str1 = " clarusway";
const str2 = "hello ";
const str3 = " all the world";
console.log(str2 + str3, typeof (str2 + str3));

//! 2 - String constructor ile tanimlanan String non-primative dir(ilkerl olmayan)

const str4 = new String("yeni bir string");
console.log(str4, typeof str4);

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! nesnelerine dönüştürür. Bu sayede, String nesnelerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur.Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================

let s1 = "hello";
const s2 = "world";
s1.concat(s2); //!! concat ile birlestirdik
const s3 = s1.concat(s2);
console.log(s3);
console.log(s3.concat("clarusway ", s1));
//! orjinal degerler degismez assign ile degisken degeri degirstirilebilir

s1 = s1.concat(str3);
console.log(s1);
//* ----------------------------------------------------------
//* toUpperCase(), toLowerCase() --immutable
//* ----------------------------------------------------------

const myName = "Muhammet Bayram";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

let yourName = "ismet";

console.log(yourName.toLocaleUpperCase("tr")); //tolocal demek istedgin gibi karsina cikartir ingilzce yada türkce kelime ayirmaz.. ve büyük i bile yapabilriiz

//? ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu donduren fonksiyonu yaziniz.

const esitMi = (str1, str2) =>
  str1.toLocaleUpperCase === str2.toLocaleUpperCase()
    ? "esittir"
    : "esit degildir";
//!normalde arrow da { } paranteze gerek yok

console.log(esitMi("hello", "HELLO"));

//* charAT()//** */


const s4="primitive \n veri tiplerinin \n property ve \nya metodu olmaz."
console.log(s4);

console.log(s4.charAt(5));// t
console.log(s4.charAt(9));//""
console.log(s4.charAt());// eger bir index belirtmezseniz ilk harfi döndürür

console.log(s4.charAt(s4.length-1));///. sondanda charAt ile karaketer alabilrz..

//**** incLudes() case sensitive (büyük  kücük harfe duyarli ) */

const kelime="to be or not to be,that is The questions."

console.log(kelime.toUpperCase().includes("TO BE"));
console.log(kelime.includes("to be"));
console.log(kelime.includes("quest"));
console.log(kelime.includes(""));
console.log(kelime.includes("to be",14));

//! NOT: incase sentive kullanmak icin kelime baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.


//** indexOf()- lastIndexof() - case sensitive */


const kelime1 = "to be or not to be,that is The questions.";

console.log(kelime1.indexOf("be"));
console.log(kelime1.lastIndexOf("be"));
console.log(kelime1.indexOf("this"));
//** bulamazsa -1 cevabini döndürür */

console.log(kelime1.indexOf("be",4));
console.log(kelime1.indexOf(""));

//*** search() */
//- - - - -  - - --  - -- - - - - -  /

const kelime2 = "to be or not to be,that is The questions 9.";

console.log(kelime2.search(/[A-Z]/));// büyüktür
console.log(kelime2.search(/[0-9]/));//sayi bulma
console.log(kelime2.search(/[a-z]/));// kücük harf ariyor
console.log(kelime2.search(/[A-Z]/));//31
console.log(kelime2.search(/[0-9]/));//45
console.log(kelime2.search(/[a-z]/));//0
console.log(kelime2.search(/[.]/));//46
console.log(kelime2.indexOf("."))//46
// console.log(kelime2.search(/[0-9A-Za-z]/));
console.log(kelime2.search(/[0-9A-Za-z]/));// ilk bulduğu küçük harfin index ini döndürdü
 console.log(kelime2.search(/[^a-z]/));// küçük harflerin dışında ilk bulduğunu döndürdü



///**
///** startsWith(), endsWith() --case sensitive//*/


const kelime3="Salina salina sinsice ölürüm sana!";

console.log(kelime3.startsWith("sa")); // büyük kücük harfe duyarli
console.log(kelime3.startsWith("Sa"));
console.log(kelime3.startsWith("sa",7));// 7 den itibaren say baslangici 7 olsun 7 dahil 
console.log(kelime3.endsWith("!"));
console.log(kelime3.endsWith("salina",13));
// 13. karakterde bitsin 13 e kadar al ve 13 dahil degil 

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable
//* ----------------------------------------------------------




let oku="Oku Johny gibi, saf olma, saf olma";

oku=oku.replace("saf olma","basarili ol")
console.log(oku);
// kalici degistirdi

console.log(oku.replace(/SAF/i,"fakir"));

// gecici degistirdi 

/// saf/i buradaki i harfi büyük kücük harfe duyarsz ol demek




console.log(oku);

console.log(oku.replace(/Saf olma/gi,"zengin ol"));

//!gi ile yazılırsa tüm saf olma (büyük küçük harfe duyarsız) kelimelerini değiştirir, aksi takdirde ilk bulduğunu


///** replaceAll() -immutable*/

let degistir = "Oku Johny gibi, saf olma, saf olma saf olma";
console.log(degistir.replaceAll("saf olma","akilli ol"));

//* ----------------------------------------------------------
//*  slice(beginIndex, endIndex)
//*  substring(beginIndex, endIndex)
//*  substr (depreceated)
//* ---------------------------------------------------------- 

const veysel="UZUN INCE BIR YOLDAYIM YÜRÜYORUM GÜNDÜZ GECE";

console.log(veysel.slice(33));//33 ten sonrakileri al
console.log(veysel.slice(17,30));//DAYIM YÜRÜYOR
console.log(veysel.substring(17,30));
console.log(veysel.slice(-21,-17));
console.log(veysel.slice(-11,));

//* ----------------------------------------------------------
//* split= string i diziye çevirir
//* split(sep , limit ) =>ikisi de optional
// //* split(" ")=>boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------

const tarkan="Gel gündüzle gece olalim";

console.log(tarkan.split("e"));//e harflerinden ayirarak bir dizi olustur 

console.log(tarkan.split(""));// harff harf ayirdi
console.log(tarkan.split(" "));
console.log(tarkan.split("e",2));
console.log(tarkan.split(" ",2));


//**** trim() */

const ramazan="    Hos geldin ya Sehr i Ramazan     ";

console.log(ramazan.length);
console.log( ramazan.trim())
console.log( ramazan.trim().length)

