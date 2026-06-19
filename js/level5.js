function generateQuantumData250k() {
  const data = []
  for (let i = 0; i < 250000; i++) {
    let temp = Math.random() * 35 + 10
    let humidity = Math.random() * 75 + 20
    let pressure = Math.random() * 70 + 980
    if (Math.random() < 0.1) temp *= -1
    if (Math.random() < 0.1) humidity *= -1
    if (Math.random() < 0.1) pressure *= -1
    data.push({ temp, humidity, pressure })
  }
  return data
}

function initLevel5() {

}

document.addEventListener('DOMContentLoaded', initLevel5)
