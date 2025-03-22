function updateCountdown() {
    // Recuperar la fecha objetivo del almacenamiento local, si está disponible
    let targetDate = localStorage.getItem('targetDate');

    // Si no hay una fecha objetivo almacenada o si la fecha es inválida, establecer una nueva fecha objetivo
    if (!targetDate || isNaN(new Date(targetDate))) {
        targetDate = new Date(); // Fecha actual
        targetDate.setDate(targetDate.getDate() + 1); // Sumar 4 días
        targetDate.setHours(19); // Establecer las horas a 19:00
        targetDate.setMinutes(38); // Establecer los minutos a 38
        targetDate.setSeconds(26); // Establecer los segundos a 26
        localStorage.setItem('targetDate', targetDate);
    } else {
        targetDate = new Date(targetDate); // Convertir la fecha almacenada de cadena a objeto de fecha
    }

    const daysElement = document.getElementById('days').querySelector('.value');
    const hoursElement = document.getElementById('hours').querySelector('.value');
    const minutesElement = document.getElementById('minutes').querySelector('.value');
    const secondsElement = document.getElementById('seconds').querySelector('.value');

    // Función para actualizar el contador
    function update() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }

    // Actualizar el contador inicialmente
    update();

    // Actualizar el contador cada segundo
    setInterval(update, 1000);
}

updateCountdown();

// FIN DE EL TIEMPO DE LA INTERFAZ



// Función para manejar la copia y el cambio de texto
function setupCopyButton(buttonId, textToCopy) {
    const button = document.getElementById(buttonId); // Selecciona el botón por su ID
    if (!button) return; // Si el botón no existe, salir

    const originalText = button.querySelector('span').textContent; // Guarda el texto original

    button.addEventListener('click', function() {
        // Copiar el texto al portapapeles usando la API moderna
        navigator.clipboard.writeText(textToCopy).then(function() {
            // Cambiar el texto del botón
            button.querySelector('span').textContent = "Copied to clipboard";

            // Restaurar el texto original después de 3 segundos
            setTimeout(function() {
                button.querySelector('span').textContent = originalText;
            }, 1500); // 3000 milisegundos = 3 segundos
        }).catch(function(err) {
            console.error('Error al copiar el texto: ', err);
        });
    });
}

// Configurar cada botón con su texto correspondiente
setupCopyButton('copyaddress1', '0x3410e7957A46121AfDdA8Ddcc8f890a774795eF7');
setupCopyButton('copyaddress2', '6f8KvBn4Tk1Su5qmLYT5K3XYnWcLCLjRojW63rBmYYfH');
setupCopyButton('copyaddress3', 'bc1qu4c3x6exxy2cakw4fgnvx59v35znfhrv7u4fgj');
setupCopyButton('copyaddress4', '');
setupCopyButton('copyaddress5', '');





// Cambiar el contenido de los elementos con ID direccion-1, direccion-2 y direccion-3
document.getElementById('direccion-1').textContent = '0x3410e7957A46121AfDdA8Ddcc8f890a774795eF7';
document.getElementById('direccion-2').textContent = '6f8KvBn4Tk1Su5qmLYT5K3XYnWcLCLjRojW63rBmYYfH';
document.getElementById('direccion-3').textContent = 'bc1qu4c3x6exxy2cakw4fgnvx59v35znfhrv7u4fgj';






document.addEventListener('DOMContentLoaded', function() {
   var modal = document.getElementById('qrModal'); // Obtener el modal de QR
   var btns = document.querySelectorAll('.iconmodal'); // Obtener todos los botones con clase .iconmodal

   // Obtener el elemento <span> que cierra el modal
   var span = document.getElementsByClassName('qr-modal-close')[0];

   // Obtener el elemento <img> para mostrar el icono en el modal de QR
   var qrIcon = document.getElementById('qrIcon');

   // Asignar evento clic a cada botón
   btns.forEach(function(btn) {
      btn.onclick = function() {
         var iconSrc = btn.getAttribute('data-icon'); // Obtener la ruta del icono del atributo data-icon del botón
         qrIcon.src = iconSrc; // Establecer la imagen del icono en el modal de QR
         modal.style.display = 'block'; // Mostrar el modal al hacer clic en el botón

         // Cuando se haga clic en <span> (x), cerrar el modal
         span.onclick = function() {
            modal.style.display = 'none';
         }

         // Cuando se haga clic fuera del modal, cerrarlo también
         window.onclick = function(event) {
            if (event.target == modal) {
               modal.style.display = 'none';
            }
         }
      }
   });
});









// BOTONES DE MODALS

// ABRIR MODEL CON CONNECT

document.addEventListener("DOMContentLoaded", function() {
    const connectWalletBtn = document.getElementById('connectwalletBtn');
    const hiddenContent = document.getElementById('hiddenContent');
    
    connectWalletBtn.addEventListener('click', function() {
        // Mostrar la ventana modal
        hiddenContent.style.display = 'block'; // Mostrar el contenido
        // Aquí podrías agregar cualquier otra lógica necesaria, como animaciones o cambios adicionales
    });
});


// BOTON CERRAR modal

document.addEventListener("DOMContentLoaded", function() {
    const closeModalBtn = document.getElementById('closeModalBtn');
    const hiddenContent = document.getElementById('hiddenContent');
    
    closeModalBtn.addEventListener('click', function() {
        hiddenContent.style.display = 'none'; // Oculta el modal al hacer clic en el ícono de cerrar
    });
});


// BOTON DENTRO DEL MODAL

// DIRECT PAYMENTS

document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('openDirectPaymentModal');
    const directPaymentModal = document.getElementById('directpaymentbtn');
    const hiddenModal = document.getElementById('hiddenContent');

    openButton.addEventListener('click', function() {
        // Abrir modal directpaymentbtn
        directPaymentModal.style.display = 'block';
        
        // Cerrar modal hiddenContent si está abierto
        hiddenModal.style.display = 'none';
    });

    // Función para cerrar modal directpaymentbtn
    const closeModalBtn = directPaymentModal.querySelector('#closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            directPaymentModal.style.display = 'none';
        });
    }
});

// SOLANA PAY

document.addEventListener('DOMContentLoaded', function() {
    const openButtonSolana = document.getElementById('openSolanaModal');
    const solanaModal = document.getElementById('solanawalletbtn');
    const hiddenModal = document.getElementById('hiddenContent');

    openButtonSolana.addEventListener('click', function() {
        // Abrir modal solanawalletbtn
        solanaModal.style.display = 'block';
        
        // Cerrar modal hiddenContent si está abierto
        hiddenModal.style.display = 'none';
    });

    // Función para cerrar modal solanawalletbtn
    const closeModalBtnSolana = solanaModal.querySelector('#closeModalBtn');
    if (closeModalBtnSolana) {
        closeModalBtnSolana.addEventListener('click', function() {
            solanaModal.style.display = 'none';
        });
    }
});

// COINBASE PAY

document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('openDogecoinModal'); // Actualizado con el nuevo ID
    const directPaymentModal = document.getElementById('dogecoinwalletbtn');
    const hiddenModal = document.getElementById('hiddenContent');

    openButton.addEventListener('click', function() {
        // Abrir modal directpaymentbtn
        directPaymentModal.style.display = 'block';
        
        // Cerrar modal hiddenContent si está abierto
        hiddenModal.style.display = 'none';
    });

    // Función para cerrar modal directpaymentbtn
    const closeModalBtn = directPaymentModal.querySelector('#closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            directPaymentModal.style.display = 'none';
        });
    }
});

// ALL WALLETS

document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('openAllWalletsModal'); // Actualizado con el nuevo ID
    const directPaymentModal = document.getElementById('allwalletsbtn');
    const hiddenModal = document.getElementById('hiddenContent');

    openButton.addEventListener('click', function() {
        // Abrir modal directpaymentbtn
        directPaymentModal.style.display = 'block';
        
        // Cerrar modal hiddenContent si está abierto
        hiddenModal.style.display = 'none';
    });

    // Función para cerrar modal directpaymentbtn
    const closeModalBtn = directPaymentModal.querySelector('#closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            directPaymentModal.style.display = 'none';
        });
    }
});





// ALL WALLETS BOTONES BUSCADOR


function showQR(button, qrSrc) {
    var qrImage = document.getElementById('qrImage');
    var iconImage = document.getElementById('iconImage');
    var iconSrc = button.querySelector('img').src;

    // Mostrar la imagen y el icono centrado sobre la imagen QR
    qrImage.src = qrSrc || 'assets/interfaz/images/qr/qr.png'; // Imagen QR base si qrSrc no está definido
    qrImage.style.display = 'block';
    
    iconImage.src = iconSrc; // Mostrar la imagen del icono seleccionado
    iconImage.style.display = 'block';

    // Ocultar los botones
    var buttons = document.querySelectorAll('.button-grid .btn');
    buttons.forEach(function(btn) {
        btn.style.display = 'none';
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('openAllWalletsModal'); // Actualizado con el nuevo ID
    const directPaymentModal = document.getElementById('allwalletsbtn');
    const hiddenModal = document.getElementById('hiddenContent');

    openButton.addEventListener('click', function() {
        // Abrir modal directpaymentbtn
        directPaymentModal.style.display = 'block';
        
        // Cerrar modal hiddenContent si está abierto
        hiddenModal.style.display = 'none';
    });

    // Función para cerrar modal directpaymentbtn
    const closeModalBtn = directPaymentModal.querySelector('#closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            directPaymentModal.style.display = 'none';

            // Mostrar los botones nuevamente
            var buttons = document.querySelectorAll('.button-grid .btn');
            buttons.forEach(function(btn) {
                btn.style.display = 'block';
            });

            // Ocultar qrImage
            var qrImage = document.getElementById('qrImage');
            qrImage.style.display = 'none';
        });
    }
});


// Manejar el campo de búsqueda
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const buttons = document.querySelectorAll(".button-grid button");
    const qrImage = document.getElementById('qrImage');

    searchInput.addEventListener("input", function() {
        const searchText = searchInput.value.toLowerCase();

        // Ocultar la imagen del QR cuando se escribe en el campo de búsqueda
        qrImage.style.display = 'none';

        buttons.forEach(button => {
            const buttonSpan = button.querySelector("span");
            const buttonText = buttonSpan.textContent.toLowerCase();

            if (buttonText.includes(searchText)) {
                button.style.display = "flex"; // Mostrar botón si coincide con la búsqueda
            } else {
                button.style.display = "none"; // Ocultar botón si no coincide
            }
        });
    });
});




// FIN BOTONES DE MODALS


// NO MOSTRAR ICONOS CARGANDO
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el contenedor de la interfaz de pago
    var purchaseInterface = document.querySelector('.purchase-interface');
    // Muestra el contenedor de la interfaz de pago
    purchaseInterface.style.display = 'block';
 });
// FIN NO MOSTRAR ICONOS CARGANDO

function comprarTokens() {
    var tokenInput = document.getElementById('tokenInput').value;
  }
  
  // Adding event listener for changes in the input field
  document.getElementById('tokenInput').addEventListener('input', comprarTokens);
  
  function copiarDireccion() {
    var direccion = document.getElementById("direccion");
    var range = document.createRange();
    range.selectNode(direccion);
    window.getSelection().removeAllRanges(); // Limpiar cualquier selección previa
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // Limpiar después de copiar
  
    // Mostrar el texto "Copied" temporalmente
    var copiedText = document.getElementById("copiedText");
    copiedText.style.display = "inline";
    setTimeout(function() {
       copiedText.style.display = "none";
    }, 1000); // Ocultar después de 1 segundo
  }
  







  
  // Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el modal y el botón de cerrar
    var modals = document.getElementById('browserWalletModal');
    var closesButton = document.querySelector('.closes'); // Usamos querySelector para seleccionar por clase

    // Agrega evento de clic al botón de cerrar
    closesButton.addEventListener('click', function() {
        modals.style.display = 'none'; // Oculta el modal al hacer clic en el botón de cerrar
    });
});



// Función para copiar la dirección especificada por su ID
function copiarDireccion(id) {
    // Seleccionar el elemento que contiene la dirección
    var direccion = document.getElementById(id);
 
    // Obtener el texto original de la dirección
    var direccionOriginal = direccion.textContent;

    // Crear un campo de texto auxiliar para copiar el texto
    var aux = document.createElement("input");
    aux.setAttribute("value", direccionOriginal);
    document.body.appendChild(aux);
 
    // Seleccionar el texto en el campo auxiliar
    aux.select();
 
    // Copiar el texto seleccionado
    document.execCommand("copy");
 
    // Remover el campo auxiliar
    document.body.removeChild(aux);
 
    // Mostrar el texto "Copied" temporalmente
    direccion.textContent = "Copied to clipboard";
    setTimeout(function() {
       direccion.textContent = direccionOriginal;
    }, 2000); // Volver al texto original después de 2 segundos
}

// Manejar el clic en cada ícono de copiar
document.querySelectorAll(".copy-icon").forEach(function(icon, index) {
   icon.addEventListener("click", function() {
      copiarDireccion('direccion-' + (index + 1));
   });
});

// Manejar el clic en cada dirección para copiar
document.querySelectorAll('[id^="direccion-"]').forEach(function(direccion) {
   direccion.addEventListener("click", function() {
      copiarDireccion(direccion.id);
   });
});



          // SUMA DE $

// Función para generar un número aleatorio en un rango
    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
      }
  
      // Función para actualizar el valor progresivo y el tiempo de espera
      function updateValue() {
        let currentValue = parseFloat(localStorage.getItem('usdt-raised')) || 1936512.52; // Valor inicial
        const targetValue = 600000000.00; // Valor objetivo
        const increment = getRandomNumber(23.48, 218.13); // Incremento aleatorio
  
        // Incrementar el valor actual
        const newValue = Math.min(currentValue + increment, targetValue);
  
        // Actualizar el texto con formato de moneda
        document.getElementById('usdt-raised').innerText = '$' + newValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        
        // Guardar el nuevo valor en el almacenamiento local
        localStorage.setItem('usdt-raised', newValue);
        
        // Si no hemos alcanzado el valor objetivo, programar la próxima actualización
        if (newValue < targetValue) {
          setTimeout(updateValue, getRandomNumber(1100, 2330));
        }
      }
  
      // Llamar a la función inicialmente para comenzar la cuenta progresiva
      updateValue();

          // FIN SUMA DE $


// Seleccionar los elementos del DOM
const bnbInput = document.getElementById('bnbInput');
const tokenInput = document.getElementById('tokenInput');

// Función para eliminar comas y convertir a número
function removeCommas(value) {
    return parseFloat(value.replace(/,/g, ''));
}

// Función para agregar comas como separadores de miles
function addCommas(number) {
    return number.toLocaleString('en-US');
}

// Agregar event listener para el campo bnbInput
bnbInput.addEventListener('input', function () {
    // Obtener el valor ingresado en bnbInput y eliminar comas
    let usdValue = removeCommas(this.value);

    // Verificar si el valor es un número válido
    if (!isNaN(usdValue)) {
        // Convertir USD a $reci (1 USD = 10000 $reci)
        let tkValue = usdValue * 7692308;
        // Formatear el valor con comas y actualizar el campo tokenInput
        tokenInput.value = addCommas(tkValue);
    } else {
        // Si no es un número válido, limpiar el campo tokenInput
        tokenInput.value = '';
    }
});

// Agregar event listener para el campo tokenInput
tokenInput.addEventListener('input', function () {
    // Obtener el valor ingresado en tokenInput y eliminar comas
    let tkValue = removeCommas(this.value);

    // Verificar si el valor es un número válido
    if (!isNaN(tkValue)) {
        // Convertir $reci a USD (10000 $reci = 1 USD)
        let usdValue = tkValue / 7692308;
        // Formatear el valor con comas y actualizar el campo bnbInput
        bnbInput.value = usdValue; // No agregamos comas aquí para evitar problemas
    } else {
        // Si no es un número válido, limpiar el campo bnbInput
        bnbInput.value = '';
    }
});



