function employees(arr) {
    let currentEmployee = {};
    for (const line of arr) {
        currentEmployee[line] = line.length
    }
    Object.keys(currentEmployee).forEach(element => {
        console.log(`Name: ${element} -- Personal Number: ${element.length}`);
    });
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );