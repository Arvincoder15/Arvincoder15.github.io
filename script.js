document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Function to toggle dark mode
    function toggleDarkMode() {
        body.classList.toggle("dark-mode");

        // Save user preference in localStorage
        const mode = body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme", mode);
    }

    // Add event listener for button click
    toggle.addEventListener("click", toggleDarkMode);

    // Load saved theme preference from localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }
});
