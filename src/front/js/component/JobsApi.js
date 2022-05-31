import React, { useState, useEffect, useContext } from "react";
import FormatoInfo from "./FormatoInfo";
import { useForm } from "react-hook-form";

export const ResultadosBusqueda = props => {
	const [resultados, setResultados] = useState([]);

	const initialUrl = "https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/oferta"

	const fetchResultados = (initialUrl) =>{
		fetch (initialUrl)
		.then (response => response.json())
		.then (data => setResultados(data))
		.catch (error => console.log(error))
	}

	useEffect(() => {
	  fetchResultados(initialUrl);
	}, [])
	
	return (
		
		<ul>
			<FormatoInfo resultados={resultados}  name={"Hola"} /* info={"quehacecmasksak"} */ img={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"} />
		</ul>
	);
};
