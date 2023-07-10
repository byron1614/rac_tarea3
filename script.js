// Obtiene el elemento de entrada de texto.
const textBox = document.querySelector('#textBox');
// Obtiene el elemento de salida.
const output = document.querySelector('#output'); 
textBox.addEventListener(
    "keydown", 
// Actualiza el contenido del elemento de salida con la tecla presionada.
    (e) => (output.textContent = `Presionaste "${e.key}".`) 
);
