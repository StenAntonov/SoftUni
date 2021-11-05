function create(words) {
   const content = document.getElementById('content');

   words.forEach(element => {
      const div = document.createElement('div');
      const paragraph = document.createElement('p');
      paragraph.textContent = element;
      paragraph.style.display = 'none';
      div.appendChild(paragraph);
      div.addEventListener('click', function (e) {
            const p = e.target.children[0] || e.target;
            const isVissible = p.style.display === 'block';
            p.style.display = isVissible ? 'none' : 'block';
      });
      content.appendChild(div);
   });
}