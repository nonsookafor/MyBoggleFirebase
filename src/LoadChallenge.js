import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './LoadChallenge.css';
import 'bootstrap/dist/css/bootstrap.css';
import {collection, getDocs} from 'firebase/firestore';
import { db } from "./Firebase";

function LoadChallenge({highScore1, highScore2}) {
	const [challenge1, setChallenge1] = useState(false);
	const [challenge2, setChallenge2] = useState(false);
	const [nextPart, goNextPart] = useState(false);
	const [hs1, seths1] = useState(0);
	const [hs2, seths2] = useState(0);


	const hRef = collection(db, "LoadChallenge1");
	getDocs(hRef)
	.then((result) => {
		let val = [];
		let b = 0;
		result.docs.forEach((doc) => {
			val.push({...doc.data(), id: doc.id});
			b = doc.data().highScore;
			seths1(doc.data().highScore);
		})
		console.log(val);
		console.log(b);
	})
	.catch((error) => {
		console.log(error);
	});

	const hRef2 = collection(db, "LoadChallenge2");
	getDocs(hRef2)
	.then((result2) => {
		let val2 = [];
		let b2 = 0;
		result2.docs.forEach((doc) => {
			val2.push({...doc.data(), id: doc.id});
			b2 = doc.data().highScore;
			seths2(doc.data().highScore);
		})
		console.log(val2);
		console.log(b2);
	})
	.catch((error) => {
		console.log(error);
	});
	


	function performloadChallenge1() {
		console.log("load challenge1");
		setChallenge1(true)
	}

	function performloadChallenge2() {
		console.log("load challenge2");
		setChallenge2(true)
	}

	function endGame() {
		goNextPart(true)
  }

	if (challenge1) {
		return <Navigate to="/challenge1" />;
	}

	if (challenge2) {
		return <Navigate to="/challenge2" />;
	}

	if (nextPart) {
		return <Navigate to="/" />;
	}

	return(
		<div className="val">
			<div>
				<button className="exit" type="button" onClick={endGame}>GO BACK TO HOME</button>
			</div>
			<div className="chal">
				<h2>THESE ARE THE SPECIAL CHALLENGES</h2>
			</div>
			<div className="border border-5">
				<div class="form">
					<h2 className="here">6 X 6 Grid</h2>
					<h3 className="here"> Pretty Much Easy</h3>
					<h4 className="here"> Highest Score is: {hs1} words</h4>
					<button className="here" onClick={performloadChallenge1}> CLICK ME</button>
				</div>
			</div>
			<div className="extra">
				<div className="border border-5">
					<div class="form">
						<h2 className="here">6 X 6 Grid</h2>
						<h3 className="here"> A bit harder</h3>
						<h4 className="here"> Highest Score is: {hs2} words</h4>
						<button className="here" onClick={performloadChallenge2}> CLICK ME</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoadChallenge