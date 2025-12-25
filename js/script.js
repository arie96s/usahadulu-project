// --- 0. KONFIGURASI UMUM ---
const appConfig = {
    // SAYA UBAH JADI TRUE AGAR BACA DARI FOLDER LOKAL 'img/'
    useLocalImages: true, 
    localPath: 'img/',
};

// --- 1. DATA STRUCTURE ---
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
            price_start: "Mulai",
            btn_order_now: "PESAN SEKARANG"
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
            price_start: "Start from",
            btn_order_now: "ORDER NOW"
        }
    },
    services: [
        { 
            id: 'logo', 
            name_id: "LOGO & BRANDING", 
            name_en: "LOGO & BRANDING", 
            price: "IDR 250K",
            desc_id: "Pembuatan identitas visual yang kuat. Cocok untuk brand baru yang ingin tampil beda.",
            desc_en: "Strong visual identity creation. Perfect for new brands wanting to stand out.",
            packages: [
                { item: "Basic (Logo Only)", price: "250K" },
                { item: "Standard (Logo + Mockup)", price: "450K" },
                { item: "Pro (Full Branding Kit)", price: "800K" },
                { item: "Re-drawing Vector", price: "150K" }
            ]
        },
        { 
            id: 'apparel', 
            name_id: "DESAIN KAOS/APPAREL", 
            name_en: "APPAREL/T-SHIRT DESIGN", 
            price: "IDR 150K",
            desc_id: "Desain ilustrasi untuk merchandise, kaos band, streetwear, dan clothing line.",
            desc_en: "Illustration design for merchandise, band tees, streetwear, and clothing lines.",
            packages: [
                { item: "Typography Design", price: "150K" },
                { item: "Simple Illustration", price: "300K" },
                { item: "Detailed / Metal Artwork", price: "600K" },
                { item: "Full Merch Pack (F/B/S)", price: "850K" }
            ]
        },
        { 
            id: 'flyer', 
            name_id: "DESAIN POSTER/FLYER", 
            name_en: "FLYER/POSTER DESIGN", 
            price: "IDR 100K",
            desc_id: "Media promosi digital untuk event, gig musik, atau promo produk di sosial media.",
            desc_en: "Digital promotional media for events, music gigs, or product promos on social media.",
            packages: [
                { item: "Instagram Feed/Story", price: "100K" },
                { item: "Event Poster A3", price: "200K" },
                { item: "Menu Design (1 Page)", price: "250K" },
                { item: "Banner / Billboard", price: "300K" }
            ]
        },
        { 
            id: 'web', 
            name_id: "WEB UNDANGAN DIGITAL", 
            name_en: "WEB INVITATION", 
            price: "IDR 300K",
            desc_id: "Undangan berbasis website yang elegan, modern, dan mudah disebarkan.",
            desc_en: "Elegant, modern, and easily shareable website-based invitations.",
            packages: [
                { item: "Basic Template", price: "300K" },
                { item: "Custom Theme", price: "600K" },
                { item: "Exclusive Domain (.com)", price: "+200K" },
                { item: "Prioritas Pengerjaan", price: "+100K" }
            ]
        },
        { 
            id: 'video', 
            name_id: "VIDEO & MOTION GRAPHIC", 
            name_en: "VIDEO & MOTION GRAPHIC", 
            price: "IDR 200K",
            desc_id: "Editing video kreatif untuk Reels, TikTok, atau intro YouTube yang dinamis.",
            desc_en: "Creative video editing for Reels, TikTok, or dynamic YouTube intros.",
            packages: [
                { item: "Simple Cut/Edit (1 min)", price: "200K" },
                { item: "Motion Graphic Intro", price: "350K" },
                { item: "Lyric Video", price: "500K" },
                { item: "Teaser Event", price: "400K" }
            ]
        }
    ],
    
    // --- EDIT PORTOFOLIO DISINI ---
    // Cukup ganti 'fileName' dengan nama file yang ada di folder 'img/'
    portfolio: [
        { category: 'logo', title: 'NEON CYBERPUNK LOGO', fileName: 'logo_cyberpunk.jpg' },
        { category: 'apparel', title: 'MAGOS STREETWEAR V1', fileName: 'magos_v1.jpg' },
        { category: 'flyer', title: 'METAL BAND POSTER', fileName: 'poster_metal.jpg' },
        { category: 'art', title: 'DARK ARTS ILLUSTRATION', fileName: 'dark_art.jpg' },
        { category: 'logo', title: 'VINTAGE TYPOGRAPHY', fileName: 'logo_vintage.jpg' },
        { category: 'web', title: 'RETRO WAVE WEBSITE', fileName: 'web_retro.jpg' },
        { category: 'video', title: 'URBAN VLOG INTRO', fileName: 'video_vlog.jpg' },
        { category: 'flyer', title: 'EVENT FLYER DUMAI', fileName: 'flyer_dumai.jpg' },
        { category: 'apparel', title: 'GOTHIC MERCHANDISE', fileName: 'merch_gothic.jpg' },
        { category: 'video', title: 'ABSTRACT MOTION', fileName: 'video_abstract.jpg' },
        { category: 'web', title: 'WEDDING INVITATION', fileName: 'web_wedding.jpg' }
    ],
    filters: ['logo', 'apparel', 'web', 'video', 'flyer']
};

// --- 2. INITIALIZATION ---
function initSite() {
    updateLanguageUI();
    renderServices();
    renderPortfolio('all');
    renderFilters();
    updateWALinks();
    setupExternalLinks();
}

function toggleLanguage() {
    siteData.currentLang = siteData.currentLang === 'id' ? 'en' : 'id';
    const toggleBtn = document.getElementById('langToggle');
    toggleBtn.setAttribute('data-lang', siteData.currentLang);
    
    updateLanguageUI();
    renderServices(); 
    renderFilters(); 
    updateWALinks();
}

function updateLanguageUI() {
    const lang = siteData.currentLang;
    const t = siteData.translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerHTML = t[key];
    });
    document.getElementById('aboutText').innerHTML = t.about_desc;
}

function updateWALinks() {
    const lang = siteData.currentLang;
    const phone = "6282283687565";
    const msg = encodeURIComponent(lang === 'id' ? "Halo, saya ingin bertanya jasa desain." : "Hello, I want to ask about design services.");
    document.getElementById('waFloatBtn').href = `https://wa.me/${phone}?text=${msg}`;
}

// --- 3. DYNAMIC SERVICES RENDERING ---
function renderServices() {
    const container = document.getElementById('dynamicServiceList');
    container.innerHTML = '';
    const lang = siteData.currentLang;
    const t = siteData.translations[lang];

    siteData.services.forEach(svc => {
        const name = lang === 'id' ? svc.name_id : svc.name_en;
        const desc = lang === 'id' ? svc.desc_id : svc.desc_en;
        
        let tableRows = '';
        svc.packages.forEach(pkg => {
            tableRows += `<tr><td>${pkg.item}</td><td>${pkg.price}</td></tr>`;
        });

        const li = document.createElement('li');
        li.className = 'service-wrapper';
        
        li.innerHTML = `
            <div class="service-header hover-target" onclick="toggleServiceItem(this)">
                <span class="service-name-main">${name}</span>
                <span class="service-icon-state">▼</span>
            </div>
            <div class="service-body">
                <p class="service-desc">${desc}</p>
                <table class="price-table">
                    ${tableRows}
                </table>
                <div class="service-btn-wrapper">
                    <button class="service-action-btn hover-target" onclick="openOrderPopup('${name}')">${t.btn_order_now}</button>
                </div>
            </div>
        `;
        container.appendChild(li);
    });
    bindHoverEvents();
}

function toggleServiceItem(headerElement) {
    headerElement.classList.toggle('active');
    const body = headerElement.nextElementSibling;
    
    if (headerElement.classList.contains('active')) {
        body.style.maxHeight = body.scrollHeight + "px";
    } else {
        body.style.maxHeight = null;
    }

    updateParentAccordion();
    setTimeout(updateParentAccordion, 600);
}

function updateParentAccordion() {
    const parentContent = document.getElementById('serviceMenu').querySelector('.accordion-content');
    if (parentContent.style.maxHeight && parentContent.style.maxHeight !== '0px') {
        parentContent.style.maxHeight = parentContent.scrollHeight + "px";
    }
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

// --- 4. PORTFOLIO & FILTERING LOGIC ---
function renderFilters() {
    const container = document.getElementById('filterContainer');
    container.innerHTML = '';
    const lang = siteData.currentLang;
    const t = siteData.translations[lang];

    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn hover-target active';
    allBtn.innerText = t.filter_all;
    allBtn.onclick = (e) => handleFilterClick(e, 'all');
    container.appendChild(allBtn);

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
    const items = filterCategory === 'all' ? siteData.portfolio : siteData.portfolio.filter(item => item.category === filterCategory);

    if (items.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#666;">No items found.</p>';
        return;
    }

    items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'portfolio-item hover-target';
        div.style.animationDelay = `${index * 0.1}s`;
        
        // LOGIC LOKAL IMAGE
        let finalSrc = '';
        if (appConfig.useLocalImages) {
            finalSrc = appConfig.localPath + item.fileName;
        } else {
            // Fallback ke demoUrl jika config false (opsional)
            finalSrc = item.demoUrl; 
        }

        div.onclick = () => openLightbox(finalSrc, item.title);
        
        div.innerHTML = `
            <img src="${finalSrc}" alt="${item.title}" onerror="this.onerror=null; this.src='https://via.placeholder.com/500x500?text=No+Image';">
            <div class="portfolio-tag">${item.category.toUpperCase()}</div>
        `;
        grid.appendChild(div);
    });
    bindHoverEvents();
}

// --- 5. INTERACTION & UTILS ---
const cursor = document.getElementById('cursor');
function bindHoverEvents() {
    const hoverTargets = document.querySelectorAll('.hover-target, a, .menu-title, .close-modal, .order-btn, .service-action-btn, .page-num, .cta-btn, .float-wa, .portfolio-item, .lang-switch');
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

const menuBtn = document.getElementById('menuBtn');
const navOverlay = document.getElementById('navOverlay');
const mainHeader = document.getElementById('mainHeader');

// Logic Ganti Logo saat Toggle Menu
function toggleMenu() {
    menuBtn.classList.toggle('active');
    navOverlay.classList.toggle('open');
    mainHeader.classList.toggle('menu-active');
    document.body.classList.toggle('no-scroll');

    const logoImg = document.getElementById('headerLogoImg');
    if (navOverlay.classList.contains('open')) {
        // Pastikan file ini ada di folder img/
        logoImg.src = 'img/logo_ambigram.png';
    } else {
        logoImg.src = 'img/logo_web.png';
    }
}

function closeMenu() {
    menuBtn.classList.remove('active');
    navOverlay.classList.remove('open');
    mainHeader.classList.remove('menu-active');
    document.body.classList.remove('no-scroll');
    document.getElementById('headerLogoImg').src = 'img/logo_web.png';
}

menuBtn.addEventListener('click', toggleMenu);

function setupExternalLinks() {
    document.querySelectorAll('.close-menu-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

function openOrderPopup(serviceName) {
    document.getElementById('orderTitle').innerText = "ORDER: " + serviceName;
    const lang = siteData.currentLang;
    const prefix = siteData.translations[lang].order_prefix;
    
    const message = encodeURIComponent(`${prefix}${serviceName}.`);
    document.getElementById('btnWA').href = `https://wa.me/6282283687565?text=${message}`;
    
    closeMenu();
    document.getElementById('orderModal').classList.add('show');
}

function openPortfolioModal() {
    renderPortfolio('all');
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.filter-btn').classList.add('active');
    closeMenu();
    document.getElementById('portfolioModal').classList.add('show');
}

function openAboutModal() {
    closeMenu();
    document.getElementById('aboutModal').classList.add('show');
}

function openServicesFromHero() {
    if (!navOverlay.classList.contains('open')) {
        toggleMenu();
    }
    const serviceItem = document.getElementById('serviceMenu');
    const content = serviceItem.querySelector('.accordion-content');
    if (!content.style.maxHeight) {
        toggleAccordion('serviceMenu');
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

function openLightbox(src, title) {
    const modal = document.getElementById('lightboxModal');
    const img = document.getElementById('lightboxImg');
    const loader = document.getElementById('lightboxLoader');
    const titleEl = document.getElementById('lightboxTitle');

    titleEl.innerText = title || "DESIGN PREVIEW";
    modal.classList.add('show');
    img.style.display = 'none';
    loader.style.display = 'block';

    // Karena pakai lokal, langsung src saja
    img.src = src;
    img.onload = () => {
        loader.style.display = 'none'; 
        img.style.display = 'block';   
    };
    img.onerror = () => {
        loader.style.display = 'none';
        alert("Gambar tidak ditemukan di folder img/. Pastikan nama file benar.");
    }
}

function closeLightboxOnly() {
    document.getElementById('lightboxModal').classList.remove('show');
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        if (event.target.id === 'lightboxModal') {
            closeLightboxOnly(); 
        } else {
            event.target.classList.remove('show');
        }
    }
}

const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 4000);

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    initSite();
});