
class Ogre{
    constructor(name, home){
      this.name = name;
      this.home = home || 'Swamp';
      this.swings = 0;
    }
    encounter(human){
      console.log(human.encounterCounter)
      human.encounterCounter++;
      if(human.encounterCounter % 3 === 0){
        //human.encounterCounter = 0
        this.swingAt();
      }
    }
    swingAt(){
      this.swings++
    }
    apologize(human){
      human.knockedOut = false;
    }
}




module.exports = Ogre;

//npm test mythical-creatures/test/Ogre-test.js