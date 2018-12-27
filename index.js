function getFirstSelector(sel){
  return document.querySelector(sel);
}

function nestedTarget() {
  var nest = document.getElementById("#nested");
  return nest.querySelector("div");
}