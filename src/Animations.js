import anime from 'animejs'

import { randomEasing, randomHalf } from './AnimationUtils'

export function scaleBottomAppearAnimation (targets) {
  return anime({
    targets,
    scale: [randomHalf(0.4, 0.6), 1],
    opacity: [0, 1],
    easing: 'easeInOutQuart'
  })
}

export function scaleTopAppearAnimation (targets) {
  return anime({
    targets,
    scale: [randomHalf(1.5, 2.5), 1],
    opacity: [0, 1],
    easing: 'easeInOutQuart',
    duration: anime.random(600, 900)
  })
}

export function moveAppearAnimation (targets) {
  return anime({
    targets,
    opacity: [0, 1],
    translateX: () => [50, 0],
    translateY: () => [50, 0],
    rotateZ: () => [anime.random(40, -40), 0],
    rotateX: () => [anime.random(40, -40), 0],
    rotateY: () => [anime.random(40, -40), 0],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
    easing: 'spring(1.1, 30, 4, 1)'
  })
}

export function opacityAppearAnimation (targets) {
  return anime({
    targets,
    opacity: [0, 1],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
    easing: () => randomEasing()
  })
}

const animationFunctions = [
  opacityAppearAnimation,
  moveAppearAnimation,
  scaleTopAppearAnimation,
  scaleBottomAppearAnimation
]

export function randomAnimation (targets) {
  return animationFunctions[anime.random(0, animationFunctions.length - 1)](targets)
}

export function startupAnimations () {
  anime({
    targets: '.email-link',
    opacity: 1,
    delay: 2700,
    duration: 500,
    translateY: [200, 0],
    easing: () => randomEasing()
  })
  anime({
    targets: '#mead .anim',
    translateX: () => [-200, 0],
    opacity: [0, 1],
    translateY: () => [200, 0],
    // rotateZ: () => [anime.random(100, -100), 0],
    delay: anime.stagger(150, {grid: [4, 4], from: 'center'}),
    easing: 'spring(1.3, 70, 7, 0)'
  })
  setTimeout(() => {
    anime({
      targets: '#mead .round',
      opacity: [0, 1.05, 1],
      rotate: [anime.random(30, 60), 0],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      easing: 'spring(1.15, 20, 3, 0)',
      scale: [0.6, 1]
    })
  }, 1)
  setTimeout(() => {
    anime({
      targets: '#mead .center',
      opacity: [0, 1],
      rotate: [-(anime.random(30,60)), 0],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      easing: 'spring(1.15, 20, 3, 0)',
      scale: [0.3, 1]
    })
  }, 1)
  setTimeout(() => {
    anime({
      targets: '#mead .particle',
      opacity: [0, 1],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      easing: () => randomEasing(),
      scale: () => [randomHalf(0.3, 0.6), 1]
    })
  }, 1700)
  setTimeout(() => {
    scaleTopAppearAnimation('#mead .stroke')
  }, 1800)
  setTimeout(() => {
    anime({
      targets: '#mead .firebg',
      opacity: [0, 1],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      scale: () => [randomHalf(0.4, 0.7), 1],
      duration: anime.random(500, 800),
      easing: 'easeInSine'
    })
  }, 100)
  setTimeout(() => {
    anime({
      targets: '#mead .fire',
      opacity: [0, 0.4],
      scale: [3, 1],
      easing: () => randomEasing(),
      complete: e => {
        anime({
          targets: '#mead .fire',
          opacity: () => [randomHalf(0.3, 0.7), 1],
          duration: 7000
        })
      }
    })
  }, 1000)
}

export function hoverAnimations () {
  const centerCircleAnimation = anime({
    targets: '#mead .center',
    scale: [1, 0.72, 1],
    delay: 100,
    // centerCircleAnimationeasing: 'spring(1.1, 20, 13, 0)',
    easing: () => randomEasing(),
    duration: 1900
  })

  const outerCircleAnimation = anime({
    targets: '#mead .round',
    scale: [1, 0.72, 1],
    easing: () => randomEasing(),
    duration: 1900
  })

  anime({
    targets: '#mead .stroke',
    fillOpacity: [1, 0.5, 1],
    strokeDashoffset: [anime.setDashoffset, 0],
    strokeWidth: [0, 3, 0],
    strokeColor: ['rgba(0,0,0,0)', '#000', 'rgba(0,0,0,0)'],
    easing: 'easeInOutSine',
    delay: (e, i) => i * 150,
    easing: () => randomEasing(),
    duration: 1900
  })

  const particlesAnimation = anime({
    targets: '#mead .particle',
    scale: [1, randomHalf(1.5, 2.4), 1],
    opacity: [1, randomHalf(0.05, 0.3), 1],
    easing: () => randomEasing(),
    rotate: [0, anime.random(-75, 75), 0],
    duration: 1900
  })
  const stop = () => {
    outerCircleAnimation.stop()
    centerCircleAnimation.stop()
    particlesAnimation.stop()
  }
  return {
    stop
  }
}

export function centerCircleAnimation () {
  anime({
    targets: '#mead .center',
    rotate: [0, 360],
    easing: 'easeInOutSine',
    skewY: [1, randomHalf(0.8, 1.2), 1],
    skewZ: [1, randomHalf(0.8, 1.2), 1],
    skewX: [1, randomHalf(0.8, 1.2), 1],
    duration: 2200,
    direction: 'alternate',
    loop: true
  })
}

export function outerCircleAnimation () {
  anime({
    targets: '#mead .round',
    rotate: [0, 360],
    opacity: [1, 0.85, 1],
    // skewY: [1, randomHalf(0.8, 1.2), 1],
    // skewZ: [1, randomHalf(0.8, 1.2), 1],
    // skewX: [1, randomHalf(0.8, 1.2), 1],
    easing: 'spring(1, 12, 6, 0.2)',
    duration: 2300,
    loop: true
  })
  anime({
    targets: '#mead .particle',
    scale: 5,
    rotate: 360,
    rotateZ: 15,
    skewY: [1, randomHalf(0.8, 1.2), 1],
    skewZ: [1, randomHalf(0.8, 1.2), 1],
    skewX: [1, randomHalf(0.8, 1.2), 1],
    rotateX: -10,
    rotateY: -20,
    opacity: [0.5, 0],
    translateY: () => anime.random(150, 400),
    translateX: () => anime.random(150, 400),
    easing: () => randomEasing(),
    duration: 4200,
    loop: true
  })
  anime({
    targets: '#mead .stroke',
    opacity: [1, randomHalf(0.75, 0.9), 1],
    duration: anime.random(5000, 7000),
    easing: () => randomEasing(),
    delay: 1200
  })
  // anime({
  //   targets: '#mead .particle',
  //   scale: () => randomHalf(5, 8),
  //   rotate: () => 360,
  //   rotateZ: () => anime.random(30, -30),
  //   rotateX: () => anime.random(30, -30),
  //   rotateY: () => anime.random(30, -30),
  //   opacity: () => [0.5, 0],
  //   translateY: () => anime.random(400, 750),
  //   translateX: () => anime.random(400, 750),
  //   easing: 'easeInOutSine',
  //   duration: 1200,
  //   loop: true
  // })
}
