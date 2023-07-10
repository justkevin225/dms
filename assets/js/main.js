window.addEventListener('load', function() {
  const loader = document.querySelector('.loader-container');
  loader.style.display = 'none';
});

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
const regexNom = /^[a-zA-Z\s]{3,25}$/;
const regexTelephone = /^[0-9\s]{8,}$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexMessage = /^.{5,}$/;

let nomValide = false;
let telephoneValide = false;
let emailValide = false;
let messageValide = false;

// Quand un champ perd le focus on verifie ses infos
document.getElementById("nomPrenoms").addEventListener("blur", (e) => {
  nomValide = regexNom.test(e.target.value);
  if (!nomValide) {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-invalid");
  } else {
    e.target.classList.remove("is-invalid");
    e.target.classList.add("is-valid");
  }
});

// Telephone
document.getElementById("telephone").addEventListener("blur", (e) => {
  telephoneValide = regexTelephone.test(e.target.value);
  if (!telephoneValide) {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-invalid");
  } else {
    e.target.classList.remove("is-invalid");
    e.target.classList.add("is-valid");
  }
});

// Email
document.getElementById("email").addEventListener("blur", (e) => {
  emailValide = regexEmail.test(e.target.value);
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
  messageValide = regexMessage.test(e.target.value);
  if (!messageValide) {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-invalid");
  } else {
    e.target.classList.remove("is-invalid");
    e.target.classList.add("is-valid");
  }
});

formulaire.addEventListener("submit", (e) => {
  var notyf = new Notyf();

  if (
    nomValide == true &&
    telephoneValide == true &&
    emailValide == true &&
    messageValide == true
  ) {
    e.preventDefault();

    let messageToSend = encodeURIComponent(`
    Nom et prenoms : ${nom.value}
    Numéro de téléphone : ${telephone.value}
    Email: ${email.value}
    Message : ${message.value}
    `);
    let url =
      "https://api.callmebot.com/whatsapp.php?phone=+22565100029&text=" +
      messageToSend +
      "&apikey=9252314";

    fetch(url)
      .then((response) => {
        if (response.ok) {
          console.log("Message envoyé avec succès !");
        } else {
          console.error(
            "Échec de l'envoi du message. Statut de la réponse :",
            response.status
          );
        }
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de l'envoi du message :",
          error
        );
      });
    notyf.success("Message envoyé avec succès !");
    // On reinitialise
    setTimeout(() => {
      // Parcourez tous les éléments du formulaire
      Array.from(formulaire.elements).forEach((element) => {
        // Vérifiez si l'élément est un champ d'entrée et réinitialise sa valeur
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.value = "";
          element.classList.remove("is-valid");
          element.classList.remove("is-invalid");
        }
      });
    }, 2000);
  } else {
    e.preventDefault();
    notyf.error("Remplissez tous les champs du formulaire s'il vous plaît !");
  }
});
