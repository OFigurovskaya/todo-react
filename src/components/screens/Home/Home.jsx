import React, { useState } from 'react';
import Todoitem from './Item/Todoitem';
import CreateTodoField  from './Item/Create-Todo-Field/CreateTodoField';


const data = [
{   
    _id: 'shdshadj',
    title: 'Finish the essay collaboration',
    isCompleted: false,
},
{
    _id: 'jhgfnghjkl',
    title: 'Read next chapter of the book',
    isCompleted: false,
},
{
    _id: 'uyuyyu',
    title: 'Finish the essay collaboration',
    isCompleted: false,
},
]

const Home = () => {
    const [todos, setTodos] = useState(data);

    const changeTodo = (id) => {
        const copy = [...todos];
        const current = copy.find(t => t._id === id);
        current.isCompleted = !current.isCompleted;
        setTodos(copy);
    }

    const removeTodo = id => 
        setTodos([...todos].filter(t => t._id !== id));
    
    


    return (
<div className="text-white w-4/5 mx-auto">
<h1 className='text-2xl font-bold text-center mb-4'>Todo version 1</h1>
{todos.map(todo => (
    <Todoitem key={todo.id} todo={todo} changeTodo = {changeTodo} removeTodo = {removeTodo} />
    ))}
    <CreateTodoField setTodos={setTodos} />
</div>

    )
}

export default Home;