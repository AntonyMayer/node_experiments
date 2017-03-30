var counter = 0,
    turnArounds = 0,
    inProgressSymbols = ['\u25DC', '\u25DD', '\u25DE', '\u25DF', '\u25CB'],
    inProgressText = "In progress",
    inProgress = inProgressText;

function lorem() {
    process.stdout.write(`${inProgress} ${inProgressSymbols[counter]}\r`);
    counter++;
    if (counter > 3) {
        counter = 0;
        turnArounds++;
        if (turnArounds%3 === 0) {
            inProgress = `${inProgress} ${inProgressSymbols[4]}`;
        }
    }
    setTimeout(lorem, 100);
}

lorem();