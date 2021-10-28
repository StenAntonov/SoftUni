function solve() {
  let text = document.getElementById('text').value.trim().toLowerCase();
  let convention = document.getElementById('naming-convention').value;
  const output = document.getElementById('result');

  if (convention != 'Camel Case' && convention != 'Pascal Case') {
    output.textContent = 'Error!';
  } else if (convention == 'Pascal Case') {
    text = Array.from(text.split(' '));
    let word = '';
    for (let part of text) {
      let firstLetter = part[0].toUpperCase();
      let remaining = part.slice(1);
      word += firstLetter + remaining;
    }
    output.textContent = word;
  } else if (convention == 'Camel Case') {
    text = Array.from(text.split(' '));
    let word = text[0];
    for (let i = 1; i < text.length; i++) {
      let firstLetter = text[i][0].toUpperCase();
      let remaining = text[i].slice(1);
      word += firstLetter + remaining;
    }
    output.textContent = word;
  }

}