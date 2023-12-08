export default function Log({turns}){
    const log = turns.map(turn => <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected: {turn.square.row} - {turn.square.col}</li>)
    return(
        <ol id="log">
            {log}
        </ol>
    )
}