// Sidebar Toggle Functionality
let sidebar = document.querySelector(".sidebar");
let toggleBtn = document.querySelector("#toggle-btn");
toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

// Dynamic Content Loading
let contentArea = document.getElementById("content");

function loadContent(contentId) {
    let content = "";

    switch (contentId) {
        case "home":
            content = `
                <section class="page home-section" id="home">
            <div class="home-bg"></div>
            <div class="home-content">
    <div class="text-container">
        <!-- Add your picture here -->
        <div class="welcome-section">
            <img src="./img/image.png" alt="Your Picture" class="welcome-picture">
            <div class="welcome-text-container">
                <h1 class="welcome-text">Welcome to <span class="highlight">AFIQ CODING LAB</span></h1>
                <h2 class="dis">Your Destination for <span class="typing">Innovative Solutions</span></h2>
            </div>
        <div class="cta-buttons">
    <a href="#contact" class="cta-btn">Get in Touch</a>
    <a href="#projects" class="cta-btn">Explore Projects</a>
</div>
<div class="social-icons">
    <a href="https://facebook.com" target="_blank"><i class='bx bxl-facebook'></i></a>
    <a href="https://wa.me/your-number" target="_blank"><i class='bx bxl-whatsapp'></i></a>
    <a href="https://linkedin.com/in/your-profile" target="_blank"><i class='bx bxl-linkedin'></i></a>
</div>
    </div>
</div>

            </div>
        </section>
            `;
            break;
        case "about":
            content = `
                <h1>About Us</h1>
                <p>Learn more about AFIQ CODING LAB and what we do.</p>
            `;
            break;
        case "skills":
            content = `
                <h1>Our Skills</h1>
                <p>Explore the skills we offer in coding and development.</p>
            `;
            break;
        case "projects":
            content = `
                <h1>Projects</h1>
                <p>Take a look at some of our recent projects.</p>
            `;
            break;
        case "contact":
            content = `
                <h1>Contact Us</h1>
                <p>Get in touch with AFIQ CODING LAB.</p>
            `;
            break;
        default:
            content = "<h1>Page Not Found</h1>";
    }

    contentArea.innerHTML = content;
}

// Attach event listeners to menu items
let menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach(item => {
    item.addEventListener("click", function () {
        loadContent(item.id);
    });
});

// Default content load (Home page)
loadContent("home");

// Theme Toggle Functionality
let themeToggleBtn = document.getElementById("theme-toggle-btn");
let body = document.body;
let themeIcon = themeToggleBtn.querySelector(".icon");
let themeText = themeToggleBtn.querySelector(".text");

themeToggleBtn.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "dark") {
        body.removeAttribute("data-theme");
        themeIcon.classList.replace('bx-sun', 'bx-moon');
       
    } else {
        body.setAttribute("data-theme", "dark");
        themeIcon.classList.replace('bx-moon', 'bx-sun');
        
    }
});
