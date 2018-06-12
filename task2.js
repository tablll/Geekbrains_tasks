/* Task2 */

var a = Array.from(process.argv[2]);
var b = Array.from(process.argv[3]);

var round = 0;

for (i = 0; i < a.length; i++) {

    if (a[i] !== b[i]) {
        a.push(a.shift());
        console.log(a);
        round = round + 1;
    }

}

if (JSON.stringify(a) === JSON.stringify(b)) {
    console.log("Потребовалось " + round + " смещений.");


} 

else {

    console.log("-1");

}
