let rubrics = document.querySelectorAll(".rubrics>a");
let post = document.querySelectorAll(".post");
let lb = document.querySelectorAll(".lb");
let list_post = document.querySelector(".pubulich_list");
let stroki = document.querySelectorAll(".row");

rubrics[0].onclick = function(){
    FilterPost(rubrics[0]);
};
rubrics[1].onclick = function(){
    FilterPost(rubrics[1]);
};
rubrics[2].onclick = function(){
    FilterPost(rubrics[2]);
};
rubrics[3].onclick = function(){
    FilterPost(rubrics[3]);
};
rubrics[4].onclick = function(){
    FilterPost(rubrics[4]);
};
rubrics[5].onclick = function(){
    FilterPost(rubrics[5]);
};

function FilterPost(rublic){
    for(let i=0; i<lb.length; i++){
        for(let j=0; j<lb[i].children.length; j++){
            if(lb[i].children[j].innerHTML == rublic.innerHTML || lb[i].lastChild.innerHTML == rublic.innerHTML){
                post[i].style.display = "block";
                break;
            }else{
                post[i].style.display = "none";
                list_post.style.flexWrap = "wrap";
            }
        }
    }

    if(post[0].style.display == "none" && post[1].style.display == "none"){
        stroki[0].style.display = "none"
    }else{
        stroki[0].style.display = "flex"
    }
    if(post[2].style.display == "none" && post[3].style.display == "none"){
        stroki[1].style.display = "none"
    }else{
        stroki[1].style.display = "flex"
    }
    if(post[4].style.display == "none" && post[5].style.display == "none"){
        stroki[2].style.display = "none"
    }else{
        stroki[2].style.display = "flex"
    }
}

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