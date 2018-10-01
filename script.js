let p1 = document.getElementById('page1')
let p2 = document.getElementById('page2')

let startingX

/* Page 1 */

p1handleTouchStart = event => {
  startingX = event.touches[0].clientX
  p1.style.transition = ''
  p2.style.transition = ''
  p2.style.display= 'none';
}

p1handleTouchMove = event => {
  let touch = event.touches[0]
  let change = startingX - touch.clientX
  
  if (change < 0) {
    return
  }
  
  p2.style.display = 'inline-block'
  p2.style.left = (screen.width - change) + 'px'
  event.preventDefault()
}

p1handleTouchEnd = event => {
  let change = startingX - event.changedTouches[0].clientX
  let quarter = screen.width / 4
  if (change < quarter) {
    p2.style.left = '100%'
    p2.style.transition = 'all 0.5s ease 0s'
  } else {
    p2.style.left = '0'
    p2.style.transition = 'left 1s ease 0s'
  }
}

/* Page 2 */

p2handleTouchStart = event => {
  startingX = event.touches[0].clientX
  p1.style.transition = ''
  p2.style.transition = ''
  p1.style.display = 'none'
}

p2handleTouchMove = event => {
  let touch = event.touches[0]
  let change = touch.clientX - startingX
  
  if (change < 0) {
    return
  }
  
  p1.style.display = 'block'
  p2.style.left = change + 'px'
  event.preventDefault()
}

p2handleTouchEnd = event => {
  let change = event.changedTouches[0].clientX - startingX
  let quarter = screen.width / 4
  if (change < quarter) {
    p2.style.left = '0'
    p2.style.transition = 'all 0.5s ease 0s'
  } else {
    p2.style.left = '100%'
    p2.style.transition = 'left 1s ease 0s'
  }
}
