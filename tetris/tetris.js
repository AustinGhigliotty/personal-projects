function buildGameTable() {
    for (let i = 0; i < 20; i++) {
        console.log(i);
        $('.game-table').append('<tr class="gamerow-' + (i + 1) + '">' +
            '<td class="cell gamecol-1" id="cell-' + (i + 1) + '-1"></td><td class="cell gamecol-2" id="cell-' + (i + 1) + '-2"></td>' +
            '<td class="cell gamecol-3" id="cell-' + (i + 1) + '-3"></td><td class="cell gamecol-4" id="cell-' + (i + 1) + '-4"></td>' +
            '<td class="cell gamecol-5" id="cell-' + (i + 1) + '-5"></td><td class="cell gamecol-6" id="cell-' + (i + 1) + '-6"></td>' +
            '<td class="cell gamecol-7" id="cell-' + (i + 1) + '-7"></td><td class="cell gamecol-8" id="cell-' + (i + 1) + '-8"></td>' +
            '<td class="cell gamecol-9" id="cell-' + (i + 1) + '-9"></td><td class="cell gamecol-10" id="cell-' + (i + 1) + '-10"></td></tr>')
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
var activeCells = [];


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
    activeBlock = 'o';
    $('#cell-1-5').addClass('active');
    $('#cell-1-6').addClass('active');
    $('#cell-2-5').addClass('active');
    $('#cell-2-6').addClass('active');
    activeCells = $('.active');
}
function spawnI() {
    activeBlock = 'i';
    $('#cell-1-4').addClass('active');
    $('#cell-1-5').addClass('active');
    $('#cell-1-6').addClass('active');
    $('#cell-1-7').addClass('active');
    activeCells = $('.active');
}
function spawnZ() {
    activeBlock = 'z';
    $('#cell-1-5').addClass('active');
    $('#cell-1-6').addClass('active');
    $('#cell-2-6').addClass('active');
    $('#cell-2-7').addClass('active');
    activeCells = $('.active');
}
function spawnS() {
    activeBlock = 's';
    $('#cell-1-6').addClass('active');
    $('#cell-1-7').addClass('active');
    $('#cell-2-5').addClass('active');
    $('#cell-2-6').addClass('active');
    activeCells = $('.active');
}
function spawnJ() {
    activeBlock = 'j';
    $('#cell-1-5').addClass('active');
    $('#cell-2-5').addClass('active');
    $('#cell-2-6').addClass('active');
    $('#cell-2-7').addClass('active');
    activeCells = $('.active');
}
function spawnL() {
    activeBlock = 'l';
    $('#cell-1-7').addClass('active');
    $('#cell-2-5').addClass('active');
    $('#cell-2-6').addClass('active');
    $('#cell-2-7').addClass('active');
    activeCells = $('.active');
}
function spawnT() {
    activeBlock = 't';
    $('#cell-1-6').addClass('active');
    $('#cell-2-5').addClass('active');
    $('#cell-2-6').addClass('active');
    $('#cell-2-7').addClass('active');
    activeCells = $('.active');
}


if (nexts[0] === 'i') {
    spawnI();
} else if (nexts[0] === 'o') {
    spawnO();
} else if (nexts[0] === 'z') {
    spawnZ();
} else if (nexts[0] === 's') {
    spawnS();
} else if (nexts[0] === 'j') {
    spawnJ();
} else if (nexts[0] === 'l') {
    spawnL();
} else if (nexts[0] === 't') {
    spawnT();
}

function moveDown() {
    let cellsBlocked = 0;
    if (
        activeCells.forEach(function() {
            if (
                $('#cell-')
            ) {

            }
        })
    ) {

    }
}

// const myNumbers = [1,2,3,4];
// console.log(myNumbers);
// myNumbers = [];
// console.log(myNumbers);


function activeBlock() {

    setTimeout(function(){}, 150);
}