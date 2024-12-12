import './App.css';

import gameBoards from './gameBoards'


function App() {

  console.log('maps', gameBoards)

  const totalGames = useTotalGames()
   



  return (
    <div className="ticketToRide">
      <h1>Ticket to Ride - Statistics!</h1>

      <p>Total Games</p>

      <p>Pedastal Rank 1 - 2 - 3</p>
      <p>Longest Trainer</p>
      <p>The GlobeTrotter</p>
      <p>The Explorer</p>



      <p>VIEW Games by Player</p>
      <p>VIEW Games by Board</p>
      {/* {gameBoards.map((board, i) => (
        <p key={i}>{board}</p>
      ))} */}






    </div>
  );
}

export default App;
