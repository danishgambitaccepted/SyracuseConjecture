window.alert("There's no key in that web site")

function getCollatzConjectureSequence(value) {
    if (value < 1) {
      throw new Error("Only positive numbers are allowed");
    }
    let count = 0;
  
    console.log("Sequence starts");
    console.log(value);
  
    while (value > 1) {
      value = value % 2 === 0 ? value / 2 : 3 * value + 1;
  
      console.log(value);
  
      count++;
    }
  
    console.log("Sequence ends");
    console.log("Count", count);
  }
  
  getCollatzConjectureSequence(12);