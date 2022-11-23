// Tom and Patrick's Clock Adventure

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
// let timer = new Clock();

// what we learned: when you pass in a function as a callback, it loses context for this, which means it must be bound

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft>0){
    numsLeft -= 1;
    reader.question("What is your input:  ", function (answer) {
      sum += parseInt(answer);
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum)
  }
}

// what we learned: this is an example of asynchronous programming, and we didn't have to bind
// our callback function because we just passed in result as an arg on line 66 and expected it
// to be passed in on line 74 

addNumbers(100, 3, function (result) {
  console.log(`The result is ${result}`);
  reader.close()
})
