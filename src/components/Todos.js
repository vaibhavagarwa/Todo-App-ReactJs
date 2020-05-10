import React, {Component} from 'react';
import TI from './TodoItems'
import PropTypes from 'prop-types';

class Todos extends Component {
  //again we need to go upward level since the state is not here 
  // we are climbing the ladder by carrying markComplete from TodoItems to Todos to App
  /*
  markComplete=()=>
  {
console.log("hello")
  }
*/
  //listen 45.6 
    render ()
  {//console.log(this.props.key)
   //console.log(this.props)
  return this.props.a.map((v)=> (
     
<TI s={v} key={v.id} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
//this markComplete is a props here which work when action is performed in TodoItems.js
//which will be called because of TodoItems.js onlick thing
  ));

}}

export default Todos;
//PropTypes
Todos.propTypes={
    a:PropTypes.array.isRequired
}