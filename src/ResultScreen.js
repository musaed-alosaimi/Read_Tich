import React from 'react'
import { useLocation } from "react-router-dom";

function ResultScreen() {

  let params = useLocation();

  let result = params.state.message;

  return (
    <div>
      <header className="App-header">
        نتيجة دراسة الجدوى
      </header>

      <div className="container">
        <p className="resultMessage">
          {result}
        </p>
      </div>

    </div>
  )
}

export default ResultScreen