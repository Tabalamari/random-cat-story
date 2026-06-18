document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".header__nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Lightbox

// Знаходимо всі картинки Gallery:
const galleryImages =
    document.querySelectorAll(".gallery__item img");

const lightbox =
    document.querySelector(".lightbox");

const lightboxImage =
    document.querySelector(".lightbox__image");

const lightboxClose =
    document.querySelector(".lightbox__close");

// Відкриття
galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
    });

});

// Закриття
lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

// Закриття по кліку на фон
lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});

// Закриття клавішею ESC

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }

});