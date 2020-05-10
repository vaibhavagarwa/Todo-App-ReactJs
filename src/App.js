import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import './App.css';
import uuid from 'uuid';

class App extends Component {
  constructor()
  {super()
    this.state={
         
      todos:[ {id:uuid.v4(),
          title:"Build new more real life projects",
          completed:false
          },
          {
            id:uuid.v4(),
            title:"Go for haircut tomorrow",
            completed:true
          },
          {
            id:uuid.v4(),
            title:"Finish all pending calls and mails",
            completed:false
          }]
        }
      

  }
  // getting this id from TodoItems.js
  //Toggle Completed
      markComplete=(id)=>
      {
        this.setState({todos:this.state.todos.map(g=>{

          if(g.id===id)
          {
            g.completed=!g.completed
//console.log("completed is?  ",)
          }
          // if I am not using above if comdition then what is the harm?
         // g.completed=!g.completed
          //why not can directly use the above line
         return g
        })});
     
      }

//Delete Todo
      delTodo=(id)=>
{ 
  this.setState({todos:[...this.state.todos.filter(f=>{
    //console.log("id ",id)
    //console.log("f ",f)
 //What is meaning of filter ...... (id!-id)
  return(f.id!==id)
})]});

}

//Add Todo
addTodo=(title)=>
{
 //console.log(title) 
 const newTodo={
   id:uuid.v4(),
   title:title,
   completed:false
 }

  this.setState({todos:[...this.state.todos, newTodo]});
  //console.log(todos)
}

  render ()
  {
   // console.log(this.state.todos.id)    #this is not working?? why?
   // console.log(this.state.todos)
  return (
    <div className="App">
   <Header/>
   <AddTodo addTodo={this.addTodo}/>
 <Todos a={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>

    </div>
  );
}}

export default App;
