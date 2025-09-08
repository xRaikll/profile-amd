// Animate skill progress bars on page load
window.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });

    // Animate sections fade-in
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Click animation for buttons and links
document.querySelectorAll('button, a').forEach(elem => {
    elem.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const rect = elem.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        elem.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
