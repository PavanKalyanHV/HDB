function goToNextPage() {
      console.log("Clicked on lets go button");
        window.location.href = "page2.html";
      }

const button = document.querySelector('.button_go');
button.addEventListener('click', goToNextPage);



