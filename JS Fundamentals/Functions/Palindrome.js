function palindrome(arr) {
    let current = [];
    for ( let i = 0 ; i < arr.length ; i++ ) {
        current = arr[i];
        let present = String(current).split('');
        let toCompare = present[present.length - 1];
        for( let j = 0 ; j < present.length - 1 ; j++ ) {
            
            if ( present[j] == toCompare) {
                toCompare--;
            }else{
                console.log(`false`);
                break;
            }
            if( j = present.length - 2) {
                console.log(`true`);
            }
        }
        
        
        
    }
}
palindrome([123,323,421,121])