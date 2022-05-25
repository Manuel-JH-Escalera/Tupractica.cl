import React, { useState, useEffect, useContext } from "react";
import FormatoInfo2 from "./FormatoInfo2";

export const ComunasList = props => {
	const [characters, setCharacters] = useState([]);

	const initialUrl = "https://5000-attackamabw-proyectofin-8mwxjo5p5q8.ws-us45.gitpod.io/comuna"

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
