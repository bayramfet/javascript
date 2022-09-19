//* ======================================================
//*                        EVENTS
//* ======================================================

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//?METHOD-1 (HTML-INLINE)
//?---------------------------------------------------------------
//! alttaki kod index.html de, görmek için buraya da yazdık
//  <h1 class="header" onmouseover="style.color='black'" onmouseout="style.color='blue'">DOM Temelleri</h1>

//? METHOD-2 (Function calling in HTML)
//?---------------------------------------------------------------
//!  index html deki kod 
//*  <h1 class="H1" onmouseover=black() onmouseout=blue()>DOM Basics
//</h1>   HTML bu sayfaya script tag ini yazmamız lazım

//JAVASCRİPT
const header = document.querySelector(".H5");
const blue = () => (header.style.color = "blue");
const black = () => (header.style.color = "black");


//??? METHOD3 (SADECE JAVASCRPT TE YAZILAN YOL) */


document.querySelector(".H2").onmouseover = () => {
document.querySelector("#badi").style.backgroundColor = "pink";
}


const baslik=documnet.querySelector(".H1");
baslik.onmouseover=()=>{baslik.style.color="red"}

baslik.onmouseout=()=>{baslik.style.color="blue"}

//* onclick-ondblclick

//* example-2 onclick- ondblclick

const birinci= document.querySelector(".bir");
const ikinci= document.querySelector(".iki");

birinci.onclick=()=>{
birinci.src="./img 2/logo2.png"
ikinci.src="./img 2/js_logo.png"

}




birinci.ondblclick=()=>{
birinci.src="./img 2/winter1.jpg"
ikinci.src="./img 2/dom-olaylar.png"

// ikinci.src = "./img 2/logo2.png";
// birinci.src = "./img 2/js_logo.png";
}

ikinci.onclick = () => {
ikinci.src = "./img 2/logo2.png";
birinci.src = "./img 2/js_logo.png";
};


//*example3 (button onclick)

document.querySelector("#btn")

buton.onclick=()=>{

    Document.querySelector("body").style.backgroundImage="linear-gradient(to right,purple,gray)"
buton.textCOntent="SEARCH"
buton.style.fontSize="30px"
header.style.color="red"

}

//!aynı element e hem onclick hem onmouseover atandığında, önce onmouseover  sonra onclick i çalıştırırsanız sorun olmaz, tersi durumda onclick baskın old için onmouseover çalışmaz


// ? METHOD-4 (ONLY JAVASCRIPT - addEventListener())
// ?---------------------------------------------------------------


buton.addEventListener("click", () => {
  Document.querySelector("body").style.backgroundImage =
    "linear-gradient(to right,purple,gray)";
  buton.textCOntent = "SEARCH";
  buton.style.fontSize = "30px";
  header.style.color = "red";
});
