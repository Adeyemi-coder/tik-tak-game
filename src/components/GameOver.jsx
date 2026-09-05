export default function GameOver({ winner, onResetGame, hasDraw }) {
  return <div id="game-over">
      <h2>Game Over</h2>
       {winner && <p>{winner} won!</p>}
       {hasDraw && <p>The game ended in a draw.</p>}
       <p><button onClick={onResetGame}>Rematch</button></p>
  </div>
};