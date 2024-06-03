class SlotMachine {
    constructor() {
        this.reels = [
            document.getElementById('reel-one'),
            document.getElementById('reel-two'),
            document.getElementById('reel-three')
        ];
        this.symbols = ['🍒', '🍌', '🍉'];
        this.spinButton = document.getElementById('spin-button');
        this.spinButton.addEventListener('click', () => this.spin());
    }

    getRandomSymbol() {
        return this.symbols[Math.floor(Math.random() * this.symbols.length)];
    }

    spin() {
        this.reels.forEach((reel, index) => {
            this.animateReel(reel, index);
        });
    }

    animateReel(reel, index) {
        let count = 10 + index * 5; 
        let spinInterval = setInterval(() => {
            reel.innerHTML = this.getRandomSymbol();
            count--;
            if (count === 0) {
                clearInterval(spinInterval);
            }
        }, 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SlotMachine();
});