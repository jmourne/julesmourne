document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations
    const observerOptions = { 
        threshold: 0.05, 
        rootMargin: "0px 0px -50px 0px" 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { 
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); 
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Moth Logo Rotation on Scroll
    window.addEventListener('scroll', () => {
        const moth = document.querySelector('.moth-logo');
        if (moth) {
            const rotation = window.scrollY * 0.06;
            moth.style.transform = `rotate(${rotation}deg)`;
        }
    });

    // Subtle Torch Effect following Mouse
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        // Update CSS variables for the Canvas layers
        document.body.style.setProperty('--mouse-x', `${x}%`);
        document.body.style.setProperty('--mouse-y', `${y}%`);
    });

    // Interaction feedback for the Vault link
    const vaultLink = document.querySelector('.btn-secondary[href*="plane.so"]');
    if (vaultLink) {
        vaultLink.addEventListener('click', () => {
            // Subtle visual confirmation of handshake before opening
            console.log("Handshake initiated. Accessing client workspace.");
        });
    }
});