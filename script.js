//TEXT TO SPEECH

// let msg = new SpeechSynthesisUtterance()
// function fala(){    
//     msg.text = ""
//     window.speechSynthesis.speak(msg)
// }


// window.addEventListener("click", fala)



//SPEECH TO TEXT
let p = document.querySelector("p")
let body = document.querySelector("body")
let img = document.querySelector("img")
let a = document.querySelector("a")

if ("speechSynthesis" in window) {
  // new speech recognition object
  var recognition = new window.webkitSpeechRecognition();
  
  // This will run when the speech recognition service returns a result
  recognition.onstart = function() {
    console.log("Voice recognition started. Try speaking into the microphone.");
  };
  
  recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript.toLowerCase().normalize("NFD").split('.').join("")
    p.innerHTML = transcript

      if (transcript == "dumb") {
        img.src = "https://avatars.githubusercontent.com/u/116086711?v=4"
      } if(transcript == "youtube"){
        window.open("https://www.youtube.com")
      } if (transcript == "soup") {
        img.src = "https://avatars.githubusercontent.com/u/125106946?v=4"
      }

    };
    
    // start recognition
    recognition.start();
    
  } else {
    console.log("Speech recognition not supported 😢");
    // code to handle error
  }
