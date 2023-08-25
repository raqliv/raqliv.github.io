import React from "react";
// object that is the actual task
const ToDo = ({todo, handleToggle}) => {
    
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.task} name="todo" value={todo.task} onClick={handleClick} className={todo.complete ? "strike" : ""}>
            {todo.task}
        </div>
    );
};

export default ToDo;