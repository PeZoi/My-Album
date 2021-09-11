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

const menuLink = document.querySelectorAll('.nav-menu-link')
for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', function () {
    overlayMenu.style.display = 'none';
    overlayNavMenu.style.transform = 'translateX(110%)';
  })
}

// Open Page School
const btnOpen = document.querySelector('.school-item-bonus')
const pageSchool = document.querySelector('.main-page')
const body = document.querySelector('.warrper')
btnOpen.addEventListener('click', function () {
  pageSchool.style.transform = 'translateY(0)';
  pageSchool.style.overflow = 'unset';
  body.style.overflow = 'hidden';
})

// Close Page School
const btnClose = document.querySelectorAll('.page-close-img')

for (let i = 0; i < btnClose.length; i++) {
  btnClose[i].addEventListener('click', function () {
    pageSchool.style.transform = 'translateY(-100%)'
    pageSchool.style.overflow = 'hidden';
    body.style.overflow = 'unset';
  })
}

