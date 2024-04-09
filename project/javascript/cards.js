function validation() {
    var card_one = document.getElementById("exampleCard-one1");
    var card_two = document.getElementById("exampleCard-two1");
    var card_three = document.getElementById("exampleCard-three1");
  
    if (
      card_one.value.trim() == "" ||
      card_two.value.trim() == "" ||
      card_three.value.trim() == "" 
     
    ) {
      alert("No blank value allowed");
      return false;
    } else return true;
  }
  