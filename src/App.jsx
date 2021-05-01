import React, { useState, useCallback } from 'react';
import { useTransition, animated } from '@react-spring/web';

import './App.css';
import styles from './styles.module.css';

/* Survey pages */
import First from './questions/First';
import Second from './questions/Second';
import Third from './questions/Third';
import Fourth from './questions/Fourth';
import Fifth from './questions/Fifth';
import Sixth from './questions/Sixth';
import Seventh from './questions/Seventh';
import Eigth from './questions/Eigth';
import Ninth from './questions/Ninth';
import Tenth from './questions/Tenth';

const SurveyQuestion = ({ children }) => (
	<div className="survey-question">{children}</div>
);

function App() {
	const [index, set] = useState(0);
	const [answers, setAnswers] = useState({});

	const [fieldOfStudy, setFieldOfStudy] = useState('');
	const [defaultTheme, setDefaultTheme] = useState('');
	const [environmentLightning, setEnvironmentLightning] = useState('');
	const [textInputChoice, setTextInputChoice] = useState('');
	const [readingFieldChoice, setReadingFieldChoice] = useState('');
	const [surveyChoice, setSurveyChoice] = useState('');

	const timestamp = new Date().toISOString();

	const transitions = useTransition(index, {
		keys: null,
		from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
	});

	const previous = useCallback(
		() => set((state) => (state - 1) % pages.length),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);
	const next = useCallback(
		() => set((state) => (state + 1) % pages.length),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	const handleChoice = (event) => {
		switch (event.target.name) {
			case 'fieldOfStudy':
				setFieldOfStudy(event.target.value);
				break;
			case 'defaultTheme':
				setDefaultTheme(event.target.value);
				break;
			case 'environmentLightning':
				setEnvironmentLightning(event.target.value);
				break;
			case 'textField':
				setTextInputChoice(event.target.value);
				break;
			case 'readingFieldChoiceField':
				setReadingFieldChoice(event.target.value);
				break;
			case 'survey':
				setSurveyChoice(event.target.value);
				break;
			default:
				break;
		}
	};

	async function sendAnswers(event) {
		event.preventDefault();

		const requestOptions = {
			method: 'POST',
			body: JSON.stringify({
				fieldOfStudy,
				defaultTheme,
				environmentLightning,
				textInputChoice,
				readingFieldChoice,
				surveyChoice,
				timestamp,
			}),
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		};

		const params = `${fieldOfStudy}/${defaultTheme}/${environmentLightning}/${textInputChoice}/${readingFieldChoice}/${surveyChoice}/${timestamp}`;

		try {
			fetch(
				'http://192.168.1.139:5000/post/' + params,
				requestOptions
			).then((response) => {
				return response.json();
			});
		} catch (err) {
			console.log(err);
		}
	}

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
						handleChoice={handleChoice}
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
		({ style }) => (
			<animated.div style={{ ...style }}>
				<SurveyQuestion>
					<Fourth
						handleChoice={handleChoice}
						value={defaultTheme}
						goBack={previous}
						onSubmit={() => {
							setAnswers({
								...answers,
								defaultTheme: defaultTheme,
							});
							if (defaultTheme) {
								next();
							}
						}}
					/>
				</SurveyQuestion>
			</animated.div>
		),
		({ style }) => (
			<animated.div style={{ ...style }}>
				<SurveyQuestion>
					<Fifth
						handleChoice={handleChoice}
						value={environmentLightning}
						goBack={previous}
						onSubmit={() => {
							setAnswers({
								...answers,
								environmentLightning: environmentLightning,
							});
							if (environmentLightning) {
								next();
							}
						}}
					/>
				</SurveyQuestion>
			</animated.div>
		),
		({ style }) => (
			<animated.div style={{ ...style }}>
				<SurveyQuestion>
					<Sixth onClick={next} />
				</SurveyQuestion>
			</animated.div>
		),
		({ style }) => (
			<animated.div style={{ ...style }}>
				<SurveyQuestion>
					<Seventh
						handleChoice={handleChoice}
						value={textInputChoice}
						goBack={previous}
						onSubmit={() => {
							setAnswers({
								...answers,
								textInputChoice: textInputChoice,
							});
							if (textInputChoice) {
								next();
							}
						}}
					/>
				</SurveyQuestion>
			</animated.div>
		),
		({ style }) => (
			<animated.div style={{ ...style }}>
				<SurveyQuestion>
					<Eigth
						handleChoice={handleChoice}
						value={readingFieldChoice}
						goBack={previous}
						onSubmit={() => {
							setAnswers({
								...answers,
								readingFieldChoiceChoice: readingFieldChoice,
							});
							if (readingFieldChoice) {
								next();
							}
						}}
					/>
				</SurveyQuestion>
			</animated.div>
		),
		({ style }) => (
			<animated.div style={{ ...style }}>
				<SurveyQuestion>
					<Ninth
						handleChoice={handleChoice}
						value={surveyChoice}
						goBack={previous}
						onSubmit={(event) => {
							setAnswers({
								...answers,
								surveyChoice: surveyChoice,
							});
							if (surveyChoice) {
								sendAnswers(event).then(next());
							}
						}}
					/>
				</SurveyQuestion>
			</animated.div>
		),
		({ style }) => (
			<animated.div style={{ ...style }}>
				<SurveyQuestion>
					<Tenth />
				</SurveyQuestion>
			</animated.div>
		),
	];

	return (
		<div className="App">
			<div className={`flex fill center ${styles.container}`}>
				{transitions((style, i) => {
					const Page = pages[i];
					return <Page style={style} />;
				})}
			</div>
		</div>
	);
}

export default App;
