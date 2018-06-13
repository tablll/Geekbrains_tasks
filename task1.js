/* Task1 */

var str = process.argv[2];

function rkn () {
    
    str = str.replace(/Р/gi, '');
    str = str.replace(/К/gi, '');
    str = str.replace(/Н/gi, '');
    return str;
}

rkn (str);

process.stdout.write(str);
