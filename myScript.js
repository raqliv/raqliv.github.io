function openTab(pageName, elmnt){
  alert("I'm in the javascript!")
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink")
  for(int i = 0; i < tablinks.length; i++){
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementsById(pageName).style.display = "block";
}
alert("I'm outside of open tab!")
function defaultTab(){
document.getElementsById("defaultOpen").click();
}
