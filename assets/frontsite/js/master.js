function siteCollection(evt, siteCollection) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(siteCollection).style.display = "block";
  evt.currentTarget.className += " active";
}

    // Copy to clipboard

    const text = document.querySelector('.colors-box span')
    const popup = document.querySelector('.popup')
    
    text.addEventListener('click', () => {
      popup.classList.add('active')
      copyToClipboard();
    })
    text.addEventListener('animationend', () => {
      popup.classList.remove('active')
    })

    function copyToClipboard(){
      const textarea = document.createElement('textarea')
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'absolute'
      textarea.value = text.innerText;
      document.body.appendChild(textarea)
      textarea.select();
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }