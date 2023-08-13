# Encuesta React (Payana)

Desafío: Desarrollo de una encuesta en React con preguntas y valoraciones

Descripción:
Debes crear una aplicación web que permita a los usuarios responder una encuesta con preguntas y valoraciones del 1 al 5. El listado de preguntas será cargado desde un JSON mockeado. La aplicación debe cumplir con los siguientes requisitos:

- Mostrar una pregunta a la vez, con sus opciones de valoración del 1 al 5.
- Permitir al usuario seleccionar una valoración para cada pregunta.
- Mostrar la siguiente pregunta después de que el usuario haya respondido la actual.
- Al finalizar la encuesta, mostrar un resumen con las respuestas del usuario.
- Requisitos técnicos:
- Utiliza React para construir la aplicación.
- Para el CSS utilizar algún framework como Bootstrap o Material-UI.

Entrega:
Una vez completado, puedes compartir tu solución proporcionando el código fuente en un repositorio de GitHub u otra plataforma de alojamiento de código. Asegúrate de incluir instrucciones claras sobre cómo ejecutar y probar la aplicación.

¡Buena suerte en el desafío!

JSON de ejemplo:

```json
{
	"preguntas": [
		{
			"id": 1,
			"texto": "¿Qué tan satisfecho estás con el producto?",
			"valoracion": 5
		},
		{
			"id": 2,
			"texto": "¿Cuál es tu opinión sobre el servicio al cliente?",
			"valoracion": 5
		},
		{
			"id": 3,
			"texto": "¿Cómo calificarías la usabilidad del sitio web?",
			"valoracion": 5
		},
		{
			"id": 4,
			"texto": "¿Recomendarías nuestro producto a otros?",
			"valoracion": 5
		},
		{
			"id": 5,
			"texto": "¿Cómo evaluarías la calidad del producto?",
			"valoracion": 5
		}
	]
}
```
