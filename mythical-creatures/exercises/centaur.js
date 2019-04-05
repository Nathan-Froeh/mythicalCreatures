

class Centaur{
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.motion = 0;
  }
  shoot(){

    this.motion ++;
    console.log(this.motion)
    if(this.layingDown === true){
      return 'NO!'
    }
    if(this.cranky === true){
      return 'NO!'
    }
    if(this.motion === 3){
      this.cranky = true;
    }
    return 'Twang!!!'
  }

  run(){

    this.motion ++;
    console.log(this.motion)
    if(this.layingDown === true){
      return 'NO!'
    }
    if(this.motion === 3){
      this.cranky = true;
    }
    return 'Clop clop clop clop!!!'
  }

  sleep(){
    return 'NO!'
  }

  layDown(){
    this.standing = false;
    this.layingDown = true;
  }

  standUp(){
    this.standing = true;
    this.layingDown = false;
  }

  sleep(){
    if(this.standing === true){
      return 'NO!'
    }
    if(this.layingDown === true){
      this.cranky = false;
      return 'ZZZZ'
    }
  }

  drinkPotion(){
    

    if(this.cranky === false){
      this.cranky = true;
      console.log('run')
    }else{this.cranky = false;}
    if(this.layingDown === true){
      return 'Not while I\'m laying down!'
    }

  }
}

module.exports = Centaur;
//npm test mythical-creatures/test/Centaur-test.js