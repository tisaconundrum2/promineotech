var turn = true;

$("button").on("click", function () {

    var oWin = isWinCheck("fa-circle");
    var xWin = isWinCheck("fa-times");
    var won = oWin || xWin;

    if ($(this).hasClass("fa-3x") && !won) {
        $(this).css("background-color", "red");
        setTimeout(() => {
            $(this).css("background-color", "white");
        }, 800);
        return;
    }

    if (turn && !won) {
        $("#screen").text("X's Turn");
        $(this).addClass("fa-regular fa-circle fa-3x");
    }

    if (!turn && !won) {
        $("#screen").text("O's Turn");
        $(this).addClass("fa fa-times fa-3x");
    }
    turn = !turn; // My clever swap of two turns

    if (isWinCheck("fa-circle")) {
        $("#screen").text("O Wins");
        $("#screen").css("color", "green");
        return;
    }

    if (isWinCheck("fa-times")) {
        $("#screen").text("X Wins");
        $("#screen").css("color", "green");
        return;
    }
    return;

});

function isWinCheck(symbol) {
    /**
     * Avoid the redundancy of calling the `validateConfiguration` function many times by using `.some()`
     * This applies the function to each element of the array and 
     * returns true if at least one of the elements returned true.
     */

    const configurations = [];
    configurations.push([".sq1", ".sq2", ".sq3"]);
    configurations.push([".sq4", ".sq5", ".sq6"]);
    configurations.push([".sq7", ".sq8", ".sq9"]);
    configurations.push([".sq1", ".sq4", ".sq7"]);
    configurations.push([".sq2", ".sq5", ".sq8"]);
    configurations.push([".sq3", ".sq6", ".sq9"]);
    configurations.push([".sq1", ".sq5", ".sq9"]);
    configurations.push([".sq3", ".sq5", ".sq7"]);

    return configurations.some(configuration => validateConfiguration(configuration[0], configuration[1], configuration[2], symbol));
}

function validateConfiguration(a, b, c, symbol) {
    if ($(a).hasClass(symbol) &&
        $(b).hasClass(symbol) &&
        $(c).hasClass(symbol)) {
        $(a).css("color", "green");
        $(b).css("color", "green");
        $(c).css("color", "green");
        return true;
    }
}