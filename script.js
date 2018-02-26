let forestDivs = [...document.querySelectorAll('.forest')]
let heartSpans = [...document.querySelectorAll('.heart')]

forestDivs.forEach((forestDiv, i) => {
  const alpha = 0.6 / forestDivs.length * i
  const heighty = forestDiv.parentElement.clientHeight / forestDivs.length
  const rowHeight = heighty * (i + 1) * 1.5
  const randomOffset = parseInt(Math.random() * 10) + 1
  const leftPosition = (randomOffset + 90) / (forestDivs.length - i) + randomOffset
  forestDiv.style.left = `${leftPosition}vw`
  forestDiv.style.color = `rgba(0, 0, 0, ${alpha})`
  forestDiv.style.background = `rgba(0, 0, 0, 0)`
  forestDiv.style.top = `${rowHeight}px`
  forestDiv.style.zIndex = -i
})

heartSpans.forEach(heartSpan => {
  const hover = ({target, type, ...event}) => {
    target.style.textShadow = type === 'mouseout'
      ? ''
      : '-2px -2px 12px rgba(58, 126, 58, .9), 2px 2px 12px rgba(255, 156, 0, .9)'
  }
  ['mouseover', 'mouseout'].forEach(type => heartSpan.addEventListener(type, hover))
})
