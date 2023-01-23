let closeIcon = document.getElementById("closeIcon");
let overlayAuth = document.querySelector(".overlayAuth");
let mWin = document.querySelector(".mWin");
let enter = document.getElementById("enter");

enter.addEventListener("click", function(){
    openClosemodal();
});

closeIcon.addEventListener("click", function(){
    openClosemodal();
});

function openClosemodal(){
    overlayAuth.classList.toggle("open");
    mWin.classList.toggle("open");
}

let drag_zone = document.querySelector(".drag-zone");

drag_zone.onmousedown = function(e) {
    
  var coords = getCoords(mWin);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;
  document.body.appendChild(mWin);
  console.log("Работает:"+shiftX+shiftY);
  document.querySelector("body").style.userSelect = "none";
  moveAt(e);
  function moveAt(e) {
    mWin.style.left = e.pageX - shiftX + 'px';
    mWin.style.top = e.pageY - shiftY + 'px';
  }
  document.onmousemove = function(e) {
    moveAt(e);
  };
  drag_zone.onmouseup = function() {
    document.querySelector("body").style.userSelect = "unset";
    document.onmousemove = null;
    drag_zone.onmouseup = null;
  };
}
drag_zone.ondragstart = function() {
  return false;
};
function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}