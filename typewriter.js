const sentence = "hello there from lighthouse labs";
let interv = 0;
// console.log(sentence.length - 1);

for (let i = 0; i < sentence.length; i++) {

  if (i === sentence.length - 1) {
    console.log('index: >>>', i);
    setTimeout(() => {
      console.log(sentence[i]);
    }, interv);
  }

  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, interv); // <= 1s delay to make it noticeable. Can dial it down later.
  interv += 50;

}