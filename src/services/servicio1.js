import axios from "axios"

const  baseUrl ='https://fastapiyape.azurewebsites.net/api/query'




const crear= async  (datos) => {
    console.log(datos)
    let post =  {
        headers:{
            'Content-Type':'application/json'
        },body:{"question":"que es yape"}
    }
     const {data } = await axios.post(baseUrl,{"question":"que es yape"})
     console.log(data)
  return data
 }  



 export default { crear }