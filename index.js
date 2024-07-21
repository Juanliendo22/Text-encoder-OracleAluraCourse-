function encryptText() {
  const input = document.getElementById("text-input").value;
  const encryptedText = input
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  document.getElementById("output-text").innerText = encryptedText;
}

function decryptText() {
  const input = document.getElementById("text-input").value;
  const decryptedText = input
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  document.getElementById("output-text").innerText = decryptedText;
}

function copyText() {
  const outputText = document.getElementById("output-text").innerText;
  navigator.clipboard.writeText(outputText).then(
    () => alert("Texto copiado al portapapeles"),
    (err) => console.error("Error al copiar el texto: ", err)
  );
}
