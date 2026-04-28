/* ========================================
   Annie Kunth – UGC Creator Landing Page
   JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- Portfolio Strip: equal height = smallest image ---
    const stripImgs = document.querySelectorAll('.portfolio__strip img');
    if (stripImgs.length) {
        const setStripHeight = () => {
            // reset first so natural sizes are recalculated
            stripImgs.forEach(img => img.style.height = 'auto');
            let minH = Infinity;
            stripImgs.forEach(img => {
                const rendered = img.naturalHeight * (img.clientWidth / img.naturalWidth);
                if (rendered > 0 && rendered < minH) minH = rendered;
            });
            if (minH < Infinity) {
                stripImgs.forEach(img => img.style.height = minH + 'px');
            }
        };
        // run after all images have loaded
        let loaded = 0;
        stripImgs.forEach(img => {
            if (img.complete) {
                loaded++;
                if (loaded === stripImgs.length) setStripHeight();
            } else {
                img.addEventListener('load', () => {
                    loaded++;
                    if (loaded === stripImgs.length) setStripHeight();
                });
            }
        });
        window.addEventListener('resize', setStripHeight);
    }

    // --- Mobile Navigation ---
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        // Close nav on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });

        // Close nav on click outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('open') &&
                !navLinks.contains(e.target) &&
                !navToggle.contains(e.target)) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('open');
            }
        });
    }

    // --- Sticky Nav Scroll Effect ---
    const nav = document.getElementById('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('nav--scrolled');
            } else {
                nav.classList.remove('nav--scrolled');
            }
        }, { passive: true });
    }

    // --- Scroll Animations (Intersection Observer) ---
    const fadeElements = document.querySelectorAll(
        '.about__content, .portfolio__header, ' +
        '.service-card, .services__header, .process__step, .contact__info, .contact__form'
    );

    fadeElements.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));

    // --- Section Reveal (per-section direction) ---
    const revealSections = document.querySelectorAll('[data-reveal]');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -60px 0px'
    });
    revealSections.forEach(s => sectionObserver.observe(s));

    // --- Counter Animation ---
    const counters = document.querySelectorAll('[data-count]');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'), 10);
                animateCounter(el, target);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));

    function animateCounter(el, target) {
        const duration = 1500;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased) + '+';
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // --- Portfolio Filter (scoped per block) ---
    document.querySelectorAll('.portfolio__filter[data-portfolio-filter]').forEach(filterGroup => {
        const block = filterGroup.closest('.portfolio__block');
        const chips = filterGroup.querySelectorAll('.chip[data-filter]');
        const categories = block.querySelectorAll('.portfolio__category[data-cat]');

        chips.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                chips.forEach(b => b.classList.remove('chip--active'));
                btn.classList.add('chip--active');

                categories.forEach(cat => {
                    if (filter === 'all' || cat.getAttribute('data-cat') === filter) {
                        cat.classList.remove('hidden');
                    } else {
                        cat.classList.add('hidden');
                    }
                });
            });
        });
    });

    // --- Portfolio Video Play/Pause ---
    document.querySelectorAll('.portfolio__item--video').forEach(item => {
        const video = item.querySelector('video');
        if (!video) return;

        item.addEventListener('click', () => {
            if (video.paused) {
                // Pause all other videos first
                document.querySelectorAll('.portfolio__item--video video').forEach(v => {
                    if (v !== video) {
                        v.pause();
                        v.closest('.portfolio__item--video').classList.remove('playing');
                    }
                });
                video.play();
                item.classList.add('playing');
            } else {
                video.pause();
                item.classList.remove('playing');
            }
        });
    });

    // --- Contact Form ---
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic client-side validation
            const name = contactForm.querySelector('#name');
            const email = contactForm.querySelector('#email');
            const service = contactForm.querySelector('#service');
            const message = contactForm.querySelector('#message');

            if (!name.value.trim() || !email.value.trim() || !service.value || !message.value.trim()) {
                return;
            }

            // Simple email format check
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value.trim())) {
                return;
            }

            // Show success (in production: send to backend)
            contactForm.reset();
            if (formSuccess) {
                formSuccess.classList.add('visible');
                setTimeout(() => {
                    formSuccess.classList.remove('visible');
                }, 4000);
            }
        });
    }

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
