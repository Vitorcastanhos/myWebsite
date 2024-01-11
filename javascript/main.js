window.addEventListener("scroll", onscroll);

function onscroll() {
   showBackToTopButtonOnScroll();
}

function openMenu() {
   const sidebar = document.querySelector(".sidebar");
   sidebar.style.display = "flex";
}

function closeMenu() {
   const sidebar = document.querySelector(".sidebar");
   sidebar.style.display = "none";
}

function showBackToTopButtonOnScroll() {
   if (scrollY > window.innerHeight - 100) {
      backToTopButton.classList.add("show");
   } else {
      backToTopButton.classList.remove("show");
   }
}

ScrollReveal({
   origin: "top",
   distance: "30px",
   duration: "600",
   reset: true,
}).reveal(
   `#home, #home h1, #home p, #home button, #home .imgElement img, #services, #services h2, #services img, #services h3, #services p, #gallery, #gallery h2, #gallery img, #message, #banner, #contact, #contact label, #contact input, #contact textarea, #contact button, #footer`
);
