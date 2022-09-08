// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

// ekrana 10 kere merhaba yazdir..
for (let i = 1; i <= 10; i++) {
  console.log("merhaba", i);
}

//* 1 den N e kadar olan tamsayi lari topla

// const n=+prompt("n icin sayi gir")

// let toplam=0  //*icerde tanimlanmiyor süslü icerisinde

// for (let i=1; i<=n; i++){
//     toplam=toplam+i

// }
// console.log(toplam);

/// süslü icerisinde olsa sürekli toplar

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

//!! interviev sorusu

//*asal sayi sadece 1 ve kendine bölünür

// const sayi =+prompt("ASAL kontrolü icin bir sayi giriniz")

// let asal=true;

// for(let i=2; i<sayi; i++){
//     if(sayi%i==0){
//      asal=false
//     }
// asal=true
// }
// console.log(asal=true?"asaldir":"asal degildir");

//********** WHILE **********/

//******ORNEK1 while icin 1-100 arasinda bir sayi giriniz.. aksi durumda error mesaji verip tekrar sayi  iste  */

let number = +prompt("WHILE ICIN 0-100 arasi bir sayi giriniz");
//!!|| dik cizgi veya anlamadinda

// while(number<0 || number>100)
// {
//     console.error("number 0-100 arasinda olmali");
//     number=+prompt("WHILE ICIN 0-100 arasi bir sayi giriniz")

// }

// console.log("girdiginiz sayi 0-100 arasindadir");

//! whiledeki sart true oldgugu sürece altindaki süslü isler false old anda süslümün disinda cikabilir.

//********** DO WHILE********* */

// let number1;
// do{
//     number1=+prompt("enter number for DO-WHILE")
//     alert(number1)
// }while(number<0 || number1>100)

//!!sarta bakmadan ilk etapda do nn icindeki istek yapilir sonrasinda while icindeki true oldugu sürece istek yapilmaya devam eder**
console.log(number1);



//? ORNEK2: klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.

let sayi1;
do {
  sayi1 = prompt("PLEASE SAYI GİRİNİZ");
} while (sayi1 != "q");

console.log(sayi1);