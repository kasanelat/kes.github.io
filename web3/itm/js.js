// Configuración para ajustar la cantidad de gotas y el tiempo de caída
const cantidadDeGotas = 100; // Número de gotas que caerán
const tiempoDeCaida = 0.5; // Tiempo en segundos que tarda una gota en caer de principio a fin
const intervalo = 5000 / 1; // 60Hz, o 60 imágenes por segundo

// Obtener las imágenes del HTML
const imagenesDisponibles = Array.from(document.querySelectorAll('img[id^="imagen"]'))
    .map(img => img.src);  // Obtiene las rutas de las imágenes que tienen id que comienza con "imagen"

// Función para crear una gota de imagen
function crearGota() {
    const imagen = document.createElement('img');
    imagen.src = imagenesDisponibles[Math.floor(Math.random() * imagenesDisponibles.length)];
    imagen.style.position = 'absolute';
    imagen.style.width = '100px';
    imagen.style.height = 'auto';
    imagen.style.borderRadius = '50%'; // Hace que la imagen sea redonda
    
    // Posición inicial aleatoria en el eje X
    imagen.style.left = Math.random() * window.innerWidth + 'px';
    imagen.style.top = '0px';  // Comienza fuera de la pantalla en la parte superior

    // Añadir la imagen al cuerpo del documento
    document.body.appendChild(imagen);

    let topPosition = 0; // Comienza fuera de la pantalla
    const velocidadCaida = window.innerHeight / (tiempoDeCaida * 1000); // Ajustar la velocidad dependiendo de la altura de la ventana

    // Animación para que la imagen caiga
    const animacionCaida = setInterval(() => {
        topPosition += velocidadCaida; // Incrementa la posición de la gota

        // Si la gota ha llegado a la parte inferior de la pantalla
        if (topPosition > window.innerHeight) {
            clearInterval(animacionCaida); // Detener la animación de la gota
            document.body.removeChild(imagen); // Eliminar la gota de la página
        } else {
            imagen.style.top = topPosition + 'px'; // Actualizar la posición de la gota
        }
    }, 16); // Usar 16ms para una tasa de actualización de 60Hz
}

// Función para generar gotas continuamente
function generarLluvia() {
    let gotasGeneradas = 0;

    // Generar gotas al azar sin sobrepasar la cantidad especificada
    const intervaloGeneracion = setInterval(() => {
        if (gotasGeneradas < cantidadDeGotas) {
            crearGota();
            gotasGeneradas++;
        } else {
            clearInterval(intervaloGeneracion); // Detener el intervalo cuando se alcanzan las gotas deseadas
        }
    }, intervalo); // Intervalo de generación de gotas
}

// Iniciar la lluvia de imágenes
generarLluvia();
