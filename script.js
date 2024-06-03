class SlotMachine {
    constructor() {
        try {
            this.reels = [
                document.getElementById('reel-one'),
                document.getElementById('reel-two'),
                document.getElementById('reel-three')
            ];
            this.symbols = ['🍒', '🍌', '🍉'];
            this.spinButton = document.getElementById('spin-button');

            if (!this.spinButton) throw new Error("Spin button not found");
            if (this.reels.some(reel => reel === null)) throw new Error("One or more reels not found");

            this.spinButton.addEventListener('click', () => this.spin());
        } catch (error) {
            console.error('Initialization Error:', error.message);
        }
    }

    getRandomSymbol() {
        try {
            return this.symbols[Math.floor(Math.random() * this.symbols.length)];
        } catch (error) {
            console.error('Error getting random symbol:', error.message);
            return '❓';  // Return a fallback symbol
        }
    }

    spin() {
        try {
            this.reels.forEach((reel, index) => {
                this.animateReel(reel, index);
            });
        } catch (error) {
            console.error('Error during spin:', error.message);
        }
    }

    animateReel(reel, index) {
        try {
            let count = 10 + index * 5;  // number of spins per reel
            let spinInterval = setInterval(() => {
                try {
                    reel.innerHTML = this.getRandomSymbol();
                    count--;
                    if (count === 0) {
                        clearInterval(spinInterval);
                    }
                } catch (error) {
                    console.error('Error during reel animation:', error.message);
                    clearInterval(spinInterval);
                }
            }, 100);
        } catch (error) {
            console.error('Error setting up reel animation:', error.message);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        new SlotMachine();
    } catch (error) {
        console.error('Error initializing Slot Machine:', error.message);
    }
});
