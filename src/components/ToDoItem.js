import React from 'react';

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.item.id,
            completed: props.item.completed,
            task: props.item.task,
        }
    }

    handleChange = () => { this.setState({ completed: !this.state.completed }); }

    render() {

        return (
            <div className="ToDoItem">
                <input type="checkbox" name={`chkToDo${this.state.id}`} checked={this.state.completed} onChange={this.handleChange} />
                <label htmlFor={`chkToDo${this.state.id}`}>{this.state.task}</label>
            </div>
        );
    }
}

export default ToDoItem;
