/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) {
    header.classList.add('scroll_header');
  } else {
    header.classList.remove('scroll_header');
  }
}
window.addEventListener('scroll', scrollHeader);

/*=============== EMAIL ADDRESS INPUT ===============*/
function validation() {
  let form = document.getElementById('form');
  let email = document.getElementById('email').value;

  let text = document.getElementById('text');
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  
  if (email.match(pattern)) {
    form.classList.add('valid')
    form.classList.remove('invalid')
    text.innerHTML = 'Your email address is valid'

    text.style.color = '#00ff00'
  } else {
    form.classList.remove('valid')
    form.classList.add('invalid')
    text.innerHTML = 'Please enter a valid email address'
    text.style.color = '#ff0000'
  }

  if (email == '') {
    form.classList.remove('valid')
    form.classList.remove('invalid')
    text.innerHTML = ''
    text.style.color = '#00ff00'
  }
}