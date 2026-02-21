const htmlElement = document.documentElement;
const darkModeToggle = document.getElementById('dark-mode-toggle');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const scrollProgress = document.getElementById('scrollProgress');
const resumeModal = document.getElementById('resumeModal');
const openResumeBtn = document.getElementById('openResumeBtn');
const openResumeBtnContact = document.getElementById('openResumeBtnContact');
const closeResumeBtn = document.getElementById('closeResumeBtn');
const getInTouchBtn = document.getElementById('getInTouchBtn');
const projectSearch = document.getElementById('projectSearch');
const clearProjectSearch = document.getElementById('clearProjectSearch');
const projectsEmptyState = document.getElementById('projectsEmptyState');
const copyEmailBtn = document.getElementById('copyEmailBtn');
const experienceFilterButtons = document.querySelectorAll('.exp-filter-btn');
const experienceCards = Array.from(document.querySelectorAll('.experience-card'));
const docModal = document.getElementById('docModal');
const docFrame = document.getElementById('docFrame');
const docModalTitle = document.getElementById('docModalTitle');
const docModalOpen = document.getElementById('docModalOpen');
const closeDocBtn = document.getElementById('closeDocBtn');
const aboutGalleryItems = Array.from(document.querySelectorAll('.about-gallery-item'));
const aboutGalleryPrev = document.getElementById('aboutGalleryPrev');
const aboutGalleryNext = document.getElementById('aboutGalleryNext');
const aboutGalleryDots = document.querySelector('.about-gallery-dots');
let activeFilter = 'all';

function trackProjectClick(projectName, href) {
    if (window.plausible) {
        window.plausible('Project Click', {
            props: {
                project: projectName,
                destination: href
            }
        });
    }

    if (window.gtag) {
        window.gtag('event', 'project_click', {
            event_category: 'engagement',
            event_label: projectName,
            value: 1,
            destination: href
        });
    }
}

if (localStorage.getItem('darkMode') === 'enabled') {
    htmlElement.classList.add('dark-mode');
}

function updateThemeIcon() {
    if (!darkModeToggle) return;
    const icon = darkModeToggle.querySelector('i');
    const isDark = htmlElement.classList.contains('dark-mode');
    icon.classList.remove('fa-moon', 'fa-sun');
    icon.classList.add(isDark ? 'fa-sun' : 'fa-moon');
}

updateThemeIcon();

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark-mode');
        const isDark = htmlElement.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
        updateThemeIcon();
    });
}

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}

if (openResumeBtn && resumeModal) {
    openResumeBtn.addEventListener('click', () => {
        resumeModal.classList.add('open');
        resumeModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    });
}

if (openResumeBtnContact && resumeModal) {
    openResumeBtnContact.addEventListener('click', () => {
        resumeModal.classList.add('open');
        resumeModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    });
}

if (closeResumeBtn && resumeModal) {
    closeResumeBtn.addEventListener('click', () => {
        resumeModal.classList.remove('open');
        resumeModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    });
}

if (resumeModal) {
    resumeModal.addEventListener('click', event => {
        if (event.target === resumeModal) {
            resumeModal.classList.remove('open');
            resumeModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    });
}

document.querySelectorAll('.doc-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        if (!docModal || !docFrame || !docModalTitle || !docModalOpen) return;
        const url = link.dataset.doc || link.getAttribute('href');
        const title = link.dataset.title || link.textContent.trim();
        if (!url) return;
        docFrame.src = url;
        docModalTitle.textContent = title;
        docModalOpen.href = url;
        docModal.classList.add('open');
        docModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    });
});

if (aboutGalleryItems.length && aboutGalleryPrev && aboutGalleryNext && aboutGalleryDots) {
    let galleryIndex = aboutGalleryItems.findIndex(item => item.classList.contains('is-active'));
    if (galleryIndex < 0) galleryIndex = 0;

    const dots = aboutGalleryItems.map((_, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'about-gallery-dot';
        dot.setAttribute('aria-label', `Show photo ${index + 1}`);
        dot.addEventListener('click', () => setGalleryIndex(index));
        aboutGalleryDots.appendChild(dot);
        return dot;
    });

    const setGalleryIndex = nextIndex => {
        aboutGalleryItems[galleryIndex]?.classList.remove('is-active');
        dots[galleryIndex]?.classList.remove('is-active');
        galleryIndex = (nextIndex + aboutGalleryItems.length) % aboutGalleryItems.length;
        aboutGalleryItems[galleryIndex].classList.add('is-active');
        dots[galleryIndex]?.classList.add('is-active');
    };

    aboutGalleryPrev.addEventListener('click', () => {
        setGalleryIndex(galleryIndex - 1);
    });

    aboutGalleryNext.addEventListener('click', () => {
        setGalleryIndex(galleryIndex + 1);
    });

    setGalleryIndex(galleryIndex);
}

if (closeDocBtn && docModal) {
    closeDocBtn.addEventListener('click', () => {
        docModal.classList.remove('open');
        docModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (docFrame) docFrame.src = '';
    });
}

if (docModal) {
    docModal.addEventListener('click', event => {
        if (event.target === docModal) {
            docModal.classList.remove('open');
            docModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            if (docFrame) docFrame.src = '';
        }
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('open');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
        const targetId = anchor.getAttribute('href');
        const target = document.querySelector(targetId);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

if (getInTouchBtn) {
    getInTouchBtn.addEventListener('click', () => {
        setTimeout(() => {
            document.querySelector('.contact-form .form-input')?.focus();
        }, 450);
    });
}

document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (resumeModal?.classList.contains('open')) {
        resumeModal.classList.remove('open');
        resumeModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
    if (docModal?.classList.contains('open')) {
        docModal.classList.remove('open');
        docModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (docFrame) docFrame.src = '';
    }
});

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

document.querySelectorAll('.reveal').forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 0.03, 0.24)}s`;
});

const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.type = 'button';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', () => {
        const project = link.dataset.project || link.closest('.project-card')?.querySelector('h3')?.textContent?.trim() || 'unknown';
        trackProjectClick(project, link.href);
    });
});

document.querySelectorAll('.project-media-link').forEach(link => {
    link.addEventListener('click', () => {
        const project = link.dataset.project || 'unknown';
        trackProjectClick(project, link.href);
    });
});

if (experienceFilterButtons.length && experienceCards.length) {
    experienceFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter || 'all';

            experienceFilterButtons.forEach(btn => {
                const isActive = btn === button;
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-pressed', String(isActive));
            });

            experienceCards.forEach(card => {
                const categories = (card.dataset.expCategory || '').split(/\s+/).filter(Boolean);
                const shouldShow = filter === 'all' || categories.includes(filter);
                card.style.display = shouldShow ? '' : 'none';
            });
        });
    });
}

if (projectSearch) {
    const cards = Array.from(document.querySelectorAll('.project-card'));

    const runProjectFilter = () => {
        const query = projectSearch.value.trim().toLowerCase();
        let visibleCount = 0;

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            const techs = (card.dataset.tech || '').split(/\s+/).filter(Boolean);
            const matchesSearch = text.includes(query);
            const matchesTech = activeFilter === 'all' || techs.includes(activeFilter.toLowerCase());
            const show = matchesSearch && matchesTech;
            card.style.display = show ? '' : 'none';
            if (show) visibleCount += 1;
        });

        if (projectsEmptyState) {
            projectsEmptyState.hidden = visibleCount !== 0;
        }
    };

    projectSearch.addEventListener('input', runProjectFilter);
    clearProjectSearch?.addEventListener('click', () => {
        projectSearch.value = '';
        runProjectFilter();
        projectSearch.focus();
    });
}

// Technology filter for projects
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = Array.from(document.querySelectorAll('.project-card'));

if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(b => b.classList.remove('filter-active'));
            btn.classList.add('filter-active');
            activeFilter = btn.dataset.tech || 'all';

            // Filter cards
            projectCards.forEach(card => {
                const techs = (card.dataset.tech || '').split(/\s+/).filter(Boolean);
                const matchesFilter = activeFilter === 'all' || techs.includes(activeFilter.toLowerCase());
                const matchesSearch = projectSearch ? card.textContent.toLowerCase().includes(projectSearch.value.toLowerCase()) : true;
                card.style.display = (matchesFilter && matchesSearch) ? '' : 'none';
            });
        });
    });
}

if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
        const email = 'arvin.askari@queensu.ca';
        const original = copyEmailBtn.textContent;
        try {
            await navigator.clipboard.writeText(email);
            copyEmailBtn.textContent = 'Copied ✓';
        } catch {
            copyEmailBtn.textContent = 'Copy Failed';
        }
        setTimeout(() => {
            copyEmailBtn.textContent = original;
        }, 1200);
    });
}

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = `${progress}%`;

    if (scrollTopBtn) {
        scrollTopBtn.classList.toggle('show', scrollTop > 380);
    }

    let activeId = '';
    const sections = document.querySelectorAll('#hero, #about, #experience, #projects, #competitions, #writing, #skills, #contact');
    const viewportCenter = window.innerHeight / 2;
    
    sections.forEach(section => {
        const { top, height } = section.getBoundingClientRect();
        const sectionCenter = top + height / 2;
        const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);
        
        if (!activeId || distanceFromCenter < Math.abs(document.querySelector(`#${activeId}`)?.getBoundingClientRect().top + document.querySelector(`#${activeId}`)?.getBoundingClientRect().height / 2 - viewportCenter)) {
            activeId = section.id;
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
    });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const statusEl = document.getElementById('contactStatus');
    const honeypotInput = contactForm.querySelector('input[name="company"]');
    const nameInput = contactForm.querySelector('input[name="name"]');
    const emailInput = contactForm.querySelector('input[name="email"]');
    const messageInput = contactForm.querySelector('textarea[name="message"]');

    const setStatus = (message, type = '') => {
        if (!statusEl) return;
        statusEl.textContent = message;
        statusEl.classList.remove('success', 'error');
        if (type) statusEl.classList.add(type);
    };

    const setFieldError = (field, hasError) => {
        if (!field) return;
        field.classList.toggle('has-error', hasError);
        field.setAttribute('aria-invalid', hasError ? 'true' : 'false');
    };

    const validateForm = () => {
        const nameValue = nameInput?.value.trim() || '';
        const emailValue = emailInput?.value.trim() || '';
        const messageValue = messageInput?.value.trim() || '';
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let valid = true;

        const nameInvalid = nameValue.length < 2;
        setFieldError(nameInput, nameInvalid);
        if (nameInvalid) valid = false;

        const emailInvalid = !emailPattern.test(emailValue);
        setFieldError(emailInput, emailInvalid);
        if (emailInvalid) valid = false;

        const messageInvalid = messageValue.length < 10;
        setFieldError(messageInput, messageInvalid);
        if (messageInvalid) valid = false;

        return valid;
    };

    contactForm.addEventListener('submit', async event => {
        event.preventDefault();
        const button = contactForm.querySelector('button[type="submit"]');
        const original = button.textContent;

        if (honeypotInput?.value.trim()) {
            contactForm.reset();
            setStatus('Thanks! Your message has been received.', 'success');
            return;
        }

        if (!validateForm()) {
            setStatus('Please complete all fields with a valid email and message.', 'error');
            return;
        }

        button.textContent = 'Sending...';
        button.disabled = true;
        setStatus('Sending message...');

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { Accept: 'application/json' }
            });

            if (response.ok) {
                button.textContent = 'Sent ✓';
                contactForm.reset();
                setFieldError(nameInput, false);
                setFieldError(emailInput, false);
                setFieldError(messageInput, false);
                setStatus('Message sent successfully. I will get back to you soon.', 'success');
            } else {
                button.textContent = 'Try Again';
                setStatus('Something went wrong. Please try again in a moment.', 'error');
            }
        } catch {
            button.textContent = 'Try Again';
            setStatus('Connection issue. Please try again.', 'error');
        }

        setTimeout(() => {
            button.disabled = false;
            button.textContent = original;
            // Keep success message visible for longer
            if (!statusEl.classList.contains('success')) {
                setStatus('');
            }
        }, 2400);
    });
}