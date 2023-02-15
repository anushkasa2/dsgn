dragElement(document.getElementById("folder1"));
// dragElement(document.getElementById("folder2"));
// dragElement(document.getElementById("folder3"));


// how to do this without messing up the hover styling...
// maybe it should be clickable 


function dragElement(elmnt) {
  var pos3 = 0, pos4 = 0;
  var height = document.body.clientHeight;
  var width = document.body.clientWidth;
  if (document.getElementById(elmnt.id)) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientY;
    pos4 = e.clientX;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();




    console.log('position')
    console.log(pos3+', '+pos4)

    console.log('offset')
    console.log(elmnt.offsetTop )
    console.log(elmnt.offsetLeft )
    // set the element's new position:
    elmnt.style.top = (pos3) + "px";
    elmnt.style.left = (pos4) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}