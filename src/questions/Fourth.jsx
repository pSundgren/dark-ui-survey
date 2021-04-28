import React, { useState } from 'react';

import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';

import {
	Button,
	FormControl,
	FormControlLabel,
	FormHelperText,
	Radio,
	RadioGroup,
	SvgIcon,
} from '@material-ui/core';

function Fourth({ handleChoice, onSubmit, value, goBack }) {
	const [error, setError] = useState(false);
	const [helperText, setHelperText] = useState('');

	const themes = ['Light theme', 'Dark theme', 'It is timed'];

	const handleSubmit = (event) => {
		event.preventDefault();
		if (value) {
			setError(false);
			setHelperText('');
			onSubmit();
		} else {
			setError(true);
			setHelperText(
				'This question is mandatory, if no choice fits choose "I am not sure".'
			);
		}
	};

	return (
		<div className="question-body">
			<h1 className="informative-text">
				<FormatQuoteRoundedIcon />
				What is your current color scheme of your preferred device?
				<SvgIcon
					color="error"
					fontSize="small"
					component={ErrorOutlineRoundedIcon}
					style={{ margin: '0 0 0 .3em' }}
				/>
			</h1>
			<form onSubmit={handleSubmit}>
				<FormControl component="fieldset" error={error}>
					<RadioGroup
						aria-label="fos"
						name="fos"
						value={value}
						onChange={handleChoice}
						style={{ margin: '3em 0 3em 0' }}
					>
						{themes.map((e) => (
							<FormControlLabel
								value={e}
								control={<Radio color="primary" />}
								label={e}
							/>
						))}
					</RadioGroup>
					<FormHelperText>{helperText}</FormHelperText>
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
			</form>
		</div>
	);
}

export default Fourth;
