function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let currentOrder = arr[i].split(' ');
        if (currentOrder.includes('Buy')) {
            if (inventory.includes(currentOrder[1])) {
                break;
            } else {
                inventory.push(currentOrder[1]);
            }
        } else if (currentOrder.includes('Trash')) {
            let index = inventory.indexOf(currentOrder[1]);
            if (index !== -1) {
                inventory.splice(index, 1);
            }
        } else if (currentOrder.includes('Repair')) {
            if (inventory.includes(currentOrder[1])) {
                index = inventory.indexOf(currentOrder[1]);
                inventory.splice(index, 1);
                inventory.push(currentOrder[1]);
            }
        } else if (currentOrder.includes('Upgrade')) {
            let item = currentOrder[1].split('-')[0];
            let material = currentOrder[1].split('-')[1];
            if (inventory.includes(item)) {
                index = inventory.indexOf(item);
                inventory.splice(index + 1, 0, `${item}:${material}`);
            }
        }
    }
    return inventory.join(' ');
}
console.log(gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

));