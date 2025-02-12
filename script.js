document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = localStorage.getItem("darkMode") === "true" ? "☀️ Light Mode" : "🌙 Dark Mode";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.top = "10px";
    darkModeToggle.style.right = "10px";
    darkModeToggle.style.padding = "10px";
    darkModeToggle.style.background = "#ff7200";
    darkModeToggle.style.color = "#fff";
    darkModeToggle.style.border = "none";
    darkModeToggle.style.borderRadius = "5px";
    darkModeToggle.style.cursor = "pointer";
    document.body.appendChild(darkModeToggle);

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDark);
        darkModeToggle.innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    }

    darkModeToggle.addEventListener("click", toggleDarkMode);

    // Preserve Dark Mode setting
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the form from actually submitting

        // Simulate a form submission success message
        document.getElementById("formMessage").style.display = "block";

        // Clear the form fields after submission
        form.reset();
    });
    // Scroll Animations (Reveal sections on scroll)
    const sections = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Initial check
    function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    let mailtoLink = `mailto:aayushipuri03@gmail.com?subject=Website Inquiry&body=Hello,%0D%0AMy Name: ${encodeURIComponent(name)}%0D%0AMy Email: ${encodeURIComponent(email)}%0D%0AMessage: ${encodeURIComponent(message)}`;

    document.getElementById("emailLink").setAttribute("href", mailtoLink);
    document.getElementById("emailLink").click();
    }
    // Smooth Scrolling for Navigation Links
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
