
class Fairy{
  constructor(name){
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
    this.total = 0;
  };
  receiveBelief(){
    this.dust++;
  };
  believe(){
    this.dust = this.dust + 10;
  };
  makeDresses(dress){
    
    this.clothes.dresses = this.clothes.dresses.concat(dress)
  };
  provoke(){
    this.disposition = 'Vengeful';
  };
  replaceInfant(firstInfant){
    this.total++;
    if(this.disposition === 'Vengeful'){
      firstInfant.disposition = 'Malicious'
      console.log(firstInfant)
      this.humanWards.push(firstInfant)
    }
    if(this.total === 3){
      this.disposition = 'Good natured'
    }
    return firstInfant

  }


};

module.exports = Fairy;

//npm test mythical-creatures/test/Fairy-test.js