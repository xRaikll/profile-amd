// Typing animation function
function startTypingAnimation() {
    const titleElement = document.querySelector('.main-title');
    titleElement.textContent = ''; // Reset text
    const text1 = 'Welcome to My Website';
    const text2 = 'Ahmad Al Bukhari | X RPL 1';
    let index = 0;
    let isDeleting = false;

    function typeWriter() {
        if (!isDeleting) {
            titleElement.textContent = text1.substring(0, index + 1);
            index++;
            if (index === text1.length) {
                isDeleting = true;
                setTimeout(typeWriter, 2000); // Wait 2s before deleting
                return;
            }
        } else {
            titleElement.textContent = text1.substring(0, index - 1);
            index--;
            if (index === 0) {
                isDeleting = false;
                // Now type the second text
                setTimeout(() => typeSecondText(), 500);
                return;
            }
        }
        setTimeout(typeWriter, 100); // Typing speed
    }

    function typeSecondText() {
        index = 0;
        function typeSecond() {
            titleElement.textContent = text2.substring(0, index + 1);
            index++;
            if (index === text2.length) {
                setTimeout(() => {}, 5000); // Hold for 5s
                return;
            }
            setTimeout(typeSecond, 100);
        }
        typeSecond();
    }

    typeWriter();
}

// Intro animation and hide
window.addEventListener('load', () => {
    const intro = document.getElementById('intro');
    const progressFill = document.querySelector('.progress-fill');
    const progressPercentage = document.querySelector('.progress-percentage');

    if (!navigator.onLine) {
        progressPercentage.textContent = 'Offline';
        return;
    }

    // Animate progress from 0% to 100%
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        progressFill.style.width = progress + '%';
        progressPercentage.textContent = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
            // Show start button after loading completes
            const startBtn = document.getElementById('start-btn');
            startBtn.style.display = 'block';
            startBtn.addEventListener('click', () => {
                intro.style.display = 'none';
                // Start typing animation after intro
                startTypingAnimation();
            });
        }
    }, 20); // 2 seconds for 100%
});

// Add hover event to restart typing animation
document.querySelector('.main-title').addEventListener('mouseenter', startTypingAnimation);

// Smooth scroll for nav
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive button
const interactBtn = document.getElementById('interact-btn');
interactBtn.addEventListener('click', () => {
    // Change background color randomly
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a8e6cf'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = `linear-gradient(135deg, #0f0f23, ${randomColor})`;
    // Add a temporary effect
    interactBtn.textContent = 'Terima Kasih!';
    setTimeout(() => {
        interactBtn.textContent = 'Klik untuk Interaksi';
    }, 2000);
});

// Form submission
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Pesan telah dikirim! Terima kasih.');
});
