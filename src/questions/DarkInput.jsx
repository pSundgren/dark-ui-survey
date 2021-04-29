import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const darkTheme = createMuiTheme({
	palette: {
		type: 'dark',
	},
});

function DarkInput() {
	return (
		<ThemeProvider theme={darkTheme}>
			<TextField label="Text input" variant="outlined" />
		</ThemeProvider>
	);
}

export default DarkInput;
