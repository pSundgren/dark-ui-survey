import React from 'react';

import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';

function First({ onClick }) {
	return (
		<div>
			<h1>
				<FormatQuoteRoundedIcon />
				Thank you for your participation! We've now collected your
				answers. Your participation is highly appreciated!
			</h1>
			<p>
				Your answer been submitted and you can go ahead and close this
				tab
			</p>
		</div>
	);
}

export default First;
