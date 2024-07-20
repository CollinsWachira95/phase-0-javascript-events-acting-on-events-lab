// Your code here
// Function to move the Dodger to the left
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left, 10);
    if (left > 0) {
        dodger.style.left = `${left - 4}px`;
    }
}

// Function to move the Dodger to the right
function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left, 10);
    if (left < 360) {
        dodger.style.left = `${left + 4}px`;
    }
}

// Add event listeners for key presses
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft();
    } else if (e.key === 'ArrowRight') {
        moveDodgerRight();
    }
});
