import React from 'react';
import './styles.css';


type Props={
    title: string;
    children: React.ReactNode;
}

const FormDetail = ({title,children}: Props) => {
    

   return(
       <div className="detail-base-form-container"> 
    <div className="detail-base-form">
        <h1 className="detail-form-title">
            {title}
        </h1>
        {children}
    </div> 
</div>
   )
}

export default FormDetail;