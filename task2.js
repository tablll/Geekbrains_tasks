/* Task2 */

var a = Array.from(process.argv[2]);
var b = Array.from(process.argv[3]);

var round = 0;

if (isNaN(a[0])) {
a.shift(a[0]);
}

if (isNaN(a[a.length-1])) {
a.pop(a[a.length-1]);
}

if (isNaN(b[0])) {
b.shift(b[0]);
}

if (isNaN(b[b.length-1])) {
b.pop(b[b.length-1]);
}

for (i = 0; i < a.length; i++) {   
    if (a[i] !== b[i]) {
        a.push(a.shift());
        round = round + 1;
    }
    
}

if (JSON.stringify(a) === JSON.stringify(b)) {
    console.log(round);

} else {

    console.log("-1");

}
