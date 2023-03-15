const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile');
const links = document.querySelectorAll('.mobile-links .mobile-link')

hamburger.addEventListener('click',() => {
    // menu.classList.toggle('active');
    menu.classList.toggle('open');
});

for (const link of links) {
    link.addEventListener('click', ()=> {
      menu.classList.toggle('open');  
    })
}

// menuItem.addEventListener('click', () => {
//   ul.classList.toggle('active');
// })