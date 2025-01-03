document.addEventListener("DOMContentLoaded", function() {
    // Flowchart Description Hover Effect
    const flowSteps = document.querySelectorAll('.flow-step');
    const descriptionBox = document.getElementById('descriptionBox');
    const descriptionText = document.getElementById('descriptionText');

    flowSteps.forEach(step => {
        step.addEventListener('mouseenter', () => {
            const description = step.getAttribute('data-description');
            descriptionText.textContent = description;
            descriptionBox.style.display = 'block';
        });
        step.addEventListener('mouseleave', () => {
            descriptionBox.style.display = 'none';
        });
    });

    // Subscription Form Submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you! Woof!');
            form.reset();
        });
    }

    // FAQ Accordion Functionality
    const accordionItems = document.querySelectorAll('.accordion .item');
    accordionItems.forEach(item => {
        const question = item.querySelector('.question');
        const answer = item.querySelector('.answer');

        if (question && answer) {
            question.addEventListener('click', () => {
                item.classList.toggle('active');
                
                // Adjust the answer height based on active state
                if (item.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    answer.style.maxHeight = null;
                }
            });
        }
    });
});
//lazyload//

document.addEventListener("DOMContentLoaded", () => {
    const heroVideo = document.querySelector(".hero-video");
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Load the video sources once the video is in view
                heroVideo.querySelectorAll("source").forEach(source => {
                    source.src = source.dataset.src; // Assign data-src to src
                });
                heroVideo.load(); // Load video after sources are set
                videoObserver.unobserve(heroVideo); // Stop observing once loaded
            }
        });
    }, { threshold: 0.25 });
    videoObserver.observe(heroVideo);
});

document.addEventListener("DOMContentLoaded", function() {
    const starryBackground = document.getElementById("starry-background");
    const numStars = 100; // Adjust for more or fewer stars

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        // Random positioning within the viewport
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        starryBackground.appendChild(star);
    }

    // Optional: Adding some shooting stars
    const numShootingStars = 5; // Adjust for more or fewer shooting stars
    for (let i = 0; i < numShootingStars; i++) {
        const shootingStar = document.createElement("div");
        shootingStar.classList.add("star", "shooting-star");
        shootingStar.style.left = `${Math.random() * 100}vw`;
        shootingStar.style.top = `${Math.random() * 100}vh`;
        shootingStar.style.setProperty('--i', i); // For animation delay
        starryBackground.appendChild(shootingStar);
    }
});

// Create and set up the custom cursor element
const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

// Update cursor position based on mouse movement
document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
    customCursor.style.display = 'block'; // Ensures it shows up when moving
});

// Optional: Hide custom cursor when the mouse leaves the viewport
document.addEventListener('mouseleave', () => {
    customCursor.style.display = 'none';
});

document.addEventListener('mouseenter', () => {
    customCursor.style.display = 'block';
});

// Declare woofSound only if it's not already declared
if (typeof woofSound === 'undefined') {
    var woofSound = new Audio('images/woof.mp3');
}

// Function to play the woof sound
function playWoofSound() {
    woofSound.currentTime = 0; // Reset to start of the audio file
    woofSound.play().catch(error => console.log('Sound playback failed:', error));
}

// Add a click event listener to the entire document
document.addEventListener('click', playWoofSound);




