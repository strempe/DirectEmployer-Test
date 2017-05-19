function JavaScript(n) {
    var boom = '';
        for (var i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                boom += 'JavaScript';
                }   else if(i % 3 === 0) {
                boom += 'Java'
                }   else if (i % 5 === 0) {
                boom += 'Script'
                }   else {
                boom += 'i'
                }
        }
    return boom;
}

JavaScript(100);


function reverseString(str) {
         var splitStr = str.split("");
         var reverseStr = splitStr.reverse();
         var joinStr = reverseStr.join("");

         return joinStr;
     }
reverseString("hello")
