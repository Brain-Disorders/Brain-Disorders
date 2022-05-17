function setDarkMode(){
    // Get the checkbox
  var checkBox = document.getElementById("darkmodeswitch");
  var table = document.getElementById("tableswitch");
if (checkBox.checked == true){
    table.classList.add("tabledark");
    table.classList.remove("table");
  } else {
    table.classList.add("table");
    table.classList.remove("tabledark");
  }
var td = document.getElementsByClassName("disordersswitch");
for (let i = 0; i < td.length; i++) {
  console.log(i)
  if (checkBox.checked == true){
    td[i].classList.add("disordersdark");
    td[i].classList.remove("disorders");
  } else {
    td[i].classList.add("disorders");
    td[i].classList.remove("disordersdark");
  }
}
var learn = document.getElementsByClassName("learnswitch");
for (let i = 0; i < learn.length; i++) {
  console.log(i)
  if (checkBox.checked == true){
      learn[i].classList.add("learndark");
      learn[i].classList.remove("learn");
    } else {
      learn[i].classList.add("learn");
      learn[i].classList.remove("learndark");
    }
  }
}
  