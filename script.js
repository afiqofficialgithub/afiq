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
                    <section class="skills-section">
    <div class="skills-container">
        <h2 class="section-title">Our Skills</h2>
        <div class="skills-grid">
            <div class="skill">
                <div class="skill-icon">
                    <i class='bx bx-code-alt'></i>
                </div>
                <h3 class="skill-title">Web Development</h3>
                <p class="skill-description">Crafting beautiful and functional websites.</p>
                <div class="progress-bar">
                    <div class="progress" style="width: 90%;"></div>
                </div>
                
            </div>
            <div class="skill">
                <div class="skill-icon">
                    <i class='bx bx-brush'></i>
                </div>
                <h3 class="skill-title">UI/UX Design</h3>
                <p class="skill-description">Designing user-friendly interfaces.</p>
                <div class="progress-bar">
                    <div class="progress" style="width: 85%;"></div>
                </div>
            </div>
            <div class="skill">
                <div class="skill-icon">
                    <i class='bx bx-data'></i>
                </div>
                <h3 class="skill-title">Data Analysis</h3>
                <p class="skill-description">Turning data into actionable insights.</p>
                <div class="progress-bar">
                    <div class="progress" style="width: 80%;"></div>
                </div>
                
            </div>
            <div class="skill">
                <div class="skill-icon">
                    <i class='bx bx-mobile'></i>
                </div>
                <h3 class="skill-title">Mobile Development</h3>
                <p class="skill-description">Creating responsive mobile applications.</p>
                <div class="progress-bar">
                    <div class="progress" style="width: 75%;"></div>
                </div>
                
            </div>
        </div>
    </div>
</section>
 <section class="projects-section">
    <div class="projects-container">
        <h2 class="section-title">Our Projects</h2>
        <div class="projects-grid">
            <div class="project-card">
                <img src="image.png" alt="Project Image" class="project-image">
                <div class="project-details">
                    <h3 class="project-title">Project Title 1</h3>
                    <p class="project-description">Brief description of the project with key highlights.</p>
                    <div class="project-tags">
                        <span class="tag">Tag1</span>
                        <span class="tag">Tag2</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">View Project</a>
                        <a href="#" class="project-link">GitHub</a>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <img src="image.png" alt="Project Image" class="project-image">
                <div class="project-details">
                    <h3 class="project-title">Project Title 1</h3>
                    <p class="project-description">Brief description of the project with key highlights.</p>
                    <div class="project-tags">
                        <span class="tag">Tag1</span>
                        <span class="tag">Tag2</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">View Project</a>
                        <a href="#" class="project-link">GitHub</a>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <img src="image.png" alt="Project Image" class="project-image">
                <div class="project-details">
                    <h3 class="project-title">Project Title 1</h3>
                    <p class="project-description">Brief description of the project with key highlights.</p>
                    <div class="project-tags">
                        <span class="tag">Tag1</span>
                        <span class="tag">Tag2</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">View Project</a>
                        <a href="#" class="project-link">GitHub</a>
                    </div>
                </div>
            </div>
            <!-- Repeat project-card divs for more projects -->
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
                    <section class="skills-section">
    <div class="skills-container">
        <h2 class="section-title">Our Skills</h2>
        <div class="skills-grid">
            <div class="skill">
                <div class="skill-icon">
                    <i class='bx bx-code-alt'></i>
                </div>
                <h3 class="skill-title">Web Development</h3>
                <p class="skill-description">Crafting beautiful and functional websites.</p>
                <div class="progress-bar">
                    <div class="progress" style="width: 90%;">
                        <span class="progress-text">90%</span>
                    </div>
                </div>
            </div>
            <div class="skill">
                <div class="skill-icon">
                    <i class='bx bx-brush'></i>
                </div>
                <h3 class="skill-title">UI/UX Design</h3>
                <p class="skill-description">Designing user-friendly interfaces.</p>
                <div class="progress-bar">
                    <div class="progress" style="width: 85%;">
                        <span class="progress-text">85%</span>
                    </div>
                </div>
            </div>
            <div class="skill">
                <div class="skill-icon">
                    <i class='bx bx-data'></i>
                </div>
                <h3 class="skill-title">Data Analysis</h3>
                <p class="skill-description">Turning data into actionable insights.</p>
                <div class="progress-bar">
                    <div class="progress" style="width: 80%;">
                        <span class="progress-text">80%</span>
                    </div>
                </div>
            </div>
            <div class="skill">
                <div class="skill-icon">
                    <i class='bx bx-mobile'></i>
                </div>
                <h3 class="skill-title">Mobile Development</h3>
                <p class="skill-description">Creating responsive mobile applications.</p>
                <div class="progress-bar">
                    <div class="progress" style="width: 75%;">
                        <span class="progress-text">75%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



                `;
                break;
            case "projects":
                content = `
                    <section class="projects-section">
    <div class="projects-container">
        <h2 class="section-title">Our Projects</h2>
        <div class="projects-grid">
            <div class="project-card">
                <img src="image.png" alt="Project Image" class="project-image">
                <div class="project-details">
                    <h3 class="project-title">Project Title 1</h3>
                    <p class="project-description">Brief description of the project with key highlights.</p>
                    <div class="project-tags">
                        <span class="tag">Tag1</span>
                        <span class="tag">Tag2</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">View Project</a>
                        <a href="#" class="project-link">GitHub</a>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <img src="image.png" alt="Project Image" class="project-image">
                <div class="project-details">
                    <h3 class="project-title">Project Title 1</h3>
                    <p class="project-description">Brief description of the project with key highlights.</p>
                    <div class="project-tags">
                        <span class="tag">Tag1</span>
                        <span class="tag">Tag2</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">View Project</a>
                        <a href="#" class="project-link">GitHub</a>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <img src="image.png" alt="Project Image" class="project-image">
                <div class="project-details">
                    <h3 class="project-title">Project Title 1</h3>
                    <p class="project-description">Brief description of the project with key highlights.</p>
                    <div class="project-tags">
                        <span class="tag">Tag1</span>
                        <span class="tag">Tag2</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">View Project</a>
                        <a href="#" class="project-link">GitHub</a>
                    </div>
                </div>
            </div>
            <!-- Repeat project-card divs for more projects -->
        </div>
    </div>
</section>

                `;
                break;
            case "contact":
                content = `
                    <section class="contact-section" id="contact">
    <div class="contact-container">
        <h2>Contact Us</h2>
        <form id="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Message</button>
        </form>
    </div>
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
