const anchorButtons = document.querySelectorAll('.payments__trigger-link');


for(const anchorButton of anchorButtons) {
  anchorButton.addEventListener('click', function(e){
    e.preventDefault();

    if (this.classList.contains('payments__trigger-link')) {
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
}
