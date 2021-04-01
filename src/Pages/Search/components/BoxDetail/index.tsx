import React from 'react';
import './styles.css';


type Props={
    title: string;
}

const BoxDetail = ({title}: Props) => {
    

   return(
       <div className="box-base-container"> 
        <h2 className="box-form-title">
            {title}
        </h2>
</div>
   )
}

export default BoxDetail;