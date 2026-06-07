// ================= THEME TOGGLE (WITH SAVE) =================

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Get saved theme
let isLight = localStorage.getItem("theme") === "light";

// Apply saved theme on load
if (isLight) {
    body.classList.add("light");
    toggleBtn.textContent = "☀️";
} else {
    body.classList.remove("light");
    toggleBtn.textContent = "🌙";
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");

    isLight = body.classList.contains("light");

    if (isLight) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});


// ================= HAMBURGER MENU =================
function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("show");
}

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector("nav ul").classList.remove("show");
    });
});

// ================= LIGHTBOX =================
let images = [];
let currentIndex = 0;

function openLightbox(img) {
    images = Array.from(img.closest(".project-images").querySelectorAll("img"));
    currentIndex = images.indexOf(img);

    document.getElementById("lightbox").style.display = "flex";
    updateImage();
}

function updateImage() {
    document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function nextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function outsideClick(event) {
    if (event.target.id === "lightbox") {
        closeLightbox();
    }
}