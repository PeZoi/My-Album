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

