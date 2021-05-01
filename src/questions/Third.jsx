import React from 'react';

import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';

import {
	Button,
	FormControl,
	FormControlLabel,
	Grid,
	Radio,
	RadioGroup,
} from '@material-ui/core';

function Third({ handleChoice, onSubmit, value, goBack }) {
	const fos = [
		'Art',
		'Chemistry',
		'Education',
		'Journalism',
		'Political science',
		'Public relations',
		'Other',
	];

	const fos2 = [
		'Business administration',
		'Computer science',
		'Economics',
		'Engineering',
		'Pharmacy',
		'Psychology',
	];

	const fos3 = [
		'Art',
		'Chemistry',
		'Education',
		'Journalism',
		'Political science',
		'Public relations',
		'Other',
		'Business administration',
		'Computer science',
		'Economics',
		'Engineering',
		'Pharmacy',
		'Psychology',
	];

	const isMobile = /Android|webOS|iPhone|iPad|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	);
	const buttonSize = isMobile ? 'small' : 'medium';

	const renderChoices = () => {
		if (!isMobile) {
			return (
				<Grid
					container
					direction="row"
					justify="space-evenly"
					alignItems="flex-start"
				>
					<RadioGroup
						aria-label="fieldOfStudy"
						name="fieldOfStudy"
						value={value}
						onChange={handleChoice}
						style={{
							margin: '2em 3em 0 0',
						}}
					>
						{fos.map((e) => (
							<FormControlLabel
								key={e}
								value={e}
								control={<Radio color="primary" />}
								label={e}
							/>
						))}
					</RadioGroup>
					<RadioGroup
						aria-label="fieldOfStudy"
						name="fieldOfStudy"
						value={value}
						onChange={handleChoice}
						style={{ margin: '2em 0 5em 3em' }}
					>
						{fos2.map((e) => (
							<FormControlLabel
								key={e}
								value={e}
								control={<Radio color="primary" />}
								label={e}
							/>
						))}
					</RadioGroup>
				</Grid>
			);
		} else {
			return (
				<Grid
					container
					direction="column"
					justify="space-evenly"
					alignItems="flex-start"
				>
					<RadioGroup
						aria-label="fieldOfStudy"
						name="fieldOfStudy"
						value={value}
						onChange={handleChoice}
						style={{
							margin: '1em 0 2em 0',
						}}
					>
						{fos3.sort().map((e) => (
							<FormControlLabel
								key={e}
								value={e}
								control={<Radio color="primary" />}
								label={e}
							/>
						))}
					</RadioGroup>
				</Grid>
			);
		}
	};

	return (
		<div className="question-body">
			<h1>
				<FormatQuoteRoundedIcon />
				So to start off we would like to know what field of studies
				you're in?
			</h1>
			<form onSubmit={onSubmit}>
				<FormControl component="fieldset">
					{renderChoices()}
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

export default Third;
