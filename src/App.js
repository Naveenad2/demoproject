// Calculator.js

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './Calculator.css';

function App(){
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEvaluate = () => {
    try {
     
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <input
          type="text"
          className="form-control mb-3"
          value={input}
          readOnly
        />
        <div className="row">
          <button
            className="col-3 btn btn-dark btn-rounded"
            onClick={() => handleButtonClick('7')}
          >
            7
          </button>
          <button
            className="col-3 btn btn-dark btn-rounded"
            onClick={() => handleButtonClick('8')}
          >
            8
          </button>
          <button
            className="col-3 btn btn-dark btn-rounded"
            onClick={() => handleButtonClick('9')}
          >
            9
          </button>
          <button
            className="col-3 btn btn-danger btn-rounded"
            onClick={() => handleButtonClick('/')}
          >
            ÷
          </button>
        </div>
        <div className="row">
          <button
            className="col-3 btn btn-dark btn-rounded"
            onClick={() => handleButtonClick('4')}
          >
            4
          </button>
          <button
            className="col-3 btn btn-dark btn-rounded"
            onClick={() => handleButtonClick('5')}
          >
            5
          </button>
          <button
            className="col-3 btn btn-dark btn-rounded"
            onClick={() => handleButtonClick('6')}
          >
            6
          </button>
          <button
            className="col-3 btn btn-danger btn-rounded"
            onClick={() => handleButtonClick('*')}
          >
            ×
          </button>
        </div>
        <div className="row">
          <button
            className="col-3 btn btn-dark btn-rounded"
            onClick={() => handleButtonClick('1')}
          >
            1
          </button>
          <button
            className="col-3 btn btn-dark btn-rounded"
            onClick={() => handleButtonClick('2')}
          >
            2
          </button>
          <button
            className="col-3 btn btn-dark btn-rounded"
            onClick={() => handleButtonClick('3')}
          >
            3
          </button>
          <button
            className="col-3 btn btn-danger btn-rounded"
            onClick={() => handleButtonClick('-')}
          >
            -
          </button>
        </div>
        <div className="row">
          <button
            className="col-3 btn btn-dark btn-rounded"
            onClick={() => handleButtonClick('0')}
          >
            0
          </button>
          <button
            className="col-3 btn btn-dark btn-rounded"
            onClick={() => handleButtonClick('.')}
          >
            .
          </button>
          <button
            className="col-3 btn btn-success btn-rounded"
            onClick={handleEvaluate}
          >
            =
          </button>
          <button
            className="col-3 btn btn-danger btn-rounded"
            onClick={() => handleButtonClick('+')}
          >
            +
          </button>
        </div>
        <div className="row">
          <button
            className="col-6 btn btn-secondary btn-rounded"
            onClick={handleClear}
          >
            C
          </button>
          <button
            className="col-6 btn btn-warning btn-rounded"
            onClick={handleEvaluate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;



