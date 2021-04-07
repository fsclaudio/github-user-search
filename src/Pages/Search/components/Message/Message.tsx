import React from 'react';
import {ToastContainer, toast, Zoom} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Mensagem = () => {
    toast.error("Usuario não encontrado!")

   return(
       <div > 
        <ToastContainer 
        draggable={false}
        transition={Zoom}
        autoClose = {8000}
        />
      </div>
   )
}

export default Mensagem;