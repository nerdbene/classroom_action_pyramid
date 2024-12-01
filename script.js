// 🏗️ The PyramidGame: Where emojis stack up and dreams come true!
class PyramidGame {
    constructor() {
        // 🎯 Setting up our pyramid's grand design (10 levels, because 9 was too little and 11 was too much)
        this.maxLevel = 10;
        this.positiveCount = 0;
        this.negativeCount = 0;
        
        // 🎭 Our cast of emotional characters
        this.positiveEmojis = ['😊', '🌟', '👍', '🎉', '💫', '✨', '🌈', '💪']; // The happy bunch
        this.negativeEmojis = ['😢', '😔', '😫', '💔', '⛈️', '🌧️', '😞', '😥']; // The drama club
        
        // 🏛️ Gathering our building blocks
        this.levels = document.querySelectorAll('.pyramid-level');
        this.initializeEventListeners();
    }

    // 👂 Setting up our emotional response team
    initializeEventListeners() {
        document.getElementById('positiveBtn').addEventListener('click', () => this.handlePositiveBehavior());
        document.getElementById('negativeBtn').addEventListener('click', () => this.handleNegativeBehavior());
        document.getElementById('resetBtn').addEventListener('click', () => this.resetPyramid());
    }

    // 🌞 When life gives you lemons, make a positive block!
    handlePositiveBehavior() {
        if (this.positiveCount + this.negativeCount < this.maxLevel) {
            this.positiveCount++;
            this.updatePyramid();
            this.createFloatingEmojis(true); // Let the happy dance begin!
        }
    }

    // 🌧️ For those days when the coffee machine is broken
    handleNegativeBehavior() {
        if (this.positiveCount + this.negativeCount < this.maxLevel) {
            this.negativeCount++;
            this.updatePyramid();
            this.createFloatingEmojis(false); // Release the drama!
        }
    }

    // 🎪 The Great Emoji Circus: Watch them bounce and float!
    createFloatingEmojis(isPositive) {
        const container = document.getElementById('emoji-container');
        const emojis = isPositive ? this.positiveEmojis : this.negativeEmojis;
        
        // 🎭 Time to put on a show with 5 star performers!
        for (let i = 0; i < 5; i++) {
            const emoji = document.createElement('div');
            emoji.className = 'floating-emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            // 🎨 Setting the stage for our emoji acrobats
            // Each emoji gets their own spotlight section
            const sectionWidth = window.innerWidth / 5;
            const startX = (sectionWidth * i) + (Math.random() * sectionWidth * 0.8);
            const startY = Math.random() * (window.innerHeight - 100);
            const endX = startX + 100 + Math.random() * 150;
            const endY = startY + 100 + Math.random() * 150;
            
            // 🎯 Plotting their flight path (like emoji GPS)
            emoji.style.setProperty('--startX', `${startX}px`);
            emoji.style.setProperty('--startY', `${startY}px`);
            emoji.style.setProperty('--endX', `${endX}px`);
            emoji.style.setProperty('--endY', `${endY}px`);
            
            // ⏰ Fashionably late entrances (because timing is everything)
            emoji.style.animationDelay = `${i * 0.2}s`;
            
            container.appendChild(emoji);
        }
    }

    // 🏗️ The grand architect of our emotional skyscraper
    updatePyramid() {
        // 🧹 Spring cleaning - clear the canvas
        for (let i = 1; i <= this.maxLevel; i++) {
            const level = document.getElementById(`level${i}`);
            level.classList.remove('positive', 'negative');
        }

        // 🌈 Painting with happiness
        for (let i = 1; i <= this.positiveCount; i++) {
            const level = document.getElementById(`level${i}`);
            level.classList.add('positive');
        }

        // 🌧️ Adding a touch of dramatic flair
        for (let i = 1; i <= this.negativeCount; i++) {
            const level = document.getElementById(`level${this.positiveCount + i}`);
            level.classList.add('negative');
        }
    }

    // 🔄 The "oops, let's start over" button (because everyone deserves a fresh start)
    resetPyramid() {
        this.positiveCount = 0;
        this.negativeCount = 0;
        // 🧹 Clean sweep - like it never happened
        for (let i = 1; i <= this.maxLevel; i++) {
            const level = document.getElementById(`level${i}`);
            level.classList.remove('positive', 'negative');
        }
        // 👋 Bye-bye floating emojis (until we meet again)
        const container = document.getElementById('emoji-container');
        container.innerHTML = '';
    }
}

// 🎬 Lights, Camera, Action! Let the emoji drama begin!
document.addEventListener('DOMContentLoaded', () => {
    new PyramidGame();
});
