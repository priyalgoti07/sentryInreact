import { useState } from 'react'
import './App.css'

function App() {
  const [triggerError, setTriggerError] = useState(false)

  const [asyncError, setAsyncError] = useState(false)

  
  if (triggerError) {
    throw new Error("This is a runtime error triggered in App component!")
  }
  ;

  
  if (asyncError) {
    try {
      // Simulating an async error after 1 second
      setTimeout(() => {
        throw new Error("This is an asynchronous error!");
      }, 1000);
    } catch (error) {
      // Manually reporting the async error to Sentry
      console.log("error", error);

    }
  }

  const throwTypeError = () => {
    throw new TypeError("This is a type error!")
  }

  const throwReferenceError = () => {
    throw new ReferenceError("This is a reference error")
  }
  return (
    <>
      <p>Hello Sentry In React App 2025</p>
      <button onClick={() => setTriggerError(!triggerError)}>
        🚨  Trigger Error
      </button>
      <br />
      <br />
      <button onClick={() => setAsyncError(!asyncError)}>Throw Async Error</button>
      <br />
      <br />
      <button onClick={throwTypeError}>Throw Type Error</button>
      <br />
      <br />
      <button onClick={throwReferenceError}>Throw Reference Error</button>
    </>
  )
}

export default App
