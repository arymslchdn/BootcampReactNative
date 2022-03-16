// Soal 1
// Release 0
class Animal {
  constructor(name){
    this._name = name
    this._legs = 4
    this._cold_blooded = false
}
get name(){
    return this._name
}
get legs(){
    return this._legs
}
get cold_blooded(){
    return this._cold_blooded
}
}

const sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// Release 1
class Ape extends Animal {
  constructor(name){
      super(name)
      this._name = name
      this._legs = 2
      this._cold_blooded = false
  }
  yell(){
      console.log("Auooo")
  }
}

class Frog extends Animal {
  constructor(name){
      super(name)
      this._name = name
      this._legs = 4
      this._cold_blooded = true
  }
  jump(){
      console.log("hop hop")
  }
}

const sungokong = new Ape("kera sakti");
console.log(sungokong.name); // "kera sakti"
console.log(sungokong.legs); // 2
console.log(sungokong.cold_blooded); // false
sungokong.yell(); // "Auooo"

const kodok = new Frog("buduk");
console.log(kodok.name); // "buduk"
console.log(kodok.legs); // 4
console.log(kodok.cold_blooded); // true
kodok.jump(); // "hop hop"

// Soal 2
class Clock {
  constructor({ template }){
    this._template = template
}

render() {
var date = new Date();

var hours = date.getHours();
if (hours < 10) hours = '0' + hours;

var mins = date.getMinutes();
if (mins < 10) mins = '0' + mins;

var secs = date.getSeconds();
if (secs < 10) secs = '0' + secs;

var output = this._template
  .replace('h', hours)
  .replace('m', mins)
  .replace('s', secs);

console.log(output);
}

stop() {
clearInterval(this._timer);
};

start() {
this.render();
this._timer = setInterval(() => this.render(), 1000);
};

}

var clock = new Clock({template: 'h:m:s'});
clock.start();