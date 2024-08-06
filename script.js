document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector("#toggle-btn");
    const themeToggleBtn = document.querySelector("#theme-toggle-btn");
    const body = document.body;

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("closed");
    });

    themeToggleBtn.addEventListener("click", () => {
        if (body.getAttribute("data-theme") === "dark") {
            body.setAttribute("data-theme", "light");
            themeToggleBtn.innerHTML = "<i class='bx bx-moon icon'></i><span class='text'>Dark Mode</span>";
        } else {
            body.setAttribute("data-theme", "dark");
            themeToggleBtn.innerHTML = "<i class='bx bx-sun icon'></i><span class='text'>Light Mode</span>";
        }
    });
});
document.getElementById('toggle-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('closed');
});

document.getElementById('theme-toggle-btn').addEventListener('click', function() {
    document.body.toggleAttribute('data-theme', 'dark');
});

document.getElementById('live-chat-btn').addEventListener('click', function() {
    if (typeof drift !== 'undefined') {
        drift.show(); // Show Drift chat widget
    }
});






