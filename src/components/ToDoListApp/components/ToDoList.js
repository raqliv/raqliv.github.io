import React from "react";
import ToDo from './ToDo';
//list of tasks
const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>ClearComplete</button>
        </div>
    )
};

export default ToDoList;