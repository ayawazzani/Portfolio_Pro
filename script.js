document.addEventListener('DOMContentLoaded', function() {
    // 1. Sélection des éléments (مرة واحدة فقط لجميع الوظائف)
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    const downloadCvBtn = document.getElementById('download-cv');
    const bars = document.querySelectorAll('.bar');
    const yearElement = document.getElementById('current-year');

    // 2. Gestion du Menu Mobile (Burger Menu)
    function toggleMenu() {
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('active');
        
        // Animation des barres
        if (navLinks.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    }

    menuIcon.addEventListener('click', toggleMenu);

    // Fermer le menu lors du clic sur un lien
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) toggleMenu();
        });
    });

    // 3. Animation de la Navbar au Scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
            navbar.style.padding = '1.5rem 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // 4. Gestion de l'année dynamique
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 5. Effet de téléchargement du CV
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function(e) {
            const downloadText = this.querySelector('span');
            const downloadIcon = this.querySelector('i');
            
            // نترك الرابط يعمل (تنزيل الملف) لكن نضيف التأثير البصري
            downloadText.textContent = 'Téléchargement...';
            downloadIcon.className = 'fas fa-spinner fa-spin';
            
            setTimeout(() => {
                downloadText.textContent = 'CV Téléchargé !';
                downloadIcon.className = 'fas fa-check';
                
                setTimeout(() => {
                    downloadText.textContent = 'Télécharger mon CV';
                    downloadIcon.className = 'fas fa-download';
                }, 2000);
            }, 1500);
        });
    }

    // 6. Gestion des Ateliers (PDFs)
    const perTechDefaults = {
        mysql: [
            { title: "Atelier 1", pdf: "pdf/atelier1.pdf" },
            { title: "Atelier 2", pdf: "pdf/atelier2.pdf" },
            { title: "Atelier 3", pdf: "pdf/atelier3.pdf" },
            { title: "Atelier 4", pdf: "pdf/atelier4.pdf" },
            { title: "Atelier 5", pdf: "pdf/atelier5.pdf" },
            { title: "Atelier 6", pdf: "pdf/atelier6.pdf" },
            { title: "Atelier 7", pdf: "pdf/atelier7.pdf" }
        ],
        mongodb: [
            { title: "Atelier MongoDB 1", pdf: "pdf/atelier1 mongodb.pdf" },
            { title: "Atelier MongoDB 2", pdf: "pdf/atelier2 mongodb.pdf" },
            { title: "Atelier MongoDB 3", pdf: "pdf/atelier3 mongodb.pdf" },
            { title: "Atelier MongoDB 4", pdf: "pdf/atelier4 mongodb.pdf" },
            { title: "Atelier MongoDB 5", pdf: "pdf/atelier5 mongodb.pdf" },
            { title: "Atelier MongoDB 6", pdf: "pdf/atelier6 mongodb.pdf" },
            { title: "Atelier MongoDB 7", pdf: "pdf/atelier7 mongodb.pdf" }
        ]
    };

    // فتح الـ PDF
    document.querySelectorAll(".open-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const tech = btn.dataset.tech;
            const index = btn.dataset.index;
            if (perTechDefaults[tech] && perTechDefaults[tech][index]) {
                window.open(perTechDefaults[tech][index].pdf, "_blank");
            }
        });
    });

    // تحميل الـ PDF
    document.querySelectorAll(".download-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const tech = btn.dataset.tech;
            const index = btn.dataset.index;
            if (perTechDefaults[tech] && perTechDefaults[tech][index]) {
                const pdfPath = perTechDefaults[tech][index].pdf;
                const link = document.createElement("a");
                link.href = pdfPath;
                link.download = pdfPath.split("/").pop();
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        });
    });
});