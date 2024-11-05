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
            alert('Thank you for subscribing!');
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

