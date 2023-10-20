const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        var sortedList = permutationSort(a1);
        return JSON.stringify(sortedList) == JSON.stringify(a2.sort(function(a, b) { return a - b; }));
    });
jsc.assert(test);
