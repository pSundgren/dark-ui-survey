import React, { useState } from 'react';

import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
} from '@material-ui/core';

function LightForm() {
	const [state, setState] = useState({
		first: false,
		second: false,
		third: false,
		fourth: false,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	return (
		<FormControl component="fieldset">
			<FormLabel component="legend">
				Which one of these is true?
			</FormLabel>
			<FormGroup>
				<FormControlLabel
					control={
						<Checkbox
							checked={state.first}
							onChange={handleChange}
							name="first"
							color="primary"
						/>
					}
					label="First answer"
				/>
				<FormControlLabel
					control={
						<Checkbox
							checked={state.second}
							onChange={handleChange}
							name="second"
							color="primary"
						/>
					}
					label="Second answer"
				/>
				<FormControlLabel
					control={
						<Checkbox
							checked={state.third}
							onChange={handleChange}
							name="third"
							color="primary"
						/>
					}
					label="Third answer"
				/>
				<FormControlLabel
					control={
						<Checkbox
							checked={state.fourth}
							onChange={handleChange}
							name="fourth"
							color="primary"
						/>
					}
					label="Fourth answer"
				/>
			</FormGroup>
		</FormControl>
	);
}

export default LightForm;
