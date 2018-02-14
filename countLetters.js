function countLetters(text) {
    var count = {};
    var noSpace = text.split(" ").join("")
    for (var i = 0; i < noSpace.length; i++) {
        if (count[noSpace[i]] === undefined) {
            count[noSpace[i]] = 1;
        } else {
            count[noSpace[i]] += 1;
        }
    }
    console.log(count); 
}
countLetters("lighthouse in the house")