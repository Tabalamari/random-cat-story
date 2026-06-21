// Anchor navigation

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

// Select all images in the gallery section:
const galleryImages =
    document.querySelectorAll(".gallery__item img");

const lightbox =
    document.querySelector(".lightbox");

const lightboxImage =
    document.querySelector(".lightbox__image");

const lightboxClose =
    document.querySelector(".lightbox__close");

// Opening full-screen image view
galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
    });

});

// Closing full-screen image view
lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

// Close on overlay click
lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});

// // Close on ESC key

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }

});


// fade-in on scroll
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.2
    }
);

fadeElements.forEach(element => {
    observer.observe(element);
});
// unobserve
if (entry.isIntersecting) {
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
}

// 
const form = document.querySelector("#contact-form");

form.addEventListener("submit", event => {

    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const message = document.querySelector("#message").value.trim();
    const email = document.querySelector("#email").value.trim();

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (message === "") {
        alert("Please enter a message");
        return;
    }
    alert("Message sent successfully!");

    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return;
    }

});



