(function solve(){
    let str = 'my string';
    
    String.prototype.ensureStart =  function(input) {
        if(!str.startsWith(input)){
            return str = input + str;
        }else{
            return str;
        };
    };

    String.prototype.ensureEnd =  function(input) {
        if(!str.endsWith(input)){
            return str = str + input;
        }else{
            return str;
        };
    };

    String.prototype.isEmpty =  function(input) {
        if(input == ''){
            return true;
        }else{
            return false;
        }
    };

    String.prototype.truncate = function(n){
        let length = str.length;
        if(length < n){
            return str;
        }else if(length > n){
            if(str.indexOf(' ') !== -1){
                let spaceIndex = str.lastIndexOf(' ');
                str = str.substring(0, spaceIndex) + '...';
            }else if(str.indexOf(' ') == -1){
                str = str.slice(0, n - 3) + '...';
            }
        }

        if(n < 4){
            return ".".repeat(n);
        }else{
            return str;
        }
    };

    String.format = function(str, ...params) {
        let firstBracket = str.indexOf('{');
        let lastBracket = str.indexOf('}');
        let parameter = params.shift();
        let spots = lastBracket - firstBracket + 1;
        while(lastBracket != -1) {
            if(parameter === undefined){
                break;
            };
            str = str.split('');
            str.splice(firstBracket, spots, parameter);
            str = str.join('');
            firstBracket = str.indexOf('{');
            lastBracket = str.indexOf('}');
            parameter = params.shift();
            spots = lastBracket - firstBracket + 1;
        }
        return str;
    };
    
    console.log(str = str.ensureStart('my'));
    console.log(str = str.ensureStart('hello '));
    console.log(str = str.truncate(16));
    console.log(str = str.truncate(14));
    console.log(str = str.truncate(8));
    console.log(str = str.truncate(4));
    console.log(str = str.truncate(2));
    console.log(str = String.format('The {0} {1} fox',
      'quick', 'brown'));
    console.log(str = String.format('jumps {0} {1}',
      'dog'));
})();

