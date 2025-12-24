// --- 0. KONFIGURASI UMUM ---
const appConfig = {
    useLocalImages: false,  // false = pakai Unsplash, true = pakai folder 'img/'
    localPath: 'img/',      // Nama folder tempat menyimpan gambar
};

// --- 1. DATA STRUCTURE (JSON) ---
const siteData = {
    currentLang: 'id',
    translations: {
        id: {
            nav_services: "LAYANAN",
            nav_portfolio: "PORTOFOLIO",
            nav_contact: "KONTAK",
            nav_about: "TENTANG",
            hero_cta: "MULAI PROYEK",
            about_title: "TENTANG KAMI",
            about_desc: "<strong>USAHADULU.COM</strong> adalah entitas kreatif yang bergerak di bidang visual digital. Fokus pada estetika underground, streetwear, dark arts, dan desain fungsional. Kami berbasis di Dumai.",
            portfolio_title: "KARYA KAMI",
            order_prefix: "Halo Admin USAHADULU, saya tertarik order ",
            filter_all: "SEMUA",
            price_start: "Mulai"
        },
        en: {
            nav_services: "SERVICES",
            nav_portfolio: "PORTFOLIO",
            nav_contact: "CONTACT",
            nav_about: "ABOUT",
            hero_cta: "START PROJECT",
            about_title: "ABOUT US",
            about_desc: "<strong>USAHADULU.COM</strong> is a creative entity specializing in digital visuals. Focused on underground aesthetics, streetwear, dark arts, and functional design. Based in Dumai City.",
            portfolio_title: "OUR WORK",
            order_prefix: "Hello Admin USAHADULU, I'm interested in ordering ",
            filter_all: "ALL",
            price_start: "Start from"
        }
    },
    services: [
        { id: 'logo', name_id: "LOGO & BRANDING", name_en: "LOGO & BRANDING", price: "IDR 250K" },
        { id: 'apparel', name_id: "DESAIN KAOS/APPAREL", name_en: "APPAREL/T-SHIRT DESIGN", price: "IDR 150K" },
        { id: 'flyer', name_id: "DESAIN POSTER/FLYER", name_en: "FLYER/POSTER DESIGN", price: "IDR 100K" },
        { id: 'web', name_id: "WEB UNDANGAN DIGITAL", name_en: "WEB INVITATION", price: "IDR 300K" },
        { id: 'video', name_id: "VIDEO & MOTION GRAPHIC", name_en: "VIDEO & MOTION GRAPHIC", price: "IDR 200K" }
    ],
    
    // --- PORTFOLIO DATA ---
    portfolio: [
        { category: 'logo', title: 'NEON CYBERPUNK LOGO', fileName: 'logo_cyberpunk.jpg', demoUrl: 'https://images.unsplash.com/photo-1571120038865-c35012e1284a?auto=format&fit=crop&w=500&q=60' },
        { category: 'apparel', title: 'MAGOS STREETWEAR V1', fileName: 'magos_v1.jpg', demoUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=60' },
        { category: 'flyer', title: 'METAL BAND POSTER', fileName: 'poster_metal.jpg', demoUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=500&q=60' },
        { category: 'art', title: 'DARK ARTS ILLUSTRATION', fileName: 'dark_art.jpg', demoUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=60' },
        { category: 'logo', title: 'VINTAGE TYPOGRAPHY', fileName: 'logo_vintage.jpg', demoUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=500&q=60' },
        { category: 'web', title: 'RETRO WAVE WEBSITE', fileName: 'web_retro.jpg', demoUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=60' },
        { category: 'video', title: 'URBAN VLOG INTRO', fileName: 'video_vlog.jpg', demoUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=500&q=60' },
        { category: 'flyer', title: 'EVENT FLYER DUMAI', fileName: 'flyer_dumai.jpg', demoUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=60' },
        { category: 'apparel', title: 'GOTHIC MERCHANDISE', fileName: 'merch_gothic.jpg', demoUrl: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=500&q=60' },
        { category: 'video', title: 'ABSTRACT MOTION', fileName: 'video_abstract.jpg', demoUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=500&q=60' },
        { category: 'web', title: 'WEDDING INVITATION', fileName: 'web_wedding.jpg', demoUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=60' }
    ],
    filters: ['logo', 'apparel', 'web', 'video', 'flyer']
};

// --- 2. INITIALIZATION & LANGUAGE LOGIC ---
function initSite() {
    updateLanguageUI();
    renderServices();
    renderPortfolio('all');
    renderFilters();
    
    // Set Default WA Link
    updateWALinks();
    
    // Setup Links Close
    setupExternalLinks();
}

function toggleLanguage() {
    siteData.currentLang = siteData.currentLang === 'id' ? 'en' : 'id';
    const toggleBtn = document.getElementById('langToggle');
    toggleBtn.setAttribute('data-lang', siteData.currentLang);
    
    updateLanguageUI();
    renderServices(); // Re-render services for lang change
    renderFilters();  // Re-render filters (for "ALL" text)
    updateWALinks();
}

function updateLanguageUI() {
    const lang = siteData.currentLang;
    const t = siteData.translations[lang];

    // Update text elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerHTML = t[key]; // innerHTML allows bold tags
    });

    // Update specific static content
    document.getElementById('aboutText').innerHTML = t.about_desc;
}

function updateWALinks() {
    const lang = siteData.currentLang;
    const t = siteData.translations[lang];
    const phone = "6282283687565";
    const msg = encodeURIComponent(lang === 'id' ? "Halo, saya ingin bertanya jasa desain." : "Hello, I want to ask about design services.");
    
    document.getElementById('waFloatBtn').href = `https://wa.me/${phone}?text=${msg}`;
}

// --- 3. DYNAMIC SERVICES RENDERING ---
function renderServices() {
    const container = document.getElementById('dynamicServiceList');
    container.innerHTML = '';
    const lang = siteData.currentLang;

    siteData.services.forEach(svc => {
        const name = lang === 'id' ? svc.name_id : svc.name_en;
        const li = document.createElement('li');
        li.className = 'service-list-item hover-target';
        li.onclick = () => openOrderPopup(name);
        
        li.innerHTML = `
            <span class="service-name">${name}</span>
            <span class="service-price">${siteData.translations[lang].price_start} ${svc.price}</span>
        `;
        container.appendChild(li);
    });
    bindHoverEvents();
}

// --- 4. PORTFOLIO & FILTERING LOGIC ---
function renderFilters() {
    const container = document.getElementById('filterContainer');
    container.innerHTML = '';
    const lang = siteData.currentLang;
    const t = siteData.translations[lang];

    // "ALL" Button
    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn hover-target active';
    allBtn.innerText = t.filter_all;
    allBtn.onclick = (e) => handleFilterClick(e, 'all');
    container.appendChild(allBtn);

    // Dynamic Category Buttons
    siteData.filters.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn hover-target';
        btn.innerText = cat.toUpperCase();
        btn.onclick = (e) => handleFilterClick(e, cat);
        container.appendChild(btn);
    });
    bindHoverEvents();
}

function handleFilterClick(e, category) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderPortfolio(category);
}

function renderPortfolio(filterCategory) {
    const grid = document.getElementById('portfolioGrid');
    grid.innerHTML = '';

    const items = filterCategory === 'all' 
        ? siteData.portfolio 
        : siteData.portfolio.filter(item => item.category === filterCategory);

    if (items.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#666;">No items found.</p>';
        return;
    }

    items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'portfolio-item hover-target';
        div.style.animationDelay = `${index * 0.1}s`;
        
        let finalSrc = "";
        if (appConfig.useLocalImages) {
            finalSrc = appConfig.localPath + item.fileName;
        } else {
            finalSrc = item.demoUrl;
        }

        div.onclick = () => openLightbox(finalSrc, item.title);
        
        div.innerHTML = `
            <img src="${finalSrc}" alt="${item.title}">
            <div class="portfolio-tag">${item.category.toUpperCase()}</div>
        `;
        grid.appendChild(div);
    });

    bindHoverEvents();
}

// --- 5. INTERACTION & UTILS ---

// Custom Cursor
const cursor = document.getElementById('cursor');
function bindHoverEvents() {
    const hoverTargets = document.querySelectorAll('.hover-target, a, .menu-title, .close-modal, .order-btn, .page-num, .cta-btn, .float-wa, .portfolio-item, .lang-switch');
    hoverTargets.forEach(target => {
        target.removeEventListener('mouseenter', null); 
        target.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
        target.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });
}
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Modals & Navigation
const menuBtn = document.getElementById('menuBtn');
const navOverlay = document.getElementById('navOverlay');
const mainHeader = document.getElementById('mainHeader');

// Toggle Menu Function
function toggleMenu() {
    menuBtn.classList.toggle('active');
    navOverlay.classList.toggle('open');
    mainHeader.classList.toggle('menu-active');
    
    // Lock body scroll
    document.body.classList.toggle('no-scroll');
}

// Close Menu Function
function closeMenu() {
    menuBtn.classList.remove('active');
    navOverlay.classList.remove('open');
    mainHeader.classList.remove('menu-active');
    document.body.classList.remove('no-scroll');
}

menuBtn.addEventListener('click', toggleMenu);

// Close menu when clicking external links (e.g., Magos, IG)
function setupExternalLinks() {
    const links = document.querySelectorAll('.close-menu-link');
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

function toggleAccordion(id) {
    const item = document.getElementById(id);
    const content = item.querySelector('.accordion-content');
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        document.querySelectorAll('.accordion-content').forEach(el => el.style.maxHeight = null);
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

function openOrderPopup(serviceName) {
    document.getElementById('orderTitle').innerText = "ORDER: " + serviceName;
    const lang = siteData.currentLang;
    const prefix = siteData.translations[lang].order_prefix;
    
    const message = encodeURIComponent(`${prefix}${serviceName}.`);
    document.getElementById('btnWA').href = `https://wa.me/6282283687565?text=${message}`;
    
    closeMenu(); // Close menu first
    document.getElementById('orderModal').classList.add('show');
}

function openPortfolioModal() {
    // Reset to All when opening
    renderPortfolio('all');
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.filter-btn').classList.add('active');

    closeMenu(); // Close menu first
    document.getElementById('portfolioModal').classList.add('show');
}

function openAboutModal() {
    closeMenu(); // Close menu first
    document.getElementById('aboutModal').classList.add('show');
}

function openServicesFromHero() {
    if (!navOverlay.classList.contains('open')) {
        toggleMenu();
    }
    const serviceItem = document.getElementById('serviceMenu');
    const content = serviceItem.querySelector('.accordion-content');
    content.style.maxHeight = content.scrollHeight + "px";
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

// Lightbox
function openLightbox(src, title) {
    const modal = document.getElementById('lightboxModal');
    const img = document.getElementById('lightboxImg');
    const loader = document.getElementById('lightboxLoader');
    const titleEl = document.getElementById('lightboxTitle');

    titleEl.innerText = title || "DESIGN PREVIEW";
    modal.classList.add('show');
    img.style.display = 'none';
    loader.style.display = 'block';

    let displaySrc = src;

    if (!appConfig.useLocalImages && src.includes('unsplash')) {
        displaySrc = src.replace('w=500', 'w=1600').replace('q=60', 'q=90');
    } 

    img.src = displaySrc;

    img.onload = () => {
        loader.style.display = 'none'; 
        img.style.display = 'block';   
    };
}

function closeLightboxOnly() {
    document.getElementById('lightboxModal').classList.remove('show');
}

// Global Click to Close
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        if (event.target.id === 'lightboxModal') {
            closeLightboxOnly(); 
        } else {
            event.target.classList.remove('show');
        }
    }
}

// Hero Slider
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 4000);

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    
    initSite();
});