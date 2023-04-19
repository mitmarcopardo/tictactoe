const Board = () => {
    const [player, setPlayer] = React.useState(0);
    //let player = 1;
    let status = `Player: ${player}`;
    return (
        <div className="game-board" onClick={() => setPlayer(player+1)}>
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