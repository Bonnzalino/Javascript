const student = {
    name: 'Karina',
    age: 23,
    score: {
      korea: 80,
      math: 75
    },
    info(){
      console.log(`Hello I'm ${this.name} I'm ${this.age} my korea score is ${this.score.korea} and math score ${this.score.math}`)
    }
  }
  for (let num in student.score){
    console.log(`My score ${num} :${student.score[num]}`)
  }

  student.info();