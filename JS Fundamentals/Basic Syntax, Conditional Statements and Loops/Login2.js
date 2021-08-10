function login(input) {
  let username = input.shift();
  let password = '';

  for (let i = username.length - 1; i >= 0; i--) {
    password += username[i];
  }
  for ( let i = 0 ; i < input.length ; i++ ) {
    if( input[i] === password ) {
        console.log(`User ${username} logged in.`)
    }else if (i === 3) {
        console.log(`User ${username} blocked!`)
    }else{
        console.log(`Incorrect password. Try again.`)
    }
 }
}
login(['momo','omom'])
