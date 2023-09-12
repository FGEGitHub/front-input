import React, { useState } from 'react';



const SimplePage = () => {
  const [form, setForm] = useState({edicion:"junio"});
  const [resultados, setResultados] = useState('');

  const handleChange = (e) =>
  setForm({ ...form, [e.target.name]: e.target.value });


function fecha(dataIndex, rowIndex, data, onClick) {
    return (
        <>
            {resultados[dataIndex].fecha != null ? <>{resultados[dataIndex].fecha}</>:<>11/09/2023</>} 


        </>

    );
}





function fiscalizofuncion(dataIndex, rowIndex, data, onClick) {
    return (
        <>
            {resultados[dataIndex].nombreesc  !=null ?  <>{resultados[dataIndex].nombreesc} </>: <>No</> }


        </>

    );
}



function mesafuncion(dataIndex, rowIndex, data, onClick) {
    return (
        <>
            {resultados[dataIndex].numero !=null ?  <>{resultados[dataIndex].numero}</>: <>Sin definir</> }


        </>

    );
}




function inscriptonombre(dataIndex, rowIndex, data, onClick) {
  return (
      <>
         <>{resultados[dataIndex].nombre} {resultados[dataIndex].apellido}</>


      </>

  );
}

function inscripto(dataIndex, rowIndex, data, onClick) {
  return (
      <>
          <>Si</>


      </>

  );
}
  const handleDeterminarpordni = async (event) => {
    event.preventDefault();
    try {

    
     
     } catch (error) {
       console.error(error);
       console.log('Error algo sucedio')
   
     
     }

  };
  
  const handleDeterminarpornombre = async (event) => {
    event.preventDefault();
    try {

     
     } catch (error) {
       console.error(error);
       console.log('Error algo sucedio')
   
     
     }

  };
  
  return (
   <>
   <p>HOLA </p>
   </>
  );
};

export default SimplePage;
