
/* ================= SOUNDS ================= */
const beep = new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=");

/* ================= GLOBAL CHAOS SWITCH ================= */
let chaos = true;

/* ================= INTERVAL HOLDERS ================= */
let titleInterval, alertInterval, shakeInterval, countdownInterval;

/* ================= ☢️ NUCLEAR TITLE MODE ☢️ ================= */
let titleGrow = 1;
const titleWords = [
    "💀 YOU GOT HACKED 💀",
    "☢️ FBI WARNING ☢️",
    "😈 CHAOS MODE 😈",
    "🚨 SYSTEM ERROR 🚨",
    "🔥 DO NOT CLOSE 🔥"
];
const emojis = ["💀","☢️","🔥","😈","🚨","👁️","🧠","📡"];

titleInterval = setInterval(() => {
    if (!chaos) return;

    const word = titleWords[Math.floor(Math.random() * titleWords.length)];
    const emojiSpam = emojis[Math.floor(Math.random() * emojis.length)].repeat(titleGrow);
    document.title = word + " " + emojiSpam;

    if (titleGrow < 20) titleGrow++;
}, 100);

/* ================= PAGE LOAD ATTACK ================= */
setTimeout(() => alert("⚠️ WARNING ⚠️"), 400);
setTimeout(() => alert("SYSTEM BREACH DETECTED"), 900);
setTimeout(() => alert("DOWNLOADING VIRUS... 37%"), 1400);
setTimeout(() => alert("JUST KIDDING 😂"), 2000);

/* ================= RANDOM ALERT SPAM ================= */
function randomAlert() {
    if (!chaos) return;
    const msgs = [
        "🚨 SYSTEM ERROR 🚨",
        "💀 YOU GOT HACKED 💀",
        "🔥 STOP CLICKING 🔥",
        "📡 UPLOADING DATA...",
        "😈 TOO LATE 😈",
        "🧠 SCANNING BRAIN..."
    ];
    alert(msgs[Math.floor(Math.random() * msgs.length)]);
    beep.play();
}
alertInterval = setInterval(randomAlert, 4500);

/* ================= SCREEN SHAKE ================= */
shakeInterval = setInterval(() => {
    if (!chaos) return;
    document.body.style.transform =
        `translate(${Math.random()*12-6}px, ${Math.random()*12-6}px)`;
}, 90);

/* ================= BREAK IT: FAKE COUNTDOWN ================= */
let count = 5;
countdownInterval = setInterval(() => {
    if (!chaos) return;
    alert("💣 SYSTEM WIPE IN " + count + "...");
    beep.play();
    count--;
    if (count === 1) count = 5; // NEVER REACHES 0 😈
}, 12000);
</script>
</head>

<body>

<h1>🔥 FINAL CHAOS GUESSING GAME 🔥</h1>
<p>GUESS A NUMBER BETWEEN 1–10</p>
<p>MAX TRIES: 5</p>

<input type="number" id="guess" min="1" max="10">
<br>
<button onclick="checkGuess()">CLICK IF YOU DARE</button>
<br><br>
<button id="stop" onclick="stopChaos()">🛑 STOP CHAOS 🛑</button>

<script>
const secretNumber = Math.floor(Math.random() * 10) + 1;
let attemptsLeft = 5;

/* ================= ALERT SPAM ================= */
function spamAlerts(times) {
    for (let i = 0; i < times; i++) {
        setTimeout(() => {
            alert("🚨 ALERT 🚨 ALERT 🚨 ALERT 🚨");
            beep.play();
        }, i * 220);
    }
}

/* ================= FAKE HACK SEQUENCE ================= */
function fakeHack() {
    alert("💀 HACK IN PROGRESS 💀");
    alert("SENDING FILES TO FBI...");
    alert("CONTACTING NASA...");
    alert("SELLING SOUL...");
    alert("LOL JK 😂");
}

/* ================= GAME LOGIC ================= */
function checkGuess() {
    spamAlerts(3);

    const g = Number(document.getElementById("guess").value);
    attemptsLeft--;

    beep.play();

    if (!g) {
        alert("ENTER A NUMBER YOU CHAOTIC LEGEND");
        return;
    }

    if (g === secretNumber) {
        alert("🎉🎉 YOU WIN 🎉🎉");
        alert("CHAOS RESPECTS YOU");
    } else if (attemptsLeft === 0) {
        fakeHack();
        alert("💀 GAME OVER 💀");
        alert("THE NUMBER WAS " + secretNumber);
    } else if (g < secretNumber) {
        alert("📉 TOO LOW!!!");
        alert("TRIES LEFT: " + attemptsLeft);
    } else {
         alert("📈 TOO High!!!");
        alert("TRIES LEFT: " + attemptsLeft);
    }
}
