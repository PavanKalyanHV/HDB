function goToAwesomePage() {
        console.log("Clicked on lets go button");
          window.location.href = "page3.html";
        }
      
      const button2 = document.querySelector('.button_awesome');
      button2.addEventListener('click', goToAwesomePage);
      
function goToNotGoodPage() {
        console.log("Clicked on lets go button");
          window.location.href = "page6.html";
        }
      
      const button3 = document.querySelector('.button_notgood');
      button3.addEventListener('click', goToNotGoodPage);