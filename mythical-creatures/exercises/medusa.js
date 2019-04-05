var statues = 0;
class Medusa{
  constructor(name){
    this.name = name;
    this.statues = []
  }
  stare(victim){

    victim.stoned=true;

    if(this.statues.length < 3){
      this.statues.splice(0,0, victim)
      
      console.log(this.statues)
    }else{
      this.statues.splice(0,0, victim)
      this.statues.pop(victim)
      console.log(this.statues)

    }
  }
}



module.exports = Medusa;


//npm test mythical-creatures/test/Medusa-test.js