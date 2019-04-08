
class Sphinx{
  constructor(){
    this.riddles = [];
    this.total = 0;
  }
  collectRiddle(riddle){
    this.riddles.push(riddle);
    this.total++;
    if(this.total === 3){
      this.riddles.shift()
    };
  };
  attemptAnswer(answer){
    // if(answer === this.riddle.answer){
    // }
    console.log(answer)
    this.riddles = [];
    // look through riddle array for an answer that matches the answer
    //when they match, save the index number
    // splice the index number
  }

};


module.exports = Sphinx;
//npm test mythical-creatures/test/Sphinx-test.js