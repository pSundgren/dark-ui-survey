import React from 'react';

import {
	Button,
	FormControl,
	FormControlLabel,
	Grid,
	Radio,
	RadioGroup,
	SvgIcon,
} from '@material-ui/core';

import LightForm from '../components/LightForm';
import DarkForm from '../components/DarkForm';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';

const lightTheme = createMuiTheme({
	palette: {
		type: 'light',
	},
});

function Ninth({ handleChoice, onSubmit, value, goBack }) {
	return (
		<div>
			<h1>
				<FormatQuoteRoundedIcon />
				Now, take a look at these forms and tell us which one you'd
				prefer
				<SvgIcon
					color="error"
					fontSize="small"
					component={ErrorOutlineRoundedIcon}
					style={{ margin: '0 0 0 .3em' }}
				/>
			</h1>
			<p>
				Feel free to play around with the elements, it won't impact your
				overall survey answer
			</p>
			<form onSubmit={onSubmit}>
				<ThemeProvider theme={lightTheme}>
					<FormControl component="fieldset">
						<Grid container spacing={1}>
							<RadioGroup
								aria-label="survey"
								name="survey"
								value={value}
								onChange={handleChoice}
								row={true}
								style={{
									margin: '2em 3em 3em 3em',
								}}
							>
								<div className="column">
									<div className="dark2">
										<DarkForm />
									</div>
									<FormControlLabel
										value="darkMode"
										style={{ margin: '1em 0 0 0' }}
										control={<Radio color="primary" />}
									/>
								</div>
								<div className="column">
									<div className="light2">
										<LightForm />
									</div>
									<FormControlLabel
										value="lightMode"
										style={{ margin: '1em 0 0 0' }}
										control={<Radio color="primary" />}
									/>
								</div>
							</RadioGroup>
						</Grid>
						<div className="btn-group">
							<Button
								color="default"
								variant="contained"
								startIcon={<NavigateBeforeRoundedIcon />}
								onClick={goBack}
								style={{ margin: '0 1em 0 auto' }}
							>
								Take me back
							</Button>
							<Button
								type="submit"
								color="primary"
								variant="contained"
								endIcon={<NavigateNextRoundedIcon />}
								style={{ margin: '0 auto 0 1em' }}
								disabled={value === ''}
							>
								Next question
							</Button>
						</div>
					</FormControl>
				</ThemeProvider>
			</form>
		</div>
	);
}

export default Ninth;
