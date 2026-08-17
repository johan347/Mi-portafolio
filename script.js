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
        document.querySelector('#experiencia .section-title p').textContent = "MY JOURNEY";
document.querySelector('#experiencia h3').textContent = "Education and experience";
document.querySelector('#experiencia h4').textContent = "Academic development and projects";
document.querySelector('#experiencia .experience-card p').textContent =
    "During my training as a Systems Engineering student, I have participated in different projects and practices related to programming, web development, data structures, systems and virtualization technologies.";
        document.querySelector('a[href="#proyectos"]').textContent = "Projects";
        document.querySelector('a[href="#habilidades"]').textContent = "Skills";
        document.querySelector('a[href="#contacto"]').textContent = "Contact";

        document.querySelector(".saludo").textContent = "Hello, I am";
document.querySelector(".saludo").textContent = "Hello, I am";
document.querySelector(".hero-content h2").textContent = "Systems Engineering Student";

document.querySelector("#inicio .hero-content p:not(.saludo)").textContent =
    "Welcome to my personal portfolio. Here you can learn more about me, my experience, my projects and the skills I have developed.";

document.querySelector('#inicio .btn[href="#sobre-mi"]').textContent =
    "Get to know me";

document.querySelector('#inicio .btn[href="#contacto"]').textContent =
    "Contact me";

    document.querySelector("#sobre-mi .section-title p").textContent = "ABOUT ME";
document.querySelector("#sobre-mi .section-title h2").textContent = "About me";

document.querySelectorAll("#sobre-mi .about-content p")[0].textContent =
    "I am Johan Pichardo, a Systems Engineering student passionate about technology and the development of digital solutions. I am interested in continuing to learn, improving my skills and turning my ideas into projects that can provide real solutions.";

document.querySelectorAll("#sobre-mi .about-content p")[1].textContent =
    "During my academic training, I have had the opportunity to work on different projects involving programming, web development, data structures, systems and virtual environment administration. Each project has allowed me to acquire new knowledge and continue preparing for my professional future.";
        document.querySelector('#experiencia .section-title p').textContent = "MI TRAYECTORIA";
document.querySelector('#experiencia h3').textContent = "Formación y experiencia";
document.querySelector('#experiencia h4').textContent = "Desarrollo académico y proyectos";
document.querySelector('#experiencia .experience-card p').textContent =
    "Durante mi formación como estudiante de Ingeniería en Sistemas he participado en diferentes proyectos y prácticas relacionadas con programación, desarrollo web, estructuras de datos, sistemas y tecnologías de virtualización.";
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

    document.querySelector("#inicio .hero-content p:not(.saludo)").textContent =
        "Bienvenido a mi portafolio personal. Aquí podrás conocer más sobre mí, mi experiencia, mis proyectos y las habilidades que he desarrollado.";

    document.querySelector('#inicio .btn[href="#sobre-mi"]').textContent =
        "Conóceme";

    document.querySelector('#inicio .btn[href="#contacto"]').textContent =
        "Contáctame";
document.querySelector('#inicio .btn[href="#sobre-mi"]').textContent =
    "Get to know me";

document.querySelector('#inicio .btn[href="#contacto"]').textContent =
    "Contact me";

    document.querySelector("#sobre-mi .section-title p").textContent = "CONÓCEME";
document.querySelector("#sobre-mi .section-title h2").textContent = "Sobre mí";

document.querySelectorAll("#sobre-mi .about-content p")[0].textContent =
    "Soy Johan Pichardo, estudiante de Ingeniería en Sistemas, apasionado por la tecnología y el desarrollo de soluciones digitales. Me interesa seguir aprendiendo, mejorar mis habilidades y convertir mis ideas en proyectos que puedan aportar soluciones reales.";

document.querySelectorAll("#sobre-mi .about-content p")[1].textContent =
    "Durante mi formación académica he tenido la oportunidad de trabajar en diferentes proyectos de programación, desarrollo web, estructuras de datos, sistemas y administración de entornos virtuales. Cada proyecto me ha permitido adquirir nuevos conocimientos y seguir preparándome para mi futuro profesional.";
    }
});
