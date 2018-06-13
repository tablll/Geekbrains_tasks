/* Task3 */

var a = parseInt(process.argv[2]);
var b = parseInt(process.argv[3]);

var total = a + b;
console.log(total);
var hours = Math.floor(total / 3600);
var minutes = Math.floor(total / 60) - (hours * 60);
var seconds = total - (hours * 3600) - (minutes * 60);


process.stdout.write(hours + " час(а) " + minutes + " минут " + seconds + " секунд");
