// ejemplo.js

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los elementos del navbar
    const navbarItems = document.querySelectorAll('.navbar-item');
    // Seleccionamos todas las secciones
    const sections = document.querySelectorAll('.seccion');

    // Iteramos sobre cada elemento del navbar
    navbarItems.forEach(item => {
        item.addEventListener('click', () => {
            // Ocultamos todas las secciones
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Obtenemos la sección correspondiente del atributo data-section
            const sectionId = item.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);

            // Mostramos la sección correspondiente
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Mostrar la primera sección por defecto (opcional)
    const defaultSection = document.getElementById('SobreMi-container');
    if (defaultSection) {
        defaultSection.classList.add('active');
    }
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }

// Variables para los botones y el menú
const abrirMenu = document.getElementById('abrir');
const cerrarMenu = document.getElementById('cerrar');
const navbar = document.getElementById('navbar');

// Función para abrir el menú
abrirMenu.addEventListener('click', function() {
    navbar.classList.add('open'); // Añade la clase open al navbar
    abrirMenu.style.display = 'none'; // Oculta el botón de hamburguesa
});

// Función para cerrar el menú
cerrarMenu.addEventListener('click', function() {
    navbar.classList.remove('open'); // Elimina la clase open del navbar
    abrirMenu.style.display = 'block'; // Muestra el botón de hamburguesa
});

// Opciones del menú para cerrar el menú automáticamente
document.querySelectorAll('.navbar-item').forEach(item => {
    item.addEventListener('click', function() {
        navbar.classList.remove('open'); // Cierra el menú
        abrirMenu.style.display = 'block'; // Muestra el botón de hamburguesa
    });
});
