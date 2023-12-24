import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuizeApp';

  questions  = [
    {id: 1,
     question:"What is the capital of Nigeria",
  optionA:  "A Abuja",
   optionB:"B Lagos",
    optionC :"C Kano",
     optionD :"D Ibadan",
     answer:"A Abuja"
    },
    
  {
    id:2,
    question:"Who is the president of Nigeria",
    optionA: "A Goodluck Jonathan", 
    optionB : "B Gen Yakubu Gowon",
     optionC: "C Bola Ahmed Tinumbu", 
     optionD :"D Musa Yaradua",
     answer: "C Bola Ahmed Tinumbu"
  },

    {
    id:3,
    question:"What is the capital of Kenya",
    optionA: "A Kieve", 
    optionB: "B Abuja",
    optionC: "C Jakarta",
    optionD: "D Nairobi",
    answer:"D Nairobi"
  },

  {
    id:4,
    question:"Who won the FIFA world cup 2022",
    optionA: "A Morocco", 
    optionB: "B Argentina", 
    optionC: "C France", 
    optionD: "D Germany",
    answer:"B Argentina"
  },

  {
    id:5,
    question:"Who hosted the 2022  FIFA world cup",
    optionA: "A Japan",
     optionB:  "B Brazil",
      optionC: "C Quarta", 
      optionD: "D Italy",
      answer:"C Quarta"
  },
  ]
 
  selectedOption="";
   public solution(index:any){
  let count:number=0;
if(this.selectedOption == this.questions[index].answer){
  count++
}
console.log("Score = " + count);

   }
}
