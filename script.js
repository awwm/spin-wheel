class SlotMachine {
    constructor() {
        try {
            // Get the reel elements from the DOM
            this.reels = [
                document.getElementById('reel-one'),
                document.getElementById('reel-two'),
                document.getElementById('reel-three')
            ];
            // Define the symbols that will appear on the reels
            this.symbols = ['🍒', '🍌', '🍉'];
            // Get the spin button element from the DOM
            this.spinButton = document.getElementById('spin-button');

            // Check if the spin button exists, if not throw an error
            if (!this.spinButton) throw new Error("Spin button not found");
            // Check if all reel elements exist, if not throw an error
            if (this.reels.some(reel => reel === null)) throw new Error("One or more reels not found");

            // Add a click event listener to the spin button to trigger the spin method
            this.spinButton.addEventListener('click', () => this.spin());
        } catch (error) {
            // Log any initialization errors to the console
            console.error('Initialization Error:', error.message);
        }
    }

    // Method to get a random symbol from the symbols array
    getRandomSymbol() {
        try {
            // Return a random symbol
            return this.symbols[Math.floor(Math.random() * this.symbols.length)];
        } catch (error) {
            // Log any errors and return a fallback symbol
            console.error('Error getting random symbol:', error.message);
            return '❓';  // Return a fallback symbol
        }
    }

    // Method to start spinning the reels
    spin() {
        try {
            // Animate each reel
            this.reels.forEach((reel, index) => {
                this.animateReel(reel, index);
            });
        } catch (error) {
            // Log any errors that occur during the spin process
            console.error('Error during spin:', error.message);
        }
    }

    // Method to animate a single reel
    animateReel(reel, index) {
        try {
            // Set the number of spins for the reel
            let count = 10 + index * 5;  // number of spins per reel
            // Start the spin animation with an interval
            let spinInterval = setInterval(() => {
                try {
                    // Set the reel's content to a random symbol
                    reel.innerHTML = this.getRandomSymbol();
                    count--;  // Decrement the spin count
                    if (count === 0) {
                        // Stop the animation when the count reaches 0
                        clearInterval(spinInterval);
                    }
                } catch (error) {
                    // Log any errors that occur during the animation and stop the interval
                    console.error('Error during reel animation:', error.message);
                    clearInterval(spinInterval);
                }
            }, 100);  // Set the interval time to 100 milliseconds
        } catch (error) {
            // Log any errors that occur when setting up the reel animation
            console.error('Error setting up reel animation:', error.message);
        }
    }
}

// Wait for the DOM content to be fully loaded before initializing the slot machine
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize the slot machine
        new SlotMachine();
    } catch (error) {
        // Log any errors that occur during initialization
        console.error('Error initializing Slot Machine:', error.message);
    }
});
