import React, { useState } from 'react';

const ToDoForm = ({addTask}) => {
    const [ userInput, setUserInput ] = useState('');
    
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault(); //dont want the default action to take pace (in this case it'd reload the page and rerender everything back to it's initial state)
        addTask(userInput);
        setUserInput("");
    }

    return (
        //create a form element
        <form onSubmit={handleSubmit}>
            <input value={userInput} type='text' onChange={handleChange}  placeholder='Enter task...'></input>
            <button>Submit</button>
        </form>
    )
};

export default ToDoForm;