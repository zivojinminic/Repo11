// Only change code below this line 
function myMutation(arr) {
    var arr1 = arr[0].toLowerCase().split('');
    var arr2 = arr[1].toLowerCase().split('');
    for (var i=0; i < arr2.length; i++) {
      if(arr1.indexOf(arr2[i]) == -1 ) {
        return false;
      }
    }
    return true;
}
// Only change code above this line

console.log(myMutation(["Hello", "hey"]));     // Change this line
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zuxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));
module.exports = myMutation;