import React, { useState } from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
} from '@material-ui/core';

const darkTheme = createMuiTheme({
	palette: {
		type: 'dark',
	},
});

function DarkForm() {
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
			<ThemeProvider theme={darkTheme}>
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
						style={{ color: 'white' }}
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
						style={{ color: 'white' }}
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
						style={{ color: 'white' }}
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
						style={{ color: 'white' }}
					/>
				</FormGroup>
			</ThemeProvider>
		</FormControl>
	);
}

export default DarkForm;
