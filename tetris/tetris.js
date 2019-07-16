function buildGameTable() {
    for (let i = 0; i < 20; i++) {
        console.log(i);
        $('.game-table').append('<tr class="gamerow-' + (i + 1) + '">' +
            '<td class="cell gamecol-1 cell-' + (i + 1) + '-1"></td><td class="cell gamecol-2 cell-' + (i + 1) + '-2"></td>' +
            '<td class="cell gamecol-3 cell-' + (i + 1) + '-3"></td><td class="cell gamecol-4 cell-' + (i + 1) + '-4"></td>' +
            '<td class="cell gamecol-5 cell-' + (i + 1) + '-5"></td><td class="cell gamecol-6 cell-' + (i + 1) + '-6"></td>' +
            '<td class="cell gamecol-7 cell-' + (i + 1) + '-7"></td><td class="cell gamecol-8 cell-' + (i + 1) + '-8"></td>' +
            '<td class="cell gamecol-9 cell-' + (i + 1) + '-9"></td><td class="cell gamecol-10 cell-' + (i + 1) + '-10"></td></tr>')
    }
}
function buildNextTable() {
    for (let i = 0; i < 19; i++) {
        console.log(i);
        $('.next-table').append('<tr class="nextrow-' + (i + 1) + '">' +
            '<td class="nextedgecell nextcol-1"></td><td class="nextcell nextcol-2"></td>' +
            '<td class="nextcell nextcol-3"></td><td class="nextcell nextcol-4"></td>' +
            '<td class="nextcell nextcol-5"></td><td class="nextedgecell nextcol-6"></td></tr>')
    }
}
buildGameTable();
buildNextTable();

// var i = 'i';
// var o = 'o';
// var z = 'z';
// var s = 's';
// var j = 'j';
// var l = 'l';
// var t = 't';
const blocks = ['i','o','z','s','j','l','t'];
var nexts = [];
var hold = '';
var lines = 0;
var activeBlock = '';


function onGameStart() {
    for (let i = 0; i < 5; i++) {
        nexts[i] = blocks[Math.floor(Math.random()*7)];
    }
    console.log(nexts);
}
onGameStart();

function spawnBlock() {
    activeBlock = nexts[0];
    nexts[0] = nexts[1];
    nexts[1] = nexts[2];
    nexts[2] = nexts[3];
    nexts[3] = nexts[4];
    nexts[4] = blocks[Math.floor(Math.random()*7)];
}

// function checkLines() {
//
// }

function spawnO() {

}