// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Simple fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-item, .team-item, .about-text, .contact-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Simple page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// GoFundMe Data Fetching
async function fetchGoFundMeData() {
    try {
        // Since GoFundMe doesn't have a public API, we'll use a CORS proxy
        // Note: This is a simplified approach
        const response = await fetch('https://api.allorigins.win/get?url=' + 
            encodeURIComponent('https://www.gofundme.com/f/bla3q-student-project-at-the-met'));
        
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        
        const data = await response.json();
        const html = data.contents;
        
        // Parse the HTML to extract funding information
        // This is a basic approach - you might need to adjust based on GoFundMe's HTML structure
        const amountMatch = html.match(/\$(\d+(?:,\d{3})*)\s+raised/);
        if (amountMatch) {
            const amount = parseInt(amountMatch[1].replace(/,/g, ''));
            updateProgressBar(amount);
        } else {
            // Fallback: try to find any dollar amount in the page
            const dollarMatches = html.match(/\$(\d+(?:,\d{3})*)/g);
            if (dollarMatches && dollarMatches.length > 0) {
                // Take the first reasonable amount found
                const amount = parseInt(dollarMatches[0].replace(/[$,]/g, ''));
                if (amount > 0 && amount < 10000) { // Reasonable range
                    updateProgressBar(amount);
                }
            }
        }
    } catch (error) {
        console.log('Could not fetch GoFundMe data:', error);
        // Set a fallback amount or show a message
        updateProgressBar(80); // Example fallback amount
    }
}

function updateProgressBar(currentAmount) {
    const goal = 3500;
    const percentage = Math.min((currentAmount / goal) * 100, 100);
    
    const progressFill = document.getElementById('progressFill');
    const currentAmountElement = document.getElementById('currentAmount');
    
    if (progressFill && currentAmountElement) {
        progressFill.style.width = percentage + '%';
        currentAmountElement.textContent = '$' + currentAmount.toLocaleString();
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in effect to body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    // Set initial navbar state
    const navbar = document.querySelector('.navbar');
    navbar.style.background = '#fff';
    
    // Fetch GoFundMe data
    fetchGoFundMeData();
    
    // Update every 5 minutes
    setInterval(fetchGoFundMeData, 5 * 60 * 1000);
});