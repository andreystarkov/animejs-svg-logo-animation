import anime from 'animejs'

export const easings = [
  'easeInOutCubic',
  'easeInOutQuart',
  'easeInOutQuint',
  'easeInOutSine',
  'easeInOutExpo',
  'easeInOutCirc',
  'easeInOutBack',
]

export function randomEasing () {
  return easings[anime.random(0, easings.length - 1)]
}

export function randomHalf (from = 0, to = 1) {
  return anime.random(from ? from * 100 : 0, to ? to * 100 : 100) * 0.01
}
