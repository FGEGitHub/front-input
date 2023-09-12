import axios from "axios"

const  baseUrl ='https://fastapiyape.azurewebsites.net/api/query'




const crear= async  (datos) => {
    console.log(datos)
    let post =  {
        headers:{
            'Content-Type':'application/json'
        },body:datos
    }
     const {data } = await axios.post('https://fastapiyape.azurewebsites.net/api/query',datos)
     console.log(data)
  return data
 }  



 export default { crear }