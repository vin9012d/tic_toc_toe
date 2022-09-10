import { useEffect, useState } from "react";
import { Square } from "./Square";

import "./App.css"

const resetState=["","","","","","","","","",]

function App() {

  const [gameState, updateGameState] = useState(resetState);
  const [isXChance, updateIsXChance] = useState(false)
  const onUserClicked = (index) => {
     
    let temp = [...gameState];
    if (temp[index]) {
      return;
    }

    temp[index] = isXChance ? "X" : "0";
    updateIsXChance(!isXChance)
    updateGameState([...temp])
    


  }

  const handleReset = () => {
    updateGameState(resetState)
  }
  useEffect(() => {
    let winner = checkWinner();
    console.log(winner,"winner")
    if (winner) {
        handleReset();
        alert(`Ta da ! ${winner} won the Game !`)
    }
}, [gameState])

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
   
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }
  

  return (
    <div className="App container" >
      <h1 className="title">Tic-Tac-Toe App</h1>
      <div className="row" >
        <Square classes1={"b-bottom-right"}  onClick={()=>onUserClicked(0)}  state={gameState[0]}  />
        <Square classes1={"b-bottom-right"} onClick={()=>onUserClicked(1)}  state={gameState[1]}  />
        <Square classes1="b-bottom" onClick={()=>onUserClicked(2)}  state={gameState[2]}  />
      </div>
      <div className="row">
        <Square classes1={"b-bottom-right"} onClick={()=>onUserClicked(3)}  state={gameState[3]}  />
        <Square classes1={"b-bottom-right"} onClick={()=>onUserClicked(4)}  state={gameState[4]}  />
        <Square classes1="b-bottom" onClick={()=>onUserClicked(5)}  state={gameState[5]}  />
      </div>
      <div className="row">
        <Square classes1="b-right" onClick={()=>onUserClicked(6)}  state={gameState[6]}  />
        <Square classes1="b-right" onClick={()=>onUserClicked(7)}  state={gameState[7]}  />
        <Square  onClick={()=>onUserClicked(8)}  state={gameState[8]}  />
      </div>
      <button onClick={handleReset} className="reset-btn">Reset Game</button>  
      
      <h2 className="author ">Made with  <span style={{color:"#1CDBF5"}}>❤</span> by Vinod Chaudhari</h2>
    </div>
  );
}

export default App;  
