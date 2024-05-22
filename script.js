document.getElementById("sumForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

  // Obtener los valores de los campos de entrada
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  // Calcular la suma
  const sum = num1 + num2;

  // Mostrar el resultado
  document.getElementById("result").textContent = `La suma es: ${sum}`;
});
