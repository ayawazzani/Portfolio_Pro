document.addEventListener('DOMContentLoaded', function() {
    // Sélection des éléments
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    const downloadCv = document.getElementById('download-cv');

    // Toggle du menu burger
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('active');
        
        // Animation des barres du menu burger
        const bars = document.querySelectorAll('.bar');
        if (navLinks.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Fermer le menu lors du clic sur un lien
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('active');
            const bars = document.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });

    // Animation au scroll
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

    // Effet de téléchargement du CV
    downloadCv.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Animation de téléchargement
        const downloadText = this.querySelector('span');
        const downloadIcon = this.querySelector('i');
        
        downloadText.textContent = 'Téléchargement...';
        downloadIcon.className = 'fas fa-spinner fa-spin';
        
        // Simuler un téléchargement (à remplacer par votre logique de téléchargement réelle)
        setTimeout(() => {
            downloadText.textContent = 'CV Téléchargé !';
            downloadIcon.className = 'fas fa-check';
            
            // Réinitialiser après 2 secondes
            setTimeout(() => {
                downloadText.textContent = 'Télécharger mon CV';
                downloadIcon.className = 'fas fa-download';
            }, 2000);
            
        }, 1500);
    });

    // Animation au chargement de la page
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
});


// Script pour l'année dynamique
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Mobile menu toggle
        const menuIcon = document.getElementById('menu-icon');
        const navLinks = document.getElementById('nav-links');
        
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuIcon.classList.toggle('active');
        });

        // Update current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

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

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".open-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tech = btn.dataset.tech;   // mysql | mongodb
      const index = btn.dataset.index;

      if (perTechDefaults[tech] && perTechDefaults[tech][index]) {
        window.open(perTechDefaults[tech][index].pdf, "_blank");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const mysqlAteliers = perTechDefaults.mysql;

  /* فتح ملف PDF */
  document.querySelectorAll(".open-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      if (mysqlAteliers[index]) {
        window.open(mysqlAteliers[index].pdf, "_blank");
      }
    });
  });

  /* تحميل ملف PDF */
  document.querySelectorAll(".download-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      if (mysqlAteliers[index]) {
        const link = document.createElement("a");
        link.href = mysqlAteliers[index].pdf;
        link.download = mysqlAteliers[index].pdf.split("/").pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  });
});
