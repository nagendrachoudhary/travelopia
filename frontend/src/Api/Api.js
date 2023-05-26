import axios from 'axios'
export const SendData = async(data)=>{
   return await axios.post('http://localhost:8080',data)
}
export async function GetData(page){
    return await axios.get(`http://localhost:8080?page=${page}`)
 }