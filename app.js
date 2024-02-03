// ACTIVIDAD DOM con javascript
// Primer punto imagen, cambia cuando pases el mouse
function change1() {
  document.getElementById("img1").src = "/images/mujermain2.png";
}

function change2() {
  document.getElementById("img1").src = "/images/mujermain.png";
}

// Segundo punto, agregar ver mas, mas texto y dos botones, un exit y un link al repo
document.addEventListener("DOMContentLoaded", function () {
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
  const cardsRow = document.querySelector(".cards-row");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  prevBtn.addEventListener("click", function () {
    moveSlider(-1);
  });

  nextBtn.addEventListener("click", function () {
    moveSlider(1);
  });

  function moveSlider(direction) {
    const cardWidth = document.querySelector(".card").offsetWidth;
    currentIndex += direction;

    // Verifica si ha llegado al final o al principio del slider
    if (currentIndex >= cardsRow.children.length) {
      currentIndex = 0; // Vuelve a la primera tarjeta
    } else if (currentIndex < 0) {
      currentIndex = cardsRow.children.length - 1; // Va a la última tarjeta
    }

    const translateValue = -currentIndex * cardWidth;
    cardsRow.style.transform = `translateX(${translateValue}px)`;
  }
});
