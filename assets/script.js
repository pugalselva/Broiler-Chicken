
// Dynamic Year
document.getElementById("year").textContent =
    new Date().getFullYear();


// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const product = document.getElementById("product").value;
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");

    // Validation
    if (!name || !phone || !product) {
        formMessage.textContent = "Please fill all required fields.";
        formMessage.style.color = "red";
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        formMessage.textContent = "Enter a valid 10-digit phone number.";
        formMessage.style.color = "red";
        return;
    }

    // WhatsApp Enquiry
    const whatsappNumber = "91XXXXXXXXXX";

    const whatsappMessage =
        `Hello FreshFarm!

Name: ${name}
Phone: ${phone}
Product: ${product}
Message: ${message}`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

    formMessage.textContent = "Your WhatsApp enquiry is ready!";
    formMessage.style.color = "green";

    contactForm.reset();
});


// Mobile Navbar Close
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const navbar = document.getElementById("navbarNav");

        const bsCollapse =
            bootstrap.Collapse.getInstance(navbar);

        if (bsCollapse) {
            bsCollapse.hide();
        }
    });

});
