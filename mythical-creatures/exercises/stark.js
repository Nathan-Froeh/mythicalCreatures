
class Stark{
  constructor(name, location){
    this.name = name;
    this.location = location || 'Winterfell';
    this.safe = false;
    
  }
  houseWords(){
    if(this.name === 'Arya'){
    return 'The North Remembers';
    }
    if(this.name === 'Sansa' || this.name === 'John'){
      return 'Winter is Coming';
      }
  }
}





module.exports = Stark;

//npm test mythical-creatures/test/Direwolf-test.js