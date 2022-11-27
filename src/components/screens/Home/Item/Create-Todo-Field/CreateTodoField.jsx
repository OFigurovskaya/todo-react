import React from 'react';
import { useState } from 'react';

const CreateTodoField = ({setTodos}) => {
const [title, setTitle] = useState('');

const addTodo = (title) => {
    setTodos(prev => [{
        _id: new Date(),
        title,
        isCompleted: false
    }, ...prev])
    setTitle('');
}


  return (
    <div className='flex items-center justify-between mb-4 text-cyan-300 rounded-2xl bg-green-600 border-2 px-5 py-3 w-full mt-20'>
        <input type='text' 
        onChange = {event => setTitle(event.target.value)} 
        value = {title} 
        onKeyPress = {event => event.key === 'Enter' && addTodo(title)}
        className='bg-transparent w-full border-none outline-none'
        placeholder="Add a task"
        />
    </div>
  )
}

export default CreateTodoField