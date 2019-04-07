

class Dragon{
  constructor(name, rider, color){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.ate = 0;
  }
  eat(){
    this.ate++;
    if(this.ate >= 3){
      this.hungry = false;
    }
  }
}




module.exports = Dragon;




//npm test mythical-creatures/test/dragon-test.js