window.addEventListener("scroll", onscroll);

function onscroll() {
	showBackToTopButtonOnScroll();
}

function openMenu() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.style.display = "flex";
	const openmenu = document.querySelector(".open-menu");
	openmenu.style.display = "none";
	const closemenu = document.querySelector(".close-menu");
	closemenu.style.display = "flex";
}

function closeMenu() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.style.display = "none";
	const openmenu = document.querySelector(".open-menu");
	openmenu.style.display = "flex";
	const closemenu = document.querySelector(".close-menu");
	closemenu.style.display = "none";
}

function showBackToTopButtonOnScroll() {
	if (scrollY > window.innerHeight - 50) {
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
	`#home, #home h1, #home p, #home button, #home .imgElement img, #services, #services h2, #services img, #services h3, #services p, #gallery, #gallery h2, #gallery .gallery-images, #gallery .gallery-images img-box, #message, #banner, #contact, #contact label, #contact input, #contact textarea, #contact button, #footer`
);

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const mess = document.getElementById("mess");
// const subject = document.getElementById("subject");

function sendEmail() {
	const bodyMessage = `
	Nome: ${fullName.value}<br> 
	Email: ${email.value}<br> 
	Telefone: ${phone.value}<br> 
	Mensagem: ${mess.value}`;

	Email.send({
		Host: "smtp.elasticemail.com",
		Username: "castanhostecnologia@gmail.com",
		Password: "DF86D4A6BFAB21EAFD0DF782FEBB65F7428D",
		To: "castanhostecnologia@gmail.com",
		From: "castanhostecnologia@gmail.com",
		Subject: "Novo Cliente",
		Body: bodyMessage,
	}).then((message) => {
		if (message == "OK") {
			Swal.fire({
				title: "Bom trabalho!",
				text: "Mensagem enviada com sucesso!",
				icon: "success",
			});
		}
	});
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	sendEmail();

	form.reset();
	return false;
});

 