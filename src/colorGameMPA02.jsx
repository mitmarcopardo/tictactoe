const Square = ({id, player}) => {
    const palet = ['red', 'blue'];
    React.useEffect( () => {
        console.log(`Render ${id}`);
        return () => console.log(`unmounting Square ${id}`)
    });
    return <button onClick={() => {alert(`I'm Square id: ${id}`)}}>
        <h3>{player}</h3>
    </button>
};

const Board = () => {
    const [player, setPlayer] = React.useState(1);
    const [mounted, setMounted] = React.useState(true);
    const [random, setRandom] = React.useState(0);
    const toggle = () => setMounted(!mounted); 
    const reRender = () => {
        setRandom(Math.random());
        setPlayer((player+1) % 2);
    };

    function renderSquare(i){
        return <Square id={i} player={player}></Square>
    };
    return (
        <div className="game-board">
            <div className="grid-row">
                {mounted && renderSquare(0)}
                {mounted && renderSquare(1)}
                {mounted && renderSquare(2)}
            </div>
            <div id="info">
                <button onClick={toggle}>Show / Hide row</button>
                <button onClick={reRender}>reRender</button>
                <h2> Turn player: {player} </h2>
            </div>
        </div>
    );
};

//============ Rendering

ReactDOM.render(
    <Board />,
    document.getElementById("root")
    );