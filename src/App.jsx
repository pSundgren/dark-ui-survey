import React, { useState, useCallback } from 'react';
import { useTransition, animated } from '@react-spring/web';

import './App.css';
import styles from './styles.module.css';

const SurveyQuestion = ({onclick, children}) => <div className="survey-question">{children}</div>

const pages = [
  ({ style, children }) =>
    <animated.div style={{ ...style }}>
      <SurveyQuestion>
        <h1>Hello there! We would like to get to know your preference in UI color schemes when it comes to e-learning, would you like to help us?</h1>
        <p>This should take no more than 5 minutes</p>
        {children}
      </SurveyQuestion>
    </animated.div>,
  ({ style, children }) =>
    <animated.div style={{ ...style }}>
      <SurveyQuestion>
        <p>Second</p>
        {children}
      </SurveyQuestion>
    </animated.div>,
  ({ style, children }) =>
    <animated.div style={{ ...style }}>
      <SurveyQuestion>
        <p>Third</p>
        {children}
      </SurveyQuestion>
    </animated.div>,
  ({ style, children }) =>
    <animated.div style={{ ...style }}>
      <SurveyQuestion>
        <p>Fourth</p>
        {children}
      </SurveyQuestion>
    </animated.div>,
]

function App() {
  const [index, set] = useState(0)
  const goBack = useCallback(() => set(state => (state - 1) % pages.length), [])
  const goForward = useCallback(() => set(state => (state + 1) % pages.length), [])

  const transitions = useTransition(index, {
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
                <button onClick={goForward}>Sure, let's do it</button>
              </div>
            </Page> :
            <Page style={style}>
              <div className="btn-group">
                <button onClick={goBack}>Take me back</button>
                <button onClick={goForward}>Next question</button>
              </div>
            </Page>
        })}
        </div>
    </div>
  )
}

export default App;