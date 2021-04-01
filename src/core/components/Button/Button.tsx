import React from "react";
import './styles.css';

type Props = {
  text: string;
}
const ButtonDefault=({text}: Props) => {
    return(
     <button className="btn-default" >
        {text}  
     </button>
    )
}

export default ButtonDefault;