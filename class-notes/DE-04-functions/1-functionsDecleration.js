// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
console.log("************ 1- FUNC DECLARATION *************");

//* Örnek1:
//****************************************************************/
//Fonksiyonun tanımlanması

function yazdir(){
    console.log("wie gehts dir?");
}
yazdir(); //!!call veya invoke yazdir demenden göremeyiz
yazdir()


//*ÖRNEK22222***************(parametreli)

function adYazdir(a,b,c){
    console.log(a,b,c);
///!! adyazdir ve log kismi ayni olmak zorunda
}

adYazdir("dogu","muhammet","FARUK")


function adYazdir(ad,ikinciad,soyad){
    console.log(soyad,ikinciad,ad);
}
adYazdir("muhammet","fethullah","BAYRAM")



//****örnek 3 returnlu dönüs degerli */


//*Örnek3:(parametreli, dönüş değerli (return lü) fonksiyon)*********************************************************/

function yasHesapla(ad, dogumTarihi){

const yas=2022-dogumTarihi

console.log(`Benim adım ${ad} ve ben ${yas} yasındayım` );
return yas;

}

const Muhammed=  yasHesapla("Muhammed",1990)
const ipek=yasHesapla("İpek",1979)
const haluk=yasHesapla("Haluk",1976)

console.log(Muhammed, ipek, haluk);

console.log("3 arkadaşın yas ortalaması=", (Muhammed+ipek+haluk)/3);


//* Örnek4: Parametreli, Dönüş değerli
//**********************************************************/
//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasında önce veya sonra olabilir.
// tek sayi cift sayi kontorlü

console.log(tekCiftsayi(5));
console.log(tekCiftsayi(12));

//! console log yapmzasam ciktiyi göremem.





function tekCiftsayi(x){    

return x%2==1 ? "tektir" : "cifttir"

}
