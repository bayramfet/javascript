//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.



//*Senkron Programlama
//****************************************** */
//!blocking-code
// const bekle=(ms)=>{
// const start= new Date().getTime()
// while(new Date().getTime()<start+ms)
// {}

// }
// console.log("hello");

// console.time("timer1")//kronometre başlat
// bekle(3000)
// console.timeEnd("timer1")//kronometreyi durdur
// console.log("naber");

//*Asenkron (setTime) 1 seferlik
////******************************* */

// setTimeout(()=>{
//     //! non-blocking code, macri task kuyruguna girer 
// console.log("sea");

// },2000)

// console.log("aleykümselam");

// setTimeout(()=>{
//   //! non-blocking code

//   console.log("naber");
// },1000);

//!Aleyküm Selam-Selamun Aleyküm-Dostum Naber çalışır, 3. nün süresi 1.den azsa, 2-3-1 sırasında çalışır
//!settimeout müsait zamanda ortaya çıkar, onun sırası geçtiğinde alttaki işlemler bitince çalışır



//*** Asenkron(senIneterval,clearInterval) belli araliklarla durdurulana kadar devam eder mesele dakika da 1 döviz kurunu güncellemek icin kullanilabilir ******************* */


//?? setInterval non-blocking

// console.log("counter started");

// let counter = 0;

// const interval1= setInterval(()=>{

// console.log(++counter);


// if(counter === 5)
// {
//     clearInterval(interval1)//! counter 5 oldugunda setInterval durdur 

// }

// },1000)

// console.log("counter finished");


//? callback helll 

//!!! interview de cikabilir piramit yapi
setTimeout(() => {
  console.log("ayse:s.a. ahmet");
  setTimeout(() => {
    console.log("ahmet:a.s. ayse nasılsın");
    setTimeout(() => {
      console.log("ayse:iyiyim sağol");
    }, 1000);
  }, 1000);
}, 1000);










