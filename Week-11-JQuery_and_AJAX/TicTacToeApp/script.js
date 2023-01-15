var turn = true;

$("button").on("click", function () {
    if (turn) {
        $("#screen").text("X's Turn");
        $(this).addClass("fa-regular fa-circle fa-3x");
    } else {
        $("#screen").text("O's Turn");
        $(this).addClass("fa fa-times");
    }
    turn = !turn; // My clever swap of two turns
});