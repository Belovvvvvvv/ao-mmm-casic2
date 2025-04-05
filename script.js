
function spinSlot() {
  const symbols = ['QQQ', 'Семки', 'Пальма', 'Волк'];
  const result = symbols[Math.floor(Math.random() * symbols.length)];
  document.getElementById('slotResult').innerText = 'Выпало: ' + result;
}

function revealMine() {
  const safe = Math.random() > 0.3;
  document.getElementById('mineResult').innerText = safe ? '✨ Уцелел!' : '💣 БАХ!';
}

function startAviator() {
  let x = 1.00;
  const interval = setInterval(() => {
    x += 0.05;
    document.getElementById('aviatorResult').innerText = `✈ x${x.toFixed(2)}`;
    if (x > 3.0) clearInterval(interval);
  }, 300);
}
