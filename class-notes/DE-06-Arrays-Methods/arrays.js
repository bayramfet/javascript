// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//! 1.YÖNTEM (Array Literal) - tercih edilen yöntem

const yaslar = [30, 45, 22, 12];
console.log(yaslar);
console.log(yaslar.length); //uzunlugu length

//! const keywordu ile tanimlamis bir diziyi degisitrimessinz ancak tek tek ddegisiklige izin verir
//yaslar[1,3,66,7]

//! 2.YÖNTEM (array constructor)

const cars = new Array("BMW", "MERCEDES", "AUDI");
console.log(cars);

//! 1o elemanli bir array tanimlaama

const sayilar = new Array(10);
console.log(sayilar);

sayilar[4] = 256;
sayilar[9] = "Ayse";

console.log(sayilar);

console.log("#####################");

const dogum=1990;
const isimler = [
  "Faruk",
  "Güler",
  "Mevlüt",
  2022 - dogum,
  "Sinan",
  true,
  yaslar,
];

console.log(isimler);

//*dizinin elemanlarına veri yazma (indisleme)

isimler[6] = false;
console.log(isimler);
console.log(isimler[3]);


//??==================
//? DIZIYI DEGISTIREN METODLAR8MUTATOR

//* pop() dizinin son elamanini siler yazdirirsak sildigi elemana dönüstürür


const meyveler=["Elma","Erik","Muz","kiWi"]
console.log(meyveler,"sildigim meyve:",meyveler.pop());

//* shifty() dizinin ilk elamanini siler yazdirirsak sildigi elemani döndürür



console.log(meyveler,meyveler.shift());

//*push() dizinin sonuna eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

const sayı= meyveler.push("Çilek","Kavun","karpuz")
console.log(meyveler,sayı);

//*unshift() dizinin başına eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

meyveler.unshift("Ayva")
console.log(meyveler);


//*reverse() dizinin tamamını ters çevirir

meyveler.reverse()
console.log(meyveler);

console.log(meyveler[4].split("").reverse());

// meyveler dizisinin 4. elemanını önce diziye çevirdik sonra tersini aldık, çünkü reverse dizilere ait bir metod
console.log(meyveler);

//** sort() */

const number=[3,4,5,35,11,59,231]
number.sort();
console.log(number);

number.sort((a,b)=>a-b)
console.log(number);
meyveler.sort()
console.log(meyveler);

//string ifadelerde alfabetik sıralar(ascıı değerlerine göre)
//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçleştirir.

//*sadece sort dersek 22 den sonra 231 sonra 3 ü getirir, o yüzden alttaki gibi yazarız=bütün sayıları karşılaştır küçük olanı önce yaz 

//*splice () 1.parametre dizinin elaman ekleyecegimiz indexini belirtir

//*2.parametre=0 ise belirttigim index teki elemani saga kaydirir artiikk orada yeni yazdgim gelir
//*2.parametre=1 ise belirttigim index teki eleamnai sil üstüne yaz 
//["Ayva", "Erik", "Kavun", "Muz", "karpuz", "Çilek"];

meyveler.splice(2,0 , "mango")

console.log(meyveler);
meyveler.splice(1,1,"Ananas")
console.log(meyveler);

//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI (diziyi değiştirmezler)
//? ===========================================================

const sayilar1=[3,5,2,"2","üc",2,"bes",5]

//* includes()
//*-----------------------------------------------------------

console.log(sayilar1.includes("5"));
console.log(sayilar1.includes(5));




//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------

console.log(sayilar1.indexOf("2"));
console.log(sayilar1.indexOf(2,4));
console.log(sayilar1.lastIndexOf(5));


//*örnek

//* kullanıcıdan sayı isteyin. girilen sayının hem string hem number hali sayılar dizisinde var mı araştır, varsa index ini döndür

const sayiString=prompt("lütfen bir sayi giriniz")
const sayiNumber=+(sayiString)

let=varMi=false;


if(sayilar1.includes(sayiString)){
    console.log("aradaginiz stringin index i:",sayilar1.indexOf(sayiString));
    varMi=true;

}
if(sayilar1.includes(sayiNumber)){
    console.log("aradiginiz number index i :",sayilar1.indexOf(sayiNumnber));
    varMi=true;
}

// if(sayilar1.includes(sayiString)==&&sayilar1.includes(sayiNumber)==false){
//     console.log("aradiginiz elaman yok");
// }
if(varMi==false){
    console.log("aradiginiz eleman yok ");
}








console.log("***********");


//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join(" ")=>virgül+boşluk sil boşluklarla (join parantezinde 2 varsa her eleman arasına 2 koy) ayır
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez


console.log(  sayilar1.join(" "));



   //*dizinin 2 indexli elemanını tersten string olarak yazdır
  // ["Armut", "Ayva","Mango" "Erik", "Kavun", "Muz", "karpuz", "Çilek"];

   console.log(meyveler[2].split("").reverse().join(""))
 

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.


console.log(sayilar1.toString());

//* slice()
//*-----------------------------------------------------------
const arabalar=["bmw","mercedes","audi","ferrai","tofas"]

console.log( arabalar.slice(3));
console.log( arabalar.slice(1,3));

//! diziyi kopyalamak icin kullanilabilir

const arabalarCopy=arabalar.slice()
console.log(arabalarCopy);




//* concat()
//*-----------------------------------------------------------

const yazilar=["ali","dogukan","muhammet",]
const rakamlar=[3,5,7,1,4]
const birlesik=yazilar.concat(rakamlar,true["a","b","c"],[["x","y","z"]])
console.log(birlesik);


//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yas=[18,23,54,3,66]
console.log(yas.every((a)=>a>=18)? "dizideki herkesin yasi 18 ve daha büyüktür":"dizide 18 yas alti eleman var");

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.


//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemani yazdirin


console.log(
    yas.find((item)=>item>30)
);
console.log(yas.findlast((item)=>item>30));

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

console.log(yas.findIndex((i)=> i >30));

