//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================


const car={
    title:"Bmw",
    model:"1990",
    engine:1.6
}
//*1.klasik yol

console.log(car.model);
console.log(car["engine"]);


//**2.yol destructuring */

const{title,engine}=car
console.log(title,engine,car.model);

//*NESTED OBJECT example;//


const arabalar={
car1:{
    title1:"BMW",
    model:"1990",
    engine1:1.6,

},
car2:{
    title1:"MERCEDES",
    model:"1980",
    engine1:2.0,

},
};
const{car1,car2}=arabalar

console.log(car1,car2);
console.log(car1.model);

const{title1,engine1,model}=car1
console.log(title1);

const{title1:baslik,model:model1,engine:motor}=car2;
//* : islemi ile ismlerini degistirdik 


//!!!!JavaScript'te, iterable protokolü uygulamadıkça Objects iterable değildir. Bu nedenle, bir object in özellikleri üzerinde iterate yapmak için for…of (ForEach,map,filter de)kullanamazsınız. sadece klasik for döngüsü ve for in kullanilabilir...

//*object object gezinme

for(let i in arabalar){
    // console.log(i);
    console.log(arabalar[i].title1);

}

//* EXAMPLE: Array-Object
const people = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },
  {
    name: "Halo",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Ozkul",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Baser",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  },
];

people.forEach((item)=>{
  
    // console.log(item.name);
    // console.log(item.surname);
    // console.log(item.job);
    // console.log(item.age);

const{name,surname,age,job}=item

console.log(name,surname,job,age);

    
})

//?Fonksiyonlar object parametreleri dest yapabilir


const yazdir=({id,name})=>{
    //*parametre olarak b ismiyle yapsaydik alttaki yorunmdaki islemleri yapardik 
    // console.log(b);
    // const{id,name}=b
    console.log(id,name);
}
const a={id:1,name:"osman"}

yazdir(a)

//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST =>>[...name]=diziden alınmayan, geri kalanları yeni bir (diziyse) diziye,(object se)object e atıyor
//? ------------------------------------------------------


//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//*REST object

const personel={
pName:"Johny",
surname:"Deep",
job:"actor",
age:55
}

const{pName,...gerisi}=personel


console.log(pName);
console.log(gerisi);
console.log(gerisi.surname, personel.surname);

//*OBJECT kopya
const ikizPersonel=personel

console.log(ikizPersonel);

 const{...personelGerisi }  = personel
 
 console.log(personelGerisi);

console.log("************************");
//* orjinal diziden farklı bir kopya dizi oluşturduk, bu kopyaya yapılan değişiklik orjinal diziyi bozmaz
 personelGerisi.age=40;
 console.log(personel);
 console.log(ikizPersonel);
 console.log(personelGerisi);

console.log("************************");
//*orjinal diziyle aynı şartlarda bir kopya oluşturduk, bu kopyaya yaptığımız ekleme çıkarma değişiklik, orjinal diziyi de bozar
 ikizPersonel.age=100;
 console.log(personel);
 console.log(ikizPersonel);
 console.log(personelGerisi);


 //****REST ARRAYS********************* */


 const autos =["Anadol","Renault","Bmw","Mercedes","Audi"]

const[birinci,ikinci, ...autoGerisi]=autos;


console.log(birinci,ikinci);

console.log(autoGerisi);



//*******ARRAY kopya */

const esasNumber=[10,20,30,40]

const ikizNumber=esasNumber;



const[...arkadasNumber]=esasNumber

arkadasNumber.push(999)
console.log(esasNumber);
console.log(arkadasNumber);
console.log(ikizNumber);

console.log("***************");
ikizNumber.unshift(222)

console.log(esasNumber);
console.log(arkadasNumber);
console.log(ikizNumber);

//! 2- Bir fonksiyonun argument larını diziye çevirmek için kullanılabilir

//*şikayet etmez ama ilk 2 argument in değerini hesaplar, çünkü 2 adet karşılayan var
//*1.yol
const sum=(x,y)=> x+y;

 console.log(  sum(1, 2, 3, 4, 5))


 //*2.yol

const sum2=(...x)=>{
// console.log(x);
  console.log(   x.reduce((toplam,eleman)=>toplam+eleman,0))
}
 
     sum2(1,2,3,4,5)






        //? ------------------------------------------------------
//?  SPREAD==>> parçala (yapısını boz)-> istenilen diziye ekle,içinde gezin vs
//? ------------------------------------------------------


const fahrzeug=["Aircraft","Helicopter","Bicycle"]

const auto=["Trucks","Bus","Car","Suv"]

console.log([fahrzeug,auto]);
const birlesik=[...fahrzeug,"otobus", ...auto,"tir"]
console.log(birlesik);


let kelime="hello almanya"
console.log([...kelime]);