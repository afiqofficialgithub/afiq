document.addEventListener("DOMContentLoaded", () => {
    // Sidebar Toggle Functionality
    let sidebar = document.querySelector(".sidebar");
    let toggleBtn = document.querySelector("#toggle-btn");
    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        sidebar.classList.toggle("closed");
    });

    // Dynamic Content Loading
    let contentArea = document.getElementById("content");
    let loadingIndicator = document.getElementById("loading-indicator");

    function loadContent(contentId) {
        if (loadingIndicator) {
            loadingIndicator.style.display = "block"; // Show loading indicator
        }
        
        let content = "";

        switch (contentId) {
            case "home":
                content = `
                    <section class="page home-section" id="home">
                        <div class="home-bg"></div>
                        <div class="home-content">
                            <div class="text-container">
                                <div class="welcome-section">
                                    <img src="image.png" alt="Your Picture" class="welcome-picture">
                                    <div class="welcome-text-container">
                                        <h1 class="welcome-text">Welcome to <span class="highlight">AFIQ CODING LAB</span></h1>
                                        <h2 class="dis">AFIQ CODING LAB <span class="typing">AFIQ CODING LAB</span></h2>
                                    </div>
                                    <div class="cta-buttons">
                                        <a href="#contact" class="cta-btn">button 01</a>
                                        <a href="#projects" class="cta-btn">button 02</a>
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
                     <section class="page about-section" id="about">
                        <div class="about-content">
                            <div class="team-intro">
                                <h1>About Us</h1>
                                <p>Welcome to AFIQ CODING LAB! We specialize in crafting innovative coding solutions that drive success.</p>
                            </div>
                            <div class="mission-statement">
                                <h2>Our Mission</h2>
                                <p>Our mission is to deliver top-notch coding services that exceed client expectations and foster technological advancement.</p>
                            </div>
                            <div class="team">
                                <h2>Meet the Team</h2>
                                <div class="team-members">
                                    <div class="team-member">
                                        <img src="image.png" alt="Team Member 1" class="team-member-picture">
                                        <h3>John Doe</h3>
                                        <p>Lead Developer</p>
                                    </div>
                                    <div class="team-member">
                                        <img src="image.png" alt="Team Member 2" class="team-member-picture">
                                        <h3>Jane Smith</h3>
                                        <p>UI/UX Designer</p>
                                    </div>
                                    <div class="team-member">
                                        <img src="image.png" alt="Team Member 3" class="team-member-picture">
                                        <h3>Alex Johnson</h3>
                                        <p>Project Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div class="milestones">
                                <h2>Our Milestones</h2>
                                <ul>
                                    <li><strong>2024:</strong> Launched our new website with enhanced features.</li>
                                    <li><strong>2023:</strong> Expanded our team with top industry talent.</li>
                                    <li><strong>2022:</strong> Completed 100+ successful projects.</li>
                                    <li><strong>2021:</strong> Reached 1,000+ satisfied clients.</li>
                                </ul>
                            </div>
                            <div class="testimonials">
                                <h2>Client Testimonials</h2>
                                <div class="testimonial">
                                    <p>"AFIQ CODING LAB delivered exceptional results for our project. Their attention to detail and expertise are unparalleled!" - Client A</p>
                                </div>
                                <div class="testimonial">
                                    <p>"Working with AFIQ CODING LAB was a game-changer for our business. Highly recommend their services!" - Client B</p>
                                </div>
                                <div class="testimonial">
                                    <p>"The team at AFIQ CODING LAB went above and beyond to ensure our satisfaction. Outstanding work!" - Client C</p>
                                </div>
                            </div>
                        </div>
                    </section>
                `;
                break;
            case "about":
                content = `
                    <section class="page about-section" id="about">
                        <div class="about-content">
                            <div class="team-intro">
                                <h1>About Us</h1>
                                <p>Welcome to AFIQ CODING LAB! We specialize in crafting innovative coding solutions that drive success.</p>
                            </div>
                            <div class="mission-statement">
                                <h2>Our Mission</h2>
                                <p>Our mission is to deliver top-notch coding services that exceed client expectations and foster technological advancement.</p>
                            </div>
                            <div class="team">
                                <h2>Meet the Team</h2>
                                <div class="team-members">
                                    <div class="team-member">
                                        <img src="image.png" alt="Team Member 1" class="team-member-picture">
                                        <h3>John Doe</h3>
                                        <p>Lead Developer</p>
                                    </div>
                                    <div class="team-member">
                                        <img src="image.png" alt="Team Member 2" class="team-member-picture">
                                        <h3>Jane Smith</h3>
                                        <p>UI/UX Designer</p>
                                    </div>
                                    <div class="team-member">
                                        <img src="image.png" alt="Team Member 3" class="team-member-picture">
                                        <h3>Alex Johnson</h3>
                                        <p>Project Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div class="milestones">
                                <h2>Our Milestones</h2>
                                <ul>
                                    <li><strong>2024:</strong> Launched our new website with enhanced features.</li>
                                    <li><strong>2023:</strong> Expanded our team with top industry talent.</li>
                                    <li><strong>2022:</strong> Completed 100+ successful projects.</li>
                                    <li><strong>2021:</strong> Reached 1,000+ satisfied clients.</li>
                                </ul>
                            </div>
                            <div class="testimonials">
                                <h2>Client Testimonials</h2>
                                <div class="testimonial">
                                    <p>"AFIQ CODING LAB delivered exceptional results for our project. Their attention to detail and expertise are unparalleled!" - Client A</p>
                                </div>
                                <div class="testimonial">
                                    <p>"Working with AFIQ CODING LAB was a game-changer for our business. Highly recommend their services!" - Client B</p>
                                </div>
                                <div class="testimonial">
                                    <p>"The team at AFIQ CODING LAB went above and beyond to ensure our satisfaction. Outstanding work!" - Client C</p>
                                </div>
                            </div>
                        </div>
                    </section>
                `;
                break;
            case "skills":
                content = `
                    <section class="page skills-section" id="skills">
                        <h1>Our Skills</h1>
                        <p>Explore the skills we offer in coding and development.</p>
                    </section>
                `;
                break;
            case "projects":
                content = `
                    <section class="page projects-section" id="projects">
                        <h1>Projects</h1>
                        <p>Take a look at some of our recent projects.</p>
                    </section>
                `;
                break;
            case "contact":
                content = `
                    <section class="page contact-section" id="contact">
                        <h1>Contact Us</h1>
                        <p>Get in touch with AFIQ CODING LAB.</p>
                    </section>
                `;
                break;
            default:
                content = "<h1>Page Not Found</h1>";
        }

        // Simulate loading time and update content
        setTimeout(() => {
            contentArea.innerHTML = content;
            if (loadingIndicator) {
                loadingIndicator.style.display = "none";
            }
        }, 500); // Adjust timeout as needed
    }

    // Attach event listeners to menu items
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            let contentId = this.id;
            loadContent(contentId);
        });
    });

    // Default content load (Home page)
    loadContent("home");

    // Theme Toggle Functionality
    let themeToggleBtn = document.getElementById("theme-toggle-btn");
    let body = document.body;
    let themeIcon = themeToggleBtn.querySelector(".icon");
    let themeText = themeToggleBtn.querySelector(".text");

    // Load saved theme from local storage
    if (localStorage.getItem("theme") === "dark") {
        body.setAttribute("data-theme", "dark");
        themeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        body.removeAttribute("data-theme");
        themeIcon.classList.replace('bx-sun', 'bx-moon');
    
    }

    themeToggleBtn.addEventListener("click", () => {
        if (body.getAttribute("data-theme") === "dark") {
            body.removeAttribute("data-theme");
            themeIcon.classList.replace('bx-sun', 'bx-moon');
            themeText.textContent = "Light Mode";
            localStorage.setItem("theme", "light");
        } else {
            body.setAttribute("data-theme", "dark");
            themeIcon.classList.replace('bx-moon', 'bx-sun');
            themeText.textContent = "Dark Mode";
            localStorage.setItem("theme", "dark");
        }
    });
});
