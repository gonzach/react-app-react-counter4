import React from 'react';
import './todo.css';

class TodoList extends React.Component {
    state = {
        value : ''
    };
    handleChange = (e) => {
        this.setState({input: e.target.value})
        console.log(this.setState({input: e.target.value}))
    }

    render() {
        const { value } = this.state;
        return (
            <div className="todo-group">
                <div className="add-button">
                    <input type="text" onChange={this.handleChange}/>
                    <button onClick={this.handleAdd}>Add Item</button>                   
                </div> 
            </div>
        )
    }
}

export default TodoList;

