
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


// ================= LIGHTBOX SYSTEM =================

let images = [];
let currentIndex = 0;

// OPEN SINGLE IMAGE
function openLightbox(img) {

    const project = img.closest(".project");

    images = Array.from(project.querySelectorAll(".project-gallery img"));

    if (images.length === 0) {
        alert("No images in gallery!");
        return;
    }

    currentIndex = 0;

    document.getElementById("lightbox").style.display = "flex";

    updateImage();
}


// ⭐ OPEN FULL GALLERY (VIEW MORE BUTTON)
function openProjectGallery(btn) {

    const project = btn.closest(".project");

    images = Array.from(project.querySelectorAll(".project-gallery img"));

    if (images.length === 0) {
        alert("No images found!");
        return;
    }

    currentIndex = 0;

    document.getElementById("lightbox").style.display = "flex";

    updateImage();
}


// UPDATE IMAGE
function updateImage() {
    document.getElementById("lightbox-img").src = images[currentIndex].src;
}


// NEXT IMAGE
function nextImage(event) {
    event.stopPropagation();

    currentIndex = (currentIndex + 1) % images.length;

    updateImage();
}


// PREVIOUS IMAGE
function prevImage(event) {
    event.stopPropagation();

    currentIndex = (currentIndex - 1 + images.length) % images.length;

    updateImage();
}


// CLOSE LIGHTBOX
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}


// CLICK OUTSIDE TO CLOSE
function outsideClick(event) {
    if (event.target.id === "lightbox") {
        closeLightbox();
    }
}