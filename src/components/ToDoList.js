import React from 'react';

import data from './data';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
    render() {
        return (
            <div className="ToDoList">

                {data.map(elt => <ToDoItem key={elt.id} item={elt} />)}

            </div>
        );
    }
}

export default ToDoList;