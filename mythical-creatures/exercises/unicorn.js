class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || "white"
  }
  isWhite(){
    return false;
  }
  says(stuff){
    return `**;* ${stuff} *;**`
  }

  

}

module.exports = Unicorn;




//npm test mythical-creatures/test/unicorn-test.js