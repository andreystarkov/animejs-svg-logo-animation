import anime from 'animejs'

import { randomEasing, randomHalf } from './AnimationUtils'

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
    translateX: () => [anime.random(500, 0), 0],
    opacity: [0, 1],
    translateY: () => [anime.random(500, 0), 0],
    rotateZ: () => [anime.random(100, -100), 0],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
    easing: 'spring(0.5, 30, 4, 0)'
  })
  setTimeout(() => {
    anime({
      targets: '#mead .round',
      opacity: [0, 1],
      scale: () => [randomHalf(0.4, 0.8), 1],
      rotate: [50, 0],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      easing: 'spring(1.05, 60, 7, 0)'
    })
  }, 1600)
  setTimeout(() => {
    anime({
      targets: '#mead .center',
      opacity: [0, 1],
      rotate: [-50, 0],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      easing: 'spring(1.05, 40, 8, 0)',
      scale: [0.6, 1]
    })
  }, 1200)
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
    anime({
      targets: '#mead .stroke',
      opacity: [0, 1],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      easing: 'spring(1, 80, 10, 0)',
      scale: () => [randomHalf(1.3, 1.7), 1],
      complete: () => {

      }
    })
  }, 1600)
  setTimeout(() => {
    anime({
      targets: '#mead .firebg',
      opacity: [0, 1],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      scale: () => [randomHalf(0.4, 0.7), 1],
      easing: () => randomEasing()
    })
  }, 500)
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
  }, 1900)
}

export function hoverAnimations () {
  const centerCircleAnimation = anime({
    targets: '#mead .center',
    scale: [1, randomHalf(1.1, 1.2), 1],
    easing: 'spring(1.05, 80, 10, 0)',
    duration: 1300
  })
  const outerCircleAnimation = anime({
    targets: '#mead .round',
    scale: [1, randomHalf(1.1, 1.2), 1],
    easing: 'spring(1.1, 80, 10, 0)',
    stroke: 'rgba(0,0,0,0.05)',
    strokeWidth: [0, anime.random(10, 70), 0],
    duration: 1300
  })
  const particlesAnimation = anime({
    targets: '#mead .particle',
    scale: [1, randomHalf(2, 4), 1],
    opacity: [1, randomHalf(0.1, 0.5), 1],
    easing: () => randomEasing(),
    rotate: [0, anime.random(-75, 75), 0],
    duration: anime.random(1000, 2500),
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
    easing: () => randomEasing(),
    duration: 2200,
    direction: 'alternate',
    loop: true
  })
}

export function outerCircleAnimation () {
  anime({
    targets: '#mead .round',
    rotate: [0, 360],    easing: () => randomEasing(),
    duration: 2300,
    loop: true
  })
  anime({
    targets: '#mead .particle',
    scale: () => randomHalf(5, 8),
    rotate: () => anime.random(-360, 360),
    rotateZ: () => anime.random(30, -30),
    rotateX: () => anime.random(30, -30),
    rotateY: () => anime.random(30, -30),
    opacity: () => [0.5, 0],
    translateY: () => anime.random(400, 750),
    translateX: () => anime.random(400, 750),
    easing: 'easeInOutExpo',
    duration: 5200,
    loop: true
  })
}
