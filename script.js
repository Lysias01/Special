/* ========================================
   JAVASCRIPT POUR CINTHYA - VERSION COMPLÈTE
   Saint-Valentin 2026
   ======================================== */

// Date de rencontre : 18 Septembre 2021
const startDate = new Date('2021-09-18T00:00:00');

// ========================================
// BIENVENUE - OVERLAY D'ENTRÉE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const welcomeOverlay = document.getElementById('welcomeOverlay');
    const enterBtn = document.getElementById('enterBtn');
    
    // Masquer l'overlay quand on clique sur Entrer
    enterBtn.addEventListener('click', () => {
        welcomeOverlay.classList.add('hidden');
        // Démarrer les animations après l'entrée
        setTimeout(() => {
            startAllAnimations();
        }, 800);
    });
});

// ========================================
// TYPING TEXT EFFECT
// ========================================
const typingText = document.getElementById('typingText');
const messages = [
    "Tu compte beaucoup pour moi 💕",
    "Je t'aime énormément 😍",
    "Mon cœur t'appartient 💘",
    "Je pense toujours à toi quand t'es loin de moi 😔"
];

let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentMessage = messages[messageIndex];
    
    if (isDeleting) {
        typingText.textContent = currentMessage.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentMessage.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentMessage.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeEffect, typeSpeed);
}

// Démarrer le typing après l'entrée
function startAllAnimations() {
    typeEffect();
    startHearts();
    startParticles();
    startFloatingHearts();
    initMessageSlider();
    initQuiz();
}

// ========================================
// COMPTEUR TEMPS ENSEMBLE
// ========================================
function updateCounter() {
    const now = new Date();
    const diff = now - startDate;
    
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    const years = Math.floor(days / 365);
    const remainingDaysAfterYears = days % 365;
    const months = Math.floor(remainingDaysAfterYears / 30);
    const actualDays = remainingDaysAfterYears % 30;
    
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = actualDays;
    document.getElementById('hours').textContent = hours % 24;
    document.getElementById('minutes').textContent = minutes % 60;
    document.getElementById('seconds').textContent = seconds % 60;
}

updateCounter();
setInterval(updateCounter, 1000);

// ========================================
// ANIMATION DES CŒURS QUI TOMBENT
// ========================================
function createHeart() {
    const heart = document.createElement('div');
    const hearts = ['❤️', '🙃', '🥰', '😍', '💘', '💝', '😘', '💟'];
    heart.classList.add('heart-float');
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    
    const size = Math.random() * 25 + 20;
    heart.style.fontSize = size + 'px';
    
    const duration = Math.random() * 5 + 8;
    heart.style.animationDuration = duration + 's';
    
    heart.style.animationDelay = Math.random() * 3 + 's';
    
    document.getElementById('heartsContainer').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

function startHearts() {
    createHeart();
    setInterval(createHeart, 1500);
}

// ========================================
// PARTICLES BACKGROUND
// ========================================
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particle.style.animationDuration = (Math.random() * 5 + 6) + 's';
    
    document.getElementById('particles').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 11000);
}

function startParticles() {
    for (let i = 0; i < 15; i++) {
        setTimeout(createParticle, i * 300);
    }
    setInterval(createParticle, 800);
}

// ========================================
// FLOATING HEARTS HERO
// ========================================
function createFloatingHeart() {
    const container = document.getElementById('floatingHearts');
    if (!container) return;
    
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 3 + 's';
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

function startFloatingHearts() {
    for (let i = 0; i < 10; i++) {
        setTimeout(createFloatingHeart, i * 500);
    }
    setInterval(createFloatingHeart, 2000);
}

// ========================================
// MESSAGES SLIDER
// ========================================
function initMessageSlider() {
    const messages = document.querySelectorAll('.message-card');
    const dotsContainer = document.getElementById('sliderDots');
    
    if (!messages.length || !dotsContainer) return;
    
    // Créer les points de navigation
    messages.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showMessage(index));
        dotsContainer.appendChild(dot);
    });
    
    let currentMessage = 0;
    
    function showMessage(index) {
        messages.forEach((msg, i) => {
            msg.classList.remove('active');
            if (i === index) {
                msg.classList.add('active');
            }
        });
        
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
        
        currentMessage = index;
    }
    
    // Auto-rotation
    setInterval(() => {
        currentMessage = (currentMessage + 1) % messages.length;
        showMessage(currentMessage);
    }, 4000);
}

// ========================================
// QUIZ INTERACTIF
// ========================================
function initQuiz() {
    const quizBtns = document.querySelectorAll('.quiz-btn');
    const quizResult = document.getElementById('quizResult');
    
    if (!quizBtns.length) return;
    
    quizBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.dataset.answer;
            
            // Reset all buttons
            quizBtns.forEach(b => {
                b.classList.remove('correct', 'wrong');
                b.disabled = true;
            });
            
            if (answer === 'right') {
                btn.classList.add('correct');
                quizResult.textContent = '🥰 Exact ! Je pense à toi tout le temps, mon amour !';
                
                // Celebration hearts
                for (let i = 0; i < 15; i++) {
                    setTimeout(createCelebrationHeart, i * 150);
                }
            } else {
                btn.classList.add('wrong');
                quizResult.textContent = '😢 Mauvaise réponse... Clique encore pour essayer !';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    quizBtns.forEach(b => {
                        b.classList.remove('wrong');
                        b.disabled = false;
                    });
                    quizResult.textContent = '';
                }, 2000);
            }
        });
    });
}

function createCelebrationHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart-sparkle');
    heart.innerHTML = ['❤️', '💕', '💖', '💗', '💘', '💝', '🌟'][Math.floor(Math.random() * 7)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '50%';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// ========================================
// LETTRE D'AMOUR INTERACTIVE
// ========================================
const envelope = document.getElementById('envelope');
const openLetterBtn = document.getElementById('openLetterBtn');
const letterContent = document.getElementById('letterContent');
let isLetterOpen = false;

function openLetter() {
    if (!isLetterOpen) {
        letterContent.classList.add('show');
        openLetterBtn.innerHTML = '<span class="btn-text">Fermer</span><span class="btn-icon">✉️</span>';
        isLetterOpen = true;
        
        // Créer des cœurs flottants
        for (let i = 0; i < 15; i++) {
            setTimeout(createCelebrationHeart, i * 100);
        }
    } else {
        letterContent.classList.remove('show');
        openLetterBtn.innerHTML = '<span class="btn-text">Ouvrir ma lettre</span><span class="btn-icon">💌</span>';
        isLetterOpen = false;
    }
}

if (openLetterBtn) openLetterBtn.addEventListener('click', openLetter);
if (envelope) envelope.addEventListener('click', openLetter);

// ========================================
// ANIMATIONS AU SCROLL
// ========================================
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.compliment-card, .photo-frame, .reason-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

handleScrollAnimations();

// ========================================
// CLICK SUR LE TITRE POUR SURPRISE
// ========================================
const title = document.querySelector('.title');
if (title) {
    title.addEventListener('click', () => {
        for (let i = 0; i < 25; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('floating-heart-sparkle');
                heart.innerHTML = ['❤️', '💕', '💖', '💗', '💘', '💝', '🌟', '✨'][Math.floor(Math.random() * 8)];
                heart.style.left = (Math.random() * 80 + 10) + 'vw';
                heart.style.top = '40%';
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 3000);
            }, i * 100);
        }
    });
}

// ========================================
// MESSAGE CONSOLE
// ========================================
console.log(`
💕💕💕💕💕💕💕💕💕💕💕💕💕
💕                          💕
💕   Joyeuse Saint-Valentin  💕
💕       Cinthya !         💕
💕                          💕
💕💕💕💕💕💕💕💕💕💕💕💕💕

Créé avec ❤️ pour la personne la plus spéciale 💕
18 Septembre 2021 - Le début de notre belle histoire 💑
`);

console.log('%c💕 Site créé avec amour pour Cinthya 💕', 'font-size: 24px; color: #ff477e; font-weight: bold;');
console.log('%cJe t\'aime plus que tout ! ❤️', 'font-size: 16px; color: #ff6b9d;');



//photo
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxVideo = document.querySelector('.lightbox-video');
const lightboxVideoSource = lightboxVideo.querySelector('source');
const closeBtn = document.querySelector('.lightbox-close');

document.querySelectorAll('.photo-frame img, .photo-frame video').forEach(item => {
    item.addEventListener('click', () => {
        if(item.tagName.toLowerCase() === 'img'){
            lightboxImg.src = item.src;
            lightboxImg.style.display = 'block';
            lightboxVideo.style.display = 'none';
        } else if(item.tagName.toLowerCase() === 'video'){
            const videoSrc = item.querySelector('source').src;
            lightboxVideoSource.src = videoSrc;
            lightboxVideo.load();          // recharge la vidéo
            lightboxVideo.style.display = 'block';
            lightboxImg.style.display = 'none';
        }
        lightbox.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxVideo.pause();
});

lightbox.addEventListener('click', e => {
    if(e.target === lightbox){
        lightbox.style.display = 'none';
        lightboxVideo.pause();
    }
});