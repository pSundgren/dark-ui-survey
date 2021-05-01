import React from 'react';

import { Button } from '@material-ui/core';

import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';

function Second({ onClick }) {
	return (
		<div className="question-body">
			<h1>
				<FormatQuoteRoundedIcon />
				Great! Before we start we would like to clarify why we're doing
				this and how your participation will be used in this study
			</h1>
			<p className="informative-text">
				This survey is a part of the course Current Topic in Interaction
				Technology and Design at Umeå University for the Master Science
				Programme in Interaction technology and design
				<br />
				<br />
				The objective of this survey is to study UI-elements that are
				common in an e-learning environment and to find out what color
				scheme of UI-elements are preferred within an e-learning
				environment. The UI-elements that the study will cover is input
				fields, forms, and text fields for reading
				<br />
				<br />
				Your answers are completely anonymous and will not be presented
				individually by the end of the study. For instance - we will
				will not ask of any personal information such as age, name, or
				contact information
				<br />
				<br />
				If you have any questions feel free to contact me at{' '}
				<a href="mailto:posu0004@student.umu.se">
					posu0004@student.umu.se
				</a>
			</p>
			<Button
				onClick={onClick}
				color="primary"
				variant="contained"
				endIcon={<NavigateNextRoundedIcon />}
			>
				Ok, got it
			</Button>
		</div>
	);
}

export default Second;
