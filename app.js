const body = document.querySelector("body");
const button = document.getElementById("button");
const backgroundColors = ["Blue","Green","Red","Black","Purple","Yellow"];

button.addEventListener("click",arkaPlanDegistir);

let sıra = 0; //* Global Değişken

    function arkaPlanDegistir(){ 
    ////!Sırasız Arkaplan Rengi Değiştirme.      
    const rastgeleRenk = Math.round(Math.random()*6);
    const secilenRenk = backgroundColors[rastgeleRenk];
    body.style.backgroundColor = secilenRenk;
  }
 
    function arkaPlanDegistir(){
    ////!Sırası İle Arkaplan Rengi Değiştirme.
    if(sıra == 7)(sıra = 0);
    const secilenRenk = backgroundColors[sıra]
    sıra++;
    body.style.backgroundColor = secilenRenk;
}
