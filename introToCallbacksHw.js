// setInterval(printTime, 1000)
// let step = 0
// function printTime(){
//   console.log(step)
//   step++
//   // console.log("Time")
// }

class Clock{
  constructor(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    this.printTime();
    setInterval(this._tick, 1000);
  }
  printTime(){
    console.log(`${this.hour}:${this.minute}:${this.second}`);
  }

  _tick(){
    this.second++;
    printTime.call()
    this.printTime();
  }
}
let timer = new Clock();