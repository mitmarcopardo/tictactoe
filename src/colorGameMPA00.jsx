const handlePlayer = (counter) => {
    if((counter % 2) != 0){
        return 0;
    }else{
        return 1;
    };
};

const Board = () => {
    const [count, setCount] = React.useState(1);
    let player = handlePlayer(count);
    let status = `Player: ${player}`;
    return (
        <div className="game-board" onClick={(e) => { 
            setCount(count+1);
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