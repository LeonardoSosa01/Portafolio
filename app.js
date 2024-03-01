// ACTIVIDAD DOM con javascript
// Primer punto imagen, cambia cuando pases el mouse
function change1() {
  document.getElementById("img1").src = "./images/mujermain2.png";
}

function change2() {
  document.getElementById("img1").src = "./images/mujermain.png";
}

// Segundo punto, agregar ver mas, mas texto y dos botones, un exit y un link al repo
document.addEventListener("click", function () {
  const saberMasBtns = document.querySelectorAll(".saber-mas-btn");
  const overlayCloseBtns = document.querySelectorAll(".cerrar-btn");
  const overlayContainers = document.querySelectorAll(".overlay-myporta");

  saberMasBtns.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      overlayContainers[index].style.display = "block";
      btn.style.display = "none";
    });
  });

  overlayCloseBtns.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      overlayContainers[index].style.display = "none";
      saberMasBtns[index].style.display = "block";
    });
  });
});

//tercer punto,Mensaje de "Enviado con éxito" en el formulario
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-contacto");
  const enviarBtn = document.getElementById("enviar-formu-btn");
  const mensajeExito = document.getElementById("mensaje-exito");

  enviarBtn.addEventListener("click", function () {
    mensajeExito.style.display = "block";
  });
});

// cuarto punto, hacer un slider en what i do
document.addEventListener("DOMContentLoaded", function () {
  const cardsRow = document.querySelector(".cards-fila");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let cartaActual = 0;

  prevBtn.addEventListener("click", function () {
    moveSlider(-1);
  });

  nextBtn.addEventListener("click", function () {
    moveSlider(1);
  });

  function moveSlider(direction) {
    const cardWidth = document.querySelector(".card").offsetWidth;
    cartaActual += direction;

    if (cartaActual >= cardsRow.children.length) {
      cartaActual = 0;
    } else if (cartaActual < 0) {
      cartaActual = cardsRow.children.length - 1;
    }

    const translateValue = -cartaActual * cardWidth;
    cardsRow.style.transform = `translateX(${translateValue}px)`;
  }
});
