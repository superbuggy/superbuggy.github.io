let forestDivs = [...document.querySelectorAll('.forest')]
console.log(forestDivs)

forestDivs.forEach((forestDiv, i) => {
  const alpha = .6 / forestDivs.length * i
  const heighty = forestDiv.parentElement.clientHeight / forestDivs.length
  const rowHeight = heighty * (i + 1) * 1.5
  forestDiv.style.left=`${(forestDivs.length - i) / 2}em`
  forestDiv.style.color = `rgba(0, 0, 0, ${alpha})`
  forestDiv.style.top = `${rowHeight}px`
  forestDiv.style.zIndex = -i
  console.log(heighty, rowHeight)
})
