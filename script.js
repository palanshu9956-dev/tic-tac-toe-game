const playerX = localStorage.getItem("playerX") || "Player X";
const playerO = localStorage.getItem("playerO") || "Player O";

let currentPlayer = "X";
let arr = Array(9).fill(null);

function checkWinner() {

    if (
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
    ) {

        // ⭐ winner symbol (X / O)
        const winner = currentPlayer;

        // ⭐ winner & loser names
        const winnerName = winner === "X" ? playerX : playerO;
        const loserName  = winner === "X" ? playerO : playerX;

        document.getElementById("winText").innerText =
            `🥳 Winner: ${winnerName} (${winner})`;

        document.getElementById("loseText").innerText =
            `😭 Loser: ${loserName} (${winner === "X" ? "O" : "X"})`;

        return;
    }

    // 🤝 DRAW CONDITION
    if (!arr.some(e => e === null)) {
        document.getElementById("winText").innerText = "🤝 Match Draw";
        document.getElementById("loseText").innerText = "";
        return;
    }
}

function handleClick(el) {

    const id = Number(el.id);
    if (arr[id] !== null) return;

    arr[id] = currentPlayer;
    el.innerText = currentPlayer;

    // optional color
    el.style.color = currentPlayer === "X" ? "#0984e3" : "#d63031";

    checkWinner();

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}