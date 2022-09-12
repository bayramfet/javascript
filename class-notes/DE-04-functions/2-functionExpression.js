// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");


/// önce fonksiyon olustur(sarti böyle)


const tekCift=function(sayi){
return sayi%2==1 ? "tektir":"cifttir"

}
//!calling daha sonra 
 console.log(tekCift(5));
 console.log(tekCift(6));


 //** örnek2 en büyük sayiyi bul */

let büyükBul=function(x,y,z){
let enBüyük;

if(x>y&& x>z) 
{enBüyük=x} 
else if(y>x && y>z)
{enBüyük=z}
else{enBüyük=z}
console.log(enBüyük);
return enBüyük;
}
alert (büyükBul(3,5,9))


///**örnek3 bir fonksiyon icerisinde baska bir fonksiyon cagirilabilir */


const kareAl = function (s1, s2) {
  return s1 ** s2;
};
const alan = function (s1, s2) {
  return s1 * s2;
};
const cevre = function (s1, s2) {
  return (s1 + s2) * 2;
};

const hesapla = function (secim, s1, s2) {
  let sonuc;

  if (secim == "square") {
    sonuc = kareAl(s1, s2);
  } else if (secim == "field") {
    sonuc = alan(s1, s2);
  } else if (secim == "perimeter") {
    sonuc = cevre(s1, s2);
  }

  return sonuc;
};
console.log(hesapla("square", 2, 3));
console.log(hesapla("perimeter", 3, 4));



