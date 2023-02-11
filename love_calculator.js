function openGameDiv() {
  var x = document.getElementById('game')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
}

function loveCalculator() {
  var loveScore = Math.random() * 100
  loveScore = Math.floor(loveScore) + 1

  if (loveScore > 70) {
    alert(
      'Your love score is ' +
        loveScore +
        '%. You love each other immensely, top notch love.'
    )
  }

  if (loveScore > 30 && loveScore <= 70) {
    alert('Your love score is ' + loveScore + '%. My rating, meh.')
  }

  if (loveScore <= 30) {
    alert(
      'Your love score is ' +
        loveScore +
        "%. Your love is like a cat's love for bathing."
    )
  } else {
    console.log('Something weird happened...')
  }
}
