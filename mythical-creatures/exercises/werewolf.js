
class Werewolf{
  constructor(name, location){
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  change(){
    this.human = !this.human;
    this.wolf = !this.wolf;
    if(this.wolf === true){
      this.hungry = true
    }else if(this.wolf === false){
      this.hungry = false
    }
  }

  eat(victim){
    if(this.human === true){
      victim.alive = true;
    }else{
      victim.alive = false;
      this.human = true;
    }
    
  }

}

module.exports = Werewolf;

//npm test mythical-creatures/test/Werewolf-test.js