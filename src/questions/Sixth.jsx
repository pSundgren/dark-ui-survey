import React from 'react';

import { Button } from '@material-ui/core';

import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';

function Sixth({ onClick }) {
	return (
		<div className="question-body">
			<h1>
				<FormatQuoteRoundedIcon />
				Now that we know that, let's get on with the survey!
			</h1>
			<p>
				You will now get to choose between different user interface
				elements such as input fields, text fields, and form groups in
				different color schemes where we would like you to choose which
				one you prefer.
			</p>
			<div>
				<Button
					onClick={onClick}
					color="primary"
					variant="contained"
					endIcon={<NavigateNextRoundedIcon />}
				>
					Continue
				</Button>
			</div>
		</div>
	);
}

export default Sixth;
