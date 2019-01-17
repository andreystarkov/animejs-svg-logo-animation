import anime from 'animejs'

export function startupAnimations () {
  anime({
    targets: '.email-link',
    opacity: 1,
    delay: 2700,
    duration: 500,
    translateY: [200, 0],
    easing: 'easeInOutQuint'
  })
  anime({
    targets: '#mead .anim',
    translateX: () => [anime.random(500, 0), 0],
    opacity: [0, 1],
    translateY: () => [anime.random(500, 0), 0],
    rotateZ: () => [anime.random(100, 10), 0],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
    easing: 'spring(0.5, 30, 4, 0)',
    complete: () => {

    }
  })
  setTimeout(() => {
    anime({
      targets: '#mead .round',
      opacity: [0, 1],
      scale: [0.6, 1],
      rotate: [50, 0],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      easing: 'spring(1.05, 60, 7, 0)',
      complete: () => {

      }
    })
  }, 1600)
  setTimeout(() => {
    anime({
      targets: '#mead .center',
      opacity: [0, 1],
      rotate: [-50, 0],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      // easing: 'easeInOutSine',
      easing: 'spring(1.05, 40, 8, 0)',
      scale: [0.6, 1],
      complete: () => {

      }
    })
  }, 1200)
  setTimeout(() => {
    anime({
      targets: '#mead .particle',
      opacity: [0, 1],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      easing: 'easeInOutSine',
      scale: [0.4, 1]
    })
  }, 1700)
  setTimeout(() => {
    anime({
      targets: '#mead .stroke',
      opacity: [0, 1],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      easing: 'spring(1, 80, 10, 0)',
      scale: [1.5, 1],
      complete: () => {

      }
    })
  }, 1600)
  setTimeout(() => {
    anime({
      targets: '#mead .firebg',
      opacity: [0, 1],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      scale: [0.5, 1],
      easing: 'easeOutQuart',
      complete: () => {

      }
    })
  }, 500)
  setTimeout(() => {
    anime({
      targets: '#mead .fire',
      opacity: [0, 0.4],
      scale: [3, 1],
      easing: 'easeInOutQuint',
      complete: e => {
        anime({
          targets: '#mead .fire',
          opacity: [0.4, 1],
          duration: 7000
        })
      }
    })
  }, 1900)
}

export function hoverAnimations () {
  anime({
    targets: '#mead .center',
    scale: [1, 1.1, 1],
    easing: 'spring(1.05, 80, 10, 0)',
    duration: 1300
  })
  anime({
    targets: '#mead .round',
    scale: [1, 1.15, 1],
    easing: 'spring(1.1, 80, 10, 0)',
    duration: 1300
  })
  anime({
    targets: '#mead .particle',
    scale: [1, 3.15, 1],
    easing: 'easeInOutSine',
    duration: 1300
  })
}
