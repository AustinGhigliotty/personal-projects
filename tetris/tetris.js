function buildGameTable() {
    for (var i = 0; i < 20; i++) {
        $('.game-table').append('<tr class="gamerow-' + (i + 1) + '"></tr>');
        for (var ii = 0; ii < 10; ii++) {
            $('.game-table').append('<td class="gamecol-' + (i + 1) + '"></td>');
        }
    }
}
buildGameTable();