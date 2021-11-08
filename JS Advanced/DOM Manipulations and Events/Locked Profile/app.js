function lockedProfile() {
    document.getElementById('main').addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const profile = e.target.parentNode;
            const isLocked = profile.querySelector('input[type=radio]:checked').value === 'lock';

            if (isLocked) {
                return;
            }

            let div = profile.querySelector('div');
            let isVissible = div.style.display === 'block';
            div.style.display = isVissible ? 'none' : 'block';
            e.target.textContent = isVissible ? 'Show more' : 'Hide it';
        }
    });
}