function getFirstSelector(sel){
  return document.querySelector(sel);
}

function nestedTarget() {
  var nest = document.querySelector("#nested");
  return nest.querySelector(".target");
}
function deepestChild(){
  //not sure if this is an appropriate solution I don't
  //think i understand the problem well enough 
  var grandDiv = document.querySelector("#grand-node");
  var allDivs = grandDiv.querySelectorAll("div");
  return allDivs[allDivs.length - 1];
}
function increaseRankBy(n) {
  const lis = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
  }
}