import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

function LightInput() {
	return <TextField label="Text input" variant="outlined" />;
}

export default LightInput;
