document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    const themeIcon = document.getElementById('theme-icon');
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.src = 'assets/moon.png';
        themeIcon.alt = 'Dark Theme';
    } else {
        themeIcon.src = 'assets/sun.png';
        themeIcon.alt = 'Light Theme';
    }
});

// Obtén todas las imágenes con la clase "about-me-image"
var images = document.getElementsByClassName('about-me-image');
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

// Función para abrir el modal
function openModal(img) {
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

// Función para cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Agrega un evento de clic a cada imagen
for (var i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    openModal(this);
  }
}