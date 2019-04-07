

class Pirate{
  constructor(name, job){
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.total = 0;
    this.booty = 0;
  }
  commitHeinousAct(){
    this.total++;
    if(this.total >= 3){
      this.cursed = true;
    }
  }
  robShip(){
    this.booty = 100;
    return 'YAARRR!';
  }
}





module.exports = Pirate;


//npm test mythical-creatures/test/pirate-test.js