const navbar_items = document.querySelectorAll(".navbar-nav .nav-item a");

navbar_items.forEach((navbar_item) => {
  navbar_item.addEventListener("click", () => {
    navbar_item.classList.add("isActive");
    navbar_items.forEach(function (otherItems) {
      if (otherItems !== navbar_item) {
        otherItems.classList.remove("isActive");
      }
    });
  });
});

const swiper = new Swiper(".swiper", {
  initialSlide: 2,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 110,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new TxtAnime(".element", {
  effect: "txt-an-4",
  delayStart: 0,
  delay: 0,
  duration: 1.5,
  repeat: true,
  overlayBackground: "#f0f0f0",
  text: ["INNOVATION", "FLEXIBILITE", "EXCELLENCE"],
});

// Afficher le bouton lorsque vous faites défiler vers le bas de la page
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

// Faites défiler vers le haut lorsque le bouton est cliqué
function scrollTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "image",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "http://127.0.0.1:5500/assets/img/dms%20-%20logo.png",
        width: 500,
        height: 500,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 3,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#2127c8",
      opacity: 0.464,
      width: 1.12,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 80,
        duration: 0.4,
      },
      push: {
        particles_nb: 2,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

// Récuperation du formulaire et du bouton d'envoi
const formulaire = document.getElementById("contact-form");
const envoyerBtn = document.getElementById("envoyer");

// Récupération des données du formulaire
const nom = document.getElementById("nomPrenoms");
const telephone = document.getElementById("telephone");
const email = document.getElementById("email");
const message = document.getElementById("message");

// Définition des expressions régulières
const regexNom = /^[a-zA-Z\s]{3,15}$/;
const regexTelephone = /^[0-9\s]{8,}$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexMessage = /^.{5,}$/;


// Quand un champ perd le focus on verifie ses infos
document.getElementById("nomPrenoms").addEventListener("blur", (e) => {
  const NomValide = regexNom.test(e.target.value);
  if (!NomValide) {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-invalid");
  } else {
    e.target.classList.remove("is-invalid");
    e.target.classList.add("is-valid");
  }
});

// Telephone
document.getElementById("telephone").addEventListener("blur", (e) => {
  const TelephoneValide = regexTelephone.test(e.target.value);
  if (!TelephoneValide) {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-invalid");
  } else {
    e.target.classList.remove("is-invalid");
    e.target.classList.add("is-valid");
  }
});

// Email
document.getElementById("email").addEventListener("blur", (e) => {
  const emailValide = regexEmail.test(e.target.value);
  if (!emailValide) {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-invalid");
  } else {
    e.target.classList.remove("is-invalid");
    e.target.classList.add("is-valid");
  }
});

// Message
document.getElementById("message").addEventListener("blur", (e) => {
  const messageValide = regexMessage.test(e.target.value);
  if (!messageValide) {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-invalid");
  } else {
    e.target.classList.remove("is-invalid");
    e.target.classList.add("is-valid");
  }
});
