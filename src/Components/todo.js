import React from 'react';
import './todo.css';

class Todo extends React.Component {

    state = {
        value : '',
        task: []
    };

    handleChange = (e) => {
        this.setState({value: e.target.value})
    };

    handleAdd = () => {
        this.setState(state =>{
            const taskList = this.state.task.push(<div><input type="checkbox"/><span>{this.state.value}</span></div>);
            return {taskList, value: ''}
        });
    };
    

    render() {
        return (
            <div className="todo-group">
                <div className="add-button">
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <button onClick={this.handleAdd}>Add Item</button>
                    <ul>
                        {this.state.task.map((item, index) => (
                            <li key={index} id={item}>{item}</li>
                        ))}
                    </ul>             
                </div>
            </div>
        )
    }
}

export default Todo;

