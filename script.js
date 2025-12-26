// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // ==================== //
    // 1. Navbar & Mobile Logic
    // ==================== //
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('py-2', 'bg-bg-main/90', 'backdrop-blur-md', 'shadow-2xl');
                navbar.classList.remove('py-4');
            } else {
                navbar.classList.add('py-4');
                navbar.classList.remove('py-2', 'bg-bg-main/90', 'backdrop-blur-md', 'shadow-2xl');
            }
        });
    }

    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNavList');
    if (mobileBtn && mobileNav) {
        mobileBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
            mobileNav.classList.toggle('flex');
        });

        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.add('hidden');
                mobileNav.classList.remove('flex');
            });
        });
    }

    // ==================== //
    // 2. Contact Form
    // ==================== //
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            const formMsg = document.getElementById('formMessage');

            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
                headers: { 'Accept': 'application/json' }
            })
            .then(res => {
                if (res.ok) {
                    showMsg(formMsg, 'Message sent successfully!', 'success');
                    this.reset();
                } else {
                    showMsg(formMsg, 'Error sending message.', 'error');
                }
            })
            .catch(() => showMsg(formMsg, 'Connection error.', 'error'))
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }

    function showMsg(el, text, type) {
        if (!el) return;
        el.textContent = text;
        el.className = `mt-4 p-3 rounded-lg text-sm ${
            type === 'success'
                ? 'bg-green-500/20 text-green-400'
                : 'bg-red-500/20 text-red-400'
        }`;
        el.classList.remove('hidden');
        setTimeout(() => el.classList.add('hidden'), 5000);
    }

    // ==================== //
    // 3. Stats Counter (NEW - FIXED & FUNCTIONAL)
    // ==================== //
    const statSection = document.querySelector('.stats');
    const counters = document.querySelectorAll('.stat-number');
    let statsStarted = false;

    if (statSection && counters.length > 0) {
        const startCounters = () => {
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.count, 10);
                let current = 0;
                const duration = 2000; // 2 seconds
                const increment = Math.ceil(target / (duration / 16));

                const update = () => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target.toLocaleString();
                    } else {
                        counter.textContent = current.toLocaleString();
                        requestAnimationFrame(update);
                    }
                };
                update();
            });
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsStarted) {
                    statsStarted = true;
                    startCounters();
                }
            });
        }, { threshold: 0.4 });

        observer.observe(statSection);
    }

});
