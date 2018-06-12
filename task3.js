/* Task3 */

var a = process.argv[2];
var b = process.argv[3];

var total = a + b;

var hours = Math.floor(total / 3600);
var minutes = Math.floor(total / 60) - (hours * 60);
var seconds = total - (hours * 3600) - (minutes * 60);


console.log(hours + " час(а) " + minutes + " минут " + seconds + " секунд");
