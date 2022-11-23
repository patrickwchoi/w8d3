// setInterval(printTime, 1000)
// let step = 0
// function printTime(){
//   console.log(step)
//   step++
//   // console.log("Time")
// }

class Clock{
  constructor(){
    this.date = new Date();
    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.second = this.date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }
  printTime(){
    let second = this.second
    let minute = this.minute
    let hour = this.hour

    if (second < 10) {
      second = `0${second}`
    }

    if (minute < 10) {
      minute = `0${minute}`
    }

    if (hour < 10) {
      hour = `0${hour}`
    }

    console.log(`${hour}:${minute}:${second}`);
  }

  _tick(){
    this.second++;
    if (this.second >= 60) {
      this.second -= 60;
      this.minute += 1;
    }
    if (this.minute >= 60) {
      this.minute -= 60;
      this.hour += 1;
    }
      if (this.hour >= 12) {
      this.hour -= 12;
    }
    this.printTime();
  }
}
let timer = new Clock();

// what we learned: when you pass in a function as a callback, it loses context for this, which means it must be bound

const readline = require('readline');
    const reader = readline.createInterface({

    input: process.stdin,
    output: process.stdout
    });

function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft>0){
    numsLeft-=1
    // get input from user
    reader.question("what is your input", function (answer) {
      console.log(`Hello ${answer}!`);
    });
    // input => number
    // sum += number
    // addNumbers(sum, numsLeft, completionCallback)
  } else{
    completionCallback(sum)
  }
}
//addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));