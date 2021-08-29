// Open Menu
const openMenu = document.querySelectorAll('.nav-menu-img')
for (let i = 0; i < openMenu.length; i++) {
  openMenu[i].addEventListener('click', function () {
    overlayMenu.style.display = 'block';
  }),
  openMenu[i].addEventListener('click', function () {
    overlayNavMenu.style.transform = 'translateX(0)'
  })
}

// Close Menu
const closeMenu = document.querySelectorAll('.nav-menu--close');
const overlayMenu = document.querySelector('.overlay-nav');
const overlayNavMenu = document.querySelector('.overlay-nav-menu');

for (let i = 0; i < closeMenu.length; i++) {
  closeMenu[i].addEventListener('click', function () {
      overlayMenu.style.display = 'none';
  })

  closeMenu[i].addEventListener('click', function () {
    overlayNavMenu.style.transform= 'translateX(110%)'
  })
}
overlayMenu.addEventListener('click', function () {
  overlayMenu.style.display = 'none';
  overlayNavMenu.style.transform = 'translateX(110%)';
})

