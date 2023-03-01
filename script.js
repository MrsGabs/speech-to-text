//TEXT TO SPEECH

// let msg = new SpeechSynthesisUtterance()
// function fala(){    
//     msg.text = ""
//     window.speechSynthesis.speak(msg)
// }

// window.addEventListener("click", fala)



//SPEECH TO TEXT
let p = document.querySelector("p")
if ('speechSynthesis' in window) {
    // new speech recognition object
    var recognition = new window.webkitSpeechRecognition();
    // Recognition start event handler
    recognition.start = () => { 
        console.log('Voice recognition started. Try speaking into the microphone.');
    }
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        p.innerHTML = transcript
      };
      
      // start recognition
      recognition.start();
      //   .....
    } else {
      console.log("Speech recognition not supported 😢");
      // code to handle error
    }
