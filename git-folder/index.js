const $name = document.getElementById('shake')

$name.classList.add('shake','animated','infinite')


$name.textContent = 'shake'



const $secondname = document.querySelector('.rattle')

$secondname.classList.remove('rattle')
$secondname.classList.add('wobble')
$secondname.textContent = 'wobble'

const $thirdname = document.querySelector('.container :nth-child(3)')
$thirdname.classList.add('rollIn')
$thirdname.textContent = 'Roll'

const $fourthbox = document.querySelector('[data-animation]')
$fourthbox.classList.add($fourthbox.dataset.animation)

const $fifthbox =  document.getElementById('choose')
$fifthbox.classList.add('animated', 'fadeOutUp')