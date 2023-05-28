import axios from 'axios'
export const SendData = async(data)=>{
   return await axios.post('https://travelopia-btyp.onrender.com',data)
}
export async function GetData(page,sort='all'){
    return await axios.get(`https://travelopia-btyp.onrender.com?page=${page}&sort=${sort}`)
 }