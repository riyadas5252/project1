function validation() {
    var location = document.getElementById("exampleLocation1");
    var inputfile = document.getElementById("exampleInputfile1");
  
    if (
      location.value.trim() == "" ||
      inputfile.value.trim() == "" 
     
    ) {
      alert("No blank value allowed");
      return false;
    } else return true;
  }
  



let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");


inputFile.onchange = function(){
profilePic.src = URL.createObjectURL(inputFile.files[0]);

}