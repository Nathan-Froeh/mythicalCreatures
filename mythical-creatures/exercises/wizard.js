var rested = true
var spell = 0;
class Wizard{
  constructor(object){
    this.name = object.name;
    this.bearded = true;
    if(object.bearded === false) {
      this.bearded = false;
    }
  }
  incantation(saying){
    
    return saying.toUpperCase();
  }
  isRested(){
    if(spell < 4){
      return rested = true;
    }else{
      return rested = false;
    }
  }
  cast(){
    spell++;
    if(rested === true){
    return 'MAGIC BULLET'
    }else{
      return 'I SHALL NOT CAST';
    }
  }
}







module.exports = Wizard;


//npm test mythical-creatures/test/Wizard-test.js

