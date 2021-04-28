import React from 'react';

import { Button } from '@material-ui/core';

import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';

function First({ onClick }) {
	return (
		<div>
			<h1>
				<FormatQuoteRoundedIcon />
				Hello there! We would like to get to know your preference in UI
				color schemes when it comes to e-learning, would you like to
				help us?
			</h1>
			<p>This should take no more than 5 minutes</p>
			<div>
				<Button
					onClick={onClick}
					color="primary"
					variant="contained"
					endIcon={<NavigateNextRoundedIcon />}
				>
					Sure, let's do it
				</Button>
			</div>
		</div>
	);
}

export default First;
