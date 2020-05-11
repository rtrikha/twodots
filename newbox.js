var scramble;

var scramble = "█+÷~.–<>/\\{}".split("");
var cursors = "___█".split("");
var cursor = "+";

function type(el, content, duration, delay) {
        var proxy = { progress: 0 };
        var length = content.length;
        var output = [];

        Tween.to(proxy, duration || 1.0, { progress: 1 })
                .wait(delay || 0)
                .ease(Tween.Quad.inOut)
                .step(function (tween) {
                        // 1. fixed
                        // 2. scrambled
                        // 3. cursor
                        // [a][b][#][#][-][-][ ][ ]

                        var n1 = Math.pow(proxy.progress, 3.0) * length;
                        var n2 = Math.pow(proxy.progress, 0.25) * length;
                        var n3 = Math.pow(proxy.progress, 0.1) * length;

                        for (var i = 0; i <= n3; i++) {
                                if (i > n2) {
                                        // 3. cursor
                                        output[i] = cursors[Math.floor(Math.random() * cursors.length)];
                                } else if (i > n1 /*|| Math.random() > tween.progress*/) {
                                        // 2. scrambled
                                        if (output[i] === "" || Math.random() < 0.1) {
                                                output[i] = scramble[Math.floor(Math.random() * scramble.length)];
                                        }
                                } else {
                                        // 1. fixed
                                        output[i] = content.substr(i, 1);
                                }
                        }
                        output[~~n3] = cursor;

                        el.innerHTML = output.join("");
                })
                .done(function () {
                        el.innerHTML = content;


                });
}

var block = document.querySelector("#blackbox");

function addLine(a, b, c) {
        var duration = 1;
        var step = 0;

        var row, cell;
        row = document.createElement("div");
        row.className = "row";

        cell = document.createElement("div");
        cell.className = "cell light";
        row.appendChild(cell);
        type(cell, a, duration, step * 0);

        block.appendChild(row);
}


var step = 1000;

const texts = [
        "A hobbyist who loves solving real-life problems with aesthetically pleasing and",
        "logical solutions. Dabbling in all things computer science, art, math, and many",
        " other things that sound fancy and crazy.",
];

setTimeout(() => {
        texts.forEach((x, i) => {
                setTimeout(addLine, step * i, `${x}`);
        });
}, 0);

// Dabbling in all things  <span class= "tooltip" style="color: #e4e7ed;"><b>computer science</b><span id="tooltip-span">Quantum Computing</br>First Order Logics</br>Neural Networks</br>Cryptocurrency</span></span>, <span class= "tooltip" style="color: #e4e7ed;"><b>art</b><span id="tooltip-span">Quantum Computing</br>First Order Logics</br>Neural Networks</br>Cryptocurrency</span></span>, <span class= "tooltip" style="color: #e4e7ed;"><b>math</b><span id="tooltip-span">Quantum Computing</br>First Order Logics</br>Neural Networks</br>Cryptocurrency</span></span> and <span class= "tooltip" style="color: #e4e7ed;"><b>other things</b><span id="tooltip-span">Quantum Computing</br>First Order Logics</br>Neural Networks</br>Cryptocurrency</span></span> that sound fancy and crazy.
