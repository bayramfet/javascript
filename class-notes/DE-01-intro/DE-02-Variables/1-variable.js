//!  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

//  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

// ===================  CONST  ======================
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler (array..) hariç).



const yas=25;

console.log(yas);


// yas=27;  yas degeri degistirilemez hata const degeri

console.log(typeof yas);


//! const pi; const degerine baclangic atamasi yapmak zorunludur

const kelime="osman";
console.log(kelime,typeof kelime);

const isTrue=true;

console.log(typeof isTrue);

const dolar=1.1;
console.log(typeof dolar);

// ======================  LET  ========================
//? LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//! CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//? CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.



let dil;

dil="javascript"
console.log(dil);

dil=true;


console.log(dil,typeof dil);

dil=null;
console.log(dil,typeof dil);


let sayi=5;
console.log(7+sayi);

let sayi1="5"
console.log(7+sayi1);

//! bir string ile number toplarnirsa toplama yapmaz yan yana onlari yazar iki kelime gibi algilar..

isim="ipek";

console.log(typeof isim);
//! degisken tanimlama keywordu kullanmasak bile js derleycisi otomatik olarak onu "var"  olarak tanimlar


// ===================  VAR VERİ TİPİ ===============================
//? VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//! VAR değişkenleri tanımlandığı yere göre global olarak veya fonksiyon içerisinde erişilebilir.
//* - Değişken fonksiyon içerisinde tanımlandı ise ancak o fonksiyonda erişilebilir (Function-scoped).
//? - Eğer, değişken fonksiyonların dışında tanımlandı ise tüm her yerden erişilebilir. (Global-scoped).
//! Günümüzde programcılar global değişken gerekmedikçe VAR ile değişken tanımlamayı seçmemektedir.


var sayi2=5;
console.log(sayi2);
sayi2=10;
console.log(sayi2);

console.log("************************************");

var ilk="GLOBAL";
console.log(ilk);

{
console.log(ilk);
ilk="degistim"
console.log(ilk);

}
console.log(ilk);

//!var keyword u olunca blok içerinde ve dışarısında erişebiliriz. Global-scope


console.log("************************************");
//!LET VE CONST UN ORTAK ÖZELLİĞİ
let first ="osman";
console.log(first);

{
 // console.log(first);
 // alttakileri yazmayacaksak global deki first e burada erişebiliriz
 let first="osman2"
 console.log(first);//osman2
 let second="merhaba";

}

console.log(first);//osman

//console.log(second);
//!block taki elemana erişemeyiz

console.log("************************************");

//!AYNI İŞLEMLERİ CONST LA YAPTIK
const first1="MEHMET"
console.log(first1);

{
const first1="sinan"
console.log(first1);

}


console.log(first1);

//! const ve let için scope (süslü içinde) da olan scope da kalır 

