function openTab(pageName, elmnt){
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
function defaultTab(){
document.getElementsById("defaultOpen").click();
}
