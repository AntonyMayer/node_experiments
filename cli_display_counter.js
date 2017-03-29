var counter = 0,
    turnArounds = 0,
    inProgressSymbols = ['\u2B12', '\u2B14', '\u2B13', '\u2B15'],
    inProgress = "In progress";

function lorem() {
    process.stdout.write(`${inProgress} ${inProgressSymbols[counter]}\r`);
    counter++;
    if (counter > 3) {
        counter = 0;
        turnArounds++;
        if (!Boolean(turnArounds%3)) inProgress = `${inProgress} ${inProgressSymbols[counter]}`;
    }
    setTimeout(lorem, 100);
}

lorem();