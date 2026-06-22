document.addEventListener('DOMContentLoaded', () => {
    
    // ---------------------------------------------------------
    // 1. AOS (Animasyon) Başlatma
    // ---------------------------------------------------------
    AOS.init({
        duration: 1000, // Animasyon süresi (milisaniye)
        offset: 100,    // Tetiklenme mesafesi
        once: true      // Sadece bir kere çalışsın
    });

    // ---------------------------------------------------------
    // 2. Typed.js (Yazı Efekti) Ayarları
    // ---------------------------------------------------------
    var typed = new Typed(".auto-type", {
        strings: [
            "Bilgisayar Programcılığı Öğrencisiyim", 
            "Web Geliştiriciyim", 
            "Gamer (Valorant & Forza)", 
            "Teknoloji Tutkunuyum"
        ],
        typeSpeed: 100,  // Yazma hızı
        backSpeed: 50,   // Silme hızı
        loop: true       // Döngü (sürekli tekrar etsin)
    });

    // ---------------------------------------------------------
    // 3. Particles.js (Hareketli Arka Plan)
    // ---------------------------------------------------------
    // ÖNEMLİ: HTML'de <div id="particles-js"></div> olduğundan emin ol.
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2, // Noktaların hareket hızı
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse" // Fare üzerindeyken kaçışma efekti
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 100, // Kaçma mesafesi
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // ---------------------------------------------------------
    // 4. Yukarı Çık Butonu (Back to Top) - Eğer eklediysen çalışır
    // ---------------------------------------------------------
    const toTop = document.querySelector(".to-top");
    if(toTop) {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 100) {
                toTop.classList.add("active");
            } else {
                toTop.classList.remove("active");
            }
        });
    }

    // ---------------------------------------------------------
    // 5. Easter Egg (Sürpriz)
    // ---------------------------------------------------------
    console.log("%c Dur! %c", "background: red; color: white; font-size: 24px; padding: 5px;", "");
    console.log("Bu kodlar İskender Taştan tarafından inceleniyor.");
    console.log("Dostum olmaz, hasmım yaşamaz! - İskender Büyük");

});

// --- Özel Mouse Hareketi ---
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function(e){
    // Küçük nokta anında takip etsin
    cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    // Büyük halka da aynısını yapsın (CSS'teki transition sayesinde geç gelecek)
    cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

// --- Preloader Kapatma ---
window.addEventListener("load", function() {
    var loader = document.getElementById("preloader");
    // Yarım saniye bekleyip kaybolsun ki animasyon görünsün
    setTimeout(function() {
        loader.style.opacity = "0"; // Şeffaflaştır
        setTimeout(function(){
            loader.style.display = "none"; // Tamamen kaldır
        }, 500);
    }, 1000); 
});

// --- Canlı Saat ---
function updateClock() {
    var now = new Date();
    // Saati, dakikayı ve saniyeyi al
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Ekrana yazdır
    var clockElement = document.getElementById('live-clock');
    if (clockElement) {
        clockElement.textContent = hours + ":" + minutes + ":" + seconds;
    }
}
// Her saniye güncelle
setInterval(updateClock, 1000);
updateClock(); // Sayfa açılır açılmaz bir kez çalıştır