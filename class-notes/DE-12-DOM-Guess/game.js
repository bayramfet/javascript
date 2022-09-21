// hangi sayıya kadar istiyorsanız o sayıyla çarpıp yukarıya yuvarlamak en doğru yoldur
let rastgeleSayı = Math.ceil(Math.random() * 20);
console.log(rastgeleSayı);
let mesaj = document.querySelector(".msg");

let skor = 10;
let enYuksekSkor = 0; //enYuksekSkor diye bir değişken atamazsam, yani yandakini yazmazsam, dogru tahmindeki skor kontrol kodunda, html deki top-score span inin textContent iyle karşılaştırma yapabiliriz
//!her check butonuna basıldığında olacaklar;

document.querySelector(".check").addEventListener("click", () => {
  const tahmin = document.querySelector(".guess").value;
  console.log(!tahmin);
  //?tahmin girilmeden check butonuna basılmasın
  if (!tahmin) {
    mesaj.textContent = "lütfen bir tahmin giriniz!";

    //?Tahmin doğru ise
  } else if (tahmin == rastgeleSayı) {
    mesaj.textContent = "Tebrikler Bildiniz..🎉";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = rastgeleSayı;

    if (skor > enYuksekSkor) {
      enYuksekSkor = skor;
      document.querySelector(".top-score").textContent = enYuksekSkor;
    }
    //?tahmin yanlış girildiyse
  } else {
    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;

      tahmin < rastgeleSayı
        ? (mesaj.textContent = "Arttır 📈")
        : (mesaj.textContent = "Azalt 📉");
    } else {
      mesaj.textContent = "Oyunu Kaybettiniz ";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
//!Again butonuna basıldığında ayarlar başlangıç değerine kurulsun arka ekran #2d3436 olsun
document.querySelector(".again").onclick = () => {
  rastgeleSayı = Math.ceil(Math.random() * 20);
  console.log(rastgeleSayı);
  mesaj.textContent = "Oyun Yeni Oyuncu İçin Baslıyor";

  skor = 10;
  document.querySelector(".score").textContent = 10;

  document.querySelector("body").style.backgroundColor = "#2d3436";

  document.querySelector(".guess").value = "";

  document.querySelector(".number").textContent = "?";
};
