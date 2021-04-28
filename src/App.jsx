import React, { useState, useCallback } from 'react';
import { useTransition, animated } from '@react-spring/web';

import './App.css';
import styles from './styles.module.css';
import { Button } from '@material-ui/core';

import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import First from './questions/First';
import Second from './questions/Second';
import Third from './questions/Third';
import Fourth from './questions/Fourth';
import Fifth from './questions/Fifth';

const SurveyQuestion = ({ children }) => (
	<div className="survey-question">{children}</div>
);

function App() {
	const [index, set] = useState(0);
	const [answers, setAnswers] = useState({});

	const [fieldOfStudy, setFieldOfStudy] = useState('');
	const [colorTheme, setColorTheme] = useState('');
	const [environment, setEnvironment] = useState('');

	const transitions = useTransition(index, {
		keys: null,
		from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
	});

	const previous = useCallback(() => set((state) => (state - 1) % 5), []);
	const next = useCallback(() => set((state) => (state + 1) % 5), []);

	const handleFieldOfStudyChoice = (event) => {
		setFieldOfStudy(event.target.value);
	};

	const handleColorThemeChoice = (event) => {
		setColorTheme(event.target.value);
	};

	const handleEnvironmentChoice = (event) => {
		setEnvironment(event.target.value);
	};

	const pages = [
		({ style }) => (
			<animated.div style={{ ...style }}>
				<SurveyQuestion>
					<First onClick={next} />
				</SurveyQuestion>
			</animated.div>
		),
		({ style }) => (
			<animated.div style={{ ...style }}>
				<SurveyQuestion>
					<Second onClick={next} />
				</SurveyQuestion>
			</animated.div>
		),
		({ style }) => (
			<animated.div style={{ ...style }}>
				<SurveyQuestion>
					<Third
						handleChoice={handleFieldOfStudyChoice}
						value={fieldOfStudy}
						goBack={previous}
						onSubmit={() => {
							setAnswers({
								...answers,
								fieldOfStudy: fieldOfStudy,
							});
							if (fieldOfStudy) {
								next();
							}
						}}
					/>
				</SurveyQuestion>
			</animated.div>
		),
		({ style, children }) => (
			<animated.div style={{ ...style }}>
				<SurveyQuestion>
					<Fourth
						handleChoice={handleColorThemeChoice}
						value={colorTheme}
						goBack={previous}
						onSubmit={() => {
							setAnswers({
								...answers,
								colorTheme: colorTheme,
							});
							if (colorTheme) {
								next();
							}
						}}
					/>
				</SurveyQuestion>
			</animated.div>
		),
		({ style, children }) => (
			<animated.div style={{ ...style }}>
				<SurveyQuestion>
					<Fifth
						handleChoice={handleEnvironmentChoice}
						value={environment}
						goBack={previous}
						onSubmit={() => {
							setAnswers({
								...answers,
								environment: environment,
							});
							if (environment) {
								next();
							}
						}}
					/>
				</SurveyQuestion>
			</animated.div>
		),
	];

	return (
		<div className="App">
			<div className={`flex fill center ${styles.container}`}>
				{transitions((style, i) => {
					const Page = pages[i];
					switch (i) {
						case 0:
							return <Page style={style} />;
						case 1:
							return <Page style={style} />;
						case 2:
							return (
								<Page style={style}>
									<div className="btn-group">
										<Button
											onClick={previous}
											variant="contained"
											startIcon={
												<NavigateBeforeRoundedIcon />
											}
										>
											Take me back
										</Button>
										<Button
											type="submit"
											color="primary"
											variant="contained"
											endIcon={
												<NavigateNextRoundedIcon />
											}
										>
											Next question
										</Button>
									</div>
								</Page>
							);
						default:
							return (
								<Page style={style}>
									<div className="btn-group">
										<Button
											onClick={previous}
											variant="contained"
											startIcon={
												<NavigateBeforeRoundedIcon />
											}
										>
											Take me back
										</Button>
										<Button
											onClick={next}
											color="primary"
											variant="contained"
											endIcon={
												<NavigateNextRoundedIcon />
											}
										>
											Next question
										</Button>
									</div>
								</Page>
							);
					}
				})}
			</div>
		</div>
	);
}

export default App;
