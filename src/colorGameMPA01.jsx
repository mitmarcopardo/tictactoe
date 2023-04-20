const Square = ({id, player}) => {
    const palet = ['red', 'blue'];
    return <button onClick={() => {alert(`I'm Square id: ${id}`)}}>
        <h3>{player}</h3>
    </button>
};

const Board = () => {
    const [player, setPlayer] = React.useState(0);
    const [mounted, setMounted] = React.useState(true);
    const toggle = () => {
        !setMounted(!mounted);
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