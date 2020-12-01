document.addEventListener('DOMContentLoaded', ()=>{
    const navToggleBtn = document.querySelector('.nav-mobile-toggle');
    const navMain = document.querySelector('.nav-main');
    let menuExpanded = navToggleBtn.getAttribute('aria-expanded') === 'true';
    navToggleBtn.addEventListener('click', ()=>{
        navToggleBtn.setAttribute('aria-expanded', !menuExpanded)
        navMain.classList.toggle('expanded');

        if (navMain.style.maxHeight) {
            navMain.style.maxHeight = null;
        }
        else {
            navMain.style.maxHeight = navMain.scrollHeight + 'px';
        }
    })
});