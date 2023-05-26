import axios from 'axios'
export const SendData = async(data)=>{
   await axios.post('http://localhost:8080',data)
}