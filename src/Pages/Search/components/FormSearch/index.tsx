import React from 'react';
import ButtonDefault from '../../../../core/components/Button/Button';
import './styles.css';


type Props={
    title: string;
    children: React.ReactNode;
}

const FormSearch = ({title,children}: Props) => {
    

   return(
       <div className="search-base-form-container"> 
    <div className="search-base-form">
        <h1 className="search-form-title">
            {title}
        </h1>
        {children}
        <div className="search-form-actions">
          <ButtonDefault text="Encontrar"  /> 

        </div>
    </div> 
</div>
   )
}

export default FormSearch;