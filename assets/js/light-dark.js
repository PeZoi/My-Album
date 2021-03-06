var checkbox_toggle = document.getElementById('light-dark')

//Background Body
checkbox_toggle.addEventListener('change', function () {
  document.body.classList.toggle('dark')
})

//Background Header
checkbox_toggle.addEventListener('change', function () {
  document.querySelector('.header').classList.toggle('dark')
})

//Color Text
checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.header-menu-link')[0].classList.toggle('dark')
})
checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.header-menu-link')[1].classList.toggle('dark')
})
checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.header-menu-link')[2].classList.toggle('dark')
})
checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.header-menu-link')[3].classList.toggle('dark')
})

//Background Sub Menu
checkbox_toggle.addEventListener('change', function () {
  document.querySelector('.sub-menu').classList.toggle('dark')
})

//Color Text
checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.sub-menu-link')[0].classList.toggle('dark')
})
checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.sub-menu-link')[1].classList.toggle('dark')
})
checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.sub-menu-link')[2].classList.toggle('dark')
})
checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.sub-menu-link')[3].classList.toggle('dark')
})

//Shadow
checkbox_toggle.addEventListener('change', function () {
  document.querySelector('.intro-img-item').classList.toggle('dark')
})
checkbox_toggle.addEventListener('change', function () {
  document.querySelector('.intro-info').classList.toggle('dark')
})

checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.member-img')[0].classList.toggle('dark')
})
checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.member-img')[1].classList.toggle('dark')
})
checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.member-img')[2].classList.toggle('dark')
})
checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.member-img')[3].classList.toggle('dark')
})
checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.member-img')[4].classList.toggle('dark')
})
checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.member-img')[5].classList.toggle('dark')
})
checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.member-img')[6].classList.toggle('dark')
})
checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.member-img')[7].classList.toggle('dark')
})
checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.member-img')[8].classList.toggle('dark')
})
checkbox_toggle.addEventListener('change', function () {
  document.querySelectorAll('.member-img')[9].classList.toggle('dark')
})

//Icon Switch Sun || Moon
checkbox_toggle.addEventListener('change', function () {
  document.querySelector('.icon-sun').classList.toggle('active')
})
checkbox_toggle.addEventListener('change', function () {
  document.querySelector('.icon-moon').classList.toggle('active')
})

//Switch Logo Primary
const logoElement = document.querySelectorAll('.header-logo-img')
for (let i = 0; i < logoElement.length; i++) {
  checkbox_toggle.addEventListener('change', function () {
    logoElement[i].classList.toggle('active')
  })
}

//Switch Logo Menu
const logoMenu = document.querySelectorAll('.nav-menu-img')
for (let i = 0; i < logoMenu.length; i++) {
  checkbox_toggle.addEventListener('change', function () {
    logoMenu[i].classList.toggle('active')
  })
}
const logoClose = document.querySelectorAll('.nav-menu--close')
for (let i = 0; i < logoClose.length; i++) {
  checkbox_toggle.addEventListener('change', function () {
    logoClose[i].classList.toggle('active')
  })
}

//Background Menu
const backgroundMenu = document.querySelector('.overlay-nav-menu')
checkbox_toggle.addEventListener('change', function () {
  backgroundMenu.classList.toggle('dark')
})
const backgroundMenuItem = document.querySelectorAll('.nav-menu-link')
for (let i = 0; i < backgroundMenuItem.length; i++) {
  checkbox_toggle.addEventListener('change', function () {
    backgroundMenuItem[i].style.backgroundImage = 'linear-gradient(to bottom right ,var(--primary-color), rgb(255 166 0 / 40%))'
  })
}
const textCoppyright = document.querySelector('.coppyright')
checkbox_toggle.addEventListener('change', function () {
  textCoppyright.classList.toggle('active')
})

//Background Overlay Member
const overlayMember = document.querySelectorAll('.overlay-member')
for (let i = 0; i < overlayMember.length; i++) {
  checkbox_toggle.addEventListener('change', function () {
    overlayMember[i].classList.toggle('dark')
  })
}

//Background Page School
const backgroundPage = document.querySelector('.main-page')
const backgroundClose = document.querySelector('.page-close')
const btnClosePage = document.querySelectorAll('.page-close-img')
for (let i = 0; i < btnClosePage.length; i++) {
  checkbox_toggle.addEventListener('change', function () {
    btnClosePage[i].classList.toggle('active')
    btnClosePage[i].classList.toggle('dark')
  })
}
checkbox_toggle.addEventListener('change', function () {
  backgroundPage.classList.toggle('dark')
  backgroundClose.classList.toggle('dark')
  btnClosePage[1].style.border = '2px solid #000!important'
})

//Switch Logo Close Overlay Member && Text
const logoCloseMember = document.querySelectorAll('.overlay-close-icon')
for (let i = 0; i < logoCloseMember.length; i++) {
  checkbox_toggle.addEventListener('change', function () {
    logoCloseMember[i].classList.toggle('active')
  })
}

const textMember = document.querySelectorAll('.overlay-member-info')
for (let i = 0; i < textMember.length; i++) {
  checkbox_toggle.addEventListener('change', function () {
    textMember[i].classList.toggle('dark')
  })
}

const showImg = document.querySelectorAll('.show-img')
for (let i = 0; i < showImg.length; i++) {
  checkbox_toggle.addEventListener('change', function () {
    showImg[i].classList.toggle('dark')
  })
}

//Switch Logo Dark || Light
const iconMobile = document.querySelectorAll('.icon-mobile')
  for (let i = 0; i < iconMobile.length; i++) {
    checkbox_toggle.addEventListener('change', function () {
      iconMobile[i].classList.toggle('active')
    })
  }

