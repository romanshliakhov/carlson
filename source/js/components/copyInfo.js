const copy = document.querySelectorAll('[data-copy]');

function copyContent (parent) {
  parent.forEach(function (item) {
    const copyText = item.querySelector('[data-copy-text]');
    const copyBtn = item.querySelector('[data-copy-btn]');

    copyBtn.addEventListener('click', function(){
      navigator.clipboard.writeText(copyText.innerHTML)

      console.log(copyText.innerHTML)
    })
  })
}

if(copy) {
  copyContent(copy);
};



