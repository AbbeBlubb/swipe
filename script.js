const p1 = document.getElementById('page-home')
const p2 = document.getElementById('page-right')
let startingX

/* Page home */

const p1handleTouchStart = event => {
  startingX = event.touches[0].clientX
  p1.style.transition = ''
  p2.style.transition = ''
};

const p1handleTouchMove = event => {
  const touch = event.touches[0]
  const change = startingX - touch.clientX

  if (change < 0) {
    return
  }

  p2.style.left = (screen.width - change) + 'px'
  event.preventDefault()
};

const p1handleTouchEnd = event => {
  const change = startingX - event.changedTouches[0].clientX
  const quarter = screen.width / 4
  if (change < quarter) {
    p2.style.left = '100%'
    p2.style.transition = 'all 0.3s ease 0s'
  } else {
    p2.style.left = '0'
    p2.style.transition = 'left 0.5s ease 0s'
  }
};

/* Page right */

const p2handleTouchStart = event => {
  startingX = event.touches[0].clientX
  p1.style.transition = ''
  p2.style.transition = ''
};

const p2handleTouchMove = event => {
  const touch = event.touches[0]
  const change = touch.clientX - startingX

  if (change < 0) {
    return
  }

  p2.style.left = change + 'px'
  event.preventDefault()
};

const p2handleTouchEnd = event => {
  const change = event.changedTouches[0].clientX - startingX
  const quarter = screen.width / 4
  if (change < quarter) {
    p2.style.left = '0'
    p2.style.transition = 'all 0.3s ease 0s'
  } else {
    p2.style.left = '100%'
    p2.style.transition = 'left 0.5s ease 0s'
  }
};
