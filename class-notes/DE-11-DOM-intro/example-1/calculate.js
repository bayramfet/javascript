const yaricapInput =document.querySelector("#yaricap")

const buton=document.querySelector("#btn")

buton.onclick=()=>{
//* ilk yapacagmiz alan cevre icin sonuclari hesaplamak
const r= yaricapInput.value
const alan= (Math.PI*r*r).toFixed(2);
const cevre= (2*Math.PI*r).toFixed(2);

document.querySelector(".alan").textContent=alan
Document.querySelector("cevre").textContent=cevre



}