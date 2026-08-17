const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove("active");
    }
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
const languageToggle = document.getElementById("language-toggle");

let english = false;

languageToggle.addEventListener("click", () => {
    english = !english;

    if (english) {
        languageToggle.textContent = "🇺🇸 EN";

        document.querySelector('a[href="#inicio"]').textContent = "Home";
        document.querySelector('a[href="#sobre-mi"]').textContent = "About me";
        document.querySelector('a[href="#experiencia"]').textContent = "Experience";
        document.querySelector('a[href="#proyectos"]').textContent = "Projects";
        document.querySelector('a[href="#habilidades"]').textContent = "Skills";
        document.querySelector('a[href="#contacto"]').textContent = "Contact";

        document.querySelector(".saludo").textContent = "Hello, I am";
        document.querySelector(".hero-content h2").textContent = "Systems Engineering Student";
    } else {
        languageToggle.textContent = "🇪🇸 ES";

        document.querySelector('a[href="#inicio"]').textContent = "Inicio";
        document.querySelector('a[href="#sobre-mi"]').textContent = "Sobre mí";
        document.querySelector('a[href="#experiencia"]').textContent = "Experiencia";
        document.querySelector('a[href="#proyectos"]').textContent = "Proyectos";
        document.querySelector('a[href="#habilidades"]').textContent = "Habilidades";
        document.querySelector('a[href="#contacto"]').textContent = "Contacto";

        document.querySelector(".saludo").textContent = "Hola, soy";
        document.querySelector(".hero-content h2").textContent = "Estudiante de Ingeniería en Sistemas";
    }
});
