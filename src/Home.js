// import React, { Component } from 'react';
// import logo from './logo.svg';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import { signInWithGoogle } from "./Firebase";


function Home({setGridNumber}) {
  const [grid_size, setGrid_Size] = useState(1);
	const [nextPart, goNextPart] = useState(false);
	const [loadChallenge, setLoadChallenge] = useState(false);

  function handleChange(e) {
    setGrid_Size(e.target.value)
}

  function startGame() {
    console.log(grid_size);
		setGridNumber(grid_size);
		goNextPart(true)
  }
	
	function performloadChallenge() {
		console.log("load challenge");
		setLoadChallenge(true)
	}

	if (nextPart) {
		return <Navigate to="/game" />;
	}

	if (loadChallenge) {
		return <Navigate to="/loadChallenge" />;
	}

  return (
		<div>
			<div className="container">
				<div className="boggle">
					<h1>Boggle</h1>
				</div>
				<div className="button">
					<button type="button" onClick={startGame}>START BOGGLE GAME</button>
				</div>
				<div className="dropdown">
					<label class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						CHOOSE GRID SIZE
					</label>
					<select class="btn btn-light" onChange={handleChange}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>

				</div>
				<div>
				<button onClick={signInWithGoogle}> Sign In With Google </button>
				</div>
			</div>
			<div>
				<button className="gg" onClick={performloadChallenge}> Load Challenge </button>
			</div>
		</div>
  );
}


// class App extends Component {
//   state = { 
//     started : false,
//     ended : false,
//     grid_size: 4
//   }

//   handleChange = (e) => {
//     this.setState({grid_size : e.target.value});
//   }

//   startGame = () => {
//     console.log(this.state.grid_size);
//     return <Navigate to='/Game' />
//   }

//   // function Game() {
//   //   const navigate = useNavigate();
//   //   navigate("/Game");

//   // }

//   render() {
//     return (
//       <div className="container">
//         <div className="boggle">
//           <h1>Boggle</h1>
//         </div>
//         <div className="button">
//           <button type="button" onClick={this.startGame}>START BOGGLE GAME</button>
//         </div>
//         <div className="dropdown">
//           <label class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//             CHOOSE GRID SIZE
//           </label>
//           <select class="btn btn-light" onChange={this.handleChange}>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//           </select>

//         </div>
//       </div>
//     );
//   }
// }

export default Home;
