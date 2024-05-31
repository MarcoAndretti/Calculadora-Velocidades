function calcularVelocidad() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const tiempo = parseFloat(document.getElementById('tiempo').value);
  
    if (isNaN(distancia) || isNaN(tiempo) || distancia <= 0 || tiempo <= 0) {
      alert('Por favor, ingrese valores válidos para distancia y tiempo.');
      return;
    }
  
    const velocidad = distancia / tiempo;
    document.getElementById('resultado').textContent = `La velocidad promedio es: ${velocidad.toFixed(2)} m/s`;
  }
  