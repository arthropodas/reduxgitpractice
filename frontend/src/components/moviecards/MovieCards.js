import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../../feature/todo/todoSlice';
import './MovieCards.scss'
const MovieCards = () => {
    const [input ,setInput]  = useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
    
    return (
        <div >
        movie cards
        <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
            <input className='bg-grey-800'
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            placeholder='enter the to do'
            />
               <button type  = 'submit'>
                add todo</button> 
           
        </form>
        </div>
    );
};

export default MovieCards