// import React, { Component } from 'react';
// import logo from './logo.svg';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Game from './Game';
import Home from './Home';
import Details from './Details';
import LoadChallenge from './LoadChallenge';
import Challenge1 from './Challenge1';
import Challenge2 from './Challenge2';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

	const [solution, setSolution] = useState([]);
	const [gridNumber, setGridNumber] = useState();
	const [chosenWords, setChosenWords] = useState([]);
	const [time, setTime] = useState([]);
	const [missedWords, setMissedWords] = useState([]);
	const [totalWords, setTotalWords] = useState(0);
	const [highScore1, setHighScore1] = useState(0);
	const [highScore2, setHighScore2] = useState(0);

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home setGridNumber={(gridNumber) => setGridNumber(gridNumber)} />} />
          <Route path="/game" element={<Game setTotalWords={(totalWords) => setTotalWords(totalWords)} chosenWords={chosenWords} solution={solution} missedWords={missedWords} setMissedWords={(missedWords) => setMissedWords(missedWords)} gridNumber={gridNumber}  setTime={(time) => setTime(time)} setChosenWords={(chosenWords) => setChosenWords(chosenWords)} setSolution={(solution) => setSolution(solution)} />} />
					<Route path="/details" element={<Details grihighScore1={highScore1} setHighScore1={(highScore1) => setHighScore1(highScore1)} setTotalWords={(totalWords) => setTotalWords(totalWords)} chosenWords={chosenWords} solution={solution} missedWords={missedWords} setMissedWords={(missedWords) => setMissedWords(missedWords)} setGridNumber={(gridNumber) => setGridNumber(gridNumber)} setTime={(time) => setTime(time)} setChosenWords={(chosenWords) => setChosenWords(chosenWords)} setSolution={(solution) => setSolution(solution)} />} />dNumber={gridNumber} totalWords={totalWords} missedWords={missedWords} time={time} />} />
					<Route path="/loadChallenge" element={<LoadChallenge highScore1={highScore1} highScore2={highScore2} />} />
					<Route path="/challenge1" element={<Challenge1 highScore1={highScore1} setHighScore1={(highScore1) => setHighScore1(highScore1)} setTotalWords={(totalWords) => setTotalWords(totalWords)} chosenWords={chosenWords} solution={solution} missedWords={missedWords} setMissedWords={(missedWords) => setMissedWords(missedWords)} setGridNumber={(gridNumber) => setGridNumber(gridNumber)} setTime={(time) => setTime(time)} setChosenWords={(chosenWords) => setChosenWords(chosenWords)} setSolution={(solution) => setSolution(solution)} />} />
					<Route path="/challenge2" element={<Challenge2 highScore2={highScore2} setHighScore2={(highScore2) => setHighScore2(highScore2)} setTotalWords={(totalWords) => setTotalWords(totalWords)} chosenWords={chosenWords} solution={solution} missedWords={missedWords} setMissedWords={(missedWords) => setMissedWords(missedWords)} setGridNumber={(gridNumber) => setGridNumber(gridNumber)} setTime={(time) => setTime(time)} setChosenWords={(chosenWords) => setChosenWords(chosenWords)} setSolution={(solution) => setSolution(solution)} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
