const giftBox = document.querySelector('.heart_top8');

giftBox.addEventListener('click', () => {
    // Stop the rotation animation
    giftBox.style.animationPlayState = 'paused';
    // Navigate to the desired page
    window.location.href = 'page5.html';
});