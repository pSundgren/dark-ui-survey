import React, { useState, useCallback } from 'react';
import { useTransition, animated } from '@react-spring/web';

import './App.css';
import styles from './styles.module.css';
import { Button } from '@material-ui/core';
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';

const SurveyQuestion = ({onclick, children}) => <div className="survey-question">{children}</div>

const pages = [
  ({ style, children }) =>
    <animated.div style={{ ...style }}>
      <SurveyQuestion>
        <h1><FormatQuoteRoundedIcon/>Hello there! We would like to get to know your preference in UI color schemes when it comes to e-learning, would you like to help us?</h1>
        <p>This should take no more than 5 minutes</p>
        {children}
      </SurveyQuestion>
    </animated.div>,
  ({ style, children }) =>
    <animated.div style={{ ...style }}>
      <SurveyQuestion>
        <div className="question-body">
          <h1 className="informative-text"><FormatQuoteRoundedIcon/>Great! Before we start we would like to clarify why we're doing this and how your answer will be used in this study.</h1>
          <p className="informative-text">
            This survey is a part of the course Current Topic in Interaction Technology and Design at Umeå University for the Master Science Programme in Interaction technology and design.<br/><br/>
            The objective of this survey is to study UI-elements that are common in an e-learning environment and to find out what color scheme of UI-elements are preferred within an e-learning environment. The UI-elements that the study will cover is input fields, forms, and text fields for reading.<br/><br/>
            Your answers are completely anonymous and will not be presented individually by the end of the study.
          </p>
        </div>
        {children}
      </SurveyQuestion>
    </animated.div>,
  ({ style, children }) =>
    <animated.div style={{ ...style }}>
      <SurveyQuestion>
        <div className="question-body">
          <p>Third</p>
        </div>
        {children}
      </SurveyQuestion>
    </animated.div>,
  ({ style, children }) =>
    <animated.div style={{ ...style }}>
      <SurveyQuestion>
        <div className="question-body">
          <p>Fourth</p>
        </div>
        {children}
      </SurveyQuestion>
    </animated.div>,
]

function App() {
  const [index, set] = useState(0)
  const previous = useCallback(() => set(state => (state - 1) % pages.length), [])
  const next = useCallback(() => set(state => (state + 1) % pages.length), [])

  const transitions = useTransition(index,{
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return (
    <div className="App">
      <div className={`flex fill ${styles.container}`}>
        {transitions((style, i) => {
          const Page = pages[i]
          return i === 0 ?
            <Page style={style}>
              <div className="btn-group">
                <Button onClick={next} color="primary" variant="contained" endIcon={<NavigateNextRoundedIcon/>}>
                  Sure, let's do it
                </Button>
              </div>
            </Page> :
            <Page style={style}>
              <div className="btn-group">
                <Button onClick={previous} variant="contained" startIcon={<NavigateBeforeRoundedIcon />}>
                  Take me back
                </Button>
                <Button onClick={next} color="primary" variant="contained" endIcon={<NavigateNextRoundedIcon />}>
                  Next question
                </Button>
              </div>
            </Page>
        })}
        </div>
    </div>
  )
}

export default App;