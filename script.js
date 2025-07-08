// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const contactForm = document.querySelector('.contact-form');

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact form handling
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    this.reset();
});

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#4299e1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 1001;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 300px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Add slide in animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .nav-link.active {
        color: #667eea !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .about-stats');
    animateElements.forEach(el => observer.observe(el));
});

// Typing effect for hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const text = subtitle.textContent;
        typeWriter(subtitle, text, 80);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent && heroImage) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
        heroImage.style.transform = `translateY(${rate * 0.8}px)`;
    }
});

// Skill tags hover effect
document.addEventListener('DOMContentLoaded', () => {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            tag.style.color = 'white';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.background = 'white';
            tag.style.color = '#4a5568';
        });
    });
});

// Project card tilt effect
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
});

// Console welcome message
console.log(`
🚀 Welcome to Rafaela Rossi Pereira's Portfolio!
📧 Contact: rafaela.per12@gmail.com
💼 LinkedIn: https://www.linkedin.com/in/rossirafaela/
`);

// Function to update profile images
function updateProfileImages(https://media.licdn.com/dms/image/v2/D4E03AQFM0meZjec6qA/profile-displayphoto-shrink_800_800/B4EZSNZ8l5G0Aw-/0/1737539177750?e=1757548800&v=beta&t=Bf2zOAwgPLwnLJADgkAClJYzh6y3xNZzA9a5Q-G4hSE) {
    const profileImages = document.querySelectorAll('.profile-img, .about-img');
    profileImages.forEach(img => {
        if (img) {
            // Test if the image loads successfully
            const testImg = new Image();
            testImg.onload = function() {
                img.src = imageUrl;
                img.style.display = 'block';
                const placeholder = img.nextElementSibling;
                if (placeholder && placeholder.classList.contains('profile-img-placeholder')) {
                    placeholder.style.display = 'none';
                }
                console.log('✅ Profile image updated successfully!');
            };
            testImg.onerror = function() {
                console.log('❌ Failed to load image from URL:', imageUrl);
                // Keep the placeholder visible
                const placeholder = img.nextElementSibling;
                if (placeholder && placeholder.classList.contains('profile-img-placeholder')) {
                    placeholder.style.display = 'flex';
                }
            };
            testImg.src = imageUrl;
        }
    });
}

// Function to update from LinkedIn URL
function updateFromLinkedIn(linkedinUrl) {
    // Extract image URL from LinkedIn profile URL if possible
    // This is a simplified version - LinkedIn URLs are complex
    if (linkedinUrl.includes('linkedin.com')) {
        console.log('LinkedIn profile detected. Please use the image-uploader.html tool to get the direct image URL.');
        return;
    }
    updateProfileImages(linkedinUrl);
}

// Function to handle image loading
function handleImageLoad() {
    const images = document.querySelectorAll('.profile-img, .about-img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            console.log('Failed to load profile image, using placeholder');
        });
    });
}

// Initialize image handling when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    handleImageLoad();
    checkForExtractedData();
});

// Performance monitoring
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`⚡ Page loaded in ${Math.round(loadTime)}ms`);
    
    // Log instructions for updating profile image and PDF content
    console.log(`
🖼️ To update the profile image, use:
updateProfileImages('YOUR_IMAGE_URL')

📄 To extract content from PDF resume:
1. Open pdf-extractor.html
2. Upload your PDF resume
3. Review and edit extracted content
4. Click 'Apply to Portfolio'
5. Run applyExtractedData() here to see changes

📊 To view extracted data report:
generatePortfolioReport()
    `);
});

// PDF Content Integration Functions
function applyExtractedData() {
    const storedData = localStorage.getItem('portfolioData');
    if (!storedData) {
        console.log('No extracted portfolio data found. Please use the PDF extractor first.');
        return;
    }
    
    const data = JSON.parse(storedData);
    console.log('Applying extracted data:', data);
    
    // Update about section text
    if (data.about) {
        const aboutTexts = document.querySelectorAll('.about-content-text p');
        if (aboutTexts.length > 0) {
            aboutTexts[0].textContent = data.about.substring(0, 300) + '...';
        }
        
        // Update hero description
        const heroDesc = document.querySelector('.hero-description');
        if (heroDesc) {
            heroDesc.textContent = data.about.substring(0, 150) + '...';
        }
    }
    
    // Update skills if available
    if (data.skills) {
        updateSkillsFromExtractedData(data.skills);
    }
    
    // Show notification
    showNotification('Portfolio content updated from extracted PDF data!', 'success');
    
    // Log instructions for permanent updates
    console.log(`
📝 To make these changes permanent:
1. Copy the extracted data to your HTML file
2. Or use the provided JSON file to update content
3. Data is temporarily applied - refresh to see original content
    `);
}

function updateSkillsFromExtractedData(skillsText) {
    // Extract technology names from the skills text
    const commonTechs = [
        'JavaScript', 'Python', 'React', 'Node.js', 'HTML5', 'CSS3', 
        'Vue.js', 'Angular', 'TypeScript', 'Express', 'Django', 
        'PostgreSQL', 'MongoDB', 'Git', 'Docker', 'AWS'
    ];
    
    const foundSkills = commonTechs.filter(tech => 
        skillsText.toLowerCase().includes(tech.toLowerCase())
    );
    
    if (foundSkills.length > 0) {
        console.log('Found skills in PDF:', foundSkills);
        
        // Highlight matching skills in the portfolio
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            if (foundSkills.some(skill => 
                tag.textContent.toLowerCase().includes(skill.toLowerCase())
            )) {
                tag.style.background = 'linear-gradient(135deg, #38b2ac 0%, #319795 100%)';
                tag.style.color = 'white';
                tag.style.transform = 'scale(1.05)';
            }
        });
    }
}

function generatePortfolioReport() {
    const storedData = localStorage.getItem('portfolioData');
    if (!storedData) {
        console.log('No extracted data available. Please upload a PDF first.');
        return;
    }
    
    const data = JSON.parse(storedData);
    
    const report = `
=== PORTFOLIO CONTENT REPORT ===

Personal Information:
${data.personal || 'Not extracted'}

About/Summary:
${data.about || 'Not extracted'}

Experience:
${data.experience || 'Not extracted'}

Skills:
${data.skills || 'Not extracted'}

Education:
${data.education || 'Not extracted'}

Projects:
${data.projects || 'Not extracted'}

=== RECOMMENDATIONS ===
- Update the about section with extracted summary
- Add missing skills to the skills section
- Update experience timeline with extracted job history
- Consider adding an education section if not present

To apply these changes, run: applyExtractedData()
    `;
    
    console.log(report);
    return report;
}

function clearExtractedData() {
    localStorage.removeItem('portfolioData');
    console.log('Extracted portfolio data cleared.');
}

// Check for extracted data on page load
function checkForExtractedData() {
    const storedData = localStorage.getItem('portfolioData');
    if (storedData) {
        console.log('📄 Extracted PDF data found! Run applyExtractedData() to apply it.');
        
        // Show a subtle notification
        setTimeout(() => {
            showNotification('PDF data available - run applyExtractedData() in console to apply', 'info');
        }, 2000);
    }
}

//# sourceMappingURL=main.js.map
