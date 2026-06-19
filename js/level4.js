function generateSensorData20k() {
  const data = []
  for (let i = 0; i < 20000; i++) {
    data.push({
      temp: Math.random() * 35 + 10,
      humidity: Math.random() * 75 + 20
    })
  }
  return data
}

function initLevel4() {
  const data = generateSensorData20k();
  console.log(data);
}

document.addEventListener('DOMContentLoaded', initLevel4)
