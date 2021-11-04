function solve() {
  const text = document.getElementById('input');
  const div = document.getElementById('output');

  const sentances = Array.from(text.value.trim().split('.'));
  let count = 0;

  for (let sentance of sentances) {
    if (sentance.length >= 1) {
      count++;
    }
  }
  while (count !== 0) {
    let part = '';
    if (count >= 3) {
      part = sentances.splice(0, 3).join('.');
      let p = document.createElement('p');
      p.textContent = `${part}.`;
      div.appendChild(p);
      count -= 3;
    } else if (count < 3 && count > 0) {
      if (sentances.length > 1) {
        sentances.join('.');
      }
      part = sentances.slice(0, sentances.length - 1);
      let p = document.createElement('p');
      p.textContent = `${part}.`;
      div.appendChild(p);
      count = 0;
    }
  }
  document.getElementById("input").value = '';

}