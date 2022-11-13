import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Challenge1.css';
import getGrid from "./helper.js";
import 'bootstrap/dist/css/bootstrap.css';
import {updateDoc, doc} from 'firebase/firestore';
import { db } from "./Firebase";

function Challenge1({setTotalWords, highScore1, setHighScore1, setGridNumber, missedWords, setMissedWords, setTime, chosenWords, setChosenWords, solution, setSolution}) {
	const [nextPart, goNextPart] = useState(false);
	const [input, getInput] = useState('');
	const [correctness, setCorrectness] = useState("");
	const [validWord, addValidWord]= useState([])
	const [thisSoultion, setThisSolution] = useState([]);
	const start = Date.now();


	function updateState() {

		setSolution(thisSoultion);
		console.log(1111);
		setGridNumber(6);
		setChosenWords(validWord);
		setTotalWords(validWord.length);
		// db.collection("LoadChallenge").add({highScore: highScore1})

		const hRef = doc(db, "LoadChallenge1", 
"Zz9d8yYUXxCDE36WAWjz");
		updateDoc(hRef, {
			highScore: highScore1
		})

		if (validWord.length > highScore1) {
			setHighScore1(validWord.length);
			updateDoc(hRef, {
				highScore: validWord.length
			})
		}

		let i = 0;
		let A = [];
		for (i; i < thisSoultion.length; i ++) {
			if (!(validWord.includes(thisSoultion[i]))) {
				A.push(thisSoultion[i]);
			}
		}
		setMissedWords(A);
		console.log(A);
		console.log(missedWords);
		const end = Date.now();
		setTime((end - start)/1000);
		console.log(validWord);
		if (validWord.length === 0) {
			console.log(55);
			setMissedWords(thisSoultion);
		}

// 		console.log(233);
// 		const hRef = doc(db, "LoadChallenge1", 
// "Zz9d8yYUXxCDE36WAWjz");
// 		console.log(href);
// 		updateDoc(hRef, {
// 			highScore: 10
// 		})
	}

  function endGame() {
    updateState();
		goNextPart(true)
  }

	function check(e) {
		let solution = getGrid(6)[1];
		var word = input;
		console.log(getGrid(6)[1]);
		console.log(solution);
		console.log(word)
		setThisSolution(solution);
		if (solution.includes(word)) {
			console.log(1);
			if (validWord.includes(word)) {
				setCorrectness("ALREADY FOUND!");
			}
			else {
				setCorrectness("CORRECT!");
				addValidWord(validWord.concat([word]));
			}
		}
		else {
			setCorrectness("INCORRECT!");
		}
		

		console.log(validWord);
		return (
			<div>
				<h5>SOLUTION YOU'VE FOUND: {validWord.length}</h5>
				<li>
				{validWord.map((word) => (
					<div>
						<h6>{word}</h6>
					</div>
				))}
				</li>
			</div>
		)
  }

	function printGrid() {
		const myGrid = getGrid(6)[0];
		return (
			<ul className="outerloop">
			{myGrid.map((word) =>(
				<div className="innerloop">{word.map((letter) =>(
					<div class="border border-dark">
						<h3 className="space">{letter}</h3>
					</div>
				))}</div>
			))}
			</ul>
		);
	}

	if (nextPart) {
		return <Navigate to="/details" />;
	}

	console.log("hehehehhe");
  return (
		<div className="general">
			<div className="container2">
				<div className="boggle2">
					<h1>Boggle</h1>
				</div>
				<div className="button2">
					<button type="button" onClick={endGame}>END BOGGLE GAME</button>
				</div>
			</div>
			<div>
			{printGrid()}
			</div>
			<div className="val">
				<div class="border border-5">
					<form className="form">
						<label>
							ENTER A WORD  : 
							<input type="text" name="name" value={input} onChange={(e) => getInput(e.target.value)} />
						</label>
						<button type="button" onClick={check}>SUBMIT</button>
						<h5 className="here">{correctness}</h5>
						<div class="border border">
							<div className="words">
								<h5>Solutions you've found: {validWord.length}</h5>
								{validWord.map((word) => (
									<div>
										<h6>{word}</h6>
									</div>
								))}
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
  );
}

export default Challenge1;
