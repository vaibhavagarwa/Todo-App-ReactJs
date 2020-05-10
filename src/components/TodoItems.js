import React,{Component} from 'react';
import PropTypes from 'prop-types';

class TodoItems extends Component
{
    //arrow funtion don't need binding like simple functions
    getStyle=()=> 
    {
        /* long way
        if(this.props.s.completed)
        {
            return {textDecoration:'line-through'}

        }
        else
        {
            return {textDecoration:'none'}
        }
        *///shorter way - remember how to write
       return{
           backgroundColor:'#f4f4f4', 
           padding:'15px',
           borderBottom:'1px #ccc dotted',
           textDecoration: this.props.s.completed ?'line-through': 'none'}
    }

       //this cannot access props without normal bind or bind with \in onChnage {}brackets 
       //without bind will get error of TypeError: Cannot read property 'props' of undefined
       // or if don't want to use .bind(this ) then need to use array funstion
      //below finally using array funtion
       
      /* due to ladder climbing or component drilling not using it here!
      markComplete=(event)=>
        {
            
            console.log(this.props.s.id)
        }
        */

        
    render()
    {  //as this.props.s.id etc. will become headache
        //pulling out values  
        const { id, title }=this.props.s;
        
        
        //console.log(this.props.s)
        return (
            //Adding inline style
            <div  style={this.getStyle()} >  
            
                     <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id/* now can directly use id instead of this.props.s.id*/) /*giving id to see which checkbox is changing, it need to be used if not using arrow funation above.bind(this)*/}></input> 
                    
                      { title /* now directly using title instead of this this.props.s.title*/}
                      {"  "}
                      <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
                     </p>
            </div>
            
            );
    }}

export default TodoItems
//PropTypes
TodoItems.propTypes={
    s:PropTypes.object.isRequired
}

/*when using varible in inline styling only need single curly bracket 
const styles={
    backgroundColor:'lightgrey'
}
*/

const btnStyle={
background:'red',
color:'white',
border:'none',
padding:'6px 10px',
borderRadius:'5o%',
cursor:'pointer',
float:'center'
}