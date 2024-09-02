const card1 = document.querySelector('.card');
const card2 = document.querySelector('.back-image');
const card4 = document.querySelector('.back-image2');
const card3 = document.querySelector('.bookmark');

card1.addEventListener('click', () => {
  card1.classList.toggle('flipped');
  card3.classList.toggle('flipped');
  // card4.classList.toggle('flipped');
  setTimeout(()=>{
    card2.classList.toggle('flip');
  },400)
  setTimeout(()=>{
    card4.classList.toggle('flip');
  },400)
});

const gradientBox = document.querySelector('.card11');
const colors = ['#f7971e', '#ffb703', '#ffdd00', '#fffc4d', '#f7f982', '#d6f5d3', '#b5f0d4', '#86e6d5', '#46d8ec', '#00c6fb'];

function updateGradient() {
  const gradient = `radial-gradient(circle at ${Math.random() * 300}px ${Math.random() * 200}px, ${colors.join(', ')})`;
  // gradientBox.style.background = gradient;

  // Shift the colors array to create a moving effect
  colors.push(colors.shift());
}

setInterval(updateGradient, 1000); // Update the gradient every 1 second

