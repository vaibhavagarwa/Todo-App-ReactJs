import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        title:''
    }
    //example of component state, no need of ladder climbing or drilling 

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    //1:10:23 watch video
    onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({ title: '' });
    }

    render() {
    return (
      <form  onSubmit={(e)=>this.onSubmit(e)} style={{display:'flex'}}>
          <input 
          type="text" 
          name="title" 
          style={{flex:'10', padding:'5px'}} 
          placeholder="Add Todo...." 
          value={this.state.title} 
           onChange={(e)=>this.onChange(e)}
          
          />
      <input type="Submit" value="Submit" className="btn" style={{flex:'1'}}/>
      </form>
    )
  }
}

export default AddTodo
