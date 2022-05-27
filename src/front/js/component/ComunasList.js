import React, { useState, useEffect, useContext } from "react";
import FormatoInfo2 from "./FormatoInfo2";

export const ComunasList = props => {
	const [characters, setCharacters] = useState([]);

	const initialUrl = "https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/comuna"

	const fetchCharacters = (initialUrl) =>{
		fetch (initialUrl)
		.then (response => response.json())
		.then (data => setCharacters(data))
		.catch (error => console.log(error))
	}

	useEffect(() => {
	  fetchCharacters(initialUrl);
	}, [])
	
	return <FormatoInfo2 characters={characters}/>
};
