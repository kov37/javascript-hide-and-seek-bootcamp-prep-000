function getFirstSelector(sel){
  return document.querySelector(sel);
}

function nestedTarget() {
  var nest = document.querySelector("#nested");
  return nest.querySelector(".target");
}
function deepestChild(){
  var grandDiv = document.querySelector("#grand-node");
  grandDiv.querySelectorAll("div");
}