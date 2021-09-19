function solve(input){
    let lastIndex = input.lastIndexOf('\\');
    let lastDot = input.lastIndexOf('.');
    let ext = input.slice(lastDot + 1);
    let wordName = input.substring(lastIndex + 1, lastDot);
    console.log(`File name: ${wordName}`);
    console.log(`File extension: ${ext}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx');