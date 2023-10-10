function Mudap(){

    const texto = document.querySelector("h2");
    const a = document.querySelector("#a").value;
    const b = document.querySelector("#b").value;

    if(a.length > b.length){
        texto.innerHTML = "a";
       }
      else if(a.length < b.length){
        texto.innerHTML = "b";

       }
       else if(a.length = b.length){
        texto.innerHTML = "*";
       }

}