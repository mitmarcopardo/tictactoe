const Board = () => {
    const [player, setPlayer] = React.useState(0);
    let status = `Player: ${player}`;
    return (
        <div className="game-board" onClick={(e) => { 
            setPlayer((player+1) % 2);
            e.target.style.background = "red";
        }}>
            <div id="info">
                <h2> {status} </h2>
            </div>
        </div>
    );
};

//============ Rendering

ReactDOM.render(
    <Board />,
    document.getElementById("root")
    );