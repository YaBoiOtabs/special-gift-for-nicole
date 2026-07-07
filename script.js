/* ── TULIPS ─────────────────────────────────────────── */
const tulipConfigs = [
    { height: 90,  flowerSize: 28, color1: '#185fa5', color2: '#85b7eb', delay: '0s',   duration: '3.2s', stemColor: '#81c784' },
    { height: 120, flowerSize: 34, color1: '#378add', color2: '#b5d4f4', delay: '0.4s', duration: '2.8s', stemColor: '#66bb6a' },
    { height: 75,  flowerSize: 24, color1: '#185fa5', color2: '#daeeff', delay: '0.8s', duration: '3.5s', stemColor: '#81c784' },
    { height: 140, flowerSize: 38, color1: '#0c447c', color2: '#85b7eb', delay: '0.2s', duration: '3.0s', stemColor: '#4caf50' },
    { height: 100, flowerSize: 30, color1: '#85b7eb', color2: '#daeeff', delay: '1.2s', duration: '2.6s', stemColor: '#81c784' },
    { height: 110, flowerSize: 32, color1: '#185fa5', color2: '#b5d4f4', delay: '0.6s', duration: '3.8s', stemColor: '#81c784' },
    { height: 85,  flowerSize: 26, color1: '#0c447c', color2: '#85b7eb', delay: '1.0s', duration: '3.3s', stemColor: '#4caf50' },
    { height: 125, flowerSize: 36, color1: '#378add', color2: '#daeeff', delay: '0.3s', duration: '2.9s', stemColor: '#66bb6a' },
    { height: 95,  flowerSize: 28, color1: '#185fa5', color2: '#b5d4f4', delay: '1.4s', duration: '3.6s', stemColor: '#81c784' },
];

const garden = document.getElementById('tulipGarden');
tulipConfigs.forEach(cfg => {
    const wrap = document.createElement('div');
    wrap.className = 'tulip-wrap';
    wrap.style.animationDuration = cfg.duration;
    wrap.style.animationDelay = cfg.delay;
    wrap.innerHTML = `
        <svg width="${cfg.flowerSize*2}" height="${cfg.height+cfg.flowerSize}" viewBox="0 0 ${cfg.flowerSize*2} ${cfg.height+cfg.flowerSize}" xmlns="http://www.w3.org/2000/svg">
            <line x1="${cfg.flowerSize}" y1="${cfg.flowerSize}" x2="${cfg.flowerSize}" y2="${cfg.height+cfg.flowerSize}" stroke="${cfg.stemColor}" stroke-width="3" stroke-linecap="round"/>
            <path d="M${cfg.flowerSize} ${cfg.height*0.55} Q${cfg.flowerSize-cfg.flowerSize*1.1} ${cfg.height*0.35} ${cfg.flowerSize-cfg.flowerSize*0.7} ${cfg.height*0.2}" stroke="${cfg.stemColor}" stroke-width="2" fill="${cfg.stemColor}" fill-opacity="0.5"/>
            <path d="M${cfg.flowerSize} ${cfg.height*0.7} Q${cfg.flowerSize+cfg.flowerSize*1.0} ${cfg.height*0.55} ${cfg.flowerSize+cfg.flowerSize*0.7} ${cfg.height*0.35}" stroke="${cfg.stemColor}" stroke-width="2" fill="${cfg.stemColor}" fill-opacity="0.5"/>
            <ellipse cx="${cfg.flowerSize*0.55}" cy="${cfg.flowerSize*1.1}" rx="${cfg.flowerSize*0.38}" ry="${cfg.flowerSize*0.62}" fill="${cfg.color1}" opacity="0.9" transform="rotate(-18,${cfg.flowerSize*0.55},${cfg.flowerSize*1.1})"/>
            <ellipse cx="${cfg.flowerSize*1.45}" cy="${cfg.flowerSize*1.1}" rx="${cfg.flowerSize*0.38}" ry="${cfg.flowerSize*0.62}" fill="${cfg.color1}" opacity="0.9" transform="rotate(18,${cfg.flowerSize*1.45},${cfg.flowerSize*1.1})"/>
            <ellipse cx="${cfg.flowerSize}" cy="${cfg.flowerSize*0.7}" rx="${cfg.flowerSize*0.36}" ry="${cfg.flowerSize*0.65}" fill="${cfg.color2}" opacity="0.95"/>
            <ellipse cx="${cfg.flowerSize*0.72}" cy="${cfg.flowerSize*1.0}" rx="${cfg.flowerSize*0.28}" ry="${cfg.flowerSize*0.55}" fill="${cfg.color2}" opacity="0.9" transform="rotate(-10,${cfg.flowerSize*0.72},${cfg.flowerSize*1.0})"/>
            <ellipse cx="${cfg.flowerSize*1.28}" cy="${cfg.flowerSize*1.0}" rx="${cfg.flowerSize*0.28}" ry="${cfg.flowerSize*0.55}" fill="${cfg.color2}" opacity="0.9" transform="rotate(10,${cfg.flowerSize*1.28},${cfg.flowerSize*1.0})"/>
        </svg>
    `;
    garden.appendChild(wrap);
});

/* ── PETALS ──────────────────────────────────────────── */
const petalEmojis = ['❄️','🫧','💧','🩵','🌀'];
const petalsLayer = document.getElementById('petalsLayer');
for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.textContent = petalEmojis[i % petalEmojis.length];
    p.style.left = (Math.random() * 100) + 'vw';
    p.style.fontSize = (1 + Math.random() * 1.2) + 'rem';
    p.style.animationDuration = (9 + Math.random() * 10) + 's';
    p.style.animationDelay = (Math.random() * 12) + 's';
    petalsLayer.appendChild(p);
}

/* ── SPARKLES ────────────────────────────────────────── */
const sparklesLayer = document.getElementById('sparklesLayer');
const sparkleColors = ['#b5d4f4','#85b7eb','#ffffff','#daeeff','#378add'];
for (let i = 0; i < 28; i++) {
    const s = document.createElement('div');
    s.className = 'sparkle';
    s.style.left = (Math.random() * 100) + 'vw';
    s.style.top  = (Math.random() * 100) + 'vh';
    s.style.width = s.style.height = (3 + Math.random() * 5) + 'px';
    s.style.background = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
    s.style.animationDuration = (2 + Math.random() * 4) + 's';
    s.style.animationDelay    = (Math.random() * 5) + 's';
    sparklesLayer.appendChild(s);
}

/* ── CLICKABLE STARS (pop & disappear on click) ──────── */
const starsLayer = document.getElementById('starsLayer');
const starEmojis = ['⭐','✨','💫','🌟','⚡'];
const starBurstEmojis = ['🩵','💙','❄️','✨','💎','🌊','🫧'];

for (let i = 0; i < 22; i++) {
    const star = document.createElement('div');
    star.className = 'star-dot';
    star.textContent = starEmojis[i % starEmojis.length];
    star.style.left = (3 + Math.random() * 94) + 'vw';
    star.style.top  = (5 + Math.random() * 88) + 'vh';
    star.style.fontSize = (0.7 + Math.random() * 0.9) + 'rem';
    star.style.animationDuration = (1.5 + Math.random() * 3) + 's';
    star.style.animationDelay    = (Math.random() * 3) + 's';
    star.addEventListener('click', (e) => {
        e.stopPropagation();
        burstStar(e.clientX, e.clientY, star);
    });
    starsLayer.appendChild(star);
}

function burstStar(x, y, starEl) {
    /* scale-up then vanish */
    if (starEl) {
        starEl.style.transition = 'transform 0.22s ease-out, opacity 0.28s ease';
        starEl.style.transform  = 'scale(2.4)';
        starEl.style.opacity    = '0';
        starEl.style.pointerEvents = 'none';
        setTimeout(() => starEl.remove(), 300);
    }
    /* burst particles */
    const count = 10;
    for (let i = 0; i < count; i++) {
        const b = document.createElement('div');
        b.textContent = starBurstEmojis[Math.floor(Math.random() * starBurstEmojis.length)];
        const angle = (i / count) * 360;
        const dist  = 35 + Math.random() * 65;
        const rad   = (angle * Math.PI) / 180;
        const tx    = Math.cos(rad) * dist;
        const ty    = Math.sin(rad) * dist;
        b.style.cssText = `
            position:fixed; pointer-events:none; z-index:999;
            left:${x}px; top:${y}px; font-size:${0.8 + Math.random()*0.7}rem;
            opacity:1; transform:translate(0,0) scale(1);
            transition: all ${0.45 + Math.random()*0.4}s ease-out;
        `;
        document.body.appendChild(b);
        requestAnimationFrame(() => requestAnimationFrame(() => {
            b.style.transform = `translate(${tx}px,${ty}px) scale(1.7)`;
            b.style.opacity   = '0';
        }));
        setTimeout(() => b.remove(), 950);
    }
}

/* ── FLOATING HEARTS ─────────────────────────────────── */
const heartEmojis = ['🩵','💙','🫧','💎','🌊'];
for (let i = 0; i < 8; i++) {
    const h = document.createElement('div');
    h.className = 'heart-float';
    h.textContent = heartEmojis[i % heartEmojis.length];
    h.style.left = (5 + Math.random() * 90) + 'vw';
    h.style.bottom = '-50px';
    h.style.animationDuration = (14 + Math.random() * 12) + 's';
    h.style.animationDelay    = (Math.random() * 14) + 's';
    document.body.appendChild(h);
}

/* ── TYPING ANIMATION ────────────────────────────────── */
const letterLines = [
    'Dear Nicole,', '', 'You are appreciated.',
    'You matter more than you realize.',
    'Never forget that. 🩵', '', '— with love'
];
const fullText = letterLines.join('\n');
let typingStarted = false;

function startTyping() {
    if (typingStarted) return;
    typingStarted = true;
    const el = document.getElementById('letterText');
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    el.textContent = '';
    el.appendChild(cursor);
    let idx = 0;
    function typeNext() {
        if (idx < fullText.length) {
            const char = fullText[idx];
            el.insertBefore(document.createTextNode(char), cursor);
            idx++;
            setTimeout(typeNext, char === '\n' ? 240 : 38 + Math.random() * 20);
        } else {
            setTimeout(() => cursor.remove(), 1200);
        }
    }
    setTimeout(typeNext, 400);
}

/* ── CONFETTI BURST ──────────────────────────────────── */
const confettiColors = ['#378add','#85b7eb','#daeeff','#185fa5','#b5d4f4','#ffffff','#0c447c'];

function launchConfetti(originX, originY) {
    const layer = document.getElementById('confettiLayer');
    for (let i = 0; i < 60; i++) {
        const c     = document.createElement('div');
        const angle = Math.random() * 360;
        const dist  = 50 + Math.random() * 160;
        const rad   = (angle * Math.PI) / 180;
        const tx    = Math.cos(rad) * dist;
        const ty    = Math.sin(rad) * dist;
        const size  = 5 + Math.random() * 8;
        c.style.cssText = `
            position:fixed; pointer-events:none; z-index:500;
            left:${originX}px; top:${originY}px;
            width:${size}px; height:${size}px;
            background:${confettiColors[Math.floor(Math.random()*confettiColors.length)]};
            border-radius:${Math.random()>0.5?'50%':'2px'};
            opacity:1;
            transition: all ${0.6+Math.random()*0.7}s ease-out;
            transform: translate(0,0) rotate(0deg) scale(1);
        `;
        layer.appendChild(c);
        requestAnimationFrame(() => requestAnimationFrame(() => {
            c.style.transform = `translate(${tx}px,${ty}px) rotate(${angle*4}deg) scale(0.3)`;
            c.style.opacity   = '0';
        }));
        setTimeout(() => c.remove(), 1500);
    }
}

/* ── ENVELOPE OPEN ───────────────────────────────────── */
let envelopeOpened = false;
function openEnvelope() {
    if (envelopeOpened) return;
    envelopeOpened = true;

    const env         = document.getElementById('envelope');
    const hint        = document.querySelector('.env-hint');
    const cardWrapper = document.getElementById('cardWrapper');

    env.classList.add('opened');
    hint.style.opacity    = '0';
    hint.style.transition = 'opacity 0.4s';

    setTimeout(() => {
        cardWrapper.classList.add('revealed');
        startTyping();
        const envEl = document.getElementById('envelopeWrapper');
        const rect  = envEl.getBoundingClientRect();
        launchConfetti(rect.left + rect.width/2, rect.top + rect.height/2);
    }, 420);

    setTimeout(() => {
        const ew = document.getElementById('envelopeWrapper');
        ew.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        ew.style.opacity    = '0';
        ew.style.transform  = 'translateY(30px) scale(0.95)';
        setTimeout(() => { ew.style.display = 'none'; }, 650);
    }, 1100);
}

/* ── MUSIC (toggle play/pause + visualizer) ──────────── */
let musicPlaying = false;
function playMusic() {
    const music = document.getElementById('music');
    const btn   = document.querySelector('.btn-music');
    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
        btn.innerHTML = '🎵 Play Your Song';
        stopVisualizer();
    } else {
        music.play().then(() => {
            musicPlaying = true;
            btn.innerHTML = '⏸ Pause Song';
            startVisualizer();
        }).catch(err => console.log(err));
    }
}

/* ── SECRET ──────────────────────────────────────────── */
function showSecret() {
    const secret = document.getElementById('secret');
    const btn    = document.querySelector('.btn-secret');
    if (secret.style.display === 'block') {
        secret.style.display = 'none';
    } else {
        secret.style.display = 'block';
        const rect = btn.getBoundingClientRect();
        launchConfetti(rect.left + rect.width/2, rect.top + rect.height/2);
    }
}

/* ── DAY / NIGHT TOGGLE ──────────────────────────────── */
let isNight = false;
function toggleTheme() {
    isNight = !isNight;
    document.body.classList.toggle('night', isNight);
    const btn = document.getElementById('themeBtn');
    btn.textContent = isNight ? '☀️' : '🌙';
    btn.title       = isNight ? 'Switch to Day' : 'Switch to Night';
    if (isNight) startMeteors(); else stopMeteors();
}

/* ── FALLING METEORITES (night-only) ─────────────────── */
let meteorTimeout = null;

function spawnMeteor() {
    if (!isNight) return;

    const m      = document.createElement('div');
    m.className  = 'meteor';
    const startX = 5  + Math.random() * 75;
    const startY = 2  + Math.random() * 28;
    const length = 90 + Math.random() * 130;
    const angle  = 28 + Math.random() * 22;

    m.style.cssText = `
        position:fixed; pointer-events:none; z-index:3;
        left:${startX}vw; top:${startY}vh;
        width:${length}px; height:2px;
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(180,210,255,0.85) 55%, white 100%);
        border-radius: 2px;
        filter: drop-shadow(0 0 4px rgba(180,210,255,0.9));
        transform: rotate(${angle}deg) scaleX(0);
        transform-origin: right center;
        opacity: 0;
        transition: transform 0.32s ease-in, opacity 0.15s ease-in;
    `;
    document.body.appendChild(m);

    /* fly in */
    requestAnimationFrame(() => requestAnimationFrame(() => {
        m.style.transform = `rotate(${angle}deg) scaleX(1)`;
        m.style.opacity   = '1';
    }));

    /* tiny glow dot at the head */
    const glow = document.createElement('div');
    glow.style.cssText = `
        position:fixed; pointer-events:none; z-index:4;
        left:${startX}vw; top:${startY}vh;
        font-size:0.5rem; opacity:0;
        transition: opacity 0.15s;
    `;
    glow.textContent = '✦';
    document.body.appendChild(glow);
    setTimeout(() => { glow.style.opacity = '1'; }, 60);

    /* fade out tail */
    setTimeout(() => {
        m.style.transition = 'opacity 0.38s ease-out, transform 0.38s ease-in';
        m.style.opacity    = '0';
        m.style.transform  = `rotate(${angle}deg) scaleX(1.1) translateX(50px)`;
        glow.style.opacity = '0';
    }, 360);

    setTimeout(() => { m.remove(); glow.remove(); }, 800);

    /* schedule next */
    meteorTimeout = setTimeout(spawnMeteor, 700 + Math.random() * 2600);
}

function startMeteors() {
    if (meteorTimeout) return;
    meteorTimeout = setTimeout(spawnMeteor, 400);
}
function stopMeteors() {
    clearTimeout(meteorTimeout);
    meteorTimeout = null;
    document.querySelectorAll('.meteor').forEach(m => m.remove());
}

/* ── MUSIC VISUALIZER ────────────────────────────────── */
let audioCtx  = null;
let analyser  = null;
let vizRaf    = null;
let vizActive = false;

function initVisualizer() {
    if (audioCtx) return true;
    try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 64;
        const src = audioCtx.createMediaElementSource(document.getElementById('music'));
        src.connect(analyser);
        analyser.connect(audioCtx.destination);
        return true;
    } catch(e) {
        console.warn('Visualizer unavailable:', e);
        return false;
    }
}

function startVisualizer() {
    if (!initVisualizer()) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const canvas = document.getElementById('vizCanvas');
    if (!canvas) return;
    canvas.classList.add('active');

    const ctx    = canvas.getContext('2d');
    const bufLen = analyser.frequencyBinCount;
    const data   = new Uint8Array(bufLen);
    vizActive    = true;

    function draw() {
        if (!vizActive) return;
        vizRaf = requestAnimationFrame(draw);
        analyser.getByteFrequencyData(data);

        const W  = canvas.width  = canvas.offsetWidth;
        const H  = canvas.height = canvas.offsetHeight;
        ctx.clearRect(0, 0, W, H);

        const bars  = Math.min(bufLen, 28);
        const gap   = 3;
        const barW  = (W - gap * (bars + 1)) / bars;
        const night = document.body.classList.contains('night');

        for (let i = 0; i < bars; i++) {
            const val  = data[i] / 255;
            const barH = Math.max(4, val * H * 0.9);
            const x    = gap + i * (barW + gap);
            const y    = H - barH;

            const grad = ctx.createLinearGradient(0, y, 0, H);
            if (night) {
                grad.addColorStop(0, `rgba(133,183,235,${0.5 + val*0.5})`);
                grad.addColorStop(1, `rgba(24,95,165,${0.25 + val*0.4})`);
            } else {
                grad.addColorStop(0, `rgba(55,138,221,${0.65 + val*0.35})`);
                grad.addColorStop(1, `rgba(181,212,244,${0.3 + val*0.4})`);
            }
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.roundRect(x, y, barW, barH, [barW/2, barW/2, 3, 3]);
            ctx.fill();

            /* glow cap */
            if (val > 0.3) {
                ctx.beginPath();
                ctx.arc(x + barW/2, y - 2, barW * 0.4, 0, Math.PI * 2);
                ctx.fillStyle = night
                    ? `rgba(180,220,255,${val*0.9})`
                    : `rgba(55,138,221,${val*0.85})`;
                ctx.fill();
            }
        }

        /* pulsing card border glow */
        const avg  = data.slice(0, bars).reduce((a,b) => a+b, 0) / bars / 255;
        const card = document.querySelector('.card');
        if (card) {
            const px = Math.round(avg * 20);
            card.style.boxShadow = night
                ? `0 20px 60px rgba(0,0,0,0.5),0 6px 20px rgba(0,0,0,0.3),inset 0 1px 0 rgba(133,183,235,0.15),0 0 ${px}px rgba(55,138,221,${0.2+avg*0.65})`
                : `0 20px 60px rgba(24,95,165,0.22),0 6px 20px rgba(0,0,0,0.07),inset 0 1px 0 rgba(255,255,255,0.9),0 0 ${px}px rgba(55,138,221,${0.15+avg*0.55})`;
        }
    }
    draw();
}

function stopVisualizer() {
    vizActive = false;
    if (vizRaf) { cancelAnimationFrame(vizRaf); vizRaf = null; }
    const card = document.querySelector('.card');
    if (card) card.style.boxShadow = '';
    const canvas = document.getElementById('vizCanvas');
    if (canvas) {
        canvas.classList.remove('active');
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    }
}

/* ── PAGE NAVIGATION ─────────────────────────────────── */
function switchPage(page) {
    document.getElementById('pageEnvelope').classList.toggle('hidden', page !== 'envelope');
    document.getElementById('pageMemories').classList.toggle('hidden', page !== 'memories');
    document.getElementById('navEnvelope').classList.toggle('active', page === 'envelope');
    document.getElementById('navMemories').classList.toggle('active', page === 'memories');
    if (page === 'memories') initCarousel();
}

/* ── CIRCULAR CAROUSEL ───────────────────────────────── */
/*
  HOW TO ADD YOUR PHOTOS:
  Replace `photo` values with file paths e.g. 'photos/pic1.jpg'
  Leave `photo` as '' to show the emoji placeholder.
  Edit `caption` and `label` for each card.
*/
const memoryCards = [
    { photo: 'photos/pic1.jpg', emoji: '🌊', caption: 'Our first memory together 🩵', label: 'Memory 1' },
    { photo: 'photos/pic2.jpg', emoji: '🩵', caption: 'A moment I will never forget',       label: 'Memory 2' },
    { photo: 'photos/pic3.jpg', emoji: '❄️', caption: 'You looked so happy here',           label: 'Memory 3' },
    { photo: 'photos/pic4.jpg', emoji: '💙', caption: 'This one makes me smile',            label: 'Memory 4' },
    { photo: 'photos/pic5.jpg', emoji: '✨', caption: 'Grateful for this day',              label: 'Memory 5' },
    { photo: 'photos/pic6.jpg', emoji: '💎', caption: 'One of my favorites of us',         label: 'Memory 6' },
];

let carouselAngle  = 0;
let activeIndex    = 0;
let carouselBuilt  = false;
let isDragging     = false;
let dragStartX     = 0;
let dragStartAngle = 0;
let autoSpinId     = null;

function initCarousel() {
    if (carouselBuilt) return;
    carouselBuilt = true;

    const carousel = document.getElementById('carousel');
    const dotsEl   = document.getElementById('carouselDots');
    const n        = memoryCards.length;
    const radius   = Math.max(260, n * 58);

    memoryCards.forEach((mem, i) => {
        const card      = document.createElement('div');
        card.className  = 'mem-card';
        const angleStep = (360 / n) * i;
        card.style.transform = `rotateY(${angleStep}deg) translateZ(${radius}px)`;
        card.innerHTML = `
            <div class="mem-card-inner">
                ${mem.photo
                    ? `<img class="mem-photo" src="${mem.photo}" alt="${mem.label}" loading="lazy">`
                    : `<div class="mem-photo-placeholder">${mem.emoji}</div>`}
                <div class="mem-label">${mem.label}</div>
            </div>
        `;
        carousel.appendChild(card);

        const dot = document.createElement('div');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => { stopAutoSpin(); goTo(i); });
        dotsEl.appendChild(dot);
    });

    updateCarouselCaption();
    bindCarouselDrag();
    startAutoSpin();
}

function goTo(index) {
    const n     = memoryCards.length;
    activeIndex = ((index % n) + n) % n;
    carouselAngle = -(360 / n) * activeIndex;
    document.getElementById('carousel').style.transform = `rotateY(${carouselAngle}deg)`;
    updateCarouselCaption();
    updateDots();
}

function updateCarouselCaption() {
    const cap = document.getElementById('carouselCaption');
    if (!cap) return;
    cap.style.opacity = '0';
    setTimeout(() => { cap.textContent = memoryCards[activeIndex].caption; cap.style.opacity = '0.85'; }, 200);
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === activeIndex));
}

function bindCarouselDrag() {
    const container = document.getElementById('carouselContainer');

    container.addEventListener('mousedown', e => {
        isDragging = true; dragStartX = e.clientX; dragStartAngle = carouselAngle; stopAutoSpin();
    });
    window.addEventListener('mousemove', e => {
        if (!isDragging) return;
        carouselAngle = dragStartAngle + (e.clientX - dragStartX) * 0.4;
        document.getElementById('carousel').style.transform = `rotateY(${carouselAngle}deg)`;
    });
    window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false; snapCarousel(); setTimeout(startAutoSpin, 3000);
    });
    container.addEventListener('touchstart', e => {
        isDragging = true; dragStartX = e.touches[0].clientX; dragStartAngle = carouselAngle; stopAutoSpin();
    }, { passive: true });
    window.addEventListener('touchmove', e => {
        if (!isDragging) return;
        carouselAngle = dragStartAngle + (e.touches[0].clientX - dragStartX) * 0.4;
        document.getElementById('carousel').style.transform = `rotateY(${carouselAngle}deg)`;
    }, { passive: true });
    window.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false; snapCarousel(); setTimeout(startAutoSpin, 3000);
    });
}

function snapCarousel() {
    const n   = memoryCards.length;
    const step = 360 / n;
    const nearest = Math.round(-carouselAngle / step);
    activeIndex = ((nearest % n) + n) % n;
    goTo(activeIndex);
}

function startAutoSpin() {
    if (autoSpinId) return;
    autoSpinId = setInterval(() => {
        if (isDragging) return;
        carouselAngle -= 0.25;
        document.getElementById('carousel').style.transform = `rotateY(${carouselAngle}deg)`;
        const n   = memoryCards.length;
        const idx = (((Math.round(-carouselAngle / (360/n))) % n) + n) % n;
        if (idx !== activeIndex) { activeIndex = idx; updateCarouselCaption(); updateDots(); }
    }, 16);
}

function stopAutoSpin() {
    clearInterval(autoSpinId);
    autoSpinId = null;
}