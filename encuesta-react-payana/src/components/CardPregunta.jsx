import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CardPregunta = ({ pregunta }) => {
	return (
		<div>
			<h1>Pregunta</h1>
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography fontSize={23} variant="body2">
						{pregunta.texto}
					</Typography>
				</CardContent>
				<CardActions></CardActions>
			</Card>
		</div>
	);
};

export default CardPregunta;
