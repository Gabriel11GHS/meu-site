var A = 0;
var B = 0;
var donut;

function renderFrame() {
    var output = '';
    var zbuffer = [];
    for (var i = 0; i < 1760; i++) {
        zbuffer[i] = 0;
    }
    var bbuffer = [];
    for (var i = 0; i < 1760; i++) {
        bbuffer[i] = ' ';
    }

    for (var j = 0; j < 6.28; j += 0.07) {
        for (var i = 0; i < 6.28; i += 0.02) {
            var c = Math.sin(i);
            var d = Math.cos(j);
            var e = Math.sin(A);
            var f = Math.sin(j);
            var g = Math.cos(A);
            var h = d + 2;
            var D = 1 / (c * h * e + f * g + 5);
            var l = Math.cos(i);
            var m = Math.cos(B);
            var n = Math.sin(B);
            var t = c * h * g - f * e;
            var x = 0 | (40 + 30 * D * (l * h * m - t * n));
            var y = 0 | (12 + 15 * D * (l * h * n + t * m));
            var o = x + 80 * y;
            var N = 0 | (8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));
            if (y < 22 && y >= 0 && x >= 0 && x < 80 && D > zbuffer[o]) {
                zbuffer[o] = D;
                bbuffer[o] = '.,-~:;=!*#$@'[N > 0 ? N : 0];
            }
        }
    }

    for (var k = 0; k < 1761; k++) {
        output += k % 80 > 0 ? bbuffer[k] : '\n';
    }

    donut.textContent = output;
    A += 0.04;
    B += 0.02;
    requestAnimationFrame(renderFrame);
}

window.onload = function() {
    donut = document.getElementById('donut');
    renderFrame();
};