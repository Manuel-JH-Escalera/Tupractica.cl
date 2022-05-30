import React, { useState, useEffect, useContext } from "react";
import FormatoInfo from "./FormatoInfo";
import { useForm } from "react-hook-form";

export const Vehicles = props => {
	const [characters, setCharacters] = useState([]);

	const initialUrl = "https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/oferta"

	const fetchCharacters = (initialUrl) =>{
		fetch (initialUrl)
		.then (response => response.json())
		.then (data => setCharacters(data))
		.catch (error => console.log(error))
	}

	useEffect(() => {
	  fetchCharacters(initialUrl);
	}, [])
	
	return (
		
		<ul>
			<FormatoInfo characters={characters}  name={"Hola"} /* info={"quehacecmasksak"} */ img={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"} />
		</ul>
	);
};
