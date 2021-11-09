function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;

    const option = document.createElement('option');
    option.textContent = text;
    option.value = value;

    let menu = document.getElementById('menu');
    menu.appendChild(option);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

}