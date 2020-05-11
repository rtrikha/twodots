var scramble = '█+÷~.–<>/\\{}'.split('');
var cursors = '___█'.split('');
var cursor = '+';


function type(el, content, duration, delay) {

    var proxy = {progress:0};
    var length = content.length;
    var output = [];
    
    for (var i = 0, n = content.length; i < n; i++) {
        output[i] = '&nbsp;';
    }
    
    Tween.to(proxy, duration || 1.0, {progress:1})
        .wait(delay || 0)
        .ease(Tween.Quad.inOut)
        .step(function(tween) {
        	
	        // 1. fixed
        	// 2. scrambled
        	// 3. cursor
        	// [a][b][#][#][-][-][ ][ ]

            var n1 = Math.pow(proxy.progress, 3.0) * length;
            var n2 = Math.pow(proxy.progress, 0.25) * length;
	        var n3 = Math.pow(proxy.progress, 0.1) * length;
        
        	for (var i = 0; i <= n3; i++) {
                if (i > n2) { // 3. cursor
                    output[i] = cursors[Math.floor(Math.random() * cursors.length)];
                } else if (i > n1 /*|| Math.random() > tween.progress*/) { // 2. scrambled
                    if (output[i] === '' || Math.random() < 0.1) {
                        output[i] = scramble[Math.floor(Math.random() * scramble.length)];
                    }
                } else { // 1. fixed
                    output[i] = content.substr(i, 1);
                }
            }
        
	        output[~~n3] = cursor;
        
            el.innerHTML = output.join('');
        })
        .done(function() {
            el.innerHTML = content;
        });
}

var block = document.querySelector('#typer');

function addLine(a, b, c) {
    
    var duration = 0.33;
    var step = 0.3;
    
    var row, cell;
    row = document.createElement('div');
    row.className = 'row';
    
    cell = document.createElement('div');
    cell.className = 'cell light';
    row.appendChild(cell);
    type(cell, a, duration, step * 0);
    
    cell = document.createElement('div');
    cell.className = 'cell light';
    row.appendChild(cell);
    type(cell, b, duration, step * 1);
    
    cell = document.createElement('div');
    cell.className = 'cell link';
    row.appendChild(cell);
    type(cell, c, duration, step * 2);
    
    block.appendChild(row);
}

var step = 3000;

setTimeout(addLine, step * 0, 'drwxr-xr-x', 'Jun 25 2015', '..');
setTimeout(addLine, step * 0, '-rw-r--r--', 'Jun 25 2015', 'WebGL GPU Particles');
setTimeout(addLine, step * 1, '-rw-r--r--', 'Sep 01 2014', 'Unwrappageddon');
setTimeout(addLine, step * 2, '-rw-r--r--', 'Jul 14 2014', 'Plasmatic Isosurface');
setTimeout(addLine, step * 3, '-rw-r--r--', 'Apr 21 2014', 'Crystallization');
setTimeout(addLine, step * 4, '-rw-r--r--', 'Jan 12 2013', 'Time Camera');

var months = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
var years = '2012 2013 2014 2010'.split(' ')
var words = [
    'Awesome',
    'Badger',
    'GPU',
    'Fragmentation',
    'WebGL',
    'Buffer',
    'Isotope',
    'Monkey',
    'JavaScript',
    'Canvas',
    'Generative',
    'Art',
    'Geometric'
];

document.addEventListener('click', function() {
    
    var list = words.concat();
    var count = Math.random() * 4;
    var name = [];
    
    for (var i = 0; i < count; i++) {
        var index = Math.floor(Math.random() * list.length);
        name.push(list.splice(index, 1)[0]);
    }
    
    var date = [
        months[Math.floor(Math.random() * months.length)],
        Math.floor(Math.random() * 30),
        years[Math.floor(Math.random() * years.length)]
	].join(' ');
    
    addLine(
        '-rw-r--r--',
        date,
        name.join(' ')
    );
});

var input = document.querySelector('.input');

document.addEventListener('keydown', function(event) {
    event.preventDefault();
    input.innerText += String.fromCharCode(event.which).toLowerCase();
});