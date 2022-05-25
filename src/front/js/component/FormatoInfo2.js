import React from "react";
import { useForm } from "react-hook-form";

const FormatoInfo2 = ({characters=[], img, name, info}) => {
      
    return (
		
		<select class="form-select" aria-label="Default select example" >
        {
            characters.map((item, index) => (
                <option key={index} value={item.id}>{item.nombre}</option>
            ))
        }
        </select>
	);
}

export default FormatoInfo2