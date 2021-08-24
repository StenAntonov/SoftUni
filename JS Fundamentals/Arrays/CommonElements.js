function commonElements(arr1 , arr2) {
    for (let current of arr1) {
       if(arr2.includes(current)) {
           console.log(current);
       }
        
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)