function spinWords(string) {

    var sentence = "";
    var separate = string.split(" ");
    
    for (var i = 0; i < separate.length; i++) {
      if (sentence) sentence += ' ';
      if (separate[i].length >= 5) {
        sentence += separate[i].split("").reverse().join("");
          } else {
        sentence += separate[i];
      }
    }
    return sentence;
  }
  console.log(spinWords("Hey fellow warriors"));
  console.log(spinWords("This is another test"));

  function calSunday(){
    var sundays = 0;
 
for (var year = 1901; year <= 2000; year++) {
    for (var month = 1; month <= 12; month++) {
        if (new Date(year, month, 1).getDay() == 0 ) {
            sundays++;
        }
    }
}
return sundays;
  }
  console.log(calSunday());