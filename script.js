// ================================
// DARK / LIGHT MODE
// ================================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    // Check saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";

        }

    });
}


// ================================
// CONTACT FORM VALIDATION
// ================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");


        // Name validation

        if (name.length < 2) {

            formMessage.textContent =
                "❌ Please enter your name.";

            formMessage.style.color = "red";

            return;
        }


        // Email validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "❌ Please enter a valid email address.";

            formMessage.style.color = "red";

            return;
        }


        // Phone validation

        if (phone.length < 10) {

            formMessage.textContent =
                "❌ Please enter a valid phone number.";

            formMessage.style.color = "red";

            return;
        }


        // Subject validation

        if (subject.length < 3) {

            formMessage.textContent =
                "❌ Please enter a subject.";

            formMessage.style.color = "red";

            return;
        }


        // Message validation

        if (message.length < 10) {

            formMessage.textContent =
                "❌ Message must contain at least 10 characters.";

            formMessage.style.color = "red";

            return;
        }


        // Success message

        formMessage.textContent =
            "✅ Thank you! Your message has been submitted successfully.";

        formMessage.style.color = "#168552";


        // Clear form

        contactForm.reset();

    });

}


// ================================
// CURRENT YEAR
// ================================

const yearElements =
    document.querySelectorAll(".current-year");

yearElements.forEach(function (element) {

    element.textContent =
        new Date().getFullYear();

});