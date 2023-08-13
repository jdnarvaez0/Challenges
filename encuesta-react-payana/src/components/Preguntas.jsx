import { useState } from "react";
import data from "../data.json";
import { Rating, Container } from "@mui/material";
import Resumen from "./Resumen";
import CardPregunta from "./CardPregunta";

export const Preguntas = () => {
	const [preguntaIndex, setPreguntaIndex] = useState(0);
	const preguntaActual = data.preguntas[preguntaIndex];
	const [value, setValue] = useState(0);
	const [respuestas, setRespuestas] = useState([]);
	const [ratingHabilitado, setRatingHabilitado] = useState(true);
	const [mostrar, setMostrar] = useState(false);

	const mostrarSiguentePregunta = () => {
		if (preguntaIndex < data.preguntas.length - 1) {
			setPreguntaIndex(preguntaIndex + 1);
			setValue(0);
		} else {
			console.log("Encuentas terminadas");
			setMostrar(true); // Mostrar el resumen al finalizar todas las preguntas
			setRatingHabilitado(false);
		}
	};

	const guardarRespuesta = (valoracion) => {
		const respuesta = {
			pregunta: preguntaActual.texto,
			valoracion: valoracion,
		};
		setRespuestas([...respuestas, respuesta]);
		mostrarSiguentePregunta();
	};

	return (
		<Container>
			<CardPregunta pregunta={preguntaActual} preguntaActual={preguntaActual} />
			<Rating
				name="simple-controlled"
				value={value}
				disabled={!ratingHabilitado}
				onChange={(event, newValue) => {
					setValue(newValue);
					guardarRespuesta(newValue);
				}}
			/>
			{mostrar && <Resumen respuestas={respuestas} />}{" "}
		</Container>
	);
};
