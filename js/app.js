const messages = [
    "I love you everyday, not just on Valentine's Day.",
    "I love you with all my heart.",
    "Your smile is my favorite thing in the whole world.",
    "I fall in love with you more and more each day.",
    "You are the source of my strength and happiness.",
    "Thank you for being the amazing person you are.",
];

let currentIndex = 0;

function updateDisplay() {
    const messageEl = document.getElementById('message');
    const counterEl = document.getElementById('counter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const navigationEl = document.getElementById('navigation');
    const flowerContainer = document.getElementById('flowerContainer');

    if (currentIndex < messages.length) {
        // Show regular message
        messageEl.textContent = messages[currentIndex];
        counterEl.textContent = `${currentIndex + 1} of ${messages.length + 1}`;

        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.textContent =
            currentIndex === messages.length - 1 ? "Finish →" : "Next →";

        // Show navigation, hide flower
        navigationEl.classList.remove('hide');
        flowerContainer.classList.remove('show');
    } else {
        // Show flower page
        messageEl.classList.add('hide');
        counterEl.textContent = `${messages.length + 1} of ${messages.length + 1}`;
        navigationEl.classList.add('hide');
        flowerContainer.classList.add('show');
        showConfetti();
    }
}

function nextMessage() {
    if (currentIndex <= messages.length) {
        currentIndex++;
        updateDisplay();
    }
}

function previousMessage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateDisplay();
    }
}

function showConfetti() {
    const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
    };

    confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
    });

    confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3,
    });

    confetti({
    ...defaults,
    particleCount: 10,
    scalar: 4,
    });

    confetti({
        ...defaults,
        particleCount: 50,
        scalar: 5
    })
}

// Initialize
updateDisplay();
