export function animateButton() {
    const button = document.querySelector('.contactButton');
    if (button) {
        button.addEventListener('click', () => {
            // Remove the class if it exists to restart the animation
            button.classList.remove('animate');
            
            // Trigger reflow to restart the animation
            void button.offsetWidth;

            // Add the class to start the animation
            button.classList.add('animate');
        });
    }
}