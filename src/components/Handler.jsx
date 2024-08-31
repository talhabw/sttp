import React from 'react';

const Handler = () => {

  var body = document.body

  React.useEffect(() => {
    // Escape to clean the search input
    window.addEventListener('keydown', (event) => {
      console.log(event.code)
      switch (event.code) {
        case "Escape":
          Clock.style.display = "block";
          Search.value = "";
          Search.style.display = "none";
          Search.blur();
        case "ScrollLock":
        case "AltLeft":
        case "AltRight":
        case "ControlLeft":
        case "ControlRight":
        case "ShiftRight":
        case "ShiftLeft":
        case "CapsLock":
        case "Tab":
        case "OsLeft":
        case "OSRight":
        case "Enter":
        case "Backspace":
        case "Meta":
        case "MetaLeft":
          return;
        default: 
          Clock.style.display = "none";
          Search.style.display = "block";
          Search.focus();
      }
    })

    // Check if search input is empty to blur the search field
    Search.addEventListener('keyup', (event) => {
      if (Search.value == "") {
        Search.style.display = "none";
        Search.blur();
        Clock.style.display = "block";
      } else {
        body.style.backgroundImage = "none";
        body.style.backgroundColor = "#191919";
        body.style.color = "#d4d4d4";
      }
    })
    
    Search.addEventListener('blur', () => {
      Search.style.display = "none";
      Clock.style.display = "block";
      Search.value = "";

      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#191919";
      body.style.color = "#d4d4d4";
      Clock.style.color = "#d4d4d4";
    })

  });

      

}

export default Handler
