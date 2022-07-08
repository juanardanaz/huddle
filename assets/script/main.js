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