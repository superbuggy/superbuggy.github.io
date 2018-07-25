export function random (...args) {
  const [min, max] = [Math.min(...args), Math.max(...args)]
  return Math.floor(Math.random() * (max - min)) + min
}
