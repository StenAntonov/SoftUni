function toggle() {
    const button = document.getElementsByClassName('button')[0];
    const divExtra = document.getElementById('extra');

    const isHidden = button.textContent == 'More';
    divExtra.style.display = isHidden ? 'block' : 'none';
    button.textContent = isHidden ? 'Less' : 'More';
    
}