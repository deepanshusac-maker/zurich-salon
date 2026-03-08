window.addEventListener('load', () => {
    const loader = document.getElementById('loadingScreen');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1000);
    }
});

// NAV SCROLL
const navbar = document.getElementById('navbar');
const floatScroll = document.getElementById('floatScroll');

// SCROLL PROGRESS & PARALLAX ENGINE
const progressBar = document.querySelector('.scroll-progress');
const parallaxImages = document.querySelectorAll('.parallax-img');

window.addEventListener('scroll', () => {
    // Nav & Float Button
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
    if (floatScroll) floatScroll.classList.toggle('visible', window.scrollY > 500);

    // Back to top button
    const stp = document.getElementById('scrollTop');
    if (stp) stp.classList.toggle('visible', window.scrollY > 800);

    // Scroll Progress Tracking
    if (progressBar) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    }

    // Suble Parallax Effect
    if (parallaxImages.length > 0) {
        parallaxImages.forEach(img => {
            const speed = 0.15;
            const parent = img.parentElement;
            if (parent) {
                const rect = parent.getBoundingClientRect();
                const offset = rect.top * speed;
                img.style.transform = `translateY(${offset}px) scale(1.15)`;
            }
        });
    }
});

// Scroll to top execution
document.getElementById('scrollTop')?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// QUICK VIEW MODAL DATA
const serviceData = {
    "hairstyling": {
        title: "Signature Hairstyling",
        label: "Master Artistry",
        img: "assets/images/service-hairstyling.png",
        desc: "Experience the ultimate expression of style. Our master stylists specialize in precision cuts and innovative color techniques tailored to your unique identity.",
        prices: [
            { name: "Global Hair Color", price: "From ₹4,500" },
            { name: "Balayage Premiere", price: "From ₹6,500" },
            { name: "Signature Haircut", price: "₹2,500" },
            { name: "Luxe Blowout", price: "₹1,800" }
        ]
    },
    "haircut": {
        title: "Artisan Haircut",
        label: "Precision & Flow",
        img: "assets/images/service-hairstyling.png",
        desc: "A bespoke cutting experience that considers your face shape, hair texture, and lifestyle. Perfected with our signature scalp massage and professional finish.",
        prices: [
            { name: "Designer Cut", price: "₹2,500" },
            { name: "Wash & Style", price: "₹1,200" },
            { name: "Intense Repair Mask", price: "₹1,500" }
        ]
    },
    "skincare": {
        title: "Radiance Skincare",
        label: "Dermal Mastery",
        img: "assets/images/service-makeup.png",
        desc: "Revitalize your complexion with our targeted treatments using world-renowned products. From deep hydration to anti-aging mastery, we unveil your natural glow.",
        prices: [
            { name: "Luminous Glow Facial", price: "₹3,500" },
            { name: "Hydra-Peel Infusion", price: "₹5,000" },
            { name: "Detox Deep Cleanse", price: "₹2,800" }
        ]
    },
    "makeup": {
        title: "Bridal & Glamour Makeup",
        label: "Studio Artistry",
        img: "assets/images/service-makeup.png",
        desc: "Flawless artistry for your most memorable moments. Our experts use high-definition techniques to ensure you look breathtaking from every angle, in every light.",
        prices: [
            { name: "Bridal Signature", price: "From ₹15,000" },
            { name: "Evening Glamour", price: "₹4,500" },
            { name: "Editorial Finish", price: "₹3,500" }
        ]
    },
    "color": {
        title: "Master Color & Treatments",
        label: "Color Chemistry",
        img: "assets/images/service-shampoo.png",
        desc: "Transform your look with our expert color services. From subtle highlights to dramatic transformations, we use premium pigments for vibrant, lasting results.",
        prices: [
            { name: "Global Color", price: "From ₹4,500" },
            { name: "Balayage", price: "From ₹6,500" },
            { name: "Gloss Treatment", price: "₹2,200" }
        ]
    }
};

const modal = document.getElementById('serviceModal');
const modalClose = document.querySelector('.modal-close');

function openModal(serviceKey) {
    const data = serviceData[serviceKey];
    if (!data) return;

    document.getElementById('modalImg').src = data.img;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalLabel').textContent = data.label;
    document.getElementById('modalDesc').textContent = data.desc;

    const priceList = document.getElementById('modalPriceList');
    priceList.innerHTML = data.prices.map(p => `
        <li>
            <span>${p.name}</span>
            <span>${p.price}</span>
        </li>
    `).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop background scroll
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

if (modalClose) modalClose.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (modal && e.target === modal) closeModal();
});

// Replace old handle scroll with the new unified one and finalize rest...
// (Previous code for counters, faq, form follows)

// HAMBURGER
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) navLinks.classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        if (navLinks) navLinks.classList.remove('open');
    });
});

// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(r => observer.observe(r));

// COUNTER ANIMATION
const counters = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const targetValue = parseInt(target.getAttribute('data-target'));
            let current = 0;
            const increment = targetValue / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= targetValue) {
                    target.textContent = targetValue + (target.textContent.includes('+') ? '+' : (target.textContent.includes('★') ? '★' : ''));
                    clearInterval(timer);
                } else {
                    target.textContent = Math.floor(current) + (target.textContent.includes('+') ? '+' : (target.textContent.includes('★') ? '★' : ''));
                }
            }, 30);
            counterObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    // Add data-target if not present, based on text content
    if (!counter.hasAttribute('data-target')) {
        const val = parseInt(counter.textContent);
        counter.setAttribute('data-target', val);
    }
    counterObserver.observe(counter);
});

// FAQ ACCORDION
function toggleFaq(button) {
    const item = button.parentElement;
    item.classList.toggle('active');

    // Close other items
    document.querySelectorAll('.faq-item').forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });
}

// FORM SUBMIT
function handleSubmit() {
    const btn = document.querySelector('.form-submit');
    const originalText = btn.textContent;
    btn.textContent = '✓ Appointment Requested!';
    btn.style.background = 'var(--gold)';
    btn.style.borderColor = 'var(--gold)';
    btn.style.color = 'var(--charcoal)';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.style.color = '';
    }, 3000);
    return false; // Prevent actual form submission for demo
}

// Pricing Tabs Logic
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.pricing-tab');
    const grids = document.querySelectorAll('.pricing-grid');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            // Update tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update grids
            grids.forEach(grid => {
                grid.classList.remove('active');
                if (grid.id === target) {
                    grid.classList.add('active');
                }
            });
        });
    });
});
