import $ from 'jquery'
import './app3.css'

const html = `
    <section id="app3">
      <div class="square"></div>
    </section>
`
const $element = $(html).appendTo($('body>.page'))
const $square = $('#app3 .square')
const localKey = 'app3.active'
// yes no undefined
const active = localStorage.getItem(localKey) === 'yes'

$square.toggleClass('active', active)

$square.on('click', () => {
  if ($square.hasClass('active')) {
    $square.removeClass('active')
    localStorage.setItem(localKey, 'no')
  } else {
    $square.addClass('active')
    localStorage.setItem('app3.active', 'yes')
  }
})