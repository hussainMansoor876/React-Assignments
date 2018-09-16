import React, { Component } from 'react';
import './Quiz.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import swal from 'sweetalert'

class Quiz extends Component {
  constructor(){
    super();
    this.state = {
      quiz : ['AngularJS','Vuejs','React','HTML5','CSS3','JavaScript'],
      count : 0,
      quizQuestions : '',
      quizPage : true,
      quizStart : false,
      tests : '',
      quizzez : {
        AngularJS : {
          Quiz1 : [{
            question : ' Which of the following is not a core AngularJS directive',
            A : 'ng-app',
            B : 'ng-model',            
            C : 'ng-bind',
            D : 'ng-state',
            answer : 'D'
          },
          {
            question : ' Which of the following is true about uppercase filter?',
            A : 'Uppercase filter is a function which takes text as input.',
            B : 'Uppercase filter converts a text to upper case text.',
            C : 'Both of the above.',
            D : 'None of the above.',
            answer : 'B'
          },
          {
            question : 'angular.module is primarily used to create application module.',
            A : 'true',
            B : 'false',
            answer : 'A'
          },
          {
            question : 'Use novalidate with a form declaration to disable any browser specific validation.',
            A : 'true',
            B : 'false',
            answer : 'A'
          },
          {
            question : 'Which of the following is true about provider?',
            A : 'provider is used by AngularJS internally to create services, factory etc.',
            B : 'provider is used during config phase.',
            C : 'provider is a special factory method.',
            D : 'All of the above.',
            answer : 'D'
          }],
          Quiz2 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz3 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }]
        },
        Vuejs : {
          Quiz1 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz2 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz3 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }]
        },
        React : {
          Quiz1 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz2 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz3 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }]
        },
        HTML5 : {
          Quiz1 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz2 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz3 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }]
        },
        CSS3 : {
          Quiz1 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz2 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz3 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }]
        },
        JavaScript : {
          Quiz1 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz2 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz3 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }]
        }
      },
      userName : localStorage.getItem('name')
    }
    this.quiztaker = this.quiztaker.bind(this);
    this.instruction = this.instruction.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
    this.questionData = this.questionData.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }
  dabao(i){
    const {quizzez,tests} = this.state
    console.log(quizzez[i])
    this.setState({
      quizPage : false,
      tests : i
    })
    console.log(tests)
  }

  quiztaker(){
    const {quizzez,tests} = this.state;
    return <div>
      <h1>{tests} Quiz</h1>
      <ol>
        <li><button className='button1' onClick={this.quizData.bind(this,quizzez[tests].Quiz1)}>Quiz 1</button></li>
        <li><button className='button1' onClick={this.quizData.bind(this,quizzez[tests].Quiz1)}>Quiz 2</button></li>
        <li><button className='button1' onClick={this.quizData.bind(this,quizzez[tests].Quiz1)}>Quiz 3</button></li>
      </ol>
    </div>
  }
  quizData(arr){
    console.log('Array',arr);
    this.setState({
      quizQuestions : arr,
      quizStart : true
    })
  }

  instruction(){
    const {tests} = this.state;
    return <div>
      <h1>{tests} Quiz Detail</h1>
      <h3>There are five questions in {tests} Quiz and you have five minutes to answer these questions</h3>
      <button className='button1' onClick={this.startQuiz}>Start Quiz</button>
    </div>
  }
  
  startQuiz(){
    console.log('Hello')
    this.setState({
      quizPage : true,
      quizStart : true
    })
  }

  questionData(){
    const {quizQuestions,count} = this.state;
    console.log(quizQuestions);
    return <div class="container">
      {quizQuestions[count].question}
      <div class="radio">
      <label><input type="radio" name="optradio" />{quizQuestions[count].A}</label>
    </div>
        {/* <li><input type="radio" />{quizQuestions[count].B}</li>
        {quizQuestions[count].C && <li><input type="radio" />{quizQuestions[count].C}</li>}
        {quizQuestions[count].D && <li><input type="radio" />{quizQuestions[count].D}</li>} */}
      <button className='button1' onClick={this.nextQuestion}>Next</button>
    </div>

  }

  nextQuestion(){
    const {count} = this.state;
    this.setState({
      count : count + 1
    })
  }


  render() {
    const {quiz,userName,quizPage,quizStart} = this.state;
    console.log(quiz)
    return (
      <div>
        {quizPage && !quizStart && <div>
      <div>{userName}</div>
      <ol>
        {quiz.map((v,i)=>{
          return <li key={i}>{v} <button className='button1' onClick={()=> this.dabao(v)}>Take Quiz</button></li>
        })}
      </ol>
      </div>}
      {!quizPage && !quizStart && this.quiztaker()}
      {!quizPage && quizStart && this.instruction()}
      {quizPage && quizStart && this.questionData()}
      </div>
    );
  }
}

export default Quiz;
