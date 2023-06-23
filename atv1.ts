const entrada1 =require('readline-sync'); 
let letra: string = entrada1.question ("Digite uma letra: "); 
if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    console.log("VOGAL");
}
else{
    console.log("CONSOANTE");
}