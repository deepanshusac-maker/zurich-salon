

// NAV SCROLL
const navbar = document.getElementById('navbar');

// SCROLL PROGRESS & PARALLAX ENGINE
const progressBar = document.querySelector('.scroll-progress');
const parallaxImages = document.querySelectorAll('.parallax-img');

let scrollTicking = false;
window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            scrollTicking = false;
        });
        scrollTicking = true;
    }
});

function handleScroll() {
    // Nav & Float Button
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);

    // Mobile Sticky CTA toggle
    const mobileSticky = document.querySelector('.mobile-sticky-cta');
    if (mobileSticky) mobileSticky.classList.toggle('visible', window.scrollY > 600);

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

    // Active Section Highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });

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
}

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
    "pedicure": {
        title: "Luxury Pedicure",
        label: "Spa Treatments",
        img: "assets/images/service-pedicure.png",
        desc: "Luxury foot care with spa-grade treatments and nail artistry. Relieve tension while achieving perfectly manicured toes.",
        prices: [
            { name: "Classic Pedicure", price: "₹1,200" },
            { name: "Spa Pedicure", price: "₹2,000" },
            { name: "Gel Pedicure", price: "₹2,500" }
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
            { name: "Editorial Finish", price: "₹6,000" },
            { name: "Party Makeup", price: "₹3,500" }
        ]
    },
    "shampoo": {
        title: "Shampoo & Conditioning",
        label: "Hair Care",
        img: "assets/images/service-shampoo.png",
        desc: "Deep cleansing and nourishing treatments with premium hair care lines, designed to restore your hair's natural vitality.",
        prices: [
            { name: "Wash & Style", price: "₹1,200" },
            { name: "Deep Conditioning Mask", price: "₹1,500" },
            { name: "Keratin Ritual", price: "From ₹5,000" }
        ]
    },
    "massage": {
        title: "Relaxing Massage",
        label: "Body Treatments",
        img: "assets/images/service-massage.png",
        desc: "Relaxing full-body massage in a serene private treatment room. Melt away stress and rejuvenate your senses.",
        prices: [
            { name: "Aroma Therapy", price: "₹4,000" },
            { name: "Deep Tissue Massage", price: "₹5,000" },
            { name: "Swedish Massage", price: "₹3,500" }
        ]
    },
    "threading": {
        title: "Eyebrow Threading",
        label: "Facial Aesthetics",
        img: "assets/images/service-threading.png",
        desc: "Precise brow shaping and threading for perfectly defined arches that compliment your face shape.",
        prices: [
            { name: "Eyebrow Threading", price: "₹200" },
            { name: "Upper Lip", price: "₹100" },
            { name: "Full Face Threading", price: "₹800" }
        ]
    },
    "waxing": {
        title: "Body Waxing & Spa",
        label: "Skin Care",
        img: "assets/images/service-massage.png",
        desc: "Smooth, long-lasting results with hygienic waxing in a private suite, leaving your skin soft and radiant.",
        prices: [
            { name: "Full Arms Waxing", price: "₹800" },
            { name: "Full Legs Waxing", price: "₹1,200" },
            { name: "Full Body Waxing", price: "₹3,500" }
        ]
    },
    "manicure": {
        title: "Luxury Manicure",
        label: "Hand Care",
        img: "assets/images/service-pedicure.png",
        desc: "Curated nail treatments using only premium products for lasting beauty and elegance.",
        prices: [
            { name: "Classic Manicure", price: "₹1,000" },
            { name: "Spa Manicure", price: "₹1,800" },
            { name: "Gel Polish", price: "₹2,000" }
        ]
    },
    "blowouts": {
        title: "Premium Blowouts",
        label: "Finishing Touches",
        img: "assets/images/hero-bg.png",
        desc: "Professional blowouts and finishing for silky, voluminous hair that lasts all day.",
        prices: [
            { name: "Classic Blowout", price: "₹1,200" },
            { name: "Signature Waves", price: "₹1,800" },
            { name: "Event Styling", price: "₹2,500" }
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

// Handle footer/service triggers
document.querySelectorAll('[data-service]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.tagName.toLowerCase() === 'a') e.preventDefault();
        openModal(btn.getAttribute('data-service'));
    });
});

// (Removed old close-modal-trigger logic in favor of new booking mapping)

const bookingModal = document.getElementById('bookingModal');
const bookingModalClose = document.querySelector('.booking-modal-close');

function openBookingModal(serviceName = '') {
    // If a service name is passed (e.g., from the service modal "Book This Treatment"), auto-select it
    const serviceSelect = document.getElementById('service');
    if (serviceSelect && serviceName) {
        // Find option that contains the service name or vice versa
        let matchFound = false;
        const normalizedTarget = serviceName.trim().toLowerCase();

        for (let i = 0; i < serviceSelect.options.length; i++) {
            const optText = serviceSelect.options[i].text.toLowerCase();
            if (optText.includes(normalizedTarget) || normalizedTarget.includes(optText)) {
                serviceSelect.selectedIndex = i;
                matchFound = true;
                break;
            }
        }

        if (!matchFound) serviceSelect.selectedIndex = 0;
    } else if (serviceSelect) {
        serviceSelect.selectedIndex = 0; // reset
    }

    if (bookingModal) {
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeBookingModal() {
    if (bookingModal) {
        bookingModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (bookingModalClose) bookingModalClose.addEventListener('click', closeBookingModal);

document.querySelectorAll('[data-booking="true"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.tagName.toLowerCase() === 'a') e.preventDefault();

        // Check if we are inside a service modal, if so, close the service modal and grab the service title
        const serviceModalActive = document.getElementById('serviceModal').classList.contains('active');
        let serviceName = '';
        if (serviceModalActive) {
            serviceName = document.getElementById('modalTitle').textContent;
            closeModal(); // close the service quick view
        }

        openBookingModal(serviceName);
    });
});

window.addEventListener('click', (e) => {
    if (modal && e.target === modal) closeModal();
    if (bookingModal && e.target === bookingModal) closeBookingModal();
});



// Replace old handle scroll with the new unified one and finalize rest...
// (Previous code for counters, faq, form follows)

// HAMBURGER
const hamburgerBtn = document.getElementById('hamburger');
if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMenu);

function toggleMenu(e) {
    if (e) e.stopPropagation();
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    if (navLinks) navLinks.classList.toggle('open');
    if (hamburger) hamburger.classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        const hamburger = document.getElementById('hamburger');
        if (navLinks) navLinks.classList.remove('open');
        if (hamburger) hamburger.classList.remove('open');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    if (navLinks && navLinks.classList.contains('open')) {
        if (!hamburger.contains(e.target) && (!navLinks.contains(e.target) || e.target === navLinks)) {
            navLinks.classList.remove('open');
            hamburger.classList.remove('open');
        }
    }
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

counters.forEach(counter => {
    // Save original text to data-target if not present
    if (!counter.hasAttribute('data-target')) {
        counter.setAttribute('data-target', counter.textContent.trim());
    }
    // Set to 0 initially for the animation
    counter.textContent = '0';
});

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const targetStr = target.getAttribute('data-target');

            // Extract numerical value (including floats) and the suffix (+ or ★)
            const targetValue = parseFloat(targetStr.replace(/[^0-9.]/g, ''));
            const suffix = targetStr.replace(/[0-9.]/g, '');
            const isFloat = targetStr.includes('.');

            if (isNaN(targetValue)) {
                target.textContent = targetStr; // Fallback if no numbers found
                counterObserver.unobserve(target);
                return;
            }

            let current = 0;
            const increment = targetValue / 50;

            const timer = setInterval(() => {
                current += increment;
                if (current >= targetValue) {
                    current = targetValue;
                    clearInterval(timer);
                }

                // Format display based on whether the original was a float
                let displayVal = isFloat ? current.toFixed(1) : Math.floor(current);
                target.textContent = displayVal + suffix;
            }, 30);

            counterObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// FAQ ACCORDION
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function () {
        toggleFaq(this);
    });
});

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

// TOAST SYSTEM
function showToast(title, message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-msg">${message}</div>
        </div>
        <div class="toast-close" onclick="this.parentElement.remove()">&times;</div>
    `;

    container.appendChild(toast);

    // Auto remove
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 500);
    }, 5000);
}

// FORM VALIDATION & SUBMIT
const bookingFormTag = document.getElementById('bookingForm');
if (bookingFormTag) bookingFormTag.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    if (event) event.preventDefault();

    const fields = {
        firstName: document.getElementById('firstName'),
        lastName: document.getElementById('lastName'),
        phoneNumber: document.getElementById('phoneNumber'),
        email: document.getElementById('email'),
        service: document.getElementById('service'),
        date: document.getElementById('date'),
        time: document.getElementById('time'),
        notes: document.getElementById('specialRequests')
    };

    let isValid = true;
    const errors = [];

    // Reset styles
    Object.values(fields).forEach(field => {
        if (field) field.classList.remove('invalid');
    });

    // Validation checks
    if (!fields.firstName.value.trim()) {
        fields.firstName.classList.add('invalid');
        isValid = false;
        errors.push("First name is required");
    }

    if (!fields.lastName.value.trim()) {
        fields.lastName.classList.add('invalid');
        isValid = false;
        errors.push("Last name is required");
    }

    const phoneRegex = /^[0-9+\s-]{10,}$/;
    if (!phoneRegex.test(fields.phoneNumber.value.trim())) {
        fields.phoneNumber.classList.add('invalid');
        isValid = false;
        errors.push("Please enter a valid phone number (min 10 digits)");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (fields.email.value.trim() && !emailRegex.test(fields.email.value.trim())) {
        fields.email.classList.add('invalid');
        isValid = false;
        errors.push("Please enter a valid email address");
    }

    if (!fields.service.value) {
        fields.service.classList.add('invalid');
        isValid = false;
        errors.push("Please select a service");
    }

    if (!fields.date.value) {
        fields.date.classList.add('invalid');
        isValid = false;
        errors.push("Please select an appointment date");
    }

    if (!fields.time.value) {
        fields.time.classList.add('invalid');
        isValid = false;
        errors.push("Please select an appointment time");
    }

    if (!isValid) {
        showToast("Validation Error", errors[0], "error");
        return false;
    }

    // Success state
    const btn = document.querySelector('.form-submit');
    const originalText = btn.textContent;

    btn.disabled = true;
    btn.textContent = 'Processing...';

    const formData = {
        firstName: fields.firstName.value.trim(),
        lastName: fields.lastName.value.trim(),
        phone: fields.phoneNumber.value.trim(),
        email: fields.email.value.trim(),
        service: fields.service.value,
        date: fields.date.value,
        time: fields.time.value,
        notes: fields.notes.value.trim()
    };

    try {
        // Formspree Integration
        // Replace 'YOUR_FORM_ID' with the actual ID from Formspree
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            // Hide form and show confirmation
            document.getElementById('bookingForm').style.display = 'none';
            document.getElementById('bookingConfirmation').style.display = 'flex';
            showToast("Success", "Your appointment request has been sent!", "success");

            // Clear form
            Object.values(fields).forEach(field => {
                if (field) field.value = '';
            });
        } else {
            showToast("Error", "There was a problem submitting your request. Please try again.", "error");
            btn.disabled = false;
            btn.textContent = originalText;
        }
    } catch (error) {
        showToast("Error", "Network error. Please try again later.", "error");
        btn.disabled = false;
        btn.textContent = originalText;
    }

    return false;
}

const resetBtn = document.getElementById('resetBookingFormBtn');
if (resetBtn) resetBtn.addEventListener('click', resetBookingForm);

function resetBookingForm() {
    document.getElementById('bookingConfirmation').style.display = 'none';
    document.getElementById('bookingForm').style.display = 'block';

    const btn = document.querySelector('.form-submit');
    btn.disabled = false;
    btn.textContent = 'Confirm Appointment →';
}

// Pricing Tabs Logic
document.addEventListener('DOMContentLoaded', () => {
    // Scroll Restrictions
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    const timeInput = document.getElementById('time');
    if (timeInput) {
        timeInput.setAttribute('min', '10:00');
        timeInput.setAttribute('max', '20:00');
    }

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
