class Werewolf{
  constructor(name){
    this.name = name;
    this.alive = true;
  }
  eat(){
    this.alive = false;
  }

}

module.exports = Werewolf;

//npm test mythical-creatures/test/Werewolf-test.js