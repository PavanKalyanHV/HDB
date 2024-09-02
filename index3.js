const button = document.querySelector('.button_notToday');

button.addEventListener('mouseover', () => {
  button.style.transform = 'translateY(-150px)';
});

button.addEventListener('mouseout', () => {
  button.style.transform = 'translateY(0px)';
});

button.addEventListener('click', () => {
  // Prevent the default click behavior (optional)
  event.preventDefault();
  console.log('Button clicked!');
});

function goToNextPage() {
        console.log("Clicked on lets go button");
          window.location.href = "page4.html";
        }
  
  const button2 = document.querySelector('.button_excited');
  button2.addEventListener('click', goToNextPage);

  
  
  