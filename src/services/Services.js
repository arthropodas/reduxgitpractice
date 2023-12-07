
import axios from 'axios'
const getAllPost = async()=>{
const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
console.log("Value of response ", response)
return response

}
getAllPost();

export default getAllPost
