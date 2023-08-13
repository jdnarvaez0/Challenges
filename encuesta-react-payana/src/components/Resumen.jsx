import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Rating } from "@mui/material";

const Resumen = ({ respuestas }) => {
	return (
		<div>
			<h1>Resumen</h1>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="caption table">
					<TableHead>
						<TableRow>
							<TableCell>Pregunta</TableCell>
							<TableCell align="center">Valoracion</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{respuestas.map((respuesta, index) => (
							<TableRow key={index}>
								<TableCell component="th" scope="row">
									{respuesta.pregunta}
								</TableCell>
								<TableCell align="center">
									<Rating
										name="read-only"
										value={respuesta.valoracion}
										readOnly
									/>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Resumen;
