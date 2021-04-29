import React from 'react';

import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
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
	SvgIcon,
} from '@material-ui/core';

function Third({ handleChoice, onSubmit, value, goBack }) {
	const fos = [
		'Art',
		'Chemistry',
		'Education',
		'Journalism',
		'Political science',
		'Public relations',
	];

	const fos2 = [
		'Business administration',
		'Economics',
		'Engineering',
		'Pharmacy',
		'Psychology',
		'Other',
	];

	return (
		<div className="question-body">
			<h1 className="informative-text">
				<FormatQuoteRoundedIcon />
				So to start off we would like to know what field of studies
				you're in?
				<SvgIcon
					color="error"
					fontSize="small"
					component={ErrorOutlineRoundedIcon}
					style={{ margin: '0 0 0 .3em' }}
				/>
			</h1>
			<form onSubmit={onSubmit}>
				<FormControl component="fieldset">
					<Grid
						container
						direction="row"
						justify="space-evenly"
						alignItems="flex-start"
					>
						<RadioGroup
							aria-label="fos"
							name="fos"
							value={value}
							onChange={handleChoice}
							style={{
								margin: '2em 3em 0 0',
							}}
						>
							{fos.map((e) => (
								<FormControlLabel
									value={e}
									control={<Radio color="primary" />}
									label={e}
								/>
							))}
						</RadioGroup>
						<RadioGroup
							aria-label="fos"
							name="fos"
							value={value}
							onChange={handleChoice}
							style={{ margin: '2em 0 3em 3em' }}
						>
							{fos2.map((e) => (
								<FormControlLabel
									value={e}
									control={<Radio color="primary" />}
									label={e}
								/>
							))}
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
			</form>
		</div>
	);
}

export default Third;
