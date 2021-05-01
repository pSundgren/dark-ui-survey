import React, { useState } from 'react';

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
} from '@material-ui/core';

function Fifth({ handleChoice, onSubmit, value, goBack }) {
	const [error, setError] = useState(false);
	const [helperText, setHelperText] = useState('');

	const themes = ['Bright lit', 'Dim lit', 'My environment lightning varies'];

	const isMobile = /Android|webOS|iPhone|iPad|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	);
	const buttonSize = isMobile ? 'small' : 'medium';

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
			<h1>
				<FormatQuoteRoundedIcon />
				How would you estimate your environment lightning whilst you
				study?
			</h1>
			<form onSubmit={handleSubmit}>
				<FormControl component="fieldset" error={error}>
					<RadioGroup
						aria-label="environmentLightning"
						name="environmentLightning"
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
							startIcon={
								isMobile ? null : <NavigateBeforeRoundedIcon />
							}
							onClick={goBack}
							style={{ margin: '0 1em 0 auto' }}
							size={buttonSize}
						>
							Take me back
						</Button>
						<Button
							type="submit"
							color="primary"
							variant="contained"
							endIcon={
								isMobile ? null : <NavigateNextRoundedIcon />
							}
							style={{ margin: '0 auto 0 1em' }}
							disabled={value === ''}
							size={buttonSize}
						>
							Next question
						</Button>
					</div>
				</FormControl>
			</form>
		</div>
	);
}

export default Fifth;
