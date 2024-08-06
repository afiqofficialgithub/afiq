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


document.addEventListener('DOMContentLoaded', function() {
    // Automatically show the Drift chat widget
    if (typeof drift !== 'undefined') {
        drift.on('ready', function() {
            drift.show();
        });
    }

    // Function to show the corresponding page and hide others
    window.showPage = function(pageId) {
        var pages = document.querySelectorAll('.page');
        pages.forEach(function(page) {
            page.style.display = 'none';
        });
        document.getElementById(pageId).style.display = 'block';
    };

    // Default page to show
    showPage('home');
});





