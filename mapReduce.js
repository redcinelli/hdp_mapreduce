// to read a file
const fs = require('fs');

// this is the map function
function map(data, func){
    data = data.toString().split(" ");
    console.log("in map");
    // Promise is not necessary but I like promise
    return new Promise(function(resolve, reject) {

      var returnedVal = [];
      //I go through my aray of data and do a function func.
      for (var i = 0; i < data.length; i++) {
        func(data[i]).then(function(x){
          // I push the result of the function on my data to an array.
          returnedVal.push(x);
        });
      }
      // still the promise thingy.
      resolve(returnedVal);
    });
  }
  // this is the sort function
  function sort(data){
    console.log('in sort');
    // I really like promises
    return new Promise(function(resolve, reject) {
      var sorted = {};
      //I go through the data to make all the word that are the same together.
      for (var i = 0; i < data.length; i++) {
        // cause it is an object I get the key.
        for(var k in data[i]){
          // the word is new ? or not ?
          if(!sorted[k]){
            // it is ! I initialize it !
            sorted[k]=[1];
          }else {
            // it aint ! well that is one more.
            sorted[k].push(1);
          }
        }
      }
      // have you ever heard about promises ?
      resolve(sorted);
    });
  }
  function reduce(data){
    console.log("in reduce");
    // promise is fun, promise is love !
    return new Promise(function(resolve, reject) {
      var aggReturned = {};
      // i did a mise en abyme
      for(var k in data){
        // i did the sum of all the array.
        aggReturned[k] = data[k].reduce((a, b) => a + b, 0);
      }
      // wanna know about promises ?
      resolve(aggReturned);
    });
  }
// my function that count words.
function someLolz (data){
    return new Promise(function(resolve, reject) {
      var words = {};
      // damm this is a word.
      words[data]=1;
      resolve(words);
    });
}

function exec (){
  // Owww wow I am reading myself ... lol ?
  var text = fs.readFileSync("./mapReduce.js");
  // see promises are neat ! one line ! such wow !
  map(text,someLolz).then(sort).then(reduce).then((x) => console.log(x));
}

exec();
