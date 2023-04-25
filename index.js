function encriptar() {
    let texto = document.getElementById("texto").value;
    
    let textocifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

  if (document.getElementById("texto").value.lenght !=0) {
        document.getElementById("mensaje").value = textocifrado;
     document.getElementById("titulo-mensaje").textContent = "Mensaje encriptado"
        document.getElementById("parrafo").textContent = "";
  }
        

}


function desencriptar() {
    let texto = document.getElementById("texto").value;

    let textocifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (document.getElementById("texto").value.lenght !=0) {
    document.getElementById("mensaje").value = texto;
    document.getElementById("titulo-mensaje").textContent = "Mensaje desencriptado"
    document.getElementById("parrafo").textContent = "";
  }
}


function copiar() 
  
    
  
