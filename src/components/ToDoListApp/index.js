import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm'
import data from './data.json';
import './index.css';

const ToDo = () => {
    const [ toDoList, setToDoList ] = useState(data);

    //function to toggle strikethrough
    // pass in id of item that was clicked, map toDoList to a new arry, 
    // find id of current target and flip it's "complete" boolean to opposite of it's current state

    const handleToggle = (taskName) => {
      let mapped = toDoList.map(task => {
        return task.task == taskName ? {...task, complete: !task.complete } : {...task};
      });
      setToDoList(mapped); // --> this.setState({ toDoList: mapped})
    }
  
    // takes toDoList and filter out items that are marked as complete and return array of unfinished items
    const handleFilter = () => {
      let filtered = toDoList.filter(task => {
        return !task.complete;
      });
      setToDoList(filtered);
    }
      
    const addTask = (userInput) => {
      let copy = [...toDoList];
      // add new element to a copy of the ToDoList array
      copy = [...copy, { task: userInput, complete: false}];
      // or copy.push({ id: toDoList.length + 1, task: userInput, complete: false})
      setToDoList(copy);
    }
  
    return (
      <div className="ToDoList">
        <Header />
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
        <ToDoForm addTask={addTask}/>
      </div>
    );
};

export default ToDo;