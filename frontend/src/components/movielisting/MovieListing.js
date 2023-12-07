import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import getAllPost from '../../services/Services';
import './MovieListing.css'

const MovieListing = () => {
    const [post, setPost] = useState([])
    // Use an empty array as the default value if todos is undefined or null
    const handleButton = async()=>{
console.log('called')
       const response = await  getAllPost()
       setPost(response.data)
       console.log("value of response",response)

    }
    const todos = useSelector(state => state.todos.todos) || [];

    console.log("value of the todo", todos);

    return (
        <>
        <div id='movie-listing'>ddd
            
             ({post.map((todo) => (
                <div key={todo.text}>{todo.title}</div>
            ))})
            dfssfsfssfsfss
        </div>
        <button onClick={handleButton}>call</button>
        </>
    );
};

export default MovieListing;
