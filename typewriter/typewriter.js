const sentence = "hello there from lighthouse labs \n";
let newSentence = sentence.split('')
let delay = 0;

for (const char of newSentence) {
  
  setTimeout(() => {
    process.stdout.write(char);
    
  }, delay)
  delay += 50
}
