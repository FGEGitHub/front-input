import axios from "axios"

const  baseUrl ='http://localhost:4000/'

let config =  {
    headers:{
        Authorization:`Bearer ${userContext.token}`
    }
}


const crear= async  (datos) => {
    console.log(datos)
     const {data } = await axios.post(baseUrl+'crear',config,datos)
     if(data=== 'error login'){
       
      window.localStorage.removeItem('loggedNoteAppUser')
      window.location.reload();
    }  
 }  



 export default { crear }